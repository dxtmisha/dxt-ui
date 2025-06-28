import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Image from './D1Image.vue'
import { ImageWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Image',
  component: D1Image,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ImageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ImageWikiStorybook.getWiki(),
  args: ImageWikiStorybook.getValues()
} satisfies Meta<typeof D1Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Image },
    setup: () => ({ args }),
    template: `
      <div style="position: relative; width: 128px; height: 128px; border: 1px solid #ccc;">
        <D1Image v-bind="args"/>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
