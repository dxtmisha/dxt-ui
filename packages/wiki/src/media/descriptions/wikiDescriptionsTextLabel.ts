import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextLabel component properties
 *
 * Описания свойств компонента TextLabel
 */
export const wikiDescriptionsTextLabel: StorybookComponentsDescriptionItem = {
  name: 'TextLabel',
  description: {
    en: 'A lightweight component for displaying text labels and headings with dynamic HTML tag support',
    ru: 'Легковесный компонент для отображения текстовых меток и заголовков с поддержкой динамического HTML-тега'
  },
  possibilities: {
    en: [
      'renders text from label property or default slot',
      'supports dynamic HTML tags (div, span, p, h1-h6, label, etc.)',
      'omits empty DOM output lazily while preserving numeric 0',
      'forwards external attributes, custom labelId, and exposes elementHtml'
    ],
    ru: [
      'выводит текст из свойства label или слота по умолчанию',
      'поддерживает динамические HTML-теги (div, span, p, h1-h6, label и др.)',
      'лениво пропускает пустой DOM-вывод и корректно отображает число 0',
      'пробрасывает внешние атрибуты, пользовательский labelId и экспонирует elementHtml'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveClass('design-component__label')
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TextLabelTags',
      name: {
        en: 'Dynamic HTML tags',
        ru: 'Динамические HTML-теги'
      },
      propsName: ['label', 'tag'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Default div label" tag="div"/>
          <DesignComponent label="Inline span label" tag="span"/>
          <DesignComponent label="Section heading h2" tag="h2"/>
          <DesignComponent label="Subheading h3" tag="h3"/>
          <DesignComponent label="Semantic form label" tag="label" for="sample-input"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
await expect(items[0]?.tagName).toBe('DIV')
await expect(items[1]?.tagName).toBe('SPAN')
await expect(items[2]?.tagName).toBe('H2')
await expect(items[3]?.tagName).toBe('H3')
await expect(items[4]?.tagName).toBe('LABEL')
await expect(items[4]).toHaveAttribute('for', 'sample-input')
      `
    },
    {
      id: 'TextLabelSlot',
      name: {
        en: 'Slot usage',
        ru: 'Использование слота'
      },
      propsName: ['label'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            Rendered via <strong>default</strong> slot with <em>rich markup</em>.
          </DesignComponent>
          <DesignComponent label="Prefix label — ">
            <strong>combined slot content</strong>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0]).toHaveTextContent('Rendered via default slot with rich markup.')
await expect(items[0]?.querySelector('strong')).toBeInTheDocument()
await expect(items[0]?.querySelector('em')).toBeInTheDocument()
await expect(items[1]).toHaveTextContent('Prefix label — combined slot content')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation — constructor-only behavior)
    // =========================================================================
    {
      id: 'TextLabelTestBoundariesAndIds',
      name: {
        en: 'Test: Boundaries, numeric 0, labelId and reactive switching',
        ru: 'Тест: Граничные значения, число 0, labelId и реактивное переключение'
      },
      propsName: ['label', 'labelId', 'tag'],
      setup: `
      const activeLabel = ref<string | number>('Initial label')
      const activeTag = ref('div')
      const activeId = ref<string | undefined>('custom-label-id')
      const setZero = () => {
        activeLabel.value = 0
      }
      const setEmpty = () => {
        activeLabel.value = ''
      }
      const setHeading = () => {
        activeLabel.value = 'Updated heading'
        activeTag.value = 'h3'
        activeId.value = undefined
      }
      return { activeLabel, activeTag, activeId, setZero, setEmpty, setHeading }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="empty-container">
            <DesignComponent label=""/>
            <DesignComponent label="   "/>
          </div>
          <DesignComponent :label="0" data-testid="static-zero"/>
          <div data-testid="dynamic-container">
            <DesignComponent
              :label="activeLabel"
              :label-id="activeId"
              :tag="activeTag"
              data-testid="dynamic-label"
            />
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="setZero">Set Zero</button>
            <button class="wiki-storybook-button" type="button" @click="setEmpty">Set Empty</button>
            <button class="wiki-storybook-button" type="button" @click="setHeading">Set Heading</button>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('empty-container').querySelectorAll('.design-component').length).toBe(0)
await expect(canvas.getByTestId('static-zero')).toHaveTextContent('0')

const dynamicElement = canvas.getByTestId('dynamic-label')
await expect(dynamicElement.tagName).toBe('DIV')
await expect(dynamicElement.id).toBe('custom-label-id')

await step('Switch to numeric 0', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Zero' }))
  await expect(canvas.getByTestId('dynamic-label')).toHaveTextContent('0')
})

await step('Switch to empty string and verify zero DOM output', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Empty' }))
  await expect(canvas.getByTestId('dynamic-container').querySelectorAll('.design-component').length).toBe(0)
})

await step('Restore with h3 tag and auto-generated id', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Heading' }))
  const restored = canvas.getByTestId('dynamic-label')
  await expect(restored.tagName).toBe('H3')
  await expect(restored.id).toBeTruthy()
  await expect(restored.id).not.toBe('custom-label-id')
  await expect(restored).toHaveTextContent('Updated heading')
})
      `
    },
    {
      id: 'TextLabelTestAttrsAndExpose',
      name: {
        en: 'Test: External attributes merging, click event and elementHtml expose',
        ru: 'Тест: Слияние внешних атрибутов, событие клика и expose elementHtml'
      },
      propsName: ['label', 'labelId'],
      setup: `
      const labelRef = ref<{ elementHtml?: HTMLElement } | null>(null)
      const clickedCount = ref(0)
      const elementSummary = ref('')
      const inspectElement = () => {
        const element = labelRef.value?.elementHtml
        elementSummary.value = element ? element.tagName + '#' + element.id : ''
      }
      return { labelRef, clickedCount, elementSummary, inspectElement }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="labelRef"
            label="Interactive label"
            label-id="interactive-label-id"
            class="extra-label-class"
            aria-label="Custom interactive label"
            data-testid="label-target"
            @click="clickedCount++"
          />
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="inspectElement">Inspect</button>
            <span data-testid="label-clicks">{{ clickedCount }}</span>
            <span data-testid="label-summary">{{ elementSummary }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const target = canvas.getByTestId('label-target')
await expect(target).toHaveClass('design-component')
await expect(target).toHaveClass('design-component__label')
await expect(target).toHaveClass('extra-label-class')
await expect(target).toHaveAttribute('aria-label', 'Custom interactive label')

await step('Click target and inspect exposed elementHtml', async () => {
  await userEvent.click(target)
  await expect(canvas.getByTestId('label-clicks')).toHaveTextContent('1')
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect' }))
  await expect(canvas.getByTestId('label-summary')).toHaveTextContent('DIV#interactive-label-id')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextLabel'} type={'textLabel'}/>
<Canvas of={Component.TextLabelTags}/>
    `,
    slots: `
<Canvas of={Component.TextLabelSlot}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
A utility component for displaying text and labels. Supports default slot injection, custom HTML tags via "tag" property (defaults to "div"), custom labelId, lazy empty-state omission, and clean semantic output. Integrated with LabelInclude for standardized text rendering.
    `,
    hide: true
  }
}
