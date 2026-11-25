import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputFileDropzone component properties
 *
 * Описания свойств компонента InputFileDropzone
 */
export const wikiDescriptionsInputFileDropzone: StorybookComponentsDescriptionItem = {
  name: 'InputFileDropzone',
  description: {
    en: 'Composite file dropzone input with integrated label, message containers, and drag-and-drop upload',
    ru: 'Составной компонент поля сброса файлов со встроенной меткой, блоком сообщений и загрузкой через Drag and Drop'
  },
  possibilities: {
    en: [
      'integrated drag-and-drop file upload via embedded Dropzone',
      'supports single and multiple file selection',
      'file type filtering via accept prop',
      'file size threshold filtering via maxFileSize prop',
      'integrated field label (FieldLabel) and validation/helper messages (FieldMessage)',
      'emits add event with filtered valid File array',
      'emits reject event with files exceeding maxFileSize',
      'programmatic control with open() method',
      'accessible ARIA attribute bindings (aria-labelledby, aria-describedby)',
      'support for disabled, readonly, and skeleton states'
    ],
    ru: [
      'интегрированная загрузка файлов через Drag and Drop во встроенном Dropzone',
      'поддержка одиночного и множественного выбора файлов',
      'фильтрация типов файлов с помощью свойства accept',
      'ограничение размера файла с помощью свойства maxFileSize',
      'встроенная метка поля (FieldLabel) и блок сообщений/валидации (FieldMessage)',
      'вызов события add с отфильтрованным массивом валидных файлов File',
      'вызов события reject с файлами, превысившими maxFileSize',
      'программное управление через метод open()',
      'поддержка атрибутов доступности ARIA (aria-labelledby, aria-describedby)',
      'поддержка состояний disabled, readonly и skeleton'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { InputFileDropzoneExpose } from \'@dxtmisha/constructor/InputFileDropzone\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\''
  ],
  stories: [
    {
      id: 'InputFileDropzoneBasic',
      name: {
        en: 'Basic usage & Add event',
        ru: 'Базовое использование и событие Add'
      },
      setup: `
      const files = ref<File[]>([])
      const rejectedFiles = ref<File[]>([])
      const onAdd = (newFiles: File[]) => {
        files.value = [...files.value, ...newFiles]
      }
      const onReject = (badFiles: File[]) => {
        rejectedFiles.value = [...rejectedFiles.value, ...badFiles]
      }
      return {
        files,
        rejectedFiles,
        onAdd,
        onReject
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="ifd-story-count" class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
            <span data-testid="ifd-story-rejected" class="wiki-storybook-item__label wiki-storybook-item__label--static">Rejected: {{ rejectedFiles.length }}</span>
          </div>
          <DesignComponent
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            multiple
            :maxFileSize="10"
            @add="onAdd"
            @reject="onReject"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('ifd-story-count')).toHaveTextContent('Files added: 0')
await expect(canvas.getByTestId('ifd-story-rejected')).toHaveTextContent('Rejected: 0')
const input = canvasElement.querySelector('input[type="file"]') as HTMLInputElement
await expect(input).toHaveAttribute('accept', 'image/*,.pdf')
const smallFile = new File(['ok'], 'sample.pdf', { type: 'application/pdf' })
const largeFile = new File(['toolargepayload'], 'large.pdf', { type: 'application/pdf' })
await userEvent.upload(input, [smallFile, largeFile])
await waitFor(async () => {
  await expect(canvas.getByTestId('ifd-story-count')).toHaveTextContent('Files added: 1')
  await expect(canvas.getByTestId('ifd-story-rejected')).toHaveTextContent('Rejected: 1')
})
      `
    },
    {
      id: 'InputFileDropzoneSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton label="Drop files here" />
        </DesignSkeleton>
      `,
      play: `
const dropzone = canvasElement.querySelector('input[type="file"]')
await expect(dropzone).toBeInTheDocument()
      `
    },
    {
      id: 'InputFileDropzoneSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <DesignComponent>
            <template #label>
              <strong>Custom Document Label</strong>
            </template>
            <template #default>
              <em>Custom dropzone content slot</em>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Custom dropzone content slot')).toBeInTheDocument()
      `
    },
    {
      id: 'InputFileDropzoneTestStatesAndExpose',
      name: {
        en: 'Test: Disabled, readonly, validation, maxFileSize and open()',
        ru: 'Тест: Disabled, readonly, валидация, maxFileSize и open()'
      },
      propsName: ['disabled', 'readonly', 'multiple', 'validationMessage', 'warningMessage', 'textDropzone'],
      setup: `
      const dropzoneReference = ref<InputFileDropzoneExpose | null>(null)
      const openTriggered = ref(false)
      return {
        dropzoneReference,
        openTriggered,
        triggerOpen: () => {
          dropzoneReference.value?.open()
          openTriggered.value = true
        }
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="triggerOpen">Call open()</button>
            <span data-testid="ifd-test-opened">{{ openTriggered }}</span>
          </div>
          <DesignComponent
            ref="dropzoneReference"
            data-testid="ifd-test-validation"
            label="Required files"
            :multiple="true"
            textDropzone="Custom prompt"
            validationMessage="File is required"
            warningMessage="Only small files"
          />
          <DesignComponent data-testid="ifd-test-disabled" :disabled="true" label="Disabled dropzone" />
          <DesignComponent data-testid="ifd-test-readonly" :readonly="true" label="Readonly dropzone" />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const valEl = canvas.getByTestId('ifd-test-validation')
await expect(valEl).toHaveAttribute('aria-describedby')
await expect(valEl.querySelector('input[type="file"]')).toHaveAttribute('multiple')

await userEvent.click(canvas.getByRole('button', { name: 'Call open()' }))
await expect(canvas.getByTestId('ifd-test-opened')).toHaveTextContent('true')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputFileDropzone'} type={'inputFileDropzone'}/>
<Canvas of={Component.InputFileDropzoneBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputFileDropzoneSkeleton}/>
    `,
    slots: `
<Canvas of={Component.InputFileDropzoneSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputFileDropzone'} type={'event.add'}/>
<StorybookDescriptions componentName={'InputFileDropzone'} type={'event.reject'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
    `
  },
  ai: {
    description: `
Form control component combining a file dropzone with field label and message containers.
Integrates Dropzone for drag-and-drop and file dialog selection, FieldLabel for input headings, and FieldMessage for validation errors and helper texts.
Controlled via accept, multiple, maxFileSize, label, helperMessage, and validationMessage props. Emits add event with filtered valid File array and reject event with files exceeding maxFileSize when files are dropped or selected. Exposes open() method to programmatically trigger file dialog.
    `
  }
}
