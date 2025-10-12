import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Actions from './D1Actions.vue'
import { ActionsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Actions',
  component: D1Actions,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ActionsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ActionsWikiStorybook.getWiki(),
  args: ActionsWikiStorybook.getValues()
} satisfies Meta<typeof D1Actions>

export default meta

type Story = StoryObj<typeof meta>

export const Actions: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ActionsBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Actions },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `
  })
}
export const ActionsAlignment: Story = {
  name: 'Выравнивание',
  render: () => ({
    components: { D1Actions },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Actions
            align="left"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="center"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="right"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <D1Actions
            align="block"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `
  })
}
export const ActionsPrimarySecondary: Story = {
  name: 'Основная и вторичная группы',
  render: () => ({
    components: { D1Actions },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
            :list-secondary="[
              { label: 'Delete', text: true }
            ]"
          />
        </div>
    `
  })
}
export const ActionsFlexible: Story = {
  name: 'Гибкая раскладка',
  render: () => ({
    components: { D1Actions },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Actions
            flexible="adaptive"
            :list="[
              { label: 'Cancel' },
              { label: 'Apply' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
    `
  })
}
export const ActionsCustomButtons: Story = {
  name: 'Пользовательские стили кнопок',
  render: () => ({
    components: { D1Actions },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Actions
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
