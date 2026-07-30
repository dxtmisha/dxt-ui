import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Headroom component properties
 *
 * Описания свойств компонента Headroom
 */
export const wikiDescriptionsHeadroom: StorybookComponentsDescriptionItem = {
  name: 'Headroom',
  description: {
    en: 'A component for sticky header position management, scroll calculations, transformation metrics, and disappears mode offset updates.',
    ru: 'Компонент для управления липким положением шапки, вычислениями прокрутки, метриками трансформации и обновлением смещения в режиме disappears.'
  },
  possibilities: {
    en: [
      'scroll tracking and position calculation',
      'sticky status detection and reactive updates',
      'transform threshold and percentage calculations',
      'disappears scroll mode with auto-hiding behavior',
      'customizable target HTML tag and element binding'
    ],
    ru: [
      'отслеживание прокрутки и вычисление позиции',
      'определение липкого статуса и реактивные обновления',
      'вычисление порога и процента трансформации',
      'режим прокрутки disappears с автоматическим скрытием',
      'настройка целевого HTML-тега и привязка к элементу'
    ]
  },
  import: [],
  render: `
      <div
        id="wiki-descriptions-headroom"
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto"
      >
        <DesignComponent
          scrollElement="#wiki-descriptions-headroom"
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green"
          style="height: 48px;"
          v-bind="args"
        >
          Headroom Sticky Header Content
        </DesignComponent>
        <h3>Modern Web Interfaces and User Experience Design</h3>
        <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

        <p>Scrollbars and sticky headers play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars and headers should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

        <h4>Principles of Effective Design Implementation</h4>
        <p>Effective headroom design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of scroll events, and sticky positioning. Cross-browser compatibility remains a top priority, especially when dealing with custom scroll implementations.</p>

        <p>Users expect sticky headers to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

        <h4>Technical Architecture and Scroll Management</h4>
        <p>When developing sticky headers and scroll-responsive components, performance optimization becomes crucial. Scroll event handlers should be lightweight and avoid triggering heavy layout recalculations or layout thrashing. Utilizing CSS custom properties and transform matrices allows hardware-accelerated animations that keep scrolling smooth at high frame rates.</p>

        <p>Dynamic header transformation provides contextual visual cues to users as they explore dense documentation or long articles. As the user scrolls down, the header can shrink or hide to maximize screen real estate, and upon scrolling back up, it smoothly reappears to provide immediate access to primary navigation links and actions.</p>

        <h4>Accessibility and Responsive Adaptation</h4>
        <p>Accessibility considerations should be built into sticky layout components from the beginning. Screen readers and keyboard navigation must operate seamlessly regardless of visual transform states or dynamic positioning shifts. Ensuring proper focus management and semantic landmark roles allows all users to navigate application pages with confidence.</p>

        <p>Responsive design strategies require sticky elements to adapt gracefully across desktop monitors, tablets, and mobile smartphones. Touch interaction patterns, dynamic viewport boundaries, and safe area insets must be accounted for to deliver a unified and polished application experience.</p>
      </div>
    `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Headroom'} type={'headroom'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Headroom'} type={'event.headroomScroll'}/>
<StorybookDescriptions componentName={'Headroom'} type={'event.headroomSticky'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Headroom'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Headroom component managing sticky header position and scroll status calculations.
Handles scroll event binding, sticky state evaluation, transform CSS custom property calculation,
and disappears scroll mode offset updates.
    `,
    hide: true
  }
}
