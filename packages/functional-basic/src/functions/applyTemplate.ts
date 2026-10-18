import { hasKey } from './hasKey'
import { isArray } from './isArray'
import { isObjectNotArray } from './isObjectNotArray'

const LIST_NAME = [
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v'
] as const

/** Regular expression for matching list macros / Регулярное выражение для сопоставления макросов списка */
const EXP_LIST_MACROS = /%([d-v])/g

/** Regular expression for matching block template tags / Регулярное выражение для сопоставления блочных тегов шаблона */
const EXP_TAG_MACROS = /[[{]([^\]}]+)[\]}]([\s\S]*?)[[{]\/\1[\]}]/g

/** Regular expression for matching single placeholder keys / Регулярное выражение для сопоставления одиночных ключей подстановки */
const EXP_KEY_MACROS = /[[{]([^\]}]+)[\]}]/g

/** Regular expression for matching content macro inside block replacements / Регулярное выражение для сопоставления макроса контента внутри блочной замены */
const EXP_CONTENT_MACROS = /[[{]content[\]}]/g

/**
 * Applies a template to the text, replacing keys with values from the replacement object.
 *
 * Применяет шаблон к тексту, заменяя ключи на значения из объекта замены.
 * @param text text with a template containing keys in square or curly brackets, for example "[key]" or "{key}" /
 * текст с шаблоном, содержащим ключи в квадратных или фигурных скобках, например "[key]" или "{key}"
 * @param replacement an object or array containing key-value pairs for replacement /
 * объект или массив, содержащий пары ключ-значение для замены
 * @returns formatted string with applied template replacements /
 * отформатированная строка с примененными заменами шаблона
 */
export function applyTemplate(
  text: string,
  replacement: Record<string, unknown> | readonly unknown[] = {}
): string {
  let content = String(text)

  // Replacing positional list macros (%d..%v) using an array /
  // Замена позиционных макросов списка (%d..%v) значениями из массива
  if (
    isArray(replacement)
    && content.includes('%')
  ) {
    content = content.replace(EXP_LIST_MACROS, (all, key) => {
      const index = LIST_NAME.indexOf(key as typeof LIST_NAME[number])

      // If the macro exists in the supported letter list, replace it with the item by index /
      // Если макрос есть в списке поддерживаемых букв, заменяем его элементом по индексу
      if (index !== -1) {
        return String(replacement?.[index] ?? '')
      }

      return all
    })
  }

  // Replacing named placeholders and tags using an object /
  // Замена именованных плейсхолдеров и тегов значениями из объекта
  if (isObjectNotArray(replacement) && (content.includes('[') || content.includes('{'))) {
    // Processing block tags [tag]content[/tag] when a closing tag slash is present /
    // Обработка блочных тегов [tag]content[/tag] при наличии слэша закрывающего тега
    if (content.includes('/')) {
      content = content.replace(
        EXP_TAG_MACROS,
        (all: string, key: string, tagContent: string) => {
          // If the tag key is an own property of the replacement object /
          // Если ключ тега является собственным свойством объекта замены
          if (hasKey(replacement, key)) {
            return String(replacement[key] ?? '')
              .replace(EXP_CONTENT_MACROS, () => tagContent)
          }

          return all
        }
      )
    }

    content = content.replace(
      EXP_KEY_MACROS,
      (all: string, key: string) => {
        // If the placeholder key is an own property of the replacement object /
        // Если ключ плейсхолдера является собственным свойством объекта замены
        if (hasKey(replacement, key)) {
          return String(replacement[key] ?? '')
        }

        return all
      }
    )
  }

  return content
}

