const e = {
  name: "Badge",
  description: {
    en: "Small visual indicator for displaying status, count, or notifications on interface elements",
    ru: "Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса"
  },
  possibilities: {
    en: [
      "multiple color variants for different status types",
      "content customization with text or numbers",
      "positioning relative to parent elements",
      "maximum value display with overflow handling",
      "visibility control and animation support"
    ],
    ru: [
      "множественные цветовые варианты для разных типов статуса",
      "настройка содержимого с текстом или числами",
      "позиционирование относительно родительских элементов",
      "отображение максимального значения с обработкой переполнения",
      "управление видимостью и поддержка анимации"
    ]
  },
  import: [],
  render: `
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,
  stories: [
    {
      id: "BadgeBasic",
      name: {
        en: "Basic",
        ru: "Базовые"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static">Badge</DesignComponent>
          <DesignComponent overlap="static" icon="home">Badge</DesignComponent>
          <DesignComponent overlap="static">99</DesignComponent>
          <DesignComponent overlap="static" label="999" label-max="99"/>
        </div>
      `
    },
    {
      id: "BadgeDot",
      name: {
        en: "Dot",
        ru: "Точечные (dot)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent dot overlap="static"/>
        </div>
      `
    },
    {
      id: "BadgePrimary",
      name: {
        en: "Primary",
        ru: "Основные (primary)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary overlap="static" icon="home"/>
          <DesignComponent primary overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: "primary"
    },
    {
      id: "BadgeSecondary",
      name: {
        en: "Secondary",
        ru: "Второстепенные (secondary)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent secondary overlap="static" icon="home"/>
          <DesignComponent secondary overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: "secondary"
    },
    {
      id: "BadgeOutline",
      name: {
        en: "Outline",
        ru: "Контурные (outline)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent outline overlap="static" icon="home"/>
          <DesignComponent outline overlap="static">Badge</DesignComponent>
        </div>
      `,
      propsName: "outline"
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Badge'} type={'badge'}/>
<Canvas of={Component.BadgeBasic}/>

<StorybookDescriptions componentName={'Badge'} type={'dot'}/>
<Canvas of={Component.BadgeDot}/>

<template prop="primary">
<StorybookDescriptions componentName={'Badge'} type={'primary'}/>
<Canvas of={Component.BadgePrimary}/>
</template>

<template prop="secondary">
<StorybookDescriptions componentName={'Badge'} type={'secondary'}/>
<Canvas of={Component.BadgeSecondary}/>
</template>

<template prop="outline">
<StorybookDescriptions componentName={'Badge'} type={'outline'}/>
<Canvas of={Component.BadgeOutline}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'labelNumber'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}, o = {
  name: "Bars",
  description: {
    en: "A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.",
    ru: "Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки."
  },
  possibilities: {
    en: [
      "Displays a primary label and a secondary description.",
      "Includes an optional back button for navigation.",
      "Supports a primary set of interactive buttons.",
      'Features an "action mode" with a separate set of buttons, label, and description.',
      "Allows full customization of button appearance and behavior."
    ],
    ru: [
      "Отображает основной заголовок и дополнительное описание.",
      'Включает опциональную кнопку "назад" для навигации.',
      "Поддерживает основной набор интерактивных кнопок.",
      'Имеет "режим действия" с отдельным набором кнопок, заголовком и описанием.',
      "Позволяет полностью настраивать внешний вид и поведение кнопок."
    ]
  },
  import: [
    "import { ref } from 'vue'"
  ],
  stories: [
    {
      id: "BarsBasic",
      name: {
        en: "Basic",
        ru: "Базовые"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />

          <DesignComponent
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share' },
              { icon: 'edit' },
              { icon: 'delete' }
            ]"
          />
        </div>
      `
    },
    {
      id: "BarsVModel",
      name: {
        en: "Two-way binding (v-model)",
        ru: "Двусторонняя привязка (v-model)"
      },
      setup: `
      return {
        isAction: ref(false)
      }
      `,
      template: `
        <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
        <DesignComponent
          v-model:action="isAction"
          label="Page Title"
          description="A concise description for this example"
          :bars="[
            { icon: 'search' },
            { icon: 'refresh' },
            { icon: 'more_vert' }
          ]"
          action-label="2 selected"
          action-description="Choose an action to apply"
          :action-bars="[
            { icon: 'share' },
            { icon: 'edit' },
            { icon: 'delete' }
          ]"
          style="margin-top: 8px;"
        />
      `
    },
    {
      id: "BarsSkeleton",
      name: {
        en: "Skeleton loading",
        ru: "Загрузка скелетона"
      },
      components: ["Skeleton"],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search' },
              { icon: 'refresh' },
              { icon: 'more_vert' }
            ]"
          />
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Bars'} type={'bars'}/>
<StorybookDescriptions componentName={'Bars'} type={'action'}/>
<Canvas of={Component.BarsBasic}/>
<StorybookDescriptions componentName={'Bars'} type={'v-model'}/>
<Canvas of={Component.BarsVModel}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BarsSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Bars'} type={'slot.bars'}/>
<StorybookDescriptions componentName={'Bars'} type={'slot.actionBars'}/>
    `
  }
}, i = {
  name: "Button",
  description: {
    en: "Interactive button component for user actions",
    ru: "Интерактивный компонент кнопки для действий пользователя"
  },
  possibilities: {
    en: [
      "multiple visual variants for different use cases",
      "different sizes from extra small to extra large",
      "built-in accessibility support",
      "focus, hover, and active states",
      "disabled and loading states support",
      "customizable styling through design tokens"
    ],
    ru: [
      "множественные визуальные варианты для разных случаев использования",
      "различные размеры от очень маленького до очень большого",
      "встроенная поддержка доступности",
      "состояния focus, hover и active",
      "поддержка отключенного состояния и состояния загрузки",
      "настраиваемая стилизация через токены дизайна"
    ]
  },
  import: [],
  stories: [
    {
      id: "ButtonBasic",
      name: {
        en: "Basic",
        ru: "Базовые"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent>Button</DesignComponent>
          <DesignComponent icon="home">Button</DesignComponent>
          <DesignComponent icon-trailing="arrow_forward">Button</DesignComponent>
        </div>
      `
    },
    {
      id: "ButtonPrimary",
      name: {
        en: "Primary",
        ru: "Основные (primary)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent primary>Button</DesignComponent>
          <DesignComponent primary icon="home">Button</DesignComponent>
          <DesignComponent primary selected>Button</DesignComponent>
          <DesignComponent primary disabled>Button</DesignComponent>
        </div>
      `,
      propsName: "primary"
    },
    {
      id: "ButtonSecondary",
      name: {
        en: "Secondary",
        ru: "Второстепенные (secondary)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent secondary>Button</DesignComponent>
          <DesignComponent secondary icon="home">Button</DesignComponent>
          <DesignComponent secondary selected>Button</DesignComponent>
          <DesignComponent secondary disabled>Button</DesignComponent>
        </div>
      `,
      propsName: "secondary"
    },
    {
      id: "ButtonOutline",
      name: {
        en: "Outline",
        ru: "Контурные (outline)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent outline>Button</DesignComponent>
          <DesignComponent outline icon="home">Button</DesignComponent>
          <DesignComponent outline selected>Button</DesignComponent>
          <DesignComponent outline disabled>Button</DesignComponent>
        </div>
      `,
      propsName: "outline"
    },
    {
      id: "ButtonText",
      name: {
        en: "Text",
        ru: "Текстовые (text)"
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent text>Button</DesignComponent>
          <DesignComponent text icon="home">Button</DesignComponent>
          <DesignComponent text selected>Button</DesignComponent>
          <DesignComponent text disabled>Button</DesignComponent>
        </div>
      `,
      propsName: "text"
    },
    {
      id: "ButtonAdaptive",
      name: {
        en: "Adaptive",
        ru: "Адаптивные"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent adaptive="fullSm" icon="home" label="Button"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent container="fullSm" icon="home" label="Button"/>
          </div>
        </div>
      `
    },
    {
      id: "ButtonSkeleton",
      name: {
        en: "Skeleton",
        ru: "Скелетон"
      },
      components: ["Skeleton"],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Button</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Button'} type={'button'}/>
<Canvas of={Component.ButtonBasic}/>

<template prop="primary">
<StorybookDescriptions componentName={'Button'} type={'primary'}/>
<Canvas of={Component.ButtonPrimary}/>
</template>

<template prop="secondary">
<StorybookDescriptions componentName={'Button'} type={'secondary'}/>
<Canvas of={Component.ButtonSecondary}/>
</template>

<template prop="outline">
<StorybookDescriptions componentName={'Button'} type={'outline'}/>
<Canvas of={Component.ButtonOutline}/>
</template>

<template prop="text">
<StorybookDescriptions componentName={'Button'} type={'text'}/>
<Canvas of={Component.ButtonText}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ButtonAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ButtonSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}, t = {
  name: "Cell",
  description: {
    en: "Versatile container component for displaying structured content with labels, descriptions, and actions",
    ru: "Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями"
  },
  possibilities: {
    en: [
      "flexible content structure with label, description, and caption",
      "interactive states including focus, selected, and disabled",
      "built-in icon and trailing icon support",
      "progress indicator integration",
      "divider customization options",
      "dynamic behavior with hover interactions",
      "skeleton loading state support",
      "click event handling with custom data"
    ],
    ru: [
      "гибкая структура контента с меткой, описанием и подписью",
      "интерактивные состояния включая focus, selected и disabled",
      "встроенная поддержка иконок и завершающих иконок",
      "интеграция индикатора прогресса",
      "возможности настройки разделителей",
      "динамическое поведение с взаимодействием при наведении",
      "поддержка состояния загрузки скелетона",
      "обработка событий клика с пользовательскими данными"
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,
  import: [],
  stories: [
    {
      id: "CellSkeleton",
      name: {
        en: "Skeleton loading",
        ru: "Загрузка скелетона"
      },
      components: ["Skeleton"],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
            label="A"
          />
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the cell component."
            label="Label Example"
          />
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the cell."
            label="Very Long Label Example for Skeleton"
          />
        </DesignSkeleton>
      `
    },
    {
      id: "CellSlots",
      name: {
        en: "Slots usage",
        ru: "Использование слотов"
      },
      template: `
        <DesignComponent icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Cell'} type={'cell'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CellSkeleton}/>
`,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<Canvas of={Component.CellSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slot.trailing'}/>
<StorybookDescriptions componentName={'Cell'} type={'slot.body'}/>
`
  }
}, n = {
  name: "Chip",
  description: {
    en: "Compact element that represents an input, attribute, or action",
    ru: "Компактный элемент, представляющий ввод, атрибут или действие"
  },
  possibilities: {
    en: [
      "multiple visual variants for different contexts",
      "selectable state for user interaction",
      "disabled state support",
      "customizable styling through design tokens",
      "icon support for enhanced visual representation",
      "adaptive behavior for different screen sizes"
    ],
    ru: [
      "множественные визуальные варианты для разных контекстов",
      "выбираемое состояние для взаимодействия пользователя",
      "поддержка отключенного состояния",
      "настраиваемая стилизация через токены дизайна",
      "поддержка иконок для улучшенного визуального представления",
      "адаптивное поведение для разных размеров экрана"
    ]
  },
  import: [],
  stories: [
    {
      id: "ChipBasic",
      name: {
        en: "Basic",
        ru: "Базовые"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent icon="star">Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent selected>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Disabled</div>
            <DesignComponent disabled>Chip</DesignComponent>
          </div>
        </div>
      `
    },
    {
      id: "ChipInput",
      name: {
        en: "Input",
        ru: "Ввод (input)"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Input</div>
            <DesignComponent input>Tag</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent input icon="person">Contact</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent input selected icon="tag">Keyword</DesignComponent>
          </div>
        </div>
      `,
      propsName: "input"
    },
    {
      id: "ChipAssistive",
      name: {
        en: "Assistive",
        ru: "Вспомогательные (assistive)"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Assistive</div>
            <DesignComponent assistive>Chip</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">With icon</div>
            <DesignComponent assistive icon="lightbulb">Suggestion</DesignComponent>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Selected</div>
            <DesignComponent assistive selected icon="check">Recommended</DesignComponent>
          </div>
        </div>
      `,
      propsName: "assistive"
    },
    {
      id: "ChipAdaptive",
      name: {
        en: "Adaptive",
        ru: "Адаптивные"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Adaptive</div>
            <DesignComponent adaptive="fullSm" icon="star" label="Chip"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center wiki-storybook-container">
            <div class="wiki-storybook-item__label">Container</div>
            <DesignComponent container="fullSm" icon="star" label="Chip"/>
          </div>
        </div>
      `,
      propsName: "adaptive"
    },
    {
      id: "ChipSkeleton",
      name: {
        en: "Skeleton",
        ru: "Скелетон"
      },
      components: ["Skeleton"],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignSkeleton>
              <DesignComponent>Chip</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignSkeleton :active="true">
              <DesignComponent isSkeleton>Chip</DesignComponent>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <DesignSkeleton :active="true">
              <DesignComponent>Chip</DesignComponent>
            </DesignSkeleton>
          </div>
        </div>
      `,
      propsName: "isSkeleton"
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Chip'} type={'chip'}/>
<Canvas of={Component.ChipBasic}/>

<template prop="input">
<StorybookDescriptions componentName={'Chip'} type={'input'}/>
<Canvas of={Component.ChipInput}/>
</template>

<template prop="assistive">
<StorybookDescriptions componentName={'Chip'} type={'assistive'}/>
<Canvas of={Component.ChipAssistive}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

\`\`\`html
<DesignComponent
  value="filter-tag"
  :detail="{ category: 'filters', type: 'status' }"
  @click="handleChipClick"
/>

<DesignComponent
  :value="chipValue"
  :detail="{ chipId: chip.id, timestamp: Date.now() }"
  @click="handleSelection"
/>
\`\`\`

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ChipAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ChipSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}, s = {
  name: "Field",
  description: {
    en: "Base container for form controls that composes label, messages, counter, icons and progress",
    ru: "Базовый контейнер для полей ввода, который собирает метку, сообщения, счётчик, иконки и прогресс"
  },
  possibilities: {
    en: [
      "composes FieldLabel, FieldMessage, FieldCounter, Progress and icon includes",
      "handles states: focus, disabled, readonly, selected, block",
      "supports prefix, suffix and caption slots",
      "validation highlighting based on validationMessage and forceShowMessage",
      "optional cancel and navigation (arrow) icons with visibility flags",
      "counter position control with counterTop",
      "integrated helpers for sizing and icons (FieldSize, FieldIcons)"
    ],
    ru: [
      "композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок",
      "обрабатывает состояния: focus, disabled, readonly, selected, block",
      "поддерживает слоты prefix, suffix и caption",
      "подсветка валидации на основе validationMessage и forceShowMessage",
      "дополнительные иконки отмены и навигации (стрелки) с флагами видимости",
      "управление позицией счётчика через counterTop",
      "встроенные помощники для размеров и иконок (FieldSize, FieldIcons)"
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: "FieldCancel",
      name: {
        en: "Cancel button",
        ru: "Кнопка очистки"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: "FieldNavigation",
      name: {
        en: "Navigation & arrows",
        ru: "Навигация / стрелки"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: "FieldSkeleton",
      name: {
        en: "Skeleton",
        ru: "Скелетон"
      },
      components: ["Skeleton"],
      template: `
        <DesignSkeleton :active="true" style="max-width:280px">
          <DesignComponent isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </DesignComponent>
        </DesignSkeleton>
      `
    },
    {
      id: "FieldValue",
      name: {
        en: "Value state",
        ru: "Состояние значения"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: "FieldWidth",
      name: {
        en: "Width",
        ru: "Ширина"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: "FieldSlots",
      name: {
        en: "Slots usage",
        ru: "Использование слотов"
      },
      template: `
        <DesignComponent
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Field'} type={'field'}/>

<StorybookDescriptions componentName={'Field'} type={'value'}/>
<Canvas of={Component.FieldValue}/>

<StorybookDescriptions componentName={'Field'} type={'width'}/>
<Canvas of={Component.FieldWidth}/>

<StorybookDescriptions componentName={'Field'} type={'cancel'}/>
<Canvas of={Component.FieldCancel}/>

<StorybookDescriptions componentName={'Field'} type={'arrows'}/>
<Canvas of={Component.FieldNavigation}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.FieldSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    slots: `
<Canvas of={Component.FieldSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'} />
<StorybookDescriptions componentName={'Field'} type={'slot.leading'} />
<StorybookDescriptions componentName={'Field'} type={'slot.trailing'} />
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
    `
  }
}, a = {
  name: "FieldCounter",
  description: {
    en: "Component for displaying character count and input length limits in form fields",
    ru: "Компонент для отображения счетчика символов и ограничений длины ввода в полях форм"
  },
  possibilities: {
    en: [
      "displays current character count",
      "shows maximum character limit when specified",
      "customizable display template with placeholders",
      "automatic visibility based on counter and maxlength props",
      "supports both string and number values",
      'compact display format (e.g., "50 / 100")',
      "template-based formatting with [c] and [m] placeholders"
    ],
    ru: [
      "отображает текущее количество символов",
      "показывает максимальное ограничение символов при указании",
      "настраиваемый шаблон отображения с заполнителями",
      "автоматическая видимость на основе свойств counter и maxlength",
      "поддерживает значения как строк, так и чисел",
      'компактный формат отображения (например, "50 / 100")',
      "форматирование на основе шаблона с заполнителями [c] и [m]"
    ]
  },
  import: [],
  stories: [
    {
      id: "FieldCounterTemplate",
      name: {
        en: "Custom Template",
        ru: "Пользовательский шаблон"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">Default template</div>
            <DesignComponent :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">Custom template: "Characters: [c] of [m]"</div>
            <DesignComponent :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--center wiki-storybook-item--squared--md wiki-storybook-item--compact">
            <div class="wiki-storybook-item__label">Counter only with template: "[c] chars"</div>
            <DesignComponent :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>
<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>
<Canvas of={Component.FieldCounterTemplate}/>
    `
  }
}, r = {
  name: "FieldLabel",
  description: {
    en: "Component for displaying a field label and required marker; can be used together with counter and progress",
    ru: "Компонент для отображения метки поля и индикатора обязательности; может использоваться вместе со счетчиком и прогрессом"
  },
  possibilities: {
    en: [
      "renders a text label for form fields",
      "shows required marker when the field is mandatory",
      "works together with FieldCounter and Progress when passed as props",
      "keeps consistent spacing and classes within form controls"
    ],
    ru: [
      "рендерит текстовую метку для полей формы",
      "показывает индикатор обязательности для обязательных полей",
      "работает совместно со счетчиком FieldCounter и прогрессом при передаче соответствующих свойств",
      "сохраняет согласованные отступы и классы внутри элементов формы"
    ]
  },
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `
  }
}, l = {
  name: "FieldMessage",
  description: {
    en: "Component for displaying helper and validation messages for form fields",
    ru: "Компонент для отображения вспомогательных и валидационных сообщений для полей форм"
  },
  possibilities: {
    en: [
      "shows helper text under the field",
      "displays validation message when error occurs",
      "visibility control via a dedicated force flag",
      "works together with input fields and counters",
      "supports HTML-safe rendering by design system"
    ],
    ru: [
      "показывает вспомогательный текст под полем",
      "отображает сообщение валидации при ошибке",
      "управление видимостью через специальный флаг",
      "работает совместно с полями ввода и счетчиками",
      "поддерживает безопасный рендеринг HTML силами дизайн-системы"
    ]
  },
  import: [],
  stories: [
    {
      id: "FieldMessageSlots",
      name: {
        en: "Slots",
        ru: "Слоты"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <template #helper>
              <span><b>Helper:</b> You can use Latin letters</span>
            </template>
          </DesignComponent>
          <DesignComponent>
            <template #validation>
              <span><b>Validation:</b> Please fill out this field</span>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'FieldMessage'} type={'fieldMessage'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'FieldMessage'} type={'slot.helper'}/>
<StorybookDescriptions componentName={'FieldMessage'} type={'slot.validation'}/>
<Canvas of={Component.FieldMessageSlots}/>
    `
  }
}, p = {
  name: "Icon",
  description: {
    en: "Component for displaying icons",
    ru: "Компонент для отображения иконок"
  },
  possibilities: {
    en: [
      "displaying icons by name",
      "switching icons on active state",
      "animation support"
    ],
    ru: [
      "отображение иконок по имени",
      "переключение иконок в активном состоянии",
      "поддержка анимации"
    ]
  },
  import: [],
  stories: [
    {
      id: "IconState",
      name: {
        en: "Icon state",
        ru: "Состояние иконки"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent icon="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignComponent icon="heart_minus" iconActive="favorite" :active="true"/>
          </div>
        </div>
      `
    },
    {
      id: "IconDirection",
      name: {
        en: "Direction",
        ru: "Направление компонента"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">LTR</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center wiki-storybook-item--rtl">
            <div class="wiki-storybook-item__label">RTL</div>
            <DesignComponent dir icon="arrow_forward"/>
          </div>
        </div>
      `
    },
    {
      id: "IconPalette",
      name: {
        en: "Palette",
        ru: "Палитра"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignComponent icon="home" size="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Palette</div>
            <DesignComponent icon="home" size="lg" asPalette/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Inverse</div>
            <DesignComponent icon="home" size="lg" asPalette inverse/>
          </div>
        </div>
      `
    },
    {
      id: "IconSkeleton",
      name: {
        en: "Skeleton",
        ru: "Скелетон"
      },
      components: ["Skeleton"],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <DesignSkeleton>
              <DesignComponent icon="home"/>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Active</div>
            <DesignSkeleton :active="true">
              <DesignComponent isSkeleton icon="home" rounded="md"/>
            </DesignSkeleton>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Hidden</div>
            <DesignSkeleton :active="true">
              <DesignComponent icon="home"/>
            </DesignSkeleton>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.IconState}/>

<StorybookDescriptions componentName={'Style'} type={'dir'}/>
<Canvas of={Component.IconDirection}/>

<StorybookDescriptions componentName={'Style'} type={'asPalette'}/>
<Canvas of={Component.IconPalette}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.IconSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Icon'} type={'expose.isActive'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}, m = {
  name: "Image",
  description: {
    en: "Image component for displaying images",
    ru: "Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон"
  },
  possibilities: {
    en: [
      "support for various source types: string, `File`, image or PDF address",
      "adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`",
      "cropping and positioning via `coordinator`, `x`, `y`",
      "rotation or hiding the component with properties `turn`, `hide`, `disabled`",
      "mode selection for filling (`size`: `auto`, `contain`, `cover`)"
    ],
    ru: [
      "поддержка различных типов исходников: строка, `File`, адрес картинки или PDF",
      "адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`",
      "обрезка и позиционирование через `coordinator`, `x`, `y`",
      "поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`",
      "выбор режима заполнения (`size`: `auto`, `contain`, `cover`)"
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    "import { demoPdf, image1, phone1, phone2, phone3 } from '@dxtmisha/wiki/media'"
  ],
  stories: [
    {
      id: "ImageType",
      name: {
        en: "Value type",
        ru: "Тип значения"
      },
      setup: `
      return {
        image1,
        demoPdf
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <DesignComponent value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <DesignComponent :value="demoPdf"/>
          </div>
        </div>
      `
    },
    {
      id: "ImageSize",
      name: {
        en: "Display control",
        ru: "Отображение"
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <DesignComponent :value="image1" size="auto"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <DesignComponent :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <DesignComponent :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <DesignComponent :value="image1" :coordinator="[60, 10, 10, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <DesignComponent :value="image1" x="20" y="-10"/>
          </div>
        </div>
      `
    },
    {
      id: "ImageAdaptive",
      name: {
        en: "Adapted images",
        ru: "Адаптированные изображения"
      },
      setup: `
      return {
        phone1,
        phone2,
        phone3
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9"/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Image'} type={'expose.type'}/>
<StorybookDescriptions componentName={'Image'} type={'expose.data'}/>
    `
  }
}, c = {
  name: "List",
  description: {
    en: "Advanced list component with keyboard navigation, search functionality, and hierarchical data support",
    ru: "Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных"
  },
  possibilities: {
    en: [
      "keyboard navigation with arrow keys and shortcuts",
      "real-time search and highlight functionality",
      "hierarchical data structure with groups and menus",
      "focus management and item selection",
      "lightweight rendering mode for large datasets",
      "customizable item types and rendering",
      "event-driven interaction system",
      "accessibility support with ARIA attributes",
      "automatic scroll management and viewport optimization",
      "integration with icons, badges, and other components"
    ],
    ru: [
      "навигация с клавиатуры со стрелками и горячими клавишами",
      "поиск в реальном времени и функциональность выделения",
      "иерархическая структура данных с группами и меню",
      "управление фокусом и выбором элементов",
      "облегченный режим рендеринга для больших наборов данных",
      "настраиваемые типы элементов и рендеринг",
      "событийно-ориентированная система взаимодействия",
      "поддержка доступности с ARIA атрибутами",
      "автоматическое управление прокруткой и оптимизация области просмотра",
      "интеграция с иконками, бейджами и другими компонентами"
    ]
  },
  stories: [
    {
      id: "ListHighlight",
      name: {
        en: "Highlighting",
        ru: "Выделение"
      },
      template: `
        <DesignComponent
          :list="[
            {label: 'Project index example', value: 'projects', icon: 'folder'},
            {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
            {label: 'Next examination notes', value: 'example', icon: 'description'},
            {label: 'User experience metrics', value: 'express', icon: 'insights'}
          ]"
          highlight="exam"
          :highlightLengthStart="4"
        />
      `
    },
    {
      id: "ListLiteMode",
      name: {
        en: "Lite mode",
        ru: "Облегчённый режим"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Without lite</div>
            <DesignComponent
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">With lite</div>
            <DesignComponent
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'List'} type={'list'}/>

<StorybookDescriptions componentName={'List'} type={'lite'}/>
<Canvas of={Component.ListLiteMode}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListHighlight}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'isSelected'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedList'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedNames'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedValues'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `
  }
}, d = {
  name: "ListGroup",
  description: {
    en: "Auxiliary component for the List component to group and organize list items with collapsible structure",
    ru: "Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой"
  },
  possibilities: {
    en: [
      "grouping helper for List component items",
      "collapsible/expandable group functionality",
      "customizable group header with icon support",
      "automatic arrow icon rotation based on state",
      "nested group support for complex hierarchies",
      "seamless integration with List ecosystem",
      "keyboard navigation and accessibility",
      "smooth animation transitions",
      "flexible content management through slots"
    ],
    ru: [
      "помощник группировки для элементов компонента List",
      "функциональность сворачиваемой/разворачиваемой группы",
      "настраиваемый заголовок группы с поддержкой иконок",
      "автоматический поворот стрелки в зависимости от состояния",
      "поддержка вложенных групп для сложных иерархий",
      "бесшовная интеграция с экосистемой List",
      "навигация с клавиатуры и доступность",
      "плавные анимационные переходы",
      "гибкое управление контентом через слоты"
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template v-slot:head="{open}">
        Primary group header with expand/collapse toggle
      </template>
      <template v-slot:list>
        Main content area for grouped list items
      </template>
    </DesignComponent>

    <DesignComponent v-bind="args">
      <template v-slot:head="{open}">
        Secondary group header with custom styling
      </template>
      <template v-slot:list>
        Alternative layout for nested components
      </template>
    </DesignComponent>

    <DesignComponent v-bind="args">
      <template v-slot:head="{open}">
        Tertiary group header with advanced options
      </template>
      <template v-slot:list>
        Extended content area with additional features
      </template>
    </DesignComponent>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListGroup'} type={'listGroup'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListGroup'} type={'slot.head'}/>
<StorybookDescriptions componentName={'ListGroup'} type={'slot.list'}/>
    `
  }
}, k = {
  name: "ListItem",
  description: {
    en: "Versatile list item component for displaying structured content",
    ru: "Универсальный компонент элемента списка для отображения структурированного контента"
  },
  possibilities: {
    en: [
      "multiple content areas: label, description, prefix, suffix, caption",
      "icon support with flexible positioning and alignment",
      "badge integration for status indicators",
      "interactive states: focus, selected, disabled, readonly",
      "progress and skeleton loading states",
      "ripple effect for enhanced user feedback",
      "flexible tag options: button, link, div, span",
      "built-in accessibility support",
      "customizable through design tokens"
    ],
    ru: [
      "множественные области контента: метка, описание, префикс, суффикс, заголовок",
      "поддержка иконок с гибким позиционированием и выравниванием",
      "интеграция значков для индикаторов статуса",
      "интерактивные состояния: фокус, выбранный, отключенный, только для чтения",
      "состояния загрузки с прогрессом и скелетоном",
      "эффект пульсации для улучшенной обратной связи",
      "гибкие варианты тегов: кнопка, ссылка, div, span",
      "встроенная поддержка доступности",
      "настраиваемый через токены дизайна"
    ]
  },
  render: `
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,
  import: [],
  stories: [
    {
      id: "ListItemBasic",
      name: {
        en: "Basic",
        ru: "Базовые"
      },
      template: `
        <DesignComponent>Simple Item</DesignComponent>
        <DesignComponent icon="person">Item with Icon</DesignComponent>
        <DesignComponent description="Additional information">Item with Description</DesignComponent>
        <DesignComponent focus>Focus</DesignComponent>
        <DesignComponent selected>Selected</DesignComponent>
        <DesignComponent disabled>Disabled</DesignComponent>
        <DesignComponent readonly>Readonly</DesignComponent>
        <DesignComponent prefix="01" suffix="Info">With Prefix & Suffix</DesignComponent>
        <DesignComponent caption="Caption" description="Description text here">Full Content</DesignComponent>
        <DesignComponent icon="star" badge="new">Icon with Badge</DesignComponent>
      `
    },
    {
      id: "ListItemHighlight",
      name: {
        en: "Highlighting",
        ru: "Выделение"
      },
      template: `
        <DesignComponent highlight="search" label="Search result item"/>
        <DesignComponent highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
        <DesignComponent highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
        <DesignComponent highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
      `
    },
    {
      id: "ListItemFill",
      name: {
        en: "Fill",
        ru: "Заливка"
      },
      template: `
        <DesignComponent label="Default fill"/>
        <DesignComponent fill="#ff0000" label="Red fill"/>
        <DesignComponent fill="rgb(0, 128, 255)" label="Blue fill"/>
        <DesignComponent fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
      `
    },
    {
      id: "ListItemSkeleton",
      name: {
        en: "Skeleton loading",
        ru: "Загрузка скелетона"
      },
      components: ["Skeleton"],
      template: `
        <DesignSkeleton :active="true">
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="Short desc."
          >Item A</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="A bit longer description for the list item component."
          >Item Label Example</DesignComponent>
          <DesignComponent
            :isSkeleton="true"
            caption="Caption"
            description="This is a much longer description to demonstrate how the skeleton adapts to different content lengths in the list item."
          >Very Long Item Label Example for Skeleton</DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListItem'} type={'basic'}/>
<Canvas of={Component.ListItemBasic}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListItemHighlight}/>

<StorybookDescriptions componentName={'ListItem'} type={'fill'}/>
<Canvas of={Component.ListItemFill}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ListItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slot.trailing'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slot.body'}/>
    `
  }
}, b = {
  name: "ListMenu",
  description: {
    en: "Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure",
    ru: "Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой"
  },
  possibilities: {
    en: [
      "menu helper for List component navigation",
      "expandable/collapsible submenu functionality",
      "customizable menu header with icon support",
      "automatic arrow icon rotation based on state",
      "nested menu support for complex hierarchies",
      "seamless integration with List ecosystem",
      "keyboard navigation and accessibility",
      "smooth animation transitions",
      "flexible menu content management through slots"
    ],
    ru: [
      "помощник меню для навигации компонента List",
      "функциональность раскрывающихся/сворачивающихся подменю",
      "настраиваемый заголовок меню с поддержкой иконок",
      "автоматический поворот стрелки в зависимости от состояния",
      "поддержка вложенных меню для сложных иерархий",
      "бесшовная интеграция с экосистемой List",
      "навигация с клавиатуры и поддержка доступности",
      "плавные анимационные переходы",
      "гибкое управление содержимым меню через слоты"
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template v-slot:head="{binds}">
        <span v-bind="binds">Primary menu header with expand/collapse toggle</span>
      </template>
      <template v-slot:list>
        <div class="wiki-storybook-item--padding">
          <h4>Menu Content</h4>
          <p>Navigation elements providing access to application sections.</p>

          <ul>
            <li><strong>Dashboard</strong> - Main control panel</li>
            <li><strong>Content</strong> - Content management</li>
            <li><strong>Analytics</strong> - Data analysis tools</li>
          </ul>

          <p>Supports nested submenus and adapts to user permissions.</p>
        </div>
      </template>
    </DesignComponent>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'ListMenu'} type={'listMenu'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>

<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose.control'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.id'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'ListGroup'} type={'slot.head'}/>
<StorybookDescriptions componentName={'ListGroup'} type={'slot.list'}/>
    `
  }
}, y = {
  name: "Mask",
  description: {
    en: "Input masking utility for text, numbers, currency and dates with flexible patterns and validation.",
    ru: "Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией."
  },
  possibilities: {
    en: [
      "string or multi-pattern masks (auto selection)",
      "special symbols define input groups and literals are auto-inserted",
      "per-group and global validation patterns",
      "number / currency formats with grouping and fraction control",
      "date/time helpers and locale-aware behavior"
    ],
    ru: [
      "одиночные и множественные маски (автовыбор по вводу)",
      "спецсимволы задают группы ввода, литералы подставляются автоматически",
      "валидация по группам и глобально",
      "форматы числа/валюты с группировкой и дробной частью",
      "помощники для даты/времени и поведение с учётом локали"
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
      id: "MaskBasic",
      name: {
        en: "Mask Examples",
        ru: "Примеры масок"
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
      id: "MaskSpecial",
      name: {
        en: "Special Characters",
        ru: "Специальные символы"
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
      id: "MaskValidation",
      name: {
        en: "Validation",
        ru: "Валидация"
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
      id: "MaskGroupSave",
      name: {
        en: "Group navigation (groupSave)",
        ru: "Навигация по группам (groupSave)"
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
      id: "MaskMatch",
      name: {
        en: "Allowed characters (match)",
        ru: "Допустимые символы (match)"
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
      id: "MaskNumberTypes",
      name: {
        en: "Numeric types",
        ru: "Числовые типы"
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
      id: "MaskDateTypes",
      name: {
        en: "Date and time types",
        ru: "Типы дат и времени"
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
    `
  }
}, u = {
  name: "Menu",
  description: {
    en: "Composite menu that combines Window, Bars, and List for nested interactive navigation",
    ru: "Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации"
  },
  possibilities: {
    en: [
      "popup container from Window with control/title/footer slots",
      "toolbar actions via Bars and hierarchical items via List",
      "nested groups and menus with keyboard focus and selection",
      "lightweight rendering for large menus (lite + liteThreshold)",
      "custom fields mapping with keyLabel and keyValue",
      "custom item attributes and container attributes (itemAttrs, listAttrs)"
    ],
    ru: [
      "всплывающий контейнер из Window со слотами control/title/footer",
      "действия панели через Bars и иерархия пунктов через List",
      "вложенные группы и меню с фокусом с клавиатуры и выбором",
      "облегчённый рендер для больших меню (lite + liteThreshold)",
      "кастомное сопоставление полей через keyLabel и keyValue",
      "настройка атрибутов пунктов и списка (itemAttrs, listAttrs)"
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </DesignComponent>
  `,
  stories: [
    {
      id: "MenuAjax",
      name: {
        en: "AJAX Loading",
        ru: "AJAX Загрузка"
      },
      setup: `
        const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([
          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
          {label: 'Users', value: 'users', icon: 'people'},
          {label: 'Settings', value: 'settings', icon: 'settings'},
          {label: 'Reports', value: 'reports', icon: 'assessment'}
        ]), 512))

        return { loadMenuData }
      `,
      template: `
        <DesignComponent :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Menu'} type={'menu'}/>

<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>
<Canvas of={Component.MenuAjax}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>

<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'barsLite'}/>
<StorybookDescriptions componentName={'Event'} type={'barsBack'}/>
<StorybookDescriptions componentName={'Event'} type={'window'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'isSelected'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedList'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedNames'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedValues'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Menu'} type={'slot.control'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.title'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.footer'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.contextTop'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.contextBottom'}/>
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `
  }
}, v = {
  name: "MotionTransform",
  description: {
    en: "Low-level motion system that manages element transforms, state transitions, and interaction events for contextual UI like windows and menus",
    ru: "Низкоуровневая система анимаций, управляющая трансформациями элементов, переходами состояний и событиями взаимодействия для контекстных интерфейсов (окна, меню)"
  },
  possibilities: {
    en: [
      "centralized state for open/show/teleport with computed accessors",
      "size measurement and CSS variable updates for smooth animations",
      "teleport control for window-like behavior and off-DOM rendering",
      "click/close/auto-close handling with ignore areas",
      "programmatic API for open/close/toggle and state transitions",
      "designed to be embedded into higher-level components (Window, Dropdown, etc.)"
    ],
    ru: [
      "централизованное состояние open/show/teleport с вычисляемыми аксессорами",
      "измерение размеров и обновление CSS‑переменных для плавных анимаций",
      "управление телепортацией для «оконного» поведения и рендера вне DOM",
      "обработка кликов/закрытия/автозакрытия с зонами игнорирования",
      "программный API для open/close/toggle и переходов состояний",
      "предназначена для встраивания в компоненты верхнего уровня (Window, Dropdown и т. п.)"
    ]
  },
  render: `
      <DesignComponent class="wiki-storybook-decreased" v-bind="args">
        <template #head>
          <div class="wiki-storybook-item--padding">
            <h3>MotionTransform Demo</h3>
            <p>Interactive demonstration of the MotionTransform system - a foundational utility for window-like behaviors and contextual UI interactions.</p>
          </div>
        </template>

        <template #body="{classes}">
          <div class="wiki-storybook-item--padding">
            <h4>Motion Transform System</h4>
            <p>MotionTransform provides the foundational motion and state management system that powers interactive UI components like windows, dropdowns, and contextual menus. It handles element transforms, animation states, and user interaction events with smooth animations.</p>

            <h4>Core Components</h4>
            <p>The motion system consists of specialized managers: State handles open/show/teleport flags, Element provides DOM helpers, Size manages CSS variables for animations, Event coordinates click handling, and Go offers programmatic control methods.</p>

            <h4>Developer Integration</h4>
            <p>MotionTransform is designed as a low-level utility for component developers. It provides APIs for managing UI behaviors while handling DOM manipulation and animation orchestration behind the scenes.</p>
            <div class="wiki-storybook-flex">
              <button :class="classes.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </div>
        </template>
      </DesignComponent>
    `,
  import: [
    "import { ref } from 'vue'"
  ],
  stories: [
    {
      id: "MotionTransformVModel",
      name: {
        en: "Two-way binding (v-model)",
        ru: "Двусторонняя привязка (v-model)"
      },
      setup: `
      return {
        open: ref(false)
      }
      `,
      template: `
        <div class="wiki-storybook-item--padding">
          <button class="wiki-storybook-button" @click="open = !open">Toggle ({{ open }})</button>
        </div>
        <DesignComponent v-model:open="open">
          <template #head>
            <div class="wiki-storybook-item--padding">
              <h4>v-model controlled</h4>
              <p>This component's visibility is controlled by an external ref via v-model:open.</p>
            </div>
          </template>
          <template #body>
            <div class="wiki-storybook-item--padding">
              <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
              <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the component's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
              <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the MotionTransform component, such as in complex forms or coordinated UI interactions.</p>
            </div>
          </template>
        </DesignComponent>
      `
    },
    {
      id: "MotionTransformIgnore",
      name: {
        en: "Ignore zones",
        ru: "Зоны игнорирования"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent ignoreSelector=".mt-ignore">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>Ignore zones behavior</h4>
                <p>This text acts as the trigger that opens the content area</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <p>Clicks on elements matching <code>.mt-ignore</code> are not treated as outside and won’t trigger auto close.</p>
                <p>This is useful for trigger buttons, helper controls, and nested interactive areas that must remain active without closing the window.</p>
                <p>Try it: click any button with <code>.mt-ignore</code> outside or inside — the window stays open; clicks on other outside areas will close it.</p>
                <p>Use <code>ignore</code> when you have a concrete DOM element, and <code>ignoreSelector</code> when zones are multiple or dynamic.</p>
                <p>Keep selectors specific to avoid accidental matches and unintended auto‑close blocking.</p>
                <ul>
                  <li>Pattern: a trigger with class <code>.mt-ignore</code> outside and inside the window</li>
                  <li>Expectation: clicks on the trigger are ignored by outside‑check logic, the window doesn’t close</li>
                </ul>
              </div>
            </template>
          </DesignComponent>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding mt-ignore">
            <h5>External ignore zone</h5>
            <p>This area has class <code>.mt-ignore</code> and demonstrates how clicks here won't close the window below.</p>
            <button class="wiki-storybook-button">Ignored button</button>
          </div>
        </div>
      `
    },
    {
      id: "MotionTransformAnimationHeadPosition",
      name: {
        en: "Head position animation",
        ru: "Анимация позиции заголовка"
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent animationHeadPosition="top">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>animationHeadPosition: top</h4>
                <p>Click to open — Head stays at the top during transition</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <h5>Top Position Animation</h5>
                <p>With <code>animationHeadPosition="top"</code>, the head element maintains its position at the top of the container throughout the entire show/hide animation sequence.</p>
                <p>This behavior is ideal for interfaces where the header serves as a stable reference point, such as dropdown menus, navigation panels, or content that expands downward from a fixed trigger.</p>
                <p>The animation creates a smooth vertical expansion effect while keeping the header visually anchored, providing users with a clear understanding of the content's origin point.</p>
                <ul>
                  <li>Header remains stationary during animation</li>
                  <li>Content expands/collapses below the header</li>
                  <li>Provides stable visual reference point</li>
                  <li>Best for downward-expanding interfaces</li>
                </ul>
              </div>
            </template>
          </DesignComponent>

          <DesignComponent animationHeadPosition="toBottom">
            <template #head>
              <div class="wiki-storybook-item--padding">
                <h4>animationHeadPosition: toBottom</h4>
                <p>Click to open — Head moves toward the bottom with content</p>
              </div>
            </template>
            <template #body>
              <div class="wiki-storybook-item--padding">
                <h5>Bottom Movement Animation</h5>
                <p>When using <code>animationHeadPosition="toBottom"</code>, the head element travels together with the content during the animation, creating a unified motion experience.</p>
                <p>This approach is particularly effective for accordion-style interfaces, collapsible sections, or any scenario where the header and content should move as a cohesive unit.</p>
                <p>The animation provides a more dynamic feeling, as both header and content participate in the motion, creating a sense of the entire section expanding or contracting as one entity.</p>
                <ul>
                  <li>Header and content move together</li>
                  <li>Creates unified motion experience</li>
                  <li>Ideal for accordion-style interfaces</li>
                  <li>Provides cohesive visual feedback</li>
                </ul>
              </div>
            </template>
          </DesignComponent>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MotionTransform'} type={'motionTransform'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'animationHeadPosition'}/>
<Canvas of={Component.MotionTransformAnimationHeadPosition}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'ignore'}/>
<Canvas of={Component.MotionTransformIgnore}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'classes'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.MotionTransformVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'MotionTransform'} type={'slot.head'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'slot.body'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'slot.params'}/>
    `
  }
}, g = {
  name: "Progress",
  description: {
    en: "Component for displaying progress of operations or loading states",
    ru: "Компонент для отображения прогресса операций или состояний загрузки"
  },
  possibilities: {
    en: [
      "linear and circular progress indicators",
      "determinate and indeterminate progress states",
      "customizable value and maximum values",
      "different positioning options (top, bottom, static)",
      "delay settings for showing and hiding",
      "dense and inverse styling variants",
      "point mode for minimal display"
    ],
    ru: [
      "линейные и круглые индикаторы прогресса",
      "детерминированные и неопределенные состояния прогресса",
      "настраиваемые значения прогресса и максимума",
      "различные варианты позиционирования (сверху, снизу, статично)",
      "настройки задержки для показа и скрытия",
      "компактный и инвертированный варианты стилизации",
      "точечный режим для минимального отображения"
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    "import { ref } from 'vue'"
  ],
  stories: [
    {
      id: "ProgressTypes",
      name: {
        en: "Types",
        ru: "Типы"
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
      id: "ProgressLinear",
      name: {
        en: "Linear Progress",
        ru: "Линейный прогресс"
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
      id: "ProgressCircular",
      name: {
        en: "Circular Progress",
        ru: "Круглый прогресс"
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
      id: "ProgressValues",
      name: {
        en: "Values",
        ru: "Значения"
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
      id: "ProgressDelays",
      name: {
        en: "Delays",
        ru: "Задержки"
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
  }
}, w = {
  name: "Ripple",
  description: {
    en: "Component for creating ripple wave effect on click interactions",
    ru: "Компонент для создания эффекта волны при взаимодействии с элементом"
  },
  possibilities: {
    en: [
      "creates ripple wave effect on click",
      "automatic positioning based on click coordinates",
      "disabling effect with `disabled` property",
      "Material Design inspired animation",
      "works with any interactive elements"
    ],
    ru: [
      "создает эффект волны при клике",
      "автоматическое позиционирование по координатам клика",
      "отключение эффекта свойством `disabled`",
      "анимация в стиле Material Design",
      "работает с любыми интерактивными элементами"
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>
    `
  }
}, h = {
  name: "Scrollbar",
  description: {
    en: "Custom scrollbar component for enhanced user experience",
    ru: "Компонент кастомного скроллбара для улучшения пользовательского опыта"
  },
  possibilities: {
    en: [
      "custom scrollbar styling and appearance",
      "dynamic divider lines based on scroll position",
      "static divider lines at top and bottom",
      "visibility control for scrolling behavior",
      "inverse divider behavior options",
      "hide all divider lines functionality"
    ],
    ru: [
      "кастомная стилизация и внешний вид скроллбара",
      "динамические разделительные линии в зависимости от позиции скролла",
      "статичные разделительные линии сверху и снизу",
      "управление видимостью для поведения прокрутки",
      "опции инвертированного поведения разделителей",
      "функция скрытия всех разделительных линий"
    ]
  },
  render: `
      <D1Scrollbar
        class="wiki-storybook-item--widescreen wiki-storybook-item--squared--sm"
        v-bind="args"
      >
        <div class="wiki-storybook-scrollbar-content">
          <h3>Modern Web Interfaces and User Experience Design</h3>
          <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

          <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

          <h4>Principles of Effective Design Implementation</h4>
          <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>

          <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

          <h4>Technical Implementation Considerations</h4>
          <p>When developing scrollbar components, it's crucial to consider rendering performance, especially when working with large datasets or dynamically generated content. Content virtualization, lazy loading strategies, and DOM operation optimization help ensure smooth performance even on less powerful devices. Memory management becomes particularly important in single-page applications where components may be mounted and unmounted frequently.</p>

          <p>Modern frameworks provide numerous tools for creating customizable scrollbars, but it's important to find the right balance between functionality and ease of use. The component should be easily integrable into existing projects while supporting various configuration options and customization possibilities. API design should be intuitive and follow established patterns within the framework ecosystem.</p>

          <h4>Future Trends and Accessibility</h4>
          <p>The future of web development is moving towards creating more inclusive and accessible interfaces, where every element, including scrollbars, contributes to improving the overall user experience. This includes support for screen readers, high contrast modes, and reduced motion preferences. Progressive enhancement ensures that the scrollbar functionality works across all user scenarios.</p>

          <p>Emerging technologies like CSS container queries and new scrolling APIs continue to expand the possibilities for creating more sophisticated scrolling experiences. The integration of these technologies with existing design systems requires careful planning and consideration of backward compatibility.</p>
        </div>
      </D1Scrollbar>
    `,
  import: [],
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Scrollbar'} type={'scrollbar'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Scrollbar'} type={'event.top'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.reachTop'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.leaveTop'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.bottom'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.reachBottom'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.leaveBottom'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.edge'}/>
    `
  }
}, D = {
  name: "Skeleton",
  description: {
    en: "Skeleton component for displaying loading placeholders",
    ru: "Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных"
  },
  possibilities: {
    en: [
      "animated loading placeholders for content",
      "control visibility with `active` property",
      "child elements react to skeleton state via `isSkeleton` property or special classes",
      "customizable appearance and animation"
    ],
    ru: [
      "анимированные заглушки загрузки для контента",
      "управление видимостью через свойство `active`",
      "дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы",
      "настраиваемый внешний вид и анимация"
    ]
  },
  render: `
    <DesignComponent v-bind="args">
      <div class="wiki-storybook-card design-component__background">
        <div class="wiki-storybook-card__image design-component__background" style="background-image: url('\${image1}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label design-component__text">Product Name</div>
            <div class="wiki-storybook-card__information design-component__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description design-component__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button design-component__background">Buy Now</button>
          </div>
        </div>
      </div>
    </DesignComponent>
  `,
  import: [
    "import { image1 } from '@dxtmisha/wiki/media'"
  ],
  stories: [
    {
      id: "SkeletonBasic",
      name: {
        en: "Basic usage",
        ru: "Базовое использование"
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <DesignComponent :active="true">
              <div class="design-component__text">Text placeholder</div>
              <div class="design-component__text">Text placeholder</div>
              <div class="design-component__text">Text placeholder</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <DesignComponent :active="true">
              <div class="design-component__textVariant">Text placeholder</div>
              <div class="design-component__textVariant">Text placeholder</div>
              <div class="design-component__textVariant">Text placeholder</div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <DesignComponent :active="true">
              <div
                class="design-component__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <DesignComponent :active="true">
              <div
                class="design-component__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <DesignComponent :active="true">
              <div
                class="design-component__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </DesignComponent>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <DesignComponent :active="true">
              <div
                class="design-component__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </DesignComponent>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Skeleton'} type={'active'}/>
<Canvas of={Component.SkeletonBasic}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>
    `
  }
}, C = {
  name: "Window",
  description: {
    en: "Flexible modal and popup window component with advanced positioning and animation capabilities",
    ru: "Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования и анимации"
  },
  possibilities: {
    en: [
      "modal and contextual window display modes",
      "intelligent positioning system with automatic collision detection",
      "smooth opening and closing animations with customizable transitions",
      "static mode for embedded window components",
      "persistent window state management",
      "automatic scroll handling and content overflow management",
      "keyboard navigation and accessibility support",
      "event-driven architecture with comprehensive lifecycle hooks",
      "integration with scrollbar and image components",
      "responsive design with mobile and desktop optimization"
    ],
    ru: [
      "режимы отображения модальных и контекстных окон",
      "интеллектуальная система позиционирования с автоматическим определением коллизий",
      "плавные анимации открытия и закрытия с настраиваемыми переходами",
      "статический режим для встроенных компонентов окон",
      "управление постоянным состоянием окна",
      "автоматическая обработка прокрутки и управление переполнением контента",
      "навигация с клавиатуры и поддержка доступности",
      "событийно-ориентированная архитектура с комплексными хуками жизненного цикла",
      "интеграция с компонентами скроллбара и изображений",
      "адаптивный дизайн с оптимизацией для мобильных устройств и десктопа"
    ]
  },
  import: [
    "import { ref } from 'vue'"
  ],
  render: `
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Window</button>
        </template>

        <template #title>
          <h3 class="wiki-storybook-item--padding">Window Component Demonstration</h3>
        </template>

        <template #default>
          <div class="wiki-storybook-item--padding">
            <h4>Advanced Window System</h4>
            <p>This window component represents a sophisticated approach to modal and popup interfaces in modern web applications. It provides a comprehensive solution for displaying overlaid content with intelligent positioning, smooth animations, and extensive customization options.</p>

            <p>The component automatically handles complex scenarios such as viewport boundaries, scroll positioning, and responsive behavior across different screen sizes. Whether used for modal dialogs, dropdown menus, tooltips, or contextual panels, the window component adapts to various use cases while maintaining consistent behavior and appearance.</p>

            <h4>Key Features and Capabilities</h4>
            <p>The window system includes advanced features such as automatic positioning algorithms that prevent content from appearing outside viewport boundaries, smooth transition animations that enhance user experience, and comprehensive event handling for various interaction patterns including keyboard navigation and focus management.</p>

            <p>Integration with other components such as scrollbars and images is seamless, allowing for rich content presentation within window containers. The component supports both programmatic and declarative control patterns, making it suitable for different development approaches and architectural requirements.</p>

            <h4>Technical Architecture</h4>
            <p>Built with a modular composition-based architecture, the window component consists of multiple specialized subcomponents that handle specific aspects of functionality. This includes separate managers for positioning, events, styles, animations, and state persistence, ensuring maintainable and testable code.</p>

            <p>The component follows modern Vue.js patterns with reactive state management, composable APIs, and TypeScript support throughout. Performance is optimized through intelligent rendering strategies and minimal DOM manipulation, ensuring smooth operation even in complex applications with multiple concurrent windows.</p>
          </div>
        </template>

        <template #footer="{classesWindow}">
          <div class="wiki-storybook-flex wiki-storybook-item--padding">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
            <button class="wiki-storybook-button">Confirm</button>
          </div>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: "WindowStaticMode",
      name: {
        en: "Static Mode",
        ru: "Статический режим"
      },
      template: `
        <DesignComponent :staticMode="true" adaptive="static">
          <template #default>
            <h4>Static Mode Window</h4>
            <p>This window uses <code>staticMode: true</code>.</p>
            <p>Content displays immediately without animations or modal positioning.</p>

            <div class="wiki-storybook-info">
              <strong>Static mode features:</strong>
              <ul>
                <li>No animations</li>
                <li>Embedded in document flow</li>
                <li>Always visible</li>
              </ul>
            </div>
          </template>
        </DesignComponent>
      `
    },
    {
      id: "WindowAxis",
      name: {
        en: "Axis positioning",
        ru: "Позиционирование по оси"
      },
      template: `
        <div class="wiki-storybook-flex wiki-storybook-gap">
          <!-- Axis: x -->
          <DesignComponent axis="x" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: x)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = x</strong>
                <p>Window aligns horizontally (left/right) near the trigger.</p>
              </div>
            </template>
          </DesignComponent>

          <!-- Axis: y -->
          <DesignComponent axis="y" adaptive="menu" :indent="8">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: y)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = y</strong>
                <p>Window aligns vertically (top/bottom) near the trigger.</p>
              </div>
            </template>
          </DesignComponent>

          <!-- Axis: on -->
          <DesignComponent axis="on" adaptive="menu" overElement=".axis-on-target">
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Open (axis: on)</button>
            </template>
            <template #default>
              <div class="wiki-storybook-item--padding">
                <strong>axis = on</strong>
                <p>Window positions over the target element; scroll adjusts to keep it visible.</p>
                <ul style="max-height: 160px; overflow: auto; margin: 8px 0; padding-left: 20px;">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li class="axis-on-target"><strong>Focused item (target)</strong></li>
                  <li>Item 6</li>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                  <li>Item 10</li>
                </ul>
              </div>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: "WindowVModel",
      name: {
        en: "Two-way binding (v-model)",
        ru: "Двусторонняя привязка (v-model)"
      },
      setup: `
      return {
        open: ref(false)
      }
      `,
      template: `
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Window'} type={'window'}/>
<StorybookDescriptions componentName={'Window'} type={'staticMode'}/>
<Canvas of={Component.WindowStaticMode}/>
<StorybookDescriptions componentName={'Window'} type={'axis'}/>
<Canvas of={Component.WindowAxis}/>
<StorybookDescriptions componentName={'Window'} type={'classes'}/>
<StorybookDescriptions componentName={'Window'} type={'hooks'}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.WindowVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>

<StorybookDescriptions componentName={'Event'} type={'scrollbarTop'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarReachTop'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarLeaveTop'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarBottom'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarReachBottom'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarLeaveBottom'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarEdge'}/>

<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose.control'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.id'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'control'}/>
<StorybookDescriptions componentName={'Slot'} type={'title'}/>
<StorybookDescriptions componentName={'Slot'} type={'footer'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  }
}, f = [
  e,
  o,
  i,
  t,
  n,
  s,
  a,
  r,
  l,
  p,
  m,
  c,
  d,
  k,
  b,
  y,
  u,
  v,
  g,
  w,
  h,
  D,
  C
];
export {
  f as w
};
