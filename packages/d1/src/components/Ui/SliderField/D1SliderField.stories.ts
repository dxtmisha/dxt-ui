import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SliderField from './D1SliderField.vue'
import { SliderFieldWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SliderField',
  component: D1SliderField,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SliderFieldWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SliderFieldWikiStorybook.getWiki(),
  args: SliderFieldWikiStorybook.getValues()
} satisfies Meta<typeof D1SliderField>

export default meta

type Story = StoryObj<typeof meta>

export const SliderField: Story = {
  args: {
    multiple: true,
    selected: false,
    icon: "",
    disabled: false,
    labelLeading: "",
    labelSeparator: "",
    labelTrailing: "",
    placeholder: "",
    validationMessage: "",
    showValue: true,
    showInput: true
  }
}

// :story-items [!] System label / Системная метка
export const SliderFieldBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1SliderField },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1SliderField
            label="Single value"
            showInput
            :value="40"
          />
          <D1SliderField
            label="Range selection"
            multiple
            showInput
            :value="[20, 80]"
          />
          <D1SliderField
            label="With min/max value"
            showValue
            :value="60"
          />
        </div>
    `
  })
}
export const SliderFieldVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1SliderField },
    setup() {
      const singleValue = ref(50)
      const rangeValue = ref([20, 80])

      return { singleValue, rangeValue }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Single value: <strong>{{ singleValue }}</strong></span>
            <button class="wiki-storybook-button" @click="singleValue = 25">25</button>
            <button class="wiki-storybook-button" @click="singleValue = 75">75</button>
          </div>
          <D1SliderField
            v-model="singleValue"
            label="Single slider"
            showInput
            :min="0"
            :max="100"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Range value: <strong>{{ rangeValue }}</strong></span>
            <button class="wiki-storybook-button" @click="rangeValue = [10, 90]">10 - 90</button>
          </div>
          <D1SliderField
            v-model="rangeValue"
            label="Range slider"
            multiple
            showInput
            :min="0"
            :max="100"
          />
        </div>
    `
  })
}
export const SliderFieldSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1SliderField, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:360px">
          <div class="wiki-storybook-flex-column">
            <D1SliderField
              isSkeleton
              label="Loading slider"
              showInput
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
