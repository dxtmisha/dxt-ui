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
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <ListGroup v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds">head</span>
    </template>
    <template #list>
      list
    </template>
  </ListGroup>
</div>
    `,
    description: `
Structural component for grouping related list items into collapsible/expandable hierarchies. Manages the visual nesting and visibility of child elements, providing organized categorization within dense lists.
Features smooth height animations via MotionTransform and integrated header functionality with automatic arrow rotation. Exposes localized bindings in the #head slot to correctly link triggers with their collapsible content.
Controlled via the open prop and utilizes #head and #list slots for content distribution. Use for navigation submenus, categorized data lists, or accordion-style expanding rows.
    `
  }
}
