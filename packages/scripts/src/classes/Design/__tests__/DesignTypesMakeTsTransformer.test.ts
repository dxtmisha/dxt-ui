import { describe, expect, it } from 'vitest'
import { DesignTypesMakeTsTransformer } from '../DesignTypesMakeTsTransformer'

describe('DesignTypesMakeTsTransformer', () => {
  const transformer = new DesignTypesMakeTsTransformer()

  it('cleans content by removing relative imports and re-exports', () => {
    const raw = [
      'import { foo } from \'./foo\';',
      'import \'./style\';',
      'export * from \'./bar\';',
      '// comment line',
      'export type A = string;'
    ].join('\n')

    const cleaned = transformer.cleanContent(raw)
    expect(cleaned).not.toContain('import { foo } from \'./foo\'')
    expect(cleaned).not.toContain('export * from \'./bar\'')
    expect(cleaned).toContain('export type A = string;')
  })

  it('cleans content via AST with multiline and structural precision', () => {
    const raw = [
      'import { helper } from \'@dxtmisha/functional-basic\';',
      'declare class Example {',
      '  private configuration: {',
      '    option: boolean;',
      '  };',
      '  protected execute(',
      '    option: string',
      '  ): void;',
      '  public method(): string;',
      '}',
      'export { extra } from \'./extra\';',
      'export type A = string;'
    ].join('\n')

    const cleaned = transformer.cleanContent(raw)

    expect(cleaned).not.toContain('private configuration')
    expect(cleaned).not.toContain('protected execute')
    expect(cleaned).not.toContain('\'./extra\'')
    expect(cleaned).toContain('@dxtmisha/functional-basic')
    expect(cleaned).toContain('public method(): string;')
    expect(cleaned).toContain('export type A = string;')
  })
})
