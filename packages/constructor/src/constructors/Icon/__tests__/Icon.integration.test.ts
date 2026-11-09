// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  createSSRApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  type VNodeChild
} from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrEmit,
  type ConstrExpose,
  type ConstrStyles,
  DesignComponents,
  DesignName,
  inArray
} from '@dxtmisha/functional'

import { Icon } from '../Icon'
import { IconDesign } from '../IconDesign'
import { IconLiteInclude } from '../IconLiteInclude'
import { IconInclude } from '../IconInclude'
import { IconTrailingInclude } from '../IconTrailingInclude'
import { defaultsIcon, type IconProps } from '../props'
import type {
  IconComponentInclude,
  IconTrailingPropsInclude
} from '../basicTypes'
import type {
  IconClasses,
  IconComponents,
  IconEmits,
  IconExpose
} from '../types'
import {
  ImageDesign,
  ImageTypeValue,
  type ImageClasses,
  type ImageComponents,
  type ImageExpose,
  type ImageProps
} from '../../Image'
import {
  SkeletonDesign,
  defaultsSkeleton,
  type SkeletonClasses,
  type SkeletonComponents,
  type SkeletonExpose,
  type SkeletonProps
} from '../../Skeleton'

/** Mounted application cleanup callbacks / Обработчики очистки смонтированных приложений */
const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.useRealTimers()
})

/**
 * Real Image component built on ImageDesign for full end-to-end Icon integration tests.
 *
 * Реальный компонент Image на базе ImageDesign для сквозных интеграционных тестов Icon.
 */
const RealImageComponent = defineComponent({
  name: 'D1ImageTest',
  props: [
    'value',
    'turn',
    'disabled',
    'hide',
    'alt',
    'lazy',
    'adaptive',
    'tagImg',
    'onLoad'
  ],
  emits: ['load'],
  setup(componentProps, { emit }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-image': true,
        'd1-image--turn': Boolean(componentProps.turn),
        'd1-image--disabled': Boolean(componentProps.disabled),
        'd1-image--hide': Boolean(componentProps.hide)
      }
    }))

    const design = new ImageDesign<
      ImageComponents,
      ImageExpose,
      ImageClasses,
      ImageProps
    >(
      'd1.image',
      componentProps as ImageProps,
      {
        emits: ((name: 'load', payload: unknown) => {
          emit(name, payload)
          ;(componentProps as { onLoad?: (data: unknown) => void }).onLoad?.(payload)
        }) as ConstrEmit,
        classes: classesToken
      }
    )

    return design.render()
  }
})

/**
 * Result of mounting a complete IconDesign component.
 *
 * Результат монтирования полного компонента IconDesign.
 */
type MountedIcon = {
  /** Host container element / Элемент хост-контейнера */
  host: HTMLDivElement
  /** Rendered root Icon span element / Отрендеренный корневой элемент span компонента Icon */
  root: HTMLSpanElement
  /** Exposed public API / Открытый публичный API */
  expose: ConstrExpose<HTMLSpanElement, IconExpose>
  /** Unmount function / Функция размонтирования */
  unmount: () => void
}

/**
 * Creates a reactive IconProps object without triggering deep UnwrapNestedRefs recursion in TypeScript.
 *
 * Создает реактивный объект IconProps без вызова глубокой рекурсии UnwrapNestedRefs в TypeScript.
 * @param initial initial icon properties / начальные свойства иконки
 * @returns reactive icon properties / реактивные свойства иконки
 */
function createReactiveProps(initial: IconProps = {}): IconProps {
  return reactive<Record<string, unknown>>({
    ...(defaultsIcon as IconProps),
    ...initial
  }) as IconProps
}

/**
 * Mounts a full IconDesign component with RealImageComponent, token classes, styles, attributes, and slots.
 *
 * Монтирует полный компонент IconDesign с RealImageComponent, классами токенов, стилями, атрибутами и слотами.
 * @param props reactive icon properties / реактивные свойства иконки
 * @param emits optional event spy / необязательный шпион событий
 * @param slotBuilder optional default slot builder / необязательный построитель слота по умолчанию
 * @param rootAttrs optional fallthrough HTML attributes / необязательные сквозные HTML-атрибуты
 * @param ItemConstructor optional custom Icon logic class / необязательный пользовательский класс логики Icon
 * @returns mounted icon fixture / смонтированная фикстура иконки
 */
function mountIcon(
  props: IconProps,
  emits?: ConstrEmit<IconEmits>,
  slotBuilder?: () => VNodeChild,
  rootAttrs?: Record<string, unknown>,
  ItemConstructor?: typeof Icon
): MountedIcon {
  let expose!: ConstrExpose<HTMLSpanElement, IconExpose>

  const IconComponent = defineComponent({
    name: 'D1IconTest',
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-icon': true,
          'd1-icon--turn': Boolean(props.turn),
          'd1-icon--disabled': Boolean(props.disabled),
          'd1-icon--hide': Boolean(props.hide),
          'd1-icon--asPalette': Boolean(props.asPalette),
          'd1-icon--dir': Boolean(props.dir),
          'd1-icon--overlay': Boolean(props.overlay),
          'd1-icon--dynamic': Boolean(props.dynamic),
          'd1-icon--start': Boolean(props.start),
          'd1-icon--end': Boolean(props.end),
          'd1-icon--high': Boolean(props.high),
          [`d1-icon--animationType--${props.animationType ?? defaultsIcon.animationType}`]: inArray(
            ['type1', 'type2'],
            props.animationType ?? defaultsIcon.animationType
          ),
          'd1-icon--animationShow': Boolean(props.animationShow)
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-icon-width': '24px'
      }))

      const design = new IconDesign<
        IconComponents,
        IconExpose,
        IconClasses,
        IconProps
      >(
        'd1.icon',
        props,
        {
          emits,
          components: {
            image: RealImageComponent
          },
          classes: classesToken,
          styles: stylesToken
        },
        ItemConstructor
      )

      expose = design.expose()
      return design.render()
    }
  })

  const HostComponent = defineComponent({
    setup() {
      return () => h(
        IconComponent,
        rootAttrs ?? null,
        slotBuilder ? { default: slotBuilder } : undefined
      )
    }
  })

  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp(HostComponent)
  app.mount(host)

  const unmount = (): void => {
    app.unmount()
    host.remove()
  }

  mountedCleanups.push(unmount)

  return {
    host,
    root: host.firstElementChild as HTMLSpanElement,
    expose,
    unmount
  }
}

describe('Icon (complete component integration)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render root span with real Image sub-components, token classes, styles, fallthrough attributes, and slot content', async () => {
      const props = createReactiveProps({
        icon: 'filled-home',
        iconActive: 'outlined-home',
        active: false,
        turn: false,
        asPalette: true
      })

      const fixture = mountIcon(
        props,
        undefined,
        () => h('i', { class: 'badge-dot' }, '!'),
        {
          'id': 'nav-home-icon',
          'data-testid': 'icon-root'
        }
      )

      expect(fixture.root.tagName.toLowerCase()).toBe('span')
      expect(fixture.root.id).toBe('nav-home-icon')
      expect(fixture.root.getAttribute('data-testid')).toBe('icon-root')
      expect(fixture.root.getAttribute('aria-hidden')).toBe('true')
      expect(fixture.root.style.getPropertyValue('--d1-icon-width')).toBe('24px')
      expect(fixture.root.classList.contains('d1-icon')).toBe(true)
      expect(fixture.root.classList.contains('d1-icon--asPalette')).toBe(true)
      expect(fixture.root.classList.contains('d1-icon--animationType--type1')).toBe(true)
      expect(fixture.root.querySelector('.badge-dot')?.textContent).toBe('!')

      const mainIconElement = fixture.root.querySelector('.d1-icon__icon') as HTMLElement
      const activeIconElement = fixture.root.querySelector('.d1-icon__iconActive') as HTMLElement

      expect(mainIconElement).not.toBeNull()
      expect(activeIconElement).not.toBeNull()
      expect(mainIconElement.textContent).toBe('home')
      expect(mainIconElement.classList.contains('material-icons')).toBe(true)
      expect(mainIconElement.classList.contains('d1-image--hide')).toBe(false)

      expect(activeIconElement.textContent).toBe('home')
      expect(activeIconElement.classList.contains('material-symbols-outlined')).toBe(true)
      expect(activeIconElement.classList.contains('d1-image--hide')).toBe(true)
      expect(fixture.expose.isActive()).toBe(false)

      // Switch to active state and enable turn
      props.active = true
      props.turn = true
      await nextTick()

      expect(fixture.expose.isActive()).toBe(true)
      expect(fixture.root.classList.contains('d1-icon--turn')).toBe(true)
      expect(mainIconElement.classList.contains('d1-image--hide')).toBe(true)
      expect(mainIconElement.classList.contains('d1-image--turn')).toBe(true)
      expect(activeIconElement.classList.contains('d1-image--hide')).toBe(false)
      expect(activeIconElement.classList.contains('d1-image--turn')).toBe(true)
    })

    it('should handle interactive click and keyboard (Enter / Space) events and expose getValue / getDetail in dynamic mode', async () => {
      const emits = vi.fn()
      const props = createReactiveProps({
        icon: 'visibility',
        iconActive: 'visibility_off',
        active: false,
        dynamic: true,
        ariaLabel: 'Toggle password visibility',
        value: 'toggle-password',
        detail: { fieldId: 'password-input' }
      })

      const fixture = mountIcon(props, emits)

      expect(fixture.root.getAttribute('role')).toBe('button')
      expect(fixture.root.getAttribute('aria-label')).toBe('Toggle password visibility')
      expect(fixture.root.getAttribute('tabindex')).toBe('0')
      expect(fixture.root.hasAttribute('aria-hidden')).toBe(false)
      expect(fixture.expose.getValue?.()).toBe('toggle-password')
      expect(fixture.expose.getDetail?.()).toEqual({ fieldId: 'password-input' })

      fixture.root.click()
      expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
        type: 'click',
        value: 'toggle-password',
        detail: { fieldId: 'password-input' }
      })
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 'toggle-password',
        detail: { fieldId: 'password-input' }
      })

      emits.mockClear()
      fixture.root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      expect(emits).toHaveBeenCalledWith('click', expect.any(KeyboardEvent), {
        type: 'click',
        value: 'toggle-password',
        detail: { fieldId: 'password-input' }
      })

      emits.mockClear()
      fixture.root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }))
      expect(emits).toHaveBeenCalledWith('click', expect.any(KeyboardEvent), {
        type: 'click',
        value: 'toggle-password',
        detail: { fieldId: 'password-input' }
      })

      // Disable icon and verify interactions are blocked
      emits.mockClear()
      props.disabled = true
      await nextTick()

      expect(fixture.root.getAttribute('aria-disabled')).toBe('true')
      expect(fixture.root.hasAttribute('tabindex')).toBe(false)

      fixture.root.click()
      fixture.root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      expect(emits).not.toHaveBeenCalled()
    })

    it('should coordinate with parent SkeletonDesign across active, delay, and delayHide states', async () => {
      vi.useFakeTimers()

      const skeletonProps = reactive<SkeletonProps>({
        ...defaultsSkeleton,
        active: false,
        delay: 100,
        delayHide: 150
      })
      const iconProps = createReactiveProps({
        icon: 'star',
        isSkeleton: true
      })

      const ChildIcon = defineComponent({
        setup() {
          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            iconProps,
            {
              components: { image: RealImageComponent },
              classes: computed(() => ({ main: { 'd1-icon': true } }))
            }
          )
          return design.render()
        }
      })

      const ParentSkeleton = defineComponent({
        setup() {
          const design = new SkeletonDesign<
            SkeletonComponents,
            SkeletonExpose,
            SkeletonClasses,
            SkeletonProps
          >('d1.skeleton', skeletonProps, {
            classes: computed(() => ({ main: { 'd1-skeleton': true } }))
          })
          return design.render()
        }
      })

      const host = document.createElement('div')
      document.body.appendChild(host)
      const app = createApp({
        setup() {
          return () => h(ParentSkeleton, null, {
            default: () => [h(ChildIcon)]
          })
        }
      })
      app.mount(host)
      mountedCleanups.push(() => {
        app.unmount()
        host.remove()
      })

      const iconElement = host.querySelector('.d1-icon') as HTMLElement
      expect(iconElement.classList.contains('d1-skeleton__backgroundVariant')).toBe(true)

      skeletonProps.active = true
      await nextTick()
      vi.advanceTimersByTime(100)
      await nextTick()

      expect(host.querySelector('.d1-skeleton')?.classList.contains('d1-skeleton--visible')).toBe(true)

      iconProps.isSkeleton = false
      await nextTick()
      expect(iconElement.classList.contains('d1-skeleton__backgroundVariant')).toBe(false)

      iconProps.isSkeleton = true
      await nextTick()
      expect(iconElement.classList.contains('d1-skeleton__backgroundVariant')).toBe(true)
    })

    it('should integrate seamlessly inside a parent component via IconLiteInclude, IconInclude, and IconTrailingInclude', async () => {
      const parentProps = reactive<Record<string, unknown>>({
        icon: 'person',
        iconTrailing: 'expand_more',
        selected: false,
        iconTurn: false,
        iconDir: true,
        iconPalette: true
      }) as IconTrailingPropsInclude

      const EmbeddedIconComponent = defineComponent({
        name: 'EmbeddedIconComponent',
        props: [
          'icon',
          'active',
          'turn',
          'hide',
          'asPalette',
          'animationType',
          'dir',
          'start',
          'end',
          'high'
        ],
        setup(componentProps) {
          const classesToken = computed<ConstrClasses>(() => ({
            main: {
              'd1-icon': true,
              'd1-icon--turn': Boolean(componentProps.turn),
              'd1-icon--hide': Boolean(componentProps.hide),
              'd1-icon--asPalette': Boolean(componentProps.asPalette),
              'd1-icon--dir': Boolean(componentProps.dir),
              'd1-icon--start': Boolean(componentProps.start),
              'd1-icon--end': Boolean(componentProps.end),
              'd1-icon--high': Boolean(componentProps.high),
              [`d1-icon--animationType--${componentProps.animationType ?? 'type1'}`]: true
            }
          }))

          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            componentProps as IconProps,
            {
              components: { image: RealImageComponent },
              classes: classesToken
            }
          )
          return design.render()
        }
      })

      const ParentButton = defineComponent({
        setup() {
          const naming = new DesignName('d1.button')
          const components = new DesignComponents<IconComponentInclude, IconTrailingPropsInclude>(
            { icon: EmbeddedIconComponent },
            parentProps
          )
          const iconInclude = new IconTrailingInclude(parentProps, naming, components)
          const liteInclude = new IconLiteInclude(
            () => ({ icon: 'star' }),
            new DesignName('d1.chip'),
            components
          )
          const standardInclude = new IconInclude(
            parentProps,
            new DesignName('d1.badge'),
            components
          )

          return () => h('div', { class: 'parent-button' }, [
            ...iconInclude.render(),
            ...liteInclude.renderIcon(),
            ...standardInclude.renderIcon()
          ])
        }
      })

      const host = document.createElement('div')
      document.body.appendChild(host)
      const app = createApp(ParentButton)
      app.mount(host)
      mountedCleanups.push(() => {
        app.unmount()
        host.remove()
      })

      const mainButtonIcon = host.querySelector('.d1-button__icon') as HTMLElement
      const trailingButtonIcon = host.querySelector('.d1-button__trailing') as HTMLElement
      const chipLiteIcon = host.querySelector('.d1-chip__icon') as HTMLElement
      const badgeStandardIcon = host.querySelector('.d1-badge__icon') as HTMLElement

      expect(mainButtonIcon).not.toBeNull()
      expect(mainButtonIcon.getAttribute('data-event-type')).toBe('icon')
      expect(mainButtonIcon.classList.contains('d1-icon--start')).toBe(true)
      expect(mainButtonIcon.classList.contains('d1-icon--turn')).toBe(false)

      expect(trailingButtonIcon).not.toBeNull()
      expect(trailingButtonIcon.getAttribute('data-event-type')).toBe('icon-trailing')
      expect(trailingButtonIcon.classList.contains('d1-icon--end')).toBe(true)
      expect(trailingButtonIcon.classList.contains('d1-icon--high')).toBe(true)
      expect(trailingButtonIcon.classList.contains('d1-icon--dir')).toBe(true)

      expect(chipLiteIcon).not.toBeNull()
      expect(chipLiteIcon.textContent).toBe('star')

      expect(badgeStandardIcon).not.toBeNull()
      expect(badgeStandardIcon.classList.contains('d1-icon--animationType--type2')).toBe(true)

      // Toggle iconTurn on parent: trailing icon turns while main icon stays un-turned
      parentProps.iconTurn = true
      await nextTick()
      expect(mainButtonIcon.classList.contains('d1-icon--turn')).toBe(false)
      expect(trailingButtonIcon.classList.contains('d1-icon--turn')).toBe(true)
    })

    it('should support injecting a custom ItemConstructor into IconDesign', () => {
      /**
       * Custom Icon logic subclass for DI verification.
       *
       * Пользовательский подкласс логики Icon для проверки DI.
       */
      class CustomIcon extends Icon {}

      const fixture = mountIcon(
        createReactiveProps({ icon: 'check', iconActive: 'close', active: true }),
        undefined,
        undefined,
        undefined,
        CustomIcon
      )

      expect(fixture.expose.isActive()).toBe(true)
      expect(fixture.root.querySelector('.d1-icon__iconActive')?.textContent).toBe('close')
    })
  })

  describe('SSR client hydration compatibility', () => {
    it('should hydrate server-rendered decorative and interactive Icon HTML on the client without hydration mismatch warnings', async () => {
      const createSharedAppRoot = () => defineComponent({
        setup() {
          const StaticIconNode = defineComponent({
            setup() {
              const props = createReactiveProps({
                icon: 'filled-home',
                iconActive: 'outlined-home',
                active: false
              })
              const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
                'd1.icon',
                props,
                {
                  components: { image: RealImageComponent },
                  classes: computed(() => ({ main: { 'd1-icon': true } }))
                }
              )
              return design.render()
            }
          })

          const DynamicIconNode = defineComponent({
            setup() {
              const props = createReactiveProps({
                icon: 'close',
                dynamic: true,
                ariaLabel: 'Close modal',
                tabindex: 0
              })
              const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
                'd1.icon',
                props,
                {
                  components: { image: RealImageComponent },
                  classes: computed(() => ({
                    main: {
                      'd1-icon': true,
                      'd1-icon--dynamic': true
                    }
                  }))
                }
              )
              return design.render()
            }
          })

          return () => h('div', { id: 'hydration-root' }, [
            h(StaticIconNode, { id: 'hydrated-static-icon' }, {
              default: () => [h('span', { class: 'hydrated-slot' }, 'Slot Badge')]
            }),
            h(DynamicIconNode, { id: 'hydrated-dynamic-icon' })
          ])
        }
      })

      const serverHtml = await renderToString(createSSRApp(createSharedAppRoot()))
      expect(serverHtml).toContain('id="hydrated-static-icon"')
      expect(serverHtml).toContain('aria-hidden="true"')
      expect(serverHtml).toContain('id="hydrated-dynamic-icon"')
      expect(serverHtml).toContain('role="button"')
      expect(serverHtml).toContain('aria-label="Close modal"')

      const container = document.createElement('div')
      container.innerHTML = serverHtml
      document.body.appendChild(container)

      const clientApp = createSSRApp(createSharedAppRoot())
      clientApp.mount(container)
      mountedCleanups.push(() => {
        clientApp.unmount()
        container.remove()
      })

      const hydratedStatic = container.querySelector('#hydrated-static-icon')
      const hydratedDynamic = container.querySelector('#hydrated-dynamic-icon')

      expect(hydratedStatic).not.toBeNull()
      expect(hydratedStatic?.getAttribute('aria-hidden')).toBe('true')
      expect(hydratedStatic?.querySelector('.hydrated-slot')?.textContent).toBe('Slot Badge')
      expect(hydratedStatic?.querySelector('.d1-icon__icon')?.textContent).toBe('home')

      expect(hydratedDynamic).not.toBeNull()
      expect(hydratedDynamic?.getAttribute('role')).toBe('button')
      expect(hydratedDynamic?.getAttribute('aria-label')).toBe('Close modal')
      expect(hydratedDynamic?.getAttribute('tabindex')).toBe('0')
    })

    it('should forward load events emitted from child Image components', () => {
      const emits = vi.fn()
      const props = createReactiveProps({
        icon: 'settings'
      })

      let capturedIconBindOnLoad: ((event: unknown) => void) | undefined

      const CapturingImage = defineComponent({
        props: ['value', 'onLoad'],
        setup(componentProps) {
          capturedIconBindOnLoad = componentProps.onLoad as ((event: unknown) => void) | undefined
          return () => h('span', { class: 'capturing-image' })
        }
      })

      const host = document.createElement('div')
      const app = createApp({
        setup() {
          const design = new IconDesign<IconComponents, IconExpose, IconClasses, IconProps>(
            'd1.icon',
            props,
            {
              emits,
              components: { image: CapturingImage }
            }
          )
          return design.render()
        }
      })
      app.mount(host)
      mountedCleanups.push(() => app.unmount())

      const payload = {
        type: ImageTypeValue.material,
        image: 'settings'
      }
      capturedIconBindOnLoad?.(payload)

      expect(emits).toHaveBeenCalledExactlyOnceWith('load', payload)
    })
  })
})
