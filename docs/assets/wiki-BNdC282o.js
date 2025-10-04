import{al as d,ab as p,a2 as c,S as y}from"./iframe-BGVIV1-M.js";const u={name:"Badge",description:{en:"Small visual indicator for displaying status, count, or notifications on interface elements",ru:"Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса"},possibilities:{en:["multiple color variants for different status types","content customization with text or numbers","positioning relative to parent elements","maximum value display with overflow handling","visibility control and animation support"],ru:["множественные цветовые варианты для разных типов статуса","настройка содержимого с текстом или числами","позиционирование относительно родительских элементов","отображение максимального значения с обработкой переполнения","управление видимостью и поддержка анимации"]},import:[],render:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,stories:[{id:"BadgeBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static">Badge</DesignComponent>
          <DesignComponent overlap="static" icon="home">Badge</DesignComponent>
          <DesignComponent overlap="static">99</DesignComponent>
          <DesignComponent overlap="static" label="999" label-max="99"/>
        </div>
      `},{id:"BadgeDot",name:{en:"Dot",ru:"Точечные (dot)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent dot overlap="static"/>
        </div>
      `},{id:"BadgePrimary",name:{en:"Primary",ru:"Основные (primary)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent primary overlap="static" icon="home"/>
          <DesignComponent primary overlap="static">Badge</DesignComponent>
        </div>
      `,propsName:"primary"},{id:"BadgeSecondary",name:{en:"Secondary",ru:"Второстепенные (secondary)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent secondary overlap="static" icon="home"/>
          <DesignComponent secondary overlap="static">Badge</DesignComponent>
        </div>
      `,propsName:"secondary"},{id:"BadgeOutline",name:{en:"Outline",ru:"Контурные (outline)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent outline overlap="static" icon="home"/>
          <DesignComponent outline overlap="static">Badge</DesignComponent>
        </div>
      `,propsName:"outline"}],documentation:{body:`
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
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `}},b={name:"Bars",description:{en:"A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.",ru:"Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки."},possibilities:{en:["Displays a primary label and a secondary description.","Includes an optional back button for navigation.","Supports a primary set of interactive buttons.",'Features an "action mode" with a separate set of buttons, label, and description.',"Allows full customization of button appearance and behavior."],ru:["Отображает основной заголовок и дополнительное описание.",'Включает опциональную кнопку "назад" для навигации.',"Поддерживает основной набор интерактивных кнопок.",'Имеет "режим действия" с отдельным набором кнопок, заголовком и описанием.',"Позволяет полностью настраивать внешний вид и поведение кнопок."]},import:["import { ref } from 'vue'"],stories:[{id:"BarsBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
      `},{id:"BarsVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        isAction: ref(false)
      }
      `,template:`
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
      `},{id:"BarsSkeleton",name:{en:"Skeleton loading",ru:"Загрузка скелетона"},components:["Skeleton"],template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Bars'} type={'bars'}/>
<StorybookDescriptions componentName={'Bars'} type={'action'}/>
<Canvas of={Component.BarsBasic}/>
<StorybookDescriptions componentName={'Bars'} type={'v-model'}/>
<Canvas of={Component.BarsVModel}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.BarsSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Bars'} type={'slot.bars'}/>
<StorybookDescriptions componentName={'Bars'} type={'slot.actionBars'}/>
    `}},g={name:"Button",description:{en:"Interactive button component for user actions",ru:"Интерактивный компонент кнопки для действий пользователя"},possibilities:{en:["multiple visual variants for different use cases","different sizes from extra small to extra large","built-in accessibility support","focus, hover, and active states","disabled and loading states support","customizable styling through design tokens"],ru:["множественные визуальные варианты для разных случаев использования","различные размеры от очень маленького до очень большого","встроенная поддержка доступности","состояния focus, hover и active","поддержка отключенного состояния и состояния загрузки","настраиваемая стилизация через токены дизайна"]},import:[],stories:[{id:"ButtonBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent>Button</DesignComponent>
          <DesignComponent icon="home">Button</DesignComponent>
          <DesignComponent icon-trailing="arrow_forward">Button</DesignComponent>
        </div>
      `},{id:"ButtonPrimary",name:{en:"Primary",ru:"Основные (primary)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent primary>Button</DesignComponent>
          <DesignComponent primary icon="home">Button</DesignComponent>
          <DesignComponent primary selected>Button</DesignComponent>
          <DesignComponent primary disabled>Button</DesignComponent>
        </div>
      `,propsName:"primary"},{id:"ButtonSecondary",name:{en:"Secondary",ru:"Второстепенные (secondary)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent secondary>Button</DesignComponent>
          <DesignComponent secondary icon="home">Button</DesignComponent>
          <DesignComponent secondary selected>Button</DesignComponent>
          <DesignComponent secondary disabled>Button</DesignComponent>
        </div>
      `,propsName:"secondary"},{id:"ButtonOutline",name:{en:"Outline",ru:"Контурные (outline)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent outline>Button</DesignComponent>
          <DesignComponent outline icon="home">Button</DesignComponent>
          <DesignComponent outline selected>Button</DesignComponent>
          <DesignComponent outline disabled>Button</DesignComponent>
        </div>
      `,propsName:"outline"},{id:"ButtonText",name:{en:"Text",ru:"Текстовые (text)"},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent text>Button</DesignComponent>
          <DesignComponent text icon="home">Button</DesignComponent>
          <DesignComponent text selected>Button</DesignComponent>
          <DesignComponent text disabled>Button</DesignComponent>
        </div>
      `,propsName:"text"},{id:"ButtonAdaptive",name:{en:"Adaptive",ru:"Адаптивные"},template:`
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
      `},{id:"ButtonSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Button</DesignComponent>
        </DesignSkeleton>
      `}],documentation:{body:`
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
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `}},k={name:"Cell",description:{en:"Versatile container component for displaying structured content with labels, descriptions, and actions",ru:"Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями"},possibilities:{en:["flexible content structure with label, description, and caption","interactive states including focus, selected, and disabled","built-in icon and trailing icon support","progress indicator integration","divider customization options","dynamic behavior with hover interactions","skeleton loading state support","click event handling with custom data"],ru:["гибкая структура контента с меткой, описанием и подписью","интерактивные состояния включая focus, selected и disabled","встроенная поддержка иконок и завершающих иконок","интеграция индикатора прогресса","возможности настройки разделителей","динамическое поведение с взаимодействием при наведении","поддержка состояния загрузки скелетона","обработка событий клика с пользовательскими данными"]},render:`
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,import:[],stories:[{id:"CellSkeleton",name:{en:"Skeleton loading",ru:"Загрузка скелетона"},components:["Skeleton"],template:`
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
      `},{id:"CellSlots",name:{en:"Slots usage",ru:"Использование слотов"},template:`
        <DesignComponent icon="home">
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Cell'} type={'cell'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CellSkeleton}/>
`,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<Canvas of={Component.CellSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slot.trailing'}/>
<StorybookDescriptions componentName={'Cell'} type={'slot.body'}/>
`}},v={name:"Chip",description:{en:"Compact element that represents an input, attribute, or action",ru:"Компактный элемент, представляющий ввод, атрибут или действие"},possibilities:{en:["multiple visual variants for different contexts","selectable state for user interaction","disabled state support","customizable styling through design tokens","icon support for enhanced visual representation","adaptive behavior for different screen sizes"],ru:["множественные визуальные варианты для разных контекстов","выбираемое состояние для взаимодействия пользователя","поддержка отключенного состояния","настраиваемая стилизация через токены дизайна","поддержка иконок для улучшенного визуального представления","адаптивное поведение для разных размеров экрана"]},import:[],stories:[{id:"ChipBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
      `},{id:"ChipInput",name:{en:"Input",ru:"Ввод (input)"},template:`
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
      `,propsName:"input"},{id:"ChipAssistive",name:{en:"Assistive",ru:"Вспомогательные (assistive)"},template:`
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
      `,propsName:"assistive"},{id:"ChipAdaptive",name:{en:"Adaptive",ru:"Адаптивные"},template:`
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
      `,propsName:"adaptive"},{id:"ChipSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
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
      `,propsName:"isSkeleton"}],documentation:{body:`
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
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `}},h={name:"Field",description:{en:"Base container for form controls that composes label, messages, counter, icons and progress",ru:"Базовый контейнер для полей ввода, который собирает метку, сообщения, счётчик, иконки и прогресс"},possibilities:{en:["composes FieldLabel, FieldMessage, FieldCounter, Progress and icon includes","handles states: focus, disabled, readonly, selected, block","supports prefix, suffix and caption slots","validation highlighting based on validationMessage and forceShowMessage","optional cancel and navigation (arrow) icons with visibility flags","counter position control with counterTop","integrated helpers for sizing and icons (FieldSize, FieldIcons)"],ru:["композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок","обрабатывает состояния: focus, disabled, readonly, selected, block","поддерживает слоты prefix, suffix и caption","подсветка валидации на основе validationMessage и forceShowMessage","дополнительные иконки отмены и навигации (стрелки) с флагами видимости","управление позицией счётчика через counterTop","встроенные помощники для размеров и иконок (FieldSize, FieldIcons)"]},import:[],render:`
      <DesignComponent v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </DesignComponent>
    `,stories:[{id:"FieldCancel",name:{en:"Cancel button",ru:"Кнопка очистки"},template:`
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
      `},{id:"FieldNavigation",name:{en:"Navigation & arrows",ru:"Навигация / стрелки"},template:`
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
      `},{id:"FieldSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
        <DesignSkeleton :active="true" style="max-width:280px">
          <DesignComponent isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </DesignComponent>
        </DesignSkeleton>
      `},{id:"FieldValue",name:{en:"Value state",ru:"Состояние значения"},template:`
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
      `},{id:"FieldWidth",name:{en:"Width",ru:"Ширина"},template:`
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
      `},{id:"FieldSlots",name:{en:"Slots usage",ru:"Использование слотов"},template:`
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
      `}],documentation:{body:`
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
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,slots:`
<Canvas of={Component.FieldSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'} />
<StorybookDescriptions componentName={'Field'} type={'slot.leading'} />
<StorybookDescriptions componentName={'Field'} type={'slot.trailing'} />
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
    `}},w={name:"FieldCounter",description:{en:"Component for displaying character count and input length limits in form fields",ru:"Компонент для отображения счетчика символов и ограничений длины ввода в полях форм"},possibilities:{en:["displays current character count","shows maximum character limit when specified","customizable display template with placeholders","automatic visibility based on counter and maxlength props","supports both string and number values",'compact display format (e.g., "50 / 100")',"template-based formatting with [c] and [m] placeholders"],ru:["отображает текущее количество символов","показывает максимальное ограничение символов при указании","настраиваемый шаблон отображения с заполнителями","автоматическая видимость на основе свойств counter и maxlength","поддерживает значения как строк, так и чисел",'компактный формат отображения (например, "50 / 100")',"форматирование на основе шаблона с заполнителями [c] и [m]"]},import:[],stories:[{id:"FieldCounterTemplate",name:{en:"Custom Template",ru:"Пользовательский шаблон"},template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>
<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>
<Canvas of={Component.FieldCounterTemplate}/>
    `}},f={name:"FieldLabel",description:{en:"Component for displaying a field label and required marker; can be used together with counter and progress",ru:"Компонент для отображения метки поля и индикатора обязательности; может использоваться вместе со счетчиком и прогрессом"},possibilities:{en:["renders a text label for form fields","shows required marker when the field is mandatory","works together with FieldCounter and Progress when passed as props","keeps consistent spacing and classes within form controls"],ru:["рендерит текстовую метку для полей формы","показывает индикатор обязательности для обязательных полей","работает совместно со счетчиком FieldCounter и прогрессом при передаче соответствующих свойств","сохраняет согласованные отступы и классы внутри элементов формы"]},import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `}},D={name:"FieldMessage",description:{en:"Component for displaying helper and validation messages for form fields",ru:"Компонент для отображения вспомогательных и валидационных сообщений для полей форм"},possibilities:{en:["shows helper text under the field","displays validation message when error occurs","visibility control via a dedicated force flag","works together with input fields and counters","supports HTML-safe rendering by design system"],ru:["показывает вспомогательный текст под полем","отображает сообщение валидации при ошибке","управление видимостью через специальный флаг","работает совместно с полями ввода и счетчиками","поддерживает безопасный рендеринг HTML силами дизайн-системы"]},import:[],stories:[{id:"FieldMessageSlots",name:{en:"Slots",ru:"Слоты"},template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'FieldMessage'} type={'fieldMessage'}/>
    `,slots:`
<StorybookDescriptions componentName={'FieldMessage'} type={'slot.helper'}/>
<StorybookDescriptions componentName={'FieldMessage'} type={'slot.validation'}/>
<Canvas of={Component.FieldMessageSlots}/>
    `}},C={name:"Icon",description:{en:"Component for displaying icons",ru:"Компонент для отображения иконок"},possibilities:{en:["displaying icons by name","switching icons on active state","animation support"],ru:["отображение иконок по имени","переключение иконок в активном состоянии","поддержка анимации"]},import:[],stories:[{id:"IconState",name:{en:"Icon state",ru:"Состояние иконки"},template:`
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
      `},{id:"IconDirection",name:{en:"Direction",ru:"Направление компонента"},template:`
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
      `},{id:"IconPalette",name:{en:"Palette",ru:"Палитра"},template:`
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
      `},{id:"IconSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Icon'} type={'icon'}/>
<Canvas of={Component.IconState}/>

<StorybookDescriptions componentName={'Style'} type={'dir'}/>
<Canvas of={Component.IconDirection}/>

<StorybookDescriptions componentName={'Style'} type={'asPalette'}/>
<Canvas of={Component.IconPalette}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.IconSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,expose:`
<StorybookDescriptions componentName={'Icon'} type={'expose.isActive'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `}},S={name:"Image",description:{en:"Image component for displaying images",ru:"Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон"},possibilities:{en:["support for various source types: string, `File`, image or PDF address","adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`","cropping and positioning via `coordinator`, `x`, `y`","rotation or hiding the component with properties `turn`, `hide`, `disabled`","mode selection for filling (`size`: `auto`, `contain`, `cover`)"],ru:["поддержка различных типов исходников: строка, `File`, адрес картинки или PDF","адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`","обрезка и позиционирование через `coordinator`, `x`, `y`","поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`","выбор режима заполнения (`size`: `auto`, `contain`, `cover`)"]},render:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,import:["import { demoPdf, image1, phone1, phone2, phone3 } from '@dxtmisha/wiki/media'"],stories:[{id:"ImageType",name:{en:"Value type",ru:"Тип значения"},setup:`
      return {
        image1,
        demoPdf
      }
      `,template:`
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
      `},{id:"ImageSize",name:{en:"Display control",ru:"Отображение"},setup:`
      return {
        image1
      }
      `,template:`
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
      `},{id:"ImageAdaptive",name:{en:"Adapted images",ru:"Адаптированные изображения"},setup:`
      return {
        phone1,
        phone2,
        phone3
      }
      `,template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
    `,events:`
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,expose:`
<StorybookDescriptions componentName={'Image'} type={'expose.type'}/>
<StorybookDescriptions componentName={'Image'} type={'expose.data'}/>
    `}},x={name:"List",description:{en:"Advanced list component with keyboard navigation, search functionality, and hierarchical data support",ru:"Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных"},possibilities:{en:["keyboard navigation with arrow keys and shortcuts","real-time search and highlight functionality","hierarchical data structure with groups and menus","focus management and item selection","lightweight rendering mode for large datasets","customizable item types and rendering","event-driven interaction system","accessibility support with ARIA attributes","automatic scroll management and viewport optimization","integration with icons, badges, and other components"],ru:["навигация с клавиатуры со стрелками и горячими клавишами","поиск в реальном времени и функциональность выделения","иерархическая структура данных с группами и меню","управление фокусом и выбором элементов","облегченный режим рендеринга для больших наборов данных","настраиваемые типы элементов и рендеринг","событийно-ориентированная система взаимодействия","поддержка доступности с ARIA атрибутами","автоматическое управление прокруткой и оптимизация области просмотра","интеграция с иконками, бейджами и другими компонентами"]},stories:[{id:"ListHighlight",name:{en:"Highlighting",ru:"Выделение"},template:`
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
      `},{id:"ListLiteMode",name:{en:"Lite mode",ru:"Облегчённый режим"},template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'List'} type={'list'}/>

<StorybookDescriptions componentName={'List'} type={'lite'}/>
<Canvas of={Component.ListLiteMode}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListHighlight}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'isSelected'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedList'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedNames'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedValues'}/>
    `,slots:`
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `}},N={name:"ListGroup",description:{en:"Auxiliary component for the List component to group and organize list items with collapsible structure",ru:"Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой"},possibilities:{en:["grouping helper for List component items","collapsible/expandable group functionality","customizable group header with icon support","automatic arrow icon rotation based on state","nested group support for complex hierarchies","seamless integration with List ecosystem","keyboard navigation and accessibility","smooth animation transitions","flexible content management through slots"],ru:["помощник группировки для элементов компонента List","функциональность сворачиваемой/разворачиваемой группы","настраиваемый заголовок группы с поддержкой иконок","автоматический поворот стрелки в зависимости от состояния","поддержка вложенных групп для сложных иерархий","бесшовная интеграция с экосистемой List","навигация с клавиатуры и доступность","плавные анимационные переходы","гибкое управление контентом через слоты"]},render:`
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
    `,import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'ListGroup'} type={'listGroup'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
    `,slots:`
<StorybookDescriptions componentName={'ListGroup'} type={'slot.head'}/>
<StorybookDescriptions componentName={'ListGroup'} type={'slot.list'}/>
    `}},_={name:"ListItem",description:{en:"Versatile list item component for displaying structured content",ru:"Универсальный компонент элемента списка для отображения структурированного контента"},possibilities:{en:["multiple content areas: label, description, prefix, suffix, caption","icon support with flexible positioning and alignment","badge integration for status indicators","interactive states: focus, selected, disabled, readonly","progress and skeleton loading states","ripple effect for enhanced user feedback","flexible tag options: button, link, div, span","built-in accessibility support","customizable through design tokens"],ru:["множественные области контента: метка, описание, префикс, суффикс, заголовок","поддержка иконок с гибким позиционированием и выравниванием","интеграция значков для индикаторов статуса","интерактивные состояния: фокус, выбранный, отключенный, только для чтения","состояния загрузки с прогрессом и скелетоном","эффект пульсации для улучшенной обратной связи","гибкие варианты тегов: кнопка, ссылка, div, span","встроенная поддержка доступности","настраиваемый через токены дизайна"]},render:`
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,import:[],stories:[{id:"ListItemBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
      `},{id:"ListItemHighlight",name:{en:"Highlighting",ru:"Выделение"},template:`
        <DesignComponent highlight="search" label="Search result item"/>
        <DesignComponent highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
        <DesignComponent highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
        <DesignComponent highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
      `},{id:"ListItemFill",name:{en:"Fill",ru:"Заливка"},template:`
        <DesignComponent label="Default fill"/>
        <DesignComponent fill="#ff0000" label="Red fill"/>
        <DesignComponent fill="rgb(0, 128, 255)" label="Blue fill"/>
        <DesignComponent fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
      `},{id:"ListItemSkeleton",name:{en:"Skeleton loading",ru:"Загрузка скелетона"},components:["Skeleton"],template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'ListItem'} type={'basic'}/>
<Canvas of={Component.ListItemBasic}/>

<StorybookDescriptions componentName={'Value'} type={'highlight'}/>
<Canvas of={Component.ListItemHighlight}/>

<StorybookDescriptions componentName={'ListItem'} type={'fill'}/>
<Canvas of={Component.ListItemFill}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ListItemSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slot.trailing'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slot.body'}/>
    `}},T={name:"ListMenu",description:{en:"Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure",ru:"Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой"},possibilities:{en:["menu helper for List component navigation","expandable/collapsible submenu functionality","customizable menu header with icon support","automatic arrow icon rotation based on state","nested menu support for complex hierarchies","seamless integration with List ecosystem","keyboard navigation and accessibility","smooth animation transitions","flexible menu content management through slots"],ru:["помощник меню для навигации компонента List","функциональность раскрывающихся/сворачивающихся подменю","настраиваемый заголовок меню с поддержкой иконок","автоматический поворот стрелки в зависимости от состояния","поддержка вложенных меню для сложных иерархий","бесшовная интеграция с экосистемой List","навигация с клавиатуры и поддержка доступности","плавные анимационные переходы","гибкое управление содержимым меню через слоты"]},render:`
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
    `,import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'ListMenu'} type={'listMenu'}/>
    `,events:`
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>

<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose.control'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.id'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,slots:`
<StorybookDescriptions componentName={'ListGroup'} type={'slot.head'}/>
<StorybookDescriptions componentName={'ListGroup'} type={'slot.list'}/>
    `}},M={name:"Mask",description:{en:"Input masking utility for text, numbers, currency and dates with flexible patterns and validation.",ru:"Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией."},possibilities:{en:["string or multi-pattern masks (auto selection)","special symbols define input groups and literals are auto-inserted","per-group and global validation patterns","number / currency formats with grouping and fraction control","date/time helpers and locale-aware behavior"],ru:["одиночные и множественные маски (автовыбор по вводу)","спецсимволы задают группы ввода, литералы подставляются автоматически","валидация по группам и глобально","форматы числа/валюты с группировкой и дробной частью","помощники для даты/времени и поведение с учётом локали"]},import:[],render:`
    <div class="wiki-storybook-group" >
      <DesignComponent
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `,stories:[{id:"MaskBasic",name:{en:"Mask Examples",ru:"Примеры масок"},template:`
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
      `},{id:"MaskSpecial",name:{en:"Special Characters",ru:"Специальные символы"},template:`
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
      `},{id:"MaskValidation",name:{en:"Validation",ru:"Валидация"},template:`
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
      `},{id:"MaskGroupSave",name:{en:"Group navigation (groupSave)",ru:"Навигация по группам (groupSave)"},template:`
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
      `},{id:"MaskMatch",name:{en:"Allowed characters (match)",ru:"Допустимые символы (match)"},template:`
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
      `},{id:"MaskNumberTypes",name:{en:"Numeric types",ru:"Числовые типы"},template:`
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
      `},{id:"MaskDateTypes",name:{en:"Date and time types",ru:"Типы дат и времени"},template:`
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
      `}],documentation:{body:`
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
    `}},B={name:"Menu",description:{en:"Composite menu that combines Window, Bars, and List for nested interactive navigation",ru:"Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации"},possibilities:{en:["popup container from Window with control/title/footer slots","toolbar actions via Bars and hierarchical items via List","nested groups and menus with keyboard focus and selection","lightweight rendering for large menus (lite + liteThreshold)","custom fields mapping with keyLabel and keyValue","custom item attributes and container attributes (itemAttrs, listAttrs)"],ru:["всплывающий контейнер из Window со слотами control/title/footer","действия панели через Bars и иерархия пунктов через List","вложенные группы и меню с фокусом с клавиатуры и выбором","облегчённый рендер для больших меню (lite + liteThreshold)","кастомное сопоставление полей через keyLabel и keyValue","настройка атрибутов пунктов и списка (itemAttrs, listAttrs)"]},render:`
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </DesignComponent>
  `,stories:[{id:"MenuAjax",name:{en:"AJAX Loading",ru:"AJAX Загрузка"},setup:`
        const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([
          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
          {label: 'Users', value: 'users', icon: 'people'},
          {label: 'Settings', value: 'settings', icon: 'settings'},
          {label: 'Reports', value: 'reports', icon: 'assessment'}
        ]), 512))

        return { loadMenuData }
      `,template:`
        <DesignComponent :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Menu'} type={'menu'}/>

<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>
<Canvas of={Component.MenuAjax}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>

<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'barsLite'}/>
<StorybookDescriptions componentName={'Event'} type={'barsBack'}/>
<StorybookDescriptions componentName={'Event'} type={'window'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'isSelected'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedList'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedNames'}/>
<StorybookDescriptions componentName={'Expose'} type={'selectedValues'}/>
    `,slots:`
<StorybookDescriptions componentName={'Menu'} type={'slot.control'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.title'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.footer'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.contextTop'}/>
<StorybookDescriptions componentName={'Menu'} type={'slot.contextBottom'}/>
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `}},A={name:"MotionTransform",description:{en:"Low-level motion system that manages element transforms, state transitions, and interaction events for contextual UI like windows and menus",ru:"Низкоуровневая система анимаций, управляющая трансформациями элементов, переходами состояний и событиями взаимодействия для контекстных интерфейсов (окна, меню)"},possibilities:{en:["centralized state for open/show/teleport with computed accessors","size measurement and CSS variable updates for smooth animations","teleport control for window-like behavior and off-DOM rendering","click/close/auto-close handling with ignore areas","programmatic API for open/close/toggle and state transitions","designed to be embedded into higher-level components (Window, Dropdown, etc.)"],ru:["централизованное состояние open/show/teleport с вычисляемыми аксессорами","измерение размеров и обновление CSS‑переменных для плавных анимаций","управление телепортацией для «оконного» поведения и рендера вне DOM","обработка кликов/закрытия/автозакрытия с зонами игнорирования","программный API для open/close/toggle и переходов состояний","предназначена для встраивания в компоненты верхнего уровня (Window, Dropdown и т. п.)"]},render:`
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
    `,import:["import { ref } from 'vue'"],stories:[{id:"MotionTransformVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        open: ref(false)
      }
      `,template:`
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
      `},{id:"MotionTransformIgnore",name:{en:"Ignore zones",ru:"Зоны игнорирования"},template:`
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
      `},{id:"MotionTransformAnimationHeadPosition",name:{en:"Head position animation",ru:"Анимация позиции заголовка"},template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'MotionTransform'} type={'motionTransform'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'animationHeadPosition'}/>
<Canvas of={Component.MotionTransformAnimationHeadPosition}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'ignore'}/>
<Canvas of={Component.MotionTransformIgnore}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'classes'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.MotionTransformVModel}/>
    `,events:`
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,expose:`
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,slots:`
<StorybookDescriptions componentName={'MotionTransform'} type={'slot.head'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'slot.body'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'slot.params'}/>
    `}},I={name:"Progress",description:{en:"Component for displaying progress of operations or loading states",ru:"Компонент для отображения прогресса операций или состояний загрузки"},possibilities:{en:["linear and circular progress indicators","determinate and indeterminate progress states","customizable value and maximum values","different positioning options (top, bottom, static)","delay settings for showing and hiding","dense and inverse styling variants","point mode for minimal display"],ru:["линейные и круглые индикаторы прогресса","детерминированные и неопределенные состояния прогресса","настраиваемые значения прогресса и максимума","различные варианты позиционирования (сверху, снизу, статично)","настройки задержки для показа и скрытия","компактный и инвертированный варианты стилизации","точечный режим для минимального отображения"]},render:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,import:["import { ref } from 'vue'"],stories:[{id:"ProgressTypes",name:{en:"Types",ru:"Типы"},template:`
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
      `},{id:"ProgressLinear",name:{en:"Linear Progress",ru:"Линейный прогресс"},template:`
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
      `},{id:"ProgressCircular",name:{en:"Circular Progress",ru:"Круглый прогресс"},template:`
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
      `},{id:"ProgressValues",name:{en:"Values",ru:"Значения"},template:`
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
      `},{id:"ProgressDelays",name:{en:"Delays",ru:"Задержки"},setup:`
      const visible = ref(false)
      return {
        visible,
        onClick: () => {
          visible.value = !visible.value
        }
      }
      `,template:`
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
      `}],documentation:{body:`
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
    `}},L={name:"Ripple",description:{en:"Component for creating ripple wave effect on click interactions",ru:"Компонент для создания эффекта волны при взаимодействии с элементом"},possibilities:{en:["creates ripple wave effect on click","automatic positioning based on click coordinates","disabling effect with `disabled` property","Material Design inspired animation","works with any interactive elements"],ru:["создает эффект волны при клике","автоматическое позиционирование по координатам клика","отключение эффекта свойством `disabled`","анимация в стиле Material Design","работает с любыми интерактивными элементами"]},render:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>
    `}},P={name:"Scrollbar",description:{en:"Custom scrollbar component for enhanced user experience",ru:"Компонент кастомного скроллбара для улучшения пользовательского опыта"},possibilities:{en:["custom scrollbar styling and appearance","dynamic divider lines based on scroll position","static divider lines at top and bottom","visibility control for scrolling behavior","inverse divider behavior options","hide all divider lines functionality"],ru:["кастомная стилизация и внешний вид скроллбара","динамические разделительные линии в зависимости от позиции скролла","статичные разделительные линии сверху и снизу","управление видимостью для поведения прокрутки","опции инвертированного поведения разделителей","функция скрытия всех разделительных линий"]},render:`
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
    `,import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Scrollbar'} type={'scrollbar'}/>
    `,events:`
<StorybookDescriptions componentName={'Scrollbar'} type={'event.top'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.reachTop'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.leaveTop'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.bottom'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.reachBottom'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.leaveBottom'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'event.edge'}/>
    `}},F={name:"Skeleton",description:{en:"Skeleton component for displaying loading placeholders",ru:"Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных"},possibilities:{en:["animated loading placeholders for content","control visibility with `active` property","child elements react to skeleton state via `isSkeleton` property or special classes","customizable appearance and animation"],ru:["анимированные заглушки загрузки для контента","управление видимостью через свойство `active`","дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы","настраиваемый внешний вид и анимация"]},render:`
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
  `,import:["import { image1 } from '@dxtmisha/wiki/media'"],stories:[{id:"SkeletonBasic",name:{en:"Basic usage",ru:"Базовое использование"},template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Skeleton'} type={'active'}/>
<Canvas of={Component.SkeletonBasic}/>
    `,expose:`
<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>
    `}},E={name:"Window",description:{en:"Flexible modal and popup window component with advanced positioning and animation capabilities",ru:"Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования и анимации"},possibilities:{en:["modal and contextual window display modes","intelligent positioning system with automatic collision detection","smooth opening and closing animations with customizable transitions","static mode for embedded window components","persistent window state management","automatic scroll handling and content overflow management","keyboard navigation and accessibility support","event-driven architecture with comprehensive lifecycle hooks","integration with scrollbar and image components","responsive design with mobile and desktop optimization"],ru:["режимы отображения модальных и контекстных окон","интеллектуальная система позиционирования с автоматическим определением коллизий","плавные анимации открытия и закрытия с настраиваемыми переходами","статический режим для встроенных компонентов окон","управление постоянным состоянием окна","автоматическая обработка прокрутки и управление переполнением контента","навигация с клавиатуры и поддержка доступности","событийно-ориентированная архитектура с комплексными хуками жизненного цикла","интеграция с компонентами скроллбара и изображений","адаптивный дизайн с оптимизацией для мобильных устройств и десктопа"]},import:["import { ref } from 'vue'"],render:`
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
    `,stories:[{id:"WindowStaticMode",name:{en:"Static Mode",ru:"Статический режим"},template:`
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
      `},{id:"WindowAxis",name:{en:"Axis positioning",ru:"Позиционирование по оси"},template:`
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
      `},{id:"WindowVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Window'} type={'window'}/>
<StorybookDescriptions componentName={'Window'} type={'staticMode'}/>
<Canvas of={Component.WindowStaticMode}/>
<StorybookDescriptions componentName={'Window'} type={'axis'}/>
<Canvas of={Component.WindowAxis}/>
<StorybookDescriptions componentName={'Window'} type={'classes'}/>
<StorybookDescriptions componentName={'Window'} type={'hooks'}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.WindowVModel}/>
    `,events:`
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>

<StorybookDescriptions componentName={'Event'} type={'scrollbarTop'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarReachTop'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarLeaveTop'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarBottom'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarReachBottom'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarLeaveBottom'}/>
<StorybookDescriptions componentName={'Event'} type={'scrollbarEdge'}/>

<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose.control'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.id'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.open'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.setOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toOpen'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toClose'}/>
<StorybookDescriptions componentName={'Window'} type={'expose.toggle'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'control'}/>
<StorybookDescriptions componentName={'Slot'} type={'title'}/>
<StorybookDescriptions componentName={'Slot'} type={'footer'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `}},ne=[u,b,g,k,v,h,w,f,D,C,S,x,N,_,T,M,B,A,I,L,P,F,E];var e=(s=>(s.text="text",s.string="string",s.number="number",s.boolean="boolean",s.select="select",s.array="array",s.object="object",s))(e||{}),o=(s=>(s.adaptive="Adaptive",s.status="Status",s.value="Values",s.style="Styles",s.technical="Technical",s.hook="Hook",s))(o||{});class q{constructor(t,i){this.name=t,this.item=i}getName(){return this.name}getValue(){return this.item.options.value}getOrder(){if(this.item.options.order)return this.item.options.order;switch(this.item.options.category){case o.status:return 3e3;case o.value:return 5e3;case o.style:return 9e3;default:return 9999}}to(){switch(this.item.type){case e.text:case e.string:return this.toString();case e.number:return this.toNumber();case e.boolean:return this.toBoolean();case e.select:return this.toSelect();case e.object:case e.array:return this.toObject()}}getCategory(){const t=this.item.options.category;return t?{category:t}:{}}getDefaultValue(){const t=this.item.options.type,i=this.item.options.defaultValue;let n;if(i!==void 0)switch(typeof i){case"boolean":n=i?"true":"false";break;default:n=String(i);break}else t==="boolean"&&(n="false");return n?{defaultValue:{summary:n}}:{}}getDescription(){const t=d.getLanguage(),i=this.item.options.description;let n;return typeof i=="string"?n=i:p(i)&&t in i&&(n=i[t]),n?{description:n}:{}}getType(){const t=this.item.options.type,i=this.item.options.options;let n;if(i)c(i)?n=i.join(" | "):p(i)&&(n=Object.keys(i).join(" | "));else if(t)c(t)?n=t.join(" | "):n=t;else switch(this.item.type){case e.select:n=String(e.object);break;case e.text:n=String(e.string);break;default:n=String(this.item.type)}return n?{type:{summary:n}}:{}}toBoolean(){return{control:e.boolean,table:{...this.getCategory(),...this.getDefaultValue(),...this.getType()},...this.getDescription()}}toNumber(){const t=this.item.options,i={type:e.number},n={...this.getCategory(),...this.getDefaultValue(),...this.getType()};return"min"in t&&(i.min=t.min),"max"in t&&(i.min=t.max),{control:i,table:n,...this.getDescription()}}toObject(){return{control:e.object,table:{...this.getCategory(),...this.getType()},...this.getDescription()}}toSelect(){return{control:e.select,options:this.item.options.options,table:{...this.getCategory(),...this.getDefaultValue(),...this.getType()},...this.getDescription()}}toString(){return{control:e.text,table:{...this.getCategory(),...this.getDefaultValue(),...this.getType()},...this.getDescription()}}}class se{constructor(t,i,n,a={},r={},m=[]){this.component=t,this.props=i,this.defaults=n,this.wikiDesign=a,this.wikiBasic=r,this.wikiDescriptions=m,this.list=this.initList()}list;getName(){return this.component}getWiki(){return this.initPropsWiki()}getDescription(){return this.toDescriptionText(this.getDescriptionItem()?.description)}getValues(){const t={};return this.list.forEach(i=>{t[i.getName()]=i.getValue()}),t}getStoryItem(t){const i=this.getDescriptionItem();if(i&&i.stories)return i.stories.find(n=>n.id===t)}getStoryName(t){return this.toDescriptionText(this.getStoryItem(t)?.name)}getWikiItem(t){if(t in this.wikiBasic||t in this.wikiDesign)return{...this.wikiBasic?.[t]??{},...this.wikiDesign?.[t]??{}}}getDescriptionItem(){return this.wikiDescriptions.find(t=>t.name===this.component)}toWikiItemChanged(t,i){return{...i,options:{...i.options,type:i.options?.type??t.type,defaultValue:this.defaults[t.name],options:t.option??i.options?.options??void 0}}}toDescriptionText(t){if(t){const i=d.getLanguage();return p(t)?String(t?.[i]??Object.values(t)?.[0]):t}return""}initList(){const t=[];return this.props.forEach(i=>{const n=`${y(this.component)}.${i.name}`,a=this.getWikiItem(n)??this.getWikiItem(i.name);a?t.push(new q(i.name,this.toWikiItemChanged(i,a))):console.error(`[WikiStorybook] ${i.name} not found`)}),t.sort((i,n)=>{const a=i.getOrder(),r=n.getOrder();return a===r?i.getName()>n.getName()?1:-1:a>r?1:-1}),t}initPropsWiki(){const t={};return this.list.forEach(i=>{t[i.getName()]=i.to()}),t}}const W={active:{type:e.boolean,options:{category:o.status,description:{en:"Sets the element to an active state",ru:"Переводит элемент в активное состояние"}}},barsBackHide:{type:e.boolean,options:{category:o.status,description:{en:"Hides the back button in the bars header",ru:"Скрывает кнопку «назад» в заголовке бара"}}},barsHide:{type:e.boolean,options:{category:o.status,description:{en:"Hides the bars (header toolbar)",ru:"Скрывает бар (верхнюю панель)"}}},disabled:{type:e.boolean,options:{category:o.status,description:{en:"Sets the element to an inactive state",ru:"Переводит элемент в неактивное состояние"}}},focus:{type:e.boolean,options:{category:o.status,description:{en:"Visual focus state",ru:"Визуальное состояние фокуса"}}},forceShow:{type:e.boolean,options:{category:o.status,description:{en:"Forces the display of the element regardless of other conditions",ru:"Принудительно отображает элемент независимо от других условий"}}},forceShowMessage:{type:e.boolean,options:{category:o.status,description:{en:"Forces display of helper / validation message ignoring usual visibility rules",ru:"Принудительно показывает сообщение (helper / validation), игнорируя обычные условия видимости"}}},hide:{type:e.boolean,options:{category:o.status,description:{en:"Hides the element",ru:"Скрывает элемент"}}},iconHide:{type:e.boolean,options:{category:o.status,description:{en:"Hides the icon",ru:"Скрывает иконку"}}},iconTurn:{type:e.boolean,options:{category:o.status,description:{en:"Turns the icon",ru:"Поворачивает иконку"}}},isValue:{type:e.boolean,options:{category:o.status,description:{en:"Indicates that the control has a value and adjusts visuals (e.g., floating label)",ru:"Указывает, что у элемента есть значение, и корректирует визуальное состояние (например, плавающая метка)"}}},loading:{type:e.boolean,options:{category:o.status,description:{en:"Sets the element to a loading state",ru:"Переводит элемент в состояние загрузки"}}},open:{type:e.boolean,options:{category:o.status,description:{en:"Sets the element to an open state",ru:"Переводит элемент в открытое состояние"}}},readonly:{type:e.boolean,options:{category:o.status,description:{en:"Read-only state of the element",ru:"Состояние только для чтения элемента"}}},selected:{type:e.boolean,options:{category:o.status,description:{en:"Selected state of the element",ru:"Состояние выбора элемента"}}},turn:{type:e.boolean,options:{category:o.status,description:{en:"Rotates the element by 180 degrees",ru:"Поворачивает элемент на 180 градусов"}}},visible:{type:e.boolean,options:{category:o.status,description:{en:"Controls the visibility of the component",ru:"Управляет видимостью компонента"}}}},j={badge:{type:e.string,options:{category:o.value,type:"string",description:{en:"Badge text or value to display",ru:"Текст или значение значка для отображения"}}},badgeDot:{type:e.boolean,options:{category:o.value,description:{en:"Display badge as a dot indicator",ru:"Отображать значок как точечный индикатор"}}},barsDescription:{type:e.string,options:{category:o.value,type:"string",description:{en:"Description text displayed in the bars area (subtitle/help)",ru:"Текст описания, отображаемый в области бара (подзаголовок/подсказка)"}}},barsLabel:{type:e.string,options:{category:o.value,type:["string","number"],description:{en:"Label or numeric indicator shown in the bars header",ru:"Метка или числовой индикатор, отображаемый в заголовке бара"}}},barsList:{type:e.object,options:{category:o.value,description:{en:"Array of buttons displayed in the bars area (actions)",ru:"Массив кнопок, отображаемых в области бара (действия)"},value:[{icon:"home",label:"Home"},{icon:"search",label:"Search"},{icon:"settings",label:"Settings"}]}},caption:{type:e.string,options:{category:o.value,type:"string",description:{en:"Caption text for additional information",ru:"Текст подписи для дополнительной информации"},value:"Caption"}},counter:{type:e.number,options:{category:o.value,type:["number","string"],description:{en:"Current character count",ru:"Текущее количество символов"},value:25}},currency:{type:e.string,options:{category:o.value,type:"string",description:{en:"Currency code for formatting monetary values",ru:"Код валюты для форматирования денежных значений"}}},language:{type:e.string,options:{category:o.value,type:"string",description:{en:"Language/locale code (BCP 47) used for formatting values (e.g., en-US, ru-RU)",ru:"Код языка/локали (BCP 47) для форматирования значений (например, ru-RU, en-US)"}}},description:{type:e.string,options:{category:o.value,type:"string",description:{en:"Description text providing additional context",ru:"Текст описания, предоставляющий дополнительный контекст"},value:"Here is a detailed description of the component"}},detail:{type:e.object,options:{category:o.value,type:"Record<string, any>",description:{en:"Additional data passed by the component when events are triggered",ru:"Дополнительные данные, передаваемые компонентом при срабатывании событий"}}},formatting:{type:e.boolean,options:{category:o.value,description:{en:"Whether to format values before displaying",ru:"Нужно ли форматировать значения перед отображением"}}},fraction:{type:e.string,options:{category:o.value,type:["string","number","boolean"],description:{en:"Fraction configuration for numeric masks (digits count or special mode)",ru:"Настройка дробной части для числовых масок (количество знаков или режим)"}}},helperMessage:{type:e.string,options:{category:o.value,type:"string",description:{en:"Helper text providing guidance or additional information",ru:"Вспомогательный текст, предоставляющий руководство или дополнительную информацию"},value:"This is a helpful message"}},highlight:{type:e.string,options:{category:o.value,type:"string",description:{en:"Text to highlight within the component content",ru:"Текст для выделения в содержимом компонента"}}},highlightLengthStart:{type:e.number,options:{category:o.value,type:"number",description:{en:"Minimum length of highlight value to start highlighting",ru:"Минимальная длина значения highlight для начала выделения"}}},keyLabel:{type:e.string,options:{category:o.value,type:"string",description:{en:"Object key to use as label text",ru:"Ключ объекта для использования в качестве текста метки"}}},keyValue:{type:e.string,options:{category:o.value,type:"string",description:{en:"Object key to use as value text",ru:"Ключ объекта для использования в качестве текста значения"}}},icon:{type:e.string,options:{category:o.value,type:["string","File"],description:{en:"Value of the main icon",ru:"Значение основной иконки"},value:"home"}},iconTrailing:{type:e.string,options:{category:o.value,type:["string","File"],description:{en:"Value of the trailing icon",ru:"Значение завершающей иконки"}}},image:{type:e.string,options:{category:o.value,type:"string | File | ImageProps",description:{en:"Specifies the image value for the component",ru:"Указывает значение изображения для компонента"}}},index:{type:e.number,options:{category:o.value,type:"number",description:{en:"Index value for the component",ru:"Значение индекса для компонента"}}},label:{type:e.string,options:{category:o.value,type:"string",description:{en:"Text label for the component",ru:"Текстовая метка для компонента"},value:"Label"}},labelMax:{type:e.number,options:{category:o.value,type:"number",description:{en:"Maximum length of the label text before truncation",ru:"Максимальная длина текста метки перед обрезкой"}}},max:{type:e.number,options:{category:o.value,type:["number","string"],description:{en:"Maximum value",ru:"Максимальное значение"}}},maxlength:{type:e.number,options:{category:o.value,type:["number","string"],description:{en:"Maximum allowed characters",ru:"Максимально допустимое количество символов"},value:100}},name:{type:e.string,options:{category:o.value,type:"string",description:{en:"Name attribute for the input field",ru:"Атрибут name для поля ввода"}}},prefix:{type:e.string,options:{category:o.value,type:"string",description:{en:"Prefix text displayed before the main content",ru:"Текст префикса, отображаемый перед основным содержимым"},value:"Prefix"}},required:{type:e.boolean,options:{category:o.value,description:{en:"Marks the field as required and shows the required indicator",ru:"Помечает поле как обязательное и показывает индикатор обязательности"}}},suffix:{type:e.string,options:{category:o.value,type:"string",description:{en:"Suffix text displayed after the main content",ru:"Текст суффикса, отображаемый после основного содержимого"},value:"Suffix"}},to:{type:e.string,options:{category:o.value,type:"RouteLocationRaw",description:{en:"Navigation target or destination for the component",ru:"Цель навигации или назначение для компонента"}}},validationMessage:{type:e.string,options:{category:o.value,type:"string",description:{en:"Error or validation message text",ru:"Текст сообщения об ошибке или валидации"}}},valueDefault:{type:e.string,options:{category:o.value,type:["string","number"],description:{en:"Default value for the input field",ru:"Значение по умолчанию для поля ввода"}}},value:{type:e.string,options:{category:o.value,type:["number","string"],description:{en:"Current value",ru:"Текущее значение"}}}},V={adaptive:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Controls adaptive display behavior for different screen sizes and media queries",ru:"Управляет адаптивным поведением отображения для разных размеров экрана и медиа‑запросов"}}},align:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"General alignment depending on component semantics",ru:"Общее выравнивание в зависимости от семантики компонента"}}},asPalette:{type:e.boolean,options:{category:o.style,description:{en:"Sets color based on palette class; otherwise uses default color",ru:"Задает цвет на основе класса палитры; иначе используется стандартный цвет"}}},autoClose:{type:e.boolean,options:{category:o.style,description:{en:"Closes the window/menu when clicking inside the content area",ru:"Закрывает окно/меню при клике внутри области содержимого"}}},barsAdaptive:{type:e.select,options:{category:o.style,description:{en:"Indicates whether the bars (header toolbar) should be shown",ru:"Показывает, нужно ли отображать бар (верхнюю панель)"}}},barsAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for the bars (header toolbar) container",ru:"Дополнительные атрибуты для контейнера бара (верхней панели)"}}},block:{type:e.boolean,options:{category:o.style,description:{en:"Enables block mode (component expands to full width)",ru:"Включает блочный режим (компонент растягивается на всю ширину)"}}},buttonAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for button elements",ru:"Дополнительные атрибуты для элементов кнопок"}}},axis:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets the axis direction for component layout or scrolling",ru:"Задает направление оси для раскладки или прокрутки компонента"}}},container:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Controls container‑based layout behavior with adaptive width constraints",ru:"Управляет контейнерной раскладкой с адаптивными ограничениями ширины"}}},counterShow:{type:e.boolean,options:{category:o.style,description:{en:"Shows the counter element",ru:"Показывает элемент счетчика"}}},counterTemplate:{type:e.string,options:{category:o.style,type:"string",description:{en:"Custom display template for the counter component",ru:"Пользовательский шаблон отображения для компонента счетчика"}}},counterTop:{type:e.boolean,options:{category:o.style,description:{en:"Displays the counter above the field",ru:"Отображает счетчик над полем"}}},dense:{type:e.boolean,options:{category:o.style,description:{en:"Enables compact display variant",ru:"Включает компактный вариант отображения"}}},dir:{type:e.boolean,options:{category:o.style,description:{en:"Mirrors the component depending on site direction (RTL/LTR)",ru:"Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)"}}},divider:{type:e.boolean,options:{category:o.style,description:{en:"Enables visual divider between elements",ru:"Включает визуальный разделитель между элементами"}}},dividerLabel:{type:e.select,options:{category:o.style,type:"string",description:{en:"Adds divider only under the label",ru:"Добавляет разделитель только под меткой"}}},dot:{type:e.boolean,options:{category:o.style,description:{en:"Displays the component as a dot indicator",ru:"Отображает компонент как точечный индикатор"}}},dynamic:{type:e.boolean,options:{category:o.style,description:{en:"Enables dynamic reactions to hover and focus",ru:"Включает динамическую реакцию на hover и focus"}}},dynamicHover:{type:e.boolean,options:{category:o.style,description:{en:"Enables dynamic hover effect for the component",ru:"Включает динамический эффект наведения для компонента"}}},fieldCounterAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for the field counter component",ru:"Дополнительные атрибуты для компонента счетчика поля"}}},fieldLabelAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for the FieldLabel element",ru:"Дополнительные атрибуты для элемента FieldLabel"}}},fieldMessageAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for the FieldMessage element",ru:"Дополнительные атрибуты для элемента FieldMessage"}}},fill:{type:e.string,options:{category:o.style,type:"string",description:{en:"Sets fill color for the component",ru:"Задает цвет заливки компонента"}}},grid:{type:e.boolean,options:{category:o.style,description:{en:"Enables grid layout mode",ru:"Включает режим сетки"}}},height:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets component height",ru:"Задает высоту компонента"}}},horizontal:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets horizontal alignment of elements",ru:"Задает горизонтальное выравнивание элементов"}}},iconAlign:{type:e.select,options:{category:o.style,type:"string",options:["center","text"],description:{en:"Sets icon alignment within the component",ru:"Задает выравнивание иконки внутри компонента"}}},iconAttrs:{type:e.object,options:{category:o.style,description:{en:"Sets additional attributes for the icon element",ru:"Задает дополнительные атрибуты для элемента иконки"}}},iconDir:{type:e.boolean,options:{category:o.style,description:{en:"Mirrors the icon depending on site direction (RTL/LTR)",ru:"Зеркально отражает иконку в зависимости от направления сайта (RTL/LTR)"}}},iconPalette:{type:e.boolean,options:{category:o.style,description:{en:"Sets icon color based on palette class",ru:"Задает цвет иконки на основе класса палитры"}}},iconTop:{type:e.boolean,options:{category:o.style,description:{en:"Aligns icon to the top of the container",ru:"Выравнивает иконку по верхнему краю контейнера"}}},iconClose:{type:e.string,options:{category:o.style,description:{en:"Sets icon for close button",ru:"Задает иконку для кнопки закрытия"}}},iconCancel:{type:e.string,options:{category:o.style,description:{en:"Sets icon for cancel/clear action",ru:"Задает иконку для действия отмены/очистки"}}},iconBack:{type:e.string,options:{category:o.style,description:{en:"Sets icon for back button",ru:"Задает иконку для кнопки назад"}}},iconArrowDown:{type:e.string,options:{category:o.style,description:{en:"Sets icon for down arrow",ru:"Задает иконку стрелки вниз"}}},iconArrowLeft:{type:e.string,options:{category:o.style,description:{en:"Sets icon for left arrow",ru:"Задает иконку стрелки влево"}}},iconArrowRight:{type:e.string,options:{category:o.style,description:{en:"Sets icon for right arrow",ru:"Задает иконку стрелки вправо"}}},iconMinus:{type:e.string,options:{category:o.style,description:{en:"Sets icon for decrement / minus action",ru:"Задает иконку для действия уменьшения (минус)"}}},iconPlus:{type:e.string,options:{category:o.style,description:{en:"Sets icon for increment / plus action",ru:"Задает иконку для действия увеличения (плюс)"}}},inputAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for the native input element",ru:"Дополнительные атрибуты для нативного элемента input"}}},iconTrailingDirOnly:{type:e.boolean,options:{category:o.style,description:{en:"Applies direction mirroring only to the trailing icon",ru:"Применяет зеркальное отражение только к завершающей иконке"}}},iconTrailingPalette:{type:e.boolean,options:{category:o.style,description:{en:"Sets trailing icon color based on palette class",ru:"Задает цвет завершающей иконки на основе класса палитры"}}},iconTrailingTurnOnly:{type:e.boolean,options:{category:o.style,description:{en:"Applies rotation only to the trailing icon",ru:"Применяет поворот только к завершающей иконке"}}},inverse:{type:e.boolean,options:{category:o.style,description:{en:"Inverts component colors",ru:"Инвертирует цвета компонента"}}},isSkeleton:{type:e.boolean,options:{category:o.style,description:{en:"Displays the component in skeleton mode",ru:"Отображает компонент в режиме скелетона"}}},overlay:{type:e.boolean,options:{category:o.style,description:{en:"Adds background overlay to the component",ru:"Добавляет фоновую подложку к компоненту"}}},overlap:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Defines element positioning relative to other elements",ru:"Определяет расположение элемента относительно других элементов"}}},padding:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets internal spacing around the content",ru:"Задает внутренние отступы вокруг содержимого"}}},palette:{type:e.select,options:{category:o.style,options:[],type:"string",description:{en:"Sets color palette for the element",ru:"Задает цветовую палитру для элемента"}}},rounded:{type:e.select,options:{category:o.style,options:[],type:"string",description:{en:"Adds rounded corners to the component",ru:"Добавляет скругленные углы компоненту"}}},roundedFull:{type:e.boolean,options:{category:o.style,description:{en:"Makes the component fully rounded (circular)",ru:"Делает компонент полностью скругленным (круглым)"}}},scrollbarAttrs:{type:e.object,options:{category:o.style,description:{en:"Sets attributes for the internal scrollbar",ru:"Задает атрибуты встроенного скроллбара"}}},size:{type:e.select,options:{category:o.style,options:[],type:"string",description:{en:"Sets component size",ru:"Задает размер компонента"}}},tag:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets HTML tag for the component element",ru:"Задает HTML‑тег для элемента компонента"}}},textAlign:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets text alignment within the element",ru:"Задает выравнивание текста внутри элемента"}}},template:{type:e.string,options:{category:o.style,type:"string",description:{en:"Custom display template used by the component",ru:"Пользовательский шаблон отображения, используемый компонентом"}}},type:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Selects the visual type/variant of the component",ru:"Выбирает визуальный тип/вариант компонента"}}},windowAttrs:{type:e.object,options:{category:o.style,description:{en:"Additional attributes for the Window root container",ru:"Дополнительные атрибуты для корневого контейнера Window"}}},vertical:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets vertical alignment of elements",ru:"Задает вертикальное выравнивание элементов"}}},width:{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Sets component width",ru:"Задает ширину компонента"}}}},H={modelOpen:{type:e.boolean,options:{category:o.technical,description:{en:"Two-way binding for open state (v-model:open)",ru:"Двусторонняя привязка состояния открытия (v-model:open)"}}},modelValue:{type:e.object,options:{category:o.technical,description:{en:"Two-way binding for component value (v-model)",ru:"Двусторонняя привязка значения компонента (v-model)"}}}},z={"onUpdate:modelOpen":{type:e.object,options:{category:o.hook,description:{en:"Event handler called on update:modelOpen with the new boolean value",ru:"Обработчик события update:modelOpen, вызывается с новым булевым значением"}}},"onUpdate:modelValue":{type:e.object,options:{category:o.hook,description:{en:"Event handler called on update:modelValue with the new value",ru:"Обработчик события update:modelValue, вызывается с новым значением"}}},"onUpdate:open":{type:e.object,options:{category:o.hook,description:{en:"Event handler called on update:open with the new boolean value",ru:"Обработчик события update:open, вызывается с новым булевым значением"}}},"onUpdate:value":{type:e.object,options:{category:o.hook,description:{en:"Event handler called on update:value with the new value",ru:"Обработчик события update:value, вызывается с новым значением"}}}},O={"badge.outline":{type:e.boolean,options:{category:o.style,description:{en:"Outline variant of the badge with transparent background and border",ru:"Контурный вариант бейджа с прозрачным фоном и границей"}}},"badge.primary":{type:e.boolean,options:{category:o.style,description:{en:"Primary color variant for the badge with high contrast and emphasis",ru:"Основной цветовой вариант бейджа с высоким контрастом и акцентом"}}},"badge.secondary":{type:e.boolean,options:{category:o.style,description:{en:"Secondary color variant for the badge with moderate contrast",ru:"Второстепенный цветовой вариант бейджа с умеренным контрастом"}}}},R={"bars.action":{type:e.boolean,options:{category:o.status,description:{en:"Enables action mode",ru:"Включает режим действия"}}},"bars.actionBars":{type:e.object,options:{category:o.value,description:{en:"An array of buttons for the action",ru:"Массив кнопок для действия"},value:[{icon:"share"},{icon:"edit"},{icon:"delete"}]}},"bars.actionDescription":{type:e.text,options:{category:o.value,description:{en:"Description for the action",ru:"Описание для действия"},value:"Select items to perform actions"}},"bars.actionLabel":{type:e.text,options:{category:o.value,description:{en:"Label for the action",ru:"Метка для действия"},value:"Action"}},"bars.backButton":{type:e.object,options:{category:o.style,description:{en:"Provides configuration for the back button",ru:"Предоставляет конфигурацию для кнопки назад"}}},"bars.backActionHide":{type:e.boolean,options:{category:o.style,description:{en:"Hide back button in action",ru:"Скрыть кнопку назад в action"}}},"bars.backHide":{type:e.boolean,options:{category:o.style,description:{en:"Hides the back button",ru:"Скрывает кнопку назад"}}},"bars.bars":{type:e.object,options:{category:o.value,description:{en:"An array of buttons to be displayed in the bar",ru:"Массив кнопок для отображения в баре"},value:[{icon:"home",label:"Home"},{icon:"search",label:"Search"},{icon:"settings",label:"Settings"}]}},"bars.modelAction":{type:e.boolean,options:{category:o.technical,description:{en:"Two-way binding for action state (v-model:action)",ru:"Двусторонняя привязка состояния action (v-model:action)"}}},"bars.onUpdate:action":{type:e.object,options:{category:o.hook,description:{en:"Event handler called on update:action with the new boolean value",ru:"Обработчик события update:action, вызывается с новым булевым значением"}}},"bars.onUpdate:modelAction":{type:e.object,options:{category:o.hook,description:{en:"Event handler called on update:modelAction with the new boolean value",ru:"Обработчик события update:modelAction, вызывается с новым булевым значением"}}}},U={"button.outline":{type:e.boolean,options:{category:o.style,description:{en:"Outline button style",ru:"Стиль кнопки с обводкой"}}},"button.primary":{type:e.boolean,options:{category:o.style,description:{en:"Primary button style",ru:"Основной стиль кнопки"}}},"button.secondary":{type:e.boolean,options:{category:o.style,description:{en:"Secondary button style",ru:"Вторичный стиль кнопки"}}},"button.text":{type:e.boolean,options:{category:o.style,description:{en:"Text button style",ru:"Текстовый стиль кнопки"}}}},G={"chip.assistive":{type:e.boolean,options:{category:o.style,description:{en:"Alternative visual appearance style",ru:"Альтернативный стиль внешнего вида"}}},"chip.input":{type:e.boolean,options:{category:o.style,description:{en:"Input-style visual appearance",ru:"Внешний вид в стиле поля ввода"}}}},X={"field.arrowCarousel":{type:e.boolean,options:{category:o.style,description:{en:"Shows horizontal navigation arrows (carousel left/right)",ru:"Отображает горизонтальные стрелки навигации (карусель влево/вправо)"}}},"field.arrowStepper":{type:e.boolean,options:{category:o.style,description:{en:"Shows numeric step controls (+ / -) for increment / decrement",ru:"Отображает числовые степперы (+ / -) для инкремента / декремента"}}},"field.basic":{type:e.boolean,options:{category:o.style,description:{en:"Basic variant for Field without fill and border",ru:"Базовый вариант Field без заливки и рамки"}}},"field.boxed":{type:e.boolean,options:{category:o.style,description:{en:"Boxed variant for Field with both fill and border",ru:"Вариант Field с заливкой и рамкой (boxed)"}}},"field.cancel":{type:e.select,options:{category:o.style,options:["auto","always"],description:{en:"Cancel button mode: auto (show only if cancelShow + active, no arrows) or always (force unless disabled/readonly or arrows).",ru:"Режим кнопки очистки: auto (показывать если cancelShow и активен, без стрелок) или always (всегда, кроме disabled/readonly или стрелок)."}}},"field.cancelShow":{type:e.boolean,options:{category:o.status,description:{en:"Used only when cancel=auto: allows showing cancel (обычно при наличии значения). Ignored for always.",ru:"Работает только при cancel=auto: разрешает показ (обычно при значении). Игнорируется для always."}}},"field.classic":{type:e.boolean,options:{category:o.style,description:{en:"Classic variant for Field with standard border and no fill",ru:"Классический вариант Field со стандартной рамкой без заливки"}}},"field.disabledNext":{type:e.boolean,options:{category:o.status,description:{en:"Disables the next navigation control (right / plus)",ru:"Отключает кнопку следующего управления (вправо / плюс)"}}},"field.disabledPrevious":{type:e.boolean,options:{category:o.status,description:{en:"Disables the previous navigation control (left / minus)",ru:"Отключает кнопку предыдущего управления (влево / минус)"}}},"field.filled":{type:e.boolean,options:{category:o.style,description:{en:"Filled variant for Field with background fill",ru:"Залитый вариант Field с фоновым заполнением"}}},"field.outlined":{type:e.boolean,options:{category:o.style,description:{en:"Outline variant for Field with bordered style",ru:"Контурный вариант Field с акцентной рамкой"}}},"field.tonal":{type:e.boolean,options:{category:o.style,description:{en:"Tonal variant for Field with toned background and softer contrast",ru:"Тональный вариант Field с приглушенной заливкой и мягким контрастом"}}}},Y={"icon.active":{type:e.boolean,options:{category:o.status,description:{en:"Sets the icon to an active state",ru:"Переводит иконку в активное состояние"}}},"icon.icon":{type:e.string,options:{category:o.value,type:["string","File"],description:{en:"Value of the main icon",ru:"Значение основной иконки"},value:"visibility"}},"icon.iconActive":{type:e.string,options:{category:o.value,type:["string","File"],description:{en:"Value of the active icon",ru:"Значение активной иконки"},value:"visibility_off"}},"icon.start":{type:e.boolean,options:{category:o.style,description:{en:"Sorts the element to the beginning",ru:"Сортирует элемент в начало"}}},"icon.end":{type:e.boolean,options:{category:o.style,description:{en:"Sorts the element to the end",ru:"Сортирует элемент в конец"}}},"icon.high":{type:e.boolean,options:{category:o.style,description:{en:"Raises the element above others",ru:"Поднимает элемент над другими"}}},"icon.rect":{type:e.boolean,options:{category:o.style,description:{en:"Makes the element rectangular",ru:"Делает элемент прямоугольным"}}},"icon.circle":{type:e.boolean,options:{category:o.style,description:{en:"Makes the element circular",ru:"Делает элемент круглым"}}},"icon.square":{type:e.boolean,options:{category:o.style,description:{en:"Makes the element square",ru:"Делает элемент квадратным"}}},"icon.animationType":{type:e.select,options:{category:o.style,options:["type1","type2"],description:{en:"Defines the animation type for hide/show transitions",ru:"Определяет тип анимации при скрытии/появлении"}}},"icon.animationShow":{type:e.boolean,options:{category:o.style,description:{en:"Enables animation on first appearance",ru:"Включает анимацию при первом появлении"}}}},K={"image.value":{type:e.string,options:{category:o.value,type:["string","File"],description:{en:"Accepts the name of an icon, a link to an image, a File object, or a link to a PDF file",ru:"Принимает название иконки, ссылку на изображение, объект File или ссылку на PDF файл"},value:"rocket_launch"}},"image.url":{type:e.string,options:{category:o.value,description:{en:"Specifies the path to the folder containing images",ru:"Указывает путь к папке с изображениями"}}},"image.adaptive":{type:e.boolean,options:{category:o.adaptive,description:{en:"Adjusts the image size for proportional alignment with other elements",ru:"Регулирует размер изображения для пропорционального выравнивания относительно других элементов"}}},"image.objectWidth":{type:e.number,options:{category:o.adaptive,description:{en:"Defines the physical width of an element on the image for adaptive alignment",ru:"Указывает физическую ширину элемента на изображении для адаптивного выравнивания"}}},"image.objectHeight":{type:e.number,options:{category:o.adaptive,description:{en:"Defines the physical height of an element on the image for adaptive alignment",ru:"Указывает физическую высоту элемента на изображении для адаптивного выравнивания"}}},"image.adaptiveGroup":{type:e.string,options:{category:o.adaptive,description:{en:"Groups elements related to adaptiveness",ru:"Группирует элементы, связанные с адаптивностью"}}},"image.adaptiveAlways":{type:e.boolean,options:{category:o.adaptive,description:{en:"Continuously calculates the image size, even when the element is off-screen",ru:"Постоянно вычисляет размер изображения, даже если элемент находится вне экрана"}}},"image.coordinator":{type:e.array,options:{category:o.style,type:"number[]",description:{en:"Defines the crop area of the image, accepting an array of values for top, right, bottom, and left",ru:"Определяет область обрезки изображения, принимает массив значений для top, right, bottom, left"}}},"image.x":{type:e.string,options:{category:o.style,description:{en:"Moves the image along the X-axis, accepts a string in % or px format",ru:"Сдвигает изображение по оси X, принимает строку в формате % или px"}}},"image.y":{type:e.string,options:{category:o.style,description:{en:"Moves the image along the Y-axis, accepts a string in % or px format",ru:"Сдвигает изображение по оси Y, принимает строку в формате % или px"}}}},l={"list.control":{type:e.boolean,options:{category:o.technical,description:{en:"Control object for managing list state and behavior. Provides programmatic access to list operations like navigation, selection, and focus management.",ru:"Объект управления для контроля состояния и поведения списка. Предоставляет программный доступ к операциям списка, таким как навигация, выбор и управление фокусом."}}},"list.focus":{type:e.string,options:{category:o.status,description:{en:"Selected item for focus state. Defines which item should be visually focused in the list.",ru:"Выбранный элемент для состояния фокуса. Определяет, какой элемент должен быть визуально сфокусирован в списке."}}},"list.itemAttrs":{type:e.object,options:{category:o.style,description:{en:"Additional attributes to apply to each list item element. Allows customization of HTML attributes for individual list items.",ru:"Дополнительные атрибуты для применения к каждому элементу списка. Позволяет настраивать HTML-атрибуты для отдельных элементов списка."}}},"list.itemGroupAttrs":{type:e.object,options:{category:o.style,description:{en:"Additional attributes for group container elements in the list.",ru:"Дополнительные атрибуты для элементов контейнера группы в списке."}}},"list.itemManagementAttrs":{type:e.object,options:{category:o.style,description:{en:"Additional attributes for management control elements in the list.",ru:"Дополнительные атрибуты для элементов управления в списке."}}},"list.itemMenuAttrs":{type:e.object,options:{category:o.style,description:{en:"Additional attributes for menu container elements in the list.",ru:"Дополнительные атрибуты для элементов контейнера меню в списке."}}},"list.list":{type:e.array,options:{category:o.value,description:{en:"Array of list items data. Contains the data for all items to be rendered in the list.",ru:"Массив данных элементов списка. Содержит данные для всех элементов, которые должны быть отображены в списке."},value:[{label:"Запустить проект",value:"launch-project",icon:"play_arrow"},{label:"Управление задачами",value:"task-management",icon:"assignment"},{type:"space"},{label:"Команда",value:"team",icon:"group",badge:"12"},{label:"Аналитика и отчеты",value:"analytics",icon:"analytics",description:"Просмотр статистики"},{type:"subtitle",label:"Инструменты"},{label:"Настройки системы",value:"settings",icon:"settings",disabled:!0},{label:"Файловый менеджер",value:"file-manager",icon:"folder",suffix:245},{type:"group",index:"g1",label:"Маркетинг",value:[{label:"Email рассылки",value:"email-campaigns",icon:"email"},{label:"Социальные сети",value:"social-media",icon:"share"},{label:"Реклама",value:"ads",icon:"ads_click"}],icon:"campaign"},{type:"group",index:"g2",label:"Разработка",value:[{label:"Репозиторий кода",value:"repository",icon:"code"},{label:"Система сборки",value:"build-system",icon:"build"},{type:"group",index:"g2-1",label:"Тестирование",value:[{label:"Unit тесты",value:"unit-tests",icon:"science"},{label:"Интеграционные тесты",value:"integration-tests",icon:"integration_instructions"},{label:"E2E тесты",value:"e2e-tests",icon:"web"}],icon:"bug_report"},{label:"Документация API",value:"api-docs",icon:"description"}],icon:"developer_mode"},{type:"menu",index:"m1",label:"Администрирование",value:[{label:"Управление пользователями",value:"user-management",icon:"people"},{label:"Права доступа",value:"permissions",icon:"security"},{type:"menu",index:"m1-1",label:"Системные настройки",value:[{label:"Конфигурация сервера",value:"server-config",icon:"dns"},{label:"База данных",value:"database-config",icon:"storage"},{label:"Резервное копирование",value:"backup",icon:"backup"}],icon:"tune"},{label:"Мониторинг системы",value:"monitoring",icon:"monitor_heart"}],icon:"admin_panel_settings"},{type:"line"},{label:"Уведомления",value:"notifications",icon:"notifications",badge:"Новое"},{label:"Избранное",value:"favorites",icon:"star"}]}},"list.lite":{type:e.boolean,options:{category:o.status,description:{en:"Enable lightweight display mode. Reduces visual complexity by showing simplified item styling with minimal decorative elements.",ru:"Включить упрощенный режим отображения. Уменьшает визуальную сложность, показывая упрощенную стилизацию элементов с минимальными декоративными элементами."}}},"list.liteThreshold":{type:e.number,options:{category:o.style,description:{en:"Threshold value that works when lite mode is enabled (lite: true). Defines the maximum number of items before additional optimizations are applied in lite mode.",ru:"Пороговое значение, которое работает когда включен lite режим (lite: true). Определяет максимальное количество элементов перед применением дополнительных оптимизаций в lite режиме."}}},"list.selected":{type:e.string,options:{category:o.status,description:{en:"List of selected items. Contains all currently selected items in the list for multi-selection scenarios.",ru:"Список выбранных элементов. Содержит все текущие выбранные элементы списка для сценариев множественного выбора."}}}},$={"listItem.listId":{type:e.string,options:{category:o.technical,description:{en:"Unique identifier for the list item. Used for tracking and referencing specific items within the list structure.",ru:"Уникальный идентификатор элемента списка. Используется для отслеживания и ссылки на конкретные элементы в структуре списка."}}},"listItem.open":{type:e.boolean,options:{category:o.status,description:{en:"Visual open state of the list item",ru:"Визуальное открытое состояние элемента списка"}}},"listItem.parent":{type:e.string,options:{category:o.technical,description:{en:"Identifier of the parent element in hierarchical list structure. Used for establishing parent-child relationships between list items.",ru:"Идентификатор родительского элемента в иерархической структуре списка. Используется для установления связей родитель-ребенок между элементами списка."}}},"listItem.search":{type:e.string,options:{category:o.technical,type:"string",description:{en:"Technical property for internal search functionality",ru:"Техническое свойство для внутренней функциональности поиска"}}},"listItem.selectedChild":{type:e.boolean,options:{category:o.status,description:{en:"Indicates if any child element of this list item is selected",ru:"Указывает, выбран ли какой-либо дочерний элемент данного элемента списка"}}},"listItem.type":{type:e.string,options:{category:o.technical,type:"string",description:{en:"Technical property for internal type classification",ru:"Техническое свойство для внутренней классификации типов"}}}},J={"mask.check":{type:e.string,options:{category:o.value,type:["string","object","function"],description:{en:"Global validation pattern applied after mask completion for additional input checking",ru:"Глобальный паттерн валидации, применяемый после завершения маски для дополнительной проверки ввода"}}},"mask.match":{type:e.string,options:{category:o.value,type:["string","object","function"],description:{en:"Global match pattern for allowed characters (RegExp|string or per-group map)",ru:"Глобальный паттерн допустимых символов (RegExp|строка или карта по группам)"}}},"mask.currencyHide":{type:e.boolean,options:{category:o.value,description:{en:"Hide the currency symbol in the formatted value",ru:"Скрывать символ валюты в форматированном значении"}}},"mask.fullOnly":{type:e.boolean,options:{category:o.value,description:{en:"Treat input as valid only when the mask is fully completed",ru:"Считать ввод валидным только при полном заполнении маски"}}},"mask.groupSave":{type:e.boolean,options:{category:o.style,description:{en:"Controls cursor behavior when moving between different special character groups in the mask",ru:"Управляет поведением курсора при переходе между разными группами специальных символов в маске"},value:!0}},"mask.mask":{type:e.string,options:{category:o.value,type:["string","string[]"],description:{en:"Mask pattern: string or array. Special chars define input groups; others are literals. With multiple masks, the best match is chosen.",ru:"Шаблон маски: строка или массив. Спецсимволы — группы ввода, прочие — литералы. При нескольких масках выбирается подходящая."},value:"+1 (***) ***-****"}},"mask.pattern":{type:e.string,options:{category:o.value,type:["string","object","function"],description:{en:"Pattern definition for mask groups, defining allowed characters and validation rules per group",ru:"Определение паттернов для групп маски, задающее допустимые символы и правила валидации по группам"}}},"mask.special":{type:e.string,options:{category:o.value,type:["string","string[]","object"],description:{en:"Special characters definition for mask groups with advanced properties (rubber, defaults, patterns)",ru:"Определение специальных символов для групп маски с расширенными свойствами (резиновость, значения по умолчанию, паттерны)"},value:"*"}},"mask.view":{type:e.string,options:{category:o.style,type:"string",description:{en:"Display character used for placeholders in the mask view",ru:"Отображаемый символ, используемый как плейсхолдер в представлении маски"}}},"mask.visible":{type:e.boolean,options:{category:o.style,description:{en:"Controls complete visibility of the mask component and its placeholder characters",ru:"Управляет полной видимостью компонента маски и символов-заполнителей"},value:!0}},"mask.visiblePartly":{type:e.boolean,options:{category:o.style,description:{en:"Controls partial visibility of mask placeholder characters, showing only filled positions",ru:"Управляет частичной видимостью символов-заполнителей маски, показывая только заполненные позиции"}}}},Z={"menu.ajax":{type:e.object,options:{category:o.value,description:{en:"URL or function to load menu items asynchronously. Function may return a promise.",ru:"URL или функция для асинхронной загрузки пунктов меню. Функция может возвращать промис."}}},"menu.cache":{type:e.boolean,options:{category:o.status,description:{en:"Enables caching of loaded menu data to reduce network requests.",ru:"Включает кэширование загруженных данных меню для уменьшения сетевых запросов."}}},"menu.hideList":{type:e.boolean,options:{category:o.style,description:{en:"Hides the internal List part of Menu; shows only header/toolbar and other slots.",ru:"Скрывает внутреннюю часть List в Menu; отображает только заголовок/панель и другие слоты."}}},"menu.isSelectedByValue":{type:e.boolean,options:{category:o.technical,description:{en:"Enables v-model support for selected value with two-way data binding.",ru:"Включает поддержку v-model для выбранного значения с двусторонней привязкой данных."}}},"menu.itemAttrs":{type:e.object,options:{category:o.style,description:{en:"Additional attributes applied to each menu item.",ru:"Дополнительные атрибуты, применяемые к каждому пункту меню."}}},"menu.list":l["list.list"],"menu.listAttrs":{type:e.object,options:{category:o.style,description:{en:"Additional attributes applied to the menu list container.",ru:"Дополнительные атрибуты, применяемые к контейнеру списка меню."}}},"menu.liteThreshold":l["list.liteThreshold"],"menu.request":{type:e.object,options:{category:o.value,description:{en:"Custom request handler configuration for fetching menu data.",ru:"Пользовательская конфигурация обработчика запросов для получения данных меню."}}},"menu.selected":l["list.selected"]},Q={"motionTransform.animationHeadPosition":{type:e.select,options:{category:o.style,type:"string",options:[],description:{en:"Head behavior during animations",ru:"Поведение Head во время анимаций"}}},"motionTransform.animationShow":{type:e.boolean,options:{category:o.style,description:{en:"Enable or disable show/hide animations",ru:"Включение или отключение анимаций показа/скрытия"}}},"motionTransform.autoClose":{type:e.boolean,options:{category:o.style,description:{en:"Automatically close on outside click",ru:"Автоматическое закрытие при клике снаружи"}}},"motionTransform.clickOpen":{type:e.boolean,options:{category:o.style,description:{en:"Enable opening on click",ru:"Включение открытия по клику"}}},"motionTransform.ignore":{type:e.string,options:{category:o.value,description:{en:"Element id or selector to ignore in outside click checks",ru:"Идентификатор элемента или селектор, который игнорируется при проверках клика снаружи"}}},"motionTransform.ignoreSelector":{type:e.string,options:{category:o.value,description:{en:"CSS selector to ignore in outside click checks",ru:"CSS-селектор, который игнорируется при проверках клика снаружи"}}},"motionTransform.section":{type:e.boolean,options:{category:o.style,description:{en:"Enable section styling mode",ru:"Включение режима стилизации секции"}}}},ee={"progress.delay":{type:e.number,options:{category:o.style,type:["number","string"],description:{en:"Delay before showing the progress indicator in milliseconds",ru:"Задержка перед показом индикатора прогресса в миллисекундах"}}},"progress.delayHide":{type:e.number,options:{category:o.style,type:["number","string"],description:{en:"Delay before hiding the progress indicator in milliseconds",ru:"Задержка перед скрытием индикатора прогресса в миллисекундах"}}},"progress.point":{type:e.boolean,options:{category:o.style,description:{en:"Adds a point at the end of the progress indicator",ru:"Добавляет точку в конце индикатора прогресса"}}},"progress.linear":{type:e.boolean,options:{category:o.style,description:{en:"Enables linear progress bar display",ru:"Включает отображение линейной полосы прогресса"}}},"progress.circular":{type:e.boolean,options:{category:o.style,description:{en:"Enables circular progress indicator display",ru:"Включает отображение круглого индикатора прогресса"}}},"progress.indeterminate":{type:e.select,options:{category:o.style,options:["type1","type2","type3"],description:{en:"Type of indeterminate progress animation",ru:"Тип анимации неопределенного прогресса"}}},"progress.position":{type:e.select,options:{category:o.style,options:["top","bottom","static"],description:{en:"Position of the progress indicator",ru:"Позиция индикатора прогресса"}}},"progress.visible":{type:e.boolean,options:{category:o.status,value:!0,description:{en:"Controls the visibility of the progress indicator",ru:"Управляет видимостью индикатора прогресса"}}}},oe={"scrollbar.divider":{type:e.boolean,options:{category:o.style,description:{en:"Show divider lines at top and bottom depending on scroll position",ru:"Показывать разделительные линии сверху и снизу в зависимости от положения скролла"}}},"scrollbar.dividerBottom":{type:e.boolean,options:{category:o.style,description:{en:"Show divider line at the bottom",ru:"Показывать разделительную линию снизу"}}},"scrollbar.dividerHide":{type:e.boolean,options:{category:o.style,description:{en:"Hide divider lines",ru:"Скрыть разделительные линии"}}},"scrollbar.dividerTop":{type:e.boolean,options:{category:o.style,description:{en:"Show divider line at the top",ru:"Показывать разделительную линию сверху"}}},"scrollbar.inverse":{type:e.boolean,options:{category:o.style,description:{en:"Invert divider line behavior - show lines when scroll is at beginning/end",ru:"Инвертировать поведение разделительных линий - показывать линии когда скролл в начале/конце"}}},"scrollbar.standard":{type:e.boolean,options:{category:o.style,description:{en:"Use standard browser scrollbar",ru:"Использовать стандартный скролл браузера"}}},"scrollbar.visible":{type:e.boolean,options:{category:o.style,description:{en:"Controls element visibility and scrolling behavior (overflow: visible)",ru:"Управляет видимостью элемента и поведением прокрутки (overflow: visible)"}}}},te={"window.alignment":{type:e.select,options:{category:o.style,description:{en:"Places window in viewport: center, edges or corners",ru:"Позиционирует окно во вьюпорте: центр, края или углы"},options:[]}},"window.axis":{type:e.select,options:{category:o.style,description:{en:'Primary positioning axis relative to anchor or cursor; works only in menu mode (adaptive = "menu")',ru:'Основная ось позиционирования относительно якоря или курсора; работает только в режиме меню (adaptive = "menu")'},options:[]}},"window.autoClose":{type:e.boolean,options:{category:o.style,description:{en:"Closes window when clicking anywhere inside content",ru:"Закрывает окно при клике в любом месте содержимого"}}},"window.beforeClosing":{type:e.object,options:{category:o.hook,description:{en:"Hook called before closing; return false to prevent closing",ru:"Хук вызывается перед закрытием; возврат false предотвращает закрытие"}}},"window.beforeOpening":{type:e.object,options:{category:o.hook,description:{en:"Hook called before opening; return false to prevent opening",ru:"Хук вызывается перед открытием; возврат false предотвращает открытие"}}},"window.closeButton":{type:e.boolean,options:{category:o.style,description:{en:"Shows close button in header",ru:"Показывает кнопку закрытия в заголовке"}}},"window.closeMobileHide":{type:e.boolean,options:{category:o.style,description:{en:"Hides close control on mobile",ru:"Скрывает управление закрытием на мобильных"}}},"window.closing":{type:e.object,options:{category:o.hook,description:{en:"Hook called during closing; return false to interrupt",ru:"Хук вызывается во время закрытия; возврат false прерывает процесс"}}},"window.contextmenu":{type:e.boolean,options:{category:o.style,description:{en:"Allows opening on right‑click (context menu)",ru:"Позволяет открывать по правому клику (контекстное меню)"}}},"window.dense":{type:e.boolean,options:{category:o.style,description:{en:"Compact layout: reduces internal paddings for a denser window",ru:"Компактное оформление: уменьшает внутренние отступы для более плотного окна"}}},"window.divider":{type:e.boolean,options:{category:o.style,description:{en:"Displays top/bottom divider depending on scroll position",ru:"Отображает разделитель сверху/снизу в зависимости от положения скролла"}}},"window.flash":{type:e.boolean,options:{category:o.style,description:{en:"Disables animations for instant display",ru:"Отключает анимации для мгновенного отображения"}}},"window.fullscreen":{type:e.boolean,options:{category:o.style,description:{en:"Fills the screen without margins",ru:"Заполняет экран без отступов"}}},"window.imagePosition":{type:e.select,options:{category:o.style,description:{en:"Defines image placement within the window layout",ru:"Определяет расположение изображения внутри макета окна"},options:["left","top"]}},"window.imageSize":{type:e.select,options:{category:o.style,description:{en:"Controls the relative size of the image area in the layout without tying to concrete values",ru:"Управляет относительным размером области изображения в макете без привязки к конкретным значениям"},options:["half","lg","md","quarter","sm"]}},"window.indent":{type:e.object,options:{category:o.style,description:{en:'Sets offsets for positioning relative to edges or anchor; works only in menu mode (adaptive = "menu")',ru:'Задает отступы для позиционирования относительно краев или якоря; работает только в режиме меню (adaptive = "menu")'}}},"window.inDom":{type:e.boolean,options:{category:o.status,description:{en:"Indicates whether the window is in the DOM",ru:"Указывает, присутствует ли окно в DOM"}}},"window.opening":{type:e.object,options:{category:o.hook,description:{en:"Hook called during opening; return false to interrupt",ru:"Хук вызывается в процессе открытия; возврат false прерывает процесс"}}},"window.origin":{type:e.select,options:{category:o.style,description:{en:"Sets transform origin for opening animation",ru:"Задает точку трансформации для анимации открытия"},options:[]}},"window.overElement":{type:e.object,options:{category:o.style,description:{en:"Sets anchor element for positioning",ru:"Задает опорный элемент для позиционирования"}}},"window.overscroll":{type:e.boolean,options:{category:o.style,description:{en:"Keeps horizontal scrolling inside the window",ru:"Удерживает горизонтальный скролл внутри окна"}}},"window.persistent":{type:e.boolean,options:{category:o.style,description:{en:"Prevents closing when clicking outside",ru:"Предотвращает закрытие при клике за пределами окна"}}},"window.preparation":{type:e.object,options:{category:o.hook,description:{en:"Hook called during preparation before opening",ru:"Хук вызывается на этапе подготовки перед открытием"}}},"window.staticMode":{type:e.boolean,options:{category:o.style,description:{en:"Enables static mode: displays as embedded component without modal behavior, animations, or dynamic positioning",ru:"Включает статичный режим: отображает как встроенный компонент без модального поведения, анимаций и динамического позиционирования"}}},"window.widthMatch":{type:e.boolean,options:{category:o.style,description:{en:"Matches window width to control width (menu)",ru:"Подгоняет ширину окна под ширину контрола (меню)"}}}},ae={...W,...j,...V,...H,...z,...O,...R,...U,...G,...X,...Y,...K,...l,...$,...J,...Z,...Q,...ee,...oe,...te},re={};export{se as W,ae as a,ne as b,re as w};
