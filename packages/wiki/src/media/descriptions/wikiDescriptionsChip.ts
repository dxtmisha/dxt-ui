import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Chip component properties
 *
 * Описания свойств компонента Chip
 */
export const wikiDescriptionsChip: StorybookComponentsDescriptionItem = {
  name: 'Chip',
  description: {
    en: 'Compact element that represents an input, attribute, or action',
    ru: 'Компактный элемент, представляющий ввод, атрибут или действие'
  },
  possibilities: {
    en: [
      'selectable state for user interaction',
      'disabled, focus, and readonly state support',
      'customizable styling through design tokens',
      'icon and progress indicator support for enhanced visual representation',
      'adaptive behavior (`iconAlways`, `block`, `auto`) and container queries'
    ],
    ru: [
      'выбираемое состояние для взаимодействия пользователя',
      'поддержка состояний disabled, focus и readonly',
      'настраиваемая стилизация через токены дизайна',
      'поддержка иконок и индикатора прогресса для улучшенного визуального представления',
      'адаптивное поведение (`iconAlways`, `block`, `auto`) и container queries'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <DesignComponent v-bind="args" />
  `,
  play: `
const chipElement = canvasElement.querySelector('.design-component')
await expect(chipElement).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'ChipInput',
      name: {
        en: 'Input',
        ru: 'Ввод (input)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent>Chip</DesignComponent>
          <DesignComponent input>Tag</DesignComponent>
          <DesignComponent input icon="person">Contact</DesignComponent>
          <DesignComponent input selected icon="tag">Keyword</DesignComponent>
        </div>
      `,
      propsName: 'input'
    },
    {
      id: 'ChipAssistive',
      name: {
        en: 'Assistive',
        ru: 'Вспомогательные (assistive)'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent>Chip</DesignComponent>
          <DesignComponent assistive>Chip</DesignComponent>
          <DesignComponent assistive icon="lightbulb">Suggestion</DesignComponent>
          <DesignComponent assistive selected icon="check">Recommended</DesignComponent>
        </div>
      `,
      propsName: 'assistive'
    },
    {
      id: 'ChipAdaptive',
      name: {
        en: 'Adaptive',
        ru: 'Адаптивные'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent data-testid="chip-adaptive-default" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent data-testid="chip-adaptive-block" adaptive="block" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent data-testid="chip-adaptive-icon" adaptive="iconAlways" icon="star" label="Chip" aria-label="Star"/>
          </div>
        </div>
      `,
      propsName: 'adaptive',
      play: `
await expect(canvasElement.querySelector('[data-testid="chip-adaptive-default"]')).toBeInTheDocument()
await expect(canvasElement.querySelector('[data-testid="chip-adaptive-block"]')).toHaveClass('design-component--adaptive--block')
await expect(canvasElement.querySelector('[data-testid="chip-adaptive-icon"]')).toHaveClass('design-component--adaptive--iconAlways')
      `
    },
    {
      id: 'ChipSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent data-testid="chip-skeleton" isSkeleton>Chip</DesignComponent>
        </DesignSkeleton>
      `,
      play: `
await expect(canvasElement.querySelector('[data-testid="chip-skeleton"]')).toBeInTheDocument()
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'ChipTestStatesAndCombinations',
      name: {
        en: 'Test: States, icons, tags and combined props',
        ru: 'Тест: Состояния, иконки, теги и комбинации свойств'
      },
      propsName: ['disabled', 'selected', 'readonly', 'focus', 'loading', 'inverse', 'grid', 'textAlign', 'icon', 'iconTrailing', 'tag'],
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent data-testid="chip-default-span" label="Default" icon="home" icon-trailing="close" />
          <DesignComponent data-testid="chip-disabled-selected" label="Disabled Selected" disabled selected />
          <DesignComponent data-testid="chip-readonly" label="Readonly" readonly focus />
          <DesignComponent data-testid="chip-loading" label="Loading" loading inverse />
          <DesignComponent data-testid="chip-grid" label="Grid" grid text-align="center" />
          <DesignComponent data-testid="chip-button" label="Native Button" tag="button" />
          <DesignComponent data-testid="chip-zero" :label="0" :value="0" />
        </div>
      `,
      play: `
const defaultSpan = canvasElement.querySelector('[data-testid="chip-default-span"]')
const disabledSelected = canvasElement.querySelector('[data-testid="chip-disabled-selected"]')
const readonlyChip = canvasElement.querySelector('[data-testid="chip-readonly"]')
const loadingChip = canvasElement.querySelector('[data-testid="chip-loading"]')
const gridChip = canvasElement.querySelector('[data-testid="chip-grid"]')
const buttonChip = canvasElement.querySelector('[data-testid="chip-button"]')
const zeroChip = canvasElement.querySelector('[data-testid="chip-zero"]')

await expect(defaultSpan?.tagName).toBe('SPAN')
await expect(defaultSpan).toHaveAttribute('role', 'button')
await expect(defaultSpan).toHaveAttribute('tabindex', '0')

await expect(disabledSelected).toHaveClass('design-component--disabled')
await expect(disabledSelected).toHaveClass('design-component--selected')
await expect(disabledSelected).toHaveAttribute('aria-disabled', 'true')

await expect(readonlyChip).toHaveClass('design-component--readonly')
await expect(readonlyChip).toHaveClass('design-component--focus')

await expect(loadingChip).toHaveClass('design-component--inverse')
await expect(gridChip).toHaveClass('design-component--grid')
await expect(gridChip).toHaveClass('design-component--textAlign--center')
await expect(buttonChip?.tagName).toBe('BUTTON')
await expect(zeroChip).toHaveTextContent('0')
await expect(zeroChip).toHaveAttribute('data-value', '0')
      `
    },
    {
      id: 'ChipTestEvents',
      name: {
        en: 'Test: Click events and disabled guard',
        ru: 'Тест: События клика и защита disabled'
      },
      propsName: ['value', 'disabled'],
      setup: `
      const lastClicked = ref<unknown>('none')
      const onClickLite = (payload: { value?: unknown }) => {
        lastClicked.value = payload?.value
      }
      return { lastClicked, onClickLite }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent data-testid="chip-click-active" label="Active" :value="0" @click-lite="onClickLite" />
            <DesignComponent data-testid="chip-click-disabled" label="Disabled" value="blocked" disabled @click-lite="onClickLite" />
          </div>
          <output data-testid="chip-last-clicked">{{ String(lastClicked) }}</output>
        </div>
      `,
      play: `
const activeChip = canvasElement.querySelector('[data-testid="chip-click-active"]')
const disabledChip = canvasElement.querySelector('[data-testid="chip-click-disabled"]')
if (activeChip) {
  await userEvent.click(activeChip)
}
await expect(canvasElement.querySelector('[data-testid="chip-last-clicked"]')).toHaveTextContent('0')
if (disabledChip) {
  await userEvent.click(disabledChip)
}
await expect(canvasElement.querySelector('[data-testid="chip-last-clicked"]')).toHaveTextContent('0')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Chip'} type={'chip'}/>

<template prop="input">
<StorybookDescriptions componentName={'Chip'} type={'input'}/>
<Canvas of={Component.ChipInput}/>
</template>

<template prop="assistive">
<StorybookDescriptions componentName={'Chip'} type={'assistive'}/>
<Canvas of={Component.ChipAssistive}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ChipAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ChipSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'getValue'}/>
<StorybookDescriptions componentName={'Expose'} type={'getDetail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Compact interactive element representing an attribute, selection, or action. Used for making selections, filtering content, or triggering immediate actions in a space-efficient way.
Features support for leading and trailing icons, progress indicators, skeleton state, and disabled/selected/readonly/focus states with adaptive layout options (iconAlways, block, auto) and container queries.
Controlled via label/value props and emits @click events with detailed data. Use for filter tags, toggleable choice groups, or compact interactive labels.
    `
  }
}
