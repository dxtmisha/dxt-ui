import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Badge component properties
 *
 * Описания свойств компонента Badge
 */
export const wikiDescriptionsBadge: StorybookComponentsDescriptionItem = {
  name: 'Badge',
  description: {
    en: 'Small visual indicator for displaying status, count, or notifications on interface elements',
    ru: 'Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса'
  },
  possibilities: {
    en: [
      'multiple color variants for different status types',
      'content customization with text or numbers',
      'positioning relative to parent elements',
      'maximum value display with overflow handling',
      'visibility control and animation support'
    ],
    ru: [
      'множественные цветовые варианты для разных типов статуса',
      'настройка содержимого с текстом или числами',
      'позиционирование относительно родительских элементов',
      'отображение максимального значения с обработкой переполнения',
      'управление видимостью и поддержка анимации'
    ]
  },
  import: [],
  render: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Badge'} type={'badge'}/>

    `
  }
}
