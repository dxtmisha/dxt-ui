import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionTransform from './D1MotionTransform.vue'
import { MotionTransformWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref, type Ref } from 'vue'
import type { MotionTransformEmitOptions, MotionTransformExpose } from '@dxtmisha/constructor/MotionTransform'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionTransform',
  component: D1MotionTransform,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionTransformWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionTransformWikiStorybook.getWiki(),
  args: MotionTransformWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionTransform>

export default meta

type Story = StoryObj<typeof meta>

export const MotionTransform: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MotionTransform },
    setup: () => ({ args }),
    template: `
      <D1MotionTransform v-bind="args">
        <template #head>
          <div class="wiki-storybook-item--padding">
            <h3>MotionTransform Demo</h3>
            <p>Interactive demonstration of the MotionTransform system - a foundational utility for window-like behaviors and contextual UI interactions.</p>
          </div>
        </template>

        <template #body="{classes}">
          <div class="wiki-storybook-item--padding">
            <h4>Motion Transform System</h4>
            <p>MotionTransform provides the foundational motion and state management system that powers interactive UI components like windows, dropdowns, and contextual menus. It handles element transforms, animation states, and user interaction events with smooth animations.</p>

            <h4>Core Components</h4>
            <p>The motion system consists of specialized managers: State handles open/show/teleport flags, Element provides DOM helpers, Size manages CSS variables for animations, Event coordinates click handling, and Go offers programmatic control methods.</p>

            <h4>Developer Integration</h4>
            <p>MotionTransform is designed as a low-level utility for component developers. It provides APIs for managing UI behaviors while handling DOM manipulation and animation orchestration behind the scenes.</p>
            <div class="wiki-storybook-flex">
              <button :class="classes.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </div>
        </template>
      </D1MotionTransform>
    `
  }),
  play: async ({ canvasElement }) => {
    const head = canvasElement.querySelector<HTMLElement>('.d1-motionTransform__head')
    await expect(head).toBeInTheDocument()
    await expect(head).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(head!)
    await waitFor(async () => {
      const root = document.querySelector<HTMLElement>('.d1-motionTransform[data-open="open"]')
      await expect(root).toBeInTheDocument()
      await expect(head).toHaveAttribute('aria-expanded', 'true')
    })

    const closeButton = document.querySelector<HTMLButtonElement>('.d1-motionTransform__body button')
    await expect(closeButton).toBeInTheDocument()
    await userEvent.click(closeButton!)
    await waitFor(async () => {
      const root = document.querySelector<HTMLElement>('.d1-motionTransform[data-open="open"]')
      await expect(root).toBeNull()
      await expect(head).toHaveAttribute('aria-expanded', 'false')
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MotionTransformAnimationHeadPosition: Story = {
  name: 'Анимация позиции заголовка',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MotionTransform animationHeadPosition="top">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>animationHeadPosition: top</h4>
                <p>Click to open — Head stays at the top during transition</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <h5>Top Position Animation</h5>
                <p>With <code>animationHeadPosition="top"</code>, the head element maintains its position at the top of the container throughout the entire show/hide animation sequence.</p>
                <p>This behavior is ideal for interfaces where the header serves as a stable reference point, such as dropdown menus, navigation panels, or content that expands downward from a fixed trigger.</p>
                <p>The animation creates a smooth vertical expansion effect while keeping the header visually anchored, providing users with a clear understanding of the content's origin point.</p>
                <ul>
                  <li>Header remains stationary during animation</li>
                  <li>Content expands/collapses below the header</li>
                  <li>Provides stable visual reference point</li>
                  <li>Best for downward-expanding interfaces</li>
                </ul>
              </div>
            </template>
          </D1MotionTransform>

          <D1MotionTransform animationHeadPosition="toBottom">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>animationHeadPosition: toBottom</h4>
                <p>Click to open — Head moves toward the bottom with content</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <h5>Bottom Movement Animation</h5>
                <p>When using <code>animationHeadPosition="toBottom"</code>, the head element travels together with the content during the animation, creating a unified motion experience.</p>
                <p>This approach is particularly effective for accordion-style interfaces, collapsible sections, or any scenario where the header and content should move as a cohesive unit.</p>
                <p>The animation provides a more dynamic feeling, as both header and content participate in the motion, creating a sense of the entire section expanding or contracting as one entity.</p>
                <ul>
                  <li>Header and content move together</li>
                  <li>Creates unified motion experience</li>
                  <li>Ideal for accordion-style interfaces</li>
                  <li>Provides cohesive visual feedback</li>
                </ul>
              </div>
            </template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll<HTMLElement>('.d1-motionTransform')
    const heads = canvasElement.querySelectorAll<HTMLElement>('.d1-motionTransform__head')
    await expect(roots.length).toBe(2)
    await expect(roots[0]).toHaveClass('d1-motionTransform--animationHeadPosition--top')
    await expect(roots[1]).toHaveClass('d1-motionTransform--animationHeadPosition--toBottom')

    await userEvent.click(heads[0])
    await waitFor(async () => {
      await expect(roots[0]).toHaveAttribute('data-open', 'open')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(roots[0]).toHaveAttribute('data-open', 'none')
    })

    await userEvent.click(heads[1])
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'open')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformIgnore: Story = {
  name: 'Зоны игнорирования',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MotionTransform ignoreSelector=".mt-ignore">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>Ignore zones behavior</h4>
                <p>This text acts as the trigger that opens the content area</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <p>Clicks on elements matching <code>.mt-ignore</code> are not treated as outside and won’t trigger auto close.</p>
                <p>This is useful for trigger buttons, helper controls, and nested interactive areas that must remain active without closing the window.</p>
                <p>Try it: click any button with <code>.mt-ignore</code> outside or inside — the window stays open; clicks on other outside areas will close it.</p>
                <p>Use <code>ignore</code> when you have a concrete DOM element, and <code>ignoreSelector</code> when zones are multiple or dynamic.</p>
                <p>Keep selectors specific to avoid accidental matches and unintended auto‑close blocking.</p>
                <ul>
                  <li>Pattern: a trigger with class <code>.mt-ignore</code> outside and inside the window</li>
                  <li>Expectation: clicks on the trigger are ignored by outside‑check logic, the window doesn’t close</li>
                </ul>
              </div>
            </template>
          </D1MotionTransform>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding mt-ignore">
            <h5>External ignore zone</h5>
            <p>This area has class <code>.mt-ignore</code> and demonstrates how clicks here won't close the window below.</p>
            <button class="wiki-storybook-button">Ignored button</button>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--padding outside-close-target">
            <span>Outside close target</span>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-motionTransform')
    const head = canvasElement.querySelector<HTMLElement>('.d1-motionTransform__head')
    const ignoredButton = canvasElement.querySelector<HTMLButtonElement>('.mt-ignore .wiki-storybook-button')
    const outsideTarget = canvasElement.querySelector<HTMLElement>('.outside-close-target')

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
    })

    await userEvent.click(ignoredButton!)
    await expect(root).toHaveAttribute('data-open', 'open')

    await userEvent.click(outsideTarget!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1MotionTransform },
    setup() {
      const open: Ref<boolean> = ref(false)

      return {
        open
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = !open">Toggle ({{ open }})</button>
          </div>
          
          <D1MotionTransform v-model:open="open">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>v-model controlled</h4>
                <p>This component's visibility is controlled by an external ref via v-model:open.</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <p class="vmodel-status">Content is {{ open ? 'visible' : 'hidden' }}</p>
                <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the component's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
                <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the MotionTransform component, such as in complex forms or coordinated UI interactions.</p>
              </div>
            </template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const toggleButton = canvasElement.querySelector<HTMLButtonElement>('.wiki-storybook-button')
    const root = canvasElement.querySelector<HTMLElement>('.d1-motionTransform')

    await expect(root).toHaveAttribute('data-open', 'none')
    await userEvent.click(toggleButton!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
      await expect(toggleButton).toHaveTextContent('Toggle (true)')
    })

    await userEvent.click(toggleButton!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
      await expect(toggleButton).toHaveTextContent('Toggle (false)')
    })
  }
}
export const MotionTransformTestSection: Story = {
  name: 'Тест: Режим секции (section)',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MotionTransform :section="true">
            <template #head>
              <div class="wiki-storybook-item--padding">Section Persistent Header</div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">Section expandable body content</div>
            </template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-motionTransform')
    const head = canvasElement.querySelector<HTMLElement>('.d1-motionTransform__head')
    await expect(root).toHaveClass('d1-motionTransform--section')

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
      await expect(canvasElement.querySelector('.d1-motionTransform__body')).toBeInTheDocument()
      const style = getComputedStyle(head!)
      await expect(style.visibility).toBe('visible')
      await expect(style.opacity).toBe('1')
    })

    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformTestAdaptive: Story = {
  name: 'Тест: Адаптивные режимы',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MotionTransform adaptive="planeAlways">
            <template #head><div>planeAlways</div></template>
            <template #body><div>Body planeAlways</div></template>
          </D1MotionTransform>
          <D1MotionTransform adaptive="planeSm">
            <template #head><div>planeSm</div></template>
            <template #body><div>Body planeSm</div></template>
          </D1MotionTransform>
          <D1MotionTransform adaptive="planeMd">
            <template #head><div>planeMd</div></template>
            <template #body><div>Body planeMd</div></template>
          </D1MotionTransform>
          <D1MotionTransform adaptive="planeLg">
            <template #head><div>planeLg</div></template>
            <template #body><div>Body planeLg</div></template>
          </D1MotionTransform>
          <D1MotionTransform adaptive="planeXl">
            <template #head><div>planeXl</div></template>
            <template #body><div>Body planeXl</div></template>
          </D1MotionTransform>
          <D1MotionTransform adaptive="plane2xl">
            <template #head><div>plane2xl</div></template>
            <template #body><div>Body plane2xl</div></template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll<HTMLElement>('.d1-motionTransform')
    await expect(roots.length).toBe(6)
    await expect(roots[0]).toHaveClass('d1-motionTransform--adaptive--planeAlways')
    await expect(roots[1]).toHaveClass('d1-motionTransform--adaptive--planeSm')
    await expect(roots[2]).toHaveClass('d1-motionTransform--adaptive--planeMd')
    await expect(roots[3]).toHaveClass('d1-motionTransform--adaptive--planeLg')
    await expect(roots[4]).toHaveClass('d1-motionTransform--adaptive--planeXl')
    await expect(roots[5]).toHaveClass('d1-motionTransform--adaptive--plane2xl')
  }
}
export const MotionTransformTestClickAndAutoClose: Story = {
  name: 'Тест: clickOpen и autoClose',
  render: () => ({
    components: { D1MotionTransform },
    setup() {
      const externalOpen: Ref<boolean> = ref(false)

      return {
        externalOpen
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <button class="wiki-storybook-button test-external-toggle" @click="externalOpen = !externalOpen">External Toggle</button>
          <D1MotionTransform v-model:open="externalOpen" :click-open="false">
            <template #head><div class="test-click-disabled-head">Click disabled head</div></template>
            <template #body><div>Opened externally</div></template>
          </D1MotionTransform>

          <D1MotionTransform :auto-close="false">
            <template #head><div class="test-autoclose-disabled-head">Auto close disabled head</div></template>
            <template #body="{ classes }">
              <div>
                <span>Body with manual close</span>
                <button :class="classes.close" class="wiki-storybook-button test-manual-close">Close</button>
              </div>
            </template>
          </D1MotionTransform>

          <div class="wiki-storybook-item--padding test-outside-area">Outside Area</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll<HTMLElement>('.d1-motionTransform')
    const externalButton = canvasElement.querySelector<HTMLButtonElement>('.test-external-toggle')
    const clickDisabledHead = canvasElement.querySelector<HTMLElement>('.test-click-disabled-head')
    const autoCloseHead = canvasElement.querySelector<HTMLElement>('.test-autoclose-disabled-head')
    const outsideArea = canvasElement.querySelector<HTMLElement>('.test-outside-area')

    await userEvent.click(clickDisabledHead!)
    await expect(roots[0]).toHaveAttribute('data-open', 'none')

    await userEvent.click(externalButton!)
    await waitFor(async () => {
      await expect(roots[0]).toHaveAttribute('data-open', 'open')
    })

    await userEvent.click(externalButton!)
    await waitFor(async () => {
      await expect(roots[0]).toHaveAttribute('data-open', 'none')
    })

    await userEvent.click(autoCloseHead!)
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'open')
    })

    await userEvent.click(outsideArea!)
    await expect(roots[1]).toHaveAttribute('data-open', 'open')

    const closeButton = canvasElement.querySelector<HTMLButtonElement>('.test-manual-close')
    await userEvent.click(closeButton!)
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformTestIgnoreTargets: Story = {
  name: 'Тест: ignore по HTMLElement Ref и ID-селектору',
  render: () => ({
    components: { D1MotionTransform },
    setup() {
      const ignoredElement: Ref<HTMLElement | undefined> = ref()

      return {
        ignoredElement
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div id="test-mt-ignore-id" class="wiki-storybook-item--padding">
            <button class="wiki-storybook-button test-ignore-id-btn">Ignored by ID Selector</button>
          </div>
          <div id="test-mt-ignore-ref" ref="ignoredElement" class="wiki-storybook-item--padding">
            <button class="wiki-storybook-button test-ignore-ref-btn">Ignored by Element Ref</button>
          </div>
          <div class="wiki-storybook-item--padding test-ignore-outside">Outside Close</div>

          <D1MotionTransform ignore="#test-mt-ignore-id">
            <template #head><div class="test-ignore-id-head">Ignore by #ID</div></template>
            <template #body><div>Body ID ignore</div></template>
          </D1MotionTransform>

          <D1MotionTransform :ignore="ignoredElement">
            <template #head><div class="test-ignore-ref-head">Ignore by Ref</div></template>
            <template #body><div>Body Ref ignore</div></template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll<HTMLElement>('.d1-motionTransform')
    const idHead = canvasElement.querySelector<HTMLElement>('.test-ignore-id-head')
    const refHead = canvasElement.querySelector<HTMLElement>('.test-ignore-ref-head')
    const idButton = canvasElement.querySelector<HTMLButtonElement>('.test-ignore-id-btn')
    const refButton = canvasElement.querySelector<HTMLButtonElement>('.test-ignore-ref-btn')
    const outsideTarget = canvasElement.querySelector<HTMLElement>('.test-ignore-outside')

    await userEvent.click(idHead!)
    await waitFor(async () => {
      await expect(roots[0]).toHaveAttribute('data-open', 'open')
    })
    await userEvent.click(idButton!)
    await expect(roots[0]).toHaveAttribute('data-open', 'open')
    await userEvent.click(outsideTarget!)
    await waitFor(async () => {
      await expect(roots[0]).toHaveAttribute('data-open', 'none')
    })

    await userEvent.click(refHead!)
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'open')
    })
    await userEvent.click(refButton!)
    await expect(roots[1]).toHaveAttribute('data-open', 'open')
    await userEvent.click(outsideTarget!)
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformTestDomAndTagBody: Story = {
  name: 'Тест: inDom, animationShow, tagBody и начальное открытие',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MotionTransform :in-dom="true" tag-body="article">
            <template #head><div class="test-indom-head">In-DOM Article Head</div></template>
            <template #body><div>Preserved Article Body</div></template>
          </D1MotionTransform>

          <D1MotionTransform :animation-show="false" :open="true" :auto-close="false">
            <template #head><div>Instant Initial Open</div></template>
            <template #body="{ classes }">
              <div>
                <span>Initially open body</span>
                <button :class="classes.close" class="wiki-storybook-button test-instant-close">Close Instant</button>
              </div>
            </template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll<HTMLElement>('.d1-motionTransform')
    const articleBody = roots[0].querySelector('.d1-motionTransform__body')
    await expect(roots[0]).toHaveAttribute('data-open', 'none')
    await expect(articleBody).toBeInTheDocument()
    await expect(articleBody?.tagName).toBe('ARTICLE')

    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'open')
    })
    const instantCloseButton = canvasElement.querySelector<HTMLButtonElement>('.test-instant-close')
    await userEvent.click(instantCloseButton!)
    await waitFor(async () => {
      await expect(roots[1]).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformTestSlotsAndAria: Story = {
  name: 'Тест: Слотовые свойства и ARIA-атрибуты',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <span id="test-mt-aria-label">Custom ARIA Label</span>
          <span id="test-mt-aria-desc">Custom ARIA Description</span>

          <D1MotionTransform
            aria-labelledby="test-mt-aria-label"
            aria-describedby="test-mt-aria-desc"
          >
            <template #head="{ isOpen, isShow, classes, idControl, idBody }">
              <div class="wiki-storybook-flex">
                <span class="test-slot-trigger">Head {{ isOpen }} {{ isShow }} {{ idControl }} {{ idBody }}</span>
                <span :class="classes.none" class="test-slot-none">Ignored Trigger</span>
              </div>
            </template>
            <template #body="{ classes }">
              <div>
                <span :class="classes.noneGlobal" class="test-slot-none-global">Global Non-closing Span</span>
                <button :class="classes.close" class="wiki-storybook-button test-slot-close">Close via slot</button>
              </div>
            </template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-motionTransform')
    const trigger = canvasElement.querySelector<HTMLElement>('.test-slot-trigger')
    const noneTrigger = canvasElement.querySelector<HTMLElement>('.test-slot-none')

    await userEvent.click(noneTrigger!)
    await expect(root).toHaveAttribute('data-open', 'none')

    await userEvent.click(trigger!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
      const body = canvasElement.querySelector<HTMLElement>('.d1-motionTransform__body')
      await expect(body).toHaveAttribute('role', 'region')
      await expect(body).toHaveAttribute('aria-labelledby', 'test-mt-aria-label')
      await expect(body).toHaveAttribute('aria-describedby', 'test-mt-aria-desc')
    })

    const closeButton = canvasElement.querySelector<HTMLButtonElement>('.test-slot-close')
    await userEvent.click(closeButton!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformTestExposeAndEvents: Story = {
  name: 'Тест: Программное управление (expose) и события',
  render: () => ({
    components: { D1MotionTransform },
    setup() {
      const motionTransformElement: Ref<MotionTransformExpose | undefined> = ref()
      const lastEventType: Ref<string> = ref('')
      const lastEventOpen: Ref<string> = ref('')

      const onTransform = (_event: Event | undefined, options: MotionTransformEmitOptions): void => {
        lastEventType.value = 'transform:' + options.type
      }

      const onTransformLite = (options: MotionTransformEmitOptions): void => {
        lastEventOpen.value = String(options.open)
      }

      return {
        motionTransformElement,
        lastEventType,
        lastEventOpen,
        onTransform,
        onTransformLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-btn-to-open" @click="motionTransformElement?.toOpen()">toOpen</button>
            <button class="wiki-storybook-button test-btn-to-close" @click="motionTransformElement?.toClose()">toClose</button>
            <button class="wiki-storybook-button test-btn-set-true" @click="motionTransformElement?.setOpen(true)">setOpenTrue</button>
            <button class="wiki-storybook-button test-btn-set-false" @click="motionTransformElement?.setOpen(false)">setOpenFalse</button>
            <button class="wiki-storybook-button test-btn-toggle" @click="motionTransformElement?.toggle()">toggle</button>
          </div>
          <div class="test-events-output">{{ lastEventType }}|{{ lastEventOpen }}</div>

          <D1MotionTransform
            ref="motionTransformElement"
            @transform="onTransform"
            @transform-lite="onTransformLite"
          >
            <template #head><div>Expose and Events Target</div></template>
            <template #body><div>Body controlled by expose API</div></template>
          </D1MotionTransform>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-motionTransform')
    const output = canvasElement.querySelector<HTMLElement>('.test-events-output')

    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-btn-to-open')!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
    })

    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-btn-to-close')!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })

    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-btn-set-true')!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
    })

    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-btn-set-false')!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })

    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-btn-toggle')!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
    })

    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-btn-toggle')!)
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })

    const head = canvasElement.querySelector<HTMLElement>('.d1-motionTransform__head')
    await userEvent.click(head!)
    await waitFor(async () => {
      await expect(output).toHaveTextContent('transform:head|true')
    })
    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
    })
  }
}
export const MotionTransformTestKeyboard: Story = {
  name: 'Тест: Доступность с клавиатуры',
  render: () => ({
    components: { D1MotionTransform },
    template: `
        
        <D1MotionTransform>
          <template #head><div class="wiki-storybook-item--padding">Keyboard focusable header</div></template>
          <template #body><div class="wiki-storybook-item--padding">Opened via Enter, closes via Escape</div></template>
        </D1MotionTransform>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector<HTMLElement>('.d1-motionTransform')
    const head = canvasElement.querySelector<HTMLElement>('.d1-motionTransform__head')

    await expect(head).toHaveAttribute('tabindex', '0')
    await expect(head).toHaveAttribute('role', 'button')
    await expect(head).toHaveAttribute('aria-controls')

    head!.focus()
    await userEvent.keyboard('{Enter}')
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'open')
      await expect(head).toHaveAttribute('aria-expanded', 'true')
    })

    await userEvent.keyboard('{Escape}')
    await waitFor(async () => {
      await expect(root).toHaveAttribute('data-open', 'none')
      await expect(head).toHaveAttribute('aria-expanded', 'false')
    })
  }
}
// :story-items [!] System label / Системная метка
