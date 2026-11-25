import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SelectValue from './D1SelectValue.vue'
import { SelectValueWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SelectValue',
  component: D1SelectValue,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectValueWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectValueWikiStorybook.getWiki(),
  args: SelectValueWikiStorybook.getValues()
} satisfies Meta<typeof D1SelectValue>

export default meta

type Story = StoryObj<typeof meta>

export const SelectValue: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SelectValueBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1SelectValue },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <D1SelectValue placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <D1SelectValue :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <D1SelectValue
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Select option')).toBeInTheDocument()
    await expect(canvas.getAllByText('Option 1').length).toBeGreaterThanOrEqual(2)
    await expect(canvas.getByText('Option 2')).toBeInTheDocument()
    await expect(canvas.getByText('Option 3')).toBeInTheDocument()
  }
}
export const SelectValueTestFalsyClickAndDisabled: Story = {
  name: 'Тест: Нулевое значение 0, событие click, iconShow и disabled',
  render: () => ({
    components: { D1SelectValue },
    setup() {
      const lastClicked = ref('')
      const items = ref([
        { label: 0, value: 0, index: '0', type: 'item' as const },
        { label: 'Beta', value: 'beta', index: 'beta', type: 'item' as const }
      ])
      const onClick = (_event: MouseEvent, value?: { value?: string | number }) => {
        lastClicked.value = String(value?.value ?? '')
      }
      return {
        lastClicked,
        items,
        onClick
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <span data-testid="sv-test-clicked">{{ lastClicked || 'none' }}</span>
          <D1SelectValue data-testid="sv-test-zero-single" :value="[{ label: 0, value: 0 }]" />
          <D1SelectValue
            data-testid="sv-test-multiple"
            :multiple="true"
            :icon-show="true"
            icon-cancel="close"
            :value="items"
            @click="onClick"
          />
          <D1SelectValue
            data-testid="sv-test-disabled"
            :multiple="true"
            :disabled="true"
            icon-cancel="close"
            :value="[{ label: 'Locked', value: 'locked', index: 'locked', type: 'item' }]"
            @click="onClick"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('sv-test-zero-single')).toHaveTextContent('0')

    const multipleRoot = canvas.getByTestId('sv-test-multiple')
    const cancelIcon = multipleRoot.querySelector('span[aria-hidden="true"], button, [class*="trailing"]')
    if (cancelIcon) {
      await userEvent.click(cancelIcon as HTMLElement)
    }
  }
}
// :story-items [!] System label / Системная метка
