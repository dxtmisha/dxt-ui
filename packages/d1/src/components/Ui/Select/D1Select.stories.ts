import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Select from './D1Select.vue'
import { SelectWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Select',
  component: D1Select,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SelectWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SelectWikiStorybook.getWiki(),
  args: SelectWikiStorybook.getValues()
} satisfies Meta<typeof D1Select>

export default meta

type Story = StoryObj<typeof meta>

export const Select: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Select },
    setup: () => ({ args }),
    template: `
      <D1Select v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SelectVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Select },
    setup() {
      return {
        singleValue: ref('option2'),
        multipleValue: ref(['option1', 'option3']),
        countryValue: ref(''),
        countries: ref([
          {label: 'United States', value: 'us', icon: 'flag'},
          {label: 'United Kingdom', value: 'uk', icon: 'flag'},
          {label: 'Germany', value: 'de', icon: 'flag'},
          {label: 'France', value: 'fr', icon: 'flag'},
          {label: 'Japan', value: 'jp', icon: 'flag'}
        ])
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="singleValue = 'option1'">Select Option 1</button>
            <button class="wiki-storybook-button" @click="singleValue = 'option3'">Select Option 3</button>
            <button class="wiki-storybook-button" @click="singleValue = ''">Clear</button>
          </div>
          <D1Select
            v-model="singleValue"
            type="select"
            label="Single select"
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected value: {{ singleValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="multipleValue = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleValue.push('option3')">Add Option 3</button>
            <button class="wiki-storybook-button" @click="multipleValue = []">Clear all</button>
          </div>
          <D1Select
            v-model="multipleValue"
            type="select"
            label="Multiple select"
            multiple
            :option="[
              {label: 'First option', value: 'option1', icon: 'check'},
              {label: 'Second option', value: 'option2', icon: 'check'},
              {label: 'Third option', value: 'option3', icon: 'check'}
            ]"
          />
          <div>Selected values: {{ multipleValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="countryValue = 'us'">USA</button>
            <button class="wiki-storybook-button" @click="countryValue = 'uk'">UK</button>
            <button class="wiki-storybook-button" @click="countryValue = ''">Clear</button>
          </div>
          <D1Select
            v-model="countryValue"
            type="select"
            label="Country"
            placeholder="Select country"
            :option="countries"
          />
          <div>Selected country: {{ countryValue }}</div>
        </div>
    `
  })
}
export const SelectSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Select, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Select
              isSkeleton
              type="select"
              label="Loading select"
              helperMessage="Options are loading..."
              :option="[
                {label: 'First option', value: 'option1'},
                {label: 'Second option', value: 'option2'},
                {label: 'Third option', value: 'option3'}
              ]"
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
