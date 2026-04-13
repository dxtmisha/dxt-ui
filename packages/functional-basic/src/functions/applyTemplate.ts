import { isObjectNotArray } from './isObjectNotArray'

const LIST_NAME: string[] = [
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
]

/**
 * Regular expression for matching list macros /
 * Регулярное выражение для сопоставления макросов списка
 */
const expListMacros = new RegExp(`%(${LIST_NAME.join('|')})`, 'g')

/**
 * Applies a template to the text, replacing keys with values from the replacement object
 *
 * Применяет шаблон к тексту, заменяя ключи на значения из объекта замены
 * @param text text with a template containing keys in square or curly brackets, for example "[key]" or "{key}"/
 * текст с шаблоном, содержащим ключи в квадратных или фигурных скобках, например "[key]" или "{key}"
 * @param replacement an object containing key-value pairs for replacement/
 * объект, содержащий пары ключ-значение для замены
 */
export const applyTemplate = (
  text: string,
  replacement: Record<string, string | number> | string[] = {}
) => {
  let content = String(text)

  if (text.match(/%[a-z]/)) {
    content = content.replace(expListMacros, (all, key) => {
      const index = LIST_NAME.indexOf(key)

      if (
        Array.isArray(replacement)
        && index !== -1
      ) {
        return String(replacement[index])
      }

      if (
        isObjectNotArray(replacement)
        && key in replacement
      ) {
        return String(replacement[key])
      }

      return all
    })
  }

  if (isObjectNotArray(replacement)) {
    content = content.replace(
      /[[{](.*?)[\]}](.*?)[[{]\/\1[\]}]/g,
      (all: string, key: string, content: string) => {
        const value = replacement[key]
        return value
          ? String(value).replace(/[[{]content[\]}]/g, () => content)
          : all
      }
    )

    content = content.replace(
      /[[{](.*?)[\]}]/g,
      (all: string, key: string) => {
        return String(replacement[key] ?? all)
      }
    )
  }
  return content
}
