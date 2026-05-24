import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuChip from './D1MenuChip.vue'
import { MenuChipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuChip',
  component: D1MenuChip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuChipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuChipWikiStorybook.getWiki(),
  args: MenuChipWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuChip>

export default meta

type Story = StoryObj<typeof meta>

export const MenuChip: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuChipBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1MenuChip },
    setup() {
      const options = ref([
        { label: 'English', value: 'en' },
        { label: 'Russian', value: 'ru' },
        { label: 'Vietnamese', value: 'vi' },
        { label: 'Spanish', value: 'es' }
      ])
      const value1 = ref('en')
      const value2 = ref('ru')
      const value3 = ref('vi')

      return { options, value1, value2, value3 }
    },
    template: `
        <div class="wiki-storybook-flex">
          <D1MenuChip
            v-model="value1"
            type="menuChip"
            label="Language"
            :option="options"
          />
          <D1MenuChip
            v-model="value2"
            type="menuChip"
            label="With search"
            showSearch
            :option="options"
          />
          <D1MenuChip
            v-model="value3"
            type="menuChip"
            label="Hide value if icon"
            icon="settings"
            hideValueIcon
            :option="options"
          />
        </div>
    `
  })
}
export const MenuChipVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1MenuChip },
    setup() {
      const valueSingle = ref('option2')
      const valueMultiple = ref(['option1', 'option3'])
      const options = [
        { label: 'First option', value: 'option1' },
        { label: 'Second option', value: 'option2' },
        { label: 'Third option', value: 'option3' }
      ]

      return { valueSingle, valueMultiple, options }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <D1MenuChip
            v-model="valueSingle"
            type="menuChip"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1MenuChip
            v-model="valueMultiple"
            type="menuChip"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
    `
  })
}
export const MenuChipSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1MenuChip, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1MenuChip
              type="menuChip"
              label="Loading menu chip"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :chipAttrs="{isSkeleton: true}"
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
