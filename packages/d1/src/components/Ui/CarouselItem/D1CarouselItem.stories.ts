import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CarouselItem from './D1CarouselItem.vue'
import { CarouselItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
import type { CarouselItemExpose } from '@dxtmisha/constructor/CarouselItem'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CarouselItem',
  component: D1CarouselItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CarouselItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CarouselItemWikiStorybook.getWiki(),
  args: CarouselItemWikiStorybook.getValues()
} satisfies Meta<typeof D1CarouselItem>

export default meta

type Story = StoryObj<typeof meta>

export const CarouselItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CarouselItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <D1CarouselItem v-bind="args" />
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const slideElement = canvasElement.querySelector('.d1-carouselItem')
    await expect(slideElement).toBeInTheDocument()
    await expect(slideElement).toHaveAttribute('role', 'group')
    await expect(slideElement).toHaveAttribute('aria-roledescription', 'slide')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CarouselItemSlot: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1CarouselItem },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <D1CarouselItem data-testid="ci-slot" :slide="1" :total="3" selected>
            <template #default="{ selected, slide }">
              <span>Slide {{ slide }} ({{ selected ? 'active' : 'inactive' }})</span>
            </template>
          </D1CarouselItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const slideElement = canvasElement.querySelector('[data-testid="ci-slot"]')
    await expect(slideElement).toBeInTheDocument()
    await expect(slideElement).toHaveTextContent('Slide 1 (active)')
    await expect(slideElement).toHaveAttribute('aria-label', '1 / 3')
  }
}
export const CarouselItemSkeleton: Story = {
  name: 'Состояние скелетона',
  render: () => ({
    components: { D1CarouselItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CarouselItem data-testid="ci-skeleton" isSkeleton />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const slideElement = canvasElement.querySelector('[data-testid="ci-skeleton"]')
    await expect(slideElement).toBeInTheDocument()
  }
}
export const CarouselItemTestSnapAndImage: Story = {
  name: 'Тест: Выравнивание snap, изображение, кастомный тег и ARIA',
  render: () => ({
    components: { D1CarouselItem },
    setup() {
      return { image1 }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <D1CarouselItem data-testid="ci-snap-start" snap="start" selected :image="image1" :image-attrs="{ alt: 'Hero image' }" :slide="0" :total="4" :value="0" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <D1CarouselItem data-testid="ci-snap-center" snap="center" tag="article" role="listitem" aria-label="Custom slide" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <D1CarouselItem data-testid="ci-snap-end" snap="end" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <D1CarouselItem data-testid="ci-snap-none" snap="none" />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const startElement = canvasElement.querySelector('[data-testid="ci-snap-start"]')
    const centerElement = canvasElement.querySelector('[data-testid="ci-snap-center"]')
    const endElement = canvasElement.querySelector('[data-testid="ci-snap-end"]')
    const noneElement = canvasElement.querySelector('[data-testid="ci-snap-none"]')

    await expect(startElement).toHaveClass('d1-carouselItem--selected')
    await expect(startElement).toHaveClass('d1-carouselItem--snap--start')
    await expect(startElement).toHaveAttribute('aria-label', '0 / 4')
    await expect(startElement).toHaveAttribute('data-value', '0')
    await expect(startElement?.querySelector('.d1-carouselItem__image')).toBeInTheDocument()

    await expect(centerElement?.tagName).toBe('ARTICLE')
    await expect(centerElement).toHaveClass('d1-carouselItem--snap--center')
    await expect(centerElement).toHaveAttribute('role', 'listitem')
    await expect(centerElement).toHaveAttribute('aria-label', 'Custom slide')

    await expect(endElement).toHaveClass('d1-carouselItem--snap--end')
    await expect(noneElement).toHaveClass('d1-carouselItem--snap--none')
  }
}
export const CarouselItemTestEventsAndExpose: Story = {
  name: 'Тест: События клика и публичный API (expose)',
  render: () => ({
    components: { D1CarouselItem },
    setup() {
      const itemRef = ref<CarouselItemExpose>()
      const clickedValue = ref<unknown>('none')
      const exposeResult = ref<string>('')
      const onClickLite = (payload: { value?: unknown }) => {
        clickedValue.value = payload?.value
      }
      const readExpose = () => {
        if (!itemRef.value) {
          return
        }
        exposeResult.value = String(itemRef.value.isSelected()) + ':' + String(itemRef.value.getSlide()) + ':' + String(itemRef.value.getValue?.())
      }
      return { itemRef, clickedValue, exposeResult, onClickLite, readExpose }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CarouselItem
              ref="itemRef"
              data-testid="ci-events"
              :slide="3"
              :total="6"
              selected
              value="slide-three"
              :detail="{ source: 'test' }"
              @click-lite="onClickLite"
            >
              <span>Clickable slide</span>
            </D1CarouselItem>
          </div>
          <button data-testid="ci-read-expose" class="wiki-storybook-button" @click="readExpose">Read Expose</button>
          <output data-testid="ci-clicked-value">{{ String(clickedValue) }}</output>
          <output data-testid="ci-expose-result">{{ exposeResult }}</output>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const slideElement = canvasElement.querySelector('[data-testid="ci-events"]')
    const exposeButton = canvasElement.querySelector('[data-testid="ci-read-expose"]')
    if (slideElement) {
      await userEvent.click(slideElement)
    }
    if (exposeButton) {
      await userEvent.click(exposeButton)
    }
    await expect(canvasElement.querySelector('[data-testid="ci-clicked-value"]')).toHaveTextContent('slide-three')
    await expect(canvasElement.querySelector('[data-testid="ci-expose-result"]')).toHaveTextContent('true:3:slide-three')
  }
}
// :story-items [!] System label / Системная метка
