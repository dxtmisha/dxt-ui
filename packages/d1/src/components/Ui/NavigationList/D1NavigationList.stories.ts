import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationList from './D1NavigationList.vue'
import { NavigationListWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationList',
  component: D1NavigationList,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationListWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationListWikiStorybook.getWiki(),
  args: NavigationListWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationList>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationList: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
