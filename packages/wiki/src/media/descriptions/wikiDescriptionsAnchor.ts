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
`,
    slots: `
`,
    expose: `
`
  }
}
