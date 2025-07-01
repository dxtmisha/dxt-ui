import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DesignComponent from './DesignComponent.vue'
// :component.once import { ComponentWikiStorybook } from './wiki.ts'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
// :component.once   title: '[project]/Component',
// :component.once   component: DesignComponent,
// :component.once   parameters: {
// :component.once     design: '[design]',
// :component.once     docs: {
// :component.once       description: {
// :component.once         component: ComponentWikiStorybook.getDescription()
// :component.once       }
// :component.once     }
// :component.once   },
// :component.once   argTypes: ComponentWikiStorybook.getWiki(),
// :component.once   args: ComponentWikiStorybook.getValues()
} satisfies Meta<typeof DesignComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Component: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
// :story-items [!] System label / Системная метка
