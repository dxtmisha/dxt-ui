/**
 * Replaces the component name in the text.
 *
 * Заменяет имя компонента в тексте.
 * @param text text/ текст
 * @param name component name/ имя компонента
 * @param componentName new component name/ новое имя компонента
 */
export const replaceComponentName = (
  text: string | undefined,
  name: string,
  componentName: string
): string | undefined => {
  return text
    ?.replace(`<${name}`, `<${componentName}`)
    ?.replace(`</${name}`, `</${componentName}`)
    ?.trim()
}
