import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Input from './D1Input.vue'
import { InputWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Input',
  component: D1Input,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputWikiStorybook.getWiki(),
  args: InputWikiStorybook.getValues()
} satisfies Meta<typeof D1Input>

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Input },
    setup: () => ({ args }),
    template: `
      <D1Input v-bind="args" />
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputTypes: Story = {
  name: 'Типы ввода',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input type="text" label="Text" placeholder="Enter text" />
          <D1Input type="email" label="Email" placeholder="email@example.com" />
          <D1Input type="password" label="Password" placeholder="Enter password" />
          <D1Input type="number" label="Number" placeholder="0" />
          <D1Input type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <D1Input type="date" label="Date" />
          <D1Input type="search" label="Search" placeholder="Search..." />
        </div>
    `
  })
}
export const InputStates: Story = {
  name: 'Состояния',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input label="Default" placeholder="Enter text" />
          <D1Input label="With value" modelValue="Some text" />
          <D1Input label="Focus" focus placeholder="Focused" />
          <D1Input label="Disabled" disabled modelValue="Disabled input" />
          <D1Input label="Readonly" readonly modelValue="Readonly input" />
          <D1Input label="Loading" loading placeholder="Loading..." />
          <D1Input label="Required" required placeholder="Required field" />
        </div>
    `
  })
}
export const InputValidation: Story = {
  name: 'Валидация',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Valid input"
            modelValue="valid@email.com"
            type="email"
            helperMessage="Email format is correct"
          />
          <D1Input
            label="Invalid input"
            modelValue="invalid-email"
            type="email"
            validationMessage="Please enter a valid email address"
            forceShowMessage
          />
          <D1Input
            label="Required field"
            required
            validationMessage="This field is required"
            forceShowMessage
          />
          <D1Input
            label="Min/Max length"
            modelValue="Hi"
            minlength="5"
            maxlength="20"
            validationMessage="Minimum 5 characters required"
            forceShowMessage
          />
        </div>
    `
  })
}
export const InputPassword: Story = {
  name: 'Пароль с переключением видимости',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="password"
            label="Password"
            modelValue="MyPassword123"
            iconTrailing="visibility"
          />
          <D1Input
            type="password"
            label="Custom icons"
            modelValue="MyPassword123"
            iconVisibility="visibility"
            iconVisibilityOff="visibility_off"
          />
        </div>
    `
  })
}
export const InputMask: Story = {
  name: 'Маскированный ввод',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="tel"
            label="Phone number"
            mask="+1 (###) ###-####"
            placeholder="+1 (555) 000-0000"
          />
          <D1Input
            type="date"
            label="Date"
            mask="##/##/####"
            placeholder="MM/DD/YYYY"
          />
          <D1Input
            type="text"
            label="Credit card"
            mask="#### #### #### ####"
            placeholder="0000 0000 0000 0000"
          />
        </div>
    `
  })
}
export const InputCurrency: Story = {
  name: 'Валюта и форматирование чисел',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
          />
          <D1Input
            type="currency"
            label="Price (USD)"
            currency="USD"
            value="1234.56"
          />
          <D1Input
            type="currency"
            label="Price (EUR)"
            currency="EUR"
            value="1234.56"
          />
          <D1Input
            type="number-format"
            label="Formatted number"
            value="1234567.89"
          />
        </div>
    `
  })
}
export const InputPrefixSuffix: Story = {
  name: 'Префикс и суффикс',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Weight"
            modelValue="75"
            suffix="kg"
          />
          <D1Input
            label="Price"
            modelValue="99.99"
            prefix="$"
          />
          <D1Input
            label="URL"
            modelValue="example"
            prefix="https://"
            suffix=".com"
          />
        </div>
    `
  })
}
export const InputCounter: Story = {
  name: 'Счётчик символов',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Tweet"
            modelValue="Hello world!"
            maxlength="280"
            counterShow
            helperMessage="Maximum 280 characters"
          />
          <D1Input
            label="Short description"
            modelValue="Brief text"
            maxlength="50"
            counterShow
          />
        </div>
    `
  })
}
export const InputArrows: Story = {
  name: 'Стрелки навигации',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            type="number"
            label="Quantity"
            modelValue="5"
            arrowStep="1"
          />
          <D1Input
            type="number"
            label="Price step (0.01)"
            modelValue="19.99"
            arrowStep="0.01"
            step="0.01"
          />
          <D1Input
            type="number"
            label="Large step (10)"
            modelValue="100"
            arrowStep="10"
          />
        </div>
    `
  })
}
export const InputIcons: Story = {
  name: 'С иконками',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Search"
            icon="search"
            placeholder="Search..."
          />
          <D1Input
            label="Email"
            icon="email"
            iconTrailing="info"
            placeholder="email@example.com"
          />
          <D1Input
            label="Location"
            icon="location_on"
            modelValue="New York"
          />
        </div>
    `
  })
}
export const InputCancel: Story = {
  name: 'Кнопка очистки',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Auto clear (empty)"
            cancel="auto"
            placeholder="Type something..."
          />
          <D1Input
            label="Auto clear (with value)"
            cancel="auto"
            modelValue="Clear me"
          />
          <D1Input
            label="Always show clear"
            cancel="always"
            modelValue="Text with clear button"
          />
        </div>
    `
  })
}
export const InputAutocomplete: Story = {
  name: 'Автозаполнение и подсказки',
  render: () => ({
    components: { D1Input },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Input
            label="Username"
            autocomplete="username"
            placeholder="Enter username"
          />
          <D1Input
            label="Email"
            type="email"
            autocomplete="email"
            placeholder="Enter email"
          />
          <D1Input
            label="Phone"
            type="tel"
            autocomplete="tel"
            placeholder="Enter phone"
          />
        </div>
    `
  })
}
export const InputSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Input, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <D1Input
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <D1Input
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
