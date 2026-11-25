// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { MenuButtonDesign } from '../MenuButtonDesign'
import { defaultsMenuButton, type MenuButtonProps } from '../props'
import type { MenuButtonClasses, MenuButtonComponents, MenuButtonExpose } from '../types'

const mountedContainers: HTMLElement[] = []

const MockButton = defineComponent({
  name: 'MockButton',
  inheritAttrs: false,
  props: {
    icon: [String, Object],
    iconTrailing: [String, Object],
    iconTurn: Boolean,
    disabled: Boolean,
    readonly: Boolean
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'button',
      {
        ...attrs,
        'type': 'button',
        'class': ['mock-button', attrs.class],
        'disabled': componentProps.disabled,
        'data-icon': String(componentProps.icon ?? ''),
        'data-icon-trailing': String(componentProps.iconTrailing ?? ''),
        'data-icon-turn': String(Boolean(componentProps.iconTurn))
      },
      slots.default?.()
    )
  }
})

const MockMenu = defineComponent({
  name: 'MockMenu',
  inheritAttrs: false,
  props: {
    selected: [String, Number, Boolean, Array],
    list: [Array, Object]
  },
  setup(componentProps, { attrs, slots, expose }) {
    const open = ref(false)
    const selectedNames = computed(() => {
      if (componentProps.selected === undefined || componentProps.selected === '') {
        return []
      }

      const values = Array.isArray(componentProps.selected)
        ? componentProps.selected
        : [componentProps.selected]

      return values.map(item => `Name ${String(item)}`)
    })

    expose({
      getOpen: () => open.value,
      toOpen: () => { open.value = true },
      toClose: () => { open.value = false },
      toggle: () => { open.value = !open.value }
    })

    const controlItem = {
      open,
      selectedNames,
      binds: {
        'aria-haspopup': 'listbox',
        'aria-expanded': String(open.value)
      }
    }

    return () => h(
      'div',
      {
        ...attrs,
        'class': ['mock-menu', attrs.class],
        'data-selected': String(componentProps.selected ?? '')
      },
      [
        slots.control?.(controlItem),
        slots.title ? h('div', { class: 'mock-title' }, slots.title(controlItem)) : null,
        slots.footer ? h('div', { class: 'mock-footer' }, slots.footer(controlItem)) : null,
        slots.contextTop ? h('div', { class: 'mock-context-top' }, slots.contextTop(controlItem)) : null,
        slots.contextBottom ? h('div', { class: 'mock-context-bottom' }, slots.contextBottom(controlItem)) : null
      ]
    )
  }
})

/**
 * Mounts MenuButtonDesign inside a real Vue container.
 *
 * Монтирует MenuButtonDesign в реальном контейнере Vue.
 * @param properties component props / свойства компонента
 * @param slotMap slot definitions / определения слотов
 * @param attrs root attrs / корневые атрибуты
 * @returns mounted test harness / смонтированный стенд
 */
function mountMenuButtonDesign(
  properties: MenuButtonProps = {},
  slotMap: Record<string, (scope?: unknown) => unknown> = {},
  attrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedContainers.push(container)

  const props = reactive<MenuButtonProps>({
    ...(defaultsMenuButton as MenuButtonProps),
    ...properties
  })
  let exposedApi: MenuButtonExpose | undefined

  const Host = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-menuButton': true }
      }))

      const design = new MenuButtonDesign<
        MenuButtonComponents,
        MenuButtonExpose,
        MenuButtonClasses,
        MenuButtonProps
      >(
        'd1.menuButton',
        props,
        {
          classes: classesToken,
          components: {
            button: MockButton,
            menu: MockMenu
          }
        }
      )

      exposedApi = design.expose()
      return design.render()
    }
  })

  const app = createApp({ render: () => h(Host, attrs, slotMap) })
  app.mount(container)

  return {
    container,
    props,
    getExposed: () => exposedApi as MenuButtonExpose,
    unmount: () => app.unmount()
  }
}

afterEach(() => {
  while (mountedContainers.length > 0) {
    mountedContainers.pop()?.remove()
  }
})

describe('MenuButtonDesign', () => {
  describe('Trigger Label Formatting Modes', () => {
    it('should render plain label when no value is selected and support numeric label 0', () => {
      const { container, unmount } = mountMenuButtonDesign({
        label: 'Status',
        iconArrowDown: 'arrow_down'
      })

      expect(container.querySelector('.mock-button')?.textContent).toBe('Status')
      expect(container.querySelector('.d1-menuButton__selected')).toBeNull()
      unmount()

      const zeroLabel = mountMenuButtonDesign({
        label: 0,
        iconArrowDown: 'arrow_down'
      })
      expect(zeroLabel.container.querySelector('.mock-button')?.textContent).toBe('0')
      zeroLabel.unmount()
    })

    it('should replace label with selected names when hideLabelValue is true and join label + separator + selected when false', () => {
      const hiddenLabel = mountMenuButtonDesign({
        label: 'Role',
        value: ['admin', 'editor'],
        hideLabelValue: true
      })

      expect(hiddenLabel.container.querySelector('.d1-menuButton__label')).toBeNull()
      expect(hiddenLabel.container.querySelector('.d1-menuButton__selected')?.textContent).toBe('Name admin, Name editor')
      hiddenLabel.unmount()

      const visibleLabel = mountMenuButtonDesign({
        label: 'Role',
        labelSeparator: ' → ',
        value: 'admin',
        hideLabelValue: false
      })

      expect(visibleLabel.container.querySelector('.d1-menuButton__label')?.textContent).toBe('Role')
      expect(visibleLabel.container.querySelector('.d1-menuButton__separator')?.textContent).toBe(' → ')
      expect(visibleLabel.container.querySelector('.d1-menuButton__selected')?.textContent).toBe('Name admin')
      visibleLabel.unmount()
    })

    it('should hide selected value when hideValueIcon is true and icon is provided', () => {
      const { container, unmount } = mountMenuButtonDesign({
        label: 'Filter',
        icon: 'filter_alt',
        value: 'active',
        hideValueIcon: true
      })

      expect(container.querySelector('.d1-menuButton__selected')).toBeNull()
      expect(container.querySelector('.mock-button')?.textContent).toBe('Filter')
      unmount()
    })
  })

  describe('Disabled Button Rendering, Custom Default Slot, Root Attrs, and Hidden Input', () => {
    it('should still render disabled trigger button even when icon is absent and iconTrailing becomes undefined', () => {
      const { container, unmount } = mountMenuButtonDesign(
        {
          label: 'Disabled Menu',
          disabled: true,
          name: 'statusField',
          value: 'locked'
        },
        {},
        { 'data-testid': 'menu-button-root' }
      )

      const menu = container.querySelector('.mock-menu')
      const button = container.querySelector('.mock-button') as HTMLButtonElement
      const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement

      expect(menu?.getAttribute('data-testid')).toBe('menu-button-root')
      expect(menu?.classList.contains('d1-menuButton')).toBe(true)
      expect(button).not.toBeNull()
      expect(button.disabled).toBe(true)
      expect(button.textContent).toBe('Name locked')
      expect(hiddenInput.name).toBe('statusField')
      expect(hiddenInput.value).toBe('locked')

      unmount()
    })

    it('should render custom #default slot and Menu slots when provided', () => {
      const { container, unmount } = mountMenuButtonDesign(
        { label: 'Fallback', value: 'x' },
        {
          default: () => h('span', { class: 'custom-trigger-content' }, 'Custom Button Body'),
          title: () => 'Menu Header',
          footer: () => 'Menu Footer',
          contextTop: () => 'Context Top',
          contextBottom: () => 'Context Bottom'
        }
      )

      expect(container.querySelector('.custom-trigger-content')?.textContent).toBe('Custom Button Body')
      expect(container.querySelector('.mock-title')?.textContent).toBe('Menu Header')
      expect(container.querySelector('.mock-footer')?.textContent).toBe('Menu Footer')
      expect(container.querySelector('.mock-context-top')?.textContent).toBe('Context Top')
      expect(container.querySelector('.mock-context-bottom')?.textContent).toBe('Context Bottom')

      unmount()
    })
  })
})
