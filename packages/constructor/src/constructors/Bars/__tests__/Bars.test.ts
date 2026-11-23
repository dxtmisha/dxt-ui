// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  mergeProps,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Bars, type BarsConstructors } from '../Bars'
import { BarsDesign } from '../BarsDesign'
import type { BarsProps } from '../props'
import type {
  BarsClasses,
  BarsComponents,
  BarsExpose,
  BarsSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableBars extends Bars {
  get instantiatedItems(): Partial<Record<keyof BarsConstructors, unknown>> {
    return this.instances
  }
}

const MockButton = defineComponent({
  name: 'MockButton',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    value: [String, Number],
    icon: [String, Object],
    selected: Boolean,
    isSkeleton: Boolean
  },
  emits: ['click'],
  setup(componentProps, { attrs, emit }) {
    return () => h(
      'button',
      mergeProps(
        attrs,
        {
          'type': 'button',
          'data-value': componentProps.value,
          'data-selected': componentProps.selected ? 'true' : undefined,
          'data-skeleton': componentProps.isSkeleton ? 'true' : undefined,
          'data-has-icon': componentProps.icon ? 'true' : undefined,
          'onClick': (event: MouseEvent) => {
            emit('click', event, {
              type: componentProps.value === 'back' ? 'back' : 'button',
              value: componentProps.value
            })
          }
        }
      ),
      componentProps.label !== undefined ? String(componentProps.label) : ''
    )
  }
})

/**
 * Mounts full Bars component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента Bars в jsdom.
 * @param initialProps initial bars properties / начальные свойства панели
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @returns container, reactive props, emitted events, and logic instance / контейнер, реактивные свойства, события и экземпляр логики
 */
async function mountBars(
  initialProps: BarsProps = {},
  customSlots: BarsSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<BarsProps>(initialProps)
  const emitted: Array<{ event: string, args: unknown[] }> = []
  let barsLogicInstance: InspectableBars | undefined

  class TestBarsDesign extends BarsDesign<BarsComponents, BarsExpose, BarsClasses, BarsProps> {
    get logic(): InspectableBars {
      return this.item as InspectableBars
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-bars': true
        }
      }))

      const design = new TestBarsDesign(
        'd1.bars',
        props,
        {
          emits: (event: string, ...args: unknown[]) => {
            emitted.push({ event, args })
          },
          classes,
          components: {
            button: MockButton
          }
        } as unknown as ConstructorParameters<typeof BarsDesign>[2],
        InspectableBars as unknown as typeof Bars
      )

      barsLogicInstance = design.logic
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
    emitted,
    logic: barsLogicInstance!
  }
}

describe('Bars (Integration)', () => {
  describe('DOM structure, classes, and lazy instantiation', () => {
    it('should render root element with BEM classes, merged external attrs, and skip unused label/description/skeleton', async () => {
      const { host, logic } = await mountBars(
        { backHide: true },
        {},
        { class: 'extra-bars', style: { color: 'red' }, id: 'bars-main' }
      )

      const root = host.firstElementChild as HTMLElement
      expect(root).not.toBeNull()
      expect(root.id).toBe('bars-main')
      expect(root.classList.contains('d1-bars')).toBe(true)
      expect(root.classList.contains('extra-bars')).toBe(true)
      expect(root.style.color).toBe('red')
      expect(root.querySelector('.d1-bars__context')).not.toBeNull()
      expect(root.querySelector('.d1-bars__label')).toBeNull()
      expect(root.querySelector('.d1-bars__description')).toBeNull()
      expect(root.querySelector('button')).toBeNull()

      expect(logic.instantiatedItems.label).toBeUndefined()
      expect(logic.instantiatedItems.description).toBeUndefined()
      expect(logic.instantiatedItems.skeleton).toBeUndefined()
    })

    it('should render label, description, skeleton classes, and bar buttons reactively', async () => {
      const { host, props, logic } = await mountBars({
        label: 'Inbox',
        description: 'Unread messages',
        isSkeleton: true,
        bars: [
          { value: 'search', label: 'Search', icon: 'search' },
          { value: 'filter', label: 'Filter' }
        ]
      })

      expect(logic.instantiatedItems.label).toBeDefined()
      expect(logic.instantiatedItems.description).toBeDefined()
      expect(logic.instantiatedItems.skeleton).toBeDefined()

      const label = host.querySelector('.d1-bars__label')
      const description = host.querySelector('.d1-bars__description')
      expect(label?.textContent).toBe('Inbox')
      expect(description?.textContent).toBe('Unread messages')
      expect(label?.classList.contains('d1-skeleton__textVariant')).toBe(true)
      expect(description?.classList.contains('d1-skeleton__textVariant')).toBe(true)

      const searchButton = host.querySelector('button[data-value="search"]')
      const filterButton = host.querySelector('button[data-value="filter"]')
      expect(searchButton?.getAttribute('data-has-icon')).toBe('true')
      expect(filterButton?.getAttribute('data-has-icon')).toBeNull()

      props.label = 'Updated Inbox'
      await nextTick()
      expect(host.querySelector('.d1-bars__label')?.textContent).toBe('Updated Inbox')
    })

    it('should render numeric 0 for label and description', async () => {
      const { host } = await mountBars({
        label: 0,
        description: 0,
        backHide: true
      })

      expect(host.querySelector('.d1-bars__label')?.textContent).toBe('0')
      expect(host.querySelector('.d1-bars__description')?.textContent).toBe('0')
    })
  })

  describe('Action mode switching & interactions', () => {
    it('should switch to action mode via props, close on back click, and emit click/update events', async () => {
      const { host, props, emitted } = await mountBars({
        label: 'Normal Title',
        description: 'Normal Desc',
        actionLabel: '2 selected',
        actionDescription: 'Bulk actions',
        backButton: { label: 'Back' },
        bars: [{ value: 'add', label: 'Add' }],
        actionBars: [{ value: 'delete', label: 'Delete' }]
      })

      const root = host.firstElementChild as HTMLElement
      expect(root.getAttribute('aria-live')).toBe('polite')
      expect(root.classList.contains('d1-bars--action')).toBe(false)
      expect(host.querySelector('.d1-bars__label')?.textContent).toBe('Normal Title')
      expect(host.querySelector('button[data-value="add"]')).not.toBeNull()
      expect(host.querySelector('button[data-value="delete"]')).toBeNull()

      props.modelAction = true
      await nextTick()

      expect(root.classList.contains('d1-bars--action')).toBe(true)
      expect(host.querySelector('.d1-bars__label')?.textContent).toBe('2 selected')
      expect(host.querySelector('.d1-bars__description')?.textContent).toBe('Bulk actions')
      expect(host.querySelector('button[data-value="add"]')).toBeNull()
      expect(host.querySelector('button[data-value="delete"]')).not.toBeNull()

      const backButton = host.querySelector('button[data-value="back"]') as HTMLButtonElement
      expect(backButton.dataset.selected).toBe('true')
      backButton.click()
      await nextTick()

      expect(root.classList.contains('d1-bars--action')).toBe(false)
      expect(emitted.some(item => item.event === 'update:action' && item.args[0] === false)).toBe(true)
      expect(emitted.some(item => item.event === 'update:modelAction' && item.args[0] === false)).toBe(true)
      expect(emitted.some(item => item.event === 'click')).toBe(true)
    })

    it('should emit click events from regular bar buttons and compose external onClick handlers', async () => {
      const externalClick = vi.fn()
      const backExternalClick = vi.fn()
      const { host, emitted } = await mountBars({
        action: true,
        backButton: { label: 'Back', onClick: backExternalClick },
        bars: [{ value: 'refresh', label: 'Refresh', onClick: externalClick }],
        actionBars: [{ value: 'archive', label: 'Archive', onClick: externalClick }]
      })

      const archiveButton = host.querySelector('button[data-value="archive"]') as HTMLButtonElement
      archiveButton.click()
      await nextTick()

      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.filter(item => item.event === 'click')).toHaveLength(1)
      expect(emitted.find(item => item.event === 'click')?.args[1]).toEqual({ type: 'button', value: 'archive' })

      const backButton = host.querySelector('button[data-value="back"]') as HTMLButtonElement
      backButton.click()
      await nextTick()

      expect(backExternalClick).toHaveBeenCalledTimes(1)
      expect(emitted.filter(item => item.event === 'click')).toHaveLength(2)
      expect(emitted.some(item => item.event === 'update:action' && item.args[0] === false)).toBe(true)
    })
  })

  describe('Slots projection', () => {
    it('should render default, description, bars, and actionBars slots', async () => {
      const { host, props } = await mountBars(
        { action: false, backHide: true },
        {
          default: () => h('span', { class: 'slot-title' }, 'Slot Title'),
          description: () => h('span', { class: 'slot-desc' }, 'Slot Desc'),
          bars: () => h('span', { class: 'slot-bars' }, 'Slot Bars'),
          actionBars: () => h('span', { class: 'slot-action-bars' }, 'Slot Action Bars')
        }
      )

      expect(host.querySelector('.slot-title')?.textContent).toBe('Slot Title')
      expect(host.querySelector('.slot-desc')?.textContent).toBe('Slot Desc')
      expect(host.querySelector('.slot-bars')?.textContent).toBe('Slot Bars')
      expect(host.querySelector('.slot-action-bars')).toBeNull()

      props.action = true
      await nextTick()

      expect(host.querySelector('.slot-bars')).toBeNull()
      expect(host.querySelector('.slot-action-bars')?.textContent).toBe('Slot Action Bars')
    })
  })
})
