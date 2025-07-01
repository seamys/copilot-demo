# GitHub Copilot Demo Project

这是一个专门用于演示 GitHub Copilot 核心功能的 Node.js 项目。每个目录都展示了 Copilot 的不同能力和使用场景。

## 项目结构

```
github-copilot-demo/
├── src/
│   ├── 01-basic-completion/          # 基础代码补全演示
│   ├── 02-comment-driven/            # 注释驱动开发
│   ├── 03-chat-refactor/             # Chat 重构演示
│   ├── 04-test-generation/           # 测试生成
│   ├── 05-error-fix/                 # 错误修复演示
│   ├── 06-api-development/           # REST API 开发
│   └── 07-advanced-patterns/         # 高级模式和最佳实践
├── .github/
│   ├── copilot-instructions.md      # 项目级指令
│   ├── prompts/                      # 提示模板
│   └── chatmodes/                    # 自定义 Chat 模式
├── tests/                            # 测试文件
└── docs/                             # 文档
```

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 设置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，填入必要的配置
```

### 3. 运行演示
```bash
# 基础应用
npm start

# 开发模式（自动重启）
npm run dev

# 运行测试
npm test
```

## 演示功能列表

### 🚀 01-basic-completion - 基础代码补全
- 智能代码补全（Tab 接受建议）
- 多行代码生成
- 函数和变量名建议
- **演示要点**: 展示"幽灵文本"实时补全

### 💭 02-comment-driven - 注释驱动开发
- 通过注释生成代码
- TODO 注释转换为实现
- 业务逻辑描述转代码
- **演示要点**: 注释驱动的强大能力

### 🔄 03-chat-refactor - Chat 重构演示
- 使用 Ctrl+I Inline Chat 重构
- 代码解释和优化建议
- 架构改进建议
- **演示要点**: Ask/Edit/Agent 三种模式

### 🧪 04-test-generation - 测试生成
- 自动生成单元测试
- 测试用例覆盖
- Mock 和边界测试
- **演示要点**: /tests 命令的使用

### 🐛 05-error-fix - 错误修复演示
- 错误诊断和修复
- 性能优化建议
- 代码质量改进
- **演示要点**: /fix 命令和错误分析

### 🌐 06-api-development - REST API 开发
- Express.js API 创建
- 数据库集成
- 认证和中间件
- **演示要点**: 端到端开发流程

### 🎯 07-advanced-patterns - 高级模式
- 自定义指令使用
- 上下文管理技巧
- 最佳实践模式
- **演示要点**: 高级 Copilot 功能

## 使用说明

### 基础演示流程
1. 从 `01-basic-completion` 开始，展示基础补全功能
2. 进入 `02-comment-driven`，演示注释驱动开发
3. 使用 `03-chat-refactor` 展示 Chat 功能
4. 通过 `04-test-generation` 演示测试生成
5. 用 `05-error-fix` 展示错误修复能力
6. 完整演示 `06-api-development` 的开发流程
7. 最后展示 `07-advanced-patterns` 的高级功能

### Copilot 快捷键提醒
- **Tab**: 接受建议
- **Alt + ]**: 下一个建议
- **Alt + [**: 上一个建议  
- **Ctrl + Alt + I**: 打开 Chat View
- **Ctrl + I**: Inline Chat（在编辑器中）
- **Ctrl + Shift + Alt + I**: Quick Chat

### 常用 Slash 命令
- `/explain`: 解释代码
- `/fix`: 修复错误
- `/tests`: 生成测试
- `/new`: 创建新代码

## 注意事项

1. 确保已安装并登录 GitHub Copilot
2. 建议按顺序进行演示，每个目录都有独立的演示脚本
3. 可以根据需要修改代码，观察 Copilot 的建议变化
4. 鼓励尝试不同的注释和提示方式

## 演示技巧

1. **展示前先清空代码**: 让观众看到从零开始的补全过程
2. **故意制造错误**: 演示 Copilot 的错误修复能力
3. **使用有意义的注释**: 展示注释驱动开发的强大
4. **对比不同提示**: 展示不同输入对结果的影响
5. **实时互动**: 让观众提出需求，现场演示

---

Happy Coding with GitHub Copilot! 🚀
