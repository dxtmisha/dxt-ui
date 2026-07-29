import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationItem component properties
 *
 * Описания свойств компонента NavigationItem
 */
export const wikiDescriptionsNavigationItem: StorybookComponentsDescriptionItem = {
  name: 'NavigationItem',
  description: {
    en: 'Specialized navigation list item component for navigation bars and menus',
    ru: 'Специализированный элемент навигационного списка для навигационных панелей и меню'
  },
  possibilities: {
    en: [
      'inherited functionality from ListItem',
      'navigation item styling for sidebar and header menus',
      'multiple content areas: label, description, prefix, suffix, caption',
      'icon support with flexible positioning',
      'badge integration for status and notification counters',
      'interactive states: focus, selected, disabled, readonly',
      'progress and skeleton loading states',
      'ripple effect for visual click feedback',
      'flexible element tags: button, link, div',
      'built-in accessibility support'
    ],
    ru: [
      'наследуемая функциональность от ListItem',
      'стилизация элементов навигации для боковых панелей и шапок меню',
      'множественные области контента: метка, описание, префикс, суффикс, заголовок',
      'поддержка иконок с гибким позиционированием',
      'интеграция значков для статусов и счетчиков уведомлений',
      'интерактивные состояния: фокус, выбранный, отключенный, только чтение',
      'состояния загрузки с прогрессом и скелетоном',
      'эффект пульсации для визуальной обратной связи при клике',
      'гибкие варианты тегов: кнопка, ссылка, div',
      'встроенная поддержка доступности'
    ]
  },
  stories: [
    {
      id: 'NavigationItemHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent highlight="nav" label="Navigation link item"/>
            <DesignComponent highlight="set" :highlightLengthStart="3" label="Settings panel"/>
          </div>
        </div>
      `
    },
    {
      id: 'NavigationItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the navigation item component."
          >Navigation Item Label Example</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the navigation item."
          >Very Long Navigation Item Label Example for Skeleton</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationItem'} type={'navigationItem'}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.NavigationItemHighlight}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.NavigationItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Specialized navigation item component inheriting from ListItem, designed specifically for application sidebars, navigation drawers, and header menus.
Inherits all layout features including prefix/suffix slots, icons, badges, selected states, loading skeleton states, and ripple click effects.
Used in combination with NavigationList to construct structured navigation trees.
    `
  }
}
