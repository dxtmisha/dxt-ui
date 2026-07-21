// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { WindowFlash } from '../WindowFlash'
import type { WindowProps } from '../props'

describe('WindowFlash', () => {
  let mockProps: Partial<WindowProps>
  let mockClasses: any

  beforeEach(() => {
    mockProps = {
      flash: false
    }
    mockClasses = {
      getId: vi.fn().mockReturnValue('window-123'),
      getClassStatus: vi.fn().mockReturnValue('d1-window[data-status="hide"]'),
      list: {
        control: 'd1-window__control'
      }
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('should return is() based on props.flash', () => {
    const windowFlash = new WindowFlash(mockProps as WindowProps, mockClasses)
    expect(windowFlash.is()).toBe(false)

    mockProps.flash = true
    expect(windowFlash.is()).toBe(true)
  })

  it('should return isOpen() true if flash is true or control is true', () => {
    const windowFlash = new WindowFlash(mockProps as WindowProps, mockClasses)
    expect(windowFlash.isOpen()).toBe(false)

    // Set control to true by mapping target
    const targetElement = document.createElement('button')
    targetElement.className = 'd1-window__control'
    targetElement.dataset.window = 'window-123'
    document.body.appendChild(targetElement)

    windowFlash.setControl(targetElement)
    expect(windowFlash.isOpen()).toBe(true)
  })

  it('should return isClose() true if flash is true or query selector matches status hide', () => {
    const windowFlash = new WindowFlash(mockProps as WindowProps, mockClasses)
    expect(windowFlash.isClose()).toBe(false)

    // Create a hidden status element in body
    const hiddenElement = document.createElement('div')
    hiddenElement.className = 'd1-window'
    hiddenElement.dataset.status = 'hide'
    document.body.appendChild(hiddenElement)

    expect(windowFlash.isClose()).toBe(true)
  })
})
