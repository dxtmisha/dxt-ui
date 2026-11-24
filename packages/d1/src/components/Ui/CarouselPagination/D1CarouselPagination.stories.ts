import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CarouselPagination from './D1CarouselPagination.vue'
import { CarouselPaginationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { CarouselPaginationExpose } from '@dxtmisha/constructor/CarouselPagination'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CarouselPagination',
  component: D1CarouselPagination,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CarouselPaginationWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CarouselPaginationWikiStorybook.getWiki(),
  args: CarouselPaginationWikiStorybook.getValues()
} satisfies Meta<typeof D1CarouselPagination>

export default meta

type Story = StoryObj<typeof meta>

export const CarouselPagination: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CarouselPagination },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
      <D1CarouselPagination v-bind="args" />
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const rootElement = canvasElement.querySelector('.d1-carouselPagination')
    if (rootElement) {
      await expect(rootElement).toBeInTheDocument()
    }
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CarouselPaginationBasic: Story = {
  name: 'Типы отображения',
  render: () => ({
    components: { D1CarouselPagination },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Bullets</div>
            <D1CarouselPagination data-testid="cp-bullets" :count="5" :selected="2" type="bullets" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dots</div>
            <D1CarouselPagination data-testid="cp-dots" :count="5" :selected="2" type="dots" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <D1CarouselPagination data-testid="cp-dynamic" :count="10" :selected="5" dynamic :visible="5" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Lines</div>
            <D1CarouselPagination data-testid="cp-lines" :count="5" :selected="2" type="lines" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fraction</div>
            <D1CarouselPagination data-testid="cp-fraction" :count="5" :selected="2" type="fraction" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Progress bar</div>
            <D1CarouselPagination data-testid="cp-progressbar" :count="5" :selected="2" type="progressbar" />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="cp-bullets"]')).toHaveClass('d1-carouselPagination--type--bullets')
    await expect(canvasElement.querySelector('[data-testid="cp-dots"]')).toHaveClass('d1-carouselPagination--type--dots')
    await expect(canvasElement.querySelector('[data-testid="cp-dynamic"]')).toHaveClass('d1-carouselPagination--dynamic')
    await expect(canvasElement.querySelector('[data-testid="cp-lines"]')).toHaveClass('d1-carouselPagination--type--lines')
    await expect(canvasElement.querySelector('[data-testid="cp-fraction"]')).toHaveTextContent('2 / 5')
    await expect(canvasElement.querySelector('[data-testid="cp-progressbar"] [role="progressbar"]')).toHaveAttribute('aria-valuenow', '2')
  }
}
export const CarouselPaginationVModel: Story = {
  name: 'Двусторонняя привязка (v-model:selected)',
  render: () => ({
    components: { D1CarouselPagination },
    setup() {
      const selected = ref(1)
      return { selected }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="cp-vmodel-value">Current slide: <strong>{{ selected }}</strong></span>
            <button data-testid="cp-btn-1" class="wiki-storybook-button" @click="selected = 1">Slide 1</button>
            <button data-testid="cp-btn-3" class="wiki-storybook-button" @click="selected = 3">Slide 3</button>
            <button data-testid="cp-btn-5" class="wiki-storybook-button" @click="selected = 5">Slide 5</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
            <D1CarouselPagination data-testid="cp-vmodel" v-model:selected="selected" :count="5" />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const slideThreeButton = canvasElement.querySelector('[data-testid="cp-btn-3"]')
    if (slideThreeButton) {
      await userEvent.click(slideThreeButton)
    }
    await expect(canvasElement.querySelector('[data-testid="cp-vmodel-value"]')).toHaveTextContent('Current slide: 3')
    const fourthBullet = canvasElement.querySelectorAll('[data-testid="cp-vmodel"] .d1-carouselPagination__item')[3]
    if (fourthBullet) {
      await userEvent.click(fourthBullet)
    }
    await expect(canvasElement.querySelector('[data-testid="cp-vmodel-value"]')).toHaveTextContent('Current slide: 4')
  }
}
export const CarouselPaginationSlots: Story = {
  name: 'Кастомные слоты',
  render: () => ({
    components: { D1CarouselPagination },
    setup() {
      const selected = ref(2)
      return { selected }
    },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
          <D1CarouselPagination data-testid="cp-slots" v-model:selected="selected" :count="4" tag="nav">
            <template #item="{ binds, index }">
              <button
                v-bind="binds"
                style="padding: 4px 10px; border-radius: 6px; font-size: 12px;"
              >
                {{ index }}
              </button>
            </template>
          </D1CarouselPagination>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const navElement = canvasElement.querySelector('[data-testid="cp-slots"]')
    await expect(navElement?.tagName).toBe('NAV')
    const buttons = navElement?.querySelectorAll('button') ?? []
    await expect(buttons.length).toBe(4)
    if (buttons[2]) {
      await userEvent.click(buttons[2])
    }
    await expect(buttons[2]).toHaveAttribute('aria-selected', 'true')
  }
}
export const CarouselPaginationTestModesAndBoundaries: Story = {
  name: 'Тест: Вертикальный режим, control=false, hideIfOne, template и слоты',
  render: () => ({
    components: { D1CarouselPagination },
    template: `
        
        <div class="wiki-storybook-group">
          <D1CarouselPagination data-testid="cp-vertical" :count="4" :selected="2" vertical />
          <D1CarouselPagination data-testid="cp-readonly" :count="3" :selected="1" :control="false" />
          <D1CarouselPagination data-testid="cp-hidden" :count="1" :selected="1" :hide-if-one="true" />
          <D1CarouselPagination data-testid="cp-single-visible" :count="1" :selected="1" :hide-if-one="false" />
          <D1CarouselPagination data-testid="cp-template" type="fraction" :count="6" :selected="3" template="Step [active] of [total]" />
          <D1CarouselPagination data-testid="cp-slot-fraction" type="fraction" :count="4" :selected="2">
            <template #fraction="{ binds, active, total }">
              <span v-bind="binds">Custom {{ active }}/{{ total }}</span>
            </template>
          </D1CarouselPagination>
          <D1CarouselPagination data-testid="cp-slot-progress" type="progressbar" :count="4" :selected="2">
            <template #progress="{ binds, percent }">
              <div v-bind="binds">Pct {{ percent }}%</div>
            </template>
          </D1CarouselPagination>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="cp-vertical"]')).toHaveClass('d1-carouselPagination--vertical')
    await expect(canvasElement.querySelector('[data-testid="cp-hidden"]')).toBeNull()
    await expect(canvasElement.querySelector('[data-testid="cp-single-visible"]')).toBeInTheDocument()
    await expect(canvasElement.querySelector('[data-testid="cp-template"]')).toHaveTextContent('Step 3 of 6')
    await expect(canvasElement.querySelector('[data-testid="cp-slot-fraction"]')).toHaveTextContent('Custom 2/4')
    await expect(canvasElement.querySelector('[data-testid="cp-slot-progress"]')).toHaveTextContent('Pct 50%')

    const readonlyItems = canvasElement.querySelectorAll('[data-testid="cp-readonly"] .d1-carouselPagination__item')
    if (readonlyItems[2]) {
      await userEvent.click(readonlyItems[2])
    }
    await expect(readonlyItems[0]).toHaveAttribute('aria-selected', 'true')
  }
}
export const CarouselPaginationTestExposeAndKeyboard: Story = {
  name: 'Тест: Методы expose, события и клавиатурная навигация',
  render: () => ({
    components: { D1CarouselPagination },
    setup() {
      const paginationRef = ref<CarouselPaginationExpose>()
      const selected = ref(1)
      const lastChange = ref<number>(0)
      const onChange = (value: number) => {
        lastChange.value = value
      }
      const goNext = () => paginationRef.value?.next()
      const goPrevious = () => paginationRef.value?.previous()
      const setFour = () => paginationRef.value?.set(4)
      return { paginationRef, selected, lastChange, onChange, goNext, goPrevious, setFour }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1CarouselPagination
            ref="paginationRef"
            data-testid="cp-expose"
            v-model:selected="selected"
            :count="5"
            @change="onChange"
          />
          <div class="wiki-storybook-flex">
            <button data-testid="cp-next" class="wiki-storybook-button" @click="goNext">Next</button>
            <button data-testid="cp-set4" class="wiki-storybook-button" @click="setFour">Set 4</button>
            <button data-testid="cp-prev" class="wiki-storybook-button" @click="goPrevious">Prev</button>
          </div>
          <output data-testid="cp-state">{{ selected }}:{{ lastChange }}</output>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const nextButton = canvasElement.querySelector('[data-testid="cp-next"]')
    const setFourButton = canvasElement.querySelector('[data-testid="cp-set4"]')
    const prevButton = canvasElement.querySelector('[data-testid="cp-prev"]')
    if (nextButton) {
      await userEvent.click(nextButton)
    }
    await expect(canvasElement.querySelector('[data-testid="cp-state"]')).toHaveTextContent('2:2')
    if (setFourButton) {
      await userEvent.click(setFourButton)
    }
    await expect(canvasElement.querySelector('[data-testid="cp-state"]')).toHaveTextContent('4:4')
    if (prevButton) {
      await userEvent.click(prevButton)
    }
    await expect(canvasElement.querySelector('[data-testid="cp-state"]')).toHaveTextContent('3:3')
  }
}
// :story-items [!] System label / Системная метка
