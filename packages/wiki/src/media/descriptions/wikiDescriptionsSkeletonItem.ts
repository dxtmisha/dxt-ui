import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for SkeletonItem component properties
 *
 * Описания свойств компонента SkeletonItem
 */
export const wikiDescriptionsSkeletonItem: StorybookComponentsDescriptionItem = {
  name: 'SkeletonItem',
  description: {
    en: 'An individual skeleton placeholder item element',
    ru: 'Отдельный элемент заглушки скелетона'
  },
  possibilities: {
    en: [
      'configurable text, background, and border placeholder tokens',
      'random text generation with configurable length or range',
      'support for static label or custom slot content',
      'flexible tag property for structural rendering'
    ],
    ru: [
      'настраиваемые токены заглушек для текста, фона и рамки',
      'генерация случайного текста с настраиваемой длиной или диапазоном',
      'поддержка статического текста или пользовательского содержимого слота',
      'гибкое свойство tag для структурного рендеринга'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-group">
      <DesignComponent v-bind="args" text style="width: 200px;"/>
    </div>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'SkeletonItem'} type={'skeletonItem'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="min-height: 48px;">
  <SkeletonItem v-bind="args" text style="width: 200px;" />
</div>
    `,
    description: `
An individual skeleton item component for generating custom-shaped loading placeholders, text lines, backgrounds, and borders within a Skeleton component.
Supports automatic random text generation based on the length prop (number or [min, max] range), static label text, or custom slot content.
Controlled via boolean style token props (text, textVariant, background, backgroundVariant, border, borderVariant) and the tag prop. Use inside a Skeleton container to assemble custom loading layouts.
    `
  }
}
