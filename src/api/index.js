import request from './../utils/request'

/**
 * 获取轮播图数据
 */
export function getBannerlist () {
  // 观察实际的接口文档，确定数据请求方案
  return request.get('/banner')
}

/**
 * 获取首页推荐列表的数据
 */
export function getProlist (params) { // 接收请求的实参
  return request.get('/pro/list', { params })
}

/**
 * 详情获取的数据接口
 */
export function getProDetail (params) {
  return request.get('/pro/detail', { params })
}
