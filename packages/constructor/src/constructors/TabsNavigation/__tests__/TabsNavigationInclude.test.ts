// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { TabsNavigationInclude } from '../TabsNavigationInclude'

describe('TabsNavigationInclude', () => {
  it('should map ids getter to element.ids()', () => {
    const mockExpose = {
      ids: vi.fn().mockReturnValue({ 'tab-1': 'some-id-1' })
    } as any

    const include = new TabsNavigationInclude('my-tabs', {})
    include['element'].value = mockExpose

    expect(include.ids).toEqual({ 'tab-1': 'some-id-1' })
    expect(mockExpose.ids).toHaveBeenCalled()
  })

  it('should fallback to empty object if element is undefined for ids getter', () => {
    const include = new TabsNavigationInclude('my-tabs', {})
    expect(include.ids).toEqual({})
  })

  it('should resolve and clean properties with getProps() and extra bindings', () => {
    const props = {
      tabs: {
        active: true
      },
      tabItemAttrs: {
        style: 'color: red'
      }
    } as any

    const include = new TabsNavigationInclude('my-tabs', props)

    // @ts-expect-error accessing protected method
    const extra = include.getExtra()
    expect(extra).toEqual({
      list: { active: true }
    })

    // @ts-expect-error accessing protected method
    const binds = include.toBinds()
    expect(binds.itemAttrs).toEqual({
      style: 'color: red'
    })
  })
})
