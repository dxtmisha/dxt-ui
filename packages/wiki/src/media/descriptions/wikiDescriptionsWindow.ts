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
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
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
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
await expect(component).toHaveClass('design-component--static')
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
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(3)

await expect(items[0]).toHaveClass('design-component--axis--x')
await expect(items[1]).toHaveClass('design-component--axis--y')
await expect(items[2]).toHaveClass('design-component--axis--on')
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
const toggleButton = canvasElement.querySelector<HTMLElement>('.wiki-storybook-button')
await expect(toggleButton).toBeInTheDocument()
await expect(toggleButton).toHaveTextContent('open: false')
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
const statusCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
await expect(statusCard).toBeInTheDocument()
await expect(statusCard).toHaveTextContent('Ready')
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
          <DesignComponent @window="onWindow">
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
const card = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
await expect(card).toBeInTheDocument()
await expect(card).toHaveTextContent('No events yet')
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

          <DesignComponent ref="windowRef">
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
const buttons = canvasElement.querySelectorAll<HTMLElement>('.wiki-storybook-button')
await expect(buttons.length).toBe(3)
await expect(buttons[0]).toHaveTextContent('toOpen()')
await expect(buttons[1]).toHaveTextContent('toClose()')
await expect(buttons[2]).toHaveTextContent('toggle()')
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
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
const controlButton = canvasElement.querySelector<HTMLElement>('.wiki-storybook-button')
await expect(controlButton).toBeInTheDocument()
await expect(controlButton).toHaveTextContent('Custom Control Slot')
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
            <DesignComponent adaptive="menu"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetBottom</div>
            <DesignComponent adaptive="actionSheetBottom"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetRight</div>
            <DesignComponent adaptive="actionSheetRight"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">fullscreen: true</div>
            <DesignComponent fullscreen/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--adaptive--menu')
await expect(items[1]).toHaveClass('design-component--adaptive--actionSheetBottom')
await expect(items[2]).toHaveClass('design-component--adaptive--actionSheetRight')
await expect(items[3]).toHaveClass('design-component--fullscreen')
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
            <DesignComponent alignment="leftFull"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: rightFull</div>
            <DesignComponent alignment="rightFull"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: bottomFull</div>
            <DesignComponent alignment="bottomFull"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: top</div>
            <DesignComponent alignment="top"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--alignment--leftFull')
await expect(items[1]).toHaveClass('design-component--alignment--rightFull')
await expect(items[2]).toHaveClass('design-component--alignment--bottomFull')
await expect(items[3]).toHaveClass('design-component--alignment--top')
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
            <DesignComponent width="sm"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: md</div>
            <DesignComponent width="md"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: lg</div>
            <DesignComponent width="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">custom width and height</div>
            <DesignComponent width="360px" height="240px"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--width--sm')
await expect(items[1]).toHaveClass('design-component--width--md')
await expect(items[2]).toHaveClass('design-component--width--lg')
await expect(items[3]).toHaveClass('design-component--width--custom')
await expect(items[3]).toHaveClass('design-component--height--custom')
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
            <DesignComponent origin="topToBottom"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: bottomToTop</div>
            <DesignComponent origin="bottomToTop"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: leftToRight</div>
            <DesignComponent origin="leftToRight"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: rightToLeft</div>
            <DesignComponent origin="rightToLeft"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--origin--topToBottom')
await expect(items[1]).toHaveClass('design-component--origin--bottomToTop')
await expect(items[2]).toHaveClass('design-component--origin--leftToRight')
await expect(items[3]).toHaveClass('design-component--origin--rightToLeft')
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
            <DesignComponent disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">hide: true</div>
            <DesignComponent hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">widthMatch: true</div>
            <DesignComponent widthMatch/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">embedded + inDom</div>
            <DesignComponent embedded inDom/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveClass('design-component--disabled')
await expect(items[1]).toHaveClass('design-component--hide')
await expect(items[2]).toHaveClass('design-component--widthMatch')
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
            <DesignComponent persistent flash/>
          </div>
        </div>
      `,
      play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
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
            <DesignComponent dense divider closeButton/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">overscroll: true</div>
            <DesignComponent overscroll/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)

await expect(items[0]).toHaveClass('design-component--dense')
await expect(items[0]).toHaveClass('design-component--closeButton')
await expect(items[1]).toHaveClass('design-component--overscroll')
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
            <DesignComponent image="home" imagePosition="top"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imagePosition: left</div>
            <DesignComponent image="home" imagePosition="left"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)

await expect(items[0]).toHaveClass('design-component--imagePosition--top')
await expect(items[1]).toHaveClass('design-component--imagePosition--left')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Window'} type={'window'}/>
<StorybookDescriptions componentName={'Window'} type={'classes'}/>
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
