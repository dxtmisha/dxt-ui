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

import { Chip } from '../Chip'
import { ChipDesign } from '../ChipDesign'
import { defaultsChip, type ChipPropsBasic } from '../props'
import type {
  ChipClasses,
  ChipComponents,
  ChipEmits,
  ChipExpose,
  ChipSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    disabled: Boolean,
    noPointerEvents: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({
        'class': 'mock-icon',
        'data-disabled': String(Boolean(componentProps.disabled)),
        'data-no-pointer-events': String(Boolean(componentProps.noPointerEvents))
      }, attrs),
      String(componentProps.icon ?? '')
    )
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean,
    circular: Boolean,
    inverse: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => componentProps.visible
      ? h('span', mergeProps({ class: 'mock-progress' }, attrs), 'loading')
      : null
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup(_, { attrs }) {
    return () => h('span', mergeProps({ class: 'mock-ripple' }, attrs))
  }
})

/**
 * Inspectable ChipDesign subclass exposing the underlying Chip logic orchestrator for lazy checks.
 *
 * Проверяемый подкласс ChipDesign, открывающий оркестратор Chip для проверки ленивой инициализации.
 */
class TestChipDesign extends ChipDesign<
  ChipComponents,
  ChipExpose,
  ChipClasses,
  ChipPropsBasic
> {
  /**
   * Returns underlying Chip logic orchestrator.
   *
   * Возвращает оркестратор бизнес-логики Chip.
   * @returns chip orchestrator / оркестратор чипа
   */
  get logic(): Chip {
    return this.item as Chip
  }
}

/**
 * Mounts full Chip component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента Chip в jsdom.
 * @param initialProps initial chip properties / начальные свойства чипа
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @returns container, reactive props, emitted events, exposed API, and logic instance / контейнер, реактивные свойства, события, экспонируемый API и экземпляр логики
 */
async function mountChip(
  initialProps: ChipPropsBasic = {},
  customSlots: ChipSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<ChipPropsBasic>({
    ...defaultsChip,
    ...initialProps
  })
  const emitted: Array<{ event: keyof ChipEmits, args: unknown[] }> = []
  let exposed!: ChipExpose
  let logic!: Chip

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-chip': true,
          'd1-chip--disabled': Boolean(props.disabled),
          'd1-chip--readonly': Boolean(props.readonly)
        }
      }))

      const design = new TestChipDesign(
        'd1.chip',
        props,
        {
          classes: classesToken,
          components: {
            icon: MockIcon,
            progress: MockProgress,
            ripple: MockRipple
          },
          emits: ((event: keyof ChipEmits, ...args: unknown[]) => {
            emitted.push({ event, args })
          }) as never
        }
      )

      logic = design.logic
      exposed = design.expose()
      return design.render()
    }
  })

  const app = createApp({
    render() {
      return h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
    }
  })
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return {
    container,
    props,
    emitted,
    exposed,
    logic
  }
}

describe('Chip (integration)', () => {
  describe('Full rendering and subcomponents assembly', () => {
    it('should render span root by default with label, leading icon, trailing icon, and ripple together', async () => {
      const { container, exposed, logic } = await mountChip({
        label: 'Filter',
        icon: 'star',
        iconTrailing: 'close',
        value: 'filter-chip',
        detail: { category: 'ui' }
      })

      expect(logic).toBeInstanceOf(Chip)

      const root = container.querySelector('span.d1-chip')
      expect(root).not.toBeNull()
      expect(root?.classList.contains('d1-chip--icon')).toBe(true)
      expect(root?.getAttribute('role')).toBe('button')
      expect(root?.getAttribute('tabindex')).toBe('0')
      expect(root?.getAttribute('data-value')).toBe('filter-chip')
      expect(root?.hasAttribute('type')).toBe(false)

      expect(container.querySelector('.d1-chip__label')?.textContent).toBe('Filter')

      const icons = container.querySelectorAll('.mock-icon')
      expect(icons).toHaveLength(2)
      expect(icons[0]?.textContent).toBe('star')
      expect(icons[0]?.classList.contains('d1-chip__icon')).toBe(true)
      expect(icons[0]?.getAttribute('data-no-pointer-events')).toBe('true')
      expect(icons[1]?.textContent).toBe('close')
      expect(icons[1]?.classList.contains('d1-chip__trailing')).toBe(true)
      expect(icons[1]?.getAttribute('data-no-pointer-events')).toBe('false')

      expect(container.querySelector('.mock-ripple.d1-chip__ripple')).not.toBeNull()
      expect(exposed.getValue?.()).toBe('filter-chip')
      expect(exposed.getDetail?.()).toEqual({ category: 'ui' })
    })

    it('should render default slot content when label prop is omitted', async () => {
      const { container } = await mountChip({}, {
        default: () => [h('span', { class: 'custom-chip-slot' }, 'Custom Chip')]
      })

      expect(container.querySelector('.d1-chip__label .custom-chip-slot')?.textContent).toBe('Custom Chip')
    })

    it('should preserve numeric 0 as a valid chip value and label', async () => {
      const { container, exposed } = await mountChip({
        label: 0,
        value: 0
      })

      expect(container.querySelector('.d1-chip')?.getAttribute('data-value')).toBe('0')
      expect(container.querySelector('.d1-chip__label')?.textContent).toBe('0')
      expect(exposed.getValue?.()).toBe(0)
    })

    it('should keep optional subordinate dependencies uninstantiated for a minimal disabled chip', async () => {
      const { logic } = await mountChip({
        disabled: true
      })

      expect(logic.hasInstance('icon')).toBe(false)
      expect(logic.hasInstance('label')).toBe(false)
      expect(logic.hasInstance('progress')).toBe(false)
      expect(logic.hasInstance('ripple')).toBe(false)
      expect(logic.hasInstance('skeleton')).toBe(false)
    })

    it('should render multilingual and unicode labels cleanly', async () => {
      const { container } = await mountChip({
        label: 'Тег — Tiếng Việt 🚀'
      })

      expect(container.querySelector('.d1-chip__label')?.textContent).toBe('Тег — Tiếng Việt 🚀')
    })
  })

  describe('Reactive state transitions (loading, disabled, readonly, skeleton)', () => {
    it('should reactively toggle progress, aria-disabled, and ripple on loading change', async () => {
      const { container, props, emitted } = await mountChip({
        label: 'Syncing',
        loading: false
      })

      expect(container.querySelector('.mock-progress')).toBeNull()
      expect(container.querySelector('.mock-ripple')).not.toBeNull()

      props.loading = true
      await nextTick()

      const root = container.querySelector('span.d1-chip') as HTMLSpanElement
      expect(container.querySelector('.mock-progress.d1-chip__loading')).not.toBeNull()
      expect(root.getAttribute('aria-disabled')).toBe('true')

      root.click()
      expect(emitted).toHaveLength(0)

      props.loading = false
      await nextTick()

      expect(container.querySelector('.mock-progress')).toBeNull()
      expect(root.getAttribute('aria-disabled')).toBeNull()
      root.click()
      expect(emitted).toHaveLength(2)
    })

    it('should block click emissions and suppress ripple when disabled or readonly', async () => {
      const { container, props, emitted } = await mountChip({
        label: 'Locked',
        disabled: true
      })

      const root = container.querySelector('span.d1-chip') as HTMLSpanElement
      expect(root.getAttribute('aria-disabled')).toBe('true')
      expect(container.querySelector('.mock-ripple')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(0)

      props.disabled = false
      props.readonly = true
      await nextTick()

      expect(root.getAttribute('aria-disabled')).toBe('true')
      root.click()
      expect(emitted).toHaveLength(0)
    })

    it('should apply and remove skeleton classes reactively when isSkeleton toggles', async () => {
      const { container, props } = await mountChip({
        label: 'Loading tag',
        isSkeleton: true
      })

      const root = container.querySelector('span.d1-chip')
      expect(root?.classList.contains('d1-skeleton__background')).toBe(true)

      props.isSkeleton = false
      await nextTick()

      expect(root?.classList.contains('d1-skeleton__background')).toBe(false)
    })
  })

  describe('Polymorphic tags, keyboard navigation, and external attrs merging', () => {
    it('should support keyboard activation via Enter and Space on default span tag and guard IME composition', async () => {
      const { container, emitted } = await mountChip({
        label: 'Interactive Chip',
        value: 'chip-val'
      })

      const root = container.querySelector('span.d1-chip') as HTMLSpanElement
      expect(root).not.toBeNull()

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true }))
      expect(emitted).toHaveLength(0)

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])

      emitted.splice(0)
      root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })

    it('should render button and anchor elements when tag is explicitly overridden', async () => {
      const { container, props } = await mountChip({
        label: 'Navigate',
        tag: 'a',
        href: 'https://example.com'
      })

      const anchor = container.querySelector('a.d1-chip')
      expect(anchor).not.toBeNull()
      expect(anchor?.getAttribute('href')).toBe('https://example.com')
      expect(anchor?.hasAttribute('role')).toBe(false)

      props.tag = 'button'
      props.href = undefined
      await nextTick()

      const button = container.querySelector('button.d1-chip')
      expect(button).not.toBeNull()
      expect(button?.getAttribute('type')).toBe('button')
    })

    it('should merge external class, style, and onClick handler without overwriting internal emits', async () => {
      const externalClick = vi.fn()
      const { container, emitted } = await mountChip(
        { label: 'Merged Chip', value: 'm-chip' },
        {},
        { class: 'ext-chip', style: 'color: green', onClick: externalClick }
      )

      const root = container.querySelector('span.d1-chip') as HTMLSpanElement
      expect(root.classList.contains('ext-chip')).toBe(true)
      expect(root.getAttribute('style')).toContain('color: green')

      root.click()
      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })
  })
})
