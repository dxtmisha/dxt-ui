import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputFileDropzone from './D1InputFileDropzone.vue'
import { InputFileDropzoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { InputFileDropzoneExpose } from '@dxtmisha/constructor/InputFileDropzone'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputFileDropzone',
  component: D1InputFileDropzone,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputFileDropzoneWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputFileDropzoneWikiStorybook.getWiki(),
  args: InputFileDropzoneWikiStorybook.getValues()
} satisfies Meta<typeof D1InputFileDropzone>

export default meta

type Story = StoryObj<typeof meta>

export const InputFileDropzone: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputFileDropzoneBasic: Story = {
  name: 'Базовое использование и событие Add',
  render: () => ({
    components: { D1InputFileDropzone },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="ifd-story-count" class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
            <span data-testid="ifd-story-rejected" class="wiki-storybook-item__label wiki-storybook-item__label--static">Rejected: {{ rejectedFiles.length }}</span>
          </div>
          <D1InputFileDropzone
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            multiple
            :maxFileSize="10"
            @add="onAdd"
            @reject="onReject"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const InputFileDropzoneSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputFileDropzone, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1InputFileDropzone isSkeleton label="Drop files here" />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const dropzone = canvasElement.querySelector('input[type="file"]')
    await expect(dropzone).toBeInTheDocument()
  }
}
export const InputFileDropzoneSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1InputFileDropzone },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1InputFileDropzone>
            <template #label>
              <strong>Custom Document Label</strong>
            </template>
            <template #default>
              <em>Custom dropzone content slot</em>
            </template>
          </D1InputFileDropzone>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Custom dropzone content slot')).toBeInTheDocument()
  }
}
export const InputFileDropzoneTestStatesAndExpose: Story = {
  name: 'Тест: Disabled, readonly, валидация, maxFileSize и open()',
  render: () => ({
    components: { D1InputFileDropzone },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="triggerOpen">Call open()</button>
            <span data-testid="ifd-test-opened">{{ openTriggered }}</span>
          </div>
          <D1InputFileDropzone
            ref="dropzoneReference"
            data-testid="ifd-test-validation"
            label="Required files"
            :multiple="true"
            textDropzone="Custom prompt"
            validationMessage="File is required"
            warningMessage="Only small files"
          />
          <D1InputFileDropzone data-testid="ifd-test-disabled" :disabled="true" label="Disabled dropzone" />
          <D1InputFileDropzone data-testid="ifd-test-readonly" :readonly="true" label="Readonly dropzone" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const valEl = canvas.getByTestId('ifd-test-validation')
    await expect(valEl).toHaveAttribute('aria-describedby')
    await expect(valEl.querySelector('input[type="file"]')).toHaveAttribute('multiple')

    await userEvent.click(canvas.getByRole('button', { name: 'Call open()' }))
    await expect(canvas.getByTestId('ifd-test-opened')).toHaveTextContent('true')
  }
}
// :story-items [!] System label / Системная метка
