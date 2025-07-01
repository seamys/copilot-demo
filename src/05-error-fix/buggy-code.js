// 包含各种错误的代码示例
// 用于演示 Copilot 的错误修复能力

// 错误 1: 语法错误 - 缺少括号和分号
function calculateArea(radius {
  return Math.PI * radius * radius
}

// 错误 2: 变量未定义
function processUser(user) {
  console.log('处理用户:', userName) // userName 未定义
  return user.id
}

// 错误 3: 类型错误 - 字符串和数字相加
function addNumbers(a, b) {
  return a + b // 如果传入字符串会有问题
}

// 错误 4: 逻辑错误 - 数组越界
function getFirstThreeItems(arr) {
  return [arr[0], arr[1], arr[2]] // 如果数组长度小于3会返回undefined
}

// 错误 5: 异步错误 - 没有错误处理
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`)
  const data = response.json() // 缺少 await
  return data
}

// 错误 6: 内存泄漏 - 事件监听器没有清理
function setupEventListener() {
  const button = document.getElementById('myButton')
  button.addEventListener('click', function handleClick() {
    console.log('按钮被点击')
    // 这个监听器永远不会被移除
  })
}

// 错误 7: 无限循环风险
function findUser(users, targetId) {
  let index = 0
  while (users[index].id !== targetId) { // 如果找不到会无限循环
    index++
  }
  return users[index]
}

// 错误 8: SQL 注入风险
function getUserByEmail(email) {
  const query = `SELECT * FROM users WHERE email = '${email}'` // SQL 注入风险
  return database.query(query)
}

// 错误 9: XSS 漏洞
function displayUserMessage(message) {
  document.getElementById('messageDiv').innerHTML = message // XSS 风险
}

// 错误 10: 性能问题 - 不必要的重复计算
function calculateExpensiveOperation(data) {
  const results = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      // 每次循环都重新计算相同的值
      const expensiveValue = Math.pow(data[i], 3) + Math.sqrt(data[j])
      results.push(expensiveValue)
    }
  }
  return results
}

// 错误 11: 错误的错误处理
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log('解析失败') // 没有返回默认值，也没有重新抛出错误
  }
}

// 错误 12: 资源未释放
function processLargeFile(filePath) {
  const fs = require('fs')
  const data = fs.readFileSync(filePath) // 同步读取大文件
  // 处理数据...
  // 没有适当的清理
}

// 错误 13: 竞争条件
let counter = 0
function incrementCounter() {
  // 在多线程环境中这是不安全的
  const temp = counter
  // 模拟一些处理时间
  setTimeout(() => {
    counter = temp + 1
  }, 10)
}

// 错误 14: 不正确的比较
function isEqual(a, b) {
  return a == b // 应该使用 === 进行严格比较
}

// 错误 15: 作用域问题
function createFunctions() {
  const functions = []
  for (var i = 0; i < 3; i++) { // 使用 var 会有作用域问题
    functions.push(function() {
      console.log(i) // 总是打印 3
    })
  }
  return functions
}

// 错误 16: 不当的异常处理
async function saveUserData(userData) {
  try {
    await database.save(userData)
    return { success: true }
  } catch (error) {
    // 捕获所有异常而不区分类型
    return { success: false, error: error.message }
  }
}

// 错误 17: 硬编码的配置
function connectToDatabase() {
  const config = {
    host: 'localhost', // 硬编码，不灵活
    port: 3306,
    username: 'admin',
    password: '123456' // 明文密码
  }
  return new DatabaseConnection(config)
}

// 错误 18: 不正确的日期处理
function formatDate(date) {
  const day = date.getDate()
  const month = date.getMonth() // getMonth() 返回 0-11，需要 +1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

// 错误 19: 缓存导致的状态污染
const cache = {}
function getCachedData(key) {
  if (cache[key]) {
    return cache[key] // 返回的是引用，修改会影响缓存
  }
  
  const data = expensiveOperation(key)
  cache[key] = data
  return data
}

// 错误 20: 不正确的正则表达式
function validatePhoneNumber(phone) {
  const phoneRegex = /\d{11}/ // 这个正则不够严格
  return phoneRegex.test(phone)
}

module.exports = {
  calculateArea,
  processUser,
  addNumbers,
  getFirstThreeItems,
  fetchUserData,
  setupEventListener,
  findUser,
  getUserByEmail,
  displayUserMessage,
  calculateExpensiveOperation,
  parseJSON,
  processLargeFile,
  incrementCounter,
  isEqual,
  createFunctions,
  saveUserData,
  connectToDatabase,
  formatDate,
  getCachedData,
  validatePhoneNumber
}
