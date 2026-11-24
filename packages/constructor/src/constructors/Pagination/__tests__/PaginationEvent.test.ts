// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { TextInclude } from '../../../classes/TextInclude'
import type { EventClickValue } from '../../../types/eventClickTypes'

import { PaginationEvent } from '../PaginationEvent'
import { PaginationPage } from '../PaginationPage'
import type { PaginationProps } from '../props'
import type { PaginationEmits } from '../types'

describe('PaginationEvent', () => {
  const createFixture = (initialProps: Partial<PaginationProps> = {}) => {
    const props = reactive<PaginationProps>({
      value: 1,
      rows: 10,
      count: 100,
      ...initialProps
    })
    const emits = vi.fn() as unknown as ConstrEmit<PaginationEmits>
    const eventClick = new EventClickInclude(props, undefined, emits)
    const modelRows = new ModelInclude<number>('rows', emits)
    const modelValue = new ModelInclude<number>('value', emits)
    const page = new PaginationPage(props, () => new TextInclude(props))

    const eventClickSpy = vi.spyOn(eventClick, 'onClick')
    const modelRowsSpy = vi.spyOn(modelRows, 'emit')
    const modelValueSpy = vi.spyOn(modelValue, 'emit')

    const handler = new PaginationEvent(
      () => eventClick,
      () => modelRows,
      () => modelValue,
      () => page,
      emits
    )

    return {
      props,
      emits,
      eventClick,
      modelRows,
      modelValue,
      page,
      eventClickSpy,
      modelRowsSpy,
      modelValueSpy,
      handler
    }
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should update page value, emit modelValue, and delegate to EventClickInclude on default page click', () => {
      const { handler, page, eventClickSpy, modelValueSpy, modelRowsSpy } = createFixture()
      const mouseEvent = new MouseEvent('click')
      const options: EventClickValue = { type: 'page', value: 3, detail: undefined }

      handler.onClick(mouseEvent, options)

      expect(page.value).toBe(3)
      expect(modelValueSpy).toHaveBeenCalledWith(3)
      expect(modelRowsSpy).not.toHaveBeenCalled()
      expect(eventClickSpy).toHaveBeenCalledWith(mouseEvent, options)
    })

    it.each(['back', 'next', 'first', 'last'] as const)(
      'should route navigation button type=%s to page value update and modelValue emit',
      (type) => {
        const { handler, page, modelValueSpy, eventClickSpy } = createFixture()
        const mouseEvent = new MouseEvent('click')
        const options: EventClickValue = { type, value: 4, detail: undefined }

        handler.onClick(mouseEvent, options)

        expect(page.value).toBe(4)
        expect(modelValueSpy).toHaveBeenCalledWith(4)
        expect(eventClickSpy).toHaveBeenCalledWith(mouseEvent, options)
      }
    )

    it('should emit more and moreLite without modifying page or emitting modelValue', () => {
      const { handler, emits, page, modelValueSpy, modelRowsSpy, eventClickSpy } = createFixture({ value: 2 })
      const mouseEvent = new MouseEvent('click')
      const options: EventClickValue = { type: 'more', value: 3, detail: undefined }

      handler.onClick(mouseEvent, options)

      expect(emits).toHaveBeenCalledWith('more', mouseEvent, options)
      expect(emits).toHaveBeenCalledWith('moreLite', options)
      expect(page.value).toBe(2)
      expect(modelValueSpy).not.toHaveBeenCalled()
      expect(modelRowsSpy).not.toHaveBeenCalled()
      expect(eventClickSpy).toHaveBeenCalledWith(mouseEvent, options)
    })

    it('should emit morePrev and morePrevLite without modifying page or emitting modelValue', () => {
      const { handler, emits, page, modelValueSpy, modelRowsSpy, eventClickSpy } = createFixture({ value: 3 })
      const mouseEvent = new MouseEvent('click')
      const options: EventClickValue = { type: 'morePrev', value: 2, detail: undefined }

      handler.onClick(mouseEvent, options)

      expect(emits).toHaveBeenCalledWith('morePrev', mouseEvent, options)
      expect(emits).toHaveBeenCalledWith('morePrevLite', options)
      expect(page.value).toBe(3)
      expect(modelValueSpy).not.toHaveBeenCalled()
      expect(modelRowsSpy).not.toHaveBeenCalled()
      expect(eventClickSpy).toHaveBeenCalledWith(mouseEvent, options)
    })

    it('should emit rows, rowsLite, update page rows, and emit modelRows on rows selection', () => {
      const { handler, emits, page, modelRowsSpy, modelValueSpy, eventClickSpy } = createFixture({ value: 2, rows: 10 })
      const mouseEvent = new MouseEvent('click')
      const options: EventClickValue = { type: 'rows', value: 25, detail: undefined }

      handler.onClick(mouseEvent, options)

      expect(emits).toHaveBeenCalledWith('rows', mouseEvent, options)
      expect(emits).toHaveBeenCalledWith('rowsLite', options)
      expect(page.rows).toBe(25)
      expect(modelRowsSpy).toHaveBeenCalledWith(25)
      expect(modelValueSpy).not.toHaveBeenCalled()
      expect(eventClickSpy).toHaveBeenCalledWith(mouseEvent, options)
    })
  })

  describe('Boundary values, coercion, and nullish safety', () => {
    it('should parse numeric string values for page and rows events', () => {
      const { handler, page, modelValueSpy, modelRowsSpy } = createFixture()
      const mouseEvent = new MouseEvent('click')

      handler.onClick(mouseEvent, { type: 'page', value: '6', detail: undefined })
      expect(page.value).toBe(6)
      expect(modelValueSpy).toHaveBeenCalledWith(6)

      handler.onClick(mouseEvent, { type: 'rows', value: '50', detail: undefined })
      expect(page.rows).toBe(50)
      expect(modelRowsSpy).toHaveBeenCalledWith(50)
    })

    it('should safely fall back to 1 when options or option value is undefined, empty, 0, negative, NaN, or non-numeric', () => {
      const invalidValues: unknown[] = [undefined, null, '', '   ', 0, -5, Number.NaN, Number.POSITIVE_INFINITY, 'invalid', {}, true]

      invalidValues.forEach((invalidValue) => {
        const { handler, page, modelValueSpy } = createFixture({ value: 5 })
        const mouseEvent = new MouseEvent('click')

        handler.onClick(mouseEvent, { type: 'page', value: invalidValue, detail: undefined })

        expect(page.value).toBe(1)
        expect(modelValueSpy).toHaveBeenCalledWith(1)
      })
    })

    it('should work safely when options and emits are omitted', () => {
      const props = reactive<PaginationProps>({ value: 3, rows: 10, count: 100 })
      const eventClick = new EventClickInclude(props)
      const modelRows = new ModelInclude<number>('rows')
      const modelValue = new ModelInclude<number>('value')
      const page = new PaginationPage(props, () => new TextInclude(props))
      const handler = new PaginationEvent(
        () => eventClick,
        () => modelRows,
        () => modelValue,
        () => page
      )
      const mouseEvent = new MouseEvent('click')

      expect(() => handler.onClick(mouseEvent)).not.toThrow()
      expect(page.value).toBe(1)

      expect(() => handler.onMore(mouseEvent)).not.toThrow()
      expect(() => handler.onMorePrev(mouseEvent)).not.toThrow()
      expect(() => handler.onRows(mouseEvent)).not.toThrow()
    })
  })
})
