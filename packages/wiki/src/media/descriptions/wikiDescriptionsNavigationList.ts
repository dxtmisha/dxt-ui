import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationList component properties
 *
 * Описания свойств компонента NavigationList
 */
export const wikiDescriptionsNavigationList: StorybookComponentsDescriptionItem = {
  name: 'NavigationList',
  description: {
    en: 'Specialized navigation list component for sidebars, navigation drawers, and top bars',
    ru: 'Специализированный навигационный список для сайдбаров, выпадающих меню и навигационных панелей'
  },
  possibilities: {
    en: [
      'inherited core capabilities from List',
      'optimized layout for navigation menus and sidebars',
      'keyboard navigation with arrow keys and shortcuts',
      'real-time search filtering and text highlighting',
      'hierarchical structure with group headings and sub-menus',
      'vertical and horizontal list axis orientations',
      'divider line rendering between navigation items',
      'lite mode rendering for optimized performance',
      'accessibility support with ARIA roles'
    ],
    ru: [
      'наследуемые возможности компонента List',
      'оптимизированная компоновка для навигационных меню и сайдбаров',
      'навигация с клавиатуры со стрелками и горячими клавишами',
      'фильтрация поиска в реальном времени и подсвечивание текста',
      'иерархическая структура с заголовками групп и подменю',
      'вертикальная и горизонтальная ориентации списка',
      'отображение разделительных линий между навигационными элементами',
      'облегченный режим рендеринга для повышения производительности',
      'поддержка доступности с атрибутами ARIA'
    ]
  },
  stories: [
    {
      id: 'NavigationListHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent
              :list="[
                {label: 'User Management', value: 'users', icon: 'people'},
                {label: 'Role Permissions', value: 'roles', icon: 'security'},
                {label: 'System Logs', value: 'logs', icon: 'receipt_long'}
              ]"
              highlight="manag"
              :highlightLengthStart="4"
            />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationList'} type={'navigationList'}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.NavigationListHighlight}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `
  },
  ai: {
    description: `
Specialized navigation list component inheriting from List, tailored for application sidebars and navigation menus.
Renders NavigationItem components with support for search filtering, section dividers, orientation axis, and full keyboard navigation.
Primary building block for application navigation structures.
    `
  }
}
