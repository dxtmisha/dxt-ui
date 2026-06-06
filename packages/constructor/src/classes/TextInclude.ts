import { shallowRef } from 'vue'
import { executeFunction, toCamelCase } from '@dxtmisha/functional'

import type {
  TextAllPropsInclude,
  TextIndex,
  TextList,
  TextValue
} from '../types/textTypes'

/**
 * TextInclude class for managing text-related properties.
 *
 * Класс TextInclude для управления свойствами, связанными с текстом.
 */
export class TextInclude {
  /** Global list of texts for all components / Глобальный список текстов для всех компонентов */
  static readonly list = shallowRef<TextList>({
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
    next: 'Next',
    notFound: 'Nothing found',
    notifications: 'Notifications',
    ok: 'OK',
    previous: 'Previous',
    rowsPerPage: 'Rows per page',
    show: 'Show'
  })

  /** Cached text getter functions / Кэшированные функции-геттеры для текстов */
  readonly texts: Record<string, () => (string | undefined)> = {}

  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts / Список текстов
   */
  static initText(texts: TextList): void {
    this.list.value = {
      ...this.list.value,
      ...texts
    }
  }

  /**
   * Constructor for TextInclude class.
   *
   * Конструктор для класса TextInclude.
   * @param props Component properties / Свойства компонента
   */
  constructor(
    protected readonly props: TextAllPropsInclude
  ) {
  }

  /** Cancel text / Текст отмены */
  get cancel() {
    return this.get('textCancel')
  }

  /** Character limit exceeded text / Текст о превышении лимита символов */
  get characterLimit() {
    return this.get('textCharacterLimit')
  }

  /** Remaining characters text / Текст об оставшихся символах */
  get characterRemaining() {
    return this.get('textCharacterRemaining')
  }

  /** Close text / Текст закрытия */
  get close() {
    return this.get('textClose')
  }

  /** Copied to the clipboard text / Текст о копировании в буфер обмена */
  get copiedClipboard() {
    return this.get('textCopiedClipboard')
  }

  /** Text for decreasing value / Текст для уменьшения значения */
  get decrement() {
    return this.get('textDecrement')
  }

  /** Entries match text / Текст о несовпадении записей */
  get entriesMatch() {
    return this.get('textEntriesMatch')
  }

  /** First page text / Текст первой страницы */
  get first() {
    return this.get('textFirst')
  }

  /** Hide text / Текст скрытия */
  get hide() {
    return this.get('textHide')
  }

  /** Text for increasing value / Текст для увеличения значения */
  get increment() {
    return this.get('textIncrement')
  }

  /** Info text / Текст информации о диапазоне */
  get info() {
    return this.get('textInfo')
  }

  /** Last page text / Текст последней страницы */
  get last() {
    return this.get('textLast')
  }

  /** Loading text / Текст загрузки */
  get loading() {
    return this.get('textLoading')
  }

  /** More text / Текст "показать еще" */
  get more() {
    return this.get('textMore')
  }

  /** Next text / Текст следующего */
  get next() {
    return this.get('textNext')
  }

  /** Nothing found text / Текст о том, что ничего не найдено */
  get notFound() {
    return this.get('textNotFound')
  }

  /** Notifications text / Текст уведомлений */
  get notifications() {
    return this.get('textNotifications')
  }

  /** OK text / Текст подтверждения */
  get ok() {
    return this.get('textOk')
  }

  /** Previous text / Текст предыдущего */
  get previous() {
    return this.get('textPrevious')
  }

  /** Rows per page text / Текст "строк на странице" */
  get rowsPerPage() {
    return this.get('textRowsPerPage')
  }

  /** Show text / Текст показа */
  get show() {
    return this.get('textShow')
  }

  /**
   * Get the text by its name.
   *
   * Получить текст по его названию.
   * @param name property name / название свойства
   * @returns resolved text value / полученное текстовое значение
   */
  get(name: keyof TextAllPropsInclude): string | undefined {
    if (!(name in this.texts)) {
      const code = toCamelCase(
        String(name).replace('text', '')
      )

      this.texts[name] = () => this.getText(code, this.props?.[name])
    }

    return this.texts[name]()
  }

  /**
   * Get text by index, with priority to local value.
   *
   * Получение текста по индексу с приоритетом локального значения.
   * @param index Text index / Индекс текста
   * @param value Local text value / Локальное значение текста
   * @returns resolved text string / полученная строка текста
   */
  protected getText(
    index: TextIndex,
    value: TextValue
  ): string | undefined {
    if (value) {
      return executeFunction(value)
    }

    return this.getGlobalText(index)
  }

  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index / Индекс текста
   * @returns global text string / глобальная строка текста
   */
  protected getGlobalText(
    index: TextIndex
  ): string | undefined {
    if (TextInclude.list.value?.[index]) {
      return executeFunction(TextInclude.list.value[index])
    }

    return undefined
  }
}
