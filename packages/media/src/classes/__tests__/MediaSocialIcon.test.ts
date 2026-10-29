import { beforeEach, describe, expect, it } from 'vitest'
import { registerSocialIcons, socialIcons } from '../../socials'
import { InputSocialType, type InputSocialItem } from '../../types/socialTypes'
import { MediaSocialIcon } from '../MediaSocialIcon'

describe('MediaSocialIcon', () => {
  beforeEach(() => {
    MediaSocialIcon.reset()
  })

  describe('constructor', () => {
    it('should allow subclass instantiation with protected constructor', () => {
      class CustomMediaSocialIcon extends MediaSocialIcon {
        static create(): CustomMediaSocialIcon {
          return new CustomMediaSocialIcon()
        }
      }

      const instance = CustomMediaSocialIcon.create()
      expect(instance).toBeInstanceOf(MediaSocialIcon)
    })
  })

  describe('static get icons', () => {
    it('should return empty object initially', () => {
      expect(MediaSocialIcon.icons).toEqual({})
      expect(Object.keys(MediaSocialIcon.icons)).toHaveLength(0)
    })

    it('should return a dictionary snapshot of all registered icons', () => {
      MediaSocialIcon.add(InputSocialType.github, 'gh-svg')
      MediaSocialIcon.add(InputSocialType.telegram, 'tg-svg')

      expect(MediaSocialIcon.icons).toEqual({
        [InputSocialType.github]: 'gh-svg',
        [InputSocialType.telegram]: 'tg-svg'
      })
    })

    it('should protect internal registry from direct external mutation', () => {
      MediaSocialIcon.add(InputSocialType.github, 'gh-svg')

      const icons = MediaSocialIcon.icons as Record<string, string>
      icons[InputSocialType.github] = 'polluted-svg'
      icons[InputSocialType.telegram] = 'injected-svg'

      expect(MediaSocialIcon.get(InputSocialType.github)).toBe('gh-svg')
      expect(MediaSocialIcon.has(InputSocialType.telegram)).toBe(false)
      expect(MediaSocialIcon.icons[InputSocialType.github]).toBe('gh-svg')
    })

    it('should return a prototype-less dictionary without Object.prototype properties', () => {
      MediaSocialIcon.add(InputSocialType.github, 'gh-svg')

      const icons = MediaSocialIcon.icons
      expect(Object.getPrototypeOf(icons)).toBeNull()
      expect('toString' in icons).toBe(false)
      expect(icons['toString' as keyof typeof icons]).toBeUndefined()
      expect('valueOf' in icons).toBe(false)
      expect('constructor' in icons).toBe(false)
      expect(icons[InputSocialType.github]).toBe('gh-svg')
    })
  })

  describe('static has and get', () => {
    it('should return undefined and false for unregistered codes', () => {
      expect(MediaSocialIcon.get(InputSocialType.github)).toBeUndefined()
      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(false)
      expect(MediaSocialIcon.get('nonexistent' as any)).toBeUndefined()
      expect(MediaSocialIcon.has('nonexistent' as any)).toBe(false)
    })

    it('should return custom icon and true when code is registered', () => {
      MediaSocialIcon.add(InputSocialType.github, 'custom-gh-svg')

      expect(MediaSocialIcon.get(InputSocialType.github)).toBe('custom-gh-svg')
      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(true)
    })

    it('should work with string values matching enum codes', () => {
      MediaSocialIcon.add('github', 'custom-gh-svg')

      expect(MediaSocialIcon.get(InputSocialType.github)).toBe('custom-gh-svg')
      expect(MediaSocialIcon.has('github')).toBe(true)
    })
  })

  describe('static add and addList', () => {
    it('should register a single custom icon', () => {
      MediaSocialIcon.add(InputSocialType.telegram, 'tg-icon')
      expect(MediaSocialIcon.icons[InputSocialType.telegram]).toBe('tg-icon')
      expect(MediaSocialIcon.get(InputSocialType.telegram)).toBe('tg-icon')
    })

    it('should trim string values when adding icon', () => {
      MediaSocialIcon.add(InputSocialType.discord, '  <svg>discord</svg>  ')
      expect(MediaSocialIcon.get(InputSocialType.discord)).toBe('<svg>discord</svg>')
    })

    it('should ignore empty icon strings or empty codes', () => {
      MediaSocialIcon.add(InputSocialType.discord, '')
      MediaSocialIcon.add(InputSocialType.discord, '   ')
      MediaSocialIcon.add('' as any, '<svg></svg>')
      MediaSocialIcon.add('   ' as any, '<svg></svg>')
      MediaSocialIcon.add(123 as any, '<svg></svg>')
      MediaSocialIcon.add(null as any, '<svg></svg>')
      MediaSocialIcon.add(undefined as any, '<svg></svg>')

      expect(MediaSocialIcon.has(InputSocialType.discord)).toBe(false)
      expect(MediaSocialIcon.icons).toEqual({})
    })

    it('should reject whitespace-only icon strings with tabs and newlines', () => {
      MediaSocialIcon.add(InputSocialType.github, '\t  \n')
      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(false)
    })

    it('should validate inputs via protected is() method', () => {
      class TestMediaSocialIcon extends MediaSocialIcon {
        static testIs(code?: unknown, icon?: unknown): boolean {
          return this.is(code, icon)
        }
      }

      expect(TestMediaSocialIcon.testIs(InputSocialType.github, 'icon')).toBe(true)
      expect(TestMediaSocialIcon.testIs(InputSocialType.github, '')).toBe(false)
      expect(TestMediaSocialIcon.testIs(InputSocialType.github, '   ')).toBe(false)
      expect(TestMediaSocialIcon.testIs('', 'icon')).toBe(false)
      expect(TestMediaSocialIcon.testIs('   ', 'icon')).toBe(false)
      expect(TestMediaSocialIcon.testIs(undefined, 'icon')).toBe(false)
      expect(TestMediaSocialIcon.testIs(null, 'icon')).toBe(false)
      expect(TestMediaSocialIcon.testIs(InputSocialType.github, 123)).toBe(false)
      expect(TestMediaSocialIcon.testIs(123, 'icon')).toBe(false)
    })

    it('should register multiple custom icons with addList', () => {
      MediaSocialIcon.addList({
        [InputSocialType.telegram]: 'tg-icon',
        [InputSocialType.discord]: 'dc-icon'
      })

      expect(MediaSocialIcon.icons[InputSocialType.telegram]).toBe('tg-icon')
      expect(MediaSocialIcon.icons[InputSocialType.discord]).toBe('dc-icon')
      expect(MediaSocialIcon.get(InputSocialType.telegram)).toBe('tg-icon')
      expect(MediaSocialIcon.get(InputSocialType.discord)).toBe('dc-icon')
    })

    it('should ignore empty, whitespace, or falsy entries in addList', () => {
      MediaSocialIcon.addList({
        [InputSocialType.telegram]: 'tg-icon',
        [InputSocialType.discord]: '',
        [InputSocialType.github]: '   '
      })

      expect(MediaSocialIcon.has(InputSocialType.telegram)).toBe(true)
      expect(MediaSocialIcon.has(InputSocialType.discord)).toBe(false)
      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(false)
    })

    it('should protect against prototype pollution when processing objects in addList', () => {
      const maliciousPayload = JSON.parse('{"__proto__": "polluted", "github": "<svg>gh</svg>"}')
      MediaSocialIcon.addList(maliciousPayload)

      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(true)
      expect(Object.hasOwn(Object.prototype, 'polluted')).toBe(false)
      expect((MediaSocialIcon.icons as Record<string, string>)['__proto__']).toBeUndefined()
    })

    it('should safely ignore non-object or array in addList', () => {
      MediaSocialIcon.addList(null as any)
      MediaSocialIcon.addList(undefined as any)
      MediaSocialIcon.addList([] as any)
      MediaSocialIcon.addList('string' as any)
      MediaSocialIcon.addList(123 as any)

      expect(MediaSocialIcon.icons).toEqual({})
    })

    it('should validate dictionary via protected isList() method', () => {
      class TestMediaSocialIcon extends MediaSocialIcon {
        static testIsList(icons?: any): boolean {
          return this.isList(icons)
        }
      }

      expect(TestMediaSocialIcon.testIsList({ [InputSocialType.github]: 'icon' })).toBe(true)
      expect(TestMediaSocialIcon.testIsList({})).toBe(true)
      expect(TestMediaSocialIcon.testIsList(null)).toBe(false)
      expect(TestMediaSocialIcon.testIsList(undefined)).toBe(false)
      expect(TestMediaSocialIcon.testIsList([])).toBe(false)
      expect(TestMediaSocialIcon.testIsList('not-an-object')).toBe(false)
      expect(TestMediaSocialIcon.testIsList(123)).toBe(false)
    })

    it('should return class constructor for method chaining', () => {
      const resultAdd = MediaSocialIcon.add(InputSocialType.telegram, 'tg-icon')
      expect(resultAdd).toBe(MediaSocialIcon)

      const resultAddList = MediaSocialIcon.addList({ [InputSocialType.github]: 'gh-icon' })
      expect(resultAddList).toBe(MediaSocialIcon)
    })
  })

  describe('static remove', () => {
    it('should remove a single custom icon and return true', () => {
      MediaSocialIcon.add(InputSocialType.telegram, 'tg-icon')
      MediaSocialIcon.add(InputSocialType.github, 'gh-icon')

      expect(MediaSocialIcon.has(InputSocialType.telegram)).toBe(true)
      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(true)

      const removed = MediaSocialIcon.remove(InputSocialType.telegram)
      expect(removed).toBe(true)
      expect(MediaSocialIcon.has(InputSocialType.telegram)).toBe(false)
      expect(MediaSocialIcon.get(InputSocialType.telegram)).toBeUndefined()
      expect(MediaSocialIcon.has(InputSocialType.github)).toBe(true)
    })

    it('should return false when removing non-existent code', () => {
      expect(MediaSocialIcon.remove(InputSocialType.vk)).toBe(false)
    })

    it('should clear internal hasCustomIcons flag when all icons are removed', () => {
      MediaSocialIcon.add(InputSocialType.telegram, 'tg-icon')
      expect(MediaSocialIcon.remove(InputSocialType.telegram)).toBe(true)

      const item: InputSocialItem = { code: InputSocialType.telegram, name: 'Telegram' }
      const enriched = MediaSocialIcon.toItem(item)
      expect(enriched?.icon).toBeUndefined()
    })
  })

  describe('static reset', () => {
    it('should clear all registered custom icons and return class constructor', () => {
      MediaSocialIcon.add(InputSocialType.github, 'custom-icon-gh')
      expect(MediaSocialIcon.icons[InputSocialType.github]).toBe('custom-icon-gh')

      const result = MediaSocialIcon.reset()
      expect(result).toBe(MediaSocialIcon)
      expect(MediaSocialIcon.icons[InputSocialType.github]).toBeUndefined()
      expect(MediaSocialIcon.icons).toEqual({})
    })
  })

  describe('static toItem', () => {
    it('should return a shallow copy of the item without mutation', () => {
      const item: InputSocialItem = { code: InputSocialType.github, name: 'GitHub' }
      const res = MediaSocialIcon.toItem(item)

      expect(res).toEqual(item)
      expect(res).not.toBe(item)
    })

    it('should attach custom icon if registered for item.code', () => {
      MediaSocialIcon.add(InputSocialType.github, 'custom-icon-gh')
      const item: InputSocialItem = { code: InputSocialType.github, name: 'GitHub' }
      const res = MediaSocialIcon.toItem(item)

      expect(res.icon).toBe('custom-icon-gh')
    })

    it('should leave icon undefined if no icon registered for item.code', () => {
      const item: InputSocialItem = { code: InputSocialType.github, name: 'GitHub' }
      const res = MediaSocialIcon.toItem(item)

      expect(res.icon).toBeUndefined()
    })

    it('should preserve custom generic Mask type in toItem return value', () => {
      interface CustomMaskOptions {
        pattern: string
        tokens: Record<string, RegExp>
      }

      const itemWithMask: InputSocialItem<CustomMaskOptions> = {
        code: InputSocialType.telegram,
        name: 'Telegram',
        mask: {
          pattern: '+7 (###) ###-##-##',
          tokens: { '#': /\d/ }
        }
      }

      MediaSocialIcon.add(InputSocialType.telegram, '<svg class="tg"></svg>')
      const enriched = MediaSocialIcon.toItem(itemWithMask)

      expect(enriched.icon).toBe('<svg class="tg"></svg>')
      expect(enriched.mask?.pattern).toBe('+7 (###) ###-##-##')
      expect(enriched.mask?.tokens['#']).toEqual(/\d/)
    })

    it('should leave icon undefined when hasCustomIcons is true but code does not match', () => {
      MediaSocialIcon.add(InputSocialType.discord, 'dc-icon')
      const item: InputSocialItem = { code: InputSocialType.github, name: 'GitHub' }
      const res = MediaSocialIcon.toItem(item)

      expect(res.icon).toBeUndefined()
    })
  })

  describe('lifecycle & method chaining', () => {
    it('should support full fluent chaining across reset, add, and addList', () => {
      const result = MediaSocialIcon
        .reset()
        .add(InputSocialType.github, 'gh')
        .addList({ [InputSocialType.vk]: 'vk' })
        .reset()

      expect(result).toBe(MediaSocialIcon)
      expect(MediaSocialIcon.icons).toEqual({})
    })

    it('should correctly toggle hasCustomIcons through multiple additions and removals', () => {
      const item: InputSocialItem = { code: InputSocialType.github, name: 'GitHub' }

      expect(MediaSocialIcon.toItem(item).icon).toBeUndefined()

      MediaSocialIcon.add(InputSocialType.github, 'gh-1')
      expect(MediaSocialIcon.toItem(item).icon).toBe('gh-1')

      MediaSocialIcon.add(InputSocialType.telegram, 'tg-1')
      MediaSocialIcon.remove(InputSocialType.github)
      expect(MediaSocialIcon.toItem(item).icon).toBeUndefined()

      MediaSocialIcon.remove(InputSocialType.telegram)
      expect(MediaSocialIcon.toItem(item).icon).toBeUndefined()
      expect(MediaSocialIcon.icons).toEqual({})
    })
  })

  describe('registerSocialIcons integration', () => {
    it('should register default SVG icons via registerSocialIcons', () => {
      registerSocialIcons()

      expect(MediaSocialIcon.get(InputSocialType.github)).toBe(socialIcons[InputSocialType.github])
      expect(MediaSocialIcon.has(InputSocialType.telegram)).toBe(true)

      const item: InputSocialItem = { code: InputSocialType.github, name: 'GitHub' }
      const enriched = MediaSocialIcon.toItem(item)
      expect(enriched?.icon).toBe(socialIcons[InputSocialType.github])
    })
  })
})
