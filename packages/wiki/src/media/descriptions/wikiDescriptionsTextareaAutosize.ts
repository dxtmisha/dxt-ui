import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TextareaAutosize component
 *
 * Описания свойств компонента TextareaAutosize
 */
export const wikiDescriptionsTextareaAutosize: StorybookComponentsDescriptionItem = {
  name: 'TextareaAutosize',
  description: {
    en: 'Textarea component that automatically adjusts its height based on content',
    ru: 'Компонент текстового поля, которое автоматически подстраивает свою высоту под содержимое'
  },
  possibilities: {
    en: [
      'automatic height adjustment based on content (`autosize`)',
      'hidden `aria-hidden="true"` clone element for precise height calculation',
      'respects padding and styling from the original textarea',
      'smooth height transitions on content change',
      'supports standard native textarea attributes via `inputAttrs` (`rows`, `cols`, `maxlength`, `placeholder`, `disabled`, `readonly`)',
      'optional `autosize` toggle for fixed-height fallback',
      'reactive `value` binding with `@input` event emission and exposed `getValue()` method'
    ],
    ru: [
      'автоматическая подстройка высоты под содержимое (`autosize`)',
      'скрытый элемент-клон с `aria-hidden="true"` для точного расчёта высоты',
      'учитывает отступы и стили исходного textarea',
      'плавные переходы высоты при изменении содержимого',
      'поддержка стандартных атрибутов textarea через `inputAttrs` (`rows`, `cols`, `maxlength`, `placeholder`, `disabled`, `readonly`)',
      'опциональное отключение `autosize` для фиксированной высоты',
      'реактивная привязка `value` с генерацией события `@input` и экспонируемым методом `getValue()`'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { TextareaAutosizeExpose } from \'@dxtmisha/constructor/TextareaAutosize\''
  ],
  render: `
      <DesignComponent v-bind="args" :inputAttrs="{ style: 'width: 240px; border: 1px solid #90A1B9FF' }" />
    `,
  play: `
const textarea = canvasElement.querySelector<HTMLTextAreaElement>('textarea.design-component')
await expect(textarea).toBeInTheDocument()

const clone = canvasElement.querySelector<HTMLElement>('.design-component__clone')
await expect(clone).toBeInTheDocument()
await expect(clone).toHaveAttribute('aria-hidden', 'true')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TextareaAutosizeBasic',
      name: {
        en: 'Autosize and fixed height',
        ru: 'Авторазмер и фиксированная высота'
      },
      setup: `
      const initialLines = 'First line\\nSecond line'
      return {
        initialLines
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">autosize: true (default)</div>
            <DesignComponent
              :value="initialLines"
              :input-attrs="{ placeholder: 'Type multiple lines...', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 8px;' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">autosize: false</div>
            <DesignComponent
              :autosize="false"
              value="Fixed height textarea"
              :input-attrs="{ rows: 3, cols: 24, placeholder: 'Fixed height', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 8px;' }"
            />
          </div>
        </div>
      `,
      play: `
const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea.design-component')
await expect(textareas.length).toBe(2)

await expect(textareas[0]).toHaveClass('design-component--autosize')
await expect(textareas[1]).not.toHaveClass('design-component--autosize')
await expect(textareas[1]).toHaveAttribute('rows', '3')
await expect(textareas[1]).toHaveAttribute('cols', '24')

const clones = canvasElement.querySelectorAll<HTMLElement>('.design-component__clone')
await expect(clones.length).toBe(2)
await expect(clones[0]).toHaveAttribute('aria-hidden', 'true')
await expect(clones[1]).toHaveAttribute('aria-hidden', 'true')

await step('Type additional line into autosize textarea', async () => {
  await userEvent.click(textareas[0])
  await userEvent.type(textareas[0], ' updated')
  await expect(textareas[0].value).toContain('updated')
})
      `
    },
    {
      id: 'TextareaAutosizeEventsAndExpose',
      name: {
        en: 'Input event and exposed getValue()',
        ru: 'Событие input и метод getValue()'
      },
      setup: `
      const textareaAutosizeReference = ref<TextareaAutosizeExpose | null>(null)
      const textValue = ref('Initial note')
      const lastInputValue = ref('none')
      const exposedValue = ref('none')

      const onTextInput = (event: InputEvent) => {
        const target = event.target as HTMLTextAreaElement | null
        if (target) {
          textValue.value = target.value
          lastInputValue.value = target.value
        }
      }

      const readExposedValue = () => {
        exposedValue.value = textareaAutosizeReference.value?.getValue() ?? ''
      }

      const setReactiveValue = () => {
        textValue.value = 'Programmatic text'
      }

      return {
        textareaAutosizeReference,
        textValue,
        lastInputValue,
        exposedValue,
        onTextInput,
        readExposedValue,
        setReactiveValue
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="textareaAutosizeReference"
            :value="textValue"
            :input-attrs="{ placeholder: 'Enter notes...', style: 'width: 280px; border: 1px solid #90A1B9FF; padding: 8px;' }"
            @input="onTextInput"
          />
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="readExposedValue">Read getValue</button>
            <button class="wiki-storybook-button" @click="setReactiveValue">Set reactive value</button>
            <span data-testid="autosize-input-output">{{ lastInputValue }}</span>
            <span data-testid="autosize-expose-output">{{ exposedValue }}</span>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const textarea = canvasElement.querySelector<HTMLTextAreaElement>('textarea.design-component')
await expect(textarea).toBeInTheDocument()
await expect(textarea?.value).toBe('Initial note')

await step('Type into textarea and check @input and getValue()', async () => {
  await userEvent.clear(textarea!)
  await userEvent.type(textarea!, 'Hello autosize')
  await expect(canvas.getByTestId('autosize-input-output')).toHaveTextContent('Hello autosize')

  await userEvent.click(canvas.getByRole('button', { name: 'Read getValue' }))
  await expect(canvas.getByTestId('autosize-expose-output')).toHaveTextContent('Hello autosize')
})

await step('Update reactive value prop and verify DOM and getValue()', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Set reactive value' }))
  await waitFor(() => {
    expect(textarea?.value).toBe('Programmatic text')
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Read getValue' }))
  await expect(canvas.getByTestId('autosize-expose-output')).toHaveTextContent('Programmatic text')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — never in documentation)
    // =========================================================================
    {
      id: 'TextareaAutosizeTestAttributesAndStates',
      name: {
        en: 'Test: Native attributes, inputAttrs, disabled and readonly states',
        ru: 'Тест: Нативные атрибуты, inputAttrs, состояния disabled и readonly'
      },
      propsName: ['autosize', 'value', 'inputAttrs'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">rows + cols + maxlength + placeholder</div>
            <DesignComponent
              :autosize="true"
              value=""
              :input-attrs="{ rows: 4, cols: 30, maxlength: 10, placeholder: 'Max 10 chars', 'aria-label': 'Limited note', 'data-custom-textarea': 'limited', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 6px;' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">disabled + autosize</div>
            <DesignComponent
              :autosize="true"
              value="Locked text"
              :input-attrs="{ disabled: true, 'aria-label': 'Disabled note', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 6px;' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">readonly + autosize: false</div>
            <DesignComponent
              :autosize="false"
              value="Read only content"
              :input-attrs="{ readonly: true, rows: 2, 'aria-label': 'Readonly note', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 6px;' }"
            />
          </div>
        </div>
      `,
      play: `
const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea.design-component')
await expect(textareas.length).toBe(3)

const clones = canvasElement.querySelectorAll<HTMLElement>('.design-component__clone')
await expect(clones.length).toBe(3)
clones.forEach((clone) => {
  expect(clone).toHaveAttribute('aria-hidden', 'true')
})

// 1. rows, cols, maxlength, placeholder, custom data attr
await expect(textareas[0]).toHaveClass('design-component--autosize')
await expect(textareas[0]).toHaveAttribute('rows', '4')
await expect(textareas[0]).toHaveAttribute('cols', '30')
await expect(textareas[0]).toHaveAttribute('maxlength', '10')
await expect(textareas[0]).toHaveAttribute('placeholder', 'Max 10 chars')
await expect(textareas[0]).toHaveAttribute('aria-label', 'Limited note')
await expect(textareas[0]).toHaveAttribute('data-custom-textarea', 'limited')

await step('Enforce maxlength constraint on input', async () => {
  await userEvent.click(textareas[0])
  await userEvent.type(textareas[0], '123456789012345')
  await expect(textareas[0].value).toBe('1234567890')
})

// 2. disabled textarea
await expect(textareas[1]).toBeDisabled()
await expect(textareas[1]).toHaveClass('design-component--autosize')
await expect(textareas[1].value).toBe('Locked text')

// 3. readonly textarea with autosize disabled
await expect(textareas[2]).toHaveAttribute('readonly')
await expect(textareas[2]).not.toHaveClass('design-component--autosize')
await expect(textareas[2]).toHaveAttribute('rows', '2')
await expect(textareas[2].value).toBe('Read only content')

await step('Verify readonly textarea rejects user typing', async () => {
  await userEvent.click(textareas[2])
  await userEvent.type(textareas[2], 'extra')
  await expect(textareas[2].value).toBe('Read only content')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TextareaAutosize'} type={'textarea-autosize'}/>
<Canvas of={Component.TextareaAutosizeBasic}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input-standard'}/>
<Canvas of={Component.TextareaAutosizeEventsAndExpose}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
    `
  },
  ai: {
    description: `
Low-level functional engine for multi-line inputs that provides precise, real-time height adjustment based on content. Implements a reliable hidden aria-hidden clone mechanism to calculate scroll-free container heights while respecting parent padding and font styles.
Features automated height synchronization during content changes, supporting smooth CSS transitions and native textarea attributes via inputAttrs. Operates as a foundational tool for the Textarea component, ensuring character entry never triggers unwanted shift or overflow.
Primarily integrated as a subcomponent; should generally not be manually used for standalone input fields. Controlled via reactive value bindings, @input events, and exposed getValue(), serving as the high-performance core for any dynamic data entry element requiring responsive layout scaling.
    `,
    hide: true
  }
}
