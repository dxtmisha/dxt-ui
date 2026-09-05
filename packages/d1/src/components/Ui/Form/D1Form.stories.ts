import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Form from './D1Form.vue'
import { FormWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Input from '../Input/D1Input.vue'
import D1Button from '../Button/D1Button.vue'
import { ref } from 'vue'
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
  })
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
  })
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
  })
}
export const FormVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Form, D1Input, D1Button },
    setup() {
      return {
        formValue: ref({
          username: 'john_doe',
          email: 'john@example.com'
        })
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current values: <strong>{{ formValue }}</strong></span>
            <button
              class="wiki-storybook-button"
              @click="formValue = { username: 'alice', email: 'alice@example.com' }"
            >
              Set Alice
            </button>
            <button
              class="wiki-storybook-button"
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
  })
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
  })
}
// :story-items [!] System label / Системная метка
