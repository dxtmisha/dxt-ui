import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsHorizontalScroll: StorybookComponentsDescriptionItem = {
  name: 'HorizontalScroll',
  description: {
    en: 'A container component for creating horizontally scrollable lists or content areas.',
    ru: 'Контейнерный компонент для создания горизонтально прокручиваемых списков или областей контента.'
  },
  possibilities: {
    en: [
      'horizontal scrolling of content',
      'customizable root tag (`tag`)',
      'slot for content with exposed bindings for items'
    ],
    ru: [
      'горизонтальная прокрутка контента',
      'настраиваемый корневой тег (`tag`)',
      'слот для контента с доступными привязками для элементов'
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
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <DesignComponent>
              <template #default="{ classItem }">
                <div v-for="i in 10" :key="i" :class="classItem" style="width: 80px; height: 80px; background: var(--sys-color-primary-container); color: var(--sys-color-on-primary-container); display: flex; align-items: center; justify-content: center; border-radius: 8px; margin-right: 8px;">
                  {{ i }}
                </div>
              </template>
            </DesignComponent>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'HorizontalScroll'} type={'basic'}/>
<Canvas of={Component.HorizontalScrollBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'HorizontalScroll'} type={'expose'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="width: 100%;">
  <HorizontalScroll v-bind="args">
    <template #default="{ classItem }">
      <div :class="classItem" style="width: 64px; height: 64px; background: #e0e0e0; margin-right: 8px;"></div>
      <div :class="classItem" style="width: 64px; height: 64px; background: #e0e0e0; margin-right: 8px;"></div>
      <div :class="classItem" style="width: 64px; height: 64px; background: #e0e0e0; margin-right: 8px;"></div>
    </template>
  </HorizontalScroll>
</div>
    `,
    description: `
HorizontalScroll is a layout component that enables horizontal scrolling for its children.
It is useful for displaying lists of items, cards, or images that exceed the container's width.

**Key Features:**

1.  **Horizontal Layout:** Automatically arranges children in a row and enables scrolling if they overflow.
2.  **Item Styling:** Exposes a \`classItem\` (or \`binds\`) via the default slot to ensure proper spacing and behavior (e.g., \`flex-shrink: 0\`) for child items.
3.  **Custom Tag:** Allows changing the root element tag via the \`tag\` prop (default is \`div\`).

**Usage:**

Use the default slot to place content. Apply the exposed \`classItem\` to each direct child to ensure they behave correctly within the scroll container.

\`\`\`html
<HorizontalScroll>
  <template #default="{ classItem }">
    <div :class="classItem">Item 1</div>
    <div :class="classItem">Item 2</div>
    <!-- ... -->
  </template>
</HorizontalScroll>
\`\`\`
    `
  }
}
