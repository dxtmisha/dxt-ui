import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Window component properties
 *
 * Описания свойств компонента Window
 */
export const wikiDescriptionsWindow: StorybookComponentsDescriptionItem = {
  name: 'Window',
  description: {
    en: 'Flexible modal and popup window component with advanced positioning, adaptive layouts, and lifecycle animations.',
    ru: 'Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования, адаптивными макетами и анимациями жизненного цикла.'
  },
  possibilities: {
    en: [
      'modal and contextual window display modes',
      'intelligent multi-axis positioning engine (x, y, on) with collision avoidance',
      'smooth opening and closing animations with configurable origins',
      'static mode for embedded inline layouts in normal document flow',
      'persistent window interaction blocking with wobble and flash feedback',
      'automatic scrollbar integration and body scroll lock management',
      'accessibility features: focus trapping, inert attribute, and aria-haspopup',
      'event-driven architecture with comprehensive lifecycle hooks',
      'header image and icon integration with top and left layouts',
      'responsive design with mobile action sheets and fullscreen views'
    ],
    ru: [
      'режимы отображения модальных и контекстных окон',
      'интеллектуальное многоосевое позиционирование (x, y, on) с предотвращением коллизий',
      'плавные анимации открытия и закрытия с настраиваемыми точками трансформации',
      'статический режим для встроенных инлайн-представлений в обычном потоке документа',
      'блокировка взаимодействия с фоном (persistent) с визуальным эффектом wobble и flash',
      'автоматическая интеграция с полосой прокрутки и блокировка скролла страницы',
      'доступность: захват фокуса клавиатуры, атрибут inert и aria-haspopup',
      'событийно-ориентированная архитектура с хуками жизненного цикла',
      'интеграция изображений и иконок с верхним и левым расположением',
      'адаптивный дизайн с мобильными панелями действий и полноэкранным режимом'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { WindowEmitOptions, WindowExpose as WindowExposeType } from \'@dxtmisha/constructor/Window\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Window</button>
      </template>

      <template #title>
        <h3 class="wiki-storybook-item--padding">Window Component Demonstration</h3>
      </template>

      <template #default>
        <div class="wiki-storybook-item--padding">
          <h4>Advanced Window System</h4>
          <p>This window component represents a sophisticated approach to modal and popup interfaces in modern web applications. It provides a comprehensive solution for displaying overlaid content with intelligent positioning, smooth animations, and extensive customization options.</p>
          <p>The component automatically handles complex scenarios such as viewport boundaries, scroll positioning, and responsive behavior across different screen sizes.</p>
        </div>
      </template>

      <template #footer="{classesWindow}">
        <div class="wiki-storybook-flex wiki-storybook-item--padding">
          <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
          <button class="wiki-storybook-button">Confirm</button>
        </div>
      </template>
    </DesignComponent>
  `,
  play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(triggerButton).toBeInTheDocument()

await userEvent.click(triggerButton!)
await waitFor(async () => {
  const windowElement = document.querySelector<HTMLElement>('.design-component:not([data-status="hide"])')
  await expect(windowElement).toBeInTheDocument()
})

await userEvent.click(triggerButton!)
await waitFor(async () => {
  const windowElement = document.querySelector<HTMLElement>('.design-component[data-status="open"]')
  await expect(windowElement).toBeNull()
})
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose/slots)
    // =========================================================================
    {
      id: 'WindowStaticMode',
      name: {
        en: 'Static Mode',
        ru: 'Статический режим'
      },
      propsName: ['staticMode', 'adaptive'],
      template: `
        <DesignComponent :staticMode="true" adaptive="static">
          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Static Mode Window</h4>
              <p>This window uses staticMode: true. Content displays immediately inline without modal backdrop or toggle animations.</p>
              <div class="wiki-storybook-info">
                <strong>Static mode features:</strong>
                <ul>
                  <li>No backdrop scrim</li>
                  <li>Embedded directly in document flow</li>
                  <li>Always visible without open triggers</li>
                </ul>
              </div>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
await expect(canvasElement).toBeInTheDocument()
await waitFor(async () => {
  const component = document.querySelector<HTMLElement>('.design-component--adaptive--static')
  await expect(component).toBeInTheDocument()
  await expect(component).toHaveTextContent('Static Mode Window')
})
      `
    },
    {
      id: 'WindowAxis',
      name: {
        en: 'Axis positioning',
        ru: 'Позиционирование по оси'
      },
      propsName: ['axis', 'adaptive', 'indent', 'overElement'],
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <!-- Axis: x -->
          <DesignComponent axis="x" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: x)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = x</strong>
                <p>Window aligns horizontally (left/right) near the trigger.</p>
              </div>
            </template>
          </DesignComponent>

          <!-- Axis: y -->
          <DesignComponent axis="y" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: y)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = y</strong>
                <p>Window aligns vertically (top/bottom) near the trigger.</p>
              </div>
            </template>
          </DesignComponent>

          <!-- Axis: on -->
          <DesignComponent axis="on" adaptive="menu" overElement=".wiki-axis-on-target">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: on)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = on</strong>
                <p>Window positions over the target element.</p>
                <div class="wiki-axis-on-target">Target Element</div>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('.wiki-storybook-button')
await expect(buttons.length).toBe(3)

await userEvent.click(buttons[0])
await waitFor(async () => {
  await expect(document.querySelector('.design-component--axis--x')).toBeInTheDocument()
})
await userEvent.click(buttons[0])

await userEvent.click(buttons[1])
await waitFor(async () => {
  await expect(document.querySelector('.design-component--axis--y')).toBeInTheDocument()
})
await userEvent.click(buttons[1])

await userEvent.click(buttons[2])
await waitFor(async () => {
  await expect(document.querySelector('.design-component--axis--on')).toBeInTheDocument()
})
await userEvent.click(buttons[2])
      `
    },
    {
      id: 'WindowVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['open'],
      setup: `
      const open = ref(false)
      return { open }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="open = !open">
            Toggle Window (open: {{ open }})
          </button>

          <DesignComponent v-model:open="open">
            <template #title>
              <h3 class="wiki-storybook-item--padding">v-model Controlled Window</h3>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>This window state is driven by an external reactive ref via v-model:open.</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const toggleButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(toggleButton).toBeInTheDocument()
await expect(toggleButton).toHaveTextContent('open: false')

await userEvent.click(toggleButton!)
await waitFor(async () => {
  await expect(toggleButton).toHaveTextContent('open: true')
})

await userEvent.click(toggleButton!)
await waitFor(async () => {
  await expect(toggleButton).toHaveTextContent('open: false')
})
      `
    },
    {
      id: 'WindowHooks',
      name: {
        en: 'Lifecycle Hooks',
        ru: 'Хуки жизненного цикла'
      },
      propsName: ['beforeOpening', 'opening', 'beforeClosing', 'closing'],
      setup: `
      const statusText = ref('Ready')
      const beforeOpening = () => {
        statusText.value = 'Preparing to open'
        return true
      }
      const beforeClosing = () => {
        statusText.value = 'Preparing to close'
        return true
      }
      return { statusText, beforeOpening, beforeClosing }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent :beforeOpening="beforeOpening" :beforeClosing="beforeClosing">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open Guarded Window</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Window with beforeOpening and beforeClosing lifecycle hooks.</p>
              </div>
            </template>
          </DesignComponent>
          <div class="wiki-storybook-card">Hook Status: {{ statusText }}</div>
        </div>
      `,
      play: `
const controlButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
const statusCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
await expect(controlButton).toBeInTheDocument()
await expect(statusCard).toHaveTextContent('Ready')

await userEvent.click(controlButton!)
await waitFor(async () => {
  await expect(statusCard).toHaveTextContent('Preparing to open')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(statusCard).toHaveTextContent('Preparing to close')
})
      `
    },
    {
      id: 'WindowEventWindow',
      name: {
        en: 'Event: window',
        ru: 'Событие: window'
      },
      propsName: ['open'],
      setup: `
      const eventDetails = ref('No events yet')
      const onWindow = (options: WindowEmitOptions) => {
        eventDetails.value = 'Window ' + (options.open ? 'opened' : 'closed')
      }
      return { eventDetails, onWindow }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent @window="onWindow" flash>
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Track Window Events</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Content triggering window open/close notification payloads.</p>
              </div>
            </template>
          </DesignComponent>
          <div class="wiki-storybook-card">Last Event: {{ eventDetails }}</div>
        </div>
      `,
      play: `
const controlButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
const card = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
await expect(controlButton).toBeInTheDocument()
await expect(card).toHaveTextContent('No events yet')

await userEvent.click(controlButton!)
await waitFor(async () => {
  await expect(card).toHaveTextContent('Window opened')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(card).toHaveTextContent('Window closed')
})
      `
    },
    {
      id: 'WindowExpose',
      name: {
        en: 'Exposed Methods',
        ru: 'Экспортируемые методы'
      },
      setup: `
      const windowRef = ref<WindowExposeType | null>(null)
      return { windowRef }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="windowRef?.toOpen()">toOpen()</button>
          <button class="wiki-storybook-button" @click="windowRef?.toClose()">toClose()</button>
          <button class="wiki-storybook-button" @click="windowRef?.toggle()">toggle()</button>

          <DesignComponent ref="windowRef" :inert="false" flash>
            <template #title>
              <h3 class="wiki-storybook-item--padding">Programmatic Control</h3>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Controlled via exposed methods: toOpen, toClose, and toggle.</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('.wiki-storybook-button')
await expect(buttons.length).toBe(3)
await expect(buttons[0]).toHaveTextContent('toOpen()')
await expect(buttons[1]).toHaveTextContent('toClose()')
await expect(buttons[2]).toHaveTextContent('toggle()')

await userEvent.click(buttons[0])
await waitFor(async () => {
  const openedWindow = document.querySelector<HTMLElement>('.design-component:not([data-status="hide"])')
  await expect(openedWindow).toBeInTheDocument()
})

await userEvent.click(buttons[1])
await waitFor(async () => {
  const openedWindow = document.querySelector<HTMLElement>('.design-component[data-status="open"]')
  await expect(openedWindow).toBeNull()
})

await userEvent.click(buttons[2])
await waitFor(async () => {
  const openedWindow = document.querySelector<HTMLElement>('.design-component:not([data-status="hide"])')
  await expect(openedWindow).toBeInTheDocument()
})

await userEvent.click(buttons[1])
      `
    },
    {
      id: 'WindowSlots',
      name: {
        en: 'Slots Anatomy',
        ru: 'Анатомия слотов'
      },
      template: `
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Custom Control Slot</button>
          </template>
          <template #title>
            <h3 class="wiki-storybook-item--padding">Custom Header Slot (#title)</h3>
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <p>Custom Main Content Slot (#default)</p>
            </div>
          </template>
          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button">Custom Footer Slot (#footer)</button>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const controlButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(controlButton).toBeInTheDocument()
await expect(controlButton).toHaveTextContent('Custom Control Slot')

await userEvent.click(controlButton!)
await waitFor(async () => {
  const openedWindow = document.querySelector<HTMLElement>('.design-component:not([data-status="hide"])')
  await expect(openedWindow).toBeInTheDocument()
})

await userEvent.click(controlButton!)
await waitFor(async () => {
  const openedWindow = document.querySelector<HTMLElement>('.design-component[data-status="open"]')
  await expect(openedWindow).toBeNull()
})
      `
    },
    {
      id: 'WindowClasses',
      name: {
        en: 'Behavior Classes (static / close)',
        ru: 'Классы управления поведением (static / close)'
      },
      propsName: ['adaptive', 'autoClose'],
      template: `
        <DesignComponent adaptive="menu" :autoClose="true" flash>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open AutoClose Menu</button>
          </template>
          <template #default="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.static" class="wiki-storybook-button wiki-storybook-button--static">
                Stay Open (classesWindow.static)
              </button>
              <button class="wiki-storybook-button wiki-storybook-button--auto">
                AutoClose Item
              </button>
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--close">
                Explicit Close (classesWindow.close)
              </button>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(triggerButton).toBeInTheDocument()

await userEvent.click(triggerButton!)
await waitFor(async () => {
  await expect(document.querySelector('.design-component[data-status="open"], .design-component[data-status="flash"]')).toBeInTheDocument()
  await expect(document.querySelector('.wiki-storybook-button--static')).toBeInTheDocument()
})

await new Promise((resolve) => setTimeout(resolve, 100))
const rootSibling = canvasElement.closest('body > *') as HTMLElement | null
await expect(rootSibling?.hasAttribute('inert') ?? false).toBe(false)
await expect(rootSibling?.getAttribute('aria-hidden') ?? null).toBeNull()

const staticButton = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--static')
await userEvent.click(staticButton!)
await waitFor(async () => {
  await expect(document.querySelector('.design-component[data-status="open"], .design-component[data-status="flash"]')).toBeInTheDocument()
})

await new Promise((resolve) => setTimeout(resolve, 150))
const autoButton = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--auto')
await userEvent.click(autoButton!)
await waitFor(async () => {
  await expect(document.querySelector('.design-component[data-status="open"], .design-component[data-status="flash"]')).toBeNull()
})
      `
    },
    {
      id: 'WindowNested',
      name: {
        en: 'Nested Menus & Windows (LIFO)',
        ru: 'Вложенные меню и окна (LIFO)'
      },
      propsName: ['adaptive', 'axis'],
      template: `
        <DesignComponent adaptive="menu" flash>
          <template #control="{binds}">
            <button class="wiki-storybook-button wiki-storybook-button--parent" v-bind="binds">
              Open Parent Menu
            </button>
          </template>
          <template #default="{classesWindow: parentClasses}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="parentClasses.static" class="wiki-storybook-button wiki-storybook-button--stay">
                Parent Item
              </button>
              <DesignComponent adaptive="menu" axis="x" flash>
                <template #control="{binds: childBinds}">
                  <button class="wiki-storybook-button wiki-storybook-button--child" v-bind="childBinds">
                    Open Submenu >
                  </button>
                </template>
                <template #default>
                  <div class="wiki-storybook-item--padding">Nested Submenu Content</div>
                </template>
              </DesignComponent>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const parentTrigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button--parent')
await expect(parentTrigger).toBeInTheDocument()

await userEvent.click(parentTrigger!)
await waitFor(async () => {
  await expect(document.querySelector('.wiki-storybook-button--child')).toBeInTheDocument()
})

const childTrigger = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--child')
await userEvent.click(childTrigger!)
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(2)
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(1)
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(0)
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with WindowTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'WindowTestAdaptive',
      name: {
        en: 'Test: Adaptive modes and fullscreen layout',
        ru: 'Тест: Адаптивные режимы и полноэкранный вид'
      },
      propsName: ['adaptive', 'fullscreen'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: menu</div>
            <DesignComponent adaptive="menu" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetBottom</div>
            <DesignComponent adaptive="actionSheetBottom" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetRight</div>
            <DesignComponent adaptive="actionSheetRight" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">fullscreen: true</div>
            <DesignComponent fullscreen embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(4)

  await expect(items[0]).toHaveClass('design-component--adaptive--menu')
  await expect(items[1]).toHaveClass('design-component--adaptive--actionSheetBottom')
  await expect(items[2]).toHaveClass('design-component--adaptive--actionSheetRight')
  await expect(items[3]).toHaveClass('design-component--fullscreen')
})
      `
    },
    {
      id: 'WindowTestAlignments',
      name: {
        en: 'Test: Viewport alignments and dock sidebars',
        ru: 'Тест: Выравнивание во вьюпорте и боковые панели'
      },
      propsName: ['alignment'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: leftFull</div>
            <DesignComponent alignment="leftFull" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: rightFull</div>
            <DesignComponent alignment="rightFull" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: bottomFull</div>
            <DesignComponent alignment="bottomFull" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: top</div>
            <DesignComponent alignment="top" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(4)

  await expect(items[0]).toHaveClass('design-component--alignment--leftFull')
  await expect(items[1]).toHaveClass('design-component--alignment--rightFull')
  await expect(items[2]).toHaveClass('design-component--alignment--bottomFull')
  await expect(items[3]).toHaveClass('design-component--alignment--top')
})
      `
    },
    {
      id: 'WindowTestSizes',
      name: {
        en: 'Test: Width and height tokens and custom dimensions',
        ru: 'Тест: Токены ширины и высоты и пользовательские размеры'
      },
      propsName: ['width', 'height'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: sm</div>
            <DesignComponent width="sm" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: md</div>
            <DesignComponent width="md" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: lg</div>
            <DesignComponent width="lg" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">custom width and height</div>
            <DesignComponent width="360px" height="240px" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(4)

  await expect(items[0]).toHaveClass('design-component--width--sm')
  await expect(items[1]).toHaveClass('design-component--width--md')
  await expect(items[2]).toHaveClass('design-component--width--lg')
  await expect(items[3]).toHaveClass('design-component--width--custom')
  await expect(items[3]).toHaveClass('design-component--height--custom')
})
      `
    },
    {
      id: 'WindowTestOrigins',
      name: {
        en: 'Test: Animation transform origins',
        ru: 'Тест: Точки трансформации анимаций'
      },
      propsName: ['origin'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: topToBottom</div>
            <DesignComponent origin="topToBottom" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: bottomToTop</div>
            <DesignComponent origin="bottomToTop" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: leftToRight</div>
            <DesignComponent origin="leftToRight" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: rightToLeft</div>
            <DesignComponent origin="rightToLeft" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(4)

  await expect(items[0]).toHaveClass('design-component--origin--topToBottom')
  await expect(items[1]).toHaveClass('design-component--origin--bottomToTop')
  await expect(items[2]).toHaveClass('design-component--origin--leftToRight')
  await expect(items[3]).toHaveClass('design-component--origin--rightToLeft')
})
      `
    },
    {
      id: 'WindowTestStates',
      name: {
        en: 'Test: Disabled, hide, widthMatch, inDom and embedded states',
        ru: 'Тест: Состояния disabled, hide, widthMatch, inDom и embedded'
      },
      propsName: ['disabled', 'hide', 'widthMatch', 'inDom', 'embedded', 'contextmenu'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled: true</div>
            <DesignComponent disabled>
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">Disabled Window</button>
              </template>
              <div class="wiki-storybook-item--padding">Should stay closed</div>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">hide: true</div>
            <DesignComponent hide embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">widthMatch: true</div>
            <DesignComponent widthMatch embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">embedded + inDom</div>
            <DesignComponent embedded inDom open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
const disabledTrigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(disabledTrigger).toBeInTheDocument()
await userEvent.click(disabledTrigger!)

await waitFor(async () => {
  await expect(document.querySelector('.design-component[data-status="open"]')).toBeNull()
  await expect(canvasElement.querySelector('.design-component--hide')).toBeInTheDocument()
  await expect(canvasElement.querySelector('.design-component--widthMatch')).toBeInTheDocument()
  await expect(canvasElement.querySelector('.design-component--embedded')).toBeInTheDocument()
})
      `
    },
    {
      id: 'WindowTestPersistent',
      name: {
        en: 'Test: Persistent mode and flash effect',
        ru: 'Тест: Постоянный режим и эффект вспышки'
      },
      propsName: ['persistent', 'flash'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">persistent + flash</div>
            <DesignComponent persistent flash embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const component = canvasElement.querySelector<HTMLElement>('.design-component')
  await expect(component).toBeInTheDocument()
})
      `
    },
    {
      id: 'WindowTestAnatomy',
      name: {
        en: 'Test: Dense spacing, dividers and close button',
        ru: 'Тест: Компактный отступ, разделители и кнопка закрытия'
      },
      propsName: ['dense', 'divider', 'closeButton', 'overscroll'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dense + divider + closeButton</div>
            <DesignComponent dense divider closeButton embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">overscroll: true</div>
            <DesignComponent overscroll embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(2)

  await expect(items[0]).toHaveClass('design-component--dense')
  await expect(items[0]).toHaveClass('design-component--closeButton')
  await expect(items[1]).toHaveClass('design-component--overscroll')
})
      `
    },
    {
      id: 'WindowTestImage',
      name: {
        en: 'Test: Header and side image banner integration',
        ru: 'Тест: Интеграция верхнего и бокового баннера изображения'
      },
      propsName: ['image', 'imagePosition'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imagePosition: top</div>
            <DesignComponent image="home" imagePosition="top" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imagePosition: left</div>
            <DesignComponent image="home" imagePosition="left" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(2)

  await expect(items[0]).toHaveClass('design-component--imagePosition--top')
  await expect(items[1]).toHaveClass('design-component--imagePosition--left')
})
      `
    },
    {
      id: 'WindowTestExtendedLayouts',
      name: {
        en: 'Test: Extended adaptive modes, alignments, origins and auto/max sizes',
        ru: 'Тест: Расширенные режимы адаптации, выравнивания и размеры auto/max'
      },
      propsName: ['adaptive', 'alignment', 'origin', 'width', 'height'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: modal</div>
            <DesignComponent adaptive="modal" width="auto" height="auto" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: modalDynamic</div>
            <DesignComponent adaptive="modalDynamic" alignment="center" origin="center" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: menuWindow</div>
            <DesignComponent adaptive="menuWindow" alignment="topFull" width="max" height="max" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(3)

  await expect(items[0]).toHaveClass('design-component--adaptive--modal')
  await expect(items[0]).toHaveClass('design-component--width--auto')
  await expect(items[0]).toHaveClass('design-component--height--auto')
  await expect(items[1]).toHaveClass('design-component--adaptive--modalDynamic')
  await expect(items[1]).toHaveClass('design-component--alignment--center')
  await expect(items[1]).toHaveClass('design-component--origin--center')
  await expect(items[2]).toHaveClass('design-component--adaptive--menuWindow')
  await expect(items[2]).toHaveClass('design-component--alignment--topFull')
  await expect(items[2]).toHaveClass('design-component--width--max')
  await expect(items[2]).toHaveClass('design-component--height--max')
})
      `
    },
    {
      id: 'WindowTestStaticCombos',
      name: {
        en: 'Test: Static mode with disabled, hide and contextmenu combinations',
        ru: 'Тест: Комбинации статического режима с disabled, hide и contextmenu'
      },
      propsName: ['staticMode', 'disabled', 'hide', 'contextmenu'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">staticMode + disabled</div>
            <DesignComponent staticMode disabled>
              <template #control="{binds}">
                <button class="wiki-storybook-button wiki-storybook-button--disabled" v-bind="binds">Static disabled</button>
              </template>
              <div class="wiki-storybook-item--padding">Static disabled</div>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">staticMode + hide</div>
            <DesignComponent staticMode hide embedded open :autoTabIndex="false" :inert="false">
              <div class="wiki-storybook-item--padding">Static hide</div>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">contextmenu: true</div>
            <DesignComponent contextmenu>
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">Context Area</button>
              </template>
              <div class="wiki-storybook-item--padding">Context content</div>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const disabledButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button--disabled')
await expect(disabledButton).toBeInTheDocument()
await userEvent.click(disabledButton!)

await waitFor(async () => {
  await expect(document.querySelector('.design-component[data-status="open"]')).toBeNull()
  await expect(canvasElement.querySelector('.design-component--hide')).toBeInTheDocument()
})

const contextButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button:not(.wiki-storybook-button--disabled)')
await expect(contextButton).toBeInTheDocument()
      `
    },
    {
      id: 'WindowTestImageSizes',
      name: {
        en: 'Test: Image banner sizes (sm, md, lg, quarter, half)',
        ru: 'Тест: Размеры изображения баннера (sm, md, lg, quarter, half)'
      },
      propsName: ['image', 'imageSize'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: sm</div>
            <DesignComponent image="home" imageSize="sm" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: md</div>
            <DesignComponent image="home" imageSize="md" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: lg</div>
            <DesignComponent image="home" imageSize="lg" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: quarter</div>
            <DesignComponent image="home" imageSize="quarter" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: half</div>
            <DesignComponent image="home" imageSize="half" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(5)

  await expect(items[0]).toHaveClass('design-component--imageSize--sm')
  await expect(items[1]).toHaveClass('design-component--imageSize--md')
  await expect(items[2]).toHaveClass('design-component--imageSize--lg')
  await expect(items[3]).toHaveClass('design-component--imageSize--quarter')
  await expect(items[4]).toHaveClass('design-component--imageSize--half')
})
      `
    },
    {
      id: 'WindowTestCloseControls',
      name: {
        en: 'Test: Close button text, icon object and mobile hide',
        ru: 'Тест: Кнопка закрытия, иконка объектом и скрытие на мобильных'
      },
      propsName: ['closeButton', 'closeMobileHide', 'iconClose', 'textClose'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">closeMobileHide + iconClose string + textClose</div>
            <DesignComponent closeButton closeMobileHide iconClose="close" textClose="Dismiss" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">iconClose object</div>
            <DesignComponent closeButton :iconClose="{ icon: 'home', active: true }" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      `,
      play: `
await waitFor(async () => {
  const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
  await expect(items.length).toBe(2)

  await expect(items[0]).toHaveClass('design-component--closeButton')
  await expect(items[0]).toHaveClass('design-component--closeMobileHide')
  await expect(items[1]).toHaveClass('design-component--closeButton')
})
      `
    },
    {
      id: 'WindowTestAccessibility',
      name: {
        en: 'Test: ARIA roles, keyboard controls (closeOnEsc, openOnArrowDown), inert and autoTabIndex',
        ru: 'Тест: ARIA-роли, клавиатурное управление, inert и autoTabIndex'
      },
      propsName: ['role', 'ariaLabelledby', 'ariaDescribedby', 'ariaHaspopup', 'closeOnEsc', 'openOnArrowDown', 'inert', 'autoTabIndex'],
      template: `
        <DesignComponent
          role="alertdialog"
          ariaLabelledby="wiki-window-alert-title"
          ariaDescribedby="wiki-window-alert-desc"
          ariaHaspopup="dialog"
          :closeOnEsc="false"
          :openOnArrowDown="true"
          :inert="false"
          :autoTabIndex="false"
          embedded
        >
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Accessible Window</button>
          </template>
          <template #title>
            <h3 id="wiki-window-alert-title" class="wiki-storybook-item--padding">Alert Title</h3>
          </template>
          <template #default>
            <p id="wiki-window-alert-desc" class="wiki-storybook-item--padding">Alert description text.</p>
          </template>
        </DesignComponent>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
await expect(trigger).toBeInTheDocument()
await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')

trigger!.focus()
await userEvent.keyboard('{ArrowDown}')

await waitFor(async () => {
  const windowElement = canvasElement.querySelector<HTMLElement>('.design-component:not([data-status="hide"])')
  await expect(windowElement).toBeInTheDocument()
  const body = canvasElement.querySelector<HTMLElement>('[role="alertdialog"]')
  await expect(body).toHaveAttribute('aria-labelledby', 'wiki-window-alert-title')
  await expect(body).toHaveAttribute('aria-describedby', 'wiki-window-alert-desc')
})

await userEvent.keyboard('{Escape}')
const stillOpen = canvasElement.querySelector<HTMLElement>('.design-component:not([data-status="hide"])')
await expect(stillOpen).toBeInTheDocument()

await userEvent.click(trigger!)
      `
    },
    {
      id: 'WindowTestLifecycleExtra',
      name: {
        en: 'Test: Preparation hook, opening/closing callbacks and autoClose',
        ru: 'Тест: Хук preparation, колбэки opening/closing и autoClose'
      },
      propsName: ['preparation', 'opening', 'closing', 'autoClose'],
      setup: `
      const trace = ref('idle')
      const preparation = () => {
        trace.value = 'prepared'
      }
      const opening = () => {
        trace.value = 'opened'
        return true
      }
      const closing = () => {
        trace.value = 'closed'
        return true
      }
      return { trace, preparation, opening, closing }
      `,
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent
            :preparation="preparation"
            :opening="opening"
            :closing="closing"
            :autoClose="false"
            flash
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Run Extra Lifecycle</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">Extra lifecycle body</div>
            </template>
          </DesignComponent>
          <div class="wiki-storybook-card">Trace: {{ trace }}</div>
        </div>
      `,
      play: `
const controlButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
const traceCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
await expect(controlButton).toBeInTheDocument()
await expect(traceCard).toHaveTextContent('idle')

await userEvent.click(controlButton!)
await waitFor(async () => {
  await expect(traceCard).toHaveTextContent('opened')
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(traceCard).toHaveTextContent('closed')
})
      `
    },
    {
      id: 'WindowTestCascadeMenus',
      name: {
        en: 'Test: 3-level cascading menus and nested modal guards',
        ru: 'Тест: 3-уровневые каскадные меню и защитные пропы при вложенности'
      },
      propsName: ['adaptive', 'axis', 'persistent', 'closeOnEsc', 'autoClose'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent adaptive="menu" flash>
            <template #control="{binds}">
              <button class="wiki-storybook-button wiki-storybook-button--l1" v-bind="binds">L1 Menu</button>
            </template>
            <div class="wiki-storybook-item--padding">
              <DesignComponent adaptive="menu" axis="x" flash>
                <template #control="{binds: l2Binds}">
                  <button class="wiki-storybook-button wiki-storybook-button--l2" v-bind="l2Binds">L2 Submenu</button>
                </template>
                <div class="wiki-storybook-item--padding">
                  <DesignComponent adaptive="menu" axis="x" :autoClose="true" flash>
                    <template #control="{binds: l3Binds}">
                      <button class="wiki-storybook-button wiki-storybook-button--l3" v-bind="l3Binds">L3 Submenu</button>
                    </template>
                    <div class="wiki-storybook-item--padding">
                      <button class="wiki-storybook-button wiki-storybook-button--leaf">Leaf Action</button>
                    </div>
                  </DesignComponent>
                </div>
              </DesignComponent>
            </div>
          </DesignComponent>
        </div>
      `,
      play: `
const l1Trigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button--l1')
await userEvent.click(l1Trigger!)
await waitFor(async () => {
  await expect(document.querySelector('.wiki-storybook-button--l2')).toBeInTheDocument()
})

const l2Trigger = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--l2')
await userEvent.click(l2Trigger!)
await waitFor(async () => {
  await expect(document.querySelector('.wiki-storybook-button--l3')).toBeInTheDocument()
})

const l3Trigger = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--l3')
await userEvent.click(l3Trigger!)
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(3)
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(2)
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(1)
})

await userEvent.keyboard('{Escape}')
await waitFor(async () => {
  await expect(document.querySelectorAll('.design-component[data-status="open"], .design-component[data-status="flash"]').length).toBe(0)
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Window'} type={'window'}/>
<StorybookDescriptions componentName={'Window'} type={'classes'}/>
<Canvas of={Component.WindowClasses}/>
<Canvas of={Component.WindowNested}/>
<StorybookDescriptions componentName={'Window'} type={'staticMode'}/>
<Canvas of={Component.WindowStaticMode}/>
<StorybookDescriptions componentName={'Window'} type={'axis'}/>
<Canvas of={Component.WindowAxis}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.WindowVModel}/>
<StorybookDescriptions componentName={'Window'} type={'hooks'}/>
<Canvas of={Component.WindowHooks}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<Canvas of={Component.WindowEventWindow}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'emits-include'}/>
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<Canvas of={Component.WindowExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
<Canvas of={Component.WindowSlots}/>
    `
  },
  ai: {
    render: `
      <div :class="classDemo.item">
        <Window embedded open v-bind="args">
          <template #control="{ binds }">
            <button v-bind="binds">Open Window</button>
          </template>
          <template #title>
            <h3>Window Title</h3>
          </template>
          <template #default>
            <p>Window content goes here. This is a demonstration of the window component capabilities.</p>
            <p>It can contain text, images, forms, or any other content.</p>
          </template>
          <template #footer>
            <div>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </template>
        </Window>
      </div>
    `,
    description: 'Versatile container orchestration system for Modals, Popups, Dropdowns, and Cards with multi-axis positioning, collision detection, and lifecycle hooks.',
    hide: true
  }
}
