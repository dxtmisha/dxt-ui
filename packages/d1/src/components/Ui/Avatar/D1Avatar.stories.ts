import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Avatar from './D1Avatar.vue'
import { AvatarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { image1, image2 } from '@dxtmisha/wiki/media'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { AvatarExpose as AvatarExposeType } from '@dxtmisha/constructor/Avatar'
import { expect, userEvent } from 'storybook/test'
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
  render: (args: any) => ({
    components: { D1Avatar },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex">
      <D1Avatar v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-avatar')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AvatarBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Avatar },
    setup() {
      return { image1 }
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar :image="image1" aria-label="User Image"/>
          <D1Avatar label="Online User" badge-dot/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-avatar')
    await expect(items.length).toBe(3)
    await expect(items[0]).toHaveTextContent('JD')
    await expect(items[1]).toHaveAttribute('aria-label', 'User Image')
    await expect(items[2]).toHaveTextContent('OU')
  }
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
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-avatar')
    await expect(items.length).toBe(2)
    await expect(items[0]).toHaveTextContent('ИИ')
    await expect(items[1]).toHaveTextContent('Иван Иванович')
  }
}
export const AvatarSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Avatar, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :is-skeleton="true" label="John Doe"/>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-avatar')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveTextContent('JD')
  }
}
export const AvatarEvents: Story = {
  name: 'События и Expose API',
  render: () => ({
    components: { D1Avatar },
    setup() {
      const avatarElement = ref<AvatarExposeType | null>(null)
      const clickedValue = ref<string>('none')
      const onClickLite = (payload: EventClickValue) => {
        clickedValue.value = String(payload.value ?? 'empty')
      }
      return { avatarElement, clickedValue, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1Avatar
              ref="avatarElement"
              label="Alex Kim"
              value="user-99"
              :detail="{ role: 'admin' }"
              @click-lite="onClickLite"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="avatar-event-output">
            Clicked: {{ clickedValue }}
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const avatar = canvasElement.querySelector<HTMLElement>('.d1-avatar')
    await expect(avatar).toBeInTheDocument()
    await userEvent.click(avatar!)
    await expect(canvasElement.querySelector('[data-testid="avatar-event-output"]')).toHaveTextContent('Clicked: user-99')
  }
}
export const AvatarTestStatesAndLinks: Story = {
  name: 'Тест: Состояния, ссылки, бейджи, ноль и Unicode',
  render: () => ({
    components: { D1Avatar },
    setup() {
      return { image2 }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">disabled + readonly</div>
            <D1Avatar label="Disabled User" disabled/>
            <D1Avatar label="Readonly User" readonly/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">focus + link</div>
            <D1Avatar label="Focus User" focus/>
            <D1Avatar label="Anchor User" href="#avatar-link"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">zero + unicode + badge</div>
            <D1Avatar :label="0" :badge="0"/>
            <D1Avatar label="Nguyễn Văn" :image="image2" aria-label="Vietnamese User" label-id="avatar-custom-id"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-avatar')
    await expect(items.length).toBe(6)

    await expect(items[0]).toHaveClass('d1-avatar--disabled')
    await expect(items[0]).toHaveAttribute('role', 'img')

    await expect(items[1]).toHaveClass('d1-avatar--readonly')
    await expect(items[1]).toHaveAttribute('role', 'img')

    await expect(items[2]).toHaveClass('d1-avatar--focus')
    await expect(items[3].tagName).toBe('A')
    await expect(items[3]).not.toHaveAttribute('role')

    await expect(items[4]).toHaveTextContent('0')
    await expect(items[5]).toHaveAttribute('aria-label', 'Vietnamese User')
    await expect(canvasElement.querySelector('#avatar-custom-id')).toBeInTheDocument()
  }
}
// :story-items [!] System label / Системная метка
