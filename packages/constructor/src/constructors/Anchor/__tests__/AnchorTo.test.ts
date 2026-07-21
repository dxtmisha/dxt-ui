// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { goScrollSmooth } from '@dxtmisha/functional'
import { AnchorTo } from '../AnchorTo'
import { AnchorHref } from '../AnchorHref'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
  return {
    ...actual,
    goScrollSmooth: vi.fn()
  }
})

describe('AnchorTo', () => {
  let mockElement: HTMLElement
  let mockHref: AnchorHref

  beforeEach(() => {
    mockElement = document.createElement('div')
    mockHref = { get: () => '#anchor-key' } as any
    vi.clearAllMocks()
  })

  it('should scroll smoothly and replace history state', () => {
    const replaceStateSpy = vi.spyOn(history, 'replaceState')
    const anchorTo = new AnchorTo(
      { behavior: 'smooth', block: 'start', inline: 'nearest', shift: 10 },
      ref(mockElement),
      mockHref
    )

    anchorTo.go()

    expect(goScrollSmooth).toHaveBeenCalledWith(
      mockElement,
      { behavior: 'smooth', block: 'start', inline: 'nearest' },
      10
    )
    expect(replaceStateSpy).toHaveBeenCalledWith({}, '', '#anchor-key')
  })

  it('should do nothing if element value is not set', () => {
    const replaceStateSpy = vi.spyOn(history, 'replaceState')
    const anchorTo = new AnchorTo({}, ref(undefined), mockHref)

    anchorTo.go()

    expect(goScrollSmooth).not.toHaveBeenCalled()
    expect(replaceStateSpy).not.toHaveBeenCalled()
  })
})
