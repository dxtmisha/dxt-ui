import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Icon component properties
 *
 * Описания свойств компонента Icon
 */
export const wikiDescriptionsIcon: StorybookComponentsDescriptionItem = {
  name: 'Icon',
  description: {
    en: 'Component for displaying vector icons with support for state management, interactive accessibility, automatic directionality adaptation, and design system styling.',
    ru: 'Компонент для отображения векторных иконок с поддержкой управления состоянием, интерактивной доступностью, автоматической адаптацией направления и стилизацией дизайн-системы.'
  },
  possibilities: {
    en: [
      'rendering icons by identifier or `Image` property bindings',
      'toggling between primary (`icon`) and active (`iconActive`) icons based on the `active` state',
      'interactive mode (`dynamic`) with `@click` / `@clickLite` events, keyboard navigation (`tabindex`), and automatic ARIA attributes (`role`, `ariaLabel`, `aria-disabled`)',
      'visual state transformations via 180-degree rotation (`turn`), automatic RTL mirroring (`dir`), `hide`, and `disabled`',
      'integration with the color palette (`asPalette`) and background substrate (`overlay`)',
      'displaying a skeleton loader placeholder (`isSkeleton`)',
      'forwarding image `load` events (`@load`) and programmatic state inspection via `isActive()`, `getValue()`, and `getDetail()`'
    ],
    ru: [
      'рендеринг иконок по идентификатору или объекту свойств `Image`',
      'переключение между основной (`icon`) и активной (`iconActive`) иконками в зависимости от состояния `active`',
      'интерактивный режим (`dynamic`) с событиями `@click` / `@clickLite`, навигацией с клавиатуры (`tabindex`) и автоматическими ARIA-атрибутами (`role`, `ariaLabel`, `aria-disabled`)',
      'визуальные трансформации состояния с помощью поворота на 180 градусов (`turn`), автоматического зеркалирования для RTL (`dir`), `hide` и `disabled`',
      'интеграция с цветовой палитрой (`asPalette`) и фоновой подложкой (`overlay`)',
      'отображение заполнителя (скелетона) при загрузке (`isSkeleton`)',
      'проксирование события загрузки изображения (`@load`) и программный доступ к состоянию через `isActive()`, `getValue()` и `getDetail()`'
    ]
  },
  import: [],
  stories: [
    {
      id: 'IconState',
      name: {
        en: 'Icon state',
        ru: 'Состояние иконки'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignComponent icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
      `
    },
    {
      id: 'IconDirection',
      name: {
        en: 'Direction',
        ru: 'Направление компонента'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
        </div>
      `
    },
    {
      id: 'IconPalette',
      name: {
        en: 'Palette',
        ru: 'Палитра'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignComponent icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <DesignComponent icon="home" asPalette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Overlay</div>
            <DesignComponent icon="home" asPalette overlay/>
          </div>
        </div>
      `
    },
    {
      id: 'IconSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton icon="home"/>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.IconState}/>

<StorybookDescriptions componentName={'Style'} type={'dir'}/>
<Canvas of={Component.IconDirection}/>

<StorybookDescriptions componentName={'Style'} type={'asPalette'}/>
<Canvas of={Component.IconPalette}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.IconSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Icon'} type={'expose.isActive'}/>
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Icon icon="home" v-bind="args"/>
</div>
    `,
    description: `
Vector icon orchestrator component that renders icons, images, and flags via the underlying Image component. Supports dynamic state switching between primary (icon) and active (iconActive) representations, 180-degree rotation (turn), automatic RTL mirroring (dir), background substrate (overlay), and color palette inheritance (asPalette).
Operates as a decorative element (aria-hidden="true") by default, or as an accessible interactive control with role="button", keyboard navigation (tabindex, Enter/Space), and @click/@clickLite events when dynamic is enabled. Integrates with Skeleton via isSkeleton and forwards @load events from child images.
Controlled via icon, iconActive, active, dynamic, turn, dir, and disabled props, and exposes isActive(), getValue(), and getDetail() methods. Use standalone or within composite components (Button, Chip, Field, Cell) for navigation, actions, and status indicators.
    `
  }
}
