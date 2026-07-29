import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for NavigationRailItem component properties
 *
 * Описания свойств компонента NavigationRailItem
 */
export const wikiDescriptionsNavigationRailItem: StorybookComponentsDescriptionItem = {
  name: 'NavigationRailItem',
  description: {
    en: 'Compact navigation rail list item component designed for vertical navigation rails and sidebars',
    ru: 'Компактный элемент вертикальной навигационной панели для сайдбаров и мини-меню'
  },
  possibilities: {
    en: [
      'compact navigation rail item layout for vertical navigation rails',
      'single leading icon support with customizable alignment',
      'integrated label and badge rendering',
      'interactive states: focus, selected, disabled, readonly',
      'progress indicator and skeleton loading state support',
      'ripple click effect for visual feedback',
      'divider support for separating rail sections',
      'customizable HTML tags: button, link (href), span, div',
      'leading and body slot support for custom content',
      'built-in accessibility ARIA attributes'
    ],
    ru: [
      'компактный макет элемента для вертикальных панелей навигации (Navigation Rail)',
      'поддержка одной ведущей иконки с настраиваемым выравниванием',
      'встроенный рендеринг метки (label) и значка (badge)',
      'интерактивные состояния: фокус, выбранный, отключенный, только чтение',
      'состояния загрузки с индикатором прогресса и скелетоном',
      'эффект пульсации (ripple) при клике',
      'поддержка разделителя (divider) для секций панели',
      'гибкие варианты HTML-тегов: кнопка, ссылка (href), span, div',
      'слоты leading и body для кастомного контента',
      'встроенная поддержка доступности и ARIA-атрибутов'
    ]
  },
  stories: [
    {
      id: 'NavigationRailItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            icon="home"
            badge="5"
          >Home</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            icon="settings"
          >Navigation Rail Item Label Example</DesignComponent>
        </DesignSkeleton>
      `
    },
    {
      id: 'NavigationRailItemSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>Default slot</template>
          <template #leading>Leading slot</template>
          <template #body>Body slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'NavigationRailItem'} type={'navigationRailItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.NavigationRailItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<Canvas of={Component.NavigationRailItemSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'leading'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
    `
  },
  ai: {
    description: `
Compact navigation item component designed specifically for vertical Navigation Rail panels and mini-sidebars.
Features single leading icon, label, badge, ripple click effect, progress/skeleton loading states, and leading/body slots.
    `
  }
}
