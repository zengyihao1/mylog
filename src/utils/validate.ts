// 邮箱验证函数
// 参数：email - 要验证的邮箱字符串
// 返回：布尔值，表示是否是有效的邮箱格式
export const isEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// URL验证函数
// 参数：url - 要验证的URL字符串
// 返回：布尔值，表示是否是有效的URL格式
export const isURL = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// 手机号验证函数（中国大陆手机号）
// 参数：phone - 要验证的手机号字符串
// 返回：布尔值，表示是否是有效的手机号格式
export const isPhone = (phone: string): boolean => {
  const re = /^1[3-9]\d{9}$/
  return re.test(phone)
}

// 密码强度验证函数
// 参数：password - 要验证的密码字符串
// 返回：包含得分和反馈信息的对象
export const checkPasswordStrength = (password: string): {
  score: number      // 密码强度得分（0-5分）
  feedback: Array<string> // 改进建议数组
} => {
  const feedback: Array<string> = []
  let score = 0

  // 检查密码长度
  if (password.length >= 8) score += 1

  // 检查是否包含小写字母
  if (password.match(/[a-z]/)) score += 1

  // 检查是否包含大写字母
  if (password.match(/[A-Z]/)) score += 1

  // 检查是否包含数字
  if (password.match(/\d/)) score += 1

  // 检查是否包含特殊字符
  if (password.match(/[^a-zA-Z\d]/)) score += 1

  // 根据得分给出改进建议
  if (score < 2) feedback.push('密码太弱')
  if (score < 3) feedback.push('建议包含大小写字母')
  if (score < 4) feedback.push('建议包含数字')
  if (score < 5) feedback.push('建议包含特殊字符')

  return { score, feedback }
} 