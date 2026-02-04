import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Tooltip component properties
 *
 * Описания свойств компонента Tooltip
 */
export const wikiDescriptionsTooltip: StorybookComponentsDescriptionItem = {
  name: 'Tooltip',
  description: {
    en: 'Component for displaying a popup hint when hovering over an element',
    ru: 'Компонент для отображения всплывающей подсказки при наведении на элемент'
  },
  possibilities: {
    en: [
      'displaying text or other content in a popup window',
      'automatic positioning relative to the element',
      'support for delay before showing and hiding',
      'customizable indentation and padding',
      'ability to control the open state',
      'support for an arrow pointing to the element'
    ],
    ru: [
      'отображение текста или другого контента во всплывающем окне',
      'автоматическое позиционирование относительно элемента',
      'поддержка задержки перед показом и скрытием',
      'настраиваемые отступы и поля',
      'возможность управления состоянием открытия',
      'поддержка стрелки, указывающей на элемент'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'TooltipAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      template: `
        <DesignComponent>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" v-bind="binds">
              Hover me (All Slots)
            </button>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #description>
            Description Slot
          </template>

          <template #body>
            <div class="wiki-storybook-item--padding">
              Body Slot Content
            </div>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Tooltip'} type={'tooltip'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Tooltip'} type={'event.tooltip'}/>
    `,
    slots: `
<Canvas of={Component.TooltipAllSlots}/>
<StorybookDescriptions componentName={'Tooltip'} type={'slot.control'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Tooltip open embedded v-bind="args">
    <template #control="{ binds }">
      <button v-bind="binds">Hover me</button>
    </template>
  </Tooltip>
</div>
    `,
    description: `
Tooltip is a floating component that displays contextual information when a user interacts with a trigger element (hover or focus).
It is designed to provide auxiliary descriptions, labels, or helper text.

**Key Features:**
1. **Trigger Integration:**
   - Uses the \`#control\` slot to wrap the target element.
   - Provides \`binds\` (events and ARIA attributes) that **must** be applied to the trigger element using \`v-bind="binds"\`.

2. **Content & Layout:**
   - \`label\`: Primary text content.
   - \`description\`: Secondary text content.
   - \`#default\`: Slot for custom HTML content.
   - Includes a built-in \`Arrow\` component pointing to the trigger.

3. **Behavior:**
   - **Positioning:** Automatically calculates position (top, bottom, left, right) to stay within the viewport.
   - **Timing:** Configurable \`delay\` (open) and \`delayHide\` (close).
   - **Interaction:** Supports \`interactive\` mode (allows hovering the tooltip content) and \`disabled\` state.

**Usage Examples:**

- **Basic Label:**
  \`<Tooltip label="Save changes">
     <template #control="{ binds }">
       <button v-bind="binds">Save</button>
     </template>
   </Tooltip>\`

- **With Description:**
  \`<Tooltip label="User Profile" description="Click to edit settings">
     <template #control="{ binds }">
       <Avatar v-bind="binds" />
     </template>
   </Tooltip>\`
    `
  }
}
