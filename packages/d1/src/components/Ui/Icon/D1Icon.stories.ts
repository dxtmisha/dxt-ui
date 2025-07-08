import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Icon from './D1Icon.vue'
import { IconWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Icon',
  component: D1Icon,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: IconWikiStorybook.getDescription()
      }
    }
  },
  argTypes: IconWikiStorybook.getWiki(),
  args: IconWikiStorybook.getValues()
} satisfies Meta<typeof D1Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const IconState: Story = {
  name: IconWikiStorybook.getStoryName('IconState'),
  render: () => ({
    components: { D1Icon },
    
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Icon icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Icon icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
    `
  })
}
export const IconShape: Story = {
  name: IconWikiStorybook.getStoryName('IconShape'),
  render: () => ({
    components: { D1Icon },
    
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Rect</div>
            <D1Icon icon="apps" rect overlay/>
          </div>
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Circle</div>
            <D1Icon icon="person" circle overlay/>
          </div>
          <div class="wiki-storybook-item">
            <div class="wiki-storybook-item__label">Square</div>
            <D1Icon icon="square" square overlay/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
