import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuCountry from './D1MenuCountry.vue'
import { MenuCountryWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuCountry',
  component: D1MenuCountry,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuCountryWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuCountryWikiStorybook.getWiki(),
  args: MenuCountryWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuCountry>

export default meta

type Story = StoryObj<typeof meta>

export const MenuCountry: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuCountry },
    setup: () => ({ args }),
    template: `
      <D1MenuCountry v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Country</button>
      </template>
    </D1MenuCountry>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuCountryFilter: Story = {
  name: 'Фильтрация стран',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedValue: ref('US'),
        list: ['US', 'CA', 'MX', 'GB', 'FR', 'DE', 'IT', 'ES']
      }
    },
    template: `
        <D1MenuCountry
          v-model:selected="selectedValue"
          :country-list="list"
          is-selected-by-value
        >
          <template #control="{binds, selectedNames}">
            <button class="wiki-storybook-button" v-bind="binds">
              Selected: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </D1MenuCountry>
    `
  })
}
// :story-items [!] System label / Системная метка
