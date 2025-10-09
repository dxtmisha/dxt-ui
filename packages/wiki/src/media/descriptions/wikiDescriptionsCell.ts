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
  import: [],
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
            description="Short desc."
            label="A"
          />
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </DesignSkeleton>
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
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Cell'} type={'cell'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CellSkeleton}/>
`,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<Canvas of={Component.CellSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
`
  }
}
