import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Image from './D1Image.vue'
import { ImageWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
import { demoPdf, image1, phone1 } from '@dxt-ui/wiki/media'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Image',
  component: D1Image,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ImageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ImageWikiStorybook.getWiki(),
  args: ImageWikiStorybook.getValues()
} satisfies Meta<typeof D1Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Image },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--md">
        <D1Image v-bind="args"/>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ImageType: Story = {
  name: ImageWikiStorybook.getStoryName('ImageType'),
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        phone1,
        image1,
        demoPdf
      }
    },
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">Icon</div>
          <D1Image value="home"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">Image</div>
          <D1Image :value="image1"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">Image/ contain</div>
          <D1Image :value="phone1" size="contain"/>
        </div>
        <div class="wiki-storybook-item wiki-storybook-item--squared--md">
          <div class="wiki-storybook-item__label">PDF</div>
          <D1Image :value="demoPdf"/>
        </div>
      </div>
    `
  })
}
// :story-items [!] System label / Системная метка
