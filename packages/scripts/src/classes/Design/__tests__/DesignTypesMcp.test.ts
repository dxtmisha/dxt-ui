import { describe, expect, it } from 'vitest'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesMcp } from '../DesignTypesMcp'
import { DesignTypesPrompts } from '../DesignTypesPrompts'

class TestDesignTypesMcp extends DesignTypesMcp {
  public testGetMimeType(file: string) {
    return this.getMimeType(file)
  }
}

describe('DesignTypesMcp', () => {
  it('determines correct MIME types by file extension', () => {
    const ai = new DesignTypesAi('dist')
    const prompts = new DesignTypesPrompts('ai-resources', ai)
    const mcp = new TestDesignTypesMcp(ai, prompts)

    expect(mcp.testGetMimeType('image.webp')).toBe('image/webp')
    expect(mcp.testGetMimeType('image.png')).toBe('image/png')
    expect(mcp.testGetMimeType('image.jpg')).toBe('image/jpeg')
    expect(mcp.testGetMimeType('vector.svg')).toBe('image/svg+xml')
    expect(mcp.testGetMimeType('page.html')).toBe('text/html')
    expect(mcp.testGetMimeType('styles.css')).toBe('text/css')
    expect(mcp.testGetMimeType('data.json')).toBe('application/json')
    expect(mcp.testGetMimeType('doc.md')).toBe('text/markdown')
    expect(mcp.testGetMimeType('plain.txt')).toBe('text/plain')
  })

  it('checks if MCP file exists with is()', () => {
    const ai = new DesignTypesAi('dist')
    const prompts = new DesignTypesPrompts('ai-resources', ai)
    const mcp = new DesignTypesMcp(ai, prompts)

    expect(typeof mcp.is()).toBe('boolean')
  })
})
