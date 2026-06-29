import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Breadcrumbs from './D1Breadcrumbs.vue'
import { BreadcrumbsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
      <D1Breadcrumbs v-bind="args" :list="[
      { label: 'Home', to: '#', icon: 'home' },
      { label: 'Catalog', to: '#catalog' },
      { label: 'Shoes' }
    ]" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BreadcrumbsSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Breadcrumbs, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1Breadcrumbs
            isSkeleton
            :list="[
              { label: 'Home' },
              { label: 'Components' },
              { label: 'Breadcrumbs' }
            ]"
          />
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
