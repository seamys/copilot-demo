# 项目编码规范

## 命名约定
- 使用 camelCase 命名变量和函数
- 使用 PascalCase 命名类和构造函数
- 使用 UPPER_SNAKE_CASE 命名常量
- 文件名使用 kebab-case

## 代码风格
- 使用 2 空格缩进
- 单引号字符串
- 行末不加分号（除非必要）
- 最大行长度 100 字符

## 函数规范
- 函数必须有 JSDoc 注释
- 参数和返回值要有类型说明
- 复杂逻辑要有示例代码
- 使用 async/await 而不是 Promise.then()

## 错误处理
- 使用 try/catch 包装异步操作
- 错误信息要有上下文信息
- 记录错误日志便于调试
- 为用户提供友好的错误提示

## 注释规范
- 代码要有清晰的注释说明业务逻辑
- TODO 注释要包含负责人和时间
- 复杂算法要有步骤说明
- API 接口要有完整的文档注释

## 示例代码风格
```javascript
/**
 * 用户认证服务
 * @param {string} email - 用户邮箱
 * @param {string} password - 用户密码
 * @returns {Promise<{success: boolean, token?: string, error?: string}>}
 * @example
 * const result = await authenticateUser('user@example.com', 'password123')
 * if (result.success) {
 *   console.log('登录成功:', result.token)
 * }
 */
async function authenticateUser(email, password) {
  try {
    // 验证用户输入
    if (!email || !password) {
      return { success: false, error: '邮箱和密码不能为空' }
    }
    
    // 查找用户并验证密码
    const user = await User.findOne({ email })
    const isValid = await bcrypt.compare(password, user.password)
    
    if (isValid) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
      return { success: true, token }
    }
    
    return { success: false, error: '邮箱或密码错误' }
  } catch (error) {
    console.error('认证失败:', error.message)
    return { success: false, error: '服务器内部错误' }
  }
}
```
