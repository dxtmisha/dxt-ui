import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Collage from './D1Collage.vue'
import { CollageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
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
export const CollageVariants: Story = {
  name: 'Варианты макета',
  render: () => ({
    components: { D1Collage },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: standard</div>
            <D1Collage
              variant="standard"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/600/600?random=1', label: 'Item 1' },
                { image: 'https://picsum.photos/600/600?random=2', label: 'Item 2' },
                { image: 'https://picsum.photos/600/600?random=3', label: 'Item 3' },
                { image: 'https://picsum.photos/600/600?random=4', label: 'Item 4' },
                { image: 'https://picsum.photos/600/600?random=5', label: 'Item 5' },
                { image: 'https://picsum.photos/600/600?random=6', label: 'Item 6' },
                { image: 'https://picsum.photos/600/600?random=7', label: 'Item 7' },
                { image: 'https://picsum.photos/600/600?random=8', label: 'Item 8' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: quilted</div>
            <D1Collage
              variant="quilted"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/800/800?random=11', span: 'large', label: 'Large (2x2)' },
                { image: 'https://picsum.photos/600/600?random=12', span: 'standard', label: 'Standard 1' },
                { image: 'https://picsum.photos/600/1200?random=13', span: 'tall', label: 'Tall (1x2)' },
                { image: 'https://picsum.photos/600/600?random=14', span: 'standard', label: 'Standard 2' },
                { image: 'https://picsum.photos/1200/600?random=15', span: 'wide', label: 'Wide (2x1)' },
                { image: 'https://picsum.photos/600/600?random=16', span: 'standard', label: 'Standard 3' },
                { image: 'https://picsum.photos/600/600?random=17', span: 'standard', label: 'Standard 4' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: woven</div>
            <D1Collage
              variant="woven"
              columns="3"
              :images="[
                { image: 'https://picsum.photos/600/800?random=21', label: 'Item 1' },
                { image: 'https://picsum.photos/600/800?random=22', label: 'Item 2' },
                { image: 'https://picsum.photos/600/800?random=23', label: 'Item 3' },
                { image: 'https://picsum.photos/600/800?random=24', label: 'Item 4' },
                { image: 'https://picsum.photos/600/800?random=25', label: 'Item 5' },
                { image: 'https://picsum.photos/600/800?random=26', label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryHorizontal</div>
            <D1Collage
              variant="masonryHorizontal"
              :images="[
                { image: 'https://picsum.photos/960/540?random=31', label: 'Landscape 16:9' },
                { image: 'https://picsum.photos/600/600?random=32', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1000/500?random=33', label: 'Panoramic 2:1' },
                { image: 'https://picsum.photos/600/800?random=34', label: 'Portrait 3:4' },
                { image: 'https://picsum.photos/800/500?random=35', label: 'Wide 16:10' },
                { image: 'https://picsum.photos/800/600?random=36', label: 'Standard 4:3' },
                { image: 'https://picsum.photos/600/600?random=37', label: 'Square 1:1' },
                { image: 'https://picsum.photos/1050/450?random=38', label: 'Panoramic 21:9' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryVertical</div>
            <D1Collage
              variant="masonryVertical"
              columns="4"
              :images="[
                { image: 'https://picsum.photos/540/960?random=41', label: 'Tall Pin' },
                { image: 'https://picsum.photos/600/600?random=42', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=43', label: 'Portrait' },
                { image: 'https://picsum.photos/800/500?random=44', label: 'Landscape' },
                { image: 'https://picsum.photos/800/600?random=45', label: 'Standard' },
                { image: 'https://picsum.photos/600/900?random=46', label: 'Tall Portrait' },
                { image: 'https://picsum.photos/600/600?random=47', label: 'Square' },
                { image: 'https://picsum.photos/600/800?random=48', label: 'Portrait' }
              ]"
            />
          </div>
        </div>
    `
  })
}
export const CollageVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Collage },
    setup() {
      const selected = ref(['select-1', 'select-3'])
      const images = [
        { image: 'https://picsum.photos/600/600?random=51', label: 'Item 1', value: 'select-1' },
        { image: 'https://picsum.photos/600/600?random=52', label: 'Item 2', value: 'select-2' },
        { image: 'https://picsum.photos/600/600?random=53', label: 'Item 3', value: 'select-3' },
        { image: 'https://picsum.photos/600/600?random=54', label: 'Item 4', value: 'select-4' }
      ]
      return { selected, images }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = ['select-1', 'select-2']">Select 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="selected = []">Clear</button>
          </div>

          <D1Collage
            control
            columns="4"
            variant="standard"
            :images="images"
            v-model:selected="selected"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
