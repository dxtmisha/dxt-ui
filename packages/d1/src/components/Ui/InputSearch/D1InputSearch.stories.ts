import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputSearch from './D1InputSearch.vue'
import { InputSearchWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputSearch',
  component: D1InputSearch,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputSearchWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputSearchWikiStorybook.getWiki(),
  args: InputSearchWikiStorybook.getValues()
} satisfies Meta<typeof D1InputSearch>

export default meta

type Story = StoryObj<typeof meta>

export const InputSearch: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1InputSearch },
    setup: () => ({ args }),
    template: `
      <D1InputSearch v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputSearchVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputSearch },
    setup() {
      return {
        query: ref('')
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current query: {{ query || '—' }}</span>
            <button class="wiki-storybook-button" @click="query = 'search text'">Set query</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="query = ''">Clear</button>
          </div>
          <D1InputSearch
            v-model:value="query"
            placeholder="Search query..."
          />
        </div>
    `
  })
}
export const InputSearchQuery: Story = {
  name: 'Управление запросом (minQuery и delay)',
  render: () => ({
    components: { D1InputSearch },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1InputSearch
            :min-query="3"
            :delay="500"
            placeholder="Min 3 chars, 500ms delay..."
            helper-message="Triggers only after 3 characters with 500ms debounce"
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
