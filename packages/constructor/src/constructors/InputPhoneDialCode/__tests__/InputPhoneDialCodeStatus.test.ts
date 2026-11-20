// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'

import { InputPhoneDialCodeStatus } from '../InputPhoneDialCodeStatus'
import type { InputPhoneDialCodeProps } from '../props'

describe('InputPhoneDialCodeStatus', () => {
  it('should resolve binds cleanly across disabled, readonly, countryList, and menuCountryAttrs.list', () => {
    const props = reactive<InputPhoneDialCodeProps>({})
    const status = new InputPhoneDialCodeStatus(props)

    expect(status.isReadonly()).toBe(false)
    expect(status.isBlocked()).toBe(false)
    expect(status.binds).toEqual({})
    expect(status.bindsMenu).toEqual({})

    props.disabled = true
    expect(status.isBlocked()).toBe(true)
    expect(status.binds).toEqual({ disabled: true })
    expect(status.bindsMenu).toEqual({ disabled: true })

    props.disabled = false
    props.readonly = true
    expect(status.isReadonly()).toBe(true)
    expect(status.isBlocked()).toBe(true)
    expect(status.binds).toEqual({ disabled: false, readonly: true })
    expect(status.bindsMenu).toEqual({ disabled: true })

    props.readonly = false
    props.countryList = ['RU']
    expect(status.isReadonly()).toBe(true)
    expect(status.isBlocked()).toBe(true)
    expect(status.binds).toEqual({ disabled: false, readonly: true })
    expect(status.bindsMenu).toEqual({ disabled: true })

    props.countryList = ['DO']
    expect(status.isReadonly()).toBe(false)
    expect(status.isBlocked()).toBe(false)
    expect(status.binds).toEqual({ disabled: false })
    expect(status.bindsMenu).toEqual({})

    props.countryList = undefined
    props.menuCountryAttrs = { list: ['VN'] }
    expect(status.isReadonly()).toBe(true)
    expect(status.binds).toEqual({ disabled: false, readonly: true })

    props.menuCountryAttrs = { list: [] }
    expect(status.isReadonly()).toBe(true)
  })
})
