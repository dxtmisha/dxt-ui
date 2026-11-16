import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Bars from './D1Bars.vue'
import { BarsWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Bars',
  component: D1Bars,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: BarsWikiStorybook.getDescription()
      }
    }
  },
  argTypes: BarsWikiStorybook.getWiki(),
  args: BarsWikiStorybook.getValues()
} satisfies Meta<typeof D1Bars>

export default meta

type Story = StoryObj<typeof meta>

export const Bars: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Bars },
    setup: () => ({ args }),
    template: `
      <D1Bars v-bind="args"/>
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector<HTMLElement>('.d1-bars')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const BarsBasic: Story = {
  name: 'Базовые',
  render: () => ({
    components: { D1Bars },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { icon: 'more_vert', value: 'more' }
            ]"
          />

          <D1Bars
            action
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share', value: 'share' },
              { icon: 'edit', value: 'edit' },
              { icon: 'delete', value: 'delete' }
            ]"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const barsList = canvasElement.querySelectorAll<HTMLElement>('.d1-bars')
    await expect(barsList.length).toBe(2)

    await expect(barsList[0]).not.toHaveClass('d1-bars--action')
    await expect(barsList[0].querySelector('.d1-bars__label')).toHaveTextContent('Page Title')
    await expect(barsList[0].querySelector('.d1-bars__description')).toHaveTextContent('A concise description for this page')
    await expect(barsList[0].querySelector('button[data-value="search"]')).toBeInTheDocument()

    await expect(barsList[1]).toHaveClass('d1-bars--action')
    await expect(barsList[1].querySelector('.d1-bars__label')).toHaveTextContent('2 selected')
    await expect(barsList[1].querySelector('.d1-bars__description')).toHaveTextContent('Choose an action to apply')
    await expect(barsList[1].querySelector('button[data-value="delete"]')).toBeInTheDocument()
  }
}
export const BarsVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Bars },
    setup() {
      return {
        isAction: ref(false)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" data-testid="toggle-action" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <D1Bars
            v-model:action="isAction"
            label="Page Title"
            description="A concise description for this example"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { icon: 'more_vert', value: 'more' }
            ]"
            action-label="2 selected"
            action-description="Choose an action to apply"
            :action-bars="[
              { icon: 'share', value: 'share' },
              { icon: 'edit', value: 'edit' },
              { icon: 'delete', value: 'delete' }
            ]"
            style="margin-top: 8px;"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const toggleButton = canvas.getByTestId('toggle-action')
    const barsElement = canvasElement.querySelector<HTMLElement>('.d1-bars')

    await expect(barsElement).not.toHaveClass('d1-bars--action')
    await expect(barsElement).toHaveAttribute('aria-live', 'polite')

    await step('Activate action mode via toggle button', async () => {
      await userEvent.click(toggleButton)
      await expect(barsElement).toHaveClass('d1-bars--action')
      await expect(barsElement?.querySelector('.d1-bars__label')).toHaveTextContent('2 selected')
    })

    await step('Exit action mode via back button', async () => {
      const backButton = barsElement?.querySelector<HTMLButtonElement>('button[data-value="back"]')
      await expect(backButton).toBeInTheDocument()
      if (backButton) {
        await userEvent.click(backButton)
      }
      await expect(barsElement).not.toHaveClass('d1-bars--action')
      await expect(barsElement?.querySelector('.d1-bars__label')).toHaveTextContent('Page Title')
    })
  }
}
export const BarsSkeleton: Story = {
  name: 'Загрузка скелетона',
  render: () => ({
    components: { D1Bars, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <D1Bars
            :isSkeleton="true"
            label="Page Title"
            description="A concise description for this header"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { icon: 'more_vert', value: 'more' }
            ]"
          />
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const labelElement = canvasElement.querySelector<HTMLElement>('.d1-bars__label')
    const descriptionElement = canvasElement.querySelector<HTMLElement>('.d1-bars__description')

    await expect(labelElement).toBeInTheDocument()
    await expect(descriptionElement).toBeInTheDocument()
    await expect(labelElement?.className).toContain('textVariant')
    await expect(descriptionElement?.className).toContain('textVariant')
  }
}
export const BarsSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1Bars },
    setup() {
      return {
        isAction: ref(false)
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" data-testid="toggle-slots-action" @click="isAction = !isAction">Toggle action ({{ isAction ? 'on' : 'off' }})</button>
          </div>
          <D1Bars v-model:action="isAction">
            <template #default>Custom Label slot</template>
            <template #description>Custom Description slot</template>
            <template #bars>Custom Bars Slot</template>
            <template #actionBars>Custom ActionBars Slot</template>
          </D1Bars>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggleButton = canvas.getByTestId('toggle-slots-action')
    const barsElement = canvasElement.querySelector<HTMLElement>('.d1-bars')

    await expect(barsElement).toHaveTextContent('Custom Label slot')
    await expect(barsElement).toHaveTextContent('Custom Description slot')
    await expect(barsElement).toHaveTextContent('Custom Bars Slot')
    await expect(barsElement).not.toHaveTextContent('Custom ActionBars Slot')

    await userEvent.click(toggleButton)
    await expect(barsElement).toHaveClass('d1-bars--action')
    await expect(barsElement).toHaveTextContent('Custom ActionBars Slot')
    await expect(barsElement).not.toHaveTextContent('Custom Bars Slot')
  }
}
export const BarsTestBackAndButtons: Story = {
  name: 'Тест: Настройки кнопки «Назад», кастомные иконки и buttonAttrs',
  render: () => ({
    components: { D1Bars },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1Bars
            data-testid="bars-back-hide"
            label="Hidden Back"
            back-hide
            :bars="[{ label: 'Save', value: 'save' }]"
          />
          <D1Bars
            data-testid="bars-back-action-hide"
            action
            action-label="Hidden Action Back"
            back-action-hide
            :action-bars="[{ label: 'Confirm', value: 'confirm' }]"
          />
          <D1Bars
            data-testid="bars-custom-back"
            label="Custom Back"
            icon-back="chevron_left"
            icon-close="cancel"
            text-close="Close navigation"
            :back-button="{ label: 'Return' }"
            :button-attrs="{ disabled: true }"
            :bars="[{ icon: 'settings', value: 'settings' }]"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const backHideBars = canvas.getByTestId('bars-back-hide')
    const backActionHideBars = canvas.getByTestId('bars-back-action-hide')
    const customBackBars = canvas.getByTestId('bars-custom-back')

    await expect(backHideBars.querySelector('button[data-value="back"]')).not.toBeInTheDocument()
    const saveButton = backHideBars.querySelector<HTMLButtonElement>('button[data-value="save"]')
    await expect(saveButton).toHaveTextContent('Save')

    await expect(backActionHideBars.querySelector('button[data-value="back"]')).not.toBeInTheDocument()
    await expect(backActionHideBars.querySelector('button[data-value="confirm"]')).toHaveTextContent('Confirm')

    const customBackButton = customBackBars.querySelector<HTMLButtonElement>('button[data-value="back"]')
    await expect(customBackButton).toHaveTextContent('Return')
    await expect(customBackButton).toHaveAttribute('aria-label', 'Close navigation')
    await expect(customBackButton).toBeDisabled()
    await expect(customBackBars.querySelector('button[data-value="settings"]')).toBeDisabled()
  }
}
export const BarsTestModelActionAndEvents: Story = {
  name: 'Тест: modelAction, ID и события клика',
  render: () => ({
    components: { D1Bars },
    setup() {
      const isModelAction = ref(false)
      const lastEvent = ref('')
      const onBarClick = (_event: MouseEvent, value?: EventClickValue) => {
        lastEvent.value = 'click:' + String(value?.value ?? '')
      }
      const onBarClickLite = (value?: EventClickValue) => {
        lastEvent.value = 'clickLite:' + String(value?.value ?? '')
      }
      return {
        isModelAction,
        lastEvent,
        onBarClick,
        onBarClickLite
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" data-testid="toggle-model-action" @click="isModelAction = !isModelAction">Toggle modelAction</button>
            <div class="wiki-storybook-card" data-testid="bars-event-output">{{ lastEvent }}</div>
          </div>
          <D1Bars
            data-testid="bars-model-action"
            v-model:model-action="isModelAction"
            label="Model Title"
            description="Model Description"
            label-id="custom-bars-label-id"
            description-id="custom-bars-desc-id"
            action-label="Model Action Active"
            :bars="[{ icon: 'thumb_up', value: 'like' }]"
            @click="onBarClick"
            @click-lite="onBarClickLite"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const toggleButton = canvas.getByTestId('toggle-model-action')
    const barsElement = canvas.getByTestId('bars-model-action')
    const eventOutput = canvas.getByTestId('bars-event-output')

    await expect(barsElement.querySelector('#custom-bars-label-id')).toHaveTextContent('Model Title')
    await expect(barsElement.querySelector('#custom-bars-desc-id')).toHaveTextContent('Model Description')

    await step('Toggle modelAction prop', async () => {
      await userEvent.click(toggleButton)
      await expect(barsElement).toHaveClass('d1-bars--action')
      await expect(barsElement.querySelector('#custom-bars-label-id')).toHaveTextContent('Model Action Active')
    })

    await step('Click back button to reset modelAction and emit clickLite', async () => {
      const backButton = barsElement.querySelector<HTMLButtonElement>('button[data-value="back"]')
      if (backButton) {
        await userEvent.click(backButton)
      }
      await expect(barsElement).not.toHaveClass('d1-bars--action')
      await expect(eventOutput).toHaveTextContent('clickLite:back')
    })

    await step('Click regular bar button to emit click/clickLite', async () => {
      const likeButton = barsElement.querySelector<HTMLButtonElement>('button[data-value="like"]')
      if (likeButton) {
        await userEvent.click(likeButton)
      }
      await expect(eventOutput).toHaveTextContent('clickLite:like')
    })
  }
}
// :story-items [!] System label / Системная метка
