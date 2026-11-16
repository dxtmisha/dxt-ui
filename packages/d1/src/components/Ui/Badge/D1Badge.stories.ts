import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Badge from './D1Badge.vue'
import { BadgeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { expect } from 'storybook/test'
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
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-badge')
    await expect(component).toBeInTheDocument()
  }
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
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-badge')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveTextContent('Badge')
    await expect(items[0]).toHaveClass('d1-badge--overlap--static')
    await expect(items[1].querySelector('.d1-badge__icon')).toBeInTheDocument()
    await expect(items[2]).toHaveTextContent('99')
    await expect(items[3]).toHaveTextContent('99+')
  }
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
  }),
  play: async ({ canvasElement }) => {
    const item = canvasElement.querySelector<HTMLElement>('.d1-badge')
    await expect(item).toBeInTheDocument()
    await expect(item).toHaveClass('d1-badge--dot')
    await expect(item).not.toHaveClass('d1-badge--hideAuto')
    await expect(item?.querySelector('.d1-badge__label')).toBeNull()
  }
}
export const BadgeOverlap: Story = {
  name: 'Перекрытие и позиционирование',
  render: () => ({
    components: { D1Badge },
    template: `
        
        <div class="wiki-storybook-flex">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge label="1" overlap="rectangular" vertical="top" horizontal="right"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge label="2" overlap="circular" vertical="bottom" horizontal="left"/>
          </div>
          <D1Badge label="Static" overlap="static"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-badge')
    await expect(items.length).toBe(3)

    await expect(items[0]).toHaveClass('d1-badge--overlap--rectangular')
    await expect(items[0]).toHaveClass('d1-badge--vertical--top')
    await expect(items[0]).toHaveClass('d1-badge--horizontal--right')

    await expect(items[1]).toHaveClass('d1-badge--overlap--circular')
    await expect(items[1]).toHaveClass('d1-badge--vertical--bottom')
    await expect(items[1]).toHaveClass('d1-badge--horizontal--left')

    await expect(items[2]).toHaveClass('d1-badge--overlap--static')
  }
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
export const BadgeTestNumbersAndFormatting: Story = {
  name: 'Тест: Ноль, labelMax, форматирование и язык',
  render: () => ({
    components: { D1Badge },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static" :label="0"/>
          <D1Badge overlap="static" label="0"/>
          <D1Badge overlap="static" :label="12500" :label-max="9999" formatting language="en-US"/>
          <D1Badge overlap="static" label="12500" formatting language="ru-RU"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-badge')
    await expect(items.length).toBe(4)

    await expect(items[0]).not.toHaveClass('d1-badge--hideAuto')
    await expect(items[0]).toHaveTextContent('0')

    await expect(items[1]).not.toHaveClass('d1-badge--hideAuto')
    await expect(items[1]).toHaveTextContent('0')

    await expect(items[2]).toHaveTextContent('9,999+')
    await expect(items[3].textContent?.replace(/\s/g, ' ')).toContain('12 500')
  }
}
export const BadgeTestIconsAndSlots: Story = {
  name: 'Тест: Конфигурация иконок и слот default',
  render: () => ({
    components: { D1Badge },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static" icon="home"/>
          <D1Badge overlap="static" :icon="{ icon: 'star' }"/>
          <D1Badge overlap="static" icon="expand_more" icon-turn label="Turn"/>
          <D1Badge overlap="static" icon="mail" icon-hide label="Hidden Icon"/>
          <D1Badge overlap="static" icon="mail" icon-palette icon-dir :icon-attrs="{ 'data-icon-custom': 'yes' }"/>
          <D1Badge overlap="static" icon="mail">Custom Slot</D1Badge>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-badge')
    await expect(items.length).toBe(6)

    await expect(items[0].querySelector('.d1-badge__icon')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-badge__icon')).toBeInTheDocument()
    await expect(items[2]).toHaveTextContent('Turn')
    await expect(items[2].querySelector('.d1-badge__icon')).toBeInTheDocument()
    await expect(items[3]).toHaveTextContent('Hidden Icon')
    await expect(items[4].querySelector('[data-icon-custom="yes"]')).toBeInTheDocument()
    await expect(items[5]).toHaveTextContent('Custom Slot')
    await expect(items[5].querySelector('.d1-badge__icon')).toBeInTheDocument()
  }
}
export const BadgeTestStatesAndA11y: Story = {
  name: 'Тест: Состояния (selected, hide, autoHide) и ARIA-атрибуты',
  render: () => ({
    components: { D1Badge },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Badge overlap="static" selected label="Selected"/>
          <D1Badge overlap="static" hide label="Hidden"/>
          <D1Badge overlap="static" selected hide label="Selected Hidden"/>
          <D1Badge overlap="static" dot selected hide label="Ignored" icon="home"/>
          <D1Badge overlap="static" label=""/>
          <D1Badge overlap="static" label="3" label-id="wiki-badge-label-id" aria-label="3 unread notifications"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-badge')
    await expect(items.length).toBe(6)

    await expect(items[0]).toHaveClass('d1-badge--selected')
    await expect(items[0]).not.toHaveClass('d1-badge--hideAuto')

    await expect(items[1]).toHaveClass('d1-badge--hide')
    await expect(items[2]).toHaveClass('d1-badge--selected')
    await expect(items[2]).toHaveClass('d1-badge--hide')

    await expect(items[3]).toHaveClass('d1-badge--dot')
    await expect(items[3]).toHaveClass('d1-badge--selected')
    await expect(items[3]).toHaveClass('d1-badge--hide')
    await expect(items[3].querySelector('.d1-badge__label')).toBeNull()
    await expect(items[3].querySelector('.d1-badge__icon')).toBeNull()

    await expect(items[4]).toHaveClass('d1-badge--hideAuto')

    await expect(items[5]).toHaveAttribute('aria-label', '3 unread notifications')
    const innerLabel = items[5].querySelector('.d1-badge__label')
    await expect(innerLabel).toHaveAttribute('id', 'wiki-badge-label-id')
    await expect(innerLabel).toHaveAttribute('aria-hidden', 'true')
  }
}
export const BadgeTestPositions: Story = {
  name: 'Тест: Варианты вертикального и горизонтального выравнивания',
  render: () => ({
    components: { D1Badge },
    template: `
        
        <div class="wiki-storybook-flex">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge dot vertical="top" horizontal="left"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge dot vertical="top" horizontal="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge dot vertical="center" horizontal="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge dot vertical="bottom" horizontal="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <D1Badge dot vertical="bottom" horizontal="right"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-badge')
    await expect(items.length).toBe(5)

    await expect(items[0]).toHaveClass('d1-badge--vertical--top')
    await expect(items[0]).toHaveClass('d1-badge--horizontal--left')

    await expect(items[1]).toHaveClass('d1-badge--vertical--top')
    await expect(items[1]).toHaveClass('d1-badge--horizontal--center')

    await expect(items[2]).toHaveClass('d1-badge--vertical--center')
    await expect(items[2]).toHaveClass('d1-badge--horizontal--center')

    await expect(items[3]).toHaveClass('d1-badge--vertical--bottom')
    await expect(items[3]).toHaveClass('d1-badge--horizontal--center')

    await expect(items[4]).toHaveClass('d1-badge--vertical--bottom')
    await expect(items[4]).toHaveClass('d1-badge--horizontal--right')
  }
}
// :story-items [!] System label / Системная метка
