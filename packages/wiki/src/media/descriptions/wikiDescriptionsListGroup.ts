import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ListGroup component properties
 *
 * Описания свойств компонента ListGroup
 */
export const wikiDescriptionsListGroup: StorybookComponentsDescriptionItem = {
  name: 'ListGroup',
  description: {
    en: 'Auxiliary component for the List component to group and organize list items with collapsible structure',
    ru: 'Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой'
  },
  possibilities: {
    en: [
      'grouping helper for List component items',
      'collapsible/expandable group functionality',
      'customizable group header with icon support',
      'automatic arrow icon rotation based on state',
      'nested group support for complex hierarchies',
      'seamless integration with List ecosystem',
      'keyboard navigation and accessibility',
      'smooth animation transitions',
      'flexible content management through slots'
    ],
    ru: [
      'помощник группировки для элементов компонента List',
      'функциональность сворачиваемой/разворачиваемой группы',
      'настраиваемый заголовок группы с поддержкой иконок',
      'автоматический поворот стрелки в зависимости от состояния',
      'поддержка вложенных групп для сложных иерархий',
      'бесшовная интеграция с экосистемой List',
      'навигация с клавиатуры и доступность',
      'плавные анимационные переходы',
      'гибкое управление контентом через слоты'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template v-slot:head="{open}">
        Primary group header with expand/collapse toggle
      </template>
      <template v-slot:list>
        Main content area for grouped list items
      </template>
    </DesignComponent>

    <DesignComponent v-bind="args">
      <template v-slot:head="{open}">
        Secondary group header with custom styling
      </template>
      <template v-slot:list>
        Alternative layout for nested components
      </template>
    </DesignComponent>

    <DesignComponent v-bind="args">
      <template v-slot:head="{open}">
        Tertiary group header with advanced options
      </template>
      <template v-slot:list>
        Extended content area with additional features
      </template>
    </DesignComponent>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListGroup'} type={'listGroup'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListGroup'} type={'slot.head'}/>
<StorybookDescriptions componentName={'ListGroup'} type={'slot.list'}/>
    `
  }
}
