import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ListItem component properties
 *
 * Описания свойств компонента ListItem
 */
export const wikiDescriptionsListItem: StorybookComponentsDescriptionItem = {
  name: 'ListItem',
  description: {
    en: 'Versatile list item component for displaying structured content',
    ru: 'Универсальный компонент элемента списка для отображения структурированного контента'
  },
  possibilities: {
    en: [
      'multiple content areas: label, description, prefix, suffix, caption',
      'icon support with flexible positioning and alignment',
      'badge integration for status indicators',
      'interactive states: focus, selected, disabled, readonly',
      'progress and skeleton loading states',
      'ripple effect for enhanced user feedback',
      'flexible tag options: button, link, div, span',
      'built-in accessibility support',
      'customizable through design tokens'
    ],
    ru: [
      'множественные области контента: метка, описание, префикс, суффикс, заголовок',
      'поддержка иконок с гибким позиционированием и выравниванием',
      'интеграция значков для индикаторов статуса',
      'интерактивные состояния: фокус, выбранный, отключенный, только для чтения',
      'состояния загрузки с прогрессом и скелетоном',
      'эффект пульсации для улучшенной обратной связи',
      'гибкие варианты тегов: кнопка, ссылка, div, span',
      'встроенная поддержка доступности',
      'настраиваемый через токены дизайна'
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
      id: 'ListItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <DesignComponent>Simple Item</DesignComponent>
        <DesignComponent icon="person">Item with Icon</DesignComponent>
        <DesignComponent description="Additional information">Item with Description</DesignComponent>
        <DesignComponent focus>Focus</DesignComponent>
        <DesignComponent selected>Selected</DesignComponent>
        <DesignComponent disabled>Disabled</DesignComponent>
        <DesignComponent readonly>Readonly</DesignComponent>
        <DesignComponent prefix="01" suffix="Info">With Prefix & Suffix</DesignComponent>
        <DesignComponent caption="Caption" description="Description text here">Full Content</DesignComponent>
        <DesignComponent icon="star" badge="new">Icon with Badge</DesignComponent>
      `
    },
    {
      id: 'ListItemHighlight',
      name: {
        en: 'Highlighting',
        ru: 'Выделение'
      },
      template: `
        <DesignComponent highlight="search" label="Search result item"/>
        <DesignComponent highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
        <DesignComponent highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
        <DesignComponent highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
      `
    },
    {
      id: 'ListItemFill',
      name: {
        en: 'Fill',
        ru: 'Заливка'
      },
      template: `
        <DesignComponent label="Default fill"/>
        <DesignComponent fill="#ff0000" label="Red fill"/>
        <DesignComponent fill="rgb(0, 128, 255)" label="Blue fill"/>
        <DesignComponent fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
      `
    },
    {
      id: 'ListItemSkeleton',
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
          >Item A</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListItem'} type={'basic'}/>
<Canvas of={Component.ListItemBasic}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListItemHighlight}/>

<StorybookDescriptions componentName={'ListItem'} type={'fill'}/>
<Canvas of={Component.ListItemFill}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ListItemSkeleton}/>
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
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slot.trailing'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slot.body'}/>
    `
  }
}
