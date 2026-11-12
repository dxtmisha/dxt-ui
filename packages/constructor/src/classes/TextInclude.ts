import { type ShallowRef } from 'vue'
import { executeFunction, ServerStorage, toCamelCase } from '@dxtmisha/functional'

import { TextIncludeInstance } from './TextIncludeInstance'

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
  static get list(): ShallowRef<TextList> {
    return this.getObject().list
  }

  /**
   * Returns a request-isolated instance of TextIncludeInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр TextIncludeInstance.
   * @returns TextIncludeInstance instance / экземпляр TextIncludeInstance
   */
  static getObject(): TextIncludeInstance {
    return ServerStorage.get('__ui:text-include-instance__', () => new TextIncludeInstance())
  }

  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts / Список текстов
   */
  static initText(texts: Partial<TextList>): void {
    this.getObject().initText(texts)
  }

  /** Cached text getter functions / Кэшированные функции-геттеры для текстов */
  readonly texts: Record<string, () => (string | undefined)> = {}

  /**
   * Constructor for TextInclude class.
   *
   * Конструктор для класса TextInclude.
   * @param props Component properties / Свойства компонента
   */
  constructor(
    protected readonly props?: TextAllPropsInclude
  ) {
  }

  /** Actions text / Текст действий */
  get actions(): string | undefined {
    return this.get('textActions')
  }

  /** AM text / Текст AM */
  get am(): string | undefined {
    return this.get('textAm')
  }

  /** Breadcrumb navigation text / Текст навигации хлебных крошек */
  get breadcrumb(): string | undefined {
    return this.get('textBreadcrumb')
  }

  /** Cancel text / Текст отмены */
  get cancel(): string | undefined {
    return this.get('textCancel')
  }

  /** Change text / Текст изменения */
  get change(): string | undefined {
    return this.get('textChange')
  }

  /** Character limit exceeded text / Текст о превышении лимита символов */
  get characterLimit(): string | undefined {
    return this.get('textCharacterLimit')
  }

  /** Remaining characters text / Текст об оставшихся символах */
  get characterRemaining(): string | undefined {
    return this.get('textCharacterRemaining')
  }

  /** Close text / Текст закрытия */
  get close(): string | undefined {
    return this.get('textClose')
  }

  /** Copied to the clipboard text / Текст о копировании в буфер обмена */
  get copiedClipboard(): string | undefined {
    return this.get('textCopiedClipboard')
  }

  /** Crop text / Текст кадрирования */
  get crop(): string | undefined {
    return this.get('textCrop')
  }

  /** Text for decreasing value / Текст для уменьшения значения */
  get decrement(): string | undefined {
    return this.get('textDecrement')
  }

  /** Delete text / Текст удаления */
  get delete(): string | undefined {
    return this.get('textDelete')
  }

  /** Delete confirmation text / Текст подтверждения удаления */
  get deleteConfirm(): string | undefined {
    return this.get('textDeleteConfirm')
  }

  /** Dropzone default text / Текст области загрузки по умолчанию */
  get dropzone(): string | undefined {
    return this.get('textDropzone')
  }

  /** Edit text / Текст редактирования */
  get edit(): string | undefined {
    return this.get('textEdit')
  }

  /** Entries match text / Текст о несовпадении записей */
  get entriesMatch(): string | undefined {
    return this.get('textEntriesMatch')
  }

  /** Error text / Текст ошибки */
  get error(): string | undefined {
    return this.get('textError')
  }

  /** First page text / Текст первой страницы */
  get first(): string | undefined {
    return this.get('textFirst')
  }

  /** Hide text / Текст скрытия */
  get hide(): string | undefined {
    return this.get('textHide')
  }

  /** Text for increasing value / Текст для увеличения значения */
  get increment(): string | undefined {
    return this.get('textIncrement')
  }

  /** Info text / Текст информации о диапазоне */
  get info(): string | undefined {
    return this.get('textInfo')
  }

  /** Last page text / Текст последней страницы */
  get last(): string | undefined {
    return this.get('textLast')
  }

  /** Loading text / Текст загрузки */
  get loading(): string | undefined {
    return this.get('textLoading')
  }

  /** Loading file text / Текст загрузки файла */
  get loadingFile(): string | undefined {
    return this.get('textLoadingFile')
  }

  /** More text / Текст "показать еще" */
  get more(): string | undefined {
    return this.get('textMore')
  }

  /** More previous text / Текст "показать предыдущие" */
  get morePrev(): string | undefined {
    return this.get('textMorePrev')
  }

  /** Next text / Текст следующего */
  get next(): string | undefined {
    return this.get('textNext')
  }

  /** Nothing found text / Текст о том, что ничего не найдено */
  get notFound(): string | undefined {
    return this.get('textNotFound')
  }

  /** Notifications text / Текст уведомлений */
  get notifications(): string | undefined {
    return this.get('textNotifications')
  }

  /** OK text / Текст подтверждения */
  get ok(): string | undefined {
    return this.get('textOk')
  }

  /** Page text / Текст страницы */
  get page(): string | undefined {
    return this.get('textPage')
  }

  /** Pagination text / Текст пагинации */
  get pagination(): string | undefined {
    return this.get('textPagination')
  }

  /** PM text / Текст PM */
  get pm(): string | undefined {
    return this.get('textPm')
  }

  /** Previous text / Текст предыдущего */
  get previous(): string | undefined {
    return this.get('textPrevious')
  }

  /** Retry text / Текст повтора */
  get retry(): string | undefined {
    return this.get('textRetry')
  }

  /** Rows per page text / Текст "строк на странице" */
  get rowsPerPage(): string | undefined {
    return this.get('textRowsPerPage')
  }

  /** Search text / Текст поиска */
  get search(): string | undefined {
    return this.get('textSearch')
  }

  /** Show text / Текст показа */
  get show(): string | undefined {
    return this.get('textShow')
  }

  /** Symbol text / Текст символа */
  get symbol(): string | undefined {
    return this.get('textSymbol')
  }

  /** Upload success text / Текст успешной загрузки */
  get uploadSuccess(): string | undefined {
    return this.get('textUploadSuccess')
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
        String(name).replace(/^text/, '')
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

    return TextInclude.getObject().getGlobalText(index)
  }
}
