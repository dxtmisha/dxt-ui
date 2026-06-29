import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bullet from './D1Bullet.vue'
import { BulletWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Bullet',
  component: D1Bullet,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BulletWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BulletWikiStorybook.getWiki(),
  args: BulletWikiStorybook.getValues()
} satisfies Meta<typeof D1Bullet>

export default meta

type Story = StoryObj<typeof meta>

export const Bullet: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
