import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MotionAxis component
 *
 * Описания компонента MotionAxis
 */
export const wikiDescriptionsMotionAxis: StorybookComponentsDescriptionItem = {
  name: 'MotionAxis',
  description: {
    en: 'A component for organizing transitions between elements (slides). Allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM).',
    ru: 'Компонент для организации переходов между элементами (слайдами). Позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM).'
  },
  possibilities: {
    en: [
      'Slide transition animation along X, Y, Z axes',
      'Automatic or manual direction control (next/back)',
      'Smooth container height animation to fit content',
      'Slide lifecycle management in DOM (inDom, inDomSlide)',
      'Slot support for each slide'
    ],
    ru: [
      'Анимация смены слайдов по осям X, Y, Z',
      'Автоматическое или ручное управление направлением (вперед/назад)',
      'Плавная анимация высоты контейнера под контент',
      'Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)',
      'Поддержка слотов для каждого слайда'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template #slide1>
        <div style="padding: 32px; background: #fafafa;">
          <p>Short content.</p>
        </div>
      </template>
      <template #slide2>
        <div style="padding: 32px; background: #f5f5f5;">
          <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
        </div>
      </template>
      <template #slide3>
        <div style="padding: 32px; background: #eeeeee;">
          <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
          <p>Additional paragraph for extra height.</p>
        </div>
      </template>
    </DesignComponent>
`,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'MotionAxisBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      setup: `
      const selected = ref('slide1')
      return { selected }
      `,
      template: `
        <div class="wiki-storybook-item--padding">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <div style="margin-top: 16px; border: 1px solid #eee; overflow: hidden;">
            <DesignComponent :selected="selected">
              <template #slide1>
                <div style="padding: 32px; background: #fafafa;">
                  <p>Short content.</p>
                </div>
              </template>
              <template #slide2>
                <div style="padding: 32px; background: #f5f5f5;">
                  <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
                </div>
              </template>
              <template #slide3>
                <div style="padding: 32px; background: #eeeeee;">
                  <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                  <p>Additional paragraph for extra height.</p>
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
<StorybookDescriptions componentName={'MotionAxis'} type={'motionAxis'}/>
<Canvas of={Component.MotionAxisBasic}/>

<StorybookDescriptions componentName={'MotionAxis'} type={'classes'}/>
    `,
    events: `
<StorybookDescriptions componentName={'MotionAxis'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionAxis'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'MotionAxis'} type={'slots'}/>
    `
  }
}
