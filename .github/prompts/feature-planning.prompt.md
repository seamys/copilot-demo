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
5. **Risk Assessment**: Potential issues and mitigation strategies

## Implementation Guidelines
- Follow project coding standards from .github/copilot-instructions.md
- Ensure backward compatibility
- Include proper error handling
- Add comprehensive logging
- Update documentation as needed
