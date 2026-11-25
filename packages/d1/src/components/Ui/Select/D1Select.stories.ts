import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Select from './D1Select.vue'
import { SelectWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SelectExpose } from '@dxtmisha/constructor/Select'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Select',
  component: D1Select,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectWikiStorybook.getWiki(),
  args: SelectWikiStorybook.getValues()
} satisfies Meta<typeof D1Select>

export default meta

type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    editValue: true,
    multiple: true
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Select },
    setup: () => ({ args }),
    template: `
      <D1Select v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-select')
    const comboboxInput = canvasElement.querySelector<HTMLInputElement>('input[role="combobox"]')
    await expect(component).toBeInTheDocument()
    await expect(comboboxInput).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SelectBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Select },
    setup() {
      const options = ref([
        { label: 'JavaScript', value: 'js' },
        { label: 'TypeScript', value: 'ts' },
        { label: 'Python', value: 'py' },
        { label: 'Java', value: 'java' },
        { label: 'C++', value: 'cpp' },
        { label: 'Ruby', value: 'rb' },
        { label: 'Go', value: 'go' },
        { label: 'PHP', value: 'php' }
      ])

      return { options }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Select
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <D1Select
            label="With search"
            placeholder="Search..."
            show-search
            :option="options"
          />
          <D1Select
            label="With filter"
            placeholder="Type to filter"
            show-search
            filter-mode
            :option="options"
          />
          <D1Select
            label="Edit value"
            placeholder="Select or type"
            edit-value
            filter-mode
            :option="options"
          />
          <D1Select
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const comboboxInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[role="combobox"]')
    await expect(comboboxInputs.length).toBe(5)
    await step('Verify editValue input is editable and accepts user typing', async () => {
      await expect(comboboxInputs[0]).toHaveAttribute('readonly')
      await expect(comboboxInputs[3]).not.toHaveAttribute('readonly')
      await userEvent.click(comboboxInputs[3])
      await userEvent.type(comboboxInputs[3], 'Go')
      await expect(comboboxInputs[3].value).toContain('Go')
    })
  }
}
export const SelectVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Select },
    setup() {
      const singleValue = ref('option2')
      const multipleValue = ref(['option1', 'option3'])
      const options = [
        { label: 'First option', value: 'option1' },
        { label: 'Second option', value: 'option2' },
        { label: 'Third option', value: 'option3' }
      ]

      return { singleValue, multipleValue, options }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="select-single-value">Value: <strong>{{ singleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-first" @click="singleValue = 'option1'">Option 1</button>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-second" @click="singleValue = 'option2'">Option 2</button>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-third" @click="singleValue = 'option3'">Option 3</button>
          </div>

          <D1Select
            v-model="singleValue"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span data-testid="select-multiple-value">Value: <strong>{{ multipleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-multiple" @click="multipleValue = ['option1', 'option2']">Option 1, 2</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" data-testid="select-clear-multiple" @click="multipleValue = []">Clear</button>
          </div>

          <D1Select
            v-model="multipleValue"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const singleDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="select-single-value"]')
    const multipleDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="select-multiple-value"]')
    const setFirstButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-set-first"]')
    const clearMultipleButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-clear-multiple"]')

    await expect(singleDisplay).toHaveTextContent('Value: option2')
    await step('Update single v-model value', async () => {
      await userEvent.click(setFirstButton!)
      await expect(singleDisplay).toHaveTextContent('Value: option1')
    })
    await step('Clear multiple v-model value', async () => {
      await userEvent.click(clearMultipleButton!)
      await expect(multipleDisplay).toHaveTextContent('Value: []')
    })
  }
}
export const SelectSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Select, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Select
              is-skeleton
              label="Loading select"
              helper-message="Options are loading..."
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const helperText = canvasElement.textContent ?? ''
    await expect(helperText).toContain('Loading select')
    await expect(helperText).toContain('Options are loading...')
  }
}
export const SelectTestStatesSlotsAndExpose: Story = {
  name: 'Тест: Состояния, валидация, слоты и методы expose',
  render: () => ({
    components: { D1Select },
    setup() {
      const selectReference = ref<SelectExpose | null>(null)
      const selectedValue = ref<string | number>('js')
      const exposedSnapshot = ref('')
      const options = [
        { label: 'Zero Option', value: 0 },
        { label: 'JavaScript', value: 'js' },
        { label: 'TypeScript', value: 'ts' }
      ]
      const applyZeroValue = () => {
        selectReference.value?.setValue(0)
        exposedSnapshot.value = String(selectReference.value?.getValue() ?? '')
      }
      const clearSelectedValue = () => {
        selectReference.value?.clear()
        exposedSnapshot.value = String(selectReference.value?.getValue() ?? 'empty')
      }
      return {
        selectReference,
        selectedValue,
        exposedSnapshot,
        options,
        applyZeroValue,
        clearSelectedValue
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="select-apply-zero" @click="applyZeroValue">Set zero</button>
            <button type="button" class="wiki-storybook-button" data-testid="select-clear-expose" @click="clearSelectedValue">Clear via expose</button>
            <span data-testid="select-expose-snapshot">{{ exposedSnapshot }}</span>
          </div>
          <D1Select
            ref="selectReference"
            v-model="selectedValue"
            name="technologyStack"
            label="Tech stack"
            selection-style="checkbox"
            :max="2"
            :option="options"
          >
            <template #leading><span data-testid="select-slot-leading">[Lead]</span></template>
            <template #prefix><span data-testid="select-slot-prefix">[Pre]</span></template>
            <template #suffix><span data-testid="select-slot-suffix">[Suf]</span></template>
            <template #trailing><span data-testid="select-slot-trailing">[Trail]</span></template>
          </D1Select>
          <D1Select
            label="Validated select"
            :required="true"
            validation-message="Selection is required"
            force-show-message
            :option="options"
          />
          <D1Select label="Disabled select" :disabled="true" value="ts" :option="options" />
          <D1Select label="Readonly select" :readonly="true" value="js" :option="options" />
          <D1Select label="Hidden list select" :hide-list="true" :option="options" />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const snapshotElement = canvasElement.querySelector<HTMLElement>('[data-testid="select-expose-snapshot"]')
    const applyZeroButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-apply-zero"]')
    const clearButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-clear-expose"]')

    await step('Verify Field slots and validation message render', async () => {
      await expect(canvasElement.querySelector('[data-testid="select-slot-leading"]')).toBeInTheDocument()
      await expect(canvasElement.querySelector('[data-testid="select-slot-prefix"]')).toBeInTheDocument()
      await expect(canvasElement.querySelector('[data-testid="select-slot-suffix"]')).toBeInTheDocument()
      await expect(canvasElement.querySelector('[data-testid="select-slot-trailing"]')).toBeInTheDocument()
      await expect(canvasElement.textContent).toContain('Selection is required')
    })

    await step('Verify numeric 0 boundary and clear via expose API', async () => {
      await userEvent.click(applyZeroButton!)
      await expect(snapshotElement).toHaveTextContent('0')
      await userEvent.click(clearButton!)
      await expect(snapshotElement).toHaveTextContent('empty')
    })
  }
}
// :story-items [!] System label / Системная метка
