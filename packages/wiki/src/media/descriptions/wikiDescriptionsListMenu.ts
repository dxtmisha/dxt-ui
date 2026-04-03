import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ListMenu component properties
 *
 * Описания свойств компонента ListMenu
 */
export const wikiDescriptionsListMenu: StorybookComponentsDescriptionItem = {
  name: 'ListMenu',
  description: {
    en: 'Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure',
    ru: 'Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой'
  },
  possibilities: {
    en: [
      'menu helper for List component navigation',
      'expandable/collapsible submenu functionality',
      'customizable menu header with icon support',
      'automatic arrow icon rotation based on state',
      'nested menu support for complex hierarchies',
      'seamless integration with List ecosystem',
      'keyboard navigation and accessibility',
      'smooth animation transitions',
      'flexible menu content management through slots'
    ],
    ru: [
      'помощник меню для навигации компонента List',
      'функциональность раскрывающихся/сворачивающихся подменю',
      'настраиваемый заголовок меню с поддержкой иконок',
      'автоматический поворот стрелки в зависимости от состояния',
      'поддержка вложенных меню для сложных иерархий',
      'бесшовная интеграция с экосистемой List',
      'навигация с клавиатуры и поддержка доступности',
      'плавные анимационные переходы',
      'гибкое управление содержимым меню через слоты'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template v-slot:head="{binds}">
        <span v-bind="binds">Primary menu header with expand/collapse toggle</span>
      </template>
      <template v-slot:list>
        <div class="wiki-storybook-item--padding">
          <h4>Menu Content</h4>
          <p>Navigation elements providing access to application sections.</p>

          <ul>
            <li><strong>Dashboard</strong> - Main control panel</li>
            <li><strong>Content</strong> - Content management</li>
            <li><strong>Analytics</strong> - Data analysis tools</li>
          </ul>

          <p>Supports nested submenus and adapts to user permissions.</p>
        </div>
      </template>
    </DesignComponent>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListMenu'} type={'listMenu'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>

<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <ListMenu embedded :window-attrs="{open: true}" v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds as any">head</span>
    </template>
    <template #list>
      list
    </template>
  </ListMenu>
</div>
    `,
    description: `
Specialized wrapper component for creating dropdown menus or nested navigation trees. Utilizes dynamic window positioning to display a list of actions or sub-options relative to a trigger element.
Features an adaptive menu preset managing visibility, positioning (popover vs inline), and interaction modes. Exposes standard binds in the #head slot to automate trigger setup and ensures smooth animations during state transitions.
Controlled via the windowAttrs prop for positioning and utilizes #head and #list slots for trigger and content. Use for context menus, account settings dropdowns, or multi-level primary navigation links.
    `
  }
}
