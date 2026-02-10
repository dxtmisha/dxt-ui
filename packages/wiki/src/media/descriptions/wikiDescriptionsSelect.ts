import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Select component properties
 *
 * Описания свойств компонента Select
 */
export const wikiDescriptionsSelect: StorybookComponentsDescriptionItem = {
  name: 'Select',
  description: {
    en: 'Complete select dropdown control combining Field, Menu, SelectValue and Input for sophisticated selection interface',
    ru: 'Полнофункциональный элемент выбора из выпадающего списка, объединяющий Field, Menu, SelectValue и Input для продвинутого интерфейса выбора'
  },
  possibilities: {
    en: [
      'single or multiple value selection',
      'built-in search and filtering capabilities',
      'editable selected value mode (editValue)',
      'AJAX data loading with caching support',
      'filter mode for real-time option filtering',
      'validation with standard Field features',
      'keyboard navigation and accessibility',
      'custom option list via slots or data',
      'icon support for dropdown arrow and search',
      'auto-close control for multiple selection',
      'integration with all Field component features (label, counter, messages, icons)'
    ],
    ru: [
      'выбор одиночного или множественных значений',
      'встроенный поиск и возможности фильтрации',
      'режим редактирования выбранного значения (editValue)',
      'AJAX загрузка данных с поддержкой кеширования',
      'режим фильтрации для реального времени',
      'валидация со стандартными функциями Field',
      'клавиатурная навигация и доступность',
      'пользовательский список опций через слоты или данные',
      'поддержка иконок для стрелки выпадающего списка и поиска',
      'управление автозакрытием для множественного выбора',
      'интеграция со всеми возможностями компонента Field (подпись, счётчик, сообщения, иконки)'
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
      id: 'SelectBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      setup: `
      const options = ref([
        {label: 'JavaScript', value: 'js'},
        {label: 'TypeScript', value: 'ts'},
        {label: 'Python', value: 'py'},
        {label: 'Java', value: 'java'},
        {label: 'C++', value: 'cpp'},
        {label: 'Ruby', value: 'rb'},
        {label: 'Go', value: 'go'},
        {label: 'PHP', value: 'php'}
      ])

      return { options }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="select"
            label="Standard select"
            placeholder="Select option"
            :option="options"
          />
          <DesignComponent
            type="select"
            label="With search"
            placeholder="Search..."
            showSearch
            :option="options"
          />
          <DesignComponent
            type="select"
            label="With filter"
            placeholder="Type to filter"
            showSearch
            filterMode
            :option="options"
          />
          <DesignComponent
            type="select"
            label="Edit value"
            placeholder="Select or type"
            editValue
            filterMode
            :option="options"
          />
          <DesignComponent
            type="select"
            label="With arrows"
            placeholder="Select option"
            arrow="carousel"
            :option="options"
          />
        </div>
      `
    },
    {
      id: 'SelectVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      setup: `
      return {
        singleValue: ref('option2'),
        multipleValue: ref(['option1', 'option3'])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model="singleValue"
            type="select"
            label="Single select"
            arrow="carousel"
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected: {{ singleValue }}</div>

          <DesignComponent
            v-model="multipleValue"
            type="select"
            label="Multiple select"
            multiple
            :option="[
              {label: 'First option', value: 'option1'},
              {label: 'Second option', value: 'option2'},
              {label: 'Third option', value: 'option3'}
            ]"
          />
          <div>Selected: {{ multipleValue }}</div>
        </div>
      `
    },
    {
      id: 'SelectSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              isSkeleton
              type="select"
              label="Loading select"
              helperMessage="Options are loading..."
              :option="[
                {label: 'First option', value: 'option1'},
                {label: 'Second option', value: 'option2'},
                {label: 'Third option', value: 'option3'}
              ]"
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Select'} type={'select'}/>
<Canvas of={Component.SelectBasic}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SelectVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SelectSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'validation'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `
  },
  ai: {
    description: `
The select is a comprehensive form component used for choosing one or multiple values from a collection of options.
It integrates a trigger field, a dropdown menu, and value display logic into a single cohesive control.

**Key Features:**
1. **Data Handling (\`option\`):**
   - **Static Data:** Accepts an array of objects or strings via the \`option\` prop.
   - **Mapping:** Use \`keyLabel\` and \`keyValue\` to specify which properties to use for display and value (defaults to 'label' and 'value').
   - **Async Data:** Use the \`ajax\` prop to provide a function that returns a Promise with the list of options. Supports caching via \`cache\`.

2. **Selection Modes:**
   - **Single Selection:** Default. Displays the selected item's label as text.
   - **Multiple Selection (\`multiple\`):** Allows selecting multiple items. Displays them as Chips. Use \`max\` to limit the number of selections.
   - **Editable (\`editValue\`):** Allows the user to type into the input field, acting like a Combobox.

3. **Search & Filtering:**
   - **Filter Mode (\`filterMode\`):** Filters the list options in real-time as the user types.
   - **Show Search (\`showSearch\`):** Adds a dedicated search input field inside the dropdown menu (useful for mobile or when \`editValue\` is false).

4. **Appearance & Feedback:**
   - **Field Integration:** Inherits all \`Field\` styling props (\`label\`, \`helperMessage\`, \`validationMessage\`, \`icon\`, \`loading\`).
   - **Placeholder:** Text shown when no value is selected.
   - **Cancel:** The \`cancel\` prop controls the visibility of the clear button ('auto', 'always', 'none').

**Usage Examples:**

- **Standard Select:**
  \`<Select label="Choose a fruit" :option="['Apple', 'Banana', 'Orange']" />\`

- **Multiple Select with Object Data:**
  \`<Select
      label="Assignees"
      multiple
      :option="users"
      key-label="name"
      key-value="id"
      v-model="selectedUserIds"
   />\`

- **Searchable Select:**
  \`<Select label="Country" :option="countries" filter-mode />\`
    `
  }
}
