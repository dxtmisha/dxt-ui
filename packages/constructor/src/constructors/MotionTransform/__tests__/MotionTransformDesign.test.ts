// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { MotionTransformDesign } from '../MotionTransformDesign'
import { defaultsMotionTransform, type MotionTransformPropsBasic } from '../props'
import type {
  MotionTransformClasses,
  MotionTransformComponents,
  MotionTransformExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('MotionTransformDesign', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should mount in DOM with context, main, and head elements, and expose API', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let exposedResult!: MotionTransformExpose
      let designInstance!: MotionTransformDesign<
        MotionTransformComponents,
        MotionTransformExpose,
        MotionTransformClasses,
        MotionTransformPropsBasic
      >

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            open: false,
            inDom: false
          })

          const classesToken = computed<ConstrClasses>(() => ({
            main: {
              'd1-motion-transform': true
            }
          }))

          designInstance = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props, {
            classes: classesToken
          })

          exposedResult = designInstance.expose()
          return designInstance.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const contextElement = container.querySelector('.d1-motionTransform__context')
      expect(contextElement).not.toBeNull()

      const mainElement = container.querySelector('.d1-motion-transform')
      expect(mainElement).not.toBeNull()

      const headElement = container.querySelector('.d1-motionTransform__head')
      expect(headElement).not.toBeNull()
      expect(headElement?.getAttribute('aria-expanded')).toBe('false')
      expect(headElement?.getAttribute('aria-controls')).toContain('body')
      expect(headElement?.getAttribute('id')).toContain('control')

      // Body should NOT be rendered when closed and inDom is false
      const bodyElement = container.querySelector('.d1-motionTransform__body')
      expect(bodyElement).toBeNull()

      // Expose API verification
      expect(typeof exposedResult.getOpen).toBe('function')
      expect(typeof exposedResult.isShow).toBe('function')
      expect(typeof exposedResult.setOpen).toBe('function')
      expect(typeof exposedResult.toOpen).toBe('function')
      expect(typeof exposedResult.toClose).toBe('function')
      expect(typeof exposedResult.toggle).toBe('function')
      expect(exposedResult.getOpen()).toBe(false)
      expect(exposedResult.isShow()).toBe(false)
    })

    it('should open and close via exposed methods', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let exposedResult!: MotionTransformExpose

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            animationShow: false,
            open: false
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          exposedResult = design.expose()
          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      expect(exposedResult.getOpen()).toBe(false)
      expect(exposedResult.isShow()).toBe(false)

      exposedResult.toOpen()
      await nextTick()
      expect(exposedResult.getOpen()).toBe(true)
      expect(exposedResult.isShow()).toBe(true)

      exposedResult.toClose()
      await nextTick()
      expect(exposedResult.getOpen()).toBe(false)
      expect(exposedResult.isShow()).toBe(false)

      exposedResult.toggle()
      await nextTick()
      expect(exposedResult.getOpen()).toBe(true)
      expect(exposedResult.isShow()).toBe(true)

      exposedResult.setOpen(false)
      await nextTick()
      expect(exposedResult.getOpen()).toBe(false)
      expect(exposedResult.isShow()).toBe(false)
    })
  })

  describe('Props & Options variations', () => {
    it('should render body element when inDom is true even if closed', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            open: false,
            inDom: true
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const bodyElement = container.querySelector('.d1-motionTransform__body')
      expect(bodyElement).not.toBeNull()
      expect(bodyElement?.getAttribute('role')).toBe('region')
    })

    it('should use custom tag for body element when tagBody is provided', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            open: false,
            inDom: true,
            tagBody: 'article'
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const bodyElement = container.querySelector('.d1-motionTransform__body')
      expect(bodyElement).not.toBeNull()
      expect(bodyElement?.tagName.toLowerCase()).toBe('article')
    })

    it('should not bind aria-controls or onKeydown to head when clickOpen is false', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            clickOpen: false
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const headElement = container.querySelector('.d1-motionTransform__head')
      expect(headElement).not.toBeNull()
      expect(headElement?.getAttribute('aria-expanded')).toBeNull()
      expect(headElement?.getAttribute('aria-controls')).toBeNull()
    })
  })

  describe('Slots rendering', () => {
    it('should render custom head and body slots with slotData', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let slotDataReceived: unknown

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            open: false,
            inDom: true
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          return design.render()
        }
      })

      const Root = defineComponent({
        render() {
          return h(Component, null, {
            head: (slotData: unknown) => {
              slotDataReceived = slotData
              return h('div', { id: 'custom-head-content' }, 'Custom Header')
            },
            body: () => h('div', { id: 'custom-body-content' }, 'Custom Body')
          })
        }
      })

      const app = createApp(Root)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const customHead = container.querySelector('#custom-head-content')
      expect(customHead).not.toBeNull()
      expect(customHead?.textContent).toBe('Custom Header')

      const customBody = container.querySelector('#custom-body-content')
      expect(customBody).not.toBeNull()
      expect(customBody?.textContent).toBe('Custom Body')

      expect(slotDataReceived).toBeDefined()
      expect(typeof (slotDataReceived as any).isOpen).toBe('boolean')
      expect(typeof (slotDataReceived as any).isShow).toBe('boolean')
      expect((slotDataReceived as any).binds).toBeDefined()
    })
  })

  describe('User interactions and event handling', () => {
    it('should toggle open state on head click when clickOpen is true', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let exposedResult!: MotionTransformExpose

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            animationShow: false,
            clickOpen: true,
            open: false
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          exposedResult = design.expose()
          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const headElement = container.querySelector('.d1-motionTransform__head') as HTMLElement
      expect(headElement).not.toBeNull()

      headElement.click()
      await nextTick()
      expect(exposedResult.getOpen()).toBe(true)

      headElement.click()
      await nextTick()
      expect(exposedResult.getOpen()).toBe(false)
    })

    it('should toggle open state on Enter keydown on head and respect IME composition', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let exposedResult!: MotionTransformExpose

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            animationShow: false,
            clickOpen: true,
            open: false
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          exposedResult = design.expose()
          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const headElement = container.querySelector('.d1-motionTransform__head') as HTMLElement

      // IME composition guard: should ignore keydown when isComposing is true
      const composingEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true })
      Object.defineProperty(composingEvent, 'isComposing', { value: true })
      headElement.dispatchEvent(composingEvent)
      await nextTick()
      expect(exposedResult.getOpen()).toBe(false)

      // Regular Enter key
      headElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }))
      await nextTick()
      expect(exposedResult.getOpen()).toBe(true)
    })

    it('should handle transitionend on main element gracefully', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform
          })

          const classesToken = computed<ConstrClasses>(() => ({
            main: {
              'd1-motion-transform-main': true
            }
          }))

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props, {
            classes: classesToken
          })

          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      const mainElement = container.querySelector('.d1-motion-transform-main') as HTMLElement
      expect(mainElement).not.toBeNull()

      const transitionEvent = new Event('transitionend', { bubbles: true })
      expect(() => mainElement.dispatchEvent(transitionEvent)).not.toThrow()
    })
  })

  describe('Decomposition and internal initialization', () => {
    it('should provide all subclasses in initClasses() and empty styles in initStyles()', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let classes!: Partial<MotionTransformClasses>
      let styles!: Record<string, unknown>

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform
          })

          const design = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          classes = (design as any).initClasses()
          styles = (design as any).initStyles()

          return design.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      expect(classes.context).toContain('context')
      expect(classes.head).toContain('head')
      expect(classes.body).toContain('body')
      expect(classes.backdrop).toContain('backdrop')
      expect(classes.scrim).toContain('scrim')
      expect(classes.clickNone).toContain('clickNone')
      expect(classes.main).toBeDefined()

      expect(styles).toEqual({})
    })

    it('should decompose rendering into renderMain, renderHead, renderBody, and renderScrim methods', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      let designInstance!: MotionTransformDesign<
        MotionTransformComponents,
        MotionTransformExpose,
        MotionTransformClasses,
        MotionTransformPropsBasic
      >

      const Component = defineComponent({
        setup() {
          const props = reactive<MotionTransformPropsBasic>({
            ...defaultsMotionTransform,
            inDom: false,
            open: false
          })

          designInstance = new MotionTransformDesign<
            MotionTransformComponents,
            MotionTransformExpose,
            MotionTransformClasses,
            MotionTransformPropsBasic
          >('d1.motionTransform', props)

          return designInstance.render()
        }
      })

      const app = createApp(Component)
      app.mount(container)
      cleanups.push(() => app.unmount())

      await nextTick()

      expect(designInstance.renderMain()).toHaveLength(1)
      expect(designInstance.renderHead()).toHaveLength(1)
      expect(designInstance.renderBody()).toEqual([])
      expect(designInstance.renderScrim()).toEqual([])
    })
  })
})
