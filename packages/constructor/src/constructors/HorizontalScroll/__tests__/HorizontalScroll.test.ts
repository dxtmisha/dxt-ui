// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'
import * as functional from '@dxtmisha/functional'

import { HorizontalScrollDesign } from '../HorizontalScrollDesign'
import type { HorizontalScrollControlItem } from '../basicTypes'
import type { HorizontalScrollProps } from '../props'
import type { HorizontalScrollClasses, HorizontalScrollComponents, HorizontalScrollExpose } from '../types'

describe('HorizontalScroll (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountHorizontalScroll = (
    props: HorizontalScrollProps = {},
    attrs: Record<string, unknown> = {},
    slotRenderer?: (slotProps: HorizontalScrollControlItem) => ReturnType<typeof h>[]
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<HorizontalScrollExpose | undefined>()

    const Component = defineComponent({
      inheritAttrs: false,
      props: {
        bleed: { type: Boolean, default: undefined },
        align: { type: String, default: undefined },
        tag: { type: String, default: undefined }
      },
      setup(componentProps, { expose }) {
        const design = new HorizontalScrollDesign<
          HorizontalScrollComponents,
          HorizontalScrollExpose,
          HorizontalScrollClasses,
          HorizontalScrollProps
        >(
          'd1.horizontalScroll',
          componentProps as Readonly<HorizontalScrollProps>,
          {
            classes: computed(() => ({ main: { 'd1-horizontalScroll': true } }))
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(
        Component,
        {
          ...props,
          ...attrs,
          ref: exposedRef
        },
        {
          default: (slotProps: HorizontalScrollControlItem) => (
            slotRenderer
              ? slotRenderer(slotProps)
              : [
                  h('div', { class: slotProps.classItem }, 'Item 1'),
                  h('div', { class: [slotProps.classItem, slotProps.classItemSelected] }, 'Item 2')
                ]
          )
        }
      )
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      rootElement: container.firstElementChild as HTMLElement,
      exposed: exposedRef
    }
  }

  it('should render default div tag, scoped slot classes, and exposed element', () => {
    const { rootElement, exposed } = mountHorizontalScroll()

    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.classList.contains('d1-horizontalScroll')).toBe(true)

    const items = rootElement.querySelectorAll('.d1-horizontalScroll__item')
    expect(items).toHaveLength(2)
    expect(items[1].classList.contains('d1-horizontalScroll__item--selected')).toBe(true)
    expect(exposed.value?.getElement()).toBe(rootElement)
  })

  it('should render custom tag and merge external attrs/classes/styles cleanly', () => {
    const { rootElement } = mountHorizontalScroll(
      { tag: 'section' },
      { 'class': 'custom-scroll', 'style': { padding: '8px' }, 'aria-label': 'Categories' }
    )

    expect(rootElement.tagName).toBe('SECTION')
    expect(rootElement.classList.contains('d1-horizontalScroll')).toBe(true)
    expect(rootElement.classList.contains('custom-scroll')).toBe(true)
    expect(rootElement.getAttribute('aria-label')).toBe('Categories')
    expect(rootElement.style.padding).toBe('8px')
  })

  it('should trigger horizontal wheel scrolling and exposed toSelected()', async () => {
    const goScrollToSpy = vi.spyOn(functional, 'goScrollTo').mockImplementation(() => undefined)
    const { rootElement, exposed } = mountHorizontalScroll()

    rootElement.scrollLeft = 0
    rootElement.dispatchEvent(new WheelEvent('wheel', { deltaY: 64, cancelable: true }))
    await nextTick()
    expect(rootElement.scrollLeft).toBe(64)

    exposed.value?.toSelected()
    const selectedElement = rootElement.querySelector('.d1-horizontalScroll__item--selected')
    expect(goScrollToSpy).toHaveBeenCalledWith(rootElement, selectedElement)
  })
})
