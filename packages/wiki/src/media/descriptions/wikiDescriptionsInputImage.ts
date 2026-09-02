import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputImage component properties
 *
 * Описания свойств компонента InputImage
 */
export const wikiDescriptionsInputImage: StorybookComponentsDescriptionItem = {
  name: 'InputImage',
  description: {
    en: 'Composite image input component with drag-and-drop upload, automated resizing, and interactive cropping',
    ru: 'Составной компонент ввода изображений с загрузкой через Drag and Drop, автоматическим масштабированием и кадрированием'
  },
  possibilities: {
    en: [
      'integrated drag-and-drop file upload via embedded Dropzone',
      'automatic image validation and client-side resizing to maxPixel',
      'interactive 8-directional boundary cropping via embedded ImageCrop',
      'quick actions toolbar with upload replacement and clear buttons',
      'two-way reactive binding for image source and crop coordinates via v-model',
      'field label, counter, and validation message integration',
      'programmatic control with open() and clear() methods',
      'accessible ARIA attribute bindings',
      'support for disabled, readonly, and skeleton states'
    ],
    ru: [
      'интегрированная загрузка файлов через Drag and Drop во встроенном Dropzone',
      'автоматическая проверка формата и клиентское масштабирование до maxPixel',
      'интерактивное кадрирование по 8 направлениям во встроенном ImageCrop',
      'панель быстрых действий с кнопками замены изображения и очистки',
      'двусторонняя реактивная привязка источника изображения и координат через v-model',
      'интеграция метки поля, счетчика и сообщений валидации',
      'программное управление через методы open() и clear()',
      'поддержка атрибутов доступности ARIA',
      'поддержка состояний disabled, readonly и skeleton'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  stories: [
    {
      id: 'InputImageVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        image1,
        value: ref({
          value: image1,
          crop: [10, 15, 10, 15]
        })
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current crop: {{ value?.crop }}</span>
            <button class="wiki-storybook-button" @click="value = ''">Clear</button>
            <button class="wiki-storybook-button" @click="value = { value: image1, crop: [20, 20, 20, 20] }">Reset crop</button>
          </div>

          <DesignComponent
            label="User avatar"
            helperMessage="Drop an image here or click to select"
            v-model="value"
          />
        </div>
      `
    },
    {
      id: 'InputImageSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <DesignComponent isSkeleton />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputImage'} type={'inputImage'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputImageVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputImageSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
    `
  },
  ai: {
    description: `
Composite form input component for selecting, uploading, resizing, and cropping images.
Integrates Dropzone for drag-and-drop and file picking, ImageCrop for coordinate-based interactive cropping, and Actions for quick image replacement and reset.
Supports v-model binding with InputImageValue structure ({ value?: string, crop?: CropAreaCoordinator }), automatic downscaling to maxPixel, field validation, and accessible states.
    `
  }
}
