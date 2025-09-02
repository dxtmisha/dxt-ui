import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FieldCounter from './D1FieldCounter.vue'
import { FieldCounterWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FieldCounter',
  component: D1FieldCounter,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldCounterWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldCounterWikiStorybook.getWiki(),
  args: FieldCounterWikiStorybook.getValues()
} satisfies Meta<typeof D1FieldCounter>

export default meta

type Story = StoryObj<typeof meta>

export const FieldCounter: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldCounterTemplate: Story = {
  name: 'Пользовательский шаблон',
  render: () => ({
    components: { D1FieldCounter },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default template</div>
            <D1FieldCounter :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Custom template: "Characters: [c] of [m]"</div>
            <D1FieldCounter :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Counter only with template: "[c] chars"</div>
            <D1FieldCounter :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
