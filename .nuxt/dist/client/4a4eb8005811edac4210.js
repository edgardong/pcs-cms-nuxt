(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1069:function(t,e,n){var content=n(1078);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("dadcff06",content,!0,{sourceMap:!1})},1070:function(t,e,n){"use strict";n(87);var r,o=n(20),article=(n(1074),n(1071)),c={props:{menus:{type:Array,required:!1,default:function(){return[]}},type:{type:Number,required:!1,default:1},category:{type:[Number,String],required:!1}},data:function(){return{latest:[],hot:[],relevant:[]}},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==this.type){t.next=6;break}return t.next=3,Object(article.c)({});case 3:e=t.sent,n=e.data,this.latest=n;case 6:if(2!==this.type){t.next=12;break}return t.next=9,Object(article.d)({category:this.category});case 9:r=t.sent,o=r.data,this.relevant=o;case 12:return t.next=14,Object(article.b)({});case 14:c=t.sent,l=c.data,this.hot=l;case 17:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{handleMenuClick:function(menu){this.$emit("menu",menu)}}},l=(n(1077),n(17)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wec-slider"},[1==t.type?n("div",{staticClass:"item"},[n("div",{staticClass:"title"},[t._v("\n      简介\n    ")]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n      本博客系统使用 vue + nuxt + koa2 + mysql 搭建，由于本人不太勤快，所以历经九九八十一难终于出来第一版，目前仅有博客/作品/地图模块可使用，其他随笔/相册/分享等功能模块还在开发中。如果有什么问题，欢迎大家来稍扰哦～\n    ")])]):t._e(),t._v(" "),t._e(),t._v(" "),2==t.type?n("div",{staticClass:"item"},[n("div",{staticClass:"title"},[t._v("\n      相关文章\n    ")]),t._v(" "),n("div",{staticClass:"hotContent"},t._l(t.relevant,(function(li){return n("nuxt-link",{key:li.id,staticClass:"article",attrs:{to:"/"+li.id+".html"}},[n("a-tooltip",{attrs:{title:li.title}},[t._v("\n          "+t._s(li.title)+"\n        ")])],1)})),1)]):t._e(),t._v(" "),1==t.type?n("div",{staticClass:"item"},[n("div",{staticClass:"title"},[t._v("\n      最近文章\n    ")]),t._v(" "),n("div",{staticClass:"hotContent"},t._l(t.latest,(function(li){return n("nuxt-link",{key:li.id,staticClass:"article",attrs:{to:"/"+li.id+".html"}},[n("a-tooltip",{attrs:{title:li.title}},[t._v("\n          "+t._s(li.title)+"\n        ")])],1)})),1)]):t._e(),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"title"},[t._v("\n      热门文章\n    ")]),t._v(" "),n("div",{staticClass:"hotContent"},t._l(t.hot,(function(li){return n("nuxt-link",{key:li.id,staticClass:"article",attrs:{to:"/"+li.id+".html"}},[n("a-tooltip",{attrs:{title:li.title}},[t._v("\n          "+t._s(li.title)+"\n        ")])],1)})),1)]),t._v(" "),t.menus.length>0&&2==t.type?n("ul",{staticClass:"item menu"},t._l(t.menus,(function(menu,e){return n("li",{key:e,staticClass:"menu-item",style:{marginLeft:8*(menu.type-1)+"px"},on:{click:function(e){return t.handleMenuClick(menu)}}},[t._v("\n      "+t._s(menu.title)+"\n    ")])})),0):t._e()])}),[],!1,null,"4e55634e",null);e.a=component.exports},1071:function(t,e,n){"use strict";n(46);var r=n(114),o=n.n(r),c=n(246);console.log("...",c.a);var l=o.a.create({baseUrl:c.a.BASE_URL}),d=function(t,e){return l({url:t,method:"GET",params:e})};o.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return m}));var f=function(t){return d("".concat(c.a.BASE_URL,"api/blog/v1/article/list"),t)},h=function(t){return d("".concat(c.a.BASE_URL,"api/blog/v1/article/latest"),t)},v=function(t){return d("".concat(c.a.BASE_URL,"api/blog/v1/article/hot"),t)},m=function(t){return d("".concat(c.a.BASE_URL,"api/blog/v1/article/relevant"),t)}},1074:function(t,e,n){"use strict";var r=n(18),o=n(58),c=n(69),l=n(536),d=n(166),f=n(35),h=n(115).f,v=n(167).f,m=n(31).f,x=n(1075).trim,_=r.Number,y=_,C=_.prototype,k="Number"==c(n(248)(C)),w="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=w?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(k?f((function(){C.valueOf.call(n)})):"Number"!=c(n))?l(new y(I(e)),n,_):I(e)};for(var A,N=n(28)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;N.length>$;$++)o(y,A=N[$])&&!o(_,A)&&m(_,A,v(y,A));_.prototype=C,C.constructor=_,n(36)(r,"Number",_)}},1075:function(t,e,n){var r=n(27),o=n(68),c=n(35),l=n(1076),d="["+l+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},1076:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},1077:function(t,e,n){"use strict";var r=n(1069);n.n(r).a},1078:function(t,e,n){(t.exports=n(44)(!1)).push([t.i,".wec-slider[data-v-4e55634e]{position:absolute;top:0;right:0;width:240px}.item[data-v-4e55634e]{background-color:#fff;padding:0 15px 15px;margin-bottom:20px}.item .title[data-v-4e55634e]{border-bottom:1px solid hsla(0,0%,59.2%,.1);height:40px;line-height:40px;font-size:16px;font-weight:500;color:#333}.item .content[data-v-4e55634e]{overflow:hidden;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.item .content[data-v-4e55634e],.item .hotContent[data-v-4e55634e]{font-size:14px;color:#666;letter-spacing:0;margin-top:6px}.item .hotContent .article[data-v-4e55634e]{overflow:hidden;display:block;text-overflow:ellipsis;white-space:nowrap;margin:6px 0}.item.menu[data-v-4e55634e]{padding:15px}.item .menu-item[data-v-4e55634e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#000;cursor:pointer}",""])},1083:function(t,e,n){var content=n(1404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("6759f5ab",content,!0,{sourceMap:!1})},1403:function(t,e,n){"use strict";var r=n(1083);n.n(r).a},1404:function(t,e,n){(t.exports=n(44)(!1)).push([t.i,".sub-header{background-color:#fff;position:fixed;top:60px;left:0;right:0;z-index:999}.main-container{height:calc(100vh - 55px);margin-top:55px}.main-category{display:flex;max-width:960px;margin:0 auto;width:100%;height:40px;z-index:100;transition:all .2s;transform:translateZ(0)}.category{display:inline-block;height:100%;align-items:center;display:flex;flex-shrink:0;font-size:14px;color:#71777c;padding:0 1rem;cursor:pointer}.category.active{color:#1890ff}.main-tags{max-width:960px;margin:0 auto 15px}.main-tags .tag{display:inline-block;padding:2px 6px;margin-right:15px;background-color:#fff;border-radius:15px;color:#8a9aa9;cursor:pointer;font-size:12px}.tag.active{color:#fff;background-color:#1890ff}.content-container{width:700px;word-break:break-all;display:inline-block;padding:0 20px}.category:hover,.tag:hover{color:#1890ff}.tag:hover.active{color:#fff}.pages .page{padding:15px 10px;margin-bottom:12px;background-color:#fff}.page .title{color:#333;font-weight:500;font-size:16px;margin-bottom:10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page .title:hover{color:#1890ff}.page .time{color:#666;font-size:14px}.author,.read_count{font-size:14px;margin-left:10px}.empty_remark{color:#666;padding:10px 15px;text-align:center;box-sizing:border-box;font-size:16px;letter-spacing:2px;font-family:Arial,Microsoft YaHei,黑体,宋体,sans-serif;background:linear-gradient(90deg,#26a65b,#09f,#0cf);-webkit-background-clip:text;color:transparent}",""])},1409:function(t,e,n){"use strict";n.r(e);n(247),n(165),n(87);var r,o,c,l=n(20),d=n(114),f=n.n(d),h=n(246),article=n(1071),v={components:{WecSlider:n(1070).a},data:function(){return{tags:[],topCategory:"",category:"",latest:[]}},asyncData:(c=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,e.params,t.next=3,n.$axios.get("api/blog/v1/category/");case 3:return r=t.sent,o=r.data,t.abrupt("return",{categorys:o});case 6:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),head:function(){var base=this.$store.state.base;return{title:"".concat(base.name).concat(base.split||"-").concat(base.title),meta:[{hid:"keywords",name:"keywords",content:base.keywords},{hid:"description",name:"description",content:base.description}],link:[{rel:"icon",type:"image/x-icon",href:base.ico}]}},fetch:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,e.params,n.dispatch("article/getArticleList"),t.next=4,f.a.get("".concat(h.a.BASE_URL,"api/blog/v1/base/base"));case 4:r=t.sent,n.commit("setBase",r.data.data);case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),methods:{handlePageChange:function(t){this.$store.dispatch("article/getArticleList",t)},handleArticleDetail:function(article){window.open("/"+article.id+".html","_blank")},handleCategoryChage:function(t,e){null==t?(this.topCategory="",this.category="",this.tags=[],this.$store.commit("category/setIndex",null)):(this.tags=t.children,this.$store.commit("category/setIndex",e),this.topCategory=t.id||"",this.category=""),this.$store.commit("tag/setIndex",null),this.getCagtegoryList()},hanldeTagChange:function(t,e){null==t?(this.category="",this.$store.commit("tag/setIndex",null)):(this.$store.commit("tag/setIndex",e),this.category=t.id||""),this.getCagtegoryList()},getCagtegoryList:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var e,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.category||this.topCategory||"",t.next=3,Object(article.a)({category:e});case 3:n=t.sent,data=n.data,this.$store.commit("article/setArticle",data.data);case 6:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},m=(n(1403),n(17)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("div",{staticClass:"sub-header"},[n("div",{staticClass:"main-category"},[n("span",{staticClass:"category",class:{active:null==t.$store.state.category.index},on:{click:function(e){return t.handleCategoryChage()}}},[t._v("全部")]),t._v(" "),t._l(t.categorys,(function(e,r){return n("span",{key:e.id,staticClass:"category",class:{active:t.$store.state.category.index==r},on:{click:function(n){return t.handleCategoryChage(e,r)}}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),n("div",{staticClass:"main-tags"},[t.tags.length>0?n("span",{staticClass:"tag",class:{active:null==t.$store.state.tag.index},on:{click:function(e){return t.hanldeTagChange()}}},[t._v("全部")]):t._e(),t._v(" "),t._l(t.tags,(function(e,r){return n("span",{key:e.id,staticClass:"tag",class:{active:t.$store.state.tag.index==r},on:{click:function(n){return t.hanldeTagChange(e,r)}}},[t._v(t._s(e.name))])}))],2),t._v(" "),n("div",{staticClass:"wec-max__width"},[n("div",{staticClass:"content-container"},[t.$store.state.article.list&&t.$store.state.article.list.length>0?n("ul",{staticClass:"pages"},t._l(t.$store.state.article.list,(function(article){return n("li",{key:article.id,staticClass:"page",on:{click:function(e){return t.handleArticleDetail(article)}}},[n("div",{staticClass:"title"},[t._v("\n            "+t._s(article.title)+"\n          ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(article.create_time))]),t._v(" "),n("span",{staticClass:"author"},[n("a-icon",{attrs:{type:"user"}}),t._v("\n            "+t._s(article.author||"不再做书生")+"\n          ")],1),t._v(" "),n("span",{staticClass:"read_count"},[n("a-icon",{attrs:{type:"eye"}}),t._v("\n            "+t._s(article.read_count||1)+"\n          ")],1)])})),0):n("div",{staticClass:"empty_remark"},[t._v("\n        暂时没有找到您想看的信息呢，休息一下在看看其他的吧～\n      ")]),t._v(" "),n("div",{staticClass:"pagination-box"},[n("a-pagination",{attrs:{size:"small",current:t.$store.state.article.pageInfo.page,total:t.$store.state.article.pageInfo.total,"page-size":t.$store.state.article.pageInfo.size,"show-total":function(e){return"共 "+t.$store.state.article.pageInfo.total+" 项"}},on:{change:t.handlePageChange}})],1)]),t._v(" "),n("wec-slider")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);