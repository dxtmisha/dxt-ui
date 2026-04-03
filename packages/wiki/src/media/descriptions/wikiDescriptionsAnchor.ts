import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Anchor component properties
 *
 * Описания свойств компонента Anchor
 */
export const wikiDescriptionsAnchor: StorybookComponentsDescriptionItem = {
  name: 'Anchor',
  description: {
    en: 'Component for creating hyperlinks or anchor points for navigation',
    ru: 'Компонент для создания гиперссылок или якорных точек для навигации'
  },
  possibilities: {
    en: [
      'creating links to other pages or resources',
      'creating anchor points for internal page navigation',
      'support for icons and text',
      'customizable appearance'
    ],
    ru: [
      'создание ссылок на другие страницы или ресурсы',
      'создание якорных точек для внутренней навигации по странице',
      'поддержка иконок и текста',
      'настраиваемый внешний вид'
    ]
  },
  documentation: {
    body: `
<StorybookDescriptions componentName={'Anchor'} type={'anchor'}/>
<StorybookDescriptions componentName={'Anchor'} type={'isCopy'}/>
<StorybookDescriptions componentName={'Anchor'} type={'hide'}/>
<StorybookDescriptions componentName={'Anchor'} type={'scroll'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Anchor'} type={'expose.go'}/>
`,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
`
  },
  ai: {
    description: `
Navigation component for creating hyperlinks, internal page anchors, and interactive links. Wraps the native <a> tag with additional support for smooth scrolling and clipboard operations.
Features automated scroll-to-id behavior with custom offsets and a built-in copy-to-clipboard function (isCopy). Supports icon integration for different link types and success feedback.
Controlled primarily through href or name props. Use for table of contents, permalinks, external resource links, or quick-copy action buttons for IDs and URLs.
    `
  }
}
