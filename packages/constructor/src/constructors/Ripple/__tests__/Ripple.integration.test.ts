// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  isReactive,
  nextTick,
  reactive,
  shallowRef,
  type ShallowRef
} from 'vue'
import {
  type ConstrClasses,
  type ConstrExpose,
  type ConstrStyles,
  DesignComponents,
  DesignName
} from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { Ripple } from '../Ripple'
import { RippleDesign } from '../RippleDesign'
import { RippleInclude } from '../RippleInclude'
import type { RippleComponentInclude } from '../basicTypes'
import { defaultsRipple, type RippleProps } from '../props'
import type { RippleClasses, RippleComponents, RippleExpose } from '../types'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

/**
 * Result of mounting a complete RippleDesign component.
 *
 * Результат монтирования полного компонента RippleDesign.
 */
type MountedRipple = {
  /** Host container element / Элемент хост-контейнера */
  host: HTMLDivElement
  /** Rendered root Ripple element / Отрендеренный корневой элемент Ripple */
  root: HTMLSpanElement
  /** Exposed public API / Открытый публичный API */
  expose: ConstrExpose<HTMLSpanElement, RippleExpose>
  /** Unmount function / Функция размонтирования */
  unmount: () => void
}

/**
 * Creates a PointerEvent-like object with configurable button, isPrimary, and offset coordinates.
 *
 * Создаёт объект события указателя с настраиваемыми button, isPrimary и координатами смещения.
 * @param options pointer event options / параметры события указателя
 * @returns pointer event instance / экземпляр события указателя
 */
function createPointerEvent(options: {
  button?: number
  isPrimary?: boolean
  offsetX?: number
  offsetY?: number
} = {}): PointerEvent {
  const {
    button = 0,
    isPrimary = true,
    offsetX = 20,
    offsetY = 30
  } = options

  const event = new MouseEvent('pointerdown', {
    bubbles: true,
    cancelable: true,
    button
  }) as PointerEvent

  Object.defineProperty(event, 'isPrimary', {
    configurable: true,
    value: isPrimary
  })
  Object.defineProperty(event, 'offsetX', {
    configurable: true,
    value: offsetX
  })
  Object.defineProperty(event, 'offsetY', {
    configurable: true,
    value: offsetY
  })

  return event
}

/**
 * Mounts a full RippleDesign component in a real DOM environment with token classes, styles, and exposed methods.
 *
 * Монтирует полный компонент RippleDesign в реальном DOM-окружении с классами токенов, стилями и открытыми методами.
 * @param props reactive ripple properties / реактивные свойства волны
 * @param stylesRef optional reactive styles token / необязательный реактивный токен стилей
 * @param ItemConstructor optional custom Ripple logic class / необязательный пользовательский класс логики Ripple
 * @returns mounted ripple fixture / смонтированная фикстура волны
 */
function mountRipple(
  props: RippleProps = {},
  stylesRef?: ShallowRef<ConstrStyles>,
  ItemConstructor?: typeof Ripple
): MountedRipple {
  const reactiveProps = isReactive(props)
    ? props
    : reactive<RippleProps>({
        ...defaultsRipple,
        ...props
      })

  let expose!: ConstrExpose<HTMLSpanElement, RippleExpose>

  const RippleComponent = defineComponent({
    name: 'TestRipple',
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-ripple': true,
          'd1-ripple--disabled': Boolean(reactiveProps.disabled)
        }
      }))

      const stylesToken = computed<ConstrStyles>(() => stylesRef?.value ?? {})

      const design = new RippleDesign<
        RippleComponents,
        RippleExpose,
        RippleClasses,
        RippleProps
      >(
        'd1.ripple',
        reactiveProps,
        {
          classes: classesToken,
          styles: stylesToken
        },
        ItemConstructor
      )

      expose = design.expose()
      return design.render()
    }
  })

  const host = document.createElement('div')
  document.body.appendChild(host)

  const app = createApp(RippleComponent)
  app.mount(host)

  const root = host.querySelector<HTMLSpanElement>('span.d1-ripple')!

  // Define dimensions for center calculation
  Object.defineProperty(root, 'offsetWidth', { configurable: true, value: 200 })
  Object.defineProperty(root, 'offsetHeight', { configurable: true, value: 100 })

  const unmount = () => {
    app.unmount()
    host.remove()
  }

  mountedCleanups.push(unmount)

  return {
    host,
    root,
    expose,
    unmount
  }
}

describe('Ripple (Component Integration)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should mount complete Ripple component with proper root element, BEM classes, and ARIA attributes', () => {
      const { root } = mountRipple({ disabled: false })

      expect(root).toBeInstanceOf(HTMLSpanElement)
      expect(root.tagName.toLowerCase()).toBe('span')
      expect(root.classList.contains('d1-ripple')).toBe(true)
      expect(root.getAttribute('aria-hidden')).toBe('true')
    })

    it('should generate ripple wave element on DOM pointerdown with coordinates mapped to CSS variables', () => {
      const { root } = mountRipple({ disabled: false })

      root.dispatchEvent(createPointerEvent({
        button: 0,
        isPrimary: true,
        offsetX: 35,
        offsetY: 45
      }))

      expect(root.children).toHaveLength(1)

      const wave = root.children[0] as HTMLSpanElement
      expect(wave.tagName.toLowerCase()).toBe('span')
      expect(wave.classList.contains('d1-ripple__item')).toBe(true)
      expect(wave.style.getPropertyValue('--d1-ripple-sys-x')).toBe('35px')
      expect(wave.style.getPropertyValue('--d1-ripple-sys-y')).toBe('45px')
    })

    it('should support multiple consecutive pointerdown clicks adding multiple waves', () => {
      const { root } = mountRipple()

      root.dispatchEvent(createPointerEvent({ offsetX: 10, offsetY: 20 }))
      root.dispatchEvent(createPointerEvent({ offsetX: 80, offsetY: 90 }))

      expect(root.children).toHaveLength(2)

      const wave1 = root.children[0] as HTMLSpanElement
      const wave2 = root.children[1] as HTMLSpanElement

      expect(wave1.style.getPropertyValue('--d1-ripple-sys-x')).toBe('10px')
      expect(wave2.style.getPropertyValue('--d1-ripple-sys-x')).toBe('80px')
    })
  })

  describe('Exposed API verification (defineExpose)', () => {
    it('should allow programmatic wave addition via expose.add with coordinates', () => {
      const { root, expose } = mountRipple()

      expect(expose.add).toBeTypeOf('function')

      expose.add({ x: 60, y: 70 })

      expect(root.children).toHaveLength(1)
      const wave = root.children[0] as HTMLSpanElement
      expect(wave.style.getPropertyValue('--d1-ripple-sys-x')).toBe('60px')
      expect(wave.style.getPropertyValue('--d1-ripple-sys-y')).toBe('70px')
    })

    it('should allow programmatic centered wave addition via expose.addCenter', () => {
      const { root, expose } = mountRipple()

      expect(expose.addCenter).toBeTypeOf('function')

      expose.addCenter()

      expect(root.children).toHaveLength(1)
      const wave = root.children[0] as HTMLSpanElement
      // offsetWidth is 200 -> 100px, offsetHeight is 100 -> 50px
      expect(wave.style.getPropertyValue('--d1-ripple-sys-x')).toBe('100px')
      expect(wave.style.getPropertyValue('--d1-ripple-sys-y')).toBe('50px')
    })

    it('should preserve zero (0) coordinates when added via expose.add', () => {
      const { root, expose } = mountRipple()

      expose.add({ x: 0, y: 0 })

      expect(root.children).toHaveLength(1)
      const wave = root.children[0] as HTMLSpanElement
      expect(wave.style.getPropertyValue('--d1-ripple-sys-x')).toBe('0px')
      expect(wave.style.getPropertyValue('--d1-ripple-sys-y')).toBe('0px')
    })
  })

  describe('Reactive props, styles, and disabled state', () => {
    it('should not add waves when disabled is initially true', () => {
      const { root, expose } = mountRipple({ disabled: true })

      expect(root.classList.contains('d1-ripple--disabled')).toBe(true)

      root.dispatchEvent(createPointerEvent({ offsetX: 25, offsetY: 25 }))
      expose.add({ x: 25, y: 25 })
      expose.addCenter()

      expect(root.children).toHaveLength(0)
    })

    it('should dynamically disable and re-enable wave creation when props.disabled changes', async () => {
      const props = reactive<RippleProps>({ disabled: false })
      const { root, expose } = mountRipple(props)

      root.dispatchEvent(createPointerEvent({ offsetX: 10, offsetY: 10 }))
      expect(root.children).toHaveLength(1)

      props.disabled = true
      await nextTick()

      expect(root.classList.contains('d1-ripple--disabled')).toBe(true)

      root.dispatchEvent(createPointerEvent({ offsetX: 20, offsetY: 20 }))
      expose.add({ x: 20, y: 20 })
      expect(root.children).toHaveLength(1)

      props.disabled = false
      await nextTick()

      expect(root.classList.contains('d1-ripple--disabled')).toBe(false)

      root.dispatchEvent(createPointerEvent({ offsetX: 30, offsetY: 30 }))
      expect(root.children).toHaveLength(2)
    })

    it('should reactively update inline styles when styles token changes', async () => {
      const stylesRef = shallowRef<ConstrStyles>({ '--d1-ripple-opacity': '0.5' })
      const { root } = mountRipple({}, stylesRef)

      expect(root.style.getPropertyValue('--d1-ripple-opacity')).toBe('0.5')

      stylesRef.value = { '--d1-ripple-opacity': '0.8' }
      await nextTick()

      expect(root.style.getPropertyValue('--d1-ripple-opacity')).toBe('0.8')
    })

    it('should not add waves when root element has display: none and should resume when visible', () => {
      const { root, expose } = mountRipple()

      root.style.display = 'none'

      root.dispatchEvent(createPointerEvent({ offsetX: 25, offsetY: 25 }))
      expose.add({ x: 25, y: 25 })
      expose.addCenter()

      expect(root.children).toHaveLength(0)

      root.style.display = 'block'

      expose.addCenter()
      expect(root.children).toHaveLength(1)
    })
  })

  describe('Event filtering and non-primary pointers', () => {
    it.each([
      [1, 'auxiliary/middle click'],
      [2, 'secondary/right click']
    ])('should ignore pointerdown for button %i (%s)', (button) => {
      const { root } = mountRipple()

      root.dispatchEvent(createPointerEvent({ button, isPrimary: true }))
      expect(root.children).toHaveLength(0)
    })

    it('should ignore non-primary pointers (isPrimary: false)', () => {
      const { root } = mountRipple()

      root.dispatchEvent(createPointerEvent({ button: 0, isPrimary: false }))
      expect(root.children).toHaveLength(0)
    })
  })

  describe('Animation lifecycle and DOM cleanup', () => {
    it('should transition wave to end state on animationend and remove from DOM on transitionend', () => {
      const { root } = mountRipple()

      root.dispatchEvent(createPointerEvent({ offsetX: 15, offsetY: 25 }))
      expect(root.children).toHaveLength(1)

      const wave = root.children[0] as HTMLSpanElement
      expect(wave.classList.contains('d1-ripple--end')).toBe(false)

      wave.onanimationend?.(new Event('animationend') as unknown as AnimationEvent)
      expect(wave.classList.contains('d1-ripple--end')).toBe(true)

      expect(root.children).toHaveLength(1)

      wave.ontransitionend?.(new Event('transitionend') as unknown as TransitionEvent)
      expect(root.children).toHaveLength(0)
    })

    it('should cleanly unmount and remove host without memory leaks or residual nodes', () => {
      const { host, root, unmount } = mountRipple()

      expect(document.body.contains(host)).toBe(true)
      expect(host.contains(root)).toBe(true)

      unmount()

      expect(document.body.contains(host)).toBe(false)
    })
  })

  describe('RippleInclude in a parent host component', () => {
    it('should render and interact with Ripple inside a parent button component', () => {
      const naming = new DesignName('d1.button')

      const RealRipple = defineComponent({
        name: 'RealRipple',
        props: ['disabled'],
        setup(componentProps) {
          const classesToken = computed<ConstrClasses>(() => ({
            main: { 'd1-ripple': true }
          }))

          const design = new RippleDesign<
            RippleComponents,
            RippleExpose,
            RippleClasses,
            RippleProps
          >('d1.ripple', componentProps as RippleProps, {
            classes: classesToken
          })

          return design.render()
        }
      })

      const components = new DesignComponents<RippleComponentInclude, RippleProps>({
        ripple: RealRipple
      })
      const enabled = new EnabledInclude({ disabled: false })
      const rippleInclude = new RippleInclude(naming, components, () => enabled)

      const HostButton = defineComponent({
        setup() {
          return () => h('button', { class: 'd1-button' }, [
            h('span', { class: 'd1-button__label' }, 'Click me'),
            ...rippleInclude.render()
          ])
        }
      })

      const host = document.createElement('div')
      document.body.appendChild(host)

      const app = createApp(HostButton)
      app.mount(host)
      mountedCleanups.push(() => {
        app.unmount()
        host.remove()
      })

      const button = host.querySelector('button.d1-button')!
      const rippleSpan = button.querySelector('span.d1-ripple')!

      expect(button).toBeDefined()
      expect(rippleSpan).toBeDefined()
      expect(rippleSpan.classList.contains('d1-button__ripple')).toBe(true)

      // Test pointerdown on the embedded ripple span
      rippleSpan.dispatchEvent(createPointerEvent({ offsetX: 20, offsetY: 20 }))
      expect(rippleSpan.children).toHaveLength(1)
    })
  })

  describe('Dependency Injection (DI) verification', () => {
    it('should instantiate and delegate to a custom Ripple logic class passed via ItemConstructor', () => {
      let customInstantiated = false
      const customCoordinates: Array<ImageCoordinator | undefined> = []

      class CustomRipple extends Ripple {
        constructor(...args: ConstructorParameters<typeof Ripple>) {
          super(...args)
          customInstantiated = true
        }

        override readonly onPointerdown = (event: PointerEvent): void => {
          customCoordinates.push({ x: event.offsetX, y: event.offsetY })
          if (
            !this.props.disabled
            && event.button === 0
            && event.isPrimary
          ) {
            this.i('item').add({
              x: event.offsetX,
              y: event.offsetY
            })
          }
        }
      }

      const { root } = mountRipple({}, undefined, CustomRipple)

      expect(customInstantiated).toBe(true)

      root.dispatchEvent(createPointerEvent({ offsetX: 48, offsetY: 72 }))

      expect(customCoordinates).toEqual([{ x: 48, y: 72 }])
      expect(root.children).toHaveLength(1)
    })

    it('should lazily render ripple via renderLazy only when enabled in props', () => {
      let called = false
      const naming = new DesignName('d1.button')
      const components = new DesignComponents<RippleComponentInclude, RippleProps>({
        ripple: defineComponent({ setup: () => () => h('div', { class: 'ripple' }) })
      })
      const rippleInclude = new RippleInclude(naming, components)

      const getter = () => {
        called = true
        return rippleInclude
      }

      expect(RippleInclude.renderLazy(getter, { disabled: true })).toEqual([])
      expect(called).toBe(false)

      const activeResult = RippleInclude.renderLazy(getter, {})
      expect(called).toBe(true)
      expect(activeResult).toHaveLength(1)

      const directResult = RippleInclude.renderLazy(rippleInclude, {})
      expect(directResult).toHaveLength(1)
    })
  })
})
