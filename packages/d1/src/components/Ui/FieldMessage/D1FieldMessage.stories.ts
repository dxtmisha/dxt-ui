import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FieldMessage from './D1FieldMessage.vue'
import { FieldMessageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FieldMessage',
  component: D1FieldMessage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldMessageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldMessageWikiStorybook.getWiki(),
  args: FieldMessageWikiStorybook.getValues()
} satisfies Meta<typeof D1FieldMessage>

export default meta

type Story = StoryObj<typeof meta>

export const FieldMessage: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldMessageSlots: Story = {
  name: 'Слоты',
  render: () => ({
    components: { D1FieldMessage },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1FieldMessage>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </D1FieldMessage>
          <D1FieldMessage>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </D1FieldMessage>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
