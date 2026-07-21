// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { MaskCharacterLength } from '../MaskCharacterLength'
import { MaskBuffer } from '../MaskBuffer'
import { MaskFocus } from '../MaskFocus'
import { MaskType } from '../MaskType'
import { MaskRight } from '../MaskRight'

describe('MaskState (Buffer, CharacterLength, Focus, Right, Type)', () => {
  it('should test MaskCharacterLength', () => {
    const len = new MaskCharacterLength()
    expect(len.is()).toBe(false)
    expect(len.get()).toBe(0)

    len.set(5)
    expect(len.is()).toBe(true)
    expect(len.get()).toBe(5)
  })

  it('should test MaskBuffer', () => {
    const buf = new MaskBuffer()
    expect(buf.is()).toBe(false)
    expect(buf.get()).toEqual([])

    buf.add('a').add('b')
    expect(buf.is()).toBe(true)
    expect(buf.get()).toEqual(['a', 'b'])

    buf.resetChars()
    expect(buf.is()).toBe(false)

    buf.goStart()
    expect(buf.go('c')).toBe(false)
    expect(buf.get()).toEqual(['c'])

    buf.reset()
    expect(buf.go('d')).toBe(true)
  })

  it('should test MaskFocus', () => {
    const buf = new MaskBuffer()
    const focus = new MaskFocus(buf)

    expect(focus.is()).toBe(false)
    focus.in()
    expect(focus.is()).toBe(true)

    focus.out()
    expect(focus.is()).toBe(false)
  })

  it('should test MaskType', () => {
    const tDefault = new MaskType({})
    expect(tDefault.item).toBe('text')
    expect(tDefault.isNumber()).toBe(false)
    expect(tDefault.isDate()).toBe(false)

    const tNumber = new MaskType({ type: 'number' })
    expect(tNumber.isNumber()).toBe(true)
    expect(tNumber.isCurrencyOrNumber()).toBe(true)

    const tDate = new MaskType({ type: 'date' })
    expect(tDate.isDate()).toBe(true)
    expect(tDate.getByDate()).toBe('date')
  })

  it('should test MaskRight', () => {
    const tNumber = new MaskType({ type: 'number-format' })
    const right = new MaskRight({ align: 'right' }, tNumber)
    expect(right.isRight()).toBe(true)

    const left = new MaskRight({ align: 'left' }, tNumber)
    expect(left.isRight()).toBe(false)
  })
})
