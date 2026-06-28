import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Breadcrumbs from './D1Breadcrumbs.vue'
import { BreadcrumbsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
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
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
