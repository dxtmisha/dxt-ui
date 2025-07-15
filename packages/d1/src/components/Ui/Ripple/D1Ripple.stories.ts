import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Ripple from './D1Ripple.vue'
import { RippleWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Ripple',
  component: D1Ripple,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: RippleWikiStorybook.getDescription()
      }
    }
  },
  argTypes: RippleWikiStorybook.getWiki(),
  args: RippleWikiStorybook.getValues()
} satisfies Meta<typeof D1Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Ripple },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Ripple v-bind="args"/>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
