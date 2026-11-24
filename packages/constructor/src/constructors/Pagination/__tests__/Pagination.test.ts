// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import type { EventClickValue } from '../../../types/eventClickTypes'

import { PaginationDesign } from '../PaginationDesign'
import { defaultsPagination, type PaginationProps } from '../props'
import type {
  PaginationClasses,
  PaginationComponents,
  PaginationEmits,
  PaginationExpose
} from '../types'

const cleanups: Array<() => void> = []

const stubButton = defineComponent({
  name: 'StubIntegratedButton',
  inheritAttrs: false,
  props: {
    label: { type: String, default: undefined },
    value: { type: [Number, String], default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    icon: { type: [String, Object], default: undefined },
    iconTrailing: { type: [String, Object], default: undefined },
    iconTurn: { type: Boolean, default: false },
    onClick: { type: [Function, Array], default: undefined }
  },
  setup(props, { attrs }) {
    const handleClick = (event: MouseEvent) => {
      if (props.disabled) {
        return
      }

      const payload: EventClickValue = {
        type: String(attrs['data-event-type'] ?? 'click'),
        value: props.value,
        detail: undefined
      }

      const handlers = Array.isArray(props.onClick)
        ? props.onClick
        : (typeof props.onClick === 'function' ? [props.onClick] : [])

      handlers.forEach((handler) => {
        if (typeof handler === 'function') {
          handler(event, payload)
        }
      })
    }

    return () => h(
      'button',
      {
        ...attrs,
        'type': 'button',
        'disabled': props.disabled,
        'class': [
          attrs.class,
          { 'd1-button--selected': props.selected }
        ],
        'data-value': props.value !== undefined ? String(props.value) : undefined,
        'data-selected': String(props.selected),
        'onClick': handleClick
      },
      props.label ?? ''
    )
  }
})

const stubMenu = defineComponent({
  name: 'StubIntegratedMenu',
  inheritAttrs: false,
  props: {
    selected: { type: [Number, String], default: undefined },
    list: { type: Array, default: () => [] },
    itemAttrs: { type: Object, default: () => ({}) },
    onClick: { type: [Function, Array], default: undefined }
  },
  setup(props, { slots }) {
    const open = ref(false)
    const triggerSelect = (event: MouseEvent, value: unknown) => {
      const payload: EventClickValue = {
        type: String((props.itemAttrs as Record<string, unknown>)['data-event-type'] ?? 'rows'),
        value,
        detail: undefined
      }

      const handlers = Array.isArray(props.onClick)
        ? props.onClick
        : (typeof props.onClick === 'function' ? [props.onClick] : [])

      handlers.forEach((handler) => {
        if (typeof handler === 'function') {
          handler(event, payload)
        }
      })
    }

    return () => h(
      'div',
      {
        'class': 'stub-menu',
        'data-selected': props.selected !== undefined ? String(props.selected) : undefined
      },
      [
        slots.control?.({
          open,
          binds: {
            'data-menu-trigger': 'true',
            'onClick': () => {
              open.value = !open.value
            }
          }
        }),
        h(
          'div',
          { class: 'stub-menu__items' },
          (props.list as Array<{ value: number, label: string }>).map(option =>
            h(
              'button',
              {
                'key': option.value,
                'type': 'button',
                'class': 'stub-menu__option',
                'data-option-value': String(option.value),
                'onClick': (event: MouseEvent) => triggerSelect(event, option.value)
              },
              option.label
            ))
        )
      ]
    )
  }
})

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
  document.body.innerHTML = ''
})

describe('Pagination (integrated component)', () => {
  const mountComponent = (
    initialProps: Partial<PaginationProps> = {},
    slots?: Record<string, () => ReturnType<typeof h>[]>
  ) => {
    const emits = vi.fn()
    const state = reactive<PaginationProps>({
      ...defaultsPagination,
      value: 1,
      rows: 10,
      count: 100,
      ...initialProps
    })

    const IntegratedPagination = defineComponent({
      name: 'IntegratedPagination',
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-pagination': true
          }
        }))

        const design = new PaginationDesign<
          PaginationComponents,
          PaginationExpose,
          PaginationClasses,
          PaginationProps
        >(
          'd1.pagination',
          state,
          {
            emits: emits as unknown as ConstrEmit<PaginationEmits>,
            classes,
            components: {
              button: stubButton,
              menu: stubMenu
            }
          }
        )

        return design.render()
      }
    })

    const Host = defineComponent({
      name: 'IntegratedPaginationHost',
      setup() {
        return () => h(IntegratedPagination, {}, slots)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    return {
      container,
      state,
      emits,
      unmount: () => app.unmount()
    }
  }

  describe('DOM structure, navigation clicks, and v-model emits', () => {
    it('should render navigation landmark, page buttons, arrows, and update page on click', async () => {
      const { container, emits } = mountComponent({
        value: 1,
        rows: 10,
        count: 100,
        visible: 5
      })

      const root = container.querySelector<HTMLDivElement>('.d1-pagination')
      expect(root).not.toBeNull()
      expect(root?.getAttribute('role')).toBe('navigation')
      expect(root?.getAttribute('aria-label')).toBe('Pagination')
      expect(root?.getAttribute('tabindex')).toBe('0')

      const pageButtons = container.querySelectorAll<HTMLButtonElement>('button[data-event-type="page"]')
      expect(Array.from(pageButtons).map(button => button.textContent)).toEqual(['1', '2', '3', '4', '5'])
      expect(pageButtons[0]?.getAttribute('aria-current')).toBe('page')

      const firstButton = container.querySelector<HTMLButtonElement>('button[data-event-type="first"]')
      const backButton = container.querySelector<HTMLButtonElement>('button[data-event-type="back"]')
      const nextButton = container.querySelector<HTMLButtonElement>('button[data-event-type="next"]')
      const lastButton = container.querySelector<HTMLButtonElement>('button[data-event-type="last"]')

      expect(firstButton?.disabled).toBe(true)
      expect(backButton?.disabled).toBe(true)
      expect(nextButton?.disabled).toBe(false)
      expect(lastButton?.disabled).toBe(false)

      // Click page 4
      pageButtons[3]?.click()
      await nextTick()

      expect(emits).toHaveBeenCalledWith('update:value', 4)
      expect(emits).toHaveBeenCalledWith('update:modelValue', 4)
      expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), expect.objectContaining({
        type: 'page',
        value: 4
      }))
      expect(emits).toHaveBeenCalledWith('clickLite', expect.objectContaining({
        type: 'page',
        value: 4
      }))

      // Active state updates reactively even without external v-model binding
      const updatedSelected = container.querySelector<HTMLButtonElement>('button[data-selected="true"]')
      expect(updatedSelected?.textContent).toBe('4')
      expect(updatedSelected?.getAttribute('aria-current')).toBe('page')
    })

    it('should handle more, morePrev, and menuRows selections with all corresponding emits', async () => {
      const { container, emits } = mountComponent({
        value: 3,
        rows: 10,
        count: 100,
        showMore: true,
        showMorePrev: true,
        showInfo: true,
        menuRows: [10, 25, 50],
        textInfo: '[item] / [count]'
      })

      expect(container.querySelector('.d1-pagination__info')?.textContent).toBe('21-30 / 100')
      expect(container.querySelector('.d1-pagination__menuRows__label')?.textContent).toBe('Rows per page')

      const moreButton = container.querySelector<HTMLButtonElement>('button[data-event-type="more"]')
      const morePrevButton = container.querySelector<HTMLButtonElement>('button[data-event-type="morePrev"]')

      expect(moreButton).not.toBeNull()
      expect(morePrevButton).not.toBeNull()

      moreButton?.click()
      morePrevButton?.click()
      await nextTick()

      expect(emits).toHaveBeenCalledWith('more', expect.any(MouseEvent), expect.objectContaining({ type: 'more', value: 4 }))
      expect(emits).toHaveBeenCalledWith('moreLite', expect.objectContaining({ type: 'more', value: 4 }))
      expect(emits).toHaveBeenCalledWith('morePrev', expect.any(MouseEvent), expect.objectContaining({ type: 'morePrev', value: 2 }))
      expect(emits).toHaveBeenCalledWith('morePrevLite', expect.objectContaining({ type: 'morePrev', value: 2 }))

      // Select 25 rows per page from menu
      const option25 = container.querySelector<HTMLButtonElement>('.stub-menu__option[data-option-value="25"]')
      option25?.click()
      await nextTick()

      expect(emits).toHaveBeenCalledWith('rows', expect.any(MouseEvent), expect.objectContaining({ type: 'rows', value: 25 }))
      expect(emits).toHaveBeenCalledWith('rowsLite', expect.objectContaining({ type: 'rows', value: 25 }))
      expect(emits).toHaveBeenCalledWith('update:rows', 25)
      expect(emits).toHaveBeenCalledWith('update:modelRows', 25)

      // Menu trigger label, menu selected state, and info range all update synchronously
      const menuTrigger = container.querySelector<HTMLButtonElement>('button[data-menu-trigger="true"]')
      expect(menuTrigger?.textContent).toBe('25')
      expect(container.querySelector('.stub-menu')?.getAttribute('data-selected')).toBe('25')
      expect(container.querySelector('.d1-pagination__info')?.textContent).toBe('51-75 / 100')
    })

    it('should synchronize external modelValue, modelRows, and string props reactively', async () => {
      const { container, state } = mountComponent({
        modelValue: '2',
        modelRows: '20',
        count: '100',
        showInfo: true,
        textInfo: '[item] of [count]'
      })

      expect(container.querySelector('.d1-pagination__info')?.textContent).toBe('21-40 of 100')

      state.modelValue = 4
      state.modelRows = 25
      await nextTick()

      expect(container.querySelector('.d1-pagination__info')?.textContent).toBe('76-100 of 100')
      expect(container.querySelector<HTMLButtonElement>('button[data-selected="true"]')?.textContent).toBe('4')
    })
  })

  describe('Slots, showEnds ellipses, hideIfOne, AreaInclude, and boundary values', () => {
    it('should render leading, info, and trailing slots in exact structural order and provide area context', () => {
      let injectedArea: string | undefined

      const AreaConsumer = defineComponent({
        name: 'AreaConsumer',
        setup() {
          injectedArea = getAreaValue()
          return () => h('span', { class: 'slot-leading' }, `area:${injectedArea}`)
        }
      })

      const { container } = mountComponent(
        {
          area: 'table-footer',
          value: 5,
          rows: 10,
          count: 100,
          showEnds: true,
          showInfo: true
        },
        {
          leading: () => [h(AreaConsumer)],
          info: () => [h('span', { class: 'slot-info' }, 'Extra Info')],
          trailing: () => [h('span', { class: 'slot-trailing' }, 'Trailing')]
        }
      )

      const root = container.querySelector('.d1-pagination')
      expect(injectedArea).toBe('table-footer')
      expect(root?.querySelector('.slot-leading')?.textContent).toBe('area:table-footer')
      expect(root?.querySelector('.slot-info')?.textContent).toBe('Extra Info')
      expect(root?.querySelector('.slot-trailing')?.textContent).toBe('Trailing')

      const ellipses = root?.querySelectorAll('.d1-pagination__ellipsis')
      expect(ellipses).toHaveLength(2)
      expect(ellipses?.[0]?.getAttribute('aria-hidden')).toBe('true')
      expect(ellipses?.[1]?.getAttribute('aria-hidden')).toBe('true')
    })

    it('should hide when hideIfOne=true and count<=rows, and render cleanly for count=0/rows=0 when hideIfOne=false', async () => {
      const { container, state } = mountComponent({
        hideIfOne: true,
        count: 10,
        rows: 10
      })

      expect(container.querySelector('.d1-pagination')).toBeNull()

      state.hideIfOne = false
      state.count = 0
      state.rows = 0
      state.showInfo = true
      state.textInfo = '[item] / [count]'
      await nextTick()

      const root = container.querySelector('.d1-pagination')
      expect(root).not.toBeNull()
      expect(root?.querySelector('.d1-pagination__info')?.textContent).toBe('0-0 / 0')
      expect(root?.querySelectorAll('button[data-event-type="page"]')).toHaveLength(0)
    })
  })

  describe('Keyboard focus navigation (FocusDirectionInclude) & unmount cleanup', () => {
    it('should navigate enabled buttons via ArrowRight/ArrowLeft, activate via Enter, and clean up keydown listener on unmount', async () => {
      const { container, emits, unmount } = mountComponent({
        value: 2,
        rows: 10,
        count: 50,
        visible: 5
      })

      const root = container.querySelector<HTMLDivElement>('.d1-pagination')!
      const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('.d1-pagination__button:not(:disabled)'))

      // Mock deterministic horizontal layout geometry for FocusDirectionInclude
      buttons.forEach((button, index) => {
        vi.spyOn(button, 'getBoundingClientRect').mockReturnValue({
          left: index * 40,
          top: 0,
          right: index * 40 + 32,
          bottom: 32,
          width: 32,
          height: 32,
          x: index * 40,
          y: 0,
          toJSON: () => ({})
        })
        button.scrollIntoView = vi.fn()
      })

      const removeListenerSpy = vi.spyOn(root, 'removeEventListener')

      // Focusing container activates selected page button (page 2)
      root.dispatchEvent(new FocusEvent('focus'))
      await nextTick()

      const selectedButton = root.querySelector<HTMLButtonElement>('.d1-button--selected')!
      expect(selectedButton.classList.contains('d1-button--focus')).toBe(true)

      // Move right from page 2 to page 3
      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      await nextTick()

      const page3Button = Array.from(root.querySelectorAll<HTMLButtonElement>('button[data-event-type="page"]'))
        .find(button => button.textContent === '3')!
      expect(page3Button.classList.contains('d1-button--focus')).toBe(true)
      expect(selectedButton.classList.contains('d1-button--focus')).toBe(false)

      // Press Enter to click focused page 3
      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      await nextTick()

      expect(emits).toHaveBeenCalledWith('update:value', 3)
      expect(emits).toHaveBeenCalledWith('update:modelValue', 3)

      // Unmount triggers FocusDirectionInclude.onUnmounted -> removes keydown listener cleanly
      unmount()
      expect(removeListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function), undefined)
    })
  })
})
