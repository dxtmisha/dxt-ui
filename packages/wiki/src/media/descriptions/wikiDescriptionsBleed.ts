import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Bleed component properties
 *
 * Описания свойств компонента Bleed
 */
export const wikiDescriptionsBleed: StorybookComponentsDescriptionItem = {
  name: 'Bleed',
  description: {
    en: 'A component that allows content to expand beyond the horizontal boundaries of its parent container',
    ru: 'Компонент, позволяющий контенту выходить за горизонтальные границы родительского контейнера'
  },
  possibilities: {
    en: [
      'automatic calculation of negative margins',
      'flexible tag selection',
      'useful for full-width images or blocks in padded containers'
    ],
    ru: [
      'автоматический расчет отрицательных отступов',
      'гибкий выбор HTML-тега',
      'полезно для изображений или блоков во всю ширину в контейнерах с отступами'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </DesignComponent>
    `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bleed'} type={'bleed'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Bleed v-bind="args">
    <p>The component allows content to expand beyond the boundaries of the parent container by applying negative horizontal margins.</p>
  </Bleed>
</div>
    `,
    description: `
The Bleed component is used to break elements out of their parent container's horizontal padding. It applies negative horizontal margins equal to the specified margin-x value.
Commonly used in article layouts to make images or breakout sections take up the full width of the viewport or a wider area than the text column.
    `
  }
}
