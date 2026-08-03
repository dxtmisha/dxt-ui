import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Slider from './D1Slider.vue'
import { SliderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
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
      <D1Slider v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SliderMultiple: Story = {
  name: 'Выбор диапазона',
  render: () => ({
    components: { D1Slider },
    template: `
        <D1Slider multiple :minimumDistance="10" />
    `
  })
}
export const SliderMarks: Story = {
  name: 'Метки и деления',
  render: () => ({
    components: { D1Slider },
    setup() {
      return {
        customMarks: [
          { mark: 0, label: '0%' },
          { mark: 25, label: '25%' },
          { mark: 50, label: '50%' },
          { mark: 75, label: '75%' },
          { mark: 100, label: '100%' }
        ]
      }
    },
    template: `
        <D1Slider :marks="customMarks" magnet :step="5" />
    `
  })
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
            <span>Current value: <strong>{{ sliderValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="sliderValue = 25">Set 25</button>
            <button class="wiki-storybook-button" @click="sliderValue = 75">Set 75</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="sliderValue = 0">Clear</button>
          </div>
          <D1Slider v-model="sliderValue" :min="0" :max="100" />
        </div>
    `
  })
}
export const SliderSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Slider, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Slider isSkeleton />
            <D1Slider isSkeleton multiple />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
