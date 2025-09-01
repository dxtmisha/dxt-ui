import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Menu from './D1Menu.vue'
import { MenuWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Menu',
  component: D1Menu,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuWikiStorybook.getWiki(),
  args: MenuWikiStorybook.getValues()
} satisfies Meta<typeof D1Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Menu: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Menu },
    setup: () => ({ args }),
    template: `
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuAjax: Story = {
  name: 'AJAX Загрузка',
  render: () => ({
    components: { D1Menu },
    setup() {
      const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([
          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
          {label: 'Users', value: 'users', icon: 'people'},
          {label: 'Settings', value: 'settings', icon: 'settings'},
          {label: 'Reports', value: 'reports', icon: 'assessment'}
        ]), 512))

        return { loadMenuData }
    },
    template: `
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    `
  })
}
// :story-items [!] System label / Системная метка
