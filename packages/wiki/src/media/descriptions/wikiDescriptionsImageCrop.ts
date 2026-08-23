import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ImageCrop component properties
 *
 * Описания свойств компонента ImageCrop
 */
export const wikiDescriptionsImageCrop: StorybookComponentsDescriptionItem = {
  name: 'ImageCrop',
  description: {
    en: 'Interactive image cropping component combining an image display with an overlay crop area',
    ru: 'Интерактивный компонент кадрирования изображений, объединяющий отображение картинки и накладываемую область обрезки'
  },
  possibilities: {
    en: [
      'seamless integration of Image and CropArea components',
      'two-way reactive crop coordinate synchronization via v-model',
      '8-directional boundary handles for precise edge and corner resizing',
      'central panning zone for repositioning the crop frame without resizing',
      'support for multiple image source formats (URL, File, icon)',
      'support for disabled and readonly interaction states',
      'accessible ARIA attribute bindings'
    ],
    ru: [
      'бесшовная интеграция компонентов Image и CropArea',
      'двусторонняя реактивная синхронизация координат кадрирования через v-model',
      '8 направлений маркеров для точного изменения размера краев и углов',
      'центральная зона перемещения для сдвига рамки без изменения ее размера',
      'поддержка различных форматов источников изображений (URL, File, иконки)',
      'поддержка интерактивных состояний disabled и readonly',
      'доступные атрибуты доступности ARIA'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  render: `
    <DesignComponent
      class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
      v-bind="args"
    />
  `,
  stories: [
    {
      id: 'ImageCropVModel',
      name: {
        en: 'v-model',
        ru: 'v-model'
      },
      setup: `
      return {
        image1,
        coordinator: ref([15, 20, 15, 20])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <DesignComponent
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
            :image="image1"
            v-model="coordinator"
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ImageCrop'} type={'imageCrop'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.ImageCropVModel}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `
  },
  ai: {
    description: `
Composite interactive component that pairs an Image container with an overlay CropArea for graphic trimming, zooming, and focal region selection.
Coordinates are represented as percentage-based insets [top, right, bottom, left] and bound via v-model or value prop.
Supports 8-directional handle dragging, central panning, alt text accessibility, and disabled/readonly states.
    `,
    hide: true
  }
}
