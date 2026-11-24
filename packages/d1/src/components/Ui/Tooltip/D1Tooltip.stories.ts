import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Tooltip from './D1Tooltip.vue'
import { TooltipWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { TooltipExpose } from '@dxtmisha/constructor/Tooltip'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Tooltip',
  component: D1Tooltip,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: TooltipWikiStorybook.getDescription()
      }
    }
  },
  argTypes: TooltipWikiStorybook.getWiki(),
  args: TooltipWikiStorybook.getValues()
} satisfies Meta<typeof D1Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Tooltip: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Tooltip },
    setup: () => ({ args }),
    template: `
      <D1Tooltip v-bind="args">
        <template #control="{ binds }">
          <button type="button" class="wiki-storybook-button" v-bind="binds">
            Hover me
          </button>
        </template>
      </D1Tooltip>
    `
  }),
  play: async ({ canvasElement }) => {
    const control = canvasElement.querySelector('.d1-tooltip__control')
    await expect(control).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const TooltipBasic: Story = {
  name: 'Базовое размещение и стрелка',
  render: () => ({
    components: { D1Tooltip },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
          <D1Tooltip
            label="Default tooltip"
            description="Positioned below the trigger by default."
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" v-bind="binds">
                Bottom
              </button>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Top tooltip with arrow"
            top
            arrow-show
            :indent="12"
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" v-bind="binds">
                Top + Arrow
              </button>
            </template>
          </D1Tooltip>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const controls = canvasElement.querySelectorAll('.d1-tooltip__control')
    await expect(controls.length).toBe(2)
  }
}
export const TooltipEmbedded: Story = {
  name: 'Встроенный режим (embedded и inDom)',
  render: () => ({
    components: { D1Tooltip },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Tooltip
            label="Inline Embedded Tooltip"
            description="Rendered inside the parent container without Teleport."
            in-dom
            embedded
            open
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" v-bind="binds">
                Embedded Control
              </button>
            </template>
          </D1Tooltip>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const tooltipElement = canvasElement.querySelector('.d1-tooltip--embedded')
      expect(tooltipElement).toBeInTheDocument()
      expect(tooltipElement).toHaveTextContent('Inline Embedded Tooltip')
    })
  }
}
export const TooltipEventAndExpose: Story = {
  name: 'События и программный вызов toggle()',
  render: () => ({
    components: { D1Tooltip },
    setup() {
      const tooltipReference = ref<TooltipExpose | null>(null)
      const lastState = ref<string>('none')
      const onTooltip = (open: boolean) => {
        lastState.value = String(open)
      }
      const onOpenTooltip = () => {
        tooltipReference.value?.toggle(true, true)
      }
      const onCloseTooltip = () => {
        tooltipReference.value?.toggle(false, true)
      }
      return { tooltipReference, lastState, onTooltip, onOpenTooltip, onCloseTooltip }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="onOpenTooltip">
              Open Tooltip
            </button>
            <button type="button" class="wiki-storybook-button" @click="onCloseTooltip">
              Close Tooltip
            </button>
            <span data-testid="tooltip-event-state">state:{{ lastState }}</span>
          </div>

          <D1Tooltip
            ref="tooltipReference"
            label="Programmatic Tooltip"
            description="Controlled via exposed toggle() method."
            in-dom
            embedded
            @tooltip="onTooltip"
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" v-bind="binds">
                Target Control
              </button>
            </template>
          </D1Tooltip>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openButton = canvas.getByRole('button', { name: 'Open Tooltip' })
    const closeButton = canvas.getByRole('button', { name: 'Close Tooltip' })
    const stateBadge = canvas.getByTestId('tooltip-event-state')

    await step('Open tooltip via expose toggle(true, true)', async () => {
      await userEvent.click(openButton)
      await waitFor(() => {
        expect(stateBadge).toHaveTextContent('state:true')
      })
    })

    await step('Close tooltip via expose toggle(false, true)', async () => {
      await userEvent.click(closeButton)
      await waitFor(() => {
        expect(stateBadge).toHaveTextContent('state:false')
      })
    })
  }
}
export const TooltipAllSlots: Story = {
  name: 'Демонстрация всех слотов',
  render: () => ({
    components: { D1Tooltip },
    template: `
        
        <D1Tooltip in-dom embedded open>
          <template #control="{ binds }">
            <button type="button" class="wiki-storybook-button" v-bind="binds">
              All Slots Control
            </button>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #description>
            Description Slot
          </template>

          <template #body>
            <div class="wiki-storybook-item--padding">
              Body Slot Content
            </div>
          </template>
        </D1Tooltip>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const tooltipElement = canvasElement.querySelector('.d1-tooltip')
      expect(tooltipElement).toBeInTheDocument()
      expect(tooltipElement).toHaveTextContent('Default Slot')
      expect(tooltipElement).toHaveTextContent('Description Slot')
      expect(tooltipElement).toHaveTextContent('Body Slot Content')
    })
  }
}
export const TooltipTestPropsAndAria: Story = {
  name: 'Тест: ARIA, interactive, disabled, числовой 0 и свойства стрелки',
  render: () => ({
    components: { D1Tooltip },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div data-testid="case-interactive">
            <D1Tooltip
              label="Interactive Label"
              description="Interactive Description"
              label-id="test-tooltip-label"
              description-id="test-tooltip-description"
              :interactive="true"
              in-dom
              embedded
              open
            >
              <template #control="{ binds }">
                <button type="button" class="wiki-storybook-button" v-bind="binds">
                  Interactive Trigger
                </button>
              </template>
            </D1Tooltip>
          </div>

          <div data-testid="case-non-interactive">
            <D1Tooltip
              :label="0"
              :description="0"
              :interactive="false"
              in-dom
              embedded
              open
              arrow-show
              arrow-position="top"
              :indent="0"
              :delay="0"
              :delay-hide="0"
            >
              <template #control="{ binds }">
                <button type="button" class="wiki-storybook-button" v-bind="binds">
                  Non-Interactive Trigger
                </button>
              </template>
            </D1Tooltip>
          </div>

          <div data-testid="case-disabled">
            <D1Tooltip
              label="Hidden When Disabled"
              disabled
              in-dom
              embedded
              open
            >
              <template #control="{ binds }">
                <button type="button" class="wiki-storybook-button" v-bind="binds">
                  Disabled Trigger
                </button>
              </template>
            </D1Tooltip>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const interactiveCase = canvasElement.querySelector('[data-testid="case-interactive"]')
      const interactiveTrigger = interactiveCase?.querySelector('.d1-tooltip__control')
      const interactivePopup = interactiveCase?.querySelector('.d1-tooltip')

      expect(interactiveTrigger).toHaveAttribute('aria-expanded')
      expect(interactiveTrigger).toHaveAttribute('aria-controls', interactivePopup?.getAttribute('id') ?? '')
      expect(interactivePopup).toHaveAttribute('role', 'region')
      expect(interactivePopup).toHaveAttribute('aria-labelledby', 'test-tooltip-label')
      expect(interactivePopup).toHaveAttribute('aria-describedby', 'test-tooltip-description')

      const nonInteractiveCase = canvasElement.querySelector('[data-testid="case-non-interactive"]')
      const nonInteractiveTrigger = nonInteractiveCase?.querySelector('.d1-tooltip__control')
      const nonInteractivePopup = nonInteractiveCase?.querySelector('.d1-tooltip')

      expect(nonInteractiveTrigger).toHaveAttribute('aria-describedby', nonInteractivePopup?.getAttribute('id') ?? '')
      expect(nonInteractivePopup).toHaveAttribute('role', 'tooltip')
      expect(nonInteractivePopup).toHaveTextContent('0')

      const disabledCase = canvasElement.querySelector('[data-testid="case-disabled"]')
      expect(disabledCase?.querySelector('.d1-tooltip')).toBeNull()
    })
  }
}
// :story-items [!] System label / Системная метка
