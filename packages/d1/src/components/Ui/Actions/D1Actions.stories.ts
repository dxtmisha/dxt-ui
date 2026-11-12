import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Actions from './D1Actions.vue'
import { ActionsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Button from '../Button/D1Button.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Actions',
  component: D1Actions,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ActionsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ActionsWikiStorybook.getWiki(),
  args: ActionsWikiStorybook.getValues()
} satisfies Meta<typeof D1Actions>

export default meta

type Story = StoryObj<typeof meta>

export const Actions: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Actions },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <D1Actions v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-actions')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ActionsList: Story = {
  name: 'Основной и вторичный списки',
  render: () => ({
    components: { D1Actions },
    setup() {
      const list = [
        { label: 'Cancel', text: true, value: 'cancel' },
        { label: 'Apply', primary: true, value: 'apply' }
      ]
      const listSecondary = [
        { label: 'Delete', palette: 'red', text: true, value: 'delete' }
      ]
      return { list, listSecondary }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Primary + Secondary List</div>
            <D1Actions :list="list" :listSecondary="listSecondary"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Primary List Only</div>
            <D1Actions :list="list"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(2)

    const firstActions = items[0]
    const firstButtons = firstActions.querySelectorAll('.d1-actions__item')
    await expect(firstButtons.length).toBe(3)

    const spacer = firstActions.querySelector('.d1-actions__spacer')
    await expect(spacer).toBeInTheDocument()

    const secondActions = items[1]
    const secondButtons = secondActions.querySelectorAll('.d1-actions__item')
    await expect(secondButtons.length).toBe(2)
  }
}
export const ActionsAlign: Story = {
  name: 'Варианты выравнивания',
  render: () => ({
    components: { D1Actions },
    setup() {
      const list = [
        { label: 'Cancel', text: true, value: 'cancel' },
        { label: 'Apply', primary: true, value: 'apply' }
      ]
      const listSecondary = [
        { label: 'Delete', palette: 'red', text: true, value: 'delete' }
      ]
      return { list, listSecondary }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: right (default)</div>
            <D1Actions :list="list" :listSecondary="listSecondary" align="right"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: left</div>
            <D1Actions :list="list" :listSecondary="listSecondary" align="left"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: center</div>
            <D1Actions :list="list" align="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: block</div>
            <D1Actions :list="list" align="block"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: auto</div>
            <D1Actions :list="list" align="auto"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(5)

    await expect(items[0]).toHaveClass('d1-actions--align--right')
    await expect(items[1]).toHaveClass('d1-actions--align--left')
    await expect(items[2]).toHaveClass('d1-actions--align--center')
    await expect(items[3]).toHaveClass('d1-actions--align--block')
    await expect(items[4]).toHaveClass('d1-actions--align--auto')
  }
}
export const ActionsFlexible: Story = {
  name: 'Адаптивная раскладка',
  render: () => ({
    components: { D1Actions },
    setup() {
      const list = [
        { label: 'Cancel', text: true, value: 'cancel' },
        { label: 'Apply', primary: true, value: 'apply' }
      ]
      const listSecondary = [
        { label: 'Delete', palette: 'red', text: true, value: 'delete' }
      ]
      return { list, listSecondary }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">flexible: adaptiveMd</div>
            <D1Actions :list="list" :listSecondary="listSecondary" flexible="adaptiveMd"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">flexible: containerMd</div>
            <D1Actions :list="list" :listSecondary="listSecondary" flexible="containerMd"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-actions--flexible--adaptiveMd')
    await expect(items[1]).toHaveClass('d1-actions--flexible--containerMd')
  }
}
export const ActionsButtonAttrs: Story = {
  name: 'Общие атрибуты кнопок',
  render: () => ({
    components: { D1Actions },
    setup() {
      const list = [
        { label: 'Draft', value: 'draft' },
        { label: 'Publish', value: 'publish' }
      ]
      const listSecondary = [
        { label: 'Discard', value: 'discard' }
      ]
      return { list, listSecondary }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Custom buttonAttrs & buttonSecondaryAttrs</div>
            <D1Actions
              :list="list"
              :listSecondary="listSecondary"
              :buttonAttrs="{ size: 'sm', outline: true }"
              :buttonSecondaryAttrs="{ size: 'sm', palette: 'red', text: true }"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const actionsElement = canvasElement.querySelector('.d1-actions')
    await expect(actionsElement).toBeInTheDocument()

    const buttons = actionsElement?.querySelectorAll('.d1-actions__item')
    await expect(buttons?.length).toBe(3)
  }
}
export const ActionsSlots: Story = {
  name: 'Кастомный контент через слоты',
  render: () => ({
    components: { D1Actions, D1Button },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Slots: default & secondary</div>
            <D1Actions>
              <template #secondary>
                <D1Button label="Secondary Slot Action" text/>
              </template>
              <template #default>
                <D1Button label="Cancel" outline/>
                <D1Button label="Confirm" primary/>
              </template>
            </D1Actions>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const actionsElement = canvasElement.querySelector('.d1-actions')
    await expect(actionsElement).toBeInTheDocument()

    const spacer = actionsElement?.querySelector('.d1-actions__spacer')
    await expect(spacer).toBeInTheDocument()

    const buttons = actionsElement?.querySelectorAll('button')
    await expect(buttons?.length).toBe(3)
  }
}
export const ActionsEventClick: Story = {
  name: 'Обработка события клика',
  render: () => ({
    components: { D1Actions },
    setup() {
      const lastEvent = ref('none')
      const list = [
        { label: 'Cancel', text: true, value: 'cancel' },
        { label: 'Apply', primary: true, value: 'apply' }
      ]
      const onClick = (_event: MouseEvent, value: EventClickValue) => {
        lastEvent.value = 'click:' + String(value?.value ?? '')
      }
      return { lastEvent, list, onClick }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-card">Last Event: {{ lastEvent }}</div>
          <D1Actions :list="list" @click="onClick"/>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const eventCard = canvasElement.querySelector('.wiki-storybook-card')
    await expect(eventCard).toBeInTheDocument()
    await expect(eventCard?.textContent).toContain('none')

    const canvas = within(canvasElement)
    await step('Click Apply button and track event payload', async () => {
      const applyButton = canvas.getByRole('button', { name: 'Apply' })
      await userEvent.click(applyButton)
      await expect(eventCard?.textContent).toContain('click:apply')
    })

    await step('Click Cancel button and track event payload', async () => {
      const cancelButton = canvas.getByRole('button', { name: 'Cancel' })
      await userEvent.click(cancelButton)
      await expect(eventCard?.textContent).toContain('click:cancel')
    })
  }
}
export const ActionsTestAlignments: Story = {
  name: 'Тест: Все варианты выравнивания',
  render: () => ({
    components: { D1Actions },
    setup() {
      const list = [{ label: 'Item 1', value: '1' }, { label: 'Item 2', value: '2' }]
      const listSecondary = [{ label: 'Secondary', value: 'sec' }]
      return { list, listSecondary }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: none</div>
            <D1Actions :list="list" :listSecondary="listSecondary" align="none"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: left</div>
            <D1Actions :list="list" :listSecondary="listSecondary" align="left"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: right</div>
            <D1Actions :list="list" :listSecondary="listSecondary" align="right"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: center</div>
            <D1Actions :list="list" align="center"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: block</div>
            <D1Actions :list="list" align="block"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">align: auto</div>
            <D1Actions :list="list" align="auto"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(6)

    await expect(items[0]).toHaveClass('d1-actions--align--none')
    await expect(items[1]).toHaveClass('d1-actions--align--left')
    await expect(items[2]).toHaveClass('d1-actions--align--right')
    await expect(items[3]).toHaveClass('d1-actions--align--center')
    await expect(items[4]).toHaveClass('d1-actions--align--block')
    await expect(items[5]).toHaveClass('d1-actions--align--auto')
  }
}
export const ActionsTestWrapping: Story = {
  name: 'Тест: Перенос строк (wrap и nowrap)',
  render: () => ({
    components: { D1Actions },
    setup() {
      const manyItems = [
        { label: 'Action 1', value: '1' },
        { label: 'Action 2', value: '2' },
        { label: 'Action 3', value: '3' },
        { label: 'Action 4', value: '4' },
        { label: 'Action 5', value: '5' },
        { label: 'Action 6', value: '6' }
      ]
      return { manyItems }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">wrap: true</div>
            <D1Actions :list="manyItems" wrap/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">wrap: false</div>
            <D1Actions :list="manyItems" :wrap="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(2)

    await expect(items[0]).toHaveClass('d1-actions--wrap')
    await expect(items[1]).not.toHaveClass('d1-actions--wrap')
  }
}
export const ActionsTestButtonStates: Story = {
  name: 'Тест: Состояния кнопок, иконки и палитры',
  render: () => ({
    components: { D1Actions },
    setup() {
      const stateItems = [
        { label: 'Disabled', disabled: true, value: 'disabled' },
        { label: 'Loading', loading: true, value: 'loading' },
        { label: 'With Icon', icon: 'download', outline: true, value: 'icon' },
        { label: 'Custom Palette', palette: 'red', value: 'palette' }
      ]
      return { stateItems }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Rich Button States</div>
            <D1Actions :list="stateItems"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const actionsElement = canvasElement.querySelector('.d1-actions')
    await expect(actionsElement).toBeInTheDocument()

    const buttons = actionsElement?.querySelectorAll('.d1-actions__item')
    await expect(buttons?.length).toBe(4)

    if (buttons && buttons.length >= 4) {
      const disabledButton = buttons[0].querySelector('button')
      await expect(disabledButton).toBeDisabled()
    }
  }
}
export const ActionsTestEmptyAndMixed: Story = {
  name: 'Тест: Пустые списки, одиночные списки и смешанные слоты',
  render: () => ({
    components: { D1Actions, D1Button },
    setup() {
      const list = [{ label: 'Data Action', value: 'data' }]
      const listSecondary = [{ label: 'Secondary Data', value: 'sec' }]
      return { list, listSecondary }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Empty Layout (Spacer Only)</div>
            <D1Actions/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Secondary Only</div>
            <D1Actions :listSecondary="listSecondary"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">List + Slot Mixed</div>
            <D1Actions :list="list">
              <template #default>
                <D1Button label="Slotted Action" outline/>
              </template>
            </D1Actions>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(3)

    // 1. Empty layout renders spacer
    const emptySpacer = items[0].querySelector('.d1-actions__spacer')
    await expect(emptySpacer).toBeInTheDocument()
    expect(items[0].querySelectorAll('.d1-actions__item').length).toBe(0)

    // 2. Secondary only
    expect(items[1].querySelectorAll('.d1-actions__item').length).toBe(1)

    // 3. Mixed data list + slotted button
    const mixedButtons = items[2].querySelectorAll('button')
    await expect(mixedButtons.length).toBe(2)
  }
}
export const ActionsTestPaddings: Story = {
  name: 'Тест: Варианты отступов и настройки индентов',
  render: () => ({
    components: { D1Actions },
    setup() {
      const list = [{ label: 'Action', value: '1' }]
      return { list }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: sm</div>
            <D1Actions :list="list" padding="sm"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: md</div>
            <D1Actions :list="list" padding="md"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: lg</div>
            <D1Actions :list="list" padding="lg"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">padding: none</div>
            <D1Actions :list="list" padding="none"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">paddingByIndent: false</div>
            <D1Actions :list="list" :paddingByIndent="false"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-actions')
    await expect(items.length).toBe(5)

    await expect(items[0]).toHaveClass('d1-actions--padding--sm')
    await expect(items[1]).toHaveClass('d1-actions--padding--md')
    await expect(items[2]).toHaveClass('d1-actions--padding--lg')
    await expect(items[3]).toHaveClass('d1-actions--padding--none')
    await expect(items[4]).not.toHaveClass('d1-actions--paddingByIndent')
  }
}
// :story-items [!] System label / Системная метка
