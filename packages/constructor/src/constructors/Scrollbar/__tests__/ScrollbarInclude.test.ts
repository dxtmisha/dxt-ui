// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { h } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { ScrollbarInclude } from '../ScrollbarInclude'
import type { ScrollbarComponentInclude, ScrollbarPropsInclude } from '../basicTypes'

describe('ScrollbarInclude', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render registered scrollbar component with merged binds and forward all 7 events', () => {
      const naming = new DesignName('d1.window')
      const props: ScrollbarPropsInclude = {
        scrollbarAttrs: {
          divider: true,
          standard: true
        }
      }
      const emits = vi.fn() as any
      const components = new DesignComponents<ScrollbarComponentInclude, ScrollbarPropsInclude>(
        {
          scrollbar: {
            name: 'StubScrollbar',
            setup(componentProps: Record<string, unknown>, { slots }: { slots: { default?: () => unknown } }) {
              return () => h('div', componentProps, (slots.default?.() as any))
            }
          }
        },
        props
      )

      const include = new ScrollbarInclude<ScrollbarPropsInclude>(props, naming, components as any, emits)
      const vnodes = include.render(
        'section',
        { key: 'bodyContext', class: 'd1-window__body__context' },
        () => [h('p', 'Body content')]
      )

      expect(vnodes).toHaveLength(1)
      const vnodeProps = vnodes[0]?.props as Record<string, unknown>

      expect(vnodeProps.tag).toBe('section')
      expect(vnodeProps.divider).toBe(true)
      expect(vnodeProps.standard).toBe(true)

      ;(vnodeProps.onTop as (isTop: boolean) => void)(true)
      expect(emits).toHaveBeenCalledWith('scrollbarTop', true)

      ;(vnodeProps.onReachTop as () => void)()
      expect(emits).toHaveBeenCalledWith('scrollbarReachTop')

      ;(vnodeProps.onLeaveTop as () => void)()
      expect(emits).toHaveBeenCalledWith('scrollbarLeaveTop')

      ;(vnodeProps.onBottom as (isBottom: boolean) => void)(false)
      expect(emits).toHaveBeenCalledWith('scrollbarBottom', false)

      ;(vnodeProps.onReachBottom as () => void)()
      expect(emits).toHaveBeenCalledWith('scrollbarReachBottom')

      ;(vnodeProps.onLeaveBottom as () => void)()
      expect(emits).toHaveBeenCalledWith('scrollbarLeaveBottom')

      ;(vnodeProps.onEdge as (isTop: boolean, isBottom: boolean, edge: 'top' | 'bottom') => void)(true, false, 'top')
      expect(emits).toHaveBeenCalledWith('scrollbarEdge', true, false, 'top')
    })
  })

  describe('Fallback native element rendering and boundary cases', () => {
    it('should fall back to native HTML tag and resolve slot function children when components are not provided', () => {
      const naming = new DesignName('d1.window')
      const props: ScrollbarPropsInclude = {}
      const include = new ScrollbarInclude(props, naming)

      const vnodes = include.render(
        'div',
        { key: 'bodyContext', class: 'd1-window__body__context' },
        () => [h('span', 'Fallback child')]
      )

      expect(vnodes).toHaveLength(1)
      expect(vnodes[0]?.type).toBe('div')
      expect(vnodes[0]?.props).toEqual({
        key: 'bodyContext',
        class: 'd1-window__body__context'
      })
      expect(Array.isArray(vnodes[0]?.children)).toBe(true)
    })

    it('should fall back to native HTML tag when DesignComponents is provided without scrollbar registration', () => {
      const naming = new DesignName('d1.window')
      const props: ScrollbarPropsInclude = {}
      const emptyComponents = new DesignComponents<ScrollbarComponentInclude, ScrollbarPropsInclude>({}, props)
      const include = new ScrollbarInclude(props, naming, emptyComponents)

      const vnodes = include.render('article', { id: 'fallback-article' }, 'Plain text child')

      expect(vnodes).toHaveLength(1)
      expect(vnodes[0]?.type).toBe('article')
      expect(vnodes[0]?.props).toEqual({ id: 'fallback-article' })
      expect(vnodes[0]?.children).toBe('Plain text child')
    })
  })
})
