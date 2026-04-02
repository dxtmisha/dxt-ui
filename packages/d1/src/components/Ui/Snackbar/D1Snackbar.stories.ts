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
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SnackbarBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Snackbar },
    template: `
        <div class="wiki-storybook-flex">
          <D1Snackbar ref="snackbar" />
          <D1Button 
            label="Add Snackbar" 
            primary 
            @click="() => $refs.snackbar.add({ label: 'Basic message' })" 
          />
        </div>
    `
  })
}
export const SnackbarPosition: Story = {
  name: 'Позиционирование',
  render: () => ({
    components: { D1Snackbar },
    template: `
        <div class="wiki-storybook-flex">
          <D1Button 
            label="Top Left" 
            outline 
            @click="() => $refs.snackbarTopLeft.add({ label: 'Top Left message' })" 
          />
          <D1Button 
            label="Bottom Right" 
            outline 
            @click="() => $refs.snackbarBottomRight.add({ label: 'Bottom Right message' })" 
          />
          
          <D1Snackbar ref="snackbarTopLeft" vertical="top" horizontal="left" />
          <D1Snackbar ref="snackbarBottomRight" vertical="bottom" horizontal="right" />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
