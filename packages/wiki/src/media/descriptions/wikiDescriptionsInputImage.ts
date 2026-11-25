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
    'import { image1 } from \'@dxtmisha/wiki/media\'',
    'import type { InputImageExpose, InputImageItem } from \'@dxtmisha/constructor/InputImage\'',
    'import { expect, within, userEvent } from \'storybook/test\''
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
        value: ref<InputImageItem | undefined>({
          value: image1,
          crop: [10, 15, 10, 15]
        })
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="input-image-crop">Current crop: {{ value?.crop }}</span>
            <button type="button" class="wiki-storybook-button" @click="value = undefined">Clear</button>
            <button type="button" class="wiki-storybook-button" @click="value = { value: image1, crop: [20, 20, 20, 20] }">Reset crop</button>
          </div>

          <DesignComponent
            label="User avatar"
            helperMessage="Drop an image here or click to select"
            v-model="value"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('input-image-crop')).toHaveTextContent('[ 10, 15, 10, 15 ]')
await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
await expect(canvas.getByTestId('input-image-crop')).toHaveTextContent('Current crop:')
await userEvent.click(canvas.getByRole('button', { name: 'Reset crop' }))
await expect(canvas.getByTestId('input-image-crop')).toHaveTextContent('[ 20, 20, 20, 20 ]')
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
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Pixel dimension counter (max 1920px)')).toBeInTheDocument()
await expect(canvas.getByText('File size counter (max 5MB)')).toBeInTheDocument()
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
      `,
      play: `
const fileInput = canvasElement.querySelector('input[type="file"]')
await expect(fileInput).toBeInTheDocument()
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
          <DesignComponent label="Image label">
            <template #label>
              <strong>Custom Image Uploader Label</strong>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Custom Image Uploader Label')).toBeInTheDocument()
      `
    },
    {
      id: 'InputImageTestStatesAndExpose',
      name: {
        en: 'Test: States, validation, counterType and expose methods',
        ru: 'Тест: Состояния, валидация, counterType и методы expose'
      },
      propsName: ['disabled', 'readonly', 'counterType', 'validationMessage', 'required', 'textChange', 'textCancel'],
      setup: `
      const imageRef = ref<InputImageExpose | null>(null)
      const val = ref<InputImageItem | undefined>({ value: image1, crop: [0, 0, 0, 0] })
      const snapshot = ref('')
      const validResult = ref('')
      const setSample = () => {
        imageRef.value?.setValue({ value: image1, crop: [12, 12, 12, 12] })
        snapshot.value = JSON.stringify(imageRef.value?.getValue()?.crop ?? null)
      }
      const clearSample = () => {
        imageRef.value?.clear()
        snapshot.value = String(imageRef.value?.getValue() ?? 'empty')
      }
      const checkSample = () => {
        const ok = imageRef.value?.checkValidity()
        const msg = imageRef.value?.getValidationMessage() ?? ''
        validResult.value = ok ? 'valid' : 'invalid:' + msg
      }
      return {
        imageRef,
        val,
        snapshot,
        validResult,
        setSample,
        clearSample,
        checkSample
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setSample">Set via expose</button>
            <button type="button" class="wiki-storybook-button" @click="clearSample">Clear via expose</button>
            <button type="button" class="wiki-storybook-button" @click="checkSample">Check validity</button>
            <span data-testid="input-image-test-snapshot">{{ snapshot }}</span>
            <span data-testid="input-image-test-validity">{{ validResult }}</span>
          </div>
          <DesignComponent
            ref="imageRef"
            data-testid="input-image-test-expose"
            label="Expose field"
            textChange="Replace"
            textCancel="Remove"
            counterType="hide"
            v-model="val"
          />
          <DesignComponent
            data-testid="input-image-test-validation"
            label="Required image"
            :required="true"
            validationMessage="Image is required"
          />
          <DesignComponent data-testid="input-image-test-disabled" :disabled="true" label="Disabled image" />
          <DesignComponent data-testid="input-image-test-readonly" :readonly="true" label="Readonly image" />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const validationEl = canvas.getByTestId('input-image-test-validation')
await expect(validationEl).toHaveAttribute('aria-describedby')
await expect(canvas.getByText('Image is required')).toBeInTheDocument()

await userEvent.click(canvas.getByRole('button', { name: 'Set via expose' }))
await expect(canvas.getByTestId('input-image-test-snapshot')).toHaveTextContent('[12,12,12,12]')

await userEvent.click(canvas.getByRole('button', { name: 'Clear via expose' }))
await expect(canvas.getByTestId('input-image-test-snapshot')).toHaveTextContent('empty')

await userEvent.click(canvas.getByRole('button', { name: 'Check validity' }))
await expect(canvas.getByTestId('input-image-test-validity')).toHaveTextContent('valid')
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
