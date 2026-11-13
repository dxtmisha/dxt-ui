// @vitest-environment node
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ServerStorage } from '@dxtmisha/functional'
import { TextInclude } from '../TextInclude'
import type { TextAllPropsInclude } from '../../types/textTypes'

describe('TextInclude', () => {
  let currentRequest: Record<string, unknown> = {}

  beforeEach(() => {
    ServerStorage.reset()
    currentRequest = {}
    ServerStorage.init(() => currentRequest)
  })

  afterEach(() => {
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & All 40 getters)', () => {
    it.each<[keyof TextInclude, keyof TextAllPropsInclude, string]>([
      ['actions', 'textActions', 'Actions'],
      ['am', 'textAm', 'AM'],
      ['breadcrumb', 'textBreadcrumb', 'Breadcrumb'],
      ['cancel', 'textCancel', 'Cancel'],
      ['change', 'textChange', 'Change'],
      ['characterLimit', 'textCharacterLimit', 'Character limit exceeded'],
      ['characterRemaining', 'textCharacterRemaining', 'Remaining [left] characters'],
      ['close', 'textClose', 'Close'],
      ['copiedClipboard', 'textCopiedClipboard', 'Copied to the clipboard'],
      ['crop', 'textCrop', 'Crop'],
      ['decrement', 'textDecrement', 'Decrease'],
      ['delete', 'textDelete', 'Delete'],
      ['deleteConfirm', 'textDeleteConfirm', 'Are you sure you want to delete this file?'],
      ['dropzone', 'textDropzone', 'Drop files here or click to upload'],
      ['edit', 'textEdit', 'Edit'],
      ['entriesMatch', 'textEntriesMatch', 'Entries do not match'],
      ['error', 'textError', 'Error'],
      ['first', 'textFirst', 'First'],
      ['hide', 'textHide', 'Hide'],
      ['increment', 'textIncrement', 'Increase'],
      ['info', 'textInfo', '[item] of [count]'],
      ['last', 'textLast', 'Last'],
      ['loading', 'textLoading', 'Loading'],
      ['loadingFile', 'textLoadingFile', 'Uploading your file'],
      ['more', 'textMore', 'Show more'],
      ['morePrev', 'textMorePrev', 'Show previous'],
      ['next', 'textNext', 'Next'],
      ['notFound', 'textNotFound', 'Nothing found'],
      ['notifications', 'textNotifications', 'Notifications'],
      ['ok', 'textOk', 'OK'],
      ['page', 'textPage', 'Page'],
      ['pagination', 'textPagination', 'Pagination'],
      ['pm', 'textPm', 'PM'],
      ['previous', 'textPrevious', 'Previous'],
      ['retry', 'textRetry', 'Retry'],
      ['rowsPerPage', 'textRowsPerPage', 'Rows per page'],
      ['search', 'textSearch', 'Search'],
      ['show', 'textShow', 'Show'],
      ['symbol', 'textSymbol', 'Symbol [index]'],
      ['uploadSuccess', 'textUploadSuccess', 'File uploaded successfully']
    ])('should resolve getter "%s" from global fallback and local override "%s"', (getterName, propName, defaultText) => {
      const defaultInclude = new TextInclude()
      expect(defaultInclude[getterName]).toBe(defaultText)

      const customText = `Custom ${String(getterName)}`
      const customInclude = new TextInclude({ [propName]: customText })
      expect(customInclude[getterName]).toBe(customText)
    })

    it('should evaluate function property overrides dynamically and cache getter closures in texts', () => {
      let step = 0
      const textInclude = new TextInclude({
        textOk: () => `Confirm #${++step}`,
        textClose: 'Close Window'
      })

      expect(textInclude.ok).toBe('Confirm #1')
      expect(textInclude.ok).toBe('Confirm #2')
      expect(textInclude.close).toBe('Close Window')
      expect(textInclude.texts.textClose).toBeDefined()
      expect(textInclude.texts.textClose?.()).toBe('Close Window')
      expectTypeOf(textInclude.ok).toEqualTypeOf<string | undefined>()
    })

    it('should expose static list and initText to update request-scoped global texts', () => {
      expect(TextInclude.list.value.ok).toBe('OK')

      TextInclude.initText({ ok: 'Globalized OK' })
      const textInclude = new TextInclude({})
      expect(textInclude.ok).toBe('Globalized OK')
    })

    it('should retain the loading label when an undefined override is provided', () => {
      TextInclude.initText({ loading: undefined })

      expect(new TextInclude().loading).toBe('Loading')
    })
  })

  describe('Boundary values, omitted props, and SSR request isolation', () => {
    it('should safely handle omitted props in constructor and fall back to global text on empty string', () => {
      const withoutProps = new TextInclude()
      expect(withoutProps.loading).toBe('Loading')

      const withEmptyString = new TextInclude({ textLoading: '' })
      expect(withEmptyString.loading).toBe('Loading')
    })

    it('should isolate global text mutations across separate SSR request contexts', () => {
      const requestA: Record<string, unknown> = {}
      const requestB: Record<string, unknown> = {}

      currentRequest = requestA
      TextInclude.initText({ loading: 'Загрузка (Запрос А)' })
      expect(new TextInclude().loading).toBe('Загрузка (Запрос А)')

      currentRequest = requestB
      expect(new TextInclude().loading).toBe('Loading')
    })
  })
})
