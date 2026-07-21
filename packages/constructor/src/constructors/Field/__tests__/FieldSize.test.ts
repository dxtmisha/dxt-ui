// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { ref } from 'vue'
import { FieldSize } from '../FieldSize'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: vi.fn(),
    onUpdated: vi.fn()
  }
})

describe('FieldSize', () => {
  let originalRaf: typeof requestAnimationFrame

  beforeAll(() => {
    originalRaf = window.requestAnimationFrame
    window.requestAnimationFrame = (callback) => {
      callback(0)
      return 0
    }
  })

  afterAll(() => {
    window.requestAnimationFrame = originalRaf
  })

  it('should compute offsets and update elements styles', () => {
    const label = document.createElement('label')
    const spaceEl = document.createElement('div')
    spaceEl.className = 'field-class__body__scoreboard__space'
    Object.defineProperty(spaceEl, 'offsetLeft', { value: 10, configurable: true })
    Object.defineProperty(spaceEl, 'offsetWidth', { value: 50, configurable: true })

    const parentEl = document.createElement('div')
    Object.defineProperty(parentEl, 'offsetWidth', { value: 200, configurable: true })

    label.appendChild(parentEl)
    parentEl.appendChild(spaceEl)

    const prefixEl = document.createElement('div')
    prefixEl.className = 'field-class__prefix'
    Object.defineProperty(prefixEl, 'offsetLeft', { value: 5, configurable: true })
    label.appendChild(prefixEl)

    const fieldSize = new FieldSize(ref(label), 'field-class')
    fieldSize.update()

    expect(label.style.getPropertyValue('--field-class-sys-left')).toBe('10px')
    expect(label.style.getPropertyValue('--field-class-sys-right')).toBe('140px')
    expect(label.style.getPropertyValue('--field-class-sys-title')).toBe('5px')
    expect(label.classList.contains('field-class--show')).toBe(true)
  })
})
