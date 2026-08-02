// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { SliderFocusType } from '../basicTypes'
import { SliderFocus } from '../SliderFocus'

describe('SliderFocus', () => {
  it('should initialize with max focus type by default', () => {
    const focus = new SliderFocus()

    expect(focus.get()).toBe(SliderFocusType.max)
    expect(focus.isMax()).toBe(true)
    expect(focus.isMin()).toBe(false)
  })

  it('should update focus type when set is called', () => {
    const focus = new SliderFocus()

    focus.set(SliderFocusType.min)

    expect(focus.get()).toBe(SliderFocusType.min)
    expect(focus.isMin()).toBe(true)
    expect(focus.isMax()).toBe(false)

    focus.set(SliderFocusType.max)

    expect(focus.get()).toBe(SliderFocusType.max)
    expect(focus.isMax()).toBe(true)
    expect(focus.isMin()).toBe(false)
  })
})
