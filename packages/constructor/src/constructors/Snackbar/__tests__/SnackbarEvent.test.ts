// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { SnackbarEvent } from '../SnackbarEvent'

describe('SnackbarEvent', () => {
  it('should trigger emits callbacks on show and hide', () => {
    const emits = vi.fn()
    const handler = new SnackbarEvent(emits)

    const item = { text: 'Hello' } as any
    handler.show('item-1', item)
    expect(emits).toHaveBeenCalledWith('show', 'item-1', item)

    handler.hide('item-1', item)
    expect(emits).toHaveBeenCalledWith('hide', 'item-1', item)
  })
})
