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
  import: [],
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ className, classNameClick, onClick }">
        <div class="wiki-storybook-group wiki-storybook-item--padding">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-dummy--color--blue', className, classNameClick]"
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
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SelectableArea'} type={'selected'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'selected'}/>
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
