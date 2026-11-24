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
      'automatic calculation of negative horizontal margins',
      'flexible semantic HTML tag selection via tag prop',
      'safe attribute, class, and style merging with mergeProps',
      'useful for full-width images or breakout blocks in padded containers'
    ],
    ru: [
      'автоматический расчёт отрицательных горизонтальных отступов',
      'гибкий выбор семантического HTML-тега через свойство tag',
      'безопасное слияние атрибутов, классов и стилей через mergeProps',
      'полезно для изображений или блоков во всю ширину в контейнерах с отступами'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
      </DesignComponent>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(component?.tagName).toBe('DIV')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'BleedTags',
      name: {
        en: 'Semantic HTML tags',
        ru: 'Семантические HTML-теги'
      },
      propsName: ['tag'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent tag="section">
            <p>Bleed rendered as a section element</p>
          </DesignComponent>
          <DesignComponent tag="article">
            <p>Bleed rendered as an article element</p>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)
await expect(items[0].tagName).toBe('SECTION')
await expect(items[1].tagName).toBe('ARTICLE')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BleedTestAttributes',
      name: {
        en: 'Test: Tag default and external attribute merging',
        ru: 'Тест: Тег по умолчанию и слияние внешних атрибутов'
      },
      propsName: ['tag'],
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent class="custom-bleed-class" data-testid="bleed-default">
            <span>Default Bleed Content</span>
          </DesignComponent>
          <DesignComponent tag="figure" data-testid="bleed-figure">
            <span>Figure Bleed Content</span>
          </DesignComponent>
        </div>
      `,
      play: `
const defaultBleed = canvasElement.querySelector<HTMLElement>('[data-testid="bleed-default"]')
const figureBleed = canvasElement.querySelector<HTMLElement>('[data-testid="bleed-figure"]')

await expect(defaultBleed?.tagName).toBe('DIV')
await expect(defaultBleed).toHaveClass('design-component')
await expect(defaultBleed).toHaveClass('custom-bleed-class')
await expect(defaultBleed).toHaveTextContent('Default Bleed Content')

await expect(figureBleed?.tagName).toBe('FIGURE')
await expect(figureBleed).toHaveClass('design-component')
await expect(figureBleed).toHaveTextContent('Figure Bleed Content')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bleed'} type={'bleed'}/>
<Canvas of={Component.BleedTags}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args">
    <p>The component allows content to expand beyond the boundaries of the parent container by applying negative horizontal margins.</p>
  </DesignComponent>
</div>
    `,
    description: `
The Bleed component is used to break elements out of their parent container's horizontal padding. It applies negative horizontal margins and supports custom semantic HTML tags via the tag prop.
    `
  }
}
