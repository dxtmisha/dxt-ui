import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Switch from './D1Switch.vue'
import { SwitchWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { SwitchExpose } from '@dxtmisha/constructor/Switch'
import { expect, within, userEvent, waitFor, fireEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Switch',
  component: D1Switch,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SwitchWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SwitchWikiStorybook.getWiki(),
  args: SwitchWikiStorybook.getValues()
} satisfies Meta<typeof D1Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Switch: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Switch },
    setup: () => ({ args }),
    template: `
      <D1Switch v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-switch')
    const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')
    const track = canvasElement.querySelector('.d1-switch__track')

    await expect(component).toBeInTheDocument()
    await expect(switchInput).toBeInTheDocument()
    await expect(switchInput).toHaveAttribute('role', 'switch')
    await expect(track).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SwitchVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Switch },
    setup() {
      return {
        switchValue: ref(false)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="switchValue = !switchValue">Toggle {{ switchValue }}</button>
          </div>
          <D1Switch
            v-model="switchValue"
            label="Switch with v-model"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector<HTMLButtonElement>('button.wiki-storybook-button')
    const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')

    await expect(button).toBeInTheDocument()
    await expect(switchInput).toBeInTheDocument()
    await expect(switchInput).toHaveAttribute('role', 'switch')
    await expect(switchInput?.checked).toBe(false)

    await step('Toggle switch programmatically via button', async () => {
      if (button) {
        await userEvent.click(button)
      }
      await waitFor(async () => {
        await expect(switchInput?.checked).toBe(true)
        await expect(button).toHaveTextContent('Toggle true')
      })
    })

    await step('Toggle switch directly via user interaction', async () => {
      if (switchInput) {
        await userEvent.click(switchInput)
      }
      await waitFor(async () => {
        await expect(switchInput?.checked).toBe(false)
        await expect(button).toHaveTextContent('Toggle false')
      })
    })
  }
}
export const SwitchSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Switch, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Switch isSkeleton label="Loading switch" />
            <D1Switch isSkeleton label="Another loading switch" />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-switch')
    await expect(items.length).toBe(2)

    await expect(items[0].querySelector('input[type="checkbox"]')).toHaveAttribute('role', 'switch')
    await expect(items[0].querySelector('.d1-switch__track')).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-switch__label')).toHaveTextContent('Loading switch')
    await expect(items[1].querySelector('.d1-switch__label')).toHaveTextContent('Another loading switch')
  }
}
export const SwitchSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Switch },
    template: `
        
        <D1Switch>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </D1Switch>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')
    const labelStrong = canvasElement.querySelector('.d1-switch__label strong')
    const descriptionEm = canvasElement.querySelector('.d1-switch__description em')

    await expect(switchInput).toHaveAttribute('role', 'switch')
    await expect(labelStrong).toHaveTextContent('Custom label slot')
    await expect(descriptionEm).toHaveTextContent('Custom description slot')
  }
}
export const SwitchEventsAndExpose: Story = {
  name: 'События и expose API',
  render: () => ({
    components: { D1Switch },
    setup() {
      const switchReference = ref<SwitchExpose | null>(null)
      const switchValue = ref(false)
      const lastEvent = ref('none')
      const focusState = ref('idle')
      const exposeSummary = ref('ready')

      const onInputLite = (validationItem: FieldValidationItem<boolean>) => {
        lastEvent.value = 'inputLite:' + String(validationItem.value)
      }
      const onChangeLite = (validationItem: FieldValidationItem<boolean>) => {
        lastEvent.value = 'changeLite:' + String(validationItem.value)
      }
      const onFocus = (event: FocusEvent) => {
        if (event.type === 'focus') {
          focusState.value = 'focused'
        }
      }
      const onBlur = (event: FocusEvent) => {
        if (event.type === 'blur') {
          focusState.value = 'blurred'
        }
      }
      const readExpose = () => {
        const currentValue = switchReference.value?.getValue()
        const isValid = switchReference.value?.checkValidity()
        const validationText = switchReference.value?.getValidationMessage()
        const changed = switchReference.value?.isChanged()
        exposeSummary.value = 'value:' + String(currentValue)
          + '|valid:' + String(isValid)
          + '|changed:' + String(changed)
          + '|message:' + String(validationText)
      }
      const applyTrue = () => {
        switchReference.value?.setValue(true)
        readExpose()
      }
      const clearValue = () => {
        switchReference.value?.clear()
        readExpose()
      }

      return {
        switchReference,
        switchValue,
        lastEvent,
        focusState,
        exposeSummary,
        onInputLite,
        onChangeLite,
        onFocus,
        onBlur,
        readExpose,
        applyTrue,
        clearValue
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="readExpose">Check expose</button>
            <button type="button" class="wiki-storybook-button" @click="applyTrue">Set true</button>
            <button type="button" class="wiki-storybook-button" @click="clearValue">Clear</button>
          </div>
          <D1Switch
            ref="switchReference"
            v-model="switchValue"
            label="Accept required policy"
            required
            :validation-code="{ valueMissing: 'Acceptance required' }"
            @input-lite="onInputLite"
            @change-lite="onChangeLite"
            @focus="onFocus"
            @blur="onBlur"
          />
          <div class="wiki-storybook-card">
            <span data-testid="switch-event-output">{{ lastEvent }}</span>
            |
            <span data-testid="switch-focus-output">{{ focusState }}</span>
            |
            <span data-testid="switch-expose-output">{{ exposeSummary }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const switchInput = canvasElement.querySelector<HTMLInputElement>('input[type="checkbox"]')

    await expect(switchInput).toBeInTheDocument()
    await expect(switchInput).toHaveAttribute('role', 'switch')

    await step('Validate required unchecked switch via expose', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Check expose' }))
      await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:false|valid:false|changed:false|message:')
    })

    await step('Focus, click, and blur switch to trigger events', async () => {
      if (switchInput) {
        await fireEvent.focus(switchInput)
        await expect(canvas.getByTestId('switch-focus-output')).toHaveTextContent('focused')
        await userEvent.click(switchInput)
        await fireEvent.blur(switchInput)
      }
      await waitFor(async () => {
        await expect(switchInput?.checked).toBe(true)
        await expect(canvas.getByTestId('switch-focus-output')).toHaveTextContent('blurred')
        await expect(canvas.getByTestId('switch-event-output')).toHaveTextContent('true')
      })
    })

    await step('Verify valid state, clear(), and setValue(true)', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Check expose' }))
      await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:true|valid:true|changed:true|message:')

      await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
      await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:undefined|valid:false|changed:true|message:Acceptance required')

      await userEvent.click(canvas.getByRole('button', { name: 'Set true' }))
      await expect(canvas.getByTestId('switch-expose-output')).toHaveTextContent('value:true|valid:true')
    })
  }
}
export const SwitchTestStates: Story = {
  name: 'Тест: Состояния disabled, readonly, focus, loading и indeterminate',
  render: () => ({
    components: { D1Switch },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Switch label="Disabled" disabled />
          <D1Switch label="Readonly" readonly />
          <D1Switch label="Focus" focus />
          <D1Switch label="Loading boolean" loading :modelValue="true" />
          <D1Switch label="Loading object" :loading="{ visible: true, circular: true }" :modelValue="true" />
          <D1Switch label="Indeterminate" indeterminate :modelValue="true" />
          <D1Switch label="Disabled with forceShowMessage" disabled forceShowMessage helperMessage="Forced message" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-switch')
    await expect(items.length).toBe(7)

    items.forEach((item) => {
      const input = item.querySelector<HTMLInputElement>('input[type="checkbox"]')
      expect(input).toHaveAttribute('role', 'switch')
      expect(item.querySelector('.d1-switch__track')).toBeInTheDocument()
    })

    const disabledInput = items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(items[0]).toHaveClass('d1-switch--disabled')
    await expect(disabledInput?.disabled).toBe(true)

    const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
    await expect(readonlyInput?.checked).toBe(false)

    if (readonlyInput) {
      await userEvent.click(readonlyInput)
    }
    await expect(readonlyInput?.checked).toBe(false)

    await expect(items[2]).toHaveClass('d1-switch--focus')
    await expect(items[3].querySelector('.d1-switch__loading')).toBeInTheDocument()
    await expect(items[4].querySelector('.d1-switch__loading')).toBeInTheDocument()
    await expect(items[6]).toHaveTextContent('Forced message')
  }
}
export const SwitchTestSelected: Story = {
  name: 'Тест: Синхронизация selected и valueVariant',
  render: () => ({
    components: { D1Switch },
    setup() {
      return {
        selectedValue: ref('alpha')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Selected: {{ selectedValue }}</div>
          <D1Switch
            v-model:selected="selectedValue"
            name="switch-group-test"
            valueVariant="alpha"
            valueVariantHide="none"
            label="Alpha"
          />
          <D1Switch
            v-model:selected="selectedValue"
            name="switch-group-test"
            valueVariant="beta"
            valueVariantHide="none"
            label="Beta"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector('.wiki-storybook-card')
    const inputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
    const hiddenInputs = canvasElement.querySelectorAll<HTMLInputElement>('input[type="hidden"]')

    await expect(inputs[0]).toHaveAttribute('role', 'switch')
    await expect(inputs[1]).toHaveAttribute('role', 'switch')
    await expect(inputs[0].checked).toBe(true)
    await expect(inputs[1].checked).toBe(false)
    await expect(hiddenInputs[0].value).toBe('none')
    await expect(hiddenInputs[0].name).toBe('switch-group-test')
    await expect(card).toHaveTextContent('Selected: alpha')

    await userEvent.click(inputs[1])
    await waitFor(async () => {
      await expect(inputs[0].checked).toBe(false)
      await expect(inputs[1].checked).toBe(true)
      await expect(card).toHaveTextContent('Selected: beta')
    })
  }
}
export const SwitchTestLayoutAndMessages: Story = {
  name: 'Тест: Компоновка, container, числовой ноль, иконки и HTML-сообщения',
  render: () => ({
    components: { D1Switch },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Switch :label="0" :description="0" :modelValue="false" />
          <D1Switch label="Inline" :block="false" :itemCenter="false" container="rightMd" description="Top aligned" />
          <D1Switch label="Required" required validationMessage="Validation failed" />
          <D1Switch label="Warning" warningMessage="Check this setting" />
          <D1Switch label="HTML helper" hasHtmlCode helperMessage="Helper <strong>bold</strong> text" />
          <D1Switch label="Object icon" :iconCheckbox="{ value: 'verified' }" :modelValue="true" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-switch')
    await expect(items.length).toBe(6)

    await expect(items[0].querySelector('.d1-switch__label')).toHaveTextContent('0')
    await expect(items[0].querySelector('.d1-switch__description')).toHaveTextContent('0')
    await expect(items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked).toBe(false)

    await expect(items[1]).not.toHaveClass('d1-switch--block')
    await expect(items[1]).not.toHaveClass('d1-switch--itemCenter')
    await expect(items[1]).toHaveClass('d1-switch--container--rightMd')

    const requiredInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(items[2]).toHaveClass('d1-switch--required')
    await expect(requiredInput).toHaveAttribute('role', 'switch')
    await expect(requiredInput).toHaveAttribute('aria-invalid', 'true')
    await expect(items[2]).toHaveTextContent('Validation failed')

    await expect(items[3]).toHaveTextContent('Check this setting')
    await expect(items[4].querySelector('strong')).toHaveTextContent('bold')
    await expect(items[5].querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked).toBe(true)
  }
}
export const SwitchTestCombinationsAndAttributes: Story = {
  name: 'Тест: Комбинированные состояния, ARIA-атрибуты, adaptive и числовой valueVariant',
  render: () => ({
    components: { D1Switch },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Switch
            label="Disabled + Selected"
            disabled
            selected="yes"
            valueVariant="yes"
          />
          <D1Switch
            label="Readonly + Focus"
            readonly
            focus
            :modelValue="true"
          />
          <D1Switch
            label="Adaptive Right Always"
            adaptive="rightAlways"
            form="settings-form"
            labelId="story-switch-label"
            description="Accessible description"
            descriptionId="story-switch-description"
            :tabindex="1"
            :inputAttrs="{ id: 'story-switch-input', 'data-custom': 'switch-input' }"
          />
          <D1Switch
            label="Zero Variant"
            :valueVariant="0"
            :modelValue="true"
            :iconCheckbox="null"
          />
          <D1Switch
            label="Custom Indeterminate"
            indeterminate
            iconIndeterminate="close"
            :modelValue="true"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-switch')
    await expect(items.length).toBe(5)

    const disabledInput = items[0].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(items[0]).toHaveClass('d1-switch--disabled')
    await expect(disabledInput).toHaveAttribute('role', 'switch')
    await expect(disabledInput?.checked).toBe(true)
    await expect(disabledInput?.disabled).toBe(true)

    const readonlyInput = items[1].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(items[1]).toHaveClass('d1-switch--focus')
    await expect(readonlyInput).toHaveAttribute('role', 'switch')
    await expect(readonlyInput).toHaveAttribute('aria-readonly', 'true')
    await expect(readonlyInput?.checked).toBe(true)

    const adaptiveInput = items[2].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(items[2]).toHaveClass('d1-switch--adaptive--rightAlways')
    await expect(items[2]).toHaveAttribute('aria-labelledby', 'story-switch-label')
    await expect(items[2]).toHaveAttribute('aria-describedby', 'story-switch-description')
    await expect(adaptiveInput).toHaveAttribute('role', 'switch')
    await expect(adaptiveInput).toHaveAttribute('id', 'story-switch-input')
    await expect(adaptiveInput).toHaveAttribute('form', 'settings-form')
    await expect(adaptiveInput).toHaveAttribute('tabindex', '1')
    await expect(adaptiveInput).toHaveAttribute('data-custom', 'switch-input')

    const zeroInput = items[3].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(zeroInput).toHaveAttribute('role', 'switch')
    await expect(zeroInput?.checked).toBe(true)
    await expect(zeroInput?.value).toBe('0')

    const indeterminateInput = items[4].querySelector<HTMLInputElement>('input[type="checkbox"]')
    await expect(indeterminateInput).toHaveAttribute('role', 'switch')
    await expect(indeterminateInput?.checked).toBe(true)
  }
}
// :story-items [!] System label / Системная метка
