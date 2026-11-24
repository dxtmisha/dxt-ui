import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ChipGroup from './D1ChipGroup.vue'
import { ChipGroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Chip from '../Chip/D1Chip.vue'
import { ref } from 'vue'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ChipGroup',
  component: D1ChipGroup,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ChipGroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ChipGroupWikiStorybook.getWiki(),
  args: ChipGroupWikiStorybook.getValues()
} satisfies Meta<typeof D1ChipGroup>

export default meta

type Story = StoryObj<typeof meta>

export const ChipGroup: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ChipGroup },
    setup: () => ({ args }),
    template: `
      <D1ChipGroup v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const groupElement = canvasElement.querySelector('.d1-chipGroup')
    await expect(groupElement).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ChipGroupSelection: Story = {
  name: 'Состояния выбора',
  render: () => ({
    components: { D1ChipGroup },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup data-testid="cg-single" :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <D1ChipGroup data-testid="cg-multi" :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <D1ChipGroup
            data-testid="cg-icon-selected"
            :list="[
              { label: 'Option 1', icon: 'check', value: 'option1' },
              { label: 'Option 2', icon: 'check', value: 'option2' },
              { label: 'Option 3', icon: 'check', value: 'option3' }
            ]"
            :selected="['option2']"
            :icon-when-selected="true"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelectorAll('[data-testid="cg-single"] .d1-chipGroup__item').length).toBe(3)
    await expect(canvasElement.querySelectorAll('[data-testid="cg-multi"] .d1-chipGroup__item').length).toBe(4)
    await expect(canvasElement.querySelectorAll('[data-testid="cg-icon-selected"] .d1-chipGroup__item').length).toBe(3)
  }
}
export const ChipGroupVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1ChipGroup },
    setup() {
      const multipleSelected = ref<string[]>(['option1', 'option3'])
      return {
        multipleSelected
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="cg-vmodel-value">Current value: {{ multipleSelected }}</span>
            <button data-testid="cg-btn-12" class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button data-testid="cg-btn-123" class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button data-testid="cg-btn-clear" class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <D1ChipGroup
            data-testid="cg-vmodel"
            v-model:selected="multipleSelected"
            :list="[
              { label: 'Option 1', value: 'option1', icon: 'check' },
              { label: 'Option 2', value: 'option2', icon: 'check' },
              { label: 'Option 3', value: 'option3', icon: 'check' }
            ]"
            :readonly="false"
            multiple
            :icon-when-selected="true"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const secondChip = canvasElement.querySelectorAll('[data-testid="cg-vmodel"] .d1-chipGroup__item')[1]
    if (secondChip) {
      await userEvent.click(secondChip)
    }
    await expect(canvasElement.querySelector('[data-testid="cg-vmodel-value"]')).toHaveTextContent('option2')

    const clearButton = canvasElement.querySelector('[data-testid="cg-btn-clear"]')
    if (clearButton) {
      await userEvent.click(clearButton)
    }
    await expect(canvasElement.querySelector('[data-testid="cg-vmodel-value"]')).toHaveTextContent('[]')
  }
}
export const ChipGroupTestPropsAndSlots: Story = {
  name: 'Тест: Кастомные ключи, числовой ноль, readonly, chipAttrs, события и слот default',
  render: () => ({
    components: { D1ChipGroup, D1Chip },
    setup() {
      const selected = ref<number | string>(0)
      const lastClicked = ref<unknown>('none')
      const onClickLite = (payload: { value?: unknown }) => {
        lastClicked.value = payload?.value
      }
      return { selected, lastClicked, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup
            data-testid="cg-custom"
            v-model:selected="selected"
            :list="[
              { title: 'Zero Choice', code: 0 },
              { title: 'Second Choice', code: 'two' }
            ]"
            key-label="title"
            key-value="code"
            :readonly="false"
            :chip-attrs="{ inverse: true }"
            @click-lite="onClickLite"
          >
            <template #default>
              <D1Chip data-testid="cg-slot-chip" label="Slot Chip" />
            </template>
          </D1ChipGroup>
          <D1ChipGroup
            data-testid="cg-readonly"
            :list="[
              { label: 'Locked 1', value: 'l1' },
              { label: 'Locked 2', value: 'l2' }
            ]"
            selected="l1"
            readonly
          />
          <output data-testid="cg-test-output">{{ String(selected) }}:{{ String(lastClicked) }}</output>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const customItems = canvasElement.querySelectorAll('[data-testid="cg-custom"] .d1-chipGroup__item')
    await expect(customItems.length).toBe(2)
    await expect(customItems[0]).toHaveTextContent('Zero Choice')
    await expect(canvasElement.querySelector('[data-testid="cg-slot-chip"]')).toHaveTextContent('Slot Chip')

    if (customItems[1]) {
      await userEvent.click(customItems[1])
    }
    await expect(canvasElement.querySelector('[data-testid="cg-test-output"]')).toHaveTextContent('two:two')

    if (customItems[0]) {
      await userEvent.click(customItems[0])
    }
    await expect(canvasElement.querySelector('[data-testid="cg-test-output"]')).toHaveTextContent('0:0')
  }
}
// :story-items [!] System label / Системная метка
