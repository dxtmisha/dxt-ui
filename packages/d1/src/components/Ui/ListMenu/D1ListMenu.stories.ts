import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ListMenu from './D1ListMenu.vue'
import { ListMenuWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ListMenu',
  component: D1ListMenu,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ListMenuWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ListMenuWikiStorybook.getWiki(),
  args: ListMenuWikiStorybook.getValues()
} satisfies Meta<typeof D1ListMenu>

export default meta

type Story = StoryObj<typeof meta>

export const ListMenu: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ListMenu },
    setup: () => ({ args }),
    template: `
      <D1ListMenu v-bind="args">
      <template v-slot:head="{binds}">
        <span v-bind="binds">Primary menu header with expand/collapse toggle</span>
      </template>
      <template v-slot:list>
        <div class="wiki-storybook-item--padding">
          <h4>Menu Content</h4>
          <p>Navigation elements providing access to application sections.</p>

          <ul>
            <li><strong>Dashboard</strong> - Main control panel</li>
            <li><strong>Content</strong> - Content management</li>
            <li><strong>Analytics</strong> - Data analysis tools</li>
          </ul>

          <p>Supports nested submenus and adapts to user permissions.</p>
        </div>
      </template>
    </D1ListMenu>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
