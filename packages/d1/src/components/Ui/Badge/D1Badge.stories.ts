import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Badge from './D1Badge.vue'
import { BadgeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Badge',
  component: D1Badge,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BadgeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BadgeWikiStorybook.getWiki(),
  args: BadgeWikiStorybook.getValues()
} satisfies Meta<typeof D1Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Badge: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Badge },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <D1Badge v-bind="args"/>
        </div>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BadgeBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Badge },
    template: `
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static">Badge</D1Badge>
          <D1Badge overlap="static" icon="home">Badge</D1Badge>
          <D1Badge overlap="static">99</D1Badge>
          <D1Badge overlap="static" label="999" label-max="99"/>
        </div>
    `
  })
}
export const BadgeDot: Story = {
  name: 'Точечные (dot)',
  render: () => ({
    components: { D1Badge },
    template: `
        <div class="wiki-storybook-flex">
          <D1Badge dot overlap="static"/>
        </div>
    `
  })
}
export const BadgePrimary: Story = {
  name: 'Основные (primary)',
  render: () => ({
    components: { D1Badge },
    template: `
        <div class="wiki-storybook-flex">
          <D1Badge primary overlap="static" icon="home"/>
          <D1Badge primary overlap="static">Badge</D1Badge>
        </div>
    `
  })
}
export const BadgeSecondary: Story = {
  name: 'Второстепенные (secondary)',
  render: () => ({
    components: { D1Badge },
    template: `
        <div class="wiki-storybook-flex">
          <D1Badge secondary overlap="static" icon="home"/>
          <D1Badge secondary overlap="static">Badge</D1Badge>
        </div>
    `
  })
}
export const BadgeOutline: Story = {
  name: 'Контурные (outline)',
  render: () => ({
    components: { D1Badge },
    template: `
        <div class="wiki-storybook-flex">
          <D1Badge outline overlap="static" icon="home"/>
          <D1Badge outline overlap="static">Badge</D1Badge>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
