import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Pagination from './D1Pagination.vue'
import { PaginationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Pagination',
  component: D1Pagination,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: PaginationWikiStorybook.getDescription()
      }
    }
  },
  argTypes: PaginationWikiStorybook.getWiki(),
  args: PaginationWikiStorybook.getValues()
} satisfies Meta<typeof D1Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Pagination: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const PaginationBasic: Story = {
  name: 'Базовый',
  render: () => ({
    components: { D1Pagination },
    setup() {
      return {}
    },
    template: `
        <D1Pagination
          :count="100"
          :rows="10"
        />
    `
  })
}
export const PaginationVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Pagination },
    setup() {
      const page = ref(1)
      const rows = ref(10)
      const menuRows = [5, 10, 20, 50]

      return { page, rows, menuRows }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Page: <strong>{{ page }}</strong></span>
            <span>Rows per page: <strong>{{ rows }}</strong></span>
            <button class="wiki-storybook-button" @click="page = 5">Go to Page 5</button>
            <button class="wiki-storybook-button" @click="rows = 20">Set Rows to 20</button>
          </div>

          <D1Pagination
            v-model:value="page"
            v-model:rows="rows"
            :count="100"
            :menu-rows="menuRows"
            show-info
          />
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
