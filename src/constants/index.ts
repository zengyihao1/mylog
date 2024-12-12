export const APP_NAME = '个人博客'

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
  SETTINGS: 'settings'
} as const

export const BREAKPOINTS = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
} as const

export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: '网络错误，请检查网络连接',
  SERVER_ERROR: '服务器错误，请稍后重试',
  UNAUTHORIZED: '未授权，请重新登录',
  FORBIDDEN: '无权访问',
  NOT_FOUND: '资源不存在',
  TIMEOUT: '请求超时，请重试'
} as const

export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  ARTICLE_DETAIL: '/article/:id',
  PHOTOS: '/photos',
  ABOUT: '/about'
} as const 