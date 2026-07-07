import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsSegmentControlItem: StorybookComponentsDescriptionItem = {
  name: 'SegmentControlItem',
  description: {
    en: 'A versatile component for creating segment controls, tab controls, or navigation links. Supports icons, badges, labels, and various interactive states.',
    ru: 'Универсальный компонент для создания сегментированного управления, вкладок, навигационных ссылок. Поддерживает иконки, бейджи, метки и различные интерактивные состояния.'
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
      id: 'SegmentControlItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Segment control item</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SegmentControlItem'} type={'segmentControlItem'}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SegmentControlItemSkeleton}/>
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
    `
  },
  ai: {
    description: `
Foundational interactive building block for segment control structures. Encapsulates a label, optional icons, and status indicators (badges) into a single semantic unit with integrated state management.
Features built-in support for selected, disabled, and loading (skeleton) states, along with automated navigation logic for href and router-link. Includes a Material-style ripple effect for high-polish click feedback and flexible tag rendering to support various HTML roles (button, a, li).
Controlled via label, icon, and badge props, with v-model or selected prop integration. Use within SegmentControl components to create cohesive, accessible navigation interfaces with consistent visual affordance and spatial organization.
    `
  }
}
