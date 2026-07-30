import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Slider from './D1Slider.vue'
import { SliderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
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
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
