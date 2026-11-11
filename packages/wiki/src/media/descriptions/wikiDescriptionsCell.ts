import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Cell component properties
 *
 * Описания свойств компонента Cell
 */
export const wikiDescriptionsCell: StorybookComponentsDescriptionItem = {
  name: 'Cell',
  description: {
    en: 'Versatile container component for displaying structured content rows with hierarchical text (label, caption, description), media accessories, trailing actions, and interactive states.',
    ru: 'Универсальный контейнерный компонент для структурированного отображения строк контента с текстовой иерархией (метка, подпись, описание), медиа-аксессуарами, завершающими действиями и интерактивными состояниями.'
  },
  possibilities: {
    en: [
      'structured typography hierarchy with dedicated label, caption, and description slots and props',
      'interactive state handling: dynamic hover feedback, focus outlines, selected indicators, readonly, and disabled',
      'first-class icon accessory support with leading icon, trailing accessory, and iconTop vertical alignment',
      'integrated progress bar with loading state and smooth content opacity transitions',
      'divider options with automatic adjacent border detection and persistent label divider borders',
      'polymorphic rendering via custom tag prop (div, a, button, section) with accessible role and tabindex mapping',
      'zero-duplication skeleton loading mode via isSkeleton inside DesignSkeleton',
      'programmatic event inspection and data binding via getValue() and getDetail()'
    ],
    ru: [
      'структурированная иерархия типографики с выделенными слотами и свойствами для метки, подписи и описания',
      'управление интерактивными состояниями: динамический hover, контур фокуса, выбранное состояние, readonly и disabled',
      'первоклассная поддержка иконок: ведущая иконка, завершающий аксессуар и выравнивание iconTop по верхнему краю',
      'встроенный индикатор прогресса с состоянием loading и плавными переходами прозрачности контента',
      'настройка разделителей с автоматическим расчетом смежных границ и постоянными разделителями меток',
      'полиморфный рендеринг через свойство tag (div, a, button, section) с корректным маппингом role и tabindex',
      'режим скелетона без дублирования верстки через isSkeleton внутри DesignSkeleton',
      'программный доступ к данным событий и свойствам через методы getValue() и getDetail()'
    ]
  },
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--compact">
      <DesignComponent v-bind="args"/>
    </div>
  `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\'',
    'import type { CellExpose } from \'@dxtmisha/constructor/Cell\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (User-Facing)
    // =========================================================================
    {
      id: 'CellStructure',
      name: {
        en: 'Typography hierarchy & structure',
        ru: 'Иерархия типографики и структура'
      },
      propsName: ['label', 'caption', 'description', 'body'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Simple Label Only"
          />
          <DesignComponent
            label="Storage Space"
            caption="75% used"
          />
          <DesignComponent
            label="Account Security"
            description="Two-factor authentication is active on all recognized devices"
          />
          <DesignComponent
            label="Cloud Backup"
            caption="Synchronized"
            description="Last backup completed today at 14:30 from primary workstation"
          />
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

const canvas = within(canvasElement)
await expect(canvas.getByText('Simple Label Only')).toBeInTheDocument()
await expect(canvas.getByText('Storage Space')).toBeInTheDocument()
await expect(canvas.getByText('75% used')).toBeInTheDocument()
await expect(canvas.getByText('Account Security')).toBeInTheDocument()
await expect(canvas.getByText('Two-factor authentication is active on all recognized devices')).toBeInTheDocument()
await expect(canvas.getByText('Cloud Backup')).toBeInTheDocument()
await expect(canvas.getByText('Synchronized')).toBeInTheDocument()
await expect(canvas.getByText('Last backup completed today at 14:30 from primary workstation')).toBeInTheDocument()
      `
    },
    {
      id: 'CellIcons',
      name: {
        en: 'Icons & top alignment',
        ru: 'Иконки и выравнивание по верху'
      },
      propsName: ['icon', 'iconTrailing', 'iconTop'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Leading Icon"
            description="Primary navigation item with start icon"
            icon="home"
          />
          <DesignComponent
            label="Trailing Accessory"
            description="Row with trailing navigation chevron accessory"
            iconTrailing="chevron_right"
          />
          <DesignComponent
            label="Dual Icons"
            description="Both leading and trailing accessories configured"
            icon="mail"
            iconTrailing="open_in_new"
          />
          <DesignComponent
            label="Top Aligned Icon"
            description="Multi-line extended description showing that the leading icon stays pinned to the top line instead of centering vertically"
            icon="account_circle"
            iconTop
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Leading Icon')).toBeInTheDocument()
await expect(canvas.getByText('Trailing Accessory')).toBeInTheDocument()
await expect(canvas.getByText('Dual Icons')).toBeInTheDocument()
await expect(canvas.getByText('Top Aligned Icon')).toBeInTheDocument()

const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items[0].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__trailing')).toBeInTheDocument()
await expect(items[2].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[2].querySelector('.design-component__trailing')).toBeInTheDocument()
await expect(items[3]).toHaveClass('design-component--iconTop')
      `
    },
    {
      id: 'CellDynamic',
      name: {
        en: 'Dynamic & hover feedback',
        ru: 'Динамическое поведение и hover-эффект'
      },
      propsName: ['dynamic', 'dynamicHover'],
      setup: `
      const clickCount = ref(0)
      const onCellClick = () => {
        clickCount.value++
      }

      return {
        clickCount,
        onCellClick
      }
      `,
      template: `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <DesignComponent
            label="Actionable Dynamic Cell"
            description="Clickable row with hover feedback, keyboard focus outline and ripple response"
            dynamic
            dynamicHover
            @click="onCellClick"
          />
          <div data-testid="cell-click-counter" class="wiki-storybook-card" style="font-size: 13px;">
            Total Clicks: {{ clickCount }}
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const dynamicCell = canvas.getByText('Actionable Dynamic Cell').closest<HTMLElement>('.design-component')
await expect(dynamicCell).not.toBeNull()
await expect(dynamicCell).toHaveClass('design-component--dynamic')
await expect(dynamicCell).toHaveClass('design-component--dynamicHover')
await expect(dynamicCell).toHaveAttribute('role', 'button')
await expect(dynamicCell).toHaveAttribute('tabindex', '0')

await userEvent.click(dynamicCell!)
const counter = canvas.getByTestId('cell-click-counter')
await expect(counter.textContent).toContain('Total Clicks: 1')
      `
    },
    {
      id: 'CellSlots',
      name: {
        en: 'Composable template slots',
        ru: 'Композируемые слоты шаблона'
      },
      template: `
        <DesignComponent icon="widgets">
          <template #default>Default Slot Title</template>
          <template #caption>Custom Caption Badge</template>
          <template #description>Custom description content rendered via dedicated description slot</template>
          <template #trailing>
            <span style="font-size: 12px; font-weight: 600; opacity: 0.7;">EXTRA ACTION</span>
          </template>
          <template #body>
            <div style="padding-top: 6px; font-size: 12px; opacity: 0.8; border-top: 1px dashed rgba(128,128,128,0.3); margin-top: 6px;">
              Expandable body slot with supplementary metadata or nested components
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const canvas = within(canvasElement)
await expect(canvas.getByText('Default Slot Title')).toBeInTheDocument()
await expect(canvas.getByText('Custom Caption Badge')).toBeInTheDocument()
await expect(canvas.getByText('Custom description content rendered via dedicated description slot')).toBeInTheDocument()
await expect(canvas.getByText('EXTRA ACTION')).toBeInTheDocument()
await expect(canvas.getByText('Expandable body slot with supplementary metadata or nested components')).toBeInTheDocument()
      `
    },
    {
      id: 'CellSkeleton',
      name: {
        en: 'Skeleton loading placeholders',
        ru: 'Состояние загрузки со скелетоном'
      },
      components: ['Skeleton'],
      propsName: ['isSkeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <DesignComponent
              :isSkeleton="true"
              label="Primary Account Name"
              description="Billing and invoice management summary"
              caption="Active"
            />
            <DesignComponent
              :isSkeleton="true"
              label="Extended Network Setting"
              description="Detailed network topology and configuration parameters for data synchronization"
              caption="Pending"
            />
          </div>
        </DesignSkeleton>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(2)
      `
    },
    {
      id: 'CellExpose',
      name: {
        en: 'Programmatic methods & inspection',
        ru: 'Программные методы и инспекция'
      },
      setup: `
      const cellReference = ref<CellExpose>()
      const inspectedValue = ref<string>('')
      const inspectedDetail = ref<string>('')

      const onInspect = () => {
        inspectedValue.value = String(cellReference.value?.getValue() ?? 'none')
        inspectedDetail.value = JSON.stringify(cellReference.value?.getDetail() ?? {})
      }

      return {
        cellReference,
        inspectedValue,
        inspectedDetail,
        onInspect
      }
      `,
      template: `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <DesignComponent
            ref="cellReference"
            label="Inspection Target Row"
            description="Provides programmatic getValue() and getDetail() access"
            value="account-9482"
            :detail="{ role: 'manager', permission: 'admin' }"
          />
          <button
            type="button"
            class="wiki-storybook-button"
            @click="onInspect"
          >
            Inspect Cell Expose
          </button>
          <div class="wiki-storybook-card" style="font-size: 13px;">
            <div><strong>Value:</strong> <span data-testid="expose-value">{{ inspectedValue }}</span></div>
            <div><strong>Detail:</strong> <span data-testid="expose-detail">{{ inspectedDetail }}</span></div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const button = canvas.getByRole('button', { name: 'Inspect Cell Expose' })
await userEvent.click(button)

const valueElement = canvas.getByTestId('expose-value')
await expect(valueElement.textContent).toBe('account-9482')

const detailElement = canvas.getByTestId('expose-detail')
await expect(detailElement.textContent).toContain('manager')
await expect(detailElement.textContent).toContain('admin')
      `
    },
    {
      id: 'CellEventClick',
      name: {
        en: 'Click & clickLite events',
        ru: 'События click и clickLite'
      },
      setup: `
      const lastEventName = ref<string>('none')
      const lastEventValue = ref<string>('')

      const handleClick = (_event: MouseEvent, value: any) => {
        lastEventName.value = 'click'
        lastEventValue.value = String(value)
      }

      const handleClickLite = (_event: MouseEvent, value: any) => {
        lastEventName.value = 'clickLite'
        lastEventValue.value = String(value)
      }

      return {
        lastEventName,
        lastEventValue,
        handleClick,
        handleClickLite
      }
      `,
      template: `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <DesignComponent
            label="Click Event Dispatcher"
            description="Triggers both onClick and onClickLite when clicked"
            value="cell-payload-123"
            dynamic
            @click="handleClick"
            @clickLite="handleClickLite"
          />
          <div class="wiki-storybook-card" style="font-size: 13px;">
            <div><strong>Last Event:</strong> <span data-testid="event-name">{{ lastEventName }}</span></div>
            <div><strong>Payload Value:</strong> <span data-testid="event-value">{{ lastEventValue }}</span></div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const cell = canvas.getByText('Click Event Dispatcher').closest<HTMLElement>('.design-component')
await expect(cell).not.toBeNull()

await userEvent.click(cell!)
const eventName = canvas.getByTestId('event-name')
const eventValue = canvas.getByTestId('event-value')
await expect(eventName.textContent).not.toBe('none')
await expect(eventValue.textContent).toBe('cell-payload-123')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Automated QA Only)
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'CellTestStates',
      name: {
        en: 'Test: Disabled, selected, readonly and focus states',
        ru: 'Тест: Отключенное, выбранное, только чтение и состояние фокуса'
      },
      propsName: ['disabled', 'selected', 'readonly', 'focus'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Disabled Cell"
            description="Disabled interaction state"
            disabled
          />
          <DesignComponent
            label="Selected Cell"
            description="Selected active item state"
            selected
          />
          <DesignComponent
            label="Readonly Cell"
            description="Readonly non-editable display state"
            readonly
          />
          <DesignComponent
            label="Focus Cell"
            description="Focus highlight state"
            focus
          />
          <DesignComponent
            label="Disabled + Selected"
            description="Simultaneously disabled and selected"
            disabled
            selected
          />
          <DesignComponent
            label="Disabled + Readonly"
            description="Simultaneously disabled and readonly"
            disabled
            readonly
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const disabledCell = canvas.getByText('Disabled Cell').closest<HTMLElement>('.design-component')
await expect(disabledCell).toHaveClass('design-component--disabled')

const selectedCell = canvas.getByText('Selected Cell').closest<HTMLElement>('.design-component')
await expect(selectedCell).toHaveClass('design-component--selected')

const readonlyCell = canvas.getByText('Readonly Cell').closest<HTMLElement>('.design-component')
await expect(readonlyCell).toHaveClass('design-component--readonly')

const focusCell = canvas.getByText('Focus Cell').closest<HTMLElement>('.design-component')
await expect(focusCell).toHaveClass('design-component--focus')

const disabledSelectedCell = canvas.getByText('Disabled + Selected').closest<HTMLElement>('.design-component')
await expect(disabledSelectedCell).toHaveClass('design-component--disabled')
await expect(disabledSelectedCell).toHaveClass('design-component--selected')

const disabledReadonlyCell = canvas.getByText('Disabled + Readonly').closest<HTMLElement>('.design-component')
await expect(disabledReadonlyCell).toHaveClass('design-component--disabled')
await expect(disabledReadonlyCell).toHaveClass('design-component--readonly')
      `
    },
    {
      id: 'CellTestDividers',
      name: {
        en: 'Test: Divider options and label dividers',
        ru: 'Тест: Варианты разделителей и разделители меток'
      },
      propsName: ['divider', 'dividerLabel'],
      template: `
        <div style="display: flex; flex-direction: column;">
          <DesignComponent
            label="Default Active Divider"
            divider
          />
          <DesignComponent
            label="Adjacent Active Divider"
            divider
          />
          <DesignComponent
            label="Disabled Divider"
            :divider="false"
          />
          <DesignComponent
            label="Always Label Divider"
            dividerLabel="always"
          />
          <DesignComponent
            label="None Label Divider"
            dividerLabel="none"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const firstCell = canvas.getByText('Default Active Divider').closest<HTMLElement>('.design-component')
await expect(firstCell).toHaveAttribute('data-divider', 'active')

const secondCell = canvas.getByText('Adjacent Active Divider').closest<HTMLElement>('.design-component')
await expect(secondCell).toHaveAttribute('data-divider', 'active')

const thirdCell = canvas.getByText('Disabled Divider').closest<HTMLElement>('.design-component')
await expect(thirdCell?.getAttribute('data-divider')).toBeNull()

const fourthCell = canvas.getByText('Always Label Divider').closest<HTMLElement>('.design-component')
await expect(fourthCell).toHaveClass('design-component--dividerLabel--always')

const fifthCell = canvas.getByText('None Label Divider').closest<HTMLElement>('.design-component')
await expect(fifthCell).toHaveClass('design-component--dividerLabel--none')
      `
    },
    {
      id: 'CellTestTagsAndLinks',
      name: {
        en: 'Test: Polymorphic tags and anchor link rendering',
        ru: 'Тест: Полиморфные теги и рендеринг ссылок anchor'
      },
      propsName: ['tag', 'href', 'target'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Default Div Tag"
            tag="div"
          />
          <DesignComponent
            label="Semantic Section Tag"
            tag="section"
          />
          <DesignComponent
            label="Native Button Tag"
            tag="button"
          />
          <DesignComponent
            label="Anchor Element Link"
            description="Anchor link reset without default blue color or underline"
            tag="a"
            href="https://example.com"
            target="_blank"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const divCell = canvas.getByText('Default Div Tag').closest('.design-component')
await expect(divCell?.tagName).toBe('DIV')

const sectionCell = canvas.getByText('Semantic Section Tag').closest('section')
await expect(sectionCell).not.toBeNull()

const buttonCell = canvas.getByText('Native Button Tag').closest('button')
await expect(buttonCell).not.toBeNull()

const anchorCell = canvas.getByText('Anchor Element Link').closest('a')
await expect(anchorCell).not.toBeNull()
await expect(anchorCell).toHaveAttribute('href', 'https://example.com')
await expect(anchorCell).toHaveAttribute('target', '_blank')
      `
    },
    {
      id: 'CellTestRolesAndAria',
      name: {
        en: 'Test: Custom roles and accessibility attributes',
        ru: 'Тест: Кастомные роли и атрибуты доступности'
      },
      propsName: ['role', 'ariaLabel'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="List Item Role"
            role="listitem"
          />
          <DesignComponent
            label="Custom Button Role"
            role="button"
          />
          <DesignComponent
            label="Accessible Aria Label"
            ariaLabel="Custom accessibility label for screen readers"
          />
          <DesignComponent
            label="Dynamic Automatic Button Role"
            dynamic
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const listitemCell = canvas.getByText('List Item Role').closest('[role="listitem"]')
await expect(listitemCell).not.toBeNull()

const customButtonCell = canvas.getByText('Custom Button Role').closest('[role="button"]')
await expect(customButtonCell).not.toBeNull()

const ariaCell = canvas.getByText('Accessible Aria Label').closest('[aria-label="Custom accessibility label for screen readers"]')
await expect(ariaCell).not.toBeNull()

const dynamicCell = canvas.getByText('Dynamic Automatic Button Role').closest<HTMLElement>('.design-component')
await expect(dynamicCell).toHaveAttribute('role', 'button')
await expect(dynamicCell).toHaveAttribute('tabindex', '0')
      `
    },
    {
      id: 'CellTestProgress',
      name: {
        en: 'Test: Loading progress bar indicator',
        ru: 'Тест: Индикатор выполнения прогресс-бара'
      },
      propsName: ['loading', 'progressAttrs'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Cell with Active Progress"
            description="In-flight asynchronous process"
            loading
          />
          <DesignComponent
            label="Progress with Disabled State"
            description="Combined loading and disabled states"
            loading
            disabled
          />
          <DesignComponent
            label="Progress with Custom Attrs"
            description="Circular variant inside cell progress"
            loading
            :progressAttrs="{ circular: true }"
          />
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const firstCell = canvas.getByText('Cell with Active Progress').closest<HTMLElement>('.design-component')
await expect(firstCell).not.toBeNull()

const secondCell = canvas.getByText('Progress with Disabled State').closest<HTMLElement>('.design-component')
await expect(secondCell).toHaveClass('design-component--disabled')

const thirdCell = canvas.getByText('Progress with Custom Attrs').closest<HTMLElement>('.design-component')
await expect(thirdCell).not.toBeNull()
      `
    },
    {
      id: 'CellTestCombinations',
      name: {
        en: 'Test: Coupled props and interactive combinations',
        ru: 'Тест: Связанные свойства и интерактивные комбинации'
      },
      propsName: ['dynamic', 'disabled', 'readonly', 'dynamicHover', 'iconTop'],
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Dynamic + Disabled"
            description="Disabled precedence over dynamic interaction"
            dynamic
            disabled
          />
          <DesignComponent
            label="Dynamic + Readonly"
            description="Readonly non-editable dynamic row"
            dynamic
            readonly
          />
          <DesignComponent
            label="DynamicHover + Selected"
            description="Combined hover and selected visual indicators"
            dynamicHover
            selected
          />
          <DesignComponent
            label="Full Accessory Alignment"
            caption="Caption Text"
            description="Long multi-line description text combined with icon, trailing accessory, and iconTop alignment"
            icon="settings"
            iconTrailing="arrow_forward"
            iconTop
          >
            <template #body>
              <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">Nested sub-information</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const dynamicDisabledCell = canvas.getByText('Dynamic + Disabled').closest<HTMLElement>('.design-component')
await expect(dynamicDisabledCell).toHaveClass('design-component--disabled')
await expect(dynamicDisabledCell).toHaveClass('design-component--dynamic')

const dynamicReadonlyCell = canvas.getByText('Dynamic + Readonly').closest<HTMLElement>('.design-component')
await expect(dynamicReadonlyCell).toHaveClass('design-component--readonly')
await expect(dynamicReadonlyCell).toHaveClass('design-component--dynamic')

const dynamicSelectedCell = canvas.getByText('DynamicHover + Selected').closest<HTMLElement>('.design-component')
await expect(dynamicSelectedCell).toHaveClass('design-component--dynamicHover')
await expect(dynamicSelectedCell).toHaveClass('design-component--selected')

const fullCell = canvas.getByText('Full Accessory Alignment').closest<HTMLElement>('.design-component')
await expect(fullCell).toHaveClass('design-component--iconTop')
await expect(canvas.getByText('Nested sub-information')).toBeInTheDocument()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Cell'} type={'cell'}/>
<Canvas of={Component.CellStructure}/>

<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.CellIcons}/>

<StorybookDescriptions componentName={'Event'} type={'dynamic'}/>
<Canvas of={Component.CellDynamic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CellSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<Canvas of={Component.CellEventClick}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
<Canvas of={Component.CellExpose}/>
    `,
    slots: `
<Canvas of={Component.CellSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent
    label="Account Profile"
    description="Manage your account preferences and notifications"
    caption="Admin"
    icon="account_circle"
    iconTrailing="chevron_right"
    dynamic
    dynamicHover
  />
</div>
    `,
    description: `
Universal list item and container component for building structured rows in menus, settings, and data lists. Provides a standardized row layout with dedicated areas for icons, text hierarchy (label, caption, description), trailing accessories, and expandable body content.
Features built-in support for interactive states (dynamic hover, focus, selected, readonly, disabled), smooth progress indicators for loading state, tactile Ripple effects, and seamless skeleton loading integration.
Highly customizable via slots (#default, #label, #caption, #description, #icon, #trailing, #body) and flexible polymorphic rendering via the "tag" prop (div, a, button, section) with automatic ARIA role calculation and anchor link styling.
    `
  }
}
