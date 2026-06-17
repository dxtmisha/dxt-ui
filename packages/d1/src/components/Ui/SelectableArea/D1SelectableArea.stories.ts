import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SelectableArea from './D1SelectableArea.vue'
import { SelectableAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SelectableArea',
  component: D1SelectableArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectableAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectableAreaWikiStorybook.getWiki(),
  args: SelectableAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1SelectableArea>

export default meta

type Story = StoryObj<typeof meta>

export const SelectableArea: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
