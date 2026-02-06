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
ListGroup is a structural component designed to group related list items, often providing collapsible/expandable functionality.
It serves as a container that manages the visibility of nested items, creating a hierarchical structure within lists or menus.

**Key Features:**
1. **Collapsible Logic:**
   - Wraps content in a \`MotionTransform\` component for smooth height animations.
   - Can be controlled programmatically via the \`open\` prop or interactively via the header.

2. **Slots Structure:**
   - \`#head\`: The header area acting as the trigger. It receives \`binds\` (click handlers, ARIA attributes) that **must** be applied to the interactive element (e.g., \`ListItem\`) to enable toggling.
   - \`#list\`: The content area where nested \`ListItem\` or other components are placed.

3. **Styling:**
   - \`divider\`: Adds a visual separator if enabled.
   - Automatically handles ARIA roles (\`role="group"\`).

**When to use:**
- **Navigation Menus:** To create submenus or grouped links (e.g., "Settings" -> "Profile", "Security").
- **Categorized Lists:** To group items under a common heading.
- **Accordions within Lists:** When list items need to expand to show details.

**Usage Examples:**

- **Basic Group:**
  \`<ListGroup>
     <template #head="{ binds }">
       <ListItem v-bind="binds" label="My Group" icon="folder" />
     </template>
     <template #list>
       <ListItem label="File 1" />
       <ListItem label="File 2" />
     </template>
   </ListGroup>\`

- **Open by Default:**
  \`<ListGroup open>
     <template #head="{ binds }">
       <ListItem v-bind="binds" label="Always Open" />
     </template>
     <template #list>...</template>
   </ListGroup>\`
    `
  }
}
