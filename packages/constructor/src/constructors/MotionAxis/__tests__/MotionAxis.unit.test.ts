// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { MotionAxis, type MotionAxisConstructors } from '../MotionAxis'
import type { MotionAxisProps } from '../props'

/**
 * Inspectable subclass of MotionAxis exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс MotionAxis, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableMotionAxis extends MotionAxis {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof MotionAxisConstructors, unknown>> {
    return this.instances
  }

  /**
   * Exposes protected onMounted hook for isolated unit verification.
   *
   * Открывает защищённый хук onMounted для изолированной модульной проверки.
   */
  triggerMount(): void {
    this.onMounted?.()
  }
}

describe('MotionAxis (unit)', () => {
  const naming = new DesignName('d1.motion-axis')
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  it('should instantiate only model and selected eagerly while keeping other dependencies lazy', () => {
    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const element = ref<HTMLDivElement>()
    const props = reactive<MotionAxisProps>({
      axis: 'x',
      direction: 'auto',
      selected: 'slide-1'
    })

    scope.run(() => {
      const axis = new InspectableMotionAxis(props, element, naming)

      expect(axis.hasInstance('model')).toBe(true)
      expect(axis.hasInstance('selected')).toBe(true)
      expect(axis.hasInstance('element')).toBe(false)
      expect(axis.hasInstance('go')).toBe(false)
      expect(axis.hasInstance('previous')).toBe(false)
      expect(axis.hasInstance('slides')).toBe(false)
      expect(axis.hasInstance('status')).toBe(false)
      expect(axis.hasInstance('styles')).toBe(false)
    })
  })

  it('should compute classes and short-circuit element instantiation when animationHeight is disabled', () => {
    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const element = ref<HTMLDivElement>()
    const props = reactive<MotionAxisProps>({
      axis: 'y',
      direction: 'next',
      animationHeight: false
    })

    scope.run(() => {
      const axis = new InspectableMotionAxis(props, element, naming)

      expect(axis.classes).toEqual({
        'd1-motionAxis--axis--y': true,
        'd1-motionAxis--direction--next': true,
        'd1-motionAxis--start': false,
        'd1-motionAxis--move': false
      })
      expect(axis.hasInstance('go')).toBe(true)
      expect(axis.hasInstance('element')).toBe(false)

      props.animationHeight = true
      axis.i('element').toStart()
      axis.i('element').toMove()

      expect(axis.hasInstance('element')).toBe(true)
      expect(axis.classes['d1-motionAxis--start']).toBe(true)
      expect(axis.classes['d1-motionAxis--move']).toBe(true)
    })
  })

  it('should evaluate isInDom and isInDomSlide with short-circuiting', () => {
    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const element = ref<HTMLDivElement>()
    const props = reactive<MotionAxisProps>({
      selected: 'slide-1',
      inDom: false,
      inDomSlide: ['slide-3']
    })

    scope.run(() => {
      const axis = new InspectableMotionAxis(props, element, naming)

      expect(axis.isInDomSlide('slide-3')).toBe(true)
      expect(axis.isInDomSlide('slide-2')).toBe(false)

      // Matched via inDomSlide without instantiating previous or status
      expect(axis.isInDom('slide-3')).toBe(true)
      expect(axis.hasInstance('previous')).toBe(false)
      expect(axis.hasInstance('status')).toBe(false)

      // Matched via active status
      expect(axis.isInDom('slide-1')).toBe(true)
      expect(axis.isInDom('slide-2')).toBe(false)

      // Matched via global inDom
      props.inDom = true
      expect(axis.isInDom('slide-2')).toBe(true)
    })
  })

  it('should emit update:selected and update:modelSelected through ModelInclude when selection changes', async () => {
    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const element = ref<HTMLDivElement>()
    const props = reactive<MotionAxisProps>({
      selected: 'slide-1',
      direction: 'auto'
    })
    const emits = vi.fn()

    await scope.run(async () => {
      const axis = new InspectableMotionAxis(
        props,
        element,
        naming,
        undefined,
        { 'slide-1': () => null, 'slide-2': () => null },
        emits
      )

      axis.triggerMount()
      props.selected = 'slide-2'
      await nextTick()

      expect(axis.i('selected').is('slide-2')).toBe(true)
      expect(emits).toHaveBeenCalledWith('update:selected', 'slide-2')
      expect(emits).toHaveBeenCalledWith('update:modelSelected', 'slide-2')
    })
  })

  it('should support constructor DI overrides', () => {
    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const customGo = {
      axis: ref('z' as const),
      direction: ref('back' as const),
      to: vi.fn()
    }
    const CustomGoConstructor = vi.fn(function () {
      return customGo
    }) as unknown as MotionAxisConstructors['go']

    scope.run(() => {
      const axis = new InspectableMotionAxis(
        { axis: 'z', direction: 'back' },
        ref<HTMLDivElement>(),
        naming,
        undefined,
        undefined,
        undefined,
        { go: CustomGoConstructor }
      )

      expect(axis.classes['d1-motionAxis--axis--z']).toBe(true)
      expect(axis.classes['d1-motionAxis--direction--back']).toBe(true)
      expect(CustomGoConstructor).toHaveBeenCalledTimes(1)
    })
  })
})
