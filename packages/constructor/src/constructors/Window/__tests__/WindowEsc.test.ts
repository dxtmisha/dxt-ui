// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { WindowEsc } from '../WindowEsc'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

describe('WindowEsc', () => {
  let openRef: any

  beforeEach(() => {
    openRef = ref(false)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should start listening when open state changes to true and active is true', async () => {
    new WindowEsc(openRef, undefined, true)

    // Watch triggers on value change
    openRef.value = true
    await nextTick()

    // Keydown event on body
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escapeEvent)

    // Since on callback is not set, it sets open to false
    expect(openRef.value).toBe(false)
  })

  it('should call custom callback when Escape is pressed if callback is provided', async () => {
    const customCallback = vi.fn()
    new WindowEsc(openRef, customCallback, true)

    openRef.value = true
    await nextTick()

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escapeEvent)

    expect(customCallback).toHaveBeenCalled()
    // open state should remain true since custom callback took over
    expect(openRef.value).toBe(true)
  })

  it('should stop listening when open state changes to false', async () => {
    const customCallback = vi.fn()
    new WindowEsc(openRef, customCallback, true)

    // Open first
    openRef.value = true
    await nextTick()

    // Close
    openRef.value = false
    await nextTick()

    // Escape event shouldn't trigger callback since it is stopped
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escapeEvent)

    expect(customCallback).not.toHaveBeenCalled()
  })

  it('should not listen or toggle state if active option resolves to false', async () => {
    const customCallback = vi.fn()
    new WindowEsc(openRef, customCallback, () => false)

    openRef.value = true
    await nextTick()

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escapeEvent)

    expect(customCallback).not.toHaveBeenCalled()
  })
})
