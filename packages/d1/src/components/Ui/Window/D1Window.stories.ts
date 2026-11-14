import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Window from './D1Window.vue'
import { WindowWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { WindowEmitOptions, WindowExpose as WindowExposeType } from '@dxtmisha/constructor/Window'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Window',
  component: D1Window,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: WindowWikiStorybook.getDescription()
      }
    }
  },
  argTypes: WindowWikiStorybook.getWiki(),
  args: WindowWikiStorybook.getValues()
} satisfies Meta<typeof D1Window>

export default meta

type Story = StoryObj<typeof meta>

export const Window: Story = {
  args: {
    image: 'https://oboitd.ru/images/goods/big/20221019093936_Priroda_8361-M.jpg',
    closeButton: true
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Window },
    setup: () => ({ args }),
    template: `
      <D1Window v-bind="args">
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
    </D1Window>
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(triggerButton).toBeInTheDocument()

    await userEvent.click(triggerButton!)
    await waitFor(async () => {
      const windowElement = document.querySelector<HTMLElement>('.d1-window:not([data-status="hide"])')
      await expect(windowElement).toBeInTheDocument()
    })

    await userEvent.click(triggerButton!)
    await waitFor(async () => {
      const windowElement = document.querySelector<HTMLElement>('.d1-window[data-status="open"]')
      await expect(windowElement).toBeNull()
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const WindowStaticMode: Story = {
  name: 'Статический режим',
  render: () => ({
    components: { D1Window },
    template: `
        
        <D1Window :staticMode="true" adaptive="static">
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
        </D1Window>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeInTheDocument()
    await waitFor(async () => {
      const component = document.querySelector<HTMLElement>('.d1-window--adaptive--static')
      await expect(component).toBeInTheDocument()
      await expect(component).toHaveTextContent('Static Mode Window')
    })
  }
}
export const WindowAxis: Story = {
  name: 'Позиционирование по оси',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <!-- Axis: x -->
          <D1Window axis="x" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: x)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = x</strong>
                <p>Window aligns horizontally (left/right) near the trigger.</p>
              </div>
            </template>
          </D1Window>

          <!-- Axis: y -->
          <D1Window axis="y" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: y)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = y</strong>
                <p>Window aligns vertically (top/bottom) near the trigger.</p>
              </div>
            </template>
          </D1Window>

          <!-- Axis: on -->
          <D1Window axis="on" adaptive="menu" overElement=".wiki-axis-on-target">
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
          </D1Window>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('.wiki-storybook-button')
    await expect(buttons.length).toBe(3)

    await userEvent.click(buttons[0])
    await waitFor(async () => {
      await expect(document.querySelector('.d1-window--axis--x')).toBeInTheDocument()
    })
    await userEvent.click(buttons[0])

    await userEvent.click(buttons[1])
    await waitFor(async () => {
      await expect(document.querySelector('.d1-window--axis--y')).toBeInTheDocument()
    })
    await userEvent.click(buttons[1])

    await userEvent.click(buttons[2])
    await waitFor(async () => {
      await expect(document.querySelector('.d1-window--axis--on')).toBeInTheDocument()
    })
    await userEvent.click(buttons[2])
  }
}
export const WindowVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Window },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="open = !open">
            Toggle Window (open: {{ open }})
          </button>

          <D1Window v-model:open="open">
            <template #title>
              <h3 class="wiki-storybook-item--padding">v-model Controlled Window</h3>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>This window state is driven by an external reactive ref via v-model:open.</p>
              </div>
            </template>
          </D1Window>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const WindowHooks: Story = {
  name: 'Хуки жизненного цикла',
  render: () => ({
    components: { D1Window },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Window :beforeOpening="beforeOpening" :beforeClosing="beforeClosing">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open Guarded Window</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Window with beforeOpening and beforeClosing lifecycle hooks.</p>
              </div>
            </template>
          </D1Window>
          <div class="wiki-storybook-card">Hook Status: {{ statusText }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const WindowEventWindow: Story = {
  name: 'Событие: window',
  render: () => ({
    components: { D1Window },
    setup() {
      const eventDetails = ref('No events yet')
      const onWindow = (options: WindowEmitOptions) => {
        eventDetails.value = 'Window ' + (options.open ? 'opened' : 'closed')
      }
      return { eventDetails, onWindow }
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Window @window="onWindow" flash>
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Track Window Events</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Content triggering window open/close notification payloads.</p>
              </div>
            </template>
          </D1Window>
          <div class="wiki-storybook-card">Last Event: {{ eventDetails }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const WindowExpose: Story = {
  name: 'Экспортируемые методы',
  render: () => ({
    components: { D1Window },
    setup() {
      const windowRef = ref<WindowExposeType | null>(null)
      return { windowRef }
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="windowRef?.toOpen()">toOpen()</button>
          <button class="wiki-storybook-button" @click="windowRef?.toClose()">toClose()</button>
          <button class="wiki-storybook-button" @click="windowRef?.toggle()">toggle()</button>

          <D1Window ref="windowRef" :inert="false" flash>
            <template #title>
              <h3 class="wiki-storybook-item--padding">Programmatic Control</h3>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Controlled via exposed methods: toOpen, toClose, and toggle.</p>
              </div>
            </template>
          </D1Window>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('.wiki-storybook-button')
    await expect(buttons.length).toBe(3)
    await expect(buttons[0]).toHaveTextContent('toOpen()')
    await expect(buttons[1]).toHaveTextContent('toClose()')
    await expect(buttons[2]).toHaveTextContent('toggle()')

    await userEvent.click(buttons[0])
    await waitFor(async () => {
      const openedWindow = document.querySelector<HTMLElement>('.d1-window:not([data-status="hide"])')
      await expect(openedWindow).toBeInTheDocument()
    })

    await userEvent.click(buttons[1])
    await waitFor(async () => {
      const openedWindow = document.querySelector<HTMLElement>('.d1-window[data-status="open"]')
      await expect(openedWindow).toBeNull()
    })

    await userEvent.click(buttons[2])
    await waitFor(async () => {
      const openedWindow = document.querySelector<HTMLElement>('.d1-window:not([data-status="hide"])')
      await expect(openedWindow).toBeInTheDocument()
    })

    await userEvent.click(buttons[1])
  }
}
export const WindowSlots: Story = {
  name: 'Анатомия слотов',
  render: () => ({
    components: { D1Window },
    template: `
        
        <D1Window>
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
        </D1Window>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const controlButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(controlButton).toBeInTheDocument()
    await expect(controlButton).toHaveTextContent('Custom Control Slot')

    await userEvent.click(controlButton!)
    await waitFor(async () => {
      const openedWindow = document.querySelector<HTMLElement>('.d1-window:not([data-status="hide"])')
      await expect(openedWindow).toBeInTheDocument()
    })

    await userEvent.click(controlButton!)
    await waitFor(async () => {
      const openedWindow = document.querySelector<HTMLElement>('.d1-window[data-status="open"]')
      await expect(openedWindow).toBeNull()
    })
  }
}
export const WindowClasses: Story = {
  name: 'Классы управления поведением (static / close)',
  render: () => ({
    components: { D1Window },
    template: `
        
        <D1Window adaptive="menu" :autoClose="true" flash>
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
        </D1Window>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(triggerButton).toBeInTheDocument()

    await userEvent.click(triggerButton!)
    await waitFor(async () => {
      await expect(document.querySelector('.d1-window[data-status="open"], .d1-window[data-status="flash"]')).toBeInTheDocument()
      await expect(document.querySelector('.wiki-storybook-button--static')).toBeInTheDocument()
    })

    await new Promise((resolve) => setTimeout(resolve, 100))
    const rootSibling = canvasElement.closest('body > *') as HTMLElement | null
    await expect(rootSibling?.hasAttribute('inert') ?? false).toBe(false)
    await expect(rootSibling?.getAttribute('aria-hidden') ?? null).toBeNull()

    const staticButton = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--static')
    await userEvent.click(staticButton!)
    await waitFor(async () => {
      await expect(document.querySelector('.d1-window[data-status="open"], .d1-window[data-status="flash"]')).toBeInTheDocument()
    })

    await new Promise((resolve) => setTimeout(resolve, 150))
    const autoButton = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--auto')
    await userEvent.click(autoButton!)
    await waitFor(async () => {
      await expect(document.querySelector('.d1-window[data-status="open"], .d1-window[data-status="flash"]')).toBeNull()
    })
  }
}
export const WindowNested: Story = {
  name: 'Вложенные меню и окна (LIFO)',
  render: () => ({
    components: { D1Window },
    template: `
        
        <D1Window adaptive="menu" flash>
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
              <D1Window adaptive="menu" axis="x" flash>
                <template #control="{binds: childBinds}">
                  <button class="wiki-storybook-button wiki-storybook-button--child" v-bind="childBinds">
                    Open Submenu >
                  </button>
                </template>
                <template #default>
                  <div class="wiki-storybook-item--padding">Nested Submenu Content</div>
                </template>
              </D1Window>
            </div>
          </template>
        </D1Window>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const parentTrigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button--parent')
    await expect(parentTrigger).toBeInTheDocument()

    await userEvent.click(parentTrigger!)
    await waitFor(async () => {
      await expect(document.querySelector('.wiki-storybook-button--child')).toBeInTheDocument()
    })

    const childTrigger = document.querySelector<HTMLButtonElement>('.wiki-storybook-button--child')
    await userEvent.click(childTrigger!)
    await waitFor(async () => {
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(2)
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(1)
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(0)
    })
  }
}
export const WindowTestAdaptive: Story = {
  name: 'Тест: Адаптивные режимы и полноэкранный вид',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: menu</div>
            <D1Window adaptive="menu" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetBottom</div>
            <D1Window adaptive="actionSheetBottom" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetRight</div>
            <D1Window adaptive="actionSheetRight" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">fullscreen: true</div>
            <D1Window fullscreen embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(4)

      await expect(items[0]).toHaveClass('d1-window--adaptive--menu')
      await expect(items[1]).toHaveClass('d1-window--adaptive--actionSheetBottom')
      await expect(items[2]).toHaveClass('d1-window--adaptive--actionSheetRight')
      await expect(items[3]).toHaveClass('d1-window--fullscreen')
    })
  }
}
export const WindowTestAlignments: Story = {
  name: 'Тест: Выравнивание во вьюпорте и боковые панели',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: leftFull</div>
            <D1Window alignment="leftFull" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: rightFull</div>
            <D1Window alignment="rightFull" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: bottomFull</div>
            <D1Window alignment="bottomFull" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: top</div>
            <D1Window alignment="top" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(4)

      await expect(items[0]).toHaveClass('d1-window--alignment--leftFull')
      await expect(items[1]).toHaveClass('d1-window--alignment--rightFull')
      await expect(items[2]).toHaveClass('d1-window--alignment--bottomFull')
      await expect(items[3]).toHaveClass('d1-window--alignment--top')
    })
  }
}
export const WindowTestSizes: Story = {
  name: 'Тест: Токены ширины и высоты и пользовательские размеры',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: sm</div>
            <D1Window width="sm" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: md</div>
            <D1Window width="md" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: lg</div>
            <D1Window width="lg" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">custom width and height</div>
            <D1Window width="360px" height="240px" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(4)

      await expect(items[0]).toHaveClass('d1-window--width--sm')
      await expect(items[1]).toHaveClass('d1-window--width--md')
      await expect(items[2]).toHaveClass('d1-window--width--lg')
      await expect(items[3]).toHaveClass('d1-window--width--custom')
      await expect(items[3]).toHaveClass('d1-window--height--custom')
    })
  }
}
export const WindowTestOrigins: Story = {
  name: 'Тест: Точки трансформации анимаций',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: topToBottom</div>
            <D1Window origin="topToBottom" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: bottomToTop</div>
            <D1Window origin="bottomToTop" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: leftToRight</div>
            <D1Window origin="leftToRight" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: rightToLeft</div>
            <D1Window origin="rightToLeft" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(4)

      await expect(items[0]).toHaveClass('d1-window--origin--topToBottom')
      await expect(items[1]).toHaveClass('d1-window--origin--bottomToTop')
      await expect(items[2]).toHaveClass('d1-window--origin--leftToRight')
      await expect(items[3]).toHaveClass('d1-window--origin--rightToLeft')
    })
  }
}
export const WindowTestStates: Story = {
  name: 'Тест: Состояния disabled, hide, widthMatch, inDom и embedded',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled: true</div>
            <D1Window disabled>
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">Disabled Window</button>
              </template>
              <div class="wiki-storybook-item--padding">Should stay closed</div>
            </D1Window>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">hide: true</div>
            <D1Window hide embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">widthMatch: true</div>
            <D1Window widthMatch embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">embedded + inDom</div>
            <D1Window embedded inDom open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledTrigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(disabledTrigger).toBeInTheDocument()
    await userEvent.click(disabledTrigger!)

    await waitFor(async () => {
      await expect(document.querySelector('.d1-window[data-status="open"]')).toBeNull()
      await expect(canvasElement.querySelector('.d1-window--hide')).toBeInTheDocument()
      await expect(canvasElement.querySelector('.d1-window--widthMatch')).toBeInTheDocument()
      await expect(canvasElement.querySelector('.d1-window--embedded')).toBeInTheDocument()
    })
  }
}
export const WindowTestPersistent: Story = {
  name: 'Тест: Постоянный режим и эффект вспышки',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">persistent + flash</div>
            <D1Window persistent flash embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const component = canvasElement.querySelector<HTMLElement>('.d1-window')
      await expect(component).toBeInTheDocument()
    })
  }
}
export const WindowTestAnatomy: Story = {
  name: 'Тест: Компактный отступ, разделители и кнопка закрытия',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dense + divider + closeButton</div>
            <D1Window dense divider closeButton embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">overscroll: true</div>
            <D1Window overscroll embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(2)

      await expect(items[0]).toHaveClass('d1-window--dense')
      await expect(items[0]).toHaveClass('d1-window--closeButton')
      await expect(items[1]).toHaveClass('d1-window--overscroll')
    })
  }
}
export const WindowTestImage: Story = {
  name: 'Тест: Интеграция верхнего и бокового баннера изображения',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imagePosition: top</div>
            <D1Window image="home" imagePosition="top" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imagePosition: left</div>
            <D1Window image="home" imagePosition="left" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(2)

      await expect(items[0]).toHaveClass('d1-window--imagePosition--top')
      await expect(items[1]).toHaveClass('d1-window--imagePosition--left')
    })
  }
}
export const WindowTestExtendedLayouts: Story = {
  name: 'Тест: Расширенные режимы адаптации, выравнивания и размеры auto/max',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: modal</div>
            <D1Window adaptive="modal" width="auto" height="auto" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: modalDynamic</div>
            <D1Window adaptive="modalDynamic" alignment="center" origin="center" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: menuWindow</div>
            <D1Window adaptive="menuWindow" alignment="topFull" width="max" height="max" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(3)

      await expect(items[0]).toHaveClass('d1-window--adaptive--modal')
      await expect(items[0]).toHaveClass('d1-window--width--auto')
      await expect(items[0]).toHaveClass('d1-window--height--auto')
      await expect(items[1]).toHaveClass('d1-window--adaptive--modalDynamic')
      await expect(items[1]).toHaveClass('d1-window--alignment--center')
      await expect(items[1]).toHaveClass('d1-window--origin--center')
      await expect(items[2]).toHaveClass('d1-window--adaptive--menuWindow')
      await expect(items[2]).toHaveClass('d1-window--alignment--topFull')
      await expect(items[2]).toHaveClass('d1-window--width--max')
      await expect(items[2]).toHaveClass('d1-window--height--max')
    })
  }
}
export const WindowTestStaticCombos: Story = {
  name: 'Тест: Комбинации статического режима с disabled, hide и contextmenu',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">staticMode + disabled</div>
            <D1Window staticMode disabled>
              <template #control="{binds}">
                <button class="wiki-storybook-button wiki-storybook-button--disabled" v-bind="binds">Static disabled</button>
              </template>
              <div class="wiki-storybook-item--padding">Static disabled</div>
            </D1Window>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">staticMode + hide</div>
            <D1Window staticMode hide embedded open :autoTabIndex="false" :inert="false">
              <div class="wiki-storybook-item--padding">Static hide</div>
            </D1Window>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">contextmenu: true</div>
            <D1Window contextmenu>
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">Context Area</button>
              </template>
              <div class="wiki-storybook-item--padding">Context content</div>
            </D1Window>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button--disabled')
    await expect(disabledButton).toBeInTheDocument()
    await userEvent.click(disabledButton!)

    await waitFor(async () => {
      await expect(document.querySelector('.d1-window[data-status="open"]')).toBeNull()
      await expect(canvasElement.querySelector('.d1-window--hide')).toBeInTheDocument()
    })

    const contextButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button:not(.wiki-storybook-button--disabled)')
    await expect(contextButton).toBeInTheDocument()
  }
}
export const WindowTestImageSizes: Story = {
  name: 'Тест: Размеры изображения баннера (sm, md, lg, quarter, half)',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: sm</div>
            <D1Window image="home" imageSize="sm" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: md</div>
            <D1Window image="home" imageSize="md" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: lg</div>
            <D1Window image="home" imageSize="lg" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: quarter</div>
            <D1Window image="home" imageSize="quarter" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imageSize: half</div>
            <D1Window image="home" imageSize="half" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(5)

      await expect(items[0]).toHaveClass('d1-window--imageSize--sm')
      await expect(items[1]).toHaveClass('d1-window--imageSize--md')
      await expect(items[2]).toHaveClass('d1-window--imageSize--lg')
      await expect(items[3]).toHaveClass('d1-window--imageSize--quarter')
      await expect(items[4]).toHaveClass('d1-window--imageSize--half')
    })
  }
}
export const WindowTestCloseControls: Story = {
  name: 'Тест: Кнопка закрытия, иконка объектом и скрытие на мобильных',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">closeMobileHide + iconClose string + textClose</div>
            <D1Window closeButton closeMobileHide iconClose="close" textClose="Dismiss" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">iconClose object</div>
            <D1Window closeButton :iconClose="{ icon: 'home', active: true }" embedded open :autoTabIndex="false" :inert="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    await waitFor(async () => {
      const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
      await expect(items.length).toBe(2)

      await expect(items[0]).toHaveClass('d1-window--closeButton')
      await expect(items[0]).toHaveClass('d1-window--closeMobileHide')
      await expect(items[1]).toHaveClass('d1-window--closeButton')
    })
  }
}
export const WindowTestAccessibility: Story = {
  name: 'Тест: ARIA-роли, клавиатурное управление, inert и autoTabIndex',
  render: () => ({
    components: { D1Window },
    template: `
        
        <D1Window
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
        </D1Window>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    await expect(trigger).toBeInTheDocument()
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')

    trigger!.focus()
    await userEvent.keyboard('{ArrowDown}')

    await waitFor(async () => {
      const windowElement = canvasElement.querySelector<HTMLElement>('.d1-window:not([data-status="hide"])')
      await expect(windowElement).toBeInTheDocument()
      const body = canvasElement.querySelector<HTMLElement>('[role="alertdialog"]')
      await expect(body).toHaveAttribute('aria-labelledby', 'wiki-window-alert-title')
      await expect(body).toHaveAttribute('aria-describedby', 'wiki-window-alert-desc')
    })

    await userEvent.keyboard('{Escape}')
    const stillOpen = canvasElement.querySelector<HTMLElement>('.d1-window:not([data-status="hide"])')
    await expect(stillOpen).toBeInTheDocument()

    await userEvent.click(trigger!)
  }
}
export const WindowTestLifecycleExtra: Story = {
  name: 'Тест: Хук preparation, колбэки opening/closing и autoClose',
  render: () => ({
    components: { D1Window },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Window
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
          </D1Window>
          <div class="wiki-storybook-card">Trace: {{ trace }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const WindowTestCascadeMenus: Story = {
  name: 'Тест: 3-уровневые каскадные меню и защитные пропы при вложенности',
  render: () => ({
    components: { D1Window },
    template: `
        
        <div class="wiki-storybook-flex">
          <D1Window adaptive="menu" flash>
            <template #control="{binds}">
              <button class="wiki-storybook-button wiki-storybook-button--l1" v-bind="binds">L1 Menu</button>
            </template>
            <div class="wiki-storybook-item--padding">
              <D1Window adaptive="menu" axis="x" flash>
                <template #control="{binds: l2Binds}">
                  <button class="wiki-storybook-button wiki-storybook-button--l2" v-bind="l2Binds">L2 Submenu</button>
                </template>
                <div class="wiki-storybook-item--padding">
                  <D1Window adaptive="menu" axis="x" :autoClose="true" flash>
                    <template #control="{binds: l3Binds}">
                      <button class="wiki-storybook-button wiki-storybook-button--l3" v-bind="l3Binds">L3 Submenu</button>
                    </template>
                    <div class="wiki-storybook-item--padding">
                      <button class="wiki-storybook-button wiki-storybook-button--leaf">Leaf Action</button>
                    </div>
                  </D1Window>
                </div>
              </D1Window>
            </div>
          </D1Window>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(3)
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(2)
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(1)
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(document.querySelectorAll('.d1-window[data-status="open"], .d1-window[data-status="flash"]').length).toBe(0)
    })
  }
}
// :story-items [!] System label / Системная метка
