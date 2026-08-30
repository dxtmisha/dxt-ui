import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesMakeFile } from '../DesignTypesMakeFile'

class TestDesignTypesMakeFile extends DesignTypesMakeFile {
  public testIsContent(content?: string) {
    return this.isContent(content)
  }

  public testGetMd5Header(md5?: string, isProcessed?: boolean) {
    return this.getMd5Header(md5, isProcessed)
  }

  public testGetTemporaryDirectory() {
    return this.getTemporaryDirectory()
  }

  public testGetDistDirectory() {
    return this.getDistDirectory()
  }
}

describe('DesignTypesMakeFile', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const ai = new DesignTypesAi('dist-temporary')
  const makeFile = new TestDesignTypesMakeFile(ai, 'dist-temporary', 'dist')

  it('checks content for exports', () => {
    expect(makeFile.testIsContent('export const x = 1')).toBe(true)
    expect(makeFile.testIsContent('const x = 1')).toBe(false)
  })

  it('generates MD5 hashes and formatted headers', () => {
    const md5 = ai.getMd5('export type X = 1')
    expect(md5).toHaveLength(32)

    expect(makeFile.testGetMd5Header(md5, false)).toBe(`// md5:${md5}`)
    expect(makeFile.testGetMd5Header(md5, true)).toBe(`// md5:${md5} true`)
  })

  it('combines file items into one string', () => {
    const list = [
      { path: 'a.d.ts', content: 'export type A = 1;' },
      { path: 'b.d.ts', content: 'export type B = 2;' }
    ] as any
    expect(makeFile.toOneFile(list)).toBe('export type A = 1;\n\nexport type B = 2;')
  })

  it('resolves temporary directory and dist directory correctly', () => {
    expect(makeFile.testGetTemporaryDirectory()).toBe('dist-temporary')
    expect(makeFile.testGetDistDirectory()).toBe('dist')
    const customMakeFile = new TestDesignTypesMakeFile(new DesignTypesAi(), 'my-temp', 'my-dist')
    expect(customMakeFile.testGetTemporaryDirectory()).toBe('my-temp')
    expect(customMakeFile.testGetDistDirectory()).toBe('my-dist')
  })
})
