import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1BreadcrumbItem from './D1BreadcrumbItem.vue'
import { BreadcrumbItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/BreadcrumbItem',
  component: D1BreadcrumbItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BreadcrumbItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BreadcrumbItemWikiStorybook.getWiki(),
  args: BreadcrumbItemWikiStorybook.getValues()
} satisfies Meta<typeof D1BreadcrumbItem>

export default meta

type Story = StoryObj<typeof meta>

export const BreadcrumbItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1BreadcrumbItem },
    setup: () => ({ args }),
    template: `
      <D1BreadcrumbItem v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-breadcrumbItem')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BreadcrumbItemBasic: Story = {
  name: 'Состояния шага (ссылка, блокировка, текущая страница и возврат)',
  render: () => ({
    components: { D1BreadcrumbItem },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1BreadcrumbItem data-testid="crumb-basic-link" label="Home" icon="home" href="#home" />
          <D1BreadcrumbItem data-testid="crumb-basic-disabled" label="Archived" disabled />
          <D1BreadcrumbItem data-testid="crumb-basic-readonly" label="Current Page" readonly />
          <D1BreadcrumbItem data-testid="crumb-basic-back" label="Back to Parent" back href="#parent" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const link = canvasElement.querySelector('[data-testid="crumb-basic-link"]')
    const disabled = canvasElement.querySelector('[data-testid="crumb-basic-disabled"]')
    const readonlyItem = canvasElement.querySelector('[data-testid="crumb-basic-readonly"]')
    const backItem = canvasElement.querySelector('[data-testid="crumb-basic-back"]')

    await expect(link?.tagName).toBe('A')
    await expect(link).toHaveAttribute('href', '#home')
    await expect(disabled).toHaveAttribute('aria-disabled', 'true')
    await expect(readonlyItem?.tagName).toBe('SPAN')
    await expect(readonlyItem).toHaveAttribute('aria-current', 'page')
    await expect(readonlyItem?.querySelector('.d1-breadcrumbItem__iconArrow')).toBeNull()
    await expect(backItem).toHaveClass('d1-breadcrumbItem--back')
  }
}
export const BreadcrumbItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1BreadcrumbItem, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1BreadcrumbItem data-testid="crumb-skeleton" isSkeleton icon="home" label="Breadcrumb item" />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const item = canvasElement.querySelector('[data-testid="crumb-skeleton"]')
    await expect(item).toBeInTheDocument()
    await expect(item?.querySelector('.d1-breadcrumbItem__label')).toBeInTheDocument()
  }
}
export const BreadcrumbItemTestPropsAndEvents: Story = {
  name: 'Тест: Пользовательские стрелки, labelId, слот, числовой ноль, события и expose',
  render: () => ({
    components: { D1BreadcrumbItem },
    setup() {
      const clicks = ref(0)
      const lastValue = ref('')
      const exposedValue = ref('')
      const itemRef = ref<{ getValue?: () => unknown } | null>(null)
      const onAction = (_event: MouseEvent, payload: { value?: unknown }) => {
        clicks.value += 1
        lastValue.value = String(payload.value)
        exposedValue.value = String(itemRef.value?.getValue?.() ?? '')
      }
      return { clicks, lastValue, exposedValue, itemRef, onAction }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1BreadcrumbItem
              ref="itemRef"
              data-testid="crumb-test-action"
              label="Catalog"
              label-id="wiki-crumb-lbl-id"
              icon="folder"
              icon-arrow-right="arrow_forward"
              icon-arrow-left="arrow_back"
              value="catalog-val"
              :detail="{ depth: 1 }"
              :index="1"
              @click="onAction"
            />
            <D1BreadcrumbItem
              data-testid="crumb-test-slot"
              :to="{ path: '/docs' }"
              icon-arrow-right="arrow_forward"
            >
              <span>Slot Crumb</span>
            </D1BreadcrumbItem>
            <D1BreadcrumbItem
              data-testid="crumb-test-zero"
              :label="0"
              :value="0"
              readonly
            />
          </div>
          <div data-testid="crumb-test-state">{{ clicks }}|{{ lastValue }}|{{ exposedValue }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const action = canvasElement.querySelector('[data-testid="crumb-test-action"]')
    await expect(action).toHaveAttribute('role', 'link')
    await expect(action).toHaveAttribute('tabindex', '0')
    await expect(action).toHaveAttribute('data-value', 'catalog-val')
    await expect(action?.querySelector('#wiki-crumb-lbl-id')).toHaveTextContent('Catalog')
    await expect(action?.querySelector('.d1-breadcrumbItem__iconArrow')).toHaveAttribute('aria-hidden', 'true')

    await expect(canvasElement.querySelector('[data-testid="crumb-test-slot"]')).toHaveTextContent('Slot Crumb')
    await expect(canvasElement.querySelector('[data-testid="crumb-test-zero"]')).toHaveTextContent('0')

    await step('Click interactive breadcrumb item and verify payload + expose', async () => {
      if (action) {
        await userEvent.click(action)
      }
      await expect(canvasElement.querySelector('[data-testid="crumb-test-state"]')).toHaveTextContent('1|catalog-val|catalog-val')
    })
  }
}
// :story-items [!] System label / Системная метка
