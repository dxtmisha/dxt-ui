import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for DraggableWrapper component properties /
 * Описания свойств компонента DraggableWrapper
 */
export const wikiDescriptionsDraggableWrapper: StorybookComponentsDescriptionItem = {
  name: 'DraggableWrapper',
  description: {
    en: 'A component wrapper designed for drag-and-drop elements reordering and sorting',
    ru: 'Компонент-обертка, предназначенный для изменения порядка и сортировки элементов перетаскиванием'
  },
  possibilities: {
    en: [
      'smooth transitions and dragging states',
      'multiselect dragging support with offset angles',
      'dynamic placeholder spacer location calculation',
      'supports disabling drag-and-drop behavior'
    ],
    ru: [
      'плавные переходы и состояния перетаскивания',
      'поддержка перетаскивания нескольких выбранных элементов со смещением',
      'динамический расчет положения элемента-заполнителя',
      'поддержка отключения поведения drag-and-drop'
    ]
  },
  import: [
    // 'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ className, classClick, classDrop, classPosition }">
        <div class="wiki-storybook-group">
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-1"
          >
            Drop Zone 1
          </div>
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-2"
          >
            Drop Zone 2
          </div>

          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-dummy--color--blue', className, classClick, classPosition]"
            :data-value="'item-' + item"
          >
            <span>Item {{ item }}</span>
          </div>
        </div>
      </template>
    </DesignComponent>
  `,
  stories: [
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'DraggableWrapper'} type={'draggableWrapper'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
A logic wrapper component providing drag-and-drop sorting and reordering capabilities for lists or grid elements. Calculates dynamic layouts, active selections, placeholder spacers, and manages custom transition classes and event dispatches.
    `
  }
}
