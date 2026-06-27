import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Alert from './D1Alert.vue'
import { AlertWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Alert',
  component: D1Alert,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AlertWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AlertWikiStorybook.getWiki(),
  args: AlertWikiStorybook.getValues()
} satisfies Meta<typeof D1Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Alert: Story = {
  args: {
    selected: true,
    button: 'test',
    closeButton: true
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Alert },
    setup: () => ({ args }),
    template: `
      <D1Alert v-bind="args"/>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AlertBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Alert },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Alert label="Alert Title" description="This is an alert description text."/>
          <D1Alert label="Alert with Icon" description="Alert description text with an icon." icon="info"/>
          <D1Alert
            label="Alert with actions and links"
            description="Detailed message with custom navigation links and action buttons below."
            icon="info"
            :links="[{ label: 'First link', href: '#' }, { label: 'Second link', href: '#' }]"
            :actions-list="[{ label: 'Accept', value: 'accept' }, { label: 'Decline', value: 'decline' }]"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
