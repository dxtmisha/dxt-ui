import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FormattedNumber from './D1FormattedNumber.vue'
import { FormattedNumberWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FormattedNumber',
  component: D1FormattedNumber,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FormattedNumberWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FormattedNumberWikiStorybook.getWiki(),
  args: FormattedNumberWikiStorybook.getValues()
} satisfies Meta<typeof D1FormattedNumber>

export default meta

type Story = StoryObj<typeof meta>

export const FormattedNumber: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FormattedNumberBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1FormattedNumber },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89"/>
          <D1FormattedNumber :value="1234567.89" currency="USD"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram"/>
          <D1FormattedNumber :value="1234567.89" :format="false"/>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
