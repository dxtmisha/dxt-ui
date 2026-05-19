import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextLabel component properties
 *
 * Описания свойств компонента TextLabel
 */
export const wikiDescriptionsTextLabel: StorybookComponentsDescriptionItem = {
  name: 'TextLabel',
  description: {
    en: 'A simple component for displaying text or labels with dynamic HTML tag support',
    ru: 'Простой компонент для отображения текста или меток с поддержкой динамического HTML-тега'
  },
  possibilities: {
    en: [
      'renders text from label property or default slot',
      'supports dynamic HTML tags (span, div, p, h1-h6, etc.)',
      'fully compatible with standard design tokens',
      'clean and lightweight DOM output'
    ],
    ru: [
      'выводит текст из свойства label или слота по умолчанию',
      'поддерживает динамические HTML-теги (span, div, p, h1-h6 и т.д.)',
      'полностью совместим со стандартными токенами дизайна',
      'чистый и легковесный DOM'
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextLabel'} type={'textLabel'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
A utility component for displaying text and labels. Supports slot injection, custom HTML tags via "tag" property (defaults to "span"), and clean semantic output. Integrated with LabelInclude for standardized text rendering.
    `
  }
}
