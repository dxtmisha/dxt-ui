import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CarouselPagination from './D1CarouselPagination.vue'
import { CarouselPaginationWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CarouselPagination',
  component: D1CarouselPagination,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CarouselPaginationWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CarouselPaginationWikiStorybook.getWiki(),
  args: CarouselPaginationWikiStorybook.getValues()
} satisfies Meta<typeof D1CarouselPagination>

export default meta

type Story = StoryObj<typeof meta>

export const CarouselPagination: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CarouselPaginationBasic: Story = {
  name: 'Типы отображения',
  render: () => ({
    components: { D1CarouselPagination },
    template: `
        <div class="wiki-storybook-flex-column">
          <div>
            <span>Bullets</span>
            <D1CarouselPagination :count="5" :selected="2" type="bullets" />
          </div>
          <div>
            <span>Dynamic</span>
            <div class="wiki-storybook-flex-column">
              <D1CarouselPagination :count="10" :selected="5" dynamic :visible="5" />
              <D1CarouselPagination :count="10" :selected="1" dynamic :visible="5" />
              <D1CarouselPagination :count="10" :selected="10" dynamic :visible="5" />
            </div>
          </div>
          <div>
            <span>Lines</span>
            <D1CarouselPagination :count="5" :selected="2" type="lines" />
          </div>
          <div>
            <span>Fraction</span>
            <D1CarouselPagination :count="5" :selected="2" type="fraction" />
          </div>
          <div>
            <span>Progress bar</span>
            <D1CarouselPagination :count="5" :selected="2" type="progressbar" />
          </div>
        </div>
    `
  })
}
export const CarouselPaginationVModel: Story = {
  name: 'Двусторонняя привязка (v-model:selected)',
  render: () => ({
    components: { D1CarouselPagination },
    setup() {
      const selected = ref(1)
      return { selected }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current slide: <strong>{{ selected }}</strong></span>
            <button class="wiki-storybook-button" @click="selected = 1">Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 3">Slide 3</button>
            <button class="wiki-storybook-button" @click="selected = 5">Slide 5</button>
          </div>
          <D1CarouselPagination v-model:selected="selected" :count="5" />
        </div>
    `
  })
}
export const CarouselPaginationSlots: Story = {
  name: 'Кастомные слоты',
  render: () => ({
    components: { D1CarouselPagination },
    setup() {
      const selected = ref(2)
      return { selected }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1CarouselPagination v-model:selected="selected" :count="4">
            <template #item="{ binds, index, item }">
              <button
                v-bind="binds"
                style="padding: 4px 10px; border-radius: 6px; font-size: 12px;"
              >
                {{ index }}
              </button>
            </template>
          </D1CarouselPagination>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
