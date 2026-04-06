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
export const SelectBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Select },
    setup() {
      const options = ref([
        {label: 'JavaScript', value: 'js'},
        {label: 'TypeScript', value: 'ts'},
        {label: 'Python', value: 'py'},
        {label: 'Java', value: 'java'},
        {label: 'C++', value: 'cpp'},
        {label: 'Ruby', value: 'rb'},
        {label: 'Go', value: 'go'},
        {label: 'PHP', value: 'php'}
      ])

      return { options }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Select
            type="select"
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <D1Select
            type="select"
            label="With search"
            placeholder="Search..."
            showSearch
            :option="options"
          />
          <D1Select
            type="select"
            label="With filter"
            placeholder="Type to filter"
            showSearch
            filterMode
            :option="options"
          />
          <D1Select
            type="select"
            label="Edit value"
            placeholder="Select or type"
            editValue
            filterMode
            :option="options"
          />
          <D1Select
            type="select"
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
    `
  })
}
export const SelectVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Select },
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

          <D1Select
            v-model="valueSingle"
            type="select"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <D1Select
            v-model="valueMultiple"
            type="select"
            label="Multiple select"
            multiple
            :option="options"
          />
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
