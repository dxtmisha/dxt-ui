import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Actions from './D1Actions.vue'
import { ActionsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Actions',
  component: D1Actions,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ActionsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ActionsWikiStorybook.getWiki(),
  args: ActionsWikiStorybook.getValues()
} satisfies Meta<typeof D1Actions>

export default meta

type Story = StoryObj<typeof meta>

export const Actions: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ActionsSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Actions },
    template: `
        <D1Actions>
          <template #secondary>
            Secondary Slot
          </template>
          <template #default>
            Default Slot
          </template>
        </D1Actions>
    `
  })
}
// :story-items [!] System label / Системная метка
