import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SelectValue from './D1SelectValue.vue'
import { SelectValueWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SelectValue',
  component: D1SelectValue,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectValueWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectValueWikiStorybook.getWiki(),
  args: SelectValueWikiStorybook.getValues()
} satisfies Meta<typeof D1SelectValue>

export default meta

type Story = StoryObj<typeof meta>

export const SelectValue: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SelectValueBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1SelectValue },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <D1SelectValue placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <D1SelectValue :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <D1SelectValue
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
