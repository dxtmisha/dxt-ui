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
        <div
          style="
            position: relative;
            width: 256px;
            height: 128px;
            border-radius: 16px;
            background-color: oklch(93.2% 0.032 255.585);
            border: 2px solid oklch(80.9% 0.105 251.813);
            box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
          "
        >
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
          <div style="position: relative; width: 256px; height: 128px; border-radius: 16px; background-color: oklch(0.692 0.16 240.379 / 0.64); border: 4px solid #00a2ee; overflow: auto; padding: 8px;">
            <p style="margin: 0;">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
            </p>
            <D1Arrow v-bind="args"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
