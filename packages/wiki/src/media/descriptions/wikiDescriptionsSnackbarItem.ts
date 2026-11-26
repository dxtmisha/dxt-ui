import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SnackbarItem component properties
 *
 * Описания свойств компонента SnackbarItem
 */
export const wikiDescriptionsSnackbarItem: StorybookComponentsDescriptionItem = {
  name: 'SnackbarItem',
  description: {
    en: 'Individual notification message element used within a Snackbar or as a standalone feedback banner.',
    ru: 'Элемент индивидуального уведомления, используемый внутри Snackbar или как самостоятельный баннер обратной связи.'
  },
  possibilities: {
    en: [
      'support for label, description, numeric zero values, and custom slots (`default`, `description`, `body`)',
      'leading and trailing icons with turn, hide, direction, selection, and custom attribute controls',
      'built-in action button (`button`) with `click` and `clickLite` events',
      'multi-action bar via `actionsList`, `actionsSecondary`, `actionsHide`, and `actionsAttrs`',
      'custom HTML string (`html`) or Vue component (`component` + `componentProps`) body rendering',
      'configurable close button (`closeButton`, `iconClose`, `textClose`, `value`) emitting `close`',
      'accessible WAI-ARIA live region (`aria-atomic`, `error`/`success` defaults, `role`, and `ariaLive` overrides)'
    ],
    ru: [
      'поддержка заголовка, описания, числового нуля и слотов (`default`, `description`, `body`)',
      'начальные и конечные иконки с управлением поворотом, скрытием, направлением и атрибутами',
      'встроенная кнопка действия (`button`) с событиями `click` и `clickLite`',
      'панель действий через `actionsList`, `actionsSecondary`, `actionsHide` и `actionsAttrs`',
      'рендер произвольного HTML (`html`) или Vue-компонента (`component` + `componentProps`)',
      'настраиваемая кнопка закрытия (`closeButton`, `iconClose`, `textClose`, `value`) с событием `close`',
      'доступная WAI-ARIA live-область (`aria-atomic`, значения по умолчанию для `error`/`success`, переопределение `role` и `ariaLive`)'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveAttribute('aria-atomic', 'true')
  `,
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/slots)
    // =========================================================================
    {
      id: 'SnackbarItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      propsName: ['label', 'description', 'icon', 'button', 'actionsList'],
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry' }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)

await expect(items[0].querySelector('.design-component__label')).toHaveTextContent('Detailed notification')
await expect(items[0].querySelector('.design-component__description')).toHaveTextContent('Description text provides more context for the user.')
await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[2].querySelector('.design-component__button')).toHaveTextContent('Undo')
await expect(items[3].querySelector('.design-component__actions')).toHaveTextContent('Retry')
      `
    },
    {
      id: 'SnackbarItemStatusAndEvents',
      name: {
        en: 'Status, close button and events',
        ru: 'Статусы, кнопка закрытия и события'
      },
      propsName: ['success', 'error', 'closeButton', 'iconClose', 'textClose', 'value', 'button', 'actionsList'],
      setup: `
      const lastEvent = ref('none')
      const onClickLite = (payload: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(payload.value)
      }
      const onActionsLite = (payload: EventClickValue) => {
        lastEvent.value = 'actionsLite:' + String(payload.value)
      }
      const onClose = (value: string | undefined) => {
        lastEvent.value = 'close:' + String(value)
      }
      return { lastEvent, onClickLite, onActionsLite, onClose }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Changes saved"
            description="Your profile has been updated."
            icon="check_circle"
            success
          />
          <DesignComponent
            label="Upload failed"
            description="Check your connection and try again."
            icon="error"
            error
            value="upload-error"
            icon-close="close"
            text-close="Dismiss error"
            :button="{ label: 'Retry', value: 'retry-upload' }"
            :actions-list="[{ label: 'Details', value: 'view-details' }]"
            @click-lite="onClickLite"
            @actions-lite="onActionsLite"
            @close="onClose"
          />
          <div class="wiki-storybook-card" data-testid="snackbar-item-event-output">{{ lastEvent }}</div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)

await expect(items[0]).toHaveClass('design-component--success')
await expect(items[0]).toHaveAttribute('role', 'status')
await expect(items[0]).toHaveAttribute('aria-live', 'polite')
await expect(items[0]).toHaveAttribute('aria-atomic', 'true')

await expect(items[1]).toHaveClass('design-component--error')
await expect(items[1]).toHaveAttribute('role', 'alert')
await expect(items[1]).toHaveAttribute('aria-live', 'assertive')
await expect(items[1]).toHaveAttribute('aria-atomic', 'true')

const actionButton = items[1].querySelector<HTMLButtonElement>('.design-component__button')
await expect(actionButton).toBeInTheDocument()

await step('Click primary button to emit clickLite', async () => {
  if (actionButton) {
    await userEvent.click(actionButton)
  }
  await expect(canvas.getByTestId('snackbar-item-event-output')).toHaveTextContent('clickLite:retry-upload')
})

await step('Click action bar item to emit actionsLite', async () => {
  await userEvent.click(canvas.getByText('Details'))
  await expect(canvas.getByTestId('snackbar-item-event-output')).toHaveTextContent('actionsLite:view-details')
})

const closeButton = items[1].querySelector<HTMLButtonElement>('.design-component__close')
await expect(closeButton).toBeInTheDocument()
await expect(closeButton).toHaveAttribute('aria-label', 'Dismiss error')

await step('Click close button to emit close with value', async () => {
  if (closeButton) {
    await userEvent.click(closeButton)
  }
  await expect(canvas.getByTestId('snackbar-item-event-output')).toHaveTextContent('close:upload-error')
})
      `
    },
    {
      id: 'SnackbarItemSlots',
      name: {
        en: 'Slots customization',
        ru: 'Настройка слотов'
      },
      template: `
        <DesignComponent icon="notifications">
          <template #default>
            <strong data-testid="snackbar-slot-default">Custom default label</strong>
          </template>
          <template #description>
            <em data-testid="snackbar-slot-description">Custom description slot</em>
          </template>
          <template #body>
            <span data-testid="snackbar-slot-body">Custom body slot content</span>
          </template>
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('snackbar-slot-default')).toHaveTextContent('Custom default label')
await expect(canvas.getByTestId('snackbar-slot-description')).toHaveTextContent('Custom description slot')
await expect(canvas.getByTestId('snackbar-slot-body')).toHaveTextContent('Custom body slot content')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'SnackbarItemTestHtmlAndComponent',
      name: {
        en: 'Test: HTML content, custom component and combined body rendering',
        ru: 'Тест: HTML-контент, пользовательский компонент и комбинированный рендер тела'
      },
      propsName: ['html', 'component', 'componentProps'],
      setup: `
      const CustomNotificationBody = defineComponent({
        props: {
          title: {
            type: String,
            default: ''
          },
          count: {
            type: Number,
            default: 0
          }
        },
        setup(componentProperties) {
          return () => h(
            'span',
            { 'data-testid': 'snackbar-custom-component' },
            componentProperties.title + ':' + String(componentProperties.count)
          )
        }
      })
      return { CustomNotificationBody }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="HTML notification"
            html="<strong>Formatted</strong> HTML body"
          />
          <DesignComponent
            label="Component notification"
            :component="CustomNotificationBody"
            :component-props="{ title: 'Sync', count: 3 }"
          />
          <DesignComponent
            label="Combined body blocks"
            html="<em data-testid='combined-html'>HTML part</em>"
            :component="CustomNotificationBody"
            :component-props="{ title: 'Combined', count: 7 }"
          >
            <template #body>
              <span data-testid="combined-slot">Slot part</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)

await expect(items[0].querySelector('.design-component__body strong')).toHaveTextContent('Formatted')
await expect(items[1].querySelector('[data-testid="snackbar-custom-component"]')).toHaveTextContent('Sync:3')

const combinedBodies = items[2].querySelectorAll('.design-component__body')
await expect(combinedBodies.length).toBe(3)
await expect(items[2].querySelector('[data-testid="combined-html"]')).toHaveTextContent('HTML part')
await expect(items[2].querySelector('[data-testid="combined-slot"]')).toHaveTextContent('Slot part')
await expect(items[2].querySelector('[data-testid="snackbar-custom-component"]')).toHaveTextContent('Combined:7')
      `
    },
    {
      id: 'SnackbarItemTestAriaAndStates',
      name: {
        en: 'Test: ARIA precedence, close button visibility, IDs, area and numeric zero',
        ru: 'Тест: Приоритет ARIA, видимость кнопки закрытия, ID, area и числовой ноль'
      },
      propsName: ['error', 'success', 'role', 'ariaLive', 'closeButton', 'iconClose', 'textClose', 'labelId', 'descriptionId', 'area', 'button'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Error overrides success ARIA"
            error
            success
          />
          <DesignComponent
            label="Explicit ARIA overrides error"
            error
            role="log"
            aria-live="off"
          />
          <DesignComponent
            label="Close button disabled"
            :close-button="false"
            icon-close="close"
          />
          <DesignComponent
            label="Close icon null"
            close-button
            :icon-close="null"
          />
          <DesignComponent
            :label="0"
            :description="0"
            :button="0"
            label-id="snackbar-item-label-zero"
            description-id="snackbar-item-description-zero"
            area="custom-snackbar"
            icon-close="close"
            text-close="Close zero"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(5)

await expect(items[0]).toHaveClass('design-component--error')
await expect(items[0]).toHaveClass('design-component--success')
await expect(items[0]).toHaveAttribute('role', 'alert')
await expect(items[0]).toHaveAttribute('aria-live', 'assertive')

await expect(items[1]).toHaveAttribute('role', 'log')
await expect(items[1]).toHaveAttribute('aria-live', 'off')

await expect(items[2].querySelector('.design-component__close')).toBeNull()
await expect(items[3].querySelector('.design-component__close')).toBeNull()

await expect(items[4].querySelector('#snackbar-item-label-zero')).toHaveTextContent('0')
await expect(items[4].querySelector('#snackbar-item-description-zero')).toHaveTextContent('0')
await expect(items[4].querySelector('.design-component__button')).toHaveTextContent('0')
await expect(items[4].querySelector('.design-component__close')).toHaveAttribute('aria-label', 'Close zero')
      `
    },
    {
      id: 'SnackbarItemTestIconsAndActions',
      name: {
        en: 'Test: Icon modifiers, secondary actions, actionsHide and actionsAttrs',
        ru: 'Тест: Модификаторы иконок, вторичные действия, actionsHide и actionsAttrs'
      },
      propsName: [
        'icon',
        'iconTrailing',
        'iconTurn',
        'iconHide',
        'iconDir',
        'selected',
        'iconPalette',
        'iconTrailingTurnOnly',
        'iconTrailingDirOnly',
        'iconTrailingPalette',
        'iconAttrs',
        'actionsList',
        'actionsSecondary',
        'actionsHide',
        'actionsAttrs'
      ],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Full icons and actions"
            icon="info"
            icon-trailing="chevron_right"
            icon-turn
            icon-dir
            selected
            icon-palette
            icon-trailing-turn-only
            icon-trailing-dir-only
            icon-trailing-palette
            :icon-attrs="{ 'data-custom-icon': 'snackbar' }"
            :actions-list="[{ label: 'Primary Action', value: 'primary' }]"
            :actions-secondary="[{ label: 'Secondary Action', value: 'secondary' }]"
          />
          <DesignComponent
            label="Hidden icon and hidden actions"
            icon="info"
            icon-hide
            :actions-list="[{ label: 'Should Hide' }]"
            actions-hide
          />
          <DesignComponent
            label="Actions from actionsAttrs"
            :actions-attrs="{ list: [{ label: 'From Attrs' }] }"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)

const leadingIcon = items[0].querySelector('.design-component__icon')
const trailingIcon = items[0].querySelector('.design-component__trailing')
await expect(leadingIcon).toBeInTheDocument()
await expect(leadingIcon).toHaveAttribute('data-custom-icon', 'snackbar')
await expect(trailingIcon).toBeInTheDocument()
await expect(items[0].querySelector('.design-component__actions')).toHaveTextContent('Primary Action')
await expect(items[0].querySelector('.design-component__actions')).toHaveTextContent('Secondary Action')

await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__actions')).toBeNull()

await expect(items[2].querySelector('.design-component__actions')).toHaveTextContent('From Attrs')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SnackbarItem'} type={'snackbarItem'}/>
<Canvas of={Component.SnackbarItemBasic}/>
<Canvas of={Component.SnackbarItemStatusAndEvents}/>

<StorybookDescriptions componentName={'SnackbarItem'} type={'component'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'html'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'role'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'event.close'}/>
    `,
    expose: '',
    slots: `
<Canvas of={Component.SnackbarItemSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
    `
  },
  ai: {
    description: `
Visual representation element for a single notification message, typically orchestrated by the Snackbar component. Designed for concise informational alerts, success messages, error notices, or quick-action prompts.
Features a flexible internal structure with support for labels, detailed descriptions, leading/trailing icons, integrated action buttons, an Actions bar, a configurable close button, and custom HTML or Vue component bodies.
Automatically sets aria-atomic="true" and derives WAI-ARIA role/aria-live defaults for error and success states, emitting click/clickLite, actions/actionsLite, and close events.
    `
  }
}
