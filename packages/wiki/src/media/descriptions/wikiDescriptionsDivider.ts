import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Divider component properties
 *
 * Описания свойств компонента Divider
 */
export const wikiDescriptionsDivider: StorybookComponentsDescriptionItem = {
  name: 'Divider',
  description: {
    en: 'A component for visual separation of content blocks',
    ru: 'Компонент для визуального разделения блоков контента'
  },
  possibilities: {
    en: [
      'customizable line width and color via tokens',
      'clean and minimal design',
      'used to improve visual hierarchy'
    ],
    ru: [
      'настраиваемая ширина и цвет линии через токены',
      'чистый и минималистичный дизайн',
      'используется для улучшения визуальной иерархии'
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Divider'} type={'divider'}/>
    `
  },
  ai: {
    description: `
A simple horizontal line used to separate content or sections. It helps in organizing information and creating a clear visual structure in the interface.
    `
  }
}
