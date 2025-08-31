import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Window from './D1Window.vue'
import { WindowWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
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

            <p>The component automatically handles complex scenarios such as viewport boundaries, scroll positioning, and responsive behavior across different screen sizes. Whether used for modal dialogs, dropdown menus, tooltips, or contextual panels, the window component adapts to various use cases while maintaining consistent behavior and appearance.</p>

            <h4>Key Features and Capabilities</h4>
            <p>The window system includes advanced features such as automatic positioning algorithms that prevent content from appearing outside viewport boundaries, smooth transition animations that enhance user experience, and comprehensive event handling for various interaction patterns including keyboard navigation and focus management.</p>

            <p>Integration with other components such as scrollbars and images is seamless, allowing for rich content presentation within window containers. The component supports both programmatic and declarative control patterns, making it suitable for different development approaches and architectural requirements.</p>

            <h4>Technical Architecture</h4>
            <p>Built with a modular composition-based architecture, the window component consists of multiple specialized subcomponents that handle specific aspects of functionality. This includes separate managers for positioning, events, styles, animations, and state persistence, ensuring maintainable and testable code.</p>

            <p>The component follows modern Vue.js patterns with reactive state management, composable APIs, and TypeScript support throughout. Performance is optimized through intelligent rendering strategies and minimal DOM manipulation, ensuring smooth operation even in complex applications with multiple concurrent windows.</p>
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
  })
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
            <h4>Static Mode Window</h4>
            <p>This window uses <code>staticMode: true</code>.</p>
            <p>Content displays immediately without animations or modal positioning.</p>

            <div class="wiki-storybook-info">
              <strong>Static mode features:</strong>
              <ul>
                <li>No animations</li>
                <li>Embedded in document flow</li>
                <li>Always visible</li>
              </ul>
            </div>
          </template>
        </D1Window>
    `
  })
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
          <D1Window axis="on" adaptive="menu" overElement=".axis-on-target">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: on)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = on</strong>
                <p>Window positions over the target element; scroll adjusts to keep it visible.</p>
                <ul style="max-height: 160px; overflow: auto; margin: 8px 0; padding-left: 20px;">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li class="axis-on-target"><strong>Focused item (target)</strong></li>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </div>
            </template>
          </D1Window>
        </div>
    `
  })
}
export const WindowVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Window },
    setup() {
      return {
        open: ref(false)
      }
    },
    template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <D1Window v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </D1Window>
    `
  })
}
// :story-items [!] System label / Системная метка
