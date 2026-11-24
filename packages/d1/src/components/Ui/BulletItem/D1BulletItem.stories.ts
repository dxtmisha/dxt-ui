import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1BulletItem from './D1BulletItem.vue'
import { BulletItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { expect } from 'storybook/test'
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
      <ul style="margin: 0; padding: 0; list-style: none">
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
      <D1BulletItem v-bind="args"/>
    </ul>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-bulletItem')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('LI')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BulletItemBasic: Story = {
  name: 'Базовое использование и слоты',
  render: () => ({
    components: { D1BulletItem },
    template: `
        
        <ul style="margin: 0; padding: 0; list-style: none">
          <D1BulletItem data-testid="bi-prop" description="Bullet item from description prop" />
          <D1BulletItem data-testid="bi-desc-slot">
            <template #description>Bullet item from description slot</template>
          </D1BulletItem>
          <D1BulletItem data-testid="bi-default-slot">
            <span>Bullet item from default slot</span>
          </D1BulletItem>
        </ul>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="bi-prop"]')).toHaveTextContent('Bullet item from description prop')
    await expect(canvasElement.querySelector('[data-testid="bi-desc-slot"]')).toHaveTextContent('Bullet item from description slot')
    await expect(canvasElement.querySelector('[data-testid="bi-default-slot"]')).toHaveTextContent('Bullet item from default slot')
  }
}
export const BulletItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1BulletItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <ul style="margin: 0; padding: 0; list-style: none">
            <D1BulletItem data-testid="bi-skeleton" isSkeleton description="Loading bullet item" />
          </ul>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const item = canvasElement.querySelector('[data-testid="bi-skeleton"]')
    await expect(item).toBeInTheDocument()
    await expect(item?.querySelector('.d1-bulletItem__description')).toBeInTheDocument()
  }
}
export const BulletItemTestBoundaries: Story = {
  name: 'Тест: Явный descriptionId, числовой ноль и пустой элемент',
  render: () => ({
    components: { D1BulletItem },
    template: `
        
        <ul style="margin: 0; padding: 0; list-style: none">
          <D1BulletItem
            data-testid="bi-id"
            description="Identified bullet"
            description-id="wiki-bullet-desc-id"
          />
          <D1BulletItem
            data-testid="bi-zero"
            :description="0"
          />
          <D1BulletItem data-testid="bi-empty" />
        </ul>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('#wiki-bullet-desc-id')).toHaveTextContent('Identified bullet')
    await expect(canvasElement.querySelector('[data-testid="bi-zero"]')).toHaveTextContent('0')
    await expect(canvasElement.querySelector('[data-testid="bi-empty"] .d1-bulletItem__description')).toBeNull()
  }
}
// :story-items [!] System label / Системная метка
