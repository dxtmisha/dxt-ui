// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { SelectValue } from '../SelectValue'
import type { SelectValueProps } from '../props'

describe('SelectValue (Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('computes classes, placeholder state, and trailing icon lazily', () => {
    const props = reactive<SelectValueProps>({
      placeholder: 'Choose',
      multiple: true,
      iconCancel: 'close'
    })

    const scope = effectScope()
    let instance!: SelectValue

    scope.run(() => {
      instance = new SelectValue(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.selectValue')
      )
    })

    expect(instance.hasInstance('enabled')).toBe(false)
    expect(instance.hasInstance('event')).toBe(false)
    expect(instance.hasInstance('window')).toBe(false)

    expect(instance.isPlaceholder()).toBe(true)
    expect(instance.classes).toEqual({
      'd1-selectValue--placeholder': true,
      'd1-selectValue--multiple': true
    })

    expect(instance.iconTrailing).toMatchObject({
      icon: 'close',
      dynamic: true
    })
    expect(instance.hasInstance('enabled')).toBe(true)
    expect(instance.hasInstance('window')).toBe(true)

    props.disabled = true
    expect(instance.iconTrailing).toBeUndefined()

    props.value = [{ label: 'One', value: '1', index: '1', type: 'item' }]
    expect(instance.isPlaceholder()).toBe(false)

    scope.stop()
  })

  it('stops click propagation, prevents default, and delegates to EventClickInclude', () => {
    const emitSpy = vi.fn()
    const props = reactive<SelectValueProps>({})
    const scope = effectScope()
    let instance!: SelectValue

    scope.run(() => {
      instance = new SelectValue(
        props,
        ref<HTMLDivElement | undefined>(),
        new DesignName('d1.selectValue'),
        undefined,
        undefined,
        emitSpy as never
      )
    })

    const clickEvent = new MouseEvent('click', { cancelable: true })
    const stopSpy = vi.spyOn(clickEvent, 'stopPropagation')

    instance.onClick(clickEvent, { type: 'cancel', value: '1', detail: undefined })

    expect(clickEvent.defaultPrevented).toBe(true)
    expect(stopSpy).toHaveBeenCalledTimes(1)
    expect(emitSpy).toHaveBeenCalledWith('click', clickEvent, { type: 'cancel', value: '1', detail: undefined })
    expect(emitSpy).toHaveBeenCalledWith('clickLite', { type: 'cancel', value: '1', detail: undefined })

    scope.stop()
  })
})
