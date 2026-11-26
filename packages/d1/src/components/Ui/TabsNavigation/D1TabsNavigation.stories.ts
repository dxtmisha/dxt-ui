import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TabsNavigation from './D1TabsNavigation.vue'
import { TabsNavigationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { TabsNavigationExpose } from '@dxtmisha/constructor/TabsNavigation'
import { expect, within, userEvent } from 'storybook/test'
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
  }),
  play: async ({ canvasElement }) => {
    const tablist = canvasElement.querySelector('[role="tablist"]')
    await expect(tablist).toBeInTheDocument()
    await expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')
  }
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
  }),
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelectorAll('[role="tab"]')
    await expect(tabs.length).toBe(3)
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  }
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
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="tabs-nav-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
          </div>

          <D1TabsNavigation :list="list" v-model:selected="selected"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('tabs-nav-value')).toHaveTextContent('1')
    await step('Select Tab 3 programmatically', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Select Tab 3' }))
      await expect(canvas.getByTestId('tabs-nav-value')).toHaveTextContent('3')
    })
  }
}
export const TabsNavigationTestSlotsKeysAndExpose: Story = {
  name: 'Тест: Слоты, кастомные ключи, разделитель, itemAttrs и expose ids()',
  render: () => ({
    components: { D1TabsNavigation },
    setup() {
      const navigationReference = ref<TabsNavigationExpose | null>(null)
      const selectedKey = ref<number>(0)
      const idsCount = ref<number>(0)
      const customList = [
        { id: 0, title: 'Zero' },
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ]
      const readIds = () => {
        idsCount.value = Object.keys(navigationReference.value?.ids() ?? {}).length
      }
      return { navigationReference, selectedKey, idsCount, customList, readIds }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="readIds">Read IDs</button>
            <span data-testid="tabs-nav-ids-count">{{ idsCount }}</span>
          </div>
          <D1TabsNavigation
            ref="navigationReference"
            v-model:selected="selectedKey"
            :list="customList"
            :divider="false"
            keyValue="id"
            keyLabel="title"
            tag="span"
            :itemAttrs="{ 'data-tab-custom': 'true' }"
          >
            <template #leading><span data-testid="tabs-leading">Lead</span></template>
            <template #trailing><span data-testid="tabs-trailing">Trail</span></template>
          </D1TabsNavigation>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('tabs-leading')).toHaveTextContent('Lead')
    await expect(canvas.getByTestId('tabs-trailing')).toHaveTextContent('Trail')
    const customTabs = canvasElement.querySelectorAll('[data-tab-custom="true"]')
    await expect(customTabs.length).toBe(3)
    await expect(customTabs[0].tagName).toBe('SPAN')
    await expect(customTabs[0]).toHaveAttribute('aria-selected', 'true')

    await step('Read expose ids() count', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Read IDs' }))
      await expect(canvas.getByTestId('tabs-nav-ids-count')).toHaveTextContent('3')
    })
  }
}
// :story-items [!] System label / Системная метка
