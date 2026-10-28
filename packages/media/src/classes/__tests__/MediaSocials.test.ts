import { beforeEach, describe, expect, it } from 'vitest'
import { registerSocialIcons, socialIcons } from '../../socials'
import { InputSocialType } from '../../types/socialTypes'
import { MediaSocialIcon } from '../MediaSocialIcon'
import { MediaSocials } from '../MediaSocials'

describe('MediaSocials', () => {
  beforeEach(() => {
    MediaSocialIcon.reset()
  })

  describe('constructor', () => {
    it('should allow subclass instantiation with protected constructor', () => {
      class CustomMediaSocials extends MediaSocials {
        static create(): CustomMediaSocials {
          return new CustomMediaSocials()
        }
      }

      const instance = CustomMediaSocials.create()
      expect(instance).toBeInstanceOf(MediaSocials)
    })
  })

  describe('get', () => {
    it('should return undefined for non-existent codes', () => {
      expect(MediaSocials.get('nonexistent' as any)).toBeUndefined()
    })

    it('should return undefined for empty, falsy, or nullish codes', () => {
      expect(MediaSocials.get('' as any)).toBeUndefined()
      expect(MediaSocials.get(null as any)).toBeUndefined()
      expect(MediaSocials.get(undefined as any)).toBeUndefined()
    })

    it('should return social network configuration by code', () => {
      const item = MediaSocials.get(InputSocialType.github)
      expect(item).toBeDefined()
      expect(item?.code).toBe(InputSocialType.github)
      expect(item?.name).toBe('GitHub')
      expect(item?.prefix).toBe('https://github.com/')
    })

    it('should work with string matching enum value', () => {
      const item = MediaSocials.get('telegram')
      expect(item).toBeDefined()
      expect(item?.code).toBe(InputSocialType.telegram)
      expect(item?.name).toBe('Telegram')
    })

    it('should return a shallow copy to protect the catalog from external mutation', () => {
      const item1 = MediaSocials.get(InputSocialType.github)
      const item2 = MediaSocials.get(InputSocialType.github)

      expect(item1).toEqual(item2)
      expect(item1).not.toBe(item2)
    })

    it('should leave icon undefined when no custom icon is registered', () => {
      const item = MediaSocials.get(InputSocialType.github)
      expect(item?.icon).toBeUndefined()
    })

    it('should enrich item with custom icon from MediaSocialIcon', () => {
      MediaSocialIcon.add(InputSocialType.github, '<svg class="custom-gh"></svg>')
      const item = MediaSocials.get(InputSocialType.github)
      expect(item?.icon).toBe('<svg class="custom-gh"></svg>')
    })

    it('should enrich item with default SVG icon after registerSocialIcons', () => {
      registerSocialIcons()
      const item = MediaSocials.get(InputSocialType.github)
      expect(item?.icon).toBe(socialIcons[InputSocialType.github])
    })
  })

  describe('getList', () => {
    it('should return the complete list of all supported social network configurations', () => {
      const list = MediaSocials.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(30)

      const githubItem = list.find(item => item.code === InputSocialType.github)
      expect(githubItem).toBeDefined()
      expect(githubItem?.name).toBe('GitHub')
    })

    it('should return items enriched with custom icons when registered', () => {
      MediaSocialIcon.add(InputSocialType.telegram, 'tg-custom')

      const list = MediaSocials.getList()
      const telegramItem = list.find(item => item.code === InputSocialType.telegram)
      expect(telegramItem?.icon).toBe('tg-custom')
    })

    it('should return new shallow copies in the list', () => {
      const list1 = MediaSocials.getList()
      const list2 = MediaSocials.getList()

      expect(list1).not.toBe(list2)
      expect(list1[0]).not.toBe(list2[0])
    })
  })
})

