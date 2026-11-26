import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Slider from './D1Slider.vue'
import { SliderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SliderExpose } from '@dxtmisha/constructor/Slider'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Slider',
  component: D1Slider,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SliderWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SliderWikiStorybook.getWiki(),
  args: SliderWikiStorybook.getValues()
} satisfies Meta<typeof D1Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Slider: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Slider },
    setup: () => ({ args }),
    template: `
      <D1Slider v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const slider = canvasElement.querySelector('.d1-slider')
    await expect(slider).toBeInTheDocument()
    const thumb = canvasElement.querySelector('[role="slider"]')
    await expect(thumb).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SliderOrientation: Story = {
  name: 'Ориентация',
  render: () => ({
    components: { D1Slider },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Horizontal</div>
            <D1Slider :value="40"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Vertical</div>
            <D1Slider vertical :value="60"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const sliders = canvasElement.querySelectorAll('.d1-slider')
    await expect(sliders.length).toBe(2)
    await expect(sliders[1]).toHaveClass('d1-slider--vertical')
    const verticalThumb = sliders[1].querySelector('[role="slider"]')
    await expect(verticalThumb).toHaveAttribute('aria-orientation', 'vertical')
  }
}
export const SliderMultiple: Story = {
  name: 'Выбор диапазона',
  render: () => ({
    components: { D1Slider },
    template: `
        
        <D1Slider multiple :minimumDistance="10"/>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const thumbs = canvasElement.querySelectorAll('[role="slider"]')
    await expect(thumbs.length).toBe(2)
  }
}
export const SliderMarks: Story = {
  name: 'Метки и деления',
  render: () => ({
    components: { D1Slider },
    setup() {
      return {
        customMarks: [
          { value: 0, label: '0%' },
          { value: 25, label: '25%' },
          { value: 50, label: '50%' },
          { value: 75, label: '75%' },
          { value: 100, label: '100%' }
        ]
      }
    },
    template: `
        
        <D1Slider :marks="customMarks" magnet :step="5"/>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const marks = canvasElement.querySelectorAll('.d1-slider__mark')
    await expect(marks.length).toBe(5)
  }
}
export const SliderVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Slider },
    setup() {
      return {
        sliderValue: ref(40)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="slider-vmodel-value">Current value: <strong>{{ sliderValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="sliderValue = 25">Set 25</button>
            <button class="wiki-storybook-button" @click="sliderValue = 75">Set 75</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="sliderValue = 0">Clear</button>
          </div>
          <D1Slider v-model="sliderValue" :min="0" :max="100"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('slider-vmodel-value')).toHaveTextContent('40')
    await step('Update v-model to 75 and 0', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set 75' }))
      await expect(canvas.getByTestId('slider-vmodel-value')).toHaveTextContent('75')
      await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
      await expect(canvas.getByTestId('slider-vmodel-value')).toHaveTextContent('0')
    })
  }
}
export const SliderSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Slider, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Slider isSkeleton/>
            <D1Slider isSkeleton multiple/>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const sliders = canvasElement.querySelectorAll('.d1-slider')
    await expect(sliders.length).toBe(2)
  }
}
export const SliderTestStatesSlotsExpose: Story = {
  name: 'Тест: Состояния, слоты, скрытый input, ARIA и методы expose',
  render: () => ({
    components: { D1Slider },
    setup() {
      const sliderReference = ref<SliderExpose | null>(null)
      const controlledValue = ref<number>(0)
      const increaseValue = () => {
        sliderReference.value?.increase()
      }
      const decreaseValue = () => {
        sliderReference.value?.decrease()
      }
      return { sliderReference, controlledValue, increaseValue, decreaseValue }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="increaseValue">Increase</button>
            <button class="wiki-storybook-button" @click="decreaseValue">Decrease</button>
            <span data-testid="slider-controlled-value">{{ controlledValue }}</span>
          </div>
          <D1Slider
            ref="sliderReference"
            v-model="controlledValue"
            name="level"
            required
            :min="-50"
            :max="50"
            :step="10"
            :inputAttrs="{ 'data-testid': 'slider-hidden-input' }"
          />
          <D1Slider :value="40" disabled/>
          <D1Slider :value="60" readonly selected :showThumbLabel="false"/>
          <D1Slider :value="[20, 80]" multiple showThumbLabel>
            <template #minLabel="{ value }"><span>Min {{ value }}</span></template>
            <template #maxLabel="{ value }"><span>Max {{ value }}</span></template>
          </D1Slider>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const hiddenInput = canvas.getByTestId('slider-hidden-input')
    await expect(hiddenInput).toHaveAttribute('value', '0')
    await expect(hiddenInput).toHaveAttribute('name', 'level')

    const sliders = canvasElement.querySelectorAll('.d1-slider')
    await expect(sliders.length).toBe(4)
    await expect(sliders[1].querySelector('[role="slider"]')).toHaveAttribute('aria-disabled', 'true')
    await expect(sliders[2].querySelector('[role="slider"]')).toHaveAttribute('aria-readonly', 'true')
    await expect(sliders[3]).toHaveTextContent('Min 20')
    await expect(sliders[3]).toHaveTextContent('Max 80')

    await step('Increase and decrease via expose methods', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Increase' }))
      await expect(canvas.getByTestId('slider-controlled-value')).toHaveTextContent('10')
      await userEvent.click(canvas.getByRole('button', { name: 'Decrease' }))
      await expect(canvas.getByTestId('slider-controlled-value')).toHaveTextContent('0')
    })
  }
}
// :story-items [!] System label / Системная метка
