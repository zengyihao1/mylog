/**
 * 文章类型定义
 */
export interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  cover: string
  date: string
  categoryId: string
  likes: number
  liked?: boolean
  readTime?: number
  author?: {
    name: string
    avatar: string
    bio: string
  }
}

/**
 * 照片类型定义
 */
export interface Photo {
  id: number
  title: string
  description: string
  url: string
  thumbnail: string
  albumId: string
  date: string
  likes: number
  liked: boolean
}

/**
 * 评论类型定义
 */
export interface Comment {
  id: number
  username: string
  avatar: string
  content: string
  date: string
  likes: number
  liked: boolean
  replies?: Comment[]
}

/**
 * 路由元数据类型定义
 */
export interface RouteMeta {
  title?: string
  description?: string
  requiresAuth?: boolean
}

/**
 * 用户设置类型定义
 */
export interface UserSettings {
  animations: boolean
  fontSize: 'small' | 'medium' | 'large'
  language: string
  autoPlayVideos: boolean
  notificationsEnabled: boolean
}

/**
 * 主题偏好类型定义
 */
export interface ThemePreference {
  isDark: boolean
  source: 'system' | 'light' | 'dark'
} 