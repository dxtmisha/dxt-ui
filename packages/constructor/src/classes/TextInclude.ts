import { computed, shallowRef } from 'vue'
import { executeFunction } from '@dxtmisha/functional'

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
    close: 'Close',
    copiedClipboard: 'Copied to the clipboard',
    entriesMatch: 'Entries do not match',
    loading: 'Loading',
    ok: 'OK'
  })

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

  /** Close text/ Текст закрытия */
  readonly close = computed<string | undefined>(
    () => this.getText('close', this.props.textClose)
  )

  /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
  readonly copiedClipboard = computed<string | undefined>(
    () => this.getText('copiedClipboard', this.props.textCopiedClipboard)
  )

  /** Entries match text/ Текст о несовпадении записей */
  readonly entriesMatch = computed<string | undefined>(
    () => this.getText('entriesMatch', this.props.textEntriesMatch)
  )

  /** Loading text/ Текст загрузки */
  readonly loading = computed<string | undefined>(
    () => this.getText('loading', this.props.textLoading)
  )

  /** OK text/ Текст подтверждения */
  readonly ok = computed<string | undefined>(
    () => this.getText('ok', this.props.textOk)
  )

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
