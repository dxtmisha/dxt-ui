// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { TextInclude } from '../../../classes/TextInclude'
import { InputFileItemButton } from '../InputFileItemButton'
import { InputFileItemEvent } from '../InputFileItemEvent'
import { InputFileItemFile } from '../InputFileItemFile'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemButton', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const fullProps = props as InputFileItemPropsBasic
    const file = new InputFileItemFile(fullProps)
    const emits = vi.fn()
    const eventHandler = new InputFileItemEvent(fullProps, file, emits)
    const text = new TextInclude(fullProps)
    const button = new InputFileItemButton(fullProps, eventHandler, text)

    return { button, emits, eventHandler, file, text }
  }

  describe('crop', () => {
    it('returns button configuration with readonly state when readonly is true', () => {
      const { button } = createHelper({ readonly: true })

      expect(button.crop).toEqual(expect.objectContaining({
        readonly: true,
        'aria-readonly': 'true'
      }))
    })

    it('returns button configuration with title and iconCrop', () => {
      const { button, text } = createHelper({
        iconCrop: 'crop-icon'
      })

      expect(button.crop).toEqual(expect.objectContaining({
        title: text.crop,
        icon: 'crop-icon',
        disabled: undefined,
        readonly: undefined,
        onClick: undefined,
        'aria-label': text.crop
      }))
    })
  })

  describe('delete', () => {
    it('returns button configuration with readonly state when readonly is true', () => {
      const { button } = createHelper({ readonly: true })

      expect(button.delete).toEqual(expect.objectContaining({
        readonly: true,
        'aria-readonly': 'true'
      }))
    })

    it('returns button configuration without onClick when confirmDelete is true', () => {
      const { button, text } = createHelper({
        confirmDelete: true,
        iconDelete: 'delete-icon'
      })

      expect(button.delete).toEqual(expect.objectContaining({
        title: text.delete,
        icon: 'delete-icon',
        onClick: undefined,
        'aria-label': text.delete
      }))
    })

    it('returns button configuration with onDelete callback when confirmDelete is false', () => {
      const { button, eventHandler, text } = createHelper({
        confirmDelete: false,
        iconDelete: 'delete-icon'
      })

      expect(button.delete).toEqual(expect.objectContaining({
        title: text.delete,
        icon: 'delete-icon',
        onClick: eventHandler.onDelete,
        'aria-label': text.delete
      }))
    })
  })

  describe('retry', () => {
    it('returns button configuration with readonly state when readonly is true', () => {
      const { button } = createHelper({ readonly: true })

      expect(button.retry).toEqual(expect.objectContaining({
        readonly: true,
        'aria-readonly': 'true'
      }))
    })

    it('returns button configuration with onRetry callback', () => {
      const { button, eventHandler, text } = createHelper({
        iconRetry: 'retry-icon'
      })

      expect(button.retry).toEqual(expect.objectContaining({
        title: text.retry,
        icon: 'retry-icon',
        onClick: eventHandler.onRetry,
        'aria-label': text.retry
      }))
    })
  })

  describe('common button properties', () => {
    it('passes disabled state and ARIA attributes', () => {
      const { button } = createHelper({
        disabled: true,
        iconRetry: 'retry-icon'
      })

      expect(button.retry).toEqual(expect.objectContaining({
        disabled: true,
        'aria-disabled': 'true'
      }))
    })
  })
})
