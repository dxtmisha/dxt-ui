import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Window from './D1Window.vue'
import { WindowWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
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
// :story-items [!] System label / Системная метка
