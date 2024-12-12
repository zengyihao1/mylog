import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import http from './utils/http'
import * as format from './utils/format'
import * as validate from './utils/validate'
import { APP_NAME } from './constants'

const app = createApp(App)

// 全局属性
app.config.globalProperties.$http = http
app.config.globalProperties.$format = format
app.config.globalProperties.$validate = validate
app.config.globalProperties.$constants = {
  APP_NAME,
  // ... 其他常量
}

// ... 其他配置 