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
import { type ConstrClasses, GeoRef } from '@dxtmisha/functional'

import { Badge, type BadgeConstructors } from '../Badge'
import { BadgeDesign } from '../BadgeDesign'
import type { BadgeProps } from '../props'
import type {
  BadgeClasses,
  BadgeComponents,
  BadgeExpose,
  BadgeSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableBadge extends Badge {
  get instantiatedItems(): Partial<Record<keyof BadgeConstructors, unknown>> {
    return this.instances
  }
}

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    active: Boolean
  },
  setup(props) {
    return () => h('span', {
      'class': 'mock-icon',
      'data-icon': typeof props.icon === 'string' ? props.icon : 'object',
      'data-active': String(props.active)
    })
  }
})

async function mountBadge(
  initialProps: BadgeProps = {},
  customSlots: BadgeSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<BadgeProps>(initialProps)
  let logicInstance!: InspectableBadge

  class TestBadgeDesign extends BadgeDesign<
    BadgeComponents,
    BadgeExpose,
    BadgeClasses,
    BadgeProps
  > {
    get logic(): InspectableBadge {
      return this.item as InspectableBadge
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-badge': true,
          'd1-badge--dot': props.dot,
          'd1-badge--hide': props.hide,
          'd1-badge--selected': props.selected
        }
      }))

      const design = new TestBadgeDesign(
        'd1.badge',
        props,
        {
          classes,
          slots,
          components: {
            icon: MockIcon
          }
        } as unknown as ConstructorParameters<typeof BadgeDesign>[2],
        InspectableBadge as unknown as typeof Badge
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
    logic: logicInstance
  }
}

describe('Badge (Integration)', () => {
  it('should render root span with hideAuto when empty and keep optional helpers lazy', async () => {
    const { host, logic } = await mountBadge({}, {}, { class: 'custom-badge', style: { color: 'red' } })

    const root = host.querySelector('.d1-badge') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.tagName).toBe('SPAN')
    expect(root.classList.contains('custom-badge')).toBe(true)
    expect(root.classList.contains('d1-badge--hideAuto')).toBe(true)
    expect(root.style.color).toBe('red')
    expect(root.querySelector('.d1-badge__label')).toBeNull()
    expect(root.querySelector('.mock-icon')).toBeNull()

    expect(logic.hasInstance('label')).toBe(false)
    expect(logic.hasInstance('icon')).toBe(false)
  })

  it('should render numeric, zero, capped, and text labels with reactive updates', async () => {
    vi.spyOn(GeoRef, 'getLanguage').mockReturnValue(computed(() => 'en'))

    const { host, props, logic } = await mountBadge({
      label: 0,
      labelMax: 99
    })

    const root = host.querySelector('.d1-badge') as HTMLElement
    expect(root.classList.contains('d1-badge--hideAuto')).toBe(false)
    expect(root.querySelector('.d1-badge__label')?.textContent).toBe('0')
    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('icon')).toBe(false)

    props.label = 120
    await nextTick()
    expect(root.querySelector('.d1-badge__label')?.textContent).toBe('99+')

    props.label = 'Beta'
    await nextTick()
    expect(root.querySelector('.d1-badge__label')?.textContent).toBe('Beta')

    props.label = ''
    await nextTick()
    expect(root.classList.contains('d1-badge--hideAuto')).toBe(true)
    expect(root.querySelector('.d1-badge__label')).toBeNull()
  })

  it('should render icon, default slot, dot mode, and ARIA accessibility attributes', async () => {
    const { host, props, logic } = await mountBadge(
      {
        icon: 'notifications',
        label: '5',
        ariaLabel: '5 unread notifications',
        selected: true
      },
      {
        default: () => ' items'
      }
    )

    const root = host.querySelector('.d1-badge') as HTMLElement
    expect(root.getAttribute('aria-label')).toBe('5 unread notifications')
    expect(root.classList.contains('d1-badge--hideAuto')).toBe(false)
    expect(root.classList.contains('d1-badge--selected')).toBe(true)

    const labelElement = root.querySelector('.d1-badge__label') as HTMLElement
    expect(labelElement).not.toBeNull()
    expect(labelElement.getAttribute('aria-hidden')).toBe('true')
    expect(labelElement.textContent).toContain('5')
    expect(labelElement.textContent).toContain('items')

    const iconElement = root.querySelector('.mock-icon') as HTMLElement
    expect(iconElement).not.toBeNull()
    expect(iconElement.getAttribute('data-icon')).toBe('notifications')
    expect(iconElement.getAttribute('data-active')).toBe('true')

    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('icon')).toBe(true)

    props.dot = true
    await nextTick()
    expect(root.classList.contains('d1-badge--dot')).toBe(true)
    expect(root.classList.contains('d1-badge--hideAuto')).toBe(false)
    expect(root.querySelector('.d1-badge__label')).toBeNull()
    expect(root.querySelector('.mock-icon')).toBeNull()
  })

  it('should compose external click handlers via mergeProps without overwriting', async () => {
    const onClick = vi.fn()
    const { host } = await mountBadge({ label: '1' }, {}, { onClick })

    const root = host.querySelector('.d1-badge') as HTMLElement
    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
