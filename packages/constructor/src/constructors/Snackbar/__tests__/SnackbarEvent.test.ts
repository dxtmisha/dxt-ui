// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'

import type { SnackbarValue } from '../basicTypes'
import { SnackbarEvent } from '../SnackbarEvent'

describe('SnackbarEvent', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should emit show and hide events with exact value and item payload', () => {
      const emits = vi.fn()
      const event = new SnackbarEvent(emits)
      const item: SnackbarValue = {
        value: 'notification-1',
        delay: 4000,
        highPriority: true,
        data: { label: 'Saved successfully' }
      }

      event.show('notification-1', item)
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenNthCalledWith(1, 'show', 'notification-1', item)

      event.hide('notification-1', item)
      expect(emits).toHaveBeenCalledTimes(2)
      expect(emits).toHaveBeenNthCalledWith(2, 'hide', 'notification-1', item)
    })
  })

  describe('Boundary values, empty inputs, and immutability', () => {
    it('should safely no-op when emits callback is omitted', () => {
      const event = new SnackbarEvent()
      const item: SnackbarValue = { value: 'item-1', data: { label: 'Info' } }

      expect(() => event.show('item-1', item)).not.toThrow()
      expect(() => event.hide('item-1', item)).not.toThrow()
    })

    it('should forward empty values, special characters, and Unicode without mutating item', () => {
      const emits = vi.fn()
      const event = new SnackbarEvent(emits)
      const item: SnackbarValue = {
        value: 'уведомление-"tiếng Việt" 🚀',
        data: { label: 'Học tiếng Việt • Привет' }
      }
      const snapshot = { ...item, data: { ...item.data } }

      event.show('', item)
      event.hide('уведомление-"tiếng Việt" 🚀', item)

      expect(emits).toHaveBeenNthCalledWith(1, 'show', '', item)
      expect(emits).toHaveBeenNthCalledWith(2, 'hide', 'уведомление-"tiếng Việt" 🚀', item)
      expect(item).toEqual(snapshot)
    })
  })
})
