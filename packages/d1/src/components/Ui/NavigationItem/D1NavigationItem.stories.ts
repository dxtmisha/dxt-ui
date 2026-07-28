import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationItem from './D1NavigationItem.vue'
import { NavigationItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationItem',
  component: D1NavigationItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationItemWikiStorybook.getWiki(),
  args: NavigationItemWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationItem>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
