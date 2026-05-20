import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextDescription component properties
 *
 * Описания свойств компонента TextDescription
 */
export const wikiDescriptionsTextDescription: StorybookComponentsDescriptionItem = {
  name: 'TextDescription',
  description: {
    en: 'A simple component for displaying text description with dynamic HTML tag support',
    ru: 'Простой компонент для отображения текстового описания с поддержкой динамического HTML-тега'
  },
  possibilities: {
    en: [
      'renders text from description property or description slot',
      'supports dynamic HTML tags (span, div, p, etc.)',
      'fully compatible with standard design tokens',
      'clean and lightweight DOM output'
    ],
    ru: [
      'выводит текст из свойства description или слота описания',
      'поддерживает динамические HTML-теги (span, div, p и т.д.)',
      'полностью совместим со стандартными токенами дизайна',
      'чистый и легковесный DOM'
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextDescription'} type={'textDescription'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
A utility component for displaying textual descriptions. Supports description slot injection, custom HTML tags via "tag" property (defaults to "span"), and clean semantic output. Integrated with DescriptionInclude for standardized description rendering.
    `
  }
}
