import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

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
      'point mode for minimal display'
    ],
    ru: [
      'линейные и круглые индикаторы прогресса',
      'детерминированные и неопределенные состояния прогресса',
      'настраиваемые значения прогресса и максимума',
      'различные варианты позиционирования (сверху, снизу, статично)',
      'настройки задержки для показа и скрытия',
      'компактный и инвертированный варианты стилизации',
      'точечный режим для минимального отображения'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    'import { ref } from \'vue\''
  ],
  stories: [
    {
      id: 'ProgressTypes',
      name: {
        en: 'Types',
        ru: 'Типы'
      },
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
      `
    },
    {
      id: 'ProgressLinear',
      name: {
        en: 'Linear Progress',
        ru: 'Линейный прогресс'
      },
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
      `
    },
    {
      id: 'ProgressCircular',
      name: {
        en: 'Circular Progress',
        ru: 'Круглый прогресс'
      },
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
      `
    },
    {
      id: 'ProgressValues',
      name: {
        en: 'Values',
        ru: 'Значения'
      },
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
            <div class="wiki-storybook-item__label">value: 75, max: 100</div>
            <DesignComponent visible circular :value="75" :max="200"/>
          </div>
        </div>
      `
    },
    {
      id: 'ProgressDelays',
      name: {
        en: 'Delays',
        ru: 'Задержки'
      },
      setup: `
      const visible = ref(false)
      return {
        visible,
        onClick: () => {
          visible.value = !visible.value
        }
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <button class="wiki-storybook-button" @click="onClick">Visible: {{ visible }}</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Standard delays (360/200)</div>
            <DesignComponent :visible="visible" circular position="static" delay="360" delayHide="200" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fast appearance (100/200)</div>
            <DesignComponent :visible="visible" linear position="static" delay="100" delayHide="200" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">No delays (0/0)</div>
            <DesignComponent :visible="visible" linear position="static" delay="0" delayHide="0" />
          </div>
        </div>
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
Progress is a component for indicating the status of a process.
It supports both linear and circular styles and can represent determinate (known percentage) or indeterminate (loading) states.

**Key Features:**
1. **Type:**
   - \`linear\`: A horizontal bar. Standard for page loading, file uploads, or headers.
   - \`circular\`: A spinner ring. Standard for button actions, block loading, or overlays.

2. **State:**
   - **Determinate:** Set \`value\` (number) and optionally \`max\`. Used when the progress percentage is known.
   - **Indeterminate:** Set \`indeterminate\` ('type1', 'type2', 'type3'). Used when the wait time is unknown.

3. **Positioning (\`position\`):**
   - \`static\` (default): Renders in the normal document flow.
   - \`top\`: Absolutely positioned at the top of the parent container.
   - \`bottom\`: Absolutely positioned at the bottom of the parent container.

4. **Styling:**
   - \`dense\`: Reduces the height/size of the indicator.
   - \`inverse\`: Adjusts colors for dark backgrounds.
   - \`point\`: Adds a pulsing dot at the end of the bar (linear only).

**Usage Examples:**

- **Linear Indeterminate (Page Load):** \`<Progress linear indeterminate="type1" position="top" visible />\`
- **Circular Determinate (Upload):** \`<Progress circular :value="45" visible />\`
- **Button Loading:** \`<Progress circular dense indeterminate="type2" visible />\` (inside a button)
    `
  }
}
