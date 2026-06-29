import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1BreadcrumbItem from './D1BreadcrumbItem.vue'
import { BreadcrumbItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
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
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BreadcrumbItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1BreadcrumbItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <D1BreadcrumbItem isSkeleton label="Breadcrumb item" />
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
