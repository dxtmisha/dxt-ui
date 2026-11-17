// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { h, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { MenuInclude } from '../MenuInclude'
import type { MenuPropsInclude } from '../basicTypes'
import type { MenuProps } from '../props'

describe('MenuInclude', () => {
  const naming = new DesignName('d1.select')

  it('should build binds non-destructively preserving menuAttrs.disabled when props.disabled is undefined', () => {
    const props = reactive<MenuPropsInclude<MenuProps>>({
      menuAttrs: {
        disabled: true,
        hideList: true
      }
    })
    const include = new MenuInclude(props, naming)

    expect(include.binds.value).toMatchObject({
      disabled: true,
      hideList: true
    })

    props.disabled = false
    expect(include.binds.value.disabled).toBe(false)
  })

  it('should expose all proxy methods and render menu component with slots', () => {
    const rendered: Array<{ name: string, props: Record<string, unknown> }> = []
    const MockMenu = {
      name: 'MockMenu',
      render: () => h('div', 'menu')
    }
    const components = new DesignComponents({ menu: MockMenu }, naming)
    vi.spyOn(components, 'render').mockImplementation((name, props) => {
      rendered.push({ name, props: props ?? {} })
      return [h('div', { class: 'mock-menu' })]
    })

    const include = new MenuInclude(
      { disabled: true },
      naming,
      components,
      () => ({ embedded: true })
    )

    const vnodes = include.render({ control: () => h('button', 'open') }, { selected: 'a' })
    expect(vnodes).toHaveLength(1)
    expect(rendered[0]?.name).toBe('menu')
    expect(rendered[0]?.props).toMatchObject({
      disabled: true,
      embedded: true,
      selected: 'a'
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
    expect(expose.getMenuElement().value).toBeUndefined()
  })
})
