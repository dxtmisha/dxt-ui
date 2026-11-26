import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TextDescription from './D1TextDescription.vue'
import { TextDescriptionWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TextDescription',
  component: D1TextDescription,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextDescriptionWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextDescriptionWikiStorybook.getWiki(),
  args: TextDescriptionWikiStorybook.getValues()
} satisfies Meta<typeof D1TextDescription>

export default meta

type Story = StoryObj<typeof meta>

export const TextDescription: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TextDescription },
    setup: () => ({ args }),
    template: `
      <D1TextDescription v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-textDescription')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('d1-textDescription__description')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TextDescriptionTags: Story = {
  name: 'Динамические HTML-теги',
  render: () => ({
    components: { D1TextDescription },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextDescription description="Default div description" tag="div"/>
          <D1TextDescription description="Semantic paragraph description" tag="p"/>
          <D1TextDescription description="Inline span description" tag="span"/>
          <D1TextDescription description="Compact small footnote" tag="small"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-textDescription')
    await expect(items.length).toBe(4)
    await expect(items[0]?.tagName).toBe('DIV')
    await expect(items[1]?.tagName).toBe('P')
    await expect(items[2]?.tagName).toBe('SPAN')
    await expect(items[3]?.tagName).toBe('SMALL')
  }
}
export const TextDescriptionSlot: Story = {
  name: 'Использование слота',
  render: () => ({
    components: { D1TextDescription },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextDescription>
            <template #description>
              Rendered via <strong>description</strong> slot with <em>rich markup</em>.
            </template>
          </D1TextDescription>
          <D1TextDescription description="Prefix text — ">
            <template #description>
              <strong>combined slot content</strong>
            </template>
          </D1TextDescription>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-textDescription')
    await expect(items.length).toBe(2)
    await expect(items[0]).toHaveTextContent('Rendered via description slot with rich markup.')
    await expect(items[0]?.querySelector('strong')).toBeInTheDocument()
    await expect(items[0]?.querySelector('em')).toBeInTheDocument()
    await expect(items[1]).toHaveTextContent('Prefix text — combined slot content')
  }
}
export const TextDescriptionTestBoundariesAndIds: Story = {
  name: 'Тест: Граничные значения, число 0, descriptionId и реактивное переключение',
  render: () => ({
    components: { D1TextDescription },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div data-testid="empty-container">
            <D1TextDescription description=""/>
            <D1TextDescription description="   "/>
          </div>
          <D1TextDescription :description="0" data-testid="static-zero"/>
          <div data-testid="dynamic-container">
            <D1TextDescription
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('empty-container').querySelectorAll('.d1-textDescription').length).toBe(0)
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
      await expect(canvas.getByTestId('dynamic-container').querySelectorAll('.d1-textDescription').length).toBe(0)
    })

    await step('Restore with paragraph tag and auto-generated id', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set Paragraph' }))
      const restored = canvas.getByTestId('dynamic-description')
      await expect(restored.tagName).toBe('P')
      await expect(restored.id).toBeTruthy()
      await expect(restored.id).not.toBe('custom-description-id')
      await expect(restored).toHaveTextContent('Updated paragraph')
    })
  }
}
export const TextDescriptionTestAttrsAndExpose: Story = {
  name: 'Тест: Слияние внешних атрибутов, событие клика и expose elementHtml',
  render: () => ({
    components: { D1TextDescription },
    setup() {
      const descriptionRef = ref<{ elementHtml?: HTMLElement } | null>(null)
      const clickedCount = ref(0)
      const elementSummary = ref('')
      const inspectElement = () => {
        const element = descriptionRef.value?.elementHtml
        elementSummary.value = element ? element.tagName + '#' + element.id : ''
      }
      return { descriptionRef, clickedCount, elementSummary, inspectElement }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextDescription
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const target = canvas.getByTestId('description-target')
    await expect(target).toHaveClass('d1-textDescription')
    await expect(target).toHaveClass('d1-textDescription__description')
    await expect(target).toHaveClass('extra-description-class')
    await expect(target).toHaveAttribute('role', 'note')
    await expect(target).toHaveAttribute('aria-live', 'polite')

    await step('Click target and inspect exposed elementHtml', async () => {
      await userEvent.click(target)
      await expect(canvas.getByTestId('description-clicks')).toHaveTextContent('1')
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect' }))
      await expect(canvas.getByTestId('description-summary')).toHaveTextContent('DIV#interactive-desc-id')
    })
  }
}
// :story-items [!] System label / Системная метка
