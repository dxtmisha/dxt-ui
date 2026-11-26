import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SliderField from './D1SliderField.vue'
import { SliderFieldWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { SliderFieldExpose } from '@dxtmisha/constructor/SliderField'
import { expect, within, userEvent } from 'storybook/test'
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
    icon: '',
    disabled: false,
    labelLeading: '',
    labelSeparator: '',
    labelTrailing: '',
    placeholder: '',
    validationMessage: '',
    showValue: true,
    showInput: true
  }
}

// :story-items [!] System label / Системная метка
export const SliderFieldOrientation: Story = {
  name: 'Ориентация',
  render: () => ({
    components: { D1SliderField },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <D1SliderField label="Horizontal" :value="40"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <D1SliderField vertical label="Vertical" :value="60"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const fields = canvasElement.querySelectorAll('.d1-sliderField')
    await expect(fields.length).toBe(2)
    await expect(fields[1]).toHaveClass('d1-sliderField--vertical')
  }
}
export const SliderFieldMultiple: Story = {
  name: 'Выбор диапазона',
  render: () => ({
    components: { D1SliderField },
    template: `
        
        <D1SliderField
          label="Range selection"
          multiple
          showInput
          :value="[20, 80]"
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const thumbs = canvasElement.querySelectorAll('[role="slider"]')
    await expect(thumbs.length).toBe(2)
    const inputs = canvasElement.querySelectorAll('input[type="number"]')
    await expect(inputs.length).toBe(2)
  }
}
export const SliderFieldMarks: Story = {
  name: 'Метки и деления',
  render: () => ({
    components: { D1SliderField },
    setup() {
      return {
        customMarks: [
          { mark: 0, value: 0, label: '0%' },
          { mark: 25, value: 25, label: '25%' },
          { mark: 50, value: 50, label: '50%' },
          { mark: 75, value: 75, label: '75%' },
          { mark: 100, value: 100, label: '100%' }
        ]
      }
    },
    template: `
        
        <D1SliderField
          label="Slider with marks"
          :marks="customMarks"
          magnet
          :step="5"
          showInput
        />
      
    `
  }),
  play: async ({ canvasElement }) => {
    const thumb = canvasElement.querySelector('[role="slider"]')
    await expect(thumb).toBeInTheDocument()
  }
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
            <span data-testid="slider-field-single">Single value: <strong>{{ singleValue }}</strong></span>
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
            <span data-testid="slider-field-range">Range value: <strong>{{ rangeValue }}</strong></span>
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
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('slider-field-single')).toHaveTextContent('50')
    await step('Update single and range v-model values', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '75' }))
      await expect(canvas.getByTestId('slider-field-single')).toHaveTextContent('75')
      await userEvent.click(canvas.getByRole('button', { name: '10 - 90' }))
      await expect(canvas.getByTestId('slider-field-range')).toHaveTextContent('10')
    })
  }
}
export const SliderFieldSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1SliderField, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1SliderField
              isSkeleton
              label="Loading slider"
              showInput
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector('.d1-sliderField')
    await expect(field).toBeInTheDocument()
  }
}
export const SliderFieldTestStatesSlotsExpose: Story = {
  name: 'Тест: Состояния, опции метки, слоты и методы expose',
  render: () => ({
    components: { D1SliderField },
    setup() {
      const fieldReference = ref<SliderFieldExpose | null>(null)
      const controlledValue = ref<number>(0)
      const validResult = ref<string>('')
      const checkExpose = () => {
        validResult.value = String(fieldReference.value?.checkValidity())
      }
      return { fieldReference, controlledValue, validResult, checkExpose }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkExpose">Check Validity</button>
            <span data-testid="slider-field-valid">{{ validResult }}</span>
          </div>
          <D1SliderField
            ref="fieldReference"
            v-model="controlledValue"
            label="Gain"
            showValueInLabel
            labelSeparator=": "
            labelLeading="Min"
            labelTrailing="Max"
            helperMessage="Adjust level"
            :min="-50"
            :max="50"
          />
          <D1SliderField :value="40" label="Disabled" showInput disabled/>
          <D1SliderField :value="60" label="Readonly" showInput readonly/>
          <D1SliderField :value="20" label="Error" validationMessage="Out of bounds"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const fields = canvasElement.querySelectorAll('.d1-sliderField')
    await expect(fields.length).toBe(4)
    await expect(fields[0]).toHaveTextContent('Gain: 0')
    await expect(fields[1].querySelector('input[type="number"]')).toBeDisabled()
    await expect(fields[2].querySelector('input[type="number"]')).toHaveAttribute('readonly')
    await expect(fields[3]).toHaveTextContent('Out of bounds')

    await step('Call exposed checkValidity()', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Check Validity' }))
      await expect(canvas.getByTestId('slider-field-valid')).toHaveTextContent('true')
    })
  }
}
// :story-items [!] System label / Системная метка
