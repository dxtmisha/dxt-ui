import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CollageItem from './D1CollageItem.vue'
import { CollageItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CollageItem',
  component: D1CollageItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CollageItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CollageItemWikiStorybook.getWiki(),
  args: CollageItemWikiStorybook.getValues()
} satisfies Meta<typeof D1CollageItem>

export default meta

type Story = StoryObj<typeof meta>

export const CollageItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CollageItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-container">
      <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
        <D1CollageItem v-bind="args"/>
      </div>
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageItemSpans: Story = {
  name: 'Варианты Bento-охвата',
  render: () => ({
    components: { D1CollageItem },
    template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              image="https://picsum.photos/800/600?random=42"
              span="wide"
              collageBarPosition="static"
              label="Standard Position"
              description="Static bar placed below the image"
              :collageBarAttrs="{ button: 'Explore' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=43"
              span="wide"
              selected
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=44"
              span="tall"
              collageBarPosition="top"
              label="Vertical Panorama"
              description="Top overlay bar"
              :collageBarAttrs="{ icon: 'bookmark' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=45"
              span="huge"
              collageBarPosition="bottom"
              label="Huge Showcase (Enlarged 3x2)"
              description="3 columns x 2 rows enlarged element with action button"
              :collageBarAttrs="{ button: 'Explore Project' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=47"
              span="large"
              collageBarPosition="static"
              label="Large Card"
              description="2 columns x 2 rows with static caption bar"
              :collageBarAttrs="{ button: 'Details' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=48"
              span="standard"
              collageBarPosition="top"
              selected
              label="Top Label"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=49"
              span="standard"
              selected
              collageBarPosition="bottom"
              label="Active"
              :collageBarAttrs="{ icon: 'favorite' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=50"
              span="wide"
              collageBarPosition="bottom"
              label="Wide Banner"
              description="2 columns x 1 row bottom bar"
              :collageBarAttrs="{ button: 'Open' }"
            />
          </div>
        </div>
    `
  })
}
export const ImageSize: Story = {
  name: 'Отображение',
  render: () => ({
    components: { D1CollageItem },
    template: `
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="cover"
              collageBarPosition="static"
              label="size: cover (default)"
              description="Fills container, cropping overflow"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="contain"
              collageBarPosition="static"
              label="size: contain"
              description="Scales image to fit within bounds"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="auto"
              collageBarPosition="static"
              label="size: auto"
              description="Displays image without scaling"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              :coordinator="[60, 10, 10, 40]"
              collageBarPosition="static"
              label="coordinator"
              description="Crops to specified coordinate bounds"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              x="20%"
              y="-10%"
              collageBarPosition="static"
              label="x, y offset"
              description="Custom coordinate shift along axes"
            />
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
