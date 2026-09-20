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
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: standard</div>
            <D1Collage
              variant="standard"
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
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: quilted</div>
            <D1Collage
              variant="quilted"
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
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: woven</div>
            <D1Collage
              variant="woven"
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
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: masonryHorizontal</div>
            <D1Collage
              variant="masonryHorizontal"
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
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">variant: masonryVertical</div>
            <D1Collage
              variant="masonryVertical"
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
