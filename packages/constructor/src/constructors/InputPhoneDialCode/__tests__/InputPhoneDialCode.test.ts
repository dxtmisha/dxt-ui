// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { InputPhoneDialCode } from '../InputPhoneDialCode'
import type { InputPhoneDialCodeProps } from '../props'

describe('InputPhoneDialCode', () => {
  it('should disable window focus return in menuAttrs and forward onWindow event', () => {
    const scope = effectScope()
    const props: InputPhoneDialCodeProps = reactive({
      menuCountryAttrs: {
        menuAttrs: {
          showSearch: true
        }
      }
    })
    const element = ref<HTMLElement>()
    const naming = new DesignName('d1.inputPhoneDialCode')
    const emits = vi.fn()

    const dialCode = scope.run(() => new InputPhoneDialCode(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits as any
    ))!

    const menuBinds = dialCode.menu.binds.value as any
    expect(menuBinds.menuAttrs?.windowAttrs?.disableFocusReturn).toBe(true)
    expect(menuBinds.menuAttrs?.showSearch).toBe(true)

    const options = {
      id: 'window-1',
      element: document.createElement('div'),
      control: document.createElement('button'),
      open: false
    }
    menuBinds.onWindow?.(options)

    expect(emits).toHaveBeenCalledWith('window', options)

    scope.stop()
  })
})
