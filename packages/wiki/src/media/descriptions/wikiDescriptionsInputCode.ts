import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputCode component
 *
 * Описания свойств компонента InputCode
 */
export const wikiDescriptionsInputCode: StorybookComponentsDescriptionItem = {
  name: 'InputCode',
  description: {
    en: 'A validation code input component designed for OTP (One-Time Passwords) or SMS verification codes',
    ru: 'Компонент ввода проверочного кода, предназначенный для OTP (одноразовых паролей) или SMS-кодов подтверждения'
  },
  possibilities: {
    en: [
      'cell-by-cell coordinated code entry',
      'customizable code length (length property)',
      'support for success and validation states',
      'loading state handling',
      'automated focus navigation between cells'
    ],
    ru: [
      'скоординированный посимвольный ввод кода',
      'настраиваемая длина кода (свойство length)',
      'поддержка успешного состояния (success) и проверки (validation)',
      'обработка состояния загрузки (loading)',
      'автоматическая навигация фокуса между ячейками'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { InputCodeExpose } from \'@dxtmisha/constructor/InputCode\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\''
  ],
  stories: [
    {
      id: 'InputCodeVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const codeValue = ref('1234')
      return { codeValue }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="ic-vmodel-value">Current value: {{ codeValue }}</span>
            <button type="button" class="wiki-storybook-button" @click="codeValue = '4321'">Set '4321'</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button-warning" @click="codeValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="codeValue"
            label="Code input"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await step('Reflects initial v-model value in inputs', async () => {
  const inputs = canvasElement.querySelectorAll('input')
  await expect(inputs.length).toBe(4)
  await expect((inputs[0] as HTMLInputElement).value).toBe('1')
  await expect((inputs[3] as HTMLInputElement).value).toBe('4')
})
await step('Updates inputs when v-model changes externally', async () => {
  await userEvent.click(canvas.getByRole('button', { name: "Set '4321'" }))
  await waitFor(async () => {
    await expect(canvas.getByTestId('ic-vmodel-value')).toHaveTextContent('Current value: 4321')
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
  await waitFor(async () => {
    await expect(canvas.getByTestId('ic-vmodel-value')).toHaveTextContent('Current value:')
  })
})
      `
    },
    {
      id: 'InputCodeSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <DesignComponent
            isSkeleton
            label="Loading field"
            helperMessage="This field is loading..."
          />
        </DesignSkeleton>
      `,
      play: `
const inputs = canvasElement.querySelectorAll('input')
await expect(inputs.length).toBe(4)
const group = canvasElement.querySelector('[role="group"]')
await expect(group).toBeInTheDocument()
      `
    },
    {
      id: 'InputCodeTestStatesAndValidation',
      name: {
        en: 'Test: States, validation, hide, disabled and match',
        ru: 'Тест: Состояния, валидация, скрытие, отключение и фильтр символов'
      },
      propsName: [
        'validation',
        'validationMessage',
        'warningMessage',
        'helperMessage',
        'success',
        'loading',
        'disabled',
        'forceShowMessage',
        'hide',
        'match',
        'inputMode',
        'autocomplete',
        'placeholder',
        'name'
      ],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="ic-test-validation"
            label="Verification"
            :validation="true"
            validation-message="Incorrect code"
            warning-message="Check SMS"
            helper-message="Enter 4 digits"
          />
          <DesignComponent
            data-testid="ic-test-success"
            label="Confirmed"
            value="1234"
            :success="true"
            :loading="true"
          />
          <DesignComponent
            data-testid="ic-test-disabled"
            label="Locked"
            :disabled="true"
            :force-show-message="true"
            helper-message="Temporarily locked"
          />
          <DesignComponent
            data-testid="ic-test-alpha"
            :hide="true"
            :match="/[a-zA-Z0-9]/"
            input-mode="text"
            autocomplete="off"
            placeholder="A"
            name="pin"
          />
        </div>
      `,
      play: `
const validationGroup = canvasElement.querySelector('[data-testid="ic-test-validation"]')
await expect(validationGroup).toHaveAttribute('role', 'group')
await expect(validationGroup).toHaveAttribute('aria-describedby')
await expect(validationGroup?.querySelector('input')).toHaveAttribute('aria-invalid', 'true')

const disabledGroup = canvasElement.querySelector('[data-testid="ic-test-disabled"]')
await expect(disabledGroup?.querySelector('input')).toHaveAttribute('aria-disabled', 'true')
await expect(disabledGroup).toHaveTextContent('Temporarily locked')

const alphaGroup = canvasElement.querySelector('[data-testid="ic-test-alpha"]')
const alphaInput = alphaGroup?.querySelector('input') as HTMLInputElement
await expect(alphaInput).toHaveAttribute('inputmode', 'text')
await expect(alphaInput).toHaveAttribute('autocomplete', 'off')
      `
    },
    {
      id: 'InputCodeTestLengthAndExpose',
      name: {
        en: 'Test: Custom length, input event and expose API',
        ru: 'Тест: Пользовательская длина, событие input и expose API'
      },
      propsName: ['length'],
      setup: `
      const codeReference = ref<InputCodeExpose | null>(null)
      const latestInput = ref('')
      const readValue = ref('')
      return {
        codeReference,
        latestInput,
        readValue,
        onInput: (value: string) => {
          latestInput.value = value
        },
        callSet: () => {
          codeReference.value?.set('654321')
          readValue.value = '654321'
        },
        callReset: () => {
          codeReference.value?.reset()
          readValue.value = codeReference.value?.getValue() ?? ''
        },
        callFocus: () => {
          codeReference.value?.focus()
        }
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="callSet">Set 654321</button>
            <button type="button" class="wiki-storybook-button" @click="callReset">Reset</button>
            <button type="button" class="wiki-storybook-button" @click="callFocus">Focus</button>
          </div>
          <span data-testid="ic-test-expose-read">{{ readValue }}</span>
          <span data-testid="ic-test-input-log">{{ latestInput }}</span>
          <DesignComponent
            ref="codeReference"
            :length="6"
            label="Security PIN"
            @input="onInput"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const inputs = canvasElement.querySelectorAll('input')
await expect(inputs.length).toBe(6)

await step('Calls expose set, reset and focus', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set 654321' }))
  await waitFor(async () => {
    await expect((inputs[0] as HTMLInputElement).value).toBe('6')
    await expect((inputs[5] as HTMLInputElement).value).toBe('1')
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
  await waitFor(async () => {
    await expect((inputs[0] as HTMLInputElement).value).toBe('')
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Focus' }))
  await expect(document.activeElement).toBe(inputs[0])
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputCode'} type={'inputCode'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputCodeVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputCodeSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputCode'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'set'}/>
<StorybookDescriptions componentName={'Expose'} type={'reset'}/>
<StorybookDescriptions componentName={'Expose'} type={'focus'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `
  },
  ai: {
    description: `
A verification code input component designed for OTP (One-Time Password) entry.
Coordinates multiple sub-input cells (InputCodeItem), managing active focus transitions.
Supports length, success, loading, match regex, and standard event bindings.
    `
  }
}
