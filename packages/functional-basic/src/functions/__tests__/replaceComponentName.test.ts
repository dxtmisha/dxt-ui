import { describe, expect, it } from 'vitest'
import { replaceComponentName } from '../replaceComponentName'

describe('replaceComponentName', () => {
  it('should replace component name in opening and closing tags', () => {
    const text = '<div><MyComponent>Content</MyComponent></div>'
    const name = 'MyComponent'
    const componentName = 'NewComponent'
    const expected = '<div><NewComponent>Content</NewComponent></div>'

    expect(replaceComponentName(text, name, componentName)).toBe(expected)
  })

  it('should replace component name only in opening tag', () => {
    const text = '<MyComponent />'
    const name = 'MyComponent'
    const componentName = 'NewComponent'
    const expected = '<NewComponent />'

    expect(replaceComponentName(text, name, componentName)).toBe(expected)
  })

  it('should handle undefined text', () => {
    expect(replaceComponentName(undefined, 'Old', 'New')).toBeUndefined()
  })

  it('should trim whitespace', () => {
    const text = '  <MyComponent></MyComponent>  '
    const name = 'MyComponent'
    const componentName = 'NewComponent'
    const expected = '<NewComponent></NewComponent>'

    expect(replaceComponentName(text, name, componentName)).toBe(expected)
  })

  it('should not replace if component name not found', () => {
    const text = '<div><span>Content</span></div>'
    const name = 'MyComponent'
    const componentName = 'NewComponent'
    const expected = '<div><span>Content</span></div>'

    expect(replaceComponentName(text, name, componentName)).toBe(expected)
  })

  it('should replace nested components correctly', () => {
    const text = '<Wrapper><MyComponent>Inner</MyComponent></Wrapper>'
    const name = 'MyComponent'
    const componentName = 'NewComponent'
    const expected = '<Wrapper><NewComponent>Inner</NewComponent></Wrapper>'

    expect(replaceComponentName(text, name, componentName)).toBe(expected)
  })
})
