# 03 - Chat 重构演示

这个目录展示如何使用 GitHub Copilot Chat 的不同模式来重构和改进代码。

## 演示要点

1. **Inline Chat (Ctrl+I)** - 在编辑器中直接重构
2. **Chat View** - 完整的对话式重构
3. **Ask/Edit/Agent 模式** - 不同场景的选择
4. **Smart Actions** - 右键菜单快速操作

## 演示脚本

### 步骤 1: Inline Chat 重构
1. 选中 `legacy-code.js` 中的一个函数
2. 按 Ctrl+I，要求重构为现代 JavaScript
3. 观察实时重构建议

### 步骤 2: Chat View 模式切换
1. 打开 Chat View (Ctrl+Alt+I)
2. 尝试 Ask 模式：询问代码问题
3. 切换到 Edit 模式：批量修改
4. 使用 Agent 模式：端到端重构

### 步骤 3: Smart Actions
1. 右键点击函数
2. 选择 "Copilot" → "Generate Docs"
3. 尝试其他选项如 "Fix" 和 "Explain"

## Slash 命令演示

- `/explain` - 解释代码逻辑
- `/fix` - 修复问题
- `/tests` - 生成测试
- `/new` - 创建新功能

## 技巧提示

- 选择合适的模式：Ask(问答) / Edit(编辑) / Agent(任务)
- 提供清晰的重构目标和约束
- 使用 #selection 明确指定要处理的代码
