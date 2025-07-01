const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

// 创建 Express 应用
const app = express()
const PORT = process.env.PORT || 3000

// 基础中间件
app.use(helmet()) // 安全中间件
app.use(cors()) // 跨域中间件
app.use(express.json({ limit: '10mb' })) // JSON 解析中间件
app.use(express.urlencoded({ extended: true })) // URL 编码中间件

// TODO: 添加请求日志中间件，记录请求方法、URL、IP、响应时间

// TODO: 添加 API 限流中间件，防止滥用

// TODO: 添加 JWT 认证中间件

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

// API 版本信息
app.get('/api/version', (req, res) => {
  res.json({
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  })
})

// TODO: 导入并使用用户路由 (/api/users)

// TODO: 导入并使用商品路由 (/api/products)

// TODO: 导入并使用订单路由 (/api/orders)

// TODO: 添加全局错误处理中间件

// 404 处理
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '接口不存在',
    path: req.originalUrl
  })
})

// 启动服务器
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 服务器运行在端口 ${PORT}`)
    console.log(`📖 健康检查: http://localhost:${PORT}/health`)
    console.log(`🔍 API 版本: http://localhost:${PORT}/api/version`)
  })
}

module.exports = app
