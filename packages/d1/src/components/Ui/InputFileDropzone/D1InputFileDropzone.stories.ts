import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputFileDropzone from './D1InputFileDropzone.vue'
import { InputFileDropzoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
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
      const onAdd = (newFiles: File[]) => {
        files.value = [...files.value, ...newFiles]
      }
      return {
        files,
        onAdd
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
          </div>
          <D1InputFileDropzone
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            :maxFileSize="5242880"
            @add="onAdd"
          />
        </div>
    `
  })
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
  })
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
  })
}
// :story-items [!] System label / Системная метка
