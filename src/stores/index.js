import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home',
      }
    ],
    currentMenu: null,
    menuList: [],
    token: '',
    routerList: []
  }
}

export const useAllDataStore = defineStore('allData', () => {
  // ref state属性
  // computed getters
  // function actions
  const state = ref(initState())

  // 解决路由刷新问题
  watch(
    state,
    (newVal) => {
      if (!newVal.token) {
        localStorage.setItem('isCollapse', newVal.isCollapse)
      }
    }
  )

  const selectMenu = (val) => {
    if(val.name === 'home') {
      state.value.currentMenu = null
    } else {
      let index = state.value.tags.findIndex((item) => item.name === val.name);
      index === -1 ? state.value.tags.push(val) : ''
    }
  }

  // 关闭tags
  const updateTags = (tag) => {
    let index = state.value.tags.findIndex((item) => item.name === tag.name);
    index !== -1 ? state.value.tags.splice(index, 1) : ''
  }
  // 获取菜单
  const updateMenuList = (val) => {
    state.value.menuList = val
  }

  // 动态添加路由
  const addMenu = (router) => {
    const menu = state.value.menuList
    // **/ 代表一个或多个文件
    const module = import.meta.glob('../views/**/*.vue')
    const routeArr = []
    menu.forEach((item) => {
      if (item.children) {
        item.children.forEach((val) => {
          let url = `../views/${val.url}.vue`
          val.component = module[url]
          routeArr.push(...item.children)
        })
      } else {
        let url = `../views/${item.url}.vue`
        item.component = module[url]
        routeArr.push(item)
      }
    })
    state.value.routerList = []
    console.log(router, '------router--')

    // 处理多账号 问题 Start
    let routers = router.getRoutes()
    routers.forEach((item) => {
      if(item.name == 'login' || item.name == 'main') {
        return
      } else {
        router.removeRoute(item.name)
      }
    })
    // end

    routeArr.forEach((item) => {
      state.value.routerList.push(router.addRoute("main", item))
    })
  }

  return {
    state,
    selectMenu,
    updateTags,
    updateMenuList,
    addMenu
  }
}) 