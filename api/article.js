import { get } from '../utils/request'
import config from '../config/index'

export const getArticleList = params =>
  get(`${config.BASE_URL}api/blog/v1/article/list`, params)

/**
   * 获取最近文章
   * @param {*} params
   */
export const getLatestArticle = params =>
  get(`${config.BASE_URL}api/blog/v1/article/latest`, params)

/**
   * 获取热门文章
   * @param {} params
   */
export const getHotArticle = params =>
  get(`${config.BASE_URL}api/blog/v1/article/hot`, params)

/**
   * 获取相关文章
   * @param {*} params
   */
export const getRelevantArticle = params =>
  get(`${config.BASE_URL}api/blog/v1/article/relevant`, params)
