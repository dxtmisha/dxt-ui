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
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </D1Field>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldCancel: Story = {
  name: 'Кнопка очистки',
  render: () => ({
    components: { D1Field },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    `
  })
}
export const FieldNavigation: Story = {
  name: 'Навигация / стрелки',
  render: () => ({
    components: { D1Field },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    `
  })
}
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
export const FieldValue: Story = {
  name: 'Состояние значения',
  render: () => ({
    components: { D1Field },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    `
  })
}
export const FieldWidth: Story = {
  name: 'Ширина',
  render: () => ({
    components: { D1Field },
    template: `
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    `
  })
}
export const FieldSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Field },
    template: `
        <D1Field
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
        </D1Field>
    `
  })
}
// :story-items [!] System label / Системная метка
