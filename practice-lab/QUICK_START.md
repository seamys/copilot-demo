# 快速开始指南

## 1. 环境准备

### 安装依赖
```bash
npm install
```

### 环境配置
```bash
cp .env.example .env
# 根据需要编辑 .env 文件
```

## 2. 演示运行

### 基础运行
```bash
npm start
```

### 开发模式
```bash
npm run dev
```

### 运行测试
```bash
npm test
```

## 3. 演示顺序

按照以下顺序进行演示，每个目录都有独立的 README.md 说明：

1. **01-basic-completion** - 基础代码补全
2. **02-comment-driven** - 注释驱动开发  
3. **03-chat-refactor** - Chat 重构演示
4. **04-test-generation** - 测试生成
5. **05-error-fix** - 错误修复
6. **06-api-development** - API 开发
7. **07-advanced-patterns** - 高级功能

## 4. 关键快捷键

- **Tab**: 接受 Copilot 建议
- **Alt + ]**: 下一个建议  
- **Alt + [**: 上一个建议
- **Ctrl + Alt + I**: 打开 Chat View
- **Ctrl + I**: Inline Chat
- **Ctrl + Shift + Alt + I**: Quick Chat

## 5. 常用命令

- `/explain` - 解释代码
- `/fix` - 修复错误
- `/tests` - 生成测试
- `/new` - 创建新功能

更多详细信息请查看 `docs/DEMO_GUIDE.md`
