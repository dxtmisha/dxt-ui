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
      'программное управление через метод open()',
      'поддержка атрибутов доступности ARIA (aria-labelledby, aria-describedby)',
      'поддержка состояний disabled, readonly и skeleton'
    ]
  },
  import: [
    'import { ref } from \'vue\''
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
      const onAdd = (newFiles: File[]) => {
        files.value = [...files.value, ...newFiles]
      }
      return {
        files,
        onAdd
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
          </div>
          <DesignComponent
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            :maxFileSize="5242880"
            @add="onAdd"
          />
        </div>
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
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
    `
  },
  ai: {
    description: `
Form control component combining a file dropzone with field label and message containers.
Integrates Dropzone for drag-and-drop and file dialog selection, FieldLabel for input headings, and FieldMessage for validation errors and helper texts.
Controlled via accept, multiple, maxFileSize, label, helperMessage, and validationMessage props. Emits add event with filtered valid File array when files are dropped or selected. Exposes open() method to programmatically trigger file dialog.
    `,
    hide: true
  }
}
