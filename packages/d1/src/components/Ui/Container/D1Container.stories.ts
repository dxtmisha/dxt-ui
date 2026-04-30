import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Container from './D1Container.vue'
import { ContainerWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Container',
  component: D1Container,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ContainerWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ContainerWikiStorybook.getWiki(),
  args: ContainerWikiStorybook.getValues()
} satisfies Meta<typeof D1Container>

export default meta

type Story = StoryObj<typeof meta>

export const Container: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Container },
    setup: () => ({ args }),
    template: `
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
