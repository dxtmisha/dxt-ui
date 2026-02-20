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
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <DesignComponent :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'MotionAxisScroll',
      name: {
        en: 'Scroll Management',
        ru: 'Управление скроллом'
      },
      setup: `
      const selected = ref('short')
      return { selected }
      `,
      template: `
        <div class="wiki-storybook-flex-column design-component__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button" @click="selected = 'long'">long</button>
          </div>

          <DesignComponent :selected="selected">
            <template #short>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Short content
              </div>
            </template>
            <template #long>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Long content that causes scrolling.<br>
                Scroll down to see more.<br>
                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>
                End of content.
              </div>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'MotionAxisVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const selected = ref('slide1')
      return { selected }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
          </div>

          <DesignComponent v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MotionAxis'} type={'motionAxis'}/>
<Canvas of={Component.MotionAxisBasic}/>

<StorybookDescriptions componentName={'MotionAxis'} type={'classes'}/>
<Canvas of={Component.MotionAxisScroll}/>

<StorybookDescriptions componentName={'MotionAxis'} type={'v-model'}/>
<Canvas of={Component.MotionAxisVModel}/>
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
