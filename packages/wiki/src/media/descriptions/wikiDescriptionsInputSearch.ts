import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputSearch component
 *
 * Описания свойств компонента InputSearch
 */
export const wikiDescriptionsInputSearch: StorybookComponentsDescriptionItem = {
  name: 'InputSearch',
  description: {
    en: 'Search input field component with debouncing, minimum query length, and clear button support',
    ru: 'Компонент поля поиска с поддержкой задержки debounce, минимальной длины запроса и кнопки очистки'
  },
  possibilities: {
    en: [
      'built-in debounce delay before search is triggered (`delay`)',
      'configurable minimum query length threshold (`minQuery`)',
      'search icon and clear cancel button by default',
      'immediate query execution on Enter key',
      'dynamic loading indicator during search debounce',
      'optimized search UX (off autocorrect, autocomplete, spellcheck, search enterKeyHint)',
      'supports two-way data binding (`v-model:value`)',
      'integrated with Field for consistent styling, labels, messages, and validation'
    ],
    ru: [
      'встроенная задержка debounce перед запуском поиска (`delay`)',
      'настраиваемый порог минимальной длины запроса (`minQuery`)',
      'по умолчанию включена иконка поиска и кнопка быстрой очистки',
      'немедленный запуск поиска по нажатию клавиши Enter',
      'динамический индикатор загрузки во время ожидания debounce',
      'оптимизированный UX поиска (отключены автокоррекция, автозаполнение, проверка орфографии, enterKeyHint: search)',
      'поддержка двусторонней привязки данных (`v-model:value`)',
      'интегрирован с Field для единообразной стилизации, меток, сообщений и валидации'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  stories: [
    {
      id: 'InputSearchVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        query: ref('')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="input-search-vmodel-value">Current query: {{ query || '—' }}</span>
            <button type="button" class="wiki-storybook-button" @click="query = 'search text'">Set query</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button-warning" @click="query = ''">Clear</button>
          </div>
          <DesignComponent
            v-model:value="query"
            placeholder="Search query..."
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const input = canvas.getByPlaceholderText('Search query...') as HTMLInputElement
await expect(canvas.getByTestId('input-search-vmodel-value')).toHaveTextContent('Current query: —')
await userEvent.click(canvas.getByRole('button', { name: 'Set query' }))
await expect(canvas.getByTestId('input-search-vmodel-value')).toHaveTextContent('Current query: search text')
await expect(input.value).toBe('search text')
await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
await expect(canvas.getByTestId('input-search-vmodel-value')).toHaveTextContent('Current query: —')
await expect(input.value).toBe('')
      `
    },
    {
      id: 'InputSearchQuery',
      name: {
        en: 'Query control (minQuery & delay)',
        ru: 'Управление запросом (minQuery и delay)'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :min-query="3"
            :delay="500"
            placeholder="Min 3 chars, 500ms delay..."
            helper-message="Triggers only after 3 characters with 500ms debounce"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const input = canvas.getByPlaceholderText('Min 3 chars, 500ms delay...') as HTMLInputElement
await expect(input).toBeInTheDocument()
await expect(canvas.getByText('Triggers only after 3 characters with 500ms debounce')).toBeInTheDocument()
      `
    },
    {
      id: 'InputSearchTestBehaviorAndStates',
      name: {
        en: 'Test: Debounce, Enter key, states, validation and slots',
        ru: 'Тест: Debounce, Enter, состояния, валидация и слоты'
      },
      propsName: ['minQuery', 'delay', 'cancel', 'disabled', 'readonly', 'validationMessage', 'placeholder', 'textSearch'],
      setup: `
      return {
        model: ref(''),
        enterModel: ref('')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <span data-testid="is-test-model">{{ model || 'empty' }}</span>
          <DesignComponent
            v-model:value="model"
            :min-query="3"
            :delay="80"
            placeholder="Type 3+ chars"
          />
          <span data-testid="is-test-enter">{{ enterModel || 'empty' }}</span>
          <DesignComponent
            v-model:value="enterModel"
            :min-query="2"
            :delay="5000"
            text-search="Fallback search placeholder"
          />
          <DesignComponent
            data-testid="is-test-validation"
            label="Search products"
            validation-message="Invalid query"
          >
            <template #leading><span>[L]</span></template>
            <template #trailing><span>[T]</span></template>
          </DesignComponent>
          <DesignComponent :disabled="true" placeholder="Disabled search" />
          <DesignComponent :readonly="true" value="Readonly query" />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const debounceInput = canvas.getByPlaceholderText('Type 3+ chars') as HTMLInputElement
await userEvent.type(debounceInput, 'ab')
await expect(canvas.getByTestId('is-test-model')).toHaveTextContent('empty')
await userEvent.type(debounceInput, 'c')
await waitFor(async () => {
  await expect(canvas.getByTestId('is-test-model')).toHaveTextContent('abc')
})

const enterInput = canvas.getByPlaceholderText('Fallback search placeholder') as HTMLInputElement
await userEvent.type(enterInput, 'go{Enter}')
await expect(canvas.getByTestId('is-test-enter')).toHaveTextContent('go')

await expect(canvas.getByText('[L]')).toBeInTheDocument()
await expect(canvas.getByText('[T]')).toBeInTheDocument()
await expect(canvas.getByText('Invalid query')).toBeInTheDocument()
await expect(canvas.getByPlaceholderText('Disabled search')).toBeDisabled()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputSearch'} type={'inputSearch'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputSearchVModel}/>

<StorybookDescriptions componentName={'InputSearch'} type={'query'}/>
<Canvas of={Component.InputSearchQuery}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `
  },
  ai: {
    description: `
The InputSearch component is a specialized search input field designed for search interactions.
It features built-in debouncing via the delay prop, threshold query length filtering via minQuery, and an automatic search icon and clear button.
Pressing Enter immediately triggers the query without waiting for the delay timer.
Fully integrated with the Field architecture for floating labels, validation, messages, and consistent styling.
    `
  }
}
