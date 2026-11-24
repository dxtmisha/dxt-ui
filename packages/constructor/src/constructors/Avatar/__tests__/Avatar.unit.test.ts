// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Avatar } from '../Avatar'
import type { AvatarProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

function createAvatar(
  props: AvatarProps = {},
  emits?: (...args: unknown[]) => void
): Avatar {
  const scope = effectScope()
  cleanups.push(() => scope.stop())

  return scope.run(() => {
    const element = ref<HTMLDivElement | undefined>(undefined)
    const naming = new DesignName('d1.avatar')
    return new Avatar(props, element, naming, undefined, undefined, emits as never)
  })!
}

describe('Avatar (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should resolve tag as div by default and a when href or to is provided', () => {
      const props = reactive<AvatarProps>({ label: 'John Doe', reduction: true })
      const instance = createAvatar(props)

      expect(instance.tag).toBe('div')

      props.href = 'https://example.com/profile'
      expect(instance.tag).toBe('a')
      expect(instance.role).toBeUndefined()

      props.href = undefined
      props.to = '/profile'
      expect(instance.tag).toBe('a')
      expect(instance.role).toBeUndefined()

      props.to = undefined
      expect(instance.tag).toBe('div')
    })

    it('should resolve binds, role, tabindex, and aria-label based on enabled/disabled/readonly states', () => {
      const props = reactive<AvatarProps>({
        label: 'John Doe',
        tabindex: '0'
      })
      const instance = createAvatar(props)

      expect(instance.role).toBe('button')
      expect(instance.binds).toMatchObject({
        'tabindex': '0',
        'role': 'button',
        'aria-label': 'John Doe'
      })

      props.ariaLabel = 'User profile avatar'
      expect(instance.binds['aria-label']).toBe('User profile avatar')

      props.disabled = true
      expect(instance.role).toBe('img')
      expect(instance.binds.tabindex).toBeUndefined()
      expect(instance.binds.role).toBe('img')

      props.disabled = false
      props.readonly = true
      expect(instance.role).toBe('img')
      expect(instance.binds.tabindex).toBeUndefined()
    })

    it('should shorten labels to initials when reduction is true and preserve full label when false', () => {
      const props = reactive<AvatarProps>({
        label: 'Johnathan Doe Smith',
        reduction: true
      })
      const instance = createAvatar(props)

      expect(instance.callInstance('label', item => item.is, false)).toBe(true)
      const vnodes = instance.callInstance('label', item => item.render(), [])
      expect(vnodes).toHaveLength(1)
      expect(vnodes[0]?.children).toContain('JD')

      props.reduction = false
      const fullVnodes = instance.callInstance('label', item => item.render(), [])
      expect(fullVnodes[0]?.children).toContain('Johnathan Doe Smith')
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should not instantiate optional badge, image, label, or skeleton helpers until enabled', () => {
      const props = reactive<AvatarProps>({})
      const instance = createAvatar(props)

      expect(instance.classes).toEqual({})
      expect(instance.callInstance('badge', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('image', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('label', item => item.render(), [])).toEqual([])

      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.hasInstance('badge')).toBe(false)
      expect(instance.hasInstance('image')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)

      props.isSkeleton = true
      expect(Object.keys(instance.classes).length).toBeGreaterThan(0)
      expect(instance.hasInstance('skeleton')).toBe(true)

      props.badgeDot = true
      instance.callInstance('badge', item => item.is, false)
      expect(instance.hasInstance('badge')).toBe(true)

      props.image = 'home'
      instance.callInstance('image', item => item.is, false)
      expect(instance.hasInstance('image')).toBe(true)
    })
  })

  describe('Boundary values, numeric zero, and Unicode graphemes', () => {
    it('should handle numeric 0, Cyrillic, Vietnamese, CJK, and Emoji initials without surrogate corruption', () => {
      const props = reactive<AvatarProps>({
        label: 0,
        reduction: true
      })
      const instance = createAvatar(props)

      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain('0')

      props.label = '  иван   петров  '
      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain('ИП')

      props.label = 'nguyễn văn an'
      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain('NV')

      props.label = '🚀 alice'
      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain('🚀A')
    })

    it('should support DI overrides and event expose contract', () => {
      const emits = vi.fn()
      const props = reactive<AvatarProps>({ value: 'user-1', detail: { role: 'admin' } })
      const instance = createAvatar(props, emits)

      expect(instance.i('event').expose.getValue?.()).toBe('user-1')
      expect(instance.i('event').expose.getDetail?.()).toEqual({ role: 'admin' })
    })
  })
})
