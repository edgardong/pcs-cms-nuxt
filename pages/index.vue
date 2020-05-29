<template>
  <div class="main-container">
    <div class="sub-header">
      <div class="main-category">
        <span
          class="category"
          :class="{'active':$store.state.category.index==null}"
          @click="handleCategoryChage()"
        >全部</span>
        <span
          v-for="(item,index) in categorys"
          :key="item.id"
          class="category"
          :class="{'active':$store.state.category.index==index}"
          @click="handleCategoryChage(item,index)"
        >{{ item.name }}</span>
      </div>
    </div>
    <div class="main-tags">
      <span
        v-if="tags.length>0"
        class="tag"
        :class="{'active':$store.state.tag.index==null}"
        @click="hanldeTagChange()"
      >全部</span>
      <span
        v-for="(tag,index) in tags"
        :key="tag.id"
        class="tag"
        :class="{'active':$store.state.tag.index==index}"
        @click="hanldeTagChange(tag,index)"
      >{{ tag.name }}</span>
    </div>
    <div class="wec-max__width">
      <div class="content-container">
        <ul v-if="$store.state.article.list&&$store.state.article.list.length>0" class="pages">
          <li
            v-for="article in $store.state.article.list"
            :key="article.id"
            class="page"
            @click="handleArticleDetail(article)"
          >
            <!-- // <nuxt-link :to="'/article/'+article.id"> -->
            <div class="title">
              {{ article.title }}
            </div>
            <span class="time">{{ article.create_time }}</span>
            <span class="author">
              <a-icon type="user" />
              {{ article.author||'系统管理员' }}
            </span>
            <span class="read_count">
              <a-icon type="eye" />
              {{ article.read_count || 1 }}
            </span>
            <!-- </nuxt-link> -->
          </li>
        </ul>
        <div v-else class="empty_remark">
          暂时没有找到您想看的信息呢，休息一下在看看其他的吧～
        </div>
      </div>
      <wec-slider />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import WecSlider from '~/components/WecSlider'
export default {
  components: {
    WecSlider
  },
  data () {
    return {
      tags: [],
      topCategory: '',
      category: ''
    }
  },
  asyncData ({ params }) {
    return axios
      .get('http://localhost:8000/api/blog/v1/category/')
      .then((resp) => {
        return { categorys: resp.data }
      })
  },
  head () {
    const base = this.$store.state.base
    return {
      title: `${base.name}${base.split || '-'}${base.title}`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: base.keywords },
        { hid: 'description', name: 'description', content: base.description }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: base.ico
        }
      ]
    }
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get(
      'http://localhost:8000/api/blog/v1/article/pagination'
    )
    store.commit('article/setArticle', data.data)

    // 获取网站基本信息
    const baseData = await axios.get(
      'http://localhost:8000/api/blog/v1/base/base'
    )
    store.commit('setBase', baseData.data.data)
  },
  methods: {
    /**
     * 查看文章详情
     **/
    handleArticleDetail (article) {
      window.open('/article/' + article.id + '.html', '_blank')
    },
    handleCategoryChage (item, index) {
      if (item == null) {
        this.topCategory = ''
        this.category = ''
        this.tags = []
        this.$store.commit('category/setIndex', null)
      } else {
        this.tags = item.children
        this.$store.commit('category/setIndex', index)
        this.topCategory = item.id || ''
        this.category = ''
      }
      this.$store.commit('tag/setIndex', null)
      this.getCagtegoryList()
    },
    hanldeTagChange (item, index) {
      if (item == null) {
        this.category = ''
        this.$store.commit('tag/setIndex', null)
      } else {
        this.$store.commit('tag/setIndex', index)
        this.category = item.id || ''
        console.log('category', item.id)
      }

      this.getCagtegoryList()
    },
    async getCagtegoryList () {
      const category = this.category || this.topCategory || ''
      const { data } = await axios.get(
        'http://localhost:8000/api/blog/v1/article/list?category=' + category
      )

      this.$store.commit('article/setArticle', data.data)
    }
  }
}
</script>

<style>
.sub-header {
  background-color: #fff;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
}
.main-container {
  height: calc(100% - 55px);
  /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); */
  margin-top: 55px;
}
.main-category {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  height: 40px;
  z-index: 100;
  transition: all 0.2s;
  transform: translateZ(0);
}

.category {
  display: inline-block;
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  color: #71777c;
  padding: 0 1rem;
  cursor: pointer;
}

.category.active {
  color: #1890ff;
}

.main-tags {
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 15px;
}

.main-tags .tag {
  display: inline-block;
  padding: 2px 6px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 15px;
  color: #8a9aa9;
  cursor: pointer;
  font-size: 12px;
}

.tag.active {
  color: #fff;
  background-color: #1890ff;
}

.content-container {
  width: 700px;
  word-break: break-all;
  display: inline-block;
  padding: 0 20px;
}

.category:hover,
.tag:hover {
  color: #1890ff;
}
.tag:hover.active {
  color: #fff;
}
.pages .page {
  padding: 15px 10px;
  margin-bottom: 12px;
  background-color: #fff;
}
.page .title {
  color: #333;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}
.page .title:hover {
  color: #1890ff;
}
.page .time {
  color: #666;
  font-size: 14px;
}
.author,.read_count {font-size: 14px;}

.empty_remark {
  color: #666666;
  padding: 10px 15px;
  text-align: center;
  box-sizing: border-box;
  font-size: 16px;
  letter-spacing: 2px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  background: linear-gradient(to right, #26a65b, #0099ff, #00ccff);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
