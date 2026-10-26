import { beforeEach, describe, expect, it } from 'vitest'
import type { MediaFileItem } from '../../types/fileTypes'
import { fileIcons, registerFileIcons } from '../../files'
import { MediaFile } from '../MediaFile'
import { MediaFileIcon } from '../MediaFileIcon'
import { MediaFiles } from '../MediaFiles'

describe('MediaFileIcon', () => {
  beforeEach(() => {
    MediaFileIcon.reset()
  })

  describe('constructor', () => {
    it('should allow subclass instantiation with protected constructor', () => {
      class CustomMediaFileIcon extends MediaFileIcon {
        static create(): CustomMediaFileIcon {
          return new CustomMediaFileIcon()
        }
      }

      const instance = CustomMediaFileIcon.create()
      expect(instance).toBeInstanceOf(MediaFileIcon)
    })
  })

  describe('static get icons', () => {
    it('should return empty object initially', () => {
      expect(MediaFileIcon.icons).toEqual({})
      expect(Object.keys(MediaFileIcon.icons)).toHaveLength(0)
    })

    it('should return a dictionary snapshot of all registered icons', () => {
      MediaFileIcon.add('png', 'png-svg')
      MediaFileIcon.add('pdf', 'pdf-svg')

      expect(MediaFileIcon.icons).toEqual({
        png: 'png-svg',
        pdf: 'pdf-svg'
      })
    })

    it('should protect internal registry from direct external mutation', () => {
      MediaFileIcon.add('png', 'png-svg')

      const icons = MediaFileIcon.icons as Record<string, string>
      icons.png = 'polluted-svg'
      icons.jpg = 'injected-svg'

      expect(MediaFileIcon.get('png')).toBe('png-svg')
      expect(MediaFileIcon.has('jpg')).toBe(false)
      expect(MediaFileIcon.icons.png).toBe('png-svg')
    })

    it('should return a prototype-less dictionary without Object.prototype properties', () => {
      MediaFileIcon.add('png', 'png-svg')

      const icons = MediaFileIcon.icons
      expect(Object.getPrototypeOf(icons)).toBeNull()
      expect('toString' in icons).toBe(false)
      expect(icons['toString' as keyof typeof icons]).toBeUndefined()
      expect('valueOf' in icons).toBe(false)
      expect('constructor' in icons).toBe(false)
      expect(icons.png).toBe('png-svg')
    })
  })

  describe('static has and get', () => {
    it('should return undefined and false for unregistered codes', () => {
      expect(MediaFileIcon.get('png')).toBeUndefined()
      expect(MediaFileIcon.has('png')).toBe(false)
      expect(MediaFileIcon.get('unknown')).toBeUndefined()
      expect(MediaFileIcon.has('unknown')).toBe(false)
    })

    it('should return custom icon and true when code is registered', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      expect(MediaFileIcon.get('png')).toBe('custom-png-svg')
      expect(MediaFileIcon.has('png')).toBe(true)
    })

    it('should normalize code by trimming whitespace and converting to lowercase', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      expect(MediaFileIcon.get('  PNG  ')).toBe('custom-png-svg')
      expect(MediaFileIcon.has('  PNG  ')).toBe(true)
      expect(MediaFileIcon.get('Png')).toBe('custom-png-svg')
      expect(MediaFileIcon.has('Png')).toBe(true)
    })

    it('should normalize leading and trailing dots in file extension', () => {
      MediaFileIcon.add('.pdf.', 'custom-pdf-svg')

      expect(MediaFileIcon.get('pdf')).toBe('custom-pdf-svg')
      expect(MediaFileIcon.get('.pdf')).toBe('custom-pdf-svg')
      expect(MediaFileIcon.get('pdf.')).toBe('custom-pdf-svg')
      expect(MediaFileIcon.get('...pdf...')).toBe('custom-pdf-svg')
      expect(MediaFileIcon.has('pdf')).toBe(true)
      expect(MediaFileIcon.has('.pdf')).toBe(true)
      expect(MediaFileIcon.has('pdf.')).toBe(true)
      expect(MediaFileIcon.has('...pdf...')).toBe(true)
    })

    it('should normalize parameters separated by semicolon', () => {
      MediaFileIcon.add('text/plain', 'text-svg')

      expect(MediaFileIcon.get('text/plain; charset=utf-8')).toBe('text-svg')
      expect(MediaFileIcon.has('text/plain; charset=utf-8')).toBe(true)
    })

    it('should not collide with Object.prototype properties', () => {
      expect(MediaFileIcon.has('toString')).toBe(false)
      expect(MediaFileIcon.get('toString')).toBeUndefined()
      expect(MediaFileIcon.has('constructor')).toBe(false)
      expect(MediaFileIcon.get('constructor')).toBeUndefined()
      expect(MediaFileIcon.has('valueOf')).toBe(false)
      expect(MediaFileIcon.get('valueOf')).toBeUndefined()
      expect(MediaFileIcon.has('hasOwnProperty')).toBe(false)
      expect(MediaFileIcon.get('hasOwnProperty')).toBeUndefined()
      expect(MediaFileIcon.has('__proto__')).toBe(false)
      expect(MediaFileIcon.get('__proto__')).toBeUndefined()
    })

    it('should return undefined and false for empty or whitespace-only code', () => {
      expect(MediaFileIcon.get('')).toBeUndefined()
      expect(MediaFileIcon.has('')).toBe(false)
      expect(MediaFileIcon.get('   ')).toBeUndefined()
      expect(MediaFileIcon.has('   ')).toBe(false)
    })
  })

  describe('static add and addList', () => {
    it('should add a single custom icon', () => {
      MediaFileIcon.add('custom_type', 'custom-type-svg')

      expect(MediaFileIcon.icons.custom_type).toBe('custom-type-svg')
      expect(MediaFileIcon.get('custom_type')).toBe('custom-type-svg')
    })

    it('should overwrite existing custom icon when registered again', () => {
      MediaFileIcon.add('png', 'png-v1')
      expect(MediaFileIcon.get('png')).toBe('png-v1')

      MediaFileIcon.add('png', 'png-v2')
      expect(MediaFileIcon.get('png')).toBe('png-v2')
    })

    it('should normalize code with leading dot when added', () => {
      MediaFileIcon.add('.webp', 'webp-svg')

      expect(MediaFileIcon.get('webp')).toBe('webp-svg')
      expect(MediaFileIcon.icons.webp).toBe('webp-svg')
    })

    it('should ignore adding empty code or whitespace-only code', () => {
      MediaFileIcon.add('', 'empty-svg')
      MediaFileIcon.add('   ', 'spaces-svg')

      expect(MediaFileIcon.has('')).toBe(false)
      expect(Object.keys(MediaFileIcon.icons)).toHaveLength(0)
    })

    it('should ignore adding empty, whitespace-only, or invalid non-string icons', () => {
      MediaFileIcon.add('png', '')
      MediaFileIcon.add('jpg', '   ')
      // @ts-expect-error test invalid runtime input
      MediaFileIcon.add('pdf', undefined)
      // @ts-expect-error test invalid runtime input
      MediaFileIcon.add('doc', null)
      // @ts-expect-error test invalid runtime input
      MediaFileIcon.add('xls', 123)

      expect(MediaFileIcon.has('png')).toBe(false)
      expect(MediaFileIcon.has('jpg')).toBe(false)
      expect(MediaFileIcon.has('pdf')).toBe(false)
      expect(MediaFileIcon.has('doc')).toBe(false)
      expect(MediaFileIcon.has('xls')).toBe(false)
      expect(Object.keys(MediaFileIcon.icons)).toHaveLength(0)
    })

    it('should trim leading and trailing whitespace from registered SVG icon', () => {
      MediaFileIcon.add('svg_trim', '  <svg viewBox="0 0 24 24"></svg>  \n')

      expect(MediaFileIcon.get('svg_trim')).toBe('<svg viewBox="0 0 24 24"></svg>')
      expect(MediaFileIcon.icons.svg_trim).toBe('<svg viewBox="0 0 24 24"></svg>')
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

    it('should safely handle empty or invalid object in addList without throwing and ignore arrays', () => {
      expect(() => {
        MediaFileIcon.addList({})
        // @ts-expect-error test invalid runtime input
        MediaFileIcon.addList(undefined)
        // @ts-expect-error test invalid runtime input
        MediaFileIcon.addList(null)
        // @ts-expect-error test invalid runtime input
        MediaFileIcon.addList('string')
        // @ts-expect-error test invalid runtime input
        MediaFileIcon.addList(123)
        // @ts-expect-error test invalid runtime input
        MediaFileIcon.addList(['icon1', 'icon2'])
      }).not.toThrow()

      expect(MediaFileIcon.has('0')).toBe(false)
      expect(MediaFileIcon.has('1')).toBe(false)
      expect(Object.keys(MediaFileIcon.icons)).toHaveLength(0)
    })

    it('should register all file icons via registerFileIcons', () => {
      registerFileIcons()

      expect(MediaFileIcon.get('png')).toBe(fileIcons.png)
      expect(MediaFileIcon.has('png')).toBe(true)
      expect(MediaFileIcon.get('pdf')).toBe(fileIcons.pdf)
      expect(MediaFileIcon.has('pdf')).toBe(true)
    })

    it('should support fluent method chaining with add, addList, and reset', () => {
      const result = MediaFileIcon
        .reset()
        .add('png', 'png-svg')
        .add('pdf', 'pdf-svg')
        .addList({ doc: 'doc-svg', xls: 'xls-svg' })

      expect(result).toBe(MediaFileIcon)
      expect(MediaFileIcon.get('png')).toBe('png-svg')
      expect(MediaFileIcon.get('pdf')).toBe('pdf-svg')
      expect(MediaFileIcon.get('doc')).toBe('doc-svg')
      expect(MediaFileIcon.get('xls')).toBe('xls-svg')

      expect(MediaFileIcon.reset()).toBe(MediaFileIcon)
      expect(MediaFileIcon.has('png')).toBe(false)
    })
  })

  describe('static remove and reset', () => {
    it('should remove a registered custom icon', () => {
      MediaFileIcon.add('png', 'custom-png-svg')
      expect(MediaFileIcon.has('png')).toBe(true)

      const removed = MediaFileIcon.remove('png')
      expect(removed).toBe(true)
      expect(MediaFileIcon.has('png')).toBe(false)
      expect(MediaFileIcon.get('png')).toBeUndefined()
    })

    it('should normalize code when removing icon', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      const removed = MediaFileIcon.remove('  .PNG  ')
      expect(removed).toBe(true)
      expect(MediaFileIcon.has('png')).toBe(false)
    })

    it('should return false when removing non-registered icon', () => {
      expect(MediaFileIcon.remove('unknown')).toBe(false)
    })

    it('should return false when removing empty or whitespace code', () => {
      expect(MediaFileIcon.remove('')).toBe(false)
      expect(MediaFileIcon.remove('   ')).toBe(false)
    })

    it('should reset all registered icons', () => {
      MediaFileIcon.add('png', 'png-svg')
      MediaFileIcon.add('jpg', 'jpg-svg')

      MediaFileIcon.reset()

      expect(MediaFileIcon.has('png')).toBe(false)
      expect(MediaFileIcon.has('jpg')).toBe(false)
      expect(Object.keys(MediaFileIcon.icons)).toHaveLength(0)
    })

    it('should be idempotent and not throw when resetting an already empty registry', () => {
      expect(() => MediaFileIcon.reset()).not.toThrow()
      expect(Object.keys(MediaFileIcon.icons)).toHaveLength(0)
    })
  })

  describe('static toCode', () => {
    it('should return empty string for empty or falsy string', () => {
      expect(MediaFileIcon.toCode('')).toBe('')
      // @ts-expect-error test falsy input
      expect(MediaFileIcon.toCode(null)).toBe('')
      // @ts-expect-error test falsy input
      expect(MediaFileIcon.toCode(undefined)).toBe('')
    })

    it('should safely return empty string for non-string runtime inputs', () => {
      // @ts-expect-error test non-string runtime input
      expect(MediaFileIcon.toCode(123)).toBe('')
      // @ts-expect-error test non-string runtime input
      expect(MediaFileIcon.toCode({})).toBe('')
      // @ts-expect-error test non-string runtime input
      expect(MediaFileIcon.toCode(true)).toBe('')
      // @ts-expect-error test non-string runtime input
      expect(MediaFileIcon.toCode([])).toBe('')
    })

    it('should normalize code by trimming whitespace and converting to lowercase', () => {
      expect(MediaFileIcon.toCode('  PNG  ')).toBe('png')
      expect(MediaFileIcon.toCode('FILE')).toBe('file')
      expect(MediaFileIcon.toCode('archive')).toBe('archive')
      expect(MediaFileIcon.toCode('\tPDF\n')).toBe('pdf')
    })

    it('should strip leading and trailing dots from extension', () => {
      expect(MediaFileIcon.toCode('.png')).toBe('png')
      expect(MediaFileIcon.toCode('png.')).toBe('png')
      expect(MediaFileIcon.toCode('..tar..')).toBe('tar')
      expect(MediaFileIcon.toCode('...tar.gz...')).toBe('tar.gz')
      expect(MediaFileIcon.toCode('.tar.gz.')).toBe('tar.gz')
    })

    it('should strip leading and trailing dots and spaces in all combinations', () => {
      expect(MediaFileIcon.toCode(' . png . ')).toBe('png')
      expect(MediaFileIcon.toCode('..  docx  ..')).toBe('docx')
      expect(MediaFileIcon.toCode(' . . xls . . ')).toBe('xls')
      expect(MediaFileIcon.toCode(' . . ')).toBe('')
    })

    it('should preserve internal dots in compound extensions and filenames', () => {
      expect(MediaFileIcon.toCode('tar.gz')).toBe('tar.gz')
      expect(MediaFileIcon.toCode('.min.js')).toBe('min.js')
    })

    it('should return empty string when string consists exclusively of dots', () => {
      expect(MediaFileIcon.toCode('.')).toBe('')
      expect(MediaFileIcon.toCode('...')).toBe('')
    })

    it('should strip parameters separated by semicolon', () => {
      expect(MediaFileIcon.toCode('text/plain; charset=utf-8')).toBe('text/plain')
      expect(MediaFileIcon.toCode('application/json;odata=verbose')).toBe('application/json')
      expect(MediaFileIcon.toCode('image/png ; q=0.9 ')).toBe('image/png')
    })

    it('should handle unicode characters and numbers', () => {
      expect(MediaFileIcon.toCode('MP3')).toBe('mp3')
      expect(MediaFileIcon.toCode('7Z')).toBe('7z')
      expect(MediaFileIcon.toCode('ФАЙЛ')).toBe('файл')
    })
  })

  describe('static toItem and find', () => {
    it('should return undefined if item is undefined', () => {
      expect(MediaFileIcon.toItem(undefined)).toBeUndefined()
      expect(MediaFileIcon.toItem()).toBeUndefined()
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

    it('should clone extensions array so mutations do not affect the original item', () => {
      const rawItem: MediaFileItem = {
        code: 'tar',
        name: 'Tape Archive',
        extensions: ['tar', 'tar.gz']
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized?.extensions).toEqual(['tar', 'tar.gz'])
      expect(customized?.extensions).not.toBe(rawItem.extensions)

      customized?.extensions?.push('extra')
      expect(rawItem.extensions).toEqual(['tar', 'tar.gz'])
    })

    it('should apply custom icon to item by primary code', () => {
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

    it('should apply custom icon to item by secondary extension when primary code has no icon', () => {
      MediaFileIcon.add('jpg', 'custom-jpg-svg')

      const rawItem: MediaFileItem = {
        code: 'jpeg',
        name: 'JPEG Image',
        extensions: ['jpeg', 'jpg'],
        icon: 'default-jpeg-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized).toBeDefined()
      expect(customized?.icon).toBe('custom-jpg-svg')
    })

    it('should prioritize primary code over secondary extensions when both have custom icons', () => {
      MediaFileIcon.add('jpeg', 'primary-jpeg-svg')
      MediaFileIcon.add('jpg', 'secondary-jpg-svg')

      const rawItem: MediaFileItem = {
        code: 'jpeg',
        name: 'JPEG Image',
        extensions: ['jpeg', 'jpg'],
        icon: 'default-jpeg-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized?.icon).toBe('primary-jpeg-svg')
    })

    it('should apply custom icon to item by MIME type when neither code nor extensions match', () => {
      MediaFileIcon.add('image/jpeg', 'custom-mime-svg')

      const rawItem: MediaFileItem = {
        code: 'jpeg',
        name: 'JPEG Image',
        extensions: ['jpeg', 'jpg'],
        mime: 'image/jpeg',
        icon: 'default-jpeg-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized).toBeDefined()
      expect(customized?.icon).toBe('custom-mime-svg')
    })

    it('should prioritize secondary extensions over MIME type when both have custom icons', () => {
      MediaFileIcon.add('jpg', 'extension-jpg-svg')
      MediaFileIcon.add('image/jpeg', 'mime-jpeg-svg')

      const rawItem: MediaFileItem = {
        code: 'jpeg',
        name: 'JPEG Image',
        extensions: ['jpeg', 'jpg'],
        mime: 'image/jpeg',
        icon: 'default-jpeg-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized?.icon).toBe('extension-jpg-svg')
    })

    it('should apply custom icon to item by category when code, extensions, and MIME do not match', () => {
      MediaFileIcon.add('video', 'custom-video-category-svg')

      const rawItem: MediaFileItem = {
        code: 'mkv',
        name: 'MKV Video',
        extensions: ['mkv'],
        mime: 'video/x-matroska',
        category: 'video',
        icon: 'default-video-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized).toBeDefined()
      expect(customized?.icon).toBe('custom-video-category-svg')
    })

    it('should prioritize MIME type over category when both have custom icons', () => {
      MediaFileIcon.add('video/x-matroska', 'mime-mkv-svg')
      MediaFileIcon.add('video', 'category-video-svg')

      const rawItem: MediaFileItem = {
        code: 'mkv',
        name: 'MKV Video',
        extensions: ['mkv'],
        mime: 'video/x-matroska',
        category: 'video',
        icon: 'default-video-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized?.icon).toBe('mime-mkv-svg')
    })

    it('should prioritize primary code over category when both have custom icons', () => {
      MediaFileIcon.add('mkv', 'primary-mkv-svg')
      MediaFileIcon.add('video', 'category-video-svg')

      const rawItem: MediaFileItem = {
        code: 'mkv',
        name: 'MKV Video',
        extensions: ['mkv'],
        mime: 'video/x-matroska',
        category: 'video',
        icon: 'default-video-svg'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized?.icon).toBe('primary-mkv-svg')
    })

    it('should handle item without initial icon property', () => {
      const rawItem: MediaFileItem = {
        code: 'unknown_ext',
        name: 'Unknown File'
      }

      const copy = MediaFileIcon.toItem(rawItem)
      expect(copy).toBeDefined()
      expect(copy?.icon).toBeUndefined()
      expect(copy).not.toBe(rawItem)

      MediaFileIcon.add('unknown_ext', 'custom-svg')
      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized?.icon).toBe('custom-svg')
    })

    it('should handle item without extensions or mime properties gracefully', () => {
      const minimalItem: MediaFileItem = {
        code: 'minimal',
        name: 'Minimal File'
      }

      const copy = MediaFileIcon.toItem(minimalItem)
      expect(copy).toBeDefined()
      expect(copy?.extensions).toBeUndefined()
      expect(copy?.mime).toBeUndefined()

      MediaFileIcon.add('minimal', 'minimal-svg')
      const customized = MediaFileIcon.toItem(minimalItem)
      expect(customized?.icon).toBe('minimal-svg')
    })

    it('should preserve all other item properties intact', () => {
      const fullItem: MediaFileItem = {
        code: 'mp4',
        name: 'MP4 Video',
        extensions: ['mp4', 'm4v'],
        mime: 'video/mp4',
        category: 'video',
        group: 'standard',
        icon: 'default-mp4'
      }

      MediaFileIcon.add('mp4', 'custom-mp4')
      const customized = MediaFileIcon.toItem(fullItem)

      expect(customized?.code).toBe('mp4')
      expect(customized?.name).toBe('MP4 Video')
      expect(customized?.category).toBe('video')
      expect(customized?.group).toBe('standard')
      expect(customized?.mime).toBe('video/mp4')
      expect(customized?.icon).toBe('custom-mp4')
    })
  })

  describe('Interoperability with MediaFile and MediaFiles', () => {
    it('should propagate registered custom icon to MediaFiles.get() and new MediaFile()', () => {
      MediaFileIcon.add('docx', 'custom-docx-svg')

      expect(MediaFiles.get('docx')?.icon).toBe('custom-docx-svg')
      expect(new MediaFile('document.docx').icon).toBe('custom-docx-svg')
    })

    it('should propagate custom icon to MediaFiles.getList()', () => {
      MediaFileIcon.add('png', 'custom-png-svg-list')

      const pngItem = MediaFiles.getList().find(item => item.code === 'png')
      expect(pngItem?.icon).toBe('custom-png-svg-list')
    })

    it('should propagate custom icon to MediaFiles.getNeutral()', () => {
      MediaFileIcon.add('file', 'custom-neutral-file-svg')

      const neutral = MediaFiles.getNeutral()
      expect(neutral?.icon).toBe('custom-neutral-file-svg')
    })
  })

  describe('State isolation and determinism', () => {
    it('should guarantee clean state between independent tests (test 1)', () => {
      expect(MediaFileIcon.has('test_isolation')).toBe(false)
      MediaFileIcon.add('test_isolation', 'isolation-1')
      expect(MediaFileIcon.get('test_isolation')).toBe('isolation-1')
    })

    it('should guarantee clean state between independent tests (test 2)', () => {
      expect(MediaFileIcon.has('test_isolation')).toBe(false)
      expect(MediaFileIcon.get('test_isolation')).toBeUndefined()
    })
  })

  describe('Empty registry optimization and lifecycle', () => {
    it('should fast-bailout in find() when registry is empty', () => {
      const rawItem: MediaFileItem = {
        code: 'custom_type',
        name: 'Custom Type',
        extensions: ['custom1', 'custom2'],
        mime: 'application/custom'
      }

      const customized = MediaFileIcon.toItem(rawItem)
      expect(customized).toBeDefined()
      expect(customized?.icon).toBeUndefined()
    })

    it('should correctly toggle custom icons presence across add, remove, and reset lifecycles', () => {
      const rawItem: MediaFileItem = { code: 'png', name: 'PNG' }

      // 1. Initial empty state: fast bailout
      expect(MediaFileIcon.toItem(rawItem)?.icon).toBeUndefined()

      // 2. Add icon: presence becomes active
      MediaFileIcon.add('png', 'custom-svg')
      expect(MediaFileIcon.toItem(rawItem)?.icon).toBe('custom-svg')

      // 3. Remove icon: presence resets when empty
      MediaFileIcon.remove('png')
      expect(MediaFileIcon.toItem(rawItem)?.icon).toBeUndefined()

      // 4. Add multiple, remove one, presence stays active until all removed
      MediaFileIcon.add('png', 'png-svg')
      MediaFileIcon.add('pdf', 'pdf-svg')
      MediaFileIcon.remove('png')
      expect(MediaFileIcon.toItem(rawItem)?.icon).toBeUndefined()
      expect(MediaFileIcon.toItem({ code: 'pdf', name: 'PDF' })?.icon).toBe('pdf-svg')
      MediaFileIcon.remove('pdf')
      expect(MediaFileIcon.toItem({ code: 'pdf', name: 'PDF' })?.icon).toBeUndefined()

      // 5. Add and reset
      MediaFileIcon.add('png', 'custom-svg')
      MediaFileIcon.reset()
      expect(MediaFileIcon.toItem(rawItem)?.icon).toBeUndefined()
    })
  })
})
