import{ba as p,aj as c,j as u,bb as y,U as h,W as b,H as v}from"./iframe-okvuAVTt.js";const k={name:"Accordion",description:{en:"Expandable container component that reveals and hides content with smooth animations",ru:"Раскрывающийся контейнерный компонент, который показывает и скрывает контент с плавными анимациями"},possibilities:{en:["smooth expand/collapse animations via MotionTransform","composable header with label, description, and icons","automatic arrow rotation indicator","controlled or uncontrolled state management with v-model","divider line customization","custom cell attributes support","click event handling with custom data","flexible content slots for header and body"],ru:["плавные анимации раскрытия/сворачивания через MotionTransform","композитная шапка с меткой, описанием и иконками","автоматический индикатор поворота стрелки","управление состоянием контролируемо или неконтролируемо через v-model","настройка линии разделителя","поддержка пользовательских атрибутов ячейки","обработка событий клика с пользовательскими данными","гибкие слоты контента для шапки и тела"]},import:["import { ref } from 'vue'"],render:`
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
  `,stories:[{id:"AccordionVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-item--padding">
          <button class="wiki-storybook-button" @click="open = !open">Toggle ({{ open }})</button>
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
      `},{id:"AccordionSlots",name:{en:"Slots usage",ru:"Использование слотов"},template:`
        <DesignComponent label="Default label" description="Default description" icon="settings">
          <template #label>Custom label slot</template>
          <template #description>Custom description slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
          <template #body>Body slot content</template>
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
Accordion is a vertically stacking interactive component that allows users to reveal or hide content sections.
It consists of a header (trigger) and a body (content) that expands/collapses with a smooth animation.

**Key Features:**
1. **Header (Trigger):**
   - Uses the \`Cell\` component structure.
   - Supports \`label\` (title), \`description\` (subtitle), and \`icon\` (leading icon).
   - Includes a rotating arrow indicator (\`iconArrowDown\`) to show state.

2. **Animation:**
   - Uses \`MotionTransform\` for smooth height transitions.
   - Content is unmounted or hidden when collapsed (depending on configuration).

3. **Interaction:**
   - Toggles on click or keyboard interaction (Enter/Space).
   - Controlled via \`v-model:open\`.

**Usage Examples:**

- **Basic:**
  \`<Accordion label="Settings">
     <p>Settings content...</p>
   </Accordion>\`

- **With Description and Icon:**
  \`<Accordion label="Profile" description="Manage your account" icon="person">
     <ProfileForm />
   </Accordion>\`

- **Controlled:**
  \`<Accordion v-model:open="isOpen" label="Controlled">
     Content
   </Accordion>\`
    `}},f={name:"Actions",description:{en:"A flexible container component for organizing action buttons with primary and secondary groups, supporting various alignment options and adaptive behavior.",ru:"Гибкий компонент-контейнер для организации кнопок действий с основной и вторичной группами, поддерживающий различные варианты выравнивания и адаптивное поведение."},possibilities:{en:["Organizes action buttons into primary and secondary groups","Supports multiple alignment modes: left, right, center, block","Flexible layout that adapts to available space","Automatic spacing between button groups","Customizable button attributes for each group","Responsive behavior with adaptive breakpoints","Supports both array-based and slot-based button rendering"],ru:["Организует кнопки действий в основные и вторичные группы","Поддерживает несколько режимов выравнивания: left, right, center, block","Гибкая раскладка, адаптирующаяся к доступному пространству","Автоматическое расстояние между группами кнопок","Настраиваемые атрибуты кнопок для каждой группы","Адаптивное поведение с точками перехода","Поддерживает рендеринг кнопок через массив и слоты"]},import:[],stories:[{id:"ActionsBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `},{id:"ActionsAlignment",name:{en:"Alignment",ru:"Выравнивание"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            align="left"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="center"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="right"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
          <DesignComponent
            align="block"
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `},{id:"ActionsPrimarySecondary",name:{en:"Primary & Secondary Groups",ru:"Основная и вторичная группы"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel' },
              { label: 'Save', primary: true }
            ]"
            :list-secondary="[
              { label: 'Delete', text: true }
            ]"
          />
        </div>
      `},{id:"ActionsFlexible",name:{en:"Flexible Layout",ru:"Гибкая раскладка"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            flexible="adaptive"
            :list="[
              { label: 'Cancel' },
              { label: 'Apply' },
              { label: 'Save', primary: true }
            ]"
          />
        </div>
      `},{id:"ActionsCustomButtons",name:{en:"Custom Button Styles",ru:"Пользовательские стили кнопок"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :list="[
              { label: 'Cancel', outlined: true },
              { label: 'Save', primary: true }
            ]"
            :button-attrs="{ size: 'large' }"
          />
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Actions'} type={'actions'}/>
<StorybookDescriptions componentName={'Actions'} type={'list'}/>
<StorybookDescriptions componentName={'Actions'} type={'flexible'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'secondary'}/>
    `},ai:{description:`
Actions is a layout component for organizing groups of buttons, typically used in dialog footers, card actions, or form controls.
It manages spacing, alignment, and the separation between primary and secondary action groups.

**Key Features:**
1. **Groups:**
   - \`list\`: Array of props for the main group of buttons (usually right-aligned or primary).
   - \`listSecondary\`: Array of props for the secondary group (usually left-aligned).

2. **Alignment (\`align\`):**
   - \`left\`: Aligns all buttons to the left.
   - \`center\`: Centers the buttons.
   - \`right\`: Aligns all buttons to the right (default for dialogs).
   - \`block\`: Stretches buttons to fill the width.

3. **Button Configuration:**
   - Items in \`list\` and \`listSecondary\` are passed directly to the \`Button\` component.
   - \`buttonAttrs\`: Common props applied to all buttons in the main list.
   - \`buttonSecondaryAttrs\`: Common props applied to all buttons in the secondary list.

**Usage Examples:**

- **Dialog Footer:** \`<Actions align="right" :list="[{ label: 'Cancel' }, { label: 'Ok', primary: true }]" />\`
- **Split Actions:** \`<Actions :list="[{ label: 'Save' }]" :listSecondary="[{ label: 'Delete', text: true }]" />\` (Save on right, Delete on left)
- **Full Width:** \`<Actions align="block" :list="[{ label: 'Login', primary: true }]" />\`
      `}},w={name:"ActionSheet",description:{en:"Mobile-optimized modal component for displaying a list of actions or choices that slide up from the bottom",ru:"Мобильно-оптимизированный модальный компонент для отображения списка действий или выборов, выдвигающийся снизу"},possibilities:{en:["bottom-anchored modal panel with smooth slide-up animation","displays primary and secondary action lists","supports cancel button and custom actions","mobile-first design with touch-friendly interface","backdrop click to close functionality","keyboard accessibility support","integration with List and Actions components","customizable appearance and positioning","automatic height adjustment based on content","support for grouped actions with separators"],ru:["модальная панель, закрепленная снизу, с плавной анимацией выдвижения","отображает основной и второстепенный списки действий","поддержка кнопки отмены и пользовательских действий","мобильно-ориентированный дизайн с удобным сенсорным интерфейсом","закрытие при клике на подложку","поддержка доступности с клавиатуры","интеграция с компонентами List и Actions","настраиваемый внешний вид и позиционирование","автоматическая подстройка высоты под контент","поддержка группировки действий с разделителями"]},import:["import { ref } from 'vue'"],render:`
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
    `,stories:[{id:"ActionSheetVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
      `},{id:"ActionSheetTouchClose",name:{en:"Touch gesture to close",ru:"Закрытие жестом"},setup:`
      return {
        openWithTouch: ref(false),
        openWithoutTouch: ref(false)
      }
      `,template:`
        <div class="wiki-storybook-flex">
          <button class="wiki-storybook-button" @click="openWithTouch = true">
            With Touch Close ({{ openWithTouch }})
          </button>
          <button class="wiki-storybook-button" @click="openWithoutTouch = true">
            Without Touch Close ({{ openWithoutTouch }})
          </button>
        </div>

        <DesignComponent v-model:open="openWithTouch" :touchClose="true">
          <template #title>
            Swipe Down to Close
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Enabled</strong>
                <p>This action sheet can be closed by swiping down on the title area. Notice the tab indicator at the top that signals the drag interaction.</p>
                <p>Try swiping down on the header to close this panel. This follows iOS and Material Design patterns for mobile interfaces.</p>
              </div>
            </div>
          </template>
        </DesignComponent>

        <DesignComponent v-model:open="openWithoutTouch" :touchClose="false">
          <template #title>
            No Swipe Gesture
          </template>
          <template #default>
            <div class="wiki-storybook-item--padding">
              <div class="wiki-storybook-info">
                <strong>Touch Close: Disabled</strong>
                <p>This action sheet cannot be closed by swiping down. The tab indicator is not displayed, and touch gestures are disabled.</p>
                <p>You must use the backdrop click or close button to dismiss this panel. This is useful when you want to prevent accidental dismissal.</p>
              </div>
            </div>
          </template>
          <template #footer="{classesWindow}">
            <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Close</button>
          </template>
        </DesignComponent>
      `},{id:"ActionSheetAllSlots",name:{en:"All slots demonstration",ru:"Демонстрация всех слотов"},template:`
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Action Sheet with All Slots</button>
          </template>

          <template #title>
            Action Sheet Title Slot
          </template>

          <template #default>
            <div class="wiki-storybook-item--padding">
              <h4>Default Slot Content</h4>
              <p>This is the main content area of the action sheet. You can place any content here including action lists, forms, or other components.</p>

              <div class="wiki-storybook-info">
                <strong>Available slots:</strong>
                <ul>
                  <li><code>#control</code> - trigger button or element</li>
                  <li><code>#title</code> - action sheet header/title area</li>
                  <li><code>#default</code> - main content area</li>
                  <li><code>#footer</code> - footer with actions or cancel button</li>
                </ul>
              </div>

              <p>Each slot receives control props that allow you to interact with the action sheet programmatically, such as closing it or accessing window classes. The component slides up from the bottom with touch gesture support.</p>
            </div>
          </template>

          <template #footer="{classesWindow}">
            <div class="wiki-storybook-flex wiki-storybook-item--padding">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
            </div>
          </template>
        </DesignComponent>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'ActionSheet'} type={'actionSheet'}/>

<StorybookDescriptions componentName={'ActionSheet'} type={'touchClose'}/>
<Canvas of={Component.ActionSheetTouchClose}/>

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
ActionSheet is a mobile-optimized modal component that slides up from the bottom of the screen (Bottom Sheet).
It is designed to present a set of actions, choices, or secondary content, following standard mobile interface patterns (iOS/Material).

**Note:** The \`embedded\` prop is used only for documentation examples to render the component inline. Do not use it in production code.

**Key Features:**
1. **Positioning & Animation:**
   - Anchored to the bottom of the viewport.
   - Slides up with an animation when opened.
   - Renders a backdrop (overlay) to block background interactions.

2. **Mobile Interactions:**
   - **Touch Close:** Supports swiping down on the header to close the sheet (controlled by the \`touchClose\` prop).
   - **Backdrop:** Clicking the overlay closes the sheet.
   - **Scroll:** Automatically handles internal scrolling if content exceeds height.

3. **Slots Structure:**
   - \`#control\` - The trigger element (e.g., a button). Receives \`binds\` to toggle visibility.
   - \`#title\` - The header area. Often contains the title and the drag handle (indicator).
   - \`#default\` - The main content area.
   - \`#footer\` - The bottom area, typically used for a "Cancel" button or primary actions.

**Usage Examples:**

- **With Trigger:**
  \`<ActionSheet>
     <template #control="{ binds }">
       <button v-bind="binds">Open Menu</button>
     </template>
     <template #title>Select Option</template>
     <template #default>
       <p>List of options...</p>
     </template>
   </ActionSheet>\`

- **Programmatic Control:**
  \`<ActionSheet v-model:open="isOpen" touch-close>
     <template #default>Content</template>
   </ActionSheet>\`
    `}},D={name:"Anchor",description:{en:"Component for creating hyperlinks or anchor points for navigation",ru:"Компонент для создания гиперссылок или якорных точек для навигации"},possibilities:{en:["creating links to other pages or resources","creating anchor points for internal page navigation","support for icons and text","customizable appearance"],ru:["создание ссылок на другие страницы или ресурсы","создание якорных точек для внутренней навигации по странице","поддержка иконок и текста","настраиваемый внешний вид"]},documentation:{body:`
<StorybookDescriptions componentName={'Anchor'} type={'anchor'}/>
<StorybookDescriptions componentName={'Anchor'} type={'isCopy'}/>
<StorybookDescriptions componentName={'Anchor'} type={'hide'}/>
<StorybookDescriptions componentName={'Anchor'} type={'scroll'}/>
`,expose:`
<StorybookDescriptions componentName={'Anchor'} type={'expose.go'}/>
`,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
`},ai:{render:`
<div :class="classDemo.item">
  <Anchor href="#" v-bind="args"/>
</div>
    `,description:`
Anchor is a fundamental navigation component used to create hyperlinks and anchor points.
It wraps the standard HTML \`<a>\` tag functionality with additional utilities for smooth scrolling and clipboard interactions.

**Key Features:**
1. **Navigation:**
   - Handles standard navigation via \`href\`.
   - Can be used for both internal (router) and external links.

2. **Smooth Scrolling:**
   - The \`scroll\` prop enables smooth scrolling animation when navigating to an element ID (e.g., \`href="#section"\`).

3. **Clipboard Interaction:**
   - The \`isCopy\` prop turns the component into a trigger that copies the link or value to the clipboard.

4. **Slots:**
   - \`#default\`: The content of the link (text, icons, or other elements).

**Usage Examples:**

- **Basic Link:**
  \`<Anchor href="/about">About Us</Anchor>\`

- **Scroll to Anchor:**
  \`<Anchor href="#contact" scroll>Contact</Anchor>\`

- **Copy Link:**
  \`<Anchor href="https://example.com" is-copy>Copy URL</Anchor>\`
    `}},S={name:"Arrow",description:{en:"Component for displaying an arrow or directional indicator",ru:"Компонент для отображения стрелки или индикатора направления"},possibilities:{en:["displaying directional arrows","customizable size and color","rotation support"],ru:["отображение направляющих стрелок","настраиваемый размер и цвет","поддержка вращения"]},import:["import { ref } from 'vue'"],render:`
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
    `,stories:[{id:"ArrowBasic",name:{en:"Basic",ru:"Базовые"},setup:`
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
Arrow is a functional component that renders a triangular pointer connecting a container (like a tooltip, popover, or dropdown) to a target element.
It is designed to automatically blend with the parent container's styles (background, border) to create a seamless speech-bubble effect.

**Key Features:**
1. **Target Linking:** Points to a specific DOM element defined by \`elementTarget\` (selector or HTMLElement).
2. **Auto-Positioning:** Automatically calculates the correct placement (top, bottom, left, right) relative to the container and the target.
3. **Style Inheritance:** Inherits \`background-color\`, \`border-color\`, and \`border-width\` from the parent element to match the container's visual style perfectly.
4. **Reactive Updates:** Updates its position when the target or container moves (often used within \`Window\` or floating UI components).

**When to use:**
- Inside **Tooltips** to point to the hovered element.
- Inside **Popovers** or **Dropdowns** to indicate the trigger source.
- For any floating UI that needs a directional indicator.

**Usage Examples:**

- **Basic Tooltip Arrow:**
  \`<div class="tooltip">
     Message
     <Arrow element-target="#button-id" />
   </div>\`

- **With Auto Positioning:**
  \`<Arrow position="auto" element-target=".target-element" />\`
    `}},C={name:"Badge",description:{en:"Small visual indicator for displaying status, count, or notifications on interface elements",ru:"Небольшой визуальный индикатор для отображения статуса, количества или уведомлений на элементах интерфейса"},possibilities:{en:["multiple color variants for different status types","content customization with text or numbers","positioning relative to parent elements","maximum value display with overflow handling","visibility control and animation support"],ru:["множественные цветовые варианты для разных типов статуса","настройка содержимого с текстом или числами","позиционирование относительно родительских элементов","отображение максимального значения с обработкой переполнения","управление видимостью и поддержка анимации"]},import:[],render:`
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
    `},ai:{render:`
<div :class="classDemo.item" style="min-width: 48px; min-height: 48px;">
  <Badge overlap="static" v-bind="args"/>
</div>
    `,description:'\nBadge is a small visual indicator used to display status, counts, or short labels (tags).\nIt is typically positioned over the corner of another element (like an icon or avatar) or used inline.\n\n**Key Features:**\n1. **Content Handling:**\n   - **Numeric:** Displays numbers via `label`. Use `labelMax` to cap the value (e.g., "99+").\n   - **Text:** Displays short text strings.\n   - **Icon:** Can display an icon via the `icon` prop.\n   - **Dot:** If `dot` is true, renders as a small circle without text (status indicator).\n\n2. **Positioning (`overlap`):**\n   - `static`: Renders inline (default flow).\n   - `rectangular`: Positioned absolutely over a rectangular parent.\n   - `circular`: Positioned absolutely over a circular parent (adjusts coordinates).\n   - **Alignment:** Controlled by `vertical` (top/bottom) and `horizontal` (right/left).\n\n3. **Styling:**\n   - Supports variants: `primary`, `secondary`, `outline`.\n   - `hide`: Toggles visibility.\n   - `dot`: Switches to dot mode.\n\n**Usage Examples:**\n\n- **Notification Count:**\n  `<div class="relative-container">\n     <Icon name="notifications" />\n     <Badge label="5" overlap="circular" vertical="top" horizontal="right" />\n   </div>`\n\n- **Status Dot:**\n  `<Badge dot primary />`\n\n- **Inline Tag:**\n  `<Badge label="New" overlap="static" />`\n    '}},x={name:"Bars",description:{en:"A versatile bar component for headers, toolbars, or action bars, displaying titles, descriptions, and interactive buttons.",ru:"Универсальный компонент-панель для заголовков, панелей инструментов или панелей действий, отображающий заголовки, описания и интерактивные кнопки."},possibilities:{en:["Displays a primary label and a secondary description.","Includes an optional back button for navigation.","Supports a primary set of interactive buttons.",'Features an "action mode" with a separate set of buttons, label, and description.',"Allows full customization of button appearance and behavior."],ru:["Отображает основной заголовок и дополнительное описание.",'Включает опциональную кнопку "назад" для навигации.',"Поддерживает основной набор интерактивных кнопок.",'Имеет "режим действия" с отдельным набором кнопок, заголовком и описанием.',"Позволяет полностью настраивать внешний вид и поведение кнопок."]},import:["import { ref } from 'vue'"],stories:[{id:"BarsBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
    `,slots:`
<StorybookDescriptions componentName={'Bars'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `},ai:{description:`
Bars is a structural component used as a header, toolbar, or action bar.
It typically sits at the top of a page, card, or window to provide context (title) and actions.

**Key Features:**
1. **Content Structure:**
   - \`label\`: The main title (e.g., page name).
   - \`description\`: Subtitle or additional context.
   - \`backButton\`: Configuration for the navigation button on the left (e.g., arrow back, menu).

2. **Action Buttons (\`bars\`):**
   - Accepts an array of button configurations (props for \`Button\` component).
   - Rendered on the right side.
   - Useful for primary page actions (Search, Filter, Settings).

3. **Action Mode (Contextual State):**
   - Activated via \`action\` prop (boolean).
   - Switches the UI to a specific state (e.g., when items are selected in a list).
   - **Overrides:**
     - \`label\` -> \`actionLabel\`
     - \`description\` -> \`actionDescription\`
     - \`bars\` -> \`actionBars\`
   - The back button usually transforms into a "Close" or "Cancel" action in this mode.

**Usage Examples:**

- **Standard Header:** \`<Bars label="Dashboard" :bars="[{ icon: 'notifications' }]" />\`
- **With Back Button:** \`<Bars label="Settings" :back-button="{ icon: 'arrow_back' }" />\`
- **Contextual Action Bar:**
  \`<Bars :action="selectedCount > 0" :action-label="\`\${selectedCount} selected\`" :action-bars="[{ icon: 'delete' }]" />\`
      `}},I={name:"Block",description:{en:"A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines",ru:"Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков"},possibilities:{en:["displaying a headline, label, description, and caption","support for icons","customizable HTML tag","flexible layout for content organization"],ru:["отображение заголовка, метки, описания и подписи","поддержка иконок","настраиваемый HTML-тег","гибкая компоновка для организации контента"]},import:[],render:`
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
    `,stories:[{id:"BlockBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            Simple content wrapper
          </DesignComponent>
          <DesignComponent label="User Profile" description="Manage your personal information">
            <button class="wiki-storybook-button">Edit Profile</button>
          </DesignComponent>
          <DesignComponent headline="Notifications" label="Settings">
            <label><input type="checkbox" checked> Email Notifications</label>
          </DesignComponent>
          <DesignComponent icon="home" label="Dashboard">
            <p>Welcome to your dashboard overview.</p>
          </DesignComponent>
        </div>
      `},{id:"BlockSlots",name:{en:"Slots usage",ru:"Использование слотов"},template:`
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
Block is a versatile structural component used to organize content with a standardized layout.
It acts as a container that automatically arranges headers, labels, descriptions, icons, and body content.

**Key Features:**
1. **Layout Structure:**
   - **Headline:** Top-most text area (prop \`headline\` or slot \`#headline\`).
   - **Header Area:** Contains the icon, label, caption, and trailing actions.
   - **Description:** Text block below the header.
   - **Content:** The \`#default\` slot allows placing custom content inside the block.

2. **Content Props:**
   - \`label\`: Main title.
   - \`caption\`: Auxiliary text next to or below the label.
   - \`description\`: Detailed text description.
   - \`icon\`: Visual indicator (icon name).
   - \`headline\`: Section heading above the main header.

3. **Customization:**
   - \`tag\`: Changes the root HTML element (e.g., \`section\`, \`article\`, \`div\`).
   - \`#trailing\`: Slot for actions or content on the right side of the header.

**When to use:**
- **Cards:** To structure the header and content of a card.
- **List Items:** For complex list items with icons and text.
- **Sections:** To define titled sections within a page or modal.

**Usage Examples:**

- **Simple Card Header:**
  \`<Block label="Card Title" description="Subtitle text" icon="info" />\`

- **Section with Content:**
  \`<Block headline="Section 1" label="Details">
     <p>Custom content...</p>
   </Block>\`

- **List Item with Action:**
  \`<Block label="Item Name" caption="Status: Active">
     <template #trailing>
       <button>Edit</button>
     </template>
   </Block>\`
    `}},T={name:"Button",description:{en:"Interactive button component for user actions",ru:"Интерактивный компонент кнопки для действий пользователя"},possibilities:{en:["multiple visual variants for different use cases","different sizes from extra small to extra large","built-in accessibility support","focus, hover, and active states","disabled and loading states support","customizable styling through design tokens"],ru:["множественные визуальные варианты для разных случаев использования","различные размеры от очень маленького до очень большого","встроенная поддержка доступности","состояния focus, hover и active","поддержка отключенного состояния и состояния загрузки","настраиваемая стилизация через токены дизайна"]},import:[],stories:[{id:"ButtonBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:'\nButton is a fundamental interactive component used for user actions, navigation, and submitting forms.\nIt supports various visual styles, states, and content configurations.\n\n**Key Features:**\n1. **Content:**\n   - `label`: The text displayed inside the button.\n   - `icon`: Name of the icon to display *before* the label (Material Symbols).\n   - `iconTrailing`: Name of the icon to display *after* the label.\n\n2. **States:**\n   - `disabled`: Prevents user interaction and visually grays out the button.\n   - `selected`: Indicates an active or toggled state.\n   - `loading`: Replaces content or adds a spinner to indicate processing.\n\n3. **Navigation:**\n   - `to`: Vue Router path. Renders as an `<a>` tag or uses router push.\n   - `href`: External URL. Renders as an `<a>` tag.\n\n4. **Sizing & Layout:**\n   - `adaptive`: Makes the button fill the container width or adapt to specific breakpoints.\n\n**Usage Examples:**\n\n- **Main Action:** `<Button label="Confirm" primary icon="check" />`\n- **Secondary Action:** `<Button label="Cancel" secondary />`\n- **Navigation:** `<Button label="Read More" to="/details" text iconTrailing="arrow_forward" />`\n- **Icon Only:** `<Button icon="menu" text />` (Ensure aria-label is provided for accessibility)\n- **Loading:** `<Button label="Saving..." primary loading />`\n    '}},A={name:"Cell",description:{en:"Versatile container component for displaying structured content with labels, descriptions, and actions",ru:"Универсальный контейнерный компонент для отображения структурированного контента с метками, описаниями и действиями"},possibilities:{en:["flexible content structure with label, description, and caption","interactive states including focus, selected, and disabled","built-in icon and trailing icon support","progress indicator integration","divider customization options","dynamic behavior with hover interactions","skeleton loading state support","click event handling with custom data"],ru:["гибкая структура контента с меткой, описанием и подписью","интерактивные состояния включая focus, selected и disabled","встроенная поддержка иконок и завершающих иконок","интеграция индикатора прогресса","возможности настройки разделителей","динамическое поведение с взаимодействием при наведении","поддержка состояния загрузки скелетона","обработка событий клика с пользовательскими данными"]},render:`
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
`},ai:{description:"\nCell is a universal list item component used for building menus, settings panels, and data lists.\nIt provides a structured layout with slots for icons, text content, and actions.\n\n**Structure:**\n1. **Icon (Left):** Defined by `icon` prop.\n2. **Context (Center):**\n   - **Label:** Main text/title (prop `label`).\n   - **Caption:** Small text above/below the label (prop `caption`).\n   - **Description:** Secondary text below the label (prop `description`).\n3. **Trailing (Right):** Slot `#trailing` for actions (switch, checkbox, button) or meta-info.\n4. **Body:** Slot `#body` for additional content below the main row.\n\n**Key Features:**\n- **Interactive:** Supports `to`, `href`, and click events with Ripple effect.\n- **States:** Handles `disabled`, `selected`, and `loading` (skeleton) states.\n\n**When to use:**\n- **List Items:** For navigation menus or settings.\n- **Data Rows:** To display structured data entities.\n- **Action Items:** Clickable rows with icons and text.\n    "}},N={name:"Checkbox",description:{en:"Interactive checkbox component for binary or indeterminate state selection",ru:"Интерактивный компонент чекбокса для выбора бинарного или неопределённого состояния"},possibilities:{en:["checked, unchecked, and indeterminate states","built-in validation support with custom messages","label and description text support","customizable icons for checked and indeterminate states","disabled and loading states","ripple effect on interaction","skeleton state for loading placeholders","adaptive layout options","form integration with name and value attributes"],ru:["состояния: отмечен, не отмечен и неопределённое","встроенная поддержка валидации с пользовательскими сообщениями","поддержка текста метки и описания","настраиваемые иконки для состояний отмечен и неопределённое","состояния отключения и загрузки","эффект волны при взаимодействии","состояние скелетона для заполнителей загрузки","опции адаптивной разметки","интеграция с формами через атрибуты name и value"]},import:["import { ref } from 'vue'"],stories:[{id:"CheckboxBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Unchecked" />
          <DesignComponent label="Checked" :value="true" />
          <DesignComponent label="Indeterminate" indeterminate :value="true" />
          <DesignComponent label="Disabled" disabled />
          <DesignComponent label="Disabled & Checked" :value="true" disabled />
        </div>
      `},{id:"CheckboxStates",name:{en:"States",ru:"Состояния"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="Normal" />
          <DesignComponent label="Focus" focus />
          <DesignComponent label="Disabled" disabled />
          <DesignComponent label="Loading" loading />
          <DesignComponent label="Readonly" readonly />
        </div>
      `},{id:"CheckboxVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        checkboxValue: ref(false),
        indeterminateValue: ref(null)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="checkboxValue = true">Check</button>
            <button class="wiki-storybook-button" @click="checkboxValue = false">Uncheck</button>
          </div>
          <div>Value: {{ checkboxValue }}</div>
          <DesignComponent
            v-model="checkboxValue"
            label="Checkbox with v-model"
          />
        </div>
      `},{id:"CheckboxSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton label="Loading checkbox" />
            <DesignComponent isSkeleton label="Another loading checkbox" />
          </div>
        </DesignSkeleton>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Checkbox'} type={'checkbox'}/>
<Canvas of={Component.CheckboxBasic}/>
<Canvas of={Component.CheckboxStates}/>

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
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
    `},ai:{description:`
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
    `}},M={name:"Chip",description:{en:"Compact element that represents an input, attribute, or action",ru:"Компактный элемент, представляющий ввод, атрибут или действие"},possibilities:{en:["multiple visual variants for different contexts","selectable state for user interaction","disabled state support","customizable styling through design tokens","icon support for enhanced visual representation","adaptive behavior for different screen sizes"],ru:["множественные визуальные варианты для разных контекстов","выбираемое состояние для взаимодействия пользователя","поддержка отключенного состояния","настраиваемая стилизация через токены дизайна","поддержка иконок для улучшенного визуального представления","адаптивное поведение для разных размеров экрана"]},import:[],stories:[{id:"ChipBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Chip is a compact interactive element used for inputs, attributes, or actions.
It allows users to enter information, make selections, filter content, or trigger actions.

**Key Features:**
1. **Variants:**
   - **Action (Default):** Triggers an action or displays a read-only tag.
   - **Input (\`input\`):** Represents a complex piece of information, such as an entity (person, place, or thing) or text, often used in input fields.
   - **Assistive (\`assistive\`):** Provides suggestions or smart replies to the user.
   - **Filter (via \`selected\`):** Allows users to select multiple options from a set.

2. **Content & Styling:**
   - **Label:** Main text content (prop \`label\` or default slot).
   - **Icon:** Leading icon (prop \`icon\`).
   - **State:** Supports \`selected\` (active/checked) and \`disabled\` states.

3. **Interaction:**
   - Emits \`click\` events with \`value\` and \`detail\` data.
   - Can be used as a toggle button.

**When to use:**
- **Filters:** To allow users to refine search results.
- **Choice:** To select one or multiple options (like radio buttons or checkboxes but more compact).
- **Action:** To trigger immediate actions (e.g., "Play", "Save").
- **Input:** To display tags or contacts in a form.

**Usage Examples:**

- **Basic Action:**
  \`<Chip icon="settings">Settings</Chip>\`

- **Filter Chip (Selected):**
  \`<Chip icon="check" selected>Completed</Chip>\`

- **Input Tag:**
  \`<Chip input>Vue.js</Chip>\`

- **Assistive Suggestion:**
  \`<Chip assistive icon="lightbulb">Did you mean...?</Chip>\`
    `}},_={name:"ChipGroup",description:{en:"Component for managing a group of interactive chips with support for selection and data binding",ru:"Компонент для управления группой интерактивных чипов с поддержкой выбора и привязки данных"},possibilities:{en:["rendering a list of chips from a data array","managing selection state (single or multiple)","customizing the appearance of all chips in the group via chipAttrs","handling click events and value updates","controlling icon visibility based on selection"],ru:["рендеринг списка чипов из массива данных","управление состоянием выбора (одиночный или множественный)","настройка внешнего вида всех чипов в группе через chipAttrs","обработка событий клика и обновлений значений","управление видимостью иконки в зависимости от выбора"]},import:["import { ref } from 'vue'"],stories:[{id:"ChipGroupBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default</div>
            <DesignComponent :list="['Option 1', 'Option 2', 'Option 3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With icons</div>
            <DesignComponent
              :list="[
                { label: 'Home', icon: 'home' },
                { label: 'Star', icon: 'star' },
                { label: 'Heart', icon: 'favorite' }
              ]"
            />
          </div>
        </div>
      `},{id:"ChipGroupSelection",name:{en:"Selection States",ru:"Состояния выбора"},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Single selection</div>
            <DesignComponent :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple selection</div>
            <DesignComponent :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Icon when selected</div>
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
        </div>
      `},{id:"ChipGroupVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        selectedValue: ref('option2'),
        multipleSelected: ref(['option1', 'option3'])
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ selectedValue }}</div>
            <div class="wiki-storybook-flex-column">
              <DesignComponent
                v-model:selected="selectedValue"
                :list="[
                  { label: 'Option 1', value: 'option1' },
                  { label: 'Option 2', value: 'option2' },
                  { label: 'Option 3', value: 'option3' }
                ]"
                :readonly="false"
              />
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="selectedValue = 'option1'">Select 1</button>
                <button class="wiki-storybook-button" @click="selectedValue = 'option2'">Select 2</button>
                <button class="wiki-storybook-button" @click="selectedValue = undefined">Clear</button>
              </div>
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Selected: {{ multipleSelected }}</div>
            <div class="wiki-storybook-flex-column">
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
              <div class="wiki-storybook-flex">
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
                <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
                <button class="wiki-storybook-button" @click="multipleSelected = []">Clear all</button>
              </div>
            </div>
          </div>
        </div>
      `}],documentation:{body:`
    <StorybookDescriptions componentName={'ChipGroup'} type={'chipGroup'}/>
    <Canvas of={Component.ChipGroupBasic}/>

    <StorybookDescriptions componentName={'ChipGroup'} type={'selected'}/>
    <Canvas of={Component.ChipGroupSelection}/>

    <StorybookDescriptions componentName={'Value'} type={'v-model:selected'}/>
    <Canvas of={Component.ChipGroupVModel}/>
    `,events:`
    <StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,slots:`
    <StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
ChipGroup is a wrapper component that manages a collection of Chip elements based on a data list.
It streamlines the creation of filter sets, choice groups, and tag lists by handling data iteration and selection logic.

**Key Features:**
1. **Data Binding:**
   - \`list\`: Array of objects defining the chips (e.g., \`[{ label: 'A', value: 'a' }]\`).
   - \`v-model:selected\`: Tracks the selected value(s).

2. **Selection Modes:**
   - Supports single and multiple selection (depending on configuration, typically inferred from the initial value type or explicit props).

3. **Styling & Customization:**
   - \`chipAttrs\`: Object containing props to be passed to every child Chip (e.g., \`{ outline: true, icon: 'check' }\`).
   - \`iconWhenSelected\`: If true, displays the icon only when the chip is selected.

**Usage Examples:**

- **Basic Selection:**
  \`<ChipGroup
      :list="items"
      v-model:selected="selectedItem"
   />\`

- **Filter Group (Multiple):**
  \`<ChipGroup
      :list="filters"
      v-model:selected="activeFilters"
      :chip-attrs="{ outline: true }"
   />\`
    `}},B={name:"Dialog",description:{en:"Modal dialog component for displaying alerts, confirmations, and informational messages with icon and action buttons",ru:"Модальный диалоговый компонент для отображения предупреждений, подтверждений и информационных сообщений с иконкой и кнопками действий"},possibilities:{en:["modal dialog with centered positioning and backdrop","icon support with predefined success and error states","customizable title, description, and content areas","action buttons with OK and Close presets","image positioning (top or left alignment)","integration with Window, Bars, Actions, Icon components","close on ESC key and backdrop click","programmatic control via v-model:open","automatic icon switching based on success/error states","flexible content layout with information block","customizable footer with action buttons","keyboard accessibility and focus management","responsive design with mobile optimization","support for custom button configurations"],ru:["модальный диалог с центрированием и подложкой","поддержка иконок с предустановленными состояниями успеха и ошибки","настраиваемые области заголовка, описания и контента","кнопки действий с пресетами OK и Закрыть","позиционирование изображения (сверху или слева)","интеграция с компонентами Window, Bars, Actions, Icon","закрытие по ESC и клику на подложку","программное управление через v-model:open","автоматическое переключение иконки на основе состояний успеха/ошибки","гибкая компоновка контента с информационным блоком","настраиваемый футер с кнопками действий","доступность с клавиатуры и управление фокусом","адаптивный дизайн с оптимизацией для мобильных","поддержка пользовательских конфигураций кнопок"]},import:["import { ref } from 'vue'"],render:`
      <DesignComponent v-bind="args">
        <template #control="{binds}">
          <button class="wiki-storybook-button" v-bind="binds">Open Dialog</button>
        </template>
      </DesignComponent>
    `,stories:[{id:"DialogStates",name:{en:"Success and error states",ru:"Состояния успеха и ошибки"},setup:`
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
      `},{id:"DialogVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent
          v-model:open="open"
          label="Confirmation"
          description="Are you sure you want to proceed with this action?"
        />
      `},{id:"DialogAllSlots",name:{en:"All slots demonstration",ru:"Демонстрация всех слотов"},template:`
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
    `,description:'\nDialog is a specialized modal component designed for standard user interactions such as alerts, confirmations, and status messages.\nIt extends the functionality of the Modal component by providing a pre-defined layout for icons, titles, descriptions, and action buttons.\n\n**Note:** The `embedded` prop is used only for documentation examples to render the component inline. Do not use it in production code.\n\n**Key Features:**\n1. **Standardized Layout:**\n   - Automatically arranges elements: Icon -> Title (`label`) -> Description (`description`) -> Content (`default`) -> Actions (`footer`).\n   - Supports positioning the image/icon via `imagePosition` (e.g., top or left).\n\n2. **State Presets:**\n   - **Success:** Setting the `success` prop automatically displays a success icon and applies relevant styling.\n   - **Error:** Setting the `error` prop automatically displays an error icon and applies relevant styling.\n   - **Custom:** You can provide a custom icon via the `icon` prop.\n\n3. **Content Props:**\n   - `label`: The main heading or title of the dialog.\n   - `description`: Subtitle or explanatory text.\n   - `open`: Controls visibility (v-model).\n\n4. **Slots:**\n   - `#control`: Trigger element.\n   - `#default`: Custom content area.\n   - `#footer`: Area for action buttons (Cancel, OK).\n\n**Usage Examples:**\n\n- **Simple Confirmation:**\n  `<Dialog v-model:open="isOpen" label="Confirm Action" description="Are you sure you want to proceed?" />`\n\n- **Success Alert:**\n  `<Dialog success label="Operation Successful" description="Your data has been saved." />`\n\n- **Error Alert:**\n  `<Dialog error label="Error" description="Failed to connect to the server." />`\n    '}},L={name:"Dummy",description:{en:"A placeholder component used for structural presentation or testing",ru:"Компонент-заглушка, используемый для структурного представления или тестирования"},possibilities:{en:["multiple sizes from extra small to 5xl","various color palettes"],ru:["множественные размеры от очень маленького до 5xl","различные цветовые палитры"]},import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'Dummy'} type={'dummy'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:`
Dummy is a basic skeleton or placeholder component used mainly for testing or laying out interfaces early in development.

**Key Features:**
1. **Size:** Configurable via the \`size\` prop (e.g., 'sm', 'md', 'lg').
2. **Palette:** Customizable colors through the \`palette\` prop (e.g., 'red', 'blue', 'green').

**Usage Examples:**

- **Basic Dummy:** \`<Dummy />\`
- **Colored Dummy with Size:** \`<Dummy size="lg" palette="primary" />\`
    `}},P={name:"Field",description:{en:"Base container for form controls that composes label, messages, counter, icons and progress",ru:"Базовый контейнер для полей ввода, который собирает метку, сообщения, счётчик, иконки и прогресс"},possibilities:{en:["composes FieldLabel, FieldMessage, FieldCounter, Progress and icon includes","handles states: focus, disabled, readonly, selected, block","supports prefix, suffix and caption slots","validation highlighting based on validationMessage and forceShowMessage","optional cancel and navigation (arrow) icons with visibility flags","counter position control with counterTop","integrated helpers for sizing and icons (FieldSize, FieldIcons)"],ru:["композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок","обрабатывает состояния: focus, disabled, readonly, selected, block","поддерживает слоты prefix, suffix и caption","подсветка валидации на основе validationMessage и forceShowMessage","дополнительные иконки отмены и навигации (стрелки) с флагами видимости","управление позицией счётчика через counterTop","встроенные помощники для размеров и иконок (FieldSize, FieldIcons)"]},import:[],render:`
      <DesignComponent v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
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
    `,slots:`
<Canvas of={Component.FieldSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Slot'} type={'leading'} />
<StorybookDescriptions componentName={'Slot'} type={'trailing'} />
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
Field is the foundational wrapper component for all form inputs.
It provides the structural layout, styling, and state management for labels, messages, icons, and the input container.

**Key Features:**
1. **Layout Structure:**
   - **Label:** Displays the field label (\`label\`).
   - **Body:** The main container for the input.
     - **Prefix/Suffix:** Content before/after the input (\`prefix\`, \`suffix\`).
     - **Icons:** Leading (\`icon\`) and trailing (\`iconTrailing\`) icons.
     - **Input Slot:** The \`#default\` slot for the actual form control (input, select, etc.).
   - **Footer:** Displays helper text (\`helperMessage\`), validation errors (\`validationMessage\`), and character counter.

2. **Input Integration:**
   - The \`#default\` slot exposes \`binds\` (id, class, aria-attributes).
   - These \`binds\` **must** be applied to the native \`<input>\` or the focusable element within the slot to ensure proper styling and accessibility.

3. **States & Validation:**
   - **Loading:** \`loading\` prop shows a progress bar.
   - **Validation:** \`validationMessage\` turns the field red and displays the error.
   - **Disabled/Readonly:** \`disabled\`, \`readonly\` props style the wrapper accordingly.

**When to use:**
- When creating a custom form component (e.g., DatePicker, ColorPicker) that needs to match the design system's input style.
- Do not use for standard text inputs; use \`Input\` instead.

**Usage Examples:**

- **Custom Input Wrapper:**
  \`<Field label="Username" icon="person">
     <template #default="{ binds }">
       <input v-bind="binds" type="text" />
     </template>
   </Field>\`

- **With Validation:**
  \`<Field label="Email" validation-message="Invalid email">
     <template #default="{ binds }">
       <input v-bind="binds" type="email" />
     </template>
   </Field>\`
    `}},F={name:"FieldCounter",description:{en:"Component for displaying character count and input length limits in form fields",ru:"Компонент для отображения счетчика символов и ограничений длины ввода в полях форм"},possibilities:{en:["displays current character count","shows maximum character limit when specified","customizable display template with placeholders","automatic visibility based on counter and maxlength props","supports both string and number values",'compact display format (e.g., "50 / 100")',"template-based formatting with [c] and [m] placeholders"],ru:["отображает текущее количество символов","показывает максимальное ограничение символов при указании","настраиваемый шаблон отображения с заполнителями","автоматическая видимость на основе свойств counter и maxlength","поддерживает значения как строк, так и чисел",'компактный формат отображения (например, "50 / 100")',"форматирование на основе шаблона с заполнителями [c] и [m]"]},import:[],stories:[{id:"FieldCounterTemplate",name:{en:"Custom Template",ru:"Пользовательский шаблон"},template:`
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
    `},ai:{description:'\n**Note:** This is a subcomponent of `Field`. You should generally not use it directly.\n          It is automatically integrated into components like `Input` and `Textarea`.\n\nFieldCounter is a utility component designed to display character counts and limits for input fields.\nIt provides visual feedback to users about the length of their input and includes accessibility features for screen readers.\n\n**Key Features:**\n1. **Display Logic:**\n   - **Counter Only:** If `maxlength` is not set, displays the current count (e.g., "10").\n   - **With Limit:** If `maxlength` is set, displays "current / max" (e.g., "10 / 100").\n   - **Template:** The `template` prop allows custom formatting using placeholders `[c]` (counter) and `[m]` (max).\n\n2. **Accessibility:**\n   - Automatically manages ARIA live regions to announce status to screen readers.\n   - `maxlengthOnce`: Determines when to start announcing remaining characters (default is 10% of max).\n   - Provides specific messages for "remaining characters" and "limit exceeded".\n\n3. **Integration:**\n   - Typically used within `Input`, `Textarea`, or custom form wrappers.\n   - Accepts `counter` (current length) and `maxlength` (limit) as numbers or strings.\n\n**Usage Examples:**\n\n- **Standard Limit:**\n  `<FieldCounter :counter="currentLength" :maxlength="50" />`\n\n- **Custom Format:**\n  `<FieldCounter :counter="5" :maxlength="10" template="[c] of [m] chars" />`\n    '}},E={name:"FieldLabel",description:{en:"Component for displaying a field label and required marker; can be used together with counter and progress",ru:"Компонент для отображения метки поля и индикатора обязательности; может использоваться вместе со счетчиком и прогрессом"},possibilities:{en:["renders a text label for form fields","shows required marker when the field is mandatory","works together with FieldCounter and Progress when passed as props","keeps consistent spacing and classes within form controls"],ru:["рендерит текстовую метку для полей формы","показывает индикатор обязательности для обязательных полей","работает совместно со счетчиком FieldCounter и прогрессом при передаче соответствующих свойств","сохраняет согласованные отступы и классы внутри элементов формы"]},import:[],stories:[],documentation:{body:`
<StorybookDescriptions componentName={'FieldLabel'} type={'fieldLabel'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'label'} />
    `},ai:{description:`
**Note:** This is a subcomponent of \`Field\`. You should generally not use it directly.
          It is automatically integrated into components like \`Input\` and \`Textarea\`.

FieldLabel is a component responsible for rendering the label of a form field.
It ensures consistent styling, positioning, and accessibility for field labels.

**Key Features:**
1. **Label Text:**
   - Displays the text provided in the \`label\` prop.
   - Can be customized via the \`#label\` slot.

2. **Required Indicator:**
   - If the \`required\` prop is true, it visually indicates that the field is mandatory (usually with an asterisk).

**Usage Examples:**

- **Standard Label:**
  \`<FieldLabel label="Username" />\`
    `}},z={name:"FieldMessage",description:{en:"Component for displaying helper and validation messages for form fields",ru:"Компонент для отображения вспомогательных и валидационных сообщений для полей форм"},possibilities:{en:["shows helper text under the field","displays validation message when error occurs","visibility control via a dedicated force flag","works together with input fields and counters","supports HTML-safe rendering by design system"],ru:["показывает вспомогательный текст под полем","отображает сообщение валидации при ошибке","управление видимостью через специальный флаг","работает совместно с полями ввода и счетчиками","поддерживает безопасный рендеринг HTML силами дизайн-системы"]},import:[],stories:[{id:"FieldMessageSlots",name:{en:"Slots",ru:"Слоты"},template:`
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
    `},ai:{description:'\n**Note:** This component is part of the `Field` component and should not be used directly.\n\nFieldMessage is a component used to display informational text below form input fields.\nIt can show helper text, validation errors, and a character counter.\n\n**When to use:**\n1.  **Helper Text:** When a form field needs a hint or an explanation. This is controlled by the `helperMessage` prop.\n2.  **Validation Error:** When a form field has an invalid value. This is controlled by the `validationMessage` prop. The component will automatically style itself to indicate an error (usually by changing the text color to red). The validation message has priority over the helper message.\n3.  **Character Counter:** When you need to show the user how many characters they have typed, typically in relation to a `maxlength`. This is enabled with the `counter: true` prop.\n\n**Key Features:**\n- **Priority:** `validationMessage` is always shown if present. `helperMessage` is shown only if there is no validation message.\n- **Styling:** Automatically applies error styling when a `validationMessage` is provided.\n- **Counter:** Integrates a character counter that works with the `maxlength` prop.\n- **Accessibility:** It\'s designed to be linked with an input field via ARIA attributes, which is handled automatically when used within components like TextField.\n\n**How to identify in a design:**\n- Look for small text directly beneath an input, textarea, or select.\n- If the text is red or has an error-like appearance, it corresponds to the `validationMessage` prop.\n- If the text is a neutral color, it corresponds to the `helperMessage` prop.\n- If you see a "current/max" number format (e.g., "12/100"), this is the character counter, enabled by the `counter` prop.\n    '}},V={name:"Grid",description:{en:"Layout component for creating grid structures with customizable columns",ru:"Компонент макета для создания сеточных структур с настраиваемыми колонками"},possibilities:{en:["configurable number of columns","gap customization","responsive layout support"],ru:["настраиваемое количество колонок","настройка отступов (gap)","поддержка адаптивной верстки"]},import:[],render:`
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
    `},ai:{description:`
Grid is a layout utility designed to manage the arrangement of items in a column-based system.

**Key Features:**
1. **Columns:** Default is 12 columns, configurable via CSS variables.
2. **Layout:** Works in tandem with GridItem for precise control.

**Usage Examples:**

- **Basic Grid:** \`<Grid><GridItem>...</GridItem></Grid>\`
    `}},W={name:"GridItem",description:{en:"Individual item within a Grid component",ru:"Отдельный элемент внутри компонента Grid"},possibilities:{en:["configurable span across columns","responsive span settings (base, sm, md, lg, xl, 2xl)"],ru:["настраиваемый охват колонок (span)","адаптивные настройки охвата (base, sm, md, lg, xl, 2xl)"]},import:[],render:`
    <div class="wiki-storybook-group">
      <DesignComponent v-bind="args">
        <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"/>
      </DesignComponent>
    </div>
  `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'GridItem'} type={'gridItem'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:'\nGridItem represents a single cell or unit within a Grid layout, allowing control over its span across various breakpoints.\n\n**Key Features:**\n1. **Column Span:** Set the number of columns to span (1 to 12).\n2. **Responsive Spans:** Control layout for different screen sizes:\n   - `base`: Default span.\n   - `sm`, `md`, `lg`, `xl`, `xl2`: Breakpoint-specific spans.\n\n**Usage Examples:**\n\n- **Standard Item:** `<GridItem base="6">...</GridItem>`\n- **Responsive Item:** `<GridItem base="12" md="6" lg="4">...</GridItem>`\n    '}},O={name:"HorizontalScroll",description:{en:"Component for creating a horizontally scrollable container. Supports smooth scrolling to the selected element.",ru:"Компонент для создания горизонтально прокручиваемого контейнера. Поддерживает плавную прокрутку к выбранному элементу."},possibilities:{en:["horizontal scrolling of content","automatic scrolling to the selected element on mount","support for custom tags","slot for content with binding data for items"],ru:["горизонтальная прокрутка контента","автоматическая прокрутка к выбранному элементу при монтировании","поддержка пользовательских тегов","слот для контента с данными привязки для элементов"]},render:`
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
  `,stories:[{id:"HorizontalScrollBasic",name:{en:"Basic Usage",ru:"Базовое использование"},template:`
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
HorizontalScroll is a container component that enables horizontal scrolling for its content.
It is useful for displaying lists of items, galleries, or any content that exceeds the viewport width.

**Key Features:**
1. **Scrolling:**
   - Provides a scrollable area for content that overflows horizontally.
   - Supports smooth scrolling behavior.

2. **Selection:**
   - Can automatically scroll to a selected item (marked with a specific class) when the component mounts.
   - Exposes a \`toSelected\` method to programmatically scroll to the selected item.

3. **Slot Binding:**
   - The default slot provides \`binds\` object which should be applied to each child item.
   - This binding ensures correct styling and behavior for scroll items.

4. **Customization:**
   - \`tag\`: Allows changing the root element tag (default is \`div\`).
   - \`flush\`: Controls whether the scrollbar is flush with the content (implementation detail).

**Usage Examples:**

- **Basic List:**
  \`\`\`html
  <HorizontalScroll>
    <template #default="{ binds }">
      <div v-bind="binds">Item 1</div>
      <div v-bind="binds">Item 2</div>
    </template>
  </HorizontalScroll>
  \`\`\`
    `}},U={name:"Icon",description:{en:"A component for displaying vector icons with support for state management, automatic directionality adaptation, and design system styling.",ru:"Компонент для отображения векторных иконок с поддержкой управления состоянием, автоматической адаптацией направления и стилизацией дизайн-системы."},possibilities:{en:["rendering icons by identifier","toggling between two icons based on the active state","automatic mirroring for RTL languages","integration with the color palette and inverse mode","displaying a skeleton loader placeholder"],ru:["рендеринг иконок по идентификатору","переключение между двумя иконками в зависимости от активного состояния","автоматическое зеркалирование для RTL языков","интеграция с цветовой палитрой и инверсный режим","отображение заполнителя (скелетона) при загрузке"]},import:[],stories:[{id:"IconState",name:{en:"Icon state",ru:"Состояние иконки"},template:`
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
    `},ai:{description:`
Icon is a component for displaying vector icons, typically from the Material Symbols library.
It supports state switching (active/inactive), directionality (RTL), and integration with the design system's palette.

**Key Features:**
1. **Icon Source:**
   - \`icon\`: The name of the icon to display (e.g., "home", "menu", "arrow_forward").
     Uses the project's icon set (usually Material Symbols).

2. **Interactive States:**
   - \`active\`: Boolean flag to toggle the active state.
   - \`iconActive\`: The icon name to show when \`active\` is \`true\`.
     Ideal for toggle buttons (e.g., "favorite_border" vs "favorite").

3. **Styling:**
   - \`size\`: Controls the dimensions of the icon (e.g., "sm", "md", "lg").
   - \`asPalette\`: Applies the active palette color to the icon.
   - \`inverse\`: Inverts the colors, useful for dark backgrounds or contrast.

4. **Directionality (\`dir\`):**
   - Automatically mirrors the icon for RTL (Right-to-Left) languages if the icon is directional (like arrows).

5. **Loading:**
   - \`isSkeleton\`: Renders a loading placeholder (skeleton) instead of the icon.

**Usage Examples:**

- **Simple Icon:** \`<Icon icon="search" />\`
- **Toggle Icon:** \`<Icon icon="visibility_off" iconActive="visibility" :active="isVisible" />\`
- **Directional Arrow:** \`<Icon icon="arrow_forward" dir />\`
- **Large Palette Icon:** \`<Icon icon="star" size="xl" asPalette />\`
    `}},H={name:"Image",description:{en:"Component for displaying images and icons. Based on `ImageDesign` and supports working with files, links, and icon names.",ru:"Компонент для отображения изображений и иконок. Основан на `ImageDesign` и поддерживает работу с файлами, ссылками и именами икон"},possibilities:{en:["support for various source types: string, `File`, image or PDF address","adaptive sizing with `adaptive`, `objectWidth`, `objectHeight`","cropping and positioning via `coordinator`, `x`, `y`","rotation or hiding the component with properties `turn`, `hide`, `disabled`","mode selection for filling (`size`: `auto`, `contain`, `cover`)"],ru:["поддержка различных типов исходников: строка, `File`, адрес картинки или PDF","адаптивное измерение с помощью `adaptive`, `objectWidth`, `objectHeight`","обрезка и позиционирование через `coordinator`, `x`, `y`","поворот или скрытие компонента свойствами `turn`, `hide`, `disabled`","выбор режима заполнения (`size`: `auto`, `contain`, `cover`)"]},render:`
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
      `},{id:"ImageTagImg",name:{en:"Using img tag",ru:"Использование тега img"},setup:`
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
    `,description:'\nImage is a universal component for displaying graphic content.\nIt automatically determines the type of content (image, icon, file, PDF)\nbased on the `value` property.\n\n**Key Features:**\n1. **Automatic Type Detection:**\n   - **Image:** If `value` is a URL to an image or a File object.\n   - **Icon:** If `value` is a string matching an icon name\n     (e.g., "home", "filled-home"). Supports Material Symbols/Icons.\n   - **PDF:** If `value` is a URL to a PDF file.\n   - **Color:** If `value` is a color string (e.g., "#ff0000").\n\n2. **Display Modes (`size`):**\n   - `auto` (default): Standard behavior.\n   - `contain`: Scales the image to fit within the container while maintaining aspect ratio.\n   - `cover`: Scales the image to cover the container, cropping if necessary.\n\n3. **Rendering Method (`tagImg`):**\n   - `false` (default): Renders as a background image (`background-image`) on a `<span>`.\n     Useful for precise positioning and sizing.\n   - `true`: Renders as a standard `<img>` tag. Required for SEO (alt text), lazy loading,\n     and accessibility.\n\n4. **Adaptivity (`adaptive`):**\n   - Allows scaling the image relative to its original size using `objectWidth` and `objectHeight`.\n\n5. **Advanced Positioning:**\n   - `coordinator`: Array `[top, right, bottom, left]` for cropping or positioning the background.\n   - `x`, `y`: Direct control over background position.\n\n**Usage Examples:**\n\n- **Icon:** `<Image value="home" />`\n- **Image (Background):** `<Image value="https://example.com/img.jpg" size="cover" />`\n- **Image (Tag):** `<Image value="https://example.com/img.jpg" tag-img alt="Description" />`\n- **PDF:** `<Image value="https://example.com/doc.pdf" />`\n    '}},j={name:"Input",description:{en:"Text input field component with validation, masking and formatting support",ru:"Компонент текстового поля ввода с поддержкой валидации, маскирования и форматирования"},possibilities:{en:["multiple input types: text, number, email, password, tel, url, date, time and more","built-in validation with custom messages","mask support for formatted input (phone, date, custom patterns)","currency and number formatting","password visibility toggle","prefix and suffix support","counter for character limits","navigation arrows for numeric and selection inputs","autocomplete, spellcheck and autocorrect support","integrated with a Field component for consistent styling"],ru:["множественные типы ввода: text, number, email, password, tel, url, date, time и другие","встроенная валидация с пользовательскими сообщениями","поддержка маскирования для форматированного ввода (телефон, дата, пользовательские паттерны)","форматирование валюты и чисел","переключатель видимости пароля","поддержка префикса и суффикса","счётчик для ограничения символов","стрелки навигации для числовых и выборочных полей","поддержка автозаполнения, проверки орфографии и автокоррекции","интегрирован с компонентом Field для единообразной стилизации"]},import:["import { ref } from 'vue'"],render:`
      <DesignComponent v-bind="args" />
    `,stories:[{id:"InputTypes",name:{en:"Input types",ru:"Типы ввода"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="text" label="Text" placeholder="Enter text" />
          <DesignComponent type="email" label="Email" placeholder="email@example.com" />
          <DesignComponent type="password" label="Password" placeholder="Enter password" />
          <DesignComponent type="number" label="Number" placeholder="0" />
          <DesignComponent type="text" label="Phone" mask="+1 (***) ***-****" placeholder="+1 (555) 000-0000" />
          <DesignComponent type="date" label="Date" />
          <DesignComponent type="search" label="Search" placeholder="Search..." />
        </div>
      `},{id:"InputNumber",name:{en:"Number formatting",ru:"Форматирование чисел"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="number" value="1234567" label="Number" />
          <DesignComponent type="number-format" value="1234567" language="en-US" label="Formatted" />
          <DesignComponent type="number" value="50" :min="0" :max="100" label="From 0 to 100" />
          <DesignComponent type="number" value="10" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />
          <DesignComponent type="number-format" value="1234567.89" align="center" :fraction="2" label="Centered" />
        </div>
      `},{id:"InputCurrency",name:{en:"Currency & number formatting",ru:"Валюта и форматирование чисел"},template:`
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
      `},{id:"InputDate",name:{en:"Date and time",ru:"Дата и время"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="date" label="Date" language="ru-RU" />
          <DesignComponent type="datetime" label="Date and Time" language="en-US" />
          <DesignComponent type="year-month" label="Period" language="ru-RU" />
          <DesignComponent type="time" label="Time" />
          <DesignComponent type="hour-minute" label="Hours:Minutes" />
          <DesignComponent type="date" label="Limited Date" language="ru-RU" min="2024-01-01" max="2024-12-31" />
        </div>
      `},{id:"InputMask",name:{en:"Masked input",ru:"Маскированный ввод"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />
          <DesignComponent type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />
          <DesignComponent type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
        </div>
      `},{id:"InputVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        inputValue: ref('Initial value'),
        maskValue: ref(''),
        numberValue: ref(42)
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="inputValue = 'Changed value'">Set text</button>
            <button class="wiki-storybook-button" @click="inputValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="inputValue"
            type="text"
            label="Text input"
            placeholder="Enter text"
          />
          <div>Value: {{ inputValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="maskValue = '2022-05-13'">Set date</button>
            <button class="wiki-storybook-button" @click="maskValue = ''">Clear</button>
          </div>
          <DesignComponent
            v-model="maskValue"
            type="date"
            label="Date input"
          />
          <div>Mask: {{ maskValue }}</div>

          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="numberValue += 10">+10</button>
            <button class="wiki-storybook-button" @click="numberValue -= 10">-10</button>
          </div>
          <DesignComponent
            v-model="numberValue"
            type="number"
            label="Number input"
            :step="1"
          />
          <div>Number: {{ numberValue }}</div>
        </div>
      `},{id:"InputSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
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
    `},ai:{description:'\nInput is the primary component for getting user data. It wraps the native `<input>` element and adds support for floating labels, validation, masking, and formatting.\n\n**When to use:**\n1. **Text Fields:** Names, emails, addresses, search queries.\n2. **Numeric Data:** Quantities, prices (use `type="number"` or `type="currency"`).\n3. **Formatted Inputs:** Phone numbers, credit cards (use `mask`).\n4. **Passwords:** Secure entry with visibility toggle (use `type="password"`).\n5. **Date/Time:** Date selection (use `type="date"`, `type="time"`).\n\n**Key Properties & Logic:**\n\n1. **Input Types (`type`):**\n   - **Standard:** `text`, `email`, `search`, `url`, `tel`.\n   - **Password:** `password`. Automatically adds a "show/hide" eye icon.\n   - **Native Number:** `number`. Uses browser\'s native number input.\n   - **Formatted Number:** `number-format`. A text input that formats numbers with thousands separators (e.g., "1,234.56") based on `language`.\n   - **Currency:** `currency`. Formats input as money. Requires `currency` prop (e.g., "USD").\n   - **Date/Time:** `date`, `datetime`, `time`, `year-month`.\n\n2. **Masking (`mask`):**\n   - Applies a strict pattern to the input.\n   - Example: `mask="+1 (###) ###-####"` for phones.\n   - The component automatically handles placeholder characters and cursor movement.\n   - Use `match` to restrict allowed characters (e.g., `match="[0-9]"`).\n\n3. **Validation:**\n   - **Error State:** Set `validationMessage` to show an error text and turn the field red.\n   - **Regex Pattern:** Use `pattern` to validate the final value.\n   - **Input Filter:** Use `match` to prevent typing invalid characters.\n\n4. **Field Structure (Visuals):**\n   - **Label:** `label` prop. Can be floating or static.\n   - **Placeholder:** `placeholder` prop. Shown when empty.\n   - **Helper Text:** `helperMessage` prop. Shown below the input.\n   - **Icons:** `icon` (left/leading) and `iconTrailing` (right/trailing).\n   - **Affixes:** `prefix` (text before value, e.g., "$") and `suffix` (text after value, e.g., "kg").\n   - **Counter:** `counter` prop. Shows character count (requires `maxlength`).\n\n5. **Behavior:**\n   - **Loading:** `loading` prop shows a spinner/skeleton.\n   - **Clearable:** `cancel` prop adds a clear (X) button.\n   - **Read-only/Disabled:** `readonly` and `disabled` props.\n\n**Design Identification:**\n- **Standard Input:** A box or underline with text.\n- **With Icon:** Input with a symbol on the left or right.\n- **With Prefix/Suffix:** Input containing fixed text like "$" or "items".\n- **Error State:** Input with red border/text and a message below.\n- **Password:** Input with dots and an eye icon.\n\n**Example:**\n`<Input label="Email" type="email" icon="mail" />`\n    '}},q={name:"List",description:{en:"Advanced list component with keyboard navigation, search functionality, and hierarchical data support",ru:"Продвинутый компонент списка с навигацией с клавиатуры, функциональностью поиска и поддержкой иерархических данных"},possibilities:{en:["keyboard navigation with arrow keys and shortcuts","real-time search and highlight functionality","hierarchical data structure with groups and menus","focus management and item selection","lightweight rendering mode for large datasets","customizable item types and rendering","event-driven interaction system","accessibility support with ARIA attributes","automatic scroll management and viewport optimization","integration with icons, badges, and other components"],ru:["навигация с клавиатуры со стрелками и горячими клавишами","поиск в реальном времени и функциональность выделения","иерархическая структура данных с группами и меню","управление фокусом и выбором элементов","облегченный режим рендеринга для больших наборов данных","настраиваемые типы элементов и рендеринг","событийно-ориентированная система взаимодействия","поддержка доступности с ARIA атрибутами","автоматическое управление прокруткой и оптимизация области просмотра","интеграция с иконками, бейджами и другими компонентами"]},stories:[{id:"ListHighlight",name:{en:"Highlighting",ru:"Выделение"},template:`
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
<StorybookDescriptions componentName={'List'} type={'event.close'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
    `,slots:`
<StorybookDescriptions componentName={'List'} type={'slot.html'}/>
    `},ai:{description:'\nList is a core structural component for rendering interactive lists.\nIt is the engine behind Dropdowns, Selects, and Navigation Menus.\n\n**Key Features:**\n1. **Data Structure:**\n   - `list`: Array of objects. Supports types: `item` (default), `group`, `menu`, `line` (separator), `space`, `subtitle`, `html`.\n   - Items properties: `label`, `value`, `icon`, `description`, `disabled`, `to` (link).\n\n2. **Interaction:**\n   - **Selection:** `v-model:selected` (single or array).\n   - **Keyboard:** Full arrow key navigation, Enter to select.\n   - **Focus:** Manages internal focus.\n\n3. **Search & Filtering:**\n   - `highlight`: Text to highlight.\n   - `filterMode`: Hides non-matching items.\n\n**Usage Examples:**\n\n- **Basic List:**\n  `<List :list="[{ label: \'Home\', icon: \'home\' }, { label: \'Settings\', icon: \'settings\' }]" />`\n\n- **With Selection:**\n  `<List v-model:selected="current" :list="options" />`\n\n- **Filtered List:**\n  `<List :list="data" :highlight="searchText" filter-mode />`\n    '}},R={name:"ListGroup",description:{en:"Auxiliary component for the List component to group and organize list items with collapsible structure",ru:"Вспомогательный компонент для компонента List для группировки и организации элементов списка со сворачиваемой структурой"},possibilities:{en:["grouping helper for List component items","collapsible/expandable group functionality","customizable group header with icon support","automatic arrow icon rotation based on state","nested group support for complex hierarchies","seamless integration with List ecosystem","keyboard navigation and accessibility","smooth animation transitions","flexible content management through slots"],ru:["помощник группировки для элементов компонента List","функциональность сворачиваемой/разворачиваемой группы","настраиваемый заголовок группы с поддержкой иконок","автоматический поворот стрелки в зависимости от состояния","поддержка вложенных групп для сложных иерархий","бесшовная интеграция с экосистемой List","навигация с клавиатуры и доступность","плавные анимационные переходы","гибкое управление контентом через слоты"]},render:`
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
ListGroup is a structural component designed to group related list items, often providing collapsible/expandable functionality.
It serves as a container that manages the visibility of nested items, creating a hierarchical structure within lists or menus.

**Key Features:**
1. **Collapsible Logic:**
   - Wraps content in a \`MotionTransform\` component for smooth height animations.
   - Can be controlled programmatically via the \`open\` prop or interactively via the header.

2. **Slots Structure:**
   - \`#head\`: The header area acting as the trigger. It receives \`binds\` (click handlers, ARIA attributes) that **must** be applied to the interactive element (e.g., \`ListItem\`) to enable toggling.
   - \`#list\`: The content area where nested \`ListItem\` or other components are placed.

3. **Styling:**
   - \`divider\`: Adds a visual separator if enabled.
   - Automatically handles ARIA roles (\`role="group"\`).

**When to use:**
- **Navigation Menus:** To create submenus or grouped links (e.g., "Settings" -> "Profile", "Security").
- **Categorized Lists:** To group items under a common heading.
- **Accordions within Lists:** When list items need to expand to show details.

**Usage Examples:**

- **Basic Group:**
  \`<ListGroup>
     <template #head="{ binds }">
       <ListItem v-bind="binds" label="My Group" icon="folder" />
     </template>
     <template #list>
       <ListItem label="File 1" />
       <ListItem label="File 2" />
     </template>
   </ListGroup>\`

- **Open by Default:**
  \`<ListGroup open>
     <template #head="{ binds }">
       <ListItem v-bind="binds" label="Always Open" />
     </template>
     <template #list>...</template>
   </ListGroup>\`
    `}},G={name:"ListItem",description:{en:"Versatile list item component for displaying structured content",ru:"Универсальный компонент элемента списка для отображения структурированного контента"},possibilities:{en:["multiple content areas: label, description, prefix, suffix, caption","icon support with flexible positioning and alignment","badge integration for status indicators","interactive states: focus, selected, disabled, readonly","progress and skeleton loading states","ripple effect for enhanced user feedback","flexible tag options: button, link, div, span","built-in accessibility support","customizable through design tokens"],ru:["множественные области контента: метка, описание, префикс, суффикс, заголовок","поддержка иконок с гибким позиционированием и выравниванием","интеграция значков для индикаторов статуса","интерактивные состояния: фокус, выбранный, отключенный, только для чтения","состояния загрузки с прогрессом и скелетоном","эффект пульсации для улучшенной обратной связи","гибкие варианты тегов: кнопка, ссылка, div, span","встроенная поддержка доступности","настраиваемый через токены дизайна"]},render:`
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
ListItem is a versatile structural component used to render items within lists, menus, or navigation bars.
It provides a standardized layout with slots for leading (prefix) and trailing (suffix) elements, along with a central content area.

**Key Features:**
1. **Layout Structure:**
   - **Prefix:** Left-most area (e.g., for avatars, checkboxes, or icons).
   - **Content:** Central area containing:
     - \`label\`: Main title.
     - \`caption\`: Meta text (above or next to label).
     - \`description\`: Subtitle text (below label).
   - **Suffix:** Right-side meta content (e.g., timestamp, status).
   - **Trailing:** Far-right action area (e.g., arrow icon, badge).

2. **Interaction:**
   - **Navigation:** Renders as an \`<a>\` tag if \`href\` is provided.
   - **Selection:** Supports \`selected\` state (useful for menus).
   - **Feedback:** Includes ripple effect and hover/active states.
   - **Disabled:** \`disabled\` prop prevents interaction.

3. **Styling:**
   - \`divider\` adds a bottom border.
   - Supports \`badge\` integration via props.

**Usage Examples:**

- **Navigation Link:**
  \`<ListItem href="/home" label="Home" icon="chevron_right">
     <template #prefix>prefix</template>
   </ListItem>\`

- **User List Item:**
  \`<ListItem label="John Doe" description="Online" divider>
     <template #prefix><Avatar src="..."/></template>
     <template #suffix>12:30 PM</template>
   </ListItem>\`

- **Menu Item:**
  \`<ListItem label="Settings" icon="settings" selected />\`
    `}},K={name:"ListMenu",description:{en:"Auxiliary component for the List component to create nested menus and organize navigation elements with expandable structure",ru:"Вспомогательный компонент для компонента List для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой"},possibilities:{en:["menu helper for List component navigation","expandable/collapsible submenu functionality","customizable menu header with icon support","automatic arrow icon rotation based on state","nested menu support for complex hierarchies","seamless integration with List ecosystem","keyboard navigation and accessibility","smooth animation transitions","flexible menu content management through slots"],ru:["помощник меню для навигации компонента List","функциональность раскрывающихся/сворачивающихся подменю","настраиваемый заголовок меню с поддержкой иконок","автоматический поворот стрелки в зависимости от состояния","поддержка вложенных меню для сложных иерархий","бесшовная интеграция с экосистемой List","навигация с клавиатуры и поддержка доступности","плавные анимационные переходы","гибкое управление содержимым меню через слоты"]},render:`
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
ListMenu is a specialized wrapper component designed to create dropdown menus or nested navigation lists.
It utilizes the \`Window\` component logic with a menu preset to manage the visibility and positioning of a list of items relative to a trigger.

**Key Features:**
1. **Structure:**
   - \`#head\`: The trigger area (Control). It exposes \`binds\` which **must** be applied to the interactive element (e.g., \`ListItem\`, \`Button\`) to toggle the menu.
   - \`#list\`: The content area containing the menu items.

2. **Behavior:**
   - **Popup/Dropdown:** By default, it behaves like a dropdown menu (\`adaptive="menu"\`).
   - **Interaction:** Manages click/hover events via \`binds\` to open/close the list.
   - **Accessibility:** Automatically applies \`role="menu"\` and \`aria-haspopup\`.

**Usage Examples:**

- **List Item with Submenu:**
  \`<ListMenu>
     <template #head="{ binds }">
       <ListItem v-bind="binds" label="Settings" icon="settings" />
     </template>
     <template #list>
       <ListItem label="Profile" />
       <ListItem label="Account" />
     </template>
   </ListMenu>\`
    `}},Y={name:"Mask",description:{en:"Input masking utility for text, numbers, currency and dates with flexible patterns and validation.",ru:"Утилита маскирования ввода для текста, чисел, валют и дат с гибкими шаблонами и валидацией."},possibilities:{en:["string or multi-pattern masks (auto selection)","special symbols define input groups and literals are auto-inserted","per-group and global validation patterns","number / currency formats with grouping and fraction control","date/time helpers and locale-aware behavior"],ru:["одиночные и множественные маски (автовыбор по вводу)","спецсимволы задают группы ввода, литералы подставляются автоматически","валидация по группам и глобально","форматы числа/валюты с группировкой и дробной частью","помощники для даты/времени и поведение с учётом локали"]},import:[],render:`
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
    `},ai:{description:'\n **Note:** This component is already integrated into the `Input` component and should not be used directly.\n\n Mask is a low-level utility component responsible for controlling and formatting user input. It ensures that the data entered matches a predefined structure (mask) or data type (date, number, currency).\n\n **How it works:**\n The component intercepts input events (`beforeinput`, `input`) and validates each character against allowed patterns (`match`). It automatically inserts static characters defined in the `mask` (like parentheses, dashes) and skips over them during navigation. For complex types like `date` or `number`, it uses internal logic to validate ranges (e.g., month 1-12) and format values (e.g., adding thousands separators).\n\n **Key Properties & Usage:**\n\n 1. **Masking (`mask`):**\n    - **String:** A single pattern (e.g., `+1 (***) ***-****`). The `*` character (or value of `special`) represents an input slot. All other characters are treated as static literals and are automatically inserted/skipped.\n    - **Array:** A list of patterns (e.g., `[\'(***) ***-****\', \'+1 (***) ***-****\']`). The component automatically selects the most appropriate mask based on the input length.\n\n 2. **Input Types (`type`):**\n    - `text` (default): Uses the `mask` pattern directly.\n    - `number`: Formats input as a number. Automatically adds thousands separators based on `language`.\n    - `currency`: Formats as currency. Requires `currency` prop (e.g., \'USD\'). Uses `fraction` for decimal places.\n    - `date` / `datetime` / `time`: Enforces valid date/time entry. The format (e.g., DD.MM.YYYY vs MM/DD/YYYY) is determined by the `language` prop.\n\n 3. **Validation & Constraints:**\n    - `match`: A Regular Expression string (e.g., `[0-9a-fA-F]`). Only characters matching this pattern are accepted. Useful for Hex codes, alphanumeric IDs, etc.\n    - `pattern`: A Regex for validating the *completed* value.\n    - `min`, `max`: For number/currency types, restricts the value range.\n\n 4. **Customization:**\n    - `special`: Defines the placeholder character in the `mask`. Default is `*`. Change this if your mask needs to contain literal asterisks.\n    - `language`: Determines locale-specific formatting for dates and numbers (separators, date order).\n    - `fraction`: Specifies the number of decimal places for numbers/currency.\n\n **When to use (Design Identification):**\n - **Formatted Text:** Inputs that require specific formatting like Phone Numbers `+1 (555) ...`, Credit Cards `0000 0000 ...`, or License Plates.\n - **Financial Data:** Inputs for amounts that need thousands separators or currency symbols.\n - **Dates:** Inputs requiring strict date structure (DD.MM.YYYY).\n\n **Example Scenarios:**\n - **Phone:** `<Mask mask="+1 (***) ***-****" match="[0-9]"/>`\n - **Price:** `<Mask type="currency" currency="USD" fraction="2"/>`\n - **Date:** `<Mask type="date" language="en-GB"/>` (DD/MM/YYYY)\n     '}},X={name:"Menu",description:{en:"Composite menu that combines Window, Bars, and List for nested interactive navigation",ru:"Составной компонент, объединяющий Window, Bars и List для вложенной интерактивной навигации"},possibilities:{en:["popup container from Window with control/title/footer slots","toolbar actions via Bars and hierarchical items via List","nested groups and menus with keyboard focus and selection","lightweight rendering for large menus (lite + liteThreshold)","custom fields mapping with keyLabel and keyValue","custom item attributes and container attributes (itemAttrs, listAttrs)"],ru:["всплывающий контейнер из Window со слотами control/title/footer","действия панели через Bars и иерархия пунктов через List","вложенные группы и меню с фокусом с клавиатуры и выбором","облегчённый рендер для больших меню (lite + liteThreshold)","кастомное сопоставление полей через keyLabel и keyValue","настройка атрибутов пунктов и списка (itemAttrs, listAttrs)"]},import:["import { ref } from 'vue'"],render:`
    <DesignComponent v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </DesignComponent>
  `,stories:[{id:"MenuNavigation",name:{en:"Navigation with previous/next",ru:"Навигация с previous/next"},setup:`
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
      `},{id:"MenuAjax",name:{en:"AJAX Loading",ru:"AJAX Загрузка"},setup:`
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
      `},{id:"MenuVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
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
Menu is a comprehensive dropdown component used for navigation, actions, and selection.
It combines a trigger (Control), a popup container (Window), and a structured list (List).

**Key Features:**
1. **Structure:**
   - **Control Slot (\`#control\`):** The trigger element (e.g., Button, Avatar). Receives \`binds\` (click/keydown handlers) which **must** be applied.
   - **Popup:** Opens a floating window positioned relative to the trigger.
   - **Content:** Renders a list of items defined in the \`list\` prop.

2. **Data Model (\`list\` prop):**
   - Array of objects: \`{ label, value, icon, disabled, to, ... }\`.
   - Supports special types: \`line\` (separator), \`group\` (headers), \`menu\` (nested submenus).

3. **Interaction:**
   - **Selection:** Tracks selected values via \`v-model:selected\`.
   - **Navigation:** Supports keyboard navigation (Arrows, Enter, Esc).
   - **Async:** Can load data dynamically using the \`ajax\` prop.

**When to use:**
- **Dropdown Menus:** For user profile menus, settings, or navigation.
- **Context Menus:** For right-click actions.
- **Select-like UI:** When a standard select is not enough (needs icons, groups, custom rendering).

**Usage Examples:**

- **Basic Menu:**
  \`<Menu :list="[{ label: 'Item 1' }, { label: 'Item 2' }]">
     <template #control="{ binds }">
       <button v-bind="binds">Options</button>
     </template>
   </Menu>\`

- **With Selection:**
  \`<Menu
     v-model:selected="currentValue"
     :list="options"
   >
     <template #control="{ binds }">
       <button v-bind="binds">Select: {{ currentValue }}</button>
     </template>
   </Menu>\`
    `}},J={name:"Modal",description:{en:"Simplified wrapper over a Window component for creating centered modal dialogs",ru:"Упрощенная обертка над компонентом Window для создания центрированных модальных диалогов"},possibilities:{en:["pre-configured modal window with centered positioning","overlay backdrop with background blocking","close on the ESC key and click outside","integration with scrollbar for long content","slots for title, content and footer customization","lifecycle events (preparation, opening, closing)","close a button with a customizable icon","programmatic control via a v-model:open","focus management and keyboard navigation","responsive design with mobile optimization"],ru:["предварительно настроенное модальное окно с центрированием","оверлей с блокировкой фона","закрытие по ESC и клику вне области","интеграция со скроллбаром для длинного контента","слоты для настройки заголовка, содержимого и подвала","события жизненного цикла (preparation, opening, closing)","кнопка закрытия с настраиваемой иконкой","программное управление через v-model:open","управление фокусом и клавиатурная навигация","адаптивный дизайн с оптимизацией для мобильных"]},import:["import { ref } from 'vue'"],render:`
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
    `,stories:[{id:"ModalVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        open: ref(false)
      }
      `,template:`
        <button class="wiki-storybook-button" @click="open = true">Open via v-model ({{ open }})</button>

        <DesignComponent v-model:open="open">
          <div class="wiki-storybook-item--padding">Your content here</div>
        </DesignComponent>
      `},{id:"ModalAllSlots",name:{en:"All slots demonstration",ru:"Демонстрация всех слотов"},template:`
        <DesignComponent>
          <template #control="{binds}">
            <button class="wiki-storybook-button" v-bind="binds">Open Modal with All Slots</button>
          </template>

          <template #title>
            Modal Title Slot
          </template>

          <template #default>
            <h4>Default Slot Content</h4>
            <p>This is the main content area of the modal. You can place any content here, including text, forms, images, or other components.</p>

            <div class="wiki-storybook-info">
              <strong>Available slots:</strong>
              <ul>
                <li><code>#control</code> - trigger button or element</li>
                <li><code>#title</code> - modal header/title area</li>
                <li><code>#default</code> - main content area</li>
                <li><code>#footer</code> - footer with actions</li>
              </ul>
            </div>

            <p>Each slot receives control props that allow you to interact with the modal programmatically, such as closing it or accessing window classes.</p>
          </template>

          <template #footer="{classesWindow}">
              <button :class="classesWindow.close" class="wiki-storybook-button wiki-storybook-button--text">Cancel</button>
              <button class="wiki-storybook-button">Confirm</button>
          </template>
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
Modal is a simplified wrapper over the Window component for creating centered modal dialogs.
It is designed to handle standard use cases for pop-ups, alerts, and forms with minimal configuration.

**Note:** The \`embedded\` prop is used only for documentation examples to render the component inline. Do not use it in production code.

**Key Features:**
1. **Positioning & Overlay:**
   - Always centered on the screen.
   - Renders a backdrop (overlay) to block background interactions.
   - Preset \`adaptive="modal"\` ensures correct behavior on all devices.

2. **State Management:**
   - Controlled via \`v-model:open\` (boolean).
   - Automatically manages focus and scroll locking on the body.

3. **Slots Structure:**
   - \`#control\`: The trigger element (e.g., button). Receives \`binds\` (click handlers) to automatically toggle the modal.
   - \`#title\`: The header area of the modal.
   - \`#default\`: The main content body.
   - \`#footer\`: The footer area, typically for action buttons.

4. **User Interaction:**
   - Closes on ESC key press.
   - Closes on clicking outside the modal (backdrop).
   - Supports a close button in the header.

**Usage Examples:**

- **With Trigger Button:**
  \`<Modal>
     <template #control="{ binds }">
       <button v-bind="binds">Open Modal</button>
     </template>
     <template #default>
       <p>Are you sure?</p>
     </template>
   </Modal>\`

- **Programmatic Control:**
  \`<Modal v-model:open="showModal">
     <p>Content...</p>
   </Modal>\`
    `}},$={name:"MotionAxis",description:{en:"A component for organizing transitions between elements (slides). Allows animating content changes along X, Y, Z axes with slide effects. Supports automatic animation direction detection, container height management, and lazy loading (DOM).",ru:"Компонент для организации переходов между элементами (слайдами). Позволяет анимировать смену контента по осям X, Y, Z с эффектами сдвига. Поддерживает автоматическое определение направления анимации, управление высотой контейнера и ленивую загрузку (DOM)."},possibilities:{en:["Slide transition animation along X, Y, Z axes","Automatic or manual direction control (next/back)","Smooth container height animation to fit content","Slide lifecycle management in DOM (inDom, inDomSlide)","Slot support for each slide"],ru:["Анимация смены слайдов по осям X, Y, Z","Автоматическое или ручное управление направлением (вперед/назад)","Плавная анимация высоты контейнера под контент","Управление жизненным циклом слайдов в DOM (inDom, inDomSlide)","Поддержка слотов для каждого слайда"]},render:`
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
`,import:["import { ref } from 'vue'"],stories:[{id:"MotionAxisBasic",name:{en:"Basic Usage",ru:"Базовое использование"},setup:`
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
      `},{id:"MotionAxisScroll",name:{en:"Scroll Management",ru:"Управление скроллом"},setup:`
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
      `},{id:"MotionAxisVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      const selected = ref('slide1')
      return { selected }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
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
    `}},Z={name:"MotionTransform",description:{en:"Low-level motion system that manages element transforms, state transitions, and interaction events for contextual UI like windows and menus",ru:"Низкоуровневая система анимаций, управляющая трансформациями элементов, переходами состояний и событиями взаимодействия для контекстных интерфейсов (окна, меню)"},possibilities:{en:["centralized state for open/show/teleport with computed accessors","size measurement and CSS variable updates for smooth animations","teleport control for window-like behavior and off-DOM rendering","click/close/auto-close handling with ignore areas","programmatic API for open/close/toggle and state transitions","designed to be embedded into higher-level components (Window, Dropdown, etc.)"],ru:["централизованное состояние open/show/teleport с вычисляемыми аксессорами","измерение размеров и обновление CSS‑переменных для плавных анимаций","управление телепортацией для «оконного» поведения и рендера вне DOM","обработка кликов/закрытия/автозакрытия с зонами игнорирования","программный API для open/close/toggle и переходов состояний","предназначена для встраивания в компоненты верхнего уровня (Window, Dropdown и т. п.)"]},render:`
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
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
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
MotionTransform is a core utility component for creating expanding, collapsing, or floating UI elements with smooth animations.
It serves as the base for Dropdowns, Accordions, and custom interactive panels.

**Key Features:**
1. **Structure:**
   - \`#head\`: The trigger area (e.g., a button or title).
   - \`#body\`: The content area that animates in/out.

2. **Animation Logic:**
   - Automatically handles height calculations for smooth CSS transitions (expand/collapse).
   - \`animationHeadPosition\`: Controls the visual flow (e.g., \`top\` for standard dropdowns, \`toBottom\` for specific motion effects).

3. **Positioning & Teleport:**
   - **Inline (Default):** Content expands within the flow (Accordion style).
   - **Teleported:** With \`teleport\`, content moves to the \`<body>\` tag, useful for floating menus/popups that need to overlay other content.

4. **Interaction:**
   - \`clickOpen\`: Toggles state when clicking the head.
   - \`autoClose\`: Closes when clicking outside the component.
   - \`ignore\`: Selectors to exclude from the "click outside" check.

**When to use:**
- **Accordion/Collapse:** When clicking a header should push content down.
- **Dropdown/Menu:** When clicking a button should show a floating list (use with \`teleport\`).
- **Custom Toggles:** Any UI pattern requiring show/hide transitions.

**Usage Examples:**

- **Accordion:**
  \`<MotionTransform click-open>
     <template #head>Title</template>
     <template #body>Content</template>
   </MotionTransform>\`

- **Floating Menu:**
  \`<MotionTransform teleport auto-close>
     <template #head><button>Options</button></template>
     <template #body><menu>...</menu></template>
   </MotionTransform>\`
    `}},Q={name:"Page",description:{en:"A top-level semantic container component representing the main content of a document. It uses the <main> tag by default and supports high-level headers and descriptions.",ru:"Семантический компонент-контейнер верхнего уровня, представляющий основное содержимое документа. По умолчанию использует тег <main> и поддерживает заголовки высокого уровня."},possibilities:{en:["semantic wrapper for main content using <main> tag","support for main titles (h1 by default), labels, descriptions, and captions","customizable layout and spacing","support for icons","flexible content organization"],ru:["семантическая обертка для основного контента с использованием тега <main>","поддержка главных заголовков (h1 по умолчанию), меток, описаний и подписей","настраиваемый макет и отступы","поддержка иконок","гибкая организация контента"]},import:[],render:`
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
    `,stories:[{id:"PageBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <p>Simple page content wrapper.</p>
          </DesignComponent>
          <DesignComponent label="Documentation" description="Learn how to use the library">
            <p>Welcome to the documentation page.</p>
          </DesignComponent>
          <DesignComponent headline="Dashboard Overview" label="Analytics">
            <div style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
              Chart Placeholder
            </div>
          </DesignComponent>
        </div>
      `},{id:"PageSlots",name:{en:"Slots usage",ru:"Использование слотов"},template:`
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
Page is a top-level structural component designed to wrap the main content of a view or document.
It acts as a semantic container (typically rendering a \`<main>\` tag) and provides a standardized header structure.
It inherits all functionality from the \`Block\` component.

**Key Features:**
1. **Semantic Structure:**
   - Represents the main content area of the application.
   - Provides a consistent layout for page headers.

2. **Header Layout:**
   - **Headline:** High-level category or breadcrumb-like text.
   - **Label:** The primary page title.
   - **Description:** Subtitle or page summary.
   - **Icon:** Page icon.
   - **Trailing:** Area for page-level actions (e.g., "Save", "Edit").

3. **Customization:**
   - Supports all \`Block\` props.
   - Flexible content slot (\`#default\`).

**When to use:**
- As the root container for a route or view.
- To provide a consistent title and action bar for a page.

**Usage Examples:**

- **Standard Page:**
  \`<Page label="Home" description="Welcome back">
     <DashboardWidgets />
   </Page>\`

- **Page with Actions:**
  \`<Page headline="Settings" label="Profile">
     <template #trailing>
       <button>Save Changes</button>
     </template>
     <ProfileForm />
   </Page>\`
    `}},ee={name:"Progress",description:{en:"Component for displaying progress of operations or loading states",ru:"Компонент для отображения прогресса операций или состояний загрузки"},possibilities:{en:["linear and circular progress indicators","determinate and indeterminate progress states","customizable value and maximum values","different positioning options (top, bottom, static)","delay settings for showing and hiding","dense and inverse styling variants","point mode for minimal display"],ru:["линейные и круглые индикаторы прогресса","детерминированные и неопределенные состояния прогресса","настраиваемые значения прогресса и максимума","различные варианты позиционирования (сверху, снизу, статично)","настройки задержки для показа и скрытия","компактный и инвертированный варианты стилизации","точечный режим для минимального отображения"]},render:`
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
    `},ai:{render:`
<div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 40px;"
>
  <Progress v-bind="args"/>
</div>
    `,description:`
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
    `}},te={name:"Ripple",description:{en:"Component for creating a ripple wave effect on click interactions",ru:"Компонент для создания эффекта волны при взаимодействии с элементом"},possibilities:{en:["it creates a ripple wave effect on click","automatic positioning based on click coordinates","disabling effect with `disabled` property","Material Design inspired animation","it works with any interactive elements"],ru:["создает эффект волны при клике","автоматическое позиционирование по координатам клика","отключение эффекта свойством `disabled`","анимация в стиле Material Design","работает с любыми интерактивными элементами"]},render:`
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
**Note:** This is a low-level decorative component. You should not use it directly.
          It is automatically integrated into interactive components like \`Button\`, \`ListItem\`,
          and \`Card\` to provide feedback. This documentation is for informational purposes.

Ripple is a decorative component that adds a Material Design-style wave effect to provide
visual feedback on user interaction (clicks, taps). It should be placed inside an interactive container.

**Key Features:**
1.  **Placement:** It is designed to be placed as the last child inside a host element
                   (like a button, card, or list item). The host element MUST have \`position:
                   relative\` and \`overflow: hidden\` for the effect to work correctly.

2.  **Automatic Effect:** The ripple animation starts automatically from the point of a \`pointerdown\`
                          event (click or tap) on its parent container.

3.  **Self-Managing:** The component handles the creation, animation (expansion and fade-out),
                       and removal of ripple elements from the DOM automatically.

4.  **Styling:** The ripple's color is determined by the CSS \`color\` property of its host element
                 (\`currentColor\`). It can be styled by changing the text color of the parent.

5.  **Control:** The effect can be completely disabled by passing the \`disabled: true\` prop.

**When to Use:**
- Use inside buttons, cards, list items, or any other clickable surface to provide clear,
  tangible feedback that the user's action was registered.
- It is purely a visual enhancement and adds no functionality on its own.
`}},oe={name:"Scrollbar",description:{en:"Custom scrollbar component for enhanced user experience",ru:"Компонент кастомного скроллбара для улучшения пользовательского опыта"},possibilities:{en:["custom scrollbar styling and appearance","dynamic divider lines based on scroll position","static divider lines at top and bottom","visibility control for scrolling behavior","inverse divider behavior options","hide all divider lines functionality"],ru:["кастомная стилизация и внешний вид скроллбара","динамические разделительные линии в зависимости от позиции скролла","статичные разделительные линии сверху и снизу","управление видимостью для поведения прокрутки","опции инвертированного поведения разделителей","функция скрытия всех разделительных линий"]},render:`
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
    <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

    <p>Scrollbars play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

    <h4>Principles of Effective Design Implementation</h4>
    <p>Effective scrollbar design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of various input devices, and comprehensive keyboard navigation support. Cross-browser compatibility remains a top priority, especially when dealing with custom scrollbar implementations that need to work consistently across different rendering engines.</p>

    <p>Users expect scrollbars to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>
  </Scrollbar>
</div>
    `,description:`
Scrollbar is a structural component that wraps content to provide custom scrolling behavior and visual indicators.
It is designed to handle overflow content within a fixed-height container, adding dynamic dividers (borders) that indicate scroll position.

**Key Features:**
1. **Scroll Indicators (Dividers):**
   - Automatically detects scroll position.
   - Displays a top divider when scrolled down.
   - Displays a bottom divider when there is more content below.
   - Configurable via props (e.g., \`divider\`, \`border\`).

2. **Layout:**
   - Renders as a block container (default \`div\`).
   - Must have a defined height or max-height (inherited or set) to enable scrolling.

3. **Usage:**
   - Essential for **Modals**, **Dropdowns**, and **Sidebars** where content length varies.
   - Provides visual cues to users that more content is available.

**Usage Examples:**

- **Basic Scroll Area:**
  \`<Scrollbar style="height: 200px">
     <p>Long content...</p>
   </Scrollbar>\`

- **With Custom Tag:**
  \`<Scrollbar tag="section" class="my-scroll-area">
     <List :list="items" />
   </Scrollbar>\`
    `}},ie={name:"Section",description:{en:"A semantic container component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <section> tag by default.",ru:"Семантический компонент-контейнер, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <section>."},possibilities:{en:["semantic grouping of content using <section> tag","support for titles (h2 by default), labels, descriptions, and captions","customizable layout and spacing","support for icons","flexible content organization"],ru:["семантическая группировка контента с использованием тега <section>","поддержка заголовков (h2 по умолчанию), меток, описаний и подписей","настраиваемый макет и отступы","поддержка иконок","гибкая организация контента"]},import:[],render:`
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
    `,stories:[{id:"SectionBasic",name:{en:"Basic",ru:"Базовые"},template:`
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <p>Generic section content without header.</p>
          </DesignComponent>
          <DesignComponent label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </DesignComponent>
          <DesignComponent headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </DesignComponent>
        </div>
      `},{id:"SectionSlots",name:{en:"Slots usage",ru:"Использование слотов"},template:`
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
Section is a structural component used to divide a page into distinct thematic areas.
It is a semantic alias for the \`Block\` component, inheriting all its layout and styling capabilities.

**Key Features:**
1. **Structure:**
   - **Headline:** Top-level category text (\`headline\`).
   - **Header:** Contains Icon, Label (Title), Caption, and Trailing actions.
   - **Description:** Subtitle or explanatory text.
   - **Content:** The main body of the section.

2. **Usage:**
   - Use \`Section\` to group related content within a Page.
   - It provides a consistent header structure for page blocks.

3. **Props & Slots:**
   - Inherits all props from \`Block\` (\`label\`, \`icon\`, \`tag\`, etc.).
   - Supports slots: \`#headline\`, \`#trailing\`, \`#default\`.

**Usage Examples:**

- **Standard Section:**
  \`<Section headline="Account" label="Profile Settings">
     <ProfileForm />
   </Section>\`

- **Section with Actions:**
  \`<Section label="Recent Activity">
     <template #trailing>
       <button>View All</button>
     </template>
     <ActivityList />
   </Section>\`
    `}},ne={name:"Select",description:{en:"Complete select dropdown control combining Field, Menu, SelectValue and Input for sophisticated selection interface",ru:"Полнофункциональный элемент выбора из выпадающего списка, объединяющий Field, Menu, SelectValue и Input для продвинутого интерфейса выбора"},possibilities:{en:["single or multiple value selection","built-in search and filtering capabilities","editable selected value mode (editValue)","AJAX data loading with caching support","filter mode for real-time option filtering","validation with standard Field features","keyboard navigation and accessibility","custom option list via slots or data","icon support for dropdown arrow and search","auto-close control for multiple selection","integration with all Field component features (label, counter, messages, icons)"],ru:["выбор одиночного или множественных значений","встроенный поиск и возможности фильтрации","режим редактирования выбранного значения (editValue)","AJAX загрузка данных с поддержкой кеширования","режим фильтрации для реального времени","валидация со стандартными функциями Field","клавиатурная навигация и доступность","пользовательский список опций через слоты или данные","поддержка иконок для стрелки выпадающего списка и поиска","управление автозакрытием для множественного выбора","интеграция со всеми возможностями компонента Field (подпись, счётчик, сообщения, иконки)"]},import:["import { ref } from 'vue'"],render:`
      <DesignComponent v-bind="args" />
    `,stories:[{id:"SelectBasic",name:{en:"Basic",ru:"Базовые"},setup:`
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
      `},{id:"SelectVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      return {
        singleValue: ref('option2'),
        multipleValue: ref(['option1', 'option3'])
      }
      `,template:`
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
      `},{id:"SelectSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
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
    `}},se={name:"SelectValue",description:{en:"Display component for selected values in select controls, showing chips for multiple selection or single text value",ru:"Компонент отображения выбранных значений в элементах выбора, показывающий чипы для множественного выбора или одиночное текстовое значение"},possibilities:{en:["single or multiple value display modes","automatic chip rendering for multiple selections","placeholder support for empty state","cancel icon for clearing individual selections","customizable chip appearance via chipAttrs","optional icon display in chips","responsive handling of selected items","disabled and readonly states support"],ru:["режимы отображения одиночного или множественного значения","автоматический рендеринг чипов для множественного выбора","поддержка плейсхолдера для пустого состояния","иконка отмены для очистки отдельных выборов","настраиваемый внешний вид чипов через chipAttrs","опциональное отображение иконок в чипах","адаптивная обработка выбранных элементов","поддержка состояний disabled и readonly"]},import:[],stories:[{id:"SelectValueBasic",name:{en:"Basic",ru:"Базовые"},template:`
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
SelectValue is a specialized display component used primarily within Select-like inputs to render the selected value(s).
It handles the visual representation of selection, switching between a simple text label (single selection) and a group of chips (multiple selection).

**Key Features:**
1. **Display Modes:**
   - **Single Selection (default):** Renders the label of the first item in the \`value\` array as text.
   - **Multiple Selection (\`multiple\`):** Renders each item in the \`value\` array as a \`Chip\` component.

2. **Data Handling (\`value\`):**
   - Accepts an array of objects: \`[{ label: 'Text', value: 'val', ... }]\`.
   - Even for single selection, it expects an array (uses the first item).
   - If \`value\` is empty, it displays the \`placeholder\`.

3. **Chip Customization (Multiple Mode):**
   - \`chipAttrs\`: Allows passing props to the internal \`Chip\` components (e.g., \`{ outline: true, icon: 'check' }\`).
   - Handles chip removal events automatically if not disabled/readonly.

**When to use:**
- Inside the trigger area of a **Select**, **Combobox**, or **Autocomplete** component.
- To display a list of selected tags or tokens.

**Usage Examples:**

- **Multiple Values (Chips):**
  \`<SelectValue multiple :value="[{ label: 'Apple' }, { label: 'Banana' }]" />\`
    `}},ae={name:"Skeleton",description:{en:"Skeleton component for displaying loading placeholders",ru:"Компонент для отображения заглушки загрузки. Создает анимированные плейсхолдеры для контента во время загрузки данных"},possibilities:{en:["animated loading placeholders for content","control visibility with `active` property","child elements react to the skeleton state via `isSkeleton` property or special classes","customizable appearance and animation"],ru:["анимированные заглушки загрузки для контента","управление видимостью через свойство `active`","дочерние элементы реагируют на состояние скелетона через свойство `isSkeleton` или специальные классы","настраиваемый внешний вид и анимация"]},render:`
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
<StorybookDescriptions componentName={'Skeleton'} type={'classes'}/>
<Canvas of={Component.SkeletonBasic}/>
    `,expose:`
<StorybookDescriptions componentName={'Skeleton'} type={'expose.isActive'}/>
    `},ai:{description:`
Skeleton is a structural component used to display a loading state (placeholder) for content.
It creates an animated "ghost" version of the UI to improve perceived performance and prevent layout shifts (CLS).

**Key Features:**
1. **Activation (\`active\`):**
   - The \`active\` prop controls the visibility of the skeleton effect.
   - When \`true\`, the component applies loading styles and accessibility attributes.

2. **Context & Inheritance:**
   - Uses Vue's \`provide\`/\`inject\` mechanism.
   - Child components (like \`Image\`, \`Field\`, \`Chip\`) automatically detect if they are inside an active \`Skeleton\` and switch to their own skeleton view without needing individual props.

3. **Styling Classes (Slot Props):**
   - The component exposes CSS classes via the default slot to style raw HTML elements.
   - **Text:** \`classText\` (lines), \`classTextVariant\` (headings).
   - **Background:** \`classBackground\` (blocks, images), \`classBackgroundVariant\`.
   - **Border:** \`classBorder\` (outlines).

4. **Accessibility:**
   - Automatically applies \`aria-busy="true"\` and \`aria-live="polite"\` to the wrapper.

**Usage Examples:**

- **Wrapping Smart Components:**
  \`<Skeleton :active="isLoading">
     <div class="profile">
       <Image :value="user.avatar" /> <!-- Auto-skeleton -->
       <Field :value="user.name" readonly /> <!-- Auto-skeleton -->
     </div>
   </Skeleton>\`

- **Manual Structure (using slot classes):**
  \`<Skeleton :active="isLoading" v-slot="{ classes }">
     <div :class="classes.classBackground" style="height: 200px"></div>
     <h3 :class="classes.classTextVariant"></h3>
     <p :class="classes.classText"></p>
   </Skeleton>\`
    `}},re={name:"TabItem",description:{en:"A versatile component for creating tabs, navigation links, or list items. Supports icons, badges, labels, and various interactive states.",ru:"Универсальный компонент для создания вкладок, навигационных ссылок или элементов списка. Поддерживает иконки, бейджи, метки и различные интерактивные состояния."},possibilities:{en:["displaying a label (`label`)","leading and trailing icons (`icon`, `iconTrailing`)","integrated badge support (`badge`)","selection state (`selected`)","disabled state (`disabled`)","navigation support (`href`, `to`)","customizable root tag (`tag`)","ripple effect on click","skeleton loading state"],ru:["отображение метки (`label`)","иконки слева и справа (`icon`, `iconTrailing`)","встроенная поддержка бейджа (`badge`)","состояние выбора (`selected`)","отключенное состояние (`disabled`)","поддержка навигации (`href`, `to`)","настраиваемый корневой тег (`tag`)","эффект ряби при клике","состояние загрузки (скелетон)"]},render:`
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </div>
  `,stories:[{id:"TabItemBasic",name:{en:"Basic Usage",ru:"Базовое использование"},template:`
        <div class="wiki-storybook-flex-column">
            <DesignComponent label="Tab Item" />
            <DesignComponent label="Tab Item" icon="home" />
            <DesignComponent label="Messages" badge="5" />
            <DesignComponent label="Updates" badge-dot />
            <DesignComponent label="Selected Tab" selected />
            <DesignComponent label="Disabled Tab" disabled />
        </div>
      `},{id:"TabItemSkeleton",name:{en:"Skeleton",ru:"Скелетон"},components:["Skeleton"],template:`
        <DesignSkeleton :active="true">
          <DesignComponent isSkeleton>Tab item</DesignComponent>
        </DesignSkeleton>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'TabItem'} type={'tabItem'}/>
<Canvas of={Component.TabItemBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TabItemSkeleton}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'click'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
<StorybookDescriptions componentName={'Expose'} type={'detail'}/>
    `,slots:`
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `},ai:{description:'\nTabItem is a fundamental UI component designed for navigation bars, tab lists, and menus.\nIt encapsulates a label, optional icons, and a badge into a clickable element with built-in state management.\n\n**Key Features:**\n\n1.  **Content Structure:**\n    -   **Label (`label`):** The primary text content.\n    -   **Icons:** Supports a leading icon (`icon`) and a trailing icon (`iconTrailing`).\n    -   **Badge (`badge`):** Integrated badge support for displaying counts or status dots.\n\n2.  **Interactive States:**\n    -   **Selected (`selected`):** Indicates the active or current item.\n    -   **Disabled (`disabled`):** Prevents interaction and applies disabled styling.\n    -   **Ripple:** Provides visual feedback on click (enabled by default).\n\n3.  **Navigation:**\n    -   **Link (`href`):** Renders as an `<a>` tag if provided.\n    -   **Router Link (`to`):** Renders as a router link if provided (requires Vue Router).\n    -   **Custom Tag (`tag`):** Allows rendering as any HTML tag (e.g., `button`, `div`, `li`).\n\n4.  **Accessibility:**\n    -   Automatically sets `role="tab"` (default) or other roles.\n    -   Manages `aria-selected` and `aria-disabled` attributes based on props.\n    -   Supports keyboard navigation via `tabindex`.\n\n**Usage Examples:**\n\n-   **Navigation Tab:**\n    `<TabItem label="Dashboard" icon="dashboard" :selected="currentTab === \'dashboard\'" @click="currentTab = \'dashboard\'" />`\n\n-   **Menu Item with Badge:**\n    `<TabItem label="Notifications" icon="notifications" badge="12" />`\n\n-   **External Link:**\n    `<TabItem label="Documentation" icon="description" href="https://docs.example.com" tag="a" />`\n    '}},le={name:"Tabs",description:{en:"Tabs component for switching between different views with animation",ru:"Компонент вкладок для переключения между различными представлениями с анимацией"},possibilities:{en:["switching between content sections","animated transitions via MotionAxis","navigation via TabsNavigation","customizable tabs list","dynamic content slots"],ru:["переключение между разделами контента","анимированные переходы через MotionAxis","навигация через TabsNavigation","настраиваемый список вкладок","динамические слоты контента"]},import:["import { ref } from 'vue'"],render:`
<DesignComponent v-bind="args">
  <template #home>Welcome to your personal dashboard! Here you can see an overview of your activity.</template>
  <template #profile>Manage your personal information, security settings, and preferences.</template>
  <template #messages>You have 3 unread messages. Connect with your colleagues and friends.</template>
  <template #settings>Adjust your application settings to suit your needs.</template>
  <template #dashboard>View your analytics and performance metrics in real-time.</template>
  <template #notifications>Stay updated with the latest alerts and announcements.</template>
</DesignComponent>
  `,stories:[{id:"TabsBasic",name:{en:"Basic",ru:"Базовый"},template:`
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
      `},{id:"TabsVModel",name:{en:"v-model",ru:"v-model"},setup:`
      return {
        selected: ref('tab1')
      }
      `,template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'tab1'">Tab 1</button>
            <button class="wiki-storybook-button" @click="selected = 'tab2'">Tab 2</button>
            <button class="wiki-storybook-button" @click="selected = 'tab3'">Tab 3</button>
          </div>
          <div>Current value: {{ selected }}</div>

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
Tabs is a high-level compound component that integrates \`TabsNavigation\` (for the tab bar) and \`MotionAxis\` (for the content area) to provide a complete tabbed interface with animated transitions.

**Key Features:**
1. **Structure:**
   - **Navigation:** Automatically renders a \`TabsNavigation\` component based on the \`tabs\` prop.
   - **Content:** Renders the active tab's content inside a \`MotionAxis\` component, enabling smooth transitions (sliding/fading) between views.

2. **Data Binding:**
   - **\`tabs\`:** An array of objects defining the tabs (e.g., \`[{ label: 'Home', value: 'home' }]\`).
   - **\`selected\`:** The value of the currently active tab. Supports two-way binding (\`v-model:selected\`).

3. **Content Slots:**
   - Content for each tab is provided via **named slots**.
   - The slot name must correspond to the \`value\` property of the tab item.
   - **Example:** If you have a tab with \`value: 'settings'\`, you should provide a \`<template #settings>...</template>\` slot.

4. **Customization:**
   - Inherits properties from \`TabsNavigation\` (e.g., styling of the tab bar) and \`MotionAxis\` (e.g., \`axis\`, \`animation\`).

**Usage Example:**
\`<Tabs
  v-model:selected="activeTab"
  :tabs="[
    { label: 'Account', value: 'account' },
    { label: 'Security', value: 'security' }
  ]"
>
  <template #account>
    <AccountSettings />
  </template>
  <template #security>
    <SecuritySettings />
  </template>
</Tabs>\`
    `}},ce={name:"TabsNavigation",description:{en:"Component for managing navigation between tabs. Supports horizontal scrolling, selection management, and focus.",ru:"Компонент для управления навигацией между вкладками. Поддерживает горизонтальную прокрутку, управление выделением и фокусом."},possibilities:{en:["horizontal scrolling of tabs","management of the selected tab via `selected` and `list`","keyboard support (arrows, Enter, Space)","customization of tab appearance via `tag` and `itemAttrs`","event support: `update:selected`, `update:modelSelected`"],ru:["горизонтальная прокрутка вкладок","управление выбранной вкладкой через `selected` и `list`","поддержка клавиатуры (стрелки, Enter, Пробел)","настройка внешнего вида вкладок через `tag` и `itemAttrs`","поддержка событий: `update:selected`, `update:modelSelected`"]},render:`
    <DesignComponent v-bind="args"/>
  `,import:["import { ref } from 'vue'"],stories:[{id:"TabsNavigationBasic",name:{en:"Basic usage",ru:"Базовое использование"},setup:`
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('2')
      return { list, selected }
      `,template:`
        <DesignComponent :list="list" v-model:selected="selected"/>
      `},{id:"TabsNavigationVModel",name:{en:"Two-way binding (v-model)",ru:"Двусторонняя привязка (v-model)"},setup:`
      const list = [
        { label: 'Tab 1', value: '1' },
        { label: 'Tab 2', value: '2' },
        { label: 'Tab 3', value: '3' }
      ]
      const selected = ref('1')
      return { list, selected }
      `,template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-flex wiki-storybook-gap wiki-storybook-item--padding">
              <button class="wiki-storybook-button" @click="selected = '1'">Select Tab 1</button>
              <button class="wiki-storybook-button" @click="selected = '2'">Select Tab 2</button>
              <button class="wiki-storybook-button" @click="selected = '3'">Select Tab 3</button>
            </div>
            <div class="wiki-storybook-item--padding">
              Current value: {{ selected }}
            </div>
            <DesignComponent :list="list" v-model:selected="selected"/>
          </div>
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
TabsNavigation is a component for creating a horizontal navigation menu with tabs.
It manages the list of tabs, the selected item, and scrolling.

**Key Features:**
1. **Data List (\`list\`):**
   - Accepts an array of objects or an object describing the tabs.
   - Each item should contain a label (\`label\`) and a value (\`value\`).
   - You can customize the keys for label and value using \`keyLabel\` and \`keyValue\`.

2. **Selection Management (\`selected\`):**
   - Supports two-way binding (\`v-model:selected\`).
   - Determines which tab is currently active.
   - Can work with single or multiple selections (depending on implementation, usually single for tabs).

3. **Horizontal Scrolling:**
   - Automatically adds scrolling if tabs do not fit in the container.
   - Supports \`horizontalScrollFlush\` and \`horizontalScrollAlign\` to control scroll behavior.

4. **Keyboard Navigation:**
   - **Left/Right Arrows:** Move focus between tabs.
   - **Enter/Space:** Select the focused tab.

5. **Customization:**
   - \`tag\`: Allows changing the tag of the tab item (e.g., 'button', 'a').
   - \`itemAttrs\`: Allows passing additional attributes to each tab.
   - \`divider\`: Adds a separator (if supported by the design).

**Usage Examples:**

- **Basic:**
  \`<TabsNavigation :list="[{label: 'A', value: 'a'}, {label: 'B', value: 'b'}]" v-model:selected="currentTab" />\`

- **With Custom Keys:**
  \`<TabsNavigation :list="items" keyLabel="name" keyValue="id" v-model:selected="currentTab" />\`
    `}},pe={name:"Textarea",description:{en:"A multi-line text input component. Supports auto-sizing, validation, icons, labels, messages, and counters.",ru:"Компонент многострочного ввода текста. Поддерживает авто-размер, валидацию, иконки, метки, сообщения и счетчики."},possibilities:{en:["multi-line text input","auto-sizing based on content (`autosize`)","validation support (`validationMessage`, `required`)","label and helper message support","character counter (`counter`, `maxlength`)","icons support","disabled and readonly states"],ru:["многострочный ввод текста","авто-размер в зависимости от контента (`autosize`)","поддержка валидации (`validationMessage`, `required`)","поддержка метки и вспомогательного сообщения","счетчик символов (`counter`, `maxlength`)","поддержка иконок","состояния отключения и только для чтения"]},render:`
    <DesignComponent v-bind="args" />
  `,stories:[{id:"TextareaBasic",name:{en:"Basic Usage",ru:"Базовое использование"},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent label="Label" placeholder="Placeholder" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Filled</div>
            <DesignComponent
              label="Label"
              value="Modern web development relies heavily on robust form components. The Textarea component offers a flexible solution for multi-line input, adapting to user content with auto-resizing capabilities. It integrates seamlessly with validation systems and provides visual feedback through states and helper text, ensuring a smooth user experience across different devices and screen sizes."
            />
          </div>
        </div>
      `},{id:"TextareaAutosize",name:{en:"Autosize",ru:"Авто-размер"},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Autosize (default)</div>
            <DesignComponent label="Autosize" autosize />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Fixed Rows</div>
            <DesignComponent label="5 Rows" :autosize="false" rows="5" />
          </div>
        </div>
      `}],documentation:{body:`
<StorybookDescriptions componentName={'Textarea'} type={'textarea'}/>
<Canvas of={Component.TextareaBasic}/>

<StorybookDescriptions componentName={'Textarea'} type={'autosize'}/>
<Canvas of={Component.TextareaAutosize}/>
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
Textarea is a component for multi-line text input.
It extends the functionality of the standard \`<textarea>\` element with additional features.

**Key Features:**

1.  **Auto-sizing (\`autosize\`):**
    -   Automatically adjusts the height of the textarea based on the content.
    -   Enabled by default.
    -   Use \`rows\` to set a fixed height if \`autosize\` is disabled.

2.  **Validation:**
    -   Supports \`validationMessage\` to display error messages.
    -   Supports \`required\`, \`minlength\`, \`maxlength\` attributes.
    -   Visual states for error and success.

3.  **Label and Helper:**
    -   \`label\`: Floating or static label for the field.
    -   \`helperMessage\`: Additional text below the field.

4.  **Counter:**
    -   \`counter\`: Displays a character counter.
    -   \`maxlength\`: Limits the number of characters and shows the limit in the counter.

5.  **Icons:**
    -   Supports icons via \`icon\` (leading) and \`iconTrailing\` (trailing) props (inherited from Field).

**Usage Examples:**

-   **Basic:**
    \`<Textarea label="Description" />\`

-   **With Fixed Rows:**
    \`<Textarea label="Comment" :autosize="false" rows="5" />\`

-   **With Validation:**
    \`<Textarea label="Feedback" required validation-message="Please enter feedback" />\`

-   **With Counter:**
    \`<Textarea label="Bio" :maxlength="200" counter />\`
    `}},de={name:"TextareaAutosize",description:{en:"Textarea component that automatically adjusts its height based on content",ru:"Компонент текстового поля, которое автоматически подстраивает свою высоту под содержимое"},possibilities:{en:["automatic height adjustment based on content","clone element for precise height calculation","respects padding and styling from the original textarea","smooth height transitions on content change","supports all standard textarea attributes via inputAttrs","optional autosize toggle for flexibility","reactive value binding with input event emission"],ru:["автоматическая подстройка высоты под содержимое","элемент-клон для точного расчёта высоты","учитывает отступы и стили исходного textarea","плавные переходы высоты при изменении содержимого","поддержка всех стандартных атрибутов textarea через inputAttrs","опциональное отключение autosize для гибкости","реактивная привязка значения с генерацией события input"]},import:[],render:`
      <DesignComponent v-bind="args" :inputAttrs="{style: 'width: 240px; border: 1px solid #90A1B9FF'}" />
    `,stories:[],documentation:{body:`
<StorybookDescriptions componentName={'TextareaAutosize'} type={'textarea-autosize'}/>
    `,events:`
<StorybookDescriptions componentName={'Event'} type={'input-standard'}/>
    `,expose:`
<StorybookDescriptions componentName={'Expose'} type={'value'}/>
    `},ai:{description:'\n**Note:** This is a subcomponent of `Textarea`. You should generally not use it directly.\n          It is automatically integrated into the `Textarea` component to provide auto-resizing capabilities.\n\nTextareaAutosize is a functional component that renders a `<textarea>` element capable of automatically adjusting its height to fit the content.\n\n**Key Features:**\n1. **Auto-Resizing Logic:**\n   - It renders a hidden "clone" element (a `div`) that mirrors the styles (font, padding, border, width) of the actual textarea.\n   - As text is entered, the content is copied to the clone, and the clone\'s height is measured.\n   - The textarea\'s height is then updated to match the clone\'s height, ensuring no scrollbars appear and the field grows/shrinks dynamically.\n\n2. **Input Attributes (`inputAttrs`):**\n   - Standard HTML attributes for the textarea (like `placeholder`, `rows`, `disabled`, `readonly`, `style`) should be passed via the `inputAttrs` prop.\n   - This ensures they are applied directly to the native `<textarea>` element.\n\n3. **Value Management:**\n   - It manages the input value and emits updates, allowing for reactive data binding.\n\n**When to use:**\n- This component is designed to be the internal engine for the `Textarea` component.\n- Use `Textarea` instead for a complete form field with labels, validation, and styling.\n\n**Usage Examples:**\n\n- **Internal Usage:**\n  `<TextareaAutosize :value="modelValue" :inputAttrs="{ rows: 1 }" />`\n    '}},me={name:"Tooltip",description:{en:"Component for displaying a popup hint when hovering over an element",ru:"Компонент для отображения всплывающей подсказки при наведении на элемент"},possibilities:{en:["displaying text or other content in a popup window","automatic positioning relative to the element","support for delay before showing and hiding","customizable indentation and padding","ability to control the open state","support for an arrow pointing to the element"],ru:["отображение текста или другого контента во всплывающем окне","автоматическое позиционирование относительно элемента","поддержка задержки перед показом и скрытием","настраиваемые отступы и поля","возможность управления состоянием открытия","поддержка стрелки, указывающей на элемент"]},import:[],render:`
      <DesignComponent v-bind="args">
        <template #control="{ binds }">
          <span v-bind="binds">
            Hover me
          </span>
        </template>
      </DesignComponent>
    `,stories:[{id:"TooltipAllSlots",name:{en:"All slots demonstration",ru:"Демонстрация всех слотов"},template:`
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
Tooltip is a floating component that displays contextual information when a user interacts with a trigger element (hover or focus).
It is designed to provide auxiliary descriptions, labels, or helper text.

**Key Features:**
1. **Trigger Integration:**
   - Uses the \`#control\` slot to wrap the target element.
   - Provides \`binds\` (events and ARIA attributes) that **must** be applied to the trigger element using \`v-bind="binds"\`.

2. **Content & Layout:**
   - \`label\`: Primary text content.
   - \`description\`: Secondary text content.
   - \`#default\`: Slot for custom HTML content.
   - Includes a built-in \`Arrow\` component pointing to the trigger.

3. **Behavior:**
   - **Positioning:** Automatically calculates position (top, bottom, left, right) to stay within the viewport.
   - **Timing:** Configurable \`delay\` (open) and \`delayHide\` (close).
   - **Interaction:** Supports \`interactive\` mode (allows hovering the tooltip content) and \`disabled\` state.

**Usage Examples:**

- **Basic Label:**
  \`<Tooltip label="Save changes">
     <template #control="{ binds }">
       <button v-bind="binds">Save</button>
     </template>
   </Tooltip>\`

- **With Description:**
  \`<Tooltip label="User Profile" description="Click to edit settings">
     <template #control="{ binds }">
       <Avatar v-bind="binds" />
     </template>
   </Tooltip>\`
    `}},ue={name:"Window",description:{en:"Flexible modal and popup window component with advanced positioning and animation capabilities",ru:"Гибкий компонент модального и всплывающего окна с расширенными возможностями позиционирования и анимации"},possibilities:{en:["modal and contextual window display modes","intelligent positioning system with automatic collision detection","smooth opening and closing animations with customizable transitions","static mode for embedded window components","persistent window state management","automatic scroll handling and content overflow management","keyboard navigation and accessibility support","event-driven architecture with comprehensive lifecycle hooks","integration with scrollbar and image components","responsive design with mobile and desktop optimization"],ru:["режимы отображения модальных и контекстных окон","интеллектуальная система позиционирования с автоматическим определением коллизий","плавные анимации открытия и закрытия с настраиваемыми переходами","статический режим для встроенных компонентов окон","управление постоянным состоянием окна","автоматическая обработка прокрутки и управление переполнением контента","навигация с клавиатуры и поддержка доступности","событийно-ориентированная архитектура с комплексными хуками жизненного цикла","интеграция с компонентами скроллбара и изображений","адаптивный дизайн с оптимизацией для мобильных устройств и десктопа"]},import:["import { ref } from 'vue'"],render:`
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
    `,description:'\n**Note:** This is a low-level component. Use it only if specialized components like `Modal`, `Dialog`, or `Menu` do not fit your requirements.\n\nWindow is a versatile container component used for Modals, Popups, Dropdowns, and Cards.\nIt automatically handles z-index, focus management, teleportation, and scroll locking.\n\n**Note:** The `embedded` prop is used only for documentation examples to render the component inline. Do not use it in production code.\n\n**When to use:**\n1. **Modal/Dialog:** When a centered box overlays the page content. Use default props.\n2. **Dropdown/Popover:** When a box appears next to a button/trigger. Use `axis="y"` (vertical) or `axis="x"` (horizontal).\n3. **Select Menu:** When a list overlays the trigger exactly. Use `axis="on"`.\n4. **Card/Panel:** When you need the visual style of a window but embedded in the page flow. Use `staticMode`.\n\n**Key Features:**\n- **Structure:**\n  - `#control`: The trigger element (button, link). Bind `binds` to this element to enable automatic toggling.\n  - `#title`: The header area of the window.\n  - `#default`: The main content area (automatically wrapped in a Scrollbar).\n  - `#footer`: The bottom area for action buttons.\n\n- **Positioning (`axis`):**\n  - `undefined` (default): Centered modal.\n  - `y`: Opens vertically relative to the trigger (like a standard dropdown).\n  - `x`: Opens horizontally relative to the trigger (like a nested menu).\n  - `on`: Overlays the trigger element.\n\n- **Behavior:**\n  - `staticMode`: Disables teleportation and absolute positioning, rendering it as a regular block.\n  - `persistent`: Prevents closing when clicking outside or pressing Escape.\n  - `closeButton`: Automatically adds a close button in the top-right corner.\n\n**Example:**\n`<Window axis="y">` creates a dropdown menu.\n`<Window :open="true">` creates a modal dialog.\n    '}},rt=[k,f,w,D,S,C,x,I,T,A,N,M,_,B,L,P,F,E,z,V,W,O,U,j,H,q,R,G,K,Y,X,J,$,Z,Q,ee,te,oe,ie,ne,se,ae,re,le,ce,pe,de,me,ue];var e=(s=>(s.text="text",s.string="string",s.number="number",s.boolean="boolean",s.select="select",s.array="array",s.object="object",s))(e||{}),t=(s=>(s.actions="Actions",s.adaptive="Adaptive",s.aria="ARIA",s.arrow="Arrow",s.attributes="Attributes",s.bars="Bars",s.counter="Counter",s.form="Form",s.hook="Hook",s.icon="Icon",s.information="Information",s.mask="Mask",s.option="Options",s.status="Status",s.style="Styles",s.technical="Technical",s.text="Text",s.value="Values",s))(t||{});class be{constructor(o,i){this.name=o,this.item=i}isDemo(){return this.item.isDemo===!0}getName(){return this.name}getValue(){return this.item.options.value}getOrder(){if(this.item.options.order)return this.item.options.order;switch(this.item.options.category){case t.status:return 3e3;case t.value:return 5e3;case t.information:return 5100;case t.actions:return 5200;case t.icon:return 5200;case t.bars:return 5200;case t.counter:return 5200;case t.mask:return 5200;case t.form:return 6e3;case t.arrow:return 6900;case t.hook:return 7e3;case t.style:return 9e3;case t.option:return 9100;case t.attributes:return 9700;case t.text:return 9800;case t.aria:return 9900;default:return 9999}}to(){switch(this.item.type){case e.text:case e.string:return this.toString();case e.number:return this.toNumber();case e.boolean:return this.toBoolean();case e.select:return this.toSelect();case e.object:case e.array:return this.toObject()}}getDemo(){return this.isDemo()?{isDemo:!0,demo:this.getDemoValue(),demoOptions:this.item.demoOptions}:{}}getDemoValue(){if(this.item.demo)return this.item.demo;if(this.item.type===e.boolean)return!0}getCategory(){const o=this.item.options.category;return o?{category:o}:{}}getDefaultValue(){const o=this.item.options.type,i=this.item.options.defaultValue;let n;return i!==void 0?typeof i==="boolean"?n=i?"true":"false":n=String(i):o==="boolean"&&(n="false"),n?{defaultValue:{summary:n}}:{}}getDescription(){const o=p.getLanguage(),i=this.item.options.description;let n;return typeof i=="string"?n=i:c(i)&&o in i&&(n=i[o]),n?{description:n}:{}}getType(){const o=this.item.options.type,i=this.item.options.options;let n;if(i)u(i)?n=i.join(" | "):c(i)&&(n=Object.keys(i).join(" | "));else if(o)u(o)?n=o.join(" | "):n=o;else switch(this.item.type){case e.select:n=String(e.object);break;case e.text:n=String(e.string);break;default:n=String(this.item.type)}return n?{type:{summary:n}}:{}}toBoolean(){return{control:e.boolean,table:{...this.getCategory(),...this.getDefaultValue(),...this.getType()},...this.getDescription(),...this.getDemo()}}toNumber(){const o=this.item.options,i={type:e.number},n={...this.getCategory(),...this.getDefaultValue(),...this.getType()};return"min"in o&&(i.min=o.min),"max"in o&&(i.min=o.max),{control:i,table:n,...this.getDescription(),...this.getDemo()}}toObject(){return{control:e.object,table:{...this.getCategory(),...this.getType()},...this.getDescription(),...this.getDemo()}}toSelect(){return{control:e.select,options:this.item.options.options,table:{...this.getCategory(),...this.getDefaultValue(),...this.getType()},...this.getDescription(),...this.getDemo()}}toString(){return{control:e.text,table:{...this.getCategory(),...this.getDefaultValue(),...this.getType()},...this.getDescription(),...this.getDemo()}}}class ge{constructor(o,i){this.name=o,this.item=i}isDemo(){return this.item.isDemo===!0}get(){return this.item}getName(){return y(this.name)}getDefaultValue(){return this.item?.table?.defaultValue?.summary}getType(){return this.item?.table?.type?.summary?this.item.table.type.summary:h(this.item.control)?this.item.control:this.item.control?.type??e.string}getDescription(){return this.item.description??""}getOptions(){return this.item.options}getDemo(){return this.item.demo}getDemoOptions(){return this.item.demoOptions??{}}}class lt{constructor(o,i,n,a={},r={},g=[]){this.component=o,this.props=i,this.defaults=n,this.wikiDesign=a,this.wikiBasic=r,this.wikiDescriptions=g,this.list=this.initList()}list;getName(){return this.component}getWiki(){return this.initPropsWiki()}getWikiObject(){return b(this.getWiki(),(o,i)=>{if(o)return new ge(i,o)})}getDescription(){return this.toDescriptionText(this.getDescriptionItem()?.description)}getPossibilities(){return this.toPossibilitiesText(this.getDescriptionItem()?.possibilities)}getValues(){const o={};return this.list.forEach(i=>{o[i.getName()]=i.getValue()}),o}getFilteredValues(){const o={};return b(this.getValues(),(i,n)=>{i!==void 0&&(o[n]=i)}),o}getStoryItem(o){const i=this.getDescriptionItem();if(i&&i.stories)return i.stories.find(n=>n.id===o)}getStoryName(o){return this.toDescriptionText(this.getStoryItem(o)?.name)}getAiRender(){return this.getDescriptionItem()?.ai?.render}getAiDescription(){return this.getDescriptionItem()?.ai?.description}getWikiItem(o){if(o in this.wikiBasic||o in this.wikiDesign)return{...this.wikiBasic?.[o]??{},...this.wikiDesign?.[o]??{}}}getDescriptionItem(){return this.wikiDescriptions.find(o=>o.name===this.component)}toWikiItemChanged(o,i){return{...i,options:{...i.options,type:i.options?.type??o.type,defaultValue:this.defaults[o.name],options:o.option??i.options?.options??void 0}}}toDescriptionText(o){if(o){const i=p.getLanguage();return c(o)?String(o?.[i]??Object.values(o)?.[0]):o}return""}toPossibilitiesText(o){if(o){const i=p.getLanguage();return c(o)?o?.[i]??Object.values(o)?.[0]??[]:o}return[]}initList(){const o=[];return this.props.forEach(i=>{const n=`${v(this.component)}.${i.name}`,a=this.getWikiItem(n)??this.getWikiItem(i.name);a?o.push(new be(i.name,this.toWikiItemChanged(i,a))):console.error(`[WikiStorybook] ${i.name} not found`)}),o.sort((i,n)=>{const a=i.getOrder(),r=n.getOrder();return a===r?i.getName()>n.getName()?1:-1:a>r?1:-1}),o}initPropsWiki(){const o={};return this.list.forEach(i=>{o[i.getName()]=i.to()}),o}}const ye={ariaDescribedby:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Identifies the element(s) that describe the object",ru:"Определяет элемент(ы), которые описывают объект"}}},ariaHaspopup:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Indicates the availability and type of interactive popup element",ru:"Указывает на наличие и тип интерактивного всплывающего элемента"}}},ariaLabel:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Defines a label for the element for screen readers",ru:"Определяет метку для элемента для программ чтения с экрана"}}},ariaLabelledby:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Identifies the element(s) that label the current element",ru:"Определяет элемент(ы), которые обозначают текущий элемент"}}},ariaLive:{type:e.select,options:{category:t.aria,type:"string",options:["off","polite","assertive"],description:{en:"Indicates that an element will be updated, and describes the types of updates",ru:"Указывает, что элемент будет обновляться, и описывает типы обновлений"}}},ariaMultiselectable:{type:e.boolean,options:{category:t.technical,description:{en:"Indicates that the user may select more than one item",ru:"Указывает, что пользователь может выбрать более одного элемента"}}},polite:{type:e.boolean,options:{category:t.aria,type:"boolean",description:{en:'Sets aria-live to "polite" for non-intrusive screen reader announcements',ru:'Устанавливает aria-live в "polite" для ненавязчивых объявлений программы чтения с экрана'}}},role:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Defines the role of the element for accessibility",ru:"Определяет роль элемента для доступности"}}},roleItem:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Defines the role of the item element for accessibility",ru:"Определяет роль элемента item для доступности"}}},roleList:{type:e.text,options:{category:t.aria,type:"string",description:{en:"Defines the role of the list element for accessibility",ru:"Определяет роль элемента list для доступности"}}},tabindex:{type:e.number,options:{category:t.aria,type:"number",description:{en:"Tab order position for keyboard navigation",ru:"Позиция порядка табуляции для навигации с клавиатуры"}}}},he={buttonAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for button elements",ru:"Дополнительные атрибуты для элементов кнопок"}}},buttonSecondaryAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for secondary button elements",ru:"Дополнительные атрибуты для элементов вторичных кнопок"}}},cellAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Cell component",ru:"Дополнительные атрибуты для компонента Cell"}}},chipAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Chip component",ru:"Дополнительные атрибуты для компонента Chip"}}},fieldAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Field component",ru:"Дополнительные атрибуты для компонента Field"}}},fieldLabelAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the FieldLabel element",ru:"Дополнительные атрибуты для элемента FieldLabel"}}},fieldMessageAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the FieldMessage element",ru:"Дополнительные атрибуты для элемента FieldMessage"}}},horizontalScrollAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the HorizontalScroll component",ru:"Дополнительные атрибуты для компонента HorizontalScroll"}}},inputAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the native input element",ru:"Дополнительные атрибуты для нативного элемента input"}}},menuAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Menu root container",ru:"Дополнительные атрибуты для корневого контейнера Menu"}}},motionAxisAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the MotionAxis component",ru:"Дополнительные атрибуты для компонента MotionAxis"}}},motionTransformAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the MotionTransform component",ru:"Дополнительные атрибуты для компонента MotionTransform"}}},scrollbarAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Sets attributes for the internal scrollbar",ru:"Задает атрибуты встроенного скроллбара"}}},tabItemAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the TabItem component",ru:"Дополнительные атрибуты для компонента TabItem"}}},tabsNavigationAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the TabsNavigation component",ru:"Дополнительные атрибуты для компонента TabsNavigation"}}},textareaAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the native textarea element",ru:"Дополнительные атрибуты для нативного элемента textarea"}}},tooltipAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Tooltip component",ru:"Дополнительные атрибуты для компонента Tooltip"}}},windowAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Window root container",ru:"Дополнительные атрибуты для корневого контейнера Window"}}}},ve={arrow:{type:e.select,options:{category:t.form,type:"string",options:["auto","carousel","stepper","none"],description:{en:"Arrow controls type for numeric input (auto, carousel, stepper, none)",ru:"Тип стрелочных элементов управления для числового ввода (auto, carousel, stepper, none)"}},isDemo:!0},arrowAlign:{type:e.select,options:{category:t.form,type:"string",options:["center","right","left"],description:{en:"Sets alignment position of arrow buttons within the field",ru:"Задает позицию выравнивания кнопок-стрелок внутри поля"}},isDemo:!0,demoOptions:{arrow:"carousel",arrowCarousel:!0}},arrowStep:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:'Step size for input arrows (type="number" only) when using increment/decrement buttons',ru:'Размер шага для стрелок ввода (только для type="number") при использовании кнопок увеличения/уменьшения'}}},autocapitalize:{type:e.string,options:{category:t.form,type:"string",description:{en:"Auto capitalization mode for text input (off, none, sentences, words, characters)",ru:"Режим автоматической капитализации для текстового ввода (off, none, sentences, words, characters)"}}},autocomplete:{type:e.string,options:{category:t.form,type:"string",description:{en:"Autocomplete hint for browser autofill feature (e.g., email, name, tel)",ru:"Подсказка автозаполнения для функции автозаполнения браузера (например, email, name, tel)"}}},autocorrect:{type:e.string,options:{category:t.form,type:"string",description:{en:"Autocorrect mode for iOS/Safari (on or off)",ru:"Режим автокоррекции для iOS/Safari (on или off)"}}},autofocus:{type:e.boolean,options:{category:t.form,description:{en:"Automatically focuses the element when the page loads",ru:"Автоматически устанавливает фокус на элемент при загрузке страницы"}}},cols:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Specifies the visible width of the text area",ru:"Указывает видимую ширину текстовой области"}}},enterKeyHint:{type:e.select,options:{category:t.form,type:"string",options:["enter","done","go","next","previous","search","send"],description:{en:"Hint for the enter key label on virtual keyboards",ru:"Подсказка для метки клавиши Enter на виртуальных клавиатурах"}}},fieldSizing:{type:e.select,options:{category:t.style,type:"string",options:["content","fixed"],description:{en:"CSS property that enables automatic sizing of the element based on its content",ru:"CSS свойство, которое включает автоматическое изменение размера элемента в зависимости от его содержимого"}}},for:{type:e.string,options:{category:t.form,type:"string",description:{en:"ID of the element the label is bound to",ru:"ID элемента, к которому привязана метка"}}},form:{type:e.string,options:{category:t.form,type:"string",description:{en:"ID of the form element this input belongs to",ru:"ID элемента формы, к которой относится данный инпут"}}},inputMode:{type:e.select,options:{category:t.form,type:"string",options:["none","text","decimal","numeric","tel","search","email","url"],description:{en:"Hint for the type of virtual keyboard to display",ru:"Подсказка для типа виртуальной клавиатуры"}}},match:{type:e.string,options:{category:t.form,type:"string",description:{en:"Reference to another field for value matching validation (e.g., password confirmation)",ru:"Ссылка на другое поле для валидации совпадения значений (например, подтверждение пароля)"}}},max:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Maximum value",ru:"Максимальное значение"}}},maxlength:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Maximum allowed characters",ru:"Максимально допустимое количество символов"},value:100}},min:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Minimum value",ru:"Минимальное значение"}}},minlength:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Minimum required characters",ru:"Минимально необходимое количество символов"}}},multiple:{type:e.boolean,options:{category:t.form,description:{en:"Enables multiple selection mode",ru:"Включает режим множественного выбора"}},isDemo:!0},name:{type:e.string,options:{category:t.form,type:"string",description:{en:"Name attribute for the input field",ru:"Атрибут name для поля ввода"},value:"name"}},pattern:{type:e.string,options:{category:t.form,type:"string",description:{en:"Regular expression pattern for input validation",ru:"Регулярное выражение для валидации ввода"}}},required:{type:e.boolean,options:{category:t.form,description:{en:"Marks the field as required and shows the required indicator",ru:"Помечает поле как обязательное и показывает индикатор обязательности"}},isDemo:!0},rows:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Specifies the visible height of the text area",ru:"Указывает видимую высоту текстовой области"}}},spellcheck:{type:e.boolean,options:{category:t.form,description:{en:"Enables or disables spell checking for the input",ru:"Включает или отключает проверку орфографии для ввода"}}},step:{type:e.number,options:{category:t.form,type:["number","string"],description:{en:"Step size for numeric inputs",ru:"Размер шага для числовых инпутов"}}},validationCode:{type:e.object,options:{category:t.form,type:["string","object"],description:{en:"Custom validation error messages or validity state map",ru:"Пользовательские сообщения об ошибках валидации или карта состояний валидности"}}}},ke={active:{type:e.boolean,options:{category:t.status,description:{en:"Sets the element to an active state",ru:"Переводит элемент в активное состояние"}}},cancelShow:{type:e.boolean,options:{category:t.status,description:{en:"Used only when cancel=auto: allows showing cancel (обычно при наличии значения). Ignored for always.",ru:"Работает только при cancel=auto: разрешает показ (обычно при значении). Игнорируется для always."}}},disabled:{type:e.boolean,options:{category:t.status,description:{en:"Sets the element to an inactive state",ru:"Переводит элемент в неактивное состояние"}},isDemo:!0},error:{type:e.boolean,options:{category:t.status,description:{en:"Sets the element to an error state",ru:"Переводит элемент в состояние ошибки"}},isDemo:!0},focus:{type:e.boolean,options:{category:t.status,description:{en:"Visual focus state",ru:"Визуальное состояние фокуса"}},isDemo:!0},forceShow:{type:e.boolean,options:{category:t.status,description:{en:"Forces the display of the element regardless of other conditions",ru:"Принудительно отображает элемент независимо от других условий"}}},hide:{type:e.boolean,options:{category:t.status,description:{en:"Hides the element",ru:"Скрывает элемент"}}},isValue:{type:e.boolean,options:{category:t.status,description:{en:"Indicates that the control has a value and adjusts visuals (e.g., floating label)",ru:"Указывает, что у элемента есть значение, и корректирует визуальное состояние (например, плавающая метка)"}}},loading:{type:e.boolean,options:{category:t.status,description:{en:"Sets the element to a loading state",ru:"Переводит элемент в состояние загрузки"}},isDemo:!0},open:{type:e.boolean,options:{category:t.status,description:{en:"Sets the element to an open state",ru:"Переводит элемент в открытое состояние"}},isDemo:!0},readonly:{type:e.boolean,options:{category:t.status,description:{en:"Read-only state of the element",ru:"Состояние только для чтения элемента"}}},selected:{type:e.boolean,options:{category:t.status,description:{en:"Selected state of the element",ru:"Состояние выбора элемента"}},isDemo:!0},success:{type:e.boolean,options:{category:t.status,description:{en:"Sets the element to a success state",ru:"Переводит элемент в состояние успеха"}},isDemo:!0},turn:{type:e.boolean,options:{category:t.status,description:{en:"Rotates the element by 180 degrees",ru:"Поворачивает элемент на 180 градусов"}},isDemo:!0},visible:{type:e.boolean,options:{category:t.status,description:{en:"Controls the visibility of the component",ru:"Управляет видимостью компонента"}}}},fe={buttonClose:{type:e.object,options:{category:t.information,type:["string","ConstrBind<ButtonPropsBasic>","null"],description:{en:"Close button configuration (string for label or full button props object, null to hide)",ru:"Конфигурация кнопки закрытия (строка для метки или объект свойств кнопки, null для скрытия)"}}},buttonOk:{type:e.object,options:{category:t.information,type:["string","ConstrBind<ButtonPropsBasic>","null"],description:{en:"OK button configuration (string for label or full button props object, null to hide)",ru:"Конфигурация кнопки OK (строка для метки или объект свойств кнопки, null для скрытия)"}}},caption:{type:e.string,options:{category:t.information,type:"string",description:{en:"Caption text for additional information",ru:"Текст подписи для дополнительной информации"}},isDemo:!0,demo:"Caption text"},description:{type:e.string,options:{category:t.information,type:"string",description:{en:"Description text providing additional context",ru:"Текст описания, предоставляющий дополнительный контекст"},value:"Here is a detailed description of the component"}},forceShowMessage:{type:e.boolean,options:{category:t.information,description:{en:"Forces display of a helper / validation message ignoring usual visibility rules",ru:"Принудительно показывает сообщение (helper / validation), игнорируя обычные условия видимости"}}},headline:{type:e.string,options:{category:t.information,type:"string",description:{en:"Headline text",ru:"Текст заголовка"}}},helperMessage:{type:e.string,options:{category:t.information,type:"string",description:{en:"Helper text providing guidance or additional information",ru:"Вспомогательный текст, предоставляющий руководство или дополнительную информацию"},value:"This is a helpful message"}},image:{type:e.string,options:{category:t.information,type:"string | File | ImageProps",description:{en:"Specifies the image value for the component",ru:"Указывает значение изображения для компонента"}},isDemo:!0,demo:"https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924"},label:{type:e.string,options:{category:t.information,type:"string",description:{en:"Text label for the component",ru:"Текстовая метка для компонента"},value:"Label"}},placeholder:{type:e.string,options:{category:t.information,type:"string",description:{en:"Placeholder text shown when the input is empty",ru:"Текст подсказки, отображаемый при пустом вводе"}},isDemo:!0,demo:"Placeholder text"},prefix:{type:e.string,options:{category:t.information,type:"string",description:{en:"Prefix text displayed before the main content",ru:"Текст префикса, отображаемый перед основным содержимым"}},isDemo:!0,demo:"Prefix text"},suffix:{type:e.string,options:{category:t.information,type:"string",description:{en:"Suffix text displayed after the main content",ru:"Текст суффикса, отображаемый после основного содержимого"}},isDemo:!0,demo:"Suffix text",demoOptions:{value:"Value"}},validationMessage:{type:e.string,options:{category:t.information,type:"string",description:{en:"Error or validation message text",ru:"Текст сообщения об ошибке или валидации"}},isDemo:!0,demo:"Validation message"}},m={"tabsNavigation.itemAttrs":{type:e.object,options:{category:t.attributes,description:{en:"Attributes for each tab item",ru:"Атрибуты для каждого элемента вкладки"}}},"tabsNavigation.list":{type:e.object,options:{category:t.value,description:{en:"List of data for generating tabs",ru:"Список данных для генерации вкладок"},value:[{label:"Home",value:"home"},{label:"Profile",value:"profile"},{label:"Messages",value:"messages"},{label:"Settings",value:"settings"},{label:"Dashboard",value:"dashboard"},{label:"Notifications",value:"notifications"}]}},"tabsNavigation.selected":{type:e.text,options:{category:t.status,type:"string | number",description:{en:"Selected value",ru:"Выбранное значение"},value:"home"}}},we={badge:{type:e.string,options:{category:t.value,type:"string",description:{en:"Badge text or value to display",ru:"Текст или значение значка для отображения"}},isDemo:!0,demo:"123"},badgeDot:{type:e.boolean,options:{category:t.value,description:{en:"Display badge as a dot indicator",ru:"Отображать значок как точечный индикатор"}},isDemo:!0},currency:{type:e.string,options:{category:t.value,type:"string",description:{en:"Currency code for formatting monetary values",ru:"Код валюты для форматирования денежных значений"}},isDemo:!0,demo:"USD",demoOptions:{type:"currency"}},detail:{type:e.object,options:{category:t.value,type:"Record<string, any>",description:{en:"Additional data is passed by the component when events are triggered",ru:"Дополнительные данные, передаваемые компонентом при срабатывании событий"}}},fraction:{type:e.string,options:{category:t.value,type:["string","number","boolean"],description:{en:"Fraction configuration for numeric masks (digits count or special mode)",ru:"Настройка дробной части для числовых масок (количество знаков или режим)"}}},highlight:{type:e.string,options:{category:t.value,type:"string",description:{en:"Text to highlight within the component content",ru:"Текст для выделения в содержимом компоненте"}},isDemo:!0,demo:"abe"},highlightLengthStart:{type:e.number,options:{category:t.value,type:"number",description:{en:"Minimum length of highlight value to start highlighting",ru:"Минимальная длина значения highlight для начала выделения"}}},href:{type:e.string,options:{category:t.value,type:"string",description:{en:"URL or link destination",ru:"URL или адрес ссылки"}}},indeterminate:{type:e.boolean,options:{category:t.value,description:{en:"Sets the indeterminate state",ru:"Устанавливает неопределенное состояние"}},isDemo:!0,demoOptions:{value:!0}},tabs:{type:e.object,options:{category:t.value,description:{en:"Tabs list or TabsNavigation properties",ru:"Список вкладок или свойства TabsNavigation"},value:m?.["tabsNavigation.list"]?.options?.value}},to:{type:e.string,options:{category:t.value,type:"RouteLocationRaw",description:{en:"Navigation target or destination for the component",ru:"Цель навигации или назначение для компонента"}}},value:{type:e.string,options:{category:t.value,type:["number","string"],description:{en:"Current value",ru:"Текущее значение"}}},valueDefault:{type:e.string,options:{category:t.value,type:["string","number"],description:{en:"Default value for the input field",ru:"Значение по умолчанию для поля ввода"}}},valueVariant:{type:e.string,options:{category:t.value,type:"string",description:{en:"Variant of the value",ru:"Вариант значения"}}},valueVariantHide:{type:e.string,options:{category:t.value,description:{en:"Hides the value variant",ru:"Скрывает вариант значения"}}}},De={adaptive:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Controls adaptive display behavior for different screen sizes and media queries",ru:"Управляет адаптивным поведением отображения для разных размеров экрана и медиа‑запросов"}}},align:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"General alignment depending on component semantics",ru:"Общее выравнивание в зависимости от семантики компонента"}},isDemo:!0},asPalette:{type:e.boolean,options:{category:t.style,description:{en:"Sets color based on palette class; otherwise uses default color",ru:"Задает цвет на основе класса палитры; иначе используется стандартный цвет"}}},barsAdaptive:{type:e.select,options:{category:t.style,description:{en:"Indicates whether the bars (header toolbar) should be shown",ru:"Показывает, нужно ли отображать бар (верхнюю панель)"}}},block:{type:e.boolean,options:{category:t.style,description:{en:"Enables block mode (component expands to full width)",ru:"Включает блочный режим (компонент растягивается на всю ширину)"}}},closeButton:{type:e.boolean,options:{category:t.style,description:{en:"Shows a close button in the header",ru:"Показывает кнопку закрытия в заголовке"}},isDemo:!0},container:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Controls container‑based layout behavior with adaptive width constraints",ru:"Управляет контейнерной раскладкой с адаптивными ограничениями ширины"}}},dense:{type:e.boolean,options:{category:t.style,description:{en:"Enables compact display variant",ru:"Включает компактный вариант отображения"}},isDemo:!0},divider:{type:e.boolean,options:{category:t.style,description:{en:"Enables visual divider between elements",ru:"Включает визуальный разделитель между элементами"}}},dividerLabel:{type:e.select,options:{category:t.style,type:"string",description:{en:"Adds divider only under the label",ru:"Добавляет разделитель только под меткой"}}},dot:{type:e.boolean,options:{category:t.style,description:{en:"Displays the component as a dot indicator",ru:"Отображает компонент как точечный индикатор"}},isDemo:!0},fill:{type:e.string,options:{category:t.style,type:"string",description:{en:"Sets fill color for the component",ru:"Задает цвет заливки компонента"}},isDemo:!0,demo:"oklch(53.2% 0.157 131.589)"},flexible:{type:e.select,options:{category:t.style,description:{en:"Enables flexible layout behavior that automatically adapts to available space",ru:"Включает гибкое поведение раскладки, автоматически адаптирующееся к доступному пространству"}}},height:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Sets component height",ru:"Задает высоту компонента"}}},horizontalScrollAlign:{type:e.select,options:{category:t.style,type:"string",options:["block","center","left","right"],description:{en:"Sets the alignment of elements within the horizontal scroll container",ru:"Задает выравнивание элементов внутри контейнера горизонтальной прокрутки"}}},imagePosition:{type:e.select,options:{category:t.style,description:{en:"Defines image placement within the window layout",ru:"Определяет расположение изображения внутри макета окна"},options:["left","top"]},isDemo:!0,demoOptions:{image:"https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924"}},inverse:{type:e.boolean,options:{category:t.style,description:{en:"Inverts component colors",ru:"Инвертирует цвета компонента"}}},isSkeleton:{type:e.boolean,options:{category:t.style,description:{en:"Displays the component in skeleton mode",ru:"Отображает компонент в режиме скелетона"}}},maxWidth:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Sets the maximum width of the component",ru:"Задает максимальную ширину компонента"}},isDemo:!0},overlay:{type:e.boolean,options:{category:t.style,description:{en:"Adds background overlay to the component",ru:"Добавляет фоновую подложку к компоненту"}},isDemo:!0},padding:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Sets internal spacing around the content. If `paddingByIndent` is enabled, the `padding` value is ignored.",ru:"Задает внутренние отступы вокруг содержимого. Если включен `paddingByIndent`, значение `padding` игнорируется."}},isDemo:!0,demoOptions:{paddingByIndent:!1}},paddingByIndent:{type:e.boolean,options:{category:t.style,description:{en:"Applies horizontal padding based on grid indent values",ru:"Применяет горизонтальные отступы на основе значений отступов сетки"}}},palette:{type:e.select,options:{category:t.style,options:[],type:"string",description:{en:"Sets a color palette for the element",ru:"Задает цветовую палитру для элемента"}}},position:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Sets the positioning method for the element",ru:"Задает метод позиционирования элемента"}},isDemo:!0},rounded:{type:e.select,options:{category:t.style,options:[],type:"string",description:{en:"Adds rounded corners to the component",ru:"Добавляет скругленные углы компоненту"}}},roundedFull:{type:e.boolean,options:{category:t.style,description:{en:"Makes the component fully rounded (circular)",ru:"Делает компонент полностью скругленным (круглым)"}},isDemo:!0},size:{type:e.select,options:{category:t.style,options:[],type:"string",description:{en:"Sets component size",ru:"Задает размер компонента"}},isDemo:!0},textAlign:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Sets text alignment within the element",ru:"Задает выравнивание текста внутри элемента"}}},width:{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Sets component width",ru:"Задает ширину компонента"}},isDemo:!0},wrap:{type:e.boolean,options:{category:t.style,type:"boolean",description:{en:"Controls text wrapping behavior",ru:"Управляет поведением переноса текста"}},isDemo:!0}},Se={autoClose:{type:e.boolean,options:{category:t.option,description:{en:"Closes the window/menu when clicking inside the content area",ru:"Закрывает окно/меню при клике внутри области содержимого"}}},autosize:{type:e.boolean,options:{category:t.option,description:{en:"Automatically adjusts the component size based on content",ru:"Автоматически подстраивает размер компонента под содержимое"}}},axis:{type:e.select,options:{category:t.option,type:"string",options:[],description:{en:"Sets the axis direction for component layout or scrolling",ru:"Задает направление оси для раскладки или прокрутки компонента"}}},cancel:{type:e.select,options:{category:t.option,options:["auto","always"],description:{en:"Cancel button mode: auto (show only if cancelShow + active, no arrows) or always (force unless disabled/readonly or arrows).",ru:"Режим кнопки очистки: auto (показывать если cancelShow и активен, без стрелок) или always (всегда, кроме disabled/readonly или стрелок)."}},isDemo:!0,demoOptions:{value:"Value"}},clickOpen:{type:e.boolean,options:{category:t.option,description:{en:"Enable opening on click",ru:"Включение открытия по клику"}}},currencyHide:{type:e.boolean,options:{category:t.option,description:{en:"Hide the currency symbol in the formatted value",ru:"Скрывать символ валюты в форматированном значении"}},isDemo:!0,demoOptions:{currency:"USD",type:"currency"}},dir:{type:e.boolean,options:{category:t.option,description:{en:"Mirrors the component depending on a site direction (RTL/LTR)",ru:"Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)"}}},dynamic:{type:e.boolean,options:{category:t.option,description:{en:"Enables dynamic reactions to hover and focus",ru:"Включает динамическую реакцию на hover и focus"}},isDemo:!0},dynamicHover:{type:e.boolean,options:{category:t.option,description:{en:"Enables dynamic hover effect for the component",ru:"Включает динамический эффект наведения для компонента"}}},filterMode:{type:e.boolean,options:{category:t.option,description:{en:"Enables filter mode for search (hides non-matching items)",ru:"Включает режим фильтрации для поиска (скрывает несовпадающие элементы)"}}},flush:{type:e.boolean,options:{category:t.option,description:{en:"Removes borders and rounded corners to render the component flush with its container",ru:"Убирает границы и скругления для отображения компонента вплотную к контейнеру"}}},formatting:{type:e.boolean,options:{category:t.option,description:{en:"Whether to format values before displaying",ru:"Нужно ли форматировать значения перед отображением"}},isDemo:!0,demoOptions:{label:1234567}},grid:{type:e.boolean,options:{category:t.option,description:{en:"Enables grid layout mode",ru:"Включает режим сетки"}}},hideList:{type:e.boolean,options:{category:t.option,description:{en:"Hides the internal List part of the Menu; shows only header/toolbar and other slots.",ru:"Скрывает внутреннюю часть List в Menu; отображает только заголовок/панель и другие слоты."}}},horizontalScrollFlush:{type:e.boolean,options:{category:t.option,description:{en:"Removes borders and rounded corners to render the horizontal scroll component flush with its container",ru:"Убирает границы и скругления для отображения компонента горизонтальной прокрутки вплотную к контейнеру"}}},horizontal:{type:e.select,options:{category:t.option,type:"string",options:[],description:{en:"Sets horizontal alignment of elements",ru:"Задает горизонтальное выравнивание элементов"}},isDemo:!0,demoOptions:{overlap:"rectangular"}},inDom:{type:e.boolean,options:{category:t.option,description:{en:"Indicates whether the window is in the DOM",ru:"Указывает, присутствует ли окно в DOM"}}},interactive:{type:e.boolean,options:{category:t.option,description:{en:"Enables interactive mode for the component",ru:"Включает интерактивный режим для компонента"}}},isSkeleton:{type:e.boolean,options:{category:t.option,description:{en:"Displays the component in skeleton mode",ru:"Отображает компонент в режиме скелетона"}}},itemCenter:{type:e.boolean,options:{category:t.option,description:{en:"Centers items inside the component",ru:"Центрирует элементы внутри компонента"}}},keyLabel:{type:e.string,options:{category:t.option,type:"string",description:{en:"Object key to use as label text",ru:"Ключ объекта для использования в качестве текста метки"}}},keyValue:{type:e.string,options:{category:t.option,type:"string",description:{en:"Object key to use as value text",ru:"Ключ объекта для использования в качестве текста значения"}}},labelMax:{type:e.number,options:{category:t.option,type:"number",description:{en:"Maximum length of the label text before truncation",ru:"Максимальная длина текста метки перед обрезкой"}},isDemo:!0,demo:1e3,demoOptions:{label:1234567}},maxlengthOnce:{type:e.number,options:{category:t.option,type:"number",description:{en:"The number of characters remaining at which the screen reader starts announcing",ru:"Количество оставшихся символов, при котором скринридер начинает произносить"}}},overlap:{type:e.select,options:{category:t.option,type:"string",options:[],description:{en:"Defines element positioning relative to other elements",ru:"Определяет расположение элемента относительно других элементов"}},isDemo:!0},tag:{type:e.string,options:{category:t.option,type:"string",description:{en:"Sets HTML tag for the component element",ru:"Задает HTML‑тег для элемента компонента"}}},tagBody:{type:e.string,options:{category:t.option,type:"string",description:{en:"Sets HTML tag for the body/content container element",ru:"Задает HTML‑тег для элемента контейнера тела/содержимого"}}},tagHeader:{type:e.string,options:{category:t.option,type:"string",description:{en:"Sets HTML tag for the header container element",ru:"Задает HTML‑тег для элемента контейнера шапки"}}},template:{type:e.string,options:{category:t.option,type:"string",description:{en:"Custom display template used by the component",ru:"Пользовательский шаблон отображения, используемый компонентом"}}},touchClose:{type:e.boolean,options:{category:t.option,description:{en:"Enables closing the component by a swipe-down gesture on mobile devices",ru:"Включает закрытие компонента жестом свайпа вниз на мобильных устройствах"}}},type:{type:e.select,options:{category:t.option,type:"string",options:[],description:{en:"Selects the visual type/variant of the component",ru:"Выбирает визуальный тип/вариант компонента"}}},vertical:{type:e.select,options:{category:t.option,type:"string",options:[],description:{en:"Sets vertical alignment of elements",ru:"Задает вертикальное выравнивание элементов"}},isDemo:!0,demoOptions:{overlap:"rectangular"}}},Ce={captionDecorative:{type:e.boolean,options:{category:t.technical,description:{en:"Specifies whether the caption is purely decorative",ru:"Указывает, является ли подпись чисто декоративной"}}},control:{type:e.boolean,options:{category:t.technical,description:{en:"Control object for managing list state and behavior. Provides programmatic access to list operations like navigation, selection, and focus management.",ru:"Объект управления для контроля состояния и поведения списка. Предоставляет программный доступ к операциям списка, таким как навигация, выбор и управление фокусом."}}},descriptionId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the description element",ru:"Уникальный идентификатор для элемента описания"}}},embedded:{type:e.boolean,options:{category:t.technical,description:{en:"The window will be displayed inside the current parent element",ru:"Окно будет отображаться внутри текущего родительского элемента"}}},helperId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the helper message element",ru:"Уникальный идентификатор для элемента вспомогательного сообщения"}}},id:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier attribute for the element",ru:"Уникальный идентификатор атрибута для элемента"}}},index:{type:e.number,options:{category:t.technical,type:"number",description:{en:"Index value for the component",ru:"Значение индекса для компонента"}}},labelId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the label element",ru:"Уникальный идентификатор для элемента метки"}}},language:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Language/locale code (BCP 47) used for formatting values (e.g., en-US, ru-RU)",ru:"Код языка/локали (BCP 47) для форматирования значений (например, ru-RU, en-US)"}}},messageId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the message element",ru:"Уникальный идентификатор для элемента сообщения"}}},modelOpen:{type:e.boolean,options:{category:t.technical,description:{en:"Two-way binding for the open state (v-model:open)",ru:"Двусторонняя привязка состояния открытия (v-model:open)"}}},modelSelected:{type:e.object,options:{category:t.technical,description:{en:"Two-way binding for the selected state (v-model:selected)",ru:"Двусторонняя привязка состояния выбора (v-model:selected)"}}},modelValue:{type:e.object,options:{category:t.technical,description:{en:"Two-way binding for component value (v-model)",ru:"Двусторонняя привязка значения компонента (v-model)"}}},prefixId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the prefix element",ru:"Уникальный идентификатор для элемента префикса"}}},suffixId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the suffix element",ru:"Уникальный идентификатор для элемента суффикса"}}},validationId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the validation message element",ru:"Уникальный идентификатор для элемента сообщения валидации"}}}},xe={textCancel:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Cancel text",ru:"Текст отмены"}}},textCharacterLimit:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Character limit exceeded text",ru:"Текст о превышении лимита символов"}}},textCharacterRemaining:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Remaining characters text",ru:"Текст об оставшихся символах"}}},textClose:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Close text",ru:"Текст закрытия"}}},textCopiedClipboard:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Text displayed when content is copied to clipboard",ru:"Текст, отображаемый при копировании содержимого в буфер обмена"}}},textDecrement:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Text for decreasing value",ru:"Текст для уменьшения значения"}}},textEntriesMatch:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Text for entries mismatch validation message",ru:"Текст сообщения валидации о несовпадении записей"}}},textHide:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Hide text",ru:"Текст скрытия"}}},textIncrement:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Text for increasing value",ru:"Текст для увеличения значения"}}},textLoading:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Loading text",ru:"Текст загрузки"}}},textNext:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Next text",ru:"Текст следующего"}}},textOk:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"OK text",ru:"Текст подтверждения"}}},textPrevious:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Previous text",ru:"Текст предыдущего"}}},textShow:{type:e.text,options:{category:t.text,type:"string | (() => string)",description:{en:"Show text",ru:"Текст показа"}}}},Ie={"onUpdate:modelOpen":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:modelOpen with the new boolean value",ru:"Обработчик события update:modelOpen, вызывается с новым булевым значением"}}},"onUpdate:modelSelected":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:modelSelected with the new selected value",ru:"Обработчик события update:modelSelected, вызывается с новым выбранным значением"}}},"onUpdate:modelValue":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:modelValue with the new value",ru:"Обработчик события update:modelValue, вызывается с новым значением"}}},"onUpdate:open":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:open with the new boolean value",ru:"Обработчик события update:open, вызывается с новым булевым значением"}}},"onUpdate:selected":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:selected with the new selected value",ru:"Обработчик события update:selected, вызывается с новым выбранным значением"}}},"onUpdate:value":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:value with the new value",ru:"Обработчик события update:value, вызывается с новым значением"}}}},d={actionsAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Actions component container",ru:"Дополнительные атрибуты для контейнера компонента Actions"}}},actionsHide:{type:e.boolean,options:{category:t.actions,description:{en:"Hides the actions block",ru:"Скрывает блок действий"}}},actionsList:{type:e.object,options:{category:t.actions,description:{en:"Array of primary action buttons displayed in the actions area",ru:"Массив основных кнопок действий, отображаемых в области действий"},value:[{icon:"edit",label:"Edit"},{icon:"delete",label:"Delete"},{icon:"share",label:"Share"}]}},actionsSecondary:{type:e.object,options:{category:t.actions,description:{en:"Array of secondary action buttons displayed in the actions area",ru:"Массив вторичных кнопок действий, отображаемых в области действий"},value:[{icon:"info",label:"Info"},{icon:"help",label:"Help"}]}}},Te={arrowAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the Arrow component",ru:"Дополнительные атрибуты для компонента Arrow"}}},arrowPosition:{type:e.select,options:{category:t.arrow,description:{en:"Arrow position",ru:"Позиция стрелки"},options:["auto","top","bottom","left","right"],defaultValue:"auto"}},arrowShow:{type:e.boolean,options:{category:t.arrow,description:{en:"Show arrow",ru:"Показать стрелку"}}}},Ae={barsAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the bars (header toolbar) container",ru:"Дополнительные атрибуты для контейнера бара (верхней панели)"}}},barsBackHide:{type:e.boolean,options:{category:t.bars,description:{en:"Hides the back button in the bars",ru:"Скрывает кнопку назад в барах"}}},barsDescription:{type:e.string,options:{category:t.bars,type:"string",description:{en:"Description text displayed in the bars area (subtitle/help)",ru:"Текст описания, отображаемый в области бара (подзаголовок/подсказка)"},value:"Welcome to the application!"}},barsHide:{type:e.boolean,options:{category:t.bars,description:{en:"Hides the bars (header toolbar)",ru:"Скрывает бар (верхнюю панель)"}}},barsLabel:{type:e.string,options:{category:t.bars,type:["string","number"],description:{en:"Label or numeric indicator shown in the bars header",ru:"Метка или числовой индикатор, отображаемый в заголовке бара"},value:"Hello friend"}},barsList:{type:e.object,options:{category:t.bars,description:{en:"Array of buttons displayed in the bars area (actions)",ru:"Массив кнопок, отображаемых в области бара (действия)"},value:[{icon:"home",label:"Home"},{icon:"search",label:"Search"},{icon:"settings",label:"Settings"}]}}},Ne={counter:{type:e.number,options:{category:t.counter,type:["number","string"],description:{en:"Current character count",ru:"Текущее количество символов"},value:25}},counterShow:{type:e.boolean,options:{category:t.counter,description:{en:"Shows the counter-element",ru:"Показывает элемент счетчика"}},isDemo:!0},counterId:{type:e.string,options:{category:t.technical,type:"string",description:{en:"Unique identifier for the counter element",ru:"Уникальный идентификатор для элемента счетчика"}}},counterTemplate:{type:e.string,options:{category:t.counter,type:"string",description:{en:"Custom display template for the counter-component",ru:"Пользовательский шаблон отображения для компонента счетчика"}},isDemo:!0,demo:"counter: [c], max: [m]",demoOptions:{counterShow:!0}},counterTop:{type:e.boolean,options:{category:t.counter,description:{en:"Displays the counter above the field",ru:"Отображает счетчик над полем"}},isDemo:!0,demoOptions:{counterShow:!0}},fieldCounterAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the field counter component",ru:"Дополнительные атрибуты для компонента счетчика поля"}}}},Me={icon:{type:e.string,options:{category:t.icon,type:["string","File"],description:{en:"Value of the main icon",ru:"Значение основной иконки"},value:"home"}},iconAlign:{type:e.select,options:{category:t.icon,type:"string",options:["center","text"],description:{en:"Sets icon alignment within the component",ru:"Задает выравнивание иконки внутри компонента"}}},iconArrowDown:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for down arrow",ru:"Задает иконку стрелки вниз"}}},iconArrowLeft:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for the left arrow",ru:"Задает иконку стрелки влево"}}},iconArrowRight:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for right arrow",ru:"Задает иконку стрелки вправо"}}},iconAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Sets additional attributes for the icon element",ru:"Задает дополнительные атрибуты для элемента иконки"}}},iconBack:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for the back button",ru:"Задает иконку для кнопки назад"}}},iconCancel:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for cancel/clear action",ru:"Задает иконку для действия отмены/очистки"}}},iconCheckbox:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for checkbox",ru:"Задает иконку для чекбокса"}}},iconClose:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for close button",ru:"Задает иконку для кнопки закрытия"}}},iconContentCopy:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for copy content action",ru:"Задает иконку для действия копирования содержимого"}}},iconDir:{type:e.boolean,options:{category:t.icon,description:{en:"Mirrors the icon depending on a site direction (RTL/LTR)",ru:"Зеркально отражает иконку в зависимости от направления сайта (RTL/LTR)"}}},iconError:{type:e.string,options:{category:t.icon,description:{en:"Sets icon displayed in the error state",ru:"Задает иконку, отображаемую в состоянии ошибки"}}},iconHide:{type:e.boolean,options:{category:t.icon,description:{en:"Hides the icon",ru:"Скрывает иконку"}}},iconIndeterminate:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for indeterminate state",ru:"Задает иконку для неопределенного состояния"}}},iconLink:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for a link",ru:"Задает иконку для ссылки"}}},iconMinus:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for decrement / minus action",ru:"Задает иконку для действия уменьшения (минус)"}}},iconPalette:{type:e.boolean,options:{category:t.icon,description:{en:"Sets icon color based on palette class",ru:"Задает цвет иконки на основе класса палитры"}}},iconPlus:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for increment / plus action",ru:"Задает иконку для действия увеличения (плюс)"}}},iconSearch:{type:e.string,options:{category:t.icon,type:["string","File"],description:{en:"Sets icon for search action",ru:"Задает иконку для действия поиска"},value:"search"}},iconShow:{type:e.boolean,options:{category:t.style,description:{en:"Controls visibility of icons in displayed items",ru:"Управляет видимостью иконок в отображаемых элементах"}}},iconSuccess:{type:e.string,options:{category:t.icon,description:{en:"Sets icon displayed in a success state",ru:"Задает иконку, отображаемую в состоянии успеха"}}},iconTag:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for tag",ru:"Задает иконку для тега"}}},iconTop:{type:e.boolean,options:{category:t.icon,description:{en:"Aligns icon to the top of the container",ru:"Выравнивает иконку по верхнему краю контейнера"}}},iconTrailing:{type:e.string,options:{category:t.icon,type:["string","File"],description:{en:"Value of the trailing icon",ru:"Значение завершающей иконки"}},isDemo:!0,demo:"settings"},iconTrailingDirOnly:{type:e.boolean,options:{category:t.icon,description:{en:"Applies direction mirroring only to the trailing icon",ru:"Применяет зеркальное отражение только к завершающей иконке"}}},iconTrailingPalette:{type:e.boolean,options:{category:t.icon,description:{en:"Sets trailing icon color based on palette class",ru:"Задает цвет завершающей иконки на основе класса палитры"}}},iconTrailingTurnOnly:{type:e.boolean,options:{category:t.icon,description:{en:"Applies rotation only to the trailing icon",ru:"Применяет поворот только к завершающей иконке"}}},iconTurn:{type:e.boolean,options:{category:t.icon,description:{en:"Turns the icon",ru:"Поворачивает иконку"}},isDemo:!0},iconVisibility:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for visibility on state (show password)",ru:"Задает иконку для состояния видимости (показать пароль)"}}},iconVisibilityOff:{type:e.string,options:{category:t.icon,description:{en:"Sets icon for visibility off state (hide password)",ru:"Задает иконку для состояния скрытия (скрыть пароль)"}}},iconWhenSelected:{type:e.boolean,options:{category:t.icon,description:{en:"Shows the icon only when the element is selected",ru:"Показывает иконку только при выборе элемента"}}}},_e={mask:{type:e.string,options:{category:t.mask,type:["string","object"],description:{en:"Input mask pattern or mask configuration object",ru:"Паттерн маски ввода или объект конфигурации маски"}}},maskAttrs:{type:e.object,options:{category:t.attributes,description:{en:"Additional attributes for the mask component",ru:"Дополнительные атрибуты для компонента маски"}}},maskNone:{type:e.boolean,options:{category:t.mask,description:{en:"Disables the mask functionality",ru:"Отключает функциональность маски"}}},maskVisible:{type:e.boolean,options:{category:t.mask,description:{en:"Controls visibility of mask placeholder characters",ru:"Управляет видимостью символов-заполнителей маски"}}}},Be={"actions.list":{type:e.object,options:{category:t.value,description:{en:"Array of primary action button configurations",ru:"Массив конфигураций основных кнопок действий"},value:[{label:"Ok"},{label:"Cancel"}]}},"actions.listSecondary":{type:e.object,options:{category:t.value,description:{en:"Array of secondary action button configurations",ru:"Массив конфигураций вторичных кнопок действий"},value:[{icon:"edit"},{icon:"photo_camera"},{icon:"image"},{icon:"tune"}]}}},Le={"anchor.behavior":{type:e.select,options:{category:t.option,description:{en:"Defines the transition animation",ru:"Определяет анимацию перехода"}}},"anchor.block":{type:e.select,options:{category:t.option,description:{en:"Defines vertical alignment",ru:"Определяет вертикальное выравнивание"}}},"anchor.delayHide":{type:e.number,options:{category:t.option,description:{en:"Delay before hiding the element (in ms)",ru:"Задержка перед скрытием элемента (в мс)"}}},"anchor.inline":{type:e.select,options:{category:t.option,description:{en:"Defines horizontal alignment",ru:"Определяет горизонтальное выравнивание"}}},"anchor.isCopy":{type:e.boolean,options:{category:t.option,description:{en:"Enables copy-to-clipboard functionality",ru:"Включает функцию копирования в буфер обмена"}},isDemo:!0},"anchor.name":{type:e.text,options:{category:t.value,description:{en:"Anchor name for navigation within the page",ru:"Имя якоря для навигации внутри страницы"},value:"name-example"}},"anchor.shift":{type:e.number,options:{category:t.option,description:{en:"Scroll offset from the top edge (in pixels)",ru:"Смещение прокрутки от верхнего края (в пикселях)"}}}},Pe={elementTarget:{type:e.text,options:{category:t.value,description:{en:"The arrow will point to this element if auto mode is set",ru:"Стрелка будет указывать на этот элемент, если установлен автоматический режим"},value:"#id-arrow-target"}}},Fe={"badge.outline":{type:e.boolean,options:{category:t.style,description:{en:"Outline variant of the badge with a transparent background and border",ru:"Контурный вариант бейджа с прозрачным фоном и границей"}},isDemo:!0},"badge.primary":{type:e.boolean,options:{category:t.style,description:{en:"Primary color variant for the badge with high contrast and emphasis",ru:"Основной цветовой вариант бейджа с высоким контрастом и акцентом"}},isDemo:!0},"badge.secondary":{type:e.boolean,options:{category:t.style,description:{en:"Secondary color variant for the badge with moderate contrast",ru:"Второстепенный цветовой вариант бейджа с умеренным контрастом"}},isDemo:!0}},Ee={"bars.action":{type:e.boolean,options:{category:t.status,description:{en:"Enables action mode",ru:"Включает режим действия"}},isDemo:!0},"bars.actionBars":{type:e.object,options:{category:t.value,description:{en:"An array of buttons for the action",ru:"Массив кнопок для действия"},value:[{icon:"share"},{icon:"edit"},{icon:"delete"}]}},"bars.actionDescription":{type:e.text,options:{category:t.information,description:{en:"Description for the action",ru:"Описание для действия"},value:"Select items to perform actions"}},"bars.actionLabel":{type:e.text,options:{category:t.information,description:{en:"Label for the action",ru:"Метка для действия"},value:"Action"}},"bars.backButton":{type:e.object,options:{category:t.style,description:{en:"Provides configuration for the back button",ru:"Предоставляет конфигурацию для кнопки назад"}}},"bars.backActionHide":{type:e.boolean,options:{category:t.option,description:{en:"Hide back button in action",ru:"Скрыть кнопку назад в action"}}},"bars.backHide":{type:e.boolean,options:{category:t.option,description:{en:"Hides the back button",ru:"Скрывает кнопку назад"}}},"bars.bars":{type:e.object,options:{category:t.value,description:{en:"An array of buttons to be displayed in the bar",ru:"Массив кнопок для отображения в баре"},value:[{icon:"home",label:"Home"},{icon:"search",label:"Search"},{icon:"settings",label:"Settings"}]}},"bars.modelAction":{type:e.boolean,options:{category:t.technical,description:{en:"Two-way binding for the action state (v-model:action)",ru:"Двусторонняя привязка состояния action (v-model:action)"}}},"bars.onUpdate:action":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:action with the new boolean value",ru:"Обработчик события update:action, вызывается с новым булевым значением"}}},"bars.onUpdate:modelAction":{type:e.object,options:{category:t.hook,description:{en:"Event handler called on update:modelAction with the new boolean value",ru:"Обработчик события update:modelAction, вызывается с новым булевым значением"}}}},ze={"button.outline":{type:e.boolean,options:{category:t.style,description:{en:"Outline button style",ru:"Стиль кнопки с обводкой"}},isDemo:!0},"button.primary":{type:e.boolean,options:{category:t.style,description:{en:"Primary button style",ru:"Основной стиль кнопки"}},isDemo:!0},"button.secondary":{type:e.boolean,options:{category:t.style,description:{en:"Secondary button style",ru:"Вторичный стиль кнопки"}},isDemo:!0},"button.text":{type:e.boolean,options:{category:t.style,description:{en:"Text button style",ru:"Текстовый стиль кнопки"}},isDemo:!0}},Ve={"checkbox.value":{type:e.boolean,options:{category:t.value,type:"any",description:{en:"Value of the checkbox",ru:"Значение чекбокса"}}}},We={"chip.assistive":{type:e.boolean,options:{category:t.style,description:{en:"Alternative visual appearance style",ru:"Альтернативный стиль внешнего вида"}},isDemo:!0},"chip.input":{type:e.boolean,options:{category:t.style,description:{en:"Input-style visual appearance",ru:"Внешний вид в стиле поля ввода"}},isDemo:!0}},Oe={"chipGroup.list":{type:e.object,options:{category:t.value,description:{en:"Array of chip items data. Contains the data for all chips to be rendered in the group.",ru:"Массив данных элементов чипов. Содержит данные для всех чипов, которые должны быть отображены в группе."},value:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"}]}},"chipGroup.selected":{type:e.string,options:{category:t.status,type:["string","number","boolean","array"],description:{en:"Currently selected item(s) - can be a single value or an array of values",ru:"Выбранный элемент(ы) - может быть одним значением или массивом значений"}}}},Ue={"dialog.actionsList":{...d.actionsList,options:{...d.actionsList.options,value:void 0}},"dialog.clickOkAndClose":{type:e.boolean,options:{category:t.option,description:{en:"Automatically closes the dialog when the OK button is clicked",ru:"Автоматически закрывает диалог при клике на кнопку OK"}}}},He={"field.arrowCarousel":{type:e.boolean,options:{category:t.option,description:{en:"Shows horizontal navigation arrows (carousel left/right)",ru:"Отображает горизонтальные стрелки навигации (карусель влево/вправо)"}},isDemo:!0},"field.arrowStepper":{type:e.boolean,options:{category:t.option,description:{en:"Shows numeric step controls (+ / -) for increment / decrement",ru:"Отображает числовые степперы (+ / -) для инкремента / декремента"}},isDemo:!0},"field.basic":{type:e.boolean,options:{category:t.style,description:{en:"Basic variant for Field without fill and border",ru:"Базовый вариант Field без заливки и рамки"}},isDemo:!0},"field.boxed":{type:e.boolean,options:{category:t.style,description:{en:"Boxed variant for Field with both fill and border",ru:"Вариант Field с заливкой и рамкой (boxed)"}},isDemo:!0},"field.classic":{type:e.boolean,options:{category:t.style,description:{en:"Classic variant for Field with standard border and no fill",ru:"Классический вариант Field со стандартной рамкой без заливки"}},isDemo:!0},"field.disabledNext":{type:e.boolean,options:{category:t.status,description:{en:"Disables the next navigation control (right / plus)",ru:"Отключает кнопку следующего управления (вправо / плюс)"}}},"field.disabledPrevious":{type:e.boolean,options:{category:t.status,description:{en:"Disables the previous navigation control (left / minus)",ru:"Отключает кнопку предыдущего управления (влево / минус)"}}},"field.filled":{type:e.boolean,options:{category:t.style,description:{en:"Filled variant for Field with background fill",ru:"Залитый вариант Field с фоновым заполнением"}},isDemo:!0},"field.outlined":{type:e.boolean,options:{category:t.style,description:{en:"Outline variant for Field with bordered style",ru:"Контурный вариант Field с акцентной рамкой"}},isDemo:!0},"field.tonal":{type:e.boolean,options:{category:t.style,description:{en:"Tonal variant for Field with toned background and softer contrast",ru:"Тональный вариант Field с приглушенной заливкой и мягким контрастом"}},isDemo:!0}},je={"gridItem.base":{type:e.select,options:{category:t.style,description:{en:"Number of columns to span by default",ru:"Количество занимаемых колонок по умолчанию"}}},"gridItem.sm":{type:e.select,options:{category:t.style,description:{en:"Number of columns to span on small screens (media: sm)",ru:"Количество занимаемых колонок на маленьких экранах (media: sm)"}}},"gridItem.md":{type:e.select,options:{category:t.style,description:{en:"Number of columns to span on medium screens (media: md)",ru:"Количество занимаемых колонок на средних экранах (media: md)"}}},"gridItem.lg":{type:e.select,options:{category:t.style,description:{en:"Number of columns to span on large screens (media: lg)",ru:"Количество занимаемых колонок на больших экранах (media: lg)"}}},"gridItem.xl":{type:e.select,options:{category:t.style,description:{en:"Number of columns to span on extra large screens (media: xl)",ru:"Количество занимаемых колонок на очень больших экранах (media: xl)"}}},"gridItem.xl2":{type:e.select,options:{category:t.style,description:{en:"Number of columns to span on 2xl screens (media: 2xl)",ru:"Количество занимаемых колонок на экранах 2xl (media: 2xl)"}}}},qe={"icon.active":{type:e.boolean,options:{category:t.status,description:{en:"Sets the icon to an active state",ru:"Переводит иконку в активное состояние"}},isDemo:!0},"icon.icon":{type:e.string,options:{category:t.icon,type:["string","File"],description:{en:"Value of the main icon",ru:"Значение основной иконки"},value:"visibility"}},"icon.iconActive":{type:e.string,options:{category:t.icon,type:["string","File"],description:{en:"Value of the active icon",ru:"Значение активной иконки"},value:"visibility_off"}},"icon.start":{type:e.boolean,options:{category:t.option,description:{en:"Sorts the element to the beginning",ru:"Сортирует элемент в начало"}}},"icon.end":{type:e.boolean,options:{category:t.option,description:{en:"Sorts the element to the end",ru:"Сортирует элемент в конец"}}},"icon.high":{type:e.boolean,options:{category:t.option,description:{en:"Raises the element above others",ru:"Поднимает элемент над другими"}}},"icon.rect":{type:e.boolean,options:{category:t.style,description:{en:"Makes the element rectangular",ru:"Делает элемент прямоугольным"}},isDemo:!0,demoOptions:{overlay:!0}},"icon.circle":{type:e.boolean,options:{category:t.style,description:{en:"Makes the element circular",ru:"Делает элемент круглым"}},isDemo:!0,demoOptions:{overlay:!0}},"icon.square":{type:e.boolean,options:{category:t.style,description:{en:"Makes the element square",ru:"Делает элемент квадратным"}},isDemo:!0,demoOptions:{overlay:!0}},"icon.animationType":{type:e.select,options:{category:t.style,options:["type1","type2"],description:{en:"Defines the animation type for hide/show transitions",ru:"Определяет тип анимации при скрытии/появлении"}}},"icon.animationShow":{type:e.boolean,options:{category:t.style,description:{en:"Enables animation on first appearance",ru:"Включает анимацию при первом появлении"}}}},Re={"image.value":{type:e.string,options:{category:t.value,type:["string","File"],description:{en:"Accepts the name of an icon, a link to an image, a File object, or a link to a PDF file",ru:"Принимает название иконки, ссылку на изображение, объект File или ссылку на PDF файл"},value:"rocket_launch"},isDemo:!0,demo:"https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924"},"image.url":{type:e.string,options:{category:t.value,description:{en:"Specifies the path to the folder containing images",ru:"Указывает путь к папке с изображениями"}}},"image.adaptive":{type:e.boolean,options:{category:t.adaptive,description:{en:"Adjusts the image size for proportional alignment with other elements",ru:"Регулирует размер изображения для пропорционального выравнивания относительно других элементов"}}},"image.adaptiveAlways":{type:e.boolean,options:{category:t.adaptive,description:{en:"Continuously calculates the image size, even when the element is off-screen",ru:"Постоянно вычисляет размер изображения, даже если элемент находится вне экрана"}}},"image.adaptiveGroup":{type:e.string,options:{category:t.adaptive,description:{en:"Groups elements related to adaptiveness",ru:"Группирует элементы, связанные с адаптивностью"}}},"image.alt":{type:e.string,options:{category:t.information,description:{en:"Alternative text for the image when using the img tag",ru:"Альтернативный текст для изображения при использовании тега img"}}},"image.coordinator":{type:e.array,options:{category:t.style,type:"number[]",description:{en:"Defines the crop area of the image, accepting an array of values for top, right, bottom, and left",ru:"Определяет область обрезки изображения, принимает массив значений для top, right, bottom, left"}}},"image.fetchPriority":{type:e.select,options:{category:t.option,type:"string",options:["auto","high","low"],description:{en:"Sets the priority for fetching the image",ru:"Устанавливает приоритет загрузки изображения"}}},"image.lazy":{type:e.boolean,options:{category:t.option,description:{en:'Enables lazy loading of the image using the native loading="lazy" attribute',ru:'Включает ленивую загрузку изображения с использованием нативного атрибута loading="lazy"'}}},"image.objectHeight":{type:e.number,options:{category:t.adaptive,description:{en:"Defines the physical height of an element on the image for adaptive alignment",ru:"Указывает физическую высоту элемента на изображении для адаптивного выравнивания"}}},"image.objectWidth":{type:e.number,options:{category:t.adaptive,description:{en:"Defines the physical width of an element on the image for adaptive alignment",ru:"Указывает физическую ширину элемента на изображении для адаптивного выравнивания"}}},"image.picture":{type:e.object,options:{category:t.value,type:["Record<string, string>","ImagePictureList"],description:{en:"Sources for different display conditions using the picture tag with media queries",ru:"Источники для разных условий отображения с использованием тега picture и медиа-запросов"}}},"image.preloadOffset":{type:e.string,options:{category:t.option,type:"string",description:{en:"Distance from the viewport to start preloading the image",ru:"Расстояние от области просмотра для начала предзагрузки изображения"}}},"image.srcset":{type:e.object,options:{category:t.value,type:["string","Record<string, string>"],description:{en:"Set of image sources for different screen resolutions and pixel densities",ru:"Набор источников изображения для разных разрешений экрана и плотности пикселей"}}},"image.tagImg":{type:e.boolean,options:{category:t.option,description:{en:"Use the img tag instead of background image for better accessibility and SEO",ru:"Использовать тег img вместо фонового изображения для лучшей доступности и SEO"}}},"image.x":{type:e.string,options:{category:t.style,description:{en:"Moves the image along the X-axis, accepts a string in % or px format",ru:"Сдвигает изображение по оси X, принимает строку в формате % или px"}}},"image.y":{type:e.string,options:{category:t.style,description:{en:"Moves the image along the Y-axis, accepts a string in % or px format",ru:"Сдвигает изображение по оси Y, принимает строку в формате % или px"}}}},Ge={"input.list":{type:e.string,options:{category:t.form,description:{en:"ID of a datalist element that contains predefined autocomplete options for the input field",ru:"ID элемента datalist, содержащего предопределённые варианты для автозаполнения поля ввода"}}},"input.type":{type:e.select,options:{category:t.form,type:"string",description:{en:"Input type that determines the behavior and validation of the field",ru:"Тип инпута, определяющий поведение и валидацию поля"}}}},l={"list.focus":{type:e.string,options:{category:t.status,description:{en:"Selected item for focus state. Defines which item should be visually focused in the list.",ru:"Выбранный элемент для состояния фокуса. Определяет, какой элемент должен быть визуально сфокусирован в списке."}}},"list.itemAttrs":{type:e.object,options:{category:t.style,description:{en:"Additional attributes to apply to each list item element. Allows customization of HTML attributes for individual list items.",ru:"Дополнительные атрибуты для применения к каждому элементу списка. Позволяет настраивать HTML-атрибуты для отдельных элементов списка."}}},"list.itemGroupAttrs":{type:e.object,options:{category:t.style,description:{en:"Additional attributes for group container elements in the list.",ru:"Дополнительные атрибуты для элементов контейнера группы в списке."}}},"list.itemManagementAttrs":{type:e.object,options:{category:t.style,description:{en:"Additional attributes for management control elements in the list.",ru:"Дополнительные атрибуты для элементов управления в списке."}}},"list.itemMenuAttrs":{type:e.object,options:{category:t.style,description:{en:"Additional attributes for menu container elements in the list.",ru:"Дополнительные атрибуты для элементов контейнера меню в списке."}}},"list.list":{type:e.array,options:{category:t.value,description:{en:"Array of list items data. Contains the data for all items to be rendered in the list.",ru:"Массив данных элементов списка. Содержит данные для всех элементов, которые должны быть отображены в списке."},value:[{label:"Запустить проект (Label)",value:"launch-project",icon:"play_arrow"},{label:"Управление задачами",value:"task-management",icon:"assignment"},{type:"space"},{label:"Команда",value:"team",icon:"group",badge:"12"},{label:"Аналитика и отчеты",value:"analytics",icon:"analytics",description:"Просмотр статистики"},{type:"subtitle",label:"Инструменты"},{label:"Настройки системы",value:"settings",icon:"settings",disabled:!0},{label:"Файловый менеджер",value:"file-manager",icon:"folder",suffix:245},{type:"group",index:"g1",label:"Маркетинг",value:[{label:"Email рассылки",value:"email-campaigns",icon:"email"},{label:"Социальные сети",value:"social-media",icon:"share"},{label:"Реклама",value:"ads",icon:"ads_click"}],icon:"campaign"},{type:"group",index:"g2",label:"Разработка",value:[{label:"Репозиторий кода",value:"repository",icon:"code"},{label:"Система сборки",value:"build-system",icon:"build"},{type:"group",index:"g2-1",label:"Тестирование",value:[{label:"Unit тесты",value:"unit-tests",icon:"science"},{label:"Интеграционные тесты",value:"integration-tests",icon:"integration_instructions"},{label:"E2E тесты",value:"e2e-tests",icon:"web"}],icon:"bug_report"},{label:"Документация API",value:"api-docs",icon:"description"}],icon:"developer_mode"},{type:"menu",index:"m1",label:"Администрирование",value:[{label:"Управление пользователями",value:"user-management",icon:"people"},{label:"Права доступа",value:"permissions",icon:"security"},{type:"menu",index:"m1-1",label:"Системные настройки",value:[{label:"Конфигурация сервера",value:"server-config",icon:"dns"},{label:"База данных",value:"database-config",icon:"storage"},{label:"Резервное копирование",value:"backup",icon:"backup"}],icon:"tune"},{label:"Мониторинг системы",value:"monitoring",icon:"monitor_heart"}],icon:"admin_panel_settings"},{type:"line"},{label:"Уведомления",value:"notifications",icon:"notifications",badge:"Новое"},{label:"Избранное",value:"favorites",icon:"star"}]}},"list.lite":{type:e.boolean,options:{category:t.status,description:{en:"Enable lightweight display mode. Reduces visual complexity by showing simplified item styling with minimal decorative elements.",ru:"Включить упрощенный режим отображения. Уменьшает визуальную сложность, показывая упрощенную стилизацию элементов с минимальными декоративными элементами."}},isDemo:!0,demoOptions:{liteThreshold:4}},"list.liteThreshold":{type:e.number,options:{category:t.option,description:{en:"Threshold value that works when lite mode is enabled (lite: true). Defines the maximum number of items before additional optimizations are applied in lite mode.",ru:"Пороговое значение, которое работает, когда включен lite режим (lite: true). Определяет максимальное количество элементов перед применением дополнительных оптимизаций в lite режиме."}}},"list.selected":{type:e.string,options:{category:t.status,description:{en:"List of selected items. Contains all currently selected items in the list for multi-selection scenarios.",ru:"Список выбранных элементов. Содержит все текущие выбранные элементы списка для сценариев множественного выбора."}},isDemo:!0,demo:"task-management"}},Ke={"listItem.isItemMenu":{type:e.boolean,options:{category:t.technical,description:{en:"Indicates if the item is a menu item. Adds aria-checked attribute for accessibility.",ru:"Указывает, является ли элемент пунктом меню. Добавляет атрибут aria-checked для доступности."}}},"listItem.isMenu":{type:e.boolean,options:{category:t.technical,description:{en:'Indicates if the item is a menu. Adds aria-haspopup="menu" and aria-expanded attributes for accessibility.',ru:'Указывает, является ли элемент меню. Добавляет атрибуты aria-haspopup="menu" и aria-expanded для доступности.'}}},"listItem.listId":{type:e.string,options:{category:t.technical,description:{en:"Unique identifier for the list item. Used for tracking and referencing specific items within the list structure.",ru:"Уникальный идентификатор элемента списка. Используется для отслеживания и ссылки на конкретные элементы в структуре списка."}}},"listItem.open":{type:e.boolean,options:{category:t.status,description:{en:"Visual open state of the list item",ru:"Визуальное открытое состояние элемента списка"}}},"listItem.parent":{type:e.string,options:{category:t.technical,description:{en:"Identifier of the parent element in hierarchical list structure. Used for establishing parent-child relationships between list items.",ru:"Идентификатор родительского элемента в иерархической структуре списка. Используется для установления связей родитель-ребенок между элементами списка."}}},"listItem.search":{type:e.string,options:{category:t.technical,type:"string",description:{en:"Technical property for internal search functionality",ru:"Техническое свойство для внутренней функциональности поиска"}}},"listItem.selectedChild":{type:e.boolean,options:{category:t.technical,description:{en:"Indicates if any child element of this list item is selected",ru:"Указывает, выбран ли какой-либо дочерний элемент данного элемента списка"}},isDemo:!0},"listItem.type":{type:e.string,options:{category:t.technical,type:"string",description:{en:"Technical property for internal type classification",ru:"Техническое свойство для внутренней классификации типов"}}}},Ye={"mask.check":{type:e.string,options:{category:t.value,type:["string","object","function"],description:{en:"Global validation pattern applied after mask completion for additional input checking",ru:"Глобальный паттерн валидации, применяемый после завершения маски для дополнительной проверки ввода"}}},"mask.match":{type:e.string,options:{category:t.value,type:["string","object","function"],description:{en:"Global match pattern for allowed characters (RegExp|string or per-group map)",ru:"Глобальный паттерн допустимых символов (RegExp|строка или карта по группам)"}}},"mask.fullOnly":{type:e.boolean,options:{category:t.option,description:{en:"Treat input as valid only when the mask is fully completed",ru:"Считать ввод валидным только при полном заполнении маски"}}},"mask.groupSave":{type:e.boolean,options:{category:t.option,description:{en:"Controls cursor behavior when moving between different special character groups in the mask",ru:"Управляет поведением курсора при переходе между разными группами специальных символов в маске"},value:!0}},"mask.mask":{type:e.string,options:{category:t.value,type:["string","string[]"],description:{en:"Mask pattern: string or array. Special chars define input groups; others are literals. With multiple masks, the best match is chosen.",ru:"Шаблон маски: строка или массив. Спецсимволы — группы ввода, прочие — литералы. При нескольких масках выбирается подходящая."},value:"+1 (***) ***-****"}},"mask.pattern":{type:e.string,options:{category:t.value,type:["string","object","function"],description:{en:"Pattern definition for mask groups, defining allowed characters and validation rules per group",ru:"Определение паттернов для групп маски, задающее допустимые символы и правила валидации по группам"}}},"mask.special":{type:e.string,options:{category:t.value,type:["string","string[]","object"],description:{en:"Special characters definition for mask groups with advanced properties (rubber, defaults, patterns)",ru:"Определение специальных символов для групп маски с расширенными свойствами (резиновость, значения по умолчанию, паттерны)"},value:"*"}},"mask.view":{type:e.string,options:{category:t.style,type:"string",description:{en:"Display character used for placeholders in the mask view",ru:"Отображаемый символ, используемый как плейсхолдер в представлении маски"}}},"mask.visible":{type:e.boolean,options:{category:t.style,description:{en:"Controls complete visibility of the mask component and its placeholder characters",ru:"Управляет полной видимостью компонента маски и символов-заполнителей"},value:!0}},"mask.visiblePartly":{type:e.boolean,options:{category:t.style,description:{en:"Controls partial visibility of mask placeholder characters, showing only filled positions",ru:"Управляет частичной видимостью символов-заполнителей маски, показывая только заполненные позиции"}}}},Xe={"menu.ajax":{type:e.object,options:{category:t.value,description:{en:"URL or function to load menu items asynchronously. Function may return a promise.",ru:"URL или функция для асинхронной загрузки пунктов меню. Функция может возвращать промис."}}},"menu.cache":{type:e.boolean,options:{category:t.option,description:{en:"Enables caching of loaded menu data to reduce network requests.",ru:"Включает кэширование загруженных данных меню для уменьшения сетевых запросов."}}},"menu.isSelectedByValue":{type:e.boolean,options:{category:t.technical,description:{en:"Enables v-model support for selected value with two-way data binding.",ru:"Включает поддержку v-model для выбранного значения с двусторонней привязкой данных."}}},"menu.itemAttrs":{type:e.object,options:{category:t.style,description:{en:"Additional attributes applied to each menu item.",ru:"Дополнительные атрибуты, применяемые к каждому пункту меню."}}},"menu.list":l["list.list"],"menu.listAttrs":{type:e.object,options:{category:t.style,description:{en:"Additional attributes applied to the menu list container.",ru:"Дополнительные атрибуты, применяемые к контейнеру списка меню."}}},"menu.liteThreshold":l["list.liteThreshold"],"menu.request":{type:e.object,options:{category:t.value,description:{en:"Custom request handler configuration for fetching menu data.",ru:"Пользовательская конфигурация обработчика запросов для получения данных меню."}}},"menu.selected":l["list.selected"]},Je={"motionAxis.selected":{type:e.text,options:{category:t.status,description:{en:"Selected element",ru:"Выбранный элемент"},value:"slide2"}},"motionAxis.animationHeight":{type:e.boolean,options:{category:t.style,description:{en:"Enables height animation",ru:"Включает анимацию высоты"}}},"motionAxis.direction":{type:e.select,options:{category:t.option,description:{en:"Animation direction",ru:"Направление анимации"}}},"motionAxis.inDomSlide":{type:e.object,options:{category:t.option,description:{en:"List of slides that should remain in the DOM",ru:"Список слайдов, которые должны оставаться в DOM"}}}},$e={"motionTransform.animationHeadPosition":{type:e.select,options:{category:t.style,type:"string",options:[],description:{en:"Head behavior during animations",ru:"Поведение Head во время анимаций"}}},"motionTransform.animationShow":{type:e.boolean,options:{category:t.style,description:{en:"Enable or disable show/hide animations",ru:"Включение или отключение анимаций показа/скрытия"}}},"motionTransform.autoClose":{type:e.boolean,options:{category:t.option,description:{en:"Automatically close on the outside click",ru:"Автоматическое закрытие при клике снаружи"}}},"motionTransform.ignore":{type:e.string,options:{category:t.value,description:{en:"Element id or selector to ignore in outside click checks",ru:"Идентификатор элемента или селектор, который игнорируется при проверках клика снаружи"}}},"motionTransform.ignoreSelector":{type:e.string,options:{category:t.value,description:{en:"CSS selector to ignore in outside click checks",ru:"CSS-селектор, который игнорируется при проверках клика снаружи"}}},"motionTransform.section":{type:e.boolean,options:{category:t.option,description:{en:"Enable section styling mode",ru:"Включение режима стилизации секции"}},isDemo:!0,demoOptions:{open:!0}}},Ze={"progress.delay":{type:e.number,options:{category:t.option,type:["number","string"],description:{en:"Delay before showing the progress indicator in milliseconds",ru:"Задержка перед показом индикатора прогресса в миллисекундах"}}},"progress.delayHide":{type:e.number,options:{category:t.option,type:["number","string"],description:{en:"Delay before hiding the progress indicator in milliseconds",ru:"Задержка перед скрытием индикатора прогресса в миллисекундах"}}},"progress.point":{type:e.boolean,options:{category:t.style,description:{en:"Adds a point at the end of the progress indicator",ru:"Добавляет точку в конце индикатора прогресса"}},isDemo:!0},"progress.linear":{type:e.boolean,options:{category:t.style,description:{en:"Enables linear progress bar display",ru:"Включает отображение линейной полосы прогресса"}}},"progress.circular":{type:e.boolean,options:{category:t.style,description:{en:"Enables circular progress indicator display",ru:"Включает отображение круглого индикатора прогресса"}},isDemo:!0},"progress.indeterminate":{type:e.select,options:{category:t.style,options:["type1","type2","type3"],description:{en:"Type of indeterminate progress animation",ru:"Тип анимации неопределенного прогресса"}}},"progress.position":{type:e.select,options:{category:t.style,options:["top","bottom","static"],description:{en:"Position of the progress indicator",ru:"Позиция индикатора прогресса"}},isDemo:!0},"progress.visible":{type:e.boolean,options:{category:t.status,value:!0,description:{en:"Controls the visibility of the progress indicator",ru:"Управляет видимостью индикатора прогресса"}}}},Qe={"textarea.wrap":{type:e.select,options:{category:t.style,description:{en:"Specifies how the text in a text area is to be wrapped when submitted in a form",ru:"Указывает, как текст в текстовой области должен переноситься при отправке формы"}}}},et={"scrollbar.divider":{type:e.boolean,options:{category:t.style,description:{en:"Show divider lines at top and bottom depending on scroll position",ru:"Показывать разделительные линии сверху и снизу в зависимости от положения скролла"}}},"scrollbar.dividerBottom":{type:e.boolean,options:{category:t.style,description:{en:"Show the divider line at the bottom",ru:"Показывать разделительную линию снизу"}}},"scrollbar.dividerHide":{type:e.boolean,options:{category:t.style,description:{en:"Hide divider lines",ru:"Скрыть разделительные линии"}}},"scrollbar.dividerTop":{type:e.boolean,options:{category:t.style,description:{en:"Show the divider line at the top",ru:"Показывать разделительную линию сверху"}}},"scrollbar.inverse":{type:e.boolean,options:{category:t.style,description:{en:"Invert divider line behavior - show lines when the scroll is at beginning/end",ru:"Инвертировать поведение разделительных линий - показывать линии, когда скролл в начале/конце"}}},"scrollbar.standard":{type:e.boolean,options:{category:t.option,description:{en:"Use standard browser scrollbar",ru:"Использовать стандартный скролл браузера"}}},"scrollbar.visible":{type:e.boolean,options:{category:t.option,description:{en:"Controls element visibility and scrolling behavior (overflow: visible)",ru:"Управляет видимостью элемента и поведением прокрутки (overflow: visible)"}}}},tt={"select.editValue":{type:e.boolean,options:{category:t.form,description:{en:"Allows editing the selected value directly inside the input when not in multiple mode",ru:"Позволяет редактировать выбранное значение прямо в input при одиночном выборе"}}},"select.inputSearchAttrs":{type:e.object,options:{category:t.attributes,type:["object","function"],description:{en:"Additional bindings or attributes for the search input inside the dropdown",ru:"Дополнительные привязки или атрибуты для поля поиска внутри выпадающего меню"}}},"select.option":{type:e.object,options:{category:t.value,type:["array","object","function"],description:{en:"List of options to display in the dropdown - accepts array, object, or function returning options",ru:"Список опций для отображения в выпадающем списке - принимает массив, объект или функцию, возвращающую опции"},value:[{label:"Home",value:"home",icon:"home"},{label:"Dashboard",value:"dashboard",icon:"dashboard"},{label:"Profile",value:"profile",icon:"person"},{label:"Settings",value:"settings",icon:"settings"},{label:"Notifications",value:"notifications",icon:"notifications"},{label:"Messages",value:"messages",icon:"message"},{label:"Calendar",value:"calendar",icon:"calendar_today"},{label:"Tasks",value:"tasks",icon:"task"},{label:"Projects",value:"projects",icon:"work"},{label:"Team",value:"team",icon:"group"},{label:"Documents",value:"documents",icon:"description"}]}},"select.showSearch":{type:e.boolean,options:{category:t.option,description:{en:"Shows a search/filter field inside the dropdown menu",ru:"Отображает поле поиска/фильтра внутри выпадающего меню"}}}},ot={"selectValue.value":{type:e.object,options:{category:t.value,type:"array",description:{en:"Array of selected values to display - each item should contain label, value, and optional index, icon, and detail properties",ru:"Массив выбранных значений для отображения - каждый элемент должен содержать свойства label, value и опционально index, icon и detail"},value:[{label:"JavaScript",value:"js",icon:"code",index:"1"},{label:"TypeScript",value:"ts",icon:"verified",index:"2",detail:"Recommended"},{label:"React",value:"react",icon:"favorite",index:"3"},{label:"Vue.js",value:"vue",icon:"star",index:"4",detail:"Popular framework"}]}}},it={"tabs.selected":m["tabsNavigation.selected"]},nt={"tooltip.delay":{type:e.number,options:{category:t.style,description:{en:"Delay before showing the tooltip",ru:"Задержка перед появлением подсказки"}}},"tooltip.delayHide":{type:e.number,options:{category:t.style,description:{en:"Delay before hiding the tooltip",ru:"Задержка перед скрытием подсказки"}}},"tooltip.indent":{type:e.number,options:{category:t.style,description:{en:"Indent from the element",ru:"Отступ от элемента"}}},"tooltip.top":{type:e.boolean,options:{category:t.style,description:{en:"Displaying the tooltip on top of the element",ru:"Отображение подсказки поверх элемента"}}}},st={"window.alignment":{type:e.select,options:{category:t.style,description:{en:"Places a window in viewport: center, edges or corners",ru:"Позиционирует окно во вьюпорте: центр, края или углы"},options:[]}},"window.autoTabIndex":{type:e.boolean,options:{category:t.technical,description:{en:"Automatically manages the tab index for the window",ru:"Автоматически управляет индексом табуляции для окна"}}},"window.axis":{type:e.select,options:{category:t.option,description:{en:'Primary positioning axis relative to anchor or cursor; works only in menu mode (adaptive = "menu")',ru:'Основная ось позиционирования относительно якоря или курсора; работает только в режиме меню (adaptive = "menu")'},options:[]}},"window.beforeClosing":{type:e.object,options:{category:t.hook,description:{en:"Hook called before closing; return false to prevent closing",ru:"Хук вызывается перед закрытием; возврат false предотвращает закрытие"}}},"window.beforeOpening":{type:e.object,options:{category:t.hook,description:{en:"Hook called before opening; return false to prevent opening",ru:"Хук вызывается перед открытием; возврат false предотвращает открытие"}}},"window.inert":{type:e.boolean,options:{category:t.style,description:{en:"Blocks interaction with external elements",ru:"Блокирует управление внешними элементами"}}},"window.closeMobileHide":{type:e.boolean,options:{category:t.style,description:{en:"Hides close control on mobile",ru:"Скрывает управление закрытием на мобильных"}}},"window.closeOnEsc":{type:e.boolean,options:{category:t.technical,description:{en:"Closes the window when the ESC key is pressed",ru:"Закрывает окно при нажатии клавиши ESC"}}},"window.closing":{type:e.object,options:{category:t.hook,description:{en:"Hook called during closing; return false to interrupt",ru:"Хук вызывается во время закрытия; возврат false прерывает процесс"}}},"window.contextmenu":{type:e.boolean,options:{category:t.option,description:{en:"Allows opening on right‑click (context menu)",ru:"Позволяет открывать по правому клику (контекстное меню)"}}},"window.dense":{type:e.boolean,options:{category:t.style,description:{en:"Compact layout: reduces internal paddings for a denser window",ru:"Компактное оформление: уменьшает внутренние отступы для более плотного окна"}}},"window.divider":{type:e.boolean,options:{category:t.style,description:{en:"Displays top/bottom divider depending on scroll position",ru:"Отображает разделитель сверху/снизу в зависимости от положения скролла"}}},"window.flash":{type:e.boolean,options:{category:t.style,description:{en:"Disables animations for instant display",ru:"Отключает анимации для мгновенного отображения"}}},"window.fullscreen":{type:e.boolean,options:{category:t.style,description:{en:"Fills the screen without margins",ru:"Заполняет экран без отступов"}},isDemo:!0},"window.imageSize":{type:e.select,options:{category:t.style,description:{en:"Controls the relative size of the image area in the layout without tying to concrete values",ru:"Управляет относительным размером области изображения в макете без привязки к конкретным значениям"},options:["half","lg","md","quarter","sm"]},isDemo:!0,demoOptions:{image:"https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924",imagePosition:"left"}},"window.indent":{type:e.object,options:{category:t.style,description:{en:'Sets offsets for positioning relative to edges or anchor; works only in menu mode (adaptive = "menu")',ru:'Задает отступы для позиционирования относительно краев или якоря; работает только в режиме меню (adaptive = "menu")'}}},"window.opening":{type:e.object,options:{category:t.hook,description:{en:"Hook called during opening; return false to interrupt",ru:"Хук вызывается в процессе открытия; возврат false прерывает процесс"}}},"window.openOnArrowDown":{type:e.boolean,options:{category:t.technical,description:{en:"Opens the window when the arrow down key is pressed",ru:"Открывает окно при нажатии клавиши стрелка вниз"}}},"window.origin":{type:e.select,options:{category:t.style,description:{en:"Sets transform origin for opening animation",ru:"Задает точку трансформации для анимации открытия"},options:[]}},"window.overElement":{type:e.object,options:{category:t.option,description:{en:"Sets an anchor element for positioning",ru:"Задает опорный элемент для позиционирования"}}},"window.overscroll":{type:e.boolean,options:{category:t.technical,description:{en:"Keeps horizontal scrolling inside the window",ru:"Удерживает горизонтальный скролл внутри окна"}}},"window.persistent":{type:e.boolean,options:{category:t.style,description:{en:"Prevents closing when clicking outside",ru:"Предотвращает закрытие при клике за пределами окна"}}},"window.preparation":{type:e.object,options:{category:t.hook,description:{en:"Hook called during preparation before opening",ru:"Хук вызывается на этапе подготовки перед открытием"}}},"window.staticMode":{type:e.boolean,options:{category:t.option,description:{en:"Enables static mode: displays as an embedded component without modal behavior, animations, or dynamic positioning",ru:"Включает статичный режим: отображает как встроенный компонент без модального поведения, анимаций и динамического позиционирования"}},isDemo:!0,demoOptions:{adaptive:"static"}},"window.widthMatch":{type:e.boolean,options:{category:t.style,description:{en:"Matches window width to control width (menu)",ru:"Подгоняет ширину окна под ширину контрола (меню)"}}}},ct={...ye,...he,...ve,...ke,...fe,...we,...De,...Se,...Ce,...xe,...Ie,...d,...Te,...Ae,...Ne,...Me,..._e,...Be,...Le,...Pe,...Fe,...Ee,...ze,...Ve,...We,...Oe,...Ue,...He,...je,...qe,...Re,...Ge,...l,...Ke,...Ye,...Xe,...Je,...$e,...Ze,...Qe,...et,...tt,...ot,...it,...m,...nt,...st},pt={};export{lt as W,ct as a,rt as b,pt as w};
