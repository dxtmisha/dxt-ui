import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ClockDial from './D1ClockDial.vue'
import { ClockDialWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ClockDial',
  component: D1ClockDial,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ClockDialWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ClockDialWikiStorybook.getWiki(),
  args: ClockDialWikiStorybook.getValues()
} satisfies Meta<typeof D1ClockDial>

export default meta

type Story = StoryObj<typeof meta>

export const ClockDial: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ClockDial },
    setup: () => ({ args }),
    template: `
      <D1ClockDial v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ClockDialType: Story = {
  name: 'Типы циферблата и ограничения',
  render: () => ({
    components: { D1ClockDial },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">12-Hour</div>
            <D1ClockDial type="12" :value="10" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">24-Hour (min: 9, max: 18)</div>
            <D1ClockDial
              type="24"
              :value="16"
              :min="9"
              :max="18"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Minute (step: 5)</div>
            <D1ClockDial
              type="minute"
              :value="45"
              :step="5"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Second</div>
            <D1ClockDial type="second" :value="30" />
          </div>
        </div>
    `
  })
}
export const ClockDialVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1ClockDial },
    setup() {
      const hour = ref(9)
      return { hour }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected hour: {{ hour }}</span>
            <button class="wiki-storybook-button" @click="hour = 12">Set 12</button>
            <button class="wiki-storybook-button" @click="hour = 6">Set 6</button>
          </div>
          <D1ClockDial
            v-model="hour"
            type="12"
          />
        </div>
    `
  })
}
export const ClockDialClock: Story = {
  name: 'Режим часов со стрелками',
  render: () => ({
    components: { D1ClockDial },
    template: `
        <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">10:15:30</div>
          <D1ClockDial
            clock
            type="12"
            :hour="10"
            :minute="15"
            :second="30"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
