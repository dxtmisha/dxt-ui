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
  import: [
    'import { ref } from \'vue\'',
    'import type { HeadroomEventItem } from \'@dxtmisha/constructor\'',
    'import type { HeadroomExpose as HeadroomExposeType } from \'@dxtmisha/constructor/Headroom\''
  ],
  render: `
      <div
        id="wiki-descriptions-headroom"
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto"
      >
        <DesignComponent
          scrollElement="#wiki-descriptions-headroom"
          class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
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
  play: `
const headroomElement = canvasElement.querySelector<HTMLElement>('.design-component')
const scrollContainer = canvasElement.querySelector<HTMLElement>('#wiki-descriptions-headroom')

await expect(headroomElement).toBeInTheDocument()
await expect(scrollContainer).toBeInTheDocument()
await expect(headroomElement).toHaveTextContent('Headroom Sticky Header Content')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/expose)
    // =========================================================================
    {
      id: 'HeadroomBasic',
      name: {
        en: 'Basic sticky behavior and disappears mode',
        ru: 'Базовое липкое поведение и режим disappears'
      },
      propsName: ['scrollElement', 'disappears', 'transformThreshold'],
      template: `
        <div class="wiki-storybook-group">
          <div
            id="wiki-headroom-basic-sticky"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 240px;"
          >
            <DesignComponent
              data-testid="headroom-basic-sticky"
              scroll-element="#wiki-headroom-basic-sticky"
              :transform-threshold="100"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
              style="height: 48px;"
            >
              Sticky Header (transformThreshold: 100)
            </DesignComponent>
            <div class="wiki-storybook-item--padding" style="height: 700px;">
              <p>Scroll down inside this container to observe sticky state tracking and CSS transform progress.</p>
            </div>
          </div>

          <div
            id="wiki-headroom-basic-disappears"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 240px;"
          >
            <DesignComponent
              data-testid="headroom-basic-disappears"
              scroll-element="#wiki-headroom-basic-disappears"
              disappears
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--blue"
              style="height: 48px;"
            >
              Auto-hiding Header (disappears)
            </DesignComponent>
            <div class="wiki-storybook-item--padding" style="height: 700px;">
              <p>Scroll down to hide the header smoothly and scroll up to bring it back into view.</p>
            </div>
          </div>
        </div>
      `,
      play: `
const stickyContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-basic-sticky')
const stickyHeader = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-basic-sticky"]')
const disappearsContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-basic-disappears')
const disappearsHeader = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-basic-disappears"]')

await expect(stickyHeader).toHaveClass('design-component')
await expect(disappearsHeader).toHaveClass('design-component--disappears')

await step('Scroll sticky container down to 120px', async () => {
  stickyContainer!.scrollTop = 120
  stickyContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(stickyHeader).toHaveAttribute('data-headroom', 'sticky')
    expect(stickyHeader).toHaveAttribute('data-headroom-direction', 'down')
    expect(stickyHeader).toHaveAttribute('data-headroom-transform', '100')
  })
})

await step('Scroll disappears container down to 160px', async () => {
  disappearsContainer!.scrollTop = 160
  disappearsContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(disappearsHeader).toHaveAttribute('data-headroom', 'sticky')
    expect(disappearsHeader).toHaveAttribute('data-headroom-direction', 'down')
    expect(disappearsHeader?.style.getPropertyValue('--design-component-sys-top')).toMatch(/^-/)
  })
})
      `
    },
    {
      id: 'HeadroomEvents',
      name: {
        en: 'Scroll and sticky events',
        ru: 'События прокрутки и прилипания'
      },
      propsName: ['scrollElement', 'transformThreshold'],
      setup: `
      const scrollEventCount = ref<number>(0)
      const stickyEventCount = ref<number>(0)
      const latestEventData = ref<HeadroomEventItem | null>(null)

      const onHeadroomScroll = (event: HeadroomEventItem): void => {
        scrollEventCount.value += 1
        latestEventData.value = event
      }

      const onHeadroomSticky = (event: HeadroomEventItem): void => {
        stickyEventCount.value += 1
        latestEventData.value = event
      }

      return {
        scrollEventCount,
        stickyEventCount,
        latestEventData,
        onHeadroomScroll,
        onHeadroomSticky
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center" data-testid="headroom-events-summary">
            <span>scrollCount:{{ scrollEventCount }}</span>
            <span>stickyCount:{{ stickyEventCount }}</span>
            <span>isSticky:{{ latestEventData?.isSticky ?? false }}</span>
            <span>value:{{ latestEventData?.value ?? 0 }}</span>
            <span>percent:{{ latestEventData?.transformPercent ?? 0 }}</span>
          </div>

          <div
            id="wiki-headroom-events-scroller"
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              scroll-element="#wiki-headroom-events-scroller"
              :transform-threshold="100"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
              style="height: 48px;"
              @headroom-scroll="onHeadroomScroll"
              @headroom-sticky="onHeadroomSticky"
            >
              Events Target Header
            </DesignComponent>
            <div class="wiki-storybook-item--padding" style="height: 700px;">
              <p>Scroll inside this container to trigger headroomScroll and headroomSticky events.</p>
            </div>
          </div>
        </div>
      `,
      play: `
const scroller = canvasElement.querySelector<HTMLElement>('#wiki-headroom-events-scroller')
const summary = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-events-summary"]')

await expect(summary).toHaveTextContent('scrollCount:0')
await expect(summary).toHaveTextContent('stickyCount:0')

await step('Scroll down to trigger headroomScroll and headroomSticky', async () => {
  scroller!.scrollTop = 100
  scroller!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(summary).toHaveTextContent('scrollCount:1')
    expect(summary).toHaveTextContent('stickyCount:1')
    expect(summary).toHaveTextContent('isSticky:true')
    expect(summary).toHaveTextContent('value:100')
    expect(summary).toHaveTextContent('percent:1')
  })
})

await step('Scroll back to top to trigger headroomSticky exit', async () => {
  scroller!.scrollTop = 0
  scroller!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(summary).toHaveTextContent('scrollCount:2')
    expect(summary).toHaveTextContent('stickyCount:2')
    expect(summary).toHaveTextContent('isSticky:false')
    expect(summary).toHaveTextContent('value:0')
  })
})
      `
    },
    {
      id: 'HeadroomExpose',
      name: {
        en: 'Programmatic API (Expose)',
        ru: 'Программный API (Expose)'
      },
      propsName: ['scrollElement', 'disappears', 'transformThreshold'],
      setup: `
      const headroomReference = ref<(HeadroomExposeType & { elementHtml?: HTMLElement }) | null>(null)
      const stickyStatus = ref<boolean>(false)
      const exposedValues = ref<HeadroomEventItem | null>(null)
      const exposedTagName = ref<string>('')

      const syncExpose = (): void => {
        headroomReference.value?.update()
        stickyStatus.value = Boolean(headroomReference.value?.isSticky)
        exposedValues.value = headroomReference.value?.getValues() ?? null
        exposedTagName.value = headroomReference.value?.elementHtml?.tagName.toLowerCase() ?? ''
      }

      return {
        headroomReference,
        stickyStatus,
        exposedValues,
        exposedTagName,
        syncExpose
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="syncExpose">
              Update and Read Expose
            </button>
            <div data-testid="headroom-expose-output" class="wiki-storybook-flex">
              <span>tag:{{ exposedTagName }}</span>
              <span>isSticky:{{ stickyStatus }}</span>
              <span>value:{{ exposedValues?.value ?? 0 }}</span>
              <span>percent:{{ exposedValues?.transformPercent ?? 0 }}</span>
            </div>
          </div>

          <div
            id="wiki-headroom-expose-scroller"
            class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              ref="headroomReference"
              scroll-element="#wiki-headroom-expose-scroller"
              disappears
              :transform-threshold="100"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--blue"
              style="height: 48px;"
            >
              Expose Target Header
            </DesignComponent>
            <div class="wiki-storybook-item--padding" style="height: 700px;">
              <p>Use the button above to call update() and inspect isSticky, getValues(), and elementHtml.</p>
            </div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const scroller = canvasElement.querySelector<HTMLElement>('#wiki-headroom-expose-scroller')
const output = canvas.getByTestId('headroom-expose-output')
const syncButton = canvas.getByRole('button', { name: 'Update and Read Expose' })

await step('Set scrollTop and call expose.update() via button', async () => {
  scroller!.scrollTop = 50
  await userEvent.click(syncButton)

  await waitFor(() => {
    expect(output).toHaveTextContent('tag:div')
    expect(output).toHaveTextContent('isSticky:true')
    expect(output).toHaveTextContent('value:50')
    expect(output).toHaveTextContent('percent:0.5')
  })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only — NEVER in documentation)
    // =========================================================================
    {
      id: 'HeadroomTestTagsAndAttributes',
      name: {
        en: 'Test: Tag variants, default slot and attributes forwarding',
        ru: 'Тест: Варианты тега, слот по умолчанию и проброс атрибутов'
      },
      propsName: ['tag'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent data-testid="headroom-tag-default">
            Default Div Tag Content
          </DesignComponent>

          <DesignComponent
            data-testid="headroom-tag-header"
            tag="header"
            role="banner"
            aria-label="Primary Site Header"
            class="wiki-custom-headroom"
          >
            Header Tag Content
          </DesignComponent>

          <DesignComponent
            data-testid="headroom-tag-nav"
            tag="nav"
            aria-label="Main Navigation"
          >
            Nav Tag Content
          </DesignComponent>

          <DesignComponent
            data-testid="headroom-tag-section"
            tag="section"
          >
            Section Tag Content
          </DesignComponent>
        </div>
      `,
      play: `
const defaultElement = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-tag-default"]')
const headerElement = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-tag-header"]')
const navElement = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-tag-nav"]')
const sectionElement = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-tag-section"]')

await expect(defaultElement?.tagName).toBe('DIV')
await expect(defaultElement).toHaveClass('design-component')
await expect(defaultElement).toHaveTextContent('Default Div Tag Content')

await expect(headerElement?.tagName).toBe('HEADER')
await expect(headerElement).toHaveClass('design-component')
await expect(headerElement).toHaveClass('wiki-custom-headroom')
await expect(headerElement).toHaveAttribute('role', 'banner')
await expect(headerElement).toHaveAttribute('aria-label', 'Primary Site Header')
await expect(headerElement).toHaveTextContent('Header Tag Content')

await expect(navElement?.tagName).toBe('NAV')
await expect(navElement).toHaveAttribute('aria-label', 'Main Navigation')
await expect(navElement).toHaveTextContent('Nav Tag Content')

await expect(sectionElement?.tagName).toBe('SECTION')
await expect(sectionElement).toHaveTextContent('Section Tag Content')
      `
    },
    {
      id: 'HeadroomTestScrollElement',
      name: {
        en: 'Test: scrollElement as CSS selector and HTMLElement reference',
        ru: 'Тест: scrollElement как CSS-селектор и ссылка HTMLElement'
      },
      propsName: ['scrollElement', 'transformThreshold'],
      setup: `
      const elementContainer = ref<HTMLElement | undefined>(undefined)

      return {
        elementContainer
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div
            id="wiki-headroom-test-selector"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              data-testid="headroom-selector-target"
              scroll-element="#wiki-headroom-test-selector"
              :transform-threshold="100"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
              style="height: 48px;"
            >
              Selector Scroll Target
            </DesignComponent>
            <div style="height: 700px;">Selector content</div>
          </div>

          <div
            ref="elementContainer"
            data-testid="headroom-ref-container"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              data-testid="headroom-ref-target"
              :scroll-element="elementContainer"
              :transform-threshold="100"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--blue"
              style="height: 48px;"
            >
              Element Ref Scroll Target
            </DesignComponent>
            <div style="height: 700px;">Element ref content</div>
          </div>
        </div>
      `,
      play: `
const selectorContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-test-selector')
const selectorTarget = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-selector-target"]')
const referenceContainer = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-ref-container"]')
const referenceTarget = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-ref-target"]')

await waitFor(() => {
  expect(selectorTarget).toHaveAttribute('data-headroom', 'none')
  expect(referenceTarget).toHaveAttribute('data-headroom', 'none')
  expect(referenceTarget).toHaveAttribute('data-headroom-transform', '100')
})

await step('Scroll selector-bound container', async () => {
  selectorContainer!.scrollTop = 80
  selectorContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(selectorTarget).toHaveAttribute('data-headroom', 'sticky')
    expect(selectorTarget).toHaveAttribute('data-headroom-direction', 'down')
    expect(selectorTarget?.style.getPropertyValue('--design-component-sys-value')).toBe('80px')
  })
})

await step('Scroll HTMLElement-ref-bound container', async () => {
  referenceContainer!.scrollTop = 60
  referenceContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(referenceTarget).toHaveAttribute('data-headroom', 'sticky')
    expect(referenceTarget).toHaveAttribute('data-headroom-direction', 'down')
    expect(referenceTarget?.style.getPropertyValue('--design-component-sys-value')).toBe('60px')
  })
})
      `
    },
    {
      id: 'HeadroomTestDisappears',
      name: {
        en: 'Test: disappears true vs false and direction transitions',
        ru: 'Тест: disappears (true и false) и смена направления прокрутки'
      },
      propsName: ['scrollElement', 'disappears', 'transformThreshold'],
      template: `
        <div class="wiki-storybook-group">
          <div
            id="wiki-headroom-test-disappears-on"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              data-testid="headroom-disappears-on"
              scroll-element="#wiki-headroom-test-disappears-on"
              disappears
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
              style="height: 48px;"
            >
              disappears: true
            </DesignComponent>
            <div style="height: 800px;">Disappears enabled content</div>
          </div>

          <div
            id="wiki-headroom-test-disappears-off"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              data-testid="headroom-disappears-off"
              scroll-element="#wiki-headroom-test-disappears-off"
              :disappears="false"
              :transform-threshold="100"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--red"
              style="height: 48px;"
            >
              disappears: false
            </DesignComponent>
            <div style="height: 800px;">Disappears disabled content</div>
          </div>
        </div>
      `,
      play: `
const onContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-test-disappears-on')
const onTarget = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-disappears-on"]')
const offContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-test-disappears-off')
const offTarget = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-disappears-off"]')

await expect(onTarget).toHaveClass('design-component--disappears')
await expect(offTarget).not.toHaveClass('design-component--disappears')

await step('Scroll down in disappears=true mode sets negative sys-top and direction=down', async () => {
  onContainer!.scrollTop = 200
  onContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(onTarget).toHaveAttribute('data-headroom', 'sticky')
    expect(onTarget).toHaveAttribute('data-headroom-direction', 'down')
    expect(onTarget?.style.getPropertyValue('--design-component-sys-top')).toMatch(/^-/)
  })
})

await step('Scroll up in disappears=true mode restores sys-top to 0px and sets direction=up', async () => {
  onContainer!.scrollTop = 20
  onContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(onTarget).toHaveAttribute('data-headroom', 'sticky')
    expect(onTarget).toHaveAttribute('data-headroom-direction', 'up')
    expect(onTarget?.style.getPropertyValue('--design-component-sys-top')).toBe('0px')
  })
})

await step('Scroll down in disappears=false mode does not set sys-top', async () => {
  offContainer!.scrollTop = 140
  offContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(offTarget).toHaveAttribute('data-headroom', 'sticky')
    expect(offTarget).toHaveAttribute('data-headroom-direction', 'down')
    expect(offTarget?.style.getPropertyValue('--design-component-sys-top')).toBe('')
  })
})
      `
    },
    {
      id: 'HeadroomTestTransformThreshold',
      name: {
        en: 'Test: transformThreshold (120 vs 0) and CSS custom properties',
        ru: 'Тест: transformThreshold (120 и 0) и пользовательские CSS-переменные'
      },
      propsName: ['scrollElement', 'disappears', 'transformThreshold'],
      template: `
        <div class="wiki-storybook-group">
          <div
            id="wiki-headroom-test-threshold-active"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              data-testid="headroom-threshold-active"
              scroll-element="#wiki-headroom-test-threshold-active"
              :transform-threshold="120"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
              style="height: 48px;"
            >
              transformThreshold: 120
            </DesignComponent>
            <div style="height: 800px;">Threshold 120 content</div>
          </div>

          <div
            id="wiki-headroom-test-threshold-zero"
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--overflowAuto"
            style="height: 220px;"
          >
            <DesignComponent
              data-testid="headroom-threshold-zero"
              scroll-element="#wiki-headroom-test-threshold-zero"
              disappears
              :transform-threshold="0"
              class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--blue"
              style="height: 48px;"
            >
              transformThreshold: 0
            </DesignComponent>
            <div style="height: 800px;">Threshold 0 content</div>
          </div>
        </div>
      `,
      play: `
const activeContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-test-threshold-active')
const activeTarget = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-threshold-active"]')
const zeroContainer = canvasElement.querySelector<HTMLElement>('#wiki-headroom-test-threshold-zero')
const zeroTarget = canvasElement.querySelector<HTMLElement>('[data-testid="headroom-threshold-zero"]')

await waitFor(() => {
  expect(activeTarget).toHaveAttribute('data-headroom-transform', '120')
  expect(activeTarget?.style.getPropertyValue('--design-component-sys-threshold')).toBe('120px')
  expect(activeTarget?.style.getPropertyValue('--design-component-sys-value')).toBe('0px')
  expect(activeTarget?.style.getPropertyValue('--design-component-sys-percent')).toBe('0')

  expect(zeroTarget).not.toHaveAttribute('data-headroom-transform')
  expect(zeroTarget?.style.getPropertyValue('--design-component-sys-threshold')).toBe('0px')
})

await step('Scroll to half of threshold (60 / 120)', async () => {
  activeContainer!.scrollTop = 60
  activeContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(activeTarget?.style.getPropertyValue('--design-component-sys-value')).toBe('60px')
    expect(activeTarget?.style.getPropertyValue('--design-component-sys-percent')).toBe('0.5')
  })
})

await step('Scroll beyond threshold (180 >= 120) caps value at 120px and percent at 1', async () => {
  activeContainer!.scrollTop = 180
  activeContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(activeTarget?.style.getPropertyValue('--design-component-sys-value')).toBe('120px')
    expect(activeTarget?.style.getPropertyValue('--design-component-sys-percent')).toBe('1')
  })
})

await step('Scroll container with transformThreshold=0 keeps percent at 0 and omits data-headroom-transform', async () => {
  zeroContainer!.scrollTop = 100
  zeroContainer!.dispatchEvent(new Event('scroll'))

  await waitFor(() => {
    expect(zeroTarget).toHaveAttribute('data-headroom', 'sticky')
    expect(zeroTarget).not.toHaveAttribute('data-headroom-transform')
    expect(zeroTarget?.style.getPropertyValue('--design-component-sys-value')).toBe('0px')
    expect(zeroTarget?.style.getPropertyValue('--design-component-sys-percent')).toBe('0')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Headroom'} type={'headroom'}/>
<Canvas of={Component.HeadroomBasic}/>
<StorybookDescriptions componentName={'Headroom'} type={'style'}/>
    `,
    events: `
<Canvas of={Component.HeadroomEvents}/>
<StorybookDescriptions componentName={'Event'} type={'headroom'}/>
    `,
    expose: `
<Canvas of={Component.HeadroomExpose}/>
<StorybookDescriptions componentName={'Headroom'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent scroll-element="#container" disappears :transform-threshold="100" v-bind="args">
    Sticky Header
  </DesignComponent>
</div>
    `,
    description: `
Headroom component managing sticky header position and scroll status calculations.
Handles scroll event binding (scrollElement), sticky state evaluation (isSticky, data-headroom),
transform CSS custom property calculation (transformThreshold), and disappears scroll mode offset updates.
    `,
    hide: true
  }
}
