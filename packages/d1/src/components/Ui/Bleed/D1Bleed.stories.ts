import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bleed from './D1Bleed.vue'
import { BleedWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
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
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
