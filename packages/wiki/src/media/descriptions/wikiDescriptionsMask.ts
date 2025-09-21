import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Mask component
 *
 * Описания компонента Mask
 */
export const wikiDescriptionsMask: StorybookComponentsDescriptionItem = {
  name: 'Mask',
  description: {
    en: 'Input masking utility for text, numbers, currency and dates with flexible patterns and validation.',
    ru: 'Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией.'
  },
  possibilities: {
    en: [
      'string or multi-pattern masks (auto selection)',
      'special symbols define input groups and literals are auto-inserted',
      'per-group and global validation patterns',
      'number / currency formats with grouping and fraction control',
      'date/time helpers and locale-aware behavior'
    ],
    ru: [
      'одиночные и множественные маски (автовыбор по вводу)',
      'спецсимволы задают группы ввода, литералы подставляются автоматически',
      'валидация по группам и глобально',
      'форматы числа/валюты с группировкой и дробной частью',
      'помощники для даты/времени и поведение с учётом локали'
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Mask'} type={'basic'}/>
<StorybookDescriptions componentName={'Mask'} type={'mask'}/>
    `
  }
}
