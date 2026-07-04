import { shallowRef } from 'vue'
import { executeFunction } from '@dxtmisha/functional'
import type { TextIndex, TextList } from '../types/textTypes'

/**
 * TextIncludeInstance class for request-isolated text storage.
 *
 * Класс TextIncludeInstance для изолированного в рамках запроса хранения текстов.
 */
export class TextIncludeInstance {
  /** Global list of texts for all components / Глобальный список текстов для всех компонентов */
  readonly list = shallowRef<TextList>({
    breadcrumb: 'Breadcrumb',
    cancel: 'Cancel',
    characterLimit: 'Character limit exceeded',
    characterRemaining: 'Remaining [left] characters',
    close: 'Close',
    copiedClipboard: 'Copied to the clipboard',
    decrement: 'Decrease',
    entriesMatch: 'Entries do not match',
    first: 'First',
    hide: 'Hide',
    increment: 'Increase',
    info: '[item] of [count]',
    last: 'Last',
    loading: 'Loading',
    more: 'Show more',
    morePrev: 'Show previous',
    next: 'Next',
    notFound: 'Nothing found',
    notifications: 'Notifications',
    ok: 'OK',
    page: 'Page',
    previous: 'Previous',
    rowsPerPage: 'Rows per page',
    show: 'Show',
    symbol: 'Symbol [index]'
  })

  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts / Список текстов
   */
  initText(texts: TextList): void {
    this.list.value = {
      ...this.list.value,
      ...texts
    }
  }

  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index / Индекс текста
   * @returns global text string / глобальная строка текста
   */
  getGlobalText(
    index: TextIndex
  ): string | undefined {
    if (this.list.value?.[index]) {
      return executeFunction(this.list.value[index])
    }

    return undefined
  }
}
