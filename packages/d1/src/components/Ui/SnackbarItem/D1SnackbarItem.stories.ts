import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SnackbarItem from './D1SnackbarItem.vue'
import { SnackbarItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SnackbarItem',
  component: D1SnackbarItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SnackbarItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SnackbarItemWikiStorybook.getWiki(),
  args: SnackbarItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SnackbarItem>

export default meta

type Story = StoryObj<typeof meta>

export const SnackbarItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SnackbarItemBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1SnackbarItem },
    template: `
        <div class="wiki-storybook-group">
          <D1SnackbarItem
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry', primary: true }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
