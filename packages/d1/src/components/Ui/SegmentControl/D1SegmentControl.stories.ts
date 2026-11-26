import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SegmentControl from './D1SegmentControl.vue'
import { SegmentControlWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { SegmentControlExpose } from '@dxtmisha/constructor/SegmentControl'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SegmentControl',
  component: D1SegmentControl,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SegmentControlWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SegmentControlWikiStorybook.getWiki(),
  args: SegmentControlWikiStorybook.getValues()
} satisfies Meta<typeof D1SegmentControl>

export default meta

type Story = StoryObj<typeof meta>

export const SegmentControl: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SegmentControl },
    setup: () => ({ args }),
    template: `
      <D1SegmentControl v-bind="args"/>
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
export const SegmentControlVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1SegmentControl },
    setup() {
      const list = [
        { label: 'Segment 1', value: '1' },
        { label: 'Segment 2', value: '2' },
        { label: 'Segment 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="segment-control-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('segment-control-value')).toHaveTextContent('1')
    await step('Select Segment 3 programmatically', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Select Segment 3' }))
      await expect(canvas.getByTestId('segment-control-value')).toHaveTextContent('3')
    })
  }
}
export const SegmentControlTestSlotsKeysAndExpose: Story = {
  name: 'Тест: Слоты, кастомные ключи, разделитель, itemAttrs и expose ids()',
  render: () => ({
    components: { D1SegmentControl },
    setup() {
      const segmentControlReference = ref<SegmentControlExpose | null>(null)
      const selectedKey = ref<number>(0)
      const idsCount = ref<number>(0)
      const customList = [
        { id: 0, title: 'Zero' },
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ]
      const readIds = () => {
        idsCount.value = Object.keys(segmentControlReference.value?.ids() ?? {}).length
      }
      return { segmentControlReference, selectedKey, idsCount, customList, readIds }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="readIds">Read IDs</button>
            <span data-testid="segment-control-ids-count">{{ idsCount }}</span>
          </div>
          <D1SegmentControl
            ref="segmentControlReference"
            v-model:selected="selectedKey"
            :list="customList"
            :divider="true"
            keyValue="id"
            keyLabel="title"
            tag="span"
            :itemAttrs="{ 'data-segment-custom': 'true' }"
          >
            <template #leading><span data-testid="segment-leading">Lead</span></template>
            <template #trailing><span data-testid="segment-trailing">Trail</span></template>
          </D1SegmentControl>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('segment-leading')).toHaveTextContent('Lead')
    await expect(canvas.getByTestId('segment-trailing')).toHaveTextContent('Trail')
    const customSegments = canvasElement.querySelectorAll('[data-segment-custom="true"]')
    await expect(customSegments.length).toBe(3)
    await expect(customSegments[0].tagName).toBe('SPAN')
    await expect(customSegments[0]).toHaveAttribute('aria-selected', 'true')

    await step('Read expose ids() count', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Read IDs' }))
      await expect(canvas.getByTestId('segment-control-ids-count')).toHaveTextContent('3')
    })
  }
}
// :story-items [!] System label / Системная метка
