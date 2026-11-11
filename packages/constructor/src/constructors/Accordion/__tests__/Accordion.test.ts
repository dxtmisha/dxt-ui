// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Accordion, type AccordionConstructors } from '../Accordion'
import { AccordionDesign } from '../AccordionDesign'
import { AccordionHead } from '../AccordionHead'
import type {
  AccordionClasses,
  AccordionComponents,
  AccordionExpose,
  AccordionProps,
  AccordionSlots
} from '../index'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
})

const CellMock = defineComponent({
  name: 'CellMock',
  inheritAttrs: false,
  props: {
    ariaDescribedby: String,
    ariaLabelledby: String,
    caption: [String, Number],
    class: String,
    description: [String, Number],
    descriptionId: String,
    dynamic: Boolean,
    icon: [String, Object],
    iconTrailing: [String, Object],
    iconTurn: Boolean,
    label: [String, Number],
    labelId: String,
    onClick: Function,
    onKeydown: Function
  },
  setup(props, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'class': props.class,
        'aria-labelledby': props.labelId ?? props.ariaLabelledby,
        'aria-describedby': props.descriptionId ?? props.ariaDescribedby,
        'data-icon-turn': props.iconTurn ? 'true' : undefined,
        'onClick': props.onClick,
        'onKeydown': props.onKeydown
      },
      [
        slots.label ? slots.label() : props.label,
        slots.caption ? slots.caption() : props.caption,
        slots.description ? slots.description() : props.description,
        slots.trailing ? slots.trailing() : undefined
      ]
    )
  }
})

const MotionTransformMock = defineComponent({
  name: 'MotionTransformMock',
  inheritAttrs: false,
  props: {
    'aria-expanded': [Boolean, String],
    'adaptive': String,
    'ariaDescribedby': String,
    'ariaLabelledby': String,
    'autoClose': Boolean,
    'class': String,
    'clickOpen': Boolean,
    'dataDivider': [Boolean, String],
    'inDom': Boolean,
    'modelOpen': Boolean,
    'open': Boolean,
    'section': Boolean,
    'style': [Object, String],
    'tag': String
  },
  emits: ['transform', 'transformLite'],
  setup(props, { attrs, slots }) {
    return () => h(
      props.tag ?? 'div',
      {
        ...attrs,
        'class': props.class,
        'style': props.style,
        'data-divider': props.dataDivider ? 'true' : undefined
      },
      [
        slots.head?.({
          isOpen: props.open,
          binds: {
            'id': 'mock-head-id',
            'aria-expanded': props.open ? 'true' : 'false'
          }
        }),
        props.inDom || props.open
          ? slots.body?.({
              isOpen: props.open,
              binds: {
                'role': 'region',
                'aria-labelledby': props.ariaLabelledby,
                'aria-describedby': props.ariaDescribedby
              }
            })
          : undefined
      ]
    )
  }
})

const defaultComponents: AccordionComponents = {
  cell: CellMock,
  motionTransform: MotionTransformMock
}

/**
 * Mounts the complete unified Accordion component inside an active DOM container.
 *
 * Монтирует полный единый компонент Accordion внутри активного DOM-контейнера.
 * @param properties accordion properties / свойства аккордеона
 * @param slots accordion slots / слоты аккордеона
 * @param emitListener optional emit listener / опциональный слушатель событий
 * @returns mounted container and exposed API / смонтированный контейнер и экспортируемый API
 */
function mountAccordion(
  properties: AccordionProps = {},
  slots?: AccordionSlots,
  emitListener?: (event: string, ...args: unknown[]) => void
): { container: HTMLElement, exposed: AccordionExpose, props: AccordionProps } {
  const container = document.createElement('div')
  document.body.appendChild(container)
  cleanups.push(() => container.remove())

  const props = reactive<AccordionProps>({ ...properties })
  let exposed!: AccordionExpose

  const Component = defineComponent({
    setup(_props, { emit }) {
      const design = new AccordionDesign<
        AccordionComponents,
        AccordionExpose,
        AccordionClasses,
        AccordionProps
      >('d1.accordion', props, {
        components: defaultComponents,
        emits: (event: string, ...args: unknown[]) => {
          emit(event, ...args)
          emitListener?.(event, ...args)
        }
      })

      exposed = design.expose()
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(Component, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  const app = createApp(Root)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return { container, exposed, props }
}

/**
 * Inspectable subclass of Accordion exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс Accordion, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableAccordion extends Accordion {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof AccordionConstructors, unknown>> {
    return this.instances
  }
}

describe('Accordion (Unified Component)', () => {
  const naming = new DesignName('d1.accordion')

  describe('Component Rendering & DOM Structure', () => {
    it('should mount and render the complete component hierarchy with BEM classes', async () => {
      const { container, exposed } = mountAccordion({
        label: 'My Accordion Header',
        description: 'Header Description'
      })
      await nextTick()

      expect(container.querySelector('.d1-accordion__head')).not.toBeNull()
      expect(container.querySelector('.d1-accordion__body')).not.toBeNull()
      expect(container.textContent).toContain('My Accordion Header')
      expect(container.textContent).toContain('Header Description')

      expect(exposed).toBeDefined()
      expect(typeof exposed.getMotionTransformElement).toBe('function')
    })

    it('should generate all required subclasses in initClasses within component setup', () => {
      let classes!: Partial<AccordionClasses>

      const Component = defineComponent({
        setup() {
          const props: AccordionProps = reactive({})
          const design = new AccordionDesign<
            AccordionComponents,
            AccordionExpose,
            AccordionClasses,
            AccordionProps
          >('d1.accordion', props, {
            components: defaultComponents
          })

          classes = (design as any).initClasses()
          return () => null
        }
      })

      const container = document.createElement('div')
      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => {
        app.unmount()
        container.remove()
      })

      expect(classes.main).toBeDefined()
      expect(classes.head).toBe('d1-accordion__head')
      expect(classes.body).toBe('d1-accordion__body')
    })
  })

  describe('Properties, Open State & Reactivity', () => {
    it('should initialize closed by default (open: false) and update open attribute', async () => {
      const { container } = mountAccordion({
        open: false,
        label: 'Closed Accordion'
      })
      await nextTick()

      const head = container.querySelector('.d1-accordion__head')
      expect(head?.getAttribute('aria-expanded')).toBe('false')
      expect(head?.getAttribute('data-icon-turn')).toBeNull()
    })

    it('should initialize open when open: true is passed in props', async () => {
      const { container } = mountAccordion({
        open: true,
        label: 'Open Accordion'
      })
      await nextTick()

      const head = container.querySelector('.d1-accordion__head')
      expect(head?.getAttribute('aria-expanded')).toBe('true')
      expect(head?.getAttribute('data-icon-turn')).toBe('true')
    })

    it('should reactively synchronize open state when props.open changes', async () => {
      const { container, props } = mountAccordion({
        open: false,
        label: 'Toggle Accordion'
      })
      await nextTick()

      let head = container.querySelector('.d1-accordion__head')
      expect(head?.getAttribute('aria-expanded')).toBe('false')

      props.open = true
      await nextTick()

      head = container.querySelector('.d1-accordion__head')
      expect(head?.getAttribute('aria-expanded')).toBe('true')

      props.open = false
      await nextTick()

      head = container.querySelector('.d1-accordion__head')
      expect(head?.getAttribute('aria-expanded')).toBe('false')
    })

    it('should apply divider attribute when divider prop is set to true', async () => {
      const { container } = mountAccordion({
        divider: true,
        label: 'Divider Accordion'
      })
      await nextTick()

      const motionTransform = container.querySelector('[data-divider="true"]')
      expect(motionTransform).not.toBeNull()
    })
  })

  describe('User Interaction & Event Emission', () => {
    it('should emit click events when header cell is clicked', async () => {
      const emitSpy = vi.fn()
      const { container } = mountAccordion(
        {
          label: 'Interactive Accordion'
        },
        undefined,
        emitSpy
      )
      await nextTick()

      const head = container.querySelector('.d1-accordion__head') as HTMLElement
      expect(head).not.toBeNull()

      head.click()
      await nextTick()

      expect(emitSpy).toHaveBeenCalledWith('click', expect.anything(), expect.anything())
      expect(emitSpy).toHaveBeenCalledWith('clickLite', expect.anything())
    })
  })

  describe('Slots Mapping & Content Projection', () => {
    it('should project default slot inside accordion body', async () => {
      const { container } = mountAccordion(
        {
          label: 'Slots Accordion'
        },
        {
          default: () => h('p', { class: 'custom-body-content' }, 'Injected Body Content')
        }
      )
      await nextTick()

      const bodyContent = container.querySelector('.custom-body-content')
      expect(bodyContent).not.toBeNull()
      expect(bodyContent?.textContent).toBe('Injected Body Content')
    })

    it('should project head slots (label, caption, description, trailing) to head cell', async () => {
      const { container } = mountAccordion(
        {},
        {
          label: () => h('span', { class: 'custom-label' }, 'Custom Label'),
          caption: () => h('span', { class: 'custom-caption' }, 'Custom Caption'),
          description: () => h('span', { class: 'custom-description' }, 'Custom Description'),
          trailing: () => h('span', { class: 'custom-trailing' }, 'Custom Trailing')
        }
      )
      await nextTick()

      expect(container.querySelector('.custom-label')?.textContent).toBe('Custom Label')
      expect(container.querySelector('.custom-caption')?.textContent).toBe('Custom Caption')
      expect(container.querySelector('.custom-description')?.textContent).toBe('Custom Description')
      expect(container.querySelector('.custom-trailing')?.textContent).toBe('Custom Trailing')
    })
  })

  describe('Lazy Dependency Injection & Lifecycle Isolation', () => {
    it('should lazily instantiate all dependencies on demand via .i() within component lifecycle', () => {
      let accordion!: InspectableAccordion
      let event: unknown
      let head: unknown
      let model: unknown
      let motionTransform: unknown

      const Component = defineComponent({
        setup() {
          const element = ref<HTMLDivElement>()
          const props: AccordionProps = reactive({})
          accordion = new InspectableAccordion(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            undefined,
            false
          )

          // Should not eagerly instantiate before access
          expect(accordion.instantiatedItems.event).toBeUndefined()
          expect(accordion.instantiatedItems.head).toBeUndefined()
          expect(accordion.instantiatedItems.model).toBeUndefined()
          expect(accordion.instantiatedItems.motionTransform).toBeUndefined()

          event = accordion.i('event')
          head = accordion.i('head')
          model = accordion.i('model')
          motionTransform = accordion.i('motionTransform')

          return () => null
        }
      })

      const container = document.createElement('div')
      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => {
        app.unmount()
        container.remove()
      })

      expect(event).toBeDefined()
      expect(accordion.instantiatedItems.event).toBe(event)

      expect(head).toBeDefined()
      expect(accordion.instantiatedItems.head).toBe(head)

      expect(model).toBeDefined()
      expect(accordion.instantiatedItems.model).toBe(model)

      expect(motionTransform).toBeDefined()
      expect(accordion.instantiatedItems.motionTransform).toBe(motionTransform)
    })

    it('should provide accessibility identifiers on AccordionHead and bind them', () => {
      let accordion!: InspectableAccordion
      let head: AccordionHead

      const Component = defineComponent({
        setup() {
          const element = ref<HTMLDivElement>()
          const props: AccordionProps = reactive({
            label: 'Accessible Header',
            description: 'Accessible Description'
          })
          accordion = new InspectableAccordion(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            undefined,
            false
          )
          head = accordion.i('head')
          return () => null
        }
      })

      const container = document.createElement('div')
      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => {
        app.unmount()
        container.remove()
      })

      expect(head!.labelId).toBeDefined()
      expect(head!.descriptionId).toBeDefined()
      expect(head!.labelId).not.toBe(head!.descriptionId)

      const binds = head!.binds
      expect(binds.labelId).toBe(head!.labelId)
      expect(binds.descriptionId).toBe(head!.descriptionId)
      expect(typeof binds.onClick).toBe('function')
    })

    it('should support dependency injection override via constructors option', () => {
      class CustomHead extends AccordionHead {}
      let accordion!: InspectableAccordion
      let head: unknown

      const Component = defineComponent({
        setup() {
          const element = ref<HTMLDivElement>()
          const props: AccordionProps = reactive({})
          accordion = new InspectableAccordion(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            { head: CustomHead }
          )
          head = accordion.i('head')
          return () => null
        }
      })

      const container = document.createElement('div')
      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => {
        app.unmount()
        container.remove()
      })

      expect(head).toBeInstanceOf(CustomHead)
    })
  })
})
