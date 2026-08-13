import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Dropzone component properties
 *
 * Описания свойств компонента Dropzone
 */
export const wikiDescriptionsDropzone: StorybookComponentsDescriptionItem = {
  name: 'Dropzone',
  description: {
    en: 'Component for drag-and-drop file upload and selection',
    ru: 'Компонент для перетаскивания и выбора файлов (Drag and Drop)'
  },
  possibilities: {
    en: [
      'drag-and-drop file upload area',
      'supports single and multiple file selection',
      'customizable label, icon, and description support',
      'integrated ARIA accessibility attributes',
      'v-model binding for reactive file list management',
      'programmatic clear() method'
    ],
    ru: [
      'область перетаскивания файлов (Drag and Drop)',
      'поддержка одиночного и множественного выбора файлов',
      'настройка текстовой метки, иконки и описания',
      'встроенные атрибуты доступности ARIA',
      'двусторонняя привязка v-model для управления списком файлов',
      'программный метод очистки clear()'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'DropzoneVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        files: ref()
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files count: {{ files?.length || 0 }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <DesignComponent
              v-model:files="files"
              label="Drop files here or click to upload"
              description="PNG, JPG up to 10MB"
              icon="upload"
            />
          </div>
        </div>
      `
    },
    {
      id: 'DropzoneSkeleton',
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
      id: 'DropzoneSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <DesignComponent icon="upload">
            <template #default>
              <strong>Custom Upload Title</strong>
            </template>
            <template #description>
              <em>Custom description text</em>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Dropzone'} type={'dropzone'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.DropzoneVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.DropzoneSkeleton}/>
    `,
    slots: `
<Canvas of={Component.DropzoneSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'dropzone'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 240px; height: 160px;"
>
  <Dropzone v-bind="args"/>
</div>
    `,
    description: `
Dropzone component designed for file uploading via drag-and-drop or file picker dialog. Integrates sub-components for rendering file input, drag event management, icon, label, and description.
Controlled via accept, disabled, multiple, icon, label, description, and files / modelFiles props. Exposes open() and clear() methods.
    `
  }
}
