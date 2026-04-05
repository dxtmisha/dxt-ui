import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Textarea from './D1Textarea.vue'
import { TextareaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Textarea',
  component: D1Textarea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextareaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextareaWikiStorybook.getWiki(),
  args: TextareaWikiStorybook.getValues()
} satisfies Meta<typeof D1Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Textarea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Textarea },
    setup: () => ({ args }),
    template: `
      <D1Textarea v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TextareaBasic: Story = {
  name: 'Базовое использование',
  render: () => ({
    components: { D1Textarea },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Textarea label="Label" placeholder="Placeholder" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Filled</div>
            <D1Textarea
              label="Label"
              value="Modern web development relies heavily on robust form components. The Textarea component offers a flexible solution for multi-line input, adapting to user content with auto-resizing capabilities. It integrates seamlessly with validation systems and provides visual feedback through states and helper text, ensuring a smooth user experience across different devices and screen sizes."
            />
          </div>
        </div>
    `
  })
}
export const TextareaAutosize: Story = {
  name: 'Авто-размер',
  render: () => ({
    components: { D1Textarea },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Autosize (default)</div>
            <D1Textarea label="Autosize" autosize />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Fixed Rows</div>
            <D1Textarea label="5 Rows" :autosize="false" rows="5" />
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
