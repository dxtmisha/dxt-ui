import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bleed from './D1Bleed.vue'
import { BleedWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { expect } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Bleed',
  component: D1Bleed,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BleedWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BleedWikiStorybook.getWiki(),
  args: BleedWikiStorybook.getValues()
} satisfies Meta<typeof D1Bleed>

export default meta

type Story = StoryObj<typeof meta>

export const Bleed: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Bleed },
    setup: () => ({ args }),
    template: `
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
      </D1Bleed>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-bleed')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('DIV')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BleedTags: Story = {
  name: 'Семантические HTML-теги',
  render: () => ({
    components: { D1Bleed },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Bleed tag="section">
            <p>Bleed rendered as a section element</p>
          </D1Bleed>
          <D1Bleed tag="article">
            <p>Bleed rendered as an article element</p>
          </D1Bleed>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-bleed')
    await expect(items.length).toBe(2)
    await expect(items[0].tagName).toBe('SECTION')
    await expect(items[1].tagName).toBe('ARTICLE')
  }
}
export const BleedTestAttributes: Story = {
  name: 'Тест: Тег по умолчанию и слияние внешних атрибутов',
  render: () => ({
    components: { D1Bleed },
    template: `
        
        <div class="wiki-storybook-group">
          <D1Bleed class="custom-bleed-class" data-testid="bleed-default">
            <span>Default Bleed Content</span>
          </D1Bleed>
          <D1Bleed tag="figure" data-testid="bleed-figure">
            <span>Figure Bleed Content</span>
          </D1Bleed>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const defaultBleed = canvasElement.querySelector<HTMLElement>('[data-testid="bleed-default"]')
    const figureBleed = canvasElement.querySelector<HTMLElement>('[data-testid="bleed-figure"]')

    await expect(defaultBleed?.tagName).toBe('DIV')
    await expect(defaultBleed).toHaveClass('d1-bleed')
    await expect(defaultBleed).toHaveClass('custom-bleed-class')
    await expect(defaultBleed).toHaveTextContent('Default Bleed Content')

    await expect(figureBleed?.tagName).toBe('FIGURE')
    await expect(figureBleed).toHaveClass('d1-bleed')
    await expect(figureBleed).toHaveTextContent('Figure Bleed Content')
  }
}
// :story-items [!] System label / Системная метка
