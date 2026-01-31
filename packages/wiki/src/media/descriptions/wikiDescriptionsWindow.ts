import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Window component properties
 *
 * Описания свойств компонента Window
 */
export const wikiDescriptionsWindow: StorybookComponentsDescriptionItem = {
  name: 'Window',
  description: {
    en: 'Flexible modal and popup window component with advanced positioning and animation capabilities',
    ru: 'Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования и анимации'
  },
  possibilities: {
    en: [
      'modal and contextual window display modes',
      'intelligent positioning system with automatic collision detection',
      'smooth opening and closing animations with customizable transitions',
      'static mode for embedded window components',
      'persistent window state management',
      'automatic scroll handling and content overflow management',
      'keyboard navigation and accessibility support',
      'event-driven architecture with comprehensive lifecycle hooks',
      'integration with scrollbar and image components',
      'responsive design with mobile and desktop optimization'
    ],
    ru: [
      'режимы отображения модальных и контекстных окон',
      'интеллектуальная система позиционирования с автоматическим определением коллизий',
      'плавные анимации открытия и закрытия с настраиваемыми переходами',
      'статический режим для встроенных компонентов окон',
      'управление постоянным состоянием окна',
      'автоматическая обработка прокрутки и управление переполнением контента',
      'навигация с клавиатуры и поддержка доступности',
      'событийно-ориентированная архитектура с комплексными хуками жизненного цикла',
      'интеграция с компонентами скроллбара и изображений',
      'адаптивный дизайн с оптимизацией для мобильных устройств и десктопа'
    ]
  },
  import: [
    'import { ref } from \'vue\''
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
      </DesignComponent>
    `,
  stories: [
    {
      id: 'WindowStaticMode',
      name: {
        en: 'Static Mode',
        ru: 'Статический режим'
      },
      template: `
        <DesignComponent :staticMode="true" adaptive="static">
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
        </DesignComponent>
      `
    },
    {
      id: 'WindowAxis',
      name: {
        en: 'Axis positioning',
        ru: 'Позиционирование по оси'
      },
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
          <DesignComponent axis="on" adaptive="menu" overElement=".axis-on-target">
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
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'WindowVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        open: ref(false)
      }
      `,
      template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
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
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'emits-include'}/>
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
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
    description: `
**Note:** This is a low-level component. Use it only if specialized components like \`Modal\`, \`Dialog\`, or \`Menu\` do not fit your requirements.

Window is a versatile container component used for Modals, Popups, Dropdowns, and Cards.
It automatically handles z-index, focus management, teleportation, and scroll locking.

**When to use:**
1. **Modal/Dialog:** When a centered box overlays the page content. Use default props.
2. **Dropdown/Popover:** When a box appears next to a button/trigger. Use \`axis="y"\` (vertical) or \`axis="x"\` (horizontal).
3. **Select Menu:** When a list overlays the trigger exactly. Use \`axis="on"\`.
4. **Card/Panel:** When you need the visual style of a window but embedded in the page flow. Use \`staticMode\`.

**Key Features:**
- **Structure:**
  - \`#control\`: The trigger element (button, link). Bind \`binds\` to this element to enable automatic toggling.
  - \`#title\`: The header area of the window.
  - \`#default\`: The main content area (automatically wrapped in a Scrollbar).
  - \`#footer\`: The bottom area for action buttons.

- **Positioning (\`axis\`):**
  - \`undefined\` (default): Centered modal.
  - \`y\`: Opens vertically relative to the trigger (like a standard dropdown).
  - \`x\`: Opens horizontally relative to the trigger (like a nested menu).
  - \`on\`: Overlays the trigger element.

- **Behavior:**
  - \`staticMode\`: Disables teleportation and absolute positioning, rendering it as a regular block.
  - \`persistent\`: Prevents closing when clicking outside or pressing Escape.
  - \`closeButton\`: Automatically adds a close button in the top-right corner.

**Example:**
\`<Window axis="y">\` creates a dropdown menu.
\`<Window :open="true">\` creates a modal dialog.
    `
  }
}
