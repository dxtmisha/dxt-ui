// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { ComponentIncludeAbstract } from '../ComponentIncludeAbstract'

class TestComponentInclude extends ComponentIncludeAbstract<any, any, any, any> {
  protected readonly name = 'test-sub'
  protected readonly propsAttrsName = 'subAttrs'
  protected readonly exposeItems = [
    { name: 'focus', method: 'focus', type: 'boolean', defaultValue: false },
    { name: 'getValue', method: 'value', type: 'string', defaultValue: 'default' }
  ]

  public testGetClassName() {
    return this.getClassName()
  }

  public testGetProps() {
    return this.getProps()
  }

  public testGetPropsAttrs() {
    return this.getPropsAttrs()
  }

  public testGetExtra() {
    return this.getExtra()
  }

  public testGetAttrs(attrs?: any) {
    return this.getAttrs(attrs)
  }

  public testToBinds() {
    return this.toBinds()
  }

  public testToExpose() {
    return this.toExpose()
  }

  public setElementValue(value: any) {
    this.element.value = value
  }
}

describe('ComponentIncludeAbstract', () => {
  it('should return correct BEM class name', () => {
    const include = new TestComponentInclude('parent-class', {})
    expect(include.testGetClassName()).toBe('parent-class__test-sub')
  })

  it('should resolve and clean properties with getProps()', () => {
    const propsFn = () => ({ val1: 'value', val2: undefined })
    const include = new TestComponentInclude('parent-class', propsFn)

    expect(include.testGetProps()).toEqual({ val1: 'value' })
  })

  it('should resolve custom attributes from props using getPropsAttrs()', () => {
    const props = { subAttrs: { 'data-custom': 'hello' } }
    const include = new TestComponentInclude('parent-class', props)

    expect(include.testGetPropsAttrs()).toEqual({ 'data-custom': 'hello' })
  })

  it('should resolve additional attributes using getExtra()', () => {
    const extraRef = ref({ 'aria-expanded': true })
    const include = new TestComponentInclude('parent-class', {}, undefined, extraRef)

    expect(include.testGetExtra()).toEqual({ 'aria-expanded': true })
  })

  it('should construct correct binds including element ref', () => {
    const include = new TestComponentInclude('parent-class', {})
    const binds = include.binds.value

    expect(binds.ref).toBeDefined()
    expect(binds.class).toBe('parent-class__test-sub')
  })

  it('should construct exposed proxy methods', () => {
    const include = new TestComponentInclude('parent-class', {})
    const expose = include.expose

    expect(expose.focus).toBeDefined()
    expect(expose.getValue).toBeDefined()

    // Test default values when element is not set
    expect(expose.focus()).toBe(false)
    expect(expose.getValue()).toBe('default')

    // Test calling methods on the element when set
    const mockFocus = vi.fn().mockReturnValue(true)
    const mockValue = vi.fn().mockReturnValue('real-value')
    include.setElementValue({
      focus: mockFocus,
      value: mockValue
    })

    expect(expose.focus()).toBe(true)
    expect(mockFocus).toHaveBeenCalled()

    expect(expose.getValue()).toBe('real-value')
    expect(mockValue).toHaveBeenCalled()
    expect(include.getElement()).toBeDefined()
  })

  it('should call components.render when rendering', () => {
    const renderMock = vi.fn().mockReturnValue(['vnode'])
    const componentsMock = {
      render: renderMock
    } as any

    const include = new TestComponentInclude('parent-class', {}, componentsMock)
    const result = include.render()

    expect(renderMock).toHaveBeenCalledWith(
      'test-sub',
      expect.objectContaining({ class: 'parent-class__test-sub' }),
      undefined,
      undefined
    )
    expect(result).toEqual(['vnode'])
  })
})
