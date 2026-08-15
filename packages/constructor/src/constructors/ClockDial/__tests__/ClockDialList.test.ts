// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ClockDialList } from '../ClockDialList'

describe('ClockDialList', () => {
  it('generates 12 items for type 12', () => {
    const listManager = new ClockDialList({ type: '12' }, 'd-clock-dial')
    const items = listManager.marks.value

    expect(items.length).toBe(12)
    expect(items[0].value).toBe(1)
    expect(items[11].value).toBe(12)
    expect(items[11].rotate).toBe('360deg')
    expect(items[0].section).toBe(false)
    expect(listManager.maxCount).toBe(12)
    expect(listManager.rotate).toBe(30)
  })

  it('generates 24 items for type 24 with section flags', () => {
    const listManager = new ClockDialList({ type: '24' }, 'd-clock-dial')
    const items = listManager.marks.value

    expect(items.length).toBe(24)
    expect(items[0].value).toBe(1)
    expect(items[0].section).toBe(false)
    expect(items[12].value).toBe(13)
    expect(items[12].section).toBe(true)
    expect(items[23].value).toBe(0)
    expect(items[23].section).toBe(true)
    expect(listManager.maxCount).toBe(24)
  })

  it('generates 60 items for minute mode', () => {
    const listManager = new ClockDialList({ type: 'minute' }, 'd-clock-dial')
    const items = listManager.marks.value

    expect(items.length).toBe(60)
    expect(items[0].value).toBe(1)
    expect(items[59].value).toBe(0)
    expect(items[59].rotate).toBe('360deg')
    expect(listManager.maxCount).toBe(60)
    expect(listManager.rotate).toBe(6)
  })

  it('marks items as disabled when outside min/max bounds', () => {
    const listManager = new ClockDialList({ type: '12', min: 3, max: 8 }, 'd-clock-dial')
    const items = listManager.marks.value

    expect(items[0].disabled).toBe(true)
    expect(items[1].disabled).toBe(true)
    expect(items[2].disabled).toBe(false)
    expect(items[7].disabled).toBe(false)
    expect(items[8].disabled).toBe(true)
  })

  it('correctly checks isSection for 24-hour clock', () => {
    const listManager = new ClockDialList({ type: '24' }, 'd-clock-dial')

    expect(listManager.isSection(5)).toBe(false)
    expect(listManager.isSection(13)).toBe(true)
    expect(listManager.isSection(0)).toBe(true)
    expect(listManager.isSection(undefined)).toBe(false)
  })

  it('finds clock mark items by value', () => {
    const listManager = new ClockDialList({ type: '12' }, 'd-clock-dial')

    expect(listManager.find(6)?.name).toBe('06')
    expect(listManager.find(undefined)).toBeUndefined()
    expect(listManager.find(-1)).toBeUndefined()
  })
})
