import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Dropzone from './D1Dropzone.vue'
import { DropzoneWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
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
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DropzoneVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Dropzone },
    setup() {
      return {
        files: ref()
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files count: {{ files?.length || 0 }}</span>
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
  })
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
  })
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
  })
}
// :story-items [!] System label / Системная метка
