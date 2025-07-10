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
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    'import { demoPdf, image1, phone1, phone2, phone3 } from \'@dxt-ui/wiki/media\''
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
        image1,
        demoPdf
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <DesignComponent value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <DesignComponent :value="demoPdf"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageSize',
      name: {
        en: 'Display control',
        ru: 'Отображение'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <DesignComponent :value="image1" size="auto"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <DesignComponent :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <DesignComponent :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <DesignComponent :value="image1" :coordinator="[60, 10, 10, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <DesignComponent :value="image1" x="20" y="-10"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageAdaptive',
      name: {
        en: 'Adapted images',
        ru: 'Адаптированные изображения'
      },
      setup: `
      return {
        phone1,
        phone2,
        phone3
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
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
