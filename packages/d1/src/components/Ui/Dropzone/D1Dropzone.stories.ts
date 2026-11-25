import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Dropzone from './D1Dropzone.vue'
import { DropzoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { DropzoneExpose } from '@dxtmisha/constructor/Dropzone'
import { expect, within, userEvent, waitFor, fireEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Dropzone',
  component: D1Dropzone,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DropzoneWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DropzoneWikiStorybook.getWiki(),
  args: DropzoneWikiStorybook.getValues()
} satisfies Meta<typeof D1Dropzone>

export default meta

type Story = StoryObj<typeof meta>

export const Dropzone: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Dropzone },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <D1Dropzone v-bind="args"/>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const dropzone = canvasElement.querySelector('.d1-dropzone')
    await expect(dropzone).toBeInTheDocument()
    await expect(dropzone?.tagName).toBe('LABEL')
    const input = dropzone?.querySelector('input[type="file"]')
    await expect(input).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DropzoneVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Dropzone },
    setup() {
      return {
        files: ref<FileList | undefined>()
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static" data-testid="files-count">Files count: {{ files?.length || 0 }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone
              v-model:files="files"
              label="Drop files here or click to upload"
              description="PNG, JPG up to 10MB"
              icon="upload"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dropzone = canvasElement.querySelector('.d1-dropzone')
    await expect(dropzone).toBeInTheDocument()
    await expect(canvas.getByTestId('files-count')).toHaveTextContent('Files count: 0')
    await expect(dropzone).toHaveAttribute('aria-labelledby')
    await expect(dropzone).toHaveAttribute('aria-describedby')
  }
}
export const DropzoneSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Dropzone, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone isSkeleton />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const dropzone = canvasElement.querySelector('.d1-dropzone')
    await expect(dropzone).toBeInTheDocument()
  }
}
export const DropzoneSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Dropzone },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1Dropzone icon="upload">
            <template #default>
              <strong>Custom Upload Title</strong>
            </template>
            <template #description>
              <em>Custom description text</em>
            </template>
          </D1Dropzone>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Custom Upload Title')).toBeInTheDocument()
    await expect(canvas.getByText('Custom description text')).toBeInTheDocument()
  }
}
export const DropzoneTestStatesAndControls: Story = {
  name: 'Тест: Disabled, readonly, accept, multiple, textDropzone, inputAttrs и expose',
  render: () => ({
    components: { D1Dropzone },
    setup() {
      const dropzoneRef = ref<DropzoneExpose | null>(null)
      const files = ref<FileList | undefined>()
      const clearFiles = () => {
        dropzoneRef.value?.clear()
      }
      return { dropzoneRef, files, clearFiles }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone
              ref="dropzoneRef"
              v-model:files="files"
              accept=".png,.jpg"
              multiple
              text-dropzone="Fallback drop text"
              :input-attrs="{ 'data-testid': 'dropzone-input-main' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone label="Disabled" disabled />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone label="Readonly" readonly />
          </div>
          <button class="wiki-storybook-button" type="button" @click="clearFiles">Clear</button>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const zones = canvasElement.querySelectorAll('.d1-dropzone')
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
        expect(zones[0]).toHaveClass('d1-dropzone--enter')
      })
      await fireEvent.dragLeave(mainInput)
      await waitFor(() => {
        expect(zones[0]).not.toHaveClass('d1-dropzone--enter')
      })
    })

    await step('Invoke exposed clear()', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
      await expect(mainInput).toHaveValue('')
    })
  }
}
// :story-items [!] System label / Системная метка
