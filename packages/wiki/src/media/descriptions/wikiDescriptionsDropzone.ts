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
      'programmatic open() and clear() methods'
    ],
    ru: [
      'область перетаскивания файлов (Drag and Drop)',
      'поддержка одиночного и множественного выбора файлов',
      'настройка текстовой метки, иконки и описания',
      'встроенные атрибуты доступности ARIA',
      'двусторонняя привязка v-model для управления списком файлов',
      'программные методы open() и clear()'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  play: `
const dropzone = canvasElement.querySelector('.design-component')
await expect(dropzone).toBeInTheDocument()
await expect(dropzone?.tagName).toBe('LABEL')
const input = dropzone?.querySelector('input[type="file"]')
await expect(input).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { DropzoneExpose } from \'@dxtmisha/constructor/Dropzone\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'DropzoneVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        files: ref<FileList | undefined>()
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static" data-testid="files-count">Files count: {{ files?.length || 0 }}</span>
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
      `,
      play: `
const canvas = within(canvasElement)
const dropzone = canvasElement.querySelector('.design-component')
await expect(dropzone).toBeInTheDocument()
await expect(canvas.getByTestId('files-count')).toHaveTextContent('Files count: 0')
await expect(dropzone).toHaveAttribute('aria-labelledby')
await expect(dropzone).toHaveAttribute('aria-describedby')
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
      `,
      play: `
const dropzone = canvasElement.querySelector('.design-component')
await expect(dropzone).toBeInTheDocument()
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
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Custom Upload Title')).toBeInTheDocument()
await expect(canvas.getByText('Custom description text')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation)
    // =========================================================================
    {
      id: 'DropzoneTestStatesAndControls',
      name: {
        en: 'Test: Disabled, readonly, accept, multiple, textDropzone, inputAttrs and expose',
        ru: 'Тест: Disabled, readonly, accept, multiple, textDropzone, inputAttrs и expose'
      },
      propsName: ['disabled', 'readonly', 'accept', 'multiple', 'textDropzone', 'inputAttrs'],
      setup: `
      const dropzoneRef = ref<DropzoneExpose | null>(null)
      const files = ref<FileList | undefined>()
      const clearFiles = () => {
        dropzoneRef.value?.clear()
      }
      return { dropzoneRef, files, clearFiles }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <DesignComponent
              ref="dropzoneRef"
              v-model:files="files"
              accept=".png,.jpg"
              multiple
              text-dropzone="Fallback drop text"
              :input-attrs="{ 'data-testid': 'dropzone-input-main' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <DesignComponent label="Disabled" disabled />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <DesignComponent label="Readonly" readonly />
          </div>
          <button class="wiki-storybook-button" type="button" @click="clearFiles">Clear</button>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const zones = canvasElement.querySelectorAll('.design-component')
await expect(zones.length).toBe(3)
await expect(zones[0]).not.toHaveAttribute('aria-disabled')
await expect(zones[0]).not.toHaveAttribute('aria-readonly')
await expect(zones[1]).toHaveAttribute('aria-disabled', 'true')
await expect(zones[2]).toHaveAttribute('aria-readonly', 'true')

const mainInput = canvas.getByTestId('dropzone-input-main')
await expect(mainInput).toHaveAttribute('accept', '.png,.jpg')
await expect(mainInput).toHaveAttribute('multiple')
await expect(canvas.getByText('Fallback drop text')).toBeInTheDocument()

await step('Toggle dragenter and dragleave classes', async () => {
  await fireEvent.dragEnter(mainInput)
  await waitFor(() => {
    expect(zones[0]).toHaveClass('design-component--enter')
  })
  await fireEvent.dragLeave(mainInput)
  await waitFor(() => {
    expect(zones[0]).not.toHaveClass('design-component--enter')
  })
})

await step('Invoke exposed clear()', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
  await expect(mainInput).toHaveValue('')
})
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
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
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
Controlled via accept, disabled, multiple, icon, label, description, and modelFiles props. Emits standard input and change events. Exposes open() and clear() methods.
    `
  }
}
