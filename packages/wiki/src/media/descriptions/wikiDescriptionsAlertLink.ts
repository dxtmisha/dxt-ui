import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for AlertLink component properties
 *
 * Описания свойств компонента AlertLink
 */
export const wikiDescriptionsAlertLink: StorybookComponentsDescriptionItem = {
  name: 'AlertLink',
  description: {
    en: 'A link component optimized for use inside alerts',
    ru: 'Компонент ссылки, оптимизированный для использования внутри оповещений'
  },
  possibilities: {
    en: [
      'styled inline link for alert messages',
      'supports optional separators/dividers',
      'supports label and caption slots',
      'integrates with click event tracking'
    ],
    ru: [
      'стилизованная встроенная ссылка для сообщений оповещений',
      'поддержка необязательных разделителей',
      'поддержка слотов для подписей и заголовков',
      'интеграция с отслеживанием событий клика'
    ]
  },
  documentation: {
    body: `
<StorybookDescriptions componentName={'AlertLink'} type={'alertLink'}/>
`,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
`
  },
  ai: {
    description: `
A highly specialized link component designed to be rendered within alert/notification boxes. It formats text links properly to blend with the alert's color palette, typography, and layout.
Features include optional divider lines to separate adjacent links, integration with click events, and compatibility with custom label styling.
Used as an sub-component inside Alert or standalone for navigation within context-sensitive status notices.
`
  }
}
