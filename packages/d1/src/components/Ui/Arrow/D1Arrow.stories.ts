import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Arrow from './D1Arrow.vue'
import { ArrowWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Arrow',
  component: D1Arrow,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ArrowWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ArrowWikiStorybook.getWiki(),
  args: ArrowWikiStorybook.getValues()
} satisfies Meta<typeof D1Arrow>

export default meta

type Story = StoryObj<typeof meta>

export const Arrow: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Arrow },
    setup: () => ({ args }),
    template: `
      <div
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
      >
        <div style="width: 256px; height: 128px; border-radius: 16px; background-color: oklch(0.692 0.16 240.379 / 0.64)">
          <D1Arrow v-bind="args"/>
        </div>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ArrowBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Arrow },
    template: `
        <div
          class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
        >
          <div style="position: relative; width: 256px; height: 128px; border-radius: 16px; background-color: oklch(0.692 0.16 240.379 / 0.64); border: 4px solid #00a2ee;">
            <D1Arrow v-bind="args"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
