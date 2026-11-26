import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1SnackbarItem from './D1SnackbarItem.vue'
import { SnackbarItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { defineComponent, h, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/SnackbarItem',
  component: D1SnackbarItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: SnackbarItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: SnackbarItemWikiStorybook.getWiki(),
  args: SnackbarItemWikiStorybook.getValues()
} satisfies Meta<typeof D1SnackbarItem>

export default meta

type Story = StoryObj<typeof meta>

export const SnackbarItem: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1SnackbarItem },
    setup: () => ({ args }),
    template: `
      <D1SnackbarItem v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-snackbarItem')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveAttribute('aria-atomic', 'true')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const SnackbarItemBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1SnackbarItem },
    template: `
        
        <div class="wiki-storybook-group">
          <D1SnackbarItem
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry' }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-snackbarItem')
    await expect(items.length).toBe(4)

    await expect(items[0].querySelector('.d1-snackbarItem__label')).toHaveTextContent('Detailed notification')
    await expect(items[0].querySelector('.d1-snackbarItem__description')).toHaveTextContent('Description text provides more context for the user.')
    await expect(items[1].querySelector('.d1-snackbarItem__icon')).toBeInTheDocument()
    await expect(items[2].querySelector('.d1-snackbarItem__button')).toHaveTextContent('Undo')
    await expect(items[3].querySelector('.d1-snackbarItem__actions')).toHaveTextContent('Retry')
  }
}
export const SnackbarItemStatusAndEvents: Story = {
  name: 'Статусы, кнопка закрытия и события',
  render: () => ({
    components: { D1SnackbarItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1SnackbarItem
            label="Changes saved"
            description="Your profile has been updated."
            icon="check_circle"
            success
          />
          <D1SnackbarItem
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const items = canvasElement.querySelectorAll('.d1-snackbarItem')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-snackbarItem--success')
    await expect(items[0]).toHaveAttribute('role', 'status')
    await expect(items[0]).toHaveAttribute('aria-live', 'polite')
    await expect(items[0]).toHaveAttribute('aria-atomic', 'true')

    await expect(items[1]).toHaveClass('d1-snackbarItem--error')
    await expect(items[1]).toHaveAttribute('role', 'alert')
    await expect(items[1]).toHaveAttribute('aria-live', 'assertive')
    await expect(items[1]).toHaveAttribute('aria-atomic', 'true')

    const actionButton = items[1].querySelector<HTMLButtonElement>('.d1-snackbarItem__button')
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

    const closeButton = items[1].querySelector<HTMLButtonElement>('.d1-snackbarItem__close')
    await expect(closeButton).toBeInTheDocument()
    await expect(closeButton).toHaveAttribute('aria-label', 'Dismiss error')

    await step('Click close button to emit close with value', async () => {
      if (closeButton) {
        await userEvent.click(closeButton)
      }
      await expect(canvas.getByTestId('snackbar-item-event-output')).toHaveTextContent('close:upload-error')
    })
  }
}
export const SnackbarItemSlots: Story = {
  name: 'Настройка слотов',
  render: () => ({
    components: { D1SnackbarItem },
    template: `
        
        <D1SnackbarItem icon="notifications">
          <template #default>
            <strong data-testid="snackbar-slot-default">Custom default label</strong>
          </template>
          <template #description>
            <em data-testid="snackbar-slot-description">Custom description slot</em>
          </template>
          <template #body>
            <span data-testid="snackbar-slot-body">Custom body slot content</span>
          </template>
        </D1SnackbarItem>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('snackbar-slot-default')).toHaveTextContent('Custom default label')
    await expect(canvas.getByTestId('snackbar-slot-description')).toHaveTextContent('Custom description slot')
    await expect(canvas.getByTestId('snackbar-slot-body')).toHaveTextContent('Custom body slot content')
  }
}
export const SnackbarItemTestHtmlAndComponent: Story = {
  name: 'Тест: HTML-контент, пользовательский компонент и комбинированный рендер тела',
  render: () => ({
    components: { D1SnackbarItem },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1SnackbarItem
            label="HTML notification"
            html="<strong>Formatted</strong> HTML body"
          />
          <D1SnackbarItem
            label="Component notification"
            :component="CustomNotificationBody"
            :component-props="{ title: 'Sync', count: 3 }"
          />
          <D1SnackbarItem
            label="Combined body blocks"
            html="<em data-testid='combined-html'>HTML part</em>"
            :component="CustomNotificationBody"
            :component-props="{ title: 'Combined', count: 7 }"
          >
            <template #body>
              <span data-testid="combined-slot">Slot part</span>
            </template>
          </D1SnackbarItem>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-snackbarItem')
    await expect(items.length).toBe(3)

    await expect(items[0].querySelector('.d1-snackbarItem__body strong')).toHaveTextContent('Formatted')
    await expect(items[1].querySelector('[data-testid="snackbar-custom-component"]')).toHaveTextContent('Sync:3')

    const combinedBodies = items[2].querySelectorAll('.d1-snackbarItem__body')
    await expect(combinedBodies.length).toBe(3)
    await expect(items[2].querySelector('[data-testid="combined-html"]')).toHaveTextContent('HTML part')
    await expect(items[2].querySelector('[data-testid="combined-slot"]')).toHaveTextContent('Slot part')
    await expect(items[2].querySelector('[data-testid="snackbar-custom-component"]')).toHaveTextContent('Combined:7')
  }
}
export const SnackbarItemTestAriaAndStates: Story = {
  name: 'Тест: Приоритет ARIA, видимость кнопки закрытия, ID, area и числовой ноль',
  render: () => ({
    components: { D1SnackbarItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1SnackbarItem
            label="Error overrides success ARIA"
            error
            success
          />
          <D1SnackbarItem
            label="Explicit ARIA overrides error"
            error
            role="log"
            aria-live="off"
          />
          <D1SnackbarItem
            label="Close button disabled"
            :close-button="false"
            icon-close="close"
          />
          <D1SnackbarItem
            label="Close icon null"
            close-button
            :icon-close="null"
          />
          <D1SnackbarItem
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
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-snackbarItem')
    await expect(items.length).toBe(5)

    await expect(items[0]).toHaveClass('d1-snackbarItem--error')
    await expect(items[0]).toHaveClass('d1-snackbarItem--success')
    await expect(items[0]).toHaveAttribute('role', 'alert')
    await expect(items[0]).toHaveAttribute('aria-live', 'assertive')

    await expect(items[1]).toHaveAttribute('role', 'log')
    await expect(items[1]).toHaveAttribute('aria-live', 'off')

    await expect(items[2].querySelector('.d1-snackbarItem__close')).toBeNull()
    await expect(items[3].querySelector('.d1-snackbarItem__close')).toBeNull()

    await expect(items[4].querySelector('#snackbar-item-label-zero')).toHaveTextContent('0')
    await expect(items[4].querySelector('#snackbar-item-description-zero')).toHaveTextContent('0')
    await expect(items[4].querySelector('.d1-snackbarItem__button')).toHaveTextContent('0')
    await expect(items[4].querySelector('.d1-snackbarItem__close')).toHaveAttribute('aria-label', 'Close zero')
  }
}
export const SnackbarItemTestIconsAndActions: Story = {
  name: 'Тест: Модификаторы иконок, вторичные действия, actionsHide и actionsAttrs',
  render: () => ({
    components: { D1SnackbarItem },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1SnackbarItem
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
          <D1SnackbarItem
            label="Hidden icon and hidden actions"
            icon="info"
            icon-hide
            :actions-list="[{ label: 'Should Hide' }]"
            actions-hide
          />
          <D1SnackbarItem
            label="Actions from actionsAttrs"
            :actions-attrs="{ list: [{ label: 'From Attrs' }] }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-snackbarItem')
    await expect(items.length).toBe(3)

    const leadingIcon = items[0].querySelector('.d1-snackbarItem__icon')
    const trailingIcon = items[0].querySelector('.d1-snackbarItem__trailing')
    await expect(leadingIcon).toBeInTheDocument()
    await expect(leadingIcon).toHaveAttribute('data-custom-icon', 'snackbar')
    await expect(trailingIcon).toBeInTheDocument()
    await expect(items[0].querySelector('.d1-snackbarItem__actions')).toHaveTextContent('Primary Action')
    await expect(items[0].querySelector('.d1-snackbarItem__actions')).toHaveTextContent('Secondary Action')

    await expect(items[1].querySelector('.d1-snackbarItem__icon')).toBeInTheDocument()
    await expect(items[1].querySelector('.d1-snackbarItem__actions')).toBeNull()

    await expect(items[2].querySelector('.d1-snackbarItem__actions')).toHaveTextContent('From Attrs')
  }
}
// :story-items [!] System label / Системная метка
