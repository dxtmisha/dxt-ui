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
  it('should emit window, updateValue, and click events while ignoring group items', () => {
    const scope = effectScope()
    const emits = vi.fn()
    const valueRef = reactive({ value: 'US' })

    scope.run(() => {
      const eventClick = new EventClickInclude(undefined, undefined, emits as unknown as ConstrEmit)
      const model = new ModelValueInclude<ListSelectedList | undefined>(
        'selected',
        emits as unknown as ConstrEmit,
        eventClick,
        computed(() => valueRef.value)
      )
      const dialCodeEvent = new InputPhoneDialCodeEvent(
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
    })

    scope.stop()
  })
})
