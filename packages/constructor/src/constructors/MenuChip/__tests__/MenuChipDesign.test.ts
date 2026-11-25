// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { MenuChipDesign } from '../MenuChipDesign'
import { defaultsMenuChip, type MenuChipProps } from '../props'
import type { MenuChipClasses, MenuChipComponents, MenuChipExpose } from '../types'

const mountedContainers: HTMLElement[] = []

const MockChip = defineComponent({
  name: 'MockChip',
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
        'class': ['mock-chip', attrs.class],
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

      return values.map(item => `Tag ${String(item)}`)
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
 * Mounts MenuChipDesign inside a real Vue container.
 *
 * Монтирует MenuChipDesign в реальном контейнере Vue.
 * @param properties component props / свойства компонента
 * @param slotMap slot definitions / определения слотов
 * @param attrs root attrs / корневые атрибуты
 * @returns mounted test harness / смонтированный стенд
 */
function mountMenuChipDesign(
  properties: MenuChipProps = {},
  slotMap: Record<string, (scope?: unknown) => unknown> = {},
  attrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedContainers.push(container)

  const props = reactive<MenuChipProps>({
    ...(defaultsMenuChip as MenuChipProps),
    ...properties
  })
  let exposedApi: MenuChipExpose | undefined

  const Host = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-menuChip': true }
      }))

      const design = new MenuChipDesign<
        MenuChipComponents,
        MenuChipExpose,
        MenuChipClasses,
        MenuChipProps
      >(
        'd1.menuChip',
        props,
        {
          classes: classesToken,
          components: {
            chip: MockChip,
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
    getExposed: () => exposedApi as MenuChipExpose,
    unmount: () => app.unmount()
  }
}

afterEach(() => {
  while (mountedContainers.length > 0) {
    mountedContainers.pop()?.remove()
  }
})

describe('MenuChipDesign', () => {
  describe('Trigger Label Formatting Modes', () => {
    it('should render plain label when unselected and support numeric label 0', () => {
      const { container, unmount } = mountMenuChipDesign({
        label: 'Category',
        iconArrowDown: 'arrow_down'
      })

      expect(container.querySelector('.mock-chip')?.textContent).toBe('Category')
      expect(container.querySelector('.d1-menuChip__selected')).toBeNull()
      unmount()

      const zeroLabel = mountMenuChipDesign({
        label: 0,
        iconArrowDown: 'arrow_down'
      })
      expect(zeroLabel.container.querySelector('.mock-chip')?.textContent).toBe('0')
      zeroLabel.unmount()
    })

    it('should handle hideLabelValue true/false and custom labelSeparator', () => {
      const hiddenLabel = mountMenuChipDesign({
        label: 'Priority',
        value: ['high', 'urgent'],
        hideLabelValue: true
      })

      expect(hiddenLabel.container.querySelector('.d1-menuChip__label')).toBeNull()
      expect(hiddenLabel.container.querySelector('.d1-menuChip__selected')?.textContent).toBe('Tag high, Tag urgent')
      hiddenLabel.unmount()

      const visibleLabel = mountMenuChipDesign({
        label: 'Priority',
        labelSeparator: ' = ',
        value: 'high',
        hideLabelValue: false
      })

      expect(visibleLabel.container.querySelector('.d1-menuChip__label')?.textContent).toBe('Priority')
      expect(visibleLabel.container.querySelector('.d1-menuChip__separator')?.textContent).toBe(' = ')
      expect(visibleLabel.container.querySelector('.d1-menuChip__selected')?.textContent).toBe('Tag high')
      visibleLabel.unmount()
    })

    it('should hide selected text when hideValueIcon is true and icon is set', () => {
      const { container, unmount } = mountMenuChipDesign({
        label: 'Tag',
        icon: 'sell',
        value: 'featured',
        hideValueIcon: true
      })

      expect(container.querySelector('.d1-menuChip__selected')).toBeNull()
      expect(container.querySelector('.mock-chip')?.textContent).toBe('Tag')
      unmount()
    })
  })

  describe('Disabled Chip Rendering, Custom Default Slot, Root Attrs, and Hidden Input', () => {
    it('should render disabled trigger chip even without icon and preserve root attrs + hidden input', () => {
      const { container, unmount } = mountMenuChipDesign(
        {
          label: 'Disabled Chip',
          disabled: true,
          name: 'tagFilter',
          value: 'archived'
        },
        {},
        { 'data-testid': 'menu-chip-root' }
      )

      const menu = container.querySelector('.mock-menu')
      const chip = container.querySelector('.mock-chip') as HTMLButtonElement
      const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement

      expect(menu?.getAttribute('data-testid')).toBe('menu-chip-root')
      expect(menu?.classList.contains('d1-menuChip')).toBe(true)
      expect(chip).not.toBeNull()
      expect(chip.disabled).toBe(true)
      expect(chip.textContent).toBe('Tag archived')
      expect(hiddenInput.name).toBe('tagFilter')
      expect(hiddenInput.value).toBe('archived')

      unmount()
    })

    it('should render custom #default slot and Menu slots when provided', () => {
      const { container, unmount } = mountMenuChipDesign(
        { label: 'Fallback', value: 'y' },
        {
          default: () => h('span', { class: 'custom-chip-content' }, 'Custom Chip Body'),
          title: () => 'Chip Header',
          footer: () => 'Chip Footer',
          contextTop: () => 'Chip Context Top',
          contextBottom: () => 'Chip Context Bottom'
        }
      )

      expect(container.querySelector('.custom-chip-content')?.textContent).toBe('Custom Chip Body')
      expect(container.querySelector('.mock-title')?.textContent).toBe('Chip Header')
      expect(container.querySelector('.mock-footer')?.textContent).toBe('Chip Footer')
      expect(container.querySelector('.mock-context-top')?.textContent).toBe('Chip Context Top')
      expect(container.querySelector('.mock-context-bottom')?.textContent).toBe('Chip Context Bottom')

      unmount()
    })
  })
})
