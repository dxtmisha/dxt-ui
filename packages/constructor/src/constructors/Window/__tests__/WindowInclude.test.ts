// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { WindowInclude } from '../WindowInclude'
import type { WindowPropsInclude } from '../basicTypes'

describe('WindowInclude', () => {
  let mockWindowElement: any
  let mockProps: Partial<WindowPropsInclude>
  let mockExtra: any
  let mockEmits: any
  let mockModel: any
  let windowInclude: WindowInclude

  beforeEach(() => {
    mockWindowElement = {
      toggle: vi.fn(),
      getId: vi.fn().mockReturnValue('window-123'),
      getOpen: vi.fn().mockReturnValue(true)
    }
    mockProps = {
      disabled: false,
      autoClose: true,
      windowAttrs: {
        preparation: vi.fn(),
        opening: vi.fn().mockReturnValue(true),
        closing: vi.fn().mockReturnValue(true)
      }
    }
    mockExtra = {
      preparation: vi.fn()
    }
    mockEmits = vi.fn()
    mockModel = {
      emit: vi.fn()
    }

    windowInclude = new WindowInclude(
      'd1-dialog',
      mockProps as WindowPropsInclude,
      undefined, // components
      () => mockExtra, // extra
      'index-key',
      mockEmits,
      'title-id',
      'desc-id',
      mockModel
    )

    ;(windowInclude as any).element.value = mockWindowElement
  })

  it('should return correct bindings from toBinds()', () => {
    const bindings = windowInclude.binds.value

    expect(bindings.disabled).toBe(false)
    expect(bindings.autoClose).toBe(true)
    expect(bindings.ariaLabelledby).toBe('title-id')
    expect(bindings.ariaDescribedby).toBe('desc-id')

    // Call execution wrappers for preparation/opening/closing
    bindings.preparation()
    expect(mockExtra.preparation).toHaveBeenCalled()

    const openingResult = bindings.opening()
    expect(openingResult).toBe(true)

    const closingResult = bindings.closing()
    expect(closingResult).toBe(true)
  })

  it('should expose API methods proxying back to window component ref', () => {
    const api = windowInclude.expose

    expect(api.getWindowElement()).toStrictEqual(mockWindowElement)

    // Call exposed proxy methods (mocked via exposeItems)
    api.getId()
    expect(mockWindowElement.getId).toHaveBeenCalled()

    const openResult = api.getOpen()
    expect(mockWindowElement.getOpen).toHaveBeenCalled()
    expect(openResult).toBe(true)
  })

  it('should handle onWindow events by updating model and emitting window parameters', () => {
    const emitOptions = {
      id: 'window-123',
      element: document.createElement('div'),
      control: document.createElement('button'),
      open: true
    }

    ;(windowInclude as any).onWindow(emitOptions)

    expect(mockEmits).toHaveBeenCalledWith('window', emitOptions)
    expect(mockModel.emit).toHaveBeenCalledWith(true)
  })
})
