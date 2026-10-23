// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ScrollbarWidth } from '../../classes/ScrollbarWidth'
import * as isDomRuntimeModule from '../isDomRuntime'
import { initScrollbarOffset } from '../initScrollbarOffset'

describe('initScrollbarOffset', () => {
  let setPropertyMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    vi.spyOn(ScrollbarWidth, 'get').mockResolvedValue(15)

    setPropertyMock = vi.fn()
    Object.defineProperty(document.body, 'style', {
      value: { setProperty: setPropertyMock },
      configurable: true
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should retrieve scrollbar width and set the --sys-scrollbar-offset CSS variable on document.body', async () => {
      await initScrollbarOffset()

      expect(ScrollbarWidth.get).toHaveBeenCalledTimes(1)
      expect(setPropertyMock).toHaveBeenCalledTimes(1)
      expect(setPropertyMock).toHaveBeenCalledWith('--sys-scrollbar-offset', '15px')
    })

    it('should resolve to undefined after applying the CSS custom property', async () => {
      const result = await initScrollbarOffset()
      expect(result).toBeUndefined()
    })
  })

  describe('Boundary values and width variations', () => {
    it('should format 0 width as 0px (overlay scrollbars on macOS / mobile)', async () => {
      vi.spyOn(ScrollbarWidth, 'get').mockResolvedValue(0)

      await initScrollbarOffset()

      expect(setPropertyMock).toHaveBeenCalledWith('--sys-scrollbar-offset', '0px')
    })

    it('should format fractional / sub-pixel scrollbar widths (high-DPI scaling)', async () => {
      vi.spyOn(ScrollbarWidth, 'get').mockResolvedValue(14.5)

      await initScrollbarOffset()

      expect(setPropertyMock).toHaveBeenCalledWith('--sys-scrollbar-offset', '14.5px')
    })
  })

  describe('SSR and non-DOM environment safety', () => {
    it('should do nothing and not query ScrollbarWidth when isDomRuntime returns false', async () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      await initScrollbarOffset()

      expect(ScrollbarWidth.get).not.toHaveBeenCalled()
      expect(setPropertyMock).not.toHaveBeenCalled()
    })
  })

  describe('Repeated invocations and state updates', () => {
    it('should update --sys-scrollbar-offset on subsequent calls when scrollbar width changes', async () => {
      vi.spyOn(ScrollbarWidth, 'get')
        .mockResolvedValueOnce(17)
        .mockResolvedValueOnce(0)

      await initScrollbarOffset()
      expect(setPropertyMock).toHaveBeenLastCalledWith('--sys-scrollbar-offset', '17px')

      await initScrollbarOffset()
      expect(setPropertyMock).toHaveBeenLastCalledWith('--sys-scrollbar-offset', '0px')
      expect(setPropertyMock).toHaveBeenCalledTimes(2)
    })
  })
})
