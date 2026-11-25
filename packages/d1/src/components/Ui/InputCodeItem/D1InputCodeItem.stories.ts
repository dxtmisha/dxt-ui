import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputCodeItem from './D1InputCodeItem.vue'
import { InputCodeItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { InputCodeItemExpose } from '@dxtmisha/constructor/InputCodeItem'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputCodeItem',
  component: D1InputCodeItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputCodeItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputCodeItemWikiStorybook.getWiki(),
  args: InputCodeItemWikiStorybook.getValues()
} satisfies Meta<typeof D1InputCodeItem>

export default meta

type Story = StoryObj<typeof meta>

export const InputCodeItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputCodeItemBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1InputCodeItem },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1InputCodeItem placeholder="0" :index="0" text-symbol="Digit [index]" />
          <D1InputCodeItem hide placeholder="1" :index="1" text-symbol="Digit [index]" />
          <D1InputCodeItem success placeholder="2" :index="2" text-symbol="Digit [index]" />
          <D1InputCodeItem error placeholder="3" :index="3" text-symbol="Digit [index]" />
          <D1InputCodeItem disabled placeholder="4" :index="4" text-symbol="Digit [index]" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-inputCodeItem')
    await expect(items.length).toBe(5)
    await expect(items[1].querySelector('.d1-inputCodeItem__sub')).toBeInTheDocument()
    await expect(items[3].querySelector('input')).toHaveAttribute('aria-invalid', 'true')
    await expect(items[4].querySelector('input')).toHaveAttribute('aria-disabled', 'true')
    await expect(items[0].querySelector('input')).toHaveAttribute('aria-label', 'Digit 1')
  }
}
export const InputCodeItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputCodeItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex">
            <D1InputCodeItem is-skeleton placeholder="0" />
            <D1InputCodeItem is-skeleton placeholder="1" />
            <D1InputCodeItem is-skeleton placeholder="2" />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-inputCodeItem')
    await expect(items.length).toBe(3)
  }
}
export const InputCodeItemTestPropsAndExpose: Story = {
  name: 'Тест: Свойства, события и expose API',
  render: () => ({
    components: { D1InputCodeItem },
    setup() {
      const itemReference = ref<InputCodeItemExpose | null>(null)
      const currentValue = ref<string>('')
      const lastEvent = ref<string>('')

      const setValue = (): void => {
        itemReference.value?.set('8')
        currentValue.value = itemReference.value?.getValue() ?? ''
      }

      const resetValue = (): void => {
        itemReference.value?.reset()
        currentValue.value = itemReference.value?.getValue() ?? ''
      }

      const onInput = (index: string | number | undefined, value: string): void => {
        currentValue.value = value
        lastEvent.value = 'input:' + String(index) + ':' + value
      }

      return {
        itemReference,
        currentValue,
        lastEvent,
        setValue,
        resetValue,
        onInput
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="setValue">Set 8</button>
            <button type="button" class="wiki-storybook-button" @click="resetValue">Reset</button>
            <span data-testid="ici-test-value">{{ currentValue }}</span>
            <span data-testid="ici-test-event">{{ lastEvent }}</span>
          </div>

          <D1InputCodeItem
            ref="itemReference"
            :index="2"
            :move="false"
            name="otp-cell"
            autocomplete="off"
            :match="/[a-zA-Z0-9]/"
            input-mode="text"
            placeholder="_"
            :tabindex="0"
            text-symbol="Code char [index]"
            @input="onInput"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const input = canvasElement.querySelector('input') as HTMLInputElement

    await expect(input).toHaveAttribute('name', 'otp-cell__2')
    await expect(input).toHaveAttribute('autocomplete', 'off')
    await expect(input).toHaveAttribute('inputmode', 'text')
    await expect(input).toHaveAttribute('placeholder', '_')
    await expect(input).toHaveAttribute('tabindex', '0')
    await expect(input).toHaveAttribute('aria-label', 'Code char 3')

    await step('Test expose set and reset', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set 8' }))
      await expect(canvas.getByTestId('ici-test-value')).toHaveTextContent('8')

      await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
      await expect(canvas.getByTestId('ici-test-value')).toHaveTextContent('')
    })

    await step('Test typing emits input event', async () => {
      await userEvent.type(input, 'A')
      await waitFor(() => {
        expect(canvas.getByTestId('ici-test-event')).toHaveTextContent('input:2:A')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
