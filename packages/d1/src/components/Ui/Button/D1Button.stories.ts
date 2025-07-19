import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Button from './D1Button.vue'
import { ButtonWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Button',
  component: D1Button,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ButtonWikiStorybook.getWiki(),
  args: ButtonWikiStorybook.getValues()
} satisfies Meta<typeof D1Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ButtonVariants: Story = {
  name: 'Варианты кнопок',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Primary</div>
            <D1Button primary>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Secondary</div>
            <D1Button secondary>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Outline</div>
            <D1Button outline>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Text</div>
            <D1Button text>Button</D1Button>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
