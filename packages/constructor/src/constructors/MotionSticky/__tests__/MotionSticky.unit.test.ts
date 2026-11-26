// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { MotionSticky, type MotionStickyConstructors } from '../MotionSticky'
import { MotionStickyElement } from '../MotionStickyElement'
import { MotionStickyScroll } from '../MotionStickyScroll'
import type { MotionStickyProps } from '../props'

describe('MotionSticky (unit)', () => {
  let activeApp: ReturnType<typeof createApp> | undefined
  let activeHost: HTMLElement | undefined

  afterEach(() => {
    activeApp?.unmount()
    activeApp = undefined
    activeHost?.remove()
    activeHost = undefined
    vi.restoreAllMocks()
  })

  it('should instantiate scroll during construction and lazily instantiate element on mount', () => {
    const props: MotionStickyProps = {}
    const elementRef = ref<HTMLElement | undefined>()
    const naming = new DesignName('d1-motion-sticky')

    let logicInstance: MotionSticky | undefined

    const TestComp = defineComponent({
      setup() {
        logicInstance = new MotionSticky(props, elementRef, naming)
        return () => h('div', { ref: elementRef })
      }
    })

    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp(TestComp)
    activeApp.mount(activeHost)

    expect(logicInstance).toBeDefined()
    expect(logicInstance?.hasInstance('scroll')).toBe(true)
    expect(logicInstance?.hasInstance('element')).toBe(true)
  })

  it('should keep element uninstantiated before onMounted executes', () => {
    const scope = effectScope()
    const props: MotionStickyProps = {}
    const elementRef = ref<HTMLElement | undefined>()
    const naming = new DesignName('d1-motion-sticky')

    let logic: MotionSticky | undefined
    scope.run(() => {
      logic = new MotionSticky(props, elementRef, naming)
    })

    expect(logic?.hasInstance('scroll')).toBe(true)
    expect(logic?.hasInstance('element')).toBe(false)

    scope.stop()
  })

  it('should return tag from props or default to div', () => {
    const scope = effectScope()
    const naming = new DesignName('d1-motion-sticky')

    scope.run(() => {
      const defaultLogic = new MotionSticky({}, ref(), naming)
      expect(defaultLogic.tag).toBe('div')

      const customLogic = new MotionSticky({ tag: 'header' }, ref(), naming)
      expect(customLogic.tag).toBe('header')
    })

    scope.stop()
  })

  it('should not expose subordinate getter proxies on the orchestrator', () => {
    const scope = effectScope()
    const naming = new DesignName('d1-motion-sticky')

    scope.run(() => {
      const logic = new MotionSticky({}, ref(), naming)
      expect('scroll' in logic).toBe(false)
    })

    scope.stop()
  })

  it('should support dependency injection via constructors parameter', () => {
    const elementSpy = vi.fn()
    const scrollOnMountedSpy = vi.fn()
    const scrollOnUnmountedSpy = vi.fn()

    class MockElement extends MotionStickyElement {
      constructor(...args: ConstructorParameters<typeof MotionStickyElement>) {
        super(...args)
        elementSpy()
      }
    }

    class MockScroll extends MotionStickyScroll {
      override readonly onMounted = (): void => {
        scrollOnMountedSpy()
        this.stickyElement()
      }

      override readonly onUnmounted = (): void => {
        scrollOnUnmountedSpy()
      }
    }

    const customConstructors: Partial<MotionStickyConstructors> = {
      element: MockElement,
      scroll: MockScroll
    }

    const naming = new DesignName('d1-motion-sticky')
    let logicInstance: MotionSticky | undefined

    const TestComp = defineComponent({
      setup() {
        const elementRef = ref<HTMLElement | undefined>()
        logicInstance = new MotionSticky(
          {},
          elementRef,
          naming,
          undefined,
          undefined,
          undefined,
          customConstructors
        )
        return () => h('div', { ref: elementRef })
      }
    })

    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp(TestComp)
    activeApp.mount(activeHost)

    expect(logicInstance?.i('scroll')).toBeInstanceOf(MockScroll)
    expect(scrollOnMountedSpy).toHaveBeenCalledTimes(1)
    expect(elementSpy).toHaveBeenCalledTimes(1)
    expect(logicInstance?.i('element')).toBeInstanceOf(MockElement)

    activeApp.unmount()
    activeApp = undefined
    expect(scrollOnUnmountedSpy).toHaveBeenCalledTimes(1)
  })
})
