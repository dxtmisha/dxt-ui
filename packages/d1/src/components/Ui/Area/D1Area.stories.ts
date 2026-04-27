import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Area from './D1Area.vue'
import { AreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Area',
  component: D1Area,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AreaWikiStorybook.getWiki(),
  args: AreaWikiStorybook.getValues()
} satisfies Meta<typeof D1Area>

export default meta

type Story = StoryObj<typeof meta>

export const Area: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Area },
    setup: () => ({ args }),
    template: `
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
