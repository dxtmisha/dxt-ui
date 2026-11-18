// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ListItem, type ListItemConstructors } from '../ListItem'
import { ListItemDesign } from '../ListItemDesign'
import type { ListItemProps } from '../props'
import type {
  ListItemClasses,
  ListItemComponents,
  ListItemExpose,
  ListItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableListItem extends ListItem {
  get instantiatedItems(): Partial<Record<keyof ListItemConstructors, unknown>> {
    return this.instances
  }
}

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: { icon: [String, Object], end: Boolean },
  setup(props) {
    return () => h('span', {
      'class': props.end ? 'mock-icon-trailing' : 'mock-icon',
      'data-icon': typeof props.icon === 'string' ? props.icon : 'object',
      'data-event-type': props.end ? 'icon-trailing' : 'icon'
    })
  }
})

const MockBadge = defineComponent({
  name: 'MockBadge',
  props: { label: [String, Number], dot: Boolean },
  setup(props) {
    return () => h('span', {
      'class': 'mock-badge',
      'data-dot': String(Boolean(props.dot))
    }, props.label !== undefined ? String(props.label) : '')
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: { visible: Boolean, circular: Boolean },
  setup(props) {
    return () => h('span', {
      'class': 'mock-progress',
      'data-visible': String(Boolean(props.visible))
    })
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup() {
    return () => h('span', { class: 'mock-ripple' })
  }
})

const MockCheckbox = defineComponent({
  name: 'MockCheckbox',
  props: { value: Boolean },
  setup(props) {
    return () => h('input', {
      type: 'checkbox',
      checked: props.value,
      class: 'mock-checkbox'
    })
  }
})

const MockRadio = defineComponent({
  name: 'MockRadio',
  props: { value: Boolean },
  setup(props) {
    return () => h('input', {
      type: 'radio',
      checked: props.value,
      class: 'mock-radio'
    })
  }
})

async function mountListItem(
  initialProps: ListItemProps = { selectionStyle: 'none', role: 'option', tabindex: '-1' },
  customSlots: ListItemSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<ListItemProps>(initialProps)
  const emittedEvents: Array<{ event: string, args: unknown[] }> = []
  let logicInstance!: InspectableListItem

  class TestListItemDesign extends ListItemDesign<
    ListItemComponents,
    ListItemExpose,
    ListItemClasses,
    ListItemProps
  > {
    get logic(): InspectableListItem {
      return this.item as InspectableListItem
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-listItem': true,
          'd1-listItem--disabled': props.disabled,
          'd1-listItem--readonly': props.readonly,
          'd1-listItem--focus': props.focus,
          'd1-listItem--open': props.open,
          'd1-listItem--divider': props.divider
        }
      }))

      const design = new TestListItemDesign(
        'd1.listItem',
        props,
        {
          emits: (event: string, ...args: unknown[]) => {
            emittedEvents.push({ event, args })
          },
          classes,
          slots,
          components: {
            icon: MockIcon,
            badge: MockBadge,
            progress: MockProgress,
            ripple: MockRipple,
            checkbox: MockCheckbox,
            radio: MockRadio
          }
        } as unknown as ConstructorParameters<typeof ListItemDesign>[2],
        InspectableListItem as unknown as typeof ListItem
      )

      logicInstance = design.logic
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
  })
  app.mount(host)
  mountedCleanups.push(() => app.unmount())

  await nextTick()

  return {
    host,
    props,
    logic: logicInstance,
    emittedEvents
  }
}

describe('ListItem (Integration)', () => {
  it('should render minimal structure and keep optional helpers lazy until used', async () => {
    const { host, logic } = await mountListItem({
      label: 'Simple Item',
      selectionStyle: 'none'
    })

    const root = host.querySelector('.d1-listItem') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.querySelector('.d1-listItem__body')).not.toBeNull()
    expect(root.querySelector('.d1-listItem__context')).not.toBeNull()
    expect(root.querySelector('.d1-listItem__label')?.textContent).toBe('Simple Item')
    expect(root.querySelector('.mock-ripple')).not.toBeNull()

    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('ripple')).toBe(true)
    expect(logic.hasInstance('badge')).toBe(false)
    expect(logic.hasInstance('caption')).toBe(false)
    expect(logic.hasInstance('description')).toBe(false)
    expect(logic.hasInstance('icon')).toBe(false)
    expect(logic.hasInstance('prefix')).toBe(false)
    expect(logic.hasInstance('progress')).toBe(false)
    expect(logic.hasInstance('skeleton')).toBe(false)
    expect(logic.hasInstance('suffix')).toBe(false)
  })

  it('should render numeric 0 for label, caption, description, and badge', async () => {
    const { host } = await mountListItem({
      label: 0,
      caption: 0,
      description: 0,
      badge: 0,
      selectionStyle: 'none'
    })

    const root = host.querySelector('.d1-listItem') as HTMLElement
    expect(root.querySelector('.d1-listItem__label')?.textContent).toBe('0')
    expect(root.querySelector('.d1-listItem__caption')?.textContent).toBe('0')
    expect(root.querySelector('.d1-listItem__description')?.textContent).toBe('0')
    expect(root.querySelector('.mock-badge')?.textContent).toBe('0')
  })

  it('should render all text, icon, badge, progress, and skeleton elements reactively', async () => {
    const { host, props, logic } = await mountListItem({
      label: 'Settings',
      prefix: '01',
      caption: 'Account',
      suffix: 'CTRL+S',
      description: 'Manage your preferences',
      icon: 'settings',
      iconTrailing: 'chevron_right',
      badge: 3,
      loading: true,
      isSkeleton: true,
      selectionStyle: 'none'
    })

    const root = host.querySelector('.d1-listItem') as HTMLElement
    expect(root.classList.contains('d1-listItem--description')).toBe(true)
    expect(root.getAttribute('aria-disabled')).toBe('true')

    expect(root.querySelector('.d1-listItem__prefix')?.textContent).toBe('01')
    expect(root.querySelector('.d1-listItem__label')?.textContent).toBe('Settings')
    expect(root.querySelector('.d1-listItem__caption')?.textContent).toBe('Account')
    expect(root.querySelector('.d1-listItem__suffix')?.textContent).toBe('CTRL+S')
    expect(root.querySelector('.d1-listItem__description')?.textContent).toBe('Manage your preferences')
    expect(root.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('settings')
    expect(root.querySelector('.mock-icon-trailing')?.getAttribute('data-icon')).toBe('chevron_right')
    expect(root.querySelector('.mock-badge')?.textContent).toBe('3')
    expect(root.querySelector('.mock-progress')?.getAttribute('data-visible')).toBe('true')
    expect(root.querySelector('.mock-ripple')).toBeNull()

    expect(root.querySelector('.d1-listItem__label')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(root.querySelector('.d1-listItem__description')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(root.querySelector('.d1-listItem__prefix')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(root.querySelector('.d1-listItem__caption')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(root.querySelector('.d1-listItem__suffix')?.classList.contains('d1-skeleton__textVariant')).toBe(true)

    expect(logic.hasInstance('skeleton')).toBe(true)
    expect(logic.hasInstance('progress')).toBe(true)

    props.loading = false
    props.isSkeleton = false
    await nextTick()
    expect(root.getAttribute('aria-disabled')).toBeNull()
    expect(root.querySelector('.d1-listItem__label')?.classList.contains('d1-skeleton__textVariant')).toBe(false)
  })

  it('should handle click and Enter keydown interactions while blocking disabled clicks', async () => {
    const { host, props, emittedEvents } = await mountListItem({
      label: 'Action',
      value: 'act-1',
      detail: { source: 'menu' },
      selectionStyle: 'none'
    })

    const root = host.querySelector('.d1-listItem') as HTMLElement
    root.click()
    expect(emittedEvents.some(item => item.event === 'click')).toBe(true)
    expect(emittedEvents.some(item => item.event === 'clickLite')).toBe(true)

    const trailingIcon = root.querySelector('.d1-listItem__suffix')
    expect(trailingIcon).toBeNull()

    emittedEvents.length = 0
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(emittedEvents.some(item => item.event === 'clickLite')).toBe(true)

    emittedEvents.length = 0
    props.disabled = true
    await nextTick()
    root.click()
    expect(emittedEvents).toHaveLength(0)
  })

  it('should project all slots (leading, default, prefix, caption, suffix, description, body, trailing)', async () => {
    const { host } = await mountListItem(
      { selectionStyle: 'none' },
      {
        leading: () => h('span', { class: 'slot-leading' }, 'L'),
        default: () => h('span', { class: 'slot-default' }, 'D'),
        prefix: () => h('span', { class: 'slot-prefix' }, 'P'),
        caption: () => h('span', { class: 'slot-caption' }, 'C'),
        suffix: () => h('span', { class: 'slot-suffix' }, 'S'),
        description: () => h('span', { class: 'slot-description' }, 'Desc'),
        body: () => h('span', { class: 'slot-body' }, 'BodyExtra'),
        trailing: () => h('span', { class: 'slot-trailing' }, 'T')
      }
    )

    const root = host.querySelector('.d1-listItem') as HTMLElement
    expect(root.querySelector('.slot-leading')?.textContent).toBe('L')
    expect(root.querySelector('.d1-listItem__label .slot-default')?.textContent).toBe('D')
    expect(root.querySelector('.d1-listItem__prefix .slot-prefix')?.textContent).toBe('P')
    expect(root.querySelector('.d1-listItem__caption .slot-caption')?.textContent).toBe('C')
    expect(root.querySelector('.d1-listItem__suffix .slot-suffix')?.textContent).toBe('S')
    expect(root.querySelector('.d1-listItem__description .slot-description')?.textContent).toBe('Desc')
    expect(root.querySelector('.d1-listItem__body .slot-body')?.textContent).toBe('BodyExtra')
    expect(root.querySelector('.d1-listItem__trailing .slot-trailing')?.textContent).toBe('T')
  })
})
