import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Form component
 *
 * Описания свойств компонента Form
 */
export const wikiDescriptionsForm: StorybookComponentsDescriptionItem = {
  name: 'Form',
  description: {
    en: 'Form container constructor for managing input state, validation, native form controls, and form submissions',
    ru: 'Конструктор формы для управления состоянием полей ввода, валидацией, нативными элементами управления и отправкой формы'
  },
  possibilities: {
    en: [
      'coordinates form field values and validation state across child elements',
      'supports both custom component elements (via provide/inject) and native HTML form controls (`native` prop)',
      'manages standard HTML form attributes: `action`, `method`, `enctype`, `target`, and `autocomplete`',
      'exposes programmatic methods: `getValues()`, `set()`, `setValues()`, `checkValidity()`, `submit()`, and `reset()`',
      'emits granular data events: `input`, `inputLite`, `inputValues`, `change`, `changeLite`, `changeValues`, `reset`, and `submit`',
      'provides layout slots for `header`, `default`, and `footer` sections',
      'two-way binding via `v-model` or `value` prop'
    ],
    ru: [
      'координирует значения полей формы и состояние валидации дочерних элементов',
      'поддерживает как кастомные компоненты (через provide/inject), так и нативные HTML-элементы управления (свойство `native`)',
      'управляет стандартными атрибутами HTML-формы: `action`, `method`, `enctype`, `target` и `autocomplete`',
      'предоставляет программные методы: `getValues()`, `set()`, `setValues()`, `checkValidity()`, `submit()` и `reset()`',
      'генерирует детальные события данных: `input`, `inputLite`, `inputValues`, `change`, `changeLite`, `changeValues`, `reset` и `submit`',
      'предоставляет слоты разметки для секций `header`, `default` и `footer`',
      'двусторонняя привязка через `v-model` или свойство `value`'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
          <DesignComponent v-bind="args">
            <template #default>
              <div class="wiki-storybook-flex-column">
                <input class="wiki-storybook-input" name="username" placeholder="Username" />
                <input class="wiki-storybook-input" name="email" type="email" placeholder="Email" />
                <button class="wiki-storybook-button" type="submit">Submit</button>
              </div>
            </template>
          </DesignComponent>
        </div>
      </div>
    `,
  stories: [
    {
      id: 'FormBasic',
      name: {
        en: 'Basic form',
        ru: 'Базовая форма'
      },
      components: ['Input', 'Button'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent
              action="/api/submit"
              method="post"
            >
              <div class="wiki-storybook-flex-column">
                <DesignInput name="username" label="Username" placeholder="Enter username" />
                <DesignInput name="email" type="email" label="Email" placeholder="Enter email" />
                <div class="wiki-storybook-flex">
                  <DesignButton type="submit">Submit</DesignButton>
                  <DesignButton type="reset">Reset</DesignButton>
                </div>
              </div>
            </DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'FormNative',
      name: {
        en: 'Native form elements',
        ru: 'Нативные элементы формы'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent
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
            </DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: 'FormVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      components: ['Input', 'Button'],
      setup: `
      return {
        formValue: ref({
          username: 'john_doe',
          email: 'john@example.com'
        })
      }
      `,
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
              <DesignComponent v-model="formValue">
                <div class="wiki-storybook-flex-column">
                  <DesignInput name="username" label="Username" placeholder="Enter username" />
                  <DesignInput name="email" type="email" label="Email" placeholder="Enter email" />
                  <div class="wiki-storybook-flex">
                    <DesignButton type="submit">Submit</DesignButton>
                    <DesignButton type="reset">Reset</DesignButton>
                  </div>
                </div>
              </DesignComponent>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Native Elements</div>
              <DesignComponent
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
              </DesignComponent>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'FormSlots',
      name: {
        en: 'Slots usage (header, default, footer)',
        ru: 'Использование слотов (header, default, footer)'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent>
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
            </DesignComponent>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Form'} type={'form'}/>
<Canvas of={Component.FormBasic}/>

<StorybookDescriptions componentName={'Form'} type={'native'}/>
<Canvas of={Component.FormNative}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.FormVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Form'} type={'events'}/>
<StorybookDescriptions componentName={'Form'} type={'event.submit'}/>
<StorybookDescriptions componentName={'Event'} type={'reset'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Form'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'reset'}/>
    `,
    slots: `
<Canvas of={Component.FormSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'header'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'footerAny'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Form v-bind="args">
    <template #default>
      <input name="username" type="text" placeholder="Username" />
      <button type="submit">Submit</button>
    </template>
  </Form>
</div>
    `,
    description: `
Container component for managing forms, input field synchronization, validation status, and form submissions.
Supports two operating modes: custom constructor child elements (via Vue provide/inject) and native HTML form controls (native prop).
Provides standard HTML form attributes (action, method, enctype, target), layout slots (header, default, footer), and comprehensive expose methods (getValues, set, setValues, checkValidity, submit, reset).
    `,
    hide: true
  }
}
