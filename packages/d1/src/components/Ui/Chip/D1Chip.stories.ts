import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Chip from './D1Chip.vue'
import { ChipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Chip',
  component: D1Chip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ChipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ChipWikiStorybook.getWiki(),
  args: ChipWikiStorybook.getValues()
} satisfies Meta<typeof D1Chip>

export default meta

type Story = StoryObj<typeof meta>

export const Chip: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Chip },
    setup: () => ({ args }),
    template: `
      <D1Chip v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const chipElement = canvasElement.querySelector('.d1-chip')
    await expect(chipElement).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ChipInput: Story = {
  name: 'Ввод (input)',
  render: () => ({
    components: { D1Chip },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Chip>Chip</D1Chip>
          <D1Chip input>Tag</D1Chip>
          <D1Chip input icon="person">Contact</D1Chip>
          <D1Chip input selected icon="tag">Keyword</D1Chip>
        </div>
      
    `
  })
}
export const ChipAssistive: Story = {
  name: 'Вспомогательные (assistive)',
  render: () => ({
    components: { D1Chip },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Chip>Chip</D1Chip>
          <D1Chip assistive>Chip</D1Chip>
          <D1Chip assistive icon="lightbulb">Suggestion</D1Chip>
          <D1Chip assistive selected icon="check">Recommended</D1Chip>
        </div>
      
    `
  })
}
export const ChipAdaptive: Story = {
  name: 'Адаптивные',
  render: () => ({
    components: { D1Chip },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip data-testid="chip-adaptive-default" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Chip data-testid="chip-adaptive-block" adaptive="block" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Chip data-testid="chip-adaptive-icon" adaptive="iconAlways" icon="star" label="Chip" aria-label="Star"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="chip-adaptive-default"]')).toBeInTheDocument()
    await expect(canvasElement.querySelector('[data-testid="chip-adaptive-block"]')).toHaveClass('d1-chip--adaptive--block')
    await expect(canvasElement.querySelector('[data-testid="chip-adaptive-icon"]')).toHaveClass('d1-chip--adaptive--iconAlways')
  }
}
export const ChipSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Chip, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Chip data-testid="chip-skeleton" isSkeleton>Chip</D1Chip>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[data-testid="chip-skeleton"]')).toBeInTheDocument()
  }
}
export const ChipTestStatesAndCombinations: Story = {
  name: 'Тест: Состояния, иконки, теги и комбинации свойств',
  render: () => ({
    components: { D1Chip },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Chip data-testid="chip-default-span" label="Default" icon="home" icon-trailing="close" />
          <D1Chip data-testid="chip-disabled-selected" label="Disabled Selected" disabled selected />
          <D1Chip data-testid="chip-readonly" label="Readonly" readonly focus />
          <D1Chip data-testid="chip-loading" label="Loading" loading inverse />
          <D1Chip data-testid="chip-grid" label="Grid" grid text-align="center" />
          <D1Chip data-testid="chip-button" label="Native Button" tag="button" />
          <D1Chip data-testid="chip-zero" :label="0" :value="0" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const defaultSpan = canvasElement.querySelector('[data-testid="chip-default-span"]')
    const disabledSelected = canvasElement.querySelector('[data-testid="chip-disabled-selected"]')
    const readonlyChip = canvasElement.querySelector('[data-testid="chip-readonly"]')
    const loadingChip = canvasElement.querySelector('[data-testid="chip-loading"]')
    const gridChip = canvasElement.querySelector('[data-testid="chip-grid"]')
    const buttonChip = canvasElement.querySelector('[data-testid="chip-button"]')
    const zeroChip = canvasElement.querySelector('[data-testid="chip-zero"]')

    await expect(defaultSpan?.tagName).toBe('SPAN')
    await expect(defaultSpan).toHaveAttribute('role', 'button')
    await expect(defaultSpan).toHaveAttribute('tabindex', '0')

    await expect(disabledSelected).toHaveClass('d1-chip--disabled')
    await expect(disabledSelected).toHaveClass('d1-chip--selected')
    await expect(disabledSelected).toHaveAttribute('aria-disabled', 'true')

    await expect(readonlyChip).toHaveClass('d1-chip--readonly')
    await expect(readonlyChip).toHaveClass('d1-chip--focus')

    await expect(loadingChip).toHaveClass('d1-chip--inverse')
    await expect(gridChip).toHaveClass('d1-chip--grid')
    await expect(gridChip).toHaveClass('d1-chip--textAlign--center')
    await expect(buttonChip?.tagName).toBe('BUTTON')
    await expect(zeroChip).toHaveTextContent('0')
    await expect(zeroChip).toHaveAttribute('data-value', '0')
  }
}
export const ChipTestEvents: Story = {
  name: 'Тест: События клика и защита disabled',
  render: () => ({
    components: { D1Chip },
    setup() {
      const lastClicked = ref<unknown>('none')
      const onClickLite = (payload: { value?: unknown }) => {
        lastClicked.value = payload?.value
      }
      return { lastClicked, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1Chip data-testid="chip-click-active" label="Active" :value="0" @click-lite="onClickLite" />
            <D1Chip data-testid="chip-click-disabled" label="Disabled" value="blocked" disabled @click-lite="onClickLite" />
          </div>
          <output data-testid="chip-last-clicked">{{ String(lastClicked) }}</output>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const activeChip = canvasElement.querySelector('[data-testid="chip-click-active"]')
    const disabledChip = canvasElement.querySelector('[data-testid="chip-click-disabled"]')
    if (activeChip) {
      await userEvent.click(activeChip)
    }
    await expect(canvasElement.querySelector('[data-testid="chip-last-clicked"]')).toHaveTextContent('0')
    if (disabledChip) {
      await userEvent.click(disabledChip)
    }
    await expect(canvasElement.querySelector('[data-testid="chip-last-clicked"]')).toHaveTextContent('0')
  }
}
// :story-items [!] System label / Системная метка
