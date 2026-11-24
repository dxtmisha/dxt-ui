// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'

import { TextInclude } from '../../../classes/TextInclude'
import { PaginationPage } from '../PaginationPage'
import type { PaginationProps } from '../props'

describe('PaginationPage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should initialize numeric values from props synchronously and calculate pagesCount', () => {
      const props = reactive<PaginationProps>({
        value: 2,
        rows: 10,
        count: 100,
        visible: 5,
        ends: 2
      })
      const text = new TextInclude(props)
      const page = new PaginationPage(props, () => text)

      expect(page.value).toBe(2)
      expect(page.rows).toBe(10)
      expect(page.count).toBe(100)
      expect(page.pagesCount).toBe(10)
      expect(page.visible).toBe(5)
      expect(page.ends).toBe(2)
    })

    it('should prioritize modelValue over value and modelRows over rows', () => {
      const props = reactive<PaginationProps>({
        value: 2,
        modelValue: 4,
        rows: 10,
        modelRows: 25,
        count: 100
      })
      const text = new TextInclude(props)
      const page = new PaginationPage(props, () => text)

      expect(page.value).toBe(4)
      expect(page.rows).toBe(25)
      expect(page.pagesCount).toBe(4)
    })

    it('should parse numeric string inputs for value, modelValue, rows, modelRows, and count', () => {
      const props = reactive<PaginationProps>({
        value: '3',
        rows: '15',
        count: '45'
      })
      const text = new TextInclude(props)
      const page = new PaginationPage(props, () => text)

      expect(page.value).toBe(3)
      expect(page.rows).toBe(15)
      expect(page.count).toBe(45)
      expect(page.pagesCount).toBe(3)
    })

    it('should compute formatted info string and clamp end to total count', () => {
      const props = reactive<PaginationProps>({
        value: 3,
        rows: 10,
        count: 100,
        textInfo: 'Showing [item] of [count] items'
      })
      const text = new TextInclude(props)
      const page = new PaginationPage(props, () => text)

      expect(page.info.value).toBe('Showing 21-30 of 100 items')

      props.count = 25
      expect(page.info.value).toBe('Showing 21-25 of 25 items')
    })

    it('should return empty info string when text.info is undefined or empty', () => {
      const props = reactive<PaginationProps>({
        value: 1,
        rows: 10,
        count: 100
      })
      const emptyText = { info: undefined } as unknown as TextInclude
      const page = new PaginationPage(props, () => emptyText)

      expect(page.info.value).toBe('')
    })

    it('should allow direct state updates via setValue and setRows', () => {
      const props = reactive<PaginationProps>({
        value: 1,
        rows: 10,
        count: 100
      })
      const text = new TextInclude(props)
      const page = new PaginationPage(props, () => text)

      page.setValue(4)
      page.setRows(20)

      expect(page.value).toBe(4)
      expect(page.rows).toBe(20)
      expect(page.pagesCount).toBe(5)

      page.setValue('7')
      page.setRows('25')

      expect(page.value).toBe(7)
      expect(page.rows).toBe(25)
      expect(page.pagesCount).toBe(4)
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should safely normalize count=0 and format info as 0-0 of 0', () => {
      const props = reactive<PaginationProps>({
        value: 1,
        rows: 10,
        count: 0,
        textInfo: '[item] / [count]'
      })
      const text = new TextInclude(props)
      const page = new PaginationPage(props, () => text)

      expect(page.count).toBe(0)
      expect(page.pagesCount).toBe(0)
      expect(page.info.value).toBe('0-0 / 0')
    })

    it('should prevent division by zero when rows is 0, negative, empty string, NaN, or Infinity', () => {
      const invalidRows: Array<number | string> = [0, -10, '', '   ', 'abc', Number.NaN, Number.POSITIVE_INFINITY]

      invalidRows.forEach((rawRows) => {
        const props = reactive<PaginationProps>({
          value: 1,
          rows: rawRows,
          count: 50
        })
        const page = new PaginationPage(props, () => new TextInclude(props))

        expect(page.rows).toBe(1)
        expect(page.pagesCount).toBe(50)
        expect(Number.isFinite(page.pagesCount)).toBe(true)
      })
    })

    it('should normalize invalid or non-positive value, count, visible, and ends safely', () => {
      const props = reactive<PaginationProps>({
        value: -5,
        count: -100,
        visible: 0,
        ends: 0
      })
      const page = new PaginationPage(props, () => new TextInclude(props))

      expect(page.value).toBe(1)
      expect(page.count).toBe(0)
      expect(page.visible).toBe(0)
      expect(page.ends).toBe(0)
      expect(page.pagesCount).toBe(0)
    })

    it('should fall back to defaults when props are omitted or non-finite', () => {
      const props = reactive<PaginationProps>({
        value: '',
        rows: '',
        count: 'not-a-number',
        visible: Number.NaN,
        ends: Number.POSITIVE_INFINITY
      })
      const page = new PaginationPage(props, () => new TextInclude(props))

      expect(page.value).toBe(1)
      expect(page.rows).toBe(1)
      expect(page.count).toBe(0)
      expect(page.visible).toBe(3)
      expect(page.ends).toBe(1)
    })

    it('should clamp info range safely when value exceeds pagesCount', () => {
      const props = reactive<PaginationProps>({
        value: 99,
        rows: 10,
        count: 25,
        textInfo: '[item] of [count]'
      })
      const page = new PaginationPage(props, () => new TextInclude(props))

      expect(page.info.value).toBe('25-25 of 25')
    })

    it('should floor fractional numbers for value, rows, count, visible, and ends', () => {
      const props = reactive<PaginationProps>({
        value: 2.9,
        rows: 10.7,
        count: 55.8,
        visible: 4.9,
        ends: 2.3
      })
      const page = new PaginationPage(props, () => new TextInclude(props))

      expect(page.value).toBe(2)
      expect(page.rows).toBe(10)
      expect(page.count).toBe(55)
      expect(page.visible).toBe(4)
      expect(page.ends).toBe(2)
      expect(page.pagesCount).toBe(6)
    })
  })

  describe('Lifecycle, reactivity isolation, and resource cleanup', () => {
    it('should defer reactive prop watching until onMounted and stop watching cleanly on onUnmounted', async () => {
      const props = reactive<PaginationProps>({
        value: 2,
        rows: 10,
        count: 100
      })
      const page = new PaginationPage(props, () => new TextInclude(props))

      // Before mount, watchers are not yet registered
      props.value = 3
      await nextTick()
      expect(page.value).toBe(2)

      // Mounting syncs latest props and activates watchers
      page.onMounted()
      expect(page.value).toBe(3)

      props.value = 5
      props.rows = 20
      await nextTick()
      expect(page.value).toBe(5)
      expect(page.rows).toBe(20)
      expect(page.pagesCount).toBe(5)

      // Updating value does not clobber locally set rows
      page.setRows(25)
      props.value = 6
      await nextTick()
      expect(page.value).toBe(6)
      expect(page.rows).toBe(25)

      // Unmounting stops both watchers cleanly
      page.onUnmounted()

      props.value = 1
      props.rows = 50
      await nextTick()
      expect(page.value).toBe(6)
      expect(page.rows).toBe(25)
    })

    it('should be idempotent if onMounted is called repeatedly without leaking duplicate watchers', async () => {
      const props = reactive<PaginationProps>({
        value: 1,
        rows: 10,
        count: 100
      })
      const page = new PaginationPage(props, () => new TextInclude(props))
      const setValueSpy = vi.spyOn(page, 'setValue')

      page.onMounted()
      page.onMounted()
      setValueSpy.mockClear()

      props.modelValue = 4
      await nextTick()

      expect(setValueSpy).toHaveBeenCalledTimes(1)
      expect(page.value).toBe(4)

      page.onUnmounted()
    })
  })
})
