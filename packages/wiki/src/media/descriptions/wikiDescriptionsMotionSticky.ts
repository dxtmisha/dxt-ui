import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MotionSticky component properties
 *
 * Описания свойств компонента MotionSticky
 */
export const wikiDescriptionsMotionSticky: StorybookComponentsDescriptionItem = {
  name: 'MotionSticky',
  description: {
    en: 'A component for sticky element positioning that automatically applies CSS classes and emits status events.',
    ru: 'Компонент для липкого позиционирования элементов, который автоматически применяет CSS-классы и генерирует события состояния.'
  },
  possibilities: {
    en: [
      'sticky positioning calculations based on element and scroll offsets',
      'active CSS class toggling when element becomes sticky',
      'custom scroll container binding via selector or HTMLElement reference',
      'dynamic sticky status change events',
      'flexible HTML tag configuration'
    ],
    ru: [
      'расчеты липкого позиционирования на основе смещений элемента и прокрутки',
      'переключение активного CSS-класса при переходе элемента в липкое состояние',
      'привязка к кастомному контейнеру прокрутки через селектор или HTMLElement',
      'динамические события изменения липкого статуса',
      'настройка HTML-тега элемента'
    ]
  },
  render: `
      <div id="design-sticky-demo" class="wiki-storybook-flex-column wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--borderNone wiki-storybook-item--overflowAuto">
        <p>
          In today's digital landscape, creating high-quality user interfaces has 
          become a critical aspect of web application development. User interface 
          components must not only be functional but also provide intuitive 
          interaction patterns that enhance the overall user experience. The 
          evolution of web technologies has enabled developers to create more 
          sophisticated and engaging interfaces.
        </p>
        
        <DesignComponent
          class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowVisible wiki-storybook-item--padding wiki-storybook-dummy--color--green"
          v-bind="args"
          style="top: 0;"
        >
          Sticky Header
        </DesignComponent>
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
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MotionSticky'} type={'motionSticky'}/>
    `,
    events: `
<StorybookDescriptions componentName={'MotionSticky'} type={'event.sticky'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
      <div :class="classDemo.item">
        <p>
          In today's digital landscape, creating high-quality user interfaces has
          become a critical aspect of web application development.
        </p>
        <MotionSticky
          v-bind="args"
          style="position: sticky; top: 0; padding: 16px;"
        >
          Sticky Header
        </MotionSticky>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information.
        </p>
      </div>
    `,
    description: `
      Low-level layout utility that manages element sticky state transitions.
      Automatically calculates scroll offsets to detect when the target element
      attaches to or detaches from its boundaries. Emits a "sticky" event and
      applies a custom activity class when the state shifts, making it perfect
      for sticky headers, side navigation bars, or contextual summary blocks.
    `
  }
}
