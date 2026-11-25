import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SelectValue component properties
 *
 * Описания свойств компонента SelectValue
 */
export const wikiDescriptionsSelectValue: StorybookComponentsDescriptionItem = {
  name: 'SelectValue',
  description: {
    en: 'Display component for selected values in select controls, showing chips for multiple selection or single text value',
    ru: 'Компонент отображения выбранных значений в элементах выбора, показывающий чипы для множественного выбора или одиночное текстовое значение'
  },
  possibilities: {
    en: [
      'single or multiple value display modes',
      'automatic chip rendering for multiple selections',
      'placeholder support for empty state',
      'cancel icon for clearing individual selections',
      'customizable chip appearance via chipAttrs',
      'optional icon display in chips',
      'responsive handling of selected items',
      'disabled and readonly states support'
    ],
    ru: [
      'режимы отображения одиночного или множественного значения',
      'автоматический рендеринг чипов для множественного выбора',
      'поддержка плейсхолдера для пустого состояния',
      'иконка отмены для очистки отдельных выборов',
      'настраиваемый внешний вид чипов через chipAttrs',
      'опциональное отображение иконок в чипах',
      'адаптивная обработка выбранных элементов',
      'поддержка состояний disabled и readonly'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { expect, within, userEvent } from \'storybook/test\''
  ],
  stories: [
    {
      id: 'SelectValueBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <DesignComponent placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <DesignComponent :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <DesignComponent
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Select option')).toBeInTheDocument()
await expect(canvas.getAllByText('Option 1').length).toBeGreaterThanOrEqual(2)
await expect(canvas.getByText('Option 2')).toBeInTheDocument()
await expect(canvas.getByText('Option 3')).toBeInTheDocument()
      `
    },
    {
      id: 'SelectValueTestFalsyClickAndDisabled',
      name: {
        en: 'Test: Falsy 0 value, click event, iconShow and disabled',
        ru: 'Тест: Нулевое значение 0, событие click, iconShow и disabled'
      },
      propsName: ['placeholder', 'value', 'multiple', 'iconShow', 'iconCancel', 'disabled', 'chipAttrs'],
      setup: `
      const lastClicked = ref('')
      const items = ref([
        { label: 0, value: 0, index: '0', type: 'item' as const },
        { label: 'Beta', value: 'beta', index: 'beta', type: 'item' as const }
      ])
      const onClick = (_event: MouseEvent, value?: { value?: string | number }) => {
        lastClicked.value = String(value?.value ?? '')
      }
      return {
        lastClicked,
        items,
        onClick
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <span data-testid="sv-test-clicked">{{ lastClicked || 'none' }}</span>
          <DesignComponent data-testid="sv-test-zero-single" :value="[{ label: 0, value: 0 }]" />
          <DesignComponent
            data-testid="sv-test-multiple"
            :multiple="true"
            :icon-show="true"
            icon-cancel="close"
            :value="items"
            @click="onClick"
          />
          <DesignComponent
            data-testid="sv-test-disabled"
            :multiple="true"
            :disabled="true"
            icon-cancel="close"
            :value="[{ label: 'Locked', value: 'locked', index: 'locked', type: 'item' }]"
            @click="onClick"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('sv-test-zero-single')).toHaveTextContent('0')

const multipleRoot = canvas.getByTestId('sv-test-multiple')
const cancelIcon = multipleRoot.querySelector('span[aria-hidden="true"], button, [class*="trailing"]')
if (cancelIcon) {
  await userEvent.click(cancelIcon as HTMLElement)
}
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SelectValue'} type={'selectValue'}/>
<Canvas of={Component.SelectValueBasic}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `
  },
  ai: {
    description: `
Specialized display engine used within Select, Combobox, or Autocomplete controls to render selected state. Dynamically switches between a simple text label for single selection and a group of Chips for multiple selection.
Features automated Chip management, including removal event handling and integration with the Select data model. Supports empty state placeholders, custom Chip attributes (icons, outlines), and handles disabled/readonly states to prevent interaction.
Controlled via the multiple and value props, requiring an array of objects even for single selection. Use as a foundational element when building custom selection fields requiring standardized token-based or text-based value representation.
    `,
    hide: true
  }
}
