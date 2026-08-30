import { describe, expect, it } from 'vitest'
import { DesignTypesAi } from '../DesignTypesAi'

describe('DesignTypesAi', () => {
  it('initializes dirArray and project name', () => {
    const ai = new DesignTypesAi('dist/types')
    expect(ai.getDirArray()).toEqual(['dist', 'types'])
    expect(typeof ai.getProjectName()).toBe('string')
  })

  it('generates MD5 hash for content', () => {
    const ai = new DesignTypesAi('dist')
    const md5 = ai.getMd5('hello world')
    expect(md5).toHaveLength(32)
    expect(ai.getMd5('  hello world  ')).toBe(md5)
  })

  it('identifies declaration and JS files with isFile and isFileJs', () => {
    const ai = new DesignTypesAi('dist')
    expect(ai.isFile('index.d.ts')).toBe(true)
    expect(ai.isFile('props.d.ts')).toBe(true)
    expect(ai.isFile('index.ts')).toBe(false)
    expect(ai.isFileJs('index.js')).toBe(true)
    expect(ai.isFileJs('index.ts')).toBe(false)
  })
})
