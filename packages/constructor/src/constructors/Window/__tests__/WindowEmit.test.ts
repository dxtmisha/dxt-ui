// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { WindowEmit } from '../WindowEmit'
import type { WindowClassesData } from '../WindowClassesData'
import type { WindowElement } from '../WindowElement'

describe('WindowEmit', () => {
  it('should call emits with WindowEmitOptions mapping', () => {
    const mockMain = document.createElement('div')
    const mockControl = document.createElement('button')

    const mockClasses = {
      getId: vi.fn().mockReturnValue('window--123')
    } as unknown as WindowClassesData

    const mockElement = {
      getMain: vi.fn().mockReturnValue(mockMain),
      getControl: vi.fn().mockReturnValue(mockControl)
    } as unknown as WindowElement

    const mockEmits = vi.fn()

    const windowEmit = new WindowEmit(mockClasses, mockElement, mockEmits)

    windowEmit.on(true)

    expect(mockEmits).toHaveBeenCalledWith('window', {
      id: 'window--123',
      element: mockMain,
      control: mockControl,
      open: true
    })

    windowEmit.on(false)

    expect(mockEmits).toHaveBeenCalledWith('window', {
      id: 'window--123',
      element: mockMain,
      control: mockControl,
      open: false
    })
  })
})
