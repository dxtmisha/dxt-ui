import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Header from './D1Header.vue'
import { HeaderWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Header',
  component: D1Header,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: HeaderWikiStorybook.getDescription()
      }
    }
  },
  argTypes: HeaderWikiStorybook.getWiki(),
  args: HeaderWikiStorybook.getValues()
} satisfies Meta<typeof D1Header>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const HeaderBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Header },
    template: `
        <div class="wiki-storybook-flex--column">
          <D1Header label="Header Level 1" tag="h1" />
          <D1Header label="Header Level 2" tag="h2" />
          <D1Header label="Header Level 3" tag="h3" />
        </div>
    `
  })
}
export const HeaderSlots: Story = {
  name: 'Слоты',
  render: () => ({
    components: { D1Header },
    template: `
        <D1Header label="Default label" caption="Default caption">
          <template #default>Custom label slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Header>
    `
  })
}
// :story-items [!] System label / Системная метка
