// 重构后的现代 JavaScript 代码
// 这个文件展示重构后的最佳实践

/**
 * 现代的异步数据获取 - 使用 async/await
 * @param {string} userId - 用户ID
 * @returns {Promise<{user: Object, posts: Array, comments: Array}>}
 */
async function fetchUserData(userId) {
  try {
    const user = await getUserById(userId)
    const posts = await getPostsByUserId(user.id)
    const comments = await getCommentsForPosts(posts)
    
    return { user, posts, comments }
  } catch (error) {
    console.error('获取用户数据失败:', error.message)
    throw new Error(`无法获取用户 ${userId} 的数据: ${error.message}`)
  }
}

/**
 * 现代的用户管理类 - 使用 ES6+ 语法
 */
class ModernUserManager {
  constructor() {
    this.users = new Map() // 使用 Map 提高查找性能
  }

  /**
   * 添加用户
   * @param {Object} user - 用户对象
   * @returns {boolean} 是否添加成功
   */
  addUser(user) {
    if (this.users.has(user.id)) {
      return false
    }
    this.users.set(user.id, user)
    return true
  }

  /**
   * 移除用户
   * @param {string} userId - 用户ID
   * @returns {boolean} 是否移除成功
   */
  removeUser(userId) {
    return this.users.delete(userId)
  }

  /**
   * 查找用户
   * @param {string} userId - 用户ID
   * @returns {Object|null} 用户对象或 null
   */
  findUser(userId) {
    return this.users.get(userId) || null
  }

  /**
   * 获取所有用户
   * @returns {Array} 用户数组
   */
  getAllUsers() {
    return Array.from(this.users.values())
  }
}

/**
 * 安全的用户数据处理 - 包含错误处理
 * @param {string} userData - JSON 格式的用户数据
 * @returns {Array} 处理后的用户数据
 * @throws {Error} 当数据格式无效时抛出错误
 */
function processUserDataSafely(userData) {
  try {
    const result = JSON.parse(userData)
    
    if (!result.users || !Array.isArray(result.users)) {
      throw new Error('无效的用户数据格式')
    }

    return result.users.map(user => {
      if (!user.id || !user.firstName || !user.lastName) {
        throw new Error('用户数据缺少必要字段')
      }

      return {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddress?.toLowerCase() || '',
        age: calculateAge(user.birthDate)
      }
    })
  } catch (error) {
    console.error('处理用户数据失败:', error.message)
    throw new Error(`用户数据处理失败: ${error.message}`)
  }
}

/**
 * 计算年龄的辅助函数
 * @param {string} birthDate - 出生日期
 * @returns {number} 年龄
 */
function calculateAge(birthDate) {
  if (!birthDate) return 0
  
  const birth = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return Math.max(0, age)
}

/**
 * 统一的验证器类
 */
class UserValidator {
  /**
   * 验证邮箱格式
   * @param {string} email - 邮箱地址
   * @returns {boolean} 是否有效
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * 验证密码强度
   * @param {string} password - 密码
   * @returns {boolean} 是否符合要求
   */
  static isValidPassword(password) {
    return password && password.length >= 8
  }

  /**
   * 验证姓名
   * @param {string} name - 姓名
   * @returns {boolean} 是否有效
   */
  static isValidName(name) {
    return name && name.trim().length > 0
  }

  /**
   * 验证用户注册数据
   * @param {Object} userData - 用户数据
   * @returns {{isValid: boolean, errors: Array}} 验证结果
   */
  static validateRegistration(userData) {
    const errors = []

    if (!this.isValidEmail(userData.email)) {
      errors.push('邮箱格式无效')
    }

    if (!this.isValidPassword(userData.password)) {
      errors.push('密码至少需要8个字符')
    }

    if (!this.isValidName(userData.name)) {
      errors.push('姓名不能为空')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * 验证用户更新数据
   * @param {Object} userData - 用户数据
   * @returns {{isValid: boolean, errors: Array}} 验证结果
   */
  static validateUpdate(userData) {
    const errors = []

    if (!this.isValidEmail(userData.email)) {
      errors.push('邮箱格式无效')
    }

    if (!this.isValidName(userData.name)) {
      errors.push('姓名不能为空')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}

/**
 * 高效的用户查询工具
 */
class UserQueryHelper {
  /**
   * 按年龄范围查找用户
   * @param {Array} users - 用户数组
   * @param {number} minAge - 最小年龄
   * @param {number} maxAge - 最大年龄
   * @returns {Array} 符合条件的用户
   */
  static findUsersByAge(users, minAge, maxAge) {
    return users.filter(user => 
      user.age >= minAge && user.age <= maxAge
    )
  }

  /**
   * 获取用户姓名列表
   * @param {Array} users - 用户数组
   * @returns {Array} 姓名数组
   */
  static getUserNames(users) {
    return users.map(user => user.name)
  }

  /**
   * 按角色筛选用户
   * @param {Array} users - 用户数组
   * @param {string} role - 角色
   * @returns {Array} 符合条件的用户
   */
  static findUsersByRole(users, role) {
    return users.filter(user => user.role === role)
  }
}

/**
 * 订单计算器 - 包含完整的类型检查和文档
 */
class OrderCalculator {
  /**
   * 计算订单总价
   * @param {Array} items - 商品列表 [{price: number, quantity: number}]
   * @param {number} taxRate - 税率 (0-1 之间的小数)
   * @param {number} discount - 折扣金额
   * @returns {{subtotal: number, tax: number, total: number}} 计算结果
   * @throws {Error} 当参数无效时抛出错误
   */
  static calculateTotal(items, taxRate = 0, discount = 0) {
    // 参数验证
    if (!Array.isArray(items)) {
      throw new Error('商品列表必须是数组')
    }

    if (taxRate < 0 || taxRate > 1) {
      throw new Error('税率必须在 0-1 之间')
    }

    if (discount < 0) {
      throw new Error('折扣金额不能为负数')
    }

    // 计算小计
    const subtotal = items.reduce((sum, item) => {
      if (!item.price || !item.quantity) {
        throw new Error('每个商品必须包含 price 和 quantity 字段')
      }
      return sum + (item.price * item.quantity)
    }, 0)

    // 计算税额
    const tax = subtotal * taxRate

    // 计算总价
    const total = Math.max(0, subtotal + tax - discount)

    return {
      subtotal: Number(subtotal.toFixed(2)),
      tax: Number(tax.toFixed(2)),
      total: Number(total.toFixed(2))
    }
  }
}

/**
 * 现代的认证管理器 - 避免全局状态
 */
class AuthManager {
  constructor() {
    this.currentUser = null
    this.isAuthenticated = false
  }

  /**
   * 用户登录
   * @param {string} email - 邮箱
   * @param {string} password - 密码
   * @returns {Promise<{success: boolean, user?: Object, error?: string}>}
   */
  async login(email, password) {
    try {
      // 这里应该调用实际的认证服务
      if (email === 'admin@example.com' && password === 'admin123') {
        this.currentUser = {
          id: 1,
          email,
          role: 'admin'
        }
        this.isAuthenticated = true
        
        return {
          success: true,
          user: this.currentUser
        }
      }

      return {
        success: false,
        error: '邮箱或密码错误'
      }
    } catch (error) {
      console.error('登录失败:', error.message)
      return {
        success: false,
        error: '登录过程中发生错误'
      }
    }
  }

  /**
   * 获取当前用户
   * @returns {Object|null} 当前用户对象或 null
   */
  getCurrentUser() {
    return this.isAuthenticated ? this.currentUser : null
  }

  /**
   * 用户登出
   */
  logout() {
    this.currentUser = null
    this.isAuthenticated = false
  }

  /**
   * 检查是否已认证
   * @returns {boolean} 认证状态
   */
  isLoggedIn() {
    return this.isAuthenticated
  }
}

module.exports = {
  fetchUserData,
  ModernUserManager,
  processUserDataSafely,
  UserValidator,
  UserQueryHelper,
  OrderCalculator,
  AuthManager
}
