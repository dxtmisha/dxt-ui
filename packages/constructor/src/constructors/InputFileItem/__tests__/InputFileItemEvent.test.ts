// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { InputFileItemEvent } from '../InputFileItemEvent'
import { InputFileItemFile } from '../InputFileItemFile'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemEvent', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const fullProps = props as InputFileItemPropsBasic
    const file = new InputFileItemFile(fullProps)
    const emits = vi.fn()
    const eventHandler = new InputFileItemEvent(fullProps, file, emits)

    return { emits, eventHandler, file }
  }

  describe('onDelete', () => {
    it('stops event propagation and emits delete with resolved FieldFileValue from props.file', () => {
      const mockFile = new File([''], 'avatar.jpg', { type: 'image/jpeg', lastModified: 1000 })
      const { emits, eventHandler, file } = createHelper({ file: mockFile })
      const mockEvent = new MouseEvent('click')
      const stopSpy = vi.spyOn(mockEvent, 'stopPropagation')

      eventHandler.onDelete(mockEvent)
      expect(stopSpy).toHaveBeenCalled()
      expect(emits).toHaveBeenCalledWith('delete', file.get())
    })

    it('emits delete with props.value when file is not provided', () => {
      const mockValue = { id: 'file-123', name: 'report.pdf' }
      const { emits, eventHandler, file } = createHelper({ value: mockValue })

      eventHandler.onDelete()
      expect(emits).toHaveBeenCalledWith('delete', file.get())
    })
  })

  describe('onRetry', () => {
    it('stops event propagation and emits retry with resolved FieldFileValue from props.file', () => {
      const mockFile = new File([''], 'data.csv', { type: 'text/csv', lastModified: 2000 })
      const { emits, eventHandler, file } = createHelper({ file: mockFile })
      const mockEvent = new MouseEvent('click')
      const stopSpy = vi.spyOn(mockEvent, 'stopPropagation')

      eventHandler.onRetry(mockEvent)
      expect(stopSpy).toHaveBeenCalled()
      expect(emits).toHaveBeenCalledWith('retry', file.get())
    })

    it('emits retry with props.value when file is not provided', () => {
      const mockValue = { id: 'item-999', name: 'presentation.key' }
      const { emits, eventHandler, file } = createHelper({ value: mockValue })

      eventHandler.onRetry()
      expect(emits).toHaveBeenCalledWith('retry', file.get())
    })
  })
})
