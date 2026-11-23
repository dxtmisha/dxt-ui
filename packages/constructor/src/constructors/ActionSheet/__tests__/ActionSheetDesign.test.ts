// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type VNode } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { ActionSheet } from '../ActionSheet'
import { ActionSheetDesign } from '../ActionSheetDesign'
import type { ActionSheetProps } from '../props'
import type {
  ActionSheetClasses,
  ActionSheetComponents,
  ActionSheetExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const mountDesignHost = (
  props: ActionSheetProps = {},
  options: {
    attrs?: Record<string, unknown>
    slots?: Record<string, () => VNode | VNode[]>
    components?: ActionSheetComponents
    ItemConstructor?: typeof ActionSheet
  } = {}
) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  let designInstance: ActionSheetDesign<
    ActionSheetComponents,
    ActionSheetExpose,
    ActionSheetClasses,
    ActionSheetProps
  > | undefined

  const Inner = defineComponent({
    inheritAttrs: false,
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-actionSheet': true }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--d1-actionSheet-padding': '16px'
      }))

      designInstance = new ActionSheetDesign<
        ActionSheetComponents,
        ActionSheetExpose,
        ActionSheetClasses,
        ActionSheetProps
      >(
        'd1.actionSheet',
        props,
        {
          classes,
          styles,
          components: options.components
        },
        options.ItemConstructor
      )

      return designInstance.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(Inner, options.attrs ?? {}, options.slots ?? {})
    }
  })

  const app = createApp(Wrapper)
  app.mount(container)
  cleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return { container, design: designInstance! }
}

describe('ActionSheetDesign (unit)', () => {
  it('should support ItemConstructor dependency injection and initialize all subclasses including touch and tab', () => {
    const constructorSpy = vi.fn()

    class CustomActionSheet extends ActionSheet {
      constructor(...args: ConstructorParameters<typeof ActionSheet>) {
        constructorSpy()
        super(...args)
      }
    }

    const { design } = mountDesignHost({}, { ItemConstructor: CustomActionSheet })

    expect(constructorSpy).toHaveBeenCalledTimes(1)
    expect(design).toBeDefined()
  })

  it('should merge external attrs with component classes, styles, and data-touch="touch" without overwriting', () => {
    const windowStub = defineComponent({
      name: 'WindowStub',
      inheritAttrs: false,
      setup(_props, { attrs }) {
        return () => h('div', { ...attrs, 'data-window-stub': 'true' })
      }
    })

    const props = reactive<ActionSheetProps>({ touchClose: true })
    const { container } = mountDesignHost(props, {
      attrs: {
        'class': 'custom-sheet-class',
        'style': 'z-index: 40;',
        'data-testid': 'action-sheet-root'
      },
      components: { window: windowStub }
    })

    const rootElement = container.querySelector<HTMLElement>('[data-window-stub="true"]')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.getAttribute('data-touch')).toBe('touch')
    expect(rootElement?.getAttribute('data-testid')).toBe('action-sheet-root')
    expect(rootElement?.className).toContain('custom-sheet-class')
    expect(rootElement?.className).toContain('d1-actionSheet')
    expect(rootElement?.style.getPropertyValue('z-index')).toBe('40')
  })

  it('should wrap title slot in touch container with decorative aria-hidden tab when touchClose is true and unwrap when false', async () => {
    const windowStub = defineComponent({
      name: 'WindowStub',
      inheritAttrs: false,
      setup(_props, { attrs, slots }) {
        return () => h('div', attrs, slots.title?.({}))
      }
    })

    const props = reactive<ActionSheetProps>({ touchClose: true })
    const { container } = mountDesignHost(props, {
      components: { window: windowStub },
      slots: {
        title: () => [h('h3', 'Sheet Title')]
      }
    })

    const touchElement = container.querySelector<HTMLElement>('.d1-actionSheet__touch')
    const tabElement = container.querySelector<HTMLElement>('.d1-actionSheet__tab')
    const titleElement = container.querySelector<HTMLElement>('.d1-actionSheet__title')

    expect(touchElement).not.toBeNull()
    expect(tabElement).not.toBeNull()
    expect(tabElement?.getAttribute('aria-hidden')).toBe('true')
    expect(titleElement?.textContent).toBe('Sheet Title')

    props.touchClose = false
    await nextTick()

    expect(container.querySelector('.d1-actionSheet__touch')).toBeNull()
    expect(container.querySelector('.d1-actionSheet__tab')).toBeNull()
    expect(container.querySelector('.d1-actionSheet__title')?.textContent).toBe('Sheet Title')
  })
})
