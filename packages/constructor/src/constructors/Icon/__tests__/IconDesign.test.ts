// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { Icon, type IconConstructors } from '../Icon'
import { IconDesign } from '../IconDesign'
import { type IconProps } from '../props'
import { type IconClasses, type IconComponents, type IconExpose } from '../types'

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
 * Creates a reactive IconProps object without triggering deep UnwrapNestedRefs recursion in TypeScript.
 *
 * Создает реактивный объект IconProps без вызова глубокой рекурсии UnwrapNestedRefs в TypeScript.
 * @param initial initial icon properties / начальные свойства иконки
 * @returns reactive icon properties / реактивные свойства иконки
 */
function createReactiveProps(initial: IconProps = {}): IconProps {
  return reactive<Record<string, unknown>>(initial) as IconProps
}

describe('IconDesign', () => {
  describe('IconDesign composition and rendering', () => {
    it('should expose isActive, getValue, and getDetail without prematurely instantiating event', () => {
      const props = createReactiveProps({
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

      expect(exposedValue?.getValue?.()).toBe('home-value')
      expect(exposedValue?.getDetail?.()).toEqual({ page: 'index' })

      props.active = true
      props.iconActive = 'home-filled'
      expect(exposedValue?.isActive()).toBe(true)
    })

    it('should render a span element with classes, attrs, and sub-elements, and update reactively', async () => {
      const props = createReactiveProps({
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
      const props = createReactiveProps({
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
})
