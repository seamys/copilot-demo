// const request = require('supertest')
// const app = require('../src/06-api-development/server')

describe('Basic Completion Functions', () => {
  // 这个文件用于演示测试生成功能
  // 选中函数或类，然后使用 /tests 命令生成测试
  
  test('should demonstrate test generation capability', () => {
    // 使用 Copilot 生成实际的测试
    // 示例：测试一个简单的数学函数
    const add = (a, b) => a + b
    expect(add(2, 3)).toBe(5)
  })

  test('should show async test generation', async () => {
    // 演示异步函数测试生成
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const start = Date.now()
    await delay(100)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(100)
  })
})
