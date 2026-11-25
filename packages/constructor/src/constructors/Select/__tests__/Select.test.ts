// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { SelectDesign } from '../SelectDesign'
import type { SelectProps } from '../props'
import type { SelectClasses, SelectComponents, SelectExpose } from '../types'

const mountedContainers: HTMLElement[] = []

const InteractiveField = defineComponent({
  name: 'InteractiveField',
  inheritAttrs: false,
  setup(_props, { slots }) {
    return () => h('div', { class: 'interactive-field' }, slots.default?.({
      id: 'interactive-select-input',
      className: 'interactive-input',
      classHidden: 'interactive-hidden',
      classForFocus: 'interactive-focus',
      binds: { id: 'interactive-select-input' }
    }))
  }
})

const InteractiveMenu = defineComponent({
  name: 'InteractiveMenu',
  props: {
    list: { type: Array, default: () => [] },
    selected: { type: [String, Number, Boolean, Array], default: undefined },
    disabled: Boolean,
    onClick: { type: Function, default: undefined }
  },
  setup(componentProps, { slots, expose }) {
    const open = ref(false)
    const items = componentProps.list as Array<{ label: string, value: string | number }>

    expose({
      getOpen: () => open.value,
      toOpen: () => { open.value = true },
      toClose: () => { open.value = false },
      toggle: () => { open.value = !open.value }
    })

    return () => {
      const selectedValues = Array.isArray(componentProps.selected)
        ? componentProps.selected
        : componentProps.selected !== undefined && componentProps.selected !== ''
          ? [componentProps.selected]
          : []
      const selectedList = ref(items.filter(item => selectedValues.includes(item.value)))
      const selectedNames = ref(selectedList.value.map(item => item.label))

      return h('div', { class: 'interactive-menu' }, [
        slots.control?.({
          open,
          selectedList,
          selectedNames,
          binds: {
            onClick: () => {
              if (!componentProps.disabled) {
                open.value = !open.value
              }
            }
          }
        }),
        h(
          'ul',
          { class: 'interactive-options' },
          items.map(option => h(
            'li',
            {
              'data-value': String(option.value),
              'onClick': (event: MouseEvent) => {
                if (!componentProps.disabled) {
                  componentProps.onClick?.(event, { value: option.value })
                }
              }
            },
            option.label
          ))
        )
      ])
    }
  }
})

const InteractiveSelectValue = defineComponent({
  name: 'InteractiveSelectValue',
  props: {
    value: { type: Array, default: () => [] },
    placeholder: String
  },
  setup(componentProps, { attrs }) {
    return () => {
      const list = componentProps.value as Array<{ label: string }>
      return h(
        'div',
        { ...attrs, class: 'interactive-select-value' },
        list.length > 0 ? list.map(item => item.label).join(', ') : (componentProps.placeholder ?? '')
      )
    }
  }
})

/**
 * Mounts an interactive Select harness for integration testing.
 *
 * Монтирует интерактивный стенд Select для интеграционного тестирования.
 * @param properties initial props / начальные свойства
 * @returns harness helpers / помощники стенда
 */
function mountInteractiveSelect(properties: SelectProps = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedContainers.push(container)

  const props = reactive<SelectProps>({
    option: [
      { label: 'English', value: 'en' },
      { label: 'Русский', value: 'ru' },
      { label: 'Tiếng Việt 🇻🇳', value: 'vi' },
      { label: 'Zero Option', value: 0 }
    ],
    ...properties
  })

  const events: Array<{ name: string, payload: unknown[] }> = []
  let exposedApi: SelectExpose | undefined

  const Component = defineComponent({
    setup() {
      const design = new SelectDesign<
        SelectComponents,
        SelectExpose,
        SelectClasses,
        SelectProps
      >(
        'd1.select',
        props,
        {
          emits: ((name: string, ...payload: unknown[]) => {
            events.push({ name, payload })
          }) as never,
          components: {
            field: InteractiveField,
            menu: InteractiveMenu,
            selectValue: InteractiveSelectValue
          }
        }
      )

      exposedApi = design.expose()
      return design.render()
    }
  })

  const app = createApp(Component)
  app.mount(container)

  return {
    container,
    props,
    events,
    getExposed: () => exposedApi as SelectExpose,
    unmount: () => app.unmount()
  }
}

afterEach(() => {
  while (mountedContainers.length > 0) {
    mountedContainers.pop()?.remove()
  }
})

describe('Select (Integration)', () => {
  it('should select options, sync displayed value, and emit input/change/update:modelValue events', async () => {
    const { container, events, getExposed, unmount } = mountInteractiveSelect({
      placeholder: 'Select language'
    })

    expect(container.querySelector('.interactive-select-value')?.textContent).toBe('Select language')

    const vietnameseItem = container.querySelector('[data-value="vi"]') as HTMLElement
    vietnameseItem.click()
    await nextTick()

    expect(getExposed().getValue()).toBe('vi')
    expect(container.querySelector('.interactive-select-value')?.textContent).toBe('Tiếng Việt 🇻🇳')
    expect(events.some(entry => entry.name === 'input')).toBe(true)
    expect(events.some(entry => entry.name === 'change')).toBe(true)
    expect(events.some(entry => entry.name === 'update:modelValue')).toBe(true)

    unmount()
  })

  it('should handle numeric 0 option selection and external modelValue synchronization', async () => {
    const { container, props, getExposed, unmount } = mountInteractiveSelect({
      modelValue: 'en'
    })

    expect(getExposed().getValue()).toBe('en')

    const zeroItem = container.querySelector('[data-value="0"]') as HTMLElement
    zeroItem.click()
    await nextTick()

    expect(getExposed().getValue()).toBe(0)
    expect(container.querySelector('.interactive-select-value')?.textContent).toBe('Zero Option')

    props.modelValue = 'ru'
    await nextTick()

    expect(getExposed().getValue()).toBe('ru')
    expect(container.querySelector('.interactive-select-value')?.textContent).toBe('Русский')

    unmount()
  })

  it('should support multiple selection toggle and respect disabled/readonly guards', async () => {
    const { container, props, getExposed, unmount } = mountInteractiveSelect({
      multiple: true
    })

    ;(container.querySelector('[data-value="en"]') as HTMLElement).click()
    await nextTick()
    ;(container.querySelector('[data-value="ru"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toEqual(['en', 'ru'])

    props.disabled = true
    await nextTick()
    ;(container.querySelector('[data-value="vi"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toEqual(['en', 'ru'])

    props.disabled = false
    props.readonly = true
    await nextTick()
    ;(container.querySelector('[data-value="vi"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toEqual(['en', 'ru'])

    unmount()
  })

  it('should clean up lifecycle watchers cleanly on unmount without emitting stale updates', async () => {
    const { props, events, unmount } = mountInteractiveSelect({ modelValue: 'en' })
    const initialCount = events.length

    unmount()

    props.modelValue = 'ru'
    await nextTick()

    expect(events.length).toBe(initialCount)
  })
})
