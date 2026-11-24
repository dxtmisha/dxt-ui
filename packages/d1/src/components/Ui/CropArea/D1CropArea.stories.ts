import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1CropArea from './D1CropArea.vue'
import { CropAreaWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { CropAreaCoordinator, CropAreaExpose } from '@dxtmisha/constructor/CropArea'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/CropArea',
  component: D1CropArea,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CropAreaWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CropAreaWikiStorybook.getWiki(),
  args: CropAreaWikiStorybook.getValues()
} satisfies Meta<typeof D1CropArea>

export default meta

type Story = StoryObj<typeof meta>

export const CropArea: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1CropArea },
    setup: () => ({ args }),
    template: `
      <div
      class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
    >
      <D1CropArea v-bind="args"/>
    </div>
    `
  }),
  play: async ({ canvasElement }) => {
    const cropAreaElement = canvasElement.querySelector<HTMLElement>('.d1-cropArea')
    await expect(cropAreaElement).toBeInTheDocument()
    await expect(cropAreaElement).not.toHaveAttribute('aria-disabled')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CropAreaVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1CropArea },
    setup() {
      const coordinator = ref<CropAreaCoordinator>([15, 20, 15, 20])
      const setCenter = () => {
        coordinator.value = [25, 25, 25, 25]
      }
      const resetFull = () => {
        coordinator.value = [0, 0, 0, 0]
      }
      return {
        coordinator,
        setCenter,
        resetFull
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="crop-coords">Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button type="button" class="wiki-storybook-button" @click="setCenter">Center 50%</button>
            <button type="button" class="wiki-storybook-button" @click="resetFull">Reset</button>
          </div>

          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <D1CropArea v-model="coordinator"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const cropElement = canvasElement.querySelector<HTMLElement>('.d1-cropArea')
    await expect(cropElement).toBeInTheDocument()
    await expect(canvasElement.querySelector('[data-testid="crop-coords"]')).toHaveTextContent('15')

    await step('Update coordinates to Center 50%', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Center 50%' }))
      await expect(canvasElement.querySelector('[data-testid="crop-coords"]')).toHaveTextContent('25')
    })

    await step('Reset coordinates to full area', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
      await expect(canvasElement.querySelector('[data-testid="crop-coords"]')).toHaveTextContent('0')
    })
  }
}
export const CropAreaProgrammaticControl: Story = {
  name: 'Программное управление (get, set, reset)',
  render: () => ({
    components: { D1CropArea },
    setup() {
      const cropReference = ref<CropAreaExpose | null>(null)
      const reportedValue = ref<string>('initial')

      const applyPreset = () => {
        cropReference.value?.set([20, 15, 25, 10])
        reportedValue.value = JSON.stringify(cropReference.value?.get())
      }

      const resetPreset = () => {
        cropReference.value?.reset()
        reportedValue.value = JSON.stringify(cropReference.value?.get())
      }

      return {
        cropReference,
        reportedValue,
        applyPreset,
        resetPreset
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button type="button" class="wiki-storybook-button" @click="applyPreset">Set [20, 15, 25, 10]</button>
            <button type="button" class="wiki-storybook-button" @click="resetPreset">Reset Expose</button>
            <span data-testid="crop-expose-output">{{ reportedValue }}</span>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
          >
            <D1CropArea ref="cropReference" :value="[10, 10, 10, 10]"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Call expose().set() and get()', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Set [20, 15, 25, 10]' }))
      await expect(canvasElement.querySelector('[data-testid="crop-expose-output"]')).toHaveTextContent('[20,15,25,10]')
    })

    await step('Call expose().reset()', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Reset Expose' }))
      await expect(canvasElement.querySelector('[data-testid="crop-expose-output"]')).toHaveTextContent('[10,10,10,10]')
    })
  }
}
export const CropAreaTestStatesAndOptions: Story = {
  name: 'Тест: Отключение, readonly, блокировки сторон, кастомный tag и min',
  render: () => ({
    components: { D1CropArea },
    template: `
        
        <div class="wiki-storybook-group">
          <div
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-dummy--color--blue"
            data-testid="crop-host-disabled"
          >
            <D1CropArea :value="[15, 15, 15, 15]" disabled/>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-dummy--color--blue"
            data-testid="crop-host-readonly"
          >
            <D1CropArea :value="[15, 15, 15, 15]" readonly/>
          </div>
          <div
            class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-dummy--color--blue"
            data-testid="crop-host-locks"
          >
            <D1CropArea
              :value="[10, 10, 10, 10]"
              :min="20"
              tag="section"
              disabled-top
              disabled-right
              disabled-bottom
              disabled-left
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledCrop = canvasElement.querySelector<HTMLElement>('[data-testid="crop-host-disabled"] .d1-cropArea')
    const readonlyCrop = canvasElement.querySelector<HTMLElement>('[data-testid="crop-host-readonly"] .d1-cropArea')
    const lockedCrop = canvasElement.querySelector<HTMLElement>('[data-testid="crop-host-locks"] .d1-cropArea')

    await expect(disabledCrop).toBeInTheDocument()
    await expect(disabledCrop).toHaveClass('d1-cropArea--disabled')
    await expect(disabledCrop).toHaveAttribute('aria-disabled', 'true')

    expect(readonlyCrop).toBeNull()

    await expect(lockedCrop).toBeInTheDocument()
    expect(lockedCrop?.tagName).toBe('SECTION')
    await expect(lockedCrop).toHaveClass('d1-cropArea--disabledTop')
    await expect(lockedCrop).toHaveClass('d1-cropArea--disabledRight')
    await expect(lockedCrop).toHaveClass('d1-cropArea--disabledBottom')
    await expect(lockedCrop).toHaveClass('d1-cropArea--disabledLeft')
    await expect(lockedCrop).not.toHaveAttribute('aria-disabled')
  }
}
// :story-items [!] System label / Системная метка
