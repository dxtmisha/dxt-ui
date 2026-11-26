import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TextLabel from './D1TextLabel.vue'
import { TextLabelWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TextLabel',
  component: D1TextLabel,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextLabelWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextLabelWikiStorybook.getWiki(),
  args: TextLabelWikiStorybook.getValues()
} satisfies Meta<typeof D1TextLabel>

export default meta

type Story = StoryObj<typeof meta>

export const TextLabel: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TextLabel },
    setup: () => ({ args }),
    template: `
      <D1TextLabel v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-textLabel')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('d1-textLabel__label')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TextLabelTags: Story = {
  name: 'Динамические HTML-теги',
  render: () => ({
    components: { D1TextLabel },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextLabel label="Default div label" tag="div"/>
          <D1TextLabel label="Inline span label" tag="span"/>
          <D1TextLabel label="Section heading h2" tag="h2"/>
          <D1TextLabel label="Subheading h3" tag="h3"/>
          <D1TextLabel label="Semantic form label" tag="label" for="sample-input"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-textLabel')
    await expect(items.length).toBe(5)
    await expect(items[0]?.tagName).toBe('DIV')
    await expect(items[1]?.tagName).toBe('SPAN')
    await expect(items[2]?.tagName).toBe('H2')
    await expect(items[3]?.tagName).toBe('H3')
    await expect(items[4]?.tagName).toBe('LABEL')
    await expect(items[4]).toHaveAttribute('for', 'sample-input')
  }
}
export const TextLabelSlot: Story = {
  name: 'Использование слота',
  render: () => ({
    components: { D1TextLabel },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextLabel>
            Rendered via <strong>default</strong> slot with <em>rich markup</em>.
          </D1TextLabel>
          <D1TextLabel label="Prefix label — ">
            <strong>combined slot content</strong>
          </D1TextLabel>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-textLabel')
    await expect(items.length).toBe(2)
    await expect(items[0]).toHaveTextContent('Rendered via default slot with rich markup.')
    await expect(items[0]?.querySelector('strong')).toBeInTheDocument()
    await expect(items[0]?.querySelector('em')).toBeInTheDocument()
    await expect(items[1]).toHaveTextContent('Prefix label — combined slot content')
  }
}
export const TextLabelTestBoundariesAndIds: Story = {
  name: 'Тест: Граничные значения, число 0, labelId и реактивное переключение',
  render: () => ({
    components: { D1TextLabel },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div data-testid="empty-container">
            <D1TextLabel label=""/>
            <D1TextLabel label="   "/>
          </div>
          <D1TextLabel :label="0" data-testid="static-zero"/>
          <div data-testid="dynamic-container">
            <D1TextLabel
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('empty-container').querySelectorAll('.d1-textLabel').length).toBe(0)
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
      await expect(canvas.getByTestId('dynamic-container').querySelectorAll('.d1-textLabel').length).toBe(0)
    })

    await step('Restore with h3 tag and auto-generated id', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set Heading' }))
      const restored = canvas.getByTestId('dynamic-label')
      await expect(restored.tagName).toBe('H3')
      await expect(restored.id).toBeTruthy()
      await expect(restored.id).not.toBe('custom-label-id')
      await expect(restored).toHaveTextContent('Updated heading')
    })
  }
}
export const TextLabelTestAttrsAndExpose: Story = {
  name: 'Тест: Слияние внешних атрибутов, событие клика и expose elementHtml',
  render: () => ({
    components: { D1TextLabel },
    setup() {
      const labelRef = ref<{ elementHtml?: HTMLElement } | null>(null)
      const clickedCount = ref(0)
      const elementSummary = ref('')
      const inspectElement = () => {
        const element = labelRef.value?.elementHtml
        elementSummary.value = element ? element.tagName + '#' + element.id : ''
      }
      return { labelRef, clickedCount, elementSummary, inspectElement }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextLabel
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const target = canvas.getByTestId('label-target')
    await expect(target).toHaveClass('d1-textLabel')
    await expect(target).toHaveClass('d1-textLabel__label')
    await expect(target).toHaveClass('extra-label-class')
    await expect(target).toHaveAttribute('aria-label', 'Custom interactive label')

    await step('Click target and inspect exposed elementHtml', async () => {
      await userEvent.click(target)
      await expect(canvas.getByTestId('label-clicks')).toHaveTextContent('1')
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect' }))
      await expect(canvas.getByTestId('label-summary')).toHaveTextContent('DIV#interactive-label-id')
    })
  }
}
// :story-items [!] System label / Системная метка
