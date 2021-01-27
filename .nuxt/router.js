import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ff7e4858 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _690508c4 = () => interopDefault(import('../pages/essay.vue' /* webpackChunkName: "pages/essay" */))
const _0c9e081b = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _00e63fb0 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _c00e92ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2b458b41 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _ff7e4858,
      name: "about"
    }, {
      path: "/essay",
      component: _690508c4,
      name: "essay"
    }, {
      path: "/test",
      component: _0c9e081b,
      name: "test"
    }, {
      path: "/article/:id?",
      component: _00e63fb0,
      name: "article-id"
    }, {
      path: "/",
      component: _c00e92ce,
      name: "index"
    }, {
      path: "/:id",
      component: _2b458b41,
      name: "id"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
