import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Image from './D1Image.vue'
import { ImageWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
import { demoPdf, image1, phone1, phone2, phone3 } from '@dxt-ui/wiki/media'
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
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
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
        image1,
        demoPdf
      }
    },
    template: `
          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
              <div class="wiki-storybook-item__label">Icon</div>
              <D1Image value="home"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
              <div class="wiki-storybook-item__label">Image/ contain</div>
              <D1Image :value="image1"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
              <div class="wiki-storybook-item__label">PDF</div>
              <D1Image :value="demoPdf"/>
            </div>
          </div>
        `
  })
}
export const ImageSize: Story = {
  name: ImageWikiStorybook.getStoryName('ImageSize'),
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1
      }
    },
    template: `
          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label">size: auto (default)</div>
              <D1Image :value="image1" size="auto"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label">size: contain</div>
              <D1Image :value="image1" size="contain"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label">size: cover</div>
              <D1Image :value="image1" size="cover"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label">coordinator</div>
              <D1Image :value="image1" :coordinator="[60, 10, 10, 40]"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label">x, y</div>
              <D1Image :value="image1" x="20" y="-10"/>
            </div>
          </div>
        `
  })
}
export const ImageAdaptive: Story = {
  name: ImageWikiStorybook.getStoryName('ImageAdaptive'),
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        phone1,
        phone2,
        phone3
      }
    },
    template: `
          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <D1Image :value="phone1" adaptive object-width="76.2"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <D1Image :value="phone2" adaptive object-width="71.9"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--md">
              <D1Image :value="phone3" adaptive object-width="129.9"/>
            </div>
          </div>
        `
  })
}
// :story-items [!] System label / Системная метка
