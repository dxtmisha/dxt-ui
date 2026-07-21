// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { MotionTransformElement } from '../MotionTransformElement'

describe('MotionTransformElement', () => {
  it('should test element selectors and states', () => {
    const div = document.createElement('div')
    const contextDiv = document.createElement('div')
    const element = new MotionTransformElement(
      { animationShow: true } as any,
      ref(div),
      ref(contextDiv),
      'base-class'
    )

    expect(element.getElement()).toBe(div)
    expect(element.isAnimation()).toBe(true)
    expect(element.isSection()).toBe(false)
  })
})
