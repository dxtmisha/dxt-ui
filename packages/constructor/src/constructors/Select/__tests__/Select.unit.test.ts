// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Select, type SelectConstructors } from '../Select'
import { SelectInput } from '../SelectInput'
import type { SelectProps } from '../props'

describe('Select (Unit)', () => {
  const naming = new DesignName('d1.select')

  describe('Lazy Initialization and DesignLogicAbstract Contract', () => {
    it('should lazily skip FieldFormInclude when name prop is omitted and instantiate it when name is provided', () => {
      const container = document.createElement('div')
      let withoutNameInstance: Select | undefined
      let withNameInstance: Select | undefined

      const app = createApp(defineComponent({
        setup() {
          withoutNameInstance = new Select(
            reactive<SelectProps>({ option: [{ label: 'Alpha', value: 'alpha' }] }),
            ref<HTMLElement | undefined>(),
            naming
          )
          withNameInstance = new Select(
            reactive<SelectProps>({ name: 'country', option: [{ label: 'Alpha', value: 'alpha' }] }),
            ref<HTMLElement | undefined>(),
            naming
          )
          return () => h('div')
        }
      }))

      app.mount(container)

      expect(withoutNameInstance?.hasInstance('event')).toBe(true)
      expect(withoutNameInstance?.hasInstance('validation')).toBe(true)
      expect(withoutNameInstance?.hasInstance('form')).toBe(false)
      expect(withoutNameInstance?.hasInstance('field')).toBe(false)
      expect(withoutNameInstance?.hasInstance('input')).toBe(false)
      expect(withNameInstance?.hasInstance('form')).toBe(true)

      app.unmount()
    })

    it('should allow overriding dependencies via constructors map', () => {
      const scope = effectScope()
      scope.run(() => {
        class CustomSelectInput extends SelectInput {
          override isEdit(): boolean {
            return true
          }
        }

        const constructors: Partial<SelectConstructors> = {
          input: CustomSelectInput
        }

        const select = new Select(
          reactive<SelectProps>({ editValue: false }),
          ref<HTMLElement | undefined>(),
          naming,
          undefined,
          undefined,
          undefined,
          constructors
        )

        expect(select.i('input')).toBeInstanceOf(CustomSelectInput)
        expect(select.i('input').isEdit()).toBe(true)
      })
      scope.stop()
    })
  })

  describe('Value Boundaries and Field Configuration', () => {
    it('should treat numeric 0 and string "0" as filled values via isZeroTrue', () => {
      const scope = effectScope()
      scope.run(() => {
        const numericZeroSelect = new Select(
          reactive<SelectProps>({ value: 0 }),
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(numericZeroSelect.i('value').get()).toBe(0)
        expect(numericZeroSelect.i('value').boolean).toBe(true)

        const stringZeroSelect = new Select(
          reactive<SelectProps>({ value: '0' }),
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(stringZeroSelect.i('value').boolean).toBe(true)
      })
      scope.stop()
    })

    it('should configure FieldInclude cancel mode as auto for multiple and none for single by default', () => {
      const scope = effectScope()
      scope.run(() => {
        const singleSelect = new Select(
          reactive<SelectProps>({ multiple: false, max: 5, iconArrowDown: 'arrow_down' }),
          ref<HTMLElement | undefined>(),
          naming
        )
        const multipleSelect = new Select(
          reactive<SelectProps>({ multiple: true, max: 5 }),
          ref<HTMLElement | undefined>(),
          naming
        )
        const explicitCancelSelect = new Select(
          reactive<SelectProps>({ multiple: false, cancel: 'always' }),
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(singleSelect.i('field').binds.value.cancel).toBe('none')
        expect(singleSelect.i('field').binds.value.iconTrailing).toBe('arrow_down')
        expect(singleSelect.i('field').binds.value.maxlength).toBe(5)

        expect(multipleSelect.i('field').binds.value.cancel).toBe('auto')
        expect(explicitCancelSelect.i('field').binds.value.cancel).toBe('always')
      })
      scope.stop()
    })
  })

  describe('Input Open Handler (onInputValue)', () => {
    it('should invoke toOpen on the mounted menu element safely', () => {
      const scope = effectScope()
      scope.run(() => {
        const toOpenSpy = vi.fn()
        const select = new Select(
          reactive<SelectProps>({ editValue: true }),
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(() => select.onInputValue()).not.toThrow()

        const menu = select.i('menu')
        vi.spyOn(menu, 'getElement').mockReturnValue({
          toOpen: toOpenSpy
        } as never)

        select.onInputValue()
        expect(toOpenSpy).toHaveBeenCalledTimes(1)
      })
      scope.stop()
    })
  })
})
