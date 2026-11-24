import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bullet from './D1Bullet.vue'
import { BulletWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import D1BulletItem from '../BulletItem/D1BulletItem.vue'
import { expect } from 'storybook/test'
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
  render: (args: any) => ({
    components: { D1Bullet },
    setup: () => ({ args }),
    template: `
      <D1Bullet v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-bullet')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('UL')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BulletHtml: Story = {
  name: 'Содержимое HTML',
  render: () => ({
    components: { D1Bullet },
    template: `
        
        <D1Bullet
          data-testid="bullet-html"
          html="<li>First parsed item with <strong>emphasis</strong></li><li class='custom-li'>Second parsed item</li>"
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const list = canvasElement.querySelector('[data-testid="bullet-html"]')
    const items = list?.querySelectorAll('li') ?? []
    await expect(items.length).toBe(2)
    await expect(items[0]).toHaveTextContent('First parsed item with emphasis')
    await expect(items[1]?.classList.contains('custom-li')).toBe(true)
  }
}
export const BulletSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Bullet, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Bullet
            data-testid="bullet-skeleton"
            isSkeleton
            :list="['Loading bullet item one', 'Loading bullet item two']"
          />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const list = canvasElement.querySelector('[data-testid="bullet-skeleton"]')
    const items = list?.querySelectorAll('li') ?? []
    await expect(items.length).toBe(2)
  }
}
export const BulletTestAttrsAndSlot: Story = {
  name: 'Тест: Числовой ноль, проброс itemAttrs и слот default',
  render: () => ({
    components: { D1Bullet, D1BulletItem },
    template: `
        
        <D1Bullet
          data-testid="bullet-attrs-slot"
          :list="['Primary item', 0]"
          :item-attrs="{ 'data-shared': 'yes' }"
        >
          <D1BulletItem data-testid="bullet-slot-child" description="Appended slot item" />
        </D1Bullet>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const list = canvasElement.querySelector('[data-testid="bullet-attrs-slot"]')
    const items = list?.querySelectorAll('li') ?? []
    await expect(items.length).toBe(3)
    await expect(items[0]?.getAttribute('data-shared')).toBe('yes')
    await expect(items[1]).toHaveTextContent('0')
    await expect(canvasElement.querySelector('[data-testid="bullet-slot-child"]')).toHaveTextContent('Appended slot item')
  }
}
// :story-items [!] System label / Системная метка
