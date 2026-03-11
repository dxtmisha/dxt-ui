import { describe, it, expect } from 'vitest'
import { render } from '../render'

describe('render', () => {
  it('should return a VNode with the correct tag name', () => {
    const vnode = render('div')
    expect(vnode.type).toBe('div')
  })

  it('should generate a key if not present in props', () => {
    const vnode = render('span', { id: 'test-id' }, undefined, 'my-idx')
    // name='span', props={id:'test-id'}, index='my-idx'
    // With current additive logic: 'span.my-idx.test-id'
    expect(vnode.key).toBe('span.my-idx.test-id')
  })

  it('should handle children correctly', () => {
    const children = 'Hello World'
    const vnode = render('p', {}, children)
    expect(vnode.children).toBe(children)
  })

  it('should pass props to the resulting VNode', () => {
    const props = { title: 'vnode-title', role: 'button' }
    const vnode = render('div', props)
    expect((vnode.props as any)?.title).toBe('vnode-title')
    expect((vnode.props as any)?.role).toBe('button')
  })

  it('should NOT overwrite a key if already present in props', () => {
    const props = { key: 'original-key' }
    const vnode = render('div', props)
    expect(vnode.key).toBe('original-key')
  })

  it('should handle undefined props', () => {
    const vnode = render('section')
    expect(vnode.type).toBe('section')
    expect(vnode.key).toBe('section')
  })
})
