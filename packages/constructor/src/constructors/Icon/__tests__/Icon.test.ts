// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, effectScope, h, nextTick, provide, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Icon, type IconConstructors } from '../Icon'
import { IconDesign } from '../IconDesign'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { SKELETON_NAME_STATUS, SkeletonInclude } from '../../Skeleton'
import type { IconProps } from '../props'
import type { ImageEventData } from '../../Image'
import type { IconClasses, IconComponents, IconExpose } from '../types'

/**
 * Exposes internal DesignLogicAbstract instances map for lazy-loading verification.
 *
 * Предоставляет внутреннюю карту экземпляров DesignLogicAbstract для проверки ленивой инициализации.
 */
class InspectableIcon extends Icon {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof IconConstructors, unknown>> {
    return this.instances
  }
}

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
})

/**
 * Executes a factory callback inside a real Vue component setup context so provide/inject works without warnings.
 *
 * Выполняет фабричную функцию внутри реального контекста setup компонента Vue, чтобы provide/inject работал без предупреждений.
 * @param factory callback executed inside setup / обратный вызов, выполняемый внутри setup
 * @param skeletonActive optional provided skeleton status / необязательный предоставляемый статус скелетона
 * @returns factory return value / возвращаемое значение фабрики
 */
function runInVueSetup<Result>(
  factory: () => Result,
  skeletonActive: boolean = true
): Result {
  let result!: Result
  const container = document.createElement('div')
  const app = createApp(defineComponent({
    setup() {
      provide(SKELETON_NAME_STATUS, computed(() => skeletonActive))
      result = factory()
      return () => h('div')
    }
  }))

  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  return result
}

describe('Icon', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should compute iconBind and iconActiveBind for string and object values with visibility states', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({
        icon: 'home',
        iconActive: 'home-active',
        active: false,
        turn: true,
        disabled: false
      })

      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(icon.isActive()).toBe(false)

      const mainBind = icon.iconBind
      expect(mainBind).toBeDefined()
      expect(mainBind?.value).toBe('home')
      expect(mainBind?.key).toBe('mainIcon')
      expect(mainBind?.class).toBe('d1-icon__icon')
      expect(mainBind?.turn).toBe(true)
      expect(mainBind?.disabled).toBe(false)
      expect(mainBind?.hide).toBe(false)

      const activeBind = icon.iconActiveBind
      expect(activeBind).toBeDefined()
      expect(activeBind?.value).toBe('home-active')
      expect(activeBind?.key).toBe('activeIcon')
      expect(activeBind?.class).toBe('d1-icon__iconActive')
      expect(activeBind?.turn).toBe(true)
      expect(activeBind?.disabled).toBe(false)
      expect(activeBind?.hide).toBe(true)

      props.active = true
      expect(icon.isActive()).toBe(true)
      expect(icon.iconBind?.hide).toBe(true)
      expect(icon.iconActiveBind?.hide).toBe(false)

      props.icon = { value: 'custom-home', adaptive: true }
      expect(icon.iconBind?.value).toBe('custom-home')
      expect(icon.iconBind?.adaptive).toBe(true)

      scope.stop()
    })

    it('should forward image load events to emits for both iconBind and iconActiveBind', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const emits = vi.fn()
      const props = reactive<IconProps>({
        icon: 'settings',
        iconActive: 'settings-active'
      })

      const icon = scope.run(() => new Icon(
        props,
        element,
        new DesignName('d1.icon'),
        undefined,
        undefined,
        emits
      ))!

      const loadEventData: ImageEventData = {
        type: 'image',
        image: 'settings'
      }

      icon.iconBind?.onLoad?.(loadEventData)
      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('load', loadEventData)

      const loadActiveEventData: ImageEventData = {
        type: 'image',
        image: 'settings-active'
      }

      icon.iconActiveBind?.onLoad?.(loadActiveEventData)
      expect(emits).toHaveBeenCalledTimes(2)
      expect(emits).toHaveBeenLastCalledWith('load', loadActiveEventData)

      scope.stop()
    })

    it('should compute decorative ARIA attributes for static icons', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({ icon: 'search' })
      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(icon.role).toBeUndefined()
      expect(icon.aria).toEqual({
        'aria-hidden': 'true'
      })
      const binds = icon.binds
      expect(binds).toEqual({
        'key': 'icon',
        'aria-hidden': 'true'
      })

      scope.stop()
    })

    it('should not pass aria-label or role when dynamic is not true', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({
        icon: 'search',
        ariaLabel: 'Search site',
        role: 'img'
      })
      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(icon.role).toBe('img')
      expect(icon.aria).toEqual({
        'aria-hidden': 'true'
      })
      const binds = icon.binds
      expect(binds.key).toBe('icon')
      expect(binds['aria-hidden']).toBe('true')
      expect(binds['aria-label']).toBeUndefined()
      expect(binds.role).toBeUndefined()
      expect(binds.tabindex).toBeUndefined()

      scope.stop()
    })

    it('should compute accessible aria-label and custom role when dynamic is true', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({
        icon: 'search',
        dynamic: true,
        ariaLabel: 'Search site',
        role: 'img'
      })
      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(icon.role).toBe('img')
      expect(icon.aria).toEqual({
        'role': 'img',
        'aria-label': 'Search site'
      })
      const binds = icon.binds
      expect(binds.key).toBe('icon')
      expect(binds['aria-label']).toBe('Search site')
      expect(binds.role).toBe('img')
      expect(binds.tabindex).toBe(0)
      expect(binds['aria-hidden']).toBeUndefined()

      scope.stop()
    })

    it('should bind tabindex and trigger click and keyboard events when dynamic is true', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const emits = vi.fn()
      const props = reactive<IconProps>({
        icon: 'close',
        dynamic: true,
        tabindex: 2,
        value: 'close-action',
        detail: { source: 'modal' }
      })

      const icon = scope.run(() => new Icon(
        props,
        element,
        new DesignName('d1.icon'),
        undefined,
        undefined,
        emits
      ))!

      expect(icon.role).toBe('button')
      const binds = icon.binds
      expect(binds.key).toBe('icon')
      expect(binds.role).toBe('button')
      expect(binds.tabindex).toBe(2)
      expect(binds.onClick).toBeTypeOf('function')
      expect(binds.onKeydown).toBeTypeOf('function')

      const mouseEvent = new MouseEvent('click')
      binds.onClick?.(mouseEvent)
      expect(emits).toHaveBeenCalledWith('click', mouseEvent, {
        type: 'click',
        value: 'close-action',
        detail: { source: 'modal' }
      })
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 'close-action',
        detail: { source: 'modal' }
      })

      emits.mockClear()
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' })
      binds.onKeydown?.(enterEvent)
      expect(emits).toHaveBeenCalledWith('click', enterEvent, {
        type: 'click',
        value: 'close-action',
        detail: { source: 'modal' }
      })

      scope.stop()
    })

    it('should handle disabled state properly when dynamic is true', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const emits = vi.fn()
      const props = reactive<IconProps>({
        icon: 'close',
        dynamic: true,
        disabled: true,
        tabindex: 2
      })

      const icon = scope.run(() => new Icon(
        props,
        element,
        new DesignName('d1.icon'),
        undefined,
        undefined,
        emits
      ))!

      const binds = icon.binds
      expect(binds.key).toBe('icon')
      expect(binds.role).toBe('button')
      expect(binds.tabindex).toBeUndefined()
      expect(binds['aria-disabled']).toBe('true')
      expect(binds['aria-hidden']).toBeUndefined()

      const mouseEvent = new MouseEvent('click')
      binds.onClick?.(mouseEvent)
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' })
      binds.onKeydown?.(enterEvent)
      expect(emits).not.toHaveBeenCalled()

      scope.stop()
    })
  })

  describe('Skeleton loading state', () => {
    it('should return empty classes when isSkeleton is not set, and apply skeleton classes when true', () => {
      runInVueSetup(() => {
        const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
        const props = reactive<IconProps>({ icon: 'star' })
        const icon = new InspectableIcon(props, element, new DesignName('d1.icon'))

        expect(icon.classes).toEqual({})
        expect(Object.keys(icon.instantiatedItems)).toHaveLength(0)

        props.isSkeleton = true
        const classes = icon.classes
        expect(classes).toEqual({
          'd1-skeleton__backgroundVariant': true
        })
        expect(icon.instantiatedItems.skeleton).toBeInstanceOf(SkeletonInclude)
      })
    })
  })

  describe('Empty, nullish, and optional dependency handling', () => {
    it.each([undefined, null, ''])('should keep value falsy in iconBind and iconActiveBind for %j and report isActive as false', (emptyValue) => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({
        icon: emptyValue,
        iconActive: emptyValue,
        active: true
      })

      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(icon.isActive()).toBe(false)
      expect(Boolean(icon.iconBind?.value)).toBe(false)
      expect(Boolean(icon.iconActiveBind?.value)).toBe(false)

      scope.stop()
    })

    it('should not throw when onLoad is triggered without an emits function', () => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({ icon: 'home' })
      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(() => icon.iconBind?.onLoad?.({
        type: 'image',
        image: 'home'
      })).not.toThrow()

      scope.stop()
    })
  })

  describe('Statefulness, lazy instantiation, and Dependency Injection', () => {
    it('should keep enabled, event, and skeleton lazy upon construction and instantiate only on demand', () => {
      runInVueSetup(() => {
        const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
        const props = reactive<IconProps>({ icon: 'user' })
        const icon = new InspectableIcon(props, element, new DesignName('d1.icon'))

        expect(Object.keys(icon.instantiatedItems)).toHaveLength(0)

        // Accessing static binds should not instantiate enabled, event, or skeleton
        void icon.binds
        expect(Object.keys(icon.instantiatedItems)).toHaveLength(0)

        const skeletonInstance = icon.i('skeleton')
        expect(skeletonInstance).toBeInstanceOf(SkeletonInclude)
        expect(icon.instantiatedItems.skeleton).toBe(skeletonInstance)
        expect(icon.instantiatedItems.enabled).toBeUndefined()
        expect(icon.instantiatedItems.event).toBeUndefined()

        const eventInstance = icon.i('event')
        expect(eventInstance).toBeInstanceOf(EventClickInclude)
        expect(icon.instantiatedItems.event).toBe(eventInstance)
      })
    })

    it('should instantiate enabled, event, and skeleton strictly on demand via explicit call sites and not on initConditions', async () => {
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({
        icon: 'bell',
        dynamic: false,
        isSkeleton: false
      })

      const icon = runInVueSetup(() => new InspectableIcon(props, element, new DesignName('d1.icon')))
      expect(Object.keys(icon.instantiatedItems)).toHaveLength(0)

      // Simulate mounting - since there are no background conditions, nothing is eagerly watched/instantiated
      // @ts-expect-error accessing protected method for testing
      icon.initConditions()

      props.dynamic = true
      props.isSkeleton = true
      await nextTick()
      expect(Object.keys(icon.instantiatedItems)).toHaveLength(0)

      // Instantiation occurs on explicit access
      void icon.binds
      expect(icon.instantiatedItems.enabled).toBeInstanceOf(EnabledInclude)
      expect(icon.instantiatedItems.event).toBeInstanceOf(EventClickInclude)
      expect(icon.instantiatedItems.skeleton).toBeUndefined()

      runInVueSetup(() => {
        void icon.classes
      })
      expect(icon.instantiatedItems.skeleton).toBeInstanceOf(SkeletonInclude)
    })

    it('should support Dependency Injection overrides for enabled, event, and skeleton via constructors option', () => {
      let customEnabledConstructed = false
      let customEventConstructed = false
      let customSkeletonConstructed = false

      /**
       * Custom EnabledInclude for DI verification.
       *
       * Пользовательский EnabledInclude для проверки DI.
       */
      class CustomEnabled extends EnabledInclude {
        constructor(...args: ConstructorParameters<typeof EnabledInclude>) {
          super(...args)
          customEnabledConstructed = true
        }
      }

      /**
       * Custom EventClickInclude for DI verification.
       *
       * Пользовательский EventClickInclude для проверки DI.
       */
      class CustomEventClick extends EventClickInclude {
        constructor(...args: ConstructorParameters<typeof EventClickInclude>) {
          super(...args)
          customEventConstructed = true
        }
      }

      /**
       * Custom SkeletonInclude for DI verification.
       *
       * Пользовательский SkeletonInclude для проверки DI.
       */
      class CustomSkeleton extends SkeletonInclude {
        constructor(...args: ConstructorParameters<typeof SkeletonInclude>) {
          super(...args)
          customSkeletonConstructed = true
        }
      }

      runInVueSetup(() => {
        const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
        const props = reactive<IconProps>({ icon: 'settings' })

        const icon = new InspectableIcon(
          props,
          element,
          new DesignName('d1.icon'),
          undefined,
          undefined,
          undefined,
          {
            enabled: CustomEnabled,
            event: CustomEventClick,
            skeleton: CustomSkeleton
          }
        )

        expect(customEnabledConstructed).toBe(false)
        expect(customEventConstructed).toBe(false)
        expect(customSkeletonConstructed).toBe(false)

        const enabledInstance = icon.i('enabled')
        expect(enabledInstance).toBeInstanceOf(CustomEnabled)
        expect(customEnabledConstructed).toBe(true)

        const eventInstance = icon.i('event')
        expect(eventInstance).toBeInstanceOf(CustomEventClick)
        expect(customEventConstructed).toBe(true)

        const skeletonInstance = icon.i('skeleton')
        expect(skeletonInstance).toBeInstanceOf(CustomSkeleton)
        expect(customSkeletonConstructed).toBe(true)
      })
    })
  })

  describe('IconDesign composition and rendering', () => {
    it('should expose isActive, getValue, and getDetail without prematurely instantiating event', () => {
      const props = reactive<IconProps>({
        icon: 'home',
        value: 'home-value',
        detail: { page: 'index' }
      })

      let exposedValue: IconExpose | undefined

      const HostComponent = defineComponent({
        setup() {
          const design = new IconDesign(
            'd1.icon',
            props,
            undefined,
            InspectableIcon
          )

          exposedValue = design.expose()
          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      expect(exposedValue).toBeDefined()
      expect(exposedValue?.isActive()).toBe(false)

      expect(exposedValue?.getValue()).toBe('home-value')
      expect(exposedValue?.getDetail()).toEqual({ page: 'index' })

      props.active = true
      props.iconActive = 'home-filled'
      expect(exposedValue?.isActive()).toBe(true)
    })

    it('should render a span element with classes, attrs, and sub-elements, and update reactively', async () => {
      const props = reactive<IconProps>({
        icon: 'home',
        iconActive: 'home-filled',
        active: false,
        dynamic: false
      })

      const MockImage = defineComponent({
        name: 'MockImage',
        props: ['value', 'turn', 'disabled', 'hide'],
        setup(componentProps) {
          return () => h('img', {
            'class': 'mock-image',
            'data-value': String(componentProps.value ?? ''),
            'data-hide': String(componentProps.hide)
          })
        }
      })

      const InnerComponent = defineComponent({
        setup() {
          const design = new IconDesign<
            IconComponents,
            IconExpose,
            IconClasses,
            IconProps
          >(
            'd1.icon',
            props,
            {
              components: {
                image: MockImage
              }
            }
          )

          return design.render()
        }
      })

      const RootComponent = defineComponent({
        setup() {
          return () => h(InnerComponent, null, {
            default: () => h('span', { class: 'custom-slot' }, 'Custom content')
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(RootComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      const rootElement = container.firstElementChild as HTMLElement
      expect(rootElement).not.toBeNull()
      expect(rootElement.tagName.toLowerCase()).toBe('span')
      expect(rootElement.getAttribute('aria-hidden')).toBe('true')
      expect(rootElement.hasAttribute('role')).toBe(false)
      expect(rootElement.querySelector('.custom-slot')?.textContent).toBe('Custom content')

      const images = rootElement.querySelectorAll('.mock-image')
      expect(images).toHaveLength(2)
      expect(images[0]?.getAttribute('data-hide')).toBe('false')
      expect(images[1]?.getAttribute('data-hide')).toBe('true')

      props.active = true
      props.dynamic = true
      props.ariaLabel = 'Toggle favorite'
      await nextTick()

      expect(rootElement.hasAttribute('aria-hidden')).toBe(false)
      expect(rootElement.getAttribute('role')).toBe('button')
      expect(rootElement.getAttribute('aria-label')).toBe('Toggle favorite')
      expect(rootElement.getAttribute('tabindex')).toBe('0')
      expect(images[0]?.getAttribute('data-hide')).toBe('true')
      expect(images[1]?.getAttribute('data-hide')).toBe('false')
    })

    it('should render safely when components registry is omitted even if icon and iconActive are provided', () => {
      const props = reactive<IconProps>({
        icon: 'home',
        iconActive: 'home-filled'
      })

      const HostComponent = defineComponent({
        setup() {
          const design = new IconDesign('d1.icon', props)
          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)
      mountedCleanups.push(() => app.unmount())

      const rootElement = container.firstElementChild as HTMLElement
      expect(rootElement).not.toBeNull()
      expect(rootElement.tagName.toLowerCase()).toBe('span')
      expect(rootElement.children).toHaveLength(0)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it.each([
      ['иконка_дом', 'Главная страница'],
      ['biểu_tượng_nhà', 'Trang chủ 🇻🇳'],
      ['图标_主页', '首页 🚀']
    ])('should preserve Unicode icon %s and ariaLabel %s in aria and binds', (iconName, ariaLabel) => {
      const scope = effectScope()
      const element = ref<HTMLSpanElement | undefined>(document.createElement('span'))
      const props = reactive<IconProps>({
        icon: iconName,
        dynamic: true,
        ariaLabel
      })

      const icon = scope.run(() => new Icon(props, element, new DesignName('d1.icon')))!

      expect(icon.aria['aria-label']).toBe(ariaLabel)
      expect(icon.binds['aria-label']).toBe(ariaLabel)
      expect(icon.iconBind?.value).toBe(iconName)

      scope.stop()
    })
  })
})
