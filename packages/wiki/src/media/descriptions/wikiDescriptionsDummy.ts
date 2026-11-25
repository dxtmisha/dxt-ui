import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Dummy component properties
 *
 * Описания свойств компонента Dummy
 */
export const wikiDescriptionsDummy: StorybookComponentsDescriptionItem = {
  name: 'Dummy',
  description: {
    en: 'A placeholder component used for structural presentation or testing',
    ru: 'Компонент-заглушка, используемый для структурного представления или тестирования'
  },
  possibilities: {
    en: [
      'lightweight structural placeholder',
      'simple slot container for prototyping',
      'forwards external attributes and exposes root elementHtml'
    ],
    ru: [
      'лёгкая структурная заглушка',
      'простой контейнер со слотом для прототипирования',
      'пробрасывает внешние атрибуты и экспонирует корневой elementHtml'
    ]
  },
  render: `
    <DesignComponent v-bind="args">Placeholder</DesignComponent>
  `,
  play: `
const dummy = canvasElement.querySelector('.design-component')
await expect(dummy).toBeInTheDocument()
await expect(dummy?.tagName).toBe('DIV')
await expect(dummy).toHaveTextContent('Placeholder')
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'DummySlot',
      name: {
        en: 'Slot usage',
        ru: 'Использование слота'
      },
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent>
            <span>Custom placeholder slot content</span>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const dummy = canvasElement.querySelector('.design-component')
await expect(dummy).toBeInTheDocument()
await expect(canvas.getByText('Custom placeholder slot content')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation — constructor-only behavior)
    // =========================================================================
    {
      id: 'DummyTestAttrsAndExpose',
      name: {
        en: 'Test: External attributes merging, click event and elementHtml expose',
        ru: 'Тест: Слияние внешних атрибутов, событие клика и expose elementHtml'
      },
      setup: `
      const dummyRef = ref<{ elementHtml?: HTMLElement } | null>(null)
      const clickedCount = ref(0)
      const tagName = ref('')
      const inspectElement = () => {
        tagName.value = dummyRef.value?.elementHtml?.tagName ?? ''
      }
      return { dummyRef, clickedCount, tagName, inspectElement }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="dummyRef"
            class="extra-dummy-class"
            data-testid="dummy-target"
            @click="clickedCount++"
          >
            Interactive dummy
          </DesignComponent>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="inspectElement">Inspect</button>
            <span data-testid="dummy-clicks">{{ clickedCount }}</span>
            <span data-testid="dummy-tag">{{ tagName }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const dummy = canvas.getByTestId('dummy-target')
await expect(dummy).toHaveClass('design-component')
await expect(dummy).toHaveClass('extra-dummy-class')

await step('Click dummy and inspect exposed elementHtml', async () => {
  await userEvent.click(dummy)
  await expect(canvas.getByTestId('dummy-clicks')).toHaveTextContent('1')
  await userEvent.click(canvas.getByRole('button', { name: 'Inspect' }))
  await expect(canvas.getByTestId('dummy-tag')).toHaveTextContent('DIV')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Dummy'} type={'dummy'}/>
    `,
    slots: `
<Canvas of={Component.DummySlot}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Placeholder component used for structural presentation, testing, or laying out interfaces early in development. Provides a lightweight visual anchor without complex logic or dependencies.
Use during prototyping to define layout structures before final components are implemented or for testing container behavior.
    `,
    hide: true
  }
}
