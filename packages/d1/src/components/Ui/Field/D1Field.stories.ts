import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Field from './D1Field.vue'
import { FieldWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Field',
  component: D1Field,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: FieldWikiStorybook.getDescription()
      }
    }
  },
  argTypes: FieldWikiStorybook.getWiki(),
  args: FieldWikiStorybook.getValues()
} satisfies Meta<typeof D1Field>

export default meta

type Story = StoryObj<typeof meta>

export const Field: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Field },
    setup: () => ({ args }),
    template: `
      <D1Field v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </D1Field>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Field, D1Skeleton },
    template: `
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
