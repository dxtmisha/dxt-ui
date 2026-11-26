// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { MenuLanguageInclude } from '../MenuLanguageInclude'
import type { MenuLanguagePropsInclude } from '../basicTypes'
import type { MenuLanguageProps } from '../props'

describe('MenuLanguageInclude', () => {
  const naming = new DesignName('d1.header')

  it('should build binds non-destructively preserving menuLanguageAttrs.disabled when props.disabled is undefined', () => {
    const props = reactive<MenuLanguagePropsInclude<MenuLanguageProps>>({
      menuLanguageAttrs: {
        disabled: true,
        showSearch: true
      }
    })
    const include = new MenuLanguageInclude(props, naming)

    expect(include.binds.value).toMatchObject({
      disabled: true,
      showSearch: true
    })

    props.menuLanguageAttrs = { showSearch: true }
    props.disabled = false
    expect(include.binds.value.disabled).toBe(false)

    props.disabled = true
    expect(include.binds.value.disabled).toBe(true)
  })

  it('should support getter props via ComponentIncludeProps and omit disabled when undefined', () => {
    const props = reactive<MenuLanguagePropsInclude<MenuLanguageProps>>({})
    const include = new MenuLanguageInclude(() => props, naming)

    expect('disabled' in include.binds.value).toBe(false)

    props.disabled = false
    expect(include.binds.value.disabled).toBe(false)
  })

  it('should expose all proxy methods and render menuLanguage component with slots and extra binds', () => {
    const rendered: Array<{ name: string, props: Record<string, unknown> }> = []
    const MockMenuLanguage = {
      name: 'MockMenuLanguage',
      render: () => h('div', 'menuLanguage')
    }
    const components = new DesignComponents({ menuLanguage: MockMenuLanguage }, naming)
    vi.spyOn(components, 'render').mockImplementation((name, props) => {
      rendered.push({ name, props: props ?? {} })
      return [h('div', { class: 'mock-menu-language' })]
    })

    const include = new MenuLanguageInclude(
      { disabled: true },
      naming,
      components,
      () => ({ list: ['en', 'vi'] })
    )

    const vnodes = include.render({ control: () => h('button', 'open') }, { selected: 'vi' })
    expect(vnodes).toHaveLength(1)
    expect(rendered[0]?.name).toBe('menuLanguage')
    expect(rendered[0]?.props).toMatchObject({
      disabled: true,
      list: ['en', 'vi'],
      selected: 'vi'
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
    expect(expose.getMenuLanguageElement().value).toBeUndefined()
  })

  it('should preserve falsy boundary values and respect extra overrides without emitting undefined keys', () => {
    const props = reactive<MenuLanguagePropsInclude<MenuLanguageProps>>({
      disabled: false
    })
    const include = new MenuLanguageInclude(
      props,
      naming,
      undefined,
      () => ({ disabled: true })
    )

    expect(include.binds.value.disabled).toBe(true)
    expect(include.render()).toEqual([])
  })
})
