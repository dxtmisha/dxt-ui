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
      'Automatic DOM mutation observing via auto property',
      'Automatic transition cleanup upon animation end',
      'Ability to disable layout animation via disabled property'
    ],
    ru: [
      'Плавные FLIP-анимации перестроения при обновлениях DOM',
      'Асинхронное выполнение обновлений через метод update',
      'Автоматическое отслеживание изменений DOM с помощью свойства auto',
      'Автоматическая очистка стилей после завершения анимации',
      'Возможность отключения анимации перестроения с помощью свойства disabled'
    ]
  },
  render: `
    <DesignComponent v-bind="args" class="wiki-storybook-group">
      <div
        v-for="item in 5"
        :key="item"
        class="wiki-storybook-item--squared--xs"
        style="cursor: pointer;"
        @click="$event.target.parentNode.appendChild($event.target)"
      >
        <div class="wiki-storybook-item wiki-storybook-item--padding" style="pointer-events: none;">
          <span class="wiki-storybook-item__label">Item {{ item }}</span>
        </div>
      </div>
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
      let nextId = 6

      const add = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            const index = Math.floor(Math.random() * (items.value.length + 1))
            items.value.splice(index, 0, nextId++)
          })
        }
      }

      const remove = async () => {
        if (flipRef.value && items.value.length > 0) {
          await flipRef.value.update(() => {
            const index = Math.floor(Math.random() * items.value.length)
            items.value.splice(index, 1)
          })
        }
      }

      const shuffle = async () => {
        if (flipRef.value) {
          await flipRef.value.update(() => {
            items.value = [...items.value].sort(() => Math.random() - 0.5)
          })
        }
      }

      return { flipRef, items, add, remove, shuffle }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="add">Add</button>
            <button class="wiki-storybook-button" @click="remove">Remove</button>
            <button class="wiki-storybook-button" @click="shuffle">Shuffle</button>
          </div>

          <DesignComponent ref="flipRef" class="wiki-storybook-group">
            <div v-for="item in items" :key="item" class="wiki-storybook-item--squared--xs">
              <div class="wiki-storybook-item wiki-storybook-item--padding">
                <span class="wiki-storybook-item__label">Item {{ item }}</span>
              </div>
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

<StorybookDescriptions componentName={'MotionFlip'} type={'work'}/>

<StorybookDescriptions componentName={'MotionFlip'} type={'mode'}/>
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
Supports automatic DOM mutation observing via the 'auto' property, or explicit execution via the 'update(callback)' expose method.
Provides a 'stop()' expose method to abort active animations.
Used for dynamic lists, reorderable grids, and card transitions requiring high-performance hardware-accelerated animations.
    `
  }
}
