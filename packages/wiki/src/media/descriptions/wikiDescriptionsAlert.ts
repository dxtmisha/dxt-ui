import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Alert component properties
 *
 * Описания свойств компонента Alert
 */
export const wikiDescriptionsAlert: StorybookComponentsDescriptionItem = {
  name: 'Alert',
  description: {
    en: 'An alert component for displaying contextual messages, notifications, or status updates.',
    ru: 'Компонент оповещения для отображения контекстных сообщений, уведомлений или обновлений статуса.'
  },
  possibilities: {
    en: [
      'customizable label and description text, numeric 0 support, and slots',
      'supports primary and secondary action buttons via actionsList and actionsSecondary',
      'supports inline links with optional dividers via links and linksAttrs',
      'dismissible state with closeButton, custom iconClose, textClose, and smooth opacity exit',
      'customizable trailing action button with click and clickLite events',
      'supports custom body and trailing slots',
      'leading and trailing icon integration with turn, hide, and dir modifiers',
      'automatic WAI-ARIA role, live region, labelledby, and describedby wiring'
    ],
    ru: [
      'настраиваемый текст заголовка и описания, поддержка числа 0 и слотов',
      'поддержка основных и вторичных кнопок действий через actionsList и actionsSecondary',
      'поддержка встроенных ссылок с опциональными разделителями через links и linksAttrs',
      'закрытие через closeButton, iconClose, textClose и плавный переход прозрачности',
      'настраиваемая хвостовая кнопка действия с событиями click и clickLite',
      'поддержка пользовательских слотов body и trailing',
      'интеграция ведущей и хвостовой иконок с модификаторами turn, hide и dir',
      'автоматическая связка WAI-ARIA: role, aria-live, aria-labelledby и aria-describedby'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
    const component = canvasElement.querySelector('.design-component')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveAttribute('role', 'alert')
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/slots)
    // =========================================================================
    {
      id: 'AlertBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      propsName: ['label', 'description', 'icon', 'itemCenter'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Default Alert"
            description="This is a simple contextual alert message."
          />
          <DesignComponent
            label="Alert with Icon"
            description="Alert message paired with a leading icon."
            icon="info"
          />
          <DesignComponent
            label="Top Aligned Multi-line Alert"
            description="Use itemCenter set to false for longer multi-line descriptions so the icon stays anchored to the first line."
            icon="info"
            :item-center="false"
          />
        </div>
      `,
      play: `
        const alerts = canvasElement.querySelectorAll('.design-component')
        await expect(alerts.length).toBe(3)
        await expect(alerts[0]).toHaveClass('design-component--itemCenter')
        await expect(alerts[2]).not.toHaveClass('design-component--itemCenter')
      `
    },
    {
      id: 'AlertCloseButton',
      name: {
        en: 'Dismissible with close button',
        ru: 'Закрываемое с кнопкой закрытия'
      },
      propsName: ['closeButton', 'iconClose', 'textClose'],
      setup: `
      const closedCount = ref(0)
      const alertKey = ref(0)
      const onClose = () => {
        closedCount.value += 1
      }
      const onRestore = () => {
        alertKey.value += 1
      }
      return { closedCount, alertKey, onClose, onRestore }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :key="alertKey"
            label="Dismissible Alert"
            description="Click the close button to trigger the hide transition and emit close."
            icon="info"
            close-button
            text-close="Dismiss notice"
            @close="onClose"
          />
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="onRestore">Restore Alert</button>
            <span data-testid="close-count">closed:{{ closedCount }}</span>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const alertElement = canvasElement.querySelector('.design-component') as HTMLElement
        const closeButton = alertElement.querySelector('.design-component__buttonClose') as HTMLButtonElement

        await expect(closeButton).toBeInTheDocument()
        await expect(closeButton).toHaveAttribute('aria-label', 'Dismiss notice')

        await step('Click close button and finish opacity transition', async () => {
          await userEvent.click(closeButton)
          await expect(alertElement).toHaveClass('design-component--hide')

          alertElement.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'opacity' }))
          await waitFor(async () => {
            await expect(canvas.getByTestId('close-count').textContent).toBe('closed:1')
          })
          await expect(canvasElement.querySelector('.design-component')).toBeNull()
        })

        await step('Restore dismissed alert', async () => {
          await userEvent.click(canvas.getByRole('button', { name: 'Restore Alert' }))
          await waitFor(async () => {
            await expect(canvasElement.querySelector('.design-component')).toBeInTheDocument()
          })
        })
      `
    },
    {
      id: 'AlertButton',
      name: {
        en: 'Trailing button and click events',
        ru: 'Хвостовая кнопка и события клика'
      },
      propsName: ['button'],
      setup: `
      const lastClick = ref('none')
      const onClickLite = (payload: EventClickValue) => {
        lastClick.value = 'clickLite:' + String(payload.value)
      }
      return { lastClick, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Sync completed"
            description="Click the trailing button to undo the latest synchronization."
            icon="info"
            :button="{ label: 'Undo', value: 'undo-sync' }"
            @click-lite="onClickLite"
          />
          <div class="wiki-storybook-card" data-testid="button-output">{{ lastClick }}</div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const trailingButton = canvasElement.querySelector('.design-component__trailing button') as HTMLButtonElement
        await expect(trailingButton).toBeInTheDocument()

        await step('Click trailing button', async () => {
          await userEvent.click(trailingButton)
          await expect(canvas.getByTestId('button-output').textContent).toBe('clickLite:undo-sync')
        })
      `
    },
    {
      id: 'AlertActionsAndLinks',
      name: {
        en: 'Inline links and action buttons',
        ru: 'Встроенные ссылки и кнопки действий'
      },
      propsName: ['links', 'actionsList', 'actionsSecondary'],
      setup: `
      const lastEvent = ref('none')
      const onLinkLite = (payload: EventClickValue) => {
        lastEvent.value = 'linkLite:' + String(payload.value)
      }
      const onActionsLite = (payload: EventClickValue) => {
        lastEvent.value = 'actionsLite:' + String(payload.value)
      }
      return { lastEvent, onLinkLite, onActionsLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Actions and Links"
            description="Detailed notification with interactive inline links and action buttons."
            icon="info"
            :links="[
              { label: 'View changelog', value: 'changelog' },
              { label: 'Migration guide', value: 'migration' }
            ]"
            :actions-list="[
              { label: 'Accept', value: 'accept' }
            ]"
            :actions-secondary="[
              { label: 'Learn more', value: 'learn-more' }
            ]"
            @link-lite="onLinkLite"
            @actions-lite="onActionsLite"
          />
          <div class="wiki-storybook-card" data-testid="actions-links-output">{{ lastEvent }}</div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)

        await step('Click inline link', async () => {
          await userEvent.click(canvas.getByText('View changelog'))
          await expect(canvas.getByTestId('actions-links-output').textContent).toBe('linkLite:changelog')
        })

        await step('Click primary action button', async () => {
          await userEvent.click(canvas.getByText('Accept'))
          await expect(canvas.getByTestId('actions-links-output').textContent).toBe('actionsLite:accept')
        })
      `
    },
    {
      id: 'AlertSlots',
      name: {
        en: 'Slots customization',
        ru: 'Настройка слотов'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent icon="star">
            <template #default>
              <span data-testid="slot-default">Custom Default Label</span>
            </template>
            <template #description>
              <span data-testid="slot-description">Custom description slot content.</span>
            </template>
            <template #body>
              <div data-testid="slot-body">Custom body slot content.</div>
            </template>
            <template #trailing>
              <span data-testid="slot-trailing">Trailing Slot</span>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        await expect(canvas.getByTestId('slot-default')).toBeInTheDocument()
        await expect(canvas.getByTestId('slot-description')).toBeInTheDocument()
        await expect(canvas.getByTestId('slot-body')).toBeInTheDocument()
        await expect(canvas.getByTestId('slot-trailing')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with AlertTest... and "Test: " / "Тест: ")
    // ONLY for constructor-level props/behavior!
    // =========================================================================
    {
      id: 'AlertTestIcons',
      name: {
        en: 'Test: Icon modifiers (icon, iconTrailing, iconTurn, iconDir, iconHide, iconAttrs)',
        ru: 'Тест: Модификаторы иконок (icon, iconTrailing, iconTurn, iconDir, iconHide, iconAttrs)'
      },
      propsName: ['icon', 'iconTrailing', 'iconTurn', 'iconDir', 'iconHide', 'iconAttrs'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Icons Test"
            icon="info"
            icon-trailing="chevron_right"
            icon-turn
            icon-dir
            :icon-attrs="{ 'data-custom-icon': 'yes' }"
          />
          <DesignComponent
            label="Hidden Icon Test"
            icon="info"
            icon-hide
          />
        </div>
      `,
      play: `
        const alerts = canvasElement.querySelectorAll('.design-component')
        await expect(alerts.length).toBe(2)

        const firstLeadingIcon = alerts[0].querySelector('.design-component__icon')
        const firstTrailingIcon = alerts[0].querySelector('.design-component__trailing')
        await expect(firstLeadingIcon).toBeInTheDocument()
        await expect(firstTrailingIcon).toBeInTheDocument()
        await expect(firstLeadingIcon).toHaveAttribute('data-custom-icon', 'yes')

        const hiddenIcon = alerts[1].querySelector('.design-component__icon')
        await expect(hiddenIcon).toBeInTheDocument()
      `
    },
    {
      id: 'AlertTestAlignmentAndAria',
      name: {
        en: 'Test: ARIA attributes, custom IDs, numeric 0 values, and empty links guard',
        ru: 'Тест: ARIA-атрибуты, пользовательские ID, числовые 0 и защита пустых links'
      },
      propsName: ['role', 'ariaLive', 'labelId', 'descriptionId', 'button', 'links', 'itemCenter'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            role="status"
            aria-live="polite"
            :label="0"
            :description="0"
            :button="0"
            label-id="alert-test-label-id"
            description-id="alert-test-desc-id"
            :links="[]"
            :item-center="false"
          />
        </div>
      `,
      play: `
        const alertElement = canvasElement.querySelector('.design-component') as HTMLElement
        await expect(alertElement).toHaveAttribute('role', 'status')
        await expect(alertElement).toHaveAttribute('aria-live', 'polite')
        await expect(alertElement).toHaveAttribute('aria-labelledby', 'alert-test-label-id')
        await expect(alertElement).toHaveAttribute('aria-describedby', 'alert-test-desc-id')
        await expect(alertElement).not.toHaveClass('design-component--itemCenter')

        await expect(alertElement.querySelector('#alert-test-label-id')?.textContent).toBe('0')
        await expect(alertElement.querySelector('#alert-test-desc-id')?.textContent).toBe('0')
        await expect(alertElement.querySelector('.design-component__trailing button')?.textContent?.trim()).toBe('0')
        await expect(alertElement.querySelector('.design-component__links')).toBeNull()
      `
    },
    {
      id: 'AlertTestActionsAndLinksConfig',
      name: {
        en: 'Test: actionsHide, actionsAttrs, and linksAttrs configuration',
        ru: 'Тест: Настройка actionsHide, actionsAttrs и linksAttrs'
      },
      propsName: ['actionsHide', 'actionsAttrs', 'linksAttrs'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Hidden Actions Alert"
            :actions-list="[{ label: 'Should Hide' }]"
            actions-hide
          />
          <DesignComponent
            label="Custom Attrs Alert"
            :links="[{ label: 'Link A' }, { label: 'Link B' }]"
            :links-attrs="{ divider: false }"
            :actions-attrs="{ list: [{ label: 'From Attrs' }] }"
          />
        </div>
      `,
      play: `
        const alerts = canvasElement.querySelectorAll('.design-component')
        await expect(alerts.length).toBe(2)

        await expect(alerts[0].querySelector('.design-component__actions')).toBeNull()
        await expect(alerts[1].querySelector('.design-component__actions')).toBeInTheDocument()
        await expect(alerts[1].querySelectorAll('.design-component__links a').length).toBe(2)
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Alert'} type={'alert'}/>
<Canvas of={Component.AlertBasic}/>
<Canvas of={Component.AlertCloseButton}/>
<Canvas of={Component.AlertButton}/>
<Canvas of={Component.AlertActionsAndLinks}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
<StorybookDescriptions componentName={'Event'} type={'link'}/>
<StorybookDescriptions componentName={'Alert'} type={'event.close'}/>
    `,
    slots: `
<Canvas of={Component.AlertSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
An alert banner/notification block designed to display contextual user feedback.
Features modular sub-components including a title/label, description block, custom inline links (AlertLink), primary/secondary action buttons (Actions), leading/trailing icons, a trailing action button, and a dismiss/close button with smooth opacity transition.
Automatically wires WAI-ARIA role, aria-live, aria-labelledby, aria-describedby, and close button aria-label, emitting close, click/clickLite, link/linkLite, and actions/actionsLite events.
`
  }
}
