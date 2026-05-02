import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ClientOnly from './D1ClientOnly.vue'
import { ClientOnlyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ClientOnly',
  component: D1ClientOnly,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ClientOnlyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ClientOnlyWikiStorybook.getWiki(),
  args: ClientOnlyWikiStorybook.getValues()
} satisfies Meta<typeof D1ClientOnly>

export default meta

type Story = StoryObj<typeof meta>

export const ClientOnly: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ClientOnly },
    setup: () => ({ args }),
    template: `
      <D1ClientOnly>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </D1ClientOnly>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
