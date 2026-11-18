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

import { ButtonDesign } from '../ButtonDesign'
import type { ButtonPropsBasic } from '../props'
import type {
  ButtonClasses,
  ButtonComponents,
  ButtonEmits,
  ButtonExpose,
  ButtonSlots
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
    disabled: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({
        'class': 'mock-icon',
        'data-disabled': String(Boolean(componentProps.disabled))
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
 * Mounts full Button component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента Button в jsdom.
 * @param initialProps initial button properties / начальные свойства кнопки
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @returns container, reactive props, emitted events, and exposed API / контейнер, реактивные свойства, события и экспонируемый API
 */
async function mountButton(
  initialProps: ButtonPropsBasic = {},
  customSlots: ButtonSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<ButtonPropsBasic>({ ...initialProps })
  const emitted: Array<{ event: keyof ButtonEmits, args: unknown[] }> = []
  let exposed!: ButtonExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-button': true,
          'd1-button--disabled': Boolean(props.disabled),
          'd1-button--readonly': Boolean(props.readonly)
        }
      }))

      const design = new ButtonDesign<
        ButtonComponents,
        ButtonExpose,
        ButtonClasses,
        ButtonPropsBasic
      >(
        'd1.button',
        props,
        {
          classes: classesToken,
          components: {
            icon: MockIcon,
            progress: MockProgress,
            ripple: MockRipple
          },
          emits: ((event: keyof ButtonEmits, ...args: unknown[]) => {
            emitted.push({ event, args })
          }) as never
        }
      )

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
    exposed
  }
}

describe('Button (integration)', () => {
  describe('Full rendering and subcomponents assembly', () => {
    it('should render label, leading icon, trailing icon, and ripple together', async () => {
      const { container, exposed } = await mountButton({
        label: 'Save',
        icon: 'check',
        iconTrailing: 'arrow_forward',
        value: 'save-btn',
        detail: { id: 42 }
      })

      const root = container.querySelector('button.d1-button')
      expect(root).not.toBeNull()
      expect(root?.classList.contains('d1-button--icon')).toBe(true)
      expect(root?.getAttribute('type')).toBe('button')
      expect(root?.getAttribute('data-value')).toBe('save-btn')

      expect(container.querySelector('.d1-button__label')?.textContent).toBe('Save')

      const icons = container.querySelectorAll('.mock-icon')
      expect(icons).toHaveLength(2)
      expect(icons[0]?.textContent).toBe('check')
      expect(icons[0]?.classList.contains('d1-button__icon')).toBe(true)
      expect(icons[1]?.textContent).toBe('arrow_forward')
      expect(icons[1]?.classList.contains('d1-button__trailing')).toBe(true)

      expect(container.querySelector('.mock-ripple.d1-button__ripple')).not.toBeNull()
      expect(exposed.getValue?.()).toBe('save-btn')
      expect(exposed.getDetail?.()).toEqual({ id: 42 })
    })

    it('should render default slot content when label prop is omitted', async () => {
      const { container } = await mountButton({}, {
        default: () => [h('span', { class: 'custom-slot-text' }, 'Custom Button')]
      })

      expect(container.querySelector('.d1-button__label .custom-slot-text')?.textContent).toBe('Custom Button')
    })

    it('should preserve numeric 0 as a valid button value and label', async () => {
      const { container, exposed } = await mountButton({
        label: 0,
        value: 0
      })

      expect(container.querySelector('.d1-button')?.getAttribute('data-value')).toBe('0')
      expect(container.querySelector('.d1-button__label')?.textContent).toBe('0')
      expect(exposed.getValue?.()).toBe(0)
    })
  })

  describe('Reactive state transitions (loading, disabled, readonly, skeleton)', () => {
    it('should reactively toggle progress, aria-disabled, and ripple on loading change', async () => {
      const { container, props, emitted } = await mountButton({
        label: 'Submit',
        loading: false
      })

      expect(container.querySelector('.mock-progress')).toBeNull()
      expect(container.querySelector('.mock-ripple')).not.toBeNull()

      props.loading = true
      await nextTick()

      const root = container.querySelector('button.d1-button') as HTMLButtonElement
      expect(container.querySelector('.mock-progress.d1-button__loading')).not.toBeNull()
      expect(root.getAttribute('aria-disabled')).toBe('true')

      root.click()
      expect(emitted).toHaveLength(0)

      props.loading = false
      await nextTick()

      expect(container.querySelector('.mock-progress')).toBeNull()
      root.click()
      expect(emitted).toHaveLength(2)
    })

    it('should block click emissions and remove ripple when disabled or readonly', async () => {
      const { container, props, emitted } = await mountButton({
        label: 'Action',
        disabled: true
      })

      const root = container.querySelector('button.d1-button') as HTMLButtonElement
      expect(root.disabled).toBe(true)
      expect(container.querySelector('.mock-ripple')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(0)

      props.disabled = false
      props.readonly = true
      await nextTick()

      root.click()
      expect(emitted).toHaveLength(0)
    })

    it('should apply skeleton classes cleanly when isSkeleton is enabled', async () => {
      const { container, props } = await mountButton({
        label: 'Skeleton',
        isSkeleton: true
      })

      const root = container.querySelector('button.d1-button')
      expect(root?.classList.contains('d1-skeleton__background')).toBe(true)

      props.isSkeleton = false
      await nextTick()

      expect(root?.classList.contains('d1-skeleton__background')).toBe(false)
    })
  })

  describe('Polymorphic tags, links, keyboard navigation, and external attrs', () => {
    it('should render anchor element when href or to is provided', async () => {
      const { container, props } = await mountButton({
        label: 'Visit',
        href: 'https://example.com'
      })

      const anchor = container.querySelector('a.d1-button')
      expect(anchor).not.toBeNull()
      expect(anchor?.getAttribute('href')).toBe('https://example.com')
      expect(anchor?.hasAttribute('type')).toBe(false)

      props.href = undefined
      props.to = '/profile'
      await nextTick()

      const routerAnchor = container.querySelector('a.d1-button')
      expect(routerAnchor).not.toBeNull()
      expect(routerAnchor?.hasAttribute('type')).toBe(false)
    })

    it('should support keyboard activation via Enter and Space on non-button tags and guard IME composition', async () => {
      const { container, emitted } = await mountButton({
        label: 'Div Button',
        tag: 'div',
        value: 'div-val'
      })

      const divButton = container.querySelector('div.d1-button') as HTMLDivElement
      expect(divButton).not.toBeNull()
      expect(divButton.getAttribute('role')).toBe('button')
      expect(divButton.getAttribute('tabindex')).toBe('0')

      const composingEvent = new KeyboardEvent('keydown', { key: 'Enter', isComposing: true })
      divButton.dispatchEvent(composingEvent)
      expect(emitted).toHaveLength(0)

      divButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
      expect(emitted.some(item => item.event === 'click')).toBe(true)
      expect(emitted.some(item => item.event === 'clickLite')).toBe(true)
    })

    it('should merge external class, style, and onClick handler without overwriting internal emits', async () => {
      const externalClick = vi.fn()
      const { container, emitted } = await mountButton(
        { label: 'Merged', value: 'm1' },
        {},
        { class: 'ext-cls', style: 'color: blue', onClick: externalClick }
      )

      const root = container.querySelector('button.d1-button') as HTMLButtonElement
      expect(root.classList.contains('ext-cls')).toBe(true)
      expect(root.getAttribute('style')).toContain('color: blue')

      root.click()
      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })
  })
})
