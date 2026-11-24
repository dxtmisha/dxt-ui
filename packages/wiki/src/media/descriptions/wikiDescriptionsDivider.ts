import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Divider component properties
 *
 * Описания свойств компонента Divider
 */
export const wikiDescriptionsDivider: StorybookComponentsDescriptionItem = {
  name: 'Divider',
  description: {
    en: 'A semantic separator component for visual division of content blocks',
    ru: 'Семантический компонент-разделитель для визуального отделения блоков контента'
  },
  possibilities: {
    en: [
      'semantic role="separator" accessibility attribute by default',
      'customizable line thickness and margins via design tokens',
      'overrideable ARIA attributes and fallthrough class/style merging',
      'clean and minimal DOM structure with expose().elementHtml support'
    ],
    ru: [
      'семантический атрибут доступности role="separator" по умолчанию',
      'настраиваемая толщина линии и отступы через дизайн-токены',
      'переопределяемые ARIA-атрибуты и слияние сквозных классов и стилей',
      'чистая минималистичная DOM-структура с поддержкой expose().elementHtml'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
      <div>Top content block</div>
      <DesignComponent v-bind="args"/>
      <div>Bottom content block</div>
    </div>
  `,
  play: `
const dividerElement = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(dividerElement).toBeInTheDocument()
await expect(dividerElement).toHaveAttribute('role', 'separator')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'DividerBasic',
      name: {
        en: 'Basic separation',
        ru: 'Базовое разделение'
      },
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <div>Section A</div>
          <DesignComponent data-testid="divider-basic"/>
          <div>Section B</div>
        </div>
      `,
      play: `
const dividerElement = canvasElement.querySelector<HTMLElement>('[data-testid="divider-basic"]')
await expect(dividerElement).toBeInTheDocument()
await expect(dividerElement).toHaveClass('design-component')
await expect(dividerElement).toHaveAttribute('role', 'separator')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor-level QA only — NEVER in documentation)
    // =========================================================================
    {
      id: 'DividerTestSemanticsAndAttrs',
      name: {
        en: 'Test: ARIA role override, fallthrough attributes and expose elementHtml',
        ru: 'Тест: Переопределение ARIA role, сквозные атрибуты и expose elementHtml'
      },
      setup: `
      const dividerReference = ref<{ elementHtml?: HTMLElement } | null>(null)
      const inspectedTag = ref<string>('none')

      const inspectDivider = () => {
        const element = dividerReference.value?.elementHtml
        inspectedTag.value = element ? element.tagName.toLowerCase() : 'undefined'
      }

      return {
        dividerReference,
        inspectedTag,
        inspectDivider
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <DesignComponent
              ref="dividerReference"
              aria-label="Content boundary"
              class="custom-divider-class"
              style="--divider-test: 1;"
              data-testid="divider-default-role"
            />
            <DesignComponent
              role="presentation"
              data-testid="divider-presentation-role"
            />
          </div>
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="inspectDivider">Inspect Divider</button>
            <span data-testid="divider-tag-output">{{ inspectedTag }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const defaultDivider = canvasElement.querySelector<HTMLElement>('[data-testid="divider-default-role"]')
const decorativeDivider = canvasElement.querySelector<HTMLElement>('[data-testid="divider-presentation-role"]')

await expect(defaultDivider).toHaveClass('design-component')
await expect(defaultDivider).toHaveClass('custom-divider-class')
await expect(defaultDivider).toHaveAttribute('role', 'separator')
await expect(defaultDivider).toHaveAttribute('aria-label', 'Content boundary')
expect(defaultDivider?.style.getPropertyValue('--divider-test').trim()).toBe('1')

await expect(decorativeDivider).toHaveClass('design-component')
await expect(decorativeDivider).toHaveAttribute('role', 'presentation')

await step('Inspect expose().elementHtml', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect Divider' }))
  await expect(canvasElement.querySelector('[data-testid="divider-tag-output"]')).toHaveTextContent('div')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Divider'} type={'divider'}/>
<Canvas of={Component.DividerBasic}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args"/>
</div>
    `,
    description: `
A semantic horizontal separator with default role="separator" used to divide content blocks or sections cleanly. Supports token-based line thickness and margin variants as well as attribute overrides.
    `
  }
}
