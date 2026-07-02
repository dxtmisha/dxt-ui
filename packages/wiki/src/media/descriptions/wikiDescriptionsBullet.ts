import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Bullet component properties
 *
 * Описания свойств компонента Bullet
 */
export const wikiDescriptionsBullet: StorybookComponentsDescriptionItem = {
  name: 'Bullet',
  description: {
    en: 'A container component for displaying structured bulleted lists',
    ru: 'Компонент-контейнер для отображения структурированных маркированных списков'
  },
  possibilities: {
    en: [
      'renders list elements from a data array (list)',
      'customizable properties/attributes passed to child items (itemAttrs)',
      'support for inline HTML formatting with automatic list item styling (html)',
      'passing arbitrary list items via default slot'
    ],
    ru: [
      'рендеринг элементов списка из массива данных (list)',
      'настраиваемые свойства/атрибуты, передаваемые дочерним элементам (itemAttrs)',
      'поддержка встроенного форматирования HTML с автоматической стилизацией элементов (html)',
      'передача произвольных элементов списка через слот по умолчанию (default)'
    ]
  },
  import: [],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  stories: [
    {
      id: 'BulletHtml',
      name: {
        en: 'HTML Content',
        ru: 'Содержимое HTML'
      },
      template: `
        <DesignComponent html="<li>First parsed item</li><li>Second parsed item</li>"/>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bullet'} type={'bullet'}/>

<StorybookDescriptions componentName={'Bullet'} type={'html'}/>
<Canvas of={Component.BulletHtml}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
A bullet list container component designed to render structured, clean lists.
Supports rendering list items dynamically from a string array (list prop), forwarding list item attributes (itemAttrs), rendering direct HTML content with auto-styling of list items (html prop), or custom slots.
Matches the design system's spacing and list item aesthetics.
`
  }
}
