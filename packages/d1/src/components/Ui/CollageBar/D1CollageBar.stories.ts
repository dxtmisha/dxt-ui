import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CollageBar from './D1CollageBar.vue'
import { CollageBarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CollageBar',
  component: D1CollageBar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CollageBarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CollageBarWikiStorybook.getWiki(),
  args: CollageBarWikiStorybook.getValues()
} satisfies Meta<typeof D1CollageBar>

export default meta

type Story = StoryObj<typeof meta>

export const CollageBar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageBarPositions: Story = {
  name: 'Позиции',
  render: () => ({
    components: { D1CollageBar },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="static"
              label="Static Bar"
              description="Standard caption layout"
              button="Action"
              icon="visibility"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="top"
              label="Top Overlay Bar"
              description="Gradient scrim at the top"
              icon="more_vert"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="bottom"
              label="Bottom Overlay Bar"
              description="Gradient scrim at the bottom"
              button="View"
              icon="visibility"
            />
          </div>
        </div>
    `
  })
}
export const CollageBarSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1CollageBar },
    template: `
        <D1CollageBar>
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #body>Body slot</template>
          <template #trailing>Trailing slot</template>
        </D1CollageBar>
    `
  })
}
// :story-items [!] System label / Системная метка
