// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Dummy } from '../Dummy'
import { DummyDesign } from '../DummyDesign'
import type { DummyPropsBasic } from '../props'
import type { DummyClasses, DummyComponents, DummyExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('DummyDesign (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root div, merge attrs/classes/styles/listeners, project default slot, and expose elementHtml', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<DummyPropsBasic>({})
      const onClick = vi.fn()
      let exposed: DummyExpose & { elementHtml?: { value?: HTMLDivElement } } = {}

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: { 'd1-dummy': true }
          }))
          const styles = computed<ConstrStyles>(() => ({
            '--d1-dummy-height': '96px'
          }))
          const design = new DummyDesign<DummyComponents, DummyExpose, DummyClasses, DummyPropsBasic>(
            'd1.dummy',
            props,
            { classes, styles }
          )

          exposed = design.expose() as DummyExpose & { elementHtml?: { value?: HTMLDivElement } }
          return design.render()
        }
      })

      const Wrapper = defineComponent({
        setup() {
          return () => h(
            Inner,
            {
              'id': 'dummy-node',
              'class': 'extra-dummy',
              'style': { minWidth: '120px' },
              'data-testid': 'dummy-root',
              'role': 'presentation',
              'aria-label': 'Placeholder block',
              onClick
            },
            {
              default: () => h('span', { class: 'slot-content' }, 'Placeholder')
            }
          )
        }
      })

      const host = document.createElement('div')
      const app = createApp(Wrapper)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.querySelector('[data-testid="dummy-root"]') as HTMLDivElement
      expect(root).toBeInstanceOf(HTMLDivElement)
      expect(root.tagName).toBe('DIV')
      expect(root.id).toBe('dummy-node')
      expect(root.getAttribute('role')).toBe('presentation')
      expect(root.getAttribute('aria-label')).toBe('Placeholder block')
      expect(root.classList.contains('d1-dummy')).toBe(true)
      expect(root.classList.contains('extra-dummy')).toBe(true)
      expect(root.style.getPropertyValue('--d1-dummy-height')).toBe('96px')
      expect(root.style.minWidth).toBe('120px')
      expect(root.querySelector('.slot-content')?.textContent).toBe('Placeholder')
      expect(exposed.elementHtml?.value).toBe(root)

      root.click()
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively update computed classes, styles, and dynamic slot content', async () => {
      const isLarge = ref(false)
      const height = ref('48px')
      const showSlot = ref(false)

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: {
              'd1-dummy': true,
              'd1-dummy--size--lg': isLarge.value
            }
          }))
          const styles = computed<ConstrStyles>(() => ({
            '--d1-dummy-height': height.value
          }))
          const design = new DummyDesign<DummyComponents, DummyExpose, DummyClasses, DummyPropsBasic>(
            'd1.dummy',
            reactive<DummyPropsBasic>({}),
            { classes, styles }
          )

          return design.render()
        }
      })

      const Wrapper = defineComponent({
        setup() {
          return () => h(
            Inner,
            {},
            showSlot.value
              ? { default: () => h('p', { class: 'dynamic-slot' }, 'Loaded') }
              : {}
          )
        }
      })

      const host = document.createElement('div')
      const app = createApp(Wrapper)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLDivElement
      expect(root.classList.contains('d1-dummy--size--lg')).toBe(false)
      expect(root.style.getPropertyValue('--d1-dummy-height')).toBe('48px')
      expect(root.innerHTML).toBe('')

      isLarge.value = true
      height.value = '144px'
      showSlot.value = true
      await nextTick()

      expect(root.classList.contains('d1-dummy--size--lg')).toBe(true)
      expect(root.style.getPropertyValue('--d1-dummy-height')).toBe('144px')
      expect(root.querySelector('.dynamic-slot')?.textContent).toBe('Loaded')
    })

    it('should render an empty root div safely when options and default slot are omitted', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const Inner = defineComponent({
        setup() {
          const design = new DummyDesign<DummyComponents, DummyExpose, DummyClasses, DummyPropsBasic>(
            'd1.dummy',
            reactive<DummyPropsBasic>({})
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLDivElement
      expect(root).toBeInstanceOf(HTMLDivElement)
      expect(root.tagName).toBe('DIV')
      expect(root.childNodes.length).toBe(0)
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })

  describe('Dependency Injection & Lifecycle', () => {
    it('should support custom ItemConstructor dependency injection and mount lifecycle', () => {
      const constructedSpy = vi.fn<(name: string, instance: CustomDummy) => void>()

      class CustomDummy extends Dummy {
        constructor(...args: ConstructorParameters<typeof Dummy>) {
          super(...args)
          constructedSpy(args[2].getName(), this)
        }
      }

      const Inner = defineComponent({
        setup() {
          const design = new DummyDesign<DummyComponents, DummyExpose, DummyClasses, DummyPropsBasic>(
            'd1.dummy',
            reactive<DummyPropsBasic>({}),
            {},
            CustomDummy
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(constructedSpy).toHaveBeenCalledTimes(1)
      expect(constructedSpy.mock.calls[0]?.[0]).toBe('d1-dummy')
      const injectedInstance = constructedSpy.mock.calls[0]?.[1]
      expect(injectedInstance).toBeInstanceOf(CustomDummy)
      expect(injectedInstance?.isMounted.value).toBe(true)
    })
  })
})
