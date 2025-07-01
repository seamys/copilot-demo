const express = require('express')
const router = express.Router()

// TODO: 导入用户服务和验证中间件

/**
 * @route   POST /api/users/register
 * @desc    用户注册
 * @access  Public
 * @body    { name, email, password }
 */
router.post('/register', async (req, res) => {
  // TODO: 实现用户注册逻辑
  // 1. 验证输入数据
  // 2. 检查邮箱是否已存在
  // 3. 加密密码
  // 4. 创建用户
  // 5. 返回 JWT token
})

/**
 * @route   POST /api/users/login
 * @desc    用户登录
 * @access  Public
 * @body    { email, password }
 */
router.post('/login', async (req, res) => {
  // TODO: 实现用户登录逻辑
  // 1. 验证输入数据
  // 2. 查找用户
  // 3. 验证密码
  // 4. 返回 JWT token
})

/**
 * @route   GET /api/users/profile
 * @desc    获取当前用户信息
 * @access  Private
 */
router.get('/profile', async (req, res) => {
  // TODO: 需要认证中间件
  // 返回当前用户的个人信息（不包含密码）
})

/**
 * @route   PUT /api/users/profile
 * @desc    更新用户信息
 * @access  Private
 * @body    { name?, email?, currentPassword?, newPassword? }
 */
router.put('/profile', async (req, res) => {
  // TODO: 实现用户信息更新
  // 1. 验证认证状态
  // 2. 验证输入数据
  // 3. 如果更新密码，验证当前密码
  // 4. 更新用户信息
})

/**
 * @route   GET /api/users
 * @desc    获取用户列表（管理员功能）
 * @access  Private (Admin only)
 * @query   { page?, limit?, search? }
 */
router.get('/', async (req, res) => {
  // TODO: 需要管理员权限验证
  // 实现分页查询和搜索功能
})

/**
 * @route   DELETE /api/users/:id
 * @desc    删除用户（管理员功能）
 * @access  Private (Admin only)
 */
router.delete('/:id', async (req, res) => {
  // TODO: 需要管理员权限验证
  // 实现用户删除（软删除）
})

/**
 * @route   POST /api/users/forgot-password
 * @desc    忘记密码
 * @access  Public
 * @body    { email }
 */
router.post('/forgot-password', async (req, res) => {
  // TODO: 实现忘记密码功能
  // 1. 验证邮箱
  // 2. 生成重置令牌
  // 3. 发送重置邮件
})

/**
 * @route   POST /api/users/reset-password
 * @desc    重置密码
 * @access  Public
 * @body    { token, newPassword }
 */
router.post('/reset-password', async (req, res) => {
  // TODO: 实现密码重置
  // 1. 验证重置令牌
  // 2. 更新密码
  // 3. 使令牌失效
})

module.exports = router
