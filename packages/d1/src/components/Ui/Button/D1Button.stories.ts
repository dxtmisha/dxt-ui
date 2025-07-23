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
export const ButtonBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Button>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With left icon</div>
            <D1Button icon="home">Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With right icon</div>
            <D1Button icon-trailing="arrow_forward">Button</D1Button>
          </div>
        </div>
    `
  })
}
export const ButtonAdaptive: Story = {
  name: 'Адаптивные',
  render: () => ({
    components: { D1Button },
    template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Button>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <D1Button adaptive>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Container</div>
            <D1Button container>Button</D1Button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive + Container</div>
            <D1Button adaptive container>Button</D1Button>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
