import { describe, expect, it } from 'vitest'
import { DesignTypescript } from '../DesignTypescript'

describe('DesignTypescript', () => {
  it('instantiates and handles missing file without error', () => {
    const tsParser = new DesignTypescript('non-existent-file.ts')
    expect(tsParser.getTypes()).toEqual([])
    expect(tsParser.getType('NonExistent')).toBeUndefined()
  })
})
