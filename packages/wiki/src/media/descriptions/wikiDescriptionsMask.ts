import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Mask component
 *
 * Описания компонента Mask
 */
export const wikiDescriptionsMask: StorybookComponentsDescriptionItem = {
  name: 'Mask',
  description: {
    en: 'Input masking utility for text, numbers, currency and dates with flexible patterns and validation.',
    ru: 'Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией.'
  },
  possibilities: {
    en: [
      'string or multi-pattern masks (auto selection)',
      'special symbols define input groups and literals are auto-inserted',
      'per-group and global validation patterns',
      'number / currency formats with grouping and fraction control',
      'date/time helpers and locale-aware behavior'
    ],
    ru: [
      'одиночные и множественные маски (автовыбор по вводу)',
      'спецсимволы задают группы ввода, литералы подставляются автоматически',
      'валидация по группам и глобально',
      'форматы числа/валюты с группировкой и дробной частью',
      'помощники для даты/времени и поведение с учётом локали'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-group" >
      <DesignComponent
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `,
  stories: [
    {
      id: 'MaskBasic',
      name: {
        en: 'Mask Examples',
        ru: 'Примеры масок'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <DesignComponent :mask="'+1 *** *** ** **'" placeholder="Enter phone number"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <DesignComponent
              :mask="['*** *** ***', '**** **** ****']"
              placeholder="Auto format selection"
            />
          </div>
        </div>
      `
    },
    {
      id: 'MaskSpecial',
      name: {
        en: 'Special Characters',
        ru: 'Специальные символы'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <DesignComponent :mask="'+7 *** *** ** **'" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <DesignComponent :mask="'XX.XX.XXXX'" special="X" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <DesignComponent :mask="'***-###-XXX'" :special="['*', '#', 'X']" />
          </div>
        </div>
      `
    },
    {
      id: 'MaskValidation',
      name: {
        en: 'Validation',
        ru: 'Валидация'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <DesignComponent :mask="'*** *** ***'" pattern="[6-9]+" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <DesignComponent :mask="'**:##'" :special="['*', '#']" :pattern="'[6-9]+'"/>
          </div>
        </div>
      `
    },
    {
      id: 'MaskGroupSave',
      name: {
        en: 'Group navigation (groupSave)',
        ru: 'Навигация по группам (groupSave)'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <DesignComponent :mask="'****-####'" :special="['*', '#']" :groupSave="true" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <DesignComponent :mask="'****-####'" :special="['*', '#']" :groupSave="false" />
          </div>
        </div>
      `
    },
    {
      id: 'MaskMatch',
      name: {
        en: 'Allowed characters (match)',
        ru: 'Допустимые символы (match)'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <DesignComponent :mask="'***-***'" match="[A-F0-9]" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <DesignComponent :mask="'***-***'" match="[A-Za-z]" />
          </div>
        </div>
      `
    },
    {
      id: 'MaskNumberTypes',
      name: {
        en: 'Numeric types',
        ru: 'Числовые типы'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <DesignComponent type="number" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <DesignComponent type="number-format" language="ru" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <DesignComponent type="currency" currency="RUB" language="ru" />
          </div>
        </div>
      `
    },
    {
      id: 'MaskDateTypes',
      name: {
        en: 'Date and time types',
        ru: 'Типы дат и времени'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <DesignComponent type="date" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <DesignComponent type="datetime" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <DesignComponent type="hour-minute" />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Mask'} type={'basic'}/>

<StorybookDescriptions componentName={'Mask'} type={'mask'}/>
<Canvas of={Component.MaskBasic}/>

<StorybookDescriptions componentName={'Mask'} type={'special'}/>
<Canvas of={Component.MaskSpecial}/>

<StorybookDescriptions componentName={'Mask'} type={'groupSave'}/>
<Canvas of={Component.MaskGroupSave}/>

<StorybookDescriptions componentName={'Mask'} type={'match'}/>
<Canvas of={Component.MaskMatch}/>

<StorybookDescriptions componentName={'Mask'} type={'pattern'}/>
<Canvas of={Component.MaskValidation}/>

<StorybookDescriptions componentName={'Mask'} type={'type'}/>

<StorybookDescriptions componentName={'Mask'} type={'numberTypes'}/>
<Canvas of={Component.MaskNumberTypes}/>

<StorybookDescriptions componentName={'Mask'} type={'dateTypes'}/>
<Canvas of={Component.MaskDateTypes}/>

<StorybookDescriptions componentName={'Mask'} type={'visible'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'beforeinput'}/>
<StorybookDescriptions componentName={'Event'} type={'reset'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
<StorybookDescriptions componentName={'Event'} type={'keyboard'}/>
<StorybookDescriptions componentName={'Event'} type={'paste'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Mask'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
    `
  },
  ai: {
    description: `
 **Note:** This component is already integrated into the \`Input\` component and should not be used directly.

 Mask is a low-level utility component responsible for controlling and formatting user input. It ensures that the data entered matches a predefined structure (mask) or data type (date, number, currency).

 **How it works:**
 The component intercepts input events (\`beforeinput\`, \`input\`) and validates each character against allowed patterns (\`match\`). It automatically inserts static characters defined in the \`mask\` (like parentheses, dashes) and skips over them during navigation. For complex types like \`date\` or \`number\`, it uses internal logic to validate ranges (e.g., month 1-12) and format values (e.g., adding thousands separators).

 **Key Properties & Usage:**

 1. **Masking (\`mask\`):**
    - **String:** A single pattern (e.g., \`+1 (***) ***-****\`). The \`*\` character (or value of \`special\`) represents an input slot. All other characters are treated as static literals and are automatically inserted/skipped.
    - **Array:** A list of patterns (e.g., \`['(***) ***-****', '+1 (***) ***-****']\`). The component automatically selects the most appropriate mask based on the input length.

 2. **Input Types (\`type\`):**
    - \`text\` (default): Uses the \`mask\` pattern directly.
    - \`number\`: Formats input as a number. Automatically adds thousands separators based on \`language\`.
    - \`currency\`: Formats as currency. Requires \`currency\` prop (e.g., 'USD'). Uses \`fraction\` for decimal places.
    - \`date\` / \`datetime\` / \`time\`: Enforces valid date/time entry. The format (e.g., DD.MM.YYYY vs MM/DD/YYYY) is determined by the \`language\` prop.

 3. **Validation & Constraints:**
    - \`match\`: A Regular Expression string (e.g., \`[0-9a-fA-F]\`). Only characters matching this pattern are accepted. Useful for Hex codes, alphanumeric IDs, etc.
    - \`pattern\`: A Regex for validating the *completed* value.
    - \`min\`, \`max\`: For number/currency types, restricts the value range.

 4. **Customization:**
    - \`special\`: Defines the placeholder character in the \`mask\`. Default is \`*\`. Change this if your mask needs to contain literal asterisks.
    - \`language\`: Determines locale-specific formatting for dates and numbers (separators, date order).
    - \`fraction\`: Specifies the number of decimal places for numbers/currency.

 **When to use (Design Identification):**
 - **Formatted Text:** Inputs that require specific formatting like Phone Numbers \`+1 (555) ...\`, Credit Cards \`0000 0000 ...\`, or License Plates.
 - **Financial Data:** Inputs for amounts that need thousands separators or currency symbols.
 - **Dates:** Inputs requiring strict date structure (DD.MM.YYYY).

 **Example Scenarios:**
 - **Phone:** \`<Mask mask="+1 (***) ***-****" match="[0-9]"/>\`
 - **Price:** \`<Mask type="currency" currency="USD" fraction="2"/>\`
 - **Date:** \`<Mask type="date" language="en-GB"/>\` (DD/MM/YYYY)
     `
  }
}
