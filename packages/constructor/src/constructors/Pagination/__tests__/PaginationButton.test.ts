// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { computed } from 'vue'
import { PaginationButton } from '../PaginationButton'

describe('PaginationButton', () => {
  const mockText = {
    previous: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    more: 'More',
    morePrev: 'More Prev',
    rowsPerPage: 'Rows per page',
    page: 'Page',
    info: 'Showing [item] of [count]'
  } as any

  it('should compute pagination list correctly', () => {
    const props = {
      value: 3,
      rows: 10,
      count: 100,
      visible: 5,
      ends: 1,
      showEnds: true
    } as any

    const mockPage = {
      value: 3,
      visible: 5,
      pagesCount: 10,
      ends: 1
    } as any

    const button = new PaginationButton(props, mockPage, undefined, mockText)

    const list = button.pagination.value
    // start is value (3) - floor(5/2) = 1.
    // list should contain pages 1, 2, 3, 4, 5.
    expect(list.length).toBe(5)
    expect(list[0].value).toBe(1)
    expect(list[4].value).toBe(5)
    expect(list[2].selected).toBe(true) // page 3 is selected
  })

  it('should compute paginationFirst and paginationLast correctly', () => {
    const props = {
      showEnds: true
    } as any

    const mockPage = {
      value: 6,
      visible: 3,
      pagesCount: 10,
      ends: 2
    } as any

    const button = new PaginationButton(props, mockPage, undefined, mockText)

    // override pagination to test first/last calculations
    Object.defineProperty(button, 'pagination', {
      value: computed(() => [
        { value: 5, selected: false },
        { value: 6, selected: true },
        { value: 7, selected: false }
      ])
    })

    // paginationFirst computes pages from 1 to limit.
    // first item of pagination is 5.
    // limit is min(ends (2), firstItem.value (5) - 1) = 2.
    // so paginationFirst should contain page 1, 2.
    const firstList = button.paginationFirst.value
    expect(firstList.length).toBe(2)
    expect(firstList[0].value).toBe(1)
    expect(firstList[1].value).toBe(2)

    // paginationLast computes pages from page.pagesCount - ends + 1 to page.pagesCount.
    // page.pagesCount is 10, ends is 2, so from 9 to 10.
    // last item in pagination is 7.
    // from is max(lastItem.value + 1 (8), pagesCount - ends + 1 (9)) = 9.
    // so paginationLast should contain page 9, 10.
    const lastList = button.paginationLast.value
    expect(lastList.length).toBe(2)
    expect(lastList[0].value).toBe(9)
    expect(lastList[1].value).toBe(10)
  })

  it('should compute showFirstEllipsis and showLastEllipsis correctly', () => {
    const props = {
      showEnds: true
    } as any

    const mockPage = {
      value: 6,
      visible: 3,
      pagesCount: 10,
      ends: 2
    } as any

    const button = new PaginationButton(props, mockPage, undefined, mockText)

    Object.defineProperty(button, 'pagination', {
      value: computed(() => [
        { value: 5, selected: false },
        { value: 6, selected: true },
        { value: 7, selected: false }
      ])
    })

    // showFirstEllipsis: page.ends (2) < (firstItem.value (5) - 1) => 2 < 4 (true)
    expect(button.showFirstEllipsis.value).toBe(true)

    // showLastEllipsis: page.pagesCount (10) - page.ends (2) > lastItem.value (7) => 8 > 7 (true)
    expect(button.showLastEllipsis.value).toBe(true)
  })

  it('should return correct bindings for back, next, first, last, more, morePrev, and menu buttons', () => {
    const props = {
      iconArrowLeft: 'left-icon',
      iconArrowRight: 'right-icon',
      iconArrowFirst: 'first-icon',
      iconArrowLast: 'last-icon',
      iconArrowDown: 'down-icon',
      showMore: true,
      showMorePrev: true,
      buttonAttrs: { 'data-test': 'base' },
      buttonMoreAttrs: { 'data-more': 'more' },
      buttonMorePrevAttrs: { 'data-more-prev': 'prev' },
      buttonMenuAttrs: { 'data-menu': 'menu' },
      rows: 25
    } as any

    const mockPage = {
      value: 3,
      pagesCount: 10,
      ends: 1
    } as any

    const button = new PaginationButton(props, mockPage, undefined, mockText)

    // Back button
    const backBtn = button.back
    expect(backBtn.value).toBe(2)
    expect(backBtn.icon).toBe('left-icon')
    expect(backBtn.disabled).toBe(false)
    expect(backBtn['aria-label']).toBe('Previous')

    // Next button
    const nextBtn = button.next
    expect(nextBtn.value).toBe(4)
    expect(nextBtn.icon).toBe('right-icon')
    expect(nextBtn.disabled).toBe(false)
    expect(nextBtn['aria-label']).toBe('Next')

    // First button
    const firstBtn = button.first
    expect(firstBtn.value).toBe(1)
    expect(firstBtn.icon).toBe('first-icon')
    expect(firstBtn.disabled).toBe(false)
    expect(firstBtn['aria-label']).toBe('First')

    // Last button
    const lastBtn = button.last
    expect(lastBtn.value).toBe(10)
    expect(lastBtn.icon).toBe('last-icon')
    expect(lastBtn.disabled).toBe(false)
    expect(lastBtn['aria-label']).toBe('Last')

    // More button
    const moreBtn = button.more
    expect(moreBtn.value).toBe(4)
    expect(moreBtn['data-more']).toBe('more')
    expect(moreBtn['aria-label']).toBe('More')

    // MorePrev button
    const morePrevBtn = button.morePrev
    expect(morePrevBtn.value).toBe(2)
    expect(morePrevBtn['data-more-prev']).toBe('prev')
    expect(morePrevBtn['aria-label']).toBe('More Prev')

    // Menu button
    const menuBtn = button.menu
    expect(menuBtn.label).toBe('25')
    expect(menuBtn.iconTrailing).toBe('down-icon')
    expect(menuBtn['aria-label']).toBe('Rows per page')
  })

  it('should control visibility of more and morePrev buttons correctly', () => {
    const props = {
      showMore: true,
      showMorePrev: true
    } as any

    const mockPage = {
      value: 1,
      pagesCount: 5
    } as any

    let button = new PaginationButton(props, mockPage, undefined, mockText)
    expect(button.showMore()).toBe(true)
    expect(button.showMorePrev()).toBe(false)

    mockPage.value = 5
    button = new PaginationButton(props, mockPage, undefined, mockText)
    expect(button.showMore()).toBe(false)
    expect(button.showMorePrev()).toBe(true)
  })
})
