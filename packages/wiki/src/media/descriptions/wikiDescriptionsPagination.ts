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
      'localized range information labels (showInfo)',
      'custom attribute bindings for buttons, menu, and more buttons',
      'uncontrolled or controlled state management with v-model:value and v-model:rows'
    ],
    ru: [
      'реактивный расчет номеров страниц на основе count и rows',
      'выпадающее меню выбора лимита количества строк на странице (menuRows)',
      'кнопки постраничной навигации: назад, вперед, первая и последняя',
      'отображение крайних страниц и разделителей в виде многоточия',
      'триггер кнопки «Показать еще» для подгрузки данных (showMore)',
      'локализованные информационные метки диапазона (showInfo)',
      'пользовательские биндинги атрибутов для кнопок, меню и кнопки «Показать еще»',
      'управление контролируемым или неконтролируемым состоянием через v-model:value и v-model:rows'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
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
            <span>Page: <strong>{{ page }}</strong></span>
            <span>Rows per page: <strong>{{ rows }}</strong></span>
            <button class="wiki-storybook-button" @click="page = 5">Go to Page 5</button>
            <button class="wiki-storybook-button" @click="rows = 20">Set Rows to 20</button>
          </div>

          <DesignComponent
            v-model:value="page"
            v-model:rows="rows"
            :count="100"
            :menu-rows="menuRows"
            show-info
          />
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Pagination'} type={'pagination'}/>
<Canvas of={Component.PaginationBasic}/>

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
    description: `
Navigation component that manages page rendering, rows limits, and next-item loaders. Connects with pagination buttons, drop-down menus, and text ranges to deliver premium data layouts.
Features ellipsis separators between middle range and edge pages, first/last quick jumps, and customizable menu option sets (menuRows). Operates with high responsive fidelity and integrates smoothly with standard loaders.
Controlled by count and v-model bindings: v-model:value for the current active page, and v-model:rows for the rows-per-page limit. Uses native events like more, rows, click, and clickLite.
    `
  }
}
