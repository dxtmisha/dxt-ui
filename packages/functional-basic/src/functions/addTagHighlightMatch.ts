import { encodeAttribute } from './encodeAttribute'
import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { isString } from './isString'
import { removeTag } from './removeTag'
import { toString } from './toString'

/** Default CSS class for highlighting matches / CSS-класс по умолчанию для выделения совпадений */
const DEFAULT_CLASS_NAME = 'sys-highlight-match'

/** Precomputed opening span tag for the default CSS class / Предвычисленный открывающий тег span для CSS-класса по умолчанию */
const DEFAULT_TAG_START = `<span class="${DEFAULT_CLASS_NAME}">`

/** Closing span tag for highlighting / Закрывающий тег span для подсветки */
const TAG_END = '</span>'

/** Default empty options object to avoid allocation per call / Объект опций по умолчанию для предотвращения аллокаций при каждом вызове */
const DEFAULT_OPTIONS: AddTagHighlightMatchOptions = {}

/**
 * Maximum Unicode code point in the Basic Multilingual Plane (BMP) /
 * Максимальная кодовая точка Unicode в базовой многоязыковой плоскости (BMP)
 */
const MAX_BMP_CODE_POINT = 0xFFFF

/**
 * Regular expression matching HTML tags and comments to preserve them during unescaped highlighting /
 * Регулярное выражение для поиска HTML-тегов и комментариев с целью их сохранения при неэкранированной подсветке
 */
const REGEXP_HTML_TAG = /<!--[\s\S]*?(?:--!?>|$)|<\/?[a-zA-Z][\w:-]*(?:[^>"'<]|"[^"]*"|'[^']*')*(?:>|[^<>]*>?)/g

/** Last cached string search query for batch processing / Последний кэшированный строковый поисковый запрос для пакетной обработки */
let cachedSearchQuery: string | undefined = undefined

/** Last compiled global search RegExp for the cached string query / Последнее скомпилированное глобальное регулярное выражение для кэшированного запроса */
let cachedSearchExp: RegExp | undefined = undefined

/**
 * Escapes HTML special characters in a text segment when required.
 *
 * Экранирует специальные HTML-символы в текстовом сегменте при необходимости.
 * @param value text segment / текстовый сегмент
 * @param shouldEscape whether to escape HTML characters / нужно ли экранировать HTML-символы
 * @returns formatted text segment / отформатированный текстовый сегмент
 */
const formatSegment = (
  value: string,
  shouldEscape: boolean
): string => shouldEscape ? encodeAttribute(value) : value

/**
 * Resolves a global search regular expression, reusing the cached instance for repeated string queries across large datasets.
 *
 * Определяет глобальное регулярное выражение поиска, переиспользуя кэшированный экземпляр при повторяющихся строковых запросах на больших наборах данных.
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @returns global search RegExp or null if search is invalid / глобальное регулярное выражение поиска или null, если запрос невалиден
 */
function getSearchExp(search: string | RegExp): RegExp | null {
  if (isString(search)) {
    if (search !== cachedSearchQuery) {
      const rawExp = getSeparatingSearchExp(search)
      cachedSearchQuery = search
      cachedSearchExp = rawExp.source !== '(?!)' ? rawExp : undefined
    }

    if (!cachedSearchExp) {
      return null
    }

    cachedSearchExp.lastIndex = 0
    return cachedSearchExp
  }

  const rawExp = getSeparatingSearchExp(search)

  if (rawExp.source === '(?!)') {
    return null
  }

  return rawExp.global
    ? rawExp
    : new RegExp(rawExp.source, `${rawExp.flags}g`)
}

/**
 * Highlights regex matches in a single pass with HTML escaping or lazy zero-allocation HTML tag skipping.
 *
 * Выделяет совпадения регулярного выражения за один проход с экранированием HTML или ленивым пропуском HTML-тегов без лишних аллокаций.
 * @param value prepared source string / подготовленная исходная строка
 * @param searchExp global search regular expression / глобальное регулярное выражение поиска
 * @param tagStart opening highlight span tag / открывающий тег span для подсветки
 * @param shouldEscape whether to escape HTML characters / нужно ли экранировать HTML-символы
 * @returns string with highlighted matches / строка с выделенными совпадениями
 */
function highlightMatches(
  value: string,
  searchExp: RegExp,
  tagStart: string,
  shouldEscape: boolean
): string {
  let result = ''
  let lastIndex = 0
  let htmlTagStart = -1
  let htmlTagEnd = -1
  let match: RegExpExecArray | null

  if (!shouldEscape) {
    REGEXP_HTML_TAG.lastIndex = 0
  }

  while ((match = searchExp.exec(value)) !== null) {
    const matchText = match[0]
    const matchIndex = match.index

    if (matchText.length === 0) {
      const codePoint = value.codePointAt(matchIndex) ?? 0
      searchExp.lastIndex = matchIndex + (codePoint > MAX_BMP_CODE_POINT ? 2 : 1)
      continue
    }

    const matchEnd = matchIndex + matchText.length

    if (!shouldEscape) {
      while (htmlTagEnd <= matchIndex) {
        const tagMatch = REGEXP_HTML_TAG.exec(value)

        if (tagMatch === null) {
          htmlTagStart = Infinity
          htmlTagEnd = Infinity
          break
        }

        htmlTagStart = tagMatch.index
        htmlTagEnd = htmlTagStart + tagMatch[0].length
      }

      if (matchEnd > htmlTagStart) {
        continue
      }
    }

    if (matchIndex > lastIndex) {
      result += formatSegment(value.slice(lastIndex, matchIndex), shouldEscape)
    }

    result += `${tagStart}${formatSegment(matchText, shouldEscape)}${TAG_END}`
    lastIndex = matchEnd
  }

  if (lastIndex === 0) {
    return formatSegment(value, shouldEscape)
  }

  if (lastIndex < value.length) {
    result += formatSegment(value.slice(lastIndex), shouldEscape)
  }

  return result
}

/**
 * Options for configuring match highlighting in addTagHighlightMatch /
 * Опции для настройки выделения совпадений в addTagHighlightMatch
 */
export interface AddTagHighlightMatchOptions {
  /** Highlighting CSS class / CSS-класс выделения */
  className?: string
  /** Should escape the string / Нужно ли экранировать строку */
  shouldEscape?: boolean
  /** Should remove existing HTML tags if shouldEscape is false / Нужно ли удалять существующие HTML-теги, если shouldEscape равно false */
  shouldRemoveTag?: boolean
}

/**
 * Adds a `<span>` tag to highlight search matches in a string.
 * Optimized for high-throughput batch processing (10,000+ records) via native C++ `String.prototype.replace`
 * on the standard plain-text fast path, single-pass scanning for escaped or HTML-preserving modes,
 * search `RegExp` caching across repeated queries, precomputed default tag markup,
 * and lazy zero-allocation HTML tag boundary detection.
 *
 * Добавляет тег `<span>` для выделения совпадений поиска в строке.
 * Оптимизирована для высокопроизводительной потоковой обработки (10 000+ записей) за счет использования
 * нативного `String.prototype.replace` для основного сценария, однопроходного сканирования при экранировании
 * или сохранении HTML-тегов, кэширования `RegExp` поискового запроса при повторных вызовах,
 * предвычисленной разметки тега по умолчанию и ленивого определения границ HTML-тегов без аллокаций массивов.
 * @param value initial value / исходное значение
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param options configuration options / объект опций
 * @returns string with highlighted matches / строка с выделенными совпадениями
 */
export function addTagHighlightMatch(
  value?: string | number | null,
  search?: string | RegExp,
  options: AddTagHighlightMatchOptions = DEFAULT_OPTIONS
): string {
  const {
    className = DEFAULT_CLASS_NAME,
    shouldEscape = false,
    shouldRemoveTag = true
  } = options

  const rawValue = toString(value)
  const valueForSearch = !shouldEscape && shouldRemoveTag
    ? removeTag(rawValue)
    : rawValue

  if (
    valueForSearch.length > 0
    && search
  ) {
    const searchExp = getSearchExp(search)

    if (searchExp !== null) {
      const tagStart = className === DEFAULT_CLASS_NAME
        ? DEFAULT_TAG_START
        : `<span class="${encodeAttribute(className)}">`

      if (
        !shouldEscape
        && (shouldRemoveTag || !valueForSearch.includes('<'))
      ) {
        return valueForSearch.replace(
          searchExp,
          match => match ? `${tagStart}${match}${TAG_END}` : ''
        )
      }

      return highlightMatches(
        valueForSearch,
        searchExp,
        tagStart,
        shouldEscape
      )
    }
  }

  return formatSegment(valueForSearch, shouldEscape)
}
