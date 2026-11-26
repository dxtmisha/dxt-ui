import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for ProgressBar component properties
 *
 * Описания свойств компонента ProgressBar
 */
export const wikiDescriptionsProgressBar: StorybookComponentsDescriptionItem = {
  name: 'ProgressBar',
  description: {
    en: 'Component for displaying multi-segment progress tracking bar',
    ru: 'Компонент для отображения многосегментной полосы отслеживания прогресса'
  },
  possibilities: {
    en: [
      'linear multi-segment progress tracking',
      'automatic calculations of segment percentages based on max limit',
      'active segment focus highlight options',
      'label displays within individual progress tracks',
      'overlay styling modes without segment gaps',
      'skeleton loading support'
    ],
    ru: [
      'линейное многосегментное отслеживание прогресса',
      'автоматический расчет процентов сегментов на основе лимита max',
      'варианты активной фокусировки и подсветки сегмента',
      'отображение меток внутри индивидуальных полос прогресса',
      'режимы наложения overlay без отступов между сегментами',
      'поддержка загрузочного скелетона'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import { expect, within, userEvent, waitFor } from \'storybook/test\''
  ],
  play: `
    const component = canvasElement.querySelector('.design-component')
    await expect(component).toBeInTheDocument()
  `,
  stories: [
    {
      id: 'ProgressBarBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent :value="50" />
          <DesignComponent :value="[
            { value: 25, color: '#ff4d4f' },
            { value: 35, color: '#52c41a' },
            { value: 20, color: '#1890ff' }
          ]" />
          <DesignComponent overlay :value="[
            { value: 15, color: '#faad14' },
            { value: 45, color: '#52c41a' },
            { value: 30, color: '#13c2c2' }
          ]" />
          <DesignComponent showLabel :value="[
            { value: 30, label: '30%', color: '#2f54eb' },
            { value: 40, label: '40%', color: '#722ed1' },
            { value: 30, label: '30%', color: '#eb2f96' }
          ]" />
        </div>
      `,
      play: `
        const bars = canvasElement.querySelectorAll('.design-component')
        await expect(bars.length).toBe(4)
        await expect(bars[2]).toHaveClass('design-component--overlay')
        await expect(bars[3]).toHaveTextContent('30%')
        await expect(canvasElement.querySelectorAll('[role="progressbar"]').length).toBeGreaterThanOrEqual(4)
      `
    },
    {
      id: 'ProgressBarSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton :value="50" />
            <DesignComponent isSkeleton showLabel :value="[
              { value: 30, label: '30%' },
              { value: 40, label: '40%' },
              { value: 30, label: '30%' }
            ]" />
          </div>
        </DesignSkeleton>
      `,
      play: `
        const bars = canvasElement.querySelectorAll('.design-component')
        await expect(bars.length).toBe(2)
      `
    },
    {
      id: 'ProgressBarTestValuesFocusAndBoundary',
      name: {
        en: 'Test: Reactive values, focus, max=0 protection and ARIA',
        ru: 'Тест: Реактивные значения, фокус, защита max=0 и ARIA'
      },
      setup: `
        const current = ref(25)
        const max = ref(100)
        const focusId = ref<string | undefined>('seg-a')
        const setSeventyFive = () => {
          current.value = 75
          focusId.value = 'seg-b'
        }
        return { current, max, focusId, setSeventyFive }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setSeventyFive">Update Progress</button>
          </div>
          <DesignComponent
            data-testid="pb-reactive"
            :value="current"
            :max="max"
          />
          <DesignComponent
            data-testid="pb-focus"
            :focus="focusId"
            :value="[
              { index: 'seg-a', value: 40, label: 'Part A' },
              { index: 'seg-b', value: 60, label: 'Part B' }
            ]"
            show-label
          />
          <DesignComponent
            data-testid="pb-zero-max"
            :value="50"
            :max="0"
          />
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const reactiveBar = canvasElement.querySelector('[data-testid="pb-reactive"] [role="progressbar"]')
        await expect(reactiveBar).toHaveAttribute('aria-valuenow', '25')
        await expect(reactiveBar).toHaveAttribute('aria-valuemax', '100')

        await expect(canvasElement.querySelector('[data-testid="pb-focus"] [data-index="seg-a"]')).toHaveClass('design-component__item--focus')
        await expect(canvasElement.querySelector('[data-testid="pb-reactive"] .design-component__item--space')).toHaveAttribute('aria-hidden', 'true')

        await userEvent.click(canvas.getByRole('button', { name: 'Update Progress' }))
        await waitFor(() => {
          expect(canvasElement.querySelector('[data-testid="pb-reactive"] [role="progressbar"]')).toHaveAttribute('aria-valuenow', '75')
          expect(canvasElement.querySelector('[data-testid="pb-focus"] [data-index="seg-b"]')).toHaveClass('design-component__item--focus')
        })

        const zeroMaxItem = canvasElement.querySelector('[data-testid="pb-zero-max"] [role="progressbar"]')
        await expect(zeroMaxItem).toHaveAttribute('aria-label', '0%')
        await expect(zeroMaxItem?.getAttribute('style') ?? '').not.toContain('NaN')
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ProgressBar'} type={'progressBar'}/>
<Canvas of={Component.ProgressBarBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ProgressBarSkeleton}/>
    `
  },
  ai: {
    description: `
Linear progress bar component that displays progress as one or more segmented sections. Supports custom segment values, labels, active segment focus highlighting, built-in skeleton loading (isSkeleton), and continuous gapless overlay modes.
Features a flexible value parser that accepts either a single number or an array of segment objects (with label, value, color, or palette defined). Includes automated percentage scaling against a configurable maximum limit.
Controlled via the value, max, focus, showLabel, overlay, and isSkeleton props. Use for multi-step progress indicators, color-coded status breakdowns, or basic horizontal percentage tracks.
    `
  }
}
