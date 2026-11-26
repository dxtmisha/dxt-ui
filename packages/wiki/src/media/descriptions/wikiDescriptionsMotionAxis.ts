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
      'slide transition animation along `x`, `y`, and `z` axes (`axis`)',
      'automatic (`auto`) or explicit (`next`, `back`) direction control (`direction`)',
      'smooth container height animation during slide transitions (`animationHeight`)',
      'lazy slide rendering with full (`inDom`) or selective (`inDomSlide`) DOM retention',
      'two-way state synchronization via `selected`, `modelSelected`, `v-model:selected`, and `v-model:modelSelected`',
      'lifecycle transition events (`start`, `end`, `motionAxis`, `update:selected`, `update:modelSelected`)',
      'programmatic navigation via exposed methods (`to`, `next`, `back`, `top`, `right`, `bottom`, `left`, `up`, `down`)',
      'dynamic named slide slots matching each slide identifier'
    ],
    ru: [
      'анимация смены слайдов по осям `x`, `y` и `z` (`axis`)',
      'автоматическое (`auto`) или явное (`next`, `back`) управление направлением (`direction`)',
      'плавная анимация высоты контейнера при переключении слайдов (`animationHeight`)',
      'ленивый рендеринг слайдов с полным (`inDom`) или выборочным (`inDomSlide`) удержанием в DOM',
      'двусторонняя синхронизация состояния через `selected`, `modelSelected`, `v-model:selected` и `v-model:modelSelected`',
      'события жизненного цикла перехода (`start`, `end`, `motionAxis`, `update:selected`, `update:modelSelected`)',
      'программная навигация через экспортируемые методы (`to`, `next`, `back`, `top`, `right`, `bottom`, `left`, `up`, `down`)',
      'динамические именованные слоты, соответствующие идентификаторам слайдов'
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
  play: `
    const component = canvasElement.querySelector<HTMLElement>('.design-component')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('design-component--axis--x')
    await expect(component).toHaveClass('design-component--direction--auto')
    const activeSlide = component?.querySelector<HTMLElement>('.design-component__slide--active')
    await expect(activeSlide).toBeInTheDocument()
  `,
  import: [
    'import { ref, type Ref } from \'vue\'',
    'import type { MotionAxisEmitOptions, MotionAxisExpose as MotionAxisExposeType, MotionAxisSelectedValue } from \'@dxtmisha/constructor/MotionAxis\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation)
    // =========================================================================
    {
      id: 'MotionAxisBasic',
      name: {
        en: 'Basic usage',
        ru: 'Базовое использование'
      },
      setup: `
      const selected: Ref<MotionAxisSelectedValue> = ref('slide1')

      return {
        selected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-basic-slide1" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button test-basic-slide2" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button test-basic-slide3" @click="selected = 'slide3'">3</button>
          </div>

          <DesignComponent :selected="selected" animation-height>
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
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const component = canvasElement.querySelector<HTMLElement>('.design-component')
          const firstSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-basic-slide1')
          const secondSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-basic-slide2')
          const thirdSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-basic-slide3')

          await expect(component).toBeInTheDocument()
          await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')

          await step('Switch forward to slide 2', async () => {
            await userEvent.click(secondSlideButton!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(component?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Switch forward to slide 3', async () => {
            await userEvent.click(thirdSlideButton!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(component?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Switch backward to slide 1', async () => {
            await userEvent.click(firstSlideButton!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--direction--back')
              await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            })
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisScroll',
      name: {
        en: 'Scroll management',
        ru: 'Управление скроллом'
      },
      setup: `
      const selected: Ref<MotionAxisSelectedValue> = ref('short')

      return {
        selected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column design-component__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-scroll-short" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button test-scroll-long" @click="selected = 'long'">long</button>
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
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const scrollContainer = canvasElement.querySelector<HTMLElement>('.design-component__scroll')
          const component = canvasElement.querySelector<HTMLElement>('.design-component')
          const shortButton = canvasElement.querySelector<HTMLButtonElement>('.test-scroll-short')
          const longButton = canvasElement.querySelector<HTMLButtonElement>('.test-scroll-long')

          await expect(scrollContainer).toBeInTheDocument()
          await expect(component?.querySelector('[data-key="short"]')).toHaveClass('design-component__slide--active')

          await step('Switch to long slide and verify scroll state settles', async () => {
            await userEvent.click(longButton!)
            await waitFor(async () => {
              await expect(component?.querySelector('[data-key="long"]')).toHaveClass('design-component__slide--active')
              await expect(scrollContainer).not.toHaveClass('design-component__scroll--hidden')
            }, { timeout: 2500 })
          })

          await step('Switch back to short slide', async () => {
            await userEvent.click(shortButton!)
            await waitFor(async () => {
              await expect(component?.querySelector('[data-key="short"]')).toHaveClass('design-component__slide--active')
              await expect(scrollContainer).not.toHaveClass('design-component__scroll--hidden')
            }, { timeout: 2500 })
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      const selected: Ref<MotionAxisSelectedValue> = ref('slide1')

      return {
        selected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span class="test-vmodel-value">Current value: {{ selected }}</span>
            <button class="wiki-storybook-button test-vmodel-slide1" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button test-vmodel-slide2" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button test-vmodel-slide3" @click="selected = 'slide3'">Select Slide 3</button>
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
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const valueDisplay = canvasElement.querySelector<HTMLElement>('.test-vmodel-value')
          const component = canvasElement.querySelector<HTMLElement>('.design-component')
          const firstSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-vmodel-slide1')
          const secondSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-vmodel-slide2')
          const thirdSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-vmodel-slide3')

          await expect(valueDisplay).toHaveTextContent('Current value: slide1')
          await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')

          await userEvent.click(secondSlideButton!)
          await waitFor(async () => {
            await expect(valueDisplay).toHaveTextContent('Current value: slide2')
            await expect(component?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
          })

          await userEvent.click(thirdSlideButton!)
          await waitFor(async () => {
            await expect(valueDisplay).toHaveTextContent('Current value: slide3')
            await expect(component?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
          })

          await userEvent.click(firstSlideButton!)
          await waitFor(async () => {
            await expect(valueDisplay).toHaveTextContent('Current value: slide1')
            await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisEvents',
      name: {
        en: 'Transition events',
        ru: 'События перехода'
      },
      setup: `
      const selected: Ref<MotionAxisSelectedValue> = ref('slide1')
      const eventHistory: Ref<string[]> = ref([])

      const onStart = (value: MotionAxisSelectedValue): void => {
        eventHistory.value.push('start:' + String(value))
      }

      const onEnd = (value: MotionAxisSelectedValue): void => {
        eventHistory.value.push('end:' + String(value))
      }

      const onMotionAxis = (options: MotionAxisEmitOptions): void => {
        eventHistory.value.push('motionAxis:' + options.type + ':' + String(options.active))
      }

      const onUpdateSelected = (value: MotionAxisSelectedValue): void => {
        eventHistory.value.push('update:selected:' + String(value))
      }

      const onUpdateModelSelected = (value: MotionAxisSelectedValue): void => {
        eventHistory.value.push('update:modelSelected:' + String(value))
      }

      return {
        selected,
        eventHistory,
        onStart,
        onEnd,
        onMotionAxis,
        onUpdateSelected,
        onUpdateModelSelected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button test-events-slide1" @click="selected = 'slide1'">Slide 1</button>
            <button class="wiki-storybook-button test-events-slide2" @click="selected = 'slide2'">Slide 2</button>
            <button class="wiki-storybook-button test-events-slide3" @click="selected = 'slide3'">Slide 3</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding test-events-log">
            {{ eventHistory.join(' | ') || 'No events yet' }}
          </div>

          <DesignComponent
            :selected="selected"
            @start="onStart"
            @end="onEnd"
            @motion-axis="onMotionAxis"
            @update:selected="onUpdateSelected"
            @update:model-selected="onUpdateModelSelected"
          >
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Event Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Event Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Event Slide 3
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const secondSlideButton = canvasElement.querySelector<HTMLButtonElement>('.test-events-slide2')
          const eventLog = canvasElement.querySelector<HTMLElement>('.test-events-log')

          await userEvent.click(secondSlideButton!)
          await waitFor(async () => {
            await expect(eventLog).toHaveTextContent('update:selected:slide2')
            await expect(eventLog).toHaveTextContent('update:modelSelected:slide2')
            await expect(eventLog).toHaveTextContent('start:slide2')
            await expect(eventLog).toHaveTextContent('motionAxis:start:slide2')
          })

          await waitFor(async () => {
            await expect(eventLog).toHaveTextContent('end:slide2')
            await expect(eventLog).toHaveTextContent('motionAxis:end:slide2')
          }, { timeout: 2500 })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisExpose',
      name: {
        en: 'Programmatic control (expose)',
        ru: 'Программное управление (expose)'
      },
      setup: `
      const motionAxisReference: Ref<MotionAxisExposeType | undefined> = ref()
      const currentSlide: Ref<MotionAxisSelectedValue> = ref('slide1')

      const onUpdateSelected = (value: MotionAxisSelectedValue): void => {
        currentSlide.value = value
      }

      return {
        motionAxisReference,
        currentSlide,
        onUpdateSelected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-expose-next" @click="motionAxisReference?.next()">next</button>
            <button class="wiki-storybook-button test-expose-back" @click="motionAxisReference?.back()">back</button>
            <button class="wiki-storybook-button test-expose-to" @click="motionAxisReference?.to('slide3')">to('slide3')</button>
            <button class="wiki-storybook-button test-expose-top" @click="motionAxisReference?.top('slide1')">top('slide1')</button>
            <button class="wiki-storybook-button test-expose-bottom" @click="motionAxisReference?.bottom('slide3')">bottom('slide3')</button>
            <button class="wiki-storybook-button test-expose-left" @click="motionAxisReference?.left('slide2')">left('slide2')</button>
            <button class="wiki-storybook-button test-expose-right" @click="motionAxisReference?.right('slide3')">right('slide3')</button>
            <button class="wiki-storybook-button test-expose-up" @click="motionAxisReference?.up('slide2')">up('slide2')</button>
            <button class="wiki-storybook-button test-expose-down" @click="motionAxisReference?.down('slide1')">down('slide1')</button>
          </div>
          <div class="test-expose-current">Active: {{ currentSlide }}</div>

          <DesignComponent
            ref="motionAxisReference"
            selected="slide1"
            @update:selected="onUpdateSelected"
          >
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Expose Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Expose Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Expose Slide 3
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const component = canvasElement.querySelector<HTMLElement>('.design-component')
          const currentLabel = canvasElement.querySelector<HTMLElement>('.test-expose-current')

          await step('Navigate using next() and back()', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-next')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(currentLabel).toHaveTextContent('Active: slide2')
              await expect(component?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-back')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--direction--back')
              await expect(currentLabel).toHaveTextContent('Active: slide1')
              await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Navigate using to(), top(), and bottom() (Y-axis)', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-to')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(component?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-top')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--axis--y')
              await expect(component).toHaveClass('design-component--direction--back')
              await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-bottom')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--axis--y')
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(component?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Navigate using left() and right() (X-axis)', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-left')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--axis--x')
              await expect(component).toHaveClass('design-component--direction--back')
              await expect(component?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-right')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--axis--x')
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(component?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Navigate using up() and down() (Z-axis)', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-up')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--axis--z')
              await expect(component).toHaveClass('design-component--direction--next')
              await expect(component?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-expose-down')!)
            await waitFor(async () => {
              await expect(component).toHaveClass('design-component--axis--z')
              await expect(component).toHaveClass('design-component--direction--back')
              await expect(component?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            })
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisSlots',
      name: {
        en: 'Dynamic slide slots',
        ru: 'Динамические слоты слайдов'
      },
      setup: `
      const selected: Ref<MotionAxisSelectedValue> = ref('overview')

      return {
        selected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-slot-overview" @click="selected = 'overview'">Overview</button>
            <button class="wiki-storybook-button test-slot-details" @click="selected = 'details'">Details</button>
            <button class="wiki-storybook-button test-slot-summary" @click="selected = 'summary'">Summary</button>
          </div>

          <DesignComponent :selected="selected">
            <template #overview>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding test-slot-content-overview">
                Overview slot content
              </div>
            </template>
            <template #details>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding test-slot-content-details">
                Details slot content
              </div>
            </template>
            <template #summary>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding test-slot-content-summary">
                Summary slot content
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const component = canvasElement.querySelector<HTMLElement>('.design-component')

          await expect(canvasElement.querySelector('.test-slot-content-overview')).toBeInTheDocument()
          await expect(canvasElement.querySelector('.test-slot-content-details')).toBeNull()
          await expect(canvasElement.querySelector('.test-slot-content-summary')).toBeNull()

          await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-slot-details')!)
          await waitFor(async () => {
            await expect(component?.querySelector('[data-key="details"]')).toHaveClass('design-component__slide--active')
            await expect(canvasElement.querySelector('.test-slot-content-details')).toHaveTextContent('Details slot content')
          })

          await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-slot-summary')!)
          await waitFor(async () => {
            await expect(component?.querySelector('[data-key="summary"]')).toHaveClass('design-component__slide--active')
            await expect(canvasElement.querySelector('.test-slot-content-summary')).toHaveTextContent('Summary slot content')
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with MotionAxisTest... and "Test: " / "Тест: ")
    // ONLY for constructor-level props/behavior!
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'MotionAxisTestAxesAndDirections',
      name: {
        en: 'Test: Axes (x, y, z) and Directions (auto, next, back)',
        ru: 'Тест: Оси (x, y, z) и направления (auto, next, back)'
      },
      setup: `
      const autoSelected: Ref<MotionAxisSelectedValue> = ref('slide1')
      const fixedNextSelected: Ref<MotionAxisSelectedValue> = ref('slide3')
      const fixedBackSelected: Ref<MotionAxisSelectedValue> = ref('slide1')

      return {
        autoSelected,
        fixedNextSelected,
        fixedBackSelected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default (axis: x, direction: auto)</div>
              <DesignComponent class="test-axis-default" selected="slide1">
                <template #slide1><div class="wiki-storybook-item--padding">Default X Slide</div></template>
                <template #slide2><div class="wiki-storybook-item--padding">Default X Slide 2</div></template>
              </DesignComponent>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">axis="y" + direction="next"</div>
              <DesignComponent class="test-axis-y-next" axis="y" direction="next" selected="slide1">
                <template #slide1><div class="wiki-storybook-item--padding">Y Next Slide</div></template>
              </DesignComponent>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">axis="z" + direction="back"</div>
              <DesignComponent class="test-axis-z-back" axis="z" direction="back" selected="slide1">
                <template #slide1><div class="wiki-storybook-item--padding">Z Back Slide</div></template>
              </DesignComponent>
            </div>
          </div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-dir-auto-to-3" @click="autoSelected = 'slide3'">Auto to 3</button>
            <button class="wiki-storybook-button test-dir-auto-to-1" @click="autoSelected = 'slide1'">Auto to 1</button>
            <button class="wiki-storybook-button test-dir-next-to-1" @click="fixedNextSelected = 'slide1'">Fixed Next to 1</button>
            <button class="wiki-storybook-button test-dir-back-to-3" @click="fixedBackSelected = 'slide3'">Fixed Back to 3</button>
          </div>

          <DesignComponent class="test-interactive-auto" axis="x" direction="auto" :selected="autoSelected">
            <template #slide1><div class="wiki-storybook-item--padding">Auto 1</div></template>
            <template #slide2><div class="wiki-storybook-item--padding">Auto 2</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">Auto 3</div></template>
          </DesignComponent>

          <DesignComponent class="test-interactive-next" axis="y" direction="next" :selected="fixedNextSelected">
            <template #slide1><div class="wiki-storybook-item--padding">Fixed Next 1</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">Fixed Next 3</div></template>
          </DesignComponent>

          <DesignComponent class="test-interactive-back" axis="z" direction="back" :selected="fixedBackSelected">
            <template #slide1><div class="wiki-storybook-item--padding">Fixed Back 1</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">Fixed Back 3</div></template>
          </DesignComponent>
        </div>
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const defaultAxis = canvasElement.querySelector<HTMLElement>('.test-axis-default')
          const verticalNextAxis = canvasElement.querySelector<HTMLElement>('.test-axis-y-next')
          const depthBackAxis = canvasElement.querySelector<HTMLElement>('.test-axis-z-back')
          const interactiveAuto = canvasElement.querySelector<HTMLElement>('.test-interactive-auto')
          const interactiveNext = canvasElement.querySelector<HTMLElement>('.test-interactive-next')
          const interactiveBack = canvasElement.querySelector<HTMLElement>('.test-interactive-back')

          await expect(defaultAxis).toHaveClass('design-component--axis--x')
          await expect(defaultAxis).toHaveClass('design-component--direction--auto')
          await expect(verticalNextAxis).toHaveClass('design-component--axis--y')
          await expect(verticalNextAxis).toHaveClass('design-component--direction--next')
          await expect(depthBackAxis).toHaveClass('design-component--axis--z')
          await expect(depthBackAxis).toHaveClass('design-component--direction--back')

          await step('Auto direction computes next when moving forward and back when moving backward', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-dir-auto-to-3')!)
            await waitFor(async () => {
              await expect(interactiveAuto).toHaveClass('design-component--direction--next')
              await expect(interactiveAuto?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-dir-auto-to-1')!)
            await waitFor(async () => {
              await expect(interactiveAuto).toHaveClass('design-component--direction--back')
              await expect(interactiveAuto?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Explicit direction="next" preserves next even when switching to an earlier slide', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-dir-next-to-1')!)
            await waitFor(async () => {
              await expect(interactiveNext).toHaveClass('design-component--axis--y')
              await expect(interactiveNext).toHaveClass('design-component--direction--next')
              await expect(interactiveNext?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Explicit direction="back" preserves back even when switching to a later slide', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-dir-back-to-3')!)
            await waitFor(async () => {
              await expect(interactiveBack).toHaveClass('design-component--axis--z')
              await expect(interactiveBack).toHaveClass('design-component--direction--back')
              await expect(interactiveBack?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
            })
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisTestDomAndAnimationHeight',
      name: {
        en: 'Test: inDom, inDomSlide, and animationHeight',
        ru: 'Тест: inDom, inDomSlide и animationHeight'
      },
      setup: `
      const selectiveSelected: Ref<MotionAxisSelectedValue> = ref('slide1')
      const heightSelected: Ref<MotionAxisSelectedValue> = ref('short')

      return {
        selectiveSelected,
        heightSelected
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent class="test-indom-false" selected="slide1" :in-dom="false">
            <template #slide1><div class="wiki-storybook-item--padding">Lazy 1</div></template>
            <template #slide2><div class="wiki-storybook-item--padding">Lazy 2</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">Lazy 3</div></template>
          </DesignComponent>

          <DesignComponent class="test-indom-true" selected="slide1" :in-dom="true" :animation-height="true">
            <template #slide1><div class="wiki-storybook-item--padding">InDom 1</div></template>
            <template #slide2><div class="wiki-storybook-item--padding">InDom 2</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">InDom 3</div></template>
          </DesignComponent>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-selective-to-2" @click="selectiveSelected = 'slide2'">Selective to Slide 2</button>
            <button class="wiki-storybook-button test-height-to-tall" @click="heightSelected = 'tall'">Height to Tall</button>
          </div>

          <DesignComponent
            class="test-indom-slide"
            :selected="selectiveSelected"
            :in-dom-slide="['slide3']"
          >
            <template #slide1><div class="wiki-storybook-item--padding">Selective 1</div></template>
            <template #slide2><div class="wiki-storybook-item--padding">Selective 2</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">Selective 3 (kept)</div></template>
          </DesignComponent>

          <DesignComponent
            class="test-animation-height"
            :selected="heightSelected"
            :animation-height="true"
          >
            <template #short>
              <div class="wiki-storybook-item--padding">Short slide</div>
            </template>
            <template #tall>
              <div class="wiki-storybook-item--padding">
                <p>Tall slide paragraph 1</p>
                <p>Tall slide paragraph 2</p>
                <p>Tall slide paragraph 3</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const lazyComponent = canvasElement.querySelector<HTMLElement>('.test-indom-false')
          const fullDomComponent = canvasElement.querySelector<HTMLElement>('.test-indom-true')
          const selectiveDomComponent = canvasElement.querySelector<HTMLElement>('.test-indom-slide')
          const animationHeightComponent = canvasElement.querySelector<HTMLElement>('.test-animation-height')

          await expect(lazyComponent?.querySelectorAll('.design-component__slide').length).toBe(1)
          await expect(lazyComponent?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')

          await expect(fullDomComponent?.querySelectorAll('.design-component__slide').length).toBe(3)
          await expect(fullDomComponent?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
          await expect(fullDomComponent?.querySelector('[data-key="slide2"]')).not.toHaveClass('design-component__slide--active')

          await expect(selectiveDomComponent?.querySelector('[data-key="slide1"]')).toBeInTheDocument()
          await expect(selectiveDomComponent?.querySelector('[data-key="slide2"]')).toBeNull()
          await expect(selectiveDomComponent?.querySelector('[data-key="slide3"]')).toBeInTheDocument()

          await step('Switch selective DOM component to slide2 and verify slide1 unmounts while slide3 stays', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-selective-to-2')!)
            await waitFor(async () => {
              await expect(selectiveDomComponent?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
              await expect(selectiveDomComponent?.querySelector('[data-key="slide1"]')).toBeNull()
              await expect(selectiveDomComponent?.querySelector('[data-key="slide3"]')).toBeInTheDocument()
            }, { timeout: 2500 })
          })

          await step('Switch animationHeight component to tall slide and wait for transition completion', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-height-to-tall')!)
            await waitFor(async () => {
              await expect(animationHeightComponent?.querySelector('[data-key="tall"]')).toHaveClass('design-component__slide--active')
              await expect(animationHeightComponent).not.toHaveClass('design-component--start')
              await expect(animationHeightComponent).not.toHaveClass('design-component--move')
            }, { timeout: 2500 })
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
      `
    },
    {
      id: 'MotionAxisTestModelAndEdgeCases',
      name: {
        en: 'Test: modelSelected, undefined start, wrap-around, and unknown slide',
        ru: 'Тест: modelSelected, старт с undefined, зацикливание и неизвестный слайд'
      },
      setup: `
      const initialUndefinedSelected: Ref<MotionAxisSelectedValue> = ref(undefined)
      const controlledSelected: Ref<MotionAxisSelectedValue> = ref('slide1')
      const controlledModelSelected: Ref<MotionAxisSelectedValue> = ref('slide1')
      const controlledAxisReference: Ref<MotionAxisExposeType | undefined> = ref()

      return {
        initialUndefinedSelected,
        controlledSelected,
        controlledModelSelected,
        controlledAxisReference
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button test-init-slide2" @click="initialUndefinedSelected = 'slide2'">Set initial slide2</button>
            <button class="wiki-storybook-button test-wrap-back" @click="controlledAxisReference?.back()">Wrap Back</button>
            <button class="wiki-storybook-button test-wrap-next" @click="controlledAxisReference?.next()">Wrap Next</button>
            <button class="wiki-storybook-button test-unknown-slide" @click="controlledAxisReference?.to('unknown')">To Unknown</button>
          </div>
          <div class="test-model-sync-state">
            selected={{ controlledSelected }}|modelSelected={{ controlledModelSelected }}
          </div>

          <DesignComponent class="test-undefined-start" :selected="initialUndefinedSelected">
            <template #slide1><div class="wiki-storybook-item--padding">Flash 1</div></template>
            <template #slide2><div class="wiki-storybook-item--padding">Flash 2</div></template>
          </DesignComponent>

          <DesignComponent
            ref="controlledAxisReference"
            class="test-model-controlled"
            v-model:selected="controlledSelected"
            v-model:model-selected="controlledModelSelected"
          >
            <template #slide1><div class="wiki-storybook-item--padding">Wrap 1</div></template>
            <template #slide2><div class="wiki-storybook-item--padding">Wrap 2</div></template>
            <template #slide3><div class="wiki-storybook-item--padding">Wrap 3</div></template>
          </DesignComponent>
        </div>
      `,
      play: `
        const isJsdom = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
        if (isJsdom) {
          Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
            configurable: true,
            get() {
              return 120
            }
          })
        }
        try {
          const undefinedStartComponent = canvasElement.querySelector<HTMLElement>('.test-undefined-start')
          const modelControlledComponent = canvasElement.querySelector<HTMLElement>('.test-model-controlled')
          const modelSyncState = canvasElement.querySelector<HTMLElement>('.test-model-sync-state')

          await expect(undefinedStartComponent?.querySelector('.design-component__slide--active')).toBeNull()

          await step('Transition from undefined selected activates target slide via setFlash', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-init-slide2')!)
            await waitFor(async () => {
              await expect(undefinedStartComponent?.querySelector('[data-key="slide2"]')).toHaveClass('design-component__slide--active')
            })
          })

          await step('Verify wrap-around navigation with back() and next() and modelSelected sync', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-wrap-back')!)
            await waitFor(async () => {
              await expect(modelControlledComponent?.querySelector('[data-key="slide3"]')).toHaveClass('design-component__slide--active')
              await expect(modelSyncState).toHaveTextContent('selected=slide3|modelSelected=slide3')
            })

            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-wrap-next')!)
            await waitFor(async () => {
              await expect(modelControlledComponent?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
              await expect(modelSyncState).toHaveTextContent('selected=slide1|modelSelected=slide1')
            })
          })

          await step('Verify navigating to an unknown slide key leaves active slide unchanged', async () => {
            await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.test-unknown-slide')!)
            await expect(modelControlledComponent?.querySelector('[data-key="slide1"]')).toHaveClass('design-component__slide--active')
            await expect(modelSyncState).toHaveTextContent('selected=slide1|modelSelected=slide1')
          })
        } finally {
          if (isJsdom && originalOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
          }
        }
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
<Canvas of={Component.MotionAxisEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionAxis'} type={'expose'}/>
<Canvas of={Component.MotionAxisExpose}/>
    `,
    slots: `
<StorybookDescriptions componentName={'MotionAxis'} type={'slots'}/>
<Canvas of={Component.MotionAxisSlots}/>
    `
  },
  ai: {
    description: `
Low-level layout component for animating transitions between multiple content areas (slides) along X, Y, or Z axes. Ideal for multi-step wizards, tabbed content, and gallery-like interfaces requiring direction-aware motion.
Features automated animation direction detection (next/back), smooth container height transitions (animationHeight), and lazy loading support (inDom, inDomSlide) to manage slide life-cycles in the DOM. Supports horizontal slide, vertical flip, and depth-based transitions.
Controlled via the selected prop or v-model:selected / v-model:modelSelected, utilizing named slide slots (#slide1, #slide2, etc.) and exposing directional navigation methods (to, next, back, top, right, bottom, left, up, down).
    `,
    hide: true
  }
}
