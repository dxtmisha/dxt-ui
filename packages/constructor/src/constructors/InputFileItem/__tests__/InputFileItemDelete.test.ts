// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { TextInclude } from '../../../classes/TextInclude'
import { InputFileItemDelete } from '../InputFileItemDelete'
import { InputFileItemEvent } from '../InputFileItemEvent'
import { InputFileItemFile } from '../InputFileItemFile'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemDelete', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const fullProps = props as InputFileItemPropsBasic
    const file = new InputFileItemFile(fullProps)
    const emits = vi.fn()
    const eventHandler = new InputFileItemEvent(fullProps, file, emits)
    const text = new TextInclude(fullProps)
    const deleteHelper = new InputFileItemDelete(fullProps, eventHandler, text)

    return { deleteHelper, emits, eventHandler, file, text }
  }

  describe('dialog', () => {
    it('returns dialog configuration object with props, text, and event handler', () => {
      const { deleteHelper, eventHandler, text } = createHelper({
        iconWarning: 'warning-icon'
      })

      expect(deleteHelper.dialog).toEqual({
        icon: 'warning-icon',
        description: text.deleteConfirm,
        clickOkAndClose: true,
        onOk: eventHandler.onDelete
      })
    })
  })

  describe('is', () => {
    it('returns true when confirmDelete is not specified (default)', () => {
      const { deleteHelper } = createHelper()

      expect(deleteHelper.is()).toBe(true)
    })

    it('returns true when confirmDelete is true', () => {
      const { deleteHelper } = createHelper({ confirmDelete: true })

      expect(deleteHelper.is()).toBe(true)
    })

    it('returns false when confirmDelete is false', () => {
      const { deleteHelper } = createHelper({ confirmDelete: false })

      expect(deleteHelper.is()).toBe(false)
    })
  })
})
