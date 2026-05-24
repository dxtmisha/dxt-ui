import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuButton from './D1MenuButton.vue'
import { MenuButtonWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuButton',
  component: D1MenuButton,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuButtonWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuButtonWikiStorybook.getWiki(),
  args: MenuButtonWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const MenuButton: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuButton },
    setup: () => ({ args }),
    template: `
      <D1MenuButton v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuButtonBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1MenuButton },
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
          <D1MenuButton
            v-model="value1"
            type="menuButton"
            label="Language"
            :option="options"
          />
          <D1MenuButton
            v-model="value2"
            type="menuButton"
            label="With search"
            showSearch
            :option="options"
          />
          <D1MenuButton
            v-model="value3"
            type="menuButton"
            label="Hide value if icon"
            icon="settings"
            hideValueIcon
            :option="options"
          />
        </div>
    `
  })
}
export const MenuButtonVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1MenuButton },
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

          <D1MenuButton
            v-model="valueSingle"
            type="menuButton"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1MenuButton
            v-model="valueMultiple"
            type="menuButton"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
    `
  })
}
export const MenuButtonSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1MenuButton, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1MenuButton
              type="menuButton"
              label="Loading menu button"
              :option="[
                { label: 'First option', value: 'option1' },
                { label: 'Second option', value: 'option2' },
                { label: 'Third option', value: 'option3' }
              ]"
              :buttonAttrs="{isSkeleton: true}"
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
