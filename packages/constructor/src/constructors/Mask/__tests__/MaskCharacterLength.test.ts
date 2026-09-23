import { describe, it, expect, beforeEach } from 'vitest'
import { MaskCharacterLength } from '../MaskCharacterLength'

describe('MaskCharacterLength', () => {
  let characterLength: MaskCharacterLength

  beforeEach(() => {
    characterLength = new MaskCharacterLength()
  })

  it('should initialize with length 0 and is() false', () => {
    expect(characterLength.get()).toBe(0)
    expect(characterLength.is()).toBe(false)
  })

  it('should set new length and update is() accordingly', () => {
    characterLength.set(5)
    expect(characterLength.get()).toBe(5)
    expect(characterLength.is()).toBe(true)

    characterLength.set(0)
    expect(characterLength.get()).toBe(0)
    expect(characterLength.is()).toBe(false)
  })

  it('should return this for chaining on set()', () => {
    const instance = characterLength.set(10)
    expect(instance).toBe(characterLength)
    expect(characterLength.get()).toBe(10)
  })
})
