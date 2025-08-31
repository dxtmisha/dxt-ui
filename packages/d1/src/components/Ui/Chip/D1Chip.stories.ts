import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Chip from './D1Chip.vue'
import { ChipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ChipBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Chip },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip icon="star">Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip selected>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <D1Chip disabled>Chip</D1Chip>
          </div>
        </div>
    `
  })
}
export const ChipInput: Story = {
  name: 'Ввод (input)',
  render: () => ({
    components: { D1Chip },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Input</div>
            <D1Chip input>Tag</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip input icon="person">Contact</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip input selected icon="tag">Keyword</D1Chip>
          </div>
        </div>
    `
  })
}
export const ChipAssistive: Story = {
  name: 'Вспомогательные (assistive)',
  render: () => ({
    components: { D1Chip },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Chip>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Assistive</div>
            <D1Chip assistive>Chip</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <D1Chip assistive icon="lightbulb">Suggestion</D1Chip>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <D1Chip assistive selected icon="check">Recommended</D1Chip>
          </div>
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
            <D1Chip icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Chip adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Chip container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
    `
  })
}
export const ChipSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Chip, D1Skeleton },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Skeleton>
              <D1Chip>Chip</D1Chip>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <D1Skeleton :active="true">
              <D1Chip isSkeleton>Chip</D1Chip>
            </D1Skeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <D1Skeleton :active="true">
              <D1Chip>Chip</D1Chip>
            </D1Skeleton>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
