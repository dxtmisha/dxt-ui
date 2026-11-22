import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Radio from './D1Radio.vue'
import { RadioWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Radio',
  component: D1Radio,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: RadioWikiStorybook.getDescription()
      }
    }
  },
  argTypes: RadioWikiStorybook.getWiki(),
  args: RadioWikiStorybook.getValues()
} satisfies Meta<typeof D1Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Radio: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Radio },
    setup: () => ({ args }),
    template: `
      <D1Radio v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-radio')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const RadioVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Radio },
    setup() {
      return {
        radioValue: ref('space')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected path: <strong>{{ radioValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="radioValue = 'space'">To the Stars</button>
            <button class="wiki-storybook-button" @click="radioValue = 'ocean'">Into the Deep</button>
            <button class="wiki-storybook-button" @click="radioValue = ''">Reset choice</button>
          </div>
          <D1Radio
            v-model:selected="radioValue"
            value-variant="space"
            label="Space Exploration"
            description="Journey to the edge of the galaxy"
          />
          <D1Radio
            v-model:selected="radioValue"
            value-variant="ocean"
            label="Ocean Exploration"
            description="Discover the secrets of the abyss"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll('button.wiki-storybook-button')
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="radio"]')

    await expect(buttons.length).toBe(3)
    await expect(inputs.length).toBe(2)
    await expect(inputs[0].checked).toBe(true)
    await expect(inputs[1].checked).toBe(false)

    await userEvent.click(inputs[1])
    await waitFor(async () => {
      await expect(inputs[0].checked).toBe(false)
      await expect(inputs[1].checked).toBe(true)
      await expect(canvasElement).toHaveTextContent('Selected path: ocean')
    })

    await userEvent.click(buttons[0])
    await waitFor(async () => {
      await expect(inputs[0].checked).toBe(true)
      await expect(inputs[1].checked).toBe(false)
      await expect(canvasElement).toHaveTextContent('Selected path: space')
    })

    await userEvent.click(buttons[2])
    await waitFor(async () => {
      await expect(inputs[0].checked).toBe(false)
      await expect(inputs[1].checked).toBe(false)
    })
  }
}
export const RadioSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Radio, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Radio isSkeleton label="Loading radio" />
            <D1Radio isSkeleton label="Another loading radio" />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-radio')
    await expect(items.length).toBe(2)
    await expect(items[0].querySelector('.d1-radio__label')).toHaveTextContent('Loading radio')
    await expect(items[1].querySelector('.d1-radio__label')).toHaveTextContent('Another loading radio')
  }
}
export const RadioSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Radio },
    template: `
        
        <D1Radio>
          <template #default>
            <strong>Custom label slot for Radio</strong>
          </template>
          <template #description>
            <em>Custom description slot for Radio</em>
          </template>
        </D1Radio>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labelStrong = canvasElement.querySelector('.d1-radio__label strong')
    const descriptionEm = canvasElement.querySelector('.d1-radio__description em')

    await expect(labelStrong).toHaveTextContent('Custom label slot for Radio')
    await expect(descriptionEm).toHaveTextContent('Custom description slot for Radio')
  }
}
export const RadioTestStates: Story = {
  name: 'Тест: Состояния disabled, readonly, focus, loading и indeterminate',
  render: () => ({
    components: { D1Radio },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Radio label="Disabled" disabled />
          <D1Radio label="Readonly" readonly />
          <D1Radio label="Focus" focus />
          <D1Radio label="Loading boolean" loading :modelValue="true" />
          <D1Radio label="Loading object" :loading="{ visible: true, circular: true }" :modelValue="true" />
          <D1Radio label="Indeterminate" indeterminate :modelValue="true" />
          <D1Radio label="Disabled with forceShowMessage" disabled forceShowMessage helperMessage="Forced message" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-radio')
    await expect(items.length).toBe(7)

    const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
    await expect(readonlyInput?.checked).toBe(false)

    if (readonlyInput) {
      await userEvent.click(readonlyInput)
    }
    await expect(readonlyInput?.checked).toBe(false)

    await expect(items[3].querySelector('.d1-radio__loading')).toBeInTheDocument()
    await expect(items[4].querySelector('.d1-radio__loading')).toBeInTheDocument()
    await expect(items[6]).toHaveTextContent('Forced message')
  }
}
export const RadioTestSelected: Story = {
  name: 'Тест: Синхронизация selected, valueVariant и автономный v-model',
  render: () => ({
    components: { D1Radio },
    setup() {
      return {
        selectedValue: ref('alpha'),
        standaloneValue: ref(false)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Selected: {{ selectedValue }} | Standalone: {{ standaloneValue }}</div>
          <D1Radio
            v-model:selected="selectedValue"
            name="radio-group-test"
            valueVariant="alpha"
            valueVariantHide="none"
            label="Alpha"
          />
          <D1Radio
            v-model:selected="selectedValue"
            name="radio-group-test"
            valueVariant="beta"
            valueVariantHide="none"
            label="Beta"
          />
          <D1Radio
            v-model="standaloneValue"
            label="Standalone"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector('.wiki-storybook-card')
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    const hiddenInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="hidden"]')

    await expect(inputs[0].checked).toBe(true)
    await expect(inputs[1].checked).toBe(false)
    await expect(inputs[2].checked).toBe(false)
    await expect(hiddenInputs[0].value).toBe('none')
    await expect(card).toHaveTextContent('Selected: alpha | Standalone: false')

    await userEvent.click(inputs[1])
    await waitFor(async () => {
      await expect(inputs[0].checked).toBe(false)
      await expect(inputs[1].checked).toBe(true)
      await expect(card).toHaveTextContent('Selected: beta')
    })

    await userEvent.click(inputs[2])
    await waitFor(async () => {
      await expect(inputs[2].checked).toBe(true)
      await expect(card).toHaveTextContent('Standalone: true')
    })
  }
}
export const RadioTestLayoutAndBoundaries: Story = {
  name: 'Тест: Компоновка, числовой ноль, иконки и HTML-сообщения',
  render: () => ({
    components: { D1Radio },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Radio :label="0" :description="0" :modelValue="false" />
          <D1Radio label="Inline" :block="false" :itemCenter="false" description="Top aligned" />
          <D1Radio label="Required" required validationMessage="Validation failed" />
          <D1Radio label="Warning" warningMessage="Check this setting" />
          <D1Radio label="HTML helper" hasHtmlCode helperMessage="Helper <strong>bold</strong> text" />
          <D1Radio label="Object icon" :iconCheckbox="{ value: 'verified' }" :modelValue="true" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-radio')
    await expect(items.length).toBe(6)

    await expect(items[0].querySelector('.d1-radio__label')).toHaveTextContent('0')
    await expect(items[0].querySelector('.d1-radio__description')).toHaveTextContent('0')
    await expect(items[0].querySelector<HTMLInputElement>('input[type="radio"]')?.checked).toBe(false)

    await expect(items[1]).not.toHaveClass('d1-radio--block')
    await expect(items[1]).not.toHaveClass('d1-radio--itemCenter')

    const requiredInput = items[2].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(items[2]).toHaveClass('d1-radio--required')
    await expect(requiredInput).toHaveAttribute('aria-invalid', 'true')
    await expect(items[2]).toHaveTextContent('Validation failed')

    await expect(items[3]).toHaveTextContent('Check this setting')

    await expect(items[4].querySelector('strong')).toHaveTextContent('bold')
  }
}
export const RadioTestCombinationsAndAttributes: Story = {
  name: 'Тест: Комбинированные состояния, ARIA-атрибуты, adaptive и числовой valueVariant',
  render: () => ({
    components: { D1Radio },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Radio
            label="Disabled + Selected"
            disabled
            selected="yes"
            valueVariant="yes"
          />
          <D1Radio
            label="Readonly + Focus"
            readonly
            focus
            :modelValue="true"
          />
          <D1Radio
            label="Adaptive Right Always"
            adaptive="rightAlways"
            labelId="story-radio-label"
            description="Accessible description"
            descriptionId="story-radio-desc"
            :tabindex="1"
            :inputAttrs="{ 'data-custom': 'radio-input' }"
          />
          <D1Radio
            label="Zero Variant"
            :valueVariant="0"
            :modelValue="true"
            :iconCheckbox="null"
          />
          <D1Radio
            label="Custom Indeterminate"
            indeterminate
            iconIndeterminate="close"
            :modelValue="true"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-radio')
    await expect(items.length).toBe(5)

    const disabledInput = items[0].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(items[0]).toHaveClass('d1-radio--disabled')
    await expect(disabledInput?.checked).toBe(true)
    await expect(disabledInput?.disabled).toBe(true)

    const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(items[1]).toHaveClass('d1-radio--focus')
    await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
    await expect(readonlyInput?.checked).toBe(true)

    const adaptiveInput = items[2].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(items[2]).toHaveClass('d1-radio--adaptive--rightAlways')
    await expect(items[2]).toHaveAttribute('aria-labelledby', 'story-radio-label')
    await expect(items[2]).toHaveAttribute('aria-describedby', 'story-radio-desc')
    await expect(adaptiveInput).toHaveAttribute('tabindex', '1')
    await expect(adaptiveInput).toHaveAttribute('data-custom', 'radio-input')

    const zeroInput = items[3].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(zeroInput?.checked).toBe(true)
    await expect(zeroInput?.value).toBe('0')

    const indeterminateInput = items[4].querySelector<HTMLInputElement>('input[type="radio"]')
    await expect(indeterminateInput?.checked).toBe(true)
  }
}
// :story-items [!] System label / Системная метка
