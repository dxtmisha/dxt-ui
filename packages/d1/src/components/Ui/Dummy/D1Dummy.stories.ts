import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Dummy from './D1Dummy.vue'
import { DummyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Dummy',
  component: D1Dummy,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DummyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DummyWikiStorybook.getWiki(),
  args: DummyWikiStorybook.getValues()
} satisfies Meta<typeof D1Dummy>

export default meta

type Story = StoryObj<typeof meta>

export const Dummy: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Dummy },
    setup: () => ({ args }),
    template: `
      <D1Dummy v-bind="args">Placeholder</D1Dummy>
    `
  }),
  play: async ({ canvasElement }) => {
    const dummy = canvasElement.querySelector('.d1-dummy')
    await expect(dummy).toBeInTheDocument()
    await expect(dummy?.tagName).toBe('DIV')
    await expect(dummy).toHaveTextContent('Placeholder')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DummySlot: Story = {
  name: 'Использование слота',
  render: () => ({
    components: { D1Dummy },
    template: `
        
        <div class="wiki-storybook-group">
          <D1Dummy>
            <span>Custom placeholder slot content</span>
          </D1Dummy>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dummy = canvasElement.querySelector('.d1-dummy')
    await expect(dummy).toBeInTheDocument()
    await expect(canvas.getByText('Custom placeholder slot content')).toBeInTheDocument()
  }
}
export const DummyTestAttrsAndExpose: Story = {
  name: 'Тест: Слияние внешних атрибутов, событие клика и expose elementHtml',
  render: () => ({
    components: { D1Dummy },
    setup() {
      const dummyRef = ref<{ elementHtml?: HTMLElement } | null>(null)
      const clickedCount = ref(0)
      const tagName = ref('')
      const inspectElement = () => {
        tagName.value = dummyRef.value?.elementHtml?.tagName ?? ''
      }
      return { dummyRef, clickedCount, tagName, inspectElement }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Dummy
            ref="dummyRef"
            class="extra-dummy-class"
            data-testid="dummy-target"
            @click="clickedCount++"
          >
            Interactive dummy
          </D1Dummy>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="inspectElement">Inspect</button>
            <span data-testid="dummy-clicks">{{ clickedCount }}</span>
            <span data-testid="dummy-tag">{{ tagName }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const dummy = canvas.getByTestId('dummy-target')
    await expect(dummy).toHaveClass('d1-dummy')
    await expect(dummy).toHaveClass('extra-dummy-class')

    await step('Click dummy and inspect exposed elementHtml', async () => {
      await userEvent.click(dummy)
      await expect(canvas.getByTestId('dummy-clicks')).toHaveTextContent('1')
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect' }))
      await expect(canvas.getByTestId('dummy-tag')).toHaveTextContent('DIV')
    })
  }
}
// :story-items [!] System label / Системная метка
