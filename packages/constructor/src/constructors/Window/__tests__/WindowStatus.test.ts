// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { WindowStatus } from '../WindowStatus'
import { WindowStatusItem } from '../basicTypes'

describe('WindowStatus', () => {
  let mockElement: any
  let mainElement: HTMLDivElement
  let parentElement: HTMLDivElement

  beforeEach(() => {
    mainElement = document.createElement('div')
    parentElement = document.createElement('div')
    parentElement.dataset.windowTeleport = 'window-123'
    parentElement.appendChild(mainElement)

    mockElement = {
      getMain: vi.fn().mockReturnValue(mainElement)
    }
  })

  it('should initialize with close status', () => {
    const status = new WindowStatus(mockElement)
    expect(status.item.value).toBe(WindowStatusItem.close)
    expect(status.isOpen()).toBe(false)
    expect(status.isHide()).toBe(false)
  })

  it('should update element datasets on set()', () => {
    const status = new WindowStatus(mockElement)

    status.set(WindowStatusItem.open)

    expect(status.item.value).toBe(WindowStatusItem.open)
    expect(status.isOpen()).toBe(true)
    expect(status.isHide()).toBe(false)
    expect(mainElement.dataset.status).toBe('open')
    expect(parentElement.dataset.status).toBe('open')
  })

  it('should correctly set each status helper', () => {
    const status = new WindowStatus(mockElement)

    status.toDisplay()
    expect(status.item.value).toBe(WindowStatusItem.display)

    status.toPreparation()
    expect(status.item.value).toBe(WindowStatusItem.preparation)

    status.toFlash()
    expect(status.item.value).toBe(WindowStatusItem.flash)

    status.toOpen()
    expect(status.item.value).toBe(WindowStatusItem.open)

    status.toHide()
    expect(status.item.value).toBe(WindowStatusItem.hide)
    expect(status.isHide()).toBe(true)

    status.toClose()
    expect(status.item.value).toBe(WindowStatusItem.close)
  })
})
