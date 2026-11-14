import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Accordion component
 *
 * Описания свойств компонента Accordion
 */
export const wikiDescriptionsAccordion: StorybookComponentsDescriptionItem = {
  name: 'Accordion',
  description: {
    en: 'Expandable container component that reveals and hides content with smooth animations',
    ru: 'Раскрывающийся контейнерный компонент, который показывает и скрывает контент с плавными анимациями'
  },
  possibilities: {
    en: [
      'smooth expand/collapse animations via MotionTransform (`motionTransformAttrs`)',
      'composable header built on Cell with label, description, icons (`icon`, `iconArrowDown`), and `cellAttrs`',
      'controlled (`v-model:open`, `v-model:modelOpen`) and uncontrolled (`open`, `clickOpen`, `autoClose`) state management',
      'programmatic control via expose methods (`toggle`, `toOpen`, `toClose`, `setOpen`, `getOpen`, `isShow`)',
      'visual divider line customization (`divider`)',
      'accessibility identifiers (`labelId`, `descriptionId`) and keyboard support (`Enter`, `Space`)',
      'click, transform, and model update event handling (`click`, `transform`, `transformLite`, `update:open`, `update:modelOpen`)',
      'flexible header (`#label`, `#description`, `#caption`, `#trailing`, `#body`) and expandable (`#default`) slots'
    ],
    ru: [
      'плавные анимации раскрытия/сворачивания через MotionTransform (`motionTransformAttrs`)',
      'композитный заголовок на базе Cell с меткой, описанием, иконками (`icon`, `iconArrowDown`) и `cellAttrs`',
      'контролируемое (`v-model:open`, `v-model:modelOpen`) и неконтролируемое (`open`, `clickOpen`, `autoClose`) управление состоянием',
      'программное управление через expose-методы (`toggle`, `toOpen`, `toClose`, `setOpen`, `getOpen`, `isShow`)',
      'настройка линии разделителя (`divider`)',
      'идентификаторы доступности (`labelId`, `descriptionId`) и поддержка клавиатуры (`Enter`, `Space`)',
      'обработка событий клика, трансформации и обновления состояния (`click`, `transform`, `transformLite`, `update:open`, `update:modelOpen`)',
      'гибкие слоты заголовка (`#label`, `#description`, `#caption`, `#trailing`, `#body`) и содержимого (`#default`)'
    ]
  },
  import: [
    'import { ref, type Ref } from \'vue\'',
    'import type { AccordionExpose as AccordionExposeType } from \'@dxtmisha/constructor/Accordion\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { MotionTransformEmitOptions } from \'@dxtmisha/constructor/MotionTransform\''
  ],
  render: `
    <div class="wiki-storybook-flex-column">
      <DesignComponent v-bind="args">
        <template #default>
          <div class="wiki-storybook-item--padding">
            <p>Accordion content goes here. This section can contain paragraphs, lists, headings, or custom components.</p>
            <ul>
              <li>First example item with structured details</li>
              <li>Second example demonstrating list formatting</li>
              <li>Third item showing expandable content height transitions</li>
            </ul>
          </div>
        </template>
      </DesignComponent>
    </div>
  `,
  play: `
    const root = canvasElement.querySelector<HTMLElement>('.design-component')
    const head = canvasElement.querySelector<HTMLElement>('.design-component__head')

    await expect(root).toBeInTheDocument()
    await expect(head).toBeInTheDocument()
    await expect(head).toHaveAttribute('aria-expanded', 'false')
    await expect(root).toHaveAttribute('data-open', 'none')

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
      await expect(head).toHaveAttribute('aria-expanded', 'true')
      const body = canvasElement.querySelector<HTMLElement>('.design-component__body')
      await expect(body).toBeInTheDocument()
    })

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
      await expect(head).toHaveAttribute('aria-expanded', 'false')
    })
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation)
    // =========================================================================
    {
      id: 'AccordionVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const open: Ref<boolean> = ref(false)

      return {
        open
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-button-toggle" @click="open = !open">
              Toggle ({{ open }})
            </button>
          </div>
          <DesignComponent
            v-model:open="open"
            label="Settings"
            description="Click to expand"
            icon="settings"
            :autoClose="false"
          >
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
                <p>Using <code>v-model:open</code> provides declarative two-way synchronization between parent state and the accordion.</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const toggleButton = canvasElement.querySelector<HTMLButtonElement>('.test-button-toggle')
        const root = canvasElement.querySelector<HTMLElement>('.design-component')
        const head = canvasElement.querySelector<HTMLElement>('.design-component__head')

        await expect(root).toHaveAttribute('data-open', 'none')
        await expect(toggleButton).toHaveTextContent('Toggle (false)')

        await userEvent.click(toggleButton!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'open')
          await expect(toggleButton).toHaveTextContent('Toggle (true)')
        })

        await userEvent.click(head!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'none')
          await expect(toggleButton).toHaveTextContent('Toggle (false)')
        })
      `
    },
    {
      id: 'AccordionSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent label="Default label" description="Default description" icon="settings">
          <template #label>
            <span class="test-slot-label">Custom label slot</span>
          </template>
          <template #description>
            <span class="test-slot-description">Custom description slot</span>
          </template>
          <template #caption>
            <span class="test-slot-caption">Custom caption slot</span>
          </template>
          <template #trailing>
            <span class="test-slot-trailing">Trailing slot</span>
          </template>
          <template #body>
            <span class="test-slot-body">Header body slot</span>
          </template>
          <template #default="{ isOpen, idControl, idBody }">
            <div class="wiki-storybook-item--padding test-slot-default">
              <p>Custom default slot content (isOpen: {{ isOpen }}, control: {{ idControl }}, body: {{ idBody }})</p>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
        const root = canvasElement.querySelector<HTMLElement>('.design-component')
        const head = canvasElement.querySelector<HTMLElement>('.design-component__head')

        await expect(canvasElement.querySelector('.test-slot-label')).toHaveTextContent('Custom label slot')
        await expect(canvasElement.querySelector('.test-slot-description')).toHaveTextContent('Custom description slot')
        await expect(canvasElement.querySelector('.test-slot-caption')).toHaveTextContent('Custom caption slot')
        await expect(canvasElement.querySelector('.test-slot-trailing')).toHaveTextContent('Trailing slot')
        await expect(canvasElement.querySelector('.test-slot-body')).toHaveTextContent('Header body slot')

        await userEvent.click(head!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'open')
          const defaultSlot = canvasElement.querySelector<HTMLElement>('.test-slot-default')
          await expect(defaultSlot).toBeInTheDocument()
          await expect(defaultSlot).toHaveTextContent('isOpen: true')
        })
      `
    },
    {
      id: 'AccordionExpose',
      name: {
        en: 'Programmatic control (expose)',
        ru: 'Программное управление (expose)'
      },
      setup: `
      const accordionElement: Ref<AccordionExposeType | undefined> = ref()
      const currentStatus: Ref<string> = ref('initial')

      const syncStatus = (): void => {
        if (accordionElement.value) {
          currentStatus.value = 'open:' + String(accordionElement.value.getOpen()) + ',show:' + String(accordionElement.value.isShow())
        }
      }

      const handleOpen = (): void => {
        accordionElement.value?.toOpen()
      }

      const handleClose = (): void => {
        accordionElement.value?.toClose()
      }

      const handleToggle = (): void => {
        accordionElement.value?.toggle()
      }

      const handleSetTrue = (): void => {
        accordionElement.value?.setOpen(true)
      }

      return {
        accordionElement,
        currentStatus,
        syncStatus,
        handleOpen,
        handleClose,
        handleToggle,
        handleSetTrue
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-expose-open" @click="handleOpen">toOpen</button>
            <button class="wiki-storybook-button test-expose-close" @click="handleClose">toClose</button>
            <button class="wiki-storybook-button test-expose-toggle" @click="handleToggle">toggle</button>
            <button class="wiki-storybook-button test-expose-set" @click="handleSetTrue">setOpen(true)</button>
            <button class="wiki-storybook-button test-expose-refresh" @click="syncStatus">sync</button>
          </div>
          <div class="test-expose-status">{{ currentStatus }}</div>
          <DesignComponent
            ref="accordionElement"
            label="Programmatic accordion"
            description="Controlled via ref expose methods"
            :autoClose="false"
            @transform-lite="syncStatus"
          >
            <template #default>
              <div class="wiki-storybook-item--padding">
                Controlled body content.
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const root = canvasElement.querySelector<HTMLElement>('.design-component')
        const status = canvasElement.querySelector<HTMLElement>('.test-expose-status')
        const openButton = canvasElement.querySelector<HTMLButtonElement>('.test-expose-open')
        const closeButton = canvasElement.querySelector<HTMLButtonElement>('.test-expose-close')
        const toggleButton = canvasElement.querySelector<HTMLButtonElement>('.test-expose-toggle')
        const setButton = canvasElement.querySelector<HTMLButtonElement>('.test-expose-set')
        const refreshButton = canvasElement.querySelector<HTMLButtonElement>('.test-expose-refresh')

        await userEvent.click(openButton!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'open')
        })
        await userEvent.click(refreshButton!)
        await expect(status).toHaveTextContent('open:true')

        await userEvent.click(closeButton!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'none')
        })
        await userEvent.click(refreshButton!)
        await expect(status).toHaveTextContent('open:false')

        await userEvent.click(toggleButton!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'open')
        })

        await userEvent.click(toggleButton!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'none')
        })

        await userEvent.click(setButton!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'open')
        })
      `
    },

    // =========================================================================
    // TIER 2: INTERACTION & COVERAGE TEST STORIES (NOT in documentation)
    // =========================================================================
    {
      id: 'AccordionTestDataAndDivider',
      name: {
        en: 'Test: Header Data, IDs, and Divider',
        ru: 'Тест: Данные заголовка, ID и разделитель'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            class="test-acc-string"
            label="Account details"
            description="Manage profile settings"
            labelId="test-custom-label-id"
            descriptionId="test-custom-description-id"
            :divider="true"
            :open="true"
          >
            <div class="wiki-storybook-item--padding">String label and custom IDs</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-number"
            :label="42"
            :description="100"
            :divider="false"
            :open="true"
          >
            <div class="wiki-storybook-item--padding">Numeric label/description without divider</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-no-desc"
            label="Only label without description"
            :motionTransformAttrs="{ inDom: true }"
          >
            <div class="wiki-storybook-item--padding">No description means no aria-describedby</div>
          </DesignComponent>
        </div>
      `,
      play: `
        const stringAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-string')
        const numberAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-number')
        const noDescAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-no-desc')

        await expect(stringAccordion).toHaveAttribute('data-divider', 'divider')
        await expect(stringAccordion).toHaveClass('design-component--divider')
        await expect(canvasElement.querySelector('#test-custom-label-id')).toHaveTextContent('Account details')
        await expect(canvasElement.querySelector('#test-custom-description-id')).toHaveTextContent('Manage profile settings')

        const stringHead = stringAccordion?.querySelector<HTMLElement>('.design-component__head')
        const stringControlId = stringHead?.getAttribute('aria-controls') || ''
        const stringRegion = stringAccordion?.querySelector<HTMLElement>('#' + stringControlId)
        await expect(stringRegion).toHaveAttribute('aria-labelledby', 'test-custom-label-id')
        await expect(stringRegion).toHaveAttribute('aria-describedby', 'test-custom-description-id')

        await expect(numberAccordion).not.toHaveAttribute('data-divider')
        await expect(numberAccordion).not.toHaveClass('design-component--divider')
        await expect(numberAccordion?.querySelector('.design-component__head')).toHaveTextContent('42')
        await expect(numberAccordion?.querySelector('.design-component__head')).toHaveTextContent('100')

        const noDescHead = noDescAccordion?.querySelector<HTMLElement>('.design-component__head')
        const noDescControlId = noDescHead?.getAttribute('aria-controls') || ''
        const noDescRegion = noDescAccordion?.querySelector<HTMLElement>('#' + noDescControlId)
        await expect(noDescRegion).toBeInTheDocument()
        await expect(noDescRegion).not.toHaveAttribute('aria-describedby')
      `
    },
    {
      id: 'AccordionTestIconsAndCellAttrs',
      name: {
        en: 'Test: Icons and cellAttrs',
        ru: 'Тест: Иконки и cellAttrs'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            class="test-acc-icons"
            label="Custom icons"
            :icon="{ icon: 'star', turn: true }"
            :iconArrowDown="{ icon: 'expand_more' }"
            :cellAttrs="{ caption: 'Updated today' }"
          >
            <div class="wiki-storybook-item--padding">Custom icon and caption content</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-null-icons"
            label="Hidden icons"
            :icon="null"
            :iconArrowDown="null"
          >
            <div class="wiki-storybook-item--padding">No leading icon and no arrow icon</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-disabled"
            label="Disabled header"
            description="Cannot be opened by clicking"
            :cellAttrs="{ disabled: true }"
          >
            <div class="wiki-storybook-item--padding">Should remain closed</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-loading"
            label="Loading header"
            :cellAttrs="{ loading: true, isSkeleton: true }"
          >
            <div class="wiki-storybook-item--padding">Loading state</div>
          </DesignComponent>
        </div>
      `,
      play: `
        const iconsAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-icons')
        const nullIconsAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-null-icons')
        const disabledAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-disabled')
        const loadingAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-loading')

        await expect(iconsAccordion?.querySelector('.design-component__head')).toHaveTextContent('Updated today')
        await expect(iconsAccordion?.querySelector('.design-component__head')).toHaveTextContent('star')
        await expect(iconsAccordion?.querySelector('.design-component__head')).toHaveTextContent('expand_more')

        await expect(nullIconsAccordion?.querySelector('.design-component__head')).not.toHaveTextContent('keyboard_arrow_down')

        const disabledHead = disabledAccordion?.querySelector<HTMLElement>('.design-component__head')
        await expect(disabledAccordion).toHaveAttribute('data-open', 'none')
        await userEvent.click(disabledHead!)
        await expect(disabledAccordion).toHaveAttribute('data-open', 'none')

        await expect(loadingAccordion?.querySelector('.design-component__head')).toBeInTheDocument()
      `
    },
    {
      id: 'AccordionTestStateAndMotion',
      name: {
        en: 'Test: open, modelOpen, autoClose, clickOpen, and motionTransformAttrs',
        ru: 'Тест: open, modelOpen, autoClose, clickOpen и motionTransformAttrs'
      },
      setup: `
      const modelOpen: Ref<boolean> = ref(false)

      return {
        modelOpen
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-outside-button">Outside focus target</button>
            <button class="wiki-storybook-button test-toggle-model" @click="modelOpen = !modelOpen">
              modelOpen: {{ modelOpen }}
            </button>
          </div>

          <DesignComponent
            class="test-acc-model"
            v-model:modelOpen="modelOpen"
            label="Controlled via modelOpen"
            :autoClose="false"
          >
            <div class="wiki-storybook-item--padding">modelOpen body</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-auto-close"
            label="Auto-close enabled"
            :open="true"
            :autoClose="true"
          >
            <div class="wiki-storybook-item--padding">Closes when clicking outside</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-no-click"
            label="Click open disabled"
            :clickOpen="false"
          >
            <div class="wiki-storybook-item--padding">Should not open on click</div>
          </DesignComponent>

          <DesignComponent
            class="test-acc-motion-attrs"
            label="Custom MotionTransform attributes"
            :motionTransformAttrs="{ inDom: true, tagBody: 'div', animationShow: false, section: true }"
          >
            <div class="wiki-storybook-item--padding">DIV body kept in DOM</div>
          </DesignComponent>
        </div>
      `,
      play: `
        const outsideButton = canvasElement.querySelector<HTMLButtonElement>('.test-outside-button')
        const toggleModelButton = canvasElement.querySelector<HTMLButtonElement>('.test-toggle-model')
        const modelAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-model')
        const autoCloseAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-auto-close')
        const noClickAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-no-click')
        const motionAttrsAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-motion-attrs')

        await waitFor(async () => {
          await expect(autoCloseAccordion).toHaveAttribute('data-open', 'open')
        })
        await expect(modelAccordion).toHaveAttribute('data-open', 'none')

        await userEvent.click(toggleModelButton!)
        await waitFor(async () => {
          await expect(modelAccordion).toHaveAttribute('data-open', 'open')
          await expect(toggleModelButton).toHaveTextContent('modelOpen: true')
        })

        await userEvent.click(outsideButton!)
        await waitFor(async () => {
          await expect(autoCloseAccordion).toHaveAttribute('data-open', 'none')
          await expect(modelAccordion).toHaveAttribute('data-open', 'open')
        })

        const noClickHead = noClickAccordion?.querySelector<HTMLElement>('.design-component__head')
        await userEvent.click(noClickHead!)
        await expect(noClickAccordion).toHaveAttribute('data-open', 'none')

        const motionHead = motionAttrsAccordion?.querySelector<HTMLElement>('.design-component__head')
        const motionControlId = motionHead?.getAttribute('aria-controls') || ''
        const motionRegion = motionAttrsAccordion?.querySelector<HTMLElement>('#' + motionControlId)
        await expect(motionRegion).toBeInTheDocument()
        await expect(motionRegion?.tagName).toBe('DIV')
        await expect(motionRegion).toHaveAttribute('role', 'region')
      `
    },
    {
      id: 'AccordionTestEventsAndKeyboard',
      name: {
        en: 'Test: Events and Keyboard Accessibility',
        ru: 'Тест: События и клавиатурная доступность'
      },
      setup: `
      const eventLog: Ref<string[]> = ref([])
      const openState: Ref<boolean> = ref(false)

      const onClick = (event: MouseEvent, value: EventClickValue): void => {
        eventLog.value.push('click:' + event.type + ':' + value.type)
      }

      const onTransform = (event: Event | undefined, options: MotionTransformEmitOptions): void => {
        eventLog.value.push('transform:' + (event ? event.type : 'none') + ':' + options.type + ':' + String(options.open))
      }

      const onTransformLite = (options: MotionTransformEmitOptions): void => {
        eventLog.value.push('transformLite:' + options.type + ':' + String(options.open))
      }

      const onUpdateOpen = (value: boolean): void => {
        openState.value = value
        eventLog.value.push('update:open:' + String(value))
      }

      const onUpdateModelOpen = (value: boolean): void => {
        eventLog.value.push('update:modelOpen:' + String(value))
      }

      return {
        eventLog,
        openState,
        onClick,
        onTransform,
        onTransformLite,
        onUpdateOpen,
        onUpdateModelOpen
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="test-events-log">{{ eventLog.join('|') }}</div>
          <DesignComponent
            class="test-acc-events"
            :open="openState"
            label="Events and keyboard target"
            description="Press Enter or Space when focused"
            @click="onClick"
            @transform="onTransform"
            @transform-lite="onTransformLite"
            @update:open="onUpdateOpen"
            @update:model-open="onUpdateModelOpen"
          >
            <div class="wiki-storybook-item--padding">Accessible expandable region</div>
          </DesignComponent>
        </div>
      `,
      play: `
        const root = canvasElement.querySelector<HTMLElement>('.test-acc-events')
        const head = root?.querySelector<HTMLElement>('.design-component__head')
        const log = canvasElement.querySelector<HTMLElement>('.test-events-log')

        await expect(head).toHaveAttribute('tabindex', '0')
        await expect(head).toHaveAttribute('role', 'button')
        await expect(head).toHaveAttribute('aria-expanded', 'false')

        head?.focus()
        await userEvent.keyboard('{Enter}')
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'open')
          await expect(head).toHaveAttribute('aria-expanded', 'true')
          const controlId = head?.getAttribute('aria-controls') || ''
          const bodyRegion = root?.querySelector<HTMLElement>('#' + controlId)
          await expect(bodyRegion).toBeInTheDocument()
          await expect(bodyRegion).toHaveAttribute('role', 'region')
        })

        await expect(log).toHaveTextContent('transform:')
        await expect(log).toHaveTextContent('transformLite:')
        await expect(log).toHaveTextContent('update:open:true')
        await expect(log).toHaveTextContent('update:modelOpen:true')

        await userEvent.click(head!)
        await waitFor(async () => {
          await expect(root).toHaveAttribute('data-open', 'none')
          await expect(head).toHaveAttribute('aria-expanded', 'false')
        })

        await expect(log).toHaveTextContent('click:')
        await expect(log).toHaveTextContent('update:open:false')
        await expect(log).toHaveTextContent('update:modelOpen:false')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Accordion'} type={'accordion'}/>

<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.AccordionVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionTransform'} type={'expose'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.motionTransformElement'}/>
<Canvas of={Component.AccordionExpose}/>
    `,
    slots: `
<Canvas of={Component.AccordionSlots}/>
<StorybookDescriptions componentName={'Accordion'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Accordion label="Details" :open="true" :autoClose="false" v-bind="args">
    <div class="wiki-storybook-item--padding">
      Hidden content
    </div>
  </Accordion>
</div>
    `,
    description: `
Collapsible container for progressive disclosure. Toggles content visibility with smooth height transitions via MotionTransform. Use for FAQs, grouped settings, filters, or expandable sections.
Header is based on Cell and supports label, description, labelId, descriptionId, icon, iconArrowDown, and cellAttrs.
Includes built-in ARIA attributes (aria-expanded, aria-controls, role="region", aria-labelledby, aria-describedby) and keyboard navigation (Enter/Space). Controlled via v-model:open, v-model:modelOpen, or uncontrolled open/clickOpen/autoClose.
Supports #label, #description, #caption, #trailing, #body header slots and #default body slot, plus visual divider control.
    `
  }
}
