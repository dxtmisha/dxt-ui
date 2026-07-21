// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ImageData } from '../ImageData'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('ImageData', () => {
  it('should manage image loading properties and states', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = {
      item: { value: 'image' }
    } as any

    const data = new ImageData({ value: 'http://path/to/img.png' }, clientOnly, type)
    expect(data.is()).toBe(true)
  })
})
