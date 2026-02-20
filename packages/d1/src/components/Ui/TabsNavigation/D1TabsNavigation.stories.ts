import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TabsNavigation from './D1TabsNavigation.vue'
import { TabsNavigationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
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
  render: (args: any) => ({
    components: { D1TabsNavigation },
    setup: () => ({ args }),
    template: `
      <D1TabsNavigation v-bind="args"/>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TabsNavigationBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1TabsNavigation },
    setup() {
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('2')
      return { list, selected }
    },
    template: `
        <D1TabsNavigation :list="list" v-model:selected="selected"/>
    `
  })
}
export const TabsNavigationVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1TabsNavigation },
    setup() {
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
    },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
              <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
              <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
            </div>
            <div class="wiki-storybook-item--padding">
              Current value: {{ selected }}
            </div>
            <D1TabsNavigation :list="list" v-model:selected="selected"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
