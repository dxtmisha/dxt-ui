import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Alert from './D1Alert.vue'
import { AlertWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Alert',
  component: D1Alert,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AlertWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AlertWikiStorybook.getWiki(),
  args: AlertWikiStorybook.getValues()
} satisfies Meta<typeof D1Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Alert: Story = {
  args: {
    selected: true,
    button: 'test',
    closeButton: true
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Alert },
    setup: () => ({ args }),
    template: `
      <D1Alert v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-alert')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveAttribute('role', 'alert')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AlertBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Alert },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
            label="Default Alert"
            description="This is a simple contextual alert message."
          />
          <D1Alert
            label="Alert with Icon"
            description="Alert message paired with a leading icon."
            icon="info"
          />
          <D1Alert
            label="Top Aligned Multi-line Alert"
            description="Use itemCenter set to false for longer multi-line descriptions so the icon stays anchored to the first line."
            icon="info"
            :item-center="false"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const alerts = canvasElement.querySelectorAll('.d1-alert')
    await expect(alerts.length).toBe(3)
    await expect(alerts[0]).toHaveClass('d1-alert--itemCenter')
    await expect(alerts[2]).not.toHaveClass('d1-alert--itemCenter')
  }
}
export const AlertCloseButton: Story = {
  name: 'Закрываемое с кнопкой закрытия',
  render: () => ({
    components: { D1Alert },
    setup() {
      const closedCount = ref(0)
      const alertKey = ref(0)
      const onClose = () => {
        closedCount.value += 1
      }
      const onRestore = () => {
        alertKey.value += 1
      }
      return { closedCount, alertKey, onClose, onRestore }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const alertElement = canvasElement.querySelector('.d1-alert') as HTMLElement
    const closeButton = alertElement.querySelector('.d1-alert__buttonClose') as HTMLButtonElement

    await expect(closeButton).toBeInTheDocument()
    await expect(closeButton).toHaveAttribute('aria-label', 'Dismiss notice')

    await step('Click close button and finish opacity transition', async () => {
      await userEvent.click(closeButton)
      await expect(alertElement).toHaveClass('d1-alert--hide')

      alertElement.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'opacity' }))
      await waitFor(async () => {
        await expect(canvas.getByTestId('close-count').textContent).toBe('closed:1')
      })
      await expect(canvasElement.querySelector('.d1-alert')).toBeNull()
    })

    await step('Restore dismissed alert', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Restore Alert' }))
      await waitFor(async () => {
        await expect(canvasElement.querySelector('.d1-alert')).toBeInTheDocument()
      })
    })
  }
}
export const AlertButton: Story = {
  name: 'Хвостовая кнопка и события клика',
  render: () => ({
    components: { D1Alert },
    setup() {
      const lastClick = ref('none')
      const onClickLite = (payload: EventClickValue) => {
        lastClick.value = 'clickLite:' + String(payload.value)
      }
      return { lastClick, onClickLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
            label="Sync completed"
            description="Click the trailing button to undo the latest synchronization."
            icon="info"
            :button="{ label: 'Undo', value: 'undo-sync' }"
            @click-lite="onClickLite"
          />
          <div class="wiki-storybook-card" data-testid="button-output">{{ lastClick }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const trailingButton = canvasElement.querySelector('.d1-alert__trailing button') as HTMLButtonElement
    await expect(trailingButton).toBeInTheDocument()

    await step('Click trailing button', async () => {
      await userEvent.click(trailingButton)
      await expect(canvas.getByTestId('button-output').textContent).toBe('clickLite:undo-sync')
    })
  }
}
export const AlertActionsAndLinks: Story = {
  name: 'Встроенные ссылки и кнопки действий',
  render: () => ({
    components: { D1Alert },
    setup() {
      const lastEvent = ref('none')
      const onLinkLite = (payload: EventClickValue) => {
        lastEvent.value = 'linkLite:' + String(payload.value)
      }
      const onActionsLite = (payload: EventClickValue) => {
        lastEvent.value = 'actionsLite:' + String(payload.value)
      }
      return { lastEvent, onLinkLite, onActionsLite }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
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
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Click inline link', async () => {
      await userEvent.click(canvas.getByText('View changelog'))
      await expect(canvas.getByTestId('actions-links-output').textContent).toBe('linkLite:changelog')
    })

    await step('Click primary action button', async () => {
      await userEvent.click(canvas.getByText('Accept'))
      await expect(canvas.getByTestId('actions-links-output').textContent).toBe('actionsLite:accept')
    })
  }
}
export const AlertSlots: Story = {
  name: 'Настройка слотов',
  render: () => ({
    components: { D1Alert },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert icon="star">
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
          </D1Alert>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('slot-default')).toBeInTheDocument()
    await expect(canvas.getByTestId('slot-description')).toBeInTheDocument()
    await expect(canvas.getByTestId('slot-body')).toBeInTheDocument()
    await expect(canvas.getByTestId('slot-trailing')).toBeInTheDocument()
  }
}
export const AlertTestIcons: Story = {
  name: 'Тест: Модификаторы иконок (icon, iconTrailing, iconTurn, iconDir, iconHide, iconAttrs)',
  render: () => ({
    components: { D1Alert },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
            label="Icons Test"
            icon="info"
            icon-trailing="chevron_right"
            icon-turn
            icon-dir
            :icon-attrs="{ 'data-custom-icon': 'yes' }"
          />
          <D1Alert
            label="Hidden Icon Test"
            icon="info"
            icon-hide
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const alerts = canvasElement.querySelectorAll('.d1-alert')
    await expect(alerts.length).toBe(2)

    const firstLeadingIcon = alerts[0].querySelector('.d1-alert__icon')
    const firstTrailingIcon = alerts[0].querySelector('.d1-alert__trailing')
    await expect(firstLeadingIcon).toBeInTheDocument()
    await expect(firstTrailingIcon).toBeInTheDocument()
    await expect(firstLeadingIcon).toHaveAttribute('data-custom-icon', 'yes')

    const hiddenIcon = alerts[1].querySelector('.d1-alert__icon')
    await expect(hiddenIcon).toBeInTheDocument()
  }
}
export const AlertTestAlignmentAndAria: Story = {
  name: 'Тест: ARIA-атрибуты, пользовательские ID, числовые 0 и защита пустых links',
  render: () => ({
    components: { D1Alert },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
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
      
    `
  }),
  play: async ({ canvasElement }) => {
    const alertElement = canvasElement.querySelector('.d1-alert') as HTMLElement
    await expect(alertElement).toHaveAttribute('role', 'status')
    await expect(alertElement).toHaveAttribute('aria-live', 'polite')
    await expect(alertElement).toHaveAttribute('aria-labelledby', 'alert-test-label-id')
    await expect(alertElement).toHaveAttribute('aria-describedby', 'alert-test-desc-id')
    await expect(alertElement).not.toHaveClass('d1-alert--itemCenter')

    await expect(alertElement.querySelector('#alert-test-label-id')?.textContent).toBe('0')
    await expect(alertElement.querySelector('#alert-test-desc-id')?.textContent).toBe('0')
    await expect(alertElement.querySelector('.d1-alert__trailing button')?.textContent?.trim()).toBe('0')
    await expect(alertElement.querySelector('.d1-alert__links')).toBeNull()
  }
}
export const AlertTestActionsAndLinksConfig: Story = {
  name: 'Тест: Настройка actionsHide, actionsAttrs и linksAttrs',
  render: () => ({
    components: { D1Alert },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Alert
            label="Hidden Actions Alert"
            :actions-list="[{ label: 'Should Hide' }]"
            actions-hide
          />
          <D1Alert
            label="Custom Attrs Alert"
            :links="[{ label: 'Link A' }, { label: 'Link B' }]"
            :links-attrs="{ divider: false }"
            :actions-attrs="{ list: [{ label: 'From Attrs' }] }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const alerts = canvasElement.querySelectorAll('.d1-alert')
    await expect(alerts.length).toBe(2)

    await expect(alerts[0].querySelector('.d1-alert__actions')).toBeNull()
    await expect(alerts[1].querySelector('.d1-alert__actions')).toBeInTheDocument()
    await expect(alerts[1].querySelectorAll('.d1-alert__links a').length).toBe(2)
  }
}
// :story-items [!] System label / Системная метка
