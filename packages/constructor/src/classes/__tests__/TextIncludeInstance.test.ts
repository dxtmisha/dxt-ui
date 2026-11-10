import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { TextIncludeInstance } from '../TextIncludeInstance'
import type { TextIndex } from '../../types/textTypes'

describe('TextIncludeInstance', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it.each<[TextIndex, string]>([
      ['am', 'AM'],
      ['breadcrumb', 'Breadcrumb'],
      ['cancel', 'Cancel'],
      ['change', 'Change'],
      ['characterLimit', 'Character limit exceeded'],
      ['characterRemaining', 'Remaining [left] characters'],
      ['close', 'Close'],
      ['copiedClipboard', 'Copied to the clipboard'],
      ['crop', 'Crop'],
      ['decrement', 'Decrease'],
      ['delete', 'Delete'],
      ['deleteConfirm', 'Are you sure you want to delete this file?'],
      ['dropzone', 'Drop files here or click to upload'],
      ['edit', 'Edit'],
      ['entriesMatch', 'Entries do not match'],
      ['error', 'Error'],
      ['first', 'First'],
      ['hide', 'Hide'],
      ['increment', 'Increase'],
      ['info', '[item] of [count]'],
      ['last', 'Last'],
      ['loading', 'Loading'],
      ['loadingFile', 'Uploading your file'],
      ['more', 'Show more'],
      ['morePrev', 'Show previous'],
      ['next', 'Next'],
      ['notFound', 'Nothing found'],
      ['notifications', 'Notifications'],
      ['ok', 'OK'],
      ['page', 'Page'],
      ['pagination', 'Pagination'],
      ['pm', 'PM'],
      ['previous', 'Previous'],
      ['retry', 'Retry'],
      ['rowsPerPage', 'Rows per page'],
      ['search', 'Search'],
      ['show', 'Show'],
      ['symbol', 'Symbol [index]'],
      ['uploadSuccess', 'File uploaded successfully']
    ])('should resolve default English text for "%s" as "%s"', (key, expected) => {
      const instance = new TextIncludeInstance()
      const result = instance.getGlobalText(key)

      expect(result).toBe(expected)
      expectTypeOf(result).toEqualTypeOf<string | undefined>()
    })

    it('should merge partial text overrides via initText without losing existing keys', () => {
      const instance = new TextIncludeInstance()
      instance.initText({
        cancel: 'Abort',
        customKey: 'Custom Label'
      })

      expect(instance.getGlobalText('cancel')).toBe('Abort')
      expect(instance.getGlobalText('customKey')).toBe('Custom Label')
      expect(instance.getGlobalText('ok')).toBe('OK')
      expect(instance.getGlobalText('loading')).toBe('Loading')
    })

    it('should evaluate function text resolvers dynamically in getGlobalText', () => {
      const instance = new TextIncludeInstance()
      let counter = 0
      instance.initText({
        ok: () => `Dynamic OK #${++counter}`
      })

      expect(instance.getGlobalText('ok')).toBe('Dynamic OK #1')
      expect(instance.getGlobalText('ok')).toBe('Dynamic OK #2')
    })
  })

  describe('Boundary values, empty inputs, and instance isolation', () => {
    it('should return undefined for non-existent or empty keys', () => {
      const instance = new TextIncludeInstance()
      instance.initText({
        emptyString: '',
        undefinedValue: undefined
      })

      expect(instance.getGlobalText('unknownKey')).toBeUndefined()
      expect(instance.getGlobalText('emptyString')).toBeUndefined()
      expect(instance.getGlobalText('undefinedValue')).toBeUndefined()
    })

    it('should keep separate TextIncludeInstance instances completely isolated', () => {
      const instanceA = new TextIncludeInstance()
      const instanceB = new TextIncludeInstance()

      instanceA.initText({ cancel: 'Отмена' })

      expect(instanceA.getGlobalText('cancel')).toBe('Отмена')
      expect(instanceB.getGlobalText('cancel')).toBe('Cancel')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic, Vietnamese diacritics, CJK, and Emoji strings', () => {
      const instance = new TextIncludeInstance()
      instance.initText({
        cancel: 'Отменить действие',
        loading: 'Đang tải dữ liệu...',
        search: '搜索内容 🔍'
      })

      expect(instance.getGlobalText('cancel')).toBe('Отменить действие')
      expect(instance.getGlobalText('loading')).toBe('Đang tải dữ liệu...')
      expect(instance.getGlobalText('search')).toBe('搜索内容 🔍')
    })
  })
})
