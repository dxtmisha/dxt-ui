import { escapeExp } from './escapeExp'
import { toArray } from './toArray'
import { toString } from './toString'

/** Maximum cache size for compiled tag expressions / Максимальный размер кэша для скомпилированных выражений тегов */
const CACHE_MAX_SIZE = 128

/** Default tag names whose inner content is removed along with the tags / Имена тегов по умолчанию, содержимое которых удаляется вместе с тегами */
const DEFAULT_CONTENT_TAGS = ['script', 'style', 'noscript'] as const

/** Pattern matching tag attributes without closing bracket / Шаблон для сопоставления атрибутов тега без закрывающей скобки */
const PATTERN_ATTRIBUTES = '(?=[\\s/>]|<|$)(?:(?:[\\s/]+|(?<=["\']))[^\\s"\'<>=/]+(?:\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s"\'<>`=]+))?)*\\s*'

/** Pattern matching tag attributes and closing bracket or unclosed tag end / Шаблон для сопоставления атрибутов тега и закрывающей скобки или конца незакрытого тега */
const PATTERN_TAG_ATTRIBUTES = `${PATTERN_ATTRIBUTES}(?:(?:/\\s*)?>|[^<>]*>?)`

/** Pattern matching the body and closing tag of content tags / Шаблон для сопоставления тела и закрывающего тега для тегов с содержимым */
const PATTERN_CONTENT_TAG_BODY = `${PATTERN_ATTRIBUTES}(?:/\\s*>|[^<>]*>[\\s\\S]*?(?:<\\/\\1${PATTERN_TAG_ATTRIBUTES}|$)|[^<>]*)`

/** Regular expression matching default tags with content (script, style, noscript) / Регулярное выражение для поиска тегов по умолчанию с их содержимым */
const REGEXP_DEFAULT_CONTENT_TAGS = /* #__PURE__ */ new RegExp(
  `<(${DEFAULT_CONTENT_TAGS.join('|')})${PATTERN_CONTENT_TAG_BODY}`,
  'gi'
)

/** Regular expression matching all HTML/XML tags, comments, DOCTYPE, and CDATA / Регулярное выражение для поиска всех HTML/XML тегов, комментариев, DOCTYPE и CDATA */
const REGEXP_ALL_TAGS = /* #__PURE__ */ new RegExp(
  `<!--[\\s\\S]*?(?:--!?>|$)|<!DOCTYPE\\b(?:[^>"']|"[^"]*"|'[^']*')*(?:>|[^<>]*>?)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>|$)|<\\?[\\s\\S]*?(?:\\?>|$)|</?[a-z\\p{L}][a-z0-9:_\\p{L}\\p{N}.-]*${PATTERN_TAG_ATTRIBUTES}`,
  'giu'
)

/** Regular expression matching special characters in tag names (<, >, /) / Регулярное выражение для поиска специальных символов в именах тегов (<, >, /) */
const REGEXP_SPECIAL_TAG_CHARACTERS = /[<>/]/g

/** Cache for compiled tag expressions to avoid recompilation overhead / Кэш скомпилированных выражений тегов для предотвращения накладных расходов повторной компиляции */
let tagExpressionCache: Map<string, RegExp> | undefined = undefined

/** Cache for compiled content tag expressions / Кэш скомпилированных выражений тегов с содержимым */
let contentTagExpressionCache: Map<string, RegExp> | undefined = undefined

/**
 * Removes special characters (<, >, /) from a tag name.
 *
 * Удаляет специальные символы (<, >, /) из имени тега.
 * @param tag tag name to sanitize / имя тега для очистки
 * @returns sanitized tag name / очищенное имя тега
 */
function sanitizeTagName(tag: unknown): string {
  return toString(tag)
    .replace(REGEXP_SPECIAL_TAG_CHARACTERS, '')
    .trim()
    .toLowerCase()
}

/**
 * Sanitizes and extracts a unique list of valid escaped tag names.
 *
 * Очищает и извлекает уникальный список валидных экранированных имен тегов.
 * @param tag tag or list of tags to process / тег или список тегов для обработки
 * @returns list of sanitized and escaped tag names / список очищенных и экранированных имен тегов
 */
function getTags(tag: string | string[]): string[] {
  const rawList = toArray(tag)
  const length = rawList.length
  const seenTags = new Set<string>()
  const tags: string[] = []

  for (let index = 0; index < length; index += 1) {
    const cleanedTag = sanitizeTagName(rawList[index])

    if (
      cleanedTag.length > 0
      && !seenTags.has(cleanedTag)
    ) {
      seenTags.add(cleanedTag)
      tags.push(escapeExp(cleanedTag))
    }
  }

  return tags
}

/**
 * Returns a cached or newly compiled regular expression for the given tag pattern.
 *
 * Возвращает кэшированное или вновь скомпилированное регулярное выражение для заданного шаблона тегов.
 * @param cacheKey combined tag names key / ключ объединенных имен тегов
 * @returns compiled `RegExp` instance / скомпилированный экземпляр `RegExp`
 */
function getCachedExpression(cacheKey: string): RegExp {
  if (!tagExpressionCache) {
    tagExpressionCache = new Map<string, RegExp>()
  }

  const cachedExpression = tagExpressionCache.get(cacheKey)

  if (cachedExpression) {
    return cachedExpression
  }

  if (tagExpressionCache.size >= CACHE_MAX_SIZE) {
    tagExpressionCache.clear()
  }

  const expression = new RegExp(
    `</?(?:${cacheKey})${PATTERN_TAG_ATTRIBUTES}`,
    'gi'
  )

  tagExpressionCache.set(cacheKey, expression)

  return expression
}

/**
 * Returns a cached or newly compiled regular expression for tags whose content should be removed.
 *
 * Возвращает кэшированное или вновь скомпилированное регулярное выражение для тегов, содержимое которых должно быть удалено.
 * @param cacheKey combined content tag names key / ключ объединенных имен тегов с содержимым
 * @returns compiled `RegExp` instance / скомпилированный экземпляр `RegExp`
 */
function getCachedContentExpression(cacheKey: string): RegExp {
  if (!contentTagExpressionCache) {
    contentTagExpressionCache = new Map<string, RegExp>()
  }

  const cachedExpression = contentTagExpressionCache.get(cacheKey)

  if (cachedExpression) {
    return cachedExpression
  }

  if (contentTagExpressionCache.size >= CACHE_MAX_SIZE) {
    contentTagExpressionCache.clear()
  }

  const expression = new RegExp(
    `<(${cacheKey})${PATTERN_CONTENT_TAG_BODY}`,
    'gi'
  )

  contentTagExpressionCache.set(cacheKey, expression)

  return expression
}

/**
 * Creates a regular expression to match specific HTML/XML tags.
 *
 * Создает регулярное выражение для поиска определенных HTML/XML тегов.
 * @param tag tag or list of tags to match / тег или список тегов для поиска
 * @returns `RegExp` matching the specified tags or null / `RegExp` для поиска указанных тегов или null
 */
function getTagExpression(tag: string | string[]): RegExp | null {
  const tags = getTags(tag)

  if (tags.length === 0) {
    return null
  }

  const cacheKey = tags
    .sort()
    .join('|')

  return getCachedExpression(cacheKey)
}

/**
 * Resolves a regular expression for tags whose inner content should be removed.
 *
 * Определяет регулярное выражение для тегов, внутреннее содержимое которых должно быть удалено.
 * @param removeContent flag or list of tags / флаг или список тегов
 * @returns `RegExp` matching content tags or null / `RegExp` для поиска тегов с содержимым или null
 */
function getContentTagExpression(
  removeContent: boolean | string | string[]
): RegExp | null {
  if (removeContent === false) {
    return null
  }

  if (removeContent === true) {
    return REGEXP_DEFAULT_CONTENT_TAGS
  }

  const tags = getTags(removeContent)

  if (tags.length === 0) {
    return null
  }

  const cacheKey = tags
    .sort()
    .join('|')

  return getCachedContentExpression(cacheKey)
}

/**
 * Options for configuring tag removal in removeTag /
 * Опции для настройки удаления тегов в removeTag
 */
export interface RemoveTagOptions {
  /** Tag or list of tags to remove (if omitted, removes all tags) / Тег или список тегов для удаления (если опущен, удаляет все теги) */
  tag?: string | string[]
  /** String to replace tags with (not applied to silently removed content blocks) / Строка для замены тегов (не применяется к молча удаляемым блокам содержимого) */
  replacement?: string
  /** Whether to remove content of script, style, and noscript tags, or list of tags / Нужно ли удалять содержимое тегов script, style и noscript, или список тегов */
  removeContent?: boolean | string | string[]
}

/**
 * Removes all HTML/XML tags or specified tags from a string.
 *
 * Удаляет все HTML/XML теги или указанные теги из строки.
 * @param value initial string / исходная строка
 * @param options configuration options / объект опций
 * @returns cleaned string without tags / очищенная строка без тегов
 *
 * @remarks
 * When `removeContent` is true (or a list of tags is provided),
 * executable and styling tags (`<script>`, `<style>`, `<noscript>`) or specified content tags
 * are silently removed along with their inner content without applying `replacement`.
 * Other formatting and layout tags preserve their text content, and their tag syntax
 * is replaced with `replacement`.
 *
 * Если `removeContent = true` (или передан список тегов),
 * исполняемые теги и стили (`<script>`, `<style>`, `<noscript>`) или указанные теги
 * удаляются молча вместе со своим содержимым без подстановки `replacement`.
 * Остальные теги форматирования и разметки сохраняют текстовое содержимое, а синтаксис
 * их тегов заменяется на `replacement`.
 *
 * @example
 * ```ts
 * removeTag('<p>Hello <b>world</b>!</p>') // => 'Hello world!'
 * removeTag('<b>Hello</b> <p>world</p>', { tag: 'b' }) // => 'Hello <p>world</p>'
 * removeTag('<b>Hello</b> <p>world</p>', { tag: ['b', 'p'] }) // => 'Hello world'
 * removeTag('<p>Hello</p><p>world</p>', { replacement: ' ' }) // => ' Hello  world '
 * removeTag('<p>Hello</p><script>alert(1)</script>') // => 'Hello'
 * removeTag('<p>Hello</p><script>alert(1)</script>', { removeContent: false }) // => 'Helloalert(1)'
 * removeTag('<div>Text</div><script>alert(1)</script>', { tag: 'script', removeContent: false }) // => '<div>Text</div>alert(1)'
 * ```
 */
export function removeTag(
  value?: string | number | null,
  options: RemoveTagOptions = {}
): string {
  const preparedValue = toString(value)

  if (
    preparedValue.length === 0
    || !preparedValue.includes('<')
  ) {
    return preparedValue
  }

  const {
    tag,
    replacement = '',
    removeContent = true
  } = options

  let result = preparedValue
  const contentExpression = getContentTagExpression(removeContent)

  if (contentExpression !== null) {
    result = result.replace(contentExpression, '')
  }

  if (tag !== undefined) {
    const targetExpression = getTagExpression(tag)

    if (targetExpression === null) {
      return result
    }

    return result.replace(
      targetExpression,
      () => replacement
    )
  }

  return result.replace(
    REGEXP_ALL_TAGS,
    () => replacement
  )
}
