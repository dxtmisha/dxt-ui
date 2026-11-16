import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1FieldMessage from './D1FieldMessage.vue'
import { FieldMessageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/FieldMessage',
  component: D1FieldMessage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldMessageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldMessageWikiStorybook.getWiki(),
  args: FieldMessageWikiStorybook.getValues()
} satisfies Meta<typeof D1FieldMessage>

export default meta

type Story = StoryObj<typeof meta>

export const FieldMessage: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1FieldMessage },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
        <D1FieldMessage v-bind="args"/>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-fieldMessage')
    if (component) {
      expect(component.tagName).toBe('DIV')
    }
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldMessageBasic: Story = {
  name: 'Подсказка, валидация и ARIA-идентификаторы',
  render: () => ({
    components: { D1FieldMessage },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Helper Message</div>
            <D1FieldMessage helper-message="Enter your email address" helper-id="wiki-field-message-helper"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Validation Message</div>
            <D1FieldMessage validation-message="Invalid email format" validation-id="wiki-field-message-validation"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Validation Overrides Helper</div>
            <D1FieldMessage
              helper-message="Helper text hidden by CSS when invalid"
              validation-message="Validation takes visual priority"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const messages = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldMessage')
    await expect(messages.length).toBe(3)

    expect(messages[0].classList.contains('d1-fieldMessage--validation')).toBe(false)
    expect(messages[0].querySelector('#wiki-field-message-helper')?.textContent?.trim()).toBe('Enter your email address')

    expect(messages[1].classList.contains('d1-fieldMessage--validation')).toBe(true)
    const errorElement = messages[1].querySelector<HTMLElement>('#wiki-field-message-validation')
    await expect(errorElement).toBeInTheDocument()
    await expect(errorElement).toHaveAttribute('role', 'alert')

    expect(messages[2].classList.contains('d1-fieldMessage--validation')).toBe(true)
    const thirdInfo = messages[2].querySelector<HTMLElement>('.d1-fieldMessage__info')
    const thirdError = messages[2].querySelector<HTMLElement>('.d1-fieldMessage__error')
    await expect(thirdInfo).toBeInTheDocument()
    await expect(thirdError).toBeInTheDocument()
    await expect(thirdError).toHaveAttribute('role', 'alert')
  }
}
export const FieldMessageStates: Story = {
  name: 'Состояния disabled, forceShow, HTML и скелетон',
  render: () => ({
    components: { D1FieldMessage },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding disabled-host">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Disabled (hidden)</div>
            <D1FieldMessage helper-message="Hidden while disabled" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Disabled + forceShow</div>
            <D1FieldMessage helper-message="Forced visible message" disabled force-show/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">hasHtmlCode</div>
            <D1FieldMessage helper-message="Formatted <strong>HTML</strong> helper" has-html-code/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">isSkeleton</div>
            <D1FieldMessage helper-message="Skeleton message" is-skeleton/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledHost = canvasElement.querySelector<HTMLElement>('.disabled-host')
    expect(disabledHost?.querySelector('.d1-fieldMessage')).toBeNull()

    const messages = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldMessage')
    await expect(messages.length).toBe(3)
    expect(messages[0].textContent?.trim()).toBe('Forced visible message')
    await expect(messages[1].querySelector('strong')).toBeInTheDocument()
    expect(messages[2].querySelector('.d1-fieldMessage__info')?.className).toContain('skeleton')
  }
}
export const FieldMessageCounter: Story = {
  name: 'Интеграция счётчика символов',
  render: () => ({
    components: { D1FieldMessage },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Helper + Counter</div>
            <D1FieldMessage helper-message="Short note" counter-show :counter="14" :maxlength="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Zero Counter</div>
            <D1FieldMessage helper-message="Zero value" counter-show :counter="0" :maxlength="50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Template, ID & Attrs</div>
            <D1FieldMessage
              validation-message="Too long"
              counter-show
              :counter="95"
              :maxlength="100"
              :maxlength-once="10"
              counter-template="[c] of [m]"
              counter-id="wiki-field-message-counter"
              :field-counter-attrs="{ class: 'wiki-custom-message-counter' }"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const messages = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldMessage')
    await expect(messages.length).toBe(3)

    expect(messages[0].textContent).toContain('14 / 100')
    expect(messages[1].textContent).toContain('0 / 50')

    const customCounter = messages[2].querySelector<HTMLElement>('#wiki-field-message-counter')
    await expect(customCounter).toBeInTheDocument()
    expect(customCounter?.classList.contains('wiki-custom-message-counter')).toBe(true)
    expect(customCounter?.textContent?.trim()).toBe('95 of 100')
  }
}
export const FieldMessageSlots: Story = {
  name: 'Слоты (#helper и #validation)',
  render: () => ({
    components: { D1FieldMessage },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1FieldMessage>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </D1FieldMessage>
          <D1FieldMessage>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </D1FieldMessage>
          <D1FieldMessage helper-message="Details" validation-message="Required">
            <template #helper="{ helperMessage }">
              <span>Scoped ({{ helperMessage }}): </span>
            </template>
            <template #validation="{ validationMessage }">
              <span>Error ({{ validationMessage }}): </span>
            </template>
          </D1FieldMessage>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const messages = canvasElement.querySelectorAll<HTMLElement>('.d1-fieldMessage')
    await expect(messages.length).toBe(3)
    expect(messages[0].textContent?.trim()).toBe('Helper: You can use Latin letters')
    expect(messages[1].classList.contains('d1-fieldMessage--validation')).toBe(true)
    expect(messages[1].textContent?.trim()).toBe('Validation: Please fill out this field')
    expect(messages[2].querySelector('.d1-fieldMessage__info')?.textContent?.trim()).toBe('Scoped (Details): Details')
    expect(messages[2].querySelector('.d1-fieldMessage__error')?.textContent?.trim()).toBe('Error (Required): Required')
  }
}
export const FieldMessageTestReactivity: Story = {
  name: 'Тест: Реактивность и условное размонтирование',
  render: () => ({
    components: { D1FieldMessage },
    setup() {
      const helperMessage = ref('Initial helper')
      const validationMessage = ref('')
      const disabled = ref(false)
      const forceShow = ref(false)
      const hasHtmlCode = ref(false)
      const isSkeleton = ref(false)
      const counterShow = ref(true)
      const counter = ref(5)

      return {
        helperMessage,
        validationMessage,
        disabled,
        forceShow,
        hasHtmlCode,
        isSkeleton,
        counterShow,
        counter
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="helperMessage = helperMessage ? '' : 'Initial helper'">Toggle Helper</button>
            <button type="button" class="wiki-storybook-button" @click="validationMessage = validationMessage ? '' : 'Error text'">Toggle Validation</button>
            <button type="button" class="wiki-storybook-button" @click="disabled = !disabled">Toggle Disabled</button>
            <button type="button" class="wiki-storybook-button" @click="forceShow = !forceShow">Toggle Force Show</button>
            <button type="button" class="wiki-storybook-button" @click="hasHtmlCode = !hasHtmlCode">Toggle HTML</button>
            <button type="button" class="wiki-storybook-button" @click="isSkeleton = !isSkeleton">Toggle Skeleton</button>
            <button type="button" class="wiki-storybook-button" @click="counterShow = !counterShow">Toggle Counter</button>
            <button type="button" class="wiki-storybook-button" @click="counter = counter + 5">Increment Counter</button>
          </div>
          <div class="reactive-host">
            <D1FieldMessage
              :helper-message="helperMessage"
              :validation-message="validationMessage"
              :disabled="disabled"
              :force-show="forceShow"
              :has-html-code="hasHtmlCode"
              :is-skeleton="isSkeleton"
              :counter-show="counterShow"
              :counter="counter"
              :maxlength="40"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const host = canvasElement.querySelector<HTMLElement>('.reactive-host')!

    await step('Initial state renders helper message and counter', async () => {
      const root = host.querySelector<HTMLElement>('.d1-fieldMessage')
      await expect(root).toBeInTheDocument()
      expect(root?.querySelector('.d1-fieldMessage__info')?.textContent?.trim()).toBe('Initial helper')
      expect(root?.textContent).toContain('5 / 40')
    })

    await step('Toggling validation switches validation modifier and alert element', async () => {
      const toggleValidationButton = canvas.getByRole('button', { name: 'Toggle Validation' })
      await userEvent.click(toggleValidationButton)
      expect(host.querySelector('.d1-fieldMessage')?.classList.contains('d1-fieldMessage--validation')).toBe(true)
      await expect(host.querySelector('.d1-fieldMessage__error')).toHaveAttribute('role', 'alert')
      await userEvent.click(toggleValidationButton)
      expect(host.querySelector('.d1-fieldMessage')?.classList.contains('d1-fieldMessage--validation')).toBe(false)
    })

    await step('Toggling disabled hides root until forceShow is enabled', async () => {
      const toggleDisabledButton = canvas.getByRole('button', { name: 'Toggle Disabled' })
      const toggleForceShowButton = canvas.getByRole('button', { name: 'Toggle Force Show' })
      await userEvent.click(toggleDisabledButton)
      expect(host.querySelector('.d1-fieldMessage')).toBeNull()
      await userEvent.click(toggleForceShowButton)
      await expect(host.querySelector('.d1-fieldMessage')).toBeInTheDocument()
      await userEvent.click(toggleForceShowButton)
      await userEvent.click(toggleDisabledButton)
    })

    await step('Incrementing counter, toggling skeleton, and clearing all content updates DOM', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Increment Counter' }))
      expect(host.textContent).toContain('10 / 40')

      const toggleSkeletonButton = canvas.getByRole('button', { name: 'Toggle Skeleton' })
      await userEvent.click(toggleSkeletonButton)
      expect(host.querySelector('.d1-fieldMessage__info')?.className).toContain('skeleton')
      await userEvent.click(toggleSkeletonButton)

      await userEvent.click(canvas.getByRole('button', { name: 'Toggle Helper' }))
      await userEvent.click(canvas.getByRole('button', { name: 'Toggle Counter' }))
      expect(host.querySelector('.d1-fieldMessage')).toBeNull()
    })
  }
}
export const FieldMessageTestBoundaries: Story = {
  name: 'Тест: Граничные значения, RTL и безопасность XSS',
  render: () => ({
    components: { D1FieldMessage },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="empty-host">
            <D1FieldMessage helper-message="" validation-message="   "/>
          </div>
          <div class="multilingual-host">
            <D1FieldMessage
              helper-message="Học tiếng Việt — Подсказка поля 🚀"
              validation-message="Lỗi xác thực — Ошибка ввода 🔒"
              counter-show
              :counter="24"
              :maxlength="100"
            />
          </div>
          <div class="rtl-host" dir="rtl">
            <D1FieldMessage
              helper-message="أدخل رقم الهاتف مع رمز الدولة"
              counter-show
              :counter="12"
              :maxlength="40"
            />
          </div>
          <div class="xss-host">
            <D1FieldMessage helper-message="<img src=x onerror=alert(1)>"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    await step('Empty and whitespace-only messages render nothing in DOM', async () => {
      expect(canvasElement.querySelector('.empty-host .d1-fieldMessage')).toBeNull()
    })

    await step('Multilingual diacritics, Cyrillic, Emoji, and RTL render cleanly', async () => {
      const multi = canvasElement.querySelector<HTMLElement>('.multilingual-host .d1-fieldMessage')
      await expect(multi).toBeInTheDocument()
      expect(multi?.querySelector('.d1-fieldMessage__info')?.textContent?.trim()).toBe('Học tiếng Việt — Подсказка поля 🚀')
      expect(multi?.querySelector('.d1-fieldMessage__error')?.textContent?.trim()).toBe('Lỗi xác thực — Ошибка ввода 🔒')

      const rtl = canvasElement.querySelector<HTMLElement>('.rtl-host .d1-fieldMessage')
      await expect(rtl).toBeInTheDocument()
      expect(window.getComputedStyle(rtl!).direction).toBe('rtl')
    })

    await step('HTML/XSS string renders strictly as escaped text when hasHtmlCode is false', async () => {
      const xss = canvasElement.querySelector<HTMLElement>('.xss-host .d1-fieldMessage')
      await expect(xss).toBeInTheDocument()
      expect(xss?.textContent?.trim()).toBe('<img src=x onerror=alert(1)>')
      expect(xss?.querySelector('img')).toBeNull()
    })
  }
}
// :story-items [!] System label / Системная метка
