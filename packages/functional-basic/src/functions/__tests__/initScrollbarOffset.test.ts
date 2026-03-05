// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { initScrollbarOffset } from '../initScrollbarOffset'
import * as isDomRuntimeModule from '../isDomRuntime'
import { ScrollbarWidth } from '../../classes/ScrollbarWidth'

describe('initScrollbarOffset', () => {
  let setPropertyMock: any

  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)

    // Mock the ScrollbarWidth class to resolve asynchronously with a specific width
    vi.spyOn(ScrollbarWidth, 'get').mockResolvedValue(15)

    // Mock document.body.style.setProperty
    setPropertyMock = vi.fn()
    Object.defineProperty(document.body, 'style', {
      value: { setProperty: setPropertyMock },
      configurable: true
    })
  })

  it('should do nothing if not in a DOM runtime environment', async () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

    await initScrollbarOffset()

    expect(ScrollbarWidth.get).not.toHaveBeenCalled()
    expect(setPropertyMock).not.toHaveBeenCalled()
  })

  it('should get the scrollbar width and set the --sys-scrollbar-offset CSS variable', async () => {
    await initScrollbarOffset()

    expect(ScrollbarWidth.get).toHaveBeenCalled()
    expect(setPropertyMock).toHaveBeenCalledWith('--sys-scrollbar-offset', '15px')
  })
})
