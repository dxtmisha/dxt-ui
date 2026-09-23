import { describe, it, expect, beforeEach } from 'vitest'
import { MaskBuffer } from '../MaskBuffer'

describe('MaskBuffer', () => {
  let maskBuffer: MaskBuffer

  beforeEach(() => {
    maskBuffer = new MaskBuffer()
  })

  it('should initialize with empty characters and not started', () => {
    expect(maskBuffer.is()).toBe(false)
    expect(maskBuffer.get()).toEqual([])
  })

  it('should add characters to buffer', () => {
    maskBuffer.add('1')
    expect(maskBuffer.is()).toBe(true)
    expect(maskBuffer.get()).toEqual(['1'])

    maskBuffer.add('a')
    expect(maskBuffer.get()).toEqual(['1', 'a'])
  })

  it('should start buffering and handle fast input via go()', () => {
    // First call: start is false, so it should start buffering and return true
    const firstResult = maskBuffer.go('x')
    expect(firstResult).toBe(true)
    expect(maskBuffer.get()).toEqual([])

    // Subsequent calls: start is true, so it adds characters and returns false
    const secondResult = maskBuffer.go('y')
    expect(secondResult).toBe(false)
    expect(maskBuffer.get()).toEqual(['y'])

    const thirdResult = maskBuffer.go('z')
    expect(thirdResult).toBe(false)
    expect(maskBuffer.get()).toEqual(['y', 'z'])
  })

  it('should manually set start state via goStart()', () => {
    maskBuffer.goStart()
    const result = maskBuffer.go('a')
    expect(result).toBe(false)
    expect(maskBuffer.get()).toEqual(['a'])
  })

  it('should reset characters only via resetChars()', () => {
    maskBuffer.goStart()
    maskBuffer.add('a').add('b')
    expect(maskBuffer.get()).toEqual(['a', 'b'])

    maskBuffer.resetChars()
    expect(maskBuffer.is()).toBe(false)
    expect(maskBuffer.get()).toEqual([])

    // Start state should still be active
    const nextResult = maskBuffer.go('c')
    expect(nextResult).toBe(false)
    expect(maskBuffer.get()).toEqual(['c'])
  })

  it('should reset all states via reset()', () => {
    maskBuffer.goStart()
    maskBuffer.add('1').add('2')

    maskBuffer.reset()
    expect(maskBuffer.is()).toBe(false)
    expect(maskBuffer.get()).toEqual([])

    // Start state should be reset to false, so go() returns true
    const result = maskBuffer.go('3')
    expect(result).toBe(true)
    expect(maskBuffer.get()).toEqual([])
  })
})
