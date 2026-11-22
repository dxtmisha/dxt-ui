import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Field from './D1Field.vue'
import { FieldWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, userEvent } from 'storybook/test'
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
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-field')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const FieldWidth: Story = {
  name: 'Ширина',
  render: () => ({
    components: { D1Field },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </D1Field>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-field')
    await expect(items.length).toBe(4)
    await expect(items[1]).toHaveClass('d1-field--width--custom')
  }
}
export const FieldCancel: Story = {
  name: 'Кнопка очистки',
  render: () => ({
    components: { D1Field },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + value">
            <template #default="{binds}">
              <input v-bind="binds" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </D1Field>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-field')
    await expect(items.length).toBe(3)
    await expect(items[0]).not.toHaveClass('d1-field--cancel')
    await expect(items[1]).toHaveClass('d1-field--cancel')
    await expect(items[2]).toHaveClass('d1-field--cancel')
  }
}
export const FieldNavigation: Story = {
  name: 'Навигация / стрелки',
  render: () => ({
    components: { D1Field },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{binds}">
              <input v-bind="binds" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{binds}">
              <input v-bind="binds" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{binds}">
              <input v-bind="binds" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{binds}">
              <input v-bind="binds" value="0" readonly/>
            </template>
          </D1Field>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-field')
    await expect(items.length).toBe(4)
    await expect(items[0]).toHaveClass('d1-field--arrowCarousel')
    await expect(items[2]).toHaveClass('d1-field--arrowStepper')
    await expect(items[2]).toHaveClass('d1-field--align--center')
  }
}
export const FieldSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1Field, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field is-skeleton label="Skeleton" :counter="12" helper-message="Helper message: loading description.">
            <template #default="{binds}">
              <input v-bind="binds" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const body = canvasElement.querySelector('.d1-field__body')
    await expect(body).not.toBeNull()
    await expect(body?.className).toContain('skeleton__background')
  }
}
export const FieldSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Field },
    template: `
        
        <D1Field
          id="field-slots-demo"
          :cancel-show="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
          value="Value"
        >
          <template #default="{binds}">
            <input v-bind="binds" value="Value" readonly/>
          </template>
          <template #leading="{id}"><span :data-leading-id="id">Leading slot</span></template>
          <template #trailing="{id}"><span :data-trailing-id="id">Trailing slot</span></template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-field')
    const leadingSlot = canvasElement.querySelector('[data-leading-id]')
    const trailingSlot = canvasElement.querySelector('[data-trailing-id]')
    await expect(component).toHaveTextContent('Leading slot')
    await expect(component).toHaveTextContent('Trailing slot')
    await expect(component).toHaveTextContent('Prefix slot')
    await expect(component).toHaveTextContent('Suffix slot')
    await expect(component).toHaveTextContent('Caption slot')
    await expect(leadingSlot?.getAttribute('data-leading-id')).toBe('field-slots-demo')
    await expect(trailingSlot?.getAttribute('data-trailing-id')).toBe('field-slots-demo')
  }
}
export const FieldTestStates: Story = {
  name: 'Тест: Стили, состояния и комбинации валидации',
  render: () => ({
    components: { D1Field },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Field classic focus selected block is-value required label="Classic Focus" validation-message="Invalid">
            <template #default="{binds}">
              <input v-bind="binds" value="Val" readonly/>
            </template>
          </D1Field>
          <D1Field outlined is-value readonly label="Outlined Readonly" validation-message="Hidden on readonly">
            <template #default="{binds}">
              <input v-bind="binds" value="RO" readonly/>
            </template>
          </D1Field>
          <D1Field filled is-value disabled force-show-message label="Disabled Forced" validation-message="Visible error">
            <template #default="{binds}">
              <input v-bind="binds" value="Dis" readonly/>
            </template>
          </D1Field>
          <D1Field tonal is-value loading label="Tonal Loading">
            <template #default="{binds}">
              <input v-bind="binds" value="Load" readonly/>
            </template>
          </D1Field>
          <D1Field classic is-value warning label="Classic Warning" warning-message="Needs confirmation" warning-id="field-test-warning">
            <template #default="{binds}">
              <input v-bind="binds" value="Warn" readonly/>
            </template>
          </D1Field>
          <D1Field outlined is-value warning label="Validation Priority" warning-message="Suppressed warning" validation-message="Blocking error">
            <template #default="{binds}">
              <input v-bind="binds" value="Conflict" readonly/>
            </template>
          </D1Field>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-field')
    await expect(items.length).toBe(6)

    await expect(items[0].tagName).toBe('DIV')
    await expect(items[0]).toHaveClass('d1-field--classic')
    await expect(items[0]).toHaveClass('d1-field--focus')
    await expect(items[0]).toHaveClass('d1-field--selected')
    await expect(items[0]).toHaveClass('d1-field--block')
    await expect(items[0]).toHaveClass('d1-field--validation')

    await expect(items[1].tagName).toBe('LABEL')
    await expect(items[1]).toHaveClass('d1-field--outlined')
    await expect(items[1]).not.toHaveClass('d1-field--validation')

    await expect(items[2]).toHaveClass('d1-field--filled')
    await expect(items[2]).toHaveClass('d1-field--validation')

    await expect(items[3]).toHaveClass('d1-field--tonal')
    await expect(items[3].querySelector('.d1-field__loading')).not.toBeNull()

    const warningInput = items[4].querySelector('input')
    await expect(items[4]).toHaveClass('d1-field--warning')
    await expect(items[4]).not.toHaveClass('d1-field--validation')
    await expect(warningInput?.getAttribute('aria-invalid')).toBeNull()
    await expect(warningInput?.getAttribute('aria-describedby')).toContain('field-test-warning')

    const conflictInput = items[5].querySelector('input')
    await expect(items[5]).toHaveClass('d1-field--validation')
    await expect(items[5]).not.toHaveClass('d1-field--warning')
    await expect(conflictInput?.getAttribute('aria-invalid')).toBe('true')
  }
}
export const FieldTestPrefixSuffixCaption: Story = {
  name: 'Тест: Префикс, суффикс, подпись и ARIA describedby',
  render: () => ({
    components: { D1Field },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Field
            id="field-aria-test"
            label="Amount"
            prefix="$"
            prefix-id="field-pref-id"
            suffix="USD"
            suffix-id="field-suf-id"
            caption="Net"
            :caption-decorative="true"
            value="100"
            is-value
          >
            <template #default="{binds}">
              <input v-bind="binds" value="100" readonly/>
            </template>
          </D1Field>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector('.d1-field')
    const input = canvasElement.querySelector('#field-aria-test')
    const caption = canvasElement.querySelector('.d1-field__caption')
    await expect(field).toHaveClass('d1-field--suffix')
    await expect(input?.getAttribute('aria-describedby')).toContain('field-pref-id')
    await expect(input?.getAttribute('aria-describedby')).toContain('field-suf-id')
    await expect(caption?.getAttribute('aria-hidden')).toBe('true')
  }
}
export const FieldTestCounterAndEvents: Story = {
  name: 'Тест: Счётчик сверху/снизу и события клика',
  render: () => ({
    components: { D1Field },
    setup() {
      const lastEvent = ref('none')
      const onFieldClick = (_event: MouseEvent, options: EventClickValue) => {
        lastEvent.value = options.type
      }
      return { lastEvent, onFieldClick }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Field
            classic
            label="Top Counter"
            counter-top
            counter-show
            :counter="5"
            :maxlength="20"
            cancel="always"
            icon="search"
            icon-trailing="home"
            @click="onFieldClick"
          >
            <template #default="{binds}">
              <input v-bind="binds" value="Hello" readonly/>
            </template>
          </D1Field>
          <div class="wiki-storybook-card" data-testid="field-event-output">{{ lastEvent }}</div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const cancelButton = canvasElement.querySelector('[data-event-type="cancel"]') as HTMLElement | null
    const output = canvasElement.querySelector('[data-testid="field-event-output"]')
    await expect(cancelButton).not.toBeNull()
    await step('Trigger cancel icon click', async () => {
      await userEvent.click(cancelButton!)
      await expect(output?.textContent?.trim()).toBe('cancel')
    })
  }
}
// :story-items [!] System label / Системная метка
