import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuChip from './D1MenuChip.vue'
import { MenuChipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { MenuChipExpose } from '@dxtmisha/constructor/MenuChip'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuChip',
  component: D1MenuChip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuChipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuChipWikiStorybook.getWiki(),
  args: MenuChipWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuChip>

export default meta

type Story = StoryObj<typeof meta>

export const MenuChip: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuChip },
    setup: () => ({ args }),
    template: `
      <D1MenuChip v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerChip = canvasElement.querySelector<HTMLElement>('[aria-haspopup="listbox"]')
    const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"]')
    await expect(triggerChip).toBeInTheDocument()
    await expect(hiddenInput).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuChipBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1MenuChip },
    setup() {
      const options = ref([
        { label: 'English', value: 'en' },
        { label: 'Russian', value: 'ru' },
        { label: 'Vietnamese', value: 'vi' },
        { label: 'Spanish', value: 'es' }
      ])
      const primaryValue = ref('en')
      const searchValue = ref('ru')
      const iconOnlyValue = ref('vi')

      return { options, primaryValue, searchValue, iconOnlyValue }
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1MenuChip
            v-model="primaryValue"
            label="Language"
            :option="options"
          />
          <D1MenuChip
            v-model="searchValue"
            label="With search"
            show-search
            :option="options"
          />
          <D1MenuChip
            v-model="iconOnlyValue"
            label="Hide value if icon"
            icon="settings"
            hide-value-icon
            :option="options"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggers = canvasElement.querySelectorAll<HTMLElement>('[aria-haspopup="listbox"]')
    await expect(triggers.length).toBe(3)
    await expect(triggers[0].textContent).toContain('English')
    await expect(triggers[1].textContent).toContain('Russian')
    await expect(triggers[2].textContent).toContain('Hide value if icon')
  }
}
export const MenuChipVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1MenuChip },
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
            <span data-testid="menu-chip-single-value">Value: <strong>{{ singleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-first" @click="singleValue = 'option1'">Option 1</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-second" @click="singleValue = 'option2'">Option 2</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-third" @click="singleValue = 'option3'">Option 3</button>
          </div>

          <D1MenuChip
            v-model="singleValue"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span data-testid="menu-chip-multiple-value">Value: <strong>{{ multipleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-multiple" @click="multipleValue = ['option1', 'option2']">Option 1, 2</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" data-testid="menu-chip-clear-multiple" @click="multipleValue = []">Clear</button>
          </div>

          <D1MenuChip
            v-model="multipleValue"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const singleDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="menu-chip-single-value"]')
    const multipleDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="menu-chip-multiple-value"]')
    const setFirstButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-chip-set-first"]')
    const clearMultipleButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-chip-clear-multiple"]')

    await expect(singleDisplay).toHaveTextContent('Value: option2')
    await step('Update single MenuChip value', async () => {
      await userEvent.click(setFirstButton!)
      await expect(singleDisplay).toHaveTextContent('Value: option1')
    })
    await step('Clear multiple MenuChip value', async () => {
      await userEvent.click(clearMultipleButton!)
      await expect(multipleDisplay).toHaveTextContent('Value: []')
    })
  }
}
export const MenuChipSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1MenuChip, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1MenuChip
              label="Loading menu chip"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :chip-attrs="{ isSkeleton: true }"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.textContent).toContain('Loading menu chip')
  }
}
export const MenuChipTestLabelsStatesSlotsAndExpose: Story = {
  name: 'Тест: Форматирование метки, скрытый input, слоты, состояния и expose',
  render: () => ({
    components: { D1MenuChip },
    setup() {
      const menuChipReference = ref<MenuChipExpose | null>(null)
      const selectedValue = ref('en')
      const exposedSnapshot = ref('')
      const options = [
        { label: 'English', value: 'en' },
        { label: 'Vietnamese', value: 'vi' }
      ]
      const selectVietnamese = () => {
        menuChipReference.value?.setValue('vi')
        exposedSnapshot.value = String(menuChipReference.value?.getValue() ?? '')
      }
      const clearSelectedValue = () => {
        menuChipReference.value?.clear()
        exposedSnapshot.value = String(menuChipReference.value?.getValue() ?? 'empty')
      }
      return { menuChipReference, selectedValue, exposedSnapshot, options, selectVietnamese, clearSelectedValue }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-vietnamese" @click="selectVietnamese">Set Vietnamese</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-clear-expose" @click="clearSelectedValue">Clear via expose</button>
            <span data-testid="menu-chip-expose-snapshot">{{ exposedSnapshot }}</span>
          </div>
          <D1MenuChip
            ref="menuChipReference"
            v-model="selectedValue"
            name="localeChipField"
            label="Locale"
            :hide-label-value="false"
            label-separator=" -> "
            :icon-arrow-down="undefined"
            :filter-mode="true"
            selection-style="radio"
            :option="options"
          />
          <D1MenuChip label="Disabled chip" :disabled="true" value="en" :option="options" />
          <D1MenuChip label="Readonly chip" :readonly="true" value="en" :option="options" />
          <D1MenuChip value="en" :option="options">
            <template #default="{ selectedNames }">
              <span data-testid="menu-chip-custom-slot">Slot: {{ selectedNames?.value?.join(', ') }}</span>
            </template>
          </D1MenuChip>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const snapshotElement = canvasElement.querySelector<HTMLElement>('[data-testid="menu-chip-expose-snapshot"]')
    const setVietnameseButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-chip-set-vietnamese"]')
    const clearButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-chip-clear-expose"]')
    const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"][name="localeChipField"]')
    const triggers = canvasElement.querySelectorAll<HTMLElement>('[aria-haspopup="listbox"]')

    await step('Verify label separator, hidden input, disabled chip visibility, and #default slot', async () => {
      await expect(canvasElement.textContent).toContain('Locale')
      await expect(canvasElement.textContent).toContain('->')
      await expect(hiddenInput).toBeInTheDocument()
      await expect(hiddenInput?.value).toBe('en')
      await expect(triggers.length).toBe(4)
      await expect(canvasElement.querySelector('[data-testid="menu-chip-custom-slot"]')).toHaveTextContent('Slot: English')
    })

    await step('Verify expose setValue and clear methods', async () => {
      await userEvent.click(setVietnameseButton!)
      await expect(snapshotElement).toHaveTextContent('vi')
      await userEvent.click(clearButton!)
      await expect(snapshotElement).toHaveTextContent('empty')
    })
  }
}
// :story-items [!] System label / Системная метка
