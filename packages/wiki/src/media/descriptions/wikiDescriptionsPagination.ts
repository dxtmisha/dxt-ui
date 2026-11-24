import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Pagination component
 *
 * Описания свойств компонента Pagination
 */
export const wikiDescriptionsPagination: StorybookComponentsDescriptionItem = {
  name: 'Pagination',
  description: {
    en: 'Orchestrated navigation controls to divide large datasets into discrete pages, manage row limit per page and load next items.',
    ru: 'Оркестрованные элементы навигации для разделения больших наборов данных на отдельные страницы, управления лимитом строк на странице и загрузки следующих элементов.'
  },
  possibilities: {
    en: [
      'reactive page number calculation based on count and rows',
      'dropdown select menu to change rows count per page (menuRows)',
      'navigation buttons: previous, next, first, and last',
      'boundary display of ends buttons and ellipsis separators',
      '"Show more" button trigger for appending items (showMore)',
      '"Show previous" button trigger for prepending items when starting from a non-first page (showMorePrev)',
      'localized range information labels (showInfo)',
      'custom attribute bindings for buttons, menu, and more buttons',
      'directional keyboard navigation via FocusDirectionInclude and ARIA navigation landmark',
      'uncontrolled or controlled state management with v-model:value and v-model:rows'
    ],
    ru: [
      'реактивный расчет номеров страниц на основе count и rows',
      'выпадающее меню выбора лимита количества строк на странице (menuRows)',
      'кнопки постраничной навигации: назад, вперед, первая и последняя',
      'отображение крайних страниц и разделителей в виде многоточия',
      'триггер кнопки «Показать еще» для подгрузки данных (showMore)',
      'триггер кнопки «Показать предыдущие» для добавления записей в начало при старте не с первой страницы (showMorePrev)',
      'локализованные информационные метки диапазона (showInfo)',
      'пользовательские биндинги атрибутов для кнопок, меню и кнопки «Показать еще»',
      'направленная клавиатурная навигация через FocusDirectionInclude и ARIA-ориентир navigation',
      'управление контролируемым или неконтролируемым состоянием через v-model:value и v-model:rows'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
await waitFor(() => {
  const component = canvasElement.querySelector('.design-component')
  if (component) {
    expect(component).toHaveAttribute('role', 'navigation')
  }
})
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/events/slots)
    // =========================================================================
    {
      id: 'PaginationBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      setup: `
      return {}
      `,
      template: `
        <DesignComponent
          :count="100"
          :rows="10"
        />
      `,
      play: `
await waitFor(() => {
  const component = canvasElement.querySelector('.design-component')
  expect(component).toBeInTheDocument()
  expect(component).toHaveAttribute('role', 'navigation')
  const currentButton = component?.querySelector('[aria-current="page"]')
  expect(currentButton?.textContent?.trim()).toBe('1')
})
      `
    },
    {
      id: 'PaginationShowMore',
      name: {
        en: 'Show More / Show Previous',
        ru: 'Показать еще / Показать предыдущие'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :count="100"
            :rows="10"
            :value="5"
            show-more-prev
          />

          <DesignComponent
            :count="100"
            :rows="10"
            :value="5"
            show-more
          />
        </div>
      `,
      play: `
await waitFor(() => {
  const components = canvasElement.querySelectorAll('.design-component')
  expect(components.length).toBe(2)
  expect(components[0].querySelector('.design-component__morePrev')).toBeInTheDocument()
  expect(components[1].querySelector('.design-component__more')).toBeInTheDocument()
})
      `
    },
    {
      id: 'PaginationVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const page = ref(1)
      const rows = ref(10)
      const menuRows = [5, 10, 20, 50]

      return { page, rows, menuRows }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Page: <strong data-testid="story-page">{{ page }}</strong></span>
            <span>Rows per page: <strong data-testid="story-rows">{{ rows }}</strong></span>
            <button class="wiki-storybook-button" data-testid="story-go-page-5" @click="page = 5">Go to Page 5</button>
            <button class="wiki-storybook-button" data-testid="story-set-rows-20" @click="rows = 20">Set Rows to 20</button>
          </div>

          <DesignComponent
            v-model:value="page"
            v-model:rows="rows"
            :count="100"
            :menu-rows="menuRows"
            show-info
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Update page to 5 via external button', async () => {
  await userEvent.click(canvas.getByTestId('story-go-page-5'))
  await waitFor(() => {
    expect(canvas.getByTestId('story-page')).toHaveTextContent('5')
    const currentButton = canvasElement.querySelector('[aria-current="page"]')
    expect(currentButton?.textContent?.trim()).toBe('5')
  })
})

await step('Update rows to 20 via external button', async () => {
  await userEvent.click(canvas.getByTestId('story-set-rows-20'))
  await waitFor(() => {
    expect(canvas.getByTestId('story-rows')).toHaveTextContent('20')
  })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props & behavior only — NEVER in documentation)
    // =========================================================================
    {
      id: 'PaginationTestOptionsAndSlots',
      name: {
        en: 'Test: Navigation options, slots, custom texts and adaptive lineAlways',
        ru: 'Тест: Опции навигации, слоты, тексты и адаптив lineAlways'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            data-testid="test-ends"
            :value="5"
            :count="200"
            :rows="10"
            :visible="5"
            :ends="2"
            ellipsis="•••"
            show-ends
            show-info
            adaptive="lineAlways"
            adaptive-more="lineAlways"
            adaptive-more-prev="lineAlways"
            text-pagination="Custom navigation"
            text-page="Step"
            text-info="[item] / [count]"
          >
            <template #leading>
              <span data-testid="slot-leading">Start</span>
            </template>
            <template #trailing>
              <span data-testid="slot-trailing">End</span>
            </template>
          </DesignComponent>

          <DesignComponent
            data-testid="test-minimal"
            value="3"
            count="60"
            rows="10"
            :show-arrows="false"
            :show-first-last="false"
            :show-rows-per-page-label="false"
            :menu-rows="[10, 20]"
            show-info
          >
            <template #info>
              <span data-testid="slot-info">Custom info slot</span>
            </template>
          </DesignComponent>

          <DesignComponent
            data-testid="test-hidden-single"
            :value="1"
            :count="5"
            :rows="10"
            hide-if-one
          />

          <DesignComponent
            data-testid="test-visible-zero"
            :value="1"
            :count="0"
            :rows="10"
            :hide-if-one="false"
            show-info
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await waitFor(() => {
  const endsComponent = canvas.getByTestId('test-ends')
  expect(endsComponent).toHaveAttribute('aria-label', 'Custom navigation')
  expect(endsComponent).toHaveClass('design-component--adaptive--lineAlways')
  expect(endsComponent.querySelector('.design-component__ellipsis')).toHaveTextContent('•••')
  expect(endsComponent.querySelector('.design-component__info')).toHaveTextContent('41-50 / 200')
  expect(canvas.getByTestId('slot-leading')).toHaveTextContent('Start')
  expect(canvas.getByTestId('slot-trailing')).toHaveTextContent('End')

  const minimalComponent = canvas.getByTestId('test-minimal')
  expect(canvas.getByTestId('slot-info')).toHaveTextContent('Custom info slot')
  expect(minimalComponent.querySelector('.design-component__menuRowsLabel')).not.toBeInTheDocument()

  expect(canvas.queryByTestId('test-hidden-single')).not.toBeInTheDocument()

  const zeroComponent = canvas.getByTestId('test-visible-zero')
  expect(zeroComponent.querySelector('.design-component__info')).toHaveTextContent('0-0')
})
      `
    },
    {
      id: 'PaginationTestEventsAndKeyboard',
      name: {
        en: 'Test: Click, more, morePrev events and keyboard navigation',
        ru: 'Тест: События click, more, morePrev и клавиатурная навигация'
      },
      setup: `
      const lastEvent = ref('none')
      const onMoreLite = (options?: EventClickValue) => {
        lastEvent.value = 'moreLite:' + String(options?.value ?? '')
      }
      const onMorePrevLite = (options?: EventClickValue) => {
        lastEvent.value = 'morePrevLite:' + String(options?.value ?? '')
      }
      const onClickLite = (options?: EventClickValue) => {
        if (options?.type === 'page') {
          lastEvent.value = 'page:' + String(options?.value ?? '')
        }
      }

      return { lastEvent, onMoreLite, onMorePrevLite, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div data-testid="test-event-output">{{ lastEvent }}</div>
          <DesignComponent
            data-testid="test-events-pagination"
            :value="3"
            :count="100"
            :rows="10"
            show-more
            show-more-prev
            @more-lite="onMoreLite"
            @more-prev-lite="onMorePrevLite"
            @click-lite="onClickLite"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)

await step('Click Show More button emits moreLite with next page', async () => {
  const moreButton = canvasElement.querySelector('.design-component__more') as HTMLElement
  expect(moreButton).toBeInTheDocument()
  await userEvent.click(moreButton)
  await waitFor(() => {
    expect(canvas.getByTestId('test-event-output')).toHaveTextContent('moreLite:4')
  })
})

await step('Click Show Previous button emits morePrevLite with previous page', async () => {
  const morePrevButton = canvasElement.querySelector('.design-component__morePrev') as HTMLElement
  expect(morePrevButton).toBeInTheDocument()
  await userEvent.click(morePrevButton)
  await waitFor(() => {
    expect(canvas.getByTestId('test-event-output')).toHaveTextContent('morePrevLite:2')
  })
})

await step('Keyboard focus + Enter activates focused page via FocusDirectionInclude', async () => {
  const container = canvas.getByTestId('test-events-pagination')
  expect(container).toHaveAttribute('tabindex', '0')
  container.focus()
  await fireEvent.keyDown(container, { key: 'Enter' })
  await waitFor(() => {
    expect(canvas.getByTestId('test-event-output')).toHaveTextContent('page:3')
  })
})

await step('Click page 4 button updates active page and emits clickLite', async () => {
  const pageFourButton = canvasElement.querySelector('[data-event-type="page"][data-value="4"]') as HTMLElement
  expect(pageFourButton).toBeInTheDocument()
  await userEvent.click(pageFourButton)
  await waitFor(() => {
    expect(canvas.getByTestId('test-event-output')).toHaveTextContent('page:4')
    expect(pageFourButton).toHaveAttribute('aria-current', 'page')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Pagination'} type={'pagination'}/>
<Canvas of={Component.PaginationBasic}/>

<StorybookDescriptions componentName={'Pagination'} type={'more'}/>
<Canvas of={Component.PaginationShowMore}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.PaginationVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Pagination'} type={'events'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'leading'}/>
<StorybookDescriptions componentName={'Slot'} type={'info'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args" :count="100" :rows="10"/>
</div>
    `,
    description: `
Navigation component that manages page rendering, rows limits, and incremental content loaders. Connects with pagination buttons, drop-down menus, and text ranges to deliver premium data layouts.
Features ellipsis separators between middle range and edge pages, first/last quick jumps, directional keyboard navigation, and customizable menu option sets (menuRows). Operates with high responsive fidelity and integrates smoothly with standard loaders.
Supports two accumulative loading modes: showMore appends the next page of records below the current list; showMorePrev prepends an earlier page above — used when the user arrives at a non-first offset via deep link or page reload. Both are implemented as separate Pagination instances sharing the same reactive page state.
Controlled by count and v-model bindings: v-model:value for the current active page, and v-model:rows for the rows-per-page limit. Uses native events: more, morePrev, rows, click, and their lite variants.
    `
  }
}
