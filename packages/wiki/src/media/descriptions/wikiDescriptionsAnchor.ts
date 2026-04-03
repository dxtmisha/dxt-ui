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
Standard navigation component for creating hyperlinks, internal anchor points, and interactive links. Wraps the native <a> tag with additional support for smooth scrolling, clipboard operations, and icon integration.
Features automated smooth scroll-to-id behavior, custom scroll offsets via shift prop, and a built-in copy-to-clipboard function when isCopy is enabled. Supports icons for link types, tags, and copy success states.
Highly flexible via the #default slot for custom content. Controlled primarily through href or name props. Use for page navigation, table of contents, permalinks, or quick-copy action buttons.
    `
  }
}
