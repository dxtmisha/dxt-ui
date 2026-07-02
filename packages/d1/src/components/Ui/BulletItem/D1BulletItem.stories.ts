import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1BulletItem from './D1BulletItem.vue'
import { BulletItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/BulletItem',
  component: D1BulletItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BulletItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BulletItemWikiStorybook.getWiki(),
  args: BulletItemWikiStorybook.getValues()
} satisfies Meta<typeof D1BulletItem>

export default meta

type Story = StoryObj<typeof meta>

export const BulletItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1BulletItem },
    setup: () => ({ args }),
    template: `
      <ul style="list-style: none">
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
    </ul>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
