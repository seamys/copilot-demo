# Project Coding Standards

## Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for classes and constructors
- Use UPPER_SNAKE_CASE for constants
- Use kebab-case for file names

## Code Style
- Use 2 spaces for indentation
- Use single quotes for strings
- No semicolons at line endings (unless necessary)
- Maximum line length of 100 characters

## Function Standards
- Functions must have JSDoc comments
- Parameters and return values must have type descriptions
- Complex logic must include example code
- Use async/await instead of Promise.then()

## Error Handling
- Wrap async operations with try/catch
- Error messages must include context information
- Log errors for debugging purposes
- Provide user-friendly error messages

## Comment Standards
- Code must have clear comments explaining business logic
- TODO comments must include assignee and timestamp
- Complex algorithms must have step-by-step explanations
- API interfaces must have complete documentation comments

## Example Code Style
```javascript
/**
 * User authentication service
 * @param {string} email - User email address
 * @param {string} password - User password
 * @returns {Promise<{success: boolean, token?: string, error?: string}>}
 * @example
 * const result = await authenticateUser('user@example.com', 'password123')
 * if (result.success) {
 *   console.log('Login successful:', result.token)
 * }
 */
async function authenticateUser(email, password) {
  try {
    // Validate user input
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' }
    }
    
    // Find user and verify password
    const user = await User.findOne({ email })
    const isValid = await bcrypt.compare(password, user.password)
    
    if (isValid) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
      return { success: true, token }
    }
    
    return { success: false, error: 'Invalid email or password' }
  } catch (error) {
    console.error('Authentication failed:', error.message)
    return { success: false, error: 'Internal server error' }
  }
}
```
