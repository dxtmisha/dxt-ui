import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Grid from './D1Grid.vue'
import { GridWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Grid',
  component: D1Grid,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: GridWikiStorybook.getDescription()
      }
    }
  },
  argTypes: GridWikiStorybook.getWiki(),
  args: GridWikiStorybook.getValues()
} satisfies Meta<typeof D1Grid>

export default meta

type Story = StoryObj<typeof meta>

export const Grid: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Grid },
    setup: () => ({ args }),
    template: `
      <D1Grid>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </D1Grid>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
