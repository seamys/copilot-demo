/**
 * 用户服务类 - 用于演示复杂测试生成
 */
class UserService {
  constructor(database, emailService, logger) {
    this.database = database
    this.emailService = emailService
    this.logger = logger
  }

  /**
   * 创建新用户
   * @param {Object} userData - 用户数据
   * @returns {Promise<Object>} 创建的用户信息
   */
  async createUser(userData) {
    try {
      // 验证用户数据
      const validationResult = this.validateUserData(userData)
      if (!validationResult.isValid) {
        throw new Error(`用户数据验证失败: ${validationResult.errors.join(', ')}`)
      }

      // 检查邮箱是否已存在
      const existingUser = await this.database.findUserByEmail(userData.email)
      if (existingUser) {
        throw new Error('邮箱已被注册')
      }

      // 创建用户
      const newUser = await this.database.createUser({
        ...userData,
        createdAt: new Date(),
        isActive: true
      })

      // 发送欢迎邮件
      await this.emailService.sendWelcomeEmail(newUser.email, newUser.name)

      // 记录日志
      this.logger.info('新用户创建成功', { userId: newUser.id, email: newUser.email })

      return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    } catch (error) {
      this.logger.error('创建用户失败', { error: error.message, userData })
      throw error
    }
  }

  /**
   * 根据 ID 获取用户
   * @param {string} userId - 用户 ID
   * @returns {Promise<Object|null>} 用户信息
   */
  async getUserById(userId) {
    try {
      if (!userId) {
        throw new Error('用户 ID 不能为空')
      }

      const user = await this.database.findUserById(userId)
      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
        createdAt: user.createdAt
      }
    } catch (error) {
      this.logger.error('获取用户失败', { error: error.message, userId })
      throw error
    }
  }

  /**
   * 更新用户信息
   * @param {string} userId - 用户 ID
   * @param {Object} updateData - 更新数据
   * @returns {Promise<Object>} 更新后的用户信息
   */
  async updateUser(userId, updateData) {
    try {
      // 检查用户是否存在
      const existingUser = await this.database.findUserById(userId)
      if (!existingUser) {
        throw new Error('用户不存在')
      }

      // 如果更新邮箱，检查是否已被其他用户使用
      if (updateData.email && updateData.email !== existingUser.email) {
        const emailExists = await this.database.findUserByEmail(updateData.email)
        if (emailExists) {
          throw new Error('邮箱已被其他用户使用')
        }
      }

      // 更新用户
      const updatedUser = await this.database.updateUser(userId, {
        ...updateData,
        updatedAt: new Date()
      })

      this.logger.info('用户信息更新成功', { userId, updateData })

      return {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isActive: updatedUser.isActive,
        updatedAt: updatedUser.updatedAt
      }
    } catch (error) {
      this.logger.error('更新用户失败', { error: error.message, userId, updateData })
      throw error
    }
  }

  /**
   * 删除用户（软删除）
   * @param {string} userId - 用户 ID
   * @returns {Promise<boolean>} 是否删除成功
   */
  async deleteUser(userId) {
    try {
      const user = await this.database.findUserById(userId)
      if (!user) {
        throw new Error('用户不存在')
      }

      await this.database.updateUser(userId, {
        isActive: false,
        deletedAt: new Date()
      })

      this.logger.info('用户删除成功', { userId })
      return true
    } catch (error) {
      this.logger.error('删除用户失败', { error: error.message, userId })
      throw error
    }
  }

  /**
   * 验证用户数据
   * @param {Object} userData - 用户数据
   * @returns {{isValid: boolean, errors: string[]}} 验证结果
   */
  validateUserData(userData) {
    const errors = []

    if (!userData.name || userData.name.trim().length === 0) {
      errors.push('姓名不能为空')
    }

    if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.push('邮箱格式无效')
    }

    if (!userData.password || userData.password.length < 8) {
      errors.push('密码至少需要8个字符')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * 获取用户列表
   * @param {Object} options - 查询选项
   * @returns {Promise<{users: Array, total: number}>} 用户列表和总数
   */
  async getUsers(options = {}) {
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        isActive = true
      } = options

      const offset = (page - 1) * limit

      const result = await this.database.findUsers({
        search,
        isActive,
        limit,
        offset
      })

      return {
        users: result.users.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          isActive: user.isActive,
          createdAt: user.createdAt
        })),
        total: result.total,
        page,
        totalPages: Math.ceil(result.total / limit)
      }
    } catch (error) {
      this.logger.error('获取用户列表失败', { error: error.message, options })
      throw error
    }
  }
}

module.exports = UserService
