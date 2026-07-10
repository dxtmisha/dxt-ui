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
