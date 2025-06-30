import { forEach } from './forEach'

/**
 * Applies a template to the text, replacing keys with values from the replacement object
 *
 * Применяет шаблон к тексту, заменяя ключи на значения из объекта замены
 * @param text text with a template containing keys in square brackets, for example "[key]"/
 * текст с шаблоном, содержащим ключи в квадратных скобках, например "[key]"
 * @param replacement an object containing key-value pairs for replacement/
 * объект, содержащий пары ключ-значение для замены
 */
export const applyTemplate = (
  text: string,
  replacement: Record<string, string | number> = {}
) => {
  let content = String(text)

  forEach(replacement, (value, key) => {
    content = content.replace(new RegExp(`\\[${key}\\]`, 'g'), String(value))
  })

  return content
}
