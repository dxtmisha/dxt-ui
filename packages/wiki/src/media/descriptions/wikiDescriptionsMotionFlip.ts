import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MotionFlip component
 *
 * Описания компонента MotionFlip
 */
export const wikiDescriptionsMotionFlip: StorybookComponentsDescriptionItem = {
  name: 'MotionFlip',
  description: {
    en: 'A component for performing FLIP (First, Last, Invert, Play) layout animations on child elements during DOM changes such as list item additions, removals, or reordering.',
    ru: 'Компонент для выполнения FLIP-анимации (First, Last, Invert, Play) перестроения дочерних элементов при изменениях в DOM (добавление, удаление или сортировка элементов списка).'
  },
  possibilities: {
    en: [
      'Smooth FLIP layout transitions during DOM updates',
      'Automatic DOM mutation observing via auto property (enabled by default)',
      'Asynchronous callback orchestration via update method',
      'Programmatic animation cancellation via stop method',
      'Ability to disable layout animation via disabled property'
    ],
    ru: [
      'Плавные FLIP-анимации перестроения при обновлениях DOM',
      'Автоматическое отслеживание изменений DOM с помощью свойства auto (включено по умолчанию)',
      'Асинхронное выполнение обновлений через метод update',
      'Программная остановка анимации через метод stop',
      'Возможность отключения анимации перестроения с помощью свойства disabled'
    ]
  },
  render: `
    <DesignComponent v-bind="args" class="wiki-storybook-group">
      <div
        v-for="item in 5"
        :key="item"
        class="wiki-storybook-item--squared--xs"
        style="cursor: pointer;"
        @click="$event.currentTarget?.parentElement?.appendChild($event.currentTarget)"
      >
        <div class="wiki-storybook-item wiki-storybook-item--padding" style="pointer-events: none;">
          <span class="wiki-storybook-item__label">Item {{ item }}</span>
        </div>
      </div>
    </DesignComponent>
  `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()

const childItems = canvasElement.querySelectorAll<HTMLElement>('.design-component > div')
await expect(childItems.length).toBe(5)
  `,
  import: [
    'import { nextTick, ref } from \'vue\'',
    'import type { MotionFlipCallback, MotionFlipExpose as MotionFlipExposeType } from \'@dxtmisha/constructor/MotionFlip\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/expose/slots)
    // =========================================================================
    {
      id: 'MotionFlipBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      propsName: ['auto'],
      setup: `
      const motionFlipElement = ref<MotionFlipExposeType | undefined>()
      const items = ref<number[]>([1, 2, 3, 4, 5])
      let nextIdentifier = 6

      const addItem = async (): Promise<void> => {
        if (motionFlipElement.value) {
          await motionFlipElement.value.update(async () => {
            const middleIndex = Math.floor(items.value.length / 2)
            items.value.splice(middleIndex, 0, nextIdentifier++)
            await nextTick()
          })
        }
      }

      const removeItem = async (): Promise<void> => {
        if (motionFlipElement.value && items.value.length > 0) {
          await motionFlipElement.value.update(async () => {
            items.value.splice(0, 1)
            await nextTick()
          })
        }
      }

      const reorderItems = async (): Promise<void> => {
        if (motionFlipElement.value) {
          await motionFlipElement.value.update(async () => {
            items.value = [...items.value].reverse()
            await nextTick()
          })
        }
      }

      return {
        motionFlipElement,
        items,
        addItem,
        removeItem,
        reorderItems
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="addItem">Add</button>
            <button class="wiki-storybook-button" @click="removeItem">Remove</button>
            <button class="wiki-storybook-button" @click="reorderItems">Reorder</button>
          </div>

          <DesignComponent ref="motionFlipElement" :auto="false" class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">Item {{ item }}</span>
              </div>
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(canvasElement.querySelectorAll('.design-component > div').length).toBe(5)

await step('Add item using update()', async () => {
  const addButton = canvas.getByRole('button', { name: 'Add' })
  await userEvent.click(addButton)
  await waitFor(() => {
    expect(canvasElement.querySelectorAll('.design-component > div').length).toBe(6)
  })
})

await step('Remove item using update()', async () => {
  const removeButton = canvas.getByRole('button', { name: 'Remove' })
  await userEvent.click(removeButton)
  await waitFor(() => {
    expect(canvasElement.querySelectorAll('.design-component > div').length).toBe(5)
  })
})

await step('Reorder items using update()', async () => {
  const reorderButton = canvas.getByRole('button', { name: 'Reorder' })
  const firstLabelBefore = canvasElement.querySelector('.design-component > div .wiki-storybook-item__label')?.textContent?.trim()
  await userEvent.click(reorderButton)
  await waitFor(() => {
    const firstLabelAfter = canvasElement.querySelector('.design-component > div .wiki-storybook-item__label')?.textContent?.trim()
    expect(firstLabelAfter).not.toBe(firstLabelBefore)
  })
})
      `
    },
    {
      id: 'MotionFlipAuto',
      name: {
        en: 'Automatic observation mode',
        ru: 'Режим автоматического отслеживания'
      },
      propsName: ['auto'],
      setup: `
      const items = ref<number[]>([1, 2, 3, 4])
      let nextIdentifier = 5

      const addItem = (): void => {
        items.value.unshift(nextIdentifier++)
      }

      const reverseItems = (): void => {
        items.value = [...items.value].reverse()
      }

      return {
        items,
        addItem,
        reverseItems
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="addItem">Prepend Item</button>
            <button class="wiki-storybook-button" @click="reverseItems">Reverse Order</button>
          </div>

          <DesignComponent class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">Auto {{ item }}</span>
              </div>
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(canvasElement.querySelectorAll('.design-component > div').length).toBe(4)

await step('Prepend item in default auto mode', async () => {
  const prependButton = canvas.getByRole('button', { name: 'Prepend Item' })
  await userEvent.click(prependButton)
  await waitFor(() => {
    const childItems = canvasElement.querySelectorAll('.design-component > div')
    expect(childItems.length).toBe(5)
    expect(childItems[0]?.textContent?.trim()).toBe('Auto 5')
  })
})

await step('Reverse items in default auto mode', async () => {
  const reverseButton = canvas.getByRole('button', { name: 'Reverse Order' })
  await userEvent.click(reverseButton)
  await waitFor(() => {
    const childItems = canvasElement.querySelectorAll('.design-component > div')
    expect(childItems[0]?.textContent?.trim()).toBe('Auto 4')
  })
})
      `
    },
    {
      id: 'MotionFlipExpose',
      name: {
        en: 'Exposed methods (update and stop)',
        ru: 'Публичные методы (update и stop)'
      },
      propsName: ['auto'],
      setup: `
      const motionFlipElement = ref<MotionFlipExposeType | undefined>()
      const items = ref<string[]>(['Alpha', 'Beta', 'Gamma', 'Delta'])
      const statusMessage = ref<string>('Idle')

      const runUpdate = async (): Promise<void> => {
        if (motionFlipElement.value) {
          statusMessage.value = 'Animating'
          await motionFlipElement.value.update(async () => {
            items.value = [...items.value].reverse()
            await nextTick()
          })
          statusMessage.value = 'Updated'
        }
      }

      const stopAnimation = (): void => {
        motionFlipElement.value?.stop()
        statusMessage.value = 'Stopped'
      }

      return {
        motionFlipElement,
        items,
        statusMessage,
        runUpdate,
        stopAnimation
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="runUpdate">Run update()</button>
            <button class="wiki-storybook-button" @click="stopAnimation">Call stop()</button>
            <span class="expose-status">Status: {{ statusMessage }}</span>
          </div>

          <DesignComponent ref="motionFlipElement" :auto="false" class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">{{ item }}</span>
              </div>
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const component = canvasElement.querySelector<HTMLElement>('.design-component')
const statusElement = canvasElement.querySelector<HTMLElement>('.expose-status')
await expect(component).toBeInTheDocument()
await expect(statusElement).toHaveTextContent('Status: Idle')

await step('Run exposed update() method', async () => {
  const updateButton = canvas.getByRole('button', { name: 'Run update()' })
  await userEvent.click(updateButton)
  await waitFor(() => {
    expect(statusElement).toHaveTextContent('Status: Updated')
    const firstItem = canvasElement.querySelector('.design-component > div')
    expect(firstItem?.textContent?.trim()).toBe('Delta')
  })
})

await step('Call exposed stop() method', async () => {
  const stopButton = canvas.getByRole('button', { name: 'Call stop()' })
  await userEvent.click(stopButton)
  await waitFor(() => {
    expect(statusElement).toHaveTextContent('Status: Stopped')
    expect(component).not.toHaveClass('design-component--freeze')
    expect(component).not.toHaveClass('design-component--go')
  })
})
      `
    },
    {
      id: 'MotionFlipSlots',
      name: {
        en: 'Default slot',
        ru: 'Слот по умолчанию'
      },
      setup: `
      const cards = ref<string[]>(['Card A', 'Card B', 'Card C'])

      const swapCards = (): void => {
        cards.value = [...cards.value].reverse()
      }

      return {
        cards,
        swapCards
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="swapCards">Swap Cards</button>
          </div>

          <DesignComponent class="wiki-storybook-group">
            <div v-for="card in cards" :key="card" class="wiki-storybook-item--squared--sm">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">{{ card }}</span>
              </div>
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(canvasElement.querySelectorAll('.design-component > div').length).toBe(3)

const swapButton = canvas.getByRole('button', { name: 'Swap Cards' })
await userEvent.click(swapButton)
await waitFor(() => {
  const firstCard = canvasElement.querySelector('.design-component > div')
  expect(firstCard?.textContent?.trim()).toBe('Card C')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with MotionFlipTest... and "Test: " / "Тест: ")
    // ONLY for constructor-level props/behavior!
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'MotionFlipTestAutoAndDisabled',
      name: {
        en: 'Test: Auto mode, disabled state and combinations',
        ru: 'Тест: Автоматический режим, отключение и комбинации'
      },
      propsName: ['auto', 'disabled'],
      setup: `
      const autoItems = ref<string[]>(['A1', 'A2', 'A3'])
      const manualNoUpdateItems = ref<string[]>(['M1', 'M2', 'M3'])
      const disabledAutoItems = ref<string[]>(['D1', 'D2', 'D3'])
      const dynamicItems = ref<string[]>(['X1', 'X2', 'X3'])
      const isDisabled = ref<boolean>(true)
      const dynamicFlipElement = ref<MotionFlipExposeType | undefined>()

      const mutateAuto = (): void => {
        autoItems.value = [...autoItems.value].reverse()
      }

      const mutateManualWithoutUpdate = (): void => {
        manualNoUpdateItems.value = [...manualNoUpdateItems.value].reverse()
      }

      const mutateDisabledAuto = (): void => {
        disabledAutoItems.value = [...disabledAutoItems.value].reverse()
      }

      const updateDynamic = async (): Promise<void> => {
        if (dynamicFlipElement.value) {
          await dynamicFlipElement.value.update(async () => {
            dynamicItems.value = [...dynamicItems.value].reverse()
            await nextTick()
          })
        }
      }

      const toggleDisabled = (): void => {
        isDisabled.value = !isDisabled.value
      }

      return {
        autoItems,
        manualNoUpdateItems,
        disabledAutoItems,
        dynamicItems,
        isDisabled,
        dynamicFlipElement,
        mutateAuto,
        mutateManualWithoutUpdate,
        mutateDisabledAuto,
        updateDynamic,
        toggleDisabled
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="mutateAuto">Mutate Auto</button>
            <button class="wiki-storybook-button" @click="mutateManualWithoutUpdate">Mutate Manual Direct</button>
            <button class="wiki-storybook-button" @click="mutateDisabledAuto">Mutate Disabled Auto</button>
            <button class="wiki-storybook-button" @click="updateDynamic">Update Dynamic</button>
            <button class="wiki-storybook-button" @click="toggleDisabled">Toggle Disabled ({{ isDisabled }})</button>
          </div>

          <div class="wiki-storybook-flex-column">
            <div>
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">auto (default true)</div>
              <DesignComponent class="wiki-storybook-group test-auto-default">
                <div v-for="item in autoItems" :key="item" class="wiki-storybook-item--squared--xs">
                  <div class="wiki-storybook-item wiki-storybook-item--padding">{{ item }}</div>
                </div>
              </DesignComponent>
            </div>

            <div>
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">auto=false (direct mutation without update)</div>
              <DesignComponent :auto="false" class="wiki-storybook-group test-auto-false">
                <div v-for="item in manualNoUpdateItems" :key="item" class="wiki-storybook-item--squared--xs">
                  <div class="wiki-storybook-item wiki-storybook-item--padding">{{ item }}</div>
                </div>
              </DesignComponent>
            </div>

            <div>
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">disabled + auto (default)</div>
              <DesignComponent disabled class="wiki-storybook-group test-disabled-auto">
                <div v-for="item in disabledAutoItems" :key="item" class="wiki-storybook-item--squared--xs">
                  <div class="wiki-storybook-item wiki-storybook-item--padding">{{ item }}</div>
                </div>
              </DesignComponent>
            </div>

            <div>
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">auto=false + dynamic disabled ({{ isDisabled }})</div>
              <DesignComponent ref="dynamicFlipElement" :auto="false" :disabled="isDisabled" class="wiki-storybook-group test-dynamic-disabled">
                <div v-for="item in dynamicItems" :key="item" class="wiki-storybook-item--squared--xs">
                  <div class="wiki-storybook-item wiki-storybook-item--padding">{{ item }}</div>
                </div>
              </DesignComponent>
            </div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const autoRoot = canvasElement.querySelector<HTMLElement>('.test-auto-default')
const manualRoot = canvasElement.querySelector<HTMLElement>('.test-auto-false')
const disabledRoot = canvasElement.querySelector<HTMLElement>('.test-disabled-auto')
const dynamicRoot = canvasElement.querySelector<HTMLElement>('.test-dynamic-disabled')

await expect(autoRoot).toBeInTheDocument()
await expect(manualRoot).toBeInTheDocument()
await expect(disabledRoot).toBeInTheDocument()
await expect(dynamicRoot).toBeInTheDocument()

await step('Default auto=true triggers FLIP on direct mutation', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Mutate Auto' }))
  await waitFor(() => {
    expect(autoRoot?.querySelector('div')?.textContent?.trim()).toBe('A3')
    expect(autoRoot).toHaveClass('design-component--freeze')
  })
})

await step('auto=false skips FLIP on direct mutation without update()', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Mutate Manual Direct' }))
  await waitFor(() => {
    expect(manualRoot?.querySelector('div')?.textContent?.trim()).toBe('M3')
  })
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  expect(manualRoot).not.toHaveClass('design-component--freeze')
  expect(manualRoot).not.toHaveClass('design-component--go')
  expect(manualRoot?.querySelector('.design-component__item')).toBeNull()
})

await step('disabled skips FLIP in default auto mode', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Mutate Disabled Auto' }))
  await waitFor(() => {
    expect(disabledRoot?.querySelector('div')?.textContent?.trim()).toBe('D3')
  })
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  expect(disabledRoot).not.toHaveClass('design-component--freeze')
  expect(disabledRoot).not.toHaveClass('design-component--go')
  expect(disabledRoot?.querySelector('.design-component__item')).toBeNull()
})

await step('disabled + auto=false runs update() callback without FLIP classes, then re-enables when toggled', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Update Dynamic' }))
  await waitFor(() => {
    expect(dynamicRoot?.querySelector('div')?.textContent?.trim()).toBe('X3')
  })
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  expect(dynamicRoot).not.toHaveClass('design-component--freeze')
  expect(dynamicRoot?.querySelector('.design-component__item')).toBeNull()

  await userEvent.click(canvas.getByRole('button', { name: /Toggle Disabled/ }))
  await waitFor(() => {
    expect(canvas.getByRole('button', { name: 'Toggle Disabled (false)' })).toBeInTheDocument()
  })

  await userEvent.click(canvas.getByRole('button', { name: 'Update Dynamic' }))
  await waitFor(() => {
    expect(dynamicRoot?.querySelector('div')?.textContent?.trim()).toBe('X1')
    expect(dynamicRoot).toHaveClass('design-component--freeze')
  })
})
      `
    },
    {
      id: 'MotionFlipTestUpdateStopAndSlot',
      name: {
        en: 'Test: Expose update(callback), stop() and default slot',
        ru: 'Тест: Методы update(callback), stop() и слот по умолчанию'
      },
      propsName: ['auto', 'disabled'],
      setup: `
      const motionFlipElement = ref<MotionFlipExposeType | undefined>()
      const disabledFlipElement = ref<MotionFlipExposeType | undefined>()
      const items = ref<string[]>(['One', 'Two', 'Three', 'Four'])
      const disabledItems = ref<string[]>(['First', 'Second'])
      const callbackExecutedCount = ref<number>(0)

      const executeWithCallback = async (callback: MotionFlipCallback): Promise<void> => {
        if (motionFlipElement.value) {
          await motionFlipElement.value.update(callback)
        }
      }

      const triggerUpdate = async (): Promise<void> => {
        await executeWithCallback(async () => {
          items.value = [...items.value].reverse()
          callbackExecutedCount.value++
          await nextTick()
        })
      }

      const triggerUpdateAndStop = async (): Promise<void> => {
        await executeWithCallback(async () => {
          items.value = [...items.value].reverse()
          callbackExecutedCount.value++
          await nextTick()
        })
        motionFlipElement.value?.stop()
      }

      const triggerStop = (): void => {
        motionFlipElement.value?.stop()
      }

      const triggerDisabledUpdate = async (): Promise<void> => {
        if (disabledFlipElement.value) {
          await disabledFlipElement.value.update(async () => {
            disabledItems.value = [...disabledItems.value].reverse()
            await nextTick()
          })
        }
      }

      return {
        motionFlipElement,
        disabledFlipElement,
        items,
        disabledItems,
        callbackExecutedCount,
        triggerUpdate,
        triggerUpdateAndStop,
        triggerStop,
        triggerDisabledUpdate
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="triggerUpdate">Trigger Update</button>
            <button class="wiki-storybook-button" @click="triggerStop">Trigger Stop</button>
            <button class="wiki-storybook-button" @click="triggerUpdateAndStop">Update And Stop</button>
            <button class="wiki-storybook-button" @click="triggerDisabledUpdate">Disabled Update</button>
            <span class="test-callback-count">Callbacks: {{ callbackExecutedCount }}</span>
          </div>

          <DesignComponent ref="motionFlipElement" :auto="false" class="wiki-storybook-group test-expose-root">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">{{ item }}</span>
              </div>
            </div>
          </DesignComponent>

          <DesignComponent ref="disabledFlipElement" :auto="false" disabled class="wiki-storybook-group test-disabled-update-root">
            <div v-for="item in disabledItems" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">{{ item }}</span>
              </div>
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const exposeRoot = canvasElement.querySelector<HTMLElement>('.test-expose-root')
const disabledRoot = canvasElement.querySelector<HTMLElement>('.test-disabled-update-root')
const callbackCountElement = canvasElement.querySelector<HTMLElement>('.test-callback-count')

await expect(exposeRoot).toBeInTheDocument()
await expect(exposeRoot?.querySelectorAll(':scope > div').length).toBe(4)

await step('update(callback) adds freeze class, item subclass, and system CSS variables', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Trigger Update' }))
  await waitFor(() => {
    expect(callbackCountElement).toHaveTextContent('Callbacks: 1')
    expect(exposeRoot).toHaveClass('design-component--freeze')
    const firstChild = exposeRoot?.querySelector<HTMLElement>(':scope > div')
    expect(firstChild).toHaveClass('design-component__item')
    expect(firstChild?.style.getPropertyValue('--design-component-sys-top')).not.toBe('')
    expect(firstChild?.style.getPropertyValue('--design-component-sys-left')).not.toBe('')
    expect(firstChild?.style.getPropertyValue('--design-component-sys-width')).not.toBe('')
    expect(firstChild?.style.getPropertyValue('--design-component-sys-height')).not.toBe('')
  })
})

await step('stop() clears freeze/go classes, item subclass, and system CSS variables', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Trigger Stop' }))
  await waitFor(() => {
    expect(exposeRoot).not.toHaveClass('design-component--freeze')
    expect(exposeRoot).not.toHaveClass('design-component--go')
    const childItems = exposeRoot?.querySelectorAll<HTMLElement>(':scope > div') ?? []
    childItems.forEach((childItem) => {
      expect(childItem).not.toHaveClass('design-component__item')
      expect(childItem.style.getPropertyValue('--design-component-sys-top')).toBe('')
    })
  })
})

await step('stop() immediately after update() prevents pending animation frames', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Update And Stop' }))
  await waitFor(() => {
    expect(callbackCountElement).toHaveTextContent('Callbacks: 2')
  })
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  expect(exposeRoot).not.toHaveClass('design-component--freeze')
  expect(exposeRoot).not.toHaveClass('design-component--go')
  expect(exposeRoot?.querySelector('.design-component__item')).toBeNull()
})

await step('update(callback) executes callback when disabled=true without adding FLIP classes', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Disabled Update' }))
  await waitFor(() => {
    expect(disabledRoot?.querySelector(':scope > div')?.textContent?.trim()).toBe('Second')
  })
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  expect(disabledRoot).not.toHaveClass('design-component--freeze')
  expect(disabledRoot).not.toHaveClass('design-component--go')
  expect(disabledRoot?.querySelector('.design-component__item')).toBeNull()
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MotionFlip'} type={'motionFlip'}/>
<Canvas of={Component.MotionFlipBasic}/>

<StorybookDescriptions componentName={'MotionFlip'} type={'work'}/>

<StorybookDescriptions componentName={'MotionFlip'} type={'mode'}/>
<Canvas of={Component.MotionFlipAuto}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionFlip'} type={'expose'}/>
<Canvas of={Component.MotionFlipExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<Canvas of={Component.MotionFlipSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <MotionFlip v-bind="args" style="display: flex; gap: 8px;">
    <div v-for="item in 3" :key="item">
      <div style="padding: 8px; border: 1px solid currentColor;">Item {{ item }}</div>
    </div>
  </MotionFlip>
</div>
    `,
    description: `
Low-level layout animation component implementing the FLIP (First, Last, Invert, Play) technique. Animates position and dimension changes of child elements when list items are reordered, added, or removed.
Supports automatic DOM mutation observing via the 'auto' property (enabled by default), or explicit execution via the 'update(callback)' expose method.
Provides a 'stop()' expose method to abort active animations and a 'disabled' prop to bypass FLIP transitions.
Used for dynamic lists, reorderable grids, and card transitions requiring high-performance hardware-accelerated animations.
    `,
    hide: true
  }
}
