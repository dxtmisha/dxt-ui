import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Textarea from './D1Textarea.vue'
import { TextareaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { TextareaExpose as TextareaExposeType } from '@dxtmisha/constructor/Textarea'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Textarea',
  component: D1Textarea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextareaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextareaWikiStorybook.getWiki(),
  args: TextareaWikiStorybook.getValues()
} satisfies Meta<typeof D1Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Textarea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Textarea },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
        <D1Textarea
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
          v-bind="args"
        />
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-textarea')
    const textareaElement = canvasElement.querySelector<HTMLTextAreaElement>('textarea')
    await expect(component).toBeInTheDocument()
    await expect(textareaElement).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TextareaAutosize: Story = {
  name: 'Автоматическое изменение размера и фиксированные строки',
  render: () => ({
    components: { D1Textarea },
    setup() {
      const initialLines = 'First line\nSecond line'
      return {
        initialLines
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Textarea
            label="Auto-growing comment"
            placeholder="Start typing..."
            :autosize="true"
            :value="initialLines"
          />
          <D1Textarea
            label="Fixed size textarea"
            placeholder="Fixed 4 rows"
            :autosize="false"
            :rows="4"
            :cols="32"
            wrap="soft"
            value="Static height content"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea')
    await expect(textareas.length).toBe(2)

    await expect(textareas[1]).toHaveAttribute('rows', '4')
    await expect(textareas[1]).toHaveAttribute('cols', '32')
    await expect(textareas[1]).toHaveAttribute('wrap', 'soft')

    await step('Type into autosize textarea', async () => {
      await userEvent.click(textareas[0])
      await userEvent.type(textareas[0], ' more text')
      await expect(textareas[0].value).toContain('more text')
    })
  }
}
export const TextareaVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Textarea },
    setup() {
      const commentValue = ref('Initial notes')
      return {
        commentValue
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="textarea-vmodel-value">Current value: {{ commentValue }}</span>
            <button class="wiki-storybook-button" @click="commentValue = 'Updated description'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="commentValue = ''">Clear</button>
          </div>
          <D1Textarea
            v-model="commentValue"
            label="Description"
            placeholder="Write a detailed description"
            helper-message="Up to 120 characters"
            counter-show
            :maxlength="120"
            cancel="always"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textareaElement = canvasElement.querySelector<HTMLTextAreaElement>('textarea')
    await expect(textareaElement).toBeInTheDocument()
    await expect(canvas.getByTestId('textarea-vmodel-value')).toHaveTextContent('Initial notes')
    await expect(canvasElement.textContent).toContain('Up to 120 characters')

    await step('Update v-model programmatically via button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set text' }))
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-vmodel-value')).toHaveTextContent('Updated description')
        expect(textareaElement?.value).toBe('Updated description')
      })
    })

    await step('Type directly into textarea and verify v-model sync', async () => {
      await userEvent.click(textareaElement!)
      await userEvent.type(textareaElement!, '!')
      await expect(canvas.getByTestId('textarea-vmodel-value')).toHaveTextContent('Updated description!')
    })

    await step('Clear value via button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
      await waitFor(() => {
        expect(textareaElement?.value).toBe('')
      })
    })
  }
}
export const TextareaSlots: Story = {
  name: 'Слоты',
  render: () => ({
    components: { D1Textarea },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Textarea
            label="Message with slots"
            value="Hello team"
          >
            <template #leading><span>[Lead]</span></template>
            <template #trailing><span>[Trail]</span></template>
            <template #prefix><span>Note:</span></template>
            <template #suffix><span>(draft)</span></template>
            <template #caption><span>Caption</span></template>
          </D1Textarea>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.textContent).toContain('[Lead]')
    await expect(canvasElement.textContent).toContain('[Trail]')
    await expect(canvasElement.textContent).toContain('Note:')
    await expect(canvasElement.textContent).toContain('(draft)')
    await expect(canvasElement.textContent).toContain('Caption')
  }
}
export const TextareaSkeleton: Story = {
  name: 'Состояние скелетона',
  render: () => ({
    components: { D1Textarea, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width: 360px">
          <div class="wiki-storybook-flex-column">
            <D1Textarea
              is-skeleton
              label="Loading biography"
              helper-message="Fetching profile details..."
            />
            <D1Textarea
              is-skeleton
              label="Loading summary"
              counter-show
            />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const components = canvasElement.querySelectorAll('.d1-textarea')
    await expect(components.length).toBe(2)
  }
}
export const TextareaExpose: Story = {
  name: 'Экспонируемые методы',
  render: () => ({
    components: { D1Textarea },
    setup() {
      const textareaReference = ref<TextareaExposeType | null>(null)
      const noteValue = ref('')
      const exposeStatus = ref('none')

      const runCheckValidity = () => {
        const isValid = textareaReference.value?.checkValidity()
        const message = textareaReference.value?.getValidationMessage() ?? ''
        exposeStatus.value = 'valid:' + String(isValid) + '|hasMessage:' + String(message.length > 0)
      }

      const runSetValue = () => {
        textareaReference.value?.setValue('Programmatic value')
        const currentValue = textareaReference.value?.getValue()
        const isValid = textareaReference.value?.checkValidity()
        const changed = textareaReference.value?.isChanged()
        exposeStatus.value = String(currentValue) + '|' + String(isValid) + '|' + String(changed)
      }

      const runClear = () => {
        textareaReference.value?.clear()
        exposeStatus.value = 'cleared:' + String(textareaReference.value?.getValue() ?? '')
      }

      return {
        textareaReference,
        noteValue,
        exposeStatus,
        runCheckValidity,
        runSetValue,
        runClear
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Textarea
            ref="textareaReference"
            v-model="noteValue"
            label="Required note"
            required
          />
          <div class="wiki-storybook-flex">
            <button data-testid="textarea-expose-check" class="wiki-storybook-button" @click="runCheckValidity">checkValidity</button>
            <button data-testid="textarea-expose-set" class="wiki-storybook-button" @click="runSetValue">setValue</button>
            <button data-testid="textarea-expose-clear" class="wiki-storybook-button" @click="runClear">clear</button>
            <span data-testid="textarea-expose-out">{{ exposeStatus }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Check validity when empty untouched required textarea fails validation', async () => {
      await userEvent.click(canvas.getByTestId('textarea-expose-check'))
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-expose-out')).toHaveTextContent('valid:false|hasMessage:false')
      })
    })

    await step('Set value programmatically and verify getValue and checkValidity', async () => {
      await userEvent.click(canvas.getByTestId('textarea-expose-set'))
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-expose-out')).toHaveTextContent('Programmatic value|true|false')
      })
    })

    await step('Type, clear value programmatically, and verify validation message after user change', async () => {
      const textareaElement = canvasElement.querySelector<HTMLTextAreaElement>('textarea')
      await userEvent.click(textareaElement!)
      await userEvent.type(textareaElement!, '!')
      await userEvent.click(canvas.getByTestId('textarea-expose-clear'))
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-expose-out')).toHaveTextContent('cleared:')
      })
      await userEvent.click(canvas.getByTestId('textarea-expose-check'))
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-expose-out')).toHaveTextContent('valid:false|hasMessage:true')
      })
    })
  }
}
export const TextareaTestStatesAndCancel: Story = {
  name: 'Тест: Отключённое, только чтение, загрузка, кнопка очистки и комбинации',
  render: () => ({
    components: { D1Textarea },
    setup() {
      const clearableValue = ref('Clearable note')
      return {
        clearableValue
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Textarea
            label="Disabled textarea"
            value="Cannot edit"
            disabled
          />
          <D1Textarea
            label="Readonly textarea"
            value="Read only value"
            readonly
          />
          <D1Textarea
            label="Disabled and readonly"
            value="Locked both"
            disabled
            readonly
          />
          <D1Textarea
            label="Loading textarea"
            value="Loading..."
            loading
          />
          <D1Textarea
            v-model="clearableValue"
            label="Cancel always with icons"
            cancel="always"
            align="center"
            icon="edit"
            icon-trailing="check"
          />
          <D1Textarea
            label="Cancel none (default)"
            value="No clear button"
            cancel="none"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea')
    await expect(textareas.length).toBe(6)

    // 0. disabled
    await expect(textareas[0]).toBeDisabled()
    await expect(textareas[0].value).toBe('Cannot edit')

    // 1. readonly
    await expect(textareas[1]).toHaveAttribute('readonly')
    await expect(textareas[1].value).toBe('Read only value')

    await step('Readonly textarea ignores typing', async () => {
      await userEvent.click(textareas[1])
      await userEvent.type(textareas[1], 'added')
      await expect(textareas[1].value).toBe('Read only value')
    })

    // 2. disabled + readonly combined
    await expect(textareas[2]).toBeDisabled()
    await expect(textareas[2]).toHaveAttribute('readonly')

    // 3. loading state renders indeterminate progress status indicator
    const components = canvasElement.querySelectorAll<HTMLElement>('.d1-textarea')
    await waitFor(() => {
      expect(components[3].querySelector('[role="status"]')).toBeInTheDocument()
    })

    // 4. cancel="always" clears textarea value on click
    await expect(textareas[4].value).toBe('Clearable note')
    const cancelButton = components[4].querySelector<HTMLElement>('[data-event-type="cancel"]')
    await expect(cancelButton).toBeInTheDocument()

    await step('Click cancel button to clear textarea value', async () => {
      await userEvent.click(cancelButton!)
      await waitFor(() => {
        expect(textareas[4].value).toBe('')
      })
    })

    // 5. cancel="none" has no cancel button
    await expect(components[5].querySelector('[data-event-type="cancel"]')).toBeNull()
  }
}
export const TextareaTestValidationCounterAndAttrs: Story = {
  name: 'Тест: Валидация, предупреждения, счётчик, maxlength и кастомные атрибуты',
  render: () => ({
    components: { D1Textarea },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Textarea
            label="Helper and counter"
            value="Hello"
            helper-message="Helpful guidance"
            counter-show
            :maxlength="50"
          />
          <D1Textarea
            label="Forced validation error"
            value="Invalid entry"
            validation-message="Server rejected this message"
            force-show-message
          />
          <D1Textarea
            label="Warning message"
            value="Check spelling"
            warning
            warning-message="Potential typo detected"
          />
          <D1Textarea
            label="Custom attributes"
            value="Wrapped text"
            :autosize="false"
            :rows="3"
            :cols="28"
            wrap="hard"
            :minlength="4"
            :field-attrs="{ 'data-test-field': 'true' }"
            :input-attrs="{ 'data-test-input': 'true' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Helpful guidance')
      expect(canvasElement.textContent).toContain('5')
      expect(canvasElement.textContent).toContain('50')
      expect(canvasElement.textContent).toContain('Server rejected this message')
      expect(canvasElement.textContent).toContain('Potential typo detected')
    })

    await expect(canvasElement.querySelector('[data-test-field="true"]')).toBeInTheDocument()
    const customTextarea = canvasElement.querySelector<HTMLTextAreaElement>('[data-test-input="true"]')
    await expect(customTextarea).toBeInTheDocument()
    await expect(customTextarea).toHaveAttribute('rows', '3')
    await expect(customTextarea).toHaveAttribute('cols', '28')
    await expect(customTextarea).toHaveAttribute('wrap', 'hard')
    await expect(customTextarea).toHaveAttribute('minlength', '4')
  }
}
export const TextareaTestEvents: Story = {
  name: 'Тест: Управляемое значение и события input, change, focus, blur',
  render: () => ({
    components: { D1Textarea },
    setup() {
      const controlledText = ref('Start')
      const focusOutput = ref('none')
      const inputOutput = ref('none')
      const inputLiteOutput = ref('none')
      const changeOutput = ref('none')
      const changeLiteOutput = ref('none')

      const onFocus = (_event: FocusEvent) => {
        focusOutput.value = 'focused'
      }

      const onBlur = (_event: FocusEvent) => {
        focusOutput.value = 'blurred'
      }

      const onInput = (_event: InputEvent | Event, data: FieldValidationItem<string>) => {
        controlledText.value = data.value
        inputOutput.value = 'input:' + String(data.value)
      }

      const onInputLite = (data: FieldValidationItem<string>) => {
        inputLiteOutput.value = 'inputLite:' + String(data.value)
      }

      const onChange = (_event: InputEvent | Event, data: FieldValidationItem<string>) => {
        changeOutput.value = 'change:' + String(data.value)
      }

      const onChangeLite = (data: FieldValidationItem<string>) => {
        changeLiteOutput.value = 'changeLite:' + String(data.value)
      }

      return {
        controlledText,
        focusOutput,
        inputOutput,
        inputLiteOutput,
        changeOutput,
        changeLiteOutput,
        onFocus,
        onBlur,
        onInput,
        onInputLite,
        onChange,
        onChangeLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Textarea
            :value="controlledText"
            label="Event tracking textarea"
            placeholder="Type here"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @input-lite="onInputLite"
            @change="onChange"
            @change-lite="onChangeLite"
          />
          <button class="wiki-storybook-button" type="button">Blur target</button>
          <div class="wiki-storybook-flex">
            <span data-testid="textarea-focus-out">{{ focusOutput }}</span>
            <span data-testid="textarea-input-out">{{ inputOutput }}</span>
            <span data-testid="textarea-input-lite-out">{{ inputLiteOutput }}</span>
            <span data-testid="textarea-change-out">{{ changeOutput }}</span>
            <span data-testid="textarea-change-lite-out">{{ changeLiteOutput }}</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textareaElement = canvasElement.querySelector<HTMLTextAreaElement>('textarea')
    await expect(textareaElement).toBeInTheDocument()

    await step('Focus textarea and type new text', async () => {
      await userEvent.click(textareaElement!)
      await expect(canvas.getByTestId('textarea-focus-out')).toHaveTextContent('focused')

      await userEvent.type(textareaElement!, 'ed')
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-input-out')).toHaveTextContent('input:Started')
        expect(canvas.getByTestId('textarea-input-lite-out')).toHaveTextContent('inputLite:Started')
      })
    })

    await step('Blur textarea to trigger blur and change events', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Blur target' }))
      await waitFor(() => {
        expect(canvas.getByTestId('textarea-focus-out')).toHaveTextContent('blurred')
        expect(canvas.getByTestId('textarea-change-out')).toHaveTextContent('change:Started')
        expect(canvas.getByTestId('textarea-change-lite-out')).toHaveTextContent('changeLite:Started')
      })
    })
  }
}
// :story-items [!] System label / Системная метка
