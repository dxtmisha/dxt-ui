// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { MenuCountryInclude } from '../MenuCountryInclude'
import type { MenuCountryPropsInclude } from '../basicTypes'
import type { MenuCountryProps } from '../props'

describe('MenuCountryInclude', () => {
  const naming = new DesignName('d1.inputPhoneDialCode')

  it('should build binds non-destructively preserving menuCountryAttrs.disabled when props.disabled is undefined', () => {
    const props = reactive<MenuCountryPropsInclude<MenuCountryProps>>({
      menuCountryAttrs: {
        disabled: true,
        showPhoneCode: true
      }
    })
    const include = new MenuCountryInclude(props, naming)

    expect(include.binds.value).toMatchObject({
      disabled: true,
      showPhoneCode: true
    })

    props.disabled = false
    expect(include.binds.value.disabled).toBe(false)
  })

  it('should expose all proxy methods and render menuCountry component with slots and extra binds', () => {
    const rendered: Array<{ name: string, props: Record<string, unknown> }> = []
    const MockMenuCountry = {
      name: 'MockMenuCountry',
      render: () => h('div', 'menuCountry')
    }
    const components = new DesignComponents({ menuCountry: MockMenuCountry }, naming)
    vi.spyOn(components, 'render').mockImplementation((name, props) => {
      rendered.push({ name, props: props ?? {} })
      return [h('div', { class: 'mock-menu-country' })]
    })

    const include = new MenuCountryInclude(
      { disabled: true },
      naming,
      components,
      () => ({ showPhoneCode: true })
    )

    const vnodes = include.render({ control: () => h('button', 'open') }, { selected: 'VN' })
    expect(vnodes).toHaveLength(1)
    expect(rendered[0]?.name).toBe('menuCountry')
    expect(rendered[0]?.props).toMatchObject({
      disabled: true,
      showPhoneCode: true,
      selected: 'VN'
    })

    const expose = include.expose
    expect(typeof expose.getId).toBe('function')
    expect(typeof expose.getOpen).toBe('function')
    expect(typeof expose.getControl).toBe('function')
    expect(typeof expose.setOpen).toBe('function')
    expect(typeof expose.toOpen).toBe('function')
    expect(typeof expose.toClose).toBe('function')
    expect(typeof expose.toggle).toBe('function')
    expect(typeof expose.isSelected).toBe('function')
    expect(typeof expose.getSelectedList).toBe('function')
    expect(typeof expose.getSelectedNames).toBe('function')
    expect(typeof expose.getSelectedValues).toBe('function')
    expect(typeof expose.loading).toBe('function')
    expect(typeof expose.previous).toBe('function')
    expect(typeof expose.next).toBe('function')
    expect(expose.getMenuCountryElement().value).toBeUndefined()
  })
})
