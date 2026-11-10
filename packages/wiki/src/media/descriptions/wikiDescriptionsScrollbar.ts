import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Scrollbar component properties
 *
 * Описания свойств компонента Scrollbar
 */
export const wikiDescriptionsScrollbar: StorybookComponentsDescriptionItem = {
  name: 'Scrollbar',
  description: {
    en: 'Custom scrollbar component with dynamic boundary dividers, scroll position tracking, and native engine fallback',
    ru: 'Компонент кастомного скроллбара с динамическими разделителями границ, отслеживанием скролла и поддержкой нативного движка'
  },
  possibilities: {
    en: [
      'custom scrollbar styling and appearance',
      'dynamic divider lines based on scroll position',
      'independent top and bottom boundary dividers',
      'visibility control for scrolling behavior and thumb',
      'inverse divider behavior options',
      'hide all divider lines functionality',
      'standard native browser scrollbar mode',
      'custom HTML container tag support'
    ],
    ru: [
      'кастомная стилизация и внешний вид скроллбара',
      'динамические разделительные линии в зависимости от позиции скролла',
      'независимые верхний и нижний разделители границ',
      'управление видимостью ползунка и поведением скролла',
      'опции инвертированного поведения разделителей',
      'функция полного скрытия всех разделительных линий',
      'режим стандартного нативного скроллбара браузера',
      'поддержка пользовательского HTML-тега контейнера'
    ]
  },
  render: `
      <DesignComponent
        class="wiki-storybook-item--widescreen wiki-storybook-item--squared--sm"
        v-bind="args"
      >
        <div class="wiki-storybook-scrollbar-content">
          <h3>Modern Web Interfaces and User Experience Design</h3>
          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience.</p>
          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure.</p>
        </div>
      </DesignComponent>
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body / events)
    // =========================================================================
    {
      id: 'ScrollbarBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      propsName: [],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Default Scrollbar</div>
            <DesignComponent style="height: 140px;">
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space. The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies, each holding hundreds of billions of stars and countless worlds.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light that moved across the heavens. It was only with the advent of modern astronomy that we began to understand the true nature of these stellar bodies.</p>
              <p>Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae. Over millions of years, gravity pulls these materials together, raising pressure and temperature until nuclear fusion ignites in the core.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
await expect(items[0]).toBeInTheDocument()
await expect(items[0].tagName.toLowerCase()).toBe('div')
      `
    },
    {
      id: 'ScrollbarDividers',
      name: {
        en: 'Dynamic Boundary Dividers',
        ru: 'Динамические границы-разделители'
      },
      propsName: ['divider', 'dividerTop', 'dividerBottom'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dividerTop + dividerBottom</div>
            <DesignComponent dividerTop dividerBottom style="height: 140px;">
              <p>Scroll down to reveal the top boundary divider, and scroll to the bottom to hide the bottom divider.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light that moved across the heavens.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
const scrollbar = items[0] as HTMLElement
await expect(scrollbar).toHaveClass('design-component--dividerTop')
await expect(scrollbar).toHaveClass('design-component--dividerBottom')
      `
    },
    {
      id: 'ScrollbarInverse',
      name: {
        en: 'Inverted Dividers',
        ru: 'Инвертированные разделители'
      },
      propsName: ['inverse', 'dividerTop', 'dividerBottom'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dividerTop + dividerBottom + inverse</div>
            <DesignComponent dividerTop dividerBottom inverse style="height: 140px;">
              <p>Inverted logic displays dividers at the initial boundary edges and hides them when scrolled.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
const scrollbar = items[0] as HTMLElement
await expect(scrollbar).toHaveClass('design-component--inverse')
await expect(scrollbar).toHaveClass('design-component--dividerTop')
await expect(scrollbar).toHaveClass('design-component--dividerBottom')
      `
    },
    {
      id: 'ScrollbarVisible',
      name: {
        en: 'Always Visible Thumb',
        ru: 'Постоянная видимость ползунка'
      },
      propsName: ['visible'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">visible: true</div>
            <DesignComponent visible style="height: 140px;">
              <p>The custom scrollbar thumb remains continuously visible regardless of user interaction.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
const scrollbar = items[0] as HTMLElement
await expect(scrollbar).toHaveClass('design-component--visible')
      `
    },
    {
      id: 'ScrollbarStandard',
      name: {
        en: 'Native Browser Engine',
        ru: 'Нативный скролл браузера'
      },
      propsName: ['standard'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">standard: true</div>
            <DesignComponent standard style="height: 140px;">
              <p>Preserves native browser scrollbar rendering without custom overlay styling.</p>
              <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
              <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
              <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
const scrollbar = items[0] as HTMLElement
await expect(scrollbar).toHaveClass('design-component--standard')
      `
    },
    {
      id: 'ScrollbarEvents',
      name: {
        en: 'Edge Events',
        ru: 'События границ'
      },
      propsName: [],
      setup: `
      const eventName = ref('None')
      const scrollbarRef = ref(null)

      const onEvent = (name: string) => {
        eventName.value = name
      }

      const scrollToTop = () => {
        const target = scrollbarRef.value as any
        const element = target?.$el instanceof HTMLElement ? target.$el : (target instanceof HTMLElement ? target : null)
        if (element) {
          element.scrollTop = 0
        }
      }

      const scrollToBottom = () => {
        const target = scrollbarRef.value as any
        const element = target?.$el instanceof HTMLElement ? target.$el : (target instanceof HTMLElement ? target : null)
        if (element) {
          element.scrollTop = element.scrollHeight
        }
      }

      return {
        eventName,
        scrollbarRef,
        onEvent,
        scrollToTop,
        scrollToBottom
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="scrollToTop">Scroll to Top</button>
            <button class="wiki-storybook-button" @click="scrollToBottom">Scroll to Bottom</button>
            <div class="wiki-storybook-card">Last Event: {{ eventName }}</div>
          </div>

          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
              <DesignComponent
                ref="scrollbarRef"
                divider
                style="height: 140px;"
                @bottom="onEvent('bottom')"
                @edge="onEvent('edge')"
                @leaveBottom="onEvent('leaveBottom')"
                @leaveTop="onEvent('leaveTop')"
                @reachBottom="onEvent('reachBottom')"
                @reachTop="onEvent('reachTop')"
                @top="onEvent('top')"
              >
                <p>Scroll using the buttons above or mouse wheel to trigger boundary detection events.</p>
                <p>In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space.</p>
                <p>The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies.</p>
                <p>For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light.</p>
                <p>Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae.</p>
              </DesignComponent>
            </div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const scrollToTopButton = canvas.getByRole('button', { name: 'Scroll to Top' })
const scrollToBottomButton = canvas.getByRole('button', { name: 'Scroll to Bottom' })
const cardElement = canvasElement.querySelector('.wiki-storybook-card')

await expect(scrollToTopButton).toBeInTheDocument()
await expect(scrollToBottomButton).toBeInTheDocument()
await expect(cardElement).toBeInTheDocument()

await step('Scroll to bottom programmatically', async () => {
  await userEvent.click(scrollToBottomButton)
  await waitFor(() => {
    expect(cardElement?.textContent).toContain('Last Event:')
  })
})

await step('Scroll to top programmatically', async () => {
  await userEvent.click(scrollToTopButton)
  await waitFor(() => {
    expect(cardElement?.textContent).toContain('Last Event:')
  })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with ScrollbarTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'ScrollbarTestStates',
      name: {
        en: 'Test: State combinations and modifier classes',
        ru: 'Тест: Комбинации состояний и классы-модификаторы'
      },
      propsName: ['visible', 'divider', 'dividerHide', 'inverse', 'standard'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">visible + divider</div>
            <DesignComponent visible divider style="height: 100px;">
              <p>Content for visible and divider combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">divider + dividerHide</div>
            <DesignComponent divider dividerHide style="height: 100px;">
              <p>Content for dividerHide combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">standard + visible</div>
            <DesignComponent standard visible style="height: 100px;">
              <p>Content for standard and visible combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">dividerTop + dividerBottom + inverse</div>
            <DesignComponent dividerTop dividerBottom inverse style="height: 100px;">
              <p>Content for inverse divider combination testing.</p>
              <p>Extra paragraph ensuring scrollable overflow.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)

// 1. visible + divider
const item1 = items[0] as HTMLElement
await expect(item1).toHaveClass('design-component--visible')
await expect(item1).toHaveClass('design-component--divider')

// 2. divider + dividerHide
const item2 = items[1] as HTMLElement
await expect(item2).toHaveClass('design-component--divider')
await expect(item2).toHaveClass('design-component--dividerHide')

// 3. standard + visible
const item3 = items[2] as HTMLElement
await expect(item3).toHaveClass('design-component--standard')
await expect(item3).toHaveClass('design-component--visible')

// 4. dividerTop + dividerBottom + inverse
const item4 = items[3] as HTMLElement
await expect(item4).toHaveClass('design-component--dividerTop')
await expect(item4).toHaveClass('design-component--dividerBottom')
await expect(item4).toHaveClass('design-component--inverse')
      `
    },
    {
      id: 'ScrollbarTestTags',
      name: {
        en: 'Test: Custom HTML container tags',
        ru: 'Тест: Пользовательские HTML-теги контейнера'
      },
      propsName: ['tag'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: section</div>
            <DesignComponent tag="section" style="height: 100px;">
              <p>Rendered with section element tag.</p>
              <p>Second paragraph for scroll height.</p>
            </DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">tag: article</div>
            <DesignComponent tag="article" style="height: 100px;">
              <p>Rendered with article element tag.</p>
              <p>Second paragraph for scroll height.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)

const sectionElement = items[0] as HTMLElement
await expect(sectionElement.tagName.toLowerCase()).toBe('section')

const articleElement = items[1] as HTMLElement
await expect(articleElement.tagName.toLowerCase()).toBe('article')
      `
    },
    {
      id: 'ScrollbarTestBoundaryEvents',
      name: {
        en: 'Test: Boundary threshold and data attributes',
        ru: 'Тест: Граничные пороги и data-атрибуты'
      },
      propsName: ['divider'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">divider boundary tracking</div>
            <DesignComponent divider style="height: 100px;">
              <p>Paragraph 1 for scroll tracking.</p>
              <p>Paragraph 2 for scroll tracking.</p>
              <p>Paragraph 3 for scroll tracking.</p>
              <p>Paragraph 4 for scroll tracking.</p>
            </DesignComponent>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(1)
const scrollbar = items[0] as HTMLElement

await waitFor(() => {
  expect(scrollbar.dataset.top).toBeDefined()
  expect(scrollbar.dataset.bottom).toBeDefined()
  expect(scrollbar.dataset.scrollbarDivider).toBeDefined()
})
      `
    }
  ],
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
    <p>In today's digital landscape, creating high-quality user
    interfaces has become a critical aspect of web application development.
    User interface components must not only be functional but also provide
    intuitive interaction patterns that enhance the overall user experience.</p>
    <p>Scrollbars play a particularly important role in content navigation
    and information architecture.</p>
  </Scrollbar>
</div>
    `,
    description: `
Structural container that provides custom scrolling behavior and visual status indicators (borders/dividers) based on content overflow. Essential for maintaining spatial context in fixed-height areas like menus, modals, and sidebars.
Features dynamic scroll position detection to show/hide top and bottom dividers based on visibility of content edges. Supports custom border styling, inverse divider logic, and specialized visibility controls for different scroll states.
Controlled via the tag and divider props, requiring a defined height or max-height to enable active scrolling. Use as a base wrapper for any dense content block requiring clear visual cues that more data is available above or below.
    `,
    hide: true
  }
}
