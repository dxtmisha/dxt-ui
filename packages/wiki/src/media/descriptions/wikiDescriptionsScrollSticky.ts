import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ScrollSticky component properties
 *
 * Описания свойств компонента ScrollSticky
 */
export const wikiDescriptionsScrollSticky: StorybookComponentsDescriptionItem = {
  name: 'ScrollSticky',
  description: {
    en: 'Helper component for horizontal scroll synchronization with sticky positioning',
    ru: 'Вспомогательный компонент для синхронизации горизонтальной прокрутки с липким позиционированием'
  },
  possibilities: {
    en: [
      'sticky horizontal scrollbar positioned at the bottom',
      'two-way scroll synchronization with a target container',
      'resize observation for element and window changes',
      'hide standard native scrollbar'
    ],
    ru: [
      'липкий горизонтальный скроллбар, расположенный внизу',
      'двусторонняя синхронизация прокрутки с целевым контейнером',
      'отслеживание изменений размеров элементов и окна',
      'скрытие стандартного системного скроллбара'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--padding">
        <div style="height: 320px;"/>
        <DesignComponent v-bind="args" style="max-width: 400px;">
          <div style="width: 1024px;">
            <h3>ScrollSticky Component Demo</h3>
            <p>This is a visualization demonstration of the scroll synchronization helper. The width of this area is set to 150% to trigger horizontal scrolling. The text below is long enough to exceed 1000px in height, allowing you to scroll down and observe the sticky horizontal scrollbar sync in real-time at the bottom of the viewport.</p>

            <h4>Understanding Scroll Synchronization</h4>
            <p>Scroll synchronization is a design pattern used when layout requirements force content to be wider than the available screen area. Typically, this occurs in complex data tables, comparative dashboards, or multi-column kanban boards. In these scenarios, the default browser scrollbar is only visible at the very bottom of the entire element. If the element is taller than the screen, the user must scroll all the way to the bottom just to scroll horizontally, which breaks the flow of interaction.</p>

            <p>The ScrollSticky component addresses this usability issue by rendering a secondary, custom horizontal scrollbar that adheres to the bottom of the viewport (or a specified container). It watches the target element's scroll and size properties. When the user scrolls the sticky scrollbar, the target element scrolls in lockstep. Conversely, scrolling the target element itself updates the position of the sticky scrollbar. This two-way communication is crucial for a fluid and predictable user experience.</p>

            <h4>Visual Indicators and Desktop Adaptability</h4>
            <p>A major consideration when implementing custom scroll synchronization is desktop platform compatibility. On touch-centric operating systems (like iOS or Android), scrollbars are overlay-based and typically transient, appearing only during active scroll gestures. However, on desktop operating systems (like Windows, macOS, or Linux), scrollbars can be classic, persistent visual elements that occupy layout space.</p>

            <p>ScrollSticky handles these differences gracefully. By hiding the native browser scrollbar on the target container and replacing it with a clean, custom indicator, it eliminates visual clutter. It also listens for element and window resize events, ensuring that the scrollbar width and thumb position remain perfectly synchronized even when the viewport is resized or when dynamic content alters the layout dimensions.</p>

            <h4>Technical Implementation Details</h4>
            <p>Under the hood, ScrollSticky utilizes a decoupled model separating logic from rendering. The core logic class tracks the reactive refs of both the main scrollable container and the custom sticky scrollbar. By binding a specialized event listener (EventRef) set to watch for both scroll-sync and resize events, it ensures immediate updates. The use of a ResizeObserver guarantees that any DOM layout changes (e.g. collapsing sidebars, window scaling) trigger an automatic recalculation of the scrollbar's dimensions.</p>

            <p>This approach prevents layout thrashing and ensures smooth rendering, even when handling deep or complex DOM hierarchies. The component does not intercept native scroll mechanics but rather observes and mirrors them, keeping performance high and maintaining compatibility with native device behaviors like momentum scrolling on trackpads.</p>

            <h4>Best Practices for Layout Integration</h4>
            <p>When integrating ScrollSticky into your design system, it is recommended to apply it to dense data views like tables and grid layouts. Ensure the outer container has a defined height boundary or is allowed to scale naturally within the page layout. Since the scrollbar sticks to the viewport bottom, it should not overlap critical action buttons or sticky footers. Design tokens should be utilized to customize the scrollbar height, tracks, and thumb colors to match the brand identity.</p>

            <p>Furthermore, developers should ensure that accessibility is not compromised. Although the visual scrollbar is custom, keyboard navigation (using arrow keys or Page Up/Down) on the target container must remain functional. By utilizing native scroll behaviors under the hood, ScrollSticky maintains full support for standard keyboard accessibility patterns.</p>
          </div>
        </DesignComponent>
        <div style="height: 320px;"/>
      </div>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ScrollSticky'} type={'scrollsticky'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ScrollSticky'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Sticky layout helper providing a synchronized horizontal scrollbar at the bottom of the viewport or container. Synchronizes the scroll position with a target scrollable container (e.g. table, wide grid) in two directions.
Includes automatic resize observation using ResizeObserver to ensure robust positioning and synchronization during window and container layout shifts.
    `,
    hide: true
  }
}
