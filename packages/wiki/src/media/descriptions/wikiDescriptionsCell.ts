import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Cell component properties
 *
 * Описания свойств компонента Cell
 */
export const wikiDescriptionsCell: StorybookComponentsDescriptionItem = {
  name: 'Cell',
  description: {
    en: 'Versatile container component for displaying structured content with labels, descriptions, and actions',
    ru: 'Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями'
  },
  possibilities: {
    en: [
      'flexible content structure with label, description, and caption',
      'interactive states including focus, selected, and disabled',
      'built-in icon and trailing icon support',
      'progress indicator integration',
      'divider customization options',
      'dynamic behavior with hover interactions',
      'skeleton loading state support',
      'click event handling with custom data'
    ],
    ru: [
      'гибкая структура контента с меткой, описанием и подписью',
      'интерактивные состояния включая focus, selected и disabled',
      'встроенная поддержка иконок и завершающих иконок',
      'интеграция индикатора прогресса',
      'возможности настройки разделителей',
      'динамическое поведение с взаимодействием при наведении',
      'поддержка состояния загрузки скелетона',
      'обработка событий клика с пользовательскими данными'
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'CellSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="Short description"
            label="Label A"
          />
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
        </DesignSkeleton>
      `,
      play: `
        const cellElements = canvasElement.querySelectorAll('.design-component')
        expect(cellElements.length).toBeGreaterThanOrEqual(2)
      `
    },
    {
      id: 'CellSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent icon="home">
          <template #default>Default slot content</template>
          <template #description>Description slot content</template>
          <template #caption>Caption slot content</template>
          <template #trailing>Trailing slot content</template>
          <template #body>Body slot content</template>
        </DesignComponent>
      `,
      play: `
        const canvas = within(canvasElement)
        expect(canvas.getByText('Default slot content')).toBeInTheDocument()
        expect(canvas.getByText('Description slot content')).toBeInTheDocument()
        expect(canvas.getByText('Caption slot content')).toBeInTheDocument()
        expect(canvas.getByText('Trailing slot content')).toBeInTheDocument()
        expect(canvas.getByText('Body slot content')).toBeInTheDocument()
      `
    },
    {
      id: 'CellIcons',
      name: {
        en: 'Start and trailing icons',
        ru: 'Начальная и завершающая иконки'
      },
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Home navigation"
            description="Leading icon aligned with text"
            icon="home"
          />
          <DesignComponent
            label="Settings section"
            description="Trailing chevron accessory"
            iconTrailing="chevron_right"
          />
          <DesignComponent
            label="Profile account"
            description="Leading icon aligned to top row"
            icon="person"
            iconTop
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        expect(canvas.getByText('Home navigation')).toBeInTheDocument()
        expect(canvas.getByText('Settings section')).toBeInTheDocument()
        expect(canvas.getByText('Profile account')).toBeInTheDocument()
      `
    },
    {
      id: 'CellDynamic',
      name: {
        en: 'Dynamic and interactive behavior',
        ru: 'Динамическое и интерактивное поведение'
      },
      setup: `
      const clickedCount = ref(0)
      const onClick = () => {
        clickedCount.value++
      }

      return {
        clickedCount,
        onClick
      }
      `,
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Clickable cell item"
            description="Click to increment counter"
            dynamic
            dynamicHover
            @click="onClick"
          />
          <div data-testid="counter-value" style="font-size: 12px;">Clicks: {{ clickedCount }}</div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const clickable = canvas.getByText('Clickable cell item')
        expect(clickable).toBeInTheDocument()
        await userEvent.click(clickable)
        const counter = canvas.getByTestId('counter-value')
        expect(counter.textContent).toContain('Clicks: 1')
      `
    },
    {
      id: 'CellTestStates',
      name: {
        en: 'Test: Disabled, selected, readonly and focus states',
        ru: 'Тест: Отключенное, выбранное, только чтение и состояние фокуса'
      },
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Disabled cell"
            description="Disabled interaction"
            disabled
          />
          <DesignComponent
            label="Selected cell"
            description="Selected state"
            selected
          />
          <DesignComponent
            label="Readonly cell"
            description="Readonly state"
            readonly
          />
          <DesignComponent
            label="Focus cell"
            description="Focus state"
            focus
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const disabledElement = canvas.getByText('Disabled cell').closest('.design-component')
        expect(disabledElement?.className).toContain('disabled')

        const selectedElement = canvas.getByText('Selected cell').closest('.design-component')
        expect(selectedElement?.className).toContain('selected')

        const readonlyElement = canvas.getByText('Readonly cell').closest('.design-component')
        expect(readonlyElement?.className).toContain('readonly')

        const focusElement = canvas.getByText('Focus cell').closest('.design-component')
        expect(focusElement?.className).toContain('focus')
      `
    },
    {
      id: 'CellTestDividers',
      name: {
        en: 'Test: Divider options and label dividers',
        ru: 'Тест: Варианты разделителей и разделители меток'
      },
      template: `
        <div style="display: flex; flex-direction: column;">
          <DesignComponent
            label="Item with default divider"
            divider
          />
          <DesignComponent
            label="Item with disabled divider"
            :divider="false"
          />
          <DesignComponent
            label="Item with always divider label"
            dividerLabel="always"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const firstCell = canvas.getByText('Item with default divider').closest('.design-component')
        expect(firstCell?.getAttribute('data-divider')).toBe('active')

        const secondCell = canvas.getByText('Item with disabled divider').closest('.design-component')
        expect(secondCell?.getAttribute('data-divider')).toBeNull()

        const thirdCell = canvas.getByText('Item with always divider label').closest('.design-component')
        expect(thirdCell?.className).toContain('dividerLabel')
      `
    },
    {
      id: 'CellTestTagsAndRoles',
      name: {
        en: 'Test: Semantic tags, custom roles and ARIA',
        ru: 'Тест: Семантические теги, кастомные роли и ARIA'
      },
      template: `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <DesignComponent
            label="Section tag item"
            tag="section"
          />
          <DesignComponent
            label="Custom role listitem"
            role="listitem"
          />
          <DesignComponent
            label="Dynamic button role"
            dynamic
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const sectionCell = canvas.getByText('Section tag item').closest('section')
        expect(sectionCell).not.toBeNull()

        const listitemCell = canvas.getByText('Custom role listitem').closest('[role="listitem"]')
        expect(listitemCell).not.toBeNull()

        const dynamicCell = canvas.getByText('Dynamic button role').closest('[role="button"]')
        expect(dynamicCell).not.toBeNull()
        expect(dynamicCell?.getAttribute('tabindex')).toBe('0')
      `
    },
    {
      id: 'CellTestProgress',
      name: {
        en: 'Test: Loading progress bar indicator',
        ru: 'Тест: Индикатор выполнения прогресс-бара'
      },
      template: `
        <DesignComponent
          label="Cell with loading progress"
          description="In-flight asynchronous process"
          loading
        />
      `,
      play: `
        const canvas = within(canvasElement)
        const cell = canvas.getByText('Cell with loading progress').closest('.design-component')
        expect(cell).not.toBeNull()
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Cell'} type={'cell'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CellSkeleton}/>

<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.CellIcons}/>

<StorybookDescriptions componentName={'Event'} type={'dynamic'}/>
<Canvas of={Component.CellDynamic}/>
`,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
`,
    slots: `
<Canvas of={Component.CellSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
`
  },
  ai: {
    description: `
Universal list item component for building structured interfaces like menus, settings, and data lists. Provides a standardized row layout with dedicated areas for icons, text, and actions.
Features a composable structure with label, description, and caption support. Includes interactive states (hover, focus, selected, loading), built-in Ripple effect, and skeleton loading integration.
Highly flexible via slots (#default, #trailing, #body) and controlled through content props and navigation attributes (to/href). Use for clickable rows, menu items, or complex data entities in lists.
    `
  }
}
