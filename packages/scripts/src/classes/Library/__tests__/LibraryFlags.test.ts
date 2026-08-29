import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryFlags } from '../LibraryFlags'
import { LibraryItems } from '../LibraryItems'

describe('LibraryFlags', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('generates TypeScript and JSON flag registry files', () => {
    const items = new LibraryItems()
    const writeSpy = vi.spyOn(items, 'write').mockImplementation(() => {})

    const flags = new LibraryFlags(items)
    flags.make()

    expect(writeSpy).toHaveBeenCalledTimes(2)
    // 1st call: TS file
    expect(writeSpy).toHaveBeenNthCalledWith(
      1,
      'flags',
      expect.arrayContaining([
        expect.stringContaining('import { Icons } from \'@dxtmisha/functional\''),
        expect.stringContaining('export const makeFlags = (): void => {')
      ])
    )
    // 2nd call: JSON file
    expect(writeSpy).toHaveBeenNthCalledWith(
      2,
      'flags',
      expect.any(Array),
      'json'
    )
  })
})
