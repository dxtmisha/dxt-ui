/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getHydrationData } from '../getHydrationData'

describe('getHydrationData', () => {
  const testId = 'test-hydration-id'

  beforeEach(() => {
    // Clean up any existing test scripts
    const existingScript = document.getElementById(testId)
    if (existingScript) {
      existingScript.remove()
    }
  })

  afterEach(() => {
    // Clean up test scripts after each test
    const script = document.getElementById(testId)
    if (script) {
      script.remove()
    }
  })

  it('should parse and return valid JSON data from script tag', () => {
    const testData = { name: 'test', value: 123, nested: { key: 'value' } }
    const scriptContent = JSON.stringify(testData)

    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = scriptContent
    document.body.appendChild(script)

    const result = getHydrationData(testId, null)

    expect(result).toEqual(testData)
  })

  it('should return default value if script tag is not found', () => {
    const defaultValue = { default: 'value' }
    const result = getHydrationData(testId, defaultValue)

    expect(result).toEqual(defaultValue)
  })

  it('should return default value if JSON parsing fails', () => {
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = 'invalid json {{'
    document.body.appendChild(script)

    const defaultValue = { default: 'value' }
    const result = getHydrationData(testId, defaultValue)

    expect(result).toEqual(defaultValue)
  })

  it('should remove script tag after reading when remove is true (default)', () => {
    const testData = { removed: true }
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = JSON.stringify(testData)
    document.body.appendChild(script)

    expect(document.getElementById(testId)).toBeTruthy()

    const result = getHydrationData(testId, null)

    expect(result).toEqual(testData)
    expect(document.getElementById(testId)).toBeFalsy()
  })

  it('should keep script tag after reading when remove is false', () => {
    const testData = { kept: true }
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = JSON.stringify(testData)
    document.body.appendChild(script)

    expect(document.getElementById(testId)).toBeTruthy()

    const result = getHydrationData(testId, null, false)

    expect(result).toEqual(testData)
    expect(document.getElementById(testId)).toBeTruthy()
  })

  it('should handle empty JSON object', () => {
    const testData = {}
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = JSON.stringify(testData)
    document.body.appendChild(script)

    const result = getHydrationData(testId, null)

    expect(result).toEqual({})
  })

  it('should handle array data', () => {
    const testData = [1, 2, 3, 'test']
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = JSON.stringify(testData)
    document.body.appendChild(script)

    const result = getHydrationData(testId, null)

    expect(result).toEqual(testData)
  })

  it('should handle null values in JSON', () => {
    const testData = { value: null, another: 'string' }
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = JSON.stringify(testData)
    document.body.appendChild(script)

    const result = getHydrationData(testId, null)

    expect(result).toEqual(testData)
  })

  it('should handle complex nested objects', () => {
    const testData = {
      user: {
        name: 'Test User',
        settings: {
          theme: 'dark',
          notifications: true
        }
      },
      items: ['item1', 'item2']
    }
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = JSON.stringify(testData)
    document.body.appendChild(script)

    const result = getHydrationData(testId, null)

    expect(result).toEqual(testData)
  })

  it('should handle script with empty content', () => {
    const script = document.createElement('script')
    script.id = testId
    script.type = 'application/json'
    script.textContent = ''
    document.body.appendChild(script)

    const defaultValue = { default: 'value' }
    const result = getHydrationData(testId, defaultValue)

    expect(result).toEqual(defaultValue)
  })

  it('should not throw errors when document is undefined', () => {
    // Mock document as undefined (SSR scenario)
    const originalDocument = globalThis.document
    // @ts-expect-error - intentionally setting to undefined for testing
    global.document = undefined as any

    try {
      const defaultValue = { ssr: 'value' }
      const result = getHydrationData(testId, defaultValue)
      expect(result).toEqual(defaultValue)
    } finally {
      // Restore document
      globalThis.document = originalDocument
    }
  })
})
