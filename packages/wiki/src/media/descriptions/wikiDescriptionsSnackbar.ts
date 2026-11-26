import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Snackbar component properties
 *
 * Описания свойств компонента Snackbar
 */
export const wikiDescriptionsSnackbar: StorybookComponentsDescriptionItem = {
  name: 'Snackbar',
  description: {
    en: 'An orchestration component for managing and displaying a queue of temporary notification messages (Snackbars).',
    ru: 'Компонент-оркестратор для управления и отображения очереди временных уведомлений (Snackbars).'
  },
  possibilities: {
    en: [
      'automatic notification queue and visibility lifecycle management (`show` and `hide` events)',
      'flexible anchor positioning (`vertical`, `horizontal`) and entrance direction (`origin`)',
      'adaptive stack sizing and display modes (`limit`, `all`, `full`)',
      'priority-based visual separation of messages (`highPriority` and priority spacer)',
      'configurable auto-hide timeout (`delay`) with automatic pause on hover and resume on leave',
      'teleport-based rendering into `body` with accessible `role="region"` and `textNotifications` label',
      'full programmatic queue control via exposed `add`, `remove`, `clear`, and `isItem` methods'
    ],
    ru: [
      'автоматическое управление очередью и жизненным циклом видимости уведомлений (события `show` и `hide`)',
      'гибкое позиционирование (`vertical`, `horizontal`) и направление появления (`origin`)',
      'адаптивные ограничения стека и режимы отображения (`limit`, `all`, `full`)',
      'визуальное разделение сообщений по приоритету (`highPriority` и разделитель приоритета)',
      'настраиваемое время автоматического скрытия (`delay`) с паузой при наведении и возобновлением при уходе курсора',
      'рендер через Teleport в `body` с доступной ролью `role="region"` и меткой `textNotifications`',
      'полный программный контроль над очередью через экспонируемые методы `add`, `remove`, `clear` и `isItem`'
    ]
  },
  import: [
    'import { defineComponent, h, ref } from \'vue\'',
    'import type { SnackbarExpose, SnackbarValue } from \'@dxtmisha/constructor/Snackbar\''
  ],
  render: `
    <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          type="button"
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 5000 })"
        >
          Success Message
        </button>
        <button
          type="button"
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true, delay: 5000 })"
        >
          System Error
        </button>
        <button
          type="button"
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <DesignComponent ref="snackbar" v-bind="args" />
    </div>
  `,
  play: `
const canvas = within(canvasElement)

await step('Add standard notification and verify teleported region', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Success Message' }))
  await waitFor(async () => {
    const container = document.body.querySelector('.design-component')
    await expect(container).toBeInTheDocument()
    await expect(container).toHaveAttribute('role', 'region')
    await expect(container).toHaveAttribute('aria-label')
    await expect(container).toHaveTextContent('Action completed')
  })
})

await step('Add high-priority notification and verify priority container and spacer', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'System Error' }))
  await waitFor(async () => {
    const priorityItem = document.body.querySelector('aside.design-component__item.design-component__priority')
    const spacer = document.body.querySelector('.design-component__space')
    await expect(priorityItem).toBeInTheDocument()
    await expect(priorityItem).toHaveTextContent('Connection timeout')
    await expect(spacer).toBeInTheDocument()
  })
})

await step('Clear notification queue and verify container unmount', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Clear Queue' }))
  await waitFor(async () => {
    await expect(document.body.querySelector('.design-component')).toBeNull()
  }, { timeout: 2500 })
})
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose)
    // =========================================================================
    {
      id: 'SnackbarEventsAndExpose',
      name: {
        en: 'Queue control, events and expose API',
        ru: 'Управление очередью, события и expose API'
      },
      setup: `
      const snackbarReference = ref<SnackbarExpose | null>(null)
      const lastEvent = ref('none')
      const hasItems = ref(false)

      const syncHasItems = () => {
        hasItems.value = Boolean(snackbarReference.value?.isItem())
      }
      const addStandard = () => {
        snackbarReference.value?.add({
          value: 'demo-standard',
          delay: 5000,
          data: {
            label: 'Standard notification',
            icon: 'info'
          }
        })
        syncHasItems()
      }
      const addPriority = () => {
        snackbarReference.value?.add({
          value: 'demo-priority',
          highPriority: true,
          delay: 5000,
          data: {
            label: 'High priority alert',
            icon: 'warning',
            error: true
          }
        })
        syncHasItems()
      }
      const removeStandard = () => {
        snackbarReference.value?.remove('demo-standard')
      }
      const clearAll = () => {
        snackbarReference.value?.clear()
      }
      const onShow = (value: string, item: SnackbarValue) => {
        lastEvent.value = 'show:' + value + ':' + String(item.highPriority === true)
        syncHasItems()
      }
      const onHide = (value: string, item: SnackbarValue) => {
        lastEvent.value = 'hide:' + value + ':' + String(item.highPriority === true)
        syncHasItems()
      }

      return {
        snackbarReference,
        lastEvent,
        hasItems,
        addStandard,
        addPriority,
        removeStandard,
        clearAll,
        onShow,
        onHide
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="addStandard">Add standard</button>
            <button type="button" class="wiki-storybook-button" @click="addPriority">Add high priority</button>
            <button type="button" class="wiki-storybook-button" @click="removeStandard">Remove standard</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" @click="clearAll">Clear all</button>
          </div>
          <div class="wiki-storybook-card">
            <span data-testid="snackbar-has-items">hasItems:{{ hasItems }}</span>
            |
            <span data-testid="snackbar-last-event">{{ lastEvent }}</span>
          </div>
          <DesignComponent
            ref="snackbarReference"
            @show="onShow"
            @hide="onHide"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByTestId('snackbar-has-items')).toHaveTextContent('hasItems:false')

await step('Add standard notification and verify queue state', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Add standard' }))
  await waitFor(async () => {
    await expect(canvas.getByTestId('snackbar-has-items')).toHaveTextContent('hasItems:true')
    await expect(document.body.querySelector('[data-snackbar-item="demo-standard"]')).toBeInTheDocument()
  })
})

await step('Add high priority notification and verify aside wrapper', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Add high priority' }))
  await waitFor(async () => {
    await expect(document.body.querySelector('aside[data-snackbar-item="demo-priority"]')).toBeInTheDocument()
    await expect(document.body.querySelector('.design-component__space')).toBeInTheDocument()
  })
})

await step('Remove standard notification by value and observe hide event', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Remove standard' }))
  await waitFor(async () => {
    await expect(document.body.querySelector('[data-snackbar-item="demo-standard"]')).toBeNull()
    await expect(canvas.getByTestId('snackbar-last-event')).toHaveTextContent('hide:demo-standard:false')
  }, { timeout: 2500 })
})

await step('Clear all remaining notifications', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Clear all' }))
  await waitFor(async () => {
    await expect(canvas.getByTestId('snackbar-has-items')).toHaveTextContent('hasItems:false')
    await expect(document.body.querySelector('.design-component')).toBeNull()
  }, { timeout: 2500 })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'SnackbarTestPositioningAndAdaptation',
      name: {
        en: 'Test: Positioning, origin, limit, full, all and textNotifications',
        ru: 'Тест: Позиционирование, origin, limit, full, all и textNotifications'
      },
      propsName: ['vertical', 'horizontal', 'origin', 'limit', 'full', 'all', 'textNotifications', 'delay'],
      setup: `
      const snackbarReference = ref<SnackbarExpose | null>(null)
      const vertical = ref<'top' | 'bottom'>('top')
      const horizontal = ref<'right' | 'left' | 'block'>('left')
      const origin = ref<'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight'>('topToBottom')
      const limit = ref<'1' | '2' | '4' | '6' | '8'>('2')
      const full = ref(true)
      const all = ref(true)
      const textNotifications = ref('Custom alerts region')

      const addPersistent = () => {
        snackbarReference.value?.add({
          value: 'position-item',
          delay: -1,
          data: {
            label: 'Positioned notification'
          }
        })
      }
      const applyPresetTwo = () => {
        vertical.value = 'bottom'
        horizontal.value = 'right'
        origin.value = 'bottomToTop'
        limit.value = '4'
        full.value = false
        all.value = false
      }
      const applyPresetThree = () => {
        horizontal.value = 'block'
        origin.value = 'rightToLeft'
        limit.value = '1'
      }
      const applyPresetFour = () => {
        origin.value = 'leftToRight'
        limit.value = '6'
      }
      const applyPresetFive = () => {
        limit.value = '8'
      }
      const clearQueue = () => {
        snackbarReference.value?.clear()
      }

      return {
        snackbarReference,
        vertical,
        horizontal,
        origin,
        limit,
        full,
        all,
        textNotifications,
        addPersistent,
        applyPresetTwo,
        applyPresetThree,
        applyPresetFour,
        applyPresetFive,
        clearQueue
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="addPersistent">Show item</button>
            <button type="button" class="wiki-storybook-button" @click="applyPresetTwo">Preset 2</button>
            <button type="button" class="wiki-storybook-button" @click="applyPresetThree">Preset 3</button>
            <button type="button" class="wiki-storybook-button" @click="applyPresetFour">Preset 4</button>
            <button type="button" class="wiki-storybook-button" @click="applyPresetFive">Preset 5</button>
            <button type="button" class="wiki-storybook-button wiki-storybook-button--warning" @click="clearQueue">Clear</button>
          </div>
          <DesignComponent
            ref="snackbarReference"
            :vertical="vertical"
            :horizontal="horizontal"
            :origin="origin"
            :limit="limit"
            :full="full"
            :all="all"
            :delay="-1"
            :text-notifications="textNotifications"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Render with initial top/left/topToBottom/limit-2/full/all and custom ARIA label', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Show item' }))
  await waitFor(async () => {
    const container = document.body.querySelector('.design-component')
    await expect(container).toBeInTheDocument()
    await expect(container).toHaveAttribute('role', 'region')
    await expect(container).toHaveAttribute('aria-label', 'Custom alerts region')
    await expect(container).toHaveClass('design-component--vertical--top')
    await expect(container).toHaveClass('design-component--horizontal--left')
    await expect(container).toHaveClass('design-component--origin--topToBottom')
    await expect(container).toHaveClass('design-component--limit--2')
    await expect(container).toHaveClass('design-component--full')
    await expect(container).toHaveClass('design-component--all')
  })
})

await step('Switch to bottom/right/bottomToTop/limit-4 without full and all', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Preset 2' }))
  await waitFor(async () => {
    const container = document.body.querySelector('.design-component')
    await expect(container).toHaveClass('design-component--vertical--bottom')
    await expect(container).toHaveClass('design-component--horizontal--right')
    await expect(container).toHaveClass('design-component--origin--bottomToTop')
    await expect(container).toHaveClass('design-component--limit--4')
    await expect(container).not.toHaveClass('design-component--full')
    await expect(container).not.toHaveClass('design-component--all')
  })
})

await step('Switch to block/rightToLeft/limit-1', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Preset 3' }))
  await waitFor(async () => {
    const container = document.body.querySelector('.design-component')
    await expect(container).toHaveClass('design-component--horizontal--block')
    await expect(container).toHaveClass('design-component--origin--rightToLeft')
    await expect(container).toHaveClass('design-component--limit--1')
  })
})

await step('Switch to leftToRight/limit-6 and limit-8', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Preset 4' }))
  await waitFor(async () => {
    const container = document.body.querySelector('.design-component')
    await expect(container).toHaveClass('design-component--origin--leftToRight')
    await expect(container).toHaveClass('design-component--limit--6')
  })

  await userEvent.click(canvas.getByRole('button', { name: 'Preset 5' }))
  await waitFor(async () => {
    const container = document.body.querySelector('.design-component')
    await expect(container).toHaveClass('design-component--limit--8')
  })
})

await step('Clear positioned notification', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
  await waitFor(async () => {
    await expect(document.body.querySelector('.design-component')).toBeNull()
  }, { timeout: 2500 })
})
      `
    },
    {
      id: 'SnackbarTestCustomComponentAndLifecycle',
      name: {
        en: 'Test: Custom component, auto-generated value, hover pause and auto-close delay',
        ru: 'Тест: Кастомный компонент, автогенерация value, пауза при наведении и автозакрытие'
      },
      propsName: ['delay'],
      setup: `
      const snackbarReference = ref<SnackbarExpose | null>(null)
      const shownValue = ref('none')
      const hiddenValue = ref('none')

      const CustomSnackbarCard = defineComponent({
        props: {
          value: {
            type: String,
            default: ''
          },
          label: {
            type: String,
            default: ''
          }
        },
        emits: ['close'],
        setup(componentProperties, { emit }) {
          return () => h(
            'div',
            { 'data-testid': 'custom-snackbar-card' },
            [
              h('span', componentProperties.label),
              h(
                'button',
                {
                  'type': 'button',
                  'data-testid': 'custom-snackbar-close',
                  'onClick': () => emit('close', componentProperties.value)
                },
                'Dismiss custom'
              )
            ]
          )
        }
      })

      const addCustomComponent = () => {
        snackbarReference.value?.add({
          component: CustomSnackbarCard,
          delay: 5000,
          data: {
            label: 'Custom card body'
          }
        })
      }
      const addAutoClose = () => {
        snackbarReference.value?.add({
          value: 'auto-close-item',
          delay: 80,
          data: {
            label: 'Auto closing notice'
          }
        })
      }
      const removeAutoClose = () => {
        snackbarReference.value?.remove('auto-close-item')
      }
      const onShow = (value: string) => {
        shownValue.value = value
      }
      const onHide = (value: string) => {
        hiddenValue.value = value
      }

      return {
        snackbarReference,
        shownValue,
        hiddenValue,
        addCustomComponent,
        addAutoClose,
        removeAutoClose,
        onShow,
        onHide
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="addCustomComponent">Add custom component</button>
            <button type="button" class="wiki-storybook-button" @click="addAutoClose">Add auto-close</button>
            <button type="button" class="wiki-storybook-button" @click="removeAutoClose">Remove auto-close</button>
          </div>
          <div class="wiki-storybook-card">
            <span data-testid="snackbar-shown-value">shown:{{ shownValue }}</span>
            |
            <span data-testid="snackbar-hidden-value">hidden:{{ hiddenValue }}</span>
          </div>
          <DesignComponent
            ref="snackbarReference"
            :delay="3000"
            @show="onShow"
            @hide="onHide"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Add custom component with auto-generated value, hover pause/resume, and close via emit', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Add custom component' }))
  await waitFor(async () => {
    const customCard = document.body.querySelector('[data-testid="custom-snackbar-card"]')
    await expect(customCard).toBeInTheDocument()
    await expect(customCard).toHaveTextContent('Custom card body')
    await expect(document.body.querySelector('[data-snackbar-item="snackbar-item-1"]')).toBeInTheDocument()
  })

  const container = document.body.querySelector('.design-component')
  if (container) {
    await fireEvent.mouseEnter(container)
    await fireEvent.mouseLeave(container)
  }

  const closeButton = document.body.querySelector<HTMLButtonElement>('[data-testid="custom-snackbar-close"]')
  await expect(closeButton).toBeInTheDocument()
  if (closeButton) {
    await userEvent.click(closeButton)
  }

  await waitFor(async () => {
    await expect(document.body.querySelector('[data-testid="custom-snackbar-card"]')).toBeNull()
    await expect(canvas.getByTestId('snackbar-hidden-value')).toHaveTextContent('hidden:snackbar-item-1')
  }, { timeout: 2500 })
})

await step('Add short-delay notification and verify removal lifecycle', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Add auto-close' }))
  await waitFor(async () => {
    await expect(document.body.querySelector('[data-snackbar-item="auto-close-item"]')).toBeInTheDocument()
  })
  await userEvent.click(canvas.getByRole('button', { name: 'Remove auto-close' }))
  await waitFor(async () => {
    await expect(canvas.getByTestId('snackbar-hidden-value')).toHaveTextContent('hidden:auto-close-item')
    await expect(document.body.querySelector('.design-component')).toBeNull()
  }, { timeout: 2500 })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Snackbar'} type={'snackbar'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'add'}/>
<Canvas of={Component.SnackbarEventsAndExpose}/>

<StorybookDescriptions componentName={'Snackbar'} type={'adaptation'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'position'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Snackbar'} type={'event.show'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'event.hide'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Snackbar'} type={'expose.isItem'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.add'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.remove'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.clear'}/>
    `,
    slots: ``
  },
  ai: {
    description: `
Centralized notification management system (orchestrator) that coordinates the lifecycle and queue of temporary messages. Ideal for global system alerts, user feedback, and asynchronous status updates across the application.
Features an intelligent queue manager with support for priority containers, automatic lifecycle hooks (show/hide), hover pause/resume, and flexible screen anchoring (vertical/horizontal positioning, origin, limit, full, all). Includes programmatic control over the message stack via exposed add, remove, clear, and isItem methods, custom auto-hide delays, and teleport-based rendering with role="region".
Place a single instance near the root of the application (e.g., App.vue) to manage consistent notification patterns throughout the entire user session.
    `,
    hide: true
  }
}
