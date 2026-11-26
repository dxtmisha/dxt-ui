import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SkeletonItem from './D1SkeletonItem.vue'
import { SkeletonItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { expect, within } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SkeletonItem',
  component: D1SkeletonItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SkeletonItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SkeletonItemWikiStorybook.getWiki(),
  args: SkeletonItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SkeletonItem>

export default meta

type Story = StoryObj<typeof meta>

export const SkeletonItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SkeletonItem },
    setup: () => ({ args }),
    template: `
      <D1SkeletonItem v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const item = canvasElement.querySelector('.d1-skeletonItem')
    await expect(item).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SkeletonItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1SkeletonItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." text/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." textVariant/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." background/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." backgroundVariant/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." border/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." borderVariant/>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-skeletonItem')
    await expect(items.length).toBe(6)
    await expect(items[0]).toHaveTextContent('Lorem ipsum dolor sit amet...')
  }
}
export const SkeletonItemTestPropsAndSecurity: Story = {
  name: 'Тест: Теги, форматы length, метка 0, itemAttrs, ARIA и защита от XSS',
  render: () => ({
    components: { D1SkeletonItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="false">
          <div class="wiki-storybook-flex-column">
            <D1SkeletonItem tag="h4" text :label="0" data-testid="skeleton-zero"/>
            <D1SkeletonItem tag="span" textVariant :length="4" data-testid="skeleton-decorative"/>
            <D1SkeletonItem tag="p" text :length="[2, 5]" aria-label="Loading summary" data-testid="skeleton-aria"/>
            <D1SkeletonItem text length="Custom length string" :itemAttrs="{ 'data-custom': 'yes' }" data-testid="skeleton-attrs"/>
            <D1SkeletonItem text label="<img src=x onerror=alert(1)>" data-testid="skeleton-xss"/>
            <D1SkeletonItem background data-testid="skeleton-slot"><span>Custom Slot</span></D1SkeletonItem>
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const zeroItem = canvas.getByTestId('skeleton-zero')
    await expect(zeroItem.tagName).toBe('H4')
    await expect(zeroItem).toHaveTextContent('0')
    await expect(zeroItem).not.toHaveAttribute('aria-hidden')

    const decorativeItem = canvas.getByTestId('skeleton-decorative')
    await expect(decorativeItem.tagName).toBe('SPAN')
    await expect(decorativeItem).toHaveAttribute('aria-hidden', 'true')

    const ariaItem = canvas.getByTestId('skeleton-aria')
    await expect(ariaItem).toHaveAttribute('aria-label', 'Loading summary')
    await expect(ariaItem).not.toHaveAttribute('aria-hidden')

    const attrsItem = canvas.getByTestId('skeleton-attrs')
    await expect(attrsItem).toHaveAttribute('data-custom', 'yes')
    await expect(attrsItem).toHaveTextContent('Custom length string')

    const xssItem = canvas.getByTestId('skeleton-xss')
    await expect(xssItem.querySelector('img')).toBeNull()
    await expect(xssItem).toHaveTextContent('<img src=x onerror=alert(1)>')

    const slotItem = canvas.getByTestId('skeleton-slot')
    await expect(slotItem).toHaveTextContent('Custom Slot')
  }
}
// :story-items [!] System label / Системная метка
