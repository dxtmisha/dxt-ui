// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { MotionAxisElement } from '../MotionAxisElement'

describe('MotionAxisElement', () => {
  it('should test MotionAxisElement states and scrolling blockers', () => {
    const div = document.createElement('div')
    const scrollDiv = document.createElement('div')
    scrollDiv.className = 'base-class__scroll'
    scrollDiv.appendChild(div)

    const el = new MotionAxisElement(ref(div), 'base-class')

    expect(el.getStart()).toBe(false)
    el.toStart()
    expect(el.getStart()).toBe(true)

    expect(el.getMove()).toBe(false)
    el.toMove()
    expect(el.getMove()).toBe(true)

    el.blockScroll()
    expect(scrollDiv.classList.contains('base-class__scroll--hidden')).toBe(true)

    el.returnScroll()
    expect(scrollDiv.classList.contains('base-class__scroll--hidden')).toBe(false)
  })
})
