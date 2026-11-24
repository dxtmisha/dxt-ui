import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Breadcrumbs from './D1Breadcrumbs.vue'
import { BreadcrumbsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Breadcrumbs',
  component: D1Breadcrumbs,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BreadcrumbsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BreadcrumbsWikiStorybook.getWiki(),
  args: BreadcrumbsWikiStorybook.getValues()
} satisfies Meta<typeof D1Breadcrumbs>

export default meta

type Story = StoryObj<typeof meta>

export const Breadcrumbs: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Breadcrumbs },
    setup: () => ({ args }),
    template: `
      <D1Breadcrumbs v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-breadcrumbs')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('NAV')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BreadcrumbsBasic: Story = {
  name: 'Базовая навигационная цепочка',
  render: () => ({
    components: { D1Breadcrumbs },
    template: `
        
        <D1Breadcrumbs
          data-testid="breadcrumbs-basic"
          text-breadcrumb="Documentation Trail"
          :list="[
            { label: 'Home', icon: 'home', href: '#home' },
            { label: 'Components', href: '#components' },
            { label: 'Breadcrumbs' }
          ]"
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const nav = canvasElement.querySelector('[data-testid="breadcrumbs-basic"]')
    await expect(nav?.tagName).toBe('NAV')
    await expect(nav).toHaveAttribute('aria-label', 'Documentation Trail')
    const items = nav?.querySelectorAll('.d1-breadcrumbs__item') ?? []
    await expect(items.length).toBe(3)
    await expect(items[0]?.tagName).toBe('A')
    await expect(items[2]?.tagName).toBe('SPAN')
    await expect(items[2]).toHaveAttribute('aria-current', 'page')
  }
}
export const BreadcrumbsSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Breadcrumbs, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Breadcrumbs
            data-testid="breadcrumbs-skeleton"
            isSkeleton
            :list="[
              { label: 'Home', icon: 'home' },
              { label: 'Components' },
              { label: 'Breadcrumbs' }
            ]"
          />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const nav = canvasElement.querySelector('[data-testid="breadcrumbs-skeleton"]')
    await expect(nav).toBeInTheDocument()
    await expect(nav?.querySelectorAll('.d1-breadcrumbs__item').length).toBe(3)
  }
}
export const BreadcrumbsTestItemAttrsAndEvents: Story = {
  name: 'Тест: itemAttrs, интерактивный последний шаг, disabled, числовой ноль и события клика',
  render: () => ({
    components: { D1Breadcrumbs },
    setup() {
      const lastClicked = ref('')
      const onTrailClick = (payload: { value?: unknown }) => {
        lastClicked.value = String(payload.value ?? '')
      }
      return { lastClicked, onTrailClick }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Breadcrumbs
            data-testid="breadcrumbs-test"
            :item-attrs="{ iconArrowRight: 'arrow_forward' }"
            :list="[
              { label: 'Root', value: 'root-step' },
              { label: 'Disabled', value: 'disabled-step', disabled: true },
              { label: 0, value: 0 }
            ]"
            @click-lite="onTrailClick"
          />
          <D1Breadcrumbs
            data-testid="breadcrumbs-back"
            :list="[{ label: 'Back to Catalog', href: '#catalog', back: true, readonly: false }]"
          />
          <div data-testid="breadcrumbs-test-clicked">{{ lastClicked }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const nav = canvasElement.querySelector('[data-testid="breadcrumbs-test"]')
    const items = nav?.querySelectorAll('.d1-breadcrumbs__item') ?? []
    await expect(items.length).toBe(3)
    await expect(items[1]).toHaveAttribute('aria-disabled', 'true')
    await expect(items[2]?.tagName).toBe('SPAN')
    await expect(items[2]).toHaveAttribute('aria-current', 'page')
    await expect(items[2]).toHaveTextContent('0')

    const backItem = canvasElement.querySelector('[data-testid="breadcrumbs-back"] .d1-breadcrumbs__item')
    await expect(backItem?.tagName).toBe('A')

    await step('Click interactive first item and verify clickLite payload', async () => {
      const firstItem = items[0]
      if (firstItem) {
        await userEvent.click(firstItem)
      }
      await expect(canvasElement.querySelector('[data-testid="breadcrumbs-test-clicked"]')).toHaveTextContent('root-step')
    })
  }
}
// :story-items [!] System label / Системная метка
