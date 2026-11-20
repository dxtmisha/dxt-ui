// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName, Geo } from '@dxtmisha/functional'

import { InputPhoneDialCode, type InputPhoneDialCodeConstructors } from '../InputPhoneDialCode'
import type { InputPhoneDialCodeProps } from '../props'
import type { InputPhoneDialCodeEmits } from '../types'

describe('InputPhoneDialCode (Unit)', () => {
  const naming = new DesignName('d1.inputPhoneDialCode')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should keep all constructorItems uninstantiated until accessed (lazy loading)', () => {
    const scope = effectScope()
    const props = reactive<InputPhoneDialCodeProps>({})
    const element = ref<HTMLDivElement>()

    const dialCode = scope.run(() => new InputPhoneDialCode(
      props,
      element,
      naming
    ))!

    expect(dialCode.hasInstance('button')).toBe(false)
    expect(dialCode.hasInstance('event')).toBe(false)
    expect(dialCode.hasInstance('events')).toBe(false)
    expect(dialCode.hasInstance('item')).toBe(false)
    expect(dialCode.hasInstance('menu')).toBe(false)
    expect(dialCode.hasInstance('model')).toBe(false)
    expect(dialCode.hasInstance('status')).toBe(false)

    scope.stop()
  })

  it('should disable window focus return in menuAttrs while preserving user attrs and forward onWindow', () => {
    const scope = effectScope()
    const props = reactive<InputPhoneDialCodeProps>({
      menuCountryAttrs: {
        menuAttrs: {
          showSearch: true,
          windowAttrs: {
            persistent: true
          }
        }
      }
    })
    const element = ref<HTMLDivElement>()
    const emits = vi.fn()

    const dialCode = scope.run(() => new InputPhoneDialCode(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits as unknown as ConstrEmit<InputPhoneDialCodeEmits>
    ))!

    const menuBinds = dialCode.i('menu').binds.value
    expect(menuBinds.disableFocusReturn).toBe(true)
    expect(menuBinds.menuAttrs?.windowAttrs?.persistent).toBe(true)
    expect(menuBinds.menuAttrs?.showSearch).toBe(true)
    expect(menuBinds.showPhoneCode).toBe(true)

    const options = {
      id: 'window-1',
      element: document.createElement('div'),
      control: document.createElement('button'),
      open: false
    }
    dialCode.i('events').onWindow(options)
    expect(emits).toHaveBeenCalledWith('window', options)

    scope.stop()
  })

  it('should resolve model value from modelSelected, value, and Geo.getCountry() fallback reactively', async () => {
    const scope = effectScope()
    const props = reactive<InputPhoneDialCodeProps>({})
    const element = ref<HTMLDivElement>()
    const emits = vi.fn()

    const dialCode = scope.run(() => new InputPhoneDialCode(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits as unknown as ConstrEmit<InputPhoneDialCodeEmits>
    ))!

    expect(dialCode.i('model').get()).toBe(Geo.getCountry())

    props.value = 'VN'
    await nextTick()
    expect(dialCode.i('model').get()).toBe('VN')

    props.modelSelected = 'JP'
    await nextTick()
    expect(dialCode.i('model').get()).toBe('JP')

    props.modelSelected = undefined
    await nextTick()
    expect(dialCode.i('model').get()).toBe('VN')

    scope.stop()
  })

  it('should update model and emit update:selected and updateValue on onUpdate and onClick', () => {
    const scope = effectScope()
    const props = reactive<InputPhoneDialCodeProps>({ value: 'US' })
    const element = ref<HTMLDivElement>()
    const emits = vi.fn()

    const dialCode = scope.run(() => new InputPhoneDialCode(
      props,
      element,
      naming,
      undefined,
      undefined,
      emits as unknown as ConstrEmit<InputPhoneDialCodeEmits>
    ))!

    dialCode.i('events').onUpdate('DE')
    expect(dialCode.i('model').get()).toBe('DE')
    expect(emits).toHaveBeenCalledWith('updateValue', 'DE')

    const mouseEvent = new MouseEvent('click')
    dialCode.i('events').onClick(mouseEvent, { type: 'item', value: 'FR', detail: { code: '+33' } })
    expect(dialCode.i('model').get()).toBe('FR')
    expect(emits).toHaveBeenCalledWith('click', mouseEvent, { type: 'item', value: 'FR', detail: { code: '+33' } })
    expect(emits).toHaveBeenCalledWith('clickLite', { type: 'item', value: 'FR', detail: { code: '+33' } })

    emits.mockClear()
    dialCode.i('events').onClick(mouseEvent, {
      type: 'group',
      value: [{ index: 'DO', value: 'DO' }, { index: 'DO-1-829', value: 'DO-1-829' }],
      detail: undefined
    })
    expect(dialCode.i('model').get()).toBe('FR')
    expect(emits).not.toHaveBeenCalled()

    scope.stop()
  })

  it('should build bindsButton across labelType variants, disabled state, and open menu state', () => {
    const scope = effectScope()
    const props = reactive<InputPhoneDialCodeProps>({
      iconArrowDown: 'keyboard_arrow_down',
      labelType: 'code'
    })
    const element = ref<HTMLDivElement>()

    const selectedList = ref([{
      icon: 'flag-vn',
      caption: '+84',
      label: 'Vietnam',
      value: 'VN'
    }])
    const getSelectedList = vi.fn(() => selectedList.value)
    const getOpen = vi.fn(() => true)

    class MockMenuCountryInclude {
      getElement() {
        return {
          getSelectedList,
          getOpen
        }
      }
    }

    const dialCode = scope.run(() => new InputPhoneDialCode(
      props,
      element,
      naming,
      undefined,
      undefined,
      undefined,
      {
        menu: MockMenuCountryInclude as unknown as InputPhoneDialCodeConstructors['menu']
      }
    ))!

    expect(dialCode.bindsButton).toEqual({
      icon: 'flag-vn',
      iconTrailing: 'keyboard_arrow_down',
      iconTurn: true,
      label: '+84'
    })

    props.labelType = 'name'
    expect(dialCode.bindsButton).toEqual({
      icon: 'flag-vn',
      iconTrailing: 'keyboard_arrow_down',
      iconTurn: true,
      label: 'Vietnam'
    })

    props.labelType = 'none'
    expect(dialCode.bindsButton).toEqual({
      icon: 'flag-vn',
      iconTrailing: 'keyboard_arrow_down',
      iconTurn: true
    })

    props.disabled = true
    expect(dialCode.bindsButton).toEqual({
      disabled: true,
      icon: 'flag-vn',
      iconTrailing: undefined,
      iconTurn: true
    })

    props.disabled = false
    selectedList.value = []
    expect(dialCode.bindsButton).toEqual({
      disabled: false,
      icon: undefined,
      iconTrailing: 'keyboard_arrow_down',
      iconTurn: true
    })

    props.readonly = true
    selectedList.value = [{
      icon: 'flag-vn',
      caption: '+84',
      label: 'Vietnam',
      value: 'VN'
    }]
    expect(dialCode.bindsButton).toEqual({
      disabled: false,
      readonly: true,
      icon: 'flag-vn',
      iconTrailing: undefined,
      iconTurn: true
    })
    expect(dialCode.bindsMenu.disabled).toBe(true)

    props.readonly = false
    props.menuCountryAttrs = { list: ['RU'] }
    expect(dialCode.bindsButton).toEqual({
      disabled: false,
      readonly: true,
      icon: 'flag-vn',
      iconTrailing: undefined,
      iconTurn: true
    })
    expect(dialCode.bindsMenu.disabled).toBe(true)

    props.menuCountryAttrs = { list: ['DO'] }
    expect(dialCode.bindsButton).toEqual({
      disabled: false,
      icon: 'flag-vn',
      iconTrailing: 'keyboard_arrow_down',
      iconTurn: true
    })
    expect(dialCode.bindsMenu.disabled).toBeUndefined()

    props.menuCountryAttrs = { list: ['US', 'DE'] }
    expect(dialCode.bindsButton.iconTrailing).toBe('keyboard_arrow_down')
    expect(dialCode.bindsMenu.disabled).toBeUndefined()

    scope.stop()
  })

  it('should support DI overrides for all constructors', () => {
    const scope = effectScope()
    const customButton = vi.fn()
    const customEvent = vi.fn()
    const customMenu = vi.fn()
    const customModel = vi.fn()

    const dialCode = scope.run(() => new InputPhoneDialCode(
      {},
      ref<HTMLDivElement>(),
      naming,
      undefined,
      undefined,
      undefined,
      {
        button: customButton as unknown as InputPhoneDialCodeConstructors['button'],
        event: customEvent as unknown as InputPhoneDialCodeConstructors['event'],
        menu: customMenu as unknown as InputPhoneDialCodeConstructors['menu'],
        model: customModel as unknown as InputPhoneDialCodeConstructors['model']
      }
    ))!

    dialCode.i('button')
    dialCode.i('menu')
    dialCode.i('model')

    expect(customButton).toHaveBeenCalledTimes(1)
    expect(customMenu).toHaveBeenCalledTimes(1)
    expect(customModel).toHaveBeenCalledTimes(1)
    expect(customEvent).toHaveBeenCalledTimes(1)

    scope.stop()
  })
})
