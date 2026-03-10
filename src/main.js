import { createApp } from 'vue'
import { createPinia } from 'pinia'
import request from './untils/request'
import router from './router'

import "@/assets/less/index.less"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// mock 数据
import "@/api/mock.js"

import api from './api/api'

// createApp(App).mount('#app')
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$api = api; // 全局挂载

 app.mount('#app')


// 引入icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

