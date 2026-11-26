import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextDescription component properties
 *
 * Описания свойств компонента TextDescription
 */
export const wikiDescriptionsTextDescription: StorybookComponentsDescriptionItem = {
  name: 'TextDescription',
  description: {
    en: 'A lightweight component for displaying text descriptions with dynamic HTML tag support',
    ru: 'Легковесный компонент для отображения текстовых описаний с поддержкой динамического HTML-тега'
  },
  possibilities: {
    en: [
      'renders text from description property or description slot',
      'supports dynamic HTML tags (div, p, span, small, figcaption, etc.)',
      'omits empty DOM output lazily while preserving numeric 0',
      'forwards external attributes, custom descriptionId, and exposes elementHtml'
    ],
    ru: [
      'выводит текст из свойства description или слота description',
      'поддерживает динамические HTML-теги (div, p, span, small, figcaption и др.)',
      'лениво пропускает пустой DOM-вывод и корректно отображает число 0',
      'пробрасывает внешние атрибуты, пользовательский descriptionId и экспонирует elementHtml'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveClass('design-component__description')
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TextDescriptionTags',
      name: {
        en: 'Dynamic HTML tags',
        ru: 'Динамические HTML-теги'
      },
      propsName: ['description', 'tag'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent description="Default div description" tag="div"/>
          <DesignComponent description="Semantic paragraph description" tag="p"/>
          <DesignComponent description="Inline span description" tag="span"/>
          <DesignComponent description="Compact small footnote" tag="small"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0]?.tagName).toBe('DIV')
await expect(items[1]?.tagName).toBe('P')
await expect(items[2]?.tagName).toBe('SPAN')
await expect(items[3]?.tagName).toBe('SMALL')
      `
    },
    {
      id: 'TextDescriptionSlot',
      name: {
        en: 'Slot usage',
        ru: 'Использование слота'
      },
      propsName: ['description'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #description>
              Rendered via <strong>description</strong> slot with <em>rich markup</em>.
            </template>
          </DesignComponent>
          <DesignComponent description="Prefix text — ">
            <template #description>
              <strong>combined slot content</strong>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)
await expect(items[0]).toHaveTextContent('Rendered via description slot with rich markup.')
await expect(items[0]?.querySelector('strong')).toBeInTheDocument()
await expect(items[0]?.querySelector('em')).toBeInTheDocument()
await expect(items[1]).toHaveTextContent('Prefix text — combined slot content')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation — constructor-only behavior)
    // =========================================================================
    {
      id: 'TextDescriptionTestBoundariesAndIds',
      name: {
        en: 'Test: Boundaries, numeric 0, descriptionId and reactive switching',
        ru: 'Тест: Граничные значения, число 0, descriptionId и реактивное переключение'
      },
      propsName: ['description', 'descriptionId', 'tag'],
      setup: `
      const activeDescription = ref<string | number>('Initial description')
      const activeTag = ref('div')
      const activeId = ref<string | undefined>('custom-description-id')
      const setZero = () => {
        activeDescription.value = 0
      }
      const setEmpty = () => {
        activeDescription.value = ''
      }
      const setParagraph = () => {
        activeDescription.value = 'Updated paragraph'
        activeTag.value = 'p'
        activeId.value = undefined
      }
      return { activeDescription, activeTag, activeId, setZero, setEmpty, setParagraph }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="empty-container">
            <DesignComponent description=""/>
            <DesignComponent description="   "/>
          </div>
          <DesignComponent :description="0" data-testid="static-zero"/>
          <div data-testid="dynamic-container">
            <DesignComponent
              :description="activeDescription"
              :description-id="activeId"
              :tag="activeTag"
              data-testid="dynamic-description"
            />
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="setZero">Set Zero</button>
            <button class="wiki-storybook-button" type="button" @click="setEmpty">Set Empty</button>
            <button class="wiki-storybook-button" type="button" @click="setParagraph">Set Paragraph</button>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('empty-container').querySelectorAll('.design-component').length).toBe(0)
await expect(canvas.getByTestId('static-zero')).toHaveTextContent('0')

const dynamicElement = canvas.getByTestId('dynamic-description')
await expect(dynamicElement.tagName).toBe('DIV')
await expect(dynamicElement.id).toBe('custom-description-id')

await step('Switch to numeric 0', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Zero' }))
  await expect(canvas.getByTestId('dynamic-description')).toHaveTextContent('0')
})

await step('Switch to empty string and verify zero DOM output', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Empty' }))
  await expect(canvas.getByTestId('dynamic-container').querySelectorAll('.design-component').length).toBe(0)
})

await step('Restore with paragraph tag and auto-generated id', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set Paragraph' }))
  const restored = canvas.getByTestId('dynamic-description')
  await expect(restored.tagName).toBe('P')
  await expect(restored.id).toBeTruthy()
  await expect(restored.id).not.toBe('custom-description-id')
  await expect(restored).toHaveTextContent('Updated paragraph')
})
      `
    },
    {
      id: 'TextDescriptionTestAttrsAndExpose',
      name: {
        en: 'Test: External attributes merging, click event and elementHtml expose',
        ru: 'Тест: Слияние внешних атрибутов, событие клика и expose elementHtml'
      },
      propsName: ['description', 'descriptionId'],
      setup: `
      const descriptionRef = ref<{ elementHtml?: HTMLElement } | null>(null)
      const clickedCount = ref(0)
      const elementSummary = ref('')
      const inspectElement = () => {
        const element = descriptionRef.value?.elementHtml
        elementSummary.value = element ? element.tagName + '#' + element.id : ''
      }
      return { descriptionRef, clickedCount, elementSummary, inspectElement }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="descriptionRef"
            description="Interactive description"
            description-id="interactive-desc-id"
            class="extra-description-class"
            role="note"
            aria-live="polite"
            data-testid="description-target"
            @click="clickedCount++"
          />
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="inspectElement">Inspect</button>
            <span data-testid="description-clicks">{{ clickedCount }}</span>
            <span data-testid="description-summary">{{ elementSummary }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const target = canvas.getByTestId('description-target')
await expect(target).toHaveClass('design-component')
await expect(target).toHaveClass('design-component__description')
await expect(target).toHaveClass('extra-description-class')
await expect(target).toHaveAttribute('role', 'note')
await expect(target).toHaveAttribute('aria-live', 'polite')

await step('Click target and inspect exposed elementHtml', async () => {
  await userEvent.click(target)
  await expect(canvas.getByTestId('description-clicks')).toHaveTextContent('1')
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect' }))
  await expect(canvas.getByTestId('description-summary')).toHaveTextContent('DIV#interactive-desc-id')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextDescription'} type={'textDescription'}/>
<Canvas of={Component.TextDescriptionTags}/>
    `,
    slots: `
<Canvas of={Component.TextDescriptionSlot}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
A utility component for displaying textual descriptions. Supports description slot injection, custom HTML tags via "tag" property (defaults to "div"), custom descriptionId, lazy empty-state omission, and clean semantic output. Integrated with DescriptionInclude for standardized description rendering.
    `,
    hide: true
  }
}
