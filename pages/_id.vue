<template>
  <div ref="scrollWarpper" class="page wec-max__width">
    <div class="page-content content-container output_wrapper">
      <h1>{{ article.title }}</h1>
      <p ref="article" v-html="articleContent" />
    </div>
    <wec-slider v-if="shwoSlide" :category="articleCategory" :type="2" :menus="menuList" @menu="handleMenuClick" />
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import axios from 'axios'
import hljs from 'highlight.js'
import config from '~/config'
import '~/assets/markdown.css'
// 引入默认样式
import 'highlight.js/styles/default.css'
// 引入个性化的vs2015样式
import 'highlight.js/styles/routeros.css'
import WecSlider from '~/components/WecSlider'
export default {
  components: {
    WecSlider
  },
  data () {
    return {
      id: '',
      shwoSlide: false,
      article: {},
      articleContent: '',
      articleCategory: '',
      menuList: []
    }
  },
  head () {
    const base = this.$store.state.base
    return {
      title: this.article.title + '|' + base.name + base.split + base.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        { hid: 'keywords', name: 'keywords', content: this.article.keywords }
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
    // 获取网站基本信息
    const baseData = await axios.get(
      `${config.BASE_URL}api/blog/v1/base/base`
    )
    store.commit('setBase', baseData.data.data)
  },
  validate ({ params, query }) {
    return true // 如果参数有效
  },
  mounted () {
    this.id = this.$route.params.id
    this.getArticle(this.id)
  },
  methods: {
    handleMenuClick (menu) {
      // this.$refs.scrollWarpper.scrollTo(menu.top, 0)
      window.scrollTo(0, menu.top + 24)
      // window.scrollTo(0, document.documentElement.clientHeight)
    },
    /**
     * 获取文章详情
     **/
    async getArticle (id) {
      const { data } = await axios.get(
        `${config.BASE_URL}api/blog/v1/article/${id}`
      )
      this.article = data
      // Actual default values
      if (data.content_type === 2) {
        // const md = require('markdown-it')({
        //   highlight: (str, lang) => {
        //     if (lang && hljs.getLanguage(lang)) {
        //       try {
        //         return hljs.highlight(lang, str).value
        //       } catch (__) {}
        //     }
        //     return '' // use external default escaping
        //   }
        // })
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          typographer: true,
          highlight: (str, lang) => {
            // 此处判断是否有添加代码语言
            if (lang && hljs.getLanguage(lang)) {
              try {
                // 得到经过highlight.js之后的html代码
                const preCode = hljs.highlight(lang, str, true).value
                // 以换行进行分割
                const lines = preCode.split(/\n/).slice(0, -1)
                // 添加自定义行号
                let html = lines.map((item, index) => {
                  return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
                }).join('')
                html = '<ol>' + html + '</ol>'
                // 添加代码语言
                if (lines.length) {
                  html += '<b class="name">' + lang + '</b>'
                }
                return '<pre class="hljs"><code>' +
                  html +
                  '</code></pre>'
              } catch (__) {}
            }
            // 未添加代码语言，此处与上面同理
            const preCode = md.utils.escapeHtml(str)
            const lines = preCode.split(/\n/).slice(0, -1)
            let html = lines.map((item, index) => {
              return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
            }).join('')
            html = '<ol>' + html + '</ol>'
            return '<pre class="hljs"><code>' +
              html +
              '</code></pre>'
          }
        })
        // 通常的默认值们
        // const md = require('markdown-it')({
        //   highlight: (str, lang) => {
        //     if (lang && hljs.getLanguage(lang)) {
        //       try {
        //         return '<pre class="hljs"><code>' +
        //               hljs.highlight(lang, str, true).value +
        //               '</code></pre>'
        //       } catch (__) {}
        //     }

        //     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        //   }
        // })
        // this.articleContent = md.render(`@[toc]${data.content}`)
        this.articleContent = md.render(data.content)
      } else {
        this.articleContent = data.content
      }

      const CATE = data.categorys.split(',').join(data.half_categorys.split(','))
      const index = Math.ceil(Math.random() * 10) % CATE.length
      this.articleCategory = CATE[index]
      this.shwoSlide = true
      // 生成目录树
      this.$nextTick(() => {
        this.renderArticleMenu(this.articleContent)
        hljs.initHighlighting()
      })
    },
    /**
     * 生成文章目录树
     **/
    renderArticleMenu (content) {
      // const articleContent = this.$refs.article
      const titles = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
      if (titles.length === 0) {
        // return
      }

      titles.forEach((ti, index) => {
        const type = ti.nodeName.replace('H', '')
        this.menuList.push({
          title: ti.textContent,
          id: index,
          type,
          top: ti.offsetTop
        })
      })
    }
  }
}
</script>
<style>
/* @import 'highlight.js/styles/default.css'; */

.page-content {
  background-color: #fff;
  margin-top: 20px;
}
.page .wec-slider {
  top: 20px;
}

/* // 添加行号样式
// pre.hljs {
//   padding: 8px 2px;
//   border-radius: 5px;
//   position: relative;
//   ol {
//     list-style: decimal;
//     margin: 0;
//     margin-left: 40px;
//     padding: 0;
//     li {
//       list-style: decimal-leading-zero;
//       position: relative;
//       padding-left: 10px;
//       .line-num {
//         position: absolute;
//         left: -40px;
//         top: 0;
//         width: 40px;
//         height: 100%;
//         border-right: 1px solid rgba(0, 0, 0, .66);
//       }
//     }
//   }
//   b.name {
//     position: absolute;
//     top: 2px;
//     right: 12px;
//     z-index: 10;
//     color: #999;
//     pointer-events: none;
//   }
// } */
</style>
