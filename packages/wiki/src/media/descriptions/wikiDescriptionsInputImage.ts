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
      'integrated drag-and-drop file upload and native file picker via embedded Dropzone',
      'automatic image format validation, reading, and client-side resizing down to maxPixel',
      'interactive 8-directional boundary cropping and central panning via embedded ImageCrop',
      'quick actions toolbar with replacement upload and clear buttons, customizable icons (iconUpload, iconClose), and action labels (textChange, textCancel)',
      'two-way reactive data binding for image source and crop coordinates via v-model',
      'configurable counter display (auto, pixel, size, hide) for image dimensions or file size limits',
      'integrated field label (FieldLabel), helper message, and validation message (FieldMessage)',
      'programmatic control with open(), clear(), getValue(), and checkValidity() methods',
      'accessible ARIA attribute bindings (aria-labelledby, aria-describedby)',
      'support for disabled, readonly, and skeleton states'
    ],
    ru: [
      'встроенная загрузка файлов через Drag and Drop и системный диалог выбора во встроенном Dropzone',
      'автоматическая проверка формата, чтение и клиентское масштабирование до maxPixel',
      'интерактивное кадрирование по 8 направлениям и центральное перемещение во встроенном ImageCrop',
      'панель быстрых действий с кнопками замены и очистки изображения, настраиваемыми иконками (iconUpload, iconClose) и текстами кнопок (textChange, textCancel)',
      'двусторонняя реактивная привязка источника изображения и координат через v-model',
      'настраиваемый счетчик (auto, pixel, size, hide) для отображения размеров изображения или лимита размера файла',
      'интеграция метки поля (FieldLabel), подсказки и сообщений валидации (FieldMessage)',
      'программное управление через методы open(), clear(), getValue() и checkValidity()',
      'поддержка атрибутов доступности ARIA (aria-labelledby, aria-describedby)',
      'поддержка состояний disabled, readonly и skeleton'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <DesignComponent v-bind="args"/>
      </div>
    `,
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
            <button class="wiki-storybook-button" @click="value = undefined">Clear</button>
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
      id: 'InputImageCounter',
      name: {
        en: 'Counter and limits',
        ru: 'Счетчик и ограничения'
      },
      setup: `
      return {
        image1,
        pixelValue: ref({
          value: image1,
          crop: [5, 5, 5, 5]
        }),
        sizeValue: ref({
          value: image1,
          crop: [10, 10, 10, 10]
        })
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Pixel dimension counter (max 1920px)"
            helperMessage="Displays image pixel dimension and maxPixel limit"
            counterType="pixel"
            :maxPixel="1920"
            v-model="pixelValue"
          />
          <DesignComponent
            label="File size counter (max 5MB)"
            helperMessage="Displays file size in bytes and maxFileSize limit"
            counterType="size"
            :maxFileSize="5242880"
            v-model="sizeValue"
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
    },
    {
      id: 'InputImageSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <DesignComponent>
            <template #label>
              <strong>Custom Image Uploader Label</strong>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputImage'} type={'inputImage'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputImageVModel}/>

<Canvas of={Component.InputImageCounter}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputImageSkeleton}/>
    `,
    slots: `
<Canvas of={Component.InputImageSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 320px;"
>
  <InputImage
    label="Upload Image"
    helper-message="PNG, JPG up to 10MB"
    v-bind="args"
  />
</div>
    `,
    description: `
Composite form input component for selecting, uploading, resizing, and cropping images.
Integrates Dropzone for drag-and-drop and native file picking, ImageCrop for coordinate-based interactive boundary cropping and central panning, and an actions toolbar for quick image replacement and reset.
Supports two-way v-model binding with FieldFileValue structure ({ value?: string, crop?: CropAreaCoordinator, name?: string, size?: number, width?: number, height?: number, file?: File }) or raw image URL string.
Features client-side downscaling to maxPixel (default: 1280px), file size threshold checks (maxFileSize), customizable counter display modes (auto, pixel, size, hide), integrated field label, helper/validation messages, accessible ARIA attributes, and disabled/readonly/isSkeleton states.
Exposes programmatic methods: open() to trigger file picker dialog, clear() to reset image data, getValue(), setValue(), checkValidity(), and getValidationMessage().
    `
  }
}
