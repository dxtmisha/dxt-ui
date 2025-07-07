import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsImage: StorybookComponentsDescriptionItem = {
  name: 'Image',
  description: {
    en: 'Image component for displaying images',
    ru: 'Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон'
  },
  possibilities: {
    en: [
      'support for various source types: string, `File`, image or PDF address',
      'adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`',
      'cropping and positioning via `coordinator`, `x`, `y`',
      'rotation or hiding the component with properties `turn`, `hide`, `disabled`',
      'mode selection for filling (`size`: `auto`, `contain`, `cover`)'
    ],
    ru: [
      'поддержка различных типов исходников: строка, `File`, адрес картинки или PDF',
      'адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`',
      'обрезка и позиционирование через `coordinator`, `x`, `y`',
      'поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`',
      'выбор режима заполнения (`size`: `auto`, `contain`, `cover`)'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--md">
        <D1Image v-bind="args"/>
      </div>
    `,
  import: [
    'import { demoPdf, image1, phone1 } from \'@dxt-ui/wiki/media\''
  ],
  stories: [
    {
      id: 'ImageType',
      name: {
        en: 'Value type',
        ru: 'Тип значения'
      },
      setup: `
      return {
        phone1,
        image1,
        demoPdf
      }
      `,
      template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">Icon</div>
          <DesignComponent value="home"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">Image</div>
          <DesignComponent :value="image1"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">Image/ contain</div>
          <DesignComponent :value="phone1" size="contain"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">PDF</div>
          <DesignComponent :value="demoPdf"/>
        </div>
      </div>
      `
    }
  ],
  documentation: {
    body: `
<Canvas of={Component.ImageType}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Image'} type={'expose.type'}/>
<StorybookDescriptions componentName={'Image'} type={'expose.data'}/>
    `
  }
}
