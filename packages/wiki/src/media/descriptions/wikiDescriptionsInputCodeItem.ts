import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputCodeItem component
 *
 * Описания свойств компонента InputCodeItem
 */
export const wikiDescriptionsInputCodeItem: StorybookComponentsDescriptionItem = {
  name: 'InputCodeItem',
  description: {
    en: 'An individual input field cell representing a single character or digit within a verification code sequence',
    ru: 'Отдельная ячейка ввода, представляющая собой один символ или цифру в составе проверочного кода'
  },
  possibilities: {
    en: [
      'represents a single digit/character entry field',
      'custom RegExp character validation (match property)',
      'keystroke intercepting and focus routing (arrows, backspace)',
      'character hiding support (hide property for PINs)'
    ],
    ru: [
      'представляет поле ввода для одного символа/цифры',
      'пользовательская проверка символа с помощью RegExp (свойство match)',
      'перехват нажатий клавиш и перенаправление фокуса (стрелки, backspace)',
      'поддержка скрытия символов (свойство hide для PIN-кодов)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { InputCodeItemExpose } from \'@dxtmisha/constructor/InputCodeItem\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'InputCodeItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent placeholder="0" :index="0" text-symbol="Digit [index]" />
          <DesignComponent hide placeholder="1" :index="1" text-symbol="Digit [index]" />
          <DesignComponent success placeholder="2" :index="2" text-symbol="Digit [index]" />
          <DesignComponent error placeholder="3" :index="3" text-symbol="Digit [index]" />
          <DesignComponent disabled placeholder="4" :index="4" text-symbol="Digit [index]" />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)
await expect(items[1].querySelector('.design-component__sub')).toBeInTheDocument()
await expect(items[3].querySelector('input')).toHaveAttribute('aria-invalid', 'true')
await expect(items[4].querySelector('input')).toHaveAttribute('aria-disabled', 'true')
await expect(items[0].querySelector('input')).toHaveAttribute('aria-label', 'Digit 1')
      `
    },
    {
      id: 'InputCodeItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex">
            <DesignComponent is-skeleton placeholder="0" />
            <DesignComponent is-skeleton placeholder="1" />
            <DesignComponent is-skeleton placeholder="2" />
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only — NEVER in documentation)
    // =========================================================================
    {
      id: 'InputCodeItemTestPropsAndExpose',
      name: {
        en: 'Test: Props, events and expose API',
        ru: 'Тест: Свойства, события и expose API'
      },
      propsName: ['move', 'name', 'index', 'autocomplete', 'match', 'inputMode', 'placeholder', 'tabindex', 'textSymbol'],
      setup: `
      const itemReference = ref<InputCodeItemExpose | null>(null)
      const currentValue = ref<string>('')
      const lastEvent = ref<string>('')

      const setValue = (): void => {
        itemReference.value?.set('8')
        currentValue.value = itemReference.value?.getValue() ?? ''
      }

      const resetValue = (): void => {
        itemReference.value?.reset()
        currentValue.value = itemReference.value?.getValue() ?? ''
      }

      const onInput = (index: string | number | undefined, value: string): void => {
        currentValue.value = value
        lastEvent.value = 'input:' + String(index) + ':' + value
      }

      return {
        itemReference,
        currentValue,
        lastEvent,
        setValue,
        resetValue,
        onInput
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="setValue">Set 8</button>
            <button type="button" class="wiki-storybook-button" @click="resetValue">Reset</button>
            <span data-testid="ici-test-value">{{ currentValue }}</span>
            <span data-testid="ici-test-event">{{ lastEvent }}</span>
          </div>

          <DesignComponent
            ref="itemReference"
            :index="2"
            :move="false"
            name="otp-cell"
            autocomplete="off"
            :match="/[a-zA-Z0-9]/"
            input-mode="text"
            placeholder="_"
            :tabindex="0"
            text-symbol="Code char [index]"
            @input="onInput"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const input = canvasElement.querySelector('input') as HTMLInputElement

await expect(input).toHaveAttribute('name', 'otp-cell__2')
await expect(input).toHaveAttribute('autocomplete', 'off')
await expect(input).toHaveAttribute('inputmode', 'text')
await expect(input).toHaveAttribute('placeholder', '_')
await expect(input).toHaveAttribute('tabindex', '0')
await expect(input).toHaveAttribute('aria-label', 'Code char 3')

await step('Test expose set and reset', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set 8' }))
  await expect(canvas.getByTestId('ici-test-value')).toHaveTextContent('8')

  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
  await expect(canvas.getByTestId('ici-test-value')).toHaveTextContent('')
})

await step('Test typing emits input event', async () => {
  await userEvent.type(input, 'A')
  await waitFor(() => {
    expect(canvas.getByTestId('ici-test-event')).toHaveTextContent('input:2:A')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputCodeItem'} type={'inputCodeItem'}/>
<Canvas of={Component.InputCodeItemBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputCodeItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputCodeItem'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'InputCodeItem'} type={'expose'}/>
    `
  },
  ai: {
    description: `
An individual code input cell managed by InputCode.
Handles single key entries, RegExp check via match prop, hidden values via hide, and emits focus/input/paste/backspace.
    `,
    hide: true
  }
}
