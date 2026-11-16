import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Checkbox from './D1Checkbox.vue'
import { CheckboxWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Checkbox',
  component: D1Checkbox,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CheckboxWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CheckboxWikiStorybook.getWiki(),
  args: CheckboxWikiStorybook.getValues()
} satisfies Meta<typeof D1Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Checkbox },
    setup: () => ({ args }),
    template: `
      <D1Checkbox v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-checkbox')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CheckboxVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Checkbox },
    setup() {
      return {
        checkboxValue: ref(false)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <D1Checkbox
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button.wiki-storybook-button')
    const input = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')

    await expect(button).toBeInTheDocument()
    await expect(input).toBeInTheDocument()
    await expect(input?.checked).toBe(false)

    if (button) {
      await userEvent.click(button)
    }
    await expect(input?.checked).toBe(true)
    await expect(button).toHaveTextContent('Check true')

    if (input) {
      await userEvent.click(input)
    }
    await expect(input?.checked).toBe(false)
    await expect(button).toHaveTextContent('Check false')
  }
}
export const CheckboxSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Checkbox, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Checkbox isSkeleton label="Loading checkbox" />
            <D1Checkbox isSkeleton label="Another loading checkbox" />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-checkbox')
    await expect(items.length).toBe(2)
    await expect(items[0].querySelector('.d1-checkbox__label')).toHaveTextContent('Loading checkbox')
    await expect(items[1].querySelector('.d1-checkbox__label')).toHaveTextContent('Another loading checkbox')
  }
}
export const CheckboxSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Checkbox },
    template: `
        
        <D1Checkbox>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </D1Checkbox>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labelStrong = canvasElement.querySelector('.d1-checkbox__label strong')
    const descriptionEm = canvasElement.querySelector('.d1-checkbox__description em')

    await expect(labelStrong).toHaveTextContent('Custom label slot')
    await expect(descriptionEm).toHaveTextContent('Custom description slot')
  }
}
export const CheckboxTestStates: Story = {
  name: 'Тест: Состояния disabled, readonly, focus, loading и indeterminate',
  render: () => ({
    components: { D1Checkbox },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Checkbox label="Disabled" disabled />
          <D1Checkbox label="Readonly" readonly />
          <D1Checkbox label="Focus" focus />
          <D1Checkbox label="Loading boolean" loading :modelValue="true" />
          <D1Checkbox label="Loading object" :loading="{ visible: true, circular: true }" :modelValue="true" />
          <D1Checkbox label="Indeterminate" indeterminate :modelValue="true" />
          <D1Checkbox label="Disabled with forceShowMessage" disabled forceShowMessage helperMessage="Forced message" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-checkbox')
    await expect(items.length).toBe(7)

    const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
    await expect(readonlyInput?.checked).toBe(false)

    if (readonlyInput) {
      await userEvent.click(readonlyInput)
    }
    await expect(readonlyInput?.checked).toBe(false)

    await expect(items[3].querySelector('.d1-checkbox__loading')).toBeInTheDocument()
    await expect(items[4].querySelector('.d1-checkbox__loading')).toBeInTheDocument()
    await expect(items[6]).toHaveTextContent('Forced message')
  }
}
export const CheckboxTestSelected: Story = {
  name: 'Тест: Синхронизация selected и valueVariant',
  render: () => ({
    components: { D1Checkbox },
    setup() {
      return {
        selectedValue: ref('alpha')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Selected: {{ selectedValue }}</div>
          <D1Checkbox
            v-model:selected="selectedValue"
            name="group-test"
            valueVariant="alpha"
            valueVariantHide="none"
            label="Alpha"
          />
          <D1Checkbox
            v-model:selected="selectedValue"
            name="group-test"
            valueVariant="beta"
            valueVariantHide="none"
            label="Beta"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector('.wiki-storybook-card')
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
    const hiddenInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="hidden"]')

    await expect(inputs[0].checked).toBe(true)
    await expect(inputs[1].checked).toBe(false)
    await expect(hiddenInputs[0].value).toBe('none')
    await expect(card).toHaveTextContent('Selected: alpha')

    await userEvent.click(inputs[1])
    await expect(inputs[0].checked).toBe(false)
    await expect(inputs[1].checked).toBe(true)
    await expect(card).toHaveTextContent('Selected: beta')
  }
}
export const CheckboxTestLayoutAndBoundaries: Story = {
  name: 'Тест: Компоновка, числовой ноль, иконки и HTML-сообщения',
  render: () => ({
    components: { D1Checkbox },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Checkbox :label="0" :description="0" :modelValue="false" />
          <D1Checkbox label="Inline" :block="false" :itemCenter="false" description="Top aligned" />
          <D1Checkbox label="Required" required validationMessage="Validation failed" />
          <D1Checkbox label="HTML helper" hasHtmlCode helperMessage="Helper <strong>bold</strong> text" />
          <D1Checkbox label="Object icon" :iconCheckbox="{ value: 'verified' }" :modelValue="true" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-checkbox')
    await expect(items.length).toBe(5)

    await expect(items[0].querySelector('.d1-checkbox__label')).toHaveTextContent('0')
    await expect(items[0].querySelector('.d1-checkbox__description')).toHaveTextContent('0')
    await expect(items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked).toBe(false)

    await expect(items[1]).not.toHaveClass('d1-checkbox--block')
    await expect(items[1]).not.toHaveClass('d1-checkbox--itemCenter')

    const requiredInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(items[2]).toHaveClass('d1-checkbox--required')
    await expect(requiredInput).toHaveAttribute('aria-invalid', 'true')
    await expect(items[2]).toHaveTextContent('Validation failed')

    await expect(items[3].querySelector('strong')).toHaveTextContent('bold')
  }
}
// :story-items [!] System label / Системная метка
