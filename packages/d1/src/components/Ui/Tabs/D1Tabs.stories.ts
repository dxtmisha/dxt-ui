import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Tabs from './D1Tabs.vue'
import { TabsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { MotionAxisEmitOptions } from '@dxtmisha/constructor/MotionAxis'
import type { TabsExpose } from '@dxtmisha/constructor/Tabs'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Tabs',
  component: D1Tabs,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TabsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TabsWikiStorybook.getWiki(),
  args: TabsWikiStorybook.getValues()
} satisfies Meta<typeof D1Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Tabs },
    setup: () => ({ args }),
    template: `
      <D1Tabs v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</D1Tabs>
    `
  }),
  play: async ({ canvasElement }) => {
    const tablist = canvasElement.querySelector<HTMLElement>('[role="tablist"]')
    await expect(tablist).toBeInTheDocument()
    await expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')

    const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
    await expect(tabs.length).toBeGreaterThan(0)

    const tabpanel = canvasElement.querySelector<HTMLElement>('[role="tabpanel"]')
    await expect(tabpanel).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TabsBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1Tabs },
    template: `
        
        <D1Tabs
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' },
            { label: 'Settings', value: 'settings' }
          ]"
          selected="home"
        >
          <template #home>Home section content</template>
          <template #profile>Profile section content</template>
          <template #settings>Settings section content</template>
        </D1Tabs>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const tablist = canvasElement.querySelector<HTMLElement>('[role="tablist"]')
    await expect(tablist).toBeInTheDocument()
    await expect(tablist).toHaveAttribute('aria-orientation', 'horizontal')

    const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
    await expect(tabs.length).toBe(3)
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false')

    const initialPanel = canvasElement.querySelector<HTMLElement>('[role="tabpanel"]')
    await expect(initialPanel).toBeInTheDocument()
    await expect(initialPanel).toHaveTextContent('Home section content')

    await step('Switch to Profile tab by click', async () => {
      await userEvent.click(tabs[1])
      await waitFor(() => {
        expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
        const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
        const hasProfilePanel = Array.from(panels).some(panel => panel.textContent?.includes('Profile section content'))
        expect(hasProfilePanel).toBe(true)
      })
    })
  }
}
export const TabsVModel: Story = {
  name: 'Двусторонняя привязка (v-model:selected)',
  render: () => ({
    components: { D1Tabs },
    setup() {
      const selected = ref('tab1')
      const tabList = [
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
        { label: 'Tab 3', value: 'tab3' }
      ]
      return {
        selected,
        tabList
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="tabs-vmodel-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Select Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Select Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Select Tab 3</button>
          </div>

          <D1Tabs
            :tabs="tabList"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </D1Tabs>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('tabs-vmodel-value')).toHaveTextContent('tab1')

    await step('Switch to Tab 3 programmatically', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Select Tab 3' }))
      await waitFor(() => {
        expect(canvas.getByTestId('tabs-vmodel-value')).toHaveTextContent('tab3')
        const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
        const hasContent3 = Array.from(panels).some(panel => panel.textContent?.includes('Content 3'))
        expect(hasContent3).toBe(true)
      })
    })

    await step('Switch to Tab 2 by clicking tab item', async () => {
      const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
      await userEvent.click(tabs[1])
      await waitFor(() => {
        expect(canvas.getByTestId('tabs-vmodel-value')).toHaveTextContent('tab2')
        expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
      })
    })
  }
}
export const TabsSkeleton: Story = {
  name: 'Состояние скелетона',
  render: () => ({
    components: { D1Tabs, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Tabs
            :tabs="[
              { label: 'Overview', value: 'overview' },
              { label: 'Activity', value: 'activity' },
              { label: 'Reports', value: 'reports' }
            ]"
            :tab-item-attrs="{ isSkeleton: true }"
            selected="overview"
          >
            <template #overview>Loading overview...</template>
            <template #activity>Loading activity...</template>
            <template #reports>Loading reports...</template>
          </D1Tabs>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const tablist = canvasElement.querySelector<HTMLElement>('[role="tablist"]')
    await expect(tablist).toBeInTheDocument()
    const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
    await expect(tabs.length).toBe(3)
    const tabpanel = canvasElement.querySelector<HTMLElement>('[role="tabpanel"]')
    await expect(tabpanel).toBeInTheDocument()
  }
}
export const TabsTestConfigAndKeys: Story = {
  name: 'Тест: Объект конфигурации, кастомные ключи (числовой 0), разделитель и tabsNavigationAttrs',
  render: () => ({
    components: { D1Tabs },
    setup() {
      const numericTabsConfig = {
        list: [
          { id: 0, title: 'Zero' },
          { id: 1, title: 'One' },
          { id: 2, title: 'Two' }
        ],
        keyValue: 'id',
        keyLabel: 'title',
        divider: true
      }

      const customNavigationAttrs = {
        list: [
          { code: 'alpha', name: 'Alpha' },
          { code: 'beta', name: 'Beta' }
        ],
        keyValue: 'code',
        keyLabel: 'name',
        divider: true,
        tag: 'span'
      }

      return {
        numericTabsConfig,
        customNavigationAttrs
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div data-testid="tabs-numeric-block">
            <D1Tabs :tabs="numericTabsConfig">
              <template #0>Zero slide content</template>
              <template #1>One slide content</template>
              <template #2>Two slide content</template>
            </D1Tabs>
          </div>

          <div data-testid="tabs-navigation-attrs-block">
            <D1Tabs
              :tabs-navigation-attrs="customNavigationAttrs"
              :tab-item-attrs="{ 'data-tab-custom': 'true' }"
            >
              <template #alpha>Alpha slide content</template>
              <template #beta>Beta slide content</template>
            </D1Tabs>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const numericBlock = canvas.getByTestId('tabs-numeric-block')
    const numericTabs = numericBlock.querySelectorAll<HTMLElement>('[role="tab"]')
    await expect(numericTabs.length).toBe(3)
    await expect(numericTabs[0]).toHaveAttribute('aria-selected', 'true')
    await expect(numericTabs[0]).toHaveTextContent('Zero')
    await expect(numericBlock.querySelector('[role="tabpanel"]')).toHaveTextContent('Zero slide content')

    await step('Switch from numeric 0 to numeric 1 tab', async () => {
      await userEvent.click(numericTabs[1])
      await waitFor(() => {
        expect(numericTabs[1]).toHaveAttribute('aria-selected', 'true')
        const panels = numericBlock.querySelectorAll<HTMLElement>('[role="tabpanel"]')
        const hasOnePanel = Array.from(panels).some(panel => panel.textContent?.includes('One slide content'))
        expect(hasOnePanel).toBe(true)
      })
    })

    const navigationBlock = canvas.getByTestId('tabs-navigation-attrs-block')
    const customTabs = navigationBlock.querySelectorAll<HTMLElement>('[data-tab-custom="true"]')
    await expect(customTabs.length).toBe(2)
    await expect(customTabs[0].tagName).toBe('SPAN')
    await expect(customTabs[0]).toHaveAttribute('aria-selected', 'true')
    await expect(navigationBlock.querySelector('[role="tabpanel"]')).toHaveTextContent('Alpha slide content')

    await step('Switch custom tabsNavigationAttrs tab to Beta', async () => {
      await userEvent.click(customTabs[1])
      await waitFor(() => {
        expect(customTabs[1]).toHaveAttribute('aria-selected', 'true')
        const panels = navigationBlock.querySelectorAll<HTMLElement>('[role="tabpanel"]')
        const hasBetaPanel = Array.from(panels).some(panel => panel.textContent?.includes('Beta slide content'))
        expect(hasBetaPanel).toBe(true)
      })
    })
  }
}
export const TabsTestControlledEventsAndExpose: Story = {
  name: 'Тест: Управляемый selected, события и expose API',
  render: () => ({
    components: { D1Tabs },
    setup() {
      const tabsReference = ref<TabsExpose | null>(null)
      const currentTab = ref<ListSelectedList>('first')
      const lastClickSummary = ref('none')
      const lastClickLiteSummary = ref('none')
      const motionAxisCount = ref(0)
      const exposeSummary = ref('none')

      const tabItems = [
        { label: 'First', value: 'first', detail: { section: 'intro' } },
        { label: 'Second', value: 'second', detail: { section: 'details' } },
        { label: 'Third', value: 'third', detail: { section: 'summary' } }
      ]

      const onUpdateSelected = (nextSelected: ListSelectedList) => {
        currentTab.value = nextSelected
      }

      const onTabClick = (_event: MouseEvent, options: EventClickValue) => {
        lastClickSummary.value = String(options.value) + ':' + String(options.detail?.section ?? '')
      }

      const onTabClickLite = (options: EventClickValue) => {
        lastClickLiteSummary.value = String(options.value)
      }

      const onMotionAxis = (_options: MotionAxisEmitOptions) => {
        motionAxisCount.value += 1
      }

      const inspectExpose = () => {
        const hasGetValue = typeof tabsReference.value?.getValue === 'function'
        const hasGetDetail = typeof tabsReference.value?.getDetail === 'function'
        tabsReference.value?.getValue?.()
        tabsReference.value?.getDetail?.()
        exposeSummary.value = String(hasGetValue) + '|' + String(hasGetDetail)
      }

      return {
        tabsReference,
        currentTab,
        lastClickSummary,
        lastClickLiteSummary,
        motionAxisCount,
        exposeSummary,
        tabItems,
        onUpdateSelected,
        onTabClick,
        onTabClickLite,
        onMotionAxis,
        inspectExpose
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="inspectExpose">Inspect expose</button>
            <span data-testid="tabs-controlled-selected">{{ currentTab }}</span>
            <span data-testid="tabs-click-output">{{ lastClickSummary }}</span>
            <span data-testid="tabs-click-lite-output">{{ lastClickLiteSummary }}</span>
            <span data-testid="tabs-motion-count">{{ motionAxisCount }}</span>
            <span data-testid="tabs-expose-output">{{ exposeSummary }}</span>
          </div>

          <D1Tabs
            ref="tabsReference"
            :tabs="tabItems"
            :selected="currentTab"
            @update:selected="onUpdateSelected"
            @click="onTabClick"
            @click-lite="onTabClickLite"
            @motion-axis="onMotionAxis"
          >
            <template #first>First panel content</template>
            <template #second>Second panel content</template>
            <template #third>Third panel content</template>
          </D1Tabs>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('tabs-controlled-selected')).toHaveTextContent('first')

    await step('Click second tab and verify controlled update and click events', async () => {
      const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
      await userEvent.click(tabs[1])
      await waitFor(() => {
        expect(canvas.getByTestId('tabs-controlled-selected')).toHaveTextContent('second')
        expect(canvas.getByTestId('tabs-click-output')).toHaveTextContent('second:details')
        expect(canvas.getByTestId('tabs-click-lite-output')).toHaveTextContent('second')
        const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
        const hasSecondPanel = Array.from(panels).some(panel => panel.textContent?.includes('Second panel content'))
        expect(hasSecondPanel).toBe(true)
      })
    })

    await step('Verify exposed getValue() and getDetail() methods', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Inspect expose' }))
      await expect(canvas.getByTestId('tabs-expose-output')).toHaveTextContent('true|true')
    })
  }
}
export const TabsTestStatesAndMotionAxis: Story = {
  name: 'Тест: Отключенные, загружаемые вкладки, ARIA-связь и motionAxisAttrs',
  render: () => ({
    components: { D1Tabs },
    setup() {
      const selected = ref('active')
      const stateTabs = [
        { label: 'Active', value: 'active' },
        { label: 'Disabled', value: 'disabled', disabled: true },
        { label: 'Loading', value: 'loading', loading: true },
        { label: 'Available', value: 'available' }
      ]
      return {
        selected,
        stateTabs
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <span data-testid="tabs-state-selected">{{ selected }}</span>
          <D1Tabs
            :tabs="stateTabs"
            v-model:selected="selected"
            :motion-axis-attrs="{ axis: 'y', inDom: true, animationHeight: true }"
          >
            <template #active>Active panel</template>
            <template #disabled>Disabled panel</template>
            <template #loading>Loading panel</template>
            <template #available>Available panel</template>
          </D1Tabs>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const tabs = canvasElement.querySelectorAll<HTMLElement>('[role="tab"]')
    await expect(tabs.length).toBe(4)

    const panels = canvasElement.querySelectorAll<HTMLElement>('[role="tabpanel"]')
    await expect(panels.length).toBe(4)

    const firstTabId = tabs[0].getAttribute('id')
    await expect(firstTabId).toBeTruthy()
    await expect(panels[0]).toHaveAttribute('aria-labelledby', firstTabId!)

    await step('Clicking disabled tab keeps current selection and verifies motionAxisAttrs', async () => {
      await expect(tabs[1]).toHaveAttribute('aria-disabled', 'true')
      await userEvent.click(tabs[1])
      await expect(canvas.getByTestId('tabs-state-selected')).toHaveTextContent('active')
      await expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      const motionAxisElement = canvasElement.querySelector<HTMLElement>('.d1-motionAxis')
      await expect(motionAxisElement?.className).toContain('--axis--y')
    })

    await step('Clicking available tab switches selection', async () => {
      await userEvent.click(tabs[3])
      await waitFor(() => {
        expect(canvas.getByTestId('tabs-state-selected')).toHaveTextContent('available')
        expect(tabs[3]).toHaveAttribute('aria-selected', 'true')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
