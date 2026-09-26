// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { InputFileItemEvent } from '../InputFileItemEvent'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemEvent', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const emits = vi.fn()
    const eventHandler = new InputFileItemEvent(props as InputFileItemPropsBasic, emits)

    return { emits, eventHandler }
  }

  describe('onClick', () => {
    it('emits click event when element is enabled and not readonly', () => {
      const { emits, eventHandler } = createHelper({ disabled: false, readonly: false })
      const mockEvent = new MouseEvent('click')

      eventHandler.onClick(mockEvent)
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('click', mockEvent)
    })

    it('does not emit click when disabled', () => {
      const { emits, eventHandler } = createHelper({ disabled: true })
      const mockEvent = new MouseEvent('click')

      eventHandler.onClick(mockEvent)
      expect(emits).not.toHaveBeenCalled()
    })

    it('does not emit click when readonly', () => {
      const { emits, eventHandler } = createHelper({ readonly: true })
      const mockEvent = new MouseEvent('click')

      eventHandler.onClick(mockEvent)
      expect(emits).not.toHaveBeenCalled()
    })
  })

  describe('onDelete', () => {
    it('stops event propagation and emits delete with props.file', () => {
      const mockFile = new File([''], 'avatar.jpg', { type: 'image/jpeg' })
      const { emits, eventHandler } = createHelper({ file: mockFile })
      const mockEvent = new MouseEvent('click')
      const stopSpy = vi.spyOn(mockEvent, 'stopPropagation')

      eventHandler.onDelete(mockEvent)
      expect(stopSpy).toHaveBeenCalled()
      expect(emits).toHaveBeenCalledWith('delete', mockFile)
    })

    it('emits delete with props.item when file is not provided', () => {
      const mockItem = { id: 'file-123', name: 'report.pdf' }
      const { emits, eventHandler } = createHelper({ item: mockItem })

      eventHandler.onDelete()
      expect(emits).toHaveBeenCalledWith('delete', mockItem)
    })
  })

  describe('onRetry', () => {
    it('stops event propagation and emits retry with props.file', () => {
      const mockFile = new File([''], 'data.csv', { type: 'text/csv' })
      const { emits, eventHandler } = createHelper({ file: mockFile })
      const mockEvent = new MouseEvent('click')
      const stopSpy = vi.spyOn(mockEvent, 'stopPropagation')

      eventHandler.onRetry(mockEvent)
      expect(stopSpy).toHaveBeenCalled()
      expect(emits).toHaveBeenCalledWith('retry', mockFile)
    })

    it('emits retry with props.item when file is not provided', () => {
      const mockItem = { id: 'item-999', name: 'presentation.key' }
      const { emits, eventHandler } = createHelper({ item: mockItem })

      eventHandler.onRetry()
      expect(emits).toHaveBeenCalledWith('retry', mockItem)
    })
  })
})
