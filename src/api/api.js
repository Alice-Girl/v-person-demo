/**
 * 整个项目API的统一管理
 */

import request from "../untils/request";

export default {
  // q请求首页表格数据
  getTableData() {
    return request({
      url: '/home/getTableData',
      method: 'get',
      mock: false
    })
  },
  getCountData() {
    return request({
      url: '/home/getCountData',
      method: 'get',
      mock: false
    })
  },
  getChartData() {
    return request({
      url: '/home/getChartData',
      method: 'get',
      mock: false
    })
  },
  getUserData(data) {
    return request({
      url: '/home/getUserData',
      method: 'get',
      mock: false,
      data
    })
  },
  deleteUser(data) {
    return request({
      url: '/user/deleteUser',
      method: 'get',
      mock: false,
      data
    })
  },
  addUser(data) {
    return request({
      url: '/user/addUser',
      method: 'post',
      mock: false,
      data
    })
  },
  editUser(data) {
    return request({
      url: '/user/editUser',
      method: 'post',
      mock: false,
      data
    })
  },
  getMenu(params) {
    return request({
      url: '/permission/getMenu',
      method: 'post',
      data: params
    })
}
}