import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Avatar from './D1Avatar.vue'
import { AvatarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Avatar',
  component: D1Avatar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AvatarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AvatarWikiStorybook.getWiki(),
  args: AvatarWikiStorybook.getValues()
} satisfies Meta<typeof D1Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
