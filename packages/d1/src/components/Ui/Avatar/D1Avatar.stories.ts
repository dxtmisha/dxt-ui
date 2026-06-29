import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Avatar from './D1Avatar.vue'
import { AvatarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Avatar',
  component: D1Avatar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AvatarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AvatarWikiStorybook.getWiki(),
  args: AvatarWikiStorybook.getValues()
} satisfies Meta<typeof D1Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AvatarBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Avatar },
    template: `
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    `
  })
}
export const AvatarReduction: Story = {
  name: 'Сокращение (reduction)',
  render: () => ({
    components: { D1Avatar },
    template: `
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    `
  })
}
export const AvatarSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Avatar, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :isSkeleton="true" label="JD"/>
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
