import { escapeExp } from './escapeExp'

/**
 * Replaces the component name in the text.
 *
 * Заменяет имя компонента в тексте.
 * @param text text / текст
 * @param name component name / имя компонента
 * @param componentName new component name / новое имя компонента
 * @returns text with replaced component name or undefined / текст с заменённым именем компонента или undefined
 */
export function replaceComponentName(
  text?: string | null,
  name?: string | null,
  componentName?: string | null
): string | undefined {
  if (text === undefined || text === null) {
    return undefined
  }

  if (!name || !componentName) {
    return text.trim()
  }

  const escapedName = escapeExp(name)

  return text
    .replace(new RegExp(`<(/?)${escapedName}`, 'ig'), `<$1${componentName}`)
    .trim()
}
