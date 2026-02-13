import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsHorizontalScroll: StorybookComponentsDescriptionItem = {
  name: 'HorizontalScroll',
  description: {
    en: 'Component for creating a horizontally scrollable container. Supports smooth scrolling to the selected element.',
    ru: 'Компонент для создания горизонтально прокручиваемого контейнера. Поддерживает плавную прокрутку к выбранному элементу.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of content',
      'automatic scrolling to the selected element on mount',
      'support for custom tags',
      'slot for content with binding data for items'
    ],
    ru: [
      'горизонтальная прокрутка контента',
      'автоматическая прокрутка к выбранному элементу при монтировании',
      'поддержка пользовательских тегов',
      'слот для контента с данными привязки для элементов'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ classItem }">
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 160);">Item 7</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 175);">Item 8</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 195);">Item 9</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 215);">Item 10</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.05 240);">Item 11</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.06 265);">Item 12</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.07 285);">Item 13</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 305);">Item 14</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 325);">Item 15</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 345);">Item 16</div>
      </template>
    </DesignComponent>
  `,
  stories: [
    {
      id: 'HorizontalScrollBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent style="width: 100%;">
            <template #default="{ classItem }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 305);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 325);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 345);">Item 3</div>
            </template>
          </DesignComponent>

          <DesignComponent style="width: 100%;">
            <template #default="{ classItem, classItemSelected }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
              <div class="wiki-storybook-flex-center" :class="[classItem, classItemSelected]" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'HorizontalScroll'} type={'horizontalScroll'}/>
<StorybookDescriptions componentName={'HorizontalScroll'} type={'selected'}/>
<Canvas of={Component.HorizontalScrollBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'HorizontalScroll'} type={'expose.toSelected'}/>
    `
  },
  ai: {
    description: `
HorizontalScroll is a container component that enables horizontal scrolling for its content.
It is useful for displaying lists of items, galleries, or any content that exceeds the viewport width.

**Key Features:**
1. **Scrolling:**
   - Provides a scrollable area for content that overflows horizontally.
   - Supports smooth scrolling behavior.

2. **Selection:**
   - Can automatically scroll to a selected item (marked with a specific class) when the component mounts.
   - Exposes a \`toSelected\` method to programmatically scroll to the selected item.

3. **Slot Binding:**
   - The default slot provides \`binds\` object which should be applied to each child item.
   - This binding ensures correct styling and behavior for scroll items.

4. **Customization:**
   - \`tag\`: Allows changing the root element tag (default is \`div\`).
   - \`flush\`: Controls whether the scrollbar is flush with the content (implementation detail).

**Usage Examples:**

- **Basic List:**
  \`\`\`html
  <HorizontalScroll>
    <template #default="{ binds }">
      <div v-bind="binds">Item 1</div>
      <div v-bind="binds">Item 2</div>
    </template>
  </HorizontalScroll>
  \`\`\`
    `
  }
}
