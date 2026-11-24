// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { TextInclude } from '../../../classes/TextInclude'

import { PaginationButton } from '../PaginationButton'
import { PaginationEvent } from '../PaginationEvent'
import { PaginationPage } from '../PaginationPage'
import type { PaginationProps } from '../props'

describe('PaginationButton', () => {
  const createFixture = (initialProps: Partial<PaginationProps> = {}) => {
    const props = reactive<PaginationProps>({
      value: 3,
      rows: 10,
      count: 100,
      visible: 5,
      ends: 1,
      showEnds: true,
      textPrevious: 'Previous',
      textNext: 'Next',
      textFirst: 'First',
      textLast: 'Last',
      textMore: 'More',
      textMorePrev: 'More Prev',
      textRowsPerPage: 'Rows per page',
      textPage: 'Page',
      textInfo: 'Showing [item] of [count]',
      ...initialProps
    })
    const text = new TextInclude(props)
    const page = new PaginationPage(props, () => text)
    const eventClick = new EventClickInclude(props)
    const modelRows = new ModelInclude<number>('rows')
    const modelValue = new ModelInclude<number>('value')
    const event = new PaginationEvent(
      () => eventClick,
      () => modelRows,
      () => modelValue,
      () => page
    )
    const button = new PaginationButton(
      props,
      () => event,
      () => page,
      () => text
    )

    return { props, text, page, event, button }
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Page window, ends, and ellipses)', () => {
    it('should compute centered pagination list with selected state and aria-current=page', () => {
      const { button } = createFixture({ value: 3, visible: 5, rows: 10, count: 100 })
      const list = button.pagination.value

      expect(list.map(item => item.value)).toEqual([1, 2, 3, 4, 5])
      expect(list[2]?.selected).toBe(true)
      expect(list[2]?.['aria-current']).toBe('page')
      expect(list[2]?.['aria-label']).toBe('Page 3')
      expect(list[0]?.selected).toBe(false)
      expect(list[0]?.['aria-current']).toBeUndefined()
    })

    it('should shift visible window near the end of pagesCount', () => {
      const { button } = createFixture({ value: 10, visible: 5, rows: 10, count: 100 })

      expect(button.pagination.value.map(item => item.value)).toEqual([6, 7, 8, 9, 10])
      expect(button.pagination.value[4]?.selected).toBe(true)
    })

    it('should compute paginationFirst, paginationLast, and both ellipses for middle page', () => {
      const { button } = createFixture({
        value: 6,
        visible: 3,
        ends: 2,
        rows: 10,
        count: 100,
        showEnds: true
      })

      expect(button.pagination.value.map(item => item.value)).toEqual([5, 6, 7])
      expect(button.paginationFirst.value.map(item => item.value)).toEqual([1, 2])
      expect(button.paginationLast.value.map(item => item.value)).toEqual([9, 10])
      expect(button.showFirstEllipsis.value).toBe(true)
      expect(button.showLastEllipsis.value).toBe(true)
    })

    it('should hide ellipses and duplicate end items when visible window touches boundaries', () => {
      const { button, page } = createFixture({
        value: 2,
        visible: 3,
        ends: 1,
        rows: 10,
        count: 50,
        showEnds: true
      })

      // Window is [1, 2, 3]; first page 1 is already inside window, last is 5 with gap at 4
      expect(button.pagination.value.map(item => item.value)).toEqual([1, 2, 3])
      expect(button.paginationFirst.value).toEqual([])
      expect(button.showFirstEllipsis.value).toBe(false)
      expect(button.paginationLast.value.map(item => item.value)).toEqual([5])
      expect(button.showLastEllipsis.value).toBe(true)

      page.setValue(3)
      // Window is [2, 3, 4]; ends [1] and [5] are adjacent with no gaps -> no ellipses
      expect(button.paginationFirst.value.map(item => item.value)).toEqual([1])
      expect(button.paginationLast.value.map(item => item.value)).toEqual([5])
      expect(button.showFirstEllipsis.value).toBe(false)
      expect(button.showLastEllipsis.value).toBe(false)
    })

    it('should disable ends and ellipses when showEnds is false', () => {
      const { button } = createFixture({
        value: 6,
        visible: 3,
        ends: 2,
        rows: 10,
        count: 100,
        showEnds: false
      })

      expect(button.paginationFirst.value).toEqual([])
      expect(button.paginationLast.value).toEqual([])
      expect(button.showFirstEllipsis.value).toBe(false)
      expect(button.showLastEllipsis.value).toBe(false)
    })
  })

  describe('Navigation, loader, and menu button bindings', () => {
    it('should return complete bindings for back, next, first, last, more, morePrev, and menu buttons', () => {
      const { button, event } = createFixture({
        value: 3,
        rows: 25,
        count: 250,
        iconArrowLeft: 'left-icon',
        iconArrowRight: 'right-icon',
        iconArrowFirst: 'first-icon',
        iconArrowLast: 'last-icon',
        iconArrowDown: 'down-icon',
        showMore: true,
        showMorePrev: true,
        buttonAttrs: { 'data-test': 'base', 'class': 'base-class' },
        buttonMoreAttrs: { 'data-more': 'more', 'class': 'more-extra' },
        buttonMorePrevAttrs: { 'data-more-prev': 'prev', 'class': 'prev-extra' },
        buttonMenuAttrs: { 'data-menu': 'menu', 'class': 'menu-extra' }
      })

      const backButton = button.back
      expect(backButton.value).toBe(2)
      expect(backButton.icon).toBe('left-icon')
      expect(backButton.disabled).toBe(false)
      expect(backButton['aria-label']).toBe('Previous')
      expect(backButton['data-event-type']).toBe('back')
      expect(backButton.onClick).toBe(event.onClick)
      expect(backButton['data-test']).toBe('base')

      const nextButton = button.next
      expect(nextButton.value).toBe(4)
      expect(nextButton.icon).toBe('right-icon')
      expect(nextButton.disabled).toBe(false)
      expect(nextButton['aria-label']).toBe('Next')
      expect(nextButton['data-event-type']).toBe('next')

      const firstButton = button.first
      expect(firstButton.value).toBe(1)
      expect(firstButton.icon).toBe('first-icon')
      expect(firstButton.disabled).toBe(false)
      expect(firstButton['aria-label']).toBe('First')

      const lastButton = button.last
      expect(lastButton.value).toBe(10)
      expect(lastButton.icon).toBe('last-icon')
      expect(lastButton.disabled).toBe(false)
      expect(lastButton['aria-label']).toBe('Last')

      const moreButton = button.more
      expect(moreButton.value).toBe(4)
      expect(moreButton['data-more']).toBe('more')
      expect(moreButton['aria-label']).toBe('More')
      expect(moreButton.class).toBe('base-class more-extra')

      const morePrevButton = button.morePrev
      expect(morePrevButton.value).toBe(2)
      expect(morePrevButton['data-more-prev']).toBe('prev')
      expect(morePrevButton['aria-label']).toBe('More Prev')
      expect(morePrevButton.class).toBe('base-class prev-extra')

      const menuButton = button.menu
      expect(menuButton.label).toBe('25')
      expect(menuButton.iconTrailing).toBe('down-icon')
      expect(menuButton['aria-label']).toBe('Rows per page')
      expect(menuButton['data-menu']).toBe('menu')
      expect(menuButton.class).toBe('base-class menu-extra')
      // Menu control button must NOT inherit PaginationEvent.onClick
      expect(menuButton.onClick).toBeUndefined()
    })

    it('should reflect modelRows in menu button label', () => {
      const { button } = createFixture({
        rows: 10,
        modelRows: 50,
        count: 100
      })

      expect(button.menu.label).toBe('50')
    })

    it('should control visibility of more and morePrev buttons across boundary pages', () => {
      const { button, page } = createFixture({
        value: 1,
        rows: 10,
        count: 50,
        showMore: true,
        showMorePrev: true
      })

      expect(button.showMore()).toBe(true)
      expect(button.showMorePrev()).toBe(false)

      page.setValue(3)
      expect(button.showMore()).toBe(true)
      expect(button.showMorePrev()).toBe(true)

      page.setValue(5)
      expect(button.showMore()).toBe(false)
      expect(button.showMorePrev()).toBe(true)
    })
  })

  describe('Boundary values, edge cases, and lazy instantiation', () => {
    it('should return empty lists and disable all navigation controls when count=0', () => {
      const { button } = createFixture({
        value: 1,
        rows: 10,
        count: 0,
        showEnds: true,
        showMore: true,
        showMorePrev: true
      })

      expect(button.pagination.value).toEqual([])
      expect(button.paginationFirst.value).toEqual([])
      expect(button.paginationLast.value).toEqual([])
      expect(button.showFirstEllipsis.value).toBe(false)
      expect(button.showLastEllipsis.value).toBe(false)
      expect(button.showMore()).toBe(false)
      expect(button.showMorePrev()).toBe(false)
      expect(button.first.disabled).toBe(true)
      expect(button.back.disabled).toBe(true)
      expect(button.next.disabled).toBe(true)
      expect(button.last.disabled).toBe(true)
      expect(button.last.value).toBe(1)
    })

    it('should disable back button as well when count=0 even if value > 1', () => {
      const { button } = createFixture({
        value: 3,
        rows: 10,
        count: 0
      })

      expect(button.back.disabled).toBe(true)
      expect(button.first.disabled).toBe(true)
      expect(button.next.disabled).toBe(true)
      expect(button.last.disabled).toBe(true)
    })

    it('should handle visible=0 and ends=0 cleanly without errors', () => {
      const { button } = createFixture({
        value: 3,
        rows: 10,
        count: 100,
        visible: 0,
        ends: 0,
        showEnds: true
      })

      expect(button.pagination.value).toEqual([])
      expect(button.paginationFirst.value).toEqual([])
      expect(button.paginationLast.value).toEqual([])
      expect(button.showFirstEllipsis.value).toBe(false)
      expect(button.showLastEllipsis.value).toBe(false)
    })

    it('should never output "undefined 1" in aria-label when text.page is undefined', () => {
      const props = reactive<PaginationProps>({
        value: 1,
        rows: 10,
        count: 30,
        visible: 3
      })
      const emptyText = { page: undefined } as unknown as TextInclude
      const page = new PaginationPage(props, () => emptyText)
      const event = new PaginationEvent(
        () => new EventClickInclude(props),
        () => new ModelInclude<number>('rows'),
        () => new ModelInclude<number>('value'),
        () => page
      )
      const button = new PaginationButton(props, () => event, () => page, () => emptyText)

      expect(button.pagination.value[0]?.['aria-label']).toBe('1')
    })

    it('should keep all injected dependencies lazy during construction', () => {
      const eventGetter = vi.fn()
      const pageGetter = vi.fn()
      const textGetter = vi.fn()

      const button = new PaginationButton(
        reactive<PaginationProps>({ count: 100, rows: 10 }),
        eventGetter,
        pageGetter,
        textGetter
      )

      expect(button).toBeInstanceOf(PaginationButton)
      expect(eventGetter).not.toHaveBeenCalled()
      expect(pageGetter).not.toHaveBeenCalled()
      expect(textGetter).not.toHaveBeenCalled()
    })
  })
})
