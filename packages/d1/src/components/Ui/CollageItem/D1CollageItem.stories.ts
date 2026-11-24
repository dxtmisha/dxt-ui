import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CollageItem from './D1CollageItem.vue'
import { CollageItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { image1, image2 } from '@dxtmisha/wiki/media'
import { expect, within, userEvent } from 'storybook/test'
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
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-collageItem')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('FIGURE')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageItemSpans: Story = {
  name: 'Варианты Bento-охвата',
  render: () => ({
    components: { D1CollageItem },
    setup() {
      return { image1, image2 }
    },
    template: `
        
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              :image="image1"
              span="wide"
              collage-bar-position="static"
              label="Standard Position"
              description="Static bar placed below the image"
              :collage-bar-attrs="{ button: 'Explore' }"
            />
            <D1CollageItem
              :image="image2"
              span="wide"
              selected
            />
            <D1CollageItem
              :image="image1"
              span="tall"
              collage-bar-position="top"
              label="Vertical Panorama"
              description="Top overlay bar"
              :collage-bar-attrs="{ icon: 'bookmark' }"
            />
            <D1CollageItem
              :image="image2"
              span="huge"
              collage-bar-position="bottom"
              label="Huge Showcase (Enlarged 3x2)"
              description="3 columns x 2 rows enlarged element with action button"
              :collage-bar-attrs="{ button: 'Explore Project' }"
            />
            <D1CollageItem
              :image="image1"
              span="large"
              collage-bar-position="static"
              label="Large Card"
              description="2 columns x 2 rows with static caption bar"
              :collage-bar-attrs="{ button: 'Details' }"
            />
            <D1CollageItem
              :image="image2"
              span="standard"
              collage-bar-position="top"
              selected
              label="Top Label"
            />
            <D1CollageItem
              :image="image1"
              span="banner"
              collage-bar-position="bottom"
              label="Banner Span"
              description="3 columns x 1 row banner"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-collageItem')
    await expect(items.length).toBe(7)
    await expect(items[0]).toHaveClass('d1-collageItem--span--wide')
    await expect(items[1]).toHaveClass('d1-collageItem--selected')
    await expect(items[2]).toHaveClass('d1-collageItem--span--tall')
    await expect(items[2]).toHaveClass('d1-collageItem--collageBarPosition--top')
    await expect(items[3]).toHaveClass('d1-collageItem--span--huge')
    await expect(items[4]).toHaveClass('d1-collageItem--span--large')
    await expect(items[5]).toHaveClass('d1-collageItem--span--standard')
    await expect(items[6]).toHaveClass('d1-collageItem--span--banner')
  }
}
export const ImageSize: Story = {
  name: 'Отображение',
  render: () => ({
    components: { D1CollageItem },
    setup() {
      return { image1 }
    },
    template: `
        
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              :image="image1"
              size="cover"
              collage-bar-position="static"
              label="size: cover (default)"
              description="Fills container, cropping overflow"
            />
            <D1CollageItem
              :image="image1"
              size="contain"
              collage-bar-position="static"
              label="size: contain"
              description="Scales image to fit within bounds"
            />
            <D1CollageItem
              :image="image1"
              size="auto"
              collage-bar-position="static"
              label="size: auto"
              description="Displays image without scaling"
            />
            <D1CollageItem
              :image="image1"
              :coordinator="[60, 10, 10, 40]"
              collage-bar-position="static"
              label="coordinator"
              description="Crops to specified coordinate bounds"
            />
            <D1CollageItem
              :image="image1"
              x="20%"
              y="-10%"
              collage-bar-position="static"
              label="x, y offset"
              description="Custom coordinate shift along axes"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-collageItem')
    await expect(items.length).toBe(5)
    for (const item of items) {
      await expect(item.querySelector('.d1-collageItem__image')).toBeInTheDocument()
    }
  }
}
export const CollageItemTestStatesSlotsAndEvents: Story = {
  name: 'Тест: Состояния, тег, слоты, числовой 0 и событие клика',
  render: () => ({
    components: { D1CollageItem },
    setup() {
      const lastClicked = ref('')
      const onClickLite = (value: EventClickValue) => {
        lastClicked.value = String(value.value)
      }
      return { image1, image2, lastClicked, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <span data-testid="collage-item-test-click">{{ lastClicked }}</span>
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              :image="image1"
              focus
              compact
              selected
              icon-check="star"
              tag="div"
              value="item-99"
              collage-bar-position="bottom"
              label="Interactive Card"
              @click-lite="onClickLite"
            >
              <template #barTrailing>TRAIL</template>
            </D1CollageItem>
            <D1CollageItem
              :image="image2"
              collage-bar-position="static"
            >
              <template #barBody>CUSTOM BODY</template>
            </D1CollageItem>
            <D1CollageItem
              :image="image1"
              collage-bar-position="static"
              :label="0"
              :description="0"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const items = canvasElement.querySelectorAll('.d1-collageItem')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveClass('d1-collageItem--focus')
    await expect(items[0]).toHaveClass('d1-collageItem--compact')
    await expect(items[0]).toHaveClass('d1-collageItem--selected')
    await expect(items[0].querySelector('.d1-collageItem__body')?.tagName).toBe('DIV')
    await expect(items[0]).toHaveTextContent('TRAIL')
    await expect(items[1]).toHaveTextContent('CUSTOM BODY')
    await expect(items[2]).toHaveTextContent('0')
    const body = items[0].querySelector('.d1-collageItem__body') as HTMLElement | null
    if (body) {
      await userEvent.click(body)
    }
    await expect(canvas.getByTestId('collage-item-test-click')).toHaveTextContent('item-99')
  }
}
// :story-items [!] System label / Системная метка
