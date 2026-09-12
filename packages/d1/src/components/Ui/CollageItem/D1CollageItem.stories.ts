import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CollageItem from './D1CollageItem.vue'
import { CollageItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CollageItem',
  component: D1CollageItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CollageItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CollageItemWikiStorybook.getWiki(),
  args: CollageItemWikiStorybook.getValues()
} satisfies Meta<typeof D1CollageItem>

export default meta

type Story = StoryObj<typeof meta>

export const CollageItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CollageItem },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group wiki-storybook-group--col4">
      <D1CollageItem v-bind="args"/>
    </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageItemSpans: Story = {
  name: 'Варианты Bento-охвата',
  render: () => ({
    components: { D1CollageItem },
    template: `
        <div class="wiki-storybook-group wiki-storybook-group--col4">
          <D1CollageItem
            image="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
            span="wide"
            label="Wide Item"
            description="2 columns x 1 row"
          />
          <D1CollageItem
            image="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80"
            span="wide"
            selected
            label="Selected Item"
            description="2 columns x 1 row (selected)"
          />
          <D1CollageItem
            image="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80"
            span="tall"
            label="Tall Item"
            description="1 column x 2 rows"
          />
          <D1CollageItem
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            span="large"
            label="Large Item"
            description="2 columns x 2 rows"
          />
          <D1CollageItem
            image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
            span="banner"
            label="Banner Item"
            description="3 columns x 1 row"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
