import { describe, it, expect } from 'vitest'
import { AlertHide } from '../AlertHide'

describe('AlertHide', () => {
  it('should initialize with default states', () => {
    const hide = new AlertHide('my-alert')

    expect(hide.destroy.value).toBe(false)
    expect(hide.hide.value).toBe(false)
    expect(hide.isHide).toBe(false)
  })

  it('should return correct classes', () => {
    const hide = new AlertHide('my-alert')
    expect(hide.classes).toEqual({
      'my-alert--hide': false
    })

    hide.setHide(true)
    expect(hide.classes).toEqual({
      'my-alert--hide': true
    })
  })

  it('should set destroy and hide state correctly', () => {
    const hide = new AlertHide('my-alert')

    hide.setDestroy(true)
    expect(hide.destroy.value).toBe(true)

    hide.setHide(true)
    expect(hide.hide.value).toBe(true)
  })
})
