import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsTabItem: StorybookComponentsDescriptionItem = {
  name: 'TabItem',
  description: {
    en: 'A versatile component for creating tabs, navigation links, or list items. Supports icons, badges, labels, and various interactive states.',
    ru: 'Универсальный компонент для создания вкладок, навигационных ссылок или элементов списка. Поддерживает иконки, бейджи, метки и различные интерактивные состояния.'
  },
  possibilities: {
    en: [
      'displaying a label (`label`)',
      'leading and trailing icons (`icon`, `iconTrailing`)',
      'integrated badge support (`badge`)',
      'selection state (`selected`)',
      'disabled state (`disabled`)',
      'navigation support (`href`, `to`)',
      'customizable root tag (`tag`)',
      'ripple effect on click',
      'skeleton loading state'
    ],
    ru: [
      'отображение метки (`label`)',
      'иконки слева и справа (`icon`, `iconTrailing`)',
      'встроенная поддержка бейджа (`badge`)',
      'состояние выбора (`selected`)',
      'отключенное состояние (`disabled`)',
      'поддержка навигации (`href`, `to`)',
      'настраиваемый корневой тег (`tag`)',
      'эффект ряби при клике',
      'состояние загрузки (скелетон)'
    ]
  },
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </div>
  `,
  stories: [
    {
      id: 'TabItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Tab item</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TabItem'} type={'tabItem'}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TabItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Foundational interactive building block for multi-item navigation structures like tabs, list menus, and sidebars. Encapsulates a label, optional icons, and status indicators (badges) into a single semantic unit with integrated state management.
Features built-in support for selected, disabled, and loading (skeleton) states, along with automated navigation logic for href and router-link. Includes a Material-style ripple effect for high-polish click feedback and flexible tag rendering to support various HTML roles (button, a, li).
Controlled via label, icon, and badge props, with v-model or selected prop integration. Use within Tabs or List components to create cohesive, accessible navigation interfaces with consistent visual affordance and spatial organization.
    `
  }
}
