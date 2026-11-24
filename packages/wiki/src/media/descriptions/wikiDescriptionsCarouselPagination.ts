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
      'multiple display formats: bullets, dots, lines, fraction counter, and progress bar (type)',
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
      'различные форматы отображения: буллеты, точки, линии, дробный счетчик и полоса прогресса (type)',
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
    'import { ref } from \'vue\'',
    'import type { CarouselPaginationExpose } from \'@dxtmisha/constructor/CarouselPagination\''
  ],
  render: `
    <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
      <DesignComponent v-bind="args" />
    </div>
  `,
  play: `
const rootElement = canvasElement.querySelector('.design-component')
if (rootElement) {
  await expect(rootElement).toBeInTheDocument()
}
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
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
            <DesignComponent data-testid="cp-bullets" :count="5" :selected="2" type="bullets" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dots</div>
            <DesignComponent data-testid="cp-dots" :count="5" :selected="2" type="dots" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dynamic</div>
            <DesignComponent data-testid="cp-dynamic" :count="10" :selected="5" dynamic :visible="5" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Lines</div>
            <DesignComponent data-testid="cp-lines" :count="5" :selected="2" type="lines" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fraction</div>
            <DesignComponent data-testid="cp-fraction" :count="5" :selected="2" type="fraction" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Progress bar</div>
            <DesignComponent data-testid="cp-progressbar" :count="5" :selected="2" type="progressbar" />
          </div>
        </div>
      `,
      play: `
await expect(canvasElement.querySelector('[data-testid="cp-bullets"]')).toHaveClass('design-component--type--bullets')
await expect(canvasElement.querySelector('[data-testid="cp-dots"]')).toHaveClass('design-component--type--dots')
await expect(canvasElement.querySelector('[data-testid="cp-dynamic"]')).toHaveClass('design-component--dynamic')
await expect(canvasElement.querySelector('[data-testid="cp-lines"]')).toHaveClass('design-component--type--lines')
await expect(canvasElement.querySelector('[data-testid="cp-fraction"]')).toHaveTextContent('2 / 5')
await expect(canvasElement.querySelector('[data-testid="cp-progressbar"] [role="progressbar"]')).toHaveAttribute('aria-valuenow', '2')
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
            <span data-testid="cp-vmodel-value">Current slide: <strong>{{ selected }}</strong></span>
            <button data-testid="cp-btn-1" class="wiki-storybook-button" @click="selected = 1">Slide 1</button>
            <button data-testid="cp-btn-3" class="wiki-storybook-button" @click="selected = 3">Slide 3</button>
            <button data-testid="cp-btn-5" class="wiki-storybook-button" @click="selected = 5">Slide 5</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
            <DesignComponent data-testid="cp-vmodel" v-model:selected="selected" :count="5" />
          </div>
        </div>
      `,
      play: `
const slideThreeButton = canvasElement.querySelector('[data-testid="cp-btn-3"]')
if (slideThreeButton) {
  await userEvent.click(slideThreeButton)
}
await expect(canvasElement.querySelector('[data-testid="cp-vmodel-value"]')).toHaveTextContent('Current slide: 3')
const fourthBullet = canvasElement.querySelectorAll('[data-testid="cp-vmodel"] .design-component__item')[3]
if (fourthBullet) {
  await userEvent.click(fourthBullet)
}
await expect(canvasElement.querySelector('[data-testid="cp-vmodel-value"]')).toHaveTextContent('Current slide: 4')
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
          <DesignComponent data-testid="cp-slots" v-model:selected="selected" :count="4" tag="nav">
            <template #item="{ binds, index }">
              <button
                v-bind="binds"
                style="padding: 4px 10px; border-radius: 6px; font-size: 12px;"
              >
                {{ index }}
              </button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const navElement = canvasElement.querySelector('[data-testid="cp-slots"]')
await expect(navElement?.tagName).toBe('NAV')
const buttons = navElement?.querySelectorAll('button') ?? []
await expect(buttons.length).toBe(4)
if (buttons[2]) {
  await userEvent.click(buttons[2])
}
await expect(buttons[2]).toHaveAttribute('aria-selected', 'true')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'CarouselPaginationTestModesAndBoundaries',
      name: {
        en: 'Test: Vertical, control=false, hideIfOne, template and fraction/progress slots',
        ru: 'Тест: Вертикальный режим, control=false, hideIfOne, template и слоты'
      },
      propsName: ['vertical', 'control', 'hideIfOne', 'template', 'count', 'selected'],
      template: `
        <div class="wiki-storybook-group">
          <DesignComponent data-testid="cp-vertical" :count="4" :selected="2" vertical />
          <DesignComponent data-testid="cp-readonly" :count="3" :selected="1" :control="false" />
          <DesignComponent data-testid="cp-hidden" :count="1" :selected="1" :hide-if-one="true" />
          <DesignComponent data-testid="cp-single-visible" :count="1" :selected="1" :hide-if-one="false" />
          <DesignComponent data-testid="cp-template" type="fraction" :count="6" :selected="3" template="Step [active] of [total]" />
          <DesignComponent data-testid="cp-slot-fraction" type="fraction" :count="4" :selected="2">
            <template #fraction="{ binds, active, total }">
              <span v-bind="binds">Custom {{ active }}/{{ total }}</span>
            </template>
          </DesignComponent>
          <DesignComponent data-testid="cp-slot-progress" type="progressbar" :count="4" :selected="2">
            <template #progress="{ binds, percent }">
              <div v-bind="binds">Pct {{ percent }}%</div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
await expect(canvasElement.querySelector('[data-testid="cp-vertical"]')).toHaveClass('design-component--vertical')
await expect(canvasElement.querySelector('[data-testid="cp-hidden"]')).toBeNull()
await expect(canvasElement.querySelector('[data-testid="cp-single-visible"]')).toBeInTheDocument()
await expect(canvasElement.querySelector('[data-testid="cp-template"]')).toHaveTextContent('Step 3 of 6')
await expect(canvasElement.querySelector('[data-testid="cp-slot-fraction"]')).toHaveTextContent('Custom 2/4')
await expect(canvasElement.querySelector('[data-testid="cp-slot-progress"]')).toHaveTextContent('Pct 50%')

const readonlyItems = canvasElement.querySelectorAll('[data-testid="cp-readonly"] .design-component__item')
if (readonlyItems[2]) {
  await userEvent.click(readonlyItems[2])
}
await expect(readonlyItems[0]).toHaveAttribute('aria-selected', 'true')
      `
    },
    {
      id: 'CarouselPaginationTestExposeAndKeyboard',
      name: {
        en: 'Test: Expose methods, events and keyboard navigation',
        ru: 'Тест: Методы expose, события и клавиатурная навигация'
      },
      propsName: ['count', 'selected', 'control'],
      setup: `
      const paginationRef = ref<CarouselPaginationExpose>()
      const selected = ref(1)
      const lastChange = ref<number>(0)
      const onChange = (value: number) => {
        lastChange.value = value
      }
      const goNext = () => paginationRef.value?.next()
      const goPrevious = () => paginationRef.value?.previous()
      const setFour = () => paginationRef.value?.set(4)
      return { paginationRef, selected, lastChange, onChange, goNext, goPrevious, setFour }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            ref="paginationRef"
            data-testid="cp-expose"
            v-model:selected="selected"
            :count="5"
            @change="onChange"
          />
          <div class="wiki-storybook-flex">
            <button data-testid="cp-next" class="wiki-storybook-button" @click="goNext">Next</button>
            <button data-testid="cp-set4" class="wiki-storybook-button" @click="setFour">Set 4</button>
            <button data-testid="cp-prev" class="wiki-storybook-button" @click="goPrevious">Prev</button>
          </div>
          <output data-testid="cp-state">{{ selected }}:{{ lastChange }}</output>
        </div>
      `,
      play: `
const nextButton = canvasElement.querySelector('[data-testid="cp-next"]')
const setFourButton = canvasElement.querySelector('[data-testid="cp-set4"]')
const prevButton = canvasElement.querySelector('[data-testid="cp-prev"]')
if (nextButton) {
  await userEvent.click(nextButton)
}
await expect(canvasElement.querySelector('[data-testid="cp-state"]')).toHaveTextContent('2:2')
if (setFourButton) {
  await userEvent.click(setFourButton)
}
await expect(canvasElement.querySelector('[data-testid="cp-state"]')).toHaveTextContent('4:4')
if (prevButton) {
  await userEvent.click(prevButton)
}
await expect(canvasElement.querySelector('[data-testid="cp-state"]')).toHaveTextContent('3:3')
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
Supports multiple visual representations: bullets, dots, lines, fraction counter (e.g., 1 / 5), and progress bar.
Includes dynamic bullet scaling (dynamic mode) which smoothly shrinks edge indicators to preserve layout compactness across large slide counts.
Supports two-way binding via v-model:selected, keyboard and click control (control), template-driven fraction formatting, and scoped slots (item, fraction, progress) with pre-computed binds.
    `
  }
}
