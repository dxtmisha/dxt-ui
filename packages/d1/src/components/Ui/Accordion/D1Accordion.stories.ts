import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Accordion from './D1Accordion.vue'
import { AccordionWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref, type Ref } from 'vue'
import type { AccordionExpose as AccordionExposeType } from '@dxtmisha/constructor/Accordion'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { MotionTransformEmitOptions } from '@dxtmisha/constructor/MotionTransform'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Accordion',
  component: D1Accordion,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: AccordionWikiStorybook.getDescription()
      }
    }
  },
  argTypes: AccordionWikiStorybook.getWiki(),
  args: AccordionWikiStorybook.getValues()
} satisfies Meta<typeof D1Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Accordion: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Accordion },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-flex-column">
      <D1Accordion v-bind="args">
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
      </D1Accordion>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-accordion')
    const head = canvasElement.querySelector<HTMLElement>('.d1-accordion__head')

    await expect(root).toBeInTheDocument()
    await expect(head).toBeInTheDocument()
    await expect(head).toHaveAttribute('aria-expanded', 'false')
    await expect(root).toHaveAttribute('data-open', 'none')

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
      await expect(head).toHaveAttribute('aria-expanded', 'true')
      const body = canvasElement.querySelector<HTMLElement>('.d1-accordion__body')
      await expect(body).toBeInTheDocument()
    })

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
      await expect(head).toHaveAttribute('aria-expanded', 'false')
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const AccordionVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Accordion },
    setup() {
      const open: Ref<boolean> = ref(false)

      return {
        open
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-button-toggle" @click="open = !open">
              Toggle ({{ open }})
            </button>
          </div>
          <D1Accordion
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
          </D1Accordion>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const toggleButton = canvasElement.querySelector<HTMLButtonElement>('.test-button-toggle')
    const root = canvasElement.querySelector<HTMLElement>('.d1-accordion')
    const head = canvasElement.querySelector<HTMLElement>('.d1-accordion__head')

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
  }
}
export const AccordionSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Accordion },
    template: `
        
        <D1Accordion label="Default label" description="Default description" icon="settings">
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
        </D1Accordion>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-accordion')
    const head = canvasElement.querySelector<HTMLElement>('.d1-accordion__head')

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
  }
}
export const AccordionExpose: Story = {
  name: 'Программное управление (expose)',
  render: () => ({
    components: { D1Accordion },
    setup() {
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
    },
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
          <D1Accordion
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
          </D1Accordion>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-accordion')
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
  }
}
export const AccordionTestDataAndDivider: Story = {
  name: 'Тест: Данные заголовка, ID и разделитель',
  render: () => ({
    components: { D1Accordion },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Accordion
            class="test-acc-string"
            label="Account details"
            description="Manage profile settings"
            labelId="test-custom-label-id"
            descriptionId="test-custom-description-id"
            :divider="true"
            :open="true"
          >
            <div class="wiki-storybook-item--padding">String label and custom IDs</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-number"
            :label="42"
            :description="100"
            :divider="false"
            :open="true"
          >
            <div class="wiki-storybook-item--padding">Numeric label/description without divider</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-no-desc"
            label="Only label without description"
            :motionTransformAttrs="{ inDom: true }"
          >
            <div class="wiki-storybook-item--padding">No description means no aria-describedby</div>
          </D1Accordion>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const stringAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-string')
    const numberAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-number')
    const noDescAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-no-desc')

    await expect(stringAccordion).toHaveAttribute('data-divider', 'divider')
    await expect(stringAccordion).toHaveClass('d1-accordion--divider')
    await expect(canvasElement.querySelector('#test-custom-label-id')).toHaveTextContent('Account details')
    await expect(canvasElement.querySelector('#test-custom-description-id')).toHaveTextContent('Manage profile settings')

    const stringHead = stringAccordion?.querySelector<HTMLElement>('.d1-accordion__head')
    const stringControlId = stringHead?.getAttribute('aria-controls') || ''
    const stringRegion = stringAccordion?.querySelector<HTMLElement>('#' + stringControlId)
    await expect(stringRegion).toHaveAttribute('aria-labelledby', 'test-custom-label-id')
    await expect(stringRegion).toHaveAttribute('aria-describedby', 'test-custom-description-id')

    await expect(numberAccordion).not.toHaveAttribute('data-divider')
    await expect(numberAccordion).not.toHaveClass('d1-accordion--divider')
    await expect(numberAccordion?.querySelector('.d1-accordion__head')).toHaveTextContent('42')
    await expect(numberAccordion?.querySelector('.d1-accordion__head')).toHaveTextContent('100')

    const noDescHead = noDescAccordion?.querySelector<HTMLElement>('.d1-accordion__head')
    const noDescControlId = noDescHead?.getAttribute('aria-controls') || ''
    const noDescRegion = noDescAccordion?.querySelector<HTMLElement>('#' + noDescControlId)
    await expect(noDescRegion).toBeInTheDocument()
    await expect(noDescRegion).not.toHaveAttribute('aria-describedby')
  }
}
export const AccordionTestIconsAndCellAttrs: Story = {
  name: 'Тест: Иконки и cellAttrs',
  render: () => ({
    components: { D1Accordion },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Accordion
            class="test-acc-icons"
            label="Custom icons"
            :icon="{ icon: 'star', turn: true }"
            :iconArrowDown="{ icon: 'expand_more' }"
            :cellAttrs="{ caption: 'Updated today' }"
          >
            <div class="wiki-storybook-item--padding">Custom icon and caption content</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-null-icons"
            label="Hidden icons"
            :icon="null"
            :iconArrowDown="null"
          >
            <div class="wiki-storybook-item--padding">No leading icon and no arrow icon</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-disabled"
            label="Disabled header"
            description="Cannot be opened by clicking"
            :cellAttrs="{ disabled: true }"
          >
            <div class="wiki-storybook-item--padding">Should remain closed</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-loading"
            label="Loading header"
            :cellAttrs="{ loading: true, isSkeleton: true }"
          >
            <div class="wiki-storybook-item--padding">Loading state</div>
          </D1Accordion>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const iconsAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-icons')
    const nullIconsAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-null-icons')
    const disabledAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-disabled')
    const loadingAccordion = canvasElement.querySelector<HTMLElement>('.test-acc-loading')

    await expect(iconsAccordion?.querySelector('.d1-accordion__head')).toHaveTextContent('Updated today')
    await expect(iconsAccordion?.querySelector('.d1-accordion__head')).toHaveTextContent('star')
    await expect(iconsAccordion?.querySelector('.d1-accordion__head')).toHaveTextContent('expand_more')

    await expect(nullIconsAccordion?.querySelector('.d1-accordion__head')).not.toHaveTextContent('keyboard_arrow_down')

    const disabledHead = disabledAccordion?.querySelector<HTMLElement>('.d1-accordion__head')
    await expect(disabledAccordion).toHaveAttribute('data-open', 'none')
    await userEvent.click(disabledHead!)
    await expect(disabledAccordion).toHaveAttribute('data-open', 'none')

    await expect(loadingAccordion?.querySelector('.d1-accordion__head')).toBeInTheDocument()
  }
}
export const AccordionTestStateAndMotion: Story = {
  name: 'Тест: open, modelOpen, autoClose, clickOpen и motionTransformAttrs',
  render: () => ({
    components: { D1Accordion },
    setup() {
      const modelOpen: Ref<boolean> = ref(false)

      return {
        modelOpen
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-outside-button">Outside focus target</button>
            <button class="wiki-storybook-button test-toggle-model" @click="modelOpen = !modelOpen">
              modelOpen: {{ modelOpen }}
            </button>
          </div>

          <D1Accordion
            class="test-acc-model"
            v-model:modelOpen="modelOpen"
            label="Controlled via modelOpen"
            :autoClose="false"
          >
            <div class="wiki-storybook-item--padding">modelOpen body</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-auto-close"
            label="Auto-close enabled"
            :open="true"
            :autoClose="true"
          >
            <div class="wiki-storybook-item--padding">Closes when clicking outside</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-no-click"
            label="Click open disabled"
            :clickOpen="false"
          >
            <div class="wiki-storybook-item--padding">Should not open on click</div>
          </D1Accordion>

          <D1Accordion
            class="test-acc-motion-attrs"
            label="Custom MotionTransform attributes"
            :motionTransformAttrs="{ inDom: true, tagBody: 'div', animationShow: false, section: true }"
          >
            <div class="wiki-storybook-item--padding">DIV body kept in DOM</div>
          </D1Accordion>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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

    const noClickHead = noClickAccordion?.querySelector<HTMLElement>('.d1-accordion__head')
    await userEvent.click(noClickHead!)
    await expect(noClickAccordion).toHaveAttribute('data-open', 'none')

    const motionHead = motionAttrsAccordion?.querySelector<HTMLElement>('.d1-accordion__head')
    const motionControlId = motionHead?.getAttribute('aria-controls') || ''
    const motionRegion = motionAttrsAccordion?.querySelector<HTMLElement>('#' + motionControlId)
    await expect(motionRegion).toBeInTheDocument()
    await expect(motionRegion?.tagName).toBe('DIV')
    await expect(motionRegion).toHaveAttribute('role', 'region')
  }
}
export const AccordionTestEventsAndKeyboard: Story = {
  name: 'Тест: События и клавиатурная доступность',
  render: () => ({
    components: { D1Accordion },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="test-events-log">{{ eventLog.join('|') }}</div>
          <D1Accordion
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
          </D1Accordion>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.test-acc-events')
    const head = root?.querySelector<HTMLElement>('.d1-accordion__head')
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
  }
}
// :story-items [!] System label / Системная метка
