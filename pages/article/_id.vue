<template>
  <div class="page wec-max__width" ref="scrollWarpper">
    <div  class="page-content content-container output_wrapper">
      <h1>{{ article.title }}</h1>
      <p ref="article" v-html="articleContent"></p>
    </div>
    <wec-slider :menus="menuList" @menu="handleMenuClick"></wec-slider>
  </div>
</template>

<script>
import axios from 'axios'
import hljs from 'highlight.js'
import '~/assets/markdown.css'
import WecSlider from '~/components/WecSlider'
export default {
  components: {
    WecSlider
  },
  data () {
    return {
      id: '',
      article: {},
      articleContent: '',
      menuList: []
    }
  },
  validate ({ params, query }) {
    // console.log(this, params, query)
    return true // 如果参数有效
  },
  methods: {
    handleMenuClick (menu) {
      console.log('我回来了', menu)
      // this.$refs.scrollWarpper.scrollTo(menu.top, 0)
      window.scrollTo(0, menu.top - 20)
      // window.scrollTo(0, document.documentElement.clientHeight)
    },
    /**
    * 获取文章详情
    **/
    async getArticle (id) {
      const { data } = await axios.get('http://localhost:8000/api/blog/v1/article/' + id)
      this.article = data
      // Actual default values
      const md = require('markdown-it')({
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) {}
          }
          return '' // use external default escaping
        }
      })
      this.articleContent = md.render(data.content)
      // 生成目录树
      this.$nextTick(() => {
        this.renderArticleMenu(this.articleContent)
      })
    },
    /**
    * 生成文章目录树
    **/
    renderArticleMenu (content) {
      const articleContent = this.$refs.article
      console.log(articleContent)
      const titles = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
      console.log(titles)
      if (titles.length === 0) {
        // return
      }

      titles.forEach((ti, index) => {
        console.log(ti.nodeName)
        const type = ti.nodeName.replace('H', '')
        this.menuList.push({
          title: ti.textContent,
          id: index,
          type,
          top: ti.offsetTop
        })
      })

      console.log(this.menuList)
    }
  },
  mounted () {
    // console.log('mounted', this.$route.params)
    this.id = this.$route.params.id
    this.getArticle(this.id)
  }
}
</script>
