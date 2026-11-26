// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { SelectableArea } from '../SelectableArea'
import { SelectableAreaClassesData } from '../SelectableAreaClassesData'
import { SelectableAreaEmit } from '../SelectableAreaEmit'
import { SelectableAreaEvents } from '../SelectableAreaEvents'
import { SelectableAreaItem } from '../SelectableAreaItem'
import { SelectableAreaSquare } from '../SelectableAreaSquare'
import type { SelectableAreaPropsBasic } from '../props'

describe('SelectableArea (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createOrchestrator = (options: {
    props?: SelectableAreaPropsBasic
    emits?: ReturnType<typeof vi.fn>
    constructors?: ConstructorParameters<typeof SelectableArea>[6]
  } = {}) => {
    const scope = effectScope()
    const props = reactive<SelectableAreaPropsBasic>({ ...options.props })
    const element = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const naming = new DesignName('d1.selectableArea')
    let orchestrator!: SelectableArea

    scope.run(() => {
      orchestrator = new SelectableArea(
        props,
        element,
        naming,
        undefined,
        undefined,
        options.emits as unknown as ConstructorParameters<typeof SelectableArea>[5],
        options.constructors
      )
    })

    return { scope, props, element, naming, orchestrator }
  }

  describe('Lazy instantiation & dependency injection', () => {
    it('should eagerly initialize only model and item while keeping classesData, events, square, and emit lazy', () => {
      const { scope, orchestrator } = createOrchestrator({ emits: vi.fn() })

      expect(orchestrator.hasInstance('model')).toBe(true)
      expect(orchestrator.hasInstance('item')).toBe(true)

      expect(orchestrator.hasInstance('classesData')).toBe(false)
      expect(orchestrator.hasInstance('events')).toBe(false)
      expect(orchestrator.hasInstance('square')).toBe(false)
      expect(orchestrator.hasInstance('emit')).toBe(false)

      scope.stop()
    })

    it('should support dependency overrides for all constructor keys via camelCase constructors map', () => {
      class CustomClassesData extends SelectableAreaClassesData {}
      class CustomEmit extends SelectableAreaEmit {}
      class CustomEvents extends SelectableAreaEvents {}
      class CustomItem extends SelectableAreaItem {}
      class CustomModel extends ModelInclude<string[]> {}
      class CustomSquare extends SelectableAreaSquare {}

      const { scope, orchestrator } = createOrchestrator({
        emits: vi.fn(),
        constructors: {
          classesData: CustomClassesData,
          emit: CustomEmit,
          events: CustomEvents,
          item: CustomItem,
          model: CustomModel,
          square: CustomSquare
        }
      })

      expect(orchestrator.i('classesData')).toBeInstanceOf(CustomClassesData)
      expect(orchestrator.i('emit')).toBeInstanceOf(CustomEmit)
      expect(orchestrator.i('events')).toBeInstanceOf(CustomEvents)
      expect(orchestrator.i('item')).toBeInstanceOf(CustomItem)
      expect(orchestrator.i('model')).toBeInstanceOf(CustomModel)
      expect(orchestrator.i('square')).toBeInstanceOf(CustomSquare)

      scope.stop()
    })
  })

  describe('Public API getters and action methods', () => {
    it('should resolve tag with default fallback to div', () => {
      const { scope: scopeDefault, orchestrator: defaultArea } = createOrchestrator()
      expect(defaultArea.tag).toBe('div')

      const { scope: scopeCustom, orchestrator: customArea } = createOrchestrator({ props: { tag: 'section' } })
      expect(customArea.tag).toBe('section')

      const { scope: scopeEmpty, orchestrator: emptyTagArea } = createOrchestrator({ props: { tag: '' } })
      expect(emptyTagArea.tag).toBe('div')

      scopeDefault.stop()
      scopeCustom.stop()
      scopeEmpty.stop()
    })

    it('should expose root binds from events helper', () => {
      const { scope, orchestrator } = createOrchestrator()
      const binds = orchestrator.binds

      expect(binds).toHaveProperty('onMousedown', orchestrator.i('events').onMousedown)
      expect(binds).toHaveProperty('onTouchstart', orchestrator.i('events').onMousedown)
      expect(orchestrator.hasInstance('events')).toBe(true)

      scope.stop()
    })

    it('should expose slotData with classes, selected values, and click handler', () => {
      const { scope, orchestrator } = createOrchestrator({ props: { selected: ['a', 'b'] } })
      const slotData = orchestrator.slotData

      expect(slotData.className).toContain('d1-selectableArea__item')
      expect(slotData.className).toContain(orchestrator.i('classesData').getId())
      expect(slotData.classSelection).toBe('d1-selectableArea__item--selected')
      expect(slotData.classClick).toBe('d1-selectableArea__click')
      expect(slotData.selected).toEqual(['a', 'b'])
      expect(slotData.onClick).toBe(orchestrator.i('events').onClick)

      scope.stop()
    })

    it('should update and reset selection via setSelected and reset and emit v-model updates', async () => {
      const emits = vi.fn()
      const { scope, orchestrator } = createOrchestrator({ emits })

      orchestrator.setSelected(['item-1', 'item-2'])
      await nextTick()

      expect(orchestrator.i('item').get()).toEqual(['item-1', 'item-2'])
      expect(emits).toHaveBeenCalledWith('update:selected', ['item-1', 'item-2'])
      expect(emits).toHaveBeenCalledWith('update:modelSelected', ['item-1', 'item-2'])

      orchestrator.setSelected('item-3')
      await nextTick()
      expect(orchestrator.i('item').get()).toEqual(['item-3'])

      orchestrator.reset()
      await nextTick()
      expect(orchestrator.i('item').get()).toEqual([])
      expect(emits).toHaveBeenCalledWith('update:selected', [])

      scope.stop()
    })
  })
})
