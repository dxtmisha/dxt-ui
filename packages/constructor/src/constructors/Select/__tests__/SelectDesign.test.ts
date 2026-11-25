// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { SelectDesign } from '../SelectDesign'
import type { SelectProps } from '../props'
import type { SelectClasses, SelectComponents, SelectExpose } from '../types'

const activeContainers: HTMLElement[] = []

const MockField = defineComponent({
  name: 'MockField',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    focus: Boolean,
    iconTurn: Boolean,
    validationMessage: String
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'class': ['mock-field', attrs.class],
        'data-focus': String(Boolean(componentProps.focus)),
        'data-icon-turn': String(Boolean(componentProps.iconTurn)),
        'data-validation': componentProps.validationMessage ?? ''
      },
      [
        slots.label ? h('div', { class: 'mock-field-label-slot' }, slots.label({})) : null,
        slots.prefix ? h('div', { class: 'mock-field-prefix-slot' }, slots.prefix({})) : null,
        slots.suffix ? h('div', { class: 'mock-field-suffix-slot' }, slots.suffix({})) : null,
        slots.default?.({
          id: 'select-field-1',
          className: 'd1-field__body__input',
          classHidden: 'd1-field__body__hidden',
          classForFocus: 'd1-field__body__focus',
          binds: {
            id: 'select-field-1',
            class: 'd1-field__body__input'
          }
        })
      ]
    )
  }
})

const MockMenu = defineComponent({
  name: 'MockMenu',
  inheritAttrs: false,
  props: {
    selected: [String, Number, Boolean, Array],
    list: [Array, Object],
    onClick: Function
  },
  setup(componentProps, { slots, expose }) {
    const open = ref(false)
    const selectedList = computed(() => {
      if (componentProps.selected === undefined || componentProps.selected === '') {
        return []
      }

      const values = Array.isArray(componentProps.selected)
        ? componentProps.selected
        : [componentProps.selected]

      return values.map(value => ({ label: `Label ${String(value)}`, value }))
    })
    const selectedNames = computed(() => selectedList.value.map(item => item.label))
    const toOpen = vi.fn(() => {
      open.value = true
    })
    const toClose = vi.fn(() => {
      open.value = false
    })
    const toggle = vi.fn(() => {
      open.value = !open.value
    })
    const next = vi.fn()
    const previous = vi.fn()

    expose({
      getOpen: () => open.value,
      toOpen,
      toClose,
      toggle,
      next,
      previous
    })

    const controlItem = {
      open,
      selectedList,
      selectedNames,
      binds: {
        'aria-haspopup': 'listbox',
        'aria-expanded': 'false'
      }
    }

    return () => h('div', { 'class': 'mock-menu', 'data-selected': String(componentProps.selected ?? '') }, [
      slots.control?.(controlItem),
      slots.title ? h('div', { class: 'mock-menu-title' }, slots.title(controlItem)) : null,
      slots.contextTop ? h('div', { class: 'mock-menu-context-top' }, slots.contextTop(controlItem)) : null,
      slots.contextBottom ? h('div', { class: 'mock-menu-context-bottom' }, slots.contextBottom(controlItem)) : null,
      slots.footer ? h('div', { class: 'mock-menu-footer' }, slots.footer(controlItem)) : null
    ])
  }
})

const MockSelectValue = defineComponent({
  name: 'MockSelectValue',
  inheritAttrs: false,
  props: {
    value: Array,
    disabled: Boolean,
    multiple: Boolean,
    placeholder: String
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'div',
      {
        ...attrs,
        'class': ['mock-select-value', attrs.class],
        'data-disabled': String(Boolean(componentProps.disabled)),
        'data-multiple': String(Boolean(componentProps.multiple)),
        'data-placeholder': componentProps.placeholder ?? ''
      },
      ((componentProps.value as Array<{ label: string }> | undefined) ?? []).map(item => item.label).join(', ')
    )
  }
})

/**
 * Mounts SelectDesign inside a real Vue app container.
 *
 * Монтирует SelectDesign внутри реального контейнера Vue-приложения.
 * @param properties component props / свойства компонента
 * @param slotMap slot renderers / рендереры слотов
 * @param attrs root attributes / корневые атрибуты
 * @returns mounted test harness / смонтированное тестовое окружение
 */
function mountSelectDesign(
  properties: SelectProps = {},
  slotMap: Record<string, () => unknown> = {},
  attrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  activeContainers.push(container)

  const props = reactive<SelectProps>({ ...properties })
  const emittedEvents: Array<[string, ...unknown[]]> = []
  let exposedApi: SelectExpose | undefined

  const Host = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-select': true }
      }))

      const design = new SelectDesign<
        SelectComponents,
        SelectExpose,
        SelectClasses,
        SelectProps
      >(
        'd1.select',
        props,
        {
          emits: ((event: string, ...args: unknown[]) => {
            emittedEvents.push([event, ...args])
          }) as never,
          classes: classesToken,
          components: {
            field: MockField,
            menu: MockMenu,
            selectValue: MockSelectValue
          }
        }
      )

      exposedApi = design.expose()
      return design.render()
    }
  })

  const app = createApp({
    render: () => h(Host, attrs, slotMap)
  })
  app.mount(container)

  return {
    container,
    props,
    emittedEvents,
    getExposed: () => exposedApi as SelectExpose,
    unmount: () => app.unmount()
  }
}

afterEach(() => {
  while (activeContainers.length > 0) {
    activeContainers.pop()?.remove()
  }
})

describe('SelectDesign', () => {
  describe('Static Mode and Combobox ARIA Rendering', () => {
    it('should render both SelectValue and focusable readonly combobox input in default mode', () => {
      const { container, unmount } = mountSelectDesign(
        {
          value: 'alpha',
          placeholder: 'Pick an option',
          name: 'choice'
        },
        {},
        { 'data-testid': 'select-root' }
      )

      const field = container.querySelector('.mock-field')
      const selectValue = container.querySelector('.mock-select-value')
      const input = container.querySelector('input') as HTMLInputElement

      expect(field?.getAttribute('data-testid')).toBe('select-root')
      expect(field?.classList.contains('d1-select')).toBe(true)
      expect(selectValue?.getAttribute('role')).toBe('combobox')
      expect(selectValue?.textContent).toBe('Label alpha')
      expect(input.getAttribute('role')).toBe('combobox')
      expect(input.getAttribute('autocomplete')).toBe('off')
      expect(input.readOnly).toBe(true)
      expect(input.className).toContain('d1-field__body__focus')

      unmount()
    })
  })

  describe('Editable Mode (editValue) and Event Composition', () => {
    it('should omit SelectValue and compose both event.onInput and menu toOpen on input', () => {
      const { container, emittedEvents, getExposed, unmount } = mountSelectDesign({
        editValue: true,
        value: 'initial'
      })

      expect(container.querySelector('.mock-select-value')).toBeNull()

      const input = container.querySelector('input') as HTMLInputElement
      expect(input.readOnly).toBe(false)
      expect(input.className).toContain('d1-field__body__input')

      input.value = 'typed value'
      input.dispatchEvent(new Event('input', { bubbles: true }))

      expect(getExposed().getValue()).toBe('typed value')
      expect(emittedEvents.some(([name]) => name === 'input')).toBe(true)
      expect(emittedEvents.some(([name]) => name === 'update:modelValue')).toBe(true)
      expect(getExposed().getOpen()).toBe(true)

      unmount()
    })
  })

  describe('Field and Menu Slot Forwarding', () => {
    it('should forward both Field slots (label, prefix, suffix) and Menu slots (title, footer, contextTop, contextBottom)', () => {
      const { container, unmount } = mountSelectDesign(
        { value: 'alpha' },
        {
          label: () => 'Custom Label Slot',
          prefix: () => 'Prefix Slot',
          suffix: () => 'Suffix Slot',
          title: () => 'Menu Title Slot',
          footer: () => 'Menu Footer Slot',
          contextTop: () => 'Top Context Slot',
          contextBottom: () => 'Bottom Context Slot'
        }
      )

      expect(container.querySelector('.mock-field-label-slot')?.textContent).toBe('Custom Label Slot')
      expect(container.querySelector('.mock-field-prefix-slot')?.textContent).toBe('Prefix Slot')
      expect(container.querySelector('.mock-field-suffix-slot')?.textContent).toBe('Suffix Slot')
      expect(container.querySelector('.mock-menu-title')?.textContent).toBe('Menu Title Slot')
      expect(container.querySelector('.mock-menu-footer')?.textContent).toBe('Menu Footer Slot')
      expect(container.querySelector('.mock-menu-context-top')?.textContent).toBe('Top Context Slot')
      expect(container.querySelector('.mock-menu-context-bottom')?.textContent).toBe('Bottom Context Slot')

      unmount()
    })
  })

  describe('Expose API', () => {
    it('should expose value, validation, and menu control methods', () => {
      const { getExposed, unmount } = mountSelectDesign({
        value: 'first',
        validationMessage: 'Custom validation error'
      })

      const exposed = getExposed()

      expect(exposed.getValue()).toBe('first')
      expect(exposed.getValidationMessage()).toBe('Custom validation error')
      expect(exposed.getOpen()).toBe(false)

      exposed.setValue('second')
      expect(exposed.getValue()).toBe('second')

      exposed.toOpen()
      expect(exposed.getOpen()).toBe(true)

      exposed.clear()
      expect(exposed.getValue()).toBeUndefined()

      unmount()
    })
  })
})
