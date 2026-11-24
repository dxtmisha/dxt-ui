import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ChipGroup component properties
 *
 * Описания свойств компонента ChipGroup
 */
export const wikiDescriptionsChipGroup: StorybookComponentsDescriptionItem = {
  name: 'ChipGroup',
  description: {
    en: 'Component for managing a group of interactive chips with support for selection and data binding',
    ru: 'Компонент для управления группой интерактивных чипов с поддержкой выбора и привязки данных'
  },
  possibilities: {
    en: [
      'rendering a list of chips from a data array (list, keyLabel, keyValue)',
      'managing selection state (single or multiple via selected / modelSelected / multiple)',
      'read-only display mode by default (readonly)',
      'customizing the appearance of all chips in the group via chipAttrs',
      'handling click and clickLite events alongside v-model:selected updates',
      'controlling icon visibility based on selection (iconWhenSelected)'
    ],
    ru: [
      'рендеринг списка чипов из массива данных (list, keyLabel, keyValue)',
      'управление состоянием выбора (одиночный или множественный через selected / modelSelected / multiple)',
      'режим только для чтения по умолчанию (readonly)',
      'настройка внешнего вида всех чипов в группе через chipAttrs',
      'обработка событий click и clickLite совместно с обновлениями v-model:selected',
      'управление видимостью иконки в зависимости от выбора (iconWhenSelected)'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args" />
  `,
  play: `
const groupElement = canvasElement.querySelector('.design-component')
await expect(groupElement).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ChipGroupSelection',
      name: {
        en: 'Selection States',
        ru: 'Состояния выбора'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent data-testid="cg-single" :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <DesignComponent data-testid="cg-multi" :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <DesignComponent
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
      `,
      play: `
await expect(canvasElement.querySelectorAll('[data-testid="cg-single"] .design-component__item').length).toBe(3)
await expect(canvasElement.querySelectorAll('[data-testid="cg-multi"] .design-component__item').length).toBe(4)
await expect(canvasElement.querySelectorAll('[data-testid="cg-icon-selected"] .design-component__item').length).toBe(3)
      `
    },
    {
      id: 'ChipGroupVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const multipleSelected = ref<string[]>(['option1', 'option3'])
      return {
        multipleSelected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="cg-vmodel-value">Current value: {{ multipleSelected }}</span>
            <button data-testid="cg-btn-12" class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button data-testid="cg-btn-123" class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button data-testid="cg-btn-clear" class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <DesignComponent
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
      `,
      play: `
const secondChip = canvasElement.querySelectorAll('[data-testid="cg-vmodel"] .design-component__item')[1]
if (secondChip) {
  await userEvent.click(secondChip)
}
await expect(canvasElement.querySelector('[data-testid="cg-vmodel-value"]')).toHaveTextContent('option2')

const clearButton = canvasElement.querySelector('[data-testid="cg-btn-clear"]')
if (clearButton) {
  await userEvent.click(clearButton)
}
await expect(canvasElement.querySelector('[data-testid="cg-vmodel-value"]')).toHaveTextContent('[]')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'ChipGroupTestPropsAndSlots',
      name: {
        en: 'Test: Custom keys, numeric zero, readonly, chipAttrs, events and default slot',
        ru: 'Тест: Кастомные ключи, числовой ноль, readonly, chipAttrs, события и слот default'
      },
      propsName: ['list', 'selected', 'readonly', 'keyLabel', 'keyValue', 'chipAttrs', 'multiple'],
      components: ['Chip'],
      setup: `
      const selected = ref<number | string>(0)
      const lastClicked = ref<unknown>('none')
      const onClickLite = (payload: { value?: unknown }) => {
        lastClicked.value = payload?.value
      }
      return { selected, lastClicked, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
              <DesignChip data-testid="cg-slot-chip" label="Slot Chip" />
            </template>
          </DesignComponent>
          <DesignComponent
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
      `,
      play: `
const customItems = canvasElement.querySelectorAll('[data-testid="cg-custom"] .design-component__item')
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
      `
    }
  ],
  documentation: {
    body: `
    <StorybookDescriptions componentName={'ChipGroup'} type={'chipGroup'}/>

    <StorybookDescriptions componentName={'ChipGroup'} type={'selected'}/>
    <Canvas of={Component.ChipGroupSelection}/>

    <StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>
    <Canvas of={Component.ChipGroupVModel}/>
    `,
    events: `
    <StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    slots: `
    <StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Wrapper component for managing collections of Chip elements based on an array of data. Streamlines the creation of filter sets, choice groups, and tag lists by automating iteration and selection logic.
Features support for single and multiple selection modes, shared chip attributes (via chipAttrs), and icon visibility control. Includes built-in data binding for selected values and @click event propagation.
Controlled via the list prop for data and v-model:selected for state. Use for dynamic filtering interfaces, selecting multiple categories, or building interactive tag lists from API data.
    `
  }
}
