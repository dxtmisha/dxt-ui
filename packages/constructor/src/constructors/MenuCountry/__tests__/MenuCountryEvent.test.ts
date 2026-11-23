// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { type ListSelectedList } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import type { WindowEmitOptions } from '../../Window'
import { MenuCountryEvent } from '../MenuCountryEvent'

describe('MenuCountryEvent', () => {
  it('should emit window, updateValue, update:selected, and click events and expose binds', () => {
    const emits = vi.fn()
    const eventClick = new EventClickInclude(undefined, undefined, emits)
    const model = new ModelInclude<ListSelectedList | undefined>('selected', emits)
    const countryEvent = new MenuCountryEvent(
      () => eventClick,
      () => model,
      emits
    )

    const binds = countryEvent.binds
    expect(binds.onClick).toBe(countryEvent.onClick)
    expect(binds.onWindow).toBe(countryEvent.onWindow)
    expect(binds['onUpdate:selected']).toBe(countryEvent.onUpdateSelected)
    expect(binds.onUpdateValue).toBe(countryEvent.onUpdateValue)

    const windowOptions: WindowEmitOptions = {
      id: 'menu-country-win',
      element: document.createElement('div'),
      control: document.createElement('button'),
      open: true
    }

    countryEvent.onWindow(windowOptions)
    expect(emits).toHaveBeenCalledWith('window', windowOptions)

    countryEvent.onUpdateValue('US')
    expect(emits).toHaveBeenCalledWith('updateValue', 'US')

    countryEvent.onUpdateValue(undefined)
    expect(emits).toHaveBeenCalledWith('updateValue', undefined)

    countryEvent.onUpdateSelected(['US'])
    expect(emits).toHaveBeenCalledWith('update:selected', ['US'])
    expect(emits).toHaveBeenCalledWith('update:modelSelected', ['US'])

    countryEvent.onClick(new MouseEvent('click'), { type: 'item', value: 'US', detail: undefined })
    expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), { type: 'item', value: 'US' })

    // Falsy boundary values
    countryEvent.onUpdateValue(0)
    expect(emits).toHaveBeenCalledWith('updateValue', 0)
    countryEvent.onUpdateValue(false)
    expect(emits).toHaveBeenCalledWith('updateValue', false)
    countryEvent.onUpdateValue('')
    expect(emits).toHaveBeenCalledWith('updateValue', '')
  })

  it('should safely handle undefined emits across all event handlers', () => {
    const eventClick = new EventClickInclude(undefined, undefined, undefined)
    const model = new ModelInclude<ListSelectedList | undefined>('selected', undefined)
    const countryEvent = new MenuCountryEvent(() => eventClick, () => model, undefined)

    expect(() => {
      countryEvent.onClick(new MouseEvent('click'), { type: 'item', value: 'VN', detail: undefined })
      countryEvent.onUpdateSelected('VN')
      countryEvent.onUpdateValue('VN')
      countryEvent.onWindow({
        id: 'win-no-emit',
        element: document.createElement('div'),
        control: document.createElement('button'),
        open: false
      })
    }).not.toThrow()
  })
})
