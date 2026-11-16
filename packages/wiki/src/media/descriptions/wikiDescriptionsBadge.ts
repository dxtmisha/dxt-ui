import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Badge component properties
 *
 * Описания свойств компонента Badge
 */
export const wikiDescriptionsBadge: StorybookComponentsDescriptionItem = {
  name: 'Badge',
  description: {
    en: 'Small visual indicator for displaying status, count, or notifications on interface elements',
    ru: 'Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса'
  },
  possibilities: {
    en: [
      'displaying text, numeric counters (including 0), icons, or dot indicators',
      'maximum value capping (labelMax) and locale-aware number formatting',
      'flexible positioning relative to parent elements (overlap, vertical, horizontal)',
      'automatic hiding when content is absent (--hideAuto) and manual hide control',
      'accessibility support with ariaLabel and automatic aria-hidden on internal label'
    ],
    ru: [
      'отображение текста, числовых счётчиков (включая 0), иконок или точечных индикаторов',
      'ограничение максимального значения (labelMax) и локализованное форматирование чисел',
      'гибкое позиционирование относительно родительских элементов (overlap, vertical, horizontal)',
      'автоматическое скрытие при отсутствии контента (--hideAuto) и ручное управление hide',
      'поддержка доступности через ariaLabel и автоматический aria-hidden на внутренней метке'
    ]
  },
  import: [],
  render: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,
  play: `
const component = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'BadgeBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static">Badge</DesignComponent>
          <DesignComponent overlap="static" icon="home">Badge</DesignComponent>
          <DesignComponent overlap="static">99</DesignComponent>
          <DesignComponent overlap="static" label="999" label-max="99"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).toHaveTextContent('Badge')
await expect(items[0]).toHaveClass('design-component--overlap--static')
await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[2]).toHaveTextContent('99')
await expect(items[3]).toHaveTextContent('99+')
      `
    },
    {
      id: 'BadgeDot',
      name: {
        en: 'Dot',
        ru: 'Точечные (dot)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent dot overlap="static"/>
        </div>
      `,
      play: `
const item = canvasElement.querySelector<HTMLElement>('.design-component')
await expect(item).toBeInTheDocument()
await expect(item).toHaveClass('design-component--dot')
await expect(item).not.toHaveClass('design-component--hideAuto')
await expect(item?.querySelector('.design-component__label')).toBeNull()
      `
    },
    {
      id: 'BadgeOverlap',
      name: {
        en: 'Overlap & Positioning',
        ru: 'Перекрытие и позиционирование'
      },
      template: `
        <div class="wiki-storybook-flex">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent label="1" overlap="rectangular" vertical="top" horizontal="right"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent label="2" overlap="circular" vertical="bottom" horizontal="left"/>
          </div>
          <DesignComponent label="Static" overlap="static"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(3)

await expect(items[0]).toHaveClass('design-component--overlap--rectangular')
await expect(items[0]).toHaveClass('design-component--vertical--top')
await expect(items[0]).toHaveClass('design-component--horizontal--right')

await expect(items[1]).toHaveClass('design-component--overlap--circular')
await expect(items[1]).toHaveClass('design-component--vertical--bottom')
await expect(items[1]).toHaveClass('design-component--horizontal--left')

await expect(items[2]).toHaveClass('design-component--overlap--static')
      `
    },
    {
      id: 'BadgePrimary',
      name: {
        en: 'Primary',
        ru: 'Основные (primary)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary overlap="static" icon="home"/>
          <DesignComponent primary overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: 'primary'
    },
    {
      id: 'BadgeSecondary',
      name: {
        en: 'Secondary',
        ru: 'Второстепенные (secondary)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent secondary overlap="static" icon="home"/>
          <DesignComponent secondary overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: 'secondary'
    },
    {
      id: 'BadgeOutline',
      name: {
        en: 'Outline',
        ru: 'Контурные (outline)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent outline overlap="static" icon="home"/>
          <DesignComponent outline overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: 'outline'
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'BadgeTestNumbersAndFormatting',
      name: {
        en: 'Test: Zero, labelMax, formatting and language',
        ru: 'Тест: Ноль, labelMax, форматирование и язык'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static" :label="0"/>
          <DesignComponent overlap="static" label="0"/>
          <DesignComponent overlap="static" :label="12500" :label-max="9999" formatting language="en-US"/>
          <DesignComponent overlap="static" label="12500" formatting language="ru-RU"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(4)

await expect(items[0]).not.toHaveClass('design-component--hideAuto')
await expect(items[0]).toHaveTextContent('0')

await expect(items[1]).not.toHaveClass('design-component--hideAuto')
await expect(items[1]).toHaveTextContent('0')

await expect(items[2]).toHaveTextContent('9,999+')
await expect(items[3].textContent?.replace(/\\s/g, ' ')).toContain('12 500')
      `
    },
    {
      id: 'BadgeTestIconsAndSlots',
      name: {
        en: 'Test: Icons configuration and default slot',
        ru: 'Тест: Конфигурация иконок и слот default'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static" icon="home"/>
          <DesignComponent overlap="static" :icon="{ icon: 'star' }"/>
          <DesignComponent overlap="static" icon="expand_more" icon-turn label="Turn"/>
          <DesignComponent overlap="static" icon="mail" icon-hide label="Hidden Icon"/>
          <DesignComponent overlap="static" icon="mail" icon-palette icon-dir :icon-attrs="{ 'data-icon-custom': 'yes' }"/>
          <DesignComponent overlap="static" icon="mail">Custom Slot</DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(6)

await expect(items[0].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[1].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[2]).toHaveTextContent('Turn')
await expect(items[2].querySelector('.design-component__icon')).toBeInTheDocument()
await expect(items[3]).toHaveTextContent('Hidden Icon')
await expect(items[4].querySelector('[data-icon-custom="yes"]')).toBeInTheDocument()
await expect(items[5]).toHaveTextContent('Custom Slot')
await expect(items[5].querySelector('.design-component__icon')).toBeInTheDocument()
      `
    },
    {
      id: 'BadgeTestStatesAndA11y',
      name: {
        en: 'Test: States (selected, hide, autoHide) and ARIA attributes',
        ru: 'Тест: Состояния (selected, hide, autoHide) и ARIA-атрибуты'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static" selected label="Selected"/>
          <DesignComponent overlap="static" hide label="Hidden"/>
          <DesignComponent overlap="static" selected hide label="Selected Hidden"/>
          <DesignComponent overlap="static" dot selected hide label="Ignored" icon="home"/>
          <DesignComponent overlap="static" label=""/>
          <DesignComponent overlap="static" label="3" label-id="wiki-badge-label-id" aria-label="3 unread notifications"/>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(6)

await expect(items[0]).toHaveClass('design-component--selected')
await expect(items[0]).not.toHaveClass('design-component--hideAuto')

await expect(items[1]).toHaveClass('design-component--hide')
await expect(items[2]).toHaveClass('design-component--selected')
await expect(items[2]).toHaveClass('design-component--hide')

await expect(items[3]).toHaveClass('design-component--dot')
await expect(items[3]).toHaveClass('design-component--selected')
await expect(items[3]).toHaveClass('design-component--hide')
await expect(items[3].querySelector('.design-component__label')).toBeNull()
await expect(items[3].querySelector('.design-component__icon')).toBeNull()

await expect(items[4]).toHaveClass('design-component--hideAuto')

await expect(items[5]).toHaveAttribute('aria-label', '3 unread notifications')
const innerLabel = items[5].querySelector('.design-component__label')
await expect(innerLabel).toHaveAttribute('id', 'wiki-badge-label-id')
await expect(innerLabel).toHaveAttribute('aria-hidden', 'true')
      `
    },
    {
      id: 'BadgeTestPositions',
      name: {
        en: 'Test: Vertical and horizontal alignment variants',
        ru: 'Тест: Варианты вертикального и горизонтального выравнивания'
      },
      template: `
        <div class="wiki-storybook-flex">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent dot vertical="top" horizontal="left"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent dot vertical="top" horizontal="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent dot vertical="center" horizontal="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent dot vertical="bottom" horizontal="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--overflowVisible">
            <DesignComponent dot vertical="bottom" horizontal="right"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll<HTMLElement>('.design-component')
await expect(items.length).toBe(5)

await expect(items[0]).toHaveClass('design-component--vertical--top')
await expect(items[0]).toHaveClass('design-component--horizontal--left')

await expect(items[1]).toHaveClass('design-component--vertical--top')
await expect(items[1]).toHaveClass('design-component--horizontal--center')

await expect(items[2]).toHaveClass('design-component--vertical--center')
await expect(items[2]).toHaveClass('design-component--horizontal--center')

await expect(items[3]).toHaveClass('design-component--vertical--bottom')
await expect(items[3]).toHaveClass('design-component--horizontal--center')

await expect(items[4]).toHaveClass('design-component--vertical--bottom')
await expect(items[4]).toHaveClass('design-component--horizontal--right')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Badge'} type={'badge'}/>
<Canvas of={Component.BadgeBasic}/>

<StorybookDescriptions componentName={'Badge'} type={'dot'}/>
<Canvas of={Component.BadgeDot}/>

<Canvas of={Component.BadgeOverlap}/>

<template prop="primary">
<StorybookDescriptions componentName={'Badge'} type={'primary'}/>
<Canvas of={Component.BadgePrimary}/>
</template>

<template prop="secondary">
<StorybookDescriptions componentName={'Badge'} type={'secondary'}/>
<Canvas of={Component.BadgeSecondary}/>
</template>

<template prop="outline">
<StorybookDescriptions componentName={'Badge'} type={'outline'}/>
<Canvas of={Component.BadgeOutline}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'labelNumber'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="min-width: 48px; min-height: 48px;">
  <Badge overlap="static" v-bind="args"/>
</div>
    `,
    description: `
Small visual indicator used to display status, counts, notifications, or short labels (tags). Typically positioned over the corner of another element (like an icon or avatar) or used inline.
Features numeric handling (including numeric 0) with label-max cap (e.g., "99+") and locale formatting, dot-only mode for status indication, and support for icons and default slot. Includes flexible positioning (overlap, vertical, horizontal), automatic hiding when empty, and aria-label accessibility support.
Controlled primarily through the label, icon, and dot props. Use for unread counts, online status indicators, or marking items as "New" or "Sale" in e-commerce contexts.
    `
  }
}
