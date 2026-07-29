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
export const NavigationListHighlight: Story = {
  name: 'Выделение',
  render: () => ({
    components: { D1NavigationList },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationList
              :list="[
                {label: 'User Management', value: 'users', icon: 'people'},
                {label: 'Role Permissions', value: 'roles', icon: 'security'},
                {label: 'System Logs', value: 'logs', icon: 'receipt_long'}
              ]"
              highlight="manag"
              :highlightLengthStart="4"
            />
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
