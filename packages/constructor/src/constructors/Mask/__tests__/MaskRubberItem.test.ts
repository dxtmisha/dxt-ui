import { describe, it, expect, beforeEach } from 'vitest'
import { MaskRubberItem } from '../MaskRubberItem'

describe('MaskRubberItem', () => {
  let rubberItem: MaskRubberItem

  beforeEach(() => {
    rubberItem = new MaskRubberItem()
  })

  it('should initialize with no entries', () => {
    expect(rubberItem.is('num')).toBe(false)
    expect(rubberItem.getByIndex('num')).toBe(0)
  })

  it('should increment group count via add()', () => {
    rubberItem.add('num')
    expect(rubberItem.is('num')).toBe(true)
    expect(rubberItem.getByIndex('num')).toBe(1)

    rubberItem.add('num')
    expect(rubberItem.getByIndex('num')).toBe(2)
  })

  it('should decrement group count via pop()', () => {
    rubberItem.add('num').add('num')
    expect(rubberItem.getByIndex('num')).toBe(2)

    const firstPop = rubberItem.pop('num')
    expect(firstPop).toBe(true)
    expect(rubberItem.getByIndex('num')).toBe(1)

    const secondPop = rubberItem.pop('num')
    expect(secondPop).toBe(true)
    expect(rubberItem.getByIndex('num')).toBe(0)
    expect(rubberItem.is('num')).toBe(false)

    // Cannot pop beyond zero
    const thirdPop = rubberItem.pop('num')
    expect(thirdPop).toBe(false)
    expect(rubberItem.getByIndex('num')).toBe(0)
  })

  it('should clear all entries via reset()', () => {
    rubberItem.add('a').add('b')
    rubberItem.reset()

    expect(rubberItem.is('a')).toBe(false)
    expect(rubberItem.is('b')).toBe(false)
  })

  it('should expand mask template according to stored counts', () => {
    rubberItem.add('n').add('n') // 2 additional 'n' characters
    const expanded = rubberItem.expandMask('n.f')

    expect(expanded).toBe('nnn.f')
  })
})
