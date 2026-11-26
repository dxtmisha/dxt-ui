import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ProgressBar from './D1ProgressBar.vue'
import { ProgressBarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ProgressBar',
  component: D1ProgressBar,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ProgressBarWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ProgressBarWikiStorybook.getWiki(),
  args: ProgressBarWikiStorybook.getValues()
} satisfies Meta<typeof D1ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const ProgressBar: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ProgressBarBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1ProgressBar },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ProgressBar :value="50" />
          <D1ProgressBar :value="[
            { value: 25, color: '#ff4d4f' },
            { value: 35, color: '#52c41a' },
            { value: 20, color: '#1890ff' }
          ]" />
          <D1ProgressBar overlay :value="[
            { value: 15, color: '#faad14' },
            { value: 45, color: '#52c41a' },
            { value: 30, color: '#13c2c2' }
          ]" />
          <D1ProgressBar showLabel :value="[
            { value: 30, label: '30%', color: '#2f54eb' },
            { value: 40, label: '40%', color: '#722ed1' },
            { value: 30, label: '30%', color: '#eb2f96' }
          ]" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const bars = canvasElement.querySelectorAll('.d1-progressBar')
    await expect(bars.length).toBe(4)
    await expect(bars[2]).toHaveClass('d1-progressBar--overlay')
    await expect(bars[3]).toHaveTextContent('30%')
    await expect(canvasElement.querySelectorAll('[role="progressbar"]').length).toBeGreaterThanOrEqual(4)
  }
}
export const ProgressBarSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1ProgressBar, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1ProgressBar isSkeleton :value="50" />
            <D1ProgressBar isSkeleton showLabel :value="[
              { value: 30, label: '30%' },
              { value: 40, label: '40%' },
              { value: 30, label: '30%' }
            ]" />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const bars = canvasElement.querySelectorAll('.d1-progressBar')
    await expect(bars.length).toBe(2)
  }
}
export const ProgressBarTestValuesFocusAndBoundary: Story = {
  name: 'Тест: Реактивные значения, фокус, защита max=0 и ARIA',
  render: () => ({
    components: { D1ProgressBar },
    setup() {
      const current = ref(25)
      const max = ref(100)
      const focusId = ref<string | undefined>('seg-a')
      const setSeventyFive = () => {
        current.value = 75
        focusId.value = 'seg-b'
      }
      return { current, max, focusId, setSeventyFive }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setSeventyFive">Update Progress</button>
          </div>
          <D1ProgressBar
            data-testid="pb-reactive"
            :value="current"
            :max="max"
          />
          <D1ProgressBar
            data-testid="pb-focus"
            :focus="focusId"
            :value="[
              { index: 'seg-a', value: 40, label: 'Part A' },
              { index: 'seg-b', value: 60, label: 'Part B' }
            ]"
            show-label
          />
          <D1ProgressBar
            data-testid="pb-zero-max"
            :value="50"
            :max="0"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const reactiveBar = canvasElement.querySelector('[data-testid="pb-reactive"] [role="progressbar"]')
    await expect(reactiveBar).toHaveAttribute('aria-valuenow', '25')
    await expect(reactiveBar).toHaveAttribute('aria-valuemax', '100')

    await expect(canvasElement.querySelector('[data-testid="pb-focus"] [data-index="seg-a"]')).toHaveClass('d1-progressBar__item--focus')
    await expect(canvasElement.querySelector('[data-testid="pb-reactive"] .d1-progressBar__item--space')).toHaveAttribute('aria-hidden', 'true')

    await userEvent.click(canvas.getByRole('button', { name: 'Update Progress' }))
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="pb-reactive"] [role="progressbar"]')).toHaveAttribute('aria-valuenow', '75')
      expect(canvasElement.querySelector('[data-testid="pb-focus"] [data-index="seg-b"]')).toHaveClass('d1-progressBar__item--focus')
    })

    const zeroMaxItem = canvasElement.querySelector('[data-testid="pb-zero-max"] [role="progressbar"]')
    await expect(zeroMaxItem).toHaveAttribute('aria-label', '0%')
    await expect(zeroMaxItem?.getAttribute('style') ?? '').not.toContain('NaN')
  }
}
// :story-items [!] System label / Системная метка
