import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputPhoneDialCode from './D1InputPhoneDialCode.vue'
import { InputPhoneDialCodeWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputPhoneDialCode',
  component: D1InputPhoneDialCode,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputPhoneDialCodeWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputPhoneDialCodeWikiStorybook.getWiki(),
  args: InputPhoneDialCodeWikiStorybook.getValues()
} satisfies Meta<typeof D1InputPhoneDialCode>

export default meta

type Story = StoryObj<typeof meta>

export const InputPhoneDialCode: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1InputPhoneDialCode },
    setup: () => ({ args }),
    template: `
      <D1InputPhoneDialCode v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('.d1-inputPhoneDialCode__button')
    await expect(trigger).toBeInTheDocument()
    await expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputPhoneDialCodeVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputPhoneDialCode },
    setup() {
      return {
        selectedCountry: ref<ListSelectedList | undefined>('US')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button
              class="wiki-storybook-button"
              type="button"
              data-testid="select-us-button"
              @click="selectedCountry = 'US'"
            >
              Select US
            </button>
            <button
              class="wiki-storybook-button"
              type="button"
              data-testid="select-vn-button"
              @click="selectedCountry = 'VN'"
            >
              Select VN
            </button>
            <button
              class="wiki-storybook-button wiki-storybook-button-warning"
              type="button"
              data-testid="clear-country-button"
              @click="selectedCountry = undefined"
            >
              Clear
            </button>
          </div>
          <D1InputPhoneDialCode
            v-model:model-selected="selectedCountry"
            label-type="code"
            :menu-country-attrs="{ list: ['US', 'VN'] }"
          />
          <div class="wiki-storybook-card" data-testid="selected-country-value">
            Selected: {{ selectedCountry ?? '—' }}
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('.d1-inputPhoneDialCode__button')
    const valueDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="selected-country-value"]')
    const selectVietnamButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-vn-button"]')
    const selectUsButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-us-button"]')

    await expect(trigger).toBeInTheDocument()
    await expect(valueDisplay).toHaveTextContent('Selected: US')

    await userEvent.click(selectVietnamButton!)
    await waitFor(async () => {
      await expect(valueDisplay).toHaveTextContent('Selected: VN')
      await expect(trigger).toHaveTextContent('+84')
    })

    await userEvent.click(selectUsButton!)
    await waitFor(async () => {
      await expect(valueDisplay).toHaveTextContent('Selected: US')
      await expect(trigger).toHaveTextContent('+1')
    })
  }
}
export const InputPhoneDialCodeLabelTypes: Story = {
  name: 'Режимы отображения метки (labelType)',
  render: () => ({
    components: { D1InputPhoneDialCode },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">none</div>
            <D1InputPhoneDialCode value="US" label-type="none" :menu-country-attrs="{ list: ['US', 'VN'] }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">code</div>
            <D1InputPhoneDialCode value="US" label-type="code" :menu-country-attrs="{ list: ['US', 'VN'] }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">name</div>
            <D1InputPhoneDialCode value="VN" label-type="name" :menu-country-attrs="{ list: ['US', 'VN'], language: 'en' }"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggers = canvasElement.querySelectorAll<HTMLButtonElement>('.d1-inputPhoneDialCode__button')
    await expect(triggers.length).toBe(3)
    await waitFor(async () => {
      await expect(triggers[0]).not.toHaveTextContent('+1')
      await expect(triggers[1]).toHaveTextContent('+1')
      await expect(triggers[2]).toHaveTextContent('Vietnam')
    })
  }
}
export const InputPhoneDialCodeTestStates: Story = {
  name: 'Тест: Отключённое состояние, readonly, одна страна, многокодовый список, стрелка и атрибуты',
  render: () => ({
    components: { D1InputPhoneDialCode },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">disabled</div>
            <D1InputPhoneDialCode value="US" label-type="code" disabled :country-list="['US', 'VN']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">readonly</div>
            <D1InputPhoneDialCode value="RU" label-type="code" readonly icon-arrow-down="expand_more" :country-list="['US', 'RU']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">single country auto-lock</div>
            <D1InputPhoneDialCode value="RU" label-type="code" icon-arrow-down="expand_more" :country-list="['RU']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">single multi-code interactive</div>
            <D1InputPhoneDialCode value="DO" label-type="code" icon-arrow-down="expand_more" :country-list="['DO']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">custom arrow & buttonAttrs</div>
            <D1InputPhoneDialCode
              value="VN"
              label-type="code"
              icon-arrow-down="expand_more"
              :button-attrs="{ 'data-custom': 'button-prop' }"
              :menu-country-attrs="{ list: ['US', 'VN'] }"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggers = canvasElement.querySelectorAll<HTMLButtonElement>('.d1-inputPhoneDialCode__button')
    await expect(triggers.length).toBe(5)

    await expect(triggers[0]).toBeDisabled()
    await expect(triggers[1]).toHaveTextContent('+7')
    await expect(triggers[1]).not.toHaveTextContent('expand_more')
    await userEvent.click(triggers[1]!)
    await expect(triggers[1]).toHaveAttribute('aria-expanded', 'false')
    await expect(triggers[2]).toHaveTextContent('+7')
    await expect(triggers[2]).not.toHaveTextContent('expand_more')
    await userEvent.click(triggers[2]!)
    await expect(triggers[2]).toHaveAttribute('aria-expanded', 'false')
    await expect(triggers[3]).not.toBeDisabled()
    await expect(triggers[3]).toHaveTextContent('+1-809')
    await expect(triggers[3]).toHaveTextContent('expand_more')
    await expect(triggers[4]).not.toBeDisabled()
    await expect(triggers[4]).toHaveAttribute('data-custom', 'button-prop')
    await expect(triggers[4]).toHaveTextContent('expand_more')
  }
}
export const InputPhoneDialCodeTestSearchAndGroups: Story = {
  name: 'Тест: Прямые свойства поиска, группы альтернативных кодов и disableFocusReturn',
  render: () => ({
    components: { D1InputPhoneDialCode },
    setup() {
      const selectedAlternative = ref<ListSelectedList | undefined>('DO')
      return { selectedAlternative }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <D1InputPhoneDialCode
              v-model:model-selected="selectedAlternative"
              label-type="code"
              :country-list="['DO', 'US', 'VN']"
              :show-search="true"
              :filter-mode="true"
              :highlight-length-start="1"
              :disable-focus-return="false"
            />
            <D1InputPhoneDialCode
              value="US"
              label-type="code"
              :country-list="['US', 'VN']"
              :show-search="false"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="alternative-output">
            {{ selectedAlternative }}
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggers = canvasElement.querySelectorAll<HTMLButtonElement>('.d1-inputPhoneDialCode__button')
    const output = canvasElement.querySelector<HTMLElement>('[data-testid="alternative-output"]')

    await expect(triggers.length).toBe(2)
    await expect(output).toHaveTextContent('DO')

    await userEvent.click(triggers[0]!)
    await waitFor(async () => {
      await expect(document.querySelector('[role="option"][data-value="DO-1-829"]')).not.toBeNull()
    })

    const alternativeOption = document.querySelector<HTMLElement>('[role="option"][data-value="DO-1-829"]')
    await userEvent.click(alternativeOption!)

    await waitFor(async () => {
      await expect(output).toHaveTextContent('DO-1-829')
      await expect(triggers[0]).toHaveTextContent('+1-829')
    })
  }
}
export const InputPhoneDialCodeTestEvents: Story = {
  name: 'Тест: События и выбор из меню',
  render: () => ({
    components: { D1InputPhoneDialCode },
    setup() {
      const lastEvent = ref<string>('none')
      const windowOpenState = ref<boolean>(false)
      const selectedValue = ref<string>('US')

      const onClick = (_event: MouseEvent, options?: EventClickValue) => {
        lastEvent.value = 'click:' + String(options?.value ?? '')
      }
      const onUpdateSelected = (value: ListSelectedList) => {
        selectedValue.value = String(value)
      }
      const onWindow = (options: WindowEmitOptions) => {
        windowOpenState.value = options.open
      }

      return {
        lastEvent,
        windowOpenState,
        selectedValue,
        onClick,
        onUpdateSelected,
        onWindow
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputPhoneDialCode
            :value="selectedValue"
            label-type="code"
            :menu-country-attrs="{ list: ['US', 'VN'] }"
            @click="onClick"
            @update:selected="onUpdateSelected"
            @window="onWindow"
          />
          <div class="wiki-storybook-card" data-testid="events-output">
            {{ selectedValue }} | {{ lastEvent }} | {{ windowOpenState }}
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('.d1-inputPhoneDialCode__button')
    const output = canvasElement.querySelector<HTMLElement>('[data-testid="events-output"]')

    await expect(trigger).toBeInTheDocument()
    await userEvent.click(trigger!)

    await waitFor(async () => {
      await expect(output).toHaveTextContent('true')
      await expect(document.querySelector('[role="option"][data-value="VN"]')).not.toBeNull()
    })

    const vietnamOption = document.querySelector<HTMLElement>('[role="option"][data-value="VN"]')
    await userEvent.click(vietnamOption!)

    await waitFor(async () => {
      await expect(output).toHaveTextContent('VN | click:VN | true')
      await expect(trigger).toHaveTextContent('+84')
    })
  }
}
// :story-items [!] System label / Системная метка
