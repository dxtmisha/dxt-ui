import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Accordion component
 *
 * Описания свойств компонента Accordion
 */
export const wikiDescriptionsAccordion: StorybookComponentsDescriptionItem = {
  name: 'Accordion',
  description: {
    en: 'Expandable container component that reveals and hides content with smooth animations',
    ru: 'Раскрывающийся контейнерный компонент, который показывает и скрывает контент с плавными анимациями'
  },
  possibilities: {
    en: [
      'smooth expand/collapse animations via MotionTransform',
      'composable header with label, description, and icons',
      'automatic arrow rotation indicator',
      'controlled or uncontrolled state management with v-model',
      'divider line customization',
      'custom cell attributes support',
      'click event handling with custom data',
      'flexible content slots for header and body'
    ],
    ru: [
      'плавные анимации раскрытия/сворачивания через MotionTransform',
      'композитная шапка с меткой, описанием и иконками',
      'автоматический индикатор поворота стрелки',
      'управление состоянием контролируемо или неконтролируемо через v-model',
      'настройка линии разделителя',
      'поддержка пользовательских атрибутов ячейки',
      'обработка событий клика с пользовательскими данными',
      'гибкие слоты контента для шапки и тела'
    ]
  },
  import: [
    'import { ref } from \'vue\''
  ],
  render: `
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
  `,
  stories: [
    {
      id: 'AccordionVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
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
        <DesignComponent v-model:open="open" label="Settings" description="Click to expand" icon="settings">
          <template #default>
            <div class="wiki-storybook-item--padding">
              <p>Content is {{ open ? 'visible' : 'hidden' }}</p>
              <p>Using <code>v-model:open</code> provides a clean and declarative way to manage the accordion's state from the parent. It simplifies the logic by removing the need for manual event handling (<code>@update:open</code>) and prop binding (<code>:open</code>).</p>
              <p>This two-way binding is ideal for scenarios where the parent component needs to know about and control the visibility of the accordion, such as in complex forms or coordinated UI interactions.</p>
            </div>
          </template>
        </DesignComponent>
      `
    },
    {
      id: 'AccordionSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
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
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Accordion'} type={'accordion'}/>

<StorybookDescriptions componentName={'MotionTransform'} type={'v-model'}/>
<Canvas of={Component.AccordionVModel}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.isShow'}/>
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'MotionTransform'} type={'expose.motionTransformElement'}/>
    `,
    slots: `
<Canvas of={Component.AccordionSlots}/>
<StorybookDescriptions componentName={'Accordion'} type={'slots'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Cell'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Accordion :open="true" v-bind="args">
    <div class="wiki-storybook-item--padding">
      Hidden content
    </div>
  </Accordion>
</div>
    `,
    description: `
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
    `
  }
}
