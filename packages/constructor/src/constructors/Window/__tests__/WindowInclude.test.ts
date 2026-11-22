// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'
import type { ModelInclude } from '../../../classes/ModelInclude'
import { WindowInclude } from '../WindowInclude'
import type { WindowEmitOptions, WindowEmitsInclude, WindowExposeInclude, WindowPropsInclude } from '../basicTypes'

type MockWindowElement = Pick<WindowExposeInclude, 'getId' | 'getOpen'> & {
  toggle: ReturnType<typeof vi.fn>
}

describe('WindowInclude', () => {
  let mockWindowElement: MockWindowElement
  let mockProps: Partial<WindowPropsInclude>
  let mockExtra: Partial<WindowPropsInclude['windowAttrs']>
  let mockEmits: ConstrEmit<WindowEmitsInclude>
  let mockModel: Pick<ModelInclude<boolean>, 'emit'>
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
    mockEmits = vi.fn() as unknown as ConstrEmit<WindowEmitsInclude>
    mockModel = {
      emit: vi.fn()
    }

    windowInclude = new WindowInclude(
      mockProps as WindowPropsInclude,
      new DesignName('d1.dialog'),
      undefined,
      () => mockExtra,
      'index-key',
      mockEmits,
      'title-id',
      'desc-id',
      () => mockModel as ModelInclude<boolean>
    )

    ;(windowInclude as unknown as { element: { value: MockWindowElement } }).element.value = mockWindowElement
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return correct bindings from toBinds()', () => {
    const bindings = windowInclude.binds.value

    expect(bindings.disabled).toBe(false)
    expect(bindings.autoClose).toBe(true)
    expect(bindings.ariaLabelledby).toBe('title-id')
    expect(bindings.ariaDescribedby).toBe('desc-id')

    bindings.preparation?.()
    expect(mockExtra?.preparation).toHaveBeenCalled()

    const openingResult = bindings.opening?.()
    expect(openingResult).toBe(true)

    const closingResult = bindings.closing?.()
    expect(closingResult).toBe(true)
  })

  it('should expose API methods proxying back to window component ref', () => {
    const api = windowInclude.expose

    expect(api.getWindowElement()).toStrictEqual(mockWindowElement)

    api.getId()
    expect(mockWindowElement.getId).toHaveBeenCalled()

    const openResult = api.getOpen()
    expect(mockWindowElement.getOpen).toHaveBeenCalled()
    expect(openResult).toBe(true)
  })

  it('should handle onWindow events by updating model and emitting window parameters', () => {
    const emitOptions: WindowEmitOptions = {
      id: 'window-123',
      element: document.createElement('div'),
      control: document.createElement('button'),
      open: true
    }

    const onWindow = windowInclude.binds.value.onWindow as (options: WindowEmitOptions) => void
    onWindow(emitOptions)

    expect(mockEmits).toHaveBeenCalledWith('window', emitOptions)
    expect(mockModel.emit).toHaveBeenCalledWith(true)
  })

  it('should preserve windowAttrs disabled, autoClose, disableFocusReturn, and aria attributes when top-level props omit them', () => {
    const includeWithWindowAttrs = new WindowInclude(
      {
        windowAttrs: {
          disabled: true,
          autoClose: false,
          disableFocusReturn: true,
          ariaLabelledby: 'attrs-title-id',
          ariaDescribedby: 'attrs-desc-id'
        }
      } as WindowPropsInclude,
      new DesignName('d1.dialog')
    )

    expect(includeWithWindowAttrs.binds.value.disabled).toBe(true)
    expect(includeWithWindowAttrs.binds.value.autoClose).toBe(false)
    expect(includeWithWindowAttrs.binds.value.disableFocusReturn).toBe(true)
    expect(includeWithWindowAttrs.binds.value.ariaLabelledby).toBe('attrs-title-id')
    expect(includeWithWindowAttrs.binds.value.ariaDescribedby).toBe('attrs-desc-id')
  })

  it('should forward disableFocusReturn from top-level props when true or false and override windowAttrs', () => {
    const includeTrue = new WindowInclude(
      {
        disableFocusReturn: true,
        windowAttrs: {
          disableFocusReturn: false
        }
      } as WindowPropsInclude,
      new DesignName('d1.dialog')
    )
    expect(includeTrue.binds.value.disableFocusReturn).toBe(true)

    const includeFalse = new WindowInclude(
      {
        disableFocusReturn: false,
        windowAttrs: {
          disableFocusReturn: true
        }
      } as WindowPropsInclude,
      new DesignName('d1.dialog')
    )
    expect(includeFalse.binds.value.disableFocusReturn).toBe(false)
  })

  it('should support getter function props including disableFocusReturn and compose onWindow handlers via mergeProps', () => {
    const externalOnWindow = vi.fn()
    const getterInclude = new WindowInclude(
      () => ({
        disabled: true,
        disableFocusReturn: true,
        windowAttrs: {
          onWindow: externalOnWindow
        }
      }) as WindowPropsInclude,
      new DesignName('d1.dialog'),
      undefined,
      undefined,
      undefined,
      mockEmits,
      undefined,
      undefined,
      () => mockModel as ModelInclude<boolean>
    )

    const bindings = getterInclude.binds.value
    const emitOptions: WindowEmitOptions = {
      id: 'window-123',
      element: document.createElement('div'),
      control: document.createElement('button'),
      open: true
    }

    expect(bindings.disabled).toBe(true)
    expect(bindings.disableFocusReturn).toBe(true)
    expect(Array.isArray(bindings.onWindow)).toBe(true)

    const handlers = bindings.onWindow as unknown as Array<(options: WindowEmitOptions) => void>
    handlers.forEach(handler => handler(emitOptions))

    expect(externalOnWindow).toHaveBeenCalledWith(emitOptions)
    expect(mockModel.emit).toHaveBeenCalledWith(true)
    expect(mockEmits).toHaveBeenCalledWith('window', emitOptions)
  })
})
