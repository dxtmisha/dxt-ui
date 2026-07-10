import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ProgressBar from './D1ProgressBar.vue'
import { ProgressBarWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  })
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
  })
}
// :story-items [!] System label / Системная метка
