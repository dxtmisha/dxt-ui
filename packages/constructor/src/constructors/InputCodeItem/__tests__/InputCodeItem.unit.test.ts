// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { InputCodeItem } from '../InputCodeItem'
import type { InputCodeItemProps } from '../props'

describe('InputCodeItem (Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should lazily instantiate skeleton and text only when enabled by canCreate', () => {
    const elementRef = ref<HTMLDivElement | undefined>(document.createElement('div'))
    const props = reactive<InputCodeItemProps>({
      name: 'otp',
      disabled: false
    })

    const scope = effectScope()
    let instance!: InputCodeItem

    scope.run(() => {
      instance = new InputCodeItem(props, elementRef, new DesignName('d1.inputCodeItem'))
    })

    expect(instance.hasInstance('skeleton')).toBe(false)
    expect(instance.hasInstance('text')).toBe(false)

    expect(instance.classes).toEqual({})
    expect(instance.aria).toEqual({})
    expect(instance.hasInstance('skeleton')).toBe(false)
    expect(instance.hasInstance('text')).toBe(false)
    expect(instance.getName()).toBe('otp')

    scope.stop()
  })

  it('should compute aria attributes with index interpolation, skeleton classes, inputBinds, and expose', () => {
    const root = document.createElement('div')
    const input = document.createElement('input')
    root.appendChild(input)
    const focusSpy = vi.spyOn(input, 'focus')

    const props = reactive<InputCodeItemProps>({
      name: 'otp',
      index: 0,
      disabled: true,
      error: true,
      isSkeleton: true,
      textSymbol: 'Digit [index]',
      placeholder: '*'
    })

    const scope = effectScope()
    let instance!: InputCodeItem

    scope.run(() => {
      instance = new InputCodeItem(props, ref(root), new DesignName('d1.inputCodeItem'))
    })

    expect(instance.aria).toEqual({
      'aria-disabled': 'true',
      'aria-invalid': 'true',
      'aria-label': 'Digit 1'
    })
    expect(instance.hasInstance('text')).toBe(true)

    expect(instance.classes).toHaveProperty('d1-skeleton__background')
    expect(instance.hasInstance('skeleton')).toBe(true)

    const binds = instance.inputBinds
    expect(binds.name).toBe('otp__0')
    expect(binds.placeholder).toBeUndefined()
    expect(binds['data-code']).toBe(0)

    instance.expose.set('9')
    expect(instance.expose.getValue()).toBe('9')
    instance.expose.setTabindex(-1)
    expect(instance.inputBinds.tabindex).toBe(-1)
    instance.expose.focusInput()
    expect(focusSpy).toHaveBeenCalledTimes(1)
    instance.expose.reset()
    expect(instance.expose.getValue()).toBe('')

    scope.stop()
  })
})
