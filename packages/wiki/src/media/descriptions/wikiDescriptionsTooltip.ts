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
Contextual informational overlay that appears when a user interacts with a trigger element via hover or focus. Designed for auxiliary labels, helper text, and secondary descriptive titles that enhance functional awareness without crowding the UI.
Features automated high-precision positioning (top, bottom, left, right) with viewport collision detection and customizable delay/interactive behaviors. Includes a built-in arrow indicator and requires trigger binding via the #control slot's binds object for proper event synchronization.
Controlled via simple content props (label, description) and supports complex HTML structures within the #default slot. Use to provide non-critical supplemental information, keyboard shortcuts, or detailed affordance for icon-only buttons.
    `
  }
}
