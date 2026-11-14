// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, type VNode } from 'vue'

import { Accordion } from '../Accordion'
import { AccordionDesign } from '../AccordionDesign'
import type { AccordionProps } from '../props'
import type {
  AccordionClasses,
  AccordionComponents,
  AccordionExpose,
  AccordionSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const CellMock = defineComponent({
  name: 'CellMock',
  inheritAttrs: false,
  props: {
    class: [String, Array, Object],
    iconTurn: Boolean,
    label: [String, Number]
  },
  setup(props, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'class': props.class,
        'data-icon-turn': String(Boolean(props.iconTurn))
      },
      [
        slots.label ? slots.label({}) : props.label,
        slots.caption?.({}),
        slots.description?.({}),
        slots.trailing?.({}),
        slots.body?.({})
      ]
    )
  }
})

const MotionTransformMock = defineComponent({
  name: 'MotionTransformMock',
  inheritAttrs: false,
  props: {
    class: [String, Array, Object],
    open: Boolean,
    style: [String, Array, Object]
  },
  setup(props, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        class: props.class,
        style: props.style
      },
      [
        slots.head?.({
          isOpen: Boolean(props.open),
          isShow: Boolean(props.open),
          classes: {
            show: 's',
            open: 'o',
            window: 'w',
            click: 'c',
            none: 'n',
            noneGlobal: 'ng',
            close: 'cl'
          },
          idControl: 'ctrl-1',
          idBody: 'body-1',
          binds: {
            id: 'ctrl-1',
            ariaControls: 'body-1',
            ariaExpanded: Boolean(props.open)
          }
        }),
        slots.body?.({
          isOpen: Boolean(props.open),
          isShow: Boolean(props.open),
          classes: {
            show: 's',
            open: 'o',
            window: 'w',
            click: 'c',
            none: 'n',
            noneGlobal: 'ng',
            close: 'cl'
          },
          idControl: 'ctrl-1',
          idBody: 'body-1',
          binds: {}
        })
      ]
    )
  }
})

const defaultComponents: AccordionComponents = {
  cell: CellMock,
  motionTransform: MotionTransformMock
}

describe('AccordionDesign', () => {
  it('should initialize expose, classes, and styles properly within component setup', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    let exposed!: AccordionExpose
    let classes!: Partial<AccordionClasses>
    let styles!: unknown

    const Component = defineComponent({
      setup() {
        const props = reactive<AccordionProps>({})
        const design = new AccordionDesign<
          AccordionComponents,
          AccordionExpose,
          AccordionClasses,
          AccordionProps
        >('d1.accordion', props, {
          components: defaultComponents
        })

        exposed = design.expose()
        classes = (design as unknown as { initClasses: () => Partial<AccordionClasses> }).initClasses()
        styles = (design as unknown as { initStyles: () => unknown }).initStyles()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => {
      app.unmount()
      container.remove()
    })

    await nextTick()

    expect(exposed).toBeDefined()
    expect(typeof exposed.getMotionTransformElement).toBe('function')
    expect(classes.main).toEqual({})
    expect(classes.head).toBe('d1-accordion__head')
    expect(classes.body).toBe('d1-accordion__body')
    expect(styles).toEqual({})
  })

  it('should merge external class, style, and model listeners with internal bindings via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const props = reactive<AccordionProps>({ open: false, label: 'Title' })

    const Component = defineComponent({
      setup() {
        const design = new AccordionDesign<
          AccordionComponents,
          AccordionExpose,
          AccordionClasses,
          AccordionProps
        >('d1.accordion', props, {
          components: defaultComponents
        })

        return design.render()
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(Component, {
          'class': 'external-accordion-class',
          'style': { marginTop: '12px' },
          'data-testid': 'accordion-root'
        })
      }
    })

    const app = createApp(Root)
    app.mount(container)
    cleanups.push(() => {
      app.unmount()
      container.remove()
    })

    await nextTick()

    const root = container.querySelector('[data-testid="accordion-root"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.className).toContain('external-accordion-class')
    expect(root.style.marginTop).toBe('12px')
  })

  it('should forward only defined head slot functions in renderHeadSlots', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    let headSlotsResult!: Record<string, unknown>

    const Component = defineComponent({
      setup() {
        const props = reactive<AccordionProps>({ label: 'Header' })
        const design = new AccordionDesign<
          AccordionComponents,
          AccordionExpose,
          AccordionClasses,
          AccordionProps
        >('d1.accordion', props, {
          components: defaultComponents
        })

        headSlotsResult = design.renderHeadSlots()
        return design.render()
      }
    })

    const Root = defineComponent({
      setup() {
        const slots: AccordionSlots = {
          label: () => h('span', 'Custom Label'),
          trailing: undefined
        }
        return () => h(Component, null, slots as Record<string, unknown>)
      }
    })

    const app = createApp(Root)
    app.mount(container)
    cleanups.push(() => {
      app.unmount()
      container.remove()
    })

    await nextTick()

    expect(typeof headSlotsResult.default).toBe('function')
    expect('label' in headSlotsResult).toBe(false)
    expect('trailing' in headSlotsResult).toBe(false)
    expect('body' in headSlotsResult).toBe(false)
  })

  it('should pass custom ItemConstructor and render body slot with MotionTransformControlItem props', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    class CustomAccordion extends Accordion {}
    let receivedProps: unknown

    const Component = defineComponent({
      setup() {
        const props = reactive<AccordionProps>({ open: true, label: 'Body Test' })
        const design = new AccordionDesign<
          AccordionComponents,
          AccordionExpose,
          AccordionClasses,
          AccordionProps
        >(
          'd1.accordion',
          props,
          { components: defaultComponents },
          CustomAccordion
        )

        expect((design as unknown as { item: unknown }).item).toBeInstanceOf(CustomAccordion)
        return design.render()
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(Component, null, {
          default: (slotProps: unknown): VNode => {
            receivedProps = slotProps
            return h('div', { class: 'body-slot' }, 'Body Content')
          }
        })
      }
    })

    const app = createApp(Root)
    app.mount(container)
    cleanups.push(() => {
      app.unmount()
      container.remove()
    })

    await nextTick()

    const body = container.querySelector('.d1-accordion__body')
    expect(body).not.toBeNull()
    expect(body?.textContent).toBe('Body Content')
    expect((receivedProps as { isOpen: boolean }).isOpen).toBe(true)
  })
})
