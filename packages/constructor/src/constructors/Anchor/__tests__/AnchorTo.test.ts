// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { goScrollSmooth } from '@dxtmisha/functional'
import { AnchorTo } from '../AnchorTo'
import type { AnchorHref } from '../AnchorHref'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional')>('@dxtmisha/functional')
  return {
    ...actual,
    goScrollSmooth: vi.fn()
  }
})

describe('AnchorTo', () => {
  let mockElement: HTMLAnchorElement
  let mockHref: { get: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    mockElement = document.createElement('a')
    mockHref = {
      get: vi.fn().mockReturnValue('#anchor-key')
    }
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should scroll smoothly and replace history state when element and href exist', () => {
    const replaceStateSpy = vi.spyOn(history, 'replaceState')
    const anchorTo = new AnchorTo(
      { behavior: 'smooth', block: 'start', inline: 'nearest', shift: 10 },
      ref(mockElement),
      () => mockHref as unknown as AnchorHref
    )

    anchorTo.go()

    expect(goScrollSmooth).toHaveBeenCalledWith(
      mockElement,
      { behavior: 'smooth', block: 'start', inline: 'nearest' },
      10
    )
    expect(replaceStateSpy).toHaveBeenCalledWith({}, '', '#anchor-key')
  })

  it('should handle numeric string shift and skip replaceState when href is undefined', () => {
    const replaceStateSpy = vi.spyOn(history, 'replaceState')
    mockHref.get.mockReturnValue(undefined)

    const anchorTo = new AnchorTo(
      { shift: '0' },
      ref(mockElement),
      () => mockHref as unknown as AnchorHref
    )

    anchorTo.go()

    expect(goScrollSmooth).toHaveBeenCalledWith(
      mockElement,
      { behavior: undefined, block: undefined, inline: undefined },
      0
    )
    expect(replaceStateSpy).not.toHaveBeenCalled()
  })

  it('should do nothing when element ref is undefined', () => {
    const replaceStateSpy = vi.spyOn(history, 'replaceState')
    const anchorTo = new AnchorTo(
      {},
      ref(undefined),
      () => mockHref as unknown as AnchorHref
    )

    anchorTo.go()

    expect(goScrollSmooth).not.toHaveBeenCalled()
    expect(replaceStateSpy).not.toHaveBeenCalled()
  })
})
