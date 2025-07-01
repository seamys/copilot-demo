/**
 * 数学工具函数集合
 * 用于演示测试生成功能
 */

/**
 * 计算两个数的最大公约数
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 最大公约数
 */
function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}

/**
 * 检查一个数是否为质数
 * @param {number} num - 要检查的数
 * @returns {boolean} 是否为质数
 */
function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }
  }
  return true
}

/**
 * 计算斐波那契数列的第 n 项
 * @param {number} n - 项数（从 0 开始）
 * @returns {number} 斐波那契数
 */
function fibonacci(n) {
  if (n < 0) throw new Error('输入必须是非负整数')
  if (n <= 1) return n
  
  let a = 0, b = 1
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
}

/**
 * 计算数组的统计信息
 * @param {number[]} numbers - 数字数组
 * @returns {{mean: number, median: number, mode: number[], min: number, max: number}}
 */
function calculateStats(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('输入必须是非空数组')
  }

  const sorted = [...numbers].sort((a, b) => a - b)
  const sum = numbers.reduce((acc, num) => acc + num, 0)
  
  // 平均值
  const mean = sum / numbers.length
  
  // 中位数
  const median = numbers.length % 2 === 0
    ? (sorted[numbers.length / 2 - 1] + sorted[numbers.length / 2]) / 2
    : sorted[Math.floor(numbers.length / 2)]
  
  // 众数
  const frequency = {}
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1
  })
  
  const maxFreq = Math.max(...Object.values(frequency))
  const mode = Object.keys(frequency)
    .filter(key => frequency[key] === maxFreq)
    .map(Number)
  
  return {
    mean: Number(mean.toFixed(2)),
    median,
    mode,
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
}

/**
 * 将角度转换为弧度
 * @param {number} degrees - 角度
 * @returns {number} 弧度
 */
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180)
}

/**
 * 将弧度转换为角度
 * @param {number} radians - 弧度
 * @returns {number} 角度
 */
function radiansToDegrees(radians) {
  return radians * (180 / Math.PI)
}

/**
 * 计算复合利息
 * @param {number} principal - 本金
 * @param {number} rate - 年利率（小数形式，如 0.05 表示 5%）
 * @param {number} time - 时间（年）
 * @param {number} compoundFrequency - 复利计算频率（每年几次）
 * @returns {number} 最终金额
 */
function calculateCompoundInterest(principal, rate, time, compoundFrequency = 1) {
  if (principal <= 0 || rate < 0 || time < 0 || compoundFrequency <= 0) {
    throw new Error('所有参数必须为正数')
  }
  
  const amount = principal * Math.pow(1 + rate / compoundFrequency, compoundFrequency * time)
  return Number(amount.toFixed(2))
}

/**
 * 计算向量的点积
 * @param {number[]} vector1 - 第一个向量
 * @param {number[]} vector2 - 第二个向量
 * @returns {number} 点积结果
 */
function dotProduct(vector1, vector2) {
  if (!Array.isArray(vector1) || !Array.isArray(vector2)) {
    throw new Error('输入必须是数组')
  }
  
  if (vector1.length !== vector2.length) {
    throw new Error('向量维度必须相同')
  }
  
  return vector1.reduce((sum, val, index) => sum + val * vector2[index], 0)
}

module.exports = {
  gcd,
  isPrime,
  fibonacci,
  calculateStats,
  degreesToRadians,
  radiansToDegrees,
  calculateCompoundInterest,
  dotProduct
}
