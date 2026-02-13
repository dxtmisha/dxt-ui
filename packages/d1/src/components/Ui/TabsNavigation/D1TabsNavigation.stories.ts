import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TabsNavigation from './D1TabsNavigation.vue'
import { TabsNavigationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TabsNavigation',
  component: D1TabsNavigation,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TabsNavigationWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TabsNavigationWikiStorybook.getWiki(),
  args: TabsNavigationWikiStorybook.getValues()
} satisfies Meta<typeof D1TabsNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const TabsNavigation: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
