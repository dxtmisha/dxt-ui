// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { WindowEsc } from '../WindowEsc'

describe('WindowEsc', () => {
  let openRef: any

  beforeEach(() => {
    openRef = ref(false)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should start listening when open state changes to true and active is true', async () => {
    const esc = new WindowEsc(openRef, undefined, true)
    esc.onMounted()

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
    const esc = new WindowEsc(openRef, customCallback, true)
    esc.onMounted()

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
    const esc = new WindowEsc(openRef, customCallback, true)
    esc.onMounted()

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
    const esc = new WindowEsc(openRef, customCallback, () => false)
    esc.onMounted()

    openRef.value = true
    await nextTick()

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escapeEvent)

    expect(customCallback).not.toHaveBeenCalled()
  })

  it('should ignore Escape during IME composition and close only the top-most nested window', async () => {
    const outerCallback = vi.fn()
    const innerCallback = vi.fn()
    const outerOpen = ref(false)
    const innerOpen = ref(false)

    const outerEsc = new WindowEsc(outerOpen, outerCallback, true)
    const innerEsc = new WindowEsc(innerOpen, innerCallback, true)
    outerEsc.onMounted()
    innerEsc.onMounted()

    outerOpen.value = true
    await nextTick()
    innerOpen.value = true
    await nextTick()

    // IME composition active -> neither should close
    const composingEscape = new KeyboardEvent('keydown', { key: 'Escape', isComposing: true })
    document.body.dispatchEvent(composingEscape)
    expect(innerCallback).not.toHaveBeenCalled()
    expect(outerCallback).not.toHaveBeenCalled()

    // First real Escape closes only inner window
    const escape1 = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escape1)
    expect(innerCallback).toHaveBeenCalledTimes(1)
    expect(outerCallback).not.toHaveBeenCalled()

    // Second Escape closes outer window
    const escape2 = new KeyboardEvent('keydown', { key: 'Escape' })
    document.body.dispatchEvent(escape2)
    expect(outerCallback).toHaveBeenCalledTimes(1)

    outerEsc.onUnmounted()
    innerEsc.onUnmounted()
  })
})
