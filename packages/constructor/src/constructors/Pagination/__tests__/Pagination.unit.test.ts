// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { FocusDirectionInclude } from '../../../classes/FocusDirectionInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { TextInclude } from '../../../classes/TextInclude'

import { Pagination } from '../Pagination'
import { PaginationButton } from '../PaginationButton'
import { PaginationEvent } from '../PaginationEvent'
import { PaginationMenuRows } from '../PaginationMenuRows'
import { PaginationPage } from '../PaginationPage'
import type { PaginationProps } from '../props'
import type { PaginationEmits } from '../types'

const cleanups: Array<() => void> = []

describe('Pagination (unit)', () => {
  const createOrchestrator = (
    initialProps: Partial<PaginationProps> = {},
    constructors?: ConstructorParameters<typeof Pagination>[6]
  ) => {
    const scope = effectScope()
    const props = reactive<PaginationProps>({
      value: 1,
      rows: 10,
      count: 100,
      hideIfOne: true,
      ...initialProps
    })
    const element = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.pagination')
    const emits = vi.fn() as unknown as ConstrEmit<PaginationEmits>

    let pagination!: Pagination

    scope.run(() => {
      pagination = new Pagination(
        props,
        element,
        naming,
        undefined,
        undefined,
        emits,
        constructors,
        false
      )
    })

    cleanups.push(() => scope.stop())

    return { props, element, naming, emits, pagination, scope }
  }

  const mountOrchestrator = (
    initialProps: Partial<PaginationProps> = {},
    constructors?: ConstructorParameters<typeof Pagination>[6]
  ) => {
    const props = reactive<PaginationProps>({
      value: 1,
      rows: 10,
      count: 100,
      hideIfOne: true,
      ...initialProps
    })
    const element = ref<HTMLDivElement | undefined>(undefined)
    const naming = new DesignName('d1.pagination')
    const emits = vi.fn() as unknown as ConstrEmit<PaginationEmits>

    let pagination!: Pagination

    const Host = defineComponent({
      name: 'PaginationUnitHost',
      setup() {
        pagination = new Pagination(
          props,
          element,
          naming,
          undefined,
          undefined,
          emits,
          constructors,
          true
        )

        return () => h('div', { ref: element })
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { props, element, naming, emits, pagination, unmount: () => app.unmount() }
  }

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(cleanup => cleanup())
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  describe('Lazy dependency instantiation & canCreate gating', () => {
    it('should eagerly instantiate only area during component setup and keep all other subordinates lazy', () => {
      const { pagination } = mountOrchestrator()

      expect(pagination.hasInstance('area')).toBe(true)
      expect(pagination.hasInstance('button')).toBe(false)
      expect(pagination.hasInstance('event')).toBe(false)
      expect(pagination.hasInstance('eventClick')).toBe(false)
      expect(pagination.hasInstance('focusDirection')).toBe(false)
      expect(pagination.hasInstance('menuRows')).toBe(false)
      expect(pagination.hasInstance('modelRows')).toBe(false)
      expect(pagination.hasInstance('modelValue')).toBe(false)
      expect(pagination.hasInstance('page')).toBe(false)
      expect(pagination.hasInstance('text')).toBe(false)
    })

    it('should gate menuRows creation via canCreate when menuRows prop is absent or empty', () => {
      const { pagination, props } = createOrchestrator({ menuRows: undefined })

      const resultWhenMissing = pagination.callInstance('menuRows', item => item.binds, null)
      expect(resultWhenMissing).toBeNull()
      expect(pagination.hasInstance('menuRows')).toBe(false)

      props.menuRows = []
      const resultWhenEmpty = pagination.callInstance('menuRows', item => item.binds, null)
      expect(resultWhenEmpty).toBeNull()
      expect(pagination.hasInstance('menuRows')).toBe(false)

      props.menuRows = [10, 20, 50]
      const resultWhenFilled = pagination.callInstance('menuRows', item => item.binds, null)
      expect(resultWhenFilled).not.toBeNull()
      expect(pagination.hasInstance('menuRows')).toBe(true)
    })
  })

  describe('Public API: aria, binds, and isRender', () => {
    it('should return navigation landmark ARIA attributes with localized pagination label', () => {
      const { pagination } = createOrchestrator({ textPagination: 'Table pagination' })

      expect(pagination.aria).toEqual({
        'role': 'navigation',
        'aria-label': 'Table pagination'
      })
      expect(pagination.hasInstance('text')).toBe(true)
      expect(pagination.hasInstance('focusDirection')).toBe(false)
    })

    it('should combine FocusDirectionInclude binds and ARIA attributes in binds getter', () => {
      const { pagination } = createOrchestrator({ textPagination: 'Pages' })
      const binds = pagination.binds

      expect(binds.role).toBe('navigation')
      expect(binds['aria-label']).toBe('Pages')
      expect(binds.tabindex).toBe(0)
      expect(typeof binds.onFocus).toBe('function')
      expect(typeof binds.onBlur).toBe('function')
      expect(pagination.hasInstance('focusDirection')).toBe(true)
    })

    it('should evaluate isRender() without instantiating page when hideIfOne is false', () => {
      const { pagination } = createOrchestrator({ hideIfOne: false, count: 5, rows: 10 })

      expect(pagination.isRender()).toBe(true)
      expect(pagination.hasInstance('page')).toBe(false)
    })

    it('should evaluate isRender() against pagesCount when hideIfOne is true', () => {
      const { pagination, props } = createOrchestrator({ hideIfOne: true, count: 10, rows: 10 })

      expect(pagination.isRender()).toBe(false)
      expect(pagination.hasInstance('page')).toBe(true)

      props.count = 11
      expect(pagination.isRender()).toBe(true)

      props.count = 0
      expect(pagination.isRender()).toBe(false)
    })
  })

  describe('Dependency injection overrides & lifecycle coordination', () => {
    it('should support overriding all subordinate constructors via constructors argument', () => {
      class CustomArea extends AreaInclude {}
      class CustomButton extends PaginationButton {}
      class CustomEvent extends PaginationEvent {}
      class CustomEventClick extends EventClickInclude {}
      class CustomFocusDirection<E extends HTMLElement = HTMLElement> extends FocusDirectionInclude<E> {}
      class CustomMenuRows extends PaginationMenuRows {}
      class CustomModel extends ModelInclude<number> {}
      class CustomPage extends PaginationPage {}
      class CustomText extends TextInclude {}

      const { pagination } = mountOrchestrator(
        { menuRows: [10, 20] },
        {
          area: CustomArea,
          button: CustomButton,
          event: CustomEvent,
          eventClick: CustomEventClick,
          focusDirection: CustomFocusDirection,
          menuRows: CustomMenuRows,
          modelRows: CustomModel,
          modelValue: CustomModel,
          page: CustomPage,
          text: CustomText
        }
      )

      expect(pagination.i('area')).toBeInstanceOf(CustomArea)
      expect(pagination.i('button')).toBeInstanceOf(CustomButton)
      expect(pagination.i('event')).toBeInstanceOf(CustomEvent)
      expect(pagination.i('eventClick')).toBeInstanceOf(CustomEventClick)
      expect(pagination.i('focusDirection')).toBeInstanceOf(CustomFocusDirection)
      expect(pagination.i('menuRows')).toBeInstanceOf(CustomMenuRows)
      expect(pagination.i('modelRows')).toBeInstanceOf(CustomModel)
      expect(pagination.i('modelValue')).toBeInstanceOf(CustomModel)
      expect(pagination.i('page')).toBeInstanceOf(CustomPage)
      expect(pagination.i('text')).toBeInstanceOf(CustomText)
    })

    it('should automatically execute onMounted and onUnmounted for PaginationPage and FocusDirectionInclude via DesignLogicAbstract', async () => {
      const { pagination, props, unmount } = mountOrchestrator({
        value: 2,
        rows: 10,
        count: 100
      })

      // Lazily instantiated after mount -> DesignLogicAbstract triggers onMounted immediately
      const page = pagination.i('page')
      const focusDirection = pagination.i('focusDirection')
      const pageUnmountSpy = vi.spyOn(page, 'onUnmounted')
      const focusUnmountSpy = vi.spyOn(focusDirection, 'onUnmounted')

      props.value = 4
      await nextTick()
      expect(page.value).toBe(4)

      unmount()
      expect(pageUnmountSpy).toHaveBeenCalledTimes(1)
      expect(focusUnmountSpy).toHaveBeenCalledTimes(1)

      props.value = 1
      await nextTick()
      expect(page.value).toBe(4)
    })
  })
})
