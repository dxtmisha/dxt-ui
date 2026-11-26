import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SegmentControlItem from './D1SegmentControlItem.vue'
import { SegmentControlItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SegmentControlItem',
  component: D1SegmentControlItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SegmentControlItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SegmentControlItemWikiStorybook.getWiki(),
  args: SegmentControlItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SegmentControlItem>

export default meta

type Story = StoryObj<typeof meta>

export const SegmentControlItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SegmentControlItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1SegmentControlItem v-bind="args"/>
      <D1SegmentControlItem v-bind="args"/>
      <D1SegmentControlItem v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-segmentControlItem')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveAttribute('role', 'tab')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SegmentControlItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1SegmentControlItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1SegmentControlItem isSkeleton>Segment control item</D1SegmentControlItem>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const item = canvasElement.querySelector('.d1-segmentControlItem')
      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent('Segment control item')
    })
  }
}
export const SegmentControlItemTestStatesAndEvents: Story = {
  name: 'Тест: Состояния, ссылки, ARIA-атрибуты и события клика',
  render: () => ({
    components: { D1SegmentControlItem },
    setup() {
      const clickedSegmentValue = ref('')
      const onSegmentClick = (_event: MouseEvent, payload: EventClickValue) => {
        clickedSegmentValue.value = String(payload.value ?? '')
      }
      return { clickedSegmentValue, onSegmentClick }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card" data-testid="segment-item-clicked">{{ clickedSegmentValue }}</div>
          <div class="wiki-storybook-flex">
            <D1SegmentControlItem label="Selected" value="seg-selected" selected @click="onSegmentClick"/>
            <D1SegmentControlItem label="Disabled" value="seg-disabled" disabled selected @click="onSegmentClick"/>
            <D1SegmentControlItem label="Readonly" value="seg-readonly" readonly focus open @click="onSegmentClick"/>
            <D1SegmentControlItem label="Link" href="#segment-link"/>
            <D1SegmentControlItem :label="0" tag="span" role="menuitem"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const items = canvasElement.querySelectorAll('.d1-segmentControlItem')
    await expect(items.length).toBe(5)

    await expect(items[0]).toHaveClass('d1-segmentControlItem--selected')
    await expect(items[0]).toHaveAttribute('aria-selected', 'true')
    await expect(items[1]).toHaveClass('d1-segmentControlItem--disabled')
    await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[2]).toHaveClass('d1-segmentControlItem--readonly')
    await expect(items[3].tagName).toBe('A')
    await expect(items[4].tagName).toBe('SPAN')
    await expect(items[4]).toHaveTextContent('0')

    await step('Click active segment item and verify blocked disabled item', async () => {
      await userEvent.click(items[0])
      await expect(canvas.getByTestId('segment-item-clicked')).toHaveTextContent('seg-selected')
      await userEvent.click(items[1])
      await expect(canvas.getByTestId('segment-item-clicked')).toHaveTextContent('seg-selected')
    })
  }
}
// :story-items [!] System label / Системная метка
