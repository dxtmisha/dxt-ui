import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ButtonGroup from './D1ButtonGroup.vue'
import { ButtonGroupWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ButtonGroup',
  component: D1ButtonGroup,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ButtonGroupWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ButtonGroupWikiStorybook.getWiki(),
  args: ButtonGroupWikiStorybook.getValues()
} satisfies Meta<typeof D1ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const ButtonGroup: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ButtonGroupSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1ButtonGroup },
    template: `
        <D1ButtonGroup>
          <template #default>
            Default Slot
          </template>
        </D1ButtonGroup>
    `
  })
}
// :story-items [!] System label / Системная метка
