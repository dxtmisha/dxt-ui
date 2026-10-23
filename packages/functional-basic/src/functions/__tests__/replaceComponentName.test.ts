import { describe, expect, it } from 'vitest'
import { replaceComponentName } from '../replaceComponentName'

describe('replaceComponentName', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should replace component name in both opening and closing tags', () => {
      const text = '<div><MyComponent>Content</MyComponent></div>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<div><NewComponent>Content</NewComponent></div>'
      )
    })

    it('should replace component name in self-closing tags', () => {
      const text = '<MyComponent />'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<NewComponent />'
      )
    })

    it('should preserve attributes, props, and event bindings on the replaced tag', () => {
      const text = '<MyComponent id="hero" :active="true" @click="handle">Body</MyComponent>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<NewComponent id="hero" :active="true" @click="handle">Body</NewComponent>'
      )
    })

    it('should replace multiple and nested occurrences of the component name', () => {
      const text = '<Wrapper><MyComponent>First</MyComponent><MyComponent><MyComponent>Inner</MyComponent></MyComponent></Wrapper>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<Wrapper><NewComponent>First</NewComponent><NewComponent><NewComponent>Inner</NewComponent></NewComponent></Wrapper>'
      )
    })

    it('should support kebab-case to PascalCase component replacement', () => {
      const text = '<d1-button type="primary">Click</d1-button>'

      expect(replaceComponentName(text, 'd1-button', 'D1Button')).toBe(
        '<D1Button type="primary">Click</D1Button>'
      )
    })
  })

  describe('Case insensitivity and non-matching tags', () => {
    it('should match opening and closing tags case-insensitively', () => {
      const text = '<mycomponent>One</MYCOMPONENT><MyComponent>Two</myComponent>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<NewComponent>One</NewComponent><NewComponent>Two</NewComponent>'
      )
    })

    it('should leave text unchanged when the target component name is not present', () => {
      const text = '<div><span>Content</span></div>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<div><span>Content</span></div>'
      )
    })

    it('should not replace plain text occurrences of the component name without angle brackets', () => {
      const text = '<div>MyComponent is rendered inside <MyComponent>MyComponent</MyComponent></div>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<div>MyComponent is rendered inside <NewComponent>MyComponent</NewComponent></div>'
      )
    })
  })

  describe('Empty, whitespace, and undefined inputs', () => {
    it('should return undefined when text is undefined', () => {
      expect(replaceComponentName(undefined, 'Old', 'New')).toBeUndefined()
    })

    it('should return empty string for empty or whitespace-only text', () => {
      expect(replaceComponentName('', 'MyComponent', 'NewComponent')).toBe('')
      expect(replaceComponentName('   \t\n  ', 'MyComponent', 'NewComponent')).toBe('')
    })

    it('should trim leading and trailing whitespace and newlines around replaced markup', () => {
      const text = '\n  <MyComponent>\n    <span>Content</span>\n  </MyComponent>  \n'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<NewComponent>\n    <span>Content</span>\n  </NewComponent>'
      )
    })
  })

  describe('Multilingual and Unicode content', () => {
    it('should preserve Cyrillic, Vietnamese, CJK, and Emoji content inside replaced tags', () => {
      const text = '<MyComponent title="Привет">Học tiếng Việt こんにちは 🚀</MyComponent>'

      expect(replaceComponentName(text, 'MyComponent', 'NewComponent')).toBe(
        '<NewComponent title="Привет">Học tiếng Việt こんにちは 🚀</NewComponent>'
      )
    })
  })
})
