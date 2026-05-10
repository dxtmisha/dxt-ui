import{n as e}from"./chunk-DnJy8xQt.js";function t(e){"@babel/helpers - typeof";return t=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},t(e)}function n(e,n){if(t(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||`default`);if(t(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(n===`string`?String:Number)(e)}function r(e){var r=n(e,`string`);return t(r)==`symbol`?r:r+``}function i(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=e((()=>{})),o,s=e((()=>{o=[{name:`Accordion`,description:{en:`Expandable container component that reveals and hides content with smooth animations`,ru:`Раскрывающийся контейнерный компонент, который показывает и скрывает контент с плавными анимациями`},possibilities:{en:[`smooth expand/collapse animations via MotionTransform`,`composable header with label, description, and icons`,`automatic arrow rotation indicator`,`controlled or uncontrolled state management with v-model`,`divider line customization`,`custom cell attributes support`,`click event handling with custom data`,`flexible content slots for header and body`],ru:[`плавные анимации раскрытия/сворачивания через MotionTransform`,`композитная шапка с меткой, описанием и иконками`,`автоматический индикатор поворота стрелки`,`управление состоянием контролируемо или неконтролируемо через v-model`,`настройка линии разделителя`,`поддержка пользовательских атрибутов ячейки`,`обработка событий клика с пользовательскими данными`,`гибкие слоты контента для шапки и тела`]},import:[`import { ref } from 'vue'`],render:`
    <DesignComponent v-bind="args">
      <template #default>
        <p>Accordion content goes here. This section can contain any HTML elements, components, or text.</p>
        <p>You can include multiple paragraphs, lists, and other structured content to demonstrate the accordion's flexibility and behavior.</p>
        <ul>
          <li>First example item with some details</li>
          <li>Second example showing list formatting</li>
          <li>Third item demonstrating nested content</li>
        </ul>
        <p>Additional text can be added to show how the accordion handles longer content with smooth animations and proper spacing.</p>
        <div style="padding: 12px; background: #f5f5f5; border-radius: 4px; margin-top: 8px;">
          <strong>Note:</strong> This is a highlighted section within the accordion body.
        </div>
        <p style="margin-top: 12px;">The accordion component automatically manages the height transitions and ensures all content is properly displayed when expanded.</p>
      </template>
    </DesignComponent>
    <DesignComponent v-bind="args">
      <template #default>
        <h4 style="margin-top: 0;">Features Overview</h4>
        <p>This accordion demonstrates different content types and layout possibilities:</p>
        <ol>
          <li>Numbered lists for sequential information</li>
          <li>Headings for content structure</li>
          <li>Mixed content types in a single container</li>
        </ol>
        <p>The component supports various HTML elements and maintains proper spacing throughout the animation cycle.</p>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <span style="padding: 4px 8px; background: #e3f2fd; border-radius: 4px; font-size: 12px;">Tag 1</span>
          <span style="padding: 4px 8px; background: #f3e5f5; border-radius: 4px; font-size: 12px;">Tag 2</span>
          <span style="padding: 4px 8px; background: #e8f5e9; border-radius: 4px; font-size: 12px;">Tag 3</span>
        </div>
      </template>
    </DesignComponent>
    <DesignComponent v-bind="args">
      <template #default>
        <p>This is the third variant showing simplified content structure.</p>
        <p>Accordion components support various content formats while maintaining consistent behavior.</p>
        <h5>Key Features:</h5>
        <ul>
          <li>Flexible content layouts</li>
          <li>Smooth animations</li>
          <li>Easy customization</li>
        </ul>
      </template>
    </DesignComponent>
  `,stories:[{id:`AccordionVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = !open">
              Toggle ({{ open }})
            </button>
          </div>
          <DesignComponent v-model:open="open" label="Settings" description="Click to expand" icon="settings">
            <template #default>
              <div class="wiki-storybook-item--padding">
                <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
                <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the accordion's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
                <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the accordion, such as in complex forms or coordinated UI interactions.</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `},{id:`AccordionSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent label="Default label" description="Default description" icon="settings">
          <template #label>Custom label slot</template>
          <template #description>Custom description slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #default>
              <p>Custom default slot content (main accordion body)</p>
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Accordion'} type={'accordion'}/>

<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.AccordionVModel}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,expose:`
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.motionTransformElement'}/>
    `,slots:`
<Canvas of={Component.AccordionSlots}/>
<StorybookDescriptions componentName={'Accordion'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Accordion :open="true" :auto-close="false" v-bind="args">
    <div class="wiki-storybook-item--padding">
      Hidden content
    </div>
  </Accordion>
</div>
    `,description:`
Collapsible container for progressive disclosure. Toggles content visibility to manage space and cognitive load. Use for FAQs, grouped settings, hiding secondary info, or compact dashboards.
Header is based on a Cell component and supports label, description, and icon. Features an auto-rotating arrow indicator and smooth height transitions via MotionTransform.
Built-in ARIA support and keyboard navigation (Space/Enter). Controlled primarily via v-model:open. Customizable with divider and header attributes through cellAttrs.
    `}},{name:`Area`,description:{en:`Component for rendering content based on the current area context`,ru:`Компонент для отображения контента в зависимости от текущего контекста области`},possibilities:{en:[`automatic slot selection based on injected area value`,`fallback to a default area if no injection is found`,`supports nested areas and context inheritance`,`renders default slot if no specific area slot matches`],ru:[`автоматический выбор слота на основе внедренного значения области`,`возврат к области по умолчанию, если внедрение не найдено`,`поддержка вложенных областей и наследования контекста`,`отображение слота по умолчанию, если ни один специфический слот области не подходит`]},import:[],render:`
    <DesignComponent v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </DesignComponent>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Area'} type={'area'}/>
    `,slots:`
<StorybookDescriptions componentName={'Area'} type={'slot'}/>
    `},ai:{description:`
A utility component that acts as a dynamic slot switcher based on an "area" context.
It retrieves the current area value from the injection context (UI_AREA_VALUE) or uses the 'areaDefault' prop.
It then renders the slot that matches the area name. If no matching slot is found, it falls back to the 'default' slot.
This is particularly useful for building layouts where different components need to render different content depending on where they are placed (e.g., in a header, footer, or side panel).
    `}},{name:`Actions`,description:{en:`A flexible container component for organizing action buttons with primary and secondary groups, supporting various alignment options and adaptive behavior.`,ru:`Гибкий компонент-контейнер для организации кнопок действий с основной и вторичной группами, поддерживающий различные варианты выравнивания и адаптивное поведение.`},possibilities:{en:[`Organizes action buttons into primary and secondary groups`,`Supports multiple alignment modes: left, right, center, block`,`Flexible layout that adapts to available space`,`Automatic spacing between button groups`,`Customizable button attributes for each group`,`Responsive behavior with adaptive breakpoints`,`Supports both array-based and slot-based button rendering`],ru:[`Организует кнопки действий в основные и вторичные группы`,`Поддерживает несколько режимов выравнивания: left, right, center, block`,`Гибкая раскладка, адаптирующаяся к доступному пространству`,`Автоматическое расстояние между группами кнопок`,`Настраиваемые атрибуты кнопок для каждой группы`,`Адаптивное поведение с точками перехода`,`Поддерживает рендеринг кнопок через массив и слоты`]},import:[],stories:[{id:`ActionsSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #secondary>
            Secondary Slot
          </template>
          <template #default>
            Default Slot
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Actions'} type={'actions'}/>
<StorybookDescriptions componentName={'Actions'} type={'list'}/>
<StorybookDescriptions componentName={'Actions'} type={'flexible'}/>
    `,slots:`
<Canvas of={Component.ActionsSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>
    `},ai:{description:`
Layout container for action button groups, typically used in dialog footers, cards, or forms. Manages spacing, alignment, and separation between primary (main) and secondary action sets.
Supports multiple alignments (left, center, right, block) and takes arrays of button props (list, listSecondary) to automatically render Button components.
Features both array-based and slot-based rendering for maximum flexibility. Use for standardizing button layouts and ensuring consistent spacing.
    `}},{name:`ActionSheet`,description:{en:`Mobile-optimized modal component for displaying a list of actions or choices that slide up from the bottom`,ru:`Мобильно-оптимизированный модальный компонент для отображения списка действий или выборов, выдвигающийся снизу`},possibilities:{en:[`bottom-anchored modal panel with smooth slide-up animation`,`displays primary and secondary action lists`,`supports cancel button and custom actions`,`mobile-first design with touch-friendly interface`,`backdrop click to close functionality`,`keyboard accessibility support`,`integration with List and Actions components`,`customizable appearance and positioning`,`automatic height adjustment based on content`,`support for grouped actions with separators`],ru:[`модальная панель, закрепленная снизу, с плавной анимацией выдвижения`,`отображает основной и второстепенный списки действий`,`поддержка кнопки отмены и пользовательских действий`,`мобильно-ориентированный дизайн с удобным сенсорным интерфейсом`,`закрытие при клике на подложку`,`поддержка доступности с клавиатуры`,`интеграция с компонентами List и Actions`,`настраиваемый внешний вид и позиционирование`,`автоматическая подстройка высоты под контент`,`поддержка группировки действий с разделителями`]},import:[`import { ref } from 'vue'`],render:`
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet</button>
        </template>

        <template #title>
          Action Sheet Menu
        </template>

        <template #default>
          <h4>Mobile Action Sheet Component</h4>
          <p>The Action Sheet component provides a mobile-optimized interface for presenting users with a set of actions or choices. It slides up from the bottom of the screen, following familiar patterns from iOS and Material Design guidelines.</p>

          <p>This component is particularly effective for contextual actions related to specific content, such as sharing options, editing tools, or destructive operations. The bottom-anchored design makes it easily accessible on mobile devices while maintaining a clear visual hierarchy.</p>

          <h4>Key Features</h4>
          <p>The Action Sheet includes support for primary and secondary action lists, allowing you to group related actions logically. It automatically handles touch interactions, backdrop dismissal, and keyboard accessibility, ensuring a consistent user experience across different input methods.</p>

          <p>Integration with List and Actions components provides flexibility in content presentation, while the customizable appearance adapts seamlessly to different design systems and brand requirements. The component automatically adjusts its height based on content, preventing overflow issues while maintaining optimal usability.</p>
        </template>
      </DesignComponent>
    `,stories:[{id:`ActionSheetVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <DesignComponent v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </DesignComponent>
        </div>
      `},{id:`ActionSheetAllSlots`,name:{en:`All slots demonstration`,ru:`Демонстрация всех слотов`},template:`
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'ActionSheet'} type={'actionSheet'}/>
<StorybookDescriptions componentName={'ActionSheet'} type={'touchClose'}/>

<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.ActionSheetVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,events:`
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,slots:`
<Canvas of={Component.ActionSheetAllSlots}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item" style="min-width: 800px;">
  <ActionSheet embedded open v-bind="args">
    <template #control="{ binds }">
      <button v-bind="binds">Open Menu</button>
    </template>
    <template #default>Content goes here...</template>
  </ActionSheet>
</div>
    `,description:`
Mobile-optimized modal component (Bottom Sheet) that slides up from the bottom for actions, choices, or secondary content. Follows standard mobile interface patterns (iOS/Material).
Features touch-gestures (swipe-down to close), backdrop dismissal, and keyboard accessibility. Includes primary/secondary action lists and automatic height adjustment based on content.
Highly flexible with slots (#control, #title, #default, #footer) and controlled primarily via v-model:open. Use for mobile-focused menus, sharing options, or contextual actions.
    `}},{name:`Anchor`,description:{en:`Component for creating hyperlinks or anchor points for navigation`,ru:`Компонент для создания гиперссылок или якорных точек для навигации`},possibilities:{en:[`creating links to other pages or resources`,`creating anchor points for internal page navigation`,`support for icons and text`,`customizable appearance`],ru:[`создание ссылок на другие страницы или ресурсы`,`создание якорных точек для внутренней навигации по странице`,`поддержка иконок и текста`,`настраиваемый внешний вид`]},documentation:{body:`
<StorybookDescriptions componentName={'Anchor'} type={'anchor'}/>
<StorybookDescriptions componentName={'Anchor'} type={'isCopy'}/>
<StorybookDescriptions componentName={'Anchor'} type={'hide'}/>
<StorybookDescriptions componentName={'Anchor'} type={'scroll'}/>
`,expose:`
<StorybookDescriptions componentName={'Anchor'} type={'expose.go'}/>
`,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
`},ai:{description:`
Navigation component for creating hyperlinks, internal page anchors, and interactive links. Wraps the native <a> tag with additional support for smooth scrolling and clipboard operations.
Features automated scroll-to-id behavior with custom offsets and a built-in copy-to-clipboard function (isCopy). Supports icon integration for different link types and success feedback.
Controlled primarily through href or name props. Use for table of contents, permalinks, external resource links, or quick-copy action buttons for IDs and URLs.
    `}},{name:`Arrow`,description:{en:`Component for displaying an arrow or directional indicator`,ru:`Компонент для отображения стрелки или индикатора направления`},possibilities:{en:[`displaying directional arrows`,`customizable size and color`,`rotation support`],ru:[`отображение направляющих стрелок`,`настраиваемый размер и цвет`,`поддержка вращения`]},import:[`import { ref } from 'vue'`],render:`
      <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center">
        <div>
          <div
            style="
              width: 256px;
              margin-bottom: 32px;
              margin-left: 32px;
            "
          >
            <div
              id="id-arrow-target"
              style="
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
              "
            >
              Target
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
          >
            <DesignComponent v-bind="args"/>
          </div>
        </div>
      </div>
    `,stories:[{id:`ArrowBasic`,name:{en:`Basic`,ru:`Базовые`},setup:`
      const elementBasic = ref()
      const elementTarget = ref()
      const elementArray = ref()

      const x = ref('0px')
      const y = ref('0px')

      const onClick = (event: PointerEvent) => {
        if (elementBasic.value) {
          const rect = elementBasic.value.getBoundingClientRect()
          let offsetX = 0
          let offsetY = 0

          if (elementTarget.value) {
            const targetRect = elementTarget.value.getBoundingClientRect()
            offsetX = targetRect.width / 2
            offsetY = targetRect.height / 2
          }

          x.value = (event.clientX - rect.left - offsetX) + 'px'
          y.value = (event.clientY - rect.top - offsetY) + 'px'

          requestAnimationFrame(() => elementArray.value?.update())
        }
      }

      return {
        elementBasic,
        elementTarget,
        elementArray,
        x,
        y,
        onClick
      }
      `,template:`
        <div
          class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
          style="cursor: crosshair;"
          @click="onClick"
        >
          <div>
            <div
              style="
              opacity: 0.5;
              font-size: 14px;
              margin-bottom: 8px;
              text-align: center;
            "
            >
              Click to move target
            </div>
            <div
              ref="elementBasic"
              style="
              position: relative;
              margin-bottom: 96px;
              margin-left: 32px;
              z-index: 32;
            "
            >
              <div
                ref="elementTarget"
                id="id-arrow-target-2"
                style="
                position: absolute;
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
                text-wrap: nowrap;
                pointer-events: none;
              "
                :style="{left: x, top: y}"
              >
                Target Element Example
              </div>
            </div>
            <div
              style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
            >
              <DesignComponent
                ref="elementArray"
                position="auto"
                element-target="#id-arrow-target-2"
              />
            </div>
          </div>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Arrow'} type={'arrow'}/>
<Canvas of={Component.ArrowBasic}/>
`},ai:{render:`
<div :class="classDemo.item" style="position: relative; width: 48px; height: 48px; background-color: oklch(93.2% 0.032 255.585);">
    <Arrow position="top" v-bind="args"/>
</div>
    `,description:`
Functional directional indicator (pointer) designed to connect floating containers like tooltips, popovers, or menus with their target elements. Automatically calculates positioning and orientation to create a seamless speech-bubble or callout effect.
Features smart auto-positioning logic, support for inverse directions, and automated style inheritance. It inherits background and border properties from its parent container (Window or custom wrapper) to ensure visual consistency without manual configuration.
Ideal for enhanced spatial context in complex UIs. Use within floating components to clearly indicate the source of a message or action. Controlled via position and elementTarget props, with an exposed update method for manual synchronization.
    `}},{name:`Badge`,description:{en:`Small visual indicator for displaying status, count, or notifications on interface elements`,ru:`Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса`},possibilities:{en:[`multiple color variants for different status types`,`content customization with text or numbers`,`positioning relative to parent elements`,`maximum value display with overflow handling`,`visibility control and animation support`],ru:[`множественные цветовые варианты для разных типов статуса`,`настройка содержимого с текстом или числами`,`позиционирование относительно родительских элементов`,`отображение максимального значения с обработкой переполнения`,`управление видимостью и поддержка анимации`]},import:[],render:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--compact wiki-storybook-item--squared--md wiki-storybook-item--overflowVisible">
          <DesignComponent v-bind="args"/>
        </div>
      </div>
    `,stories:[{id:`BadgeBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent overlap="static">Badge</DesignComponent>
          <DesignComponent overlap="static" icon="home">Badge</DesignComponent>
          <DesignComponent overlap="static">99</DesignComponent>
          <DesignComponent overlap="static" label="999" label-max="99"/>
        </div>
      `},{id:`BadgeDot`,name:{en:`Dot`,ru:`Точечные (dot)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent dot overlap="static"/>
        </div>
      `},{id:`BadgePrimary`,name:{en:`Primary`,ru:`Основные (primary)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent primary overlap="static" icon="home"/>
          <DesignComponent primary overlap="static">Badge</DesignComponent>
        </div>
      `,propsName:`primary`},{id:`BadgeSecondary`,name:{en:`Secondary`,ru:`Второстепенные (secondary)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent secondary overlap="static" icon="home"/>
          <DesignComponent secondary overlap="static">Badge</DesignComponent>
        </div>
      `,propsName:`secondary`},{id:`BadgeOutline`,name:{en:`Outline`,ru:`Контурные (outline)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent outline overlap="static" icon="home"/>
          <DesignComponent outline overlap="static">Badge</DesignComponent>
        </div>
      `,propsName:`outline`}],documentation:{body:`
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
    `},ai:{render:`
<div :class="classDemo.item" style="min-width: 48px; min-height: 48px;">
  <Badge overlap="static" v-bind="args"/>
</div>
    `,description:`
Small visual indicator used to display status, counts, notifications, or short labels (tags). Typically positioned over the corner of another element (like an icon or avatar) or used inline.
Features numeric handling with label-max cap (e.g., "99+"), dot-only mode for status indication, and support for icons. Includes flexible positioning (overlap: rectangular or circular) and various color variants.
Controlled primarily through the label, icon, and dot props. Use for unread counts, online status indicators, or marking items as "New" or "Sale" in e-commerce contexts.
    `}},{name:`Bars`,description:{en:`A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.`,ru:`Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки.`},possibilities:{en:[`Displays a primary label and a secondary description.`,`Includes an optional back button for navigation.`,`Supports a primary set of interactive buttons.`,`Features an "action mode" with a separate set of buttons, label, and description.`,`Allows full customization of button appearance and behavior.`],ru:[`Отображает основной заголовок и дополнительное описание.`,`Включает опциональную кнопку "назад" для навигации.`,`Поддерживает основной набор интерактивных кнопок.`,`Имеет "режим действия" с отдельным набором кнопок, заголовком и описанием.`,`Позволяет полностью настраивать внешний вид и поведение кнопок.`]},import:[`import { ref } from 'vue'`],stories:[{id:`BarsBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
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
      `},{id:`BarsVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        isAction: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
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
        </div>
      `},{id:`BarsSkeleton`,name:{en:`Skeleton loading`,ru:`Загрузка скелетона`},components:[`Skeleton`],template:`
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
      `},{id:`BarsSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},setup:`
      return {
        isAction: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <DesignComponent v-model:action="isAction">
            <template #default>Custom Label slot</template>
            <template #description>Custom Description slot</template>
            <template #bars>Custom Bars Slot</template>
            <template #actionBars>Custom ActionBars Slot</template>
          </DesignComponent>
        </div>
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
    `,slots:`
<Canvas of={Component.BarsSlots}/>
<StorybookDescriptions componentName={'Bars'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `},ai:{description:`
Structural header or toolbar component for pages, cards, and windows. Provides a consistent layout for titles, descriptions, and interactive action buttons.
Features a built-in back navigation button, primary action button list (bars), and a specialized "action mode" for contextual states (e.g., selection). Supports skeleton loading and full button customization.
Controlled via label/description props and action boolean for state switching. Use for top-level page headers, modal toolbars, or dynamic action bars that appear after item selection.
    `}},{name:`Block`,description:{en:`A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines`,ru:`Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков`},possibilities:{en:[`displaying a headline, label, description, and caption`,`support for icons`,`customizable HTML tag`,`flexible layout for content organization`],ru:[`отображение заголовка, метки, описания и подписи`,`поддержка иконок`,`настраиваемый HTML-тег`,`гибкая компоновка для организации контента`]},import:[],render:`
      <DesignComponent v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing complex user interfaces.
          It provides a flexible container that can host various content elements such as labels, descriptions, and icons.
        </p>
        <p>
          With its versatile design, the Block component adapts seamlessly to different layout requirements.
          Whether you need a simple content wrapper or a detailed card with a headline and caption, this component handles it all.
        </p>
        <p>
          Developers can easily customize the appearance and behavior of the Block using properties and slots.
          This ensures that the component fits perfectly into any design system while maintaining consistency across the application.
        </p>
      </DesignComponent>
    `,stories:[{id:`BlockBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <DesignComponent
          headline="Account Settings"
          label="Profile Information"
          description="Manage your personal details and public profile presence."
        >
          <p>Welcome to your profile overview. Here you can update your name, bio, and contact information.</p>
        </DesignComponent>
      `},{id:`BlockSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Block'} type={'block'}/>
<Canvas of={Component.BlockBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,slots:`
<Canvas of={Component.BlockSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,expose:`
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`},ai:{render:`
<div :class="classDemo.item">
  <Block v-bind="args">
      Main content goes here.
  </Block>
</div>
    `,description:`
Versatile structural container for organizing content with a standardized layout. Automatically arranges headlines, icons, labels, captions, and body content within a unified block element.
Features support for custom HTML tags (e.g., section, article) and flexible slot-based content organization. Includes a dedicated headline area for section titles and a trailing slot for actions.
Controlled primarily through content props (label, headline, description) or various slots (#default, #headline, #trailing). Use for card headers, complex list items, or clearly defined page sections.
    `}},{name:`Button`,description:{en:`Interactive button component for user actions`,ru:`Интерактивный компонент кнопки для действий пользователя`},possibilities:{en:[`multiple visual variants for different use cases`,`different sizes from extra small to extra large`,`built-in accessibility support`,`focus, hover, and active states`,`disabled and loading states support`,`customizable styling through design tokens`],ru:[`множественные визуальные варианты для разных случаев использования`,`различные размеры от очень маленького до очень большого`,`встроенная поддержка доступности`,`состояния focus, hover и active`,`поддержка отключенного состояния и состояния загрузки`,`настраиваемая стилизация через токены дизайна`]},import:[],stories:[{id:`ButtonBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent>Button</DesignComponent>
          <DesignComponent icon="home">Button</DesignComponent>
          <DesignComponent icon-trailing="arrow_forward">Button</DesignComponent>
        </div>
      `},{id:`ButtonPrimary`,name:{en:`Primary`,ru:`Основные (primary)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent primary>Button</DesignComponent>
          <DesignComponent primary icon="home">Button</DesignComponent>
          <DesignComponent primary selected>Button</DesignComponent>
          <DesignComponent primary disabled>Button</DesignComponent>
        </div>
      `,propsName:`primary`},{id:`ButtonSecondary`,name:{en:`Secondary`,ru:`Второстепенные (secondary)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent secondary>Button</DesignComponent>
          <DesignComponent secondary icon="home">Button</DesignComponent>
          <DesignComponent secondary selected>Button</DesignComponent>
          <DesignComponent secondary disabled>Button</DesignComponent>
        </div>
      `,propsName:`secondary`},{id:`ButtonOutline`,name:{en:`Outline`,ru:`Контурные (outline)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent outline>Button</DesignComponent>
          <DesignComponent outline icon="home">Button</DesignComponent>
          <DesignComponent outline selected>Button</DesignComponent>
          <DesignComponent outline disabled>Button</DesignComponent>
        </div>
      `,propsName:`outline`},{id:`ButtonText`,name:{en:`Text`,ru:`Текстовые (text)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent text>Button</DesignComponent>
          <DesignComponent text icon="home">Button</DesignComponent>
          <DesignComponent text selected>Button</DesignComponent>
          <DesignComponent text disabled>Button</DesignComponent>
        </div>
      `,propsName:`text`},{id:`ButtonAdaptive`,name:{en:`Adaptive`,ru:`Адаптивные`},template:`
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
      `},{id:`ButtonSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
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
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Fundamental interactive component for user actions, navigation, and form submission. Supports various visual styles (primary, secondary, outline, text), states, and content configurations.
Features built-in support for icons (Material Symbols), loading spinners, and disabled/selected states. Includes native-like navigation via "to" (Vue Router) or "href" (external) props and supports skeleton loading.
Highly customizable through design tokens and adaptive layout options. Controlled primarily via click events and various styling props. Use for call-to-actions, navigation links, or icon-only toggle buttons.
    `}},{name:`Cell`,description:{en:`Versatile container component for displaying structured content with labels, descriptions, and actions`,ru:`Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями`},possibilities:{en:[`flexible content structure with label, description, and caption`,`interactive states including focus, selected, and disabled`,`built-in icon and trailing icon support`,`progress indicator integration`,`divider customization options`,`dynamic behavior with hover interactions`,`skeleton loading state support`,`click event handling with custom data`],ru:[`гибкая структура контента с меткой, описанием и подписью`,`интерактивные состояния включая focus, selected и disabled`,`встроенная поддержка иконок и завершающих иконок`,`интеграция индикатора прогресса`,`возможности настройки разделителей`,`динамическое поведение с взаимодействием при наведении`,`поддержка состояния загрузки скелетона`,`обработка событий клика с пользовательскими данными`]},render:`
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,import:[],stories:[{id:`CellSkeleton`,name:{en:`Skeleton loading`,ru:`Загрузка скелетона`},components:[`Skeleton`],template:`
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
      `},{id:`CellSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
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
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
    `,slots:`
<Canvas of={Component.CellSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
`},ai:{description:`
Universal list item component for building structured interfaces like menus, settings, and data lists. Provides a standardized row layout with dedicated areas for icons, text, and actions.
Features a composable structure with label, description, and caption support. Includes interactive states (hover, focus, selected, loading), built-in Ripple effect, and skeleton loading integration.
Highly flexible via slots (#default, #trailing, #body) and controlled through content props and navigation attributes (to/href). Use for clickable rows, menu items, or complex data entities in lists.
    `}},{name:`Checkbox`,description:{en:`Interactive checkbox component for binary or indeterminate state selection`,ru:`Интерактивный компонент чекбокса для выбора бинарного или неопределённого состояния`},possibilities:{en:[`checked, unchecked, and indeterminate states`,`built-in validation support with custom messages`,`label and description text support`,`customizable icons for checked and indeterminate states`,`disabled and loading states`,`ripple effect on interaction`,`skeleton state for loading placeholders`,`adaptive layout options`,`form integration with name and value attributes`],ru:[`состояния: отмечен, не отмечен и неопределённое`,`встроенная поддержка валидации с пользовательскими сообщениями`,`поддержка текста метки и описания`,`настраиваемые иконки для состояний отмечен и неопределённое`,`состояния отключения и загрузки`,`эффект волны при взаимодействии`,`состояние скелетона для заполнителей загрузки`,`опции адаптивной разметки`,`интеграция с формами через атрибуты name и value`]},import:[`import { ref } from 'vue'`],stories:[{id:`CheckboxVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        checkboxValue: ref(false),
        indeterminateValue: ref(null)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = !checkboxValue">Check {{ checkboxValue }}</button>
          </div>
          <DesignComponent
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
      `},{id:`CheckboxSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading checkbox" />
            <DesignComponent isSkeleton label="Another loading checkbox" />
          </div>
        </DesignSkeleton>
      `},{id:`CheckboxSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #default>
            <strong>Custom label slot</strong>
          </template>
          <template #description>
            <em>Custom description slot</em>
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Checkbox'} type={'checkbox'}/>

<StorybookDescriptions componentName={'Checkbox'} type={'value'}/>
<StorybookDescriptions componentName={'Checkbox'} type={'indeterminate'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.CheckboxVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.CheckboxSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'checkValidity'}/>
<StorybookDescriptions componentName={'Expose'} type={'validationMessage'}/>
    `,slots:`
<Canvas of={Component.CheckboxSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `},ai:{description:`
Form control component for binary (yes/no) or indeterminate state selection. Allows users to toggle specific options or select multiple items from a list with visual feedback.
Features support for primary label, secondary description, and custom icons for checked/indeterminate states. Includes built-in validation, loading indicators, and adaptive layout options.
Controlled via v-model or value prop and emits @input/@change events. Use for terms agreement, feature toggles, or parent-child coordinated selections (via indeterminate state).
    `}},{name:`Chip`,description:{en:`Compact element that represents an input, attribute, or action`,ru:`Компактный элемент, представляющий ввод, атрибут или действие`},possibilities:{en:[`multiple visual variants for different contexts`,`selectable state for user interaction`,`disabled state support`,`customizable styling through design tokens`,`icon support for enhanced visual representation`,`adaptive behavior for different screen sizes`],ru:[`множественные визуальные варианты для разных контекстов`,`выбираемое состояние для взаимодействия пользователя`,`поддержка отключенного состояния`,`настраиваемая стилизация через токены дизайна`,`поддержка иконок для улучшенного визуального представления`,`адаптивное поведение для разных размеров экрана`]},import:[],stories:[{id:`ChipInput`,name:{en:`Input`,ru:`Ввод (input)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent>Chip</DesignComponent>
          <DesignComponent input>Tag</DesignComponent>
          <DesignComponent input icon="person">Contact</DesignComponent>
          <DesignComponent input selected icon="tag">Keyword</DesignComponent>
        </div>
      `,propsName:`input`},{id:`ChipAssistive`,name:{en:`Assistive`,ru:`Вспомогательные (assistive)`},template:`
        <div class="wiki-storybook-flex">
          <DesignComponent>Chip</DesignComponent>
          <DesignComponent assistive>Chip</DesignComponent>
          <DesignComponent assistive icon="lightbulb">Suggestion</DesignComponent>
          <DesignComponent assistive selected icon="check">Recommended</DesignComponent>
        </div>
      `,propsName:`assistive`},{id:`ChipAdaptive`,name:{en:`Adaptive`,ru:`Адаптивные`},template:`
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
      `,propsName:`adaptive`},{id:`ChipSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Chip</DesignComponent>
        </DesignSkeleton>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Chip'} type={'chip'}/>

<template prop="input">
<StorybookDescriptions componentName={'Chip'} type={'input'}/>
<Canvas of={Component.ChipInput}/>
</template>

<template prop="assistive">
<StorybookDescriptions componentName={'Chip'} type={'assistive'}/>
<Canvas of={Component.ChipAssistive}/>
</template>

<StorybookDescriptions componentName={'Value'} type={'value'}/>

<StorybookDescriptions componentName={'Style'} type={'adaptive'}/>
<Canvas of={Component.ChipAdaptive}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.ChipSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Compact interactive element representing an input, attribute, or action. Used for entering information, making selections, filtering content, or triggering immediate actions in a space-efficient way.
Features multiple functional variants (Action, Input, Assistive, Filter) with support for leading icons and selection states. Includes built-in support for disabled/selected states and adaptive layout options.
Controlled via value/label props and emits @click events with detailed data. Use for filter tags, choice groups (like radio buttons), or representing entities like contacts in input fields.
    `}},{name:`ChipGroup`,description:{en:`Component for managing a group of interactive chips with support for selection and data binding`,ru:`Компонент для управления группой интерактивных чипов с поддержкой выбора и привязки данных`},possibilities:{en:[`rendering a list of chips from a data array`,`managing selection state (single or multiple)`,`customizing the appearance of all chips in the group via chipAttrs`,`handling click events and value updates`,`controlling icon visibility based on selection`],ru:[`рендеринг списка чипов из массива данных`,`управление состоянием выбора (одиночный или множественный)`,`настройка внешнего вида всех чипов в группе через chipAttrs`,`обработка событий клика и обновлений значений`,`управление видимостью иконки в зависимости от выбора`]},import:[`import { ref } from 'vue'`],stories:[{id:`ChipGroupSelection`,name:{en:`Selection States`,ru:`Состояния выбора`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <DesignComponent :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <DesignComponent
            :list="[
              { label: 'Option 1', icon: 'check', value: 'option1' },
              { label: 'Option 2', icon: 'check', value: 'option2' },
              { label: 'Option 3', icon: 'check', value: 'option3' }
            ]"
            :selected="['option2']"
            :icon-when-selected="true"
          />
        </div>
      `},{id:`ChipGroupVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        multipleSelected: ref(['option1', 'option3'])
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ multipleSelected }}</span>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <DesignComponent
            v-model:selected="multipleSelected"
            :list="[
              { label: 'Option 1', value: 'option1', icon: 'check' },
              { label: 'Option 2', value: 'option2', icon: 'check' },
              { label: 'Option 3', value: 'option3', icon: 'check' }
            ]"
            :readonly="false"
            :icon-when-selected="true"
          />
        </div>
      `}],documentation:{body:`
    <StorybookDescriptions componentName={'ChipGroup'} type={'chipGroup'}/>

    <StorybookDescriptions componentName={'ChipGroup'} type={'selected'}/>
    <Canvas of={Component.ChipGroupSelection}/>

    <StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>
    <Canvas of={Component.ChipGroupVModel}/>
    `,events:`
    <StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,slots:`
    <StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Wrapper component for managing collections of Chip elements based on an array of data. Streamlines the creation of filter sets, choice groups, and tag lists by automating iteration and selection logic.
Features support for single and multiple selection modes, shared chip attributes (via chipAttrs), and icon visibility control. Includes built-in data binding for selected values and @click event propagation.
Controlled via the list prop for data and v-model:selected for state. Use for dynamic filtering interfaces, selecting multiple categories, or building interactive tag lists from API data.
    `}},{name:`ClientOnly`,description:{en:`Component for managing rendering exclusively on the client side, essential for SSR compatibility`,ru:`Компонент для управления рендерингом исключительно на стороне клиента, необходим для совместимости с SSR`},possibilities:{en:[`prevents hydration mismatch errors in SSR/SSG environments`,`render client-side only components (e.g. charts, maps)`,`toggleable via "clientOnly" property`,`supports default slot for the content`],ru:[`предотвращает ошибки рассогласования гидратации в средах SSR/SSG`,`рендерит компоненты только для клиента (например, графики, карты)`,`переключается через свойство "clientOnly"`,`поддерживает слот default для контента`]},import:[],render:`
    <DesignComponent>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </DesignComponent>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'ClientOnly'} type={'clientOnly'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <ClientOnly v-bind="args">
    <h4>Client-Side Content</h4>
    <p>This block is only visible when the component is mounted in the browser.</p>
    <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
  </ClientOnly>
</div>
    `,description:`
The ClientOnly component is a utility designed to ensure that its children are only rendered on the client side.
This is particularly useful in Server-Side Rendering (SSR) or Static Site Generation (SSG) contexts where certain components
(like those relying on browser-only APIs like 'window' or 'document', or complex visualizations) should not be executed or rendered on the server.
It works by waiting until the component is mounted in the browser before rendering its content.
Controlled by the 'clientOnly' boolean property (default is true).
    `}},{name:`Container`,description:{en:`A lightweight layout container for centering and constraining content width with configurable horizontal alignment.`,ru:`Легковесный компонент-контейнер для центрирования и ограничения ширины контента с настраиваемым горизонтальным выравниванием.`},possibilities:{en:[`horizontal alignment with align: left | center | right`,`configurable width and horizontal margins via design tokens`,`default slot for wrapping arbitrary content`,`area context support through the area prop`],ru:[`горизонтальное выравнивание через align: left | center | right`,`настройка ширины и горизонтальных отступов через дизайн-токены`,`слот default для оборачивания произвольного контента`,`поддержка контекста области через свойство area`]},import:[],render:`
    <DesignComponent v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </DesignComponent>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Container'} type={'container'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Container v-bind="args">
    Main content goes here.
  </Container>
</div>
    `,description:`
Layout wrapper used to constrain content width and manage horizontal spacing in a predictable way.
Supports alignment options (left, center, right), width tokens, and side margins so page content keeps consistent rhythm across breakpoints.
Use as a foundational container around sections, forms, and text-heavy blocks to improve readability and layout consistency.
    `}},{name:`Dialog`,description:{en:`Modal dialog component for displaying alerts, confirmations, and informational messages with icon and action buttons`,ru:`Модальный диалоговый компонент для отображения предупреждений, подтверждений и информационных сообщений с иконкой и кнопками действий`},possibilities:{en:[`modal dialog with centered positioning and backdrop`,`icon support with predefined success and error states`,`customizable title, description, and content areas`,`action buttons with OK and Close presets`,`image positioning (top or left alignment)`,`integration with Window, Bars, Actions, Icon components`,`close on ESC key and backdrop click`,`programmatic control via v-model:open`,`automatic icon switching based on success/error states`,`flexible content layout with information block`,`customizable footer with action buttons`,`keyboard accessibility and focus management`,`responsive design with mobile optimization`,`support for custom button configurations`],ru:[`модальный диалог с центрированием и подложкой`,`поддержка иконок с предустановленными состояниями успеха и ошибки`,`настраиваемые области заголовка, описания и контента`,`кнопки действий с пресетами OK и Закрыть`,`позиционирование изображения (сверху или слева)`,`интеграция с компонентами Window, Bars, Actions, Icon`,`закрытие по ESC и клику на подложку`,`программное управление через v-model:open`,`автоматическое переключение иконки на основе состояний успеха/ошибки`,`гибкая компоновка контента с информационным блоком`,`настраиваемый футер с кнопками действий`,`доступность с клавиатуры и управление фокусом`,`адаптивный дизайн с оптимизацией для мобильных`,`поддержка пользовательских конфигураций кнопок`]},import:[`import { ref } from 'vue'`],render:`
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </DesignComponent>
    `,stories:[{id:`DialogStates`,name:{en:`Success and error states`,ru:`Состояния успеха и ошибки`},setup:`
      return {
        openSuccess: ref(false),
        openError: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex">
          <DesignComponent
            :success="true"
            label="Operation Successful"
            description="Your changes have been saved successfully."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Success Dialog</button>
            </template>
          </DesignComponent>

          <DesignComponent
            :error="true"
            label="Operation Failed"
            description="An error occurred while processing your request. Please try again."
          >
            <template #control="{binds}">
              <button class="wiki-storybook-button" v-bind="binds">Error Dialog</button>
            </template>
          </DesignComponent>
        </div>
      `},{id:`DialogVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <DesignComponent
            v-model:open="open"
            label="Confirmation"
            description="Are you sure you want to proceed with this action?"
          />
        </div>
      `},{id:`DialogAllSlots`,name:{en:`All slots demonstration`,ru:`Демонстрация всех слотов`},template:`
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Dialog with All Slots</button>
          </template>

          <template #title>
            Title Slot
          </template>

          <template #label>
            <strong>Label Slot</strong>
          </template>

          <template #description>
            <em>Description Slot</em>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #footer="{classesWindow}">
            Footer Slot
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Dialog'} type={'dialog'}/>

<StorybookDescriptions componentName={'Dialog'} type={'states'}/>
<Canvas of={Component.DialogStates}/>

<StorybookDescriptions componentName={'Dialog'} type={'buttons'}/>

<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.DialogVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,events:`
<StorybookDescriptions componentName={'Dialog'} type={'events'}/>
<StorybookDescriptions componentName={'Dialog'} type={'event.dialog'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,slots:`
<Canvas of={Component.DialogAllSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Dialog embedded open label="Dialog Title" description="This is a description text." v-bind="args"/>
</div>
    `,description:`
Specialized modal component for standardized user interactions such as alerts, confirmations, and status messages. Extends the Modal component with a predefined layout for icons, titles, and action buttons.
Features built-in success/error states with automatic icon switching and content styling. Supports flexible positioning of images (top/left) and integrates with Window, Bars, and Actions for a consistent footer.
Controlled via v-model:open and various content props (label, description). Use for critical operations requiring user confirmation, operation success/fail alerts, or informative system messages.
    `}},{name:`Dummy`,description:{en:`A placeholder component used for structural presentation or testing`,ru:`Компонент-заглушка, используемый для структурного представления или тестирования`},possibilities:{en:[`multiple sizes from extra small to 5xl`,`various color palettes`],ru:[`множественные размеры от очень маленького до 5xl`,`различные цветовые палитры`]},import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Dummy'} type={'dummy'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Placeholder component used for structural presentation, testing, or laying out interfaces early in development. Provides a simple geometric shape to represent where a future component will be placed.
Features configurable sizes (from 'xs' to '5xl') and customizable color palettes. Acts as a lightweight visual anchor without complex logic or dependencies.
Controlled via size and palette props. Use during prototyping to define layout structures before final components are implemented or for testing responsive container behavior.
    `,hide:!0}},{name:`Field`,description:{en:`Base container for form controls that composes label, messages, counter, icons and progress`,ru:`Базовый контейнер для полей ввода, который собирает метку, сообщения, счётчик, иконки и прогресс`},possibilities:{en:[`composes FieldLabel, FieldMessage, FieldCounter, Progress and icon includes`,`handles states: focus, disabled, readonly, selected, block`,`supports prefix, suffix and caption slots`,`validation highlighting based on validationMessage and forceShowMessage`,`optional cancel and navigation (arrow) icons with visibility flags`,`counter position control with counterTop`,`integrated helpers for sizing and icons (FieldSize, FieldIcons)`],ru:[`композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок`,`обрабатывает состояния: focus, disabled, readonly, selected, block`,`поддерживает слоты prefix, suffix и caption`,`подсветка валидации на основе validationMessage и forceShowMessage`,`дополнительные иконки отмены и навигации (стрелки) с флагами видимости`,`управление позицией счётчика через counterTop`,`встроенные помощники для размеров и иконок (FieldSize, FieldIcons)`]},import:[],render:`
      <DesignComponent v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </DesignComponent>
    `,stories:[{id:`FieldWidth`,name:{en:`Width`,ru:`Ширина`},template:`
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
      `},{id:`FieldCancel`,name:{en:`Cancel button`,ru:`Кнопка очистки`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="auto" :cancel-show="true" label="auto + value">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
        </div>
      `},{id:`FieldNavigation`,name:{en:`Navigation & arrows`,ru:`Навигация / стрелки`},template:`
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
      `},{id:`FieldSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
        <DesignSkeleton :active="true" style="max-width:280px">
          <DesignComponent isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </DesignComponent>
        </DesignSkeleton>
      `},{id:`FieldSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
          value="Value"
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
    `,slots:`
<Canvas of={Component.FieldSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Field'} type={'slots'} />
    `},ai:{render:`
<div :class="classDemo.item">
  <Field label="Field Label" helper-message="Helper text" v-bind="args">
    <template v-slot:default="{binds}">
      <input :value="args.value" readonly v-bind="binds as any"/>
    </template>
  </Field>
</div>
    `,description:`
Foundational wrapper component for all form inputs. Provides the structural layout, styling, and state management for labels, helper messages, validation errors, icons, and progress indicators.
Features a composable structure with prefix/suffix slots, leading/trailing icons, and a character counter. Automatically handles validation states, loading spinners, and disabled/readonly appearances.
Integrates with native inputs via the #default slot, exposing essential bindings (id, class, aria) to maintain design consistency and accessibility. Use as a base when creating custom form controls.
    `,hide:!0}},{name:`FieldCounter`,description:{en:`Component for displaying character count and input length limits in form fields`,ru:`Компонент для отображения счетчика символов и ограничений длины ввода в полях форм`},possibilities:{en:[`displays current character count`,`shows maximum character limit when specified`,`customizable display template with placeholders`,`automatic visibility based on counter and maxlength props`,`supports both string and number values`,`compact display format (e.g., "50 / 100")`,`template-based formatting with [c] and [m] placeholders`],ru:[`отображает текущее количество символов`,`показывает максимальное ограничение символов при указании`,`настраиваемый шаблон отображения с заполнителями`,`автоматическая видимость на основе свойств counter и maxlength`,`поддерживает значения как строк, так и чисел`,`компактный формат отображения (например, "50 / 100")`,`форматирование на основе шаблона с заполнителями [c] и [m]`]},import:[],stories:[{id:`FieldCounterTemplate`,name:{en:`Custom Template`,ru:`Пользовательский шаблон`},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default template</div>
            <DesignComponent :counter="75" :maxlength="150"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom template: "Characters: [c] of [m]"</div>
            <DesignComponent :counter="75" :maxlength="150" template="Characters: [c] of [m]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Counter only with template: "[c] chars"</div>
            <DesignComponent :counter="42" template="<b>[c]</b> chars"/>
          </div>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'FieldCounter'} type={'fieldCounter'}/>
<StorybookDescriptions componentName={'FieldCounter'} type={'templates'}/>
<Canvas of={Component.FieldCounterTemplate}/>
    `},ai:{description:`
Utility subcomponent for displaying character counts and input limits. Provides visual feedback to users and accessibility status to screen readers during formal data entry.
Features customizable display templates with placeholders ([c] for counter, [m] for max) and automated visibility based on maxlength. Includes ARIA live region management for screen reader announcements.
Integrated automatically into components like Input and Textarea; should generally not be used directly. Controlled via counter and maxlength props within the Field wrapper.
    `,hide:!0}},{name:`FieldLabel`,description:{en:`Component for displaying a field label and required marker; can be used together with counter and progress`,ru:`Компонент для отображения метки поля и индикатора обязательности; может использоваться вместе со счетчиком и прогрессом`},possibilities:{en:[`renders a text label for form fields`,`shows required marker when the field is mandatory`,`works together with FieldCounter and Progress when passed as props`,`keeps consistent spacing and classes within form controls`],ru:[`рендерит текстовую метку для полей формы`,`показывает индикатор обязательности для обязательных полей`,`работает совместно со счетчиком FieldCounter и прогрессом при передаче соответствующих свойств`,`сохраняет согласованные отступы и классы внутри элементов формы`]},import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `},ai:{description:`
Subcomponent of the Field wrapper responsible for rendering form field labels and required markers. Ensures consistent styling, positioning, and accessibility for all input headings.
Features automated support for the "required" property (showing an asterisk) and works seamlessly with character counters and progress bars within the Field header.
Controlled through the label prop or #label slot. Primarily used within Input, Textarea, and other field-based controls; should generally not be used as a standalone component.
    `,hide:!0}},{name:`FieldMessage`,description:{en:`Component for displaying helper and validation messages for form fields`,ru:`Компонент для отображения вспомогательных и валидационных сообщений для полей форм`},possibilities:{en:[`shows helper text under the field`,`displays validation message when error occurs`,`visibility control via a dedicated force flag`,`works together with input fields and counters`,`supports HTML-safe rendering by design system`],ru:[`показывает вспомогательный текст под полем`,`отображает сообщение валидации при ошибке`,`управление видимостью через специальный флаг`,`работает совместно с полями ввода и счетчиками`,`поддерживает безопасный рендеринг HTML силами дизайн-системы`]},import:[],stories:[{id:`FieldMessageSlots`,name:{en:`Slots`,ru:`Слоты`},template:`
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
<Canvas of={Component.FieldMessageSlots}/>
<StorybookDescriptions componentName={'FieldMessage'} type={'slots'}/>
    `},ai:{description:`
Subcomponent of the Field wrapper used to display informational text, validation errors, and character counters beneath input fields. Provides critical visual feedback regarding entry status or requirements.
Features a priority system where validation messages override helper text when an error occurs. Includes automatic status styling (red for errors) and integration with the character counter logic.
Controlled via helperMessage and validationMessage props; linked automatically to the input via ARIA attributes. Primarily used within Field-based components; should generally not be used directly.
    `,hide:!0}},{name:`Grid`,description:{en:`Layout component for creating grid structures with customizable columns`,ru:`Компонент макета для создания сеточных структур с настраиваемыми колонками`},possibilities:{en:[`configurable number of columns`,`gap customization`,`responsive layout support`],ru:[`настраиваемое количество колонок`,`настройка отступов (gap)`,`поддержка адаптивной верстки`]},import:[],render:`
    <DesignComponent>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </DesignComponent>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Grid'} type={'grid'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{render:`
      <div :class="classDemo.item">
        <Grid v-bind="args">
          <div style="grid-column: span 4;">1</div>
          <div style="grid-column: span 4;">2</div>
          <div style="grid-column: span 4;">3</div>
        </Grid>
      </div>
    `,description:`
Layout utility designed to manage the arrangement of items in a flexible, column-based system. Provides a standardized way to create responsive multi-column layouts across different screen sizes.
Features a default 12-column grid structure with customizable gaps and responsive breakpoint support. Works in tandem with GridItem to provide precise control over column spans and alignment.
Controlled primarily via CSS variables for columns and gaps. Use as a top-level container for dashboard widgets, form layouts, or any content requiring a structured multi-column arrangement.
    `}},{name:`GridItem`,description:{en:`Individual item within a Grid component`,ru:`Отдельный элемент внутри компонента Grid`},possibilities:{en:[`configurable span across columns`,`responsive span settings (base, sm, md, lg, xl, 2xl)`],ru:[`настраиваемый охват колонок (span)`,`адаптивные настройки охвата (base, sm, md, lg, xl, 2xl)`]},import:[],render:`
    <div class="wiki-storybook-group">
      <DesignComponent v-bind="args">
        <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"/>
      </DesignComponent>
    </div>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'GridItem'} type={'gridItem'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{render:`
<div :class="classDemo.item" style="min-height: 48px;">
  <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px;">
    <GridItem v-bind="args">Item</GridItem>
  </div>
</div>
    `,description:`
Individual cell unit within a Grid layout, providing granular control over column spanning across various screen resolutions. Enables building complex, responsive layouts with minimal CSS.
Features responsive span settings for all major breakpoints (base, sm, md, lg, xl, 2xl). Allows items to occupy different widths on mobile vs desktop, ensuring optimal use of screen space.
Controlled via the base prop for default span and breakpoint-specific props (e.g., md="6"). Use inside a Grid container to define local widths for UI elements, widgets, or form fields.
    `}},{name:`Group`,description:{en:`A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <div> tag and <h4> header by default.`,ru:`Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <div> и заголовок <h4>.`},possibilities:{en:[`standardized grouping of content using <div> tag`,`support for titles (h4 by default), labels, descriptions, and captions`,`support for icons`,`fully inherits Block component capabilities`],ru:[`стандартизированная группировка контента с использованием тега <div>`,`поддержка заголовков (h4 по умолчанию), меток, описаний и подписей`,`поддержка иконок`,`полностью наследует возможности компонента Block`]},import:[],render:`
      <DesignComponent v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </DesignComponent>
    `,stories:[{id:`GroupBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <DesignComponent
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </DesignComponent>
      `},{id:`GroupSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Group'} type={'group'}/>
<Canvas of={Component.GroupBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,slots:`
<Canvas of={Component.GroupSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,expose:`
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`},ai:{render:`
<div :class="classDemo.item">
  <Group v-bind="args">
      Content of the group.
  </Group>
</div>
    `,description:`
Structural component for organizing related content with a standardized header hierarchy. Acts as a semantic wrapper for subsections or grouping elements within a larger section or card.
Features support for headlines (h4 by default), labels, icons, and descriptions. Inherits all capabilities of the Block component, providing a consistent layout for titles and body content.
Controlled via headline, label, and description props. Use for grouping settings, categorizing information, or breaking down complex forms into logical, titled segments.
    `}},{name:`Header`,description:{en:`Component for displaying headers with icons and additional information`,ru:`Компонент для отображения заголовков с иконками и дополнительной информацией`},possibilities:{en:[`support for different HTML tags (h1-h6, div, etc.)`,`built-in support for icons and captions`,`customizable trailing content via slots`,`automatic area value management`,`standardized typography and spacing`],ru:[`поддержка различных HTML-тегов (h1-h6, div и т.д.)`,`встроенная поддержка иконок и подписей`,`настраиваемый правый контент через слоты`,`автоматическое управление значением области`,`стандартизированная типографика и отступы`]},import:[],stories:[{id:`HeaderBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <div class="wiki-storybook-flex--column">
          <DesignComponent label="Header Level 1" tag="h1" />
          <DesignComponent label="Header Level 2" tag="h2" />
          <DesignComponent label="Header Level 3" tag="h3" />
        </div>
      `},{id:`HeaderSlots`,name:{en:`Slots`,ru:`Слоты`},template:`
        <DesignComponent label="Default label" caption="Default caption">
          <template #default>Custom label slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Header'} type={'header'}/>
<Canvas of={Component.HeaderBasic}/>
    `,events:``,expose:``,slots:`
<Canvas of={Component.HeaderSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `},ai:{description:`
Component for creating structured headers with integrated support for icons and captions.
Allows flexible control over the HTML tag (h1-h6, div) to maintain proper document hierarchy.
Includes automatic area management and support for custom trailing content.
Ideal for section titles, page headers, or grouped content labeling.
    `}},{name:`HorizontalScroll`,description:{en:`Component for creating a horizontally scrollable container. Supports smooth scrolling to the selected element.`,ru:`Компонент для создания горизонтально прокручиваемого контейнера. Поддерживает плавную прокрутку к выбранному элементу.`},possibilities:{en:[`horizontal scrolling of content`,`automatic scrolling to the selected element on mount`,`support for custom tags`,`slot for content with binding data for items`],ru:[`горизонтальная прокрутка контента`,`автоматическая прокрутка к выбранному элементу при монтировании`,`поддержка пользовательских тегов`,`слот для контента с данными привязки для элементов`]},render:`
    <DesignComponent v-bind="args">
      <template #default="{ classItem }">
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 160);">Item 7</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 175);">Item 8</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 195);">Item 9</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 215);">Item 10</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.05 240);">Item 11</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.06 265);">Item 12</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.07 285);">Item 13</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 305);">Item 14</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 325);">Item 15</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 345);">Item 16</div>
      </template>
    </DesignComponent>
  `,stories:[{id:`HorizontalScrollBasic`,name:{en:`Basic Usage`,ru:`Базовое использование`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent style="width: 100%;">
            <template #default="{ classItem }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 305);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 325);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 345);">Item 3</div>
            </template>
          </DesignComponent>

          <DesignComponent style="width: 100%;">
            <template #default="{ classItem, classItemSelected }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
              <div class="wiki-storybook-flex-center" :class="[classItem, classItemSelected]" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
            </template>
          </DesignComponent>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'HorizontalScroll'} type={'horizontalScroll'}/>
<StorybookDescriptions componentName={'HorizontalScroll'} type={'selected'}/>
<Canvas of={Component.HorizontalScrollBasic}/>
    `,expose:`
<StorybookDescriptions componentName={'HorizontalScroll'} type={'expose.toSelected'}/>
    `},ai:{description:`
Container component that enables horizontal scrolling for large content sets like galleries, item lists, or tab bars. Ensures smooth navigation when the body exceeds the viewport width.
Features automated scroll-to-selected behavior on mount and exposes a programmatic method (toSelected) for navigation. Provides scoped slot bindings to ensure correct item styling and selection tracking.
Controlled via the tag prop for root element customization. Use for product carousels, category filters, or any horizontally-oriented navigation menus in space-constrained layouts.
    `}},{name:`Icon`,description:{en:`A component for displaying vector icons with support for state management, automatic directionality adaptation, and design system styling.`,ru:`Компонент для отображения векторных иконок с поддержкой управления состоянием, автоматической адаптацией направления и стилизацией дизайн-системы.`},possibilities:{en:[`rendering icons by identifier`,`toggling between two icons based on the active state`,`automatic mirroring for RTL languages`,`integration with the color palette and inverse mode`,`displaying a skeleton loader placeholder`],ru:[`рендеринг иконок по идентификатору`,`переключение между двумя иконками в зависимости от активного состояния`,`автоматическое зеркалирование для RTL языков`,`интеграция с цветовой палитрой и инверсный режим`,`отображение заполнителя (скелетона) при загрузке`]},import:[],stories:[{id:`IconState`,name:{en:`Icon state`,ru:`Состояние иконки`},template:`
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
      `},{id:`IconDirection`,name:{en:`Direction`,ru:`Направление компонента`},template:`
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
      `},{id:`IconPalette`,name:{en:`Palette`,ru:`Палитра`},template:`
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
      `},{id:`IconSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton icon="home" rounded="md"/>
        </DesignSkeleton>
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
    `},ai:{description:`
Vector icon component, typically utilizing the Material Symbols library. Supports dynamic state management, automatic mirroring for RTL languages, and deep integration with the design system's palette.
Features toggle-able states (active/inactive) with specific icons for each, built-in skeleton loading (isSkeleton), and directionality adaptation. Customizing via size, palette, and inverse props ensures visual consistency across all themes.
Controlled via the icon and iconActive props and various styling flags. Use for navigation links, action buttons, status indicators, or any UI element requiring concise visual representation.
    `}},{name:`Input`,description:{en:`Text input field component with validation, masking and formatting support`,ru:`Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования`},possibilities:{en:[`multiple input types: text, number, email, password, tel, url, date, time and more`,`built-in validation with custom messages`,`mask support for formatted input (phone, date, custom patterns)`,`currency and number formatting`,`password visibility toggle`,`prefix and suffix support`,`counter for character limits`,`navigation arrows for numeric and selection inputs`,`autocomplete, spellcheck and autocorrect support`,`integrated with a Field component for consistent styling`],ru:[`множественные типы ввода: text, number, email, password, tel, url, date, time и другие`,`встроенная валидация с пользовательскими сообщениями`,`поддержка маскирования для форматированного ввода (телефон, дата, пользовательские паттерны)`,`форматирование валюты и чисел`,`переключатель видимости пароля`,`поддержка префикса и суффикса`,`счётчик для ограничения символов`,`стрелки навигации для числовых и выборочных полей`,`поддержка автозаполнения, проверки орфографии и автокоррекции`,`интегрирован с компонентом Field для единообразной стилизации`]},import:[`import { ref } from 'vue'`],render:`
      <DesignComponent v-bind="args" />
    `,stories:[{id:`InputTypes`,name:{en:`Input types`,ru:`Типы ввода`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="text" label="Text" placeholder="Enter text" />
          <DesignComponent type="email" label="Email" placeholder="email@example.com" />
          <DesignComponent type="password" label="Password" placeholder="Enter password" />
          <DesignComponent type="number" label="Number" placeholder="0" />
          <DesignComponent type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <DesignComponent type="date" label="Date" />
          <DesignComponent type="search" label="Search" placeholder="Search..." />
        </div>
      `},{id:`InputNumber`,name:{en:`Number formatting`,ru:`Форматирование чисел`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="number" value="1234567" label="Number" />
          <DesignComponent type="number-format" value="1234567" language="en-US" label="Formatted" />
          <DesignComponent type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <DesignComponent type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <DesignComponent type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
      `},{id:`InputCurrency`,name:{en:`Currency & number formatting`,ru:`Валюта и форматирование чисел`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            type="currency"
            label="Price (USD)"
            currency="USD"
          />
          <DesignComponent
            type="currency"
            label="Price (USD)"
            currency="USD"
            value="1234.56"
          />
          <DesignComponent
            type="currency"
            label="Price (currency-hide)"
            currency="EUR"
            currency-hide
            value="1234.56"
          />
        </div>
      `},{id:`InputDate`,name:{en:`Date and time`,ru:`Дата и время`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="date" label="Date" language="ru-RU" />
          <DesignComponent type="datetime" label="Date and Time" language="en-US" />
          <DesignComponent type="year-month" label="Period" language="ru-RU" />
          <DesignComponent type="time" label="Time" />
          <DesignComponent type="hour-minute" label="Hours:Minutes" />
          <DesignComponent type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
      `},{id:`InputMask`,name:{en:`Masked input`,ru:`Маскированный ввод`},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="tel" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" label="Phone" />
          <DesignComponent type="text" mask="**** **** **** ****" placeholder="0000 0000 0000 0000" label="Card" />
          <DesignComponent type="tel" mask="+1 (***) ***-****" :mask-visible="false" label="No placeholder" />
        </div>
      `},{id:`InputVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        inputValue: ref('Initial value'),
        maskValue: ref(''),
        numberValue: ref(42)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ inputValue }}</span>
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="inputValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />

          <div class="wiki-storybook-flex">
            <span>Current value: {{ maskValue }}</span>
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="maskValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="maskValue"
            type="date"
            label="Date input"
          />

          <div class="wiki-storybook-flex">
            <span>Current value: {{ numberValue }}</span>
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <DesignComponent
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
        </div>
      `},{id:`InputSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex-column">
            <DesignComponent
              isSkeleton
              label="Loading field"
              helperMessage="This field is loading..."
            />
            <DesignComponent
              isSkeleton
              label="Another field"
              counterShow
            />
          </div>
        </DesignSkeleton>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Input'} type={'input'}/>

<StorybookDescriptions componentName={'Input'} type={'type'}/>
<Canvas of={Component.InputTypes}/>

<StorybookDescriptions componentName={'Input'} type={'number'}/>
<Canvas of={Component.InputNumber}/>

<StorybookDescriptions componentName={'Input'} type={'currency'}/>
<Canvas of={Component.InputCurrency}/>

<StorybookDescriptions componentName={'Input'} type={'date'}/>
<Canvas of={Component.InputDate}/>

<StorybookDescriptions componentName={'Input'} type={'mask'}/>
<Canvas of={Component.InputMask}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `},ai:{description:`
Primary component for user data entry, wrapping the native <input> element with enhanced functionality. Supports floating labels, validation, masking, and multiple formatting modes (numeric, currency, password).
Features built-in support for input masks (e.g., phone numbers), automatic currency/number formatting, and password visibility toggles. Includes field affixes (prefix/suffix), leading/trailing icons, and a character counter.
Controlled via v-model and type props, emitting standard input/change events. Use for all text-based data collection, from simple names to complex formatted financial or identification data.
    `}},{name:`Image`,description:{en:"Component for displaying images and icons. Based on `ImageDesign` and supports working with files, links, and icon names.",ru:"Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон"},possibilities:{en:["support for various source types: string, `File`, image or PDF address","adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`","cropping and positioning via `coordinator`, `x`, `y`","rotation or hiding the component with properties `turn`, `hide`, `disabled`","mode selection for filling (`size`: `auto`, `contain`, `cover`)"],ru:["поддержка различных типов исходников: строка, `File`, адрес картинки или PDF","адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`","обрезка и позиционирование через `coordinator`, `x`, `y`","поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`","выбор режима заполнения (`size`: `auto`, `contain`, `cover`)"]},render:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,import:[`import { demoPdf, image1, phone1, phone2, phone3 } from '@dxtmisha/wiki/media'`],stories:[{id:`ImageType`,name:{en:`Value type`,ru:`Тип значения`},setup:`
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
      `},{id:`ImageSize`,name:{en:`Display control`,ru:`Отображение`},setup:`
      return {
        image1
      }
      `,template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <DesignComponent :value="image1" size="auto" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <DesignComponent :value="image1" size="contain" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <DesignComponent :value="image1" size="cover" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <DesignComponent :value="image1" :coordinator="[60, 10, 10, 40]" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <DesignComponent :value="image1" x="20%" y="-10%" tag-img/>
          </div>
        </div>
      `},{id:`ImageTagImg`,name:{en:`Using img tag`,ru:`Использование тега img`},setup:`
      return {
        image1
      }
      `,template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Background (default)</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + alt</div>
            <DesignComponent :value="image1" tag-img alt="Example image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + lazy + srcset</div>
            <DesignComponent :value="image1" tag-img lazy alt="Responsive image" :srcset="{ '1x': image1, '2x': image1 }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + picture</div>
            <DesignComponent :value="image1" tag-img alt="Adaptive image" :picture="{ 768: image1, 1024: image1 }"/>
          </div>
        </div>
      `},{id:`ImageAdaptive`,name:{en:`Adapted images`,ru:`Адаптированные изображения`},setup:`
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
            <DesignComponent :value="phone3" adaptive object-width="129.9" tag-img/>
          </div>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Image'} type={'image'}/>
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<StorybookDescriptions componentName={'Image'} type={'flag'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'img-tag'}/>
<Canvas of={Component.ImageTagImg}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
    `,events:`
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,expose:`
<StorybookDescriptions componentName={'Image'} type={'expose'}/>
    `},ai:{render:`
<div
  :class="classDemo.item"
  style="position: relative; width: 48px; height: 48px;"
>
  <Image v-bind="args"/>
</div>
    `,description:`
Universal component for displaying graphic content, including images, Material icons, and PDF files. Automatically detects the content type based on the value string or File object provided.
Features multiple display modes (contain, cover, auto), adaptive scaling (objectWidth/Height), and standard img tag support for SEO and lazy loading. Includes advanced positioning via coordinator and x/y props.
Controlled via the value prop and various sizing/rendering flags. Use for avatars, product photos, system icons, or embedded PDF documents requiring specific cropping and aspect ratio control.
    `}},{name:`List`,description:{en:`Advanced list component with keyboard navigation, search functionality, and hierarchical data support`,ru:`Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных`},possibilities:{en:[`keyboard navigation with arrow keys and shortcuts`,`real-time search and highlight functionality`,`hierarchical data structure with groups and menus`,`focus management and item selection`,`lightweight rendering mode for large datasets`,`customizable item types and rendering`,`event-driven interaction system`,`accessibility support with ARIA attributes`,`automatic scroll management and viewport optimization`,`integration with icons, badges, and other components`],ru:[`навигация с клавиатуры со стрелками и горячими клавишами`,`поиск в реальном времени и функциональность выделения`,`иерархическая структура данных с группами и меню`,`управление фокусом и выбором элементов`,`облегченный режим рендеринга для больших наборов данных`,`настраиваемые типы элементов и рендеринг`,`событийно-ориентированная система взаимодействия`,`поддержка доступности с ARIA атрибутами`,`автоматическое управление прокруткой и оптимизация области просмотра`,`интеграция с иконками, бейджами и другими компонентами`]},stories:[{id:`ListLiteMode`,name:{en:`Lite mode`,ru:`Облегчённый режим`},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Without lite</div>
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
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With lite</div>
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
      `},{id:`ListHighlight`,name:{en:`Highlighting`,ru:`Выделение`},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
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
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
    `,slots:`
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `},ai:{description:`
Core engine for rendering interactive, searchable, and hierarchical lists. Serves as the foundation for complex components like Selects, Dropdowns, and multi-level Navigation Menus.
Features support for multiple item types (group, menu, line, html), real-time search highlighting, and full keyboard navigation. Includes automatic focus management, ARIA accessibility roles, and a "lite" rendering mode for performance optimization with large datasets.
Controlled via the list prop for data and v-model:selected for state tracking. Use as the primary building block for any interface requiring item selection, structured data display, or interactive command menus.
    `}},{name:`ListGroup`,description:{en:`Auxiliary component for the List component to group and organize list items with collapsible structure`,ru:`Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой`},possibilities:{en:[`grouping helper for List component items`,`collapsible/expandable group functionality`,`customizable group header with icon support`,`automatic arrow icon rotation based on state`,`nested group support for complex hierarchies`,`seamless integration with List ecosystem`,`keyboard navigation and accessibility`,`smooth animation transitions`,`flexible content management through slots`],ru:[`помощник группировки для элементов компонента List`,`функциональность сворачиваемой/разворачиваемой группы`,`настраиваемый заголовок группы с поддержкой иконок`,`автоматический поворот стрелки в зависимости от состояния`,`поддержка вложенных групп для сложных иерархий`,`бесшовная интеграция с экосистемой List`,`навигация с клавиатуры и доступность`,`плавные анимационные переходы`,`гибкое управление контентом через слоты`]},render:`
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
<StorybookDescriptions componentName={'Expose'} type={'open'}/>
    `,slots:`
<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <ListGroup v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds">head</span>
    </template>
    <template #list>
      list
    </template>
  </ListGroup>
</div>
    `,description:`
Structural component for grouping related list items into collapsible/expandable hierarchies. Manages the visual nesting and visibility of child elements, providing organized categorization within dense lists.
Features smooth height animations via MotionTransform and integrated header functionality with automatic arrow rotation. Exposes localized bindings in the #head slot to correctly link triggers with their collapsible content.
Controlled via the open prop and utilizes #head and #list slots for content distribution. Use for navigation submenus, categorized data lists, or accordion-style expanding rows.
    `,hide:!0}},{name:`ListItem`,description:{en:`Versatile list item component for displaying structured content`,ru:`Универсальный компонент элемента списка для отображения структурированного контента`},possibilities:{en:[`multiple content areas: label, description, prefix, suffix, caption`,`icon support with flexible positioning and alignment`,`badge integration for status indicators`,`interactive states: focus, selected, disabled, readonly`,`progress and skeleton loading states`,`ripple effect for enhanced user feedback`,`flexible tag options: button, link, div, span`,`built-in accessibility support`,`customizable through design tokens`],ru:[`множественные области контента: метка, описание, префикс, суффикс, заголовок`,`поддержка иконок с гибким позиционированием и выравниванием`,`интеграция значков для индикаторов статуса`,`интерактивные состояния: фокус, выбранный, отключенный, только для чтения`,`состояния загрузки с прогрессом и скелетоном`,`эффект пульсации для улучшенной обратной связи`,`гибкие варианты тегов: кнопка, ссылка, div, span`,`встроенная поддержка доступности`,`настраиваемый через токены дизайна`]},render:`
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    <DesignComponent v-bind="args"/>
    `,import:[],stories:[{id:`ListItemBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
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
          </div>
        </div>
      `},{id:`ListItemHighlight`,name:{en:`Highlighting`,ru:`Выделение`},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent highlight="search" label="Search result item"/>
            <DesignComponent highlight="tex" :highlightLengthStart="3" label="Text with highlighting"/>
            <DesignComponent highlight="te" :highlightLengthStart="3" label="Text without highlighting (too short)"/>
            <DesignComponent highlight="example" :highlightLengthStart="2" label="Example text for highlighting"/>
          </div>
        </div>
      `},{id:`ListItemFill`,name:{en:`Fill`,ru:`Заливка`},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <DesignComponent label="Default fill"/>
            <DesignComponent fill="#ff0000" label="Red fill"/>
            <DesignComponent fill="rgb(0, 128, 255)" label="Blue fill"/>
            <DesignComponent fill="rgba(255, 165, 0, 0.7)" label="Orange transparent fill"/>
          </div>
        </div>
      `},{id:`ListItemSkeleton`,name:{en:`Skeleton loading`,ru:`Загрузка скелетона`},components:[`Skeleton`],template:`
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
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'prefix'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'suffix'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'ListItem'} type={'slots'}/>
    `},ai:{description:`
Versatile structural component for rendering items within lists, menus, or navigation bars. Provides a standardized layout with high-density content support for labels, descriptions, and metadata.
Features dedicated slots for prefix (leading), content (central), suffix (trailing metadata), and trailing (action indicators). Includes built-in support for icons, badges, selected states, and interactive feedback like ripple effects.
Controlled via label, description, and href/to props; renders as an <a> tag when navigating. Use for building navigation menus, data-rich list rows, or simple clickable interactive elements.
    `}},{name:`ListMenu`,description:{en:`Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure`,ru:`Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой`},possibilities:{en:[`menu helper for List component navigation`,`expandable/collapsible submenu functionality`,`customizable menu header with icon support`,`automatic arrow icon rotation based on state`,`nested menu support for complex hierarchies`,`seamless integration with List ecosystem`,`keyboard navigation and accessibility`,`smooth animation transitions`,`flexible menu content management through slots`],ru:[`помощник меню для навигации компонента List`,`функциональность раскрывающихся/сворачивающихся подменю`,`настраиваемый заголовок меню с поддержкой иконок`,`автоматический поворот стрелки в зависимости от состояния`,`поддержка вложенных меню для сложных иерархий`,`бесшовная интеграция с экосистемой List`,`навигация с клавиатуры и поддержка доступности`,`плавные анимационные переходы`,`гибкое управление содержимым меню через слоты`]},render:`
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
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,slots:`
<StorybookDescriptions componentName={'ListGroup'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <ListMenu embedded :window-attrs="{open: true}" v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds as any">head</span>
    </template>
    <template #list>
      list
    </template>
  </ListMenu>
</div>
    `,description:`
Specialized wrapper component for creating dropdown menus or nested navigation trees. Utilizes dynamic window positioning to display a list of actions or sub-options relative to a trigger element.
Features an adaptive menu preset managing visibility, positioning (popover vs inline), and interaction modes. Exposes standard binds in the #head slot to automate trigger setup and ensures smooth animations during state transitions.
Controlled via the windowAttrs prop for positioning and utilizes #head and #list slots for trigger and content. Use for context menus, account settings dropdowns, or multi-level primary navigation links.
    `,hide:!0}},{name:`Mask`,description:{en:`Input masking utility for text, numbers, currency and dates with flexible patterns and validation.`,ru:`Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией.`},possibilities:{en:[`string or multi-pattern masks (auto selection)`,`special symbols define input groups and literals are auto-inserted`,`per-group and global validation patterns`,`number / currency formats with grouping and fraction control`,`date/time helpers and locale-aware behavior`],ru:[`одиночные и множественные маски (автовыбор по вводу)`,`спецсимволы задают группы ввода, литералы подставляются автоматически`,`валидация по группам и глобально`,`форматы числа/валюты с группировкой и дробной частью`,`помощники для даты/времени и поведение с учётом локали`]},import:[],render:`
    <div class="wiki-storybook-group" >
      <DesignComponent
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `,stories:[{id:`MaskBasic`,name:{en:`Mask Examples`,ru:`Примеры масок`},template:`
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
      `},{id:`MaskSpecial`,name:{en:`Special Characters`,ru:`Специальные символы`},template:`
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
      `},{id:`MaskValidation`,name:{en:`Validation`,ru:`Валидация`},template:`
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
      `},{id:`MaskGroupSave`,name:{en:`Group navigation (groupSave)`,ru:`Навигация по группам (groupSave)`},template:`
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
      `},{id:`MaskMatch`,name:{en:`Allowed characters (match)`,ru:`Допустимые символы (match)`},template:`
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
      `},{id:`MaskNumberTypes`,name:{en:`Numeric types`,ru:`Числовые типы`},template:`
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
      `},{id:`MaskDateTypes`,name:{en:`Date and time types`,ru:`Типы дат и времени`},template:`
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
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'beforeinput'}/>
<StorybookDescriptions componentName={'Event'} type={'reset'}/>
<StorybookDescriptions componentName={'Event'} type={'focus'}/>
<StorybookDescriptions componentName={'Event'} type={'keyboard'}/>
<StorybookDescriptions componentName={'Event'} type={'paste'}/>
    `,expose:`
<StorybookDescriptions componentName={'Mask'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'clear'}/>
    `},ai:{description:`
Low-level input masking utility for controlling and formatting text, numeric, and date/time data entry. Intercepts input events to enforce strict patterns, automatically inserting literal characters and validating each keystroke against allowed rules.
Features support for single or multiple patterns (auto-selection), specialized input types (currency, number-format), and locale-aware date/time validation. Includes granular control over allowed characters (match), decimal fractions, and value range constraints (min/max).
Integrated primarily within the Input component; should generally not be used as a standalone element. Controlled via mask and type props, providing a foundation for phone numbers, credit card fields, and international financial inputs.
    `,hide:!0}},{name:`Menu`,description:{en:`Composite menu that combines Window, Bars, and List for nested interactive navigation`,ru:`Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации`},possibilities:{en:[`popup container from Window with control/title/footer slots`,`toolbar actions via Bars and hierarchical items via List`,`nested groups and menus with keyboard focus and selection`,`lightweight rendering for large menus (lite + liteThreshold)`,`custom fields mapping with keyLabel and keyValue`,`custom item attributes and container attributes (itemAttrs, listAttrs)`],ru:[`всплывающий контейнер из Window со слотами control/title/footer`,`действия панели через Bars и иерархия пунктов через List`,`вложенные группы и меню с фокусом с клавиатуры и выбором`,`облегчённый рендер для больших меню (lite + liteThreshold)`,`кастомное сопоставление полей через keyLabel и keyValue`,`настройка атрибутов пунктов и списка (itemAttrs, listAttrs)`]},import:[`import { ref } from 'vue'`],render:`
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </DesignComponent>
  `,stories:[{id:`MenuNavigation`,name:{en:`Navigation with previous/next`,ru:`Навигация с previous/next`},setup:`
      return {
        selectedValue: ref('color2'),
        colors: ref([
          {label: '[1]Red', value: 'color1', icon: 'palette'},
          {label: '[2]Green', value: 'color2', icon: 'palette'},
          {label: '[3]Blue', value: 'color3', icon: 'palette'},
          {label: '[4]Yellow', value: 'color4', icon: 'palette'},
          {label: '[5]Purple', value: 'color5', icon: 'palette'},
          {label: '[6]Orange', value: 'color6', icon: 'palette'}
        ]),
        step: ref(1)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Step size:</div>
            <div class="wiki-storybook-flex">
              <button class="wiki-storybook-button" @click="step = 1">1 item</button>
              <button class="wiki-storybook-button" @click="step = 2">2 items</button>
              <button class="wiki-storybook-button" @click="step = 3">3 items</button>
            </div>
          </div>

          <DesignComponent
            v-model:selected="selectedValue"
            :list="colors"
            :step="step"
            is-selected-by-value
          >
            <template #control="{previous, next, selectedNames, open}">
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <div class="wiki-storybook-flex">
                  <button
                    class="wiki-storybook-button"
                    @click="previous"
                    style="padding: 4px 12px;"
                  >
                    ◀ Previous
                  </button>
                  <div style="flex: 1; text-align: center; font-weight: 500;">
                    {{ selectedNames.value[0] || 'None' }}
                  </div>
                  <button
                    class="wiki-storybook-button"
                    @click="next"
                    style="padding: 4px 12px;"
                  >
                    Next ▶
                  </button>
                </div>
              </div>
            </template>
          </DesignComponent>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div>Selected: {{ selectedValue }}</div>
            <div>Step: {{ step }}</div>
          </div>
        </div>
      `},{id:`MenuAjax`,name:{en:`AJAX Loading`,ru:`AJAX Загрузка`},setup:`
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
      `},{id:`MenuVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        selectedValue: ref('settings'),
        menuItems: ref([
          {label: 'Dashboard', value: 'dashboard', icon: 'dashboard'},
          {label: 'Users', value: 'users', icon: 'people'},
          {label: 'Settings', value: 'settings', icon: 'settings'},
          {label: 'Reports', value: 'reports', icon: 'assessment'},
          {label: 'Help', value: 'help', icon: 'help'}
        ])
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selectedValue = 'dashboard'">Select Dashboard</button>
            <button class="wiki-storybook-button" @click="selectedValue = 'reports'">Select Reports</button>
            <button class="wiki-storybook-button" @click="selectedValue = ''">Clear</button>
          </div>
          <div class="wiki-storybook-flex">
            <DesignComponent
              v-model:selected="selectedValue"
              :list="menuItems"
              is-selected-by-value
            >
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">
                  Open Menu
                </button>
              </template>
            </DesignComponent>
          </div>
          <div>Selected value: {{ selectedValue }}</div>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Menu'} type={'menu'}/>

<StorybookDescriptions componentName={'Menu'} type={'navigation'}/>
<Canvas of={Component.MenuNavigation}/>

<StorybookDescriptions componentName={'Menu'} type={'ajax'}/>
<Canvas of={Component.MenuAjax}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.MenuVModel}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
    `,slots:`
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Menu embedded :window-attrs="{open: true}" v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </button>
    </template>
  </Menu>
</div>
    `,description:`
Comprehensive navigational component that integrates a trigger (Control), a floating container (Window), and a structured dataset (List). Designed for multi-level menus, context-sensitive actions, and complex selection interfaces requiring icons or grouping.
Features support for hierarchical data structures (nested submenus), real-time AJAX loading, and full keyboard accessibility. Includes sophisticated focus management, automatic positioning relative to the trigger, and a lite rendering mode for optimized performance with large lists.
Controlled via the list prop for items and v-model:selected for state tracking. Use for user profile menus, sidebar navigation, or advanced select-like UI patterns where standard dropdowns lack sufficient structural flexibility.
    `}},{name:`Modal`,description:{en:`Simplified wrapper over a Window component for creating centered modal dialogs`,ru:`Упрощенная обертка над компонентом Window для создания центрированных модальных диалогов`},possibilities:{en:[`pre-configured modal window with centered positioning`,`overlay backdrop with background blocking`,`close on the ESC key and click outside`,`integration with scrollbar for long content`,`slots for title, content and footer customization`,`lifecycle events (preparation, opening, closing)`,`close a button with a customizable icon`,`programmatic control via a v-model:open`,`focus management and keyboard navigation`,`responsive design with mobile optimization`],ru:[`предварительно настроенное модальное окно с центрированием`,`оверлей с блокировкой фона`,`закрытие по ESC и клику вне области`,`интеграция со скроллбаром для длинного контента`,`слоты для настройки заголовка, содержимого и подвала`,`события жизненного цикла (preparation, opening, closing)`,`кнопка закрытия с настраиваемой иконкой`,`программное управление через v-model:open`,`управление фокусом и клавиатурная навигация`,`адаптивный дизайн с оптимизацией для мобильных`]},import:[`import { ref } from 'vue'`],render:`
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Modal</button>
        </template>

        <template #default>
          <h4>Modal Component Overview</h4>
          <p>Modal is a specialized wrapper around the Window component with preset adaptive mode set to 'modal'. It provides a simplified API for creating centered modal dialogs without needing to configure positioning and adaptive behavior manually.</p>

          <p>The component automatically handles common modal dialog scenarios including confirmations, forms, alerts, and content previews. It manages focus, scroll behavior, and keyboard navigation to ensure accessibility and optimal user experience across different devices and screen sizes.</p>

          <h4>Best Practices</h4>
          <p>Use modals sparingly and only for content that genuinely requires immediate attention. Ensure modals have clear actions (confirm/cancel), provide easy ways to dismiss them, and avoid nesting modals within modals. The component should be large enough to display content comfortably but not so large that it overwhelms the screen.</p>

          <h4>Relationship with Window</h4>
          <p>Modal is essentially Window with <code>adaptive="modal"</code> preset, simplifying the usage for standard dialog scenarios. All Window properties, slots, and events are available in a Modal component.</p>
        </template>
      </DesignComponent>
    `,stories:[{id:`ModalVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>
          </div>

          <DesignComponent v-model:open="open">
            <div class="wiki-storybook-item--padding">Your content here</div>
          </DesignComponent>
        </div>
      `},{id:`ModalAllSlots`,name:{en:`All slots demonstration`,ru:`Демонстрация всех слотов`},template:`
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>Title slot</template>
          <template #default>Default slot</template>
          <template #footer>Footer slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Modal'} type={'modal'}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.ModalVModel}/>

<StorybookDescriptions componentName={'Modal'} type={'differences'}/>
    `,events:`
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Event'} type={'bars'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,slots:`
<Canvas of={Component.ModalAllSlots}/>
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Modal embedded open v-bind="args">
    <template #default>
      <p>This is a modal dialog.</p>
    </template>
  </Modal>
</div>
    `,description:`
Simplified wrapper over the Window component pre-configured for centered modal dialogs. Provides a high-level API for typical interaction patterns like confirmation prompts, info alerts, and data entry forms.
Features automatic overlay management, background interaction blocking, and body scroll locking. Includes built-in focus trapping, Esc key dismissal, and responsive layout optimization (adaptive="modal") for consistent mobile and desktop UX.
Controlled via the v-model:open prop and utilizes #control, #title, and #footer slots for modular layout. Use for critical user notifications, blocking confirmation steps, or focused sub-tasks requiring immediate attention.
    `}},{name:`MotionAxis`,description:{en:`A component for organizing transitions between elements (slides). Allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM).`,ru:`Компонент для организации переходов между элементами (слайдами). Позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM).`},possibilities:{en:[`Slide transition animation along X, Y, Z axes`,`Automatic or manual direction control (next/back)`,`Smooth container height animation to fit content`,`Slide lifecycle management in DOM (inDom, inDomSlide)`,`Slot support for each slide`],ru:[`Анимация смены слайдов по осям X, Y, Z`,`Автоматическое или ручное управление направлением (вперед/назад)`,`Плавная анимация высоты контейнера под контент`,`Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)`,`Поддержка слотов для каждого слайда`]},render:`
    <DesignComponent v-bind="args">
      <template #slide1>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </template>
    </DesignComponent>
`,import:[`import { ref } from 'vue'`],stories:[{id:`MotionAxisBasic`,name:{en:`Basic Usage`,ru:`Базовое использование`},setup:`
      const selected = ref('slide1')
      return { selected }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <DesignComponent :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </DesignComponent>
        </div>
      `},{id:`MotionAxisScroll`,name:{en:`Scroll Management`,ru:`Управление скроллом`},setup:`
      const selected = ref('short')
      return { selected }
      `,template:`
        <div class="wiki-storybook-flex-column design-component__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button" @click="selected = 'long'">long</button>
          </div>

          <DesignComponent :selected="selected">
            <template #short>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Short content
              </div>
            </template>
            <template #long>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Long content that causes scrolling.<br>
                Scroll down to see more.<br>
                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>
                End of content.
              </div>
            </template>
          </DesignComponent>
        </div>
      `},{id:`MotionAxisVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      const selected = ref('slide1')
      return { selected }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>

          <DesignComponent v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </DesignComponent>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'MotionAxis'} type={'motionAxis'}/>
<Canvas of={Component.MotionAxisBasic}/>

<StorybookDescriptions componentName={'MotionAxis'} type={'classes'}/>
<Canvas of={Component.MotionAxisScroll}/>

<StorybookDescriptions componentName={'MotionAxis'} type={'v-model'}/>
<Canvas of={Component.MotionAxisVModel}/>
    `,events:`
<StorybookDescriptions componentName={'MotionAxis'} type={'events'}/>
    `,expose:`
<StorybookDescriptions componentName={'MotionAxis'} type={'expose'}/>
    `,slots:`
<StorybookDescriptions componentName={'MotionAxis'} type={'slots'}/>
    `},ai:{description:`
Low-level layout component for animating transitions between multiple content areas (slides) along X, Y, or Z axes. Ideal for multi-step wizards, tabbed content, and gallery-like interfaces requiring direction-aware motion.
Features automated animation direction detection (next/back), smooth container height transitions, and lazy loading support to manage slide life-cycles in the DOM. Supports horizontal slide, vertical flip, and depth-based transitions with customizable speed and easing.
Controlled via the selected prop or v-model:selected, utilizing numbered slide slots (#slide1, #slide2, etc.) for content distribution. Use when content needs to transition within a fixed or dynamic container while maintaining high visual polish and spatial orientation.
    `}},{name:`MotionTransform`,description:{en:`Low-level motion system that manages element transforms, state transitions, and interaction events for contextual UI like windows and menus`,ru:`Низкоуровневая система анимаций, управляющая трансформациями элементов, переходами состояний и событиями взаимодействия для контекстных интерфейсов (окна, меню)`},possibilities:{en:[`centralized state for open/show/teleport with computed accessors`,`size measurement and CSS variable updates for smooth animations`,`teleport control for window-like behavior and off-DOM rendering`,`click/close/auto-close handling with ignore areas`,`programmatic API for open/close/toggle and state transitions`,`designed to be embedded into higher-level components (Window, Dropdown, etc.)`],ru:[`централизованное состояние open/show/teleport с вычисляемыми аксессорами`,`измерение размеров и обновление CSS‑переменных для плавных анимаций`,`управление телепортацией для «оконного» поведения и рендера вне DOM`,`обработка кликов/закрытия/автозакрытия с зонами игнорирования`,`программный API для open/close/toggle и переходов состояний`,`предназначена для встраивания в компоненты верхнего уровня (Window, Dropdown и т. п.)`]},render:`
      <DesignComponent v-bind="args">
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
    `,import:[`import { ref } from 'vue'`],stories:[{id:`MotionTransformAnimationHeadPosition`,name:{en:`Head position animation`,ru:`Анимация позиции заголовка`},template:`
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
      `},{id:`MotionTransformIgnore`,name:{en:`Ignore zones`,ru:`Зоны игнорирования`},template:`
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
      `},{id:`MotionTransformVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
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
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'MotionTransform'} type={'motionTransform'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'classes'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'animationHeadPosition'}/>
<Canvas of={Component.MotionTransformAnimationHeadPosition}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'ignore'}/>
<Canvas of={Component.MotionTransformIgnore}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.MotionTransformVModel}/>
    `,events:`
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,expose:`
<StorybookDescriptions componentName={'MotionTransform'} type={'expose'}/>
    `,slots:`
<StorybookDescriptions componentName={'MotionTransform'} type={'slots'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <MotionTransform :auto-close="false" v-bind="args">
    <template #head>
      <button class="wiki-storybook-button">Toggle Content</button>
    </template>
    <template #body>
      <div class="wiki-storybook-item--padding">
        <p>Expandable content goes here.</p>
      </div>
    </template>
  </MotionTransform>
</div>
    `,description:`
Low-level motion engine designed for complex component transitions like windows, dropdowns, and collapsible sections. Provides a unified system for managing element transforms, off-DOM teleportation, and interaction patterns (click-outside, etc.).
Features dynamic size measurement with automatic CSS variable updates for smooth hardware-accelerated animations. Includes a robust state manager (open/show/teleport), focus trapping, and customizable interaction ignoring areas for triggers.
Controlled via the v-model:open prop and utilizes #head and #body slots for layout. Use as a foundational utility when building custom interactive components requiring sophisticated motion, state transitions, and high-performance DOM manipulation.
    `}},{name:`Page`,description:{en:`A top-level semantic container component representing the main content of a document. It uses the <main> tag by default and supports high-level headers and descriptions.`,ru:`Семантический компонент-контейнер верхнего уровня, представляющий основное содержимое документа. По умолчанию использует тег <main> и поддерживает заголовки высокого уровня.`},possibilities:{en:[`semantic wrapper for main content using <main> tag`,`support for main titles (h1 by default), labels, descriptions, and captions`,`customizable layout and spacing`,`support for icons`,`flexible content organization`],ru:[`семантическая обертка для основного контента с использованием тега <main>`,`поддержка главных заголовков (h1 по умолчанию), меток, описаний и подписей`,`настраиваемый макет и отступы`,`поддержка иконок`,`гибкая организация контента`]},import:[],render:`
      <DesignComponent v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </DesignComponent>
    `,stories:[{id:`PageBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <DesignComponent
          headline="User Dashboard"
          label="Overview"
          description="View your account analytics and recent activity."
        >
          <p>Welcome to your dashboard. Here you can find a summary of your performance and manage your account settings.</p>
        </DesignComponent>
      `},{id:`PageSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Page'} type={'block'}/>
<Canvas of={Component.PageBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,slots:`
<Canvas of={Component.PageSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,expose:`
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`},ai:{render:`
<div :class="classDemo.item">
  <Page v-bind="args">
      Main page content.
  </Page>
</div>
    `,description:`
Top-level structural container designed to wrap the primary content of a view or document. Serves as a semantic root (typically rendering a <main> tag) and establishes the high-level document hierarchy with standardized headers.
Features a comprehensive header structure inherited from the Block component, including support for headlines (h1), labels (page titles), descriptions, and trailing action areas. Automatically manages spacing and layout consistency for page-level navigation and identity.
Controlled via headline, label, and icon props, with dedicated slots for content and actions (#default, #trailing). Use as the foundational wrapper for any route or unique screen to ensure accessibility and consistent information architecture.
    `}},{name:`PageArea`,description:{en:`A structural component that automatically selects and renders appropriate UI blocks (Page, Section, Block, or Group) based on the current nesting level or area context.`,ru:`Структурный компонент, который автоматически выбирает и отрисовывает подходящие блоки интерфейса (Page, Section, Block или Group) в зависимости от текущего уровня вложенности или контекста области.`},possibilities:{en:[`automatic component switching based on area context`,`semantic content organization with consistent structure`,`integration with layout zones and hierarchical state`,`shorthand for complex page layouts with nested elements`],ru:[`автоматическое переключение компонентов на основе контекста области`,`семантическая организация контента с согласованной структурой`,`интеграция с зонами макета и иерархическим состоянием`,`сокращенная запись для сложных макетов страниц с вложенными элементами`]},import:[],render:`
      <DesignComponent v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </DesignComponent>
  `,stories:[{id:`PageAreaBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <DesignComponent>
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </DesignComponent>
      `},{id:`PageAreaSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'PageArea'} type={'pageArea'}/>
<Canvas of={Component.PageAreaBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
    `,slots:`
<Canvas of={Component.PageAreaSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `},ai:{description:`
The PageArea component serves as a foundational structural unit for application pages.
It helps define the main content zones and ensures consistent layout management across different views.
Typically used as a root-level container within a specific page or sub-section to organize content blocks and handle area-specific logic.
    `}},{name:`Progress`,description:{en:`Component for displaying progress of operations or loading states`,ru:`Компонент для отображения прогресса операций или состояний загрузки`},possibilities:{en:[`linear and circular progress indicators`,`determinate and indeterminate progress states`,`customizable value and maximum values`,`different positioning options (top, bottom, static)`,`delay settings for showing and hiding`,`dense and inverse styling variants`,`point mode for minimal display`],ru:[`линейные и круглые индикаторы прогресса`,`детерминированные и неопределенные состояния прогресса`,`настраиваемые значения прогресса и максимума`,`различные варианты позиционирования (сверху, снизу, статично)`,`настройки задержки для показа и скрытия`,`компактный и инвертированный варианты стилизации`,`точечный режим для минимального отображения`]},render:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,import:[`import { ref } from 'vue'`],stories:[{id:`ProgressTypes`,name:{en:`Types`,ru:`Типы`},template:`
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
      `},{id:`ProgressLinear`,name:{en:`Linear Progress`,ru:`Линейный прогресс`},template:`
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
      `},{id:`ProgressCircular`,name:{en:`Circular Progress`,ru:`Круглый прогресс`},template:`
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
      `},{id:`ProgressValues`,name:{en:`Values`,ru:`Значения`},template:`
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
      `},{id:`ProgressDelays`,name:{en:`Delays`,ru:`Задержки`},setup:`
      const visible = ref(false)
      return {
        visible,
        onClick: () => {
          visible.value = !visible.value
        }
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Visible: {{ visible }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
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
    `},ai:{render:`
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 40px;"
>
  <Progress v-bind="args"/>
</div>
    `,description:`
Status indicator for ongoing processes, supporting both linear and circular visual styles. Capable of representing determinate (known percentage) and indeterminate (loading) states with customizable delays for showing/hiding.
Features horizontal bars (linear) and spinner rings (circular) with multiple indeterminate animation types. Includes advanced positioning (top, bottom, static), dense styling for compact UIs, and a point mode for minimal pulsating indicators.
Controlled via the visible, value, and indeterminate props, with support for custom min/max bounds. Use for page-level loading bars, button action feedback, or inline file upload progress.
    `}},{name:`Ripple`,description:{en:`Component for creating a ripple wave effect on click interactions`,ru:`Компонент для создания эффекта волны при взаимодействии с элементом`},possibilities:{en:[`it creates a ripple wave effect on click`,`automatic positioning based on click coordinates`,"disabling effect with `disabled` property",`Material Design inspired animation`,`it works with any interactive elements`],ru:[`создает эффект волны при клике`,`автоматическое позиционирование по координатам клика`,"отключение эффекта свойством `disabled`",`анимация в стиле Material Design`,`работает с любыми интерактивными элементами`]},render:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <DesignComponent v-bind="args"/>
      </div>
    `,import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Ripple'} type={'ripple'}/>
    `},ai:{render:`
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 48px;"
>
  <Ripple v-bind="args"/>
</div>
    `,description:`
Low-level decorative utility that provides Material Design-style visual feedback on user interactions. Automatically generates a dynamic wave effect at the exact coordinates of a pointerdown event within its parent container.
Features automated animation lifecycle management, including expansion, fade-out, and DOM cleanup. Inherits visual styling directly from the host element via currentColor and requires the parent to have relative positioning and hidden overflow to function correctly.
Primarily integrated within interactive components like Buttons, ListItems, and Cards; should generally not be manually implemented. Controlled via the disabled prop, serving as a subtle but high-polish affordance for touch and click actions.
    `}},{name:`Scrollbar`,description:{en:`Custom scrollbar component for enhanced user experience`,ru:`Компонент кастомного скроллбара для улучшения пользовательского опыта`},possibilities:{en:[`custom scrollbar styling and appearance`,`dynamic divider lines based on scroll position`,`static divider lines at top and bottom`,`visibility control for scrolling behavior`,`inverse divider behavior options`,`hide all divider lines functionality`],ru:[`кастомная стилизация и внешний вид скроллбара`,`динамические разделительные линии в зависимости от позиции скролла`,`статичные разделительные линии сверху и снизу`,`управление видимостью для поведения прокрутки`,`опции инвертированного поведения разделителей`,`функция скрытия всех разделительных линий`]},render:`
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
<StorybookDescriptions componentName={'Scrollbar'} type={'emits'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Scrollbar v-bind="args" style="height: 128px">
    <h3>Modern Web Interfaces and User Experience Design</h3>
    <p>In today's digital landscape, creating high-quality user
    interfaces has become a critical aspect of web application development.
    User interface components must not only be functional but also provide
    intuitive interaction patterns that enhance the overall user experience.
    The evolution of web technologies has enabled developers to create more
    sophisticated and engaging interfaces.</p>

    <p>Scrollbars play a particularly important role in content navigation
    and information architecture. They allow users to easily navigate through
    large volumes of information while maintaining context and orientation within
    the document structure. Modern scrollbars should be adaptive, responsive,
    and visually appealing while providing consistent behavior across different
    platforms and devices.</p>

    <h4>Principles of Effective Design Implementation</h4>
    <p>Effective scrollbar design takes into account multiple factors ranging
    from performance optimization to accessibility compliance. It's essential
    to ensure smooth animations, proper handling of various input devices, and
    comprehensive keyboard navigation support. Cross-browser compatibility remains
    a top priority, especially when dealing with custom scrollbar implementations
    that need to work consistently across different rendering engines.</p>

    <p>Users expect scrollbars to work predictably and uniformly throughout
    all parts of an application. This requires thorough testing and optimization
    for various usage scenarios, including mobile devices, desktop computers,
    and touch-enabled interfaces. The component must handle edge cases gracefully
    and provide appropriate feedback for user interactions.</p>
  </Scrollbar>
</div>
    `,description:`
Structural container that provides custom scrolling behavior and visual status indicators (borders/dividers) based on content overflow. Essential for maintaining spatial context in fixed-height areas like menus, modals, and sidebars.
Features dynamic scroll position detection to show/hide top and bottom dividers based on visibility of content edges. Supports custom border styling, inverse divider logic, and specialized visibility controls for different scroll states.
Controlled via the tag and divider props, requiring a defined height or max-height to enable active scrolling. Use as a base wrapper for any dense content block requiring clear visual cues that more data is available above or below.
    `}},{name:`Section`,description:{en:`A semantic container component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <section> tag by default.`,ru:`Семантический компонент-контейнер, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <section>.`},possibilities:{en:[`semantic grouping of content using <section> tag`,`support for titles (h2 by default), labels, descriptions, and captions`,`customizable layout and spacing`,`support for icons`,`flexible content organization`],ru:[`семантическая группировка контента с использованием тега <section>`,`поддержка заголовков (h2 по умолчанию), меток, описаний и подписей`,`настраиваемый макет и отступы`,`поддержка иконок`,`гибкая организация контента`]},import:[],render:`
      <DesignComponent v-bind="args">
        <p>
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </DesignComponent>
    `,stories:[{id:`SectionBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <DesignComponent
          headline="User Profile Settings"
          label="Personalization"
          description="Customize your experience and notification preferences."
        >
          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>
        </DesignComponent>
      `},{id:`SectionSlots`,name:{en:`Slots usage`,ru:`Использование слотов`},template:`
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Section'} type={'block'}/>
<Canvas of={Component.SectionBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,slots:`
<Canvas of={Component.SectionSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,expose:`
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`},ai:{render:`
<div :class="classDemo.item">
  <Section v-bind="args">
      Content of the section.
  </Section>
</div>
    `,description:`
Structural component used to divide a page into distinct thematic areas, serving as a semantic alias for the Block component. Provides a standardized header structure for grouping related content within a coherent layout.
Features a flexible header with support for icons, labels (titles), captions, and trailing action areas. Inherits all layout and styling capabilities from the Block component, including support for custom semantic tags (defaulting to <section>) and high-level category headlines.
Controlled via headline, label, and icon props, with dedicated slots for primary content and secondary actions. Use to logically organize and category-label information within the flow of a Page or complex Dashboard.
    `}},{name:`Select`,description:{en:`Complete select dropdown control combining Field, Menu, SelectValue and Input for sophisticated selection interface`,ru:`Полнофункциональный элемент выбора из выпадающего списка, объединяющий Field, Menu, SelectValue и Input для продвинутого интерфейса выбора`},possibilities:{en:[`single or multiple value selection`,`built-in search and filtering capabilities`,`editable selected value mode (editValue)`,`AJAX data loading with caching support`,`filter mode for real-time option filtering`,`validation with standard Field features`,`keyboard navigation and accessibility`,`custom option list via slots or data`,`icon support for dropdown arrow and search`,`auto-close control for multiple selection`,`integration with all Field component features (label, counter, messages, icons)`],ru:[`выбор одиночного или множественных значений`,`встроенный поиск и возможности фильтрации`,`режим редактирования выбранного значения (editValue)`,`AJAX загрузка данных с поддержкой кеширования`,`режим фильтрации для реального времени`,`валидация со стандартными функциями Field`,`клавиатурная навигация и доступность`,`пользовательский список опций через слоты или данные`,`поддержка иконок для стрелки выпадающего списка и поиска`,`управление автозакрытием для множественного выбора`,`интеграция со всеми возможностями компонента Field (подпись, счётчик, сообщения, иконки)`]},import:[`import { ref } from 'vue'`],render:`
      <DesignComponent v-bind="args" />
    `,stories:[{id:`SelectBasic`,name:{en:`Basic`,ru:`Базовые`},setup:`
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
      `,template:`
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
      `},{id:`SelectVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      const valueSingle = ref('option2')
      const valueMultiple = ref(['option1', 'option3'])
      const options = [
        { label: 'First option', value: 'option1' },
        { label: 'Second option', value: 'option2' },
        { label: 'Third option', value: 'option3' }
      ]

      return { valueSingle, valueMultiple, options }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueSingle }}</strong></span>
            <button class="wiki-storybook-button" @click="valueSingle = 'option1'">option 1</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option2'">option 2</button>
            <button class="wiki-storybook-button" @click="valueSingle = 'option3'">option 3</button>
          </div>

          <DesignComponent
            v-model="valueSingle"
            type="select"
            label="Single select"
            :option="options"
          />

          <div class="wiki-storybook-flex-align-center">
            <span>Value: <strong>{{ valueMultiple }}</strong></span>
            <button class="wiki-storybook-button" @click="valueMultiple = ['option1', 'option2']">option 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="valueMultiple = []">Clear</button>
          </div>

          <DesignComponent
            v-model="valueMultiple"
            type="select"
            label="Multiple select"
            multiple
            :option="options"
          />
        </div>
      `},{id:`SelectSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
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
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Select'} type={'select'}/>
<Canvas of={Component.SelectBasic}/>

<StorybookDescriptions componentName={'Value'} type={'value'}/>
<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.SelectVModel}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.SelectSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'validation'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
    `},ai:{description:`
High-level form control that combines a trigger field, a dropdown menu, and a structured value display (Chips or text). Designed for choosing single or multiple items from static lists or dynamic datasets with built-in search and filtering.
Features support for AJAX data loading with caching, multiple selection with chips, and an editable combobox mode (editValue). Includes integrated validation, keyboard navigation, and full Field component functionality (labels, icons, and state messages).
Controlled via the option prop for data and v-model for state tracking, supporting custom key mapping (keyLabel/keyValue). Use for user selection, category filtering, or complex multi-select interfaces requiring real-time search.
    `}},{name:`SelectValue`,description:{en:`Display component for selected values in select controls, showing chips for multiple selection or single text value`,ru:`Компонент отображения выбранных значений в элементах выбора, показывающий чипы для множественного выбора или одиночное текстовое значение`},possibilities:{en:[`single or multiple value display modes`,`automatic chip rendering for multiple selections`,`placeholder support for empty state`,`cancel icon for clearing individual selections`,`customizable chip appearance via chipAttrs`,`optional icon display in chips`,`responsive handling of selected items`,`disabled and readonly states support`],ru:[`режимы отображения одиночного или множественного значения`,`автоматический рендеринг чипов для множественного выбора`,`поддержка плейсхолдера для пустого состояния`,`иконка отмены для очистки отдельных выборов`,`настраиваемый внешний вид чипов через chipAttrs`,`опциональное отображение иконок в чипах`,`адаптивная обработка выбранных элементов`,`поддержка состояний disabled и readonly`]},import:[],stories:[{id:`SelectValueBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Placeholder</div>
            <DesignComponent placeholder="Select option"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single value</div>
            <DesignComponent :value="[{ label: 'Option 1', value: '1' }]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple values</div>
            <DesignComponent
              :multiple="true"
              :value="[
                { label: 'Option 1', value: '1', index: '1' },
                { label: 'Option 2', value: '2', index: '2' },
                { label: 'Option 3', value: '3', index: '3' }
              ]"
            />
          </div>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'SelectValue'} type={'selectValue'}/>
<Canvas of={Component.SelectValueBasic}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `},ai:{description:`
Specialized display engine used within Select, Combobox, or Autocomplete controls to render selected state. Dynamically switches between a simple text label for single selection and a group of Chips for multiple selection.
Features automated Chip management, including removal event handling and integration with the Select data model. Supports empty state placeholders, custom Chip attributes (icons, outlines), and handles disabled/readonly states to prevent interaction.
Controlled via the multiple and value props, requiring an array of objects even for single selection. Use as a foundational element when building custom selection fields requiring standardized token-based or text-based value representation.
    `}},{name:`Skeleton`,description:{en:`Skeleton component for displaying loading placeholders`,ru:`Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных`},possibilities:{en:[`animated loading placeholders for content`,"control visibility with `active` property","child elements react to the skeleton state via `isSkeleton` property or special classes",`customizable appearance and animation`],ru:[`анимированные заглушки загрузки для контента`,"управление видимостью через свойство `active`","дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы",`настраиваемый внешний вид и анимация`]},render:`
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
  `,import:[`import { image1 } from '@dxtmisha/wiki/media'`],stories:[{id:`SkeletonBasic`,name:{en:`Basic usage`,ru:`Базовое использование`},template:`
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
<StorybookDescriptions componentName={'Skeleton'} type={'classes'}/>
<Canvas of={Component.SkeletonBasic}/>
    `,expose:`
<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>
    `},ai:{description:`
Structural layout utility designed to display animated loading placeholders (ghost versions) for UI elements. Improves perceived performance and prevents Cumulative Layout Shift (CLS) by reserving space for incoming content.
Features a logic-sharing mechanism via provide/inject that allows child components (Field, Image, Chip) to automatically switch to their skeleton states without individual props. Exposes specialized CSS classes through slot props for styling raw HTML elements as text lines, backgrounds, or borders.
Controlled via the active prop to toggle the global loading state and accessibility Busy/Live attributes. Use as a wrapper for sections or entire pages during data fetching to maintain structural integrity and a high-quality user experience.
    `}},{name:`Snackbar`,description:{en:`An orchestration component for managing and displaying a queue of temporary notification messages (Snackbars).`,ru:`Компонент-оркестратор для управления и отображения очереди временных уведомлений (Snackbars).`},possibilities:{en:[`automatic lifecycle management for notifications`,`flexible anchor positioning (top/bottom, left/right/block)`,`priority-based visual separation of messages`,`configurable auto-hide timeout`,`teleport-based rendering to ensure overlay on top of all elements`,`full programmatic control over the notification queue`],ru:[`автоматическое управление жизненным циклом уведомлений`,`гибкое позиционирование (сверху/снизу, слева/справа/блоком)`,`визуальное разделение сообщений по приоритету`,`настраиваемое время автоматического скрытия`,`рендер через Teleport для гарантированного отображения поверх всех элементов`,`полный программный контроль над очередью уведомлений`]},import:[],render:`
    <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <DesignComponent ref="snackbar" v-bind="args" />
    </div>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Snackbar'} type={'snackbar'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'add'}/>

<StorybookDescriptions componentName={'Snackbar'} type={'adaptation'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'position'}/>
    `,events:`
<StorybookDescriptions componentName={'Snackbar'} type={'event.show'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'event.hide'}/>
    `,expose:`
<StorybookDescriptions componentName={'Snackbar'} type={'expose.isItem'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.add'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.remove'}/>
<StorybookDescriptions componentName={'Snackbar'} type={'expose.clear'}/>
    `,slots:``},ai:{description:`
Centralized notification management system (orchestrator) that coordinates the lifecycle and queue of temporary messages. Ideal for global system alerts, user feedback, and asynchronous status updates across the application.
Features an intelligent queue manager with support for priority containers, automatic lifecycle hooks (show/hide), and flexible screen anchoring (vertical/horizontal positioning). Includes programmatic control over message stack, custom auto-hide delays, and teleport-based rendering to ensure overlay priority over all content.
Controlled via an exposed API (add, remove, clear) and configurable global settings like delay and origin. Place a single instance at the root of the application (e.g., App.vue) to manage consistent notification patterns throughout the entire user session.
    `}},{name:`SnackbarItem`,description:{en:`Individual notification message element used within a Snackbar.`,ru:`Элемент индивидуального уведомления, используемый внутри Snackbar.`},possibilities:{en:[`support for label and detailed description text`,`leading and trailing icons support`,`action buttons support`,`custom HTML or component rendering`,`built-in close button with customizable icon`,`accessible ARIA status by default`],ru:[`поддержка заголовка и подробного текста описания`,`поддержка начальных и конечных иконок`,`поддержка кнопок действий`,`рендер произвольного HTML или компонентов`,`встроенная кнопка закрытия с настраиваемой иконкой`,`доступный ARIA статус по умолчанию`]},import:[],stories:[{id:`SnackbarItemBasic`,name:{en:`Basic`,ru:`Базовые`},template:`
        <div class="wiki-storybook-group">
          <DesignComponent
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <DesignComponent
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry', primary: true }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'SnackbarItem'} type={'snackbarItem'}/>
<Canvas of={Component.SnackbarItemBasic}/>

<StorybookDescriptions componentName={'SnackbarItem'} type={'component'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'html'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'role'}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'actions'}/>
<StorybookDescriptions componentName={'SnackbarItem'} type={'eventClose'}/>
    `,expose:``,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
`},ai:{description:`
Visual representation element for a single notification message, typically orchestrated by the Snackbar component. Designed for concise informational alerts, success messages, or quick-action prompts.
Features a flexible internal structure with support for labels, detailed descriptions, and material-symbol icons (leading/trailing). Includes integrated action button support, a mandatory close button, and support for rendering custom HTML or Vue components as message bodies.
Controlled via simple content props or an actions-list array for complex button configurations. Use as the base message unit for all system feedback, ensuring high visibility and accessibility through automatic ARIA status role implementation.
    `}},{name:`TabItem`,description:{en:`A versatile component for creating tabs, navigation links, or list items. Supports icons, badges, labels, and various interactive states.`,ru:`Универсальный компонент для создания вкладок, навигационных ссылок или элементов списка. Поддерживает иконки, бейджи, метки и различные интерактивные состояния.`},possibilities:{en:["displaying a label (`label`)","leading and trailing icons (`icon`, `iconTrailing`)","integrated badge support (`badge`)","selection state (`selected`)","disabled state (`disabled`)","navigation support (`href`, `to`)","customizable root tag (`tag`)",`ripple effect on click`,`skeleton loading state`],ru:["отображение метки (`label`)","иконки слева и справа (`icon`, `iconTrailing`)","встроенная поддержка бейджа (`badge`)","состояние выбора (`selected`)","отключенное состояние (`disabled`)","поддержка навигации (`href`, `to`)","настраиваемый корневой тег (`tag`)",`эффект ряби при клике`,`состояние загрузки (скелетон)`]},render:`
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </div>
  `,stories:[{id:`TabItemSkeleton`,name:{en:`Skeleton`,ru:`Скелетон`},components:[`Skeleton`],template:`
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Tab item</DesignComponent>
        </DesignSkeleton>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'TabItem'} type={'tabItem'}/>
<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TabItemSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Foundational interactive building block for multi-item navigation structures like tabs, list menus, and sidebars. Encapsulates a label, optional icons, and status indicators (badges) into a single semantic unit with integrated state management.
Features built-in support for selected, disabled, and loading (skeleton) states, along with automated navigation logic for href and router-link. Includes a Material-style ripple effect for high-polish click feedback and flexible tag rendering to support various HTML roles (button, a, li).
Controlled via label, icon, and badge props, with v-model or selected prop integration. Use within Tabs or List components to create cohesive, accessible navigation interfaces with consistent visual affordance and spatial organization.
    `}},{name:`Tabs`,description:{en:`Tabs component for switching between different views with animation`,ru:`Компонент вкладок для переключения между различными представлениями с анимацией`},possibilities:{en:[`switching between content sections`,`animated transitions via MotionAxis`,`navigation via TabsNavigation`,`customizable tabs list`,`dynamic content slots`],ru:[`переключение между разделами контента`,`анимированные переходы через MotionAxis`,`навигация через TabsNavigation`,`настраиваемый список вкладок`,`динамические слоты контента`]},import:[`import { ref } from 'vue'`],render:`
<DesignComponent v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</DesignComponent>
  `,stories:[{id:`TabsBasic`,name:{en:`Basic`,ru:`Базовый`},template:`
        <DesignComponent
          :tabs="[
            { label: 'Home', value: 'home' },
            { label: 'Profile', value: 'profile' }
          ]"
          selected="home"
        >
          <template #home>Home</template>
          <template #profile>Profile</template>
        </DesignComponent>
      `},{id:`TabsVModel`,name:{en:`v-model`,ru:`v-model`},setup:`
      return {
        selected: ref('tab1')
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>

          <DesignComponent
            :tabs="[
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' },
            { label: 'Tab 3', value: 'tab3' }
          ]"
            v-model:selected="selected"
          >
            <template #tab1>Content 1</template>
            <template #tab2>Content 2</template>
            <template #tab3>Content 3</template>
          </DesignComponent>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Tabs'} type={'tabs'}/>
<Canvas of={Component.TabsBasic}/>

<StorybookDescriptions componentName={'Tabs'} type={'v-model'}/>
<Canvas of={Component.TabsVModel}/>
    `},ai:{description:`
High-level compound component that integrates TabsNavigation and MotionAxis to provide a complete, animated tabbed interface. Simplifies the creation of multi-view layouts where each section is logically separated and visually transitioned.
Features automated coordination between the navigation bar and the content area, including direction-aware sliding animations and lazy loading. Supports dynamic tab lists, centralized state management via v-model, and modular content distribution through named slots matching tab values.
Controlled via the tabs prop for structure and v-model:selected for active state. Use for main dashboard views, complex settings panels, or any multi-step interface requiring a polished, interactive navigation experience with high performance.
    `}},{name:`TabsNavigation`,description:{en:`Component for managing navigation between tabs. Supports horizontal scrolling, selection management, and focus.`,ru:`Компонент для управления навигацией между вкладками. Поддерживает горизонтальную прокрутку, управление выделением и фокусом.`},possibilities:{en:[`horizontal scrolling of tabs`,"management of the selected tab via `selected` and `list`",`keyboard support (arrows, Enter, Space)`,"customization of tab appearance via `tag` and `itemAttrs`","event support: `update:selected`, `update:modelSelected`"],ru:[`горизонтальная прокрутка вкладок`,"управление выбранной вкладкой через `selected` и `list`",`поддержка клавиатуры (стрелки, Enter, Пробел)`,"настройка внешнего вида вкладок через `tag` и `itemAttrs`","поддержка событий: `update:selected`, `update:modelSelected`"]},render:`
    <DesignComponent v-bind="args"/>
  `,import:[`import { ref } from 'vue'`],stories:[{id:`TabsNavigationBasic`,name:{en:`Basic usage`,ru:`Базовое использование`},setup:`
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('2')
      return { list, selected }
      `,template:`
        <DesignComponent :list="list" v-model:selected="selected"/>
      `},{id:`TabsNavigationVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current value: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
          </div>

          <DesignComponent :list="list" v-model:selected="selected"/>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'TabsNavigation'} type={'tabsNavigation'}/>
<Canvas of={Component.TabsNavigationBasic}/>
<StorybookDescriptions componentName={'TabsNavigation'} type={'v-model'}/>
<Canvas of={Component.TabsNavigationVModel}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `},ai:{description:`
Specialized navigation container for creating horizontal tab bars with automated scrolling and focus management. Designed for switching between filtered views, dashboard sections, or multi-step form progress indicators.
Features intelligent horizontal scrolling with alignment control, keyboard navigation support (arrows, Enter, Space), and customizable tab item rendering via the tag and itemAttrs props. Automatically synchronizes active state through two-way binding and provides leading/trailing slots for auxiliary navigation actions.
Controlled via the list prop for tab definitions and v-model:selected for active state tracking. Use as the base header for complex tabbed layouts or standalone navigation bars requiring high accessibility and smooth interaction across mobile and desktop.
    `}},{name:`Textarea`,description:{en:`A multi-line text input component. Supports auto-sizing, validation, icons, labels, messages, and counters.`,ru:`Компонент многострочного ввода текста. Поддерживает авто-размер, валидацию, иконки, метки, сообщения и счетчики.`},possibilities:{en:[`multi-line text input`,"auto-sizing based on content (`autosize`)","validation support (`validationMessage`, `required`)",`label and helper message support`,"character counter (`counter`, `maxlength`)",`icons support`,`disabled and readonly states`],ru:[`многострочный ввод текста`,"авто-размер в зависимости от контента (`autosize`)","поддержка валидации (`validationMessage`, `required`)",`поддержка метки и вспомогательного сообщения`,"счетчик символов (`counter`, `maxlength`)",`поддержка иконок`,`состояния отключения и только для чтения`]},render:`
    <DesignComponent v-bind="args" />
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Textarea'} type={'textarea'}/>
<StorybookDescriptions componentName={'Textarea'} type={'autosize'}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input'}/>
<StorybookDescriptions componentName={'Event'} type={'change'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
    `},ai:{description:`
Versatile multi-line text input control with automated spatial management and comprehensive validation support. Designed for feedback forms, detailed descriptions, and any scenario requiring a flexible, high-volume data entry area.
Features an intelligent autosize engine that grows/shrinks dynamically based on content, along with character counter integration and Material symbol icons (leading/trailing). Inherits full Field component functionality including floating labels, helper messages, and reactive error states.
Controlled via the v-model for content and autosize prop for height behavior. Use for user biographies, multi-row comments, or complex data entry views where standard single-line inputs lack sufficient capacity.
    `}},{name:`TextareaAutosize`,description:{en:`Textarea component that automatically adjusts its height based on content`,ru:`Компонент текстового поля, которое автоматически подстраивает свою высоту под содержимое`},possibilities:{en:[`automatic height adjustment based on content`,`clone element for precise height calculation`,`respects padding and styling from the original textarea`,`smooth height transitions on content change`,`supports all standard textarea attributes via inputAttrs`,`optional autosize toggle for flexibility`,`reactive value binding with input event emission`],ru:[`автоматическая подстройка высоты под содержимое`,`элемент-клон для точного расчёта высоты`,`учитывает отступы и стили исходного textarea`,`плавные переходы высоты при изменении содержимого`,`поддержка всех стандартных атрибутов textarea через inputAttrs`,`опциональное отключение autosize для гибкости`,`реактивная привязка значения с генерацией события input`]},import:[],render:`
      <DesignComponent v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'TextareaAutosize'} type={'textarea-autosize'}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input-standard'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
    `},ai:{description:`
Low-level functional engine for multi-line inputs that provides precise, real-time height adjustment based on content. Implements a reliable cloning mechanism to calculate scroll-free container heights while respecting parent padding and font styles.
Features automated height synchronization during content changes, supporting smooth CSS transitions and native textarea attributes via inputAttrs. Operates as a foundational tool for the Textarea component, ensuring character entry never triggers unwanted shift or overflow.
Primarily integrated as a subcomponent; should generally not be manually used for standalone input fields. Controlled via reactive value bindings, serving as the high-performance core for any dynamic data entry element requiring responsive layout scaling.
    `}},{name:`Tooltip`,description:{en:`Component for displaying a popup hint when hovering over an element`,ru:`Компонент для отображения всплывающей подсказки при наведении на элемент`},possibilities:{en:[`displaying text or other content in a popup window`,`automatic positioning relative to the element`,`support for delay before showing and hiding`,`customizable indentation and padding`,`ability to control the open state`,`support for an arrow pointing to the element`],ru:[`отображение текста или другого контента во всплывающем окне`,`автоматическое позиционирование относительно элемента`,`поддержка задержки перед показом и скрытием`,`настраиваемые отступы и поля`,`возможность управления состоянием открытия`,`поддержка стрелки, указывающей на элемент`]},import:[],render:`
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </DesignComponent>
    `,stories:[{id:`TooltipAllSlots`,name:{en:`All slots demonstration`,ru:`Демонстрация всех слотов`},template:`
        <DesignComponent>
          <template #control="{ binds }">
            <button class="wiki-storybook-button" v-bind="binds">
              Hover me (All Slots)
            </button>
          </template>

          <template #default>
            Default Slot
          </template>

          <template #description>
            Description Slot
          </template>

          <template #body>
            <div class="wiki-storybook-item--padding">
              Body Slot Content
            </div>
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Tooltip'} type={'tooltip'}/>
    `,events:`
<StorybookDescriptions componentName={'Tooltip'} type={'event.tooltip'}/>
    `,slots:`
<Canvas of={Component.TooltipAllSlots}/>
<StorybookDescriptions componentName={'Tooltip'} type={'slot.control'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'body'}/>
    `},ai:{render:`
<div :class="classDemo.item">
  <Tooltip open embedded v-bind="args">
    <template #control="{ binds }">
      <button v-bind="binds">Hover me</button>
    </template>
  </Tooltip>
</div>
    `,description:`
Contextual informational overlay that appears when a user interacts with a trigger element via hover or focus. Designed for auxiliary labels, helper text, and secondary descriptive titles that enhance functional awareness without crowding the UI.
Features automated high-precision positioning (top, bottom, left, right) with viewport collision detection and customizable delay/interactive behaviors. Includes a built-in arrow indicator and requires trigger binding via the #control slot's binds object for proper event synchronization.
Controlled via simple content props (label, description) and supports complex HTML structures within the #default slot. Use to provide non-critical supplemental information, keyboard shortcuts, or detailed affordance for icon-only buttons.
    `}},{name:`Window`,description:{en:`Flexible modal and popup window component with advanced positioning and animation capabilities`,ru:`Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования и анимации`},possibilities:{en:[`modal and contextual window display modes`,`intelligent positioning system with automatic collision detection`,`smooth opening and closing animations with customizable transitions`,`static mode for embedded window components`,`persistent window state management`,`automatic scroll handling and content overflow management`,`keyboard navigation and accessibility support`,`event-driven architecture with comprehensive lifecycle hooks`,`integration with scrollbar and image components`,`responsive design with mobile and desktop optimization`],ru:[`режимы отображения модальных и контекстных окон`,`интеллектуальная система позиционирования с автоматическим определением коллизий`,`плавные анимации открытия и закрытия с настраиваемыми переходами`,`статический режим для встроенных компонентов окон`,`управление постоянным состоянием окна`,`автоматическая обработка прокрутки и управление переполнением контента`,`навигация с клавиатуры и поддержка доступности`,`событийно-ориентированная архитектура с комплексными хуками жизненного цикла`,`интеграция с компонентами скроллбара и изображений`,`адаптивный дизайн с оптимизацией для мобильных устройств и десктопа`]},import:[`import { ref } from 'vue'`],render:`
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
    `,stories:[{id:`WindowStaticMode`,name:{en:`Static Mode`,ru:`Статический режим`},template:`
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
      `},{id:`WindowAxis`,name:{en:`Axis positioning`,ru:`Позиционирование по оси`},template:`
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
      `},{id:`WindowVModel`,name:{en:`Two-way binding (v-model)`,ru:`Двусторонняя привязка (v-model)`},setup:`
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
<StorybookDescriptions componentName={'Window'} type={'classes'}/>
<StorybookDescriptions componentName={'Window'} type={'staticMode'}/>
<Canvas of={Component.WindowStaticMode}/>
<StorybookDescriptions componentName={'Window'} type={'axis'}/>
<Canvas of={Component.WindowAxis}/>
<StorybookDescriptions componentName={'Window'} type={'v-model'}/>
<Canvas of={Component.WindowVModel}/>
<StorybookDescriptions componentName={'Window'} type={'hooks'}/>
    `,events:`
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<StorybookDescriptions componentName={'Scrollbar'} type={'emits-include'}/>
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,expose:`
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
    `,slots:`
<StorybookDescriptions componentName={'Window'} type={'slots'}/>
    `},ai:{render:`
      <div :class="classDemo.item">
        <Window embedded open v-bind="args">
            <template #control="{ binds }">
              <button v-bind="binds">Open Window</button>
            </template>
            <template #title>
              <h3>Window Title</h3>
            </template>
            <template #default>
              <p>Window content goes here. This is a demonstration of the window component capabilities.</p>
              <p>It can contain text, images, forms, or any other content.</p>
            </template>
            <template #footer>
              <div>
                <button>Cancel</button>
                <button>Save</button>
              </div>
            </template>
          </Window>
      </div>
    `,description:`
Versatile high-performance container orchestration system for Modals, Popups, Dropdowns, and Cards. Automatically manages complex DOM interactions including z-index hierarchy, focus trapping, teleportation, and body scroll locking.
Features an intelligent multi-axis positioning engine (vertical, horizontal, or overlay) with automated viewport collision detection and obstacle avoidance. Includes a full suite of lifecycle hooks, advanced animation management, and integrated support for Scrollbar and Image components within its content area.
Controlled via the v-model:open prop and utilizing the #control, #title, #default, and #footer slots for modular layout. Use as a foundational building block for any overlaid or contextual interface requirement that exceeds the logic of standard Modal or Menu components.
    `,hide:!0}}]}));export{i,s as n,a as r,o as t};