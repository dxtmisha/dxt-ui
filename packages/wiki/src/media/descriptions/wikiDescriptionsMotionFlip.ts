import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MotionFlip component
 *
 * Описания компонента MotionFlip
 */
export const wikiDescriptionsMotionFlip: StorybookComponentsDescriptionItem = {
  name: 'MotionFlip',
  description: {
    en: 'A component for performing FLIP (First, Last, Invert, Play) layout animations on child elements during DOM changes such as list item additions, removals, or reordering.',
    ru: 'Компонент для выполнения FLIP-анимации (First, Last, Invert, Play) перестроения дочерних элементов при изменениях в DOM (добавление, удаление или сортировка элементов списка).'
  },
  possibilities: {
    en: [
      'Smooth FLIP layout transitions during DOM updates',
      'Asynchronous callback orchestration via update method',
      'Automatic transition cleanup upon animation end',
      'Ability to disable layout animation via disabled property'
    ],
    ru: [
      'Плавные FLIP-анимации перестроения при обновлениях DOM',
      'Асинхронное выполнение обновлений через метод update',
      'Автоматическая очистка стилей после завершения анимации',
      'Возможность отключения анимации перестроения с помощью свойства disabled'
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <div class="wiki-storybook-item">Item 1</div>
      <div class="wiki-storybook-item">Item 2</div>
    </DesignComponent>
`,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'MotionFlipBasic',
      name: {
        en: 'Basic Usage',
        ru: 'Базовое использование'
      },
      setup: `
      const flipRef = ref()
      const items = ref([1, 2, 3, 4, 5])

      const shuffle = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            items.value = [...items.value].sort(() => Math.random() - 0.5)
          })
        }
      }

      return { flipRef, items, shuffle }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="shuffle">Shuffle</button>
          </div>

          <DesignComponent ref="flipRef" class="wiki-storybook-flex">
            <div
              v-for="item in items"
              :key="item"
              class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
            >
              Item {{ item }}
            </div>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MotionFlip'} type={'motionFlip'}/>
<Canvas of={Component.MotionFlipBasic}/>

<StorybookDescriptions componentName={'MotionFlip'} type={'classes'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionFlip'} type={'expose'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    description: `
Low-level layout animation component implementing the FLIP (First, Last, Invert, Play) technique. Animates position and dimension changes of child elements when list items are reordered, added, or removed.
Exposes an update(callback) async method which records initial child rects, executes the DOM-mutating callback, measures final rects, applies temporary CSS transform variables, and animates children smoothly to their new positions.
Used for dynamic lists, reorderable grids, and card transitions requiring high-performance hardware-accelerated animations.
    `
  }
}
