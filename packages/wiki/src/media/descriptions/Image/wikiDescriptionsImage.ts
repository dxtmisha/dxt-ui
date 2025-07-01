import type { StorybookComponentsDescriptionItem } from '../../../types/storybookTypes'

import eventLoadEn from './event.load.en.mdx'
import eventLoadRu from './event.load.ru.mdx'

import exposeTypeEn from './expose.type.en.mdx'
import exposeTypeRu from './expose.type.ru.mdx'
import exposeDataEn from './expose.data.en.mdx'
import exposeDataRu from './expose.data.ru.mdx'

export const wikiDescriptionsImage: StorybookComponentsDescriptionItem = {
  name: 'Image',
  description: {
    en: 'Image component for displaying images',
    ru: 'Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон'
  },
  descriptions: {
    'event.load': {
      en: eventLoadEn,
      ru: eventLoadRu
    },
    'expose.type': {
      en: exposeTypeEn,
      ru: exposeTypeRu
    },
    'expose.data': {
      en: exposeDataEn,
      ru: exposeDataRu
    }
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
      <div style="position: relative; width: 128px; height: 128px; border: 1px solid #ccc;">
        <D1Image v-bind="args"/>
      </div>
    `,
  documentation: {
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Image'} type={'expose.type'}/>
<StorybookDescriptions componentName={'Image'} type={'expose.data'}/>
    `
  }
}
