import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Placeholder from './D1Placeholder.vue'
import { PlaceholderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { image1 } from '@dxtmisha/wiki/media'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Placeholder',
  component: D1Placeholder,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PlaceholderWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PlaceholderWikiStorybook.getWiki(),
  args: PlaceholderWikiStorybook.getValues()
} satisfies Meta<typeof D1Placeholder>

export default meta

type Story = StoryObj<typeof meta>

export const Placeholder: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PlaceholderBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1Placeholder },
    setup() {
      return {
          image1
        }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    `
  })
}
export const PlaceholderSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Placeholder },
    setup() {
      return {
          image1
        }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Placeholder>
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
            <template #context>
              <span>Context Slot (overrides default/label and description)</span>
            </template>
          </D1Placeholder>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
