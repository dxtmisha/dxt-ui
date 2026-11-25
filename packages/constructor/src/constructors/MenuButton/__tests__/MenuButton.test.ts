// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { MenuButtonDesign } from '../MenuButtonDesign'
import { defaultsMenuButton, type MenuButtonProps } from '../props'
import type { MenuButtonClasses, MenuButtonComponents, MenuButtonExpose } from '../types'

const mountedContainers: HTMLElement[] = []

const InteractiveButton = defineComponent({
  name: 'InteractiveButton',
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
 * Mounts an interactive MenuButton test harness.
 *
 * Монтирует интерактивный тестовый стенд MenuButton.
 * @param properties initial props / начальные свойства
 * @returns mounted harness / смонтированный стенд
 */
function mountInteractiveMenuButton(properties: MenuButtonProps = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedContainers.push(container)

  const props = reactive<MenuButtonProps>({
    ...(defaultsMenuButton as MenuButtonProps),
    label: 'Language',
    option: [
      { label: 'English', value: 'en' },
      { label: 'Русский', value: 'ru' },
      { label: 'Tiếng Việt 🇻🇳', value: 'vi' }
    ],
    ...properties
  })

  const events: Array<{ name: string, payload: unknown[] }> = []
  let exposedApi: MenuButtonExpose | undefined

  const Component = defineComponent({
    setup() {
      const design = new MenuButtonDesign<
        MenuButtonComponents,
        MenuButtonExpose,
        MenuButtonClasses,
        MenuButtonProps
      >(
        'd1.menuButton',
        props,
        {
          emits: ((name: string, ...payload: unknown[]) => {
            events.push({ name, payload })
          }) as never,
          components: {
            button: InteractiveButton,
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
    getExposed: () => exposedApi as MenuButtonExpose,
    unmount: () => app.unmount()
  }
}

afterEach(() => {
  while (mountedContainers.length > 0) {
    mountedContainers.pop()?.remove()
  }
})

describe('MenuButton (Integration)', () => {
  it('should select items, update hidden input and button text, and emit focus/blur/input/change events', async () => {
    const { container, events, getExposed, unmount } = mountInteractiveMenuButton({
      name: 'language',
      hideLabelValue: false
    })

    const button = container.querySelector('button') as HTMLButtonElement
    button.dispatchEvent(new FocusEvent('focus'))
    button.dispatchEvent(new FocusEvent('blur'))

    expect(events.some(entry => entry.name === 'focus')).toBe(true)
    expect(events.some(entry => entry.name === 'blur')).toBe(true)

    ;(container.querySelector('[data-value="vi"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toBe('vi')
    expect((container.querySelector('input[type="hidden"]') as HTMLInputElement).value).toBe('vi')
    expect(button.textContent).toContain('Language')
    expect(button.textContent).toContain('Tiếng Việt 🇻🇳')
    expect(events.some(entry => entry.name === 'input')).toBe(true)
    expect(events.some(entry => entry.name === 'change')).toBe(true)
    expect(events.some(entry => entry.name === 'update:modelValue')).toBe(true)

    unmount()
  })

  it('should handle multiple selection and clear via expose API', async () => {
    const { container, getExposed, unmount } = mountInteractiveMenuButton({
      multiple: true
    })

    ;(container.querySelector('[data-value="en"]') as HTMLElement).click()
    await nextTick()
    ;(container.querySelector('[data-value="ru"]') as HTMLElement).click()
    await nextTick()

    expect(getExposed().getValue()).toEqual(['en', 'ru'])

    getExposed().clear()
    await nextTick()

    expect(getExposed().getValue()).toBeUndefined()
    unmount()
  })

  it('should stop emitting stale updates after unmount', async () => {
    const { props, events, unmount } = mountInteractiveMenuButton({ modelValue: 'en' })
    const initialCount = events.length

    unmount()

    props.modelValue = 'ru'
    await nextTick()

    expect(events.length).toBe(initialCount)
  })
})
