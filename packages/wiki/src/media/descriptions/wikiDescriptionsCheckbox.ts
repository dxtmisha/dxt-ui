import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Checkbox component
 *
 * Описания свойств компонента Checkbox
 */
export const wikiDescriptionsCheckbox: StorybookComponentsDescriptionItem = {
  name: 'Checkbox',
  description: {
    en: 'Interactive checkbox component for binary or indeterminate state selection',
    ru: 'Интерактивный компонент чекбокса для выбора бинарного или неопределённого состояния'
  },
  possibilities: {
    en: [
      'checked, unchecked, and indeterminate states',
      'built-in validation support with custom messages',
      'label and description text support',
      'customizable icons for checked and indeterminate states',
      'disabled and loading states',
      'ripple effect on interaction',
      'skeleton state for loading placeholders',
      'adaptive layout options',
      'form integration with name and value attributes'
    ],
    ru: [
      'состояния: отмечен, не отмечен и неопределённое',
      'встроенная поддержка валидации с пользовательскими сообщениями',
      'поддержка текста метки и описания',
      'настраиваемые иконки для состояний отмечен и неопределённое',
      'состояния отключения и загрузки',
      'эффект волны при взаимодействии',
      'состояние скелетона для заполнителей загрузки',
      'опции адаптивной разметки',
      'интеграция с формами через атрибуты name и value'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
      <DesignComponent v-bind="args" />
    `,
  stories: [
    {
      id: 'CheckboxBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Unchecked" />
          <DesignComponent label="Checked" :value="true" />
          <DesignComponent label="Indeterminate" indeterminate :value="true" />
          <DesignComponent label="Disabled" disabled />
          <DesignComponent label="Disabled & Checked" :value="true" disabled />
        </div>
      `
    },
    {
      id: 'CheckboxWithDescription',
      name: {
        en: 'With description',
        ru: 'С описанием'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Accept terms"
            description="I agree to the terms and conditions"
          />
          <DesignComponent
            label="Subscribe"
            description="Get updates and newsletters"
            :value="true"
          />
        </div>
      `
    },
    {
      id: 'CheckboxValidation',
      name: {
        en: 'Validation',
        ru: 'Валидация'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Required field"
            required
            validationMessage="This field is required"
          />
          <DesignComponent
            label="Valid checkbox"
            :value="true"
            required
          />
        </div>
      `
    },
    {
      id: 'CheckboxStates',
      name: {
        en: 'States',
        ru: 'Состояния'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Normal" />
          <DesignComponent label="Focus" focus />
          <DesignComponent label="Disabled" disabled />
          <DesignComponent label="Loading" loading />
        </div>
      `
    },
    {
      id: 'CheckboxVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        checkboxValue: ref(false),
        indeterminateValue: ref(null)
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = true">Check</button>
            <button class="wiki-storybook-button" @click="checkboxValue = false">Uncheck</button>
          </div>
          <DesignComponent
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
          <div>Value: {{ checkboxValue }}</div>
        </div>
      `
    },
    {
      id: 'CheckboxSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading checkbox" />
            <DesignComponent isSkeleton label="Another loading checkbox" />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Checkbox'} type={'checkbox'}/>
<Canvas of={Component.CheckboxBasic}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'indeterminate'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.CheckboxVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CheckboxSkeleton}/>

<StorybookDescriptions componentName={'Checkbox'} type={'label'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'description'}/>
<Canvas of={Component.CheckboxWithDescription}/>

<StorybookDescriptions componentName={'Checkbox'} type={'validation'}/>
<Canvas of={Component.CheckboxValidation}/>

<StorybookDescriptions componentName={'Checkbox'} type={'states'}/>
<Canvas of={Component.CheckboxStates}/>

    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'validationMessage'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `
  },
  ai: {
    description: `
Checkbox is a fundamental form control component that allows users to select binary (yes/no) or indeterminate states.

**When to use:**
1. **Binary Choice:** Agreeing to terms, toggling settings, enabling features.
2. **Multiple Selection:** Selecting multiple items from a list (use multiple checkboxes).
3. **Indeterminate State:** Parent checkbox representing partially selected child items.
4. **Form Controls:** Part of forms requiring boolean input values.

**Key Properties & Logic:**

1. **Value & State:**
   - \`value\` or \`v-model\`: Boolean value representing checked state (true/false).
   - \`indeterminate\`: Special state showing a dash instead of a checkmark, representing a partial selection.

2. **Label & Description:**
   - \`label\`: Primary text displayed next to the checkbox.
   - \`description\`: Secondary descriptive text below the label.
   - Both support slots for custom content.

3. **Icons:**
   - \`iconCheckbox\`: Custom icon for the checked state (default: checkmark).
   - \`iconIndeterminate\`: Custom icon for the indeterminate state (default: horizontal line).

4. **Form Integration:**
   - \`name\`: Form field name for submission.
   - \`valueVariantHide\`: Hidden input value when unchecked (default: "0").
   - \`required\`: Makes the field required for validation.

5. **Validation:**
   - \`validationMessage\`: Custom error message to display.
   - \`checkValidity()\`: Exposed method to programmatically validate.

6. **Visual States:**
   - \`disabled\`: Prevents interaction and grays out the component.
   - \`loading\`: Shows a progress indicator instead of the checkbox icon.
   - \`focus\`: Programmatically applies focus state.
   - \`isSkeleton\`: Shows skeleton loading state.

7. **Layout:**
   - \`block\`: Makes the checkbox full width (default: true).
   - \`itemCenter\`: Centers the checkbox icon vertically (default: true).
   - \`adaptive\`: Adaptive layout options.

8. **Interaction:**
   - Clicking anywhere on the label or checkbox toggles the state.
   - Ripple effect on click for visual feedback.
   - Emits \`input\` and \`change\` events.

**Design Identification:**
- **Standard Checkbox:** Square box with optional checkmark and label.
- **With Description:** Checkbox with primary label and secondary text.
- **Indeterminate:** Checkbox showing a horizontal line (dash) instead of checkmark.
- **Error State:** Checkbox with red border/text and validation message below.

**Example:**
\`<Checkbox label="I agree to terms" description="Required to continue" required v-model="agreed" />\`
    `
  }
}
