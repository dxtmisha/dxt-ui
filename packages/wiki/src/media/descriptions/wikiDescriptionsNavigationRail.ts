import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationRail component properties
 *
 * Описания свойств компонента NavigationRail
 */
export const wikiDescriptionsNavigationRail: StorybookComponentsDescriptionItem = {
  name: 'NavigationRail',
  description: {
    en: 'Vertical navigation rail component for sidebars and application navigation panels',
    ru: 'Компонент вертикальной панели навигации для сайдбаров и панелей навигации приложений'
  },
  possibilities: {
    en: [
      'compact vertical navigation rail layout',
      'hierarchical data structure support with menus and items',
      'keyboard navigation with arrow keys and shortcuts',
      'focus management and item selection tracking',
      'customizable item attributes for items, menus, and management elements',
      'divider support for section separation',
      'event-driven interaction system with click and close events',
      'built-in accessibility ARIA attributes',
      'external control mode support'
    ],
    ru: [
      'компактная вертикальная панель навигации (Navigation Rail)',
      'поддержка иерархической структуры данных с меню и элементами',
      'навигация с клавиатуры со стрелками и горячими клавишами',
      'управление фокусом и отслеживание выбора элементов',
      'настраиваемые атрибуты для элементов списка, меню и элементов управления',
      'поддержка разделителей (divider) для секций',
      'событийно-ориентированная система с событиями клика и закрытия',
      'встроенная поддержка доступности и ARIA-атрибутов',
      'поддержка режима внешнего управления'
    ]
  },
  stories: [
    {
      id: 'NavigationRailBasic',
      name: {
        en: 'Basic navigation rail',
        ru: 'Базовая панель навигации'
      },
      template: `
        <DesignComponent
          :list="[
            { label: 'Home', value: 'home', icon: 'home' },
            { label: 'Search', value: 'search', icon: 'search' },
            { label: 'Settings', value: 'settings', icon: 'settings' }
          ]"
        />
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationRail'} type={'navigationRail'}/>

<Canvas of={Component.NavigationRailBasic}/>
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
Vertical navigation rail component for application sidebars and mini navigation drawers.
Supports item selection, focus management, hierarchical menus, dividers, and full keyboard accessibility.
    `
  }
}
