# VS Code Copilot 实战教程

> 面向：公司前端 / 后端工程师  
> 目标：10 分钟掌握日常工作流，30 分钟完成自主练习并融入团队规范  

## 目录

- [VS Code Copilot 实战教程](#vs-code-copilot-实战教程)
  - [目录](#目录)
  - [1 · 快速起步](#1--快速起步)
  - [2 · 核心工作流](#2--核心工作流)
    - [2.1 智能代码补全 (Inline Completions)](#21-智能代码补全-inline-completions)
    - [2.2 Copilot Chat](#22-copilot-chat)
    - [2.3 自定义 Chat 模式](#23-自定义-chat-模式)
    - [2.4 终端与命令助手](#24-终端与命令助手)
    - [2.5 Smart Actions (右键 → Copilot)](#25-smart-actions-右键--copilot)
  - [3 · Copilot Chat 上下文 (Context)](#3--copilot-chat-上下文-context)
    - [3.1 隐式上下文](#31-隐式上下文)
    - [3.2 显式上下文 – `#` 标签](#32-显式上下文---标签)
    - [3.3 @ 参与者 (Participants)](#33--参与者-participants)
    - [3.4 工具与 Web 引用](#34-工具与-web-引用)
    - [3.5 自定义指令与 Workspace Index](#35-自定义指令与-workspace-index)
  - [4 · 自定义指令与模板 (Customization)](#4--自定义指令与模板-customization)
    - [4.1 自定义指令 (Custom Instructions)](#41-自定义指令-custom-instructions)
      - [4.1.1 项目级指令文件](#411-项目级指令文件)
      - [4.1.2 任务特定指令](#412-任务特定指令)
      - [4.1.3 设置文件配置](#413-设置文件配置)
    - [4.2 提示模板 (Prompt Files)](#42-提示模板-prompt-files)
      - [4.2.1 创建提示模板](#421-创建提示模板)
      - [4.2.2 使用提示模板](#422-使用提示模板)
    - [4.3 最佳实践](#43-最佳实践)
      - [4.3.1 指令编写技巧](#431-指令编写技巧)
      - [4.3.2 模板组织策略](#432-模板组织策略)
      - [4.3.3 配置同步](#433-配置同步)
  - [5 · MCP 服务器集成 (Model Context Protocol)](#5--mcp-服务器集成-model-context-protocol)
    - [5.1 启用 MCP 支持](#51-启用-mcp-支持)
    - [5.2 配置 MCP 服务器](#52-配置-mcp-服务器)
      - [5.2.1 工作区级配置](#521-工作区级配置)
      - [5.2.2 用户级配置](#522-用户级配置)
      - [5.2.3 快速添加服务器](#523-快速添加服务器)
    - [5.3 在 Agent Mode中使用 MCP 工具](#53-在-agent-mode中使用-mcp-工具)
    - [5.4 MCP 资源与提示](#54-mcp-资源与提示)
      - [5.4.1 使用 MCP 资源](#541-使用-mcp-资源)
      - [5.4.2 预配置提示](#542-预配置提示)
    - [5.5 管理 MCP 服务器](#55-管理-mcp-服务器)
  - [6 · 高效 Prompt 技巧](#6--高效-prompt-技巧)
  - [7 · 安全与合规](#7--安全与合规)
  - [8 · 设置与快捷键速查](#8--设置与快捷键速查)
  - [9 · 常见问题 \& 故障排查](#9--常见问题--故障排查)
    - [9.1 基础问题排查](#91-基础问题排查)
    - [9.2 FAQ：什么时候使用 Edit Mode 而不是 Agent Mode？](#92-faq什么时候使用-edit-mode-而不是-agent-mode)
    - [9.3 自定义配置常见问题](#93-自定义配置常见问题)

---

## 1 · 快速起步

| 步骤 | 操作 |说明 |
| ---- | ---- | ---- |
| ① 申请账号 | 一般您的公司会给你发一封邀请注册的邮件 |根据邮件的步骤完成注册流程 |
| ② 安装插件 | 在 **扩展视图 (Ctrl+Shift+X)** 搜索 **GitHub Copilot** 和 **GitHub Copilot Chat**| 两个都需要安装| 
| ③ 登录账号 | 在状态栏点击 Copilot 图标 → **Set up Copilot**，使用公司 GitHub 账号 OAuth 登录 | `<itcode>_<companyname>` 例如： gaogh2_lenovo |

---

## 2 · 核心工作流

### 2.1 智能代码补全 (Inline Completions)

* [“幽灵文本” 实时补全，**Tab** 接受，**`ALT+ ]` / `ALT + [`** 轮换多方案.](https://code.visualstudio.com/docs/copilot/getting-started#_get-your-first-code-suggestion)
* 支持单行、整块、跨文件 **NES** (Next Edit Suggestions)：预测后续修改并用 **Tab** 跳转下一个改动点  
* 注释驱动：编写 `// TODO: create REST endpoint…` 即可生成模板代码  

```ts
// 创建用户模型并添加验证
// use mongoose, required fields: name, email, password
```

### 2.2 [Copilot Chat](https://code.visualstudio.com/docs/copilot/chat/copilot-chat#_access-chat-in-vs-code)


| 入口 | 快捷键 | 场景 |
| ---- | ---- | ---- |
| Chat View | CTRL+ ALT + I | 长对话、切换 Ask / Edit / Agent Mode |
| [Inline Chat](https://code.visualstudio.com/docs/copilot/chat/inline-chat) | CTRL + I | 选中代码后局部重构、解释 |
| Quick Chat | Ctrl + Shift + Alt + L | 快速单问单答 |

* **[Ask Mode](https://code.visualstudio.com/docs/copilot/chat/chat-ask-mode)**：问答 / 文档 / 学习  
* **[Edit Mode](https://code.visualstudio.com/docs/copilot/chat/copilot-edits)**：多文件批量修改
* **[Agent Mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)**：端到端任务（运行测试 → 修复 → 生成代码）

常用 Slash Commands：

```
/explain     解释代码
/fix         修复错误或告警
/tests       为选中函数生成测试
/new         脚手架生成 (e.g. /new Nextjs app with tailwind)
```

### 2.3 [自定义 Chat 模式](https://code.visualstudio.com/docs/copilot/chat/chat-modes#_custom-chat-modes)

* 除内置 Ask/Edit/Agent 外，可创建 **`.chatmode.md`** 文件定制特定场景的聊天行为  
* 支持工作区共享或个人配置，包含指令 + 工具集合  
* 快速切换到预配置的上下文与约束，提升特定任务效率  

**创建流程：**
1. **Ctrl+Shift+P** → **Chat: New Mode File**  
2. 选择存储位置：工作区 (`.github/chatmodes/`) 或用户配置  
3. 配置 Front Matter 元数据与主体指令  

**文件结构示例：**
```markdown
---
description: Generate an implementation plan for new features or refactoring existing code.
tools: ['codebase', 'fetch', 'findTestFiles', 'githubRepo', 'search', 'usages']
---
# Planning mode instructions
You are in planning mode. Your task is to generate an implementation plan for a new feature or for refactoring existing code.
Don't make any code edits, just generate a plan.

The plan consists of a Markdown document that describes the implementation plan, including the following sections:

* Overview: A brief description of the feature or refactoring task.
* Requirements: A list of requirements for the feature or refactoring task.
* Implementation Steps: A detailed list of steps to implement the feature or refactoring task.
* Testing: A list of tests that need to be implemented to verify the feature or refactoring task.
```

**管理命令：**
* **Chat: Configure Chat Modes** – 编辑现有模式  
* **Chat Mode 下拉菜单** – 快速切换（Chat View 顶部）  

### 2.4 终端与命令助手

* 在集成终端按 **CTRL + I** 打开 Inline Chat，直接询问 shell 命令  

### 2.5 Smart Actions (右键 → Copilot)

* **Generate Docs / Generate Tests / Fix / Explain / Review and Comment**：  
* 无需编写 prompt，即点即用；结果可再次用 Chat Refine  
* 适用于代码审查、重构与测试覆盖率补齐

---

## 3 · [Copilot Chat 上下文 (Context)](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context#_add-files-as-context)

有效地管理上下文是提升回答相关性和准确度的核心。Copilot Chat 支持 **隐式** 与 **显式** 两种上下文注入方式：

### 3.1 隐式上下文  
- 当前选中文本  
- 活动编辑器的文件名 / Notebook 名  
- 当前 Chat 会话的历史内容  

> *注：文件内容不会自动全部发送，VS Code 会在聊天框内以 **斜体虚框** 提示"建议上下文"，如需包含请点击选中。*

### 3.2 [显式上下文 – `#` 标签](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context#_prompt-examples)  
在输入框键入 `#` 选择或快捷输入常用项：  

| 标签 | 含义 | 示例 Prompt |
| --- | --- | --- |
| `#changes` | 未提交改动 diff | `Summarize the #changes` |
| `#codebase` | 代码库搜索 | `Explain auth flow in #codebase` |
| `#selection` | 活动窗口选区 | `Refactor the #selection to use hooks` |
| `#terminalLastCommand` | 最近一次终端命令 | `Why did #terminalLastCommand fail?` |


支持拖拽文件 / 文件夹或用 **Add Context** 按钮添加。  

### 3.3 [@ 参与者 (Participants)](https://code.visualstudio.com/docs/copilot/chat/copilot-chat-context#_atmentions)  
使用 `@terminal`, `@vscode` 等专家域助手处理终端指令或 VS Code API 相关问题：  

```text
@terminal list the 10 largest files
@vscode how to enable semantic highlighting
```  

### 3.4 工具与 Web 引用  
- `#fetch <url>` 获取网页内容  
- `#githubRepo owner/repo` 在仓库内搜索代码模式  

> **技巧**：为大型项目启用 `github.copilot.chat.codesearch.enabled` (preview)，并在企业版配置 **Remote Index**，加速跨仓库检索。

### 3.5 自定义指令与 Workspace Index  
- 在根目录添加 `.instructions/ai.md` 统一编码风格与业务规则  
- 通过 *Remote / Local / Basic* 索引选项，优化搜索性能并降低延迟

---

## 4 · 自定义指令与模板 (Customization)

为了让 Copilot 更好地理解你的项目规范和编码风格，VS Code 提供了多种自定义方式来持久化团队约定：

### 4.1 [自定义指令 (Custom Instructions)](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions)

自定义指令让你可以定义通用的编码规范和项目要求，避免在每次对话中重复描述上下文。支持三种配置方式：

| 方式 | 文件位置 | 适用场景 | 作用域 |
| --- | --- | --- | --- |
| **`.github/copilot-instructions.md`** | 项目根目录 | 项目通用编码规范 | 所有编辑器 |
| **`.instructions.md`** | 工作区或用户目录 | 特定任务指令 | VS Code |
| **VS Code 设置** | settings.json | 特定场景配置 | VS Code |

#### 4.1.1 项目级指令文件

在项目根目录创建 `.github/copilot-instructions.md`：

```markdown
# Project Coding Standards

## Naming Conventions
- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Error Handling
- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information

## Tech Stack Conventions
- Use TypeScript strict mode
- React functional components + Hooks
- Prefer Zustand for state management
```

#### 4.1.2 任务特定指令

创建 `.instructions.md` 文件支持更精细的控制：

```markdown
---
applyTo: "**/*.test.ts"
description: "Testing file coding standards"
---

# Testing Instructions

- Use Jest + Testing Library
- Each test case should include Arrange, Act, Assert sections
- Test names should follow "should ... when ..." format
- Mock external dependencies, avoid network calls
```

**创建命令：**
* **Ctrl+Shift+P** → **Chat: New Instructions File**
* **Chat: Configure Instructions** – 编辑现有指令

#### 4.1.3 设置文件配置

在 `settings.json` 中为不同场景配置指令：

```jsonc
{
  "github.copilot.chat.codeGeneration.instructions": [
    {
      "text": "Always add comment: 'Generated by Copilot'"
    },
    {
      "file": "general.instructions.md"
    }
  ],
  "github.copilot.chat.testGeneration.instructions": [
    {
      "text": "Generated tests must include edge cases"
    }
  ]
}
```

### 4.2 [提示模板 (Prompt Files)](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental)

提示模板是预定义的可重用对话模板，适合标准化常见任务流程：

#### 4.2.1 创建提示模板

**创建流程：**
1. **Ctrl+Shift+P** → **Chat: New Prompt File**
2. 选择位置：工作区 (`.github/prompts/`) 或用户配置
3. 编写模板内容

**文件结构：**
```markdown
---
mode: "agent"
tools: ["codebase", "search", "githubRepo"]
description: "Generate implementation plan for new features"
---

# Feature Implementation Planning

Please generate a detailed implementation plan for ${input:feature:Feature name}.

## Requirements
- Analyze existing codebase structure #codebase
- Identify files that need modification
- Provide step-by-step implementation approach
- Include testing strategy

## Output Format
1. **Overview**: Feature description and technical approach
2. **Impact Scope**: Files and modules that need modification
3. **Implementation Steps**: Detailed development workflow
4. **Testing Plan**: Unit tests and integration tests
```

#### 4.2.2 使用提示模板

| 方式 | 操作 | 说明 |
| --- | --- | --- |
| 命令执行 | **Chat: Run Prompt** | 从快速选择中选择模板 |
| 斜杠命令 | `/create-feature-plan` | 在 Chat 中直接调用 |
| 编辑器运行 | 打开 `.prompt.md` → 点击播放按钮 | 测试和迭代模板 |

**变量支持：**
```markdown
- Workspace variables: ${workspaceFolder}, ${workspaceFolderBasename}
- Selection variables: ${selection}, ${selectedText}  
- File variables: ${file}, ${fileBasename}
- Input variables: ${input:variableName:placeholder}
```

### 4.3 最佳实践

#### 4.3.1 指令编写技巧
* **简洁明确**：每条指令应该是单一、清晰的陈述
* **避免外部引用**：不要引用具体的编码标准文档链接
* **分文件管理**：按主题拆分指令文件，便于维护
* **团队共享**：将指令文件纳入版本控制，保证团队一致性
* **提供充分上下文**：在指令中包含相关文件的引用和项目背景信息
  ```markdown
  # 当前项目使用 React 18 + TypeScript + Tailwind CSS
  # 状态管理：Zustand，路由：React Router v6
  ```
* **使用有意义的函数命名**：在指令中要求使用描述性强的函数名，避免 `fetchData()` 这类模糊命名
* **具体的函数注释要求**：要求为函数添加详细注释，说明参数、返回值和业务逻辑
  ```markdown
  # 函数注释规范
  - 使用 JSDoc 格式
  - 必须包含 @param 和 @returns
  - 复杂业务逻辑需要 @example
  ```
* **示例代码引导**：在指令中提供代码示例，帮助 Copilot 理解期望的代码风格
  ```markdown
  # Error handling example
  try {
    const result = await apiCall();
    return { success: true, data: result };
  } catch (error) {
    logger.error('API call failed', { error: error.message });
    return { success: false, error: error.message };
  }
  ```
* **保持一致性和高质量标准**：在指令中强调代码质量要求，避免"垃圾进，垃圾出"
  ```markdown
  # Code quality requirements
  - All functions must include type annotations
  - Use const for immutable variables
  - Avoid any type, use specific type definitions
  - Follow project ESLint rules
  ```

#### 4.3.2 模板组织策略
```
.github/
├── prompts/
│   ├── feature-planning.prompt.md      # Feature planning
│   ├── code-review.prompt.md           # Code review  
│   ├── refactoring.prompt.md           # Refactoring guide
│   └── testing.prompt.md               # Test generation
└── instructions/
    ├── general.instructions.md         # General standards
    ├── frontend.instructions.md        # Frontend specific
    └── backend.instructions.md         # Backend specific
```

#### 4.3.3 配置同步

启用设置同步以在多设备间共享用户级配置：
1. **Settings Sync: Configure** → 勾选 **"Prompts and Instructions"**
2. 用户级模板自动同步到所有设备

---

## 5 · [MCP 服务器集成 (Model Context Protocol)](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

MCP (Model Context Protocol) 是一个开放标准，允许 AI 模型通过统一接口与外部工具、应用程序和数据源进行交互。通过 MCP 服务器，你可以扩展 Copilot 的能力，连接数据库、调用 API 或执行专门的任务。

> **注意**：MCP 支持在 VS Code 中目前处于预览状态，需要 VS Code 1.99 或更高版本。

### 5.1 启用 MCP 支持

在 VS Code 设置中启用 MCP 支持：
```json
{
  "chat.mcp.enabled": true,
  "chat.mcp.discovery.enabled": true  // 自动发现其他工具中定义的 MCP 服务器
}
```

或通过设置界面搜索 `chat.mcp.enabled` 并勾选启用。

### 5.2 配置 MCP 服务器

#### 5.2.1 工作区级配置

在项目根目录创建 `.vscode/mcp.json` 文件，与团队成员共享服务器配置：

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "perplexity-key",
      "description": "Perplexity API Key",
      "password": true
    }
  ],
  "servers": {
    "Perplexity": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "server-perplexity-ask"],
      "env": {
        "PERPLEXITY_API_KEY": "${input:perplexity-key}"
      }
    },
    "database": {
      "type": "stdio", 
      "command": "uvx",
      "args": ["mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "${workspaceFolder}/.env.local"
      }
    }
  }
}
```

#### 5.2.2 用户级配置

在用户设置 `settings.json` 中配置全局 MCP 服务器：

```json
{
  "mcp": {
    "servers": {
      "github": {
        "type": "stdio",
        "command": "uvx",
        "args": ["mcp-server-github"],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github-token}"
        }
      }
    }
  }
}
```

#### 5.2.3 快速添加服务器

使用命令面板快速配置：
1. **Ctrl+Shift+P** → **MCP: Add Server**
2. 选择服务器类型并提供配置信息
3. 选择存储位置：工作区设置或用户设置

### 5.3 在 Agent Mode中使用 MCP 工具

配置完成后，在 Chat View 的 Agent Mode 中使用 MCP 工具：

1. **切换到 Agent Mode**：在 Chat View 下拉菜单中选择 "Agent mode"
2. **选择工具**：点击 "Tools" 按钮查看可用的 MCP 工具
3. **添加资源**：使用 "Add Context" → "MCP Resources" 添加外部数据源
4. **发送请求**：输入 prompt，AI 将自动调用相关工具

**常用 MCP 工具示例：**

| 工具类型 | 用途 | 示例 Prompt |
| --- | --- | --- |
| 数据库连接 | 查询、分析数据表 | `分析用户表的数据分布，找出活跃用户特征` |
| Web 搜索 | 获取最新信息 | `搜索 React 19 的新特性并总结要点` |
| 文件系统 | 访问外部文件 | `读取配置文件并验证格式是否正确` |
| API 调用 | 集成第三方服务 | `调用天气 API 获取当前城市的天气信息` |

### 5.4 MCP 资源与提示

#### 5.4.1 使用 MCP 资源

MCP 服务器可以提供资源作为聊天上下文：
- **Add Context** → **MCP Resources** → 选择资源类型
- 资源可以是数据库表、文件目录、API 响应等
- 使用 **MCP: Browse Resources** 命令浏览可用资源

#### 5.4.2 预配置提示

MCP 服务器可以提供预定义的提示模板：
```text
/mcp.servername.promptname
```

例如：`/mcp.github.analyzeRepo` 分析仓库结构和代码质量。

### 5.5 管理 MCP 服务器

使用 **MCP: List Servers** 命令管理配置的服务器：

| 操作 | 说明 |
| --- | --- |
| **Start** | 启动未运行的服务器 |
| **Stop** | 停止正在运行的服务器 |
| **Restart** | 重启服务器 |
| **Show Output** | 查看服务器日志进行故障排查 |
| **Show Configuration** | 在编辑器中查看服务器配置 |
| **Browse Resources** | 浏览服务器提供的资源 |

---

## 6 · 高效 Prompt 技巧

1. **意图 + 约束 + 技术栈**：  
   `"优化此 SQL 查询，返回 id, name 字段，PostgreSQL 13，响应 < 200 ms"`  
2. **分步拆解**：先 `/new` 生成骨架，再 `/tests`，最后 `/fix` 性能  
3. **上下文锚点**：使用 `#file`, `#selection`, `#problems`，或 @participants (`@workspace`, `@terminal`)  
4. **迭代对话**：让 Copilot 给 3 个方案，比较后 `"改用函数式写法"` 再细化

---

## 7 · 安全与合规

* 在仓库根添加 **`.copilotignore`** 或通过企业 **Content Exclusion** 策略排除敏感路径  
* 默认忽略 `.env`、隐藏文件；Enterprise 支持中央策略与审计  
* 建议：  
  ```yaml
  # .copilotignore
  "/infra/terraform/**"
  "secret*.json"
  "*.pem"
  ```  
* 手动触发 **Developer: Reload Window** 以立即生效排除规则

---

## 8 · 设置与快捷键速查

| 动作 | macOS | Windows/Linux |
| --- | --- | --- |
| 接受补全 | **Tab** | Tab |
| 下一/上一建议 | ⌥] / ⌥[ | Alt+] / Alt+[ |
| 打开 Chat View | ⌃⌘I | Ctrl+Alt+I |
| Inline Chat (编辑器) | ⌘I | Ctrl+I |
| Quick Chat | ⇧⌥⌘L | Ctrl+Shift+Alt+L |
| 切换 Chat Mode | ⌘. | Ctrl+. |

关键设置：

```jsonc
"editor.inlineSuggestions.enabled": true,
"github.copilot.nextEditSuggestions.enabled": true,
"github.copilot.enable": {
  "*": true,
  "markdown": false        // 示例：禁用 Markdown
}
```

---

## 9 · 常见问题 & 故障排查

### 9.1 基础问题排查

| 症状 | 可能原因 | 解决方案 |
| --- | --- | --- |
| 没有补全 / Chat 报 "Rate limit" | 未登录 / 超配额 | 查看状态栏 Copilot 图标是否显示绿色；企业版可申请配额提升 |
| 建议质量差 | 上下文不足 | 打开相关文件、添加顶层注释或 `#context` 变量 |
| 临时关闭干扰 | 写 Demo 或直播 | 状态栏 → Copilot Menu → Disable Completions |

### 9.2 FAQ：什么时候使用 Edit Mode 而不是 Agent Mode？

根据以下标准选择 Edit Mode 或 Agent Mode：

| 考虑因素 | Edit Mode | Agent Mode |
| --- | --- | --- |
| **编辑范围** | 适合明确知道修改范围的纯代码编辑任务 | 适合复杂的端到端任务，需要自动确定上下文和文件 |
| **响应时间** | 更快，直接执行编辑 | 较慢，需要多步骤处理（分析上下文 → 制定计划 → 执行编辑） |
| **确定性** | 更可预测的结果 | 非确定性，会评估编辑结果并可能多次迭代 |
| **请求配额** | 单次 prompt 消耗较少 | 根据任务复杂度，单次 prompt 可能触发多个后端请求 |

**建议使用场景：**
- **Edit Mode**：重构特定函数、修复已知 bug、格式化代码
- **Agent Mode**：新功能开发、综合性调试、跨文件架构调整

### 9.3 自定义配置常见问题

| 问题 | 原因 | 解决方案 |
| --- | --- | --- |
| 指令不生效 | 设置未启用或文件路径错误 | 检查 `github.copilot.chat.codeGeneration.useInstructionFiles` 设置 |
| 提示模板无法找到 | 文件位置不在搜索路径 | 确认文件在 `.github/prompts/` 或配置 `chat.promptFilesLocations` |
| 指令冲突 | 多个文件包含矛盾的规则 | 整合指令文件，避免重复或相互矛盾的要求 |