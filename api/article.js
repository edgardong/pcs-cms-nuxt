import { get } from '../utils/request'
import config from '../config/index'

export const getArticleList = params =>
  get(`api/blog/v1/article/list`, params)

/**
   * 获取最近文章
   * @param {*} params
   */
export const getLatestArticle = params =>
  get(`api/blog/v1/article/latest`, params)

/**
   * 获取热门文章
   * @param {} params
   */
export const getHotArticle = params =>
  get(`api/blog/v1/article/hot`, params)

/**
   * 获取相关文章
   * @param {*} params
   */
export const getRelevantArticle = params =>
  get(`api/blog/v1/article/relevant`, params)
