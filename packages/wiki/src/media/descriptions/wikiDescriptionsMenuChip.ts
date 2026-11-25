import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuChip component properties
 *
 * Описания свойств компонента MenuChip
 */
export const wikiDescriptionsMenuChip: StorybookComponentsDescriptionItem = {
  name: 'MenuChip',
  description: {
    en: 'Chip-based dropdown selector combining Chip, Menu, and Select for clean, compact selection interfaces',
    ru: 'Выпадающий селектор на основе чипа (Chip), объединяющий Chip, Menu и Select для компактных интерфейсов выбора'
  },
  possibilities: {
    en: [
      'chip trigger interface instead of standard field outline',
      'displays selected value names with a custom separator',
      'supports hiding the value when an icon is present (hideValueIcon)',
      'supports hiding the label when a value is selected (hideLabelValue)',
      'built-in search and filtering inside the dropdown header',
      'single or multiple value selection',
      'standard form data integration via a hidden input element'
    ],
    ru: [
      'интерфейс чипа-триггера вместо стандартной рамки поля',
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
const triggerChip = canvasElement.querySelector<HTMLElement>('[aria-haspopup="listbox"]')
const hiddenInput = canvasElement.querySelector<HTMLInputElement>('input[type="hidden"]')
await expect(triggerChip).toBeInTheDocument()
await expect(hiddenInput).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { MenuChipExpose } from \'@dxtmisha/constructor/MenuChip\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'MenuChipBasic',
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
const triggers = canvasElement.querySelectorAll<HTMLElement>('[aria-haspopup="listbox"]')
await expect(triggers.length).toBe(3)
await expect(triggers[0].textContent).toContain('English')
await expect(triggers[1].textContent).toContain('Russian')
await expect(triggers[2].textContent).toContain('Hide value if icon')
      `
    },
    {
      id: 'MenuChipVModel',
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
            <span data-testid="menu-chip-single-value">Value: <strong>{{ singleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-first" @click="singleValue = 'option1'">Option 1</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-second" @click="singleValue = 'option2'">Option 2</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-third" @click="singleValue = 'option3'">Option 3</button>
          </div>

          <DesignComponent
            v-model="singleValue"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span data-testid="menu-chip-multiple-value">Value: <strong>{{ multipleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-multiple" @click="multipleValue = ['option1', 'option2']">Option 1, 2</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" data-testid="menu-chip-clear-multiple" @click="multipleValue = []">Clear</button>
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
      `
    },
    {
      id: 'MenuChipSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              label="Loading menu chip"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :chip-attrs="{ isSkeleton: true }"
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
await expect(canvasElement.textContent).toContain('Loading menu chip')
      `
    },
    // =========================================================================
    // TIER 2: COMPREHENSIVE INTERACTION TEST STORIES (NOT IN MDX)
    // =========================================================================
    {
      id: 'MenuChipTestLabelsStatesSlotsAndExpose',
      name: {
        en: 'Test: Label formatting, hidden input, slots, states and expose',
        ru: 'Тест: Форматирование метки, скрытый input, слоты, состояния и expose'
      },
      propsName: ['label', 'hideLabelValue', 'hideValueIcon', 'labelSeparator', 'icon', 'iconArrowDown', 'disabled', 'readonly', 'name', 'value', 'filterMode', 'hideList', 'max', 'selectionStyle'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-set-vietnamese" @click="selectVietnamese">Set Vietnamese</button>
            <button type="button" class="wiki-storybook-button" data-testid="menu-chip-clear-expose" @click="clearSelectedValue">Clear via expose</button>
            <span data-testid="menu-chip-expose-snapshot">{{ exposedSnapshot }}</span>
          </div>
          <DesignComponent
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
          <DesignComponent label="Disabled chip" :disabled="true" value="en" :option="options" />
          <DesignComponent label="Readonly chip" :readonly="true" value="en" :option="options" />
          <DesignComponent value="en" :option="options">
            <template #default="{ selectedNames }">
              <span data-testid="menu-chip-custom-slot">Slot: {{ selectedNames?.value?.join(', ') }}</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuChip'} type={'menuChip'}/>
<Canvas of={Component.MenuChipBasic}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuChipVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.MenuChipSkeleton}/>
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
  <MenuChip :menu-attrs="{windowAttrs: {open: true}, embedded: true}" v-bind="args">
    <template #default="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </button>
    </template>
  </MenuChip>
</div>
    `,
    description: `
Chip-based dropdown selector combining a trigger Chip and a dropdown Menu. Designed for space-saving select dropdowns where a standard text field outline or large button trigger is undesirable.
Displays selected values with configurable label separators (labelSeparator) and label hiding options (hideLabelValue, hideValueIcon).
Integrated hidden inputs provide standard form data carrying, while optional header search components (showSearch) allow filterable options lists.
    `
  }
}
