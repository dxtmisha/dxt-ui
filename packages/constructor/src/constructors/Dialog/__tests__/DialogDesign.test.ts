// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type VNode } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Dialog } from '../Dialog'
import { DialogDesign } from '../DialogDesign'
import type { DialogProps } from '../props'
import type {
  DialogClasses,
  DialogComponents,
  DialogExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const mountDesignHost = (
  props: DialogProps = {},
  options: {
    attrs?: Record<string, unknown>
    slots?: Record<string, () => VNode | VNode[]>
    components?: DialogComponents
    ItemConstructor?: typeof Dialog
  } = {}
) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  let designInstance: DialogDesign<
    DialogComponents,
    DialogExpose,
    DialogClasses,
    DialogProps
  > | undefined

  const Inner = defineComponent({
    inheritAttrs: false,
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-dialog': true }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--d1-dialog-paddingX': '24px'
      }))

      designInstance = new DialogDesign<
        DialogComponents,
        DialogExpose,
        DialogClasses,
        DialogProps
      >(
        'd1.dialog',
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

describe('DialogDesign (unit)', () => {
  it('should support ItemConstructor dependency injection and expose public renderContent/renderInformation methods', () => {
    const constructorSpy = vi.fn()

    class CustomDialog extends Dialog {
      constructor(...args: ConstructorParameters<typeof Dialog>) {
        constructorSpy()
        super(...args)
      }
    }

    const { design } = mountDesignHost({}, { ItemConstructor: CustomDialog })

    expect(constructorSpy).toHaveBeenCalledTimes(1)
    expect(typeof design.renderContent).toBe('function')
    expect(typeof design.renderInformation).toBe('function')
  })

  it('should merge external host attrs with component classes and styles without overwriting', () => {
    const windowStub = defineComponent({
      name: 'WindowStub',
      inheritAttrs: false,
      setup(_props, { attrs }) {
        return () => h('div', { ...attrs, 'data-window-stub': 'true' })
      }
    })

    const props = reactive<DialogProps>({})
    const { container } = mountDesignHost(props, {
      attrs: {
        'class': 'custom-dialog-class',
        'style': 'z-index: 50;',
        'data-testid': 'dialog-root'
      },
      components: { window: windowStub }
    })

    const rootElement = container.querySelector<HTMLElement>('[data-window-stub="true"]')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.getAttribute('data-testid')).toBe('dialog-root')
    expect(rootElement?.className).toContain('custom-dialog-class')
    expect(rootElement?.className).toContain('d1-dialog')
    expect(rootElement?.style.getPropertyValue('z-index')).toBe('50')
    expect(rootElement?.style.getPropertyValue('--d1-dialog-paddingX')).toBe('24px')
  })

  it('should omit empty information wrapper when icon/label/description are absent and render reactively when populated', async () => {
    const windowStub = defineComponent({
      name: 'WindowStub',
      inheritAttrs: false,
      setup(_props, { attrs, slots }) {
        return () => h('div', attrs, slots.default?.({}))
      }
    })
    const iconStub = defineComponent({
      name: 'IconStub',
      inheritAttrs: false,
      props: { icon: String },
      setup(props, { attrs }) {
        return () => h('span', { ...attrs, 'data-icon-stub': props.icon })
      }
    })

    const props = reactive<DialogProps>({})
    const { container } = mountDesignHost(props, {
      components: {
        window: windowStub,
        icon: iconStub
      },
      slots: {
        header: () => [h('div', 'Custom Header')],
        default: () => [h('p', 'Custom Body')]
      }
    })

    expect(container.querySelector('.d1-dialog__information')).toBeNull()
    expect(container.querySelector('.d1-dialog__header')?.textContent).toBe('Custom Header')
    expect(container.querySelector('.d1-dialog__body')?.textContent).toBe('Custom Body')

    props.icon = 'warning'
    props.label = 'Attention'
    props.description = 'Please confirm your action.'
    await nextTick()

    const infoElement = container.querySelector('.d1-dialog__information')
    expect(infoElement).not.toBeNull()
    expect(infoElement?.querySelector('[data-icon-stub="warning"]')).not.toBeNull()
    expect(infoElement?.querySelector('.d1-dialog__label')?.textContent).toBe('Attention')
    expect(infoElement?.querySelector('.d1-dialog__description')?.textContent).toBe('Please confirm your action.')

    props.icon = undefined
    props.label = undefined
    props.description = undefined
    await nextTick()

    expect(container.querySelector('.d1-dialog__information')).toBeNull()
  })
})
