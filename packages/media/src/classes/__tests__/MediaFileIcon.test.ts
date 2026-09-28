import { beforeEach, describe, expect, it } from 'vitest'
import type { MediaFileItem } from '../../types/fileTypes'
import { MediaFile } from '../MediaFile'
import { MediaFileIcon } from '../MediaFileIcon'
import { MediaFiles } from '../MediaFiles'

describe('MediaFileIcon', () => {
  beforeEach(() => {
    // Reset custom icons registry before each test
    for (const key in MediaFileIcon.icons) {
      delete MediaFileIcon.icons[key]
    }
  })

  describe('static get and has', () => {
    it('should return undefined when custom icon is not registered', () => {
      expect(MediaFileIcon.get('png')).toBeUndefined()
      expect(MediaFileIcon.has('png')).toBe(false)
    })

    it('should return custom icon when registered', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      expect(MediaFileIcon.get('png')).toBe('custom-png-svg')
      expect(MediaFileIcon.has('png')).toBe(true)
    })

    it('should normalize code by trimming whitespace and converting to lowercase', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      expect(MediaFileIcon.get('  PNG  ')).toBe('custom-png-svg')
      expect(MediaFileIcon.has('  PNG  ')).toBe(true)
    })
  })

  describe('static add and addList', () => {
    it('should add a single custom icon', () => {
      MediaFileIcon.add('custom_type', 'custom-type-svg')

      expect(MediaFileIcon.icons.custom_type).toBe('custom-type-svg')
      expect(MediaFileIcon.get('custom_type')).toBe('custom-type-svg')
    })

    it('should add multiple custom icons via addList', () => {
      MediaFileIcon.addList({
        foo: 'foo-svg',
        bar: 'bar-svg'
      })

      expect(MediaFileIcon.icons.foo).toBe('foo-svg')
      expect(MediaFileIcon.icons.bar).toBe('bar-svg')
      expect(MediaFileIcon.get('foo')).toBe('foo-svg')
      expect(MediaFileIcon.get('bar')).toBe('bar-svg')
    })
  })

  describe('interoperability with MediaFile and MediaFiles', () => {
    it('should be used by MediaFiles and MediaFile when custom icon is registered', () => {
      MediaFileIcon.add('docx', 'custom-docx-svg')

      expect(MediaFiles.get('docx')?.icon).toBe('custom-docx-svg')
      expect(new MediaFile('document.docx').icon).toBe('custom-docx-svg')
    })
  })

  describe('static toCode', () => {
    it('should normalize code by trimming whitespace and converting to lowercase', () => {
      expect(MediaFileIcon.toCode('  PNG  ')).toBe('png')
      expect(MediaFileIcon.toCode('FILE')).toBe('file')
      expect(MediaFileIcon.toCode('archive')).toBe('archive')
    })
  })

  describe('static toItem', () => {
    it('should return undefined if item is undefined', () => {
      expect(MediaFileIcon.toItem(undefined)).toBeUndefined()
    })

    it('should apply custom icon to item if registered', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      const rawItem: MediaFileItem = {
        code: 'png',
        name: 'PNG Image',
        icon: 'default-png-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized).toBeDefined()
      expect(customized?.icon).toBe('custom-png-svg')
      expect(customized?.name).toBe('PNG Image')
      expect(customized).not.toBe(rawItem)
    })

    it('should return shallow copy if no custom icon is registered', () => {
      const rawItem: MediaFileItem = {
        code: 'png',
        name: 'PNG Image',
        icon: 'default-png-svg'
      }

      const copy = MediaFileIcon.toItem(rawItem)
      expect(copy).toBeDefined()
      expect(copy?.icon).toBe('default-png-svg')
      expect(copy).not.toBe(rawItem)
    })
  })
})
