// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { Collage, type CollageConstructors } from '../Collage'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'
import { CollageMasonryHorizontal } from '../CollageMasonryHorizontal'
import { CollageMasonryVertical } from '../CollageMasonryVertical'
import { CollageVariant } from '../CollageVariant'
import { CollageWoven } from '../CollageWoven'
import type { CollageProps } from '../props'
import type { CollageEmits } from '../types'

/**
 * Helper instantiating Collage inside an active Vue effectScope.
 *
 * Вспомогательная функция для создания Collage внутри активной области эффектов Vue.
 */
function createCollageUnit(
  initialProps: CollageProps = {},
  options: {
    emits?: ConstrEmit<CollageEmits>
    constructors?: Partial<CollageConstructors>
    container?: HTMLElement
  } = {}
) {
  const scope = effectScope()
  const props = reactive<CollageProps>({ ...initialProps })
  const element = ref<HTMLElement | undefined>(options.container)
  const naming = new DesignName('d1.collage')
  let instance!: Collage

  scope.run(() => {
    instance = new Collage(
      props,
      element,
      naming,
      undefined,
      undefined,
      options.emits,
      options.constructors
    )
  })

  return {
    scope,
    props,
    element,
    naming,
    instance
  }
}

describe('Collage (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Lazy dependency instantiation', () => {
    it('should allocate zero subordinate dependencies for default standard slot-based collage', () => {
      const { scope, instance } = createCollageUnit({ variant: 'standard' })

      expect(instance.binds).toEqual({})
      expect(instance.getBindsItem()).toEqual({})
      expect(instance.getList()).toEqual([])
      expect(instance.styles).toEqual({})
      instance.update()

      expect(instance.hasInstance('data')).toBe(false)
      expect(instance.hasInstance('elementItem')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('focusDirection')).toBe(false)
      expect(instance.hasInstance('grow')).toBe(false)
      expect(instance.hasInstance('masonryHorizontal')).toBe(false)
      expect(instance.hasInstance('masonryVertical')).toBe(false)
      expect(instance.hasInstance('model')).toBe(false)
      expect(instance.hasInstance('variant')).toBe(false)
      expect(instance.hasInstance('woven')).toBe(false)

      scope.stop()
    })

    it('should instantiate focusDirection lazily only when control is enabled', () => {
      const { scope, props, instance } = createCollageUnit({ control: false })

      expect(instance.binds).toEqual({})
      expect(instance.getBindsItem()).toEqual({})
      expect(instance.hasInstance('focusDirection')).toBe(false)

      props.control = true
      expect(instance.binds).toMatchObject({ tabindex: 0 })
      expect(instance.getBindsItem()).toMatchObject({ tabindex: -1 })
      expect(instance.hasInstance('focusDirection')).toBe(true)

      props.control = false
      expect(instance.binds).toEqual({})
      expect(instance.getBindsItem()).toEqual({})

      scope.stop()
    })

    it('should instantiate only the active variant helper and never unused ones', () => {
      const container = document.createElement('div')
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 1)

      const { scope, props, instance } = createCollageUnit(
        { variant: 'woven' },
        { container }
      )

      instance.update()
      expect(instance.hasInstance('variant')).toBe(true)
      expect(instance.hasInstance('elementItem')).toBe(true)
      expect(instance.hasInstance('woven')).toBe(true)
      expect(instance.hasInstance('grow')).toBe(false)
      expect(instance.hasInstance('masonryHorizontal')).toBe(false)
      expect(instance.hasInstance('masonryVertical')).toBe(false)

      props.variant = 'masonryHorizontal'
      instance.update()
      expect(instance.hasInstance('masonryHorizontal')).toBe(true)
      expect(instance.hasInstance('masonryVertical')).toBe(false)

      scope.stop()
    })
  })

  describe('Grid styles and cellSize formatting', () => {
    it.each([
      [160, { '--d1-collage-cell-size': '160px' }],
      [0, { '--d1-collage-cell-size': '0px' }],
      ['200', { '--d1-collage-cell-size': '200px' }],
      [' 240 ', { '--d1-collage-cell-size': '240px' }],
      ['12rem', { '--d1-collage-cell-size': '12rem' }],
      [' 10em ', { '--d1-collage-cell-size': '10em' }],
      ['', {}],
      ['   ', {}],
      [Number.NaN, {}],
      [Number.POSITIVE_INFINITY, {}],
      [undefined, {}]
    ])('should format cellSize=%o into styles=%o', (cellSize, expectedStyles) => {
      const { scope, instance } = createCollageUnit({ cellSize })

      expect(instance.styles).toEqual(expectedStyles)
      scope.stop()
    })
  })

  describe('Data normalization, selection model, and click handling', () => {
    it('should normalize images list and synchronize selected and modelSelected props', async () => {
      const emits = vi.fn() as unknown as ConstrEmit<CollageEmits>
      const { scope, props, instance } = createCollageUnit(
        {
          images: [
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' }
          ],
          selected: ['first'],
          control: true
        },
        { emits }
      )

      const initialList = instance.getList()
      expect(initialList).toHaveLength(2)
      expect(initialList[0].selected).toBe(true)
      expect(initialList[1].selected).toBe(false)
      expect(instance.hasInstance('data')).toBe(true)
      expect(instance.hasInstance('model')).toBe(true)

      // modelSelected takes priority over selected
      props.modelSelected = ['second']
      await nextTick()

      const updatedList = instance.getList()
      expect(updatedList[0].selected).toBe(false)
      expect(updatedList[1].selected).toBe(true)

      scope.stop()
    })

    it('should update model on click only when control is true while always emitting click events', async () => {
      const emits = vi.fn() as unknown as ConstrEmit<CollageEmits>
      const { scope, props, instance } = createCollageUnit(
        {
          images: [
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' }
          ],
          selected: [],
          control: false
        },
        { emits }
      )

      const clickEvent = new MouseEvent('click')

      // control=false -> readonly model (no selection change), click still emitted
      instance.onClick(clickEvent, { type: 'click', value: 'a', detail: undefined })
      await nextTick()
      expect(instance.i('model').get()).toEqual([])
      expect(emits).toHaveBeenCalledWith('click', clickEvent, { type: 'click', value: 'a', detail: undefined })
      expect(emits).toHaveBeenCalledWith('clickLite', { type: 'click', value: 'a', detail: undefined })

      // control=true -> toggles multiple selection and emits model updates
      props.control = true
      instance.onClick(clickEvent, { type: 'click', value: 'a', detail: undefined })
      await nextTick()
      expect(instance.i('model').get()).toEqual(['a'])
      expect(emits).toHaveBeenCalledWith('update:selected', ['a'])
      expect(emits).toHaveBeenCalledWith('update:modelSelected', ['a'])

      instance.onClick(clickEvent, { type: 'click', value: 'b', detail: undefined })
      await nextTick()
      expect(instance.i('model').get()).toEqual(['a', 'b'])

      scope.stop()
    })
  })

  describe('Dependency injection overrides', () => {
    it('should support overriding all subordinate constructors via constructors argument', () => {
      class CustomElement extends CollageElement {}
      class CustomGrow extends CollageGrow {}
      class CustomWoven extends CollageWoven {}
      class CustomHorizontal extends CollageMasonryHorizontal {}
      class CustomVertical extends CollageMasonryVertical {}
      class CustomVariant extends CollageVariant {}

      const { scope, instance } = createCollageUnit(
        { variant: 'woven' },
        {
          constructors: {
            elementItem: CustomElement,
            grow: CustomGrow,
            woven: CustomWoven,
            masonryHorizontal: CustomHorizontal,
            masonryVertical: CustomVertical,
            variant: CustomVariant
          }
        }
      )

      expect(instance.i('elementItem')).toBeInstanceOf(CustomElement)
      expect(instance.i('grow')).toBeInstanceOf(CustomGrow)
      expect(instance.i('woven')).toBeInstanceOf(CustomWoven)
      expect(instance.i('masonryHorizontal')).toBeInstanceOf(CustomHorizontal)
      expect(instance.i('masonryVertical')).toBeInstanceOf(CustomVertical)
      expect(instance.i('variant')).toBeInstanceOf(CustomVariant)

      scope.stop()
    })
  })
})
