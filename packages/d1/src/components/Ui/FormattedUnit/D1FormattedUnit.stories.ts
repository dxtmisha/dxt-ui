import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FormattedUnit from './D1FormattedUnit.vue'
import { FormattedUnitWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FormattedUnit',
  component: D1FormattedUnit,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FormattedUnitWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FormattedUnitWikiStorybook.getWiki(),
  args: FormattedUnitWikiStorybook.getValues()
} satisfies Meta<typeof D1FormattedUnit>

export default meta

type Story = StoryObj<typeof meta>

export const FormattedUnit: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FormattedUnitBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1FormattedUnit },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="celsius" language="ru-RU"/> →
            <D1FormattedUnit :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="1000" unit="gram" language="ru-RU"/> →
            <D1FormattedUnit :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
