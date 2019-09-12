<template>
  <div class="main-container">
    <div class="sub-header">
      <div class="main-category">
        <span v-for="item in categorys" :key="item.id" class="category" @click="handleCategoryChage(item)">  {{ item.name }} </span>
      </div>
    </div>
    <div class="main-tags">
      <span v-for="tag in tags" :key="tag.id" class="tag"> {{ tag.name }}</span>
    </div>
    <div class="wec-max__width">
      <ul class="pages">
        <li v-for="article in $store.state.article.list" :key="article.id" class="page">
          {{ article.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      tags: []
    }
  },
  asyncData ({ params }) {
    return axios.get('http://localhost:8000/api/blog/v1/category/').then((resp) => {
      // console.log('....', resp)
      return { categorys: resp.data }
    })
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get('http://localhost:8000/api/blog/v1/article/pagination')
    store.commit('article/setArticle', data)
  },
  methods: {
    handleCategoryChage (item) {
      this.tags = item.children
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
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  margin-top: 55px;
}
.main-category {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  height: 40px;
  z-index: 100;
  transition: all .2s;
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

.category:hover, .tag:hover {
  color:#1890ff;
}

</style>
