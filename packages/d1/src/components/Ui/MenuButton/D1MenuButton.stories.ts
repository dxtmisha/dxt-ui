import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuButton from './D1MenuButton.vue'
import { MenuButtonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { MenuButtonExpose } from '@dxtmisha/constructor/MenuButton'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuButton',
  component: D1MenuButton,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuButtonWikiStorybook.getWiki(),
  args: MenuButtonWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const MenuButton: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuButton },
    setup: () => ({ args }),
    template: `
      <D1MenuButton v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('button')
    const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"]')
    await expect(triggerButton).toBeInTheDocument()
    await expect(hiddenInput).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuButtonBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1MenuButton },
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
          <D1MenuButton
            v-model="primaryValue"
            label="Language"
            :option="options"
          />
          <D1MenuButton
            v-model="searchValue"
            label="With search"
            show-search
            :option="options"
          />
          <D1MenuButton
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
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('button')
    await expect(buttons.length).toBe(3)
    await expect(buttons[0].textContent).toContain('English')
    await expect(buttons[1].textContent).toContain('Russian')
    await expect(buttons[2].textContent).toContain('Hide value if icon')
  }
}
export const MenuButtonVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1MenuButton },
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
            <span data-testid="menu-button-single-value">Value: <strong>{{ singleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-first" @click="singleValue = 'option1'">Option 1</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-second" @click="singleValue = 'option2'">Option 2</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-third" @click="singleValue = 'option3'">Option 3</button>
          </div>

          <D1MenuButton
            v-model="singleValue"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span data-testid="menu-button-multiple-value">Value: <strong>{{ multipleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-multiple" @click="multipleValue = ['option1', 'option2']">Option 1, 2</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" data-testid="menu-button-clear-multiple" @click="multipleValue = []">Clear</button>
          </div>

          <D1MenuButton
            v-model="multipleValue"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const singleDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="menu-button-single-value"]')
    const multipleDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="menu-button-multiple-value"]')
    const setFirstButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-button-set-first"]')
    const clearMultipleButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-button-clear-multiple"]')

    await expect(singleDisplay).toHaveTextContent('Value: option2')
    await step('Update single MenuButton value', async () => {
      await userEvent.click(setFirstButton!)
      await expect(singleDisplay).toHaveTextContent('Value: option1')
    })
    await step('Clear multiple MenuButton value', async () => {
      await userEvent.click(clearMultipleButton!)
      await expect(multipleDisplay).toHaveTextContent('Value: []')
    })
  }
}
export const MenuButtonSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1MenuButton, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1MenuButton
              label="Loading menu button"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :button-attrs="{ isSkeleton: true }"
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.textContent).toContain('Loading menu button')
  }
}
export const MenuButtonTestLabelsStatesSlotsAndExpose: Story = {
  name: 'Тест: Форматирование метки, скрытый input, слоты, состояния и expose',
  render: () => ({
    components: { D1MenuButton },
    setup() {
      const menuButtonReference = ref<MenuButtonExpose | null>(null)
      const selectedValue = ref('en')
      const exposedSnapshot = ref('')
      const options = [
        { label: 'English', value: 'en' },
        { label: 'Russian', value: 'ru' }
      ]
      const selectRussian = () => {
        menuButtonReference.value?.setValue('ru')
        exposedSnapshot.value = String(menuButtonReference.value?.getValue() ?? '')
      }
      const clearSelectedValue = () => {
        menuButtonReference.value?.clear()
        exposedSnapshot.value = String(menuButtonReference.value?.getValue() ?? 'empty')
      }
      return { menuButtonReference, selectedValue, exposedSnapshot, options, selectRussian, clearSelectedValue }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-russian" @click="selectRussian">Set Russian</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-clear-expose" @click="clearSelectedValue">Clear via expose</button>
            <span data-testid="menu-button-expose-snapshot">{{ exposedSnapshot }}</span>
          </div>
          <D1MenuButton
            ref="menuButtonReference"
            v-model="selectedValue"
            name="localeField"
            label="Locale"
            :hide-label-value="false"
            label-separator=" -> "
            :icon-arrow-down="undefined"
            :filter-mode="true"
            selection-style="radio"
            :option="options"
          />
          <D1MenuButton label="Disabled button" :disabled="true" value="en" :option="options" />
          <D1MenuButton label="Readonly button" :readonly="true" value="en" :option="options" />
          <D1MenuButton value="en" :option="options">
            <template #default="{ selectedNames }">
              <span data-testid="menu-button-custom-slot">Slot: {{ selectedNames?.value?.join(', ') }}</span>
            </template>
          </D1MenuButton>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const snapshotElement = canvasElement.querySelector<HTMLElement>('[data-testid="menu-button-expose-snapshot"]')
    const setRussianButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-button-set-russian"]')
    const clearButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-button-clear-expose"]')
    const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"][name="localeField"]')
    const disabledButton = canvasElement.querySelector<HTMLButtonElement>('button:disabled')

    await step('Verify label separator, hidden input, disabled visibility, and #default slot', async () => {
      await expect(canvasElement.textContent).toContain('Locale')
      await expect(canvasElement.textContent).toContain('->')
      await expect(hiddenInput).toBeInTheDocument()
      await expect(hiddenInput?.value).toBe('en')
      await expect(disabledButton).toBeInTheDocument()
      await expect(canvasElement.querySelector('[data-testid="menu-button-custom-slot"]')).toHaveTextContent('Slot: English')
    })

    await step('Verify expose setValue and clear methods', async () => {
      await userEvent.click(setRussianButton!)
      await expect(snapshotElement).toHaveTextContent('ru')
      await userEvent.click(clearButton!)
      await expect(snapshotElement).toHaveTextContent('empty')
    })
  }
}
// :story-items [!] System label / Системная метка
