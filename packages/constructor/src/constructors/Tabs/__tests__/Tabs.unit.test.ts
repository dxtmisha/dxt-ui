// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName, type ListSelectedList } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import type { TabsProps } from '../props'
import { Tabs, type TabsConstructors } from '../Tabs'
import { TabsSelected } from '../TabsSelected'

describe('Tabs (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createOrchestrator = (
    initialProps: TabsProps = {
      tabs: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    },
    emits = vi.fn(),
    constructors?: Partial<TabsConstructors>
  ) => {
    const scope = effectScope()
    const props = reactive<TabsProps>(initialProps)
    const element = ref<HTMLDivElement>()
    const naming = new DesignName('d1.tabs')
    let instance!: Tabs

    scope.run(() => {
      instance = new Tabs(
        props,
        element,
        naming,
        undefined,
        undefined,
        emits as never,
        constructors
      )
    })

    return {
      scope,
      props,
      element,
      naming,
      emits,
      instance
    }
  }

  it('should keep all subordinate dependencies lazy upon instantiation', () => {
    const { scope, instance } = createOrchestrator()

    expect(instance.hasInstance('event')).toBe(false)
    expect(instance.hasInstance('model')).toBe(false)
    expect(instance.hasInstance('motionAxis')).toBe(false)
    expect(instance.hasInstance('selected')).toBe(false)
    expect(instance.hasInstance('tabsNavigation')).toBe(false)

    scope.stop()
  })

  it('should return lazy expose methods that only create EventClickInclude when called', () => {
    const { scope, instance } = createOrchestrator()

    const exposed = instance.expose
    expect(instance.hasInstance('event')).toBe(false)

    expect(exposed.getValue?.()).toBeUndefined()
    expect(instance.hasInstance('event')).toBe(true)
    expect(exposed.getDetail?.()).toBeUndefined()

    scope.stop()
  })

  it('should respect tabsNavigation canCreate guard via callInstance when tabs and tabsNavigationAttrs are absent', () => {
    const { scope, props, instance } = createOrchestrator({})

    const skippedRender = instance.callInstance('tabsNavigation', item => item.render(), [])
    expect(skippedRender).toEqual([])
    expect(instance.hasInstance('tabsNavigation')).toBe(false)

    const skippedId = instance.callInstance('tabsNavigation', item => item.ids?.home)
    expect(skippedId).toBeUndefined()
    expect(instance.hasInstance('tabsNavigation')).toBe(false)

    // Once tabsNavigationAttrs becomes present, canCreate allows lazy creation
    props.tabsNavigationAttrs = { divider: true }
    const createdIds = instance.callInstance('tabsNavigation', item => item.ids)
    expect(createdIds).toEqual({})
    expect(instance.hasInstance('tabsNavigation')).toBe(true)

    // Once created, callInstance continues to invoke callback even if prop clears
    props.tabsNavigationAttrs = undefined
    expect(instance.callInstance('tabsNavigation', item => item.ids)).toEqual({})

    scope.stop()
  })

  it('should wire tabsNavigation extra bindings lazily for selected, click, and update:selected', () => {
    const emits = vi.fn()
    const { scope, instance } = createOrchestrator(
      {
        selected: 'tab-1',
        tabs: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' }
        ]
      },
      emits
    )

    const navigation = instance.i('tabsNavigation')
    const binds = navigation.binds.value

    // Accessing binds evaluates selected, but must keep event and model lazy
    expect(binds.selected).toBe('tab-1')
    expect(instance.hasInstance('selected')).toBe(true)
    expect(instance.hasInstance('event')).toBe(false)
    expect(instance.hasInstance('model')).toBe(false)

    // Triggering onUpdate:selected lazily instantiates model and emits update events
    ;(binds['onUpdate:selected'] as (selected?: ListSelectedList) => void)('tab-2')
    expect(instance.hasInstance('model')).toBe(true)
    expect(instance.i('selected').item.value).toBe('tab-2')
    expect(emits).toHaveBeenCalledWith('update:selected', 'tab-2')
    expect(emits).toHaveBeenCalledWith('update:modelSelected', 'tab-2')

    // Triggering onClick lazily instantiates event and emits click + clickLite
    const mouseEvent = new MouseEvent('click')
    ;(binds.onClick as (event: MouseEvent, options?: { type: string, value: string }) => void)(
      mouseEvent,
      { type: 'click', value: 'tab-2' }
    )
    expect(instance.hasInstance('event')).toBe(true)
    expect(emits).toHaveBeenCalledWith('click', mouseEvent, { type: 'click', value: 'tab-2' })
    expect(emits).toHaveBeenCalledWith('clickLite', { type: 'click', value: 'tab-2' })

    scope.stop()
  })

  it('should pass safe stringified selected value to MotionAxisInclude without stringifying undefined', () => {
    const { scope: emptyScope, instance: emptyInstance } = createOrchestrator({})

    expect(emptyInstance.i('motionAxis').selectedItem).toBeUndefined()
    expect(emptyInstance.hasInstance('selected')).toBe(true)
    emptyScope.stop()

    const { scope: numericScope, instance: numericInstance } = createOrchestrator({
      modelSelected: 0,
      tabs: [
        { value: 0, label: 'Zero' },
        { value: 1, label: 'One' }
      ]
    })

    expect(numericInstance.i('motionAxis').selectedItem).toBe('0')
    numericInstance.i('selected').set(1)
    expect(numericInstance.i('motionAxis').selectedItem).toBe('1')
    numericScope.stop()
  })

  it('should support dependency injection overrides via constructors parameter', () => {
    const emitSpy = vi.fn()
    const clickSpy = vi.fn()

    class CustomModel extends ModelInclude<ListSelectedList | undefined> {
      override emit(value: ListSelectedList | undefined): void {
        emitSpy(value)
      }
    }

    class CustomEvent extends EventClickInclude {
      override readonly onClick = (event: MouseEvent): void => {
        clickSpy(event)
      }
    }

    class CustomSelected extends TabsSelected {
      override is(): boolean {
        return true
      }
    }

    const { scope, instance } = createOrchestrator(
      {
        selected: 'tab-1',
        tabs: [{ value: 'tab-1', label: 'Tab 1' }]
      },
      vi.fn(),
      {
        event: CustomEvent,
        model: CustomModel,
        selected: CustomSelected
      }
    )

    expect(instance.i('selected')).toBeInstanceOf(CustomSelected)
    expect(instance.i('selected').is('anything')).toBe(true)

    instance.i('selected').set('tab-2')
    expect(emitSpy).toHaveBeenCalledWith('tab-2')

    const binds = instance.i('tabsNavigation').binds.value
    const clickEvent = new MouseEvent('click')
    ;(binds.onClick as (event: MouseEvent) => void)(clickEvent)
    expect(clickSpy).toHaveBeenCalledWith(clickEvent)

    scope.stop()
  })
})
