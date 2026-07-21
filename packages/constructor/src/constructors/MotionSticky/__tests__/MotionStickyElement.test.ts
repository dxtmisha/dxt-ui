// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionStickyElement } from '../MotionStickyElement'

describe('MotionStickyElement', () => {
  it('should calculate positions and update styles status', () => {
    const div = document.createElement('div')
    const emits = vi.fn()
    const stickyEl = new MotionStickyElement({ classActivity: 'active-sticky' }, ref(div), emits)

    expect(stickyEl.getElement()).toBe(div)
    expect(stickyEl.eventElement).toBe(window)

    stickyEl.setStatus(true)
    expect(div.classList.contains('active-sticky')).toBe(true)
    expect(div.dataset.sticky).toBe('sticky')
    expect(emits).toHaveBeenCalledWith('sticky', true)

    stickyEl.setStatus(false)
    expect(div.classList.contains('active-sticky')).toBe(false)
    expect(div.dataset.sticky).toBe('none')
  })
})
