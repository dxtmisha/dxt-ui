import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Progress properties
 *
 * Описания свойств компонента Progress
 */
export const wikiDescriptionsProgress: StorybookComponentsDescriptionItem = {
  name: 'Progress',
  description: {
    en: 'Component for displaying progress of operations or loading states',
    ru: 'Компонент для отображения прогресса операций или состояний загрузки'
  },
  possibilities: {
    en: [
      'linear and circular progress indicators',
      'determinate and indeterminate progress states',
      'customizable value and maximum values',
      'different positioning options (top, bottom, static)',
      'delay settings for showing and hiding',
      'dense and inverse styling variants',
      'point marker for linear progress'
    ],
    ru: [
      'линейные и круглые индикаторы прогресса',
      'детерминированные и неопределенные состояния прогресса',
      'настраиваемые значения прогресса и максимума',
      'различные варианты позиционирования (сверху, снизу, статично)',
      'настройки задержки для показа и скрытия',
      'компактный и инвертированный варианты стилизации',
      'точечный маркер для линейного прогресса'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES (Included in documentation.body)
    // =========================================================================
    {
      id: 'ProgressTypes',
      name: {
        en: 'Types',
        ru: 'Типы'
      },
      propsName: ['linear', 'circular'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Linear Progress</div>
            <DesignComponent visible indeterminate="type2" linear position="static"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Circular Progress</div>
            <DesignComponent visible indeterminate="type2" circular/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)

const linearElement = items[0]
await expect(linearElement).toHaveClass('design-component--linear')
await expect(linearElement.tagName.toLowerCase()).toBe('div')
await expect(linearElement).toHaveAttribute('role', 'status')

const circularElement = items[1]
await expect(circularElement).toHaveClass('design-component--circular')
await expect(circularElement.tagName.toLowerCase()).toBe('svg')
await expect(circularElement.querySelectorAll('circle').length).toBe(2)
await expect(circularElement).toHaveAttribute('role', 'status')
      `
    },
    {
      id: 'ProgressLinear',
      name: {
        en: 'Linear Progress',
        ru: 'Линейный прогресс'
      },
      propsName: ['linear', 'point', 'position', 'indeterminate', 'value'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Value: 50</div>
            <DesignComponent visible linear position="static" :value="50" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Point</div>
            <DesignComponent visible linear position="static" point :value="75" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Position: bottom</div>
            <DesignComponent visible linear position="bottom" :value="60" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type1</div>
            <DesignComponent visible linear position="static" indeterminate="type1" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type2</div>
            <DesignComponent visible linear position="static" indeterminate="type2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type3</div>
            <DesignComponent visible linear position="static" indeterminate="type3" />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(6)

// 1. Value: 50
const itemValue50 = items[0] as HTMLElement
await expect(itemValue50).toHaveAttribute('role', 'progressbar')
await expect(itemValue50).toHaveAttribute('aria-valuenow', '50')
await expect(itemValue50).toHaveAttribute('aria-valuemin', '0')
await expect(itemValue50).toHaveAttribute('aria-valuemax', '100')
await expect(itemValue50.style.getPropertyValue('--design-component-sys-value')).toBe('50%')

// 2. Point with value 75
const itemPoint = items[1] as HTMLElement
await expect(itemPoint).toHaveClass('design-component--point')
await expect(itemPoint.querySelector('span')).toBeInTheDocument()
await expect(itemPoint).toHaveAttribute('role', 'progressbar')
await expect(itemPoint).toHaveAttribute('aria-valuenow', '75')
await expect(itemPoint.style.getPropertyValue('--design-component-sys-value')).toBe('25%')

// 3. Position: bottom
const itemBottom = items[2]
await expect(itemBottom).toHaveClass('design-component--position--bottom')
await expect(itemBottom).toHaveAttribute('aria-valuenow', '60')

// 4. Indeterminate type1
const itemIndeterminate1 = items[3]
await expect(itemIndeterminate1).toHaveClass('design-component--indeterminate--type1')
await expect(itemIndeterminate1).toHaveAttribute('role', 'status')

// 5. Indeterminate type2
const itemIndeterminate2 = items[4]
await expect(itemIndeterminate2).toHaveClass('design-component--indeterminate--type2')
await expect(itemIndeterminate2).toHaveAttribute('role', 'status')

// 6. Indeterminate type3
const itemIndeterminate3 = items[5]
await expect(itemIndeterminate3).toHaveClass('design-component--indeterminate--type3')
await expect(itemIndeterminate3).toHaveAttribute('role', 'status')
      `
    },
    {
      id: 'ProgressCircular',
      name: {
        en: 'Circular Progress',
        ru: 'Круглый прогресс'
      },
      propsName: ['circular', 'dense', 'indeterminate', 'value'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignComponent visible circular :value="50" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dense</div>
            <DesignComponent visible circular dense :value="75" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate</div>
            <DesignComponent visible circular indeterminate="type1" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dense Indeterminate</div>
            <DesignComponent visible circular dense indeterminate="type2" />
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)

// 1. Basic circular value 50
const itemBasic = items[0] as HTMLElement
await expect(itemBasic.tagName.toLowerCase()).toBe('svg')
await expect(itemBasic).toHaveAttribute('role', 'progressbar')
await expect(itemBasic).toHaveAttribute('aria-valuenow', '50')
await expect(itemBasic.style.getPropertyValue('--design-component-sys-value')).toBe('50')
await expect(itemBasic.querySelectorAll('circle').length).toBe(2)

// 2. Dense circular value 75
const itemDense = items[1] as HTMLElement
await expect(itemDense).toHaveClass('design-component--dense')
await expect(itemDense).toHaveAttribute('aria-valuenow', '75')
await expect(itemDense.style.getPropertyValue('--design-component-sys-value')).toBe('75')

// 3. Indeterminate circular
const itemIndeterminate = items[2]
await expect(itemIndeterminate).toHaveClass('design-component--indeterminate--type1')
await expect(itemIndeterminate).toHaveAttribute('role', 'status')

// 4. Dense indeterminate circular
const itemDenseIndeterminate = items[3]
await expect(itemDenseIndeterminate).toHaveClass('design-component--dense')
await expect(itemDenseIndeterminate).toHaveClass('design-component--indeterminate--type2')
await expect(itemDenseIndeterminate).toHaveAttribute('role', 'status')
      `
    },
    {
      id: 'ProgressValues',
      name: {
        en: 'Values',
        ru: 'Значения'
      },
      propsName: ['value', 'max'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">value: 25, max: 100</div>
            <DesignComponent visible position="static" :value="25" :max="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">value: 75, max: 100</div>
            <DesignComponent visible position="static" :value="75" :max="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">value: 50, max: 200</div>
            <DesignComponent visible circular :value="50" :max="200"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">value: 75, max: 200</div>
            <DesignComponent visible circular :value="75" :max="200"/>
          </div>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)

const itemLinear25 = items[0] as HTMLElement
await expect(itemLinear25).toHaveAttribute('aria-valuenow', '25')
await expect(itemLinear25).toHaveAttribute('aria-valuemax', '100')
await expect(itemLinear25.style.getPropertyValue('--design-component-sys-value')).toBe('75%')

const itemLinear75 = items[1] as HTMLElement
await expect(itemLinear75).toHaveAttribute('aria-valuenow', '75')
await expect(itemLinear75).toHaveAttribute('aria-valuemax', '100')
await expect(itemLinear75.style.getPropertyValue('--design-component-sys-value')).toBe('25%')

const itemCircular50 = items[2] as HTMLElement
await expect(itemCircular50).toHaveAttribute('aria-valuenow', '50')
await expect(itemCircular50).toHaveAttribute('aria-valuemax', '200')
await expect(itemCircular50.style.getPropertyValue('--design-component-sys-value')).toBe('25')

const itemCircular75 = items[3] as HTMLElement
await expect(itemCircular75).toHaveAttribute('aria-valuenow', '75')
await expect(itemCircular75).toHaveAttribute('aria-valuemax', '200')
await expect(itemCircular75.style.getPropertyValue('--design-component-sys-value')).toBe('37.5')
      `
    },
    {
      id: 'ProgressDelays',
      name: {
        en: 'Delays',
        ru: 'Задержки'
      },
      propsName: ['delay', 'delayHide', 'visible'],
      setup: `
      const isVisible = ref(false)
      const onToggle = () => {
        isVisible.value = !isVisible.value
      }
      return {
        isVisible,
        onToggle
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onToggle">Toggle Visible: {{ isVisible }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
              <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Standard delays (360/200)</div>
                <DesignComponent :visible="isVisible" circular position="static" delay="360" delayHide="200" />
              </div>
              <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Fast appearance (100/200)</div>
                <DesignComponent :visible="isVisible" linear position="static" delay="100" delayHide="200" />
              </div>
              <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">No delays (0/0)</div>
                <DesignComponent :visible="isVisible" linear position="static" delay="0" delayHide="0" />
              </div>
            </div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const toggleButton = canvas.getByRole('button', { name: /Toggle Visible:/ })
await expect(toggleButton).toBeInTheDocument()

const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)

// Initially not visible
await expect(items[0]).not.toHaveClass('design-component--visible')
await expect(items[1]).not.toHaveClass('design-component--visible')
await expect(items[2]).not.toHaveClass('design-component--visible')

await step('Toggle visibility on', async () => {
  await userEvent.click(toggleButton)
  await waitFor(() => {
    // No-delay item becomes visible immediately
    expect(items[2]).toHaveClass('design-component--visible')
  })
})

await step('Wait for delayed items to become visible', async () => {
  await waitFor(() => {
    expect(items[0]).toHaveClass('design-component--visible')
    expect(items[1]).toHaveClass('design-component--visible')
  }, { timeout: 1500 })
})

await step('Toggle visibility off', async () => {
  await userEvent.click(toggleButton)
  await waitFor(() => {
    expect(items[2]).not.toHaveClass('design-component--visible')
  })
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Prefixed with ProgressTest... and "Test: " / "Тест: ")
    // NEVER add Tier 2 stories to the documentation section below!
    // =========================================================================
    {
      id: 'ProgressTestStates',
      name: {
        en: 'Test: Modifiers, inverse, point and zero value',
        ru: 'Тест: Модификаторы, inverse, point и нулевое значение'
      },
      propsName: ['inverse', 'dense', 'point', 'visible', 'value'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">inverse linear</div>
            <DesignComponent visible linear position="static" inverse :value="40"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">circular dense inverse</div>
            <DesignComponent visible circular dense inverse :value="60"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">point + inverse</div>
            <DesignComponent visible linear point inverse position="static" :value="80"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">value 0 (progressbar role)</div>
            <DesignComponent visible linear position="static" :value="0"/>
          </div>
        </div>
      `,
      play: `
await waitFor(() => {
  const items = canvasElement.querySelectorAll('.design-component')
  expect(items.length).toBe(4)

  // 1. inverse linear
  const itemInverse = items[0]
  expect(itemInverse).toHaveClass('design-component--inverse')
  expect(itemInverse).toHaveClass('design-component--linear')
  expect(itemInverse).toHaveAttribute('role', 'progressbar')

  // 2. circular dense inverse
  const itemCircularDenseInverse = items[1]
  expect(itemCircularDenseInverse).toHaveClass('design-component--circular')
  expect(itemCircularDenseInverse).toHaveClass('design-component--dense')
  expect(itemCircularDenseInverse).toHaveClass('design-component--inverse')

  // 3. point + inverse
  const itemPointInverse = items[2]
  expect(itemPointInverse).toHaveClass('design-component--point')
  expect(itemPointInverse).toHaveClass('design-component--inverse')
  expect(itemPointInverse.querySelector('span')).toBeInTheDocument()

  // 4. value 0 is a determinate progress value
  const itemValueZero = items[3]
  expect(itemValueZero).toHaveAttribute('role', 'progressbar')
  expect(itemValueZero).toHaveAttribute('aria-valuenow', '0')
})
      `
    },
    {
      id: 'ProgressTestAriaAndPositions',
      name: {
        en: 'Test: ARIA labels, positioning and clientOnly',
        ru: 'Тест: ARIA метки, позиционирование и clientOnly'
      },
      propsName: ['ariaLabel', 'position', 'clientOnly', 'visible'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Custom ariaLabel</div>
            <DesignComponent visible linear position="static" ariaLabel="Custom file upload in progress" :value="45"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default loading aria-label</div>
            <DesignComponent visible linear position="static"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">position: top</div>
            <DesignComponent visible linear position="top"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">clientOnly: false</div>
            <DesignComponent visible circular :clientOnly="false" :value="30"/>
          </div>
        </div>
      `,
      play: `
await waitFor(() => {
  const items = canvasElement.querySelectorAll('.design-component')
  expect(items.length).toBe(4)

  // 1. Custom ariaLabel
  const itemCustomLabel = items[0]
  expect(itemCustomLabel).toHaveAttribute('aria-label', 'Custom file upload in progress')
  expect(itemCustomLabel).toHaveAttribute('role', 'progressbar')

  // 2. Default loading aria-label
  const itemDefaultLabel = items[1]
  expect(itemDefaultLabel).toHaveAttribute('aria-label')
  expect(itemDefaultLabel).toHaveAttribute('role', 'status')

  // 3. position: top
  const itemPositionTop = items[2]
  expect(itemPositionTop).toHaveClass('design-component--position--top')

  // 4. clientOnly: false
  const itemClientOnlyFalse = items[3]
  expect(itemClientOnlyFalse).toHaveAttribute('role', 'progressbar')
  expect(itemClientOnlyFalse).toHaveAttribute('aria-valuenow', '30')
})
      `
    },
    {
      id: 'ProgressTestInteractive',
      name: {
        en: 'Test: Interactive dynamic value and modifiers updates',
        ru: 'Тест: Интерактивное динамическое обновление значений и модификаторов'
      },
      propsName: ['value', 'max', 'dense', 'point'],
      setup: `
      const progressValue = ref(10)
      const isDense = ref(false)
      const isPoint = ref(false)

      const onIncrement = () => {
        progressValue.value = progressValue.value >= 100 ? 0 : progressValue.value + 25
      }

      const onReset = () => {
        progressValue.value = 0
      }

      const onToggleDense = () => {
        isDense.value = !isDense.value
      }

      const onTogglePoint = () => {
        isPoint.value = !isPoint.value
      }

      return {
        progressValue,
        isDense,
        isPoint,
        onIncrement,
        onReset,
        onToggleDense,
        onTogglePoint
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onIncrement">Increment Value ({{ progressValue }})</button>
            <button class="wiki-storybook-button" @click="onReset">Reset Zero</button>
            <button class="wiki-storybook-button" @click="onToggleDense">Toggle Dense ({{ isDense }})</button>
            <button class="wiki-storybook-button" @click="onTogglePoint">Toggle Point ({{ isPoint }})</button>
          </div>

          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
              <div class="wiki-storybook-item__label">Linear dynamic</div>
              <DesignComponent visible linear position="static" :point="isPoint" :value="progressValue"/>
            </div>
            <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
              <div class="wiki-storybook-item__label">Circular dynamic</div>
              <DesignComponent visible circular :dense="isDense" :value="progressValue"/>
            </div>
          </div>
        </div>
      `,
      play: `
const canvas = within(canvasElement)
const incrementButton = canvas.getByRole('button', { name: /Increment Value/ })
const resetButton = canvas.getByRole('button', { name: 'Reset Zero' })
const denseButton = canvas.getByRole('button', { name: /Toggle Dense/ })
const pointButton = canvas.getByRole('button', { name: /Toggle Point/ })

const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(2)

const linearDynamic = items[0] as HTMLElement
const circularDynamic = items[1] as HTMLElement

// Initial state: value 10
await expect(linearDynamic).toHaveAttribute('aria-valuenow', '10')
await expect(circularDynamic).toHaveAttribute('aria-valuenow', '10')

await step('Increment progress value by 25', async () => {
  await userEvent.click(incrementButton)
  await waitFor(() => {
    expect(linearDynamic).toHaveAttribute('aria-valuenow', '35')
    expect(circularDynamic).toHaveAttribute('aria-valuenow', '35')
  })
})

await step('Toggle Point mode on linear progress', async () => {
  await userEvent.click(pointButton)
  await waitFor(() => {
    expect(linearDynamic).toHaveClass('design-component--point')
    expect(linearDynamic.querySelector('span')).toBeInTheDocument()
  })
})

await step('Toggle Dense mode on circular progress', async () => {
  await userEvent.click(denseButton)
  await waitFor(() => {
    expect(circularDynamic).toHaveClass('design-component--dense')
  })
})

await step('Reset progress value to zero', async () => {
  await userEvent.click(resetButton)
  await waitFor(() => {
    expect(linearDynamic).toHaveAttribute('role', 'progressbar')
    expect(linearDynamic).toHaveAttribute('aria-valuenow', '0')
    expect(circularDynamic).toHaveAttribute('role', 'progressbar')
    expect(circularDynamic).toHaveAttribute('aria-valuenow', '0')
  })
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Progress'} type={'progress'}/>
<Canvas of={Component.ProgressTypes}/>

<StorybookDescriptions componentName={'Progress'} type={'linear'}/>
<Canvas of={Component.ProgressLinear}/>

<StorybookDescriptions componentName={'Progress'} type={'circular'}/>
<Canvas of={Component.ProgressCircular}/>

<StorybookDescriptions componentName={'Progress'} type={'values'}/>
<Canvas of={Component.ProgressValues}/>

<StorybookDescriptions componentName={'Progress'} type={'delays'}/>
<Canvas of={Component.ProgressDelays}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 40px;"
>
  <Progress v-bind="args"/>
</div>
    `,
    description: `
Status indicator for ongoing processes, supporting both linear and circular visual styles. Capable of representing determinate (known percentage) and indeterminate (loading) states with customizable delays for showing/hiding.
Features horizontal bars (linear) and spinner rings (circular) with multiple indeterminate animation types. Includes positioning (top, bottom, static), dense styling for compact UIs, and a point marker for linear progress.
Controlled via the visible, value, and indeterminate props, with support for custom min/max bounds. Use for page-level loading bars, button action feedback, or inline file upload progress.
    `
  }
}
