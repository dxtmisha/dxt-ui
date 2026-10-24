import { describe, it, expect } from 'vitest'
import { h } from 'vue'

import { render } from '../render'

describe('render', () => {
  describe('VNode creation and children', () => {
    it('creates a new VNode on every call while preserving its tag and stable key', () => {
      const first = render('section')
      const second = render('section')

      expect(first.type).toBe('section')
      expect(first.key).toBe('section')
      expect(second).not.toBe(first)
      expect(second.key).toBe(first.key)
    })

    it('preserves text children including an empty string', () => {
      expect(render('p', {}, 'Hello World').children).toBe('Hello World')
      expect(render('p', {}, '').children).toBe('')
    })

    it('preserves VNode children and their order', () => {
      const children = [h('span', 'first'), h('span', 'second')]
      const vnode = render('div', {}, children)

      expect(vnode.children).toBe(children)
      expect(vnode.children).toEqual(children)
    })

    it('forwards attributes and event handlers without replacing their references', () => {
      const clicked = (): void => {}
      const props = { title: 'title', role: 'button', onClick: clicked }
      const vnode = render('button', props)

      expect(vnode.props).toMatchObject(props)
      expect(vnode.props?.onClick).toBe(clicked)
    })
  })

  describe('Automatic keys and explicit keys', () => {
    it('generates a key from identity properties without using class names', () => {
      const vnode = render('span', { id: 'item', index: 'property', class: 'active' }, undefined, 'external')

      expect(vnode.key).toBe('span.external.property.item')
    })

    it.each(['original-key', 0])('preserves the explicit key %s', (key) => {
      const vnode = render('div', { key, id: 'ignored' }, undefined, 'ignored')

      expect(vnode.key).toBe(key)
    })

    it.each([null, undefined])('does not generate a key when an explicit key is %s', (key) => {
      const vnode = render('div', { key, id: 'ignored' }, undefined, 'ignored')

      expect(vnode.key).toBeNull()
      expect(Object.hasOwn(vnode.props ?? {}, 'key')).toBe(true)
      expect(vnode.props?.key).toBe(key)
    })

    it('copies props when adding a key and leaves source class data untouched', () => {
      const classNames = { active: true }
      const props = Object.freeze({ id: 'item', class: classNames })
      const vnode = render('div', props)

      expect(vnode.key).toBe('div.item')
      expect(vnode.props).not.toBe(props)
      expect(vnode.props?.class).toBe('active')
      expect(props.class).toBe(classNames)
      expect(Object.hasOwn(props, 'key')).toBe(false)
    })
  })
})
