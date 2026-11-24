import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ButtonGroup from './D1ButtonGroup.vue'
import { ButtonGroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Button from '../Button/D1Button.vue'
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ButtonGroup',
  component: D1ButtonGroup,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ButtonGroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ButtonGroupWikiStorybook.getWiki(),
  args: ButtonGroupWikiStorybook.getValues()
} satisfies Meta<typeof D1ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const ButtonGroup: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ButtonGroup },
    setup: () => ({ args }),
    template: `
      <D1ButtonGroup v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const group = canvasElement.querySelector('.d1-buttonGroup')
    await expect(group).toBeInTheDocument()
    await expect(group).toHaveAttribute('role', 'group')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ButtonGroupSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1ButtonGroup, D1Button },
    template: `
        
        <D1ButtonGroup data-testid="bg-slots" aria-label="Custom slot actions">
          <template #default>
            <D1Button label="Save" />
            <D1Button label="Cancel" />
          </template>
        </D1ButtonGroup>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const group = canvasElement.querySelector('[data-testid="bg-slots"]')
    await expect(group).toHaveAttribute('role', 'group')
    await expect(group).toHaveAttribute('aria-label', 'Custom slot actions')
    await expect(group?.querySelectorAll('button').length).toBe(2)
  }
}
export const ButtonGroupSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1ButtonGroup, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1ButtonGroup
            data-testid="bg-skeleton"
            isSkeleton
            :list="[
              { label: 'First action' },
              { label: 'Second action' }
            ]"
          />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const group = canvasElement.querySelector('[data-testid="bg-skeleton"]')
    await expect(group?.querySelectorAll('button').length).toBe(2)
  }
}
export const ButtonGroupTestEventsAndDisabled: Story = {
  name: 'Тест: События клика (числовой ноль) и блокировка disabled',
  render: () => ({
    components: { D1ButtonGroup },
    setup() {
      const lastValue = ref<unknown>('none')
      return {
        lastValue,
        onGroupClickLite: (payload: { value?: unknown }) => {
          lastValue.value = payload?.value
        }
      }
    },
    template: `
        
        <div>
          <D1ButtonGroup
            data-testid="bg-events"
            orientation="vertical"
            wrap
            :button-attrs="{ inverse: true }"
            :list="[
              { label: 'Zero Action', value: 0 },
              { label: 'Disabled Action', value: 'blocked', disabled: true }
            ]"
            @click-lite="onGroupClickLite"
          />
          <output data-testid="bg-last-value">{{ String(lastValue) }}</output>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll('[data-testid="bg-events"] button')
    await expect(buttons.length).toBe(2)
    if (buttons[0]) {
      await userEvent.click(buttons[0])
    }
    await expect(canvasElement.querySelector('[data-testid="bg-last-value"]')).toHaveTextContent('0')

    if (buttons[1]) {
      await expect(buttons[1]).toBeDisabled()
    }
  }
}
// :story-items [!] System label / Системная метка
