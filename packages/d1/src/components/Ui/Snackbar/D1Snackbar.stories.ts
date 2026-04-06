import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Snackbar from './D1Snackbar.vue'
import { SnackbarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Snackbar',
  component: D1Snackbar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SnackbarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SnackbarWikiStorybook.getWiki(),
  args: SnackbarWikiStorybook.getValues()
} satisfies Meta<typeof D1Snackbar>

export default meta

type Story = StoryObj<typeof meta>

export const Snackbar: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Snackbar },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <D1Snackbar ref="snackbar" v-bind="args" />
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
