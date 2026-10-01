import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ClockPeriod from './D1ClockPeriod.vue'
import { ClockPeriodWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ClockPeriod',
  component: D1ClockPeriod,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ClockPeriodWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ClockPeriodWikiStorybook.getWiki(),
  args: ClockPeriodWikiStorybook.getValues()
} satisfies Meta<typeof D1ClockPeriod>

export default meta

type Story = StoryObj<typeof meta>

export const ClockPeriod: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ClockPeriodVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1ClockPeriod },
    setup() {
      const period = ref('am')
      return { period }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected period: {{ period }}</span>
            <button class="wiki-storybook-button" @click="period = 'am'">Set AM</button>
            <button class="wiki-storybook-button" @click="period = 'pm'">Set PM</button>
          </div>
          <D1ClockPeriod v-model="period" />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
