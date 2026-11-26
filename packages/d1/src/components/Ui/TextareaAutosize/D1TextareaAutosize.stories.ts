import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1TextareaAutosize from './D1TextareaAutosize.vue'
import { TextareaAutosizeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { TextareaAutosizeExpose } from '@dxtmisha/constructor/TextareaAutosize'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/TextareaAutosize',
  component: D1TextareaAutosize,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TextareaAutosizeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TextareaAutosizeWikiStorybook.getWiki(),
  args: TextareaAutosizeWikiStorybook.getValues()
} satisfies Meta<typeof D1TextareaAutosize>

export default meta

type Story = StoryObj<typeof meta>

export const TextareaAutosize: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1TextareaAutosize },
    setup: () => ({ args }),
    template: `
      <D1TextareaAutosize v-bind="args" :inputAttrs="{ style: 'width: 240px; border: 1px solid #90A1B9FF' }" />
    `
  }),
  play: async ({ canvasElement }) => {
    const textarea = canvasElement.querySelector<HTMLTextAreaElement>('textarea.d1-textareaAutosize')
    await expect(textarea).toBeInTheDocument()

    const clone = canvasElement.querySelector<HTMLElement>('.d1-textareaAutosize__clone')
    await expect(clone).toBeInTheDocument()
    await expect(clone).toHaveAttribute('aria-hidden', 'true')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TextareaAutosizeBasic: Story = {
  name: 'Авторазмер и фиксированная высота',
  render: () => ({
    components: { D1TextareaAutosize },
    setup() {
      const initialLines = 'First line\nSecond line'
      return {
        initialLines
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">autosize: true (default)</div>
            <D1TextareaAutosize
              :value="initialLines"
              :input-attrs="{ placeholder: 'Type multiple lines...', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 8px;' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">autosize: false</div>
            <D1TextareaAutosize
              :autosize="false"
              value="Fixed height textarea"
              :input-attrs="{ rows: 3, cols: 24, placeholder: 'Fixed height', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 8px;' }"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea.d1-textareaAutosize')
    await expect(textareas.length).toBe(2)

    await expect(textareas[0]).toHaveClass('d1-textareaAutosize--autosize')
    await expect(textareas[1]).not.toHaveClass('d1-textareaAutosize--autosize')
    await expect(textareas[1]).toHaveAttribute('rows', '3')
    await expect(textareas[1]).toHaveAttribute('cols', '24')

    const clones = canvasElement.querySelectorAll<HTMLElement>('.d1-textareaAutosize__clone')
    await expect(clones.length).toBe(2)
    await expect(clones[0]).toHaveAttribute('aria-hidden', 'true')
    await expect(clones[1]).toHaveAttribute('aria-hidden', 'true')

    await step('Type additional line into autosize textarea', async () => {
      await userEvent.click(textareas[0])
      await userEvent.type(textareas[0], ' updated')
      await expect(textareas[0].value).toContain('updated')
    })
  }
}
export const TextareaAutosizeEventsAndExpose: Story = {
  name: 'Событие input и метод getValue()',
  render: () => ({
    components: { D1TextareaAutosize },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1TextareaAutosize
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textarea = canvasElement.querySelector<HTMLTextAreaElement>('textarea.d1-textareaAutosize')
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
  }
}
export const TextareaAutosizeTestAttributesAndStates: Story = {
  name: 'Тест: Нативные атрибуты, inputAttrs, состояния disabled и readonly',
  render: () => ({
    components: { D1TextareaAutosize },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">rows + cols + maxlength + placeholder</div>
            <D1TextareaAutosize
              :autosize="true"
              value=""
              :input-attrs="{ rows: 4, cols: 30, maxlength: 10, placeholder: 'Max 10 chars', 'aria-label': 'Limited note', 'data-custom-textarea': 'limited', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 6px;' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">disabled + autosize</div>
            <D1TextareaAutosize
              :autosize="true"
              value="Locked text"
              :input-attrs="{ disabled: true, 'aria-label': 'Disabled note', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 6px;' }"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">readonly + autosize: false</div>
            <D1TextareaAutosize
              :autosize="false"
              value="Read only content"
              :input-attrs="{ readonly: true, rows: 2, 'aria-label': 'Readonly note', style: 'width: 240px; border: 1px solid #90A1B9FF; padding: 6px;' }"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea.d1-textareaAutosize')
    await expect(textareas.length).toBe(3)

    const clones = canvasElement.querySelectorAll<HTMLElement>('.d1-textareaAutosize__clone')
    await expect(clones.length).toBe(3)
    clones.forEach((clone) => {
      expect(clone).toHaveAttribute('aria-hidden', 'true')
    })

    // 1. rows, cols, maxlength, placeholder, custom data attr
    await expect(textareas[0]).toHaveClass('d1-textareaAutosize--autosize')
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
    await expect(textareas[1]).toHaveClass('d1-textareaAutosize--autosize')
    await expect(textareas[1].value).toBe('Locked text')

    // 3. readonly textarea with autosize disabled
    await expect(textareas[2]).toHaveAttribute('readonly')
    await expect(textareas[2]).not.toHaveClass('d1-textareaAutosize--autosize')
    await expect(textareas[2]).toHaveAttribute('rows', '2')
    await expect(textareas[2].value).toBe('Read only content')

    await step('Verify readonly textarea rejects user typing', async () => {
      await userEvent.click(textareas[2])
      await userEvent.type(textareas[2], 'extra')
      await expect(textareas[2].value).toBe('Read only content')
    })
  }
}
// :story-items [!] System label / Системная метка
