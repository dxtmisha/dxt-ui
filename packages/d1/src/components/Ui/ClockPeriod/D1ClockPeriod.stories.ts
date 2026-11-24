import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ClockPeriod from './D1ClockPeriod.vue'
import { ClockPeriodWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { ClockPeriodType } from '@dxtmisha/constructor/ClockPeriod'
import { expect, within, userEvent } from 'storybook/test'
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
  render: (args: any) => ({
    components: { D1ClockPeriod },
    setup: () => ({ args }),
    template: `
      <D1ClockPeriod v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-clockPeriod')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveAttribute('role', 'radiogroup')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ClockPeriodVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1ClockPeriod },
    setup() {
      const period = ref<ClockPeriodType>(ClockPeriodType.am)
      return { period, ClockPeriodType }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-period-vmodel-value">Selected period: {{ period }}</span>
            <button class="wiki-storybook-button" @click="period = ClockPeriodType.am">Set AM</button>
            <button class="wiki-storybook-button" @click="period = ClockPeriodType.pm">Set PM</button>
          </div>
          <D1ClockPeriod v-model="period" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('clock-period-vmodel-value')).toHaveTextContent('Selected period: am')
    await userEvent.click(canvas.getByText('Set PM'))
    await expect(canvas.getByTestId('clock-period-vmodel-value')).toHaveTextContent('Selected period: pm')
    await userEvent.click(canvas.getByText('Set AM'))
    await expect(canvas.getByTestId('clock-period-vmodel-value')).toHaveTextContent('Selected period: am')
  }
}
export const ClockPeriodTestStatesAndOrientations: Story = {
  name: 'Тест: Ориентации, пользовательские подписи, disabled и readonly',
  render: () => ({
    components: { D1ClockPeriod },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">horizontal</div>
            <D1ClockPeriod orientation="horizontal" value="pm" text-am="Morning" text-pm="Evening" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">disabled</div>
            <D1ClockPeriod value="am" disabled />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">readonly</div>
            <D1ClockPeriod value="pm" readonly />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-clockPeriod')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveClass('d1-clockPeriod--orientation--horizontal')
    await expect(items[0].querySelector('[data-value="am"]')).toHaveTextContent('Morning')
    await expect(items[0].querySelector('[data-value="pm"]')).toHaveTextContent('Evening')
    await expect(items[1]).toHaveClass('d1-clockPeriod--disabled')
    await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[2]).toHaveClass('d1-clockPeriod--readonly')
    await expect(items[2]).toHaveAttribute('aria-readonly', 'true')
  }
}
export const ClockPeriodTestExposeAndEvents: Story = {
  name: 'Тест: События клика, клавиатурная навигация и expose API',
  render: () => ({
    components: { D1ClockPeriod },
    setup() {
      const periodRef = ref<{ get: () => ClockPeriodType | undefined, set: (value?: ClockPeriodType) => void, setByHour: (hour?: number) => void }>()
      const periodValue = ref<ClockPeriodType>(ClockPeriodType.am)
      const clickedValue = ref('')
      const onClickLite = (value: EventClickValue) => {
        clickedValue.value = String(value.value)
      }
      const applyEvening = () => {
        periodRef.value?.setByHour(20)
      }
      return { periodRef, periodValue, clickedValue, onClickLite, applyEvening }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-period-test-val">{{ periodValue }}</span>
            <span data-testid="clock-period-test-click">{{ clickedValue }}</span>
            <button class="wiki-storybook-button" @click="applyEvening">Set Hour 20</button>
          </div>
          <D1ClockPeriod
            ref="periodRef"
            v-model="periodValue"
            orientation="horizontal"
            @click-lite="onClickLite"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByText('Set Hour 20'))
    await expect(canvas.getByTestId('clock-period-test-val')).toHaveTextContent('pm')
    const amButton = canvasElement.querySelector('[data-value="am"]') as HTMLElement | null
    if (amButton) {
      await userEvent.click(amButton)
    }
    await expect(canvas.getByTestId('clock-period-test-val')).toHaveTextContent('am')
    await expect(canvas.getByTestId('clock-period-test-click')).toHaveTextContent('am')
  }
}
// :story-items [!] System label / Системная метка
