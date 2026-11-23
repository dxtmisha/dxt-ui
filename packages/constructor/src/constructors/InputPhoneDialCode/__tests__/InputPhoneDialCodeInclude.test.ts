// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { InputPhoneDialCodeInclude } from '../InputPhoneDialCodeInclude'
import type { InputPhoneDialCodePropsInclude } from '../basicTypes'
import type { InputPhoneDialCodeProps } from '../props'

describe('InputPhoneDialCodeInclude', () => {
  const naming = new DesignName('d1.inputPhone')

  it('should build binds non-destructively preserving inputPhoneDialCodeAttrs.disabled when props.disabled is undefined', () => {
    const props = reactive<InputPhoneDialCodePropsInclude<InputPhoneDialCodeProps>>({
      inputPhoneDialCodeAttrs: {
        disabled: true,
        labelType: 'code'
      }
    })
    const include = new InputPhoneDialCodeInclude(props, naming)

    expect(include.binds.value).toMatchObject({
      class: 'd1-inputPhone__inputPhoneDialCode',
      disabled: true,
      labelType: 'code'
    })

    props.inputPhoneDialCodeAttrs = { labelType: 'code' }
    props.disabled = false
    expect(include.binds.value.disabled).toBe(false)

    props.readonly = true
    expect(include.binds.value.disabled).toBe(false)
    expect(include.binds.value.readonly).toBe(true)

    props.readonly = false
    expect(include.binds.value.readonly).toBe(false)

    props.countryList = ['RU', 'BY']
    expect(include.binds.value.countryList).toEqual(['RU', 'BY'])
  })

  it('should render inputPhoneDialCode component with extra binds and custom attributes', () => {
    const rendered: Array<{ name: string, props: Record<string, unknown> }> = []
    const MockInputPhoneDialCode = {
      name: 'MockInputPhoneDialCode',
      render: () => h('div', 'dialCode')
    }
    const components = new DesignComponents({ inputPhoneDialCode: MockInputPhoneDialCode }, naming)
    vi.spyOn(components, 'render').mockImplementation((name, props) => {
      rendered.push({ name, props: props ?? {} })
      return [h('div', { class: 'mock-dial-code' })]
    })

    const include = new InputPhoneDialCodeInclude(
      { disabled: true },
      naming,
      components,
      () => ({ value: 'VN', labelType: 'name' })
    )

    const vnodes = include.render(undefined, { iconArrowDown: 'expand_more' })
    expect(vnodes).toHaveLength(1)
    expect(rendered[0]?.name).toBe('inputPhoneDialCode')
    expect(rendered[0]?.props).toMatchObject({
      disabled: true,
      value: 'VN',
      labelType: 'name',
      iconArrowDown: 'expand_more'
    })
  })

  it('should forward inputPhoneDialCodeAttrs search overrides without top-level search props', () => {
    const props = reactive<InputPhoneDialCodePropsInclude<InputPhoneDialCodeProps>>({
      inputPhoneDialCodeAttrs: {
        highlightLengthStart: 1,
        filterMode: true,
        menuCountryAttrs: {
          list: ['RU', 'BY']
        }
      }
    })
    const include = new InputPhoneDialCodeInclude(
      props,
      naming,
      undefined,
      () => ({
        showSearch: false
      })
    )

    expect(include.binds.value).toMatchObject({
      highlightLengthStart: 1,
      showSearch: false,
      filterMode: true,
      menuCountryAttrs: {
        list: ['RU', 'BY']
      }
    })
  })

  it('should support getter function props and preserve inputPhoneDialCodeAttrs.countryList when props.countryList is undefined', () => {
    const state = reactive<InputPhoneDialCodePropsInclude<InputPhoneDialCodeProps>>({
      inputPhoneDialCodeAttrs: {
        countryList: ['US', 'CA'],
        readonly: true
      }
    })
    const include = new InputPhoneDialCodeInclude(() => state, naming)

    expect(include.binds.value).toMatchObject({
      countryList: ['US', 'CA'],
      readonly: true
    })

    state.readonly = false
    expect(include.binds.value.readonly).toBe(true)
  })

  it('should return empty array when components registry is missing', () => {
    const include = new InputPhoneDialCodeInclude({}, naming)
    expect(include.render()).toEqual([])
  })
})
