import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TabItem from './D1TabItem.vue'
import { TabItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TabItem',
  component: D1TabItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TabItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TabItemWikiStorybook.getWiki(),
  args: TabItemWikiStorybook.getValues()
} satisfies Meta<typeof D1TabItem>

export default meta

type Story = StoryObj<typeof meta>

export const TabItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TabItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
        <D1TabItem v-bind="args"/>
        <D1TabItem v-bind="args"/>
        <D1TabItem v-bind="args"/>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TabItemBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1TabItem },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <D1TabItem label="Tab 1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Active</div>
            <D1TabItem label="Tab 2" active/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Disabled</div>
            <D1TabItem label="Tab 3" disabled/>
          </div>
        </div>
    `
  })
}
export const TabItemIcons: Story = {
  name: 'С иконками',
  render: () => ({
    components: { D1TabItem },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Icon</div>
            <D1TabItem label="Home" icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Trailing Icon</div>
            <D1TabItem label="Settings" icon-trailing="settings"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Both Icons</div>
            <D1TabItem label="Profile" icon="person" icon-trailing="arrow_drop_down"/>
          </div>
        </div>
    `
  })
}
export const TabItemBadge: Story = {
  name: 'С бейджем',
  render: () => ({
    components: { D1TabItem },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Badge</div>
            <D1TabItem label="Messages" badge="5"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Dot Badge</div>
            <D1TabItem label="Updates" badge dot/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
