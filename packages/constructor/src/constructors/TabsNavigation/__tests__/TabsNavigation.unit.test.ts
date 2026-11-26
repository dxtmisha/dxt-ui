// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import type { TabsNavigationProps } from '../props'
import { TabsNavigation } from '../TabsNavigation'
import { TabsNavigationControl } from '../TabsNavigationControl'

describe('TabsNavigation (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createOrchestrator = (
    initialProps: TabsNavigationProps = {
      list: [
        { value: 'tab-1', label: 'Tab 1' },
        { value: 'tab-2', label: 'Tab 2' }
      ]
    },
    emits = vi.fn(),
    constructors?: ConstructorParameters<typeof TabsNavigation>[6]
  ) => {
    const scope = effectScope()
    const props = reactive<TabsNavigationProps>(initialProps)
    const element = ref<HTMLDivElement>()
    const naming = new DesignName('d1.tabsNavigation')
    let instance!: TabsNavigation

    scope.run(() => {
      instance = new TabsNavigation(
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

  it('should keep all subordinate dependencies lazy on instantiation', () => {
    const { scope, instance } = createOrchestrator()

    expect(instance.hasInstance('control')).toBe(false)
    expect(instance.hasInstance('data')).toBe(false)
    expect(instance.hasInstance('event')).toBe(false)
    expect(instance.hasInstance('focus')).toBe(false)
    expect(instance.hasInstance('ids')).toBe(false)
    expect(instance.hasInstance('indicator')).toBe(false)
    expect(instance.hasInstance('model')).toBe(false)
    expect(instance.hasInstance('scroll')).toBe(false)
    expect(instance.hasInstance('selected')).toBe(false)
    expect(instance.hasInstance('size')).toBe(false)

    scope.stop()
  })

  it('should expose WAI-ARIA tablist attributes and container binds without eagerly creating control', () => {
    const { scope, instance } = createOrchestrator()

    expect(instance.aria).toEqual({
      'role': 'tablist',
      'aria-orientation': 'horizontal'
    })

    const binds = instance.binds
    expect(binds.tabindex).toBe(0)
    expect(binds.role).toBe('tablist')
    expect(binds['aria-orientation']).toBe('horizontal')
    expect(typeof binds.onFocus).toBe('function')
    expect(typeof binds.onBlur).toBe('function')
    expect(instance.hasInstance('control')).toBe(false)

    // Calling onBlur before control exists must remain a no-op and not instantiate control
    ;(binds.onBlur as () => void)()
    expect(instance.hasInstance('control')).toBe(false)

    // Calling onFocus lazily instantiates control
    ;(binds.onFocus as () => void)()
    expect(instance.hasInstance('control')).toBe(true)

    ;(binds.onBlur as () => void)()
    scope.stop()
  })

  it('should lazily expose generated IDs map through expose.ids()', () => {
    const { scope, instance } = createOrchestrator()

    const expose = instance.expose
    expect(instance.hasInstance('ids')).toBe(false)

    const idsMap = expose.ids()
    expect(instance.hasInstance('ids')).toBe(true)
    expect(Object.keys(idsMap)).toEqual(['tab-1', 'tab-2'])

    scope.stop()
  })

  it('should handle onClick by lazily creating selected, model, and event and emitting expected events', () => {
    const emits = vi.fn()
    const { scope, instance } = createOrchestrator(
      {
        selected: 'tab-1',
        list: [
          { value: 'tab-1', label: 'Tab 1' },
          { value: 'tab-2', label: 'Tab 2' }
        ]
      },
      emits
    )

    const mouseEvent = new MouseEvent('click')
    instance.onClick(mouseEvent, { type: 'click', value: 'tab-2', detail: undefined })

    expect(instance.hasInstance('selected')).toBe(true)
    expect(instance.hasInstance('model')).toBe(true)
    expect(instance.hasInstance('event')).toBe(true)
    expect(instance.i('selected').item.value).toBe('tab-2')

    expect(emits).toHaveBeenCalledWith('update:selected', 'tab-2')
    expect(emits).toHaveBeenCalledWith('update:modelSelected', 'tab-2')
    expect(emits).toHaveBeenCalledWith('click', mouseEvent, { type: 'click', value: 'tab-2' })
    expect(emits).toHaveBeenCalledWith('clickLite', { type: 'click', value: 'tab-2' })

    scope.stop()
  })

  it('should support dependency injection overrides via constructors argument', () => {
    const focusSpy = vi.fn()

    class CustomControl extends TabsNavigationControl {
      override readonly onFocus = (): void => {
        focusSpy()
      }
    }

    const { scope, instance } = createOrchestrator(
      undefined,
      vi.fn(),
      { control: CustomControl }
    )

    ;(instance.binds.onFocus as () => void)()
    expect(focusSpy).toHaveBeenCalledTimes(1)

    scope.stop()
  })
})
