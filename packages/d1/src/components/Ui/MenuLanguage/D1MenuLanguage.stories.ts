import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuLanguage from './D1MenuLanguage.vue'
import { MenuLanguageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuLanguage',
  component: D1MenuLanguage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuLanguageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuLanguageWikiStorybook.getWiki(),
  args: MenuLanguageWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuLanguage>

export default meta

type Story = StoryObj<typeof meta>

export const MenuLanguage: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuLanguage },
    setup: () => ({ args }),
    template: `
      <D1MenuLanguage v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Select Language</button>
      </template>
    </D1MenuLanguage>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuLanguageFilter: Story = {
  name: 'Фильтрация языков',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedValue: ref('en'),
        list: ['en', 'ru', 'vi', 'zh', 'fr', 'de']
      }
    },
    template: `
        <D1MenuLanguage
          v-model:selected="selectedValue"
          :country-list="list"
          is-selected-by-value
        >
          <template #control="{binds, selectedNames}">
            <button class="wiki-storybook-button" v-bind="binds">
              Selected: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </D1MenuLanguage>
    `
  })
}
// :story-items [!] System label / Системная метка
