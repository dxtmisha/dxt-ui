// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'

import { ListGroupDesign } from '../ListGroupDesign'
import type { ListGroupProps } from '../props'
import type { ListGroupClasses, ListGroupComponents, ListGroupExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockMotionTransform = defineComponent({
  name: 'MockMotionTransform',
  props: {
    open: Boolean,
    autoClose: Boolean,
    section: Boolean,
    adaptive: String,
    onTransformLite: Function
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      {
        'class': 'mock-motion-transform',
        'data-open': String(props.open),
        'data-auto-close': String(props.autoClose),
        'data-section': String(props.section),
        'data-adaptive': props.adaptive
      },
      [
        slots.head?.({
          isOpen: props.open,
          isShow: props.open,
          classes: {},
          idControl: 'ctrl-1',
          idBody: 'body-1',
          binds: {
            role: 'button',
            ariaExpanded: props.open ? 'true' : 'false',
            ariaControls: 'body-1'
          }
        }),
        slots.body?.()
      ]
    )
  }
})

describe('ListGroupDesign', () => {
  it('should render root element, merge external attrs/classes/styles, and bind ref to elementHtml', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<ListGroupProps>({
          divider: true
        })

        const design = new ListGroupDesign<ListGroupComponents, ListGroupExpose, ListGroupClasses, ListGroupProps>(
          'd1.listGroup',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-listGroup': true }
            })),
            components: {
              motionTransform: MockMotionTransform
            }
          } as unknown as ConstructorParameters<typeof ListGroupDesign>[2]
        )

        const expose = design.expose() as ListGroupExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'custom-group',
        'style': { marginTop: '8px' },
        'data-testid': 'group-root',
        'onClick': externalClick
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName.toLowerCase()).toBe('div')
    expect(rootElement.classList.contains('d1-listGroup')).toBe(true)
    expect(rootElement.classList.contains('custom-group')).toBe(true)
    expect(rootElement.style.marginTop).toBe('8px')
    expect(rootElement.dataset.testid).toBe('group-root')
    expect(rootElement.getAttribute('role')).toBe('group')
    expect(rootElement.getAttribute('data-open')).toBe('close')
    expect(rootElement.getAttribute('data-divider')).toBe('divider')
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should render head and list slots via MotionTransform and expose getOpen', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<ListGroupProps>({ open: false })
    let exposedApi!: ListGroupExpose

    const TestComponent = defineComponent({
      setup(_, { slots }) {
        const design = new ListGroupDesign<ListGroupComponents, ListGroupExpose, ListGroupClasses, ListGroupProps>(
          'd1.listGroup',
          props,
          {
            slots,
            components: {
              motionTransform: MockMotionTransform
            }
          } as unknown as ConstructorParameters<typeof ListGroupDesign>[2]
        )
        exposedApi = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, null, {
        head: (slotProps: { open: boolean, ariaExpanded?: string }) => h('span', { class: 'slot-head' }, `open:${slotProps.open}:${slotProps.ariaExpanded}`),
        list: () => h('div', { class: 'slot-list' }, 'List Items')
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const transform = host.querySelector('.mock-motion-transform')
    expect(transform?.getAttribute('data-auto-close')).toBe('false')
    expect(transform?.getAttribute('data-section')).toBe('true')
    expect(transform?.getAttribute('data-adaptive')).toBe('planeAlways')
    expect(host.querySelector('.d1-listGroup__head')?.textContent).toBe('open:false:false')
    expect(host.querySelector('.d1-listGroup__list')?.textContent).toBe('List Items')
    expect(exposedApi.getOpen()).toBe(false)

    props.open = true
    await nextTick()
    expect(exposedApi.getOpen()).toBe(true)
    expect(host.querySelector('.d1-listGroup__head')?.textContent).toBe('open:true:true')
  })

  it('should render safely when motionTransform component is omitted', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new ListGroupDesign<ListGroupComponents, ListGroupExpose, ListGroupClasses, ListGroupProps>(
          'd1.listGroup',
          reactive({})
        )
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.getAttribute('role')).toBe('group')
    expect(rootElement.children.length).toBe(0)
  })
})
