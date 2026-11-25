import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1ImageCrop from './D1ImageCrop.vue'
import { ImageCropWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/ImageCrop',
  component: D1ImageCrop,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ImageCropWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ImageCropWikiStorybook.getWiki(),
  args: ImageCropWikiStorybook.getValues()
} satisfies Meta<typeof D1ImageCrop>

export default meta

type Story = StoryObj<typeof meta>

export const ImageCrop: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1ImageCrop },
    setup: () => ({ args }),
    template: `
      <D1ImageCrop
      class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
      v-bind="args"
    />
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-imageCrop')
    await expect(component).toBeInTheDocument()
    await expect(component?.querySelector('.d1-imageCrop__body')).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ImageCropVModel: Story = {
  name: 'v-model',
  render: () => ({
    components: { D1ImageCrop },
    setup() {
      return {
        image1,
        coordinator: ref([15, 20, 15, 20])
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="ic-vmodel-output">Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button type="button" class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button type="button" class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <D1ImageCrop
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
            :image="image1"
            v-model="coordinator"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const output = canvas.getByTestId('ic-vmodel-output')
    await expect(output).toHaveTextContent('[ 15, 20, 15, 20 ]')

    await step('Update coordinates via Center 50% and Reset buttons', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Center 50%' }))
      await expect(output).toHaveTextContent('[ 25, 25, 25, 25 ]')

      await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
      await expect(output).toHaveTextContent('[ 0, 0, 0, 0 ]')
    })
  }
}
export const ImageCropTestStatesAndProps: Story = {
  name: 'Тест: Disabled, readonly, alt, атрибуты и слот по умолчанию',
  render: () => ({
    components: { D1ImageCrop },
    setup() {
      return { image1 }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1ImageCrop
            data-testid="ic-test-disabled"
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible"
            :image="image1"
            alt="Disabled crop alt"
            :value="[10, 10, 10, 10]"
            disabled
            :image-attrs="{ 'data-img-attr': 'ok' }"
          >
            <span data-testid="ic-test-slot">Overlay slot</span>
          </D1ImageCrop>

          <D1ImageCrop
            data-testid="ic-test-readonly"
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible"
            :image="image1"
            alt="Readonly crop alt"
            :value="[20, 20, 20, 20]"
            readonly
            :crop-area-attrs="{ locked: 'top' }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledComponent = canvasElement.querySelector('[data-testid="ic-test-disabled"]')
    const readonlyComponent = canvasElement.querySelector('[data-testid="ic-test-readonly"]')

    await expect(disabledComponent).toHaveAttribute('aria-disabled', 'true')
    await expect(disabledComponent?.querySelector('[data-testid="ic-test-slot"]')).toHaveTextContent('Overlay slot')
    await expect(disabledComponent?.querySelector('img')).toHaveAttribute('alt', 'Disabled crop alt')

    await expect(readonlyComponent?.querySelector('.d1-imageCrop__cropArea')).toBeNull()
  }
}
// :story-items [!] System label / Системная метка
