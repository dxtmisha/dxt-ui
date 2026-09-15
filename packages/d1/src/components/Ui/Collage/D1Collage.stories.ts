import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Collage from './D1Collage.vue'
import { CollageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Collage',
  component: D1Collage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CollageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CollageWikiStorybook.getWiki(),
  args: CollageWikiStorybook.getValues()
} satisfies Meta<typeof D1Collage>

export default meta

type Story = StoryObj<typeof meta>

export const Collage: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Collage },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-container">
      <D1Collage v-bind="args"/>
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageAppearances: Story = {
  name: 'Режимы макета',
  render: () => ({
    components: { D1Collage },
    template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">appearance: standard</div>
            <D1Collage
              appearance="standard"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/600?random=1', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=2', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=3', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=4', span: 'large', label: 'Large' },
                { image: 'https://picsum.photos/800/600?random=5', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=6', span: 'wide', label: 'Wide' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">appearance: quilted</div>
            <D1Collage
              appearance="quilted"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/600?random=7', span: 'large', label: 'Large' },
                { image: 'https://picsum.photos/800/600?random=8', span: 'standard', label: 'Standard 1' },
                { image: 'https://picsum.photos/800/600?random=9', span: 'standard', label: 'Standard 2' },
                { image: 'https://picsum.photos/800/600?random=10', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=11', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=12', span: 'standard', label: 'Standard 3' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">appearance: woven</div>
            <D1Collage
              appearance="woven"
              columns="3"
              :images="[
                { image: 'https://picsum.photos/800/600?random=13', label: 'Item 1' },
                { image: 'https://picsum.photos/800/600?random=14', label: 'Item 2' },
                { image: 'https://picsum.photos/800/600?random=15', label: 'Item 3' },
                { image: 'https://picsum.photos/800/600?random=16', label: 'Item 4' },
                { image: 'https://picsum.photos/800/600?random=17', label: 'Item 5' },
                { image: 'https://picsum.photos/800/600?random=18', label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">appearance: masonryHorizontal</div>
            <D1Collage
              appearance="masonryHorizontal"
              :images="[
                { image: 'https://picsum.photos/800/600?random=31', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=32', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=33', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=34', span: 'wide', label: 'Wide' },
                { image: 'https://picsum.photos/800/600?random=35', span: 'banner', label: 'Banner' },
                { image: 'https://picsum.photos/800/600?random=36', span: 'standard', label: 'Standard' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">appearance: masonryVertical</div>
            <D1Collage
              appearance="masonryVertical"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/600?random=41', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=42', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=43', span: 'huge', label: 'Huge' },
                { image: 'https://picsum.photos/800/600?random=44', span: 'tall', label: 'Tall' },
                { image: 'https://picsum.photos/800/600?random=45', span: 'standard', label: 'Standard' },
                { image: 'https://picsum.photos/800/600?random=46', span: 'standard', label: 'Standard' }
              ]"
            />
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
