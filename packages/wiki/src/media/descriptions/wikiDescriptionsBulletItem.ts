import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for BulletItem component properties
 *
 * Описания свойств компонента BulletItem
 */
export const wikiDescriptionsBulletItem: StorybookComponentsDescriptionItem = {
  name: 'BulletItem',
  description: {
    en: 'An individual item within a bulleted list',
    ru: 'Отдельный элемент внутри маркированного списка'
  },
  possibilities: {
    en: [
      'renders list item as standard <li> with custom spacing',
      'supports custom description slot or text description'
    ],
    ru: [
      'рендерит элемент списка как стандартный <li> с настраиваемыми отступами',
      'поддержка пользовательского слота описания или текстового описания'
    ]
  },
  import: [],
  render: `
    <ul style="list-style: none">
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
    </ul>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'BulletItem'} type={'bulletItem'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
A bullet list item component representing a single row/point.
Supports custom description content (via description prop or slot).
Must be wrapped inside a Bullet component or <ul> element.
`
  }
}
