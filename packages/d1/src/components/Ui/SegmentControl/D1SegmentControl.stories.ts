import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SegmentControl from './D1SegmentControl.vue'
import { SegmentControlWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
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
  })
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
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Segment 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Segment 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Segment 3</button>
          </div>

          <D1SegmentControl :list="list" v-model:selected="selected"/>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
