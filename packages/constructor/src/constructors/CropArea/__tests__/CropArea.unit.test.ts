// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { CropArea, type CropAreaConstructors } from '../CropArea'
import { CropAreaCoordinates } from '../CropAreaCoordinates'
import { CropAreaElement } from '../CropAreaElement'
import { CropAreaEmit } from '../CropAreaEmit'
import { CropAreaEvents } from '../CropAreaEvents'
import { CropAreaPosition } from '../CropAreaPosition'
import { CropAreaStyle } from '../CropAreaStyle'
import type { CropAreaCoordinator } from '../basicTypes'
import type { CropAreaProps } from '../props'

describe('CropArea (isolated orchestrator)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).forEach(cleanup => cleanup())
    document.body.className = ''
    vi.restoreAllMocks()
  })

  const createOrchestrator = (
    initialProps: CropAreaProps = {},
    constructors?: Partial<CropAreaConstructors>
  ) => {
    const scope = effectScope()
    const props = reactive<CropAreaProps>({ ...initialProps })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.cropArea')
    const emits = vi.fn()
    const instance = scope.run(() => new CropArea(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits,
      constructors
    ))

    cleanups.push(() => scope.stop())

    if (!instance) {
      throw new Error('CropArea orchestrator failed to initialize')
    }

    return { props, element, naming, emits, instance }
  }

  describe('Lazy instantiation', () => {
    it('should keep all seven subordinate dependencies unallocated until accessed', () => {
      const { instance } = createOrchestrator({
        value: [5, 10, 15, 20],
        tag: 'section'
      })

      expect(instance.hasInstance('coordinates')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('emit')).toBe(false)
      expect(instance.hasInstance('events')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('position')).toBe(false)
      expect(instance.hasInstance('style')).toBe(false)

      // Reading tag and aria allocates zero subordinate instances
      expect(instance.tag).toBe('section')
      expect(instance.aria).toEqual({})
      expect(instance.hasInstance('events')).toBe(false)
      expect(instance.hasInstance('position')).toBe(false)

      // Reading binds allocates only events; other helpers remain lazy
      const binds = instance.binds
      expect(binds.tabindex).toBe(0)
      expect(instance.hasInstance('events')).toBe(true)
      expect(instance.hasInstance('coordinates')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('emit')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('position')).toBe(false)
      expect(instance.hasInstance('style')).toBe(false)
    })
  })

  describe('Public getters (aria, binds, tag)', () => {
    it('should resolve default tag, custom tag, ARIA disabled state, and event binds', () => {
      const { instance, props } = createOrchestrator()

      expect(instance.tag).toBe('div')
      expect(instance.aria).toEqual({})
      expect(instance.binds).toHaveProperty('tabindex', 0)
      expect(instance.binds).toHaveProperty('onMousedown')
      expect(instance.binds).toHaveProperty('onTouchstart')
      expect(instance.binds).toHaveProperty('onKeydown')

      props.tag = 'article'
      props.disabled = true

      expect(instance.tag).toBe('article')
      expect(instance.aria).toEqual({ 'aria-disabled': 'true' })
      expect(instance.binds['aria-disabled']).toBe('true')
      expect(instance.binds.tabindex).toBeUndefined()
    })
  })

  describe('Dependency Injection and DesignLogicAbstract lifecycle coordination', () => {
    it('should support overriding all subordinate constructors via constructors map', () => {
      class CustomCoordinates extends CropAreaCoordinates {}
      class CustomElement extends CropAreaElement {}
      class CustomEmit extends CropAreaEmit {}
      class CustomEvents extends CropAreaEvents {}
      class CustomModel extends ModelInclude<CropAreaCoordinator> {}
      class CustomPosition extends CropAreaPosition {}
      class CustomStyle extends CropAreaStyle {}

      const { instance } = createOrchestrator({}, {
        coordinates: CustomCoordinates,
        elementItem: CustomElement,
        emit: CustomEmit,
        events: CustomEvents,
        model: CustomModel,
        position: CustomPosition,
        style: CustomStyle
      })

      expect(instance.i('coordinates')).toBeInstanceOf(CustomCoordinates)
      expect(instance.i('elementItem')).toBeInstanceOf(CustomElement)
      expect(instance.i('emit')).toBeInstanceOf(CustomEmit)
      expect(instance.i('events')).toBeInstanceOf(CustomEvents)
      expect(instance.i('model')).toBeInstanceOf(CustomModel)
      expect(instance.i('position')).toBeInstanceOf(CustomPosition)
      expect(instance.i('style')).toBeInstanceOf(CustomStyle)
    })

    it('should conditionally activate position on mount only when not readonly and clean up on unmount', async () => {
      const props = reactive<CropAreaProps>({
        readonly: true,
        value: [15, 20, 25, 30]
      })
      const elementRef = ref<HTMLElement | undefined>(document.createElement('div'))
      let orchestrator: CropArea | undefined

      const Host = defineComponent({
        setup() {
          orchestrator = new CropArea(
            props,
            elementRef,
            new DesignName('d1.cropArea')
          )
          return () => null
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      // Readonly: position stays unallocated on mount
      expect(orchestrator?.hasInstance('position')).toBe(false)
      expect(orchestrator?.hasInstance('style')).toBe(false)

      // Switching readonly -> false triggers condition watcher -> instantiates position & applies CSS variables
      props.readonly = false
      await nextTick()

      expect(orchestrator?.hasInstance('position')).toBe(true)
      expect(orchestrator?.hasInstance('style')).toBe(true)
      expect(elementRef.value?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('15%')
      expect(elementRef.value?.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('30%')

      // Updating value updates CSS variables reactively
      props.value = [5, 5, 5, 5]
      await nextTick()
      expect(elementRef.value?.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('5%')

      // Unmount stops watchers cleanly
      app.unmount()
      cleanups.pop()

      props.value = [25, 25, 25, 25]
      await nextTick()
      expect(orchestrator?.i('position').get()).toEqual([5, 5, 5, 5])
    })
  })
})
