<template>
  <div class="main-container">
    <div class="sub-header">
      <div class="main-category">
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
      <span v-if="tags.length>0" class="tag" :class="{'active':$store.state.tag.index==null}">全部</span>
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
        <ul class="pages">
          <li
            v-for="article in $store.state.article.list"
            :key="article.id"
            class="page"
            @click="handleArticleDetail(article)"
          >
            <!-- // <nuxt-link :to="'/article/'+article.id"> -->
              <div class="title">{{ article.title }}</div>
              <span class="time">{{ article.create_time }}</span>
              <span class="author"><a-icon type="user" />{{ article.author }}</span>
              <span class="read_count"><a-icon type="eye" />{{ article.read_count }}</span>
            <!-- </nuxt-link> -->
          </li>
        </ul>
      </div>
      <wec-slider></wec-slider>
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
      tags: []
    }
  },
  asyncData ({ params }) {
    return axios
      .get('http://localhost:8000/api/blog/v1/category/')
      .then((resp) => {
        // console.log('....', resp)
        return { categorys: resp.data }
      })
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get(
      'http://localhost:8000/api/blog/v1/article/pagination'
    )
    store.commit('article/setArticle', data)
  },
  methods: {
    /**
    * 查看文章详情
    **/
    handleArticleDetail (article) {
      window.open('/article/' + article.id, '_blank')
    },
    handleCategoryChage (item, index) {
      this.tags = item.children
      this.$store.commit('category/setIndex', index)
      this.$store.commit('tag/setIndex', null)
    },
    hanldeTagChange (item, index) {
      this.$store.commit('tag/setIndex', index)
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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

.tag {
  display: inline-block;
  padding: 2px 8px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 15px;
  color: #8a9aa9;
  cursor: pointer;
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
  background-color: #fff;
  margin: 20px 0;
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
.author i{font-size: 12px;}
</style>
