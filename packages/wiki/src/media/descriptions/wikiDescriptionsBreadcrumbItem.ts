import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for BreadcrumbItem component
 *
 * Описания свойств компонента BreadcrumbItem
 */
export const wikiDescriptionsBreadcrumbItem: StorybookComponentsDescriptionItem = {
  name: 'BreadcrumbItem',
  description: {
    en: 'Individual navigation link element in a breadcrumbs trail',
    ru: 'Отдельный элемент навигационной ссылки в цепочке хлебных крошек'
  },
  possibilities: {
    en: [
      'custom label and icons support',
      'disabled and readonly states',
      'back navigation mode integration',
      'flexible tag customization (a, span, etc.)',
      'router-link and native link options',
      'skeleton loading state'
    ],
    ru: [
      'поддержка пользовательских меток и иконок',
      'состояния активности (disabled) и только для чтения (readonly)',
      'интеграция режима перехода назад (back)',
      'гибкая настройка тегов (a, span и т.д.)',
      'поддержка router-link и стандартных ссылок',
      'состояние загрузки (скелетон)'
    ]
  },
  stories: [
    {
      id: 'BreadcrumbItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton label="Breadcrumb item" />
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'BreadcrumbItem'} type={'breadcrumbItem'}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BreadcrumbItemSkeleton}/>
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
Individual navigation step component inside breadcrumbs hierarchy. Represents a single link or static item, providing support for text labels, icons, router navigation, and click emissions.
    `
  }
}
