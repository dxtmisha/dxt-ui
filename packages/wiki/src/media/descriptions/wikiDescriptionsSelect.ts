import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Select component properties
 *
 * Описания свойств компонента Select
 */
export const wikiDescriptionsSelect: StorybookComponentsDescriptionItem = {
  name: 'Select',
  description: {
    en: 'Complete select dropdown control combining Field, Menu, SelectValue and Input for sophisticated selection interface',
    ru: 'Полнофункциональный элемент выбора из выпадающего списка, объединяющий Field, Menu, SelectValue и Input для продвинутого интерфейса выбора'
  },
  possibilities: {
    en: [
      'single or multiple value selection',
      'built-in search and filtering capabilities',
      'editable selected value mode (editValue)',
      'AJAX data loading with caching support',
      'filter mode for real-time option filtering',
      'validation with standard Field features',
      'keyboard navigation and accessibility',
      'custom option list via slots or data',
      'icon support for dropdown arrow and search',
      'auto-close control for multiple selection',
      'integration with all Field component features (label, counter, messages, icons)'
    ],
    ru: [
      'выбор одиночного или множественных значений',
      'встроенный поиск и возможности фильтрации',
      'режим редактирования выбранного значения (editValue)',
      'AJAX загрузка данных с поддержкой кеширования',
      'режим фильтрации для реального времени',
      'валидация со стандартными функциями Field',
      'клавиатурная навигация и доступность',
      'пользовательский список опций через слоты или данные',
      'поддержка иконок для стрелки выпадающего списка и поиска',
      'управление автозакрытием для множественного выбора',
      'интеграция со всеми возможностями компонента Field (подпись, счётчик, сообщения, иконки)'
    ]
  },
  render: `
      <DesignComponent v-bind="args" />
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
const comboboxInput = canvasElement.querySelector<HTMLInputElement>('input[role="combobox"]')
await expect(component).toBeInTheDocument()
await expect(comboboxInput).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { SelectExpose } from \'@dxtmisha/constructor/Select\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'SelectBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <DesignComponent
            label="With search"
            placeholder="Search..."
            show-search
            :option="options"
          />
          <DesignComponent
            label="With filter"
            placeholder="Type to filter"
            show-search
            filter-mode
            :option="options"
          />
          <DesignComponent
            label="Edit value"
            placeholder="Select or type"
            edit-value
            filter-mode
            :option="options"
          />
          <DesignComponent
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
      `,
      play: `
const comboboxInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[role="combobox"]')
await expect(comboboxInputs.length).toBe(5)
await step('Verify editValue input is editable and accepts user typing', async () => {
  await expect(comboboxInputs[0]).toHaveAttribute('readonly')
  await expect(comboboxInputs[3]).not.toHaveAttribute('readonly')
  await userEvent.click(comboboxInputs[3])
  await userEvent.type(comboboxInputs[3], 'Go')
  await expect(comboboxInputs[3].value).toContain('Go')
})
      `
    },
    {
      id: 'SelectVModel',
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
            <span data-testid="select-single-value">Value: <strong>{{ singleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-first" @click="singleValue = 'option1'">Option 1</button>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-second" @click="singleValue = 'option2'">Option 2</button>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-third" @click="singleValue = 'option3'">Option 3</button>
          </div>

          <DesignComponent
            v-model="singleValue"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span data-testid="select-multiple-value">Value: <strong>{{ multipleValue }}</strong></span>
            <button type="button" class="wiki-storybook-button" data-testid="select-set-multiple" @click="multipleValue = ['option1', 'option2']">Option 1, 2</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" data-testid="select-clear-multiple" @click="multipleValue = []">Clear</button>
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
      `
    },
    {
      id: 'SelectSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
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
        </DesignSkeleton>
      `,
      play: `
const helperText = canvasElement.textContent ?? ''
await expect(helperText).toContain('Loading select')
await expect(helperText).toContain('Options are loading...')
      `
    },
    // =========================================================================
    // TIER 2: COMPREHENSIVE INTERACTION TEST STORIES (NOT IN MDX)
    // =========================================================================
    {
      id: 'SelectTestStatesSlotsAndExpose',
      name: {
        en: 'Test: States, validation, slots and expose methods',
        ru: 'Тест: Состояния, валидация, слоты и методы expose'
      },
      propsName: ['disabled', 'readonly', 'validationMessage', 'required', 'name', 'value', 'multiple', 'max', 'selectionStyle', 'hideList', 'iconArrowDown'],
      setup: `
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
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" data-testid="select-apply-zero" @click="applyZeroValue">Set zero</button>
            <button type="button" class="wiki-storybook-button" data-testid="select-clear-expose" @click="clearSelectedValue">Clear via expose</button>
            <span data-testid="select-expose-snapshot">{{ exposedSnapshot }}</span>
          </div>
          <DesignComponent
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
          </DesignComponent>
          <DesignComponent
            label="Validated select"
            :required="true"
            validation-message="Selection is required"
            force-show-message
            :option="options"
          />
          <DesignComponent label="Disabled select" :disabled="true" value="ts" :option="options" />
          <DesignComponent label="Readonly select" :readonly="true" value="js" :option="options" />
          <DesignComponent label="Hidden list select" :hide-list="true" :option="options" />
        </div>
      `,
      play: `
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Select'} type={'select'}/>
<Canvas of={Component.SelectBasic}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SelectVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SelectSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'validation'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    description: `
High-level form control that combines a trigger field, a dropdown menu, and a structured value display (Chips or text). Designed for choosing single or multiple items from static lists or dynamic datasets with built-in search and filtering.
Features support for AJAX data loading with caching, multiple selection with chips, and an editable combobox mode (editValue). Includes integrated validation, keyboard navigation, and full Field component functionality (labels, icons, and state messages).
Controlled via the option prop for data and v-model for state tracking, supporting custom key mapping (keyLabel/keyValue). Use for user selection, category filtering, or complex multi-select interfaces requiring real-time search.
    `
  }
}
