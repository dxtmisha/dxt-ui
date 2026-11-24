import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Divider from './D1Divider.vue'
import { DividerWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Divider',
  component: D1Divider,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: DividerWikiStorybook.getDescription()
      }
    }
  },
  argTypes: DividerWikiStorybook.getWiki(),
  args: DividerWikiStorybook.getValues()
} satisfies Meta<typeof D1Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Divider: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Divider },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
      <div>Top content block</div>
      <D1Divider v-bind="args"/>
      <div>Bottom content block</div>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const dividerElement = canvasElement.querySelector<HTMLElement>('.d1-divider')
    await expect(dividerElement).toBeInTheDocument()
    await expect(dividerElement).toHaveAttribute('role', 'separator')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const DividerBasic: Story = {
  name: 'Базовое разделение',
  render: () => ({
    components: { D1Divider },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <div>Section A</div>
          <D1Divider data-testid="divider-basic"/>
          <div>Section B</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const dividerElement = canvasElement.querySelector<HTMLElement>('[data-testid="divider-basic"]')
    await expect(dividerElement).toBeInTheDocument()
    await expect(dividerElement).toHaveClass('d1-divider')
    await expect(dividerElement).toHaveAttribute('role', 'separator')
  }
}
export const DividerTestSemanticsAndAttrs: Story = {
  name: 'Тест: Переопределение ARIA role, сквозные атрибуты и expose elementHtml',
  render: () => ({
    components: { D1Divider },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <D1Divider
              ref="dividerReference"
              aria-label="Content boundary"
              class="custom-divider-class"
              style="--divider-test: 1;"
              data-testid="divider-default-role"
            />
            <D1Divider
              role="presentation"
              data-testid="divider-presentation-role"
            />
          </div>
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="inspectDivider">Inspect Divider</button>
            <span data-testid="divider-tag-output">{{ inspectedTag }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const defaultDivider = canvasElement.querySelector<HTMLElement>('[data-testid="divider-default-role"]')
    const decorativeDivider = canvasElement.querySelector<HTMLElement>('[data-testid="divider-presentation-role"]')

    await expect(defaultDivider).toHaveClass('d1-divider')
    await expect(defaultDivider).toHaveClass('custom-divider-class')
    await expect(defaultDivider).toHaveAttribute('role', 'separator')
    await expect(defaultDivider).toHaveAttribute('aria-label', 'Content boundary')
    expect(defaultDivider?.style.getPropertyValue('--divider-test').trim()).toBe('1')

    await expect(decorativeDivider).toHaveClass('d1-divider')
    await expect(decorativeDivider).toHaveAttribute('role', 'presentation')

    await step('Inspect expose().elementHtml', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect Divider' }))
      await expect(canvasElement.querySelector('[data-testid="divider-tag-output"]')).toHaveTextContent('div')
    })
  }
}
// :story-items [!] System label / Системная метка
