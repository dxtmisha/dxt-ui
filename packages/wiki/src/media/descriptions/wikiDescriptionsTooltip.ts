import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Tooltip component properties
 *
 * Описания свойств компонента Tooltip
 */
export const wikiDescriptionsTooltip: StorybookComponentsDescriptionItem = {
  name: 'Tooltip',
  description: {
    en: 'Component for displaying a contextual popup hint relative to a trigger element',
    ru: 'Компонент для отображения контекстной всплывающей подсказки относительно управляющего элемента'
  },
  possibilities: {
    en: [
      'displaying label, description (including numeric 0), and custom slot content in a popup',
      'automatic viewport-aware positioning with top/bottom flipping and horizontal shift',
      'configurable show delay, auto-hide timeout, and indentation from the trigger',
      'controlled open state, interactive hover retention, and exposed toggle() method',
      'optional arrow indicator integration and inline embedded SSR-friendly mode',
      'automatic WAI-ARIA role, expanded, controls, labelledby, and describedby wiring'
    ],
    ru: [
      'отображение заголовка, описания (включая число 0) и кастомных слотов во всплывающем окне',
      'автоматическое позиционирование с учётом экрана, переворотом сверху/снизу и сдвигом',
      'настраиваемые задержки показа и автоскрытия, а также отступ от управляющего элемента',
      'управляемое состояние open, удержание при наведении (interactive) и метод toggle()',
      'опциональная стрелка-указатель и встроенный SSR-безопасный режим embedded',
      'автоматическая связка WAI-ARIA: role, aria-expanded, aria-controls, aria-labelledby и aria-describedby'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { TooltipExpose } from \'@dxtmisha/constructor/Tooltip\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <button type="button" class="wiki-storybook-button" v-bind="binds">
            Hover me
          </button>
        </template>
      </DesignComponent>
    `,
  play: `
    const control = canvasElement.querySelector('.design-component__control')
    await expect(control).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose/slots)
    // =========================================================================
    {
      id: 'TooltipBasic',
      name: {
        en: 'Basic placement and arrow',
        ru: 'Базовое размещение и стрелка'
      },
      propsName: ['label', 'description', 'top', 'arrowShow', 'indent'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
          <DesignComponent
            label="Default tooltip"
            description="Positioned below the trigger by default."
          >
            <template #control="{ binds }">
              <button type="button" class="wiki-storybook-button" v-bind="binds">
                Bottom
              </button>
            </template>
          </DesignComponent>

          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
        const controls = canvasElement.querySelectorAll('.design-component__control')
        await expect(controls.length).toBe(2)
      `
    },
    {
      id: 'TooltipEmbedded',
      name: {
        en: 'Embedded and inDom rendering',
        ru: 'Встроенный режим (embedded и inDom)'
      },
      propsName: ['embedded', 'inDom', 'open'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
        await waitFor(() => {
          const tooltipElement = canvasElement.querySelector('.design-component--embedded')
          expect(tooltipElement).toBeInTheDocument()
          expect(tooltipElement).toHaveTextContent('Inline Embedded Tooltip')
        })
      `
    },
    {
      id: 'TooltipEventAndExpose',
      name: {
        en: 'Events and programmatic toggle()',
        ru: 'События и программный вызов toggle()'
      },
      propsName: ['open', 'delay', 'delayHide'],
      setup: `
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
      `,
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

          <DesignComponent
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
          </DesignComponent>
        </div>
      `,
      play: `
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
      `
    },
    {
      id: 'TooltipAllSlots',
      name: {
        en: 'All slots demonstration',
        ru: 'Демонстрация всех слотов'
      },
      template: `
        <DesignComponent in-dom embedded open>
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
        </DesignComponent>
      `,
      play: `
        await waitFor(() => {
          const tooltipElement = canvasElement.querySelector('.design-component')
          expect(tooltipElement).toBeInTheDocument()
          expect(tooltipElement).toHaveTextContent('Default Slot')
          expect(tooltipElement).toHaveTextContent('Description Slot')
          expect(tooltipElement).toHaveTextContent('Body Slot Content')
        })
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with TooltipTest... and "Test: " / "Тест: ")
    // ONLY for constructor-level props/behavior!
    // =========================================================================
    {
      id: 'TooltipTestPropsAndAria',
      name: {
        en: 'Test: ARIA, interactive, disabled, numeric 0 and arrow props',
        ru: 'Тест: ARIA, interactive, disabled, числовой 0 и свойства стрелки'
      },
      propsName: [
        'label',
        'labelId',
        'description',
        'descriptionId',
        'interactive',
        'disabled',
        'inDom',
        'embedded',
        'open',
        'top',
        'indent',
        'delay',
        'delayHide',
        'arrowShow',
        'arrowPosition',
        'arrowAttrs'
      ],
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="case-interactive">
            <DesignComponent
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
            </DesignComponent>
          </div>

          <div data-testid="case-non-interactive">
            <DesignComponent
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
            </DesignComponent>
          </div>

          <div data-testid="case-disabled">
            <DesignComponent
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
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
        await waitFor(() => {
          const interactiveCase = canvasElement.querySelector('[data-testid="case-interactive"]')
          const interactiveTrigger = interactiveCase?.querySelector('.design-component__control')
          const interactivePopup = interactiveCase?.querySelector('.design-component')

          expect(interactiveTrigger).toHaveAttribute('aria-expanded')
          expect(interactiveTrigger).toHaveAttribute('aria-controls', interactivePopup?.getAttribute('id') ?? '')
          expect(interactivePopup).toHaveAttribute('role', 'region')
          expect(interactivePopup).toHaveAttribute('aria-labelledby', 'test-tooltip-label')
          expect(interactivePopup).toHaveAttribute('aria-describedby', 'test-tooltip-description')

          const nonInteractiveCase = canvasElement.querySelector('[data-testid="case-non-interactive"]')
          const nonInteractiveTrigger = nonInteractiveCase?.querySelector('.design-component__control')
          const nonInteractivePopup = nonInteractiveCase?.querySelector('.design-component')

          expect(nonInteractiveTrigger).toHaveAttribute('aria-describedby', nonInteractivePopup?.getAttribute('id') ?? '')
          expect(nonInteractivePopup).toHaveAttribute('role', 'tooltip')
          expect(nonInteractivePopup).toHaveTextContent('0')

          const disabledCase = canvasElement.querySelector('[data-testid="case-disabled"]')
          expect(disabledCase?.querySelector('.design-component')).toBeNull()
        })
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Tooltip'} type={'tooltip'}/>
<Canvas of={Component.TooltipBasic}/>
<Canvas of={Component.TooltipEmbedded}/>
    `,
    events: `
<Canvas of={Component.TooltipEventAndExpose}/>
<StorybookDescriptions componentName={'Tooltip'} type={'event.tooltip'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Tooltip'} type={'expose.toggle'}/>
    `,
    slots: `
<Canvas of={Component.TooltipAllSlots}/>
<StorybookDescriptions componentName={'Tooltip'} type={'slot.control'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Tooltip open embedded in-dom v-bind="args">
    <template #control="{ binds }">
      <button v-bind="binds">Hover me</button>
    </template>
  </Tooltip>
</div>
    `,
    description: `
Contextual informational overlay that appears when a user interacts with a trigger element via hover, click, or programmatic toggle(). Designed for auxiliary labels, helper text, and secondary descriptive titles.
Features automated viewport-safe positioning (top/bottom flip and horizontal edge shift), customizable show/auto-hide delays, interactive hover retention, optional arrow indicator, and inline embedded mode. Requires trigger binding via the #control slot's binds object.
    `
  }
}
