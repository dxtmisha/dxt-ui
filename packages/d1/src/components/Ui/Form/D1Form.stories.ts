import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Form from './D1Form.vue'
import { FormWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Input from '../Input/D1Input.vue'
import D1Button from '../Button/D1Button.vue'
import { ref } from 'vue'
import type { FormElementsValues, FormExpose } from '@dxtmisha/constructor/Form'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Form',
  component: D1Form,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FormWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FormWikiStorybook.getWiki(),
  args: FormWikiStorybook.getValues()
} satisfies Meta<typeof D1Form>

export default meta

type Story = StoryObj<typeof meta>

export const Form: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Form },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
          <D1Form v-bind="args">
            <template #default>
              <div class="wiki-storybook-flex-column">
                <input class="wiki-storybook-input" name="username" placeholder="Username" />
                <input class="wiki-storybook-input" name="email" type="email" placeholder="Email" />
                <button class="wiki-storybook-button" type="submit">Submit</button>
              </div>
            </template>
          </D1Form>
        </div>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector('form.d1-form')
    await expect(form).toBeInTheDocument()
    await expect(form).toHaveAttribute('novalidate')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FormBasic: Story = {
  name: 'Базовая форма',
  render: () => ({
    components: { D1Form, D1Input, D1Button },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form
              action="/api/submit"
              method="post"
            >
              <div class="wiki-storybook-flex-column">
                <D1Input name="username" label="Username" placeholder="Enter username" />
                <D1Input name="email" type="email" label="Email" placeholder="Enter email" />
                <div class="wiki-storybook-flex">
                  <D1Button type="submit">Submit</D1Button>
                  <D1Button type="reset">Reset</D1Button>
                </div>
              </div>
            </D1Form>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector('form.d1-form')
    await expect(form).toBeInTheDocument()
    await expect(form).toHaveAttribute('action', '/api/submit')
    await expect(form).toHaveAttribute('method', 'post')
  }
}
export const FormNative: Story = {
  name: 'Нативные элементы формы',
  render: () => ({
    components: { D1Form },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form
              :native="true"
            >
              <div class="wiki-storybook-flex-column">
                <label class="wiki-storybook-flex-column">
                  Text:
                  <input class="wiki-storybook-input" name="title" value="Default Title" />
                </label>
                <label class="wiki-storybook-flex-column">
                  Role:
                  <select class="wiki-storybook-input" name="role">
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </label>
                <label class="wiki-storybook-flex-align-center">
                  <input name="subscribe" type="checkbox" checked />
                  Subscribe to newsletter
                </label>
                <div class="wiki-storybook-flex">
                  <button class="wiki-storybook-button" type="submit">Save</button>
                  <button class="wiki-storybook-button" type="reset">Reset</button>
                </div>
              </div>
            </D1Form>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector('form.d1-form')
    await expect(form).toBeInTheDocument()
    const titleInput = form?.querySelector('input[name="title"]')
    await expect(titleInput).toHaveValue('Default Title')
  }
}
export const FormVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Form, D1Input, D1Button },
    setup() {
      return {
        formValue: ref<FormElementsValues>({
          username: 'john_doe',
          email: 'john@example.com'
        })
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="form-vmodel-display">Current values: <strong>{{ formValue }}</strong></span>
            <button
              class="wiki-storybook-button"
              type="button"
              @click="formValue = { username: 'alice', email: 'alice@example.com' }"
            >
              Set Alice
            </button>
            <button
              class="wiki-storybook-button"
              type="button"
              @click="formValue = {}"
            >
              Clear
            </button>
          </div>

          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Components</div>
              <D1Form v-model="formValue">
                <div class="wiki-storybook-flex-column">
                  <D1Input name="username" label="Username" placeholder="Enter username" />
                  <D1Input name="email" type="email" label="Email" placeholder="Enter email" />
                  <div class="wiki-storybook-flex">
                    <D1Button type="submit">Submit</D1Button>
                    <D1Button type="reset">Reset</D1Button>
                  </div>
                </div>
              </D1Form>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Native Elements</div>
              <D1Form
                v-model="formValue"
                :native="true"
              >
                <div class="wiki-storybook-flex-column">
                  <label class="wiki-storybook-flex-column">
                    Username:
                    <input class="wiki-storybook-input" name="username" />
                  </label>
                  <label class="wiki-storybook-flex-column">
                    Email:
                    <input class="wiki-storybook-input" name="email" type="email" />
                  </label>
                  <div class="wiki-storybook-flex">
                    <button class="wiki-storybook-button" type="submit">Submit</button>
                    <button class="wiki-storybook-button" type="reset">Reset</button>
                  </div>
                </div>
              </D1Form>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Update v-model via Set Alice button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set Alice' }))
      await expect(canvas.getByTestId('form-vmodel-display')).toHaveTextContent('alice')
    })
  }
}
export const FormSlots: Story = {
  name: 'Использование слотов (header, default, footer)',
  render: () => ({
    components: { D1Form },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form>
              <template #header>
                <h3>Registration Form</h3>
              </template>
              <template #default>
                <div class="wiki-storybook-flex-column">
                  <input class="wiki-storybook-input" name="firstName" placeholder="First Name" />
                  <input class="wiki-storybook-input" name="lastName" placeholder="Last Name" />
                </div>
              </template>
              <template #footer>
                <div class="wiki-storybook-flex">
                  <button class="wiki-storybook-button" type="reset">Cancel</button>
                  <button class="wiki-storybook-button" type="submit">Register</button>
                </div>
              </template>
            </D1Form>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Registration Form')).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Register' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  }
}
export const FormTestAttributesAndExpose: Story = {
  name: 'Тест: Атрибуты формы, методы expose в native-режиме и события submit/reset',
  render: () => ({
    components: { D1Form },
    setup() {
      const formRef = ref<FormExpose | null>(null)
      const snapshot = ref<string>('')
      const validity = ref<string>('')
      const lastEvent = ref<string>('')
      const onApply = () => {
        formRef.value?.set('title', 'Single Updated')
        formRef.value?.setValues({ notes: 'Patched Notes' })
        snapshot.value = JSON.stringify(formRef.value?.getValues() ?? {})
      }
      const onValidate = () => {
        validity.value = String(formRef.value?.checkValidity() ?? false)
      }
      const onReset = () => {
        formRef.value?.reset()
      }
      const onSubmit = () => {
        lastEvent.value = 'submitted'
      }
      return { formRef, snapshot, validity, lastEvent, onApply, onValidate, onReset, onSubmit }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Form
            ref="formRef"
            action="/submit-test"
            method="post"
            enctype="multipart/form-data"
            target="_self"
            autocomplete="off"
            :native="true"
            :value="{ title: 'Initial', notes: 'Start' }"
            @submit="onSubmit"
          >
            <div class="wiki-storybook-flex-column">
              <input class="wiki-storybook-input" name="title" required />
              <textarea class="wiki-storybook-input" name="notes" />
              <button class="wiki-storybook-button" type="submit">Submit</button>
            </div>
          </D1Form>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="onApply">Apply Expose</button>
            <button class="wiki-storybook-button" type="button" @click="onValidate">Validate</button>
            <button class="wiki-storybook-button" type="button" @click="onReset">Reset Expose</button>
          </div>
          <span data-testid="form-snapshot">{{ snapshot }}</span>
          <span data-testid="form-validity">{{ validity }}</span>
          <span data-testid="form-submit-event">{{ lastEvent }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const form = canvasElement.querySelector('form.d1-form')
    await expect(form).toHaveAttribute('action', '/submit-test')
    await expect(form).toHaveAttribute('method', 'post')
    await expect(form).toHaveAttribute('enctype', 'multipart/form-data')
    await expect(form).toHaveAttribute('target', '_self')
    await expect(form).toHaveAttribute('autocomplete', 'off')
    await expect(form).toHaveAttribute('novalidate')

    await step('Apply set() / setValues() / getValues() / checkValidity()', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Apply Expose' }))
      await expect(canvas.getByTestId('form-snapshot')).toHaveTextContent('Single Updated')
      await expect(canvas.getByTestId('form-snapshot')).toHaveTextContent('Patched Notes')
      await userEvent.click(canvas.getByRole('button', { name: 'Validate' }))
      await expect(canvas.getByTestId('form-validity')).toHaveTextContent('true')
    })

    await step('Submit native form and emit submit event', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Submit' }))
      await expect(canvas.getByTestId('form-submit-event')).toHaveTextContent('submitted')
    })
  }
}
// :story-items [!] System label / Системная метка
