// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Modal } from '../Modal'
import { ModalDesignAbstract } from '../ModalDesignAbstract'
import type { ModalPropsBasic } from '../props'
import type {
  ModalClasses,
  ModalComponents,
  ModalEmits,
  ModalExpose,
  ModalSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Concrete subclass of ModalDesignAbstract for isolated unit tests.
 *
 * Конкретный подкласс ModalDesignAbstract для изолированных модульных тестов.
 */
class TestModalDesignAbstract extends ModalDesignAbstract<
  ModalComponents,
  ModalEmits,
  ModalExpose,
  ModalSlots,
  ModalClasses,
  ModalPropsBasic,
  Modal,
  typeof Modal
> {
  protected initItem(ItemConstructor: typeof Modal = Modal): Modal {
    return new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  protected initClasses(): Partial<ModalClasses> {
    return {
      main: {},
      title: this.naming.getSubClass('title'),
      header: this.naming.getSubClass('header'),
      body: this.naming.getSubClass('body'),
      footer: this.naming.getSubClass('footer')
    }
  }

  /** Exposes internal logic item for laziness assertions / Открывает элемент логики для проверок ленивости */
  get logicItem(): Modal {
    return this.item
  }
}

const WindowStub = defineComponent({
  name: 'WindowStub',
  inheritAttrs: false,
  setup(_, { attrs, slots, expose }) {
    expose({
      getId: () => 'window-stub-id',
      getOpen: () => Boolean(attrs.open),
      getControl: () => ({ open: Boolean(attrs.open) }),
      setOpen: async () => undefined,
      toOpen: async () => undefined,
      toClose: async () => undefined,
      toggle: async () => undefined
    })

    return () => h(
      'div',
      {
        ...attrs,
        'data-window-stub': 'true'
      },
      [
        slots.control?.({ open: Boolean(attrs.open) }),
        slots.title?.({ open: Boolean(attrs.open) }),
        slots.default?.({ open: Boolean(attrs.open) }),
        slots.footer?.({ open: Boolean(attrs.open) })
      ]
    )
  }
})

describe('ModalDesignAbstract (Unit)', () => {
  it('should merge external attrs, classes, and styles via mergeProps without overwriting', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<ModalPropsBasic>({ barsBackHide: true })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-modal': true }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--modal-padding': '16px'
        }))
        const design = new TestModalDesignAbstract('d1.modal', props, {
          classes: classesToken,
          styles: stylesToken,
          components: { window: WindowStub }
        })
        return design.render()
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(Inner, {
          'class': 'external-modal-class',
          'data-testid': 'modal-root',
          'style': { opacity: '0.9' }
        })
      }
    })

    const app = createApp(Root)
    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = host.querySelector('[data-window-stub]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-modal')).toBe(true)
    expect(root.classList.contains('external-modal-class')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('modal-root')
    expect(root.style.opacity).toBe('0.9')
    expect(root.style.getPropertyValue('--modal-padding')).toBe('16px')
  })

  it('should keep bars and actions uninstantiated via callInstance when disabled or absent', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let design!: TestModalDesignAbstract

    const Component = defineComponent({
      setup() {
        const props = reactive<ModalPropsBasic>({ barsBackHide: true })
        design = new TestModalDesignAbstract('d1.modal', props, {
          components: { window: WindowStub }
        })
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(design.logicItem.hasInstance('window')).toBe(true)
    expect(design.logicItem.hasInstance('bars')).toBe(false)
    expect(design.logicItem.hasInstance('actions')).toBe(false)
    expect(design.logicItem.hasInstance('model')).toBe(false)
  })

  it('should skip undefined slots and render only valid function slots', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const Inner = defineComponent({
      setup() {
        const props = reactive<ModalPropsBasic>({ barsBackHide: true })
        const design = new TestModalDesignAbstract('d1.modal', props, {
          components: { window: WindowStub }
        })
        return design.render()
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(Inner, null, {
          title: undefined,
          header: undefined,
          default: () => h('p', 'Valid Body'),
          footer: undefined
        })
      }
    })

    const app = createApp(Root)
    app.mount(host)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(host.querySelector('.d1-modal__title')).toBeNull()
    expect(host.querySelector('.d1-modal__header')).toBeNull()
    expect(host.querySelector('.d1-modal__body')?.textContent).toBe('Valid Body')
    expect(host.querySelector('.d1-modal__footer')).toBeNull()
  })
})
