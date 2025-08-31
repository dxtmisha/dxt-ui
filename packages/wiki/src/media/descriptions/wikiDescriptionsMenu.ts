import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Menu component properties
 *
 * Описания свойств компонента Menu
 */
export const wikiDescriptionsMenu: StorybookComponentsDescriptionItem = {
  name: 'Menu',
  description: {
    en: 'Composite menu that combines Window, Bars, and List for nested interactive navigation',
    ru: 'Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации'
  },
  possibilities: {
    en: [
      'popup container from Window with control/title/footer slots',
      'toolbar actions via Bars and hierarchical items via List',
      'nested groups and menus with keyboard focus and selection',
      'lightweight rendering for large menus (lite + liteThreshold)',
      'custom fields mapping with keyLabel and keyValue',
      'custom item attributes and container attributes (itemAttrs, listAttrs)'
    ],
    ru: [
      'всплывающий контейнер из Window со слотами control/title/footer',
      'действия панели через Bars и иерархия пунктов через List',
      'вложенные группы и меню с фокусом с клавиатуры и выбором',
      'облегчённый рендер для больших меню (lite + liteThreshold)',
      'кастомное сопоставление полей через keyLabel и keyValue',
      'настройка атрибутов пунктов и списка (itemAttrs, listAttrs)'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </DesignComponent>
  `,
  stories: [],
  documentation: {
    body: ``,
    events: ``,
    expose: ``,
    slots: ``
  }
}
