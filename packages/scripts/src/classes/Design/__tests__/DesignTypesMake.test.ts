import { afterEach, describe, expect, it, vi } from 'vitest'
import { DesignTypesAi } from '../DesignTypesAi'
import { DesignTypesMake } from '../DesignTypesMake'
import { DesignTypesMakeAbstract } from '../DesignTypesMakeAbstract'

class TestDesignTypesMake extends DesignTypesMake {
  public testHasJSDoc(content: string) {
    return this.hasJSDoc(content)
  }

  public testCleanContent(content: string) {
    return this.cleanContent(content)
  }

  public testGetAiTypesConcurrency() {
    return this.AI_TYPES_CONCURRENCY
  }

  public async testSaveListAi(files: any[], fullJsContent: string) {
    return this.saveListAi(files, fullJsContent)
  }
}

describe('DesignTypesMake', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const ai = new DesignTypesAi('dist-temporary')
  const make = new TestDesignTypesMake(ai, 'dist-temporary')

  it('extends DesignTypesMakeAbstract', () => {
    expect(make).toBeInstanceOf(DesignTypesMakeAbstract)
  })

  it('checks content for JSDoc', () => {
    expect(make.testHasJSDoc('/** JSDoc comment */')).toBe(true)
    expect(make.testHasJSDoc('// regular comment')).toBe(false)
  })

  it('cleans content via transformer', () => {
    const raw = [
      'import { foo } from \'./foo\';',
      'export type A = string;'
    ].join('\n')

    const cleaned = make.testCleanContent(raw)
    expect(cleaned).not.toContain('import { foo } from \'./foo\'')
    expect(cleaned).toContain('export type A = string;')
  })

  it('processes AI types concurrently with limited parallelism', async () => {
    const saveFileSpy = vi.spyOn((make as any).files, 'saveFile').mockImplementation(() => {})

    let inFlight = 0
    let maxInFlight = 0

    vi.spyOn(make as any, 'toAiEdit').mockImplementation(async () => {
      inFlight += 1
      maxInFlight = Math.max(maxInFlight, inFlight)
      await new Promise(resolve => setTimeout(resolve, 10))
      inFlight -= 1
      return 'export type Optimized = 1;'
    })

    const concurrencyLimit = make.testGetAiTypesConcurrency()
    const filesCount = concurrencyLimit + 4

    const files = Array.from({ length: filesCount }, (_item, index) => ({
      path: `file-${index}.d.ts`,
      content: `import { example } from './example';\nexport type File${index} = 1;`
    }))

    await make.testSaveListAi(files, '')

    expect(maxInFlight).toBeGreaterThan(1)
    expect(maxInFlight).toBeLessThanOrEqual(concurrencyLimit)
    expect(saveFileSpy).toHaveBeenCalledTimes(filesCount)
  })
})
