import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Block component properties
 *
 * Описания свойств компонента Block
 */
export const wikiDescriptionsBlock: StorybookComponentsDescriptionItem = {
  name: 'Block',
  description: {
    en: 'A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines',
    ru: 'Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков'
  },
  possibilities: {
    en: [
      'displaying a headline, label, description, and caption',
      'support for icons',
      'customizable HTML tag',
      'flexible layout for content organization'
    ],
    ru: [
      'отображение заголовка, метки, описания и подписи',
      'поддержка иконок',
      'настраиваемый HTML-тег',
      'гибкая компоновка для организации контента'
    ]
  },
  import: [],
  render: `
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
    `,
  stories: [
    {
      id: 'BlockBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
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
      `
    },
    {
      id: 'BlockSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Block'} type={'block'}/>
<Canvas of={Component.BlockBasic}/>
`,
    slots: `
<Canvas of={Component.BlockSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Block v-bind="args">
      Main content goes here.
  </Block>
</div>
    `,
    description: `
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
    `
  }
}
