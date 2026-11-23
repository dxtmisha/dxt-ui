// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { computed, effectScope, reactive } from 'vue'
import type { ConstrEmit, ListSelectedList } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelValueInclude } from '../../../classes/ModelValueInclude'
import type { WindowEmitOptions } from '../../Window'
import { InputPhoneDialCodeEvent } from '../InputPhoneDialCodeEvent'
import type { InputPhoneDialCodeEmits } from '../types'

describe('InputPhoneDialCodeEvent', () => {
  it('should emit window, updateValue, and click events while ignoring group and array items', () => {
    const scope = effectScope()
    const emits = vi.fn()
    const valueRef = reactive({ value: 'US' })

    scope.run(() => {
      const eventClick = new EventClickInclude(undefined, undefined, emits as unknown as ConstrEmit)
      const model = new ModelValueInclude<ListSelectedList | undefined>(
        'selected',
        emits as unknown as ConstrEmit,
        undefined,
        computed(() => valueRef.value)
      )
      const dialCodeEvent = new InputPhoneDialCodeEvent(
        () => eventClick,
        () => model,
        emits as unknown as ConstrEmit<InputPhoneDialCodeEmits>
      )

      const binds = dialCodeEvent.binds
      expect(binds.onClick).toBe(dialCodeEvent.onClick)
      expect(binds.onUpdateValue).toBe(dialCodeEvent.onUpdate)
      expect(binds.onWindow).toBe(dialCodeEvent.onWindow)

      const windowOptions: WindowEmitOptions = {
        id: 'dial-code-window',
        element: document.createElement('div'),
        control: document.createElement('button'),
        open: true
      }
      dialCodeEvent.onWindow(windowOptions)
      expect(emits).toHaveBeenCalledWith('window', windowOptions)

      dialCodeEvent.onUpdate('DE')
      expect(model.get()).toBe('DE')
      expect(emits).toHaveBeenCalledWith('updateValue', 'DE')

      dialCodeEvent.onUpdate(undefined)
      expect(model.get()).toBeUndefined()
      expect(emits).toHaveBeenCalledWith('updateValue', undefined)

      const mouseEvent = new MouseEvent('click')
      dialCodeEvent.onClick(mouseEvent, { type: 'item', value: 'FR', detail: { code: '+33' } })
      expect(model.get()).toBe('FR')
      expect(emits).toHaveBeenCalledWith('click', mouseEvent, { type: 'item', value: 'FR', detail: { code: '+33' } })
      expect(emits).toHaveBeenCalledWith('clickLite', { type: 'item', value: 'FR', detail: { code: '+33' } })

      emits.mockClear()
      dialCodeEvent.onClick(mouseEvent, {
        type: 'group',
        value: [{ index: 'DO', value: 'DO' }, { index: 'DO-1-829', value: 'DO-1-829' }],
        detail: undefined
      })
      expect(model.get()).toBe('FR')
      expect(emits).not.toHaveBeenCalled()

      dialCodeEvent.onClick(mouseEvent, {
        type: 'item',
        value: ['DO', 'DO-1-829'],
        detail: undefined
      })
      expect(model.get()).toBe('FR')
      expect(emits).not.toHaveBeenCalled()
    })

    scope.stop()
  })

  it('should keep eventClick lazy until a non-group click is dispatched and handle missing emits safely', () => {
    const scope = effectScope()
    const eventFactory = vi.fn(() => new EventClickInclude())

    scope.run(() => {
      const model = new ModelValueInclude<ListSelectedList | undefined>(
        'selected',
        undefined,
        undefined,
        computed(() => 'US')
      )
      const dialCodeEvent = new InputPhoneDialCodeEvent(
        eventFactory,
        () => model
      )

      const mouseEvent = new MouseEvent('click')
      dialCodeEvent.onClick(mouseEvent, { type: 'group', value: 'DO', detail: undefined })
      expect(eventFactory).not.toHaveBeenCalled()

      dialCodeEvent.onUpdate('VN')
      expect(model.get()).toBe('VN')
      expect(eventFactory).not.toHaveBeenCalled()

      dialCodeEvent.onWindow({
        id: 'win',
        element: document.createElement('div'),
        control: document.createElement('button'),
        open: false
      })
      expect(eventFactory).not.toHaveBeenCalled()

      dialCodeEvent.onClick(mouseEvent, { type: 'item', value: 'JP', detail: undefined })
      expect(eventFactory).toHaveBeenCalledTimes(1)
      expect(model.get()).toBe('JP')
    })

    scope.stop()
  })
})
