// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, type App } from 'vue'
import { Headroom } from '../Headroom'
import { HeadroomDesign } from '../HeadroomDesign'
import type { HeadroomProps } from '../props'
import type {
  HeadroomClasses,
  HeadroomComponents,
  HeadroomExpose
} from '../types'

const createTestComponent = (ItemConstructor: typeof Headroom = Headroom) => defineComponent({
  name: 'DHeadroomTest',
  props: {
    tag: String,
    disappears: Boolean,
    transformThreshold: Number,
    scrollElement: [String, Object]
  },
  setup(props, { emit, expose }) {
    const design = new HeadroomDesign<
      HeadroomComponents,
      HeadroomExpose,
      HeadroomClasses,
      HeadroomProps
    >(
      'd-headroom',
      props as Readonly<HeadroomProps>,
      { emits: emit },
      ItemConstructor
    )

    expose(design.expose())
    return design.render()
  }
})

describe('HeadroomDesign', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  const mountComponent = (
    component: ReturnType<typeof createTestComponent>,
    propsAndAttrs: Record<string, unknown> = {},
    slots?: Record<string, () => unknown>
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(component, propsAndAttrs, slots)
    })
    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      element: container.firstElementChild as HTMLElement
    }
  }

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  it('renders with default div tag and merges external attrs, class, and style via mergeProps', () => {
    const Comp = createTestComponent()
    const { element } = mountComponent(
      Comp,
      {
        'id': 'main-header',
        'class': 'custom-header',
        'style': 'background-color: red;',
        'data-testid': 'headroom-el'
      },
      {
        default: () => [h('span', 'Title')]
      }
    )

    expect(element.tagName).toBe('DIV')
    expect(element.id).toBe('main-header')
    expect(element.classList.contains('custom-header')).toBe(true)
    expect(element.getAttribute('style')).toContain('background-color: red')
    expect(element.getAttribute('data-testid')).toBe('headroom-el')
    expect(element.textContent).toBe('Title')
  })

  it('renders custom HTML tag from props.tag', () => {
    const Comp = createTestComponent()
    const { element } = mountComponent(
      Comp,
      { tag: 'header' },
      { default: () => 'Nav' }
    )

    expect(element.tagName).toBe('HEADER')
    expect(element.textContent).toBe('Nav')
  })

  it('exposes HeadroomExpose API and elementHtml from DesignConstructorAbstract.expose()', () => {
    let exposedRef: ReturnType<HeadroomDesign<
      HeadroomComponents,
      HeadroomExpose,
      HeadroomClasses,
      HeadroomProps
    >['expose']> | undefined

    const Comp = defineComponent({
      name: 'DHeadroomExposeTest',
      props: {
        transformThreshold: Number
      },
      setup(props, { emit, expose }) {
        const design = new HeadroomDesign<
          HeadroomComponents,
          HeadroomExpose,
          HeadroomClasses,
          HeadroomProps
        >(
          'd-headroom',
          props as Readonly<HeadroomProps>,
          { emits: emit }
        )

        const exposed = design.expose()
        exposedRef = exposed
        expose(exposed)
        return design.render()
      }
    })

    const { element } = mountComponent(Comp as ReturnType<typeof createTestComponent>, {
      transformThreshold: 120
    })

    expect(exposedRef).toBeDefined()
    expect(exposedRef?.isSticky.value).toBe(false)
    expect(exposedRef?.elementHtml?.value).toBe(element)
    expect(exposedRef?.getValues()).toEqual(
      expect.objectContaining({
        transformThreshold: 120,
        isSticky: false
      })
    )
    expect(typeof exposedRef?.update).toBe('function')
  })

  it('supports injecting a custom Headroom ItemConstructor subclass', () => {
    class CustomHeadroom extends Headroom {
      override get tag(): string {
        return 'section'
      }
    }

    const Comp = createTestComponent(CustomHeadroom)
    const { element } = mountComponent(Comp)

    expect(element.tagName).toBe('SECTION')
  })
})
