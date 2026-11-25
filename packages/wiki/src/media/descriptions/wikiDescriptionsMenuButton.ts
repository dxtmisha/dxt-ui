import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuButton component properties
 *
 * Описания свойств компонента MenuButton
 */
export const wikiDescriptionsMenuButton: StorybookComponentsDescriptionItem = {
  name: 'MenuButton',
  description: {
    en: 'Button-based dropdown selector combining Button, Menu, and Select for clean, compact selection interfaces',
    ru: 'Кнопочный выпадающий селектор, объединяющий Button, Menu и Select для компактных интерфейсов выбора'
  },
  possibilities: {
    en: [
      'button trigger interface instead of standard field outline',
      'displays selected value names with a custom separator',
      'supports hiding the value when an icon is present (hideValueIcon)',
      'supports hiding the label when a value is selected (hideLabelValue)',
      'built-in search and filtering inside the dropdown header',
      'single or multiple value selection',
      'standard form data integration via a hidden input element'
    ],
    ru: [
      'интерфейс кнопки-триггера вместо стандартной рамки поля',
      'отображает имена выбранных значений с настраиваемым разделителем',
      'поддержка скрытия значения при наличии иконки (hideValueIcon)',
      'поддержка скрытия метки при выборе значения (hideLabelValue)',
      'встроенный поиск и фильтрация внутри заголовка выпадающего меню',
      'одиночный или множественный выбор значений',
      'стандартная интеграция данных формы через скрытый элемент ввода input'
    ]
  },
  render: `
      <DesignComponent v-bind="args" />
    `,
  play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('button')
const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"]')
await expect(triggerButton).toBeInTheDocument()
await expect(hiddenInput).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { MenuButtonExpose } from \'@dxtmisha/constructor/MenuButton\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'MenuButtonBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            v-model="primaryValue"
            label="Language"
            :option="options"
          />
          <DesignComponent
            v-model="searchValue"
            label="With search"
            show-search
            :option="options"
          />
          <DesignComponent
            v-model="iconOnlyValue"
            label="Hide value if icon"
            icon="settings"
            hide-value-icon
            :option="options"
          />
        </div>
      `,
      play: `
const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('button')
await expect(buttons.length).toBe(3)
await expect(buttons[0].textContent).toContain('English')
await expect(buttons[1].textContent).toContain('Russian')
await expect(buttons[2].textContent).toContain('Hide value if icon')
      `
    },
    {
      id: 'MenuButtonVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const singleValue = ref('option2')
      const multipleValue = ref(['option1', 'option3'])
      const options = [
        { label: 'First option', value: 'option1' },
        { label: 'Second option', value: 'option2' },
        { label: 'Third option', value: 'option3' }
      ]

      return { singleValue, multipleValue, options }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="menu-button-single-value">Value: <strong>{{ singleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-first" @click="singleValue = 'option1'">Option 1</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-second" @click="singleValue = 'option2'">Option 2</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-third" @click="singleValue = 'option3'">Option 3</button>
          </div>

          <DesignComponent
            v-model="singleValue"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span data-testid="menu-button-multiple-value">Value: <strong>{{ multipleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-multiple" @click="multipleValue = ['option1', 'option2']">Option 1, 2</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" data-testid="menu-button-clear-multiple" @click="multipleValue = []">Clear</button>
          </div>

          <DesignComponent
            v-model="multipleValue"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'MenuButtonSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              label="Loading menu button"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :button-attrs="{ isSkeleton: true }"
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
await expect(canvasElement.textContent).toContain('Loading menu button')
      `
    },
    // =========================================================================
    // TIER 2: COMPREHENSIVE INTERACTION TEST STORIES (NOT IN MDX)
    // =========================================================================
    {
      id: 'MenuButtonTestLabelsStatesSlotsAndExpose',
      name: {
        en: 'Test: Label formatting, hidden input, slots, states and expose',
        ru: 'Тест: Форматирование метки, скрытый input, слоты, состояния и expose'
      },
      propsName: ['label', 'hideLabelValue', 'hideValueIcon', 'labelSeparator', 'icon', 'iconArrowDown', 'disabled', 'readonly', 'name', 'value', 'filterMode', 'hideList', 'max', 'selectionStyle'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-set-russian" @click="selectRussian">Set Russian</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-button-clear-expose" @click="clearSelectedValue">Clear via expose</button>
            <span data-testid="menu-button-expose-snapshot">{{ exposedSnapshot }}</span>
          </div>
          <DesignComponent
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
          <DesignComponent label="Disabled button" :disabled="true" value="en" :option="options" />
          <DesignComponent label="Readonly button" :readonly="true" value="en" :option="options" />
          <DesignComponent value="en" :option="options">
            <template #default="{ selectedNames }">
              <span data-testid="menu-button-custom-slot">Slot: {{ selectedNames?.value?.join(', ') }}</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuButton'} type={'menuButton'}/>
<Canvas of={Component.MenuButtonBasic}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuButtonVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.MenuButtonSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValidationMessage'}/>

<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'loading'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'} />
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <MenuButton :menu-attrs="{windowAttrs: {open: true}, embedded: true}" v-bind="args">
    <template #default="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </button>
    </template>
  </MenuButton>
</div>
    `,
    description: `
Button-based dropdown selector combining a trigger Button and a dropdown Menu. Designed for space-saving select dropdowns where a standard text field outline is undesirable.
Displays selected values with configurable label separators (labelSeparator) and label hiding options (hideLabelValue, hideValueIcon).
Integrated hidden inputs provide standard form data carrying, while optional header search components (showSearch) allow filterable options lists.
    `
  }
}
