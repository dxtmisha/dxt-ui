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
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ className, classNameClick, onClick }">
        <div
          class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classNameClick]"
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
  stories: [
    {
      id: 'SelectableAreaBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <DesignComponent>
          <template #default="{ className, classNameClick, onClick }">
            <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
              <div
                v-for="item in 6"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classNameClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </DesignComponent>
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
            <span>Selected items: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = []">Reset</button>
            <button class="wiki-storybook-button" @click="selected = ['item-1', 'item-2', 'item-3']">Select 1-3</button>
          </div>

          <DesignComponent
            v-model:selected="selected"
          >
            <template #default="{ className, classSelectionName, classNameClick, onClick }">
              <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
                <div
                  v-for="item in 6"
                  :key="item"
                  :class="[
                    'wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center',
                    className,
                    classNameClick,
                    selected.includes('item-' + item) && classSelectionName
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SelectableArea'} type={'selectableArea'}/>

<StorybookDescriptions componentName={'SelectableArea'} type={'v-model'}/>
<Canvas of={Component.SelectableAreaVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'SelectableArea'} type={'event.selected'}/>
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
    <template #default="{ className, classNameClick, onClick }">
      <div v-for="item in 5" :key="item" :class="[className, classNameClick]" :data-value="item" @click="onClick">
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
    `
  }
}
