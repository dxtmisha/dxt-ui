// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { MenuChipDesign } from '../MenuChipDesign'
import { defaultsMenuChip, type MenuChipProps } from '../props'
import type { MenuChipClasses, MenuChipComponents, MenuChipExpose } from '../types'

const mountedContainers: HTMLElement[] = []

const InteractiveChip = defineComponent({
  name: 'InteractiveChip',
  props: { disabled: Boolean },
  setup(componentProps, { attrs, slots }) {
    return () => h('button', { ...attrs, type: 'button', disabled: componentProps.disabled }, slots.default?.())
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
      const selectedNames = ref(items.filter(item => selectedValues.includes(item.value)).map(item => item.label))

      return h('div', { class: 'interactive-menu' }, [
        slots.control?.({
          open,
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

/**
 * Mounts an interactive MenuChip test harness.
 *
 * Монтирует интерактивный тестовый стенд MenuChip.
 * @param properties initial props / начальные свойства
 * @returns mounted harness / смонтированный стенд
 */
function mountInteractiveMenuChip(properties: MenuChipProps = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedContainers.push(container)

  const props = reactive<MenuChipProps>({
    ...(defaultsMenuChip as MenuChipProps),
    label: 'Tag',
    option: [
      { label: 'Frontend', value: 'frontend' },
      { label: 'Бэкенд', value: 'backend' },
      { label: 'Thiết kế 🎨', value: 'design' }
    ],
    ...properties
  })

  const events: Array<{ name: string, payload: unknown[] }> = []
  let exposedApi: MenuChipExpose | undefined

  const Component = defineComponent({
    setup() {
      const design = new MenuChipDesign<
        MenuChipComponents,
        MenuChipExpose,
        MenuChipClasses,
        MenuChipProps
      >(
        'd1.menuChip',
        props,
        {
          emits: ((name: string, ...payload: unknown[]) => {
            events.push({ name, payload })
          }) as never,
          components: {
            chip: InteractiveChip,
            menu: InteractiveMenu
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
    getExposed: () => exposedApi as MenuChipExpose,
    unmount: () => app.unmount()
  }
}

afterEach(() => {
  while (mountedContainers.length > 0) {
    mountedContainers.pop()?.remove()
  }
})

describe('MenuChip (Integration)', () => {
  it('should select items, sync hidden input and chip text, and emit focus/blur/input/change events', async () => {
    const { container, events, getExposed, unmount } = mountInteractiveMenuChip({
      name: 'category',
      hideLabelValue: false
    })

    const chip = container.querySelector('button') as HTMLButtonElement
    chip.dispatchEvent(new FocusEvent('focus'))
    chip.dispatchEvent(new FocusEvent('blur'))

    expect(events.some(entry => entry.name === 'focus')).toBe(true)
    expect(events.some(entry => entry.name === 'blur')).toBe(true)

    ;(container.querySelector('[data-value="design"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toBe('design')
    expect((container.querySelector('input[type="hidden"]') as HTMLInputElement).value).toBe('design')
    expect(chip.textContent).toContain('Tag')
    expect(chip.textContent).toContain('Thiết kế 🎨')
    expect(events.some(entry => entry.name === 'input')).toBe(true)
    expect(events.some(entry => entry.name === 'change')).toBe(true)
    expect(events.some(entry => entry.name === 'update:modelValue')).toBe(true)

    unmount()
  })

  it('should support multiple selection and expose clear/setValue methods', async () => {
    const { container, getExposed, unmount } = mountInteractiveMenuChip({
      multiple: true
    })

    ;(container.querySelector('[data-value="frontend"]') as HTMLElement).click()
    await nextTick()
    ;(container.querySelector('[data-value="backend"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toEqual(['frontend', 'backend'])

    getExposed().clear()
    await nextTick()

    expect(getExposed().getValue()).toBeUndefined()
    unmount()
  })

  it('should clean up lifecycle watchers on unmount', async () => {
    const { props, events, unmount } = mountInteractiveMenuChip({ modelValue: 'frontend' })
    const initialCount = events.length

    unmount()

    props.modelValue = 'backend'
    await nextTick()

    expect(events.length).toBe(initialCount)
  })
})
