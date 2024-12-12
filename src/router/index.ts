import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**
 * 扩展 vue-router 的 RouteMeta 接口
 * 添加自定义的元数据字段
 */
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    requiresAuth?: boolean
  }
}

/**
 * 路由配置数组
 * 定义应用的所有路由规则
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页',
      description: '个人博客首页，展示最新文章和照片'
    }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue'),
    meta: {
      title: '文章列表',
      description: '所有文章的列表页面，支持分类筛选'
    }
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetail.vue'),
    meta: {
      title: '文章详情',
      description: '文章的详细内容页面'
    }
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos.vue'),
    meta: {
      title: '照片墙',
      description: '展示个人摄影作品的照片墙'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: '设置',
      description: '个性化设置页面'
    }
  }
]

/**
 * 创建路由实例
 */
const router = createRouter({
  // 使用 HTML5 历史模式
  history: createWebHistory(),
  routes,
  // 滚动行为配置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果存在保存的位置（例如使用浏览器的后退按钮），则恢复到该位置
      return savedPosition
    } else {
      // 否则滚动到页面顶部
      return { top: 0 }
    }
  }
})

/**
 * 全局前置守卫
 * 在路由跳转前执行
 */
router.beforeEach((to, from, next) => {
  // 更新页面标题
  document.title = to.meta.title 
    ? `${to.meta.title} - 个人博客` 
    : '个人博客'
  
  // 更新页面描述
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      'content', 
      to.meta.description?.toString() || '个人博客，分享技术文章和生活随笔'
    )
  }

  next()
})

export default router 