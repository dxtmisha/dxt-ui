import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MotionSticky from './D1MotionSticky.vue'
import { MotionStickyWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref, type Ref } from 'vue'
import { expect, within, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MotionSticky',
  component: D1MotionSticky,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MotionStickyWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MotionStickyWikiStorybook.getWiki(),
  args: MotionStickyWikiStorybook.getValues()
} satisfies Meta<typeof D1MotionSticky>

export default meta

type Story = StoryObj<typeof meta>

export const MotionSticky: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MotionSticky },
    setup: () => ({ args }),
    template: `
      <div id="design-sticky-demo" class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--borderNone wiki-storybook-item--overflowAuto">
        <p>
          In today's digital landscape, creating high-quality user interfaces has
          become a critical aspect of web application development. User interface
          components must not only be functional but also provide intuitive
          interaction patterns that enhance the overall user experience. The
          evolution of web technologies has enabled developers to create more
          sophisticated and engaging interfaces.
        </p>

        <D1MotionSticky
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
          v-bind="args"
          style="position: sticky; top: 0;"
        >
          Sticky Header
        </D1MotionSticky>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information while maintaining context and orientation within
          the document structure. Modern scrollbars should be adaptive, responsive,
          and visually appealing while providing consistent behavior across different
          platforms and devices.
        </p>
        <p>
          Effective scrollbar design takes into account multiple factors ranging
          from performance optimization to accessibility compliance. It's essential
          to ensure smooth animations, proper handling of various input devices, and
          comprehensive keyboard navigation support. Cross-browser compatibility remains
          a top priority, especially when dealing with custom scrollbar implementations
          that need to work consistently across different rendering engines.
        </p>
        <p>
          Users expect scrollbars to work predictably and uniformly throughout
          all parts of an application. This requires thorough testing and optimization
          for various usage scenarios, including mobile devices, desktop computers,
          and touch-enabled interfaces. The component must handle edge cases gracefully
          and provide appropriate feedback for user interactions.
        </p>
      </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-motionSticky')
    await expect(component).toBeInTheDocument()
    await expect(component?.tagName).toBe('DIV')
    await expect(component).toHaveTextContent('Sticky Header')

    await waitFor(() => {
      expect(component?.dataset.sticky).toBeDefined()
      expect(component?.dataset.stickyScroll).toBeDefined()
    })
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MotionStickyBasic: Story = {
  name: 'Базовое использование и класс активности',
  render: () => ({
    components: { D1MotionSticky },
    setup() {
      const scrollContainer: Ref<HTMLElement | undefined> = ref()
      const currentStickyState: Ref<boolean> = ref(false)

      const scrollToSticky = (): void => {
        if (scrollContainer.value) {
          scrollContainer.value.scrollTop = 180
        }
      }

      const scrollToTop = (): void => {
        if (scrollContainer.value) {
          scrollContainer.value.scrollTop = 0
        }
      }

      const onSticky = (status: boolean): void => {
        currentStickyState.value = status
      }

      return {
        scrollContainer,
        currentStickyState,
        scrollToSticky,
        scrollToTop,
        onSticky
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="scrollToSticky">Scroll to Sticky</button>
            <button class="wiki-storybook-button" @click="scrollToTop">Scroll to Top</button>
            <div class="wiki-storybook-card">Sticky active: {{ currentStickyState }}</div>
          </div>

          <div
            id="motion-sticky-basic-scroll"
            ref="scrollContainer"
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
            style="height: 220px;"
          >
            <div style="height: 110px;">Scroll down to stick the header at the top boundary.</div>
            <D1MotionSticky
              element-scroll="#motion-sticky-basic-scroll"
              class-activity="is-sticky-active"
              class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
              style="position: sticky; top: 0;"
              @sticky="onSticky"
            >
              Sticky Header ({{ currentStickyState ? 'Pinned' : 'Normal' }})
            </D1MotionSticky>
            <div style="height: 420px;">
              Scrollable content area below the sticky element.
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const scrollBox = canvasElement.querySelector<HTMLElement>('#motion-sticky-basic-scroll')
    const component = canvasElement.querySelector<HTMLElement>('.d1-motionSticky')
    const statusCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
    const scrollToStickyButton = canvas.getByRole('button', { name: 'Scroll to Sticky' })
    const scrollToTopButton = canvas.getByRole('button', { name: 'Scroll to Top' })
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')

    if (isJsdom && scrollBox && component) {
      scrollBox.getBoundingClientRect = () => ({ top: 0, bottom: 220, left: 0, right: 400, width: 400, height: 220, x: 0, y: 0, toJSON: () => ({}) })
      component.getBoundingClientRect = () => {
        const top = Math.max(0, 110 - scrollBox.scrollTop)
        return { top, bottom: top + 40, left: 0, right: 400, width: 400, height: 40, x: 0, y: top, toJSON: () => ({}) }
      }
      scrollBox.dispatchEvent(new Event('scroll'))
    }

    await expect(component).toBeInTheDocument()

    await waitFor(() => {
      expect(component?.dataset.sticky).toBe('none')
      expect(component?.dataset.stickyScroll).toBe('zero')
      expect(component).not.toHaveClass('is-sticky-active')
      expect(statusCard).toHaveTextContent('Sticky active: false')
    })

    await step('Scroll container down so element becomes sticky', async () => {
      await userEvent.click(scrollToStickyButton)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(component?.dataset.sticky).toBe('sticky')
        expect(component?.dataset.stickyScroll).toBe('active')
        expect(component).toHaveClass('is-sticky-active')
        expect(statusCard).toHaveTextContent('Sticky active: true')
      })
    })

    await step('Scroll container back to top so element unsticks', async () => {
      await userEvent.click(scrollToTopButton)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(component?.dataset.sticky).toBe('none')
        expect(component?.dataset.stickyScroll).toBe('zero')
        expect(component).not.toHaveClass('is-sticky-active')
        expect(statusCard).toHaveTextContent('Sticky active: false')
      })
    })
  }
}
export const MotionStickyTag: Story = {
  name: 'Пользовательский HTML-тег',
  render: () => ({
    components: { D1MotionSticky },
    template: `
        
        <div class="wiki-storybook-group">
          <div
            id="motion-sticky-tag-header-scroll"
            class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
            style="height: 180px;"
          >
            <div style="height: 80px;">Container with header tag</div>
            <D1MotionSticky
              tag="header"
              element-scroll="#motion-sticky-tag-header-scroll"
              class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--blue"
              style="position: sticky; top: 0;"
            >
              Sticky &lt;header&gt;
            </D1MotionSticky>
            <div style="height: 300px;">Scrollable body</div>
          </div>

          <div
            id="motion-sticky-tag-nav-scroll"
            class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
            style="height: 180px;"
          >
            <div style="height: 80px;">Container with nav tag</div>
            <D1MotionSticky
              tag="nav"
              element-scroll="#motion-sticky-tag-nav-scroll"
              class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
              style="position: sticky; top: 0;"
            >
              Sticky &lt;nav&gt;
            </D1MotionSticky>
            <div style="height: 300px;">Scrollable body</div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const components = canvasElement.querySelectorAll<HTMLElement>('.d1-motionSticky')
    const headerScroll = canvasElement.querySelector<HTMLElement>('#motion-sticky-tag-header-scroll')
    const navScroll = canvasElement.querySelector<HTMLElement>('#motion-sticky-tag-nav-scroll')
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')

    if (isJsdom && headerScroll && navScroll && components.length === 2) {
      headerScroll.getBoundingClientRect = () => ({ top: 0, bottom: 180, left: 0, right: 400, width: 400, height: 180, x: 0, y: 0, toJSON: () => ({}) })
      navScroll.getBoundingClientRect = () => ({ top: 0, bottom: 180, left: 0, right: 400, width: 400, height: 180, x: 0, y: 0, toJSON: () => ({}) })
      components[0].getBoundingClientRect = () => ({ top: 80, bottom: 120, left: 0, right: 400, width: 400, height: 40, x: 0, y: 80, toJSON: () => ({}) })
      components[1].getBoundingClientRect = () => ({ top: 80, bottom: 120, left: 0, right: 400, width: 400, height: 40, x: 0, y: 80, toJSON: () => ({}) })
      headerScroll.dispatchEvent(new Event('scroll'))
      navScroll.dispatchEvent(new Event('scroll'))
    }

    await expect(components.length).toBe(2)

    await expect(components[0].tagName).toBe('HEADER')
    await expect(components[1].tagName).toBe('NAV')

    await waitFor(() => {
      expect(components[0].dataset.sticky).toBe('none')
      expect(components[0].dataset.stickyScroll).toBe('zero')
      expect(components[1].dataset.sticky).toBe('none')
      expect(components[1].dataset.stickyScroll).toBe('zero')
    })
  }
}
export const MotionStickyEventSticky: Story = {
  name: 'Событие статуса прикрепления',
  render: () => ({
    components: { D1MotionSticky },
    setup() {
      const scrollContainer: Ref<HTMLElement | undefined> = ref()
      const stickyHistory: Ref<boolean[]> = ref([])

      const onSticky = (status: boolean): void => {
        stickyHistory.value = [...stickyHistory.value, status]
      }

      const scrollToSticky = (): void => {
        if (scrollContainer.value) {
          scrollContainer.value.scrollTop = 180
        }
      }

      const scrollToTop = (): void => {
        if (scrollContainer.value) {
          scrollContainer.value.scrollTop = 0
        }
      }

      return {
        scrollContainer,
        stickyHistory,
        onSticky,
        scrollToSticky,
        scrollToTop
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="scrollToSticky">Trigger Sticky</button>
            <button class="wiki-storybook-button" @click="scrollToTop">Reset Scroll</button>
            <div class="wiki-storybook-card">Events: {{ stickyHistory.join(', ') }}</div>
          </div>

          <div
            id="motion-sticky-event-scroll"
            ref="scrollContainer"
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
            style="height: 200px;"
          >
            <div style="height: 100px;">Initial non-sticky area</div>
            <D1MotionSticky
              element-scroll="#motion-sticky-event-scroll"
              class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--red"
              style="position: sticky; top: 0;"
              @sticky="onSticky"
            >
              Event Monitored Header
            </D1MotionSticky>
            <div style="height: 360px;">Scrollable area for event testing</div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const scrollBox = canvasElement.querySelector<HTMLElement>('#motion-sticky-event-scroll')
    const component = canvasElement.querySelector<HTMLElement>('.d1-motionSticky')
    const statusCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
    const triggerButton = canvas.getByRole('button', { name: 'Trigger Sticky' })
    const resetButton = canvas.getByRole('button', { name: 'Reset Scroll' })
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')

    if (isJsdom && scrollBox && component) {
      scrollBox.getBoundingClientRect = () => ({ top: 0, bottom: 200, left: 0, right: 400, width: 400, height: 200, x: 0, y: 0, toJSON: () => ({}) })
      component.getBoundingClientRect = () => {
        const top = Math.max(0, 100 - scrollBox.scrollTop)
        return { top, bottom: top + 40, left: 0, right: 400, width: 400, height: 40, x: 0, y: top, toJSON: () => ({}) }
      }
      scrollBox.dispatchEvent(new Event('scroll'))
    }

    await waitFor(() => {
      expect(component?.dataset.sticky).toBe('none')
      expect(statusCard).toHaveTextContent('Events: false')
    })

    await step('Emit sticky(true) on scroll down', async () => {
      await userEvent.click(triggerButton)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(component?.dataset.sticky).toBe('sticky')
        expect(statusCard).toHaveTextContent('Events: false, true')
      })
    })

    await step('Emit sticky(false) on scroll reset', async () => {
      await userEvent.click(resetButton)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(component?.dataset.sticky).toBe('none')
        expect(statusCard).toHaveTextContent('Events: false, true, false')
      })
    })
  }
}
export const MotionStickySlotDefault: Story = {
  name: 'Содержимое слота по умолчанию',
  render: () => ({
    components: { D1MotionSticky },
    template: `
        
        <div
          id="motion-sticky-slot-scroll"
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
          style="height: 200px;"
        >
          <div style="height: 90px;">Scroll down to inspect the sticky slot content</div>
          <D1MotionSticky
            element-scroll="#motion-sticky-slot-scroll"
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
            style="position: sticky; top: 0;"
          >
            <div class="wiki-storybook-flex-align-center">
              <strong class="slot-title">Section Header</strong>
              <span class="slot-badge">Default Slot</span>
            </div>
          </D1MotionSticky>
          <div style="height: 340px;">Content below the slotted sticky header</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-motionSticky')
    await expect(component).toBeInTheDocument()
    await expect(component?.querySelector('.slot-title')).toHaveTextContent('Section Header')
    await expect(component?.querySelector('.slot-badge')).toHaveTextContent('Default Slot')
  }
}
export const MotionStickyTestElementScroll: Story = {
  name: 'Тест: Цели elementScroll (селектор, HTMLElement, Window)',
  render: () => ({
    components: { D1MotionSticky },
    setup() {
      const selectorContainer: Ref<HTMLElement | undefined> = ref()
      const elementContainer: Ref<HTMLElement | undefined> = ref()
      const windowTarget: Window | undefined = typeof window !== 'undefined' ? window : undefined

      const scrollBothToSticky = (): void => {
        if (selectorContainer.value) {
          selectorContainer.value.scrollTop = 180
        }
        if (elementContainer.value) {
          elementContainer.value.scrollTop = 180
        }
      }

      const scrollBothToTop = (): void => {
        if (selectorContainer.value) {
          selectorContainer.value.scrollTop = 0
        }
        if (elementContainer.value) {
          elementContainer.value.scrollTop = 0
        }
      }

      return {
        selectorContainer,
        elementContainer,
        windowTarget,
        scrollBothToSticky,
        scrollBothToTop
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="scrollBothToSticky">Scroll Containers Down</button>
            <button class="wiki-storybook-button" @click="scrollBothToTop">Scroll Containers Up</button>
          </div>

          <div class="wiki-storybook-group">
            <div
              id="test-sticky-scroll-selector"
              ref="selectorContainer"
              class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
              style="height: 180px;"
            >
              <div class="wiki-storybook-item__label">selector (#id)</div>
              <div style="height: 90px;">Spacer before selector sticky</div>
              <D1MotionSticky
                element-scroll="#test-sticky-scroll-selector"
                class-activity="test-selector-active"
                class="test-sticky-selector wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
                style="position: sticky; top: 0;"
              >
                Selector Sticky
              </D1MotionSticky>
              <div style="height: 340px;">Spacer after selector sticky</div>
            </div>

            <div
              ref="elementContainer"
              class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
              style="height: 180px;"
            >
              <div class="wiki-storybook-item__label">HTMLElement ref</div>
              <div style="height: 90px;">Spacer before element ref sticky</div>
              <D1MotionSticky
                :element-scroll="elementContainer"
                class-activity="test-element-active"
                class="test-sticky-element wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--blue"
                style="position: sticky; top: 0;"
              >
                HTMLElement Sticky
              </D1MotionSticky>
              <div style="height: 340px;">Spacer after element ref sticky</div>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--overflowVisible wiki-storybook-item--padding" style="height: auto;">
              <div class="wiki-storybook-item__label">explicit Window</div>
              <D1MotionSticky
                :element-scroll="windowTarget"
                class="test-sticky-window wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-dummy--color--red"
                style="position: sticky; top: 0;"
              >
                Window Target Sticky
              </D1MotionSticky>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--overflowVisible wiki-storybook-item--padding" style="height: auto;">
              <div class="wiki-storybook-item__label">default (omitted elementScroll)</div>
              <D1MotionSticky
                class="test-sticky-default wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
                style="position: sticky; top: 0;"
              >
                Default Window Sticky
              </D1MotionSticky>
            </div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const selectorBox = canvasElement.querySelector<HTMLElement>('#test-sticky-scroll-selector')
    const selectorSticky = canvasElement.querySelector<HTMLElement>('.test-sticky-selector')
    const elementSticky = canvasElement.querySelector<HTMLElement>('.test-sticky-element')
    const elementBox = elementSticky?.parentElement
    const windowSticky = canvasElement.querySelector<HTMLElement>('.test-sticky-window')
    const defaultSticky = canvasElement.querySelector<HTMLElement>('.test-sticky-default')
    const scrollDownButton = canvas.getByRole('button', { name: 'Scroll Containers Down' })
    const scrollUpButton = canvas.getByRole('button', { name: 'Scroll Containers Up' })
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')

    if (isJsdom && selectorBox && selectorSticky && elementBox && elementSticky) {
      selectorBox.getBoundingClientRect = () => ({ top: 0, bottom: 180, left: 0, right: 400, width: 400, height: 180, x: 0, y: 0, toJSON: () => ({}) })
      selectorSticky.getBoundingClientRect = () => {
        const top = Math.max(0, 90 - selectorBox.scrollTop)
        return { top, bottom: top + 40, left: 0, right: 400, width: 400, height: 40, x: 0, y: top, toJSON: () => ({}) }
      }
      elementBox.getBoundingClientRect = () => ({ top: 0, bottom: 180, left: 0, right: 400, width: 400, height: 180, x: 0, y: 0, toJSON: () => ({}) })
      elementSticky.getBoundingClientRect = () => {
        const top = Math.max(0, 90 - elementBox.scrollTop)
        return { top, bottom: top + 40, left: 0, right: 400, width: 400, height: 40, x: 0, y: top, toJSON: () => ({}) }
      }
      selectorBox.dispatchEvent(new Event('scroll'))
      elementBox.dispatchEvent(new Event('scroll'))
    }

    await expect(selectorSticky).toBeInTheDocument()
    await expect(elementSticky).toBeInTheDocument()
    await expect(windowSticky).toBeInTheDocument()
    await expect(defaultSticky).toBeInTheDocument()

    await waitFor(() => {
      expect(selectorSticky?.dataset.sticky).toBe('none')
      expect(selectorSticky?.dataset.stickyScroll).toBe('zero')
      expect(elementSticky?.dataset.sticky).toBe('none')
      expect(elementSticky?.dataset.stickyScroll).toBe('zero')
      expect(windowSticky?.dataset.sticky).toBeDefined()
      expect(windowSticky?.dataset.stickyScroll).toBeDefined()
      expect(defaultSticky?.dataset.sticky).toBeDefined()
      expect(defaultSticky?.dataset.stickyScroll).toBeDefined()
    })

    await step('Scroll selector and HTMLElement containers down', async () => {
      await userEvent.click(scrollDownButton)
      if (isJsdom) {
        selectorBox?.dispatchEvent(new Event('scroll'))
        elementBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(selectorSticky?.dataset.sticky).toBe('sticky')
        expect(selectorSticky?.dataset.stickyScroll).toBe('active')
        expect(selectorSticky).toHaveClass('test-selector-active')

        expect(elementSticky?.dataset.sticky).toBe('sticky')
        expect(elementSticky?.dataset.stickyScroll).toBe('active')
        expect(elementSticky).toHaveClass('test-element-active')
      })
    })

    await step('Scroll selector and HTMLElement containers back to top', async () => {
      await userEvent.click(scrollUpButton)
      if (isJsdom) {
        selectorBox?.dispatchEvent(new Event('scroll'))
        elementBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(selectorSticky?.dataset.sticky).toBe('none')
        expect(selectorSticky?.dataset.stickyScroll).toBe('zero')
        expect(selectorSticky).not.toHaveClass('test-selector-active')

        expect(elementSticky?.dataset.sticky).toBe('none')
        expect(elementSticky?.dataset.stickyScroll).toBe('zero')
        expect(elementSticky).not.toHaveClass('test-element-active')
      })
    })
  }
}
export const MotionStickyTestClassActivityAndDataset: Story = {
  name: 'Тест: classActivity, dataset-атрибуты и дедупликация события sticky',
  render: () => ({
    components: { D1MotionSticky },
    setup() {
      const scrollContainer: Ref<HTMLElement | undefined> = ref()
      const stickyEmitCount: Ref<number> = ref(0)
      const lastStickyStatus: Ref<string> = ref('unset')

      const onSticky = (status: boolean): void => {
        stickyEmitCount.value += 1
        lastStickyStatus.value = String(status)
      }

      const scrollToOffset = (offset: number): void => {
        if (scrollContainer.value) {
          scrollContainer.value.scrollTop = offset
        }
      }

      return {
        scrollContainer,
        stickyEmitCount,
        lastStickyStatus,
        onSticky,
        scrollToOffset
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="scrollToOffset(150)">Scroll 150</button>
            <button class="wiki-storybook-button" @click="scrollToOffset(240)">Scroll 240</button>
            <button class="wiki-storybook-button" @click="scrollToOffset(0)">Scroll 0</button>
            <div class="wiki-storybook-card">Count: {{ stickyEmitCount }} | Last: {{ lastStickyStatus }}</div>
          </div>

          <div
            id="test-sticky-class-dataset-scroll"
            ref="scrollContainer"
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
            style="height: 260px;"
          >
            <div style="height: 100px;">Spacer before sticky elements</div>
            <D1MotionSticky
              element-scroll="#test-sticky-class-dataset-scroll"
              class-activity="test-sticky-active"
              class="test-sticky-with-class wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--green"
              style="position: sticky; top: 0; height: 40px; padding: 8px 16px;"
              @sticky="onSticky"
            >
              With classActivity
            </D1MotionSticky>
            <div style="height: 24px;" />
            <D1MotionSticky
              element-scroll="#test-sticky-class-dataset-scroll"
              class="test-sticky-without-class wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
              style="position: sticky; top: 0; height: 40px; padding: 8px 16px;"
            >
              Without classActivity
            </D1MotionSticky>
            <div style="height: 460px;">Bottom spacer</div>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const scrollBox = canvasElement.querySelector<HTMLElement>('#test-sticky-class-dataset-scroll')
    const withClassSticky = canvasElement.querySelector<HTMLElement>('.test-sticky-with-class')
    const withoutClassSticky = canvasElement.querySelector<HTMLElement>('.test-sticky-without-class')
    const statusCard = canvasElement.querySelector<HTMLElement>('.wiki-storybook-card')
    const scroll150Button = canvas.getByRole('button', { name: 'Scroll 150' })
    const scroll240Button = canvas.getByRole('button', { name: 'Scroll 240' })
    const scroll0Button = canvas.getByRole('button', { name: 'Scroll 0' })
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')

    if (isJsdom && scrollBox && withClassSticky && withoutClassSticky) {
      scrollBox.getBoundingClientRect = () => ({ top: 0, bottom: 260, left: 0, right: 400, width: 400, height: 260, x: 0, y: 0, toJSON: () => ({}) })
      withClassSticky.getBoundingClientRect = () => {
        const top = Math.max(0, 100 - scrollBox.scrollTop)
        return { top, bottom: top + 40, left: 0, right: 400, width: 400, height: 40, x: 0, y: top, toJSON: () => ({}) }
      }
      withoutClassSticky.getBoundingClientRect = () => {
        const top = Math.max(0, 164 - scrollBox.scrollTop)
        return { top, bottom: top + 40, left: 0, right: 400, width: 400, height: 40, x: 0, y: top, toJSON: () => ({}) }
      }
      scrollBox.dispatchEvent(new Event('scroll'))
    }

    await waitFor(() => {
      expect(withClassSticky?.dataset.sticky).toBe('none')
      expect(withClassSticky?.dataset.stickyScroll).toBe('zero')
      expect(withClassSticky).not.toHaveClass('test-sticky-active')

      expect(withoutClassSticky?.dataset.sticky).toBe('none')
      expect(withoutClassSticky?.dataset.stickyScroll).toBe('zero')

      expect(statusCard).toHaveTextContent('Count: 1 | Last: false')
    })

    await step('Scroll to 150 to activate first sticky element', async () => {
      await userEvent.click(scroll150Button)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(withClassSticky?.dataset.sticky).toBe('sticky')
        expect(withClassSticky?.dataset.stickyScroll).toBe('active')
        expect(withClassSticky).toHaveClass('test-sticky-active')
        expect(statusCard).toHaveTextContent('Count: 2 | Last: true')
      })
    })

    await step('Scroll further to 240 without duplicating sticky(true) event', async () => {
      await userEvent.click(scroll240Button)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(withClassSticky?.dataset.sticky).toBe('sticky')
        expect(withClassSticky?.dataset.stickyScroll).toBe('active')
        expect(withoutClassSticky?.dataset.sticky).toBe('sticky')
        expect(withoutClassSticky?.dataset.stickyScroll).toBe('active')
        expect(statusCard).toHaveTextContent('Count: 2 | Last: true')
      })
    })

    await step('Scroll back to 0 to reset both elements and emit sticky(false)', async () => {
      await userEvent.click(scroll0Button)
      if (isJsdom) {
        scrollBox?.dispatchEvent(new Event('scroll'))
      }
      await waitFor(() => {
        expect(withClassSticky?.dataset.sticky).toBe('none')
        expect(withClassSticky?.dataset.stickyScroll).toBe('zero')
        expect(withClassSticky).not.toHaveClass('test-sticky-active')

        expect(withoutClassSticky?.dataset.sticky).toBe('none')
        expect(withoutClassSticky?.dataset.stickyScroll).toBe('zero')

        expect(statusCard).toHaveTextContent('Count: 3 | Last: false')
      })
    })
  }
}
export const MotionStickyTestTagsAndSlots: Story = {
  name: 'Тест: Варианты tag, объединение атрибутов и слот default',
  render: () => ({
    components: { D1MotionSticky },
    template: `
        
        <div
          id="test-sticky-tags-scroll"
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto wiki-storybook-item--padding"
          style="height: 240px;"
        >
          <div style="height: 60px;">Spacer</div>
          <D1MotionSticky
            element-scroll="#test-sticky-tags-scroll"
            class="test-tag-default custom-merged-class"
            data-custom="default-div"
            style="position: sticky; top: 0;"
          >
            <span class="slot-marker">Default div slot</span>
          </D1MotionSticky>
          <D1MotionSticky
            tag="header"
            element-scroll="#test-sticky-tags-scroll"
            class="test-tag-header"
            data-custom="header-tag"
            style="position: sticky; top: 0;"
          >
            <span class="slot-marker">Header slot</span>
          </D1MotionSticky>
          <D1MotionSticky
            tag="section"
            element-scroll="#test-sticky-tags-scroll"
            class="test-tag-section"
            data-custom="section-tag"
            style="position: sticky; top: 0;"
          >
            <span class="slot-marker">Section slot</span>
          </D1MotionSticky>
          <D1MotionSticky
            tag="aside"
            element-scroll="#test-sticky-tags-scroll"
            class="test-tag-aside"
            data-custom="aside-tag"
            style="position: sticky; top: 0;"
          >
            <span class="slot-marker">Aside slot</span>
          </D1MotionSticky>
          <div style="height: 360px;">Bottom spacer</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const defaultElement = canvasElement.querySelector<HTMLElement>('.test-tag-default')
    const headerElement = canvasElement.querySelector<HTMLElement>('.test-tag-header')
    const sectionElement = canvasElement.querySelector<HTMLElement>('.test-tag-section')
    const asideElement = canvasElement.querySelector<HTMLElement>('.test-tag-aside')

    await expect(defaultElement?.tagName).toBe('DIV')
    await expect(defaultElement).toHaveClass('d1-motionSticky')
    await expect(defaultElement).toHaveClass('custom-merged-class')
    await expect(defaultElement).toHaveAttribute('data-custom', 'default-div')
    await expect(defaultElement?.querySelector('.slot-marker')).toHaveTextContent('Default div slot')

    await expect(headerElement?.tagName).toBe('HEADER')
    await expect(headerElement).toHaveAttribute('data-custom', 'header-tag')
    await expect(headerElement?.querySelector('.slot-marker')).toHaveTextContent('Header slot')

    await expect(sectionElement?.tagName).toBe('SECTION')
    await expect(sectionElement).toHaveAttribute('data-custom', 'section-tag')
    await expect(sectionElement?.querySelector('.slot-marker')).toHaveTextContent('Section slot')

    await expect(asideElement?.tagName).toBe('ASIDE')
    await expect(asideElement).toHaveAttribute('data-custom', 'aside-tag')
    await expect(asideElement?.querySelector('.slot-marker')).toHaveTextContent('Aside slot')

    const tagsScrollBox = canvasElement.querySelector<HTMLElement>('#test-sticky-tags-scroll')
    const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
    if (isJsdom && tagsScrollBox && defaultElement && headerElement && sectionElement && asideElement) {
      tagsScrollBox.getBoundingClientRect = () => ({ top: 0, bottom: 240, left: 0, right: 400, width: 400, height: 240, x: 0, y: 0, toJSON: () => ({}) })
      for (const el of [defaultElement, headerElement, sectionElement, asideElement]) {
        el.getBoundingClientRect = () => ({ top: 60, bottom: 100, left: 0, right: 400, width: 400, height: 40, x: 0, y: 60, toJSON: () => ({}) })
      }
      tagsScrollBox.dispatchEvent(new Event('scroll'))
    }

    await waitFor(() => {
      expect(defaultElement?.dataset.sticky).toBe('none')
      expect(headerElement?.dataset.sticky).toBe('none')
      expect(sectionElement?.dataset.sticky).toBe('none')
      expect(asideElement?.dataset.sticky).toBe('none')
    })
  }
}
// :story-items [!] System label / Системная метка
