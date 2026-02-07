import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Scrollbar component properties
 *
 * Описания свойств компонента Scrollbar
 */
export const wikiDescriptionsScrollbar: StorybookComponentsDescriptionItem = {
  name: 'Scrollbar',
  description: {
    en: 'Custom scrollbar component for enhanced user experience',
    ru: 'Компонент кастомного скроллбара для улучшения пользовательского опыта'
  },
  possibilities: {
    en: [
      'custom scrollbar styling and appearance',
      'dynamic divider lines based on scroll position',
      'static divider lines at top and bottom',
      'visibility control for scrolling behavior',
      'inverse divider behavior options',
      'hide all divider lines functionality'
    ],
    ru: [
      'кастомная стилизация и внешний вид скроллбара',
      'динамические разделительные линии в зависимости от позиции скролла',
      'статичные разделительные линии сверху и снизу',
      'управление видимостью для поведения прокрутки',
      'опции инвертированного поведения разделителей',
      'функция скрытия всех разделительных линий'
    ]
  },
  render: `
      <D1Scrollbar
        class="wiki-storybook-item--widescreen wiki-storybook-item--squared--sm"
        v-bind="args"
      >
        <div class="wiki-storybook-scrollbar-content">
          <h3>Modern Web Interfaces and User Experience Design</h3>
          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

          <h4>Principles of Effective Design Implementation</h4>
          <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>

          <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

          <h4>Technical Implementation Considerations</h4>
          <p>When developing scrollbar components, it's crucial to consider rendering performance, especially when working with large datasets or dynamically generated content. Content virtualization, lazy loading strategies, and DOM operation optimization help ensure smooth performance even on less powerful devices. Memory management becomes particularly important in single-page applications where components may be mounted and unmounted frequently.</p>

          <p>Modern frameworks provide numerous tools for creating customizable scrollbars, but it's important to find the right balance between functionality and ease of use. The component should be easily integrable into existing projects while supporting various configuration options and customization possibilities. API design should be intuitive and follow established patterns within the framework ecosystem.</p>

          <h4>Future Trends and Accessibility</h4>
          <p>The future of web development is moving towards creating more inclusive and accessible interfaces, where every element, including scrollbars, contributes to improving the overall user experience. This includes support for screen readers, high contrast modes, and reduced motion preferences. Progressive enhancement ensures that the scrollbar functionality works across all user scenarios.</p>

          <p>Emerging technologies like CSS container queries and new scrolling APIs continue to expand the possibilities for creating more sophisticated scrolling experiences. The integration of these technologies with existing design systems requires careful planning and consideration of backward compatibility.</p>
        </div>
      </D1Scrollbar>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Scrollbar'} type={'scrollbar'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Scrollbar'} type={'emits'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Scrollbar v-bind="args" style="height: 128px">
    <h3>Modern Web Interfaces and User Experience Design</h3>
    <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

    <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

    <h4>Principles of Effective Design Implementation</h4>
    <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>

    <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>
  </Scrollbar>
</div>
    `,
    description: `
Scrollbar is a structural component that wraps content to provide custom scrolling behavior and visual indicators.
It is designed to handle overflow content within a fixed-height container, adding dynamic dividers (borders) that indicate scroll position.

**Key Features:**
1. **Scroll Indicators (Dividers):**
   - Automatically detects scroll position.
   - Displays a top divider when scrolled down.
   - Displays a bottom divider when there is more content below.
   - Configurable via props (e.g., \`divider\`, \`border\`).

2. **Layout:**
   - Renders as a block container (default \`div\`).
   - Must have a defined height or max-height (inherited or set) to enable scrolling.

3. **Usage:**
   - Essential for **Modals**, **Dropdowns**, and **Sidebars** where content length varies.
   - Provides visual cues to users that more content is available.

**Usage Examples:**

- **Basic Scroll Area:**
  \`<Scrollbar style="height: 200px">
     <p>Long content...</p>
   </Scrollbar>\`

- **With Custom Tag:**
  \`<Scrollbar tag="section" class="my-scroll-area">
     <List :list="items" />
   </Scrollbar>\`
    `
  }
}
