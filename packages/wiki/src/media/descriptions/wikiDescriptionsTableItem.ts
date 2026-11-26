import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableItem component properties
 *
 * Описания свойств компонента TableItem
 */
export const wikiDescriptionsTableItem: StorybookComponentsDescriptionItem = {
  name: 'TableItem',
  description: {
    en: 'Baseline table cell component representing a td element',
    ru: 'Базовый компонент ячейки таблицы, представляющий элемент td'
  },
  possibilities: {
    en: [
      'support for standard `td` and custom tag configurations (`tag`)',
      'column and row span attributes (`colspan`, `rowspan`) and column index metadata (`index`)',
      'horizontal and vertical content alignment (`align`, `alignVertical`)',
      'optional horizontal and vertical cell dividers (`dividerX`, `dividerY`)',
      'label text clamping for high-density tables (`labelClamp`)',
      'sticky top and sticky left positioning (`stickyTop`, `stickyLeft`)',
      'integrated skeleton loading states (`isSkeleton`)',
      'disabled and selected states with ARIA synchronization (`selected`, `disabled`)',
      'custom content slots (`default`, `description`, `context`)'
    ],
    ru: [
      'поддержка стандартного `td` и настраиваемых тегов (`tag`)',
      'атрибуты объединения колонок и строк (`colspan`, `rowspan`) и метаданные индекса (`index`)',
      'горизонтальное и вертикальное выравнивание содержимого (`align`, `alignVertical`)',
      'опциональные горизонтальные и вертикальные разделители (`dividerX`, `dividerY`)',
      'ограничение высоты текста метки для плотных таблиц (`labelClamp`)',
      'липкое позиционирование сверху и слева (`stickyTop`, `stickyLeft`)',
      'интегрированные состояния загрузки скелетона (`isSkeleton`)',
      'обработка отключенного и выбранного состояний с синхронизацией ARIA (`selected`, `disabled`)',
      'пользовательские слоты содержимого (`default`, `description`, `context`)'
    ]
  },
  import: [],
  render: `
    <table>
      <tbody>
        <tr>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
        </tr>
      </tbody>
    </table>
  `,
  play: `
    const tableCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
    await expect(tableCells.length).toBe(3)
    await expect(tableCells[0].tagName).toBe('TD')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'TableItemAlignAndSpan',
      name: {
        en: 'Alignment, dividers, clamping and spans',
        ru: 'Выравнивание, разделители, обрезка текста и объединение ячеек'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <DesignComponent
                label="Left / Top"
                description="Default left alignment"
                align="left"
                alignVertical="top"
                :dividerX="true"
                :dividerY="true"
              />
              <DesignComponent
                label="Center / Center"
                align="center"
                alignVertical="center"
                :dividerX="true"
                :dividerY="true"
              />
              <DesignComponent
                label="Right / Bottom"
                align="right"
                alignVertical="bottom"
                :dividerY="true"
                :rowspan="2"
              />
            </tr>
            <tr>
              <DesignComponent
                label="Very long label text that demonstrates multi-line clamping across two spanned columns inside a dense data table cell"
                :colspan="2"
                :labelClamp="true"
                :dividerX="true"
                :dividerY="true"
              />
            </tr>
          </tbody>
        </table>
      `,
      play: `
        const tableCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(tableCells.length).toBe(4)

        await expect(tableCells[0]).toHaveClass('design-component--align--left')
        await expect(tableCells[0]).toHaveClass('design-component--alignVertical--top')
        await expect(tableCells[0]).toHaveClass('design-component--dividerX')
        await expect(tableCells[0]).toHaveClass('design-component--dividerY')

        await expect(tableCells[1]).toHaveClass('design-component--align--center')
        await expect(tableCells[1]).toHaveClass('design-component--alignVertical--center')
        await expect(tableCells[1]).toHaveClass('design-component--dividerX')

        await expect(tableCells[2]).toHaveClass('design-component--align--right')
        await expect(tableCells[2]).toHaveClass('design-component--alignVertical--bottom')
        await expect(tableCells[2]).toHaveAttribute('rowspan', '2')

        await expect(tableCells[3]).toHaveAttribute('colspan', '2')
        await expect(tableCells[3]).toHaveClass('design-component--labelClamp')
        await expect(tableCells[3]).toHaveClass('design-component--dividerX')
        await expect(tableCells[3]).toHaveClass('design-component--dividerY')
      `
    },
    {
      id: 'TableItemSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <DesignComponent
                labelId="custom-cell-label"
                descriptionId="custom-cell-description"
              >
                <template #default>
                  <strong data-testid="table-item-default-slot">Primary Slot Content</strong>
                </template>
                <template #description>
                  <span data-testid="table-item-description-slot">Secondary description slot</span>
                </template>
                <template #context>
                  <em data-testid="table-item-context-slot">Extra context slot</em>
                </template>
              </DesignComponent>
            </tr>
          </tbody>
        </table>
      `,
      play: `
        const canvas = within(canvasElement)
        const tableCell = canvasElement.querySelector<HTMLElement>('.design-component')
        await expect(tableCell).toBeInTheDocument()

        const labelElement = tableCell?.querySelector('.design-component__label')
        const descriptionElement = tableCell?.querySelector('.design-component__description')

        await expect(labelElement).toHaveAttribute('id', 'custom-cell-label')
        await expect(descriptionElement).toHaveAttribute('id', 'custom-cell-description')
        await expect(canvas.getByTestId('table-item-default-slot')).toHaveTextContent('Primary Slot Content')
        await expect(canvas.getByTestId('table-item-description-slot')).toHaveTextContent('Secondary description slot')
        await expect(canvas.getByTestId('table-item-context-slot')).toHaveTextContent('Extra context slot')
      `
    },
    {
      id: 'TableItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <tr>
                <DesignComponent
                  :isSkeleton="true"
                  label="Label"
                  description="Description"
                />
                <DesignComponent
                  :isSkeleton="true"
                  label="Second Label"
                  description="Second Description"
                />
              </tr>
            </tbody>
          </table>
        </DesignSkeleton>
      `,
      play: `
        const tableCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(tableCells.length).toBe(2)

        const skeletonLabels = canvasElement.querySelectorAll('[class*="skeleton__textVariant"]')
        await expect(skeletonLabels.length).toBeGreaterThanOrEqual(4)
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor props only — NEVER add to documentation)
    // =========================================================================
    {
      id: 'TableItemTestStatesStickyAndTag',
      name: {
        en: 'Test: States, sticky positioning, custom tag and index metadata',
        ru: 'Тест: Состояния, липкое позиционирование, кастомный тег и метаданные индекса'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <DesignComponent
                label="Default"
                index="default"
                keyItem="key-default"
                value="raw-default"
              />
              <DesignComponent
                label="Selected"
                index="selected"
                :selected="true"
              />
              <DesignComponent
                label="Disabled"
                index="disabled"
                :disabled="true"
              />
              <DesignComponent
                label="Selected + Disabled"
                index="combined"
                :selected="true"
                :disabled="true"
              />
              <DesignComponent
                label="Sticky Top"
                index="sticky-top"
                :stickyTop="true"
              />
              <DesignComponent
                label="Sticky Left"
                index="sticky-left"
                :stickyLeft="true"
              />
              <DesignComponent
                label="Sticky Both + Header Tag"
                tag="th"
                index="header-tag"
                :stickyTop="true"
                :stickyLeft="true"
              />
            </tr>
          </tbody>
        </table>
      `,
      play: `
        const tableCells = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(tableCells.length).toBe(7)

        // 0. Default cell
        await expect(tableCells[0].tagName).toBe('TD')
        await expect(tableCells[0]).toHaveAttribute('data-index', 'default')
        await expect(tableCells[0]).not.toHaveAttribute('aria-selected')
        await expect(tableCells[0]).not.toHaveAttribute('aria-disabled')

        // 1. Selected state
        await expect(tableCells[1]).toHaveClass('design-component--selected')
        await expect(tableCells[1]).toHaveAttribute('aria-selected', 'true')
        await expect(tableCells[1]).not.toHaveAttribute('aria-disabled')

        // 2. Disabled state
        await expect(tableCells[2]).toHaveClass('design-component--disabled')
        await expect(tableCells[2]).toHaveAttribute('aria-disabled', 'true')
        await expect(tableCells[2]).not.toHaveAttribute('aria-selected')

        // 3. Combined selected + disabled
        await expect(tableCells[3]).toHaveClass('design-component--selected')
        await expect(tableCells[3]).toHaveClass('design-component--disabled')
        await expect(tableCells[3]).toHaveAttribute('aria-selected', 'true')
        await expect(tableCells[3]).toHaveAttribute('aria-disabled', 'true')

        // 4. Sticky top
        await expect(tableCells[4]).toHaveClass('design-component--stickyTop')
        await expect(tableCells[4]).not.toHaveClass('design-component--stickyLeft')

        // 5. Sticky left
        await expect(tableCells[5]).toHaveClass('design-component--stickyLeft')
        await expect(tableCells[5]).not.toHaveClass('design-component--stickyTop')

        // 6. Sticky both + custom th tag
        await expect(tableCells[6].tagName).toBe('TH')
        await expect(tableCells[6]).toHaveAttribute('data-index', 'header-tag')
        await expect(tableCells[6]).toHaveClass('design-component--stickyTop')
        await expect(tableCells[6]).toHaveClass('design-component--stickyLeft')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableItem'} type={'tableItem'}/>

<Canvas of={Component.TableItemAlignAndSpan}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableItemSkeleton}/>
    `,
    slots: `
<Canvas of={Component.TableItemSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Representing a standard cell (td) within a table row. Manages label rendering, descriptions, optional tag changes, alignments, dividers, and text clamps.
Provides skeleton loaders, selected/disabled ARIA states, and sticky positioning. Renders as a semantic table cell.
Controlled via label, description, tag, colspan, rowspan, index, align, alignVertical, dividerX, dividerY, labelClamp, stickyTop, stickyLeft, and state props (selected, disabled). Use inside table row structures to display structured tabular data.
`,
    hide: true
  }
}
