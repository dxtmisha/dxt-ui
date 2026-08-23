import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ImageCrop from './D1ImageCrop.vue'
import { ImageCropWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ImageCrop',
  component: D1ImageCrop,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ImageCropWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ImageCropWikiStorybook.getWiki(),
  args: ImageCropWikiStorybook.getValues()
} satisfies Meta<typeof D1ImageCrop>

export default meta

type Story = StoryObj<typeof meta>

export const ImageCrop: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ImageCrop },
    setup: () => ({ args }),
    template: `
      <D1ImageCrop
      class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
      v-bind="args"
    />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ImageCropVModel: Story = {
  name: 'v-model',
  render: () => ({
    components: { D1ImageCrop },
    setup() {
      return {
        image1,
        coordinator: ref([15, 20, 15, 20])
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <D1ImageCrop
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
            :image="image1"
            v-model="coordinator"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
