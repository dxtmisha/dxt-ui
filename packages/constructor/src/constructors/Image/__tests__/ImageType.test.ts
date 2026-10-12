// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ImageType } from '../ImageType'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('ImageType', () => {
  it('should identify different image types correctly', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })

    const t1 = new ImageType({ value: 'http://path/to/img.png' }, clientOnly)
    expect(t1.item.value).toBe('image')

    const t2 = new ImageType({ value: '#fff' }, clientOnly)
    expect(t2.item.value).toBe('color')

    const t3 = new ImageType({ value: 'flag-us' }, clientOnly)
    expect(t3.item.value).toBe('flag')

    const t4 = new ImageType({ value: 'outlined-home' }, clientOnly)
    expect(t4.item.value).toBe('outlined')

    const t5 = new ImageType({ value: 'two-tone-home' }, clientOnly)
    expect(t5.item.value).toBe('two-tone')

    const t6 = new ImageType({ value: 'filled-home' }, clientOnly)
    expect(t6.item.value).toBe('filled')
  })
})
