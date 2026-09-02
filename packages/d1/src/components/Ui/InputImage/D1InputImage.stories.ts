import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputImage from './D1InputImage.vue'
import { InputImageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputImage',
  component: D1InputImage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputImageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputImageWikiStorybook.getWiki(),
  args: InputImageWikiStorybook.getValues()
} satisfies Meta<typeof D1InputImage>

export default meta

type Story = StoryObj<typeof meta>

export const InputImage: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputImageVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputImage },
    setup() {
      return {
        image1,
        value: ref({
          value: image1,
          crop: [10, 15, 10, 15]
        })
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current crop: {{ value?.crop }}</span>
            <button class="wiki-storybook-button" @click="value = ''">Clear</button>
            <button class="wiki-storybook-button" @click="value = { value: image1, crop: [20, 20, 20, 20] }">Reset crop</button>
          </div>

          <D1InputImage
            label="User avatar"
            helperMessage="Drop an image here or click to select"
            v-model="value"
          />
        </div>
    `
  })
}
export const InputImageSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputImage, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1InputImage isSkeleton />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
