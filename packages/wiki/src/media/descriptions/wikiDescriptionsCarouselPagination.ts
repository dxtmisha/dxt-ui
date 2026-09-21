import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for CarouselPagination component properties
 *
 * Описания свойств компонента CarouselPagination
 */
export const wikiDescriptionsCarouselPagination: StorybookComponentsDescriptionItem = {
  name: 'CarouselPagination',
  description: {
    en: 'Navigation indicator and progress component for carousels, sliders, and multi-step viewports.',
    ru: 'Элемент навигации и индикации прогресса для каруселей, слайдеров и многошаговых сценариев.'
  },
  possibilities: {
    en: [
      'multiple display formats: bullets, lines, fraction counter, and progress bar (type)',
      'smooth scaling of indicators for long lists in dynamic mode (dynamic)',
      'bidirectional state management with v-model:selected',
      'keyboard navigation and interactive click handling on bullet items (control)',
      'configurable visible items count in dynamic mode (visible)',
      'horizontal and vertical orientations (vertical)',
      'automatic concealment when only one slide exists (hideIfOne)',
      'customizable fraction formatting template (template)',
      'scoped slots with pre-computed binds for bullets, fraction, and progress'
    ],
    ru: [
      'различные форматы отображения: буллеты, линии, дробный счетчик и полоса прогресса (type)',
      'плавное масштабирование индикаторов для длинных списков в динамическом режиме (dynamic)',
      'двустороннее управление состоянием через v-model:selected',
      'клавиатурная навигация и интерактивная обработка кликов по буллетам (control)',
      'настройка количества видимых элементов в динамическом режиме (visible)',
      'горизонтальная и вертикальная ориентация (vertical)',
      'автоматическое скрытие при наличии всего одного слайда (hideIfOne)',
      'настраиваемый шаблон форматирования дроби (template)',
      'слоты с готовыми объектами привязок binds для буллетов, дроби и полосы прогресса'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
      <DesignComponent v-bind="args" />
    </div>
  `,
  stories: [
    {
      id: 'CarouselPaginationBasic',
      name: {
        en: 'Display types',
        ru: 'Типы отображения'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Bullets</div>
            <DesignComponent :count="5" :selected="2" type="bullets" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <DesignComponent :count="10" :selected="5" dynamic :visible="5" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Lines</div>
            <DesignComponent :count="5" :selected="2" type="lines" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fraction</div>
            <DesignComponent :count="5" :selected="2" type="fraction" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Progress bar</div>
            <DesignComponent :count="5" :selected="2" type="progressbar" />
          </div>
        </div>
      `
    },
    {
      id: 'CarouselPaginationVModel',
      name: {
        en: 'Two-way binding (v-model:selected)',
        ru: 'Двусторонняя привязка (v-model:selected)'
      },
      setup: `
      const selected = ref(1)
      return { selected }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current slide: <strong>{{ selected }}</strong></span>
            <button class="wiki-storybook-button" @click="selected = 1">Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 3">Slide 3</button>
            <button class="wiki-storybook-button" @click="selected = 5">Slide 5</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
            <DesignComponent v-model:selected="selected" :count="5" />
          </div>
        </div>
      `
    },
    {
      id: 'CarouselPaginationSlots',
      name: {
        en: 'Custom Slots',
        ru: 'Кастомные слоты'
      },
      setup: `
      const selected = ref(2)
      return { selected }
      `,
      template: `
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
          <DesignComponent v-model:selected="selected" :count="4">
            <template #item="{ binds, index, item }">
              <button
                v-bind="binds"
                style="padding: 4px 10px; border-radius: 6px; font-size: 12px;"
              >
                {{ index }}
              </button>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'CarouselPagination'} type={'carouselPagination'}/>
<StorybookDescriptions componentName={'CarouselPagination'} type={'type'}/>
<Canvas of={Component.CarouselPaginationBasic}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.CarouselPaginationVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'CarouselPagination'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'CarouselPagination'} type={'expose'}/>
    `,
    slots: `
<Canvas of={Component.CarouselPaginationSlots}/>
<StorybookDescriptions componentName={'CarouselPagination'} type={'slots'}/>
    `
  },
  ai: {
    description: `
CarouselPagination is an indicator and navigation component designed for carousels, slideshows, and walkthroughs.
Supports multiple visual representations: bullets (dots), lines, fraction counter (e.g., 1 / 5), and progress bar.
Includes dynamic bullet scaling (dynamic mode) which smoothly shrinks edge indicators to preserve layout compactness across large slide counts.
Supports two-way binding via v-model:selected, keyboard and click control (control), template-driven fraction formatting, and scoped slots (item, fraction, progress) with pre-computed binds.
    `,
    hide: true
  }
}
