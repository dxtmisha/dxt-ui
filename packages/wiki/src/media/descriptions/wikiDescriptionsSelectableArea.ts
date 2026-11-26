import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SelectableArea component
 *
 * Описания свойств компонента SelectableArea
 */
export const wikiDescriptionsSelectableArea: StorybookComponentsDescriptionItem = {
  name: 'SelectableArea',
  description: {
    en: 'A wrapper component that enables selection of its child items via click, shift-click, meta-click, or by drawing a selection rectangle (lasso)',
    ru: 'Компонент-обертка, который позволяет выделять дочерние элементы с помощью клика, shift-клика, meta-клика или путем рисования прямоугольника выделения (лассо)'
  },
  possibilities: {
    en: [
      'lasso tool for rectangular selection of multiple elements',
      'shift-click for range selection',
      'ctrl/meta-click for selecting multiple independent elements',
      'disabling selection completely',
      'active mode for continuous selection without holding modifier keys',
      'programmatic control over selection state (reset, setSelected)',
      'custom wrapper HTML tag'
    ],
    ru: [
      'инструмент лассо для прямоугольного выделения нескольких элементов',
      'shift-клик для выделения диапазона',
      'ctrl/meta-клик для выделения нескольких независимых элементов',
      'полное отключение выделения',
      'активный режим для непрерывного выделения без удержания клавиш-модификаторов',
      'программное управление состоянием выделения (reset, setSelected)',
      'пользовательский HTML-тег обертки'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { SelectableAreaEventParameters, SelectableAreaExpose } from \'@dxtmisha/constructor/SelectableArea\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ className, classClick, onClick }">
        <div
          class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
            :data-value="'item-' + item"
            style="overflow: visible;"
            @click="onClick"
          >
            Item {{ item }}
          </div>
        </div>
      </template>
    </DesignComponent>
  `,
  play: `
const area = canvasElement.querySelector('.design-component')
await expect(area).toBeInTheDocument()
const items = canvasElement.querySelectorAll('[data-value]')
await expect(items.length).toBe(12)
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'SelectableAreaBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <DesignComponent>
          <template #default="{ className, classClick, onClick }">
            <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
              <div
                v-for="item in 6"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const items = canvasElement.querySelectorAll('[data-value]')
await expect(items.length).toBe(6)
await userEvent.click(items[0])
await expect(canvasElement.querySelector('.design-component__square')).toHaveAttribute('aria-hidden', 'true')
      `
    },
    {
      id: 'SelectableAreaVModel',
      name: {
        en: 'v-model',
        ru: 'v-model'
      },
      setup: `
      return {
        selected: ref(['item-2', 'item-3'])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="selectable-model">Selected items: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = []">Reset</button>
            <button class="wiki-storybook-button" @click="selected = ['item-1', 'item-2', 'item-3']">Select 1-3</button>
          </div>

          <DesignComponent
            v-model:selected="selected"
          >
            <template #default="{ className, classSelection, classClick, onClick }">
              <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
                <div
                  v-for="item in 6"
                  :key="item"
                  :class="[
                    'wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center',
                    className,
                    classClick,
                    selected.includes('item-' + item) && classSelection
                  ]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Item {{ item }}
                </div>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('selectable-model')).toHaveTextContent('item-2')
await step('Reset selection via button', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
  await expect(canvas.getByTestId('selectable-model')).toHaveTextContent('[]')
})
await step('Select items 1-3 via button', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Select 1-3' }))
  await expect(canvas.getByTestId('selectable-model')).toHaveTextContent('item-1')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only)
    // =========================================================================
    {
      id: 'SelectableAreaTestModesAndExpose',
      name: {
        en: 'Test: Active, disabled, tag, events and expose methods',
        ru: 'Тест: Режимы active, disabled, tag, события и методы expose'
      },
      propsName: ['active', 'disabled', 'tag', 'selected'],
      setup: `
      const areaReference = ref<SelectableAreaExpose | null>(null)
      const activeSelected = ref<string[]>([])
      const disabledSelected = ref<string[]>(['item-1'])
      const emittedSelection = ref<string>('')
      const onSelected = (parameters: SelectableAreaEventParameters) => {
        emittedSelection.value = parameters.selected.join(',')
      }
      const applyExpose = () => {
        areaReference.value?.setSelected(['item-1', 'item-3'])
      }
      const resetExpose = () => {
        areaReference.value?.reset()
      }
      return { areaReference, activeSelected, disabledSelected, emittedSelection, onSelected, applyExpose, resetExpose }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="applyExpose">Expose Select</button>
            <button class="wiki-storybook-button" @click="resetExpose">Expose Reset</button>
            <span data-testid="selectable-emitted">{{ emittedSelection }}</span>
          </div>
          <DesignComponent
            ref="areaReference"
            v-model:selected="activeSelected"
            active
            tag="section"
            @selected="onSelected"
          >
            <template #default="{ className, classClick, onClick }">
              <div class="wiki-storybook-flex">
                <div
                  v-for="item in 4"
                  :key="item"
                  :class="['wiki-storybook-item wiki-storybook-item--auto', className, classClick]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Active {{ item }}
                </div>
              </div>
            </template>
          </DesignComponent>
          <DesignComponent
            v-model:selected="disabledSelected"
            disabled
          >
            <template #default="{ className, classClick, onClick }">
              <div class="wiki-storybook-flex">
                <div
                  v-for="item in 2"
                  :key="item"
                  :class="['wiki-storybook-item wiki-storybook-item--auto', className, classClick]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Disabled {{ item }}
                </div>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const areas = canvasElement.querySelectorAll('.design-component')
await expect(areas.length).toBe(2)
await expect(areas[0].tagName).toBe('SECTION')

await step('Programmatic setSelected and reset via expose', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Expose Select' }))
  await waitFor(() => {
    expect(canvas.getByTestId('selectable-emitted')).toHaveTextContent('item-1,item-3')
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Expose Reset' }))
  await waitFor(() => {
    expect(canvas.getByTestId('selectable-emitted')).toHaveTextContent('')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SelectableArea'} type={'selectableArea'}/>

<StorybookDescriptions componentName={'SelectableArea'} type={'howToWork'}/>

<StorybookDescriptions componentName={'SelectableArea'} type={'v-model'}/>
<Canvas of={Component.SelectableAreaVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'SelectableArea'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'SelectableArea'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'SelectableArea'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <SelectableArea :selected="['1', '2']" v-bind="args">
    <template #default="{ className, classClick, onClick }">
      <div v-for="item in 5" :key="item" :class="[className, classClick]" :data-value="item" @click="onClick">
        Item {{ item }}
      </div>
    </template>
  </SelectableArea>
</div>
    `,
    description: `
Wrapper component for selecting multiple child elements. Supports lasso selection (drag to select), shift-click for ranges, and meta/ctrl-click for individual toggling.
Elements must be rendered inside the default slot, include the class from \`slotProps.className\`, bind \`@click="slotProps.onClick"\`, and define a \`data-value\` attribute.
Selection state can be tracked via \`selected\` prop and \`@selected\` event.
Use \`active\` prop for continuous selection without modifier keys.
    `,
    hide: true
  }
}
