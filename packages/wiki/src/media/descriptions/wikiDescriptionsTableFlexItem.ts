import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlexItem component properties
 *
 * Описания свойств компонента TableFlexItem
 */
export const wikiDescriptionsTableFlexItem: StorybookComponentsDescriptionItem = {
  name: 'TableFlexItem',
  description: {
    en: 'Flexbox-based table cell component representing a semantic div[role="cell"] layout item',
    ru: 'Компонент ячейки таблицы на основе flexbox, представляющий семантический элемент div[role="cell"]'
  },
  possibilities: {
    en: [
      'flexbox-based cell layout rendering div[role="cell"] with data-colspan and data-rowspan attributes',
      'horizontal and vertical content alignment (`align`, `alignVertical`)',
      'horizontal and vertical cell dividers (`dividerX`, `dividerY`)',
      'label text clamping for high-density flex tables (`labelClamp`)',
      'responsive sticky columns and headers capability (`stickyTop`, `stickyLeft`)',
      'integrated skeleton loading states (`isSkeleton`)',
      'disabled and selected states handling with ARIA bindings (`selected`, `disabled`)',
      'custom content projection via `default`, `description`, and `context` slots'
    ],
    ru: [
      'флекс-макет ячейки с рендерингом div[role="cell"] и атрибутами data-colspan и data-rowspan',
      'горизонтальное и вертикальное выравнивание содержимого (`align`, `alignVertical`)',
      'горизонтальные и вертикальные разделители ячеек (`dividerX`, `dividerY`)',
      'ограничение высоты текста метки для плотных таблиц (`labelClamp`)',
      'поддержка липких (sticky) столбцов и заголовков (`stickyTop`, `stickyLeft`)',
      'интегрированные состояния загрузки скелетона (`isSkeleton`)',
      'обработка отключенного и выбранного состояний с ARIA-атрибутами (`selected`, `disabled`)',
      'кастомная проекция содержимого через слоты `default`, `description` и `context`'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
    const cells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
    await expect(cells.length).toBe(3)

    cells.forEach((cell) => {
      expect(cell.tagName).toBe('DIV')
      expect(cell).toHaveAttribute('role', 'cell')
      expect(cell).not.toHaveAttribute('colspan')
      expect(cell).not.toHaveAttribute('rowspan')
    })
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body/slots)
    // =========================================================================
    {
      id: 'TableFlexItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <DesignComponent
              :isSkeleton="true"
              label="Second label"
              description="Second description"
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
        const cells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(cells.length).toBe(2)

        cells.forEach((cell) => {
          expect(cell.tagName).toBe('DIV')
          expect(cell).toHaveAttribute('role', 'cell')

          const labelElement = cell.querySelector<HTMLElement>('.design-component__label')
          const descriptionElement = cell.querySelector<HTMLElement>('.design-component__description')

          expect(labelElement).toBeInTheDocument()
          expect(descriptionElement).toBeInTheDocument()
          expect(labelElement?.className).toContain('skeleton__textVariant')
          expect(descriptionElement?.className).toContain('skeleton__textVariant')
        })
      `
    },
    {
      id: 'TableFlexItemSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent index="summary">
            <template #default>
              <strong data-testid="flex-item-slot-default">Default Slot Label</strong>
            </template>
            <template #description>
              <em data-testid="flex-item-slot-description">Description Slot Text</em>
            </template>
            <template #context>
              <div data-testid="flex-item-slot-context">Context Slot Content</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const cell = canvasElement.querySelector<HTMLElement>('.design-component')

        await expect(cell).toBeInTheDocument()
        await expect(cell?.tagName).toBe('DIV')
        await expect(cell).toHaveAttribute('role', 'cell')
        await expect(cell).toHaveAttribute('data-index', 'summary')
        await expect(canvas.getByTestId('flex-item-slot-default')).toHaveTextContent('Default Slot Label')
        await expect(canvas.getByTestId('flex-item-slot-description')).toHaveTextContent('Description Slot Text')
        await expect(canvas.getByTestId('flex-item-slot-context')).toHaveTextContent('Context Slot Content')
        await expect(cell?.querySelector('.design-component__label [data-testid="flex-item-slot-default"]')).toBeInTheDocument()
        await expect(cell?.querySelector('.design-component__description [data-testid="flex-item-slot-description"]')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableFlexItemTestSpansAndTag',
      name: {
        en: 'Test: Data spans, indices, custom tag and IDs',
        ru: 'Тест: Атрибуты data-colspan/rowspan, индексы, кастомный тег и ID'
      },
      propsName: ['colspan', 'rowspan', 'index', 'tag', 'label', 'description', 'labelId', 'descriptionId', 'value', 'keyItem'],
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              label="Wide cell"
              description="Spans 3 columns"
              :colspan="3"
              :rowspan="2"
              index="email"
              value="user@example.com"
              keyItem="cell-email"
              labelId="flex-item-label-id"
              descriptionId="flex-item-description-id"
            />
            <DesignComponent
              :label="0"
              :description="0"
              :colspan="0"
              :rowspan="0"
              :index="0"
            />
            <DesignComponent
              label="Section tag"
              tag="section"
              colspan="2"
            />
            <DesignComponent
              label="Empty tag fallback"
              tag=""
            />
          </div>
        </div>
      `,
      play: `
        const cells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(cells.length).toBe(4)

        // 0. Standard div with data-colspan, data-rowspan, data-index, and zero HTML colspan/rowspan
        await expect(cells[0].tagName).toBe('DIV')
        await expect(cells[0]).toHaveAttribute('role', 'cell')
        await expect(cells[0]).toHaveAttribute('data-colspan', '3')
        await expect(cells[0]).toHaveAttribute('data-rowspan', '2')
        await expect(cells[0]).toHaveAttribute('data-index', 'email')
        await expect(cells[0]).not.toHaveAttribute('colspan')
        await expect(cells[0]).not.toHaveAttribute('rowspan')
        await expect(cells[0].querySelector('.design-component__label')).toHaveAttribute('id', 'flex-item-label-id')
        await expect(cells[0].querySelector('.design-component__description')).toHaveAttribute('id', 'flex-item-description-id')

        // 1. Numeric 0 boundary values rendered without dropping
        await expect(cells[1]).toHaveAttribute('role', 'cell')
        await expect(cells[1]).toHaveAttribute('data-colspan', '0')
        await expect(cells[1]).toHaveAttribute('data-rowspan', '0')
        await expect(cells[1]).toHaveAttribute('data-index', '0')
        await expect(cells[1]).not.toHaveAttribute('colspan')
        await expect(cells[1]).not.toHaveAttribute('rowspan')
        await expect(cells[1].querySelector('.design-component__label')).toHaveTextContent('0')
        await expect(cells[1].querySelector('.design-component__description')).toHaveTextContent('0')

        // 2. Custom semantic tag with role="cell"
        await expect(cells[2].tagName).toBe('SECTION')
        await expect(cells[2]).toHaveAttribute('role', 'cell')
        await expect(cells[2]).toHaveAttribute('data-colspan', '2')
        await expect(cells[2]).not.toHaveAttribute('colspan')

        // 3. Empty tag safely falls back to DIV
        await expect(cells[3].tagName).toBe('DIV')
        await expect(cells[3]).toHaveAttribute('role', 'cell')
      `
    },
    {
      id: 'TableFlexItemTestAlignmentAndDividers',
      name: {
        en: 'Test: Alignment, dividers, labelClamp and sticky modifiers',
        ru: 'Тест: Выравнивание, разделители, labelClamp и липкие модификаторы'
      },
      propsName: ['align', 'alignVertical', 'dividerX', 'dividerY', 'labelClamp', 'stickyTop', 'stickyLeft'],
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent label="Left Top" align="left" alignVertical="top" dividerX :dividerY="false"/>
            <DesignComponent label="Center Middle" align="center" alignVertical="center" :dividerX="false" dividerY/>
            <DesignComponent
              label="Right Bottom Clamped Long Content Text"
              align="right"
              alignVertical="bottom"
              dividerX
              dividerY
              labelClamp
            />
            <DesignComponent label="Sticky Both" stickyTop stickyLeft/>
          </div>
        </div>
      `,
      play: `
        const cells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(cells.length).toBe(4)

        await expect(cells[0]).toHaveClass('design-component--align--left')
        await expect(cells[0]).toHaveClass('design-component--alignVertical--top')
        await expect(cells[0]).toHaveClass('design-component--dividerX')
        await expect(cells[0]).not.toHaveClass('design-component--dividerY')

        await expect(cells[1]).toHaveClass('design-component--align--center')
        await expect(cells[1]).toHaveClass('design-component--alignVertical--center')
        await expect(cells[1]).toHaveClass('design-component--dividerY')
        await expect(cells[1]).not.toHaveClass('design-component--dividerX')

        await expect(cells[2]).toHaveClass('design-component--align--right')
        await expect(cells[2]).toHaveClass('design-component--alignVertical--bottom')
        await expect(cells[2]).toHaveClass('design-component--dividerX')
        await expect(cells[2]).toHaveClass('design-component--dividerY')
        await expect(cells[2]).toHaveClass('design-component--labelClamp')

        await expect(cells[3]).toHaveClass('design-component--stickyTop')
        await expect(cells[3]).toHaveClass('design-component--stickyLeft')
      `
    },
    {
      id: 'TableFlexItemTestStates',
      name: {
        en: 'Test: Selected, disabled and combined states',
        ru: 'Тест: Выбранное, отключенное и комбинированные состояния'
      },
      propsName: ['selected', 'disabled', 'isSkeleton'],
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent label="Default"/>
            <DesignComponent label="Selected" selected/>
            <DesignComponent label="Disabled" disabled/>
            <DesignComponent label="Selected + Disabled" selected disabled/>
            <DesignComponent label="Selected + Disabled + Skeleton" selected disabled :isSkeleton="true"/>
          </div>
        </DesignSkeleton>
      `,
      play: `
        const cells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(cells.length).toBe(5)

        // 0. Default clean state without false-positive ARIA
        await expect(cells[0]).toHaveAttribute('role', 'cell')
        await expect(cells[0]).not.toHaveAttribute('aria-selected')
        await expect(cells[0]).not.toHaveAttribute('aria-disabled')
        await expect(cells[0]).not.toHaveClass('design-component--selected')
        await expect(cells[0]).not.toHaveClass('design-component--disabled')

        // 1. Selected
        await expect(cells[1]).toHaveClass('design-component--selected')
        await expect(cells[1]).toHaveAttribute('aria-selected', 'true')
        await expect(cells[1]).not.toHaveAttribute('aria-disabled')

        // 2. Disabled
        await expect(cells[2]).toHaveClass('design-component--disabled')
        await expect(cells[2]).toHaveAttribute('aria-disabled', 'true')
        await expect(cells[2]).not.toHaveAttribute('aria-selected')

        // 3. Selected + Disabled combined
        await expect(cells[3]).toHaveClass('design-component--selected')
        await expect(cells[3]).toHaveClass('design-component--disabled')
        await expect(cells[3]).toHaveAttribute('aria-selected', 'true')
        await expect(cells[3]).toHaveAttribute('aria-disabled', 'true')

        // 4. Selected + Disabled + Skeleton combined
        await expect(cells[4]).toHaveClass('design-component--selected')
        await expect(cells[4]).toHaveClass('design-component--disabled')
        await expect(cells[4]).toHaveAttribute('aria-selected', 'true')
        await expect(cells[4]).toHaveAttribute('aria-disabled', 'true')
        expect(cells[4].querySelector<HTMLElement>('.design-component__label')?.className).toContain('skeleton__textVariant')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableFlexItem'} type={'tableFlexItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableFlexItemSkeleton}/>
    `,
    slots: `
<Canvas of={Component.TableFlexItemSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Flexbox-based cell within a flexible table row structure. Inherits from TableItem, renders div[role="cell"] by default, and manages flex-basis distribution via data-colspan/data-rowspan attributes (up to 12) without native HTML colspan/rowspan attributes.
Provides label and description rendering, optional tag changes, horizontal/vertical alignments, dividers (dividerX/dividerY), text clamping (labelClamp), skeleton loaders, selected/disabled ARIA states, sticky positions, and default/description/context slots.
Controlled via label, description, tag, colspan (1 to 12), rowspan, index, and state props (selected, disabled, isSkeleton). Use inside flexbox table container structures for fluid tabular layouts.
`,
    hide: true
  }
}
