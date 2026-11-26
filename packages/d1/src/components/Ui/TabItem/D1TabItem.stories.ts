import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TabItem from './D1TabItem.vue'
import { TabItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
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
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-tabItem')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveAttribute('role', 'tab')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TabItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1TabItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1TabItem isSkeleton>Tab item</D1TabItem>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const item = canvasElement.querySelector('.d1-tabItem')
      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent('Tab item')
    })
  }
}
export const TabItemTestStates: Story = {
  name: 'Тест: Состояния, ARIA-атрибуты и комбинированные модификаторы',
  render: () => ({
    components: { D1TabItem },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">selected</div>
            <D1TabItem label="Selected Tab" selected/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">disabled + selected</div>
            <D1TabItem label="Disabled Selected" disabled selected/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">readonly + focus + open</div>
            <D1TabItem label="Readonly Focus Open" readonly focus open/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">adaptive iconAlways + icons + badge</div>
            <D1TabItem label="Adaptive" icon="home" iconTrailing="chevron_right" badge="3" adaptive="iconAlways"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const items = canvasElement.querySelectorAll('.d1-tabItem')
      expect(items.length).toBe(4)

      expect(items[0]).toHaveClass('d1-tabItem--selected')
      expect(items[0]).toHaveAttribute('aria-selected', 'true')
      expect(items[0]).toHaveAttribute('type', 'button')

      expect(items[1]).toHaveClass('d1-tabItem--disabled')
      expect(items[1]).toHaveClass('d1-tabItem--selected')
      expect(items[1]).toHaveAttribute('aria-disabled', 'true')

      expect(items[2]).toHaveClass('d1-tabItem--readonly')
      expect(items[2]).toHaveClass('d1-tabItem--focus')
      expect(items[2]).toHaveClass('d1-tabItem--open')

      expect(items[3]).toHaveClass('d1-tabItem--adaptive--iconAlways')
    })
  }
}
export const TabItemTestLinksAndEvents: Story = {
  name: 'Тест: Теги, ссылки, события клика и нулевая метка',
  render: () => ({
    components: { D1TabItem },
    setup() {
      const lastClickedValue = ref('')
      const onTabClick = (_event: MouseEvent, payload: EventClickValue) => {
        lastClickedValue.value = String(payload.value ?? '')
      }
      return { lastClickedValue, onTabClick }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="tab-item-event-value">{{ lastClickedValue }}</div>
          <div class="wiki-storybook-flex">
            <D1TabItem label="Action Tab" value="tab-action" @click="onTabClick"/>
            <D1TabItem label="Blocked Tab" value="tab-blocked" disabled @click="onTabClick"/>
            <D1TabItem label="Link Tab" href="#tab-section"/>
            <D1TabItem :label="0" tag="span" role="menuitem"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const items = canvasElement.querySelectorAll('.d1-tabItem')
    await expect(items.length).toBe(4)

    await expect(items[2].tagName).toBe('A')
    await expect(items[2]).toHaveAttribute('href', '#tab-section')
    await expect(items[3].tagName).toBe('SPAN')
    await expect(items[3]).toHaveAttribute('role', 'menuitem')
    await expect(items[3]).toHaveTextContent('0')

    await step('Click enabled tab item emits click payload', async () => {
      await userEvent.click(items[0])
      await expect(canvas.getByTestId('tab-item-event-value')).toHaveTextContent('tab-action')
    })

    await step('Click disabled tab item does not emit click', async () => {
      await userEvent.click(items[1])
      await expect(canvas.getByTestId('tab-item-event-value')).toHaveTextContent('tab-action')
    })
  }
}
// :story-items [!] System label / Системная метка
