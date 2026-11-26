// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { TabsNavigation } from '../../TabsNavigation'
import { SegmentControl } from '../SegmentControl'
import { defaultsSegmentControl, type SegmentControlProps } from '../props'

describe('SegmentControl (unit)', () => {
  it('should inherit TabsNavigation logic, ARIA, binds, and expose API', () => {
    const scope = effectScope()
    const props = reactive<SegmentControlProps>({
      list: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' }
      ],
      selected: 'one'
    })
    const emit = vi.fn()
    let instance!: SegmentControl

    scope.run(() => {
      instance = new SegmentControl(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.segmentControl'),
        undefined,
        undefined,
        emit
      )
    })

    expect(instance).toBeInstanceOf(TabsNavigation)
    expect(instance.aria).toEqual({
      'role': 'tablist',
      'aria-orientation': 'horizontal'
    })
    expect(instance.binds.tabindex).toBe(0)
    expect(typeof instance.binds.onFocus).toBe('function')
    expect(typeof instance.binds.onBlur).toBe('function')
    expect(Object.keys(instance.expose.ids())).toEqual(['one', 'two'])

    instance.onClick(new MouseEvent('click'), { value: 'two', type: 'click', detail: undefined })
    expect(emit).toHaveBeenCalledWith('update:selected', 'two')
    expect(emit).toHaveBeenCalledWith('update:modelSelected', 'two')

    scope.stop()
  })

  it('should define valid block alignment and disabled bleed in defaultsSegmentControl', () => {
    expect(defaultsSegmentControl.horizontalScrollAlign).toBe('block')
    expect(defaultsSegmentControl.horizontalScrollBleed).toBe(false)
  })
})
