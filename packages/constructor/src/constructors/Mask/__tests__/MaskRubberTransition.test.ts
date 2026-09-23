import { describe, it, expect, beforeEach } from 'vitest'
import { MaskRubberTransition } from '../MaskRubberTransition'

describe('MaskRubberTransition', () => {
  let transition: MaskRubberTransition

  beforeEach(() => {
    transition = new MaskRubberTransition()
  })

  it('should initialize with empty transition symbol', () => {
    expect(transition.is()).toBe(false)
    expect(transition.item.value).toBe('')
  })

  it('should set transition symbol', () => {
    transition.set('.')

    expect(transition.is()).toBe(true)
    expect(transition.item.value).toBe('.')
    expect(transition.isChar('.')).toBe(true)
    expect(transition.isChar(',')).toBe(false)
  })

  it('should reset transition symbol to empty', () => {
    transition.set('.')
    transition.reset()

    expect(transition.is()).toBe(false)
    expect(transition.item.value).toBe('')
  })
})
