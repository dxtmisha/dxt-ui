import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Area component properties
 *
 * Описания свойств компонента Area
 */
export const wikiDescriptionsArea: StorybookComponentsDescriptionItem = {
  name: 'Area',
  description: {
    en: 'Component for rendering content based on the current area context',
    ru: 'Компонент для отображения контента в зависимости от текущего контекста области'
  },
  possibilities: {
    en: [
      'automatic slot selection based on injected area value',
      'fallback to a default area if no injection is found',
      'supports nested areas and context inheritance',
      'renders default slot if no specific area slot matches'
    ],
    ru: [
      'автоматический выбор слота на основе внедренного значения области',
      'возврат к области по умолчанию, если внедрение не найдено',
      'поддержка вложенных областей и наследования контекста',
      'отображение слота по умолчанию, если ни один специфический слот области не подходит'
    ]
  },
  import: [],
  render: `
    <DesignComponent v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </DesignComponent>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Area'} type={'area'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Area'} type={'slot'}/>
    `
  },
  ai: {
    description: `
A utility component that acts as a dynamic slot switcher based on an "area" context.
It retrieves the current area value from the injection context (UI_AREA_VALUE) or uses the 'areaDefault' prop.
It then renders the slot that matches the area name. If no matching slot is found, it falls back to the 'default' slot.
This is particularly useful for building layouts where different components need to render different content depending on where they are placed (e.g., in a header, footer, or side panel).
    `
  }
}
