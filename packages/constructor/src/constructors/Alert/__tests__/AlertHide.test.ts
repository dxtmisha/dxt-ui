import './testWarnings'
import { describe, expect, it } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { AlertHide } from '../AlertHide'

describe('AlertHide', () => {
  it('should initialize with default false states and isolated instances', () => {
    const firstHide = new AlertHide(new DesignName('d1.alert'))
    const secondHide = new AlertHide(new DesignName('d1.alert'))

    expect(firstHide.destroy.value).toBe(false)
    expect(firstHide.hide.value).toBe(false)
    expect(firstHide.isHide).toBe(false)

    firstHide.setHide(true)
    expect(firstHide.isHide).toBe(true)
    expect(secondHide.isHide).toBe(false)
  })

  it('should return reactive status classes object based on hide state', () => {
    const hide = new AlertHide(new DesignName('my.alert'))

    expect(hide.classes).toEqual({
      'my-alert--hide': false
    })

    hide.setHide(true)
    expect(hide.classes).toEqual({
      'my-alert--hide': true
    })

    hide.setHide(false)
    expect(hide.classes).toEqual({
      'my-alert--hide': false
    })
  })

  it('should update destroy and hide states and return this for chaining', () => {
    const hide = new AlertHide(new DesignName('my.alert'))

    expect(hide.setHide(true)).toBe(hide)
    expect(hide.setDestroy(true)).toBe(hide)
    expect(hide.hide.value).toBe(true)
    expect(hide.destroy.value).toBe(true)
  })
})
