import { describe, it, expect } from 'vitest'
import { getElementSafeScript } from '../getElementSafeScript'

describe('getElementSafeScript', () => {
  it('should return a script tag with the correct ID and JSON data', () => {
    const data = { a: 1, b: 'test' }
    const id = 'test-id'
    const result = getElementSafeScript(id, data)
    expect(result).toBe('<script id="test-id" type="application/json">{"a":1,"b":"test"}</script>')
  })

  it('should escape </script> tags in the JSON data', () => {
    const data = { content: '</script><script>alert(1)</script>' }
    const id = 'xss-id'
    const result = getElementSafeScript(id, data)
    
    // The escaped version should be present
    expect(result).toContain('<\\/script>')
    
    // Full match check (note the escaping of backslash for the string literal)
    expect(result).toBe('<script id="xss-id" type="application/json">{"content":"<\\/script><script>alert(1)<\\/script>"}</script>')
    
    // We check that </script> only exists as the final closing tag
    expect(result.indexOf('</script>')).toBe(result.length - 9)
  })

  it('should handle null data', () => {
    const id = 'null-id'
    const result = getElementSafeScript(id, null)
    expect(result).toBe('<script id="null-id" type="application/json">null</script>')
  })

  it('should handle empty data', () => {
    const id = 'empty-id'
    const result = getElementSafeScript(id, {})
    expect(result).toBe('<script id="empty-id" type="application/json">{}</script>')
  })
})
