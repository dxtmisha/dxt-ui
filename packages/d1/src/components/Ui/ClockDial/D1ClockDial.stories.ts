import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ClockDial from './D1ClockDial.vue'
import { ClockDialWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { ClockDialEventItem } from '@dxtmisha/constructor/ClockDial'
import { expect, within, userEvent, fireEvent } from 'storybook/test'
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
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-clockDial')
    await expect(component).toBeInTheDocument()
  }
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
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-clockDial')
    await expect(items.length).toBe(4)
    await expect(items[0]).toHaveClass('d1-clockDial--type--12')
    await expect(items[1]).toHaveClass('d1-clockDial--type--24')
    await expect(items[1]).toHaveClass('d1-clockDial--section')
    await expect(items[2]).toHaveClass('d1-clockDial--type--minute')
    await expect(items[3]).toHaveClass('d1-clockDial--type--second')
  }
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
            <span data-testid="clock-dial-vmodel-value">Selected hour: {{ hour }}</span>
            <button class="wiki-storybook-button" @click="hour = 12">Set 12</button>
            <button class="wiki-storybook-button" @click="hour = 6">Set 6</button>
          </div>
          <D1ClockDial
            v-model="hour"
            type="12"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Verify initial value and update via buttons', async () => {
      await expect(canvas.getByTestId('clock-dial-vmodel-value')).toHaveTextContent('Selected hour: 9')
      await userEvent.click(canvas.getByText('Set 12'))
      await expect(canvas.getByTestId('clock-dial-vmodel-value')).toHaveTextContent('Selected hour: 12')
      await userEvent.click(canvas.getByText('Set 6'))
      await expect(canvas.getByTestId('clock-dial-vmodel-value')).toHaveTextContent('Selected hour: 6')
    })
  }
}
export const ClockDialClock: Story = {
  name: 'Режим часов со стрелками',
  render: () => ({
    components: { D1ClockDial },
    template: `
        
        <div class="wiki-storybook-group">
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
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">showTime</div>
            <D1ClockDial
              clock
              show-time
              type="12"
              :hour="10"
              :minute="15"
              :second="30"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-clockDial')
    await expect(items.length).toBe(2)
    await expect(items[0].querySelector('.d1-clockDial__arrowHour')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-clockDial__arrowMinute')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-clockDial__arrowSecond')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-clockDial__dial')).toHaveTextContent('10:15:30')
  }
}
export const ClockDialTestStates: Story = {
  name: 'Тест: Отключённое, только для чтения и ограничения диапазона',
  render: () => ({
    components: { D1ClockDial },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">disabled</div>
            <D1ClockDial type="12" :value="6" disabled />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">readonly</div>
            <D1ClockDial type="12" :value="9" readonly />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">min 3 max 9 step 2</div>
            <D1ClockDial type="12" :value="5" :min="3" :max="9" :step="2" />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-clockDial')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveClass('d1-clockDial--disabled')
    await expect(items[0]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[1]).toHaveClass('d1-clockDial--readonly')
    await expect(items[1]).toHaveAttribute('aria-readonly', 'true')
    const disabledMark = items[2].querySelector('[data-value="1"]')
    await expect(disabledMark).toHaveClass('d1-clockDial__value--disabled')
  }
}
export const ClockDialTestSlotsAndEvents: Story = {
  name: 'Тест: Слоты, события и expose API',
  render: () => ({
    components: { D1ClockDial },
    setup() {
      const dialRef = ref<{ getValue: () => number | undefined, setValue: (value?: number) => void }>()
      const lastEvent = ref('')
      const currentValue = ref(3)
      const onChange = (_event: ClockDialEventItem, value: number) => {
        lastEvent.value = 'change:' + value
      }
      const setZero = () => {
        dialRef.value?.setValue(0)
      }
      return { dialRef, lastEvent, currentValue, onChange, setZero }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="clock-dial-test-event">{{ lastEvent }}</span>
            <span data-testid="clock-dial-test-value">{{ currentValue }}</span>
            <button class="wiki-storybook-button" @click="setZero">Set Zero</button>
          </div>
          <D1ClockDial
            ref="dialRef"
            v-model="currentValue"
            type="24"
            @change="onChange"
          >
            <template #default>CENTER</template>
            <template #item="{ item }">{{ item.value }}h</template>
          </D1ClockDial>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dial = canvasElement.querySelector('.d1-clockDial')
    await expect(dial?.querySelector('.d1-clockDial__dial')).toHaveTextContent('CENTER')
    await expect(dial?.querySelector('[data-value="3"]')).toHaveTextContent('3h')
    await userEvent.click(canvas.getByText('Set Zero'))
    await expect(canvas.getByTestId('clock-dial-test-value')).toHaveTextContent('0')
    const markNine = dial?.querySelector('[data-value="9"]') as HTMLElement | null
    if (markNine) {
      await fireEvent.click(markNine)
    }
    await expect(canvas.getByTestId('clock-dial-test-event')).toHaveTextContent('change:9')
  }
}
// :story-items [!] System label / Системная метка
