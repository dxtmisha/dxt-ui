import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Window from './D1Window.vue'
import { WindowWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { WindowEmitOptions, WindowExpose as WindowExposeType } from '@dxtmisha/constructor/Window'
import { expect } from 'storybook/test'
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
    const component = canvasElement.querySelector<HTMLElement>('.d1-window')
    await expect(component).toBeInTheDocument()
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
    const component = canvasElement.querySelector<HTMLElement>('.d1-window')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('d1-window--static')
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
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(3)

    await expect(items[0]).toHaveClass('d1-window--axis--x')
    await expect(items[1]).toHaveClass('d1-window--axis--y')
    await expect(items[2]).toHaveClass('d1-window--axis--on')
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
    const toggleButton = canvasElement.querySelector<HTMLElement>('.wiki-storybook-button')
    await expect(toggleButton).toBeInTheDocument()
    await expect(toggleButton).toHaveTextContent('open: false')
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
    const statusCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
    await expect(statusCard).toBeInTheDocument()
    await expect(statusCard).toHaveTextContent('Ready')
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
          <D1Window @window="onWindow">
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
    const card = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
    await expect(card).toBeInTheDocument()
    await expect(card).toHaveTextContent('No events yet')
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

          <D1Window ref="windowRef">
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
    const buttons = canvasElement.querySelectorAll<HTMLElement>('.wiki-storybook-button')
    await expect(buttons.length).toBe(3)
    await expect(buttons[0]).toHaveTextContent('toOpen()')
    await expect(buttons[1]).toHaveTextContent('toClose()')
    await expect(buttons[2]).toHaveTextContent('toggle()')
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
    const component = canvasElement.querySelector<HTMLElement>('.d1-window')
    await expect(component).toBeInTheDocument()
    const controlButton = canvasElement.querySelector<HTMLElement>('.wiki-storybook-button')
    await expect(controlButton).toBeInTheDocument()
    await expect(controlButton).toHaveTextContent('Custom Control Slot')
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
            <D1Window adaptive="menu"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetBottom</div>
            <D1Window adaptive="actionSheetBottom"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">adaptive: actionSheetRight</div>
            <D1Window adaptive="actionSheetRight"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">fullscreen: true</div>
            <D1Window fullscreen/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-window--adaptive--menu')
    await expect(items[1]).toHaveClass('d1-window--adaptive--actionSheetBottom')
    await expect(items[2]).toHaveClass('d1-window--adaptive--actionSheetRight')
    await expect(items[3]).toHaveClass('d1-window--fullscreen')
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
            <D1Window alignment="leftFull"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: rightFull</div>
            <D1Window alignment="rightFull"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: bottomFull</div>
            <D1Window alignment="bottomFull"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">alignment: top</div>
            <D1Window alignment="top"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-window--alignment--leftFull')
    await expect(items[1]).toHaveClass('d1-window--alignment--rightFull')
    await expect(items[2]).toHaveClass('d1-window--alignment--bottomFull')
    await expect(items[3]).toHaveClass('d1-window--alignment--top')
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
            <D1Window width="sm"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: md</div>
            <D1Window width="md"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">width: lg</div>
            <D1Window width="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">custom width and height</div>
            <D1Window width="360px" height="240px"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-window--width--sm')
    await expect(items[1]).toHaveClass('d1-window--width--md')
    await expect(items[2]).toHaveClass('d1-window--width--lg')
    await expect(items[3]).toHaveClass('d1-window--width--custom')
    await expect(items[3]).toHaveClass('d1-window--height--custom')
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
            <D1Window origin="topToBottom"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: bottomToTop</div>
            <D1Window origin="bottomToTop"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: leftToRight</div>
            <D1Window origin="leftToRight"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">origin: rightToLeft</div>
            <D1Window origin="rightToLeft"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-window--origin--topToBottom')
    await expect(items[1]).toHaveClass('d1-window--origin--bottomToTop')
    await expect(items[2]).toHaveClass('d1-window--origin--leftToRight')
    await expect(items[3]).toHaveClass('d1-window--origin--rightToLeft')
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
            <D1Window disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">hide: true</div>
            <D1Window hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">widthMatch: true</div>
            <D1Window widthMatch/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">embedded + inDom</div>
            <D1Window embedded inDom/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(4)

    await expect(items[0]).toHaveClass('d1-window--disabled')
    await expect(items[1]).toHaveClass('d1-window--hide')
    await expect(items[2]).toHaveClass('d1-window--widthMatch')
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
            <D1Window persistent flash/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-window')
    await expect(component).toBeInTheDocument()
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
            <D1Window dense divider closeButton/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">overscroll: true</div>
            <D1Window overscroll/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-window--dense')
    await expect(items[0]).toHaveClass('d1-window--closeButton')
    await expect(items[1]).toHaveClass('d1-window--overscroll')
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
            <D1Window image="home" imagePosition="top"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">imagePosition: left</div>
            <D1Window image="home" imagePosition="left"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll<HTMLElement>('.d1-window')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-window--imagePosition--top')
    await expect(items[1]).toHaveClass('d1-window--imagePosition--left')
  }
}
// :story-items [!] System label / Системная метка
