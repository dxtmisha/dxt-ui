// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { reactive, toRefs, nextTick } from 'vue'
import { PaginationPage } from '../PaginationPage'

describe('PaginationPage', () => {
  it('should initialize and watch values correctly', async () => {
    const props = reactive({
      value: 2,
      modelValue: undefined,
      rows: 10,
      modelRows: undefined,
      count: 100,
      visible: 5,
      ends: 2
    }) as any
    const refs = toRefs(props)

    const page = new PaginationPage(props, refs)

    expect(page.value).toBe(2)
    expect(page.rows).toBe(10)
    expect(page.count).toBe(100)
    expect(page.pagesCount).toBe(10)
    expect(page.visible).toBe(5)
    expect(page.ends).toBe(2)

    // update props
    props.value = 5
    props.rows = 20
    await nextTick()

    expect(page.value).toBe(5)
    expect(page.rows).toBe(20)
    expect(page.pagesCount).toBe(5)
  })

  it('should compute info correctly using text formatting', () => {
    const props = reactive({
      value: 3,
      modelValue: undefined,
      rows: 10,
      modelRows: undefined,
      count: 100
    }) as any
    const refs = toRefs(props)

    // Mock TextInclude
    const textMock = {
      info: 'Showing [item] of [count] items'
    } as any

    const page = new PaginationPage(props, refs, textMock)

    // page value is 3, rows is 10, so max is 30, start is 21, end is 30.
    expect(page.info.value).toBe('Showing 21-30 of 100 items')
  })

  it('should adjust end of range in info if it exceeds count', () => {
    const props = reactive({
      value: 3,
      modelValue: undefined,
      rows: 10,
      modelRows: undefined,
      count: 25
    }) as any
    const refs = toRefs(props)

    // Mock TextInclude
    const textMock = {
      info: 'Showing [item] of [count]'
    } as any

    const page = new PaginationPage(props, refs, textMock)

    // page value is 3, rows is 10, max is 30 but count is 25.
    // start is 21, end is 25.
    expect(page.info.value).toBe('Showing 21-25 of 25')
  })

  it('should return empty info string if text.info is missing', () => {
    const props = reactive({
      value: 1,
      modelValue: undefined,
      rows: 10,
      modelRows: undefined,
      count: 100
    }) as any
    const refs = toRefs(props)

    const page = new PaginationPage(props, refs, undefined)
    expect(page.info.value).toBe('')
  })
})
