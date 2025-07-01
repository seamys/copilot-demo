// 遗留代码示例 - 需要重构的代码
// 这个文件包含各种需要改进的代码模式

// 老式的回调地狱 - 可以重构为 async/await
function fetchUserDataOldWay(userId, callback) {
  getUserById(userId, function(err, user) {
    if (err) {
      callback(err, null)
      return
    }
    getPostsByUserId(user.id, function(err, posts) {
      if (err) {
        callback(err, null)
        return
      }
      getCommentsForPosts(posts, function(err, comments) {
        if (err) {
          callback(err, null)
          return
        }
        callback(null, {
          user: user,
          posts: posts,
          comments: comments
        })
      })
    })
  })
}

// 使用 var 和老式函数声明
var UserManager = function() {
  var users = []
  
  var addUser = function(user) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
        return false
      }
    }
    users.push(user)
    return true
  }
  
  var removeUser = function(userId) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        users.splice(i, 1)
        return true
      }
    }
    return false
  }
  
  var findUser = function(userId) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        return users[i]
      }
    }
    return null
  }
  
  return {
    addUser: addUser,
    removeUser: removeUser,
    findUser: findUser
  }
}

// 没有错误处理的函数
function processUserData(userData) {
  var result = JSON.parse(userData)
  var processedData = result.users.map(function(user) {
    return {
      id: user.id,
      name: user.firstName + ' ' + user.lastName,
      email: user.emailAddress.toLowerCase(),
      age: new Date().getFullYear() - new Date(user.birthDate).getFullYear()
    }
  })
  return processedData
}

// 重复的验证逻辑
function validateUserRegistration(userData) {
  if (!userData.email || userData.email.length === 0) {
    return false
  }
  if (userData.email.indexOf('@') === -1) {
    return false
  }
  if (!userData.password || userData.password.length < 8) {
    return false
  }
  if (!userData.name || userData.name.length === 0) {
    return false
  }
  return true
}

function validateUserUpdate(userData) {
  if (!userData.email || userData.email.length === 0) {
    return false
  }
  if (userData.email.indexOf('@') === -1) {
    return false
  }
  if (!userData.name || userData.name.length === 0) {
    return false
  }
  return true
}

// 低效的数组操作
function findUsersByAge(users, minAge, maxAge) {
  var result = []
  for (var i = 0; i < users.length; i++) {
    if (users[i].age >= minAge && users[i].age <= maxAge) {
      result.push(users[i])
    }
  }
  return result
}

function getUserNames(users) {
  var names = []
  for (var i = 0; i < users.length; i++) {
    names.push(users[i].name)
  }
  return names
}

// 没有类型检查和文档的函数
function calculateTotal(items, taxRate, discount) {
  var subtotal = 0
  for (var i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].quantity
  }
  var taxAmount = subtotal * taxRate
  var total = subtotal + taxAmount - discount
  return total
}

// 全局变量和紧耦合
var currentUser = null
var isLoggedIn = false

function login(email, password) {
  // 模拟登录
  if (email === 'admin@example.com' && password === 'admin123') {
    currentUser = {
      id: 1,
      email: email,
      role: 'admin'
    }
    isLoggedIn = true
    return true
  }
  return false
}

function getCurrentUser() {
  if (isLoggedIn) {
    return currentUser
  }
  return null
}

function logout() {
  currentUser = null
  isLoggedIn = false
}

module.exports = {
  fetchUserDataOldWay,
  UserManager,
  processUserData,
  validateUserRegistration,
  validateUserUpdate,
  findUsersByAge,
  getUserNames,
  calculateTotal,
  login,
  getCurrentUser,
  logout
}
