import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1NavigationRail from './D1NavigationRail.vue'
import { NavigationRailWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/NavigationRail',
  component: D1NavigationRail,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: NavigationRailWikiStorybook.getDescription()
      }
    }
  },
  argTypes: NavigationRailWikiStorybook.getWiki(),
  args: NavigationRailWikiStorybook.getValues()
} satisfies Meta<typeof D1NavigationRail>

export default meta

type Story = StoryObj<typeof meta>

export const NavigationRail: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const NavigationRailBasic: Story = {
  name: 'Базовая панель навигации',
  render: () => ({
    components: { D1NavigationRail },
    template: `
        <D1NavigationRail
          :list="[
            { label: 'Home', value: 'home', icon: 'home' },
            { label: 'Search', value: 'search', icon: 'search' },
            { label: 'Settings', value: 'settings', icon: 'settings' }
          ]"
        />
    `
  })
}
// :story-items [!] System label / Системная метка
