import { computed, type ComputedRef, shallowRef } from 'vue'
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
  /**
   * Global list of texts for all components/ Глобальный список текстов для всех компонентов
   */
  static readonly list = shallowRef<TextList>({
    cancel: 'Cancel',
    characterLimit: 'Character limit exceeded',
    characterRemaining: 'Remaining [left] characters',
    close: 'Close',
    copiedClipboard: 'Copied to the clipboard',
    decrement: 'Decrease',
    entriesMatch: 'Entries do not match',
    increment: 'Increase',
    loading: 'Loading',
    next: 'Next',
    ok: 'OK',
    previous: 'Previous'
  })

  readonly texts: Record<string, ComputedRef<string | undefined>> = {}

  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts/ Список текстов
   */
  static initText(texts: TextList): void {
    this.list.value = {
      ...this.list.value,
      ...texts
    }
  }

  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(
    protected readonly props: TextAllPropsInclude
  ) {
  }

  /** Cancel text/ Текст отмены */
  get cancel() {
    return this.get('textCancel')
  }

  /** Character limit exceeded text/ Текст о превышении лимита символов */
  get characterLimit() {
    return this.get('textCharacterLimit')
  }

  /** Remaining characters text/ Текст об оставшихся символах */
  get characterRemaining() {
    return this.get('textCharacterRemaining')
  }

  /** Close text/ Текст закрытия */
  get close() {
    return this.get('textClose')
  }

  /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
  get copiedClipboard() {
    return this.get('textCopiedClipboard')
  }

  /** Text for decreasing value/ Текст для уменьшения значения */
  get decrement() {
    return this.get('textDecrement')
  }

  /** Entries match text/ Текст о несовпадении записей */
  get entriesMatch() {
    return this.get('textEntriesMatch')
  }

  /** Text for increasing value/ Текст для увеличения значения */
  get increment() {
    return this.get('textIncrement')
  }

  /** Loading text/ Текст загрузки */
  get loading() {
    return this.get('textLoading')
  }

  /** Next text/ Текст следующего */
  get next() {
    return this.get('textNext')
  }

  /** OK text/ Текст подтверждения */
  get ok() {
    return this.get('textOk')
  }

  /** Previous text/ Текст предыдущего */
  get previous() {
    return this.get('textPrevious')
  }

  /**
   * Get the text by its name.
   *
   * Получить текст по его названию.
   * @param name property name/ название свойства
   */
  get(name: keyof TextAllPropsInclude): ComputedRef<string | undefined> {
    if (name in this.texts) {
      return this.texts[name] as ComputedRef<string | undefined>
    }

    const code = toCamelCase(
      String(name).replace('text', '')
    )

    const text = computed<string | undefined>(
      () => this.getText(code, this.props?.[name])
    )

    return this.texts[name] = text
  }

  /**
   * Get text by index, with priority to local value.
   *
   * Получение текста по индексу с приоритетом локального значения.
   * @param index Text index/ Индекс текста
   * @param value Local text value/ Локальное значение текста
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
   * @param index Text index/ Индекс текста
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
