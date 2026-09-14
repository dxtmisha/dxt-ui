// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { CollageEven } from '../CollageEven'

describe('CollageEven', () => {
  it('should initialize with false and generate correct classes', () => {
    const even = new CollageEven('d-collage')

    expect(even.is()).toBe(false)
    expect(even.classes).toEqual({
      'd-collage--even': false
    })
  })

  it('should update state when set is called', () => {
    const even = new CollageEven('d-collage')

    even.set(true)
    expect(even.is()).toBe(true)
    expect(even.classes).toEqual({
      'd-collage--even': true
    })

    even.set(false)
    expect(even.is()).toBe(false)
    expect(even.classes).toEqual({
      'd-collage--even': false
    })
  })
})
