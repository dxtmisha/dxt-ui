import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Breadcrumbs component
 *
 * Описания свойств компонента Breadcrumbs
 */
export const wikiDescriptionsBreadcrumbs: StorybookComponentsDescriptionItem = {
  name: 'Breadcrumbs',
  description: {
    en: 'Navigation helper component showing a hierarchical trail of links',
    ru: 'Компонент навигации, показывающий иерархическую цепочку ссылок'
  },
  possibilities: {
    en: [
      'automatic list rendering based on properties array',
      'last item automatically configured as static/readonly',
      'click event propagation with full details',
      'custom wrapper styles and flex alignment'
    ],
    ru: [
      'автоматический рендеринг списка на основе массива свойств',
      'автоматическое конфигурирование последнего элемента как статического',
      'распространение событий клика с полной информацией',
      'пользовательские стили обертки и flex-выравнивание'
    ]
  },
  documentation: {
    body: `
<StorybookDescriptions componentName={'Breadcrumbs'} type={'breadcrumbs'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `
  },
  ai: {
    description: `
Hierarchical navigation trail component. Automatically wraps and renders multiple BreadcrumbItem links from a structured list prop, managing visual structure and click bubble routing.
    `
  }
}
