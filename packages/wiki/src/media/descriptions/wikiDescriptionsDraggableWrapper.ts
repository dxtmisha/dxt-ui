import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for DraggableWrapper component properties /
 * Описания свойств компонента DraggableWrapper
 */
export const wikiDescriptionsDraggableWrapper: StorybookComponentsDescriptionItem = {
  name: 'DraggableWrapper',
  description: {
    en: 'A component wrapper designed for drag-and-drop elements reordering and sorting',
    ru: 'Компонент-обертка, предназначенный для изменения порядка и сортировки элементов перетаскиванием'
  },
  possibilities: {
    en: [
      'smooth transitions and dragging states',
      'multiselect dragging support with offset angles',
      'dynamic placeholder spacer location calculation',
      'supports disabling drag-and-drop behavior',
      'custom child drag handles via classClick and custom root HTML tag'
    ],
    ru: [
      'плавные переходы и состояния перетаскивания',
      'поддержка перетаскивания нескольких выбранных элементов со смещением',
      'динамический расчет положения элемента-заполнителя',
      'поддержка отключения поведения drag-and-drop',
      'поддержка дочерних ручек перетаскивания через classClick и кастомного корневого HTML-тега'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { DraggableWrapperExpose } from \'@dxtmisha/constructor/DraggableWrapper\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #default="{ className, classClick, classDrop, classPosition }">
        <div class="wiki-storybook-group">
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-1"
          >
            Drop Zone 1
          </div>
          <div
            :class="['wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg wiki-storybook-item--center', className, classDrop]"
            data-value="drop-target-2"
          >
            Drop Zone 2
          </div>

          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-dummy--color--blue', className, classClick, classPosition]"
            :data-value="'item-' + item"
          >
            <span>Item {{ item }}</span>
          </div>
        </div>
      </template>
    </DesignComponent>
  `,
  play: `
const wrapper = canvasElement.querySelector('.design-component')
await expect(wrapper).toBeInTheDocument()
await expect(wrapper?.querySelectorAll('[data-value^="item-"]').length).toBe(12)
await expect(wrapper?.querySelectorAll('[data-value^="drop-target-"]').length).toBe(2)
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'DraggableWrapperHandle',
      name: {
        en: 'Child drag handle (classClick)',
        ru: 'Дочерняя ручка перетаскивания (classClick)'
      },
      template: `
        <DesignComponent :delay="0">
          <template #default="{ className, classClick, classPosition }">
            <div class="wiki-storybook-group">
              <div
                v-for="item in 4"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center', className, classPosition]"
                :data-value="'handle-' + item"
              >
                <span :class="classClick">☰</span>
                <span>Task {{ item }}</span>
              </div>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const wrapper = canvasElement.querySelector('.design-component')
await expect(wrapper).toBeInTheDocument()
await expect(wrapper?.querySelectorAll('[data-value^="handle-"]').length).toBe(4)
await expect(wrapper?.querySelectorAll('.design-component__click').length).toBe(4)
      `
    },
    {
      id: 'DraggableWrapperDisabled',
      name: {
        en: 'Disabled state',
        ru: 'Отключённое состояние'
      },
      propsName: ['disabled'],
      template: `
        <DesignComponent disabled>
          <template #default="{ className, classClick, classPosition }">
            <div class="wiki-storybook-group">
              <div
                v-for="item in 3"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick, classPosition]"
                :data-value="'locked-' + item"
              >
                Locked {{ item }}
              </div>
            </div>
          </template>
        </DesignComponent>
      `,
      play: `
const wrapper = canvasElement.querySelector('.design-component')
await expect(wrapper).toBeInTheDocument()
await expect(wrapper).toHaveClass('design-component--disabled')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (NOT in documentation)
    // =========================================================================
    {
      id: 'DraggableWrapperTestPropsAndExpose',
      name: {
        en: 'Test: Tag, delay, classesSquare, scoped classes and toNewPosition expose',
        ru: 'Тест: Тег, delay, classesSquare, классы слота и expose toNewPosition'
      },
      propsName: ['tag', 'delay', 'classesSquare', 'disabled'],
      setup: `
      const wrapperRef = ref<DraggableWrapperExpose | null>(null)
      const reordered = ref<string>('')
      const runReorder = () => {
        if (!wrapperRef.value) return
        const result = wrapperRef.value.toNewPosition(
          [
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' }
          ],
          {
            active: document.createElement('div'),
            value: ['a', 'c'],
            valueActive: 'a',
            valueSelection: ['a'],
            valueTo: 'c',
            before: false
          }
        )
        reordered.value = result.map(entry => entry.label).join(',')
      }
      return { wrapperRef, reordered, runReorder }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" type="button" @click="runReorder">Reorder</button>
            <span class="wiki-storybook-card" data-testid="reordered-output">{{ reordered }}</span>
          </div>
          <DesignComponent
            ref="wrapperRef"
            tag="section"
            :delay="0"
            :classes-square="['custom-square-class']"
          >
            <template #default="{ className, classClick, classDrop, classPosition, classSelection }">
              <div
                class="wiki-storybook-group"
                :data-classes="[className, classClick, classDrop, classPosition, classSelection].join('|')"
              >
                <div :class="[className, classClick, classPosition, classSelection]" data-value="a">A</div>
                <div :class="[className, classClick, classPosition]" data-value="b">B</div>
                <div :class="[className, classClick, classPosition]" data-value="c">C</div>
              </div>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const wrapper = canvasElement.querySelector('section.design-component')
await expect(wrapper).toBeInTheDocument()
const square = wrapper?.querySelector('.design-component__square')
await expect(square).toBeInTheDocument()
const firstItem = wrapper?.querySelector('[data-value="a"]')
await expect(firstItem).toBeInTheDocument()

await step('Activate drag with delay=0 and verify classesSquare', async () => {
  await fireEvent.mouseDown(firstItem as HTMLElement, { button: 0, clientX: 20, clientY: 20 })
  await waitFor(() => {
    expect(square).toHaveClass('custom-square-class')
  })
  await fireEvent.mouseUp(window)
})

await step('Invoke exposed toNewPosition helper', async () => {
  await userEvent.click(canvas.getByRole('button', { name: 'Reorder' }))
  await expect(canvas.getByTestId('reordered-output')).toHaveTextContent('B,C,A')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'DraggableWrapper'} type={'draggableWrapper'}/>
<StorybookDescriptions componentName={'DraggableWrapper'} type={'instruction'}/>
<Canvas of={Component.DraggableWrapperHandle}/>

<StorybookDescriptions componentName={'DraggableWrapper'} type={'classesSquare'}/>
<Canvas of={Component.DraggableWrapperDisabled}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DraggableWrapper v-bind="args">
    <template #default="{ className, classClick, classPosition }">
      <div v-for="item in 5" :key="item" :class="[className, classPosition]" :data-value="item">
        <span :class="classClick">☰</span>
        Item {{ item }}
      </div>
    </template>
  </DraggableWrapper>
</div>
    `,
    description: `
A logic wrapper component providing drag-and-drop sorting and reordering capabilities for lists or grid elements. Calculates dynamic layouts, active selections, placeholder spacers, and manages custom transition classes and event dispatches.
    `,
    hide: true
  }
}
