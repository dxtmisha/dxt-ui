import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputImage from './D1InputImage.vue'
import { InputImageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { ref } from 'vue'
import { image1 } from '@dxtmisha/wiki/media'
import type { InputImageExpose, InputImageItem } from '@dxtmisha/constructor/InputImage'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputImage',
  component: D1InputImage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputImageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputImageWikiStorybook.getWiki(),
  args: InputImageWikiStorybook.getValues()
} satisfies Meta<typeof D1InputImage>

export default meta

type Story = StoryObj<typeof meta>

export const InputImage: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1InputImage },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <D1InputImage v-bind="args"/>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputImageVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1InputImage },
    setup() {
      return {
        image1,
        value: ref<InputImageItem | undefined>({
          value: image1,
          crop: [10, 15, 10, 15]
        })
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="input-image-crop">Current crop: {{ value?.crop }}</span>
            <button type="button" class="wiki-storybook-button" @click="value = undefined">Clear</button>
            <button type="button" class="wiki-storybook-button" @click="value = { value: image1, crop: [20, 20, 20, 20] }">Reset crop</button>
          </div>

          <D1InputImage
            label="User avatar"
            helperMessage="Drop an image here or click to select"
            v-model="value"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('input-image-crop')).toHaveTextContent('[ 10, 15, 10, 15 ]')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear' }))
    await expect(canvas.getByTestId('input-image-crop')).toHaveTextContent('Current crop:')
    await userEvent.click(canvas.getByRole('button', { name: 'Reset crop' }))
    await expect(canvas.getByTestId('input-image-crop')).toHaveTextContent('[ 20, 20, 20, 20 ]')
  }
}
export const InputImageCounter: Story = {
  name: 'Счетчик и ограничения',
  render: () => ({
    components: { D1InputImage },
    setup() {
      return {
        image1,
        pixelValue: ref({
          value: image1,
          crop: [5, 5, 5, 5]
        }),
        sizeValue: ref({
          value: image1,
          crop: [10, 10, 10, 10]
        })
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1InputImage
            label="Pixel dimension counter (max 1920px)"
            helperMessage="Displays image pixel dimension and maxPixel limit"
            counterType="pixel"
            :maxPixel="1920"
            v-model="pixelValue"
          />
          <D1InputImage
            label="File size counter (max 5MB)"
            helperMessage="Displays file size in bytes and maxFileSize limit"
            counterType="size"
            :maxFileSize="5242880"
            v-model="sizeValue"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Pixel dimension counter (max 1920px)')).toBeInTheDocument()
    await expect(canvas.getByText('File size counter (max 5MB)')).toBeInTheDocument()
  }
}
export const InputImageSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputImage, D1Skeleton },
    template: `
        
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1InputImage isSkeleton />
          </div>
        </D1Skeleton>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const fileInput = canvasElement.querySelector('input[type="file"]')
    await expect(fileInput).toBeInTheDocument()
  }
}
export const InputImageSlots: Story = {
  name: 'Использование слотов',
  render: () => ({
    components: { D1InputImage },
    template: `
        
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1InputImage label="Image label">
            <template #label>
              <strong>Custom Image Uploader Label</strong>
            </template>
          </D1InputImage>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Custom Image Uploader Label')).toBeInTheDocument()
  }
}
export const InputImageTestStatesAndExpose: Story = {
  name: 'Тест: Состояния, валидация, counterType и методы expose',
  render: () => ({
    components: { D1InputImage },
    setup() {
      const imageRef = ref<InputImageExpose | null>(null)
      const val = ref<InputImageItem | undefined>({ value: image1, crop: [0, 0, 0, 0] })
      const snapshot = ref('')
      const validResult = ref('')
      const setSample = () => {
        imageRef.value?.setValue({ value: image1, crop: [12, 12, 12, 12] })
        snapshot.value = JSON.stringify(imageRef.value?.getValue()?.crop ?? null)
      }
      const clearSample = () => {
        imageRef.value?.clear()
        snapshot.value = String(imageRef.value?.getValue() ?? 'empty')
      }
      const checkSample = () => {
        const ok = imageRef.value?.checkValidity()
        const msg = imageRef.value?.getValidationMessage() ?? ''
        validResult.value = ok ? 'valid' : 'invalid:' + msg
      }
      return {
        imageRef,
        val,
        snapshot,
        validResult,
        setSample,
        clearSample,
        checkSample
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button type="button" class="wiki-storybook-button" @click="setSample">Set via expose</button>
            <button type="button" class="wiki-storybook-button" @click="clearSample">Clear via expose</button>
            <button type="button" class="wiki-storybook-button" @click="checkSample">Check validity</button>
            <span data-testid="input-image-test-snapshot">{{ snapshot }}</span>
            <span data-testid="input-image-test-validity">{{ validResult }}</span>
          </div>
          <D1InputImage
            ref="imageRef"
            data-testid="input-image-test-expose"
            label="Expose field"
            textChange="Replace"
            textCancel="Remove"
            counterType="hide"
            v-model="val"
          />
          <D1InputImage
            data-testid="input-image-test-validation"
            label="Required image"
            :required="true"
            validationMessage="Image is required"
          />
          <D1InputImage data-testid="input-image-test-disabled" :disabled="true" label="Disabled image" />
          <D1InputImage data-testid="input-image-test-readonly" :readonly="true" label="Readonly image" />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const validationEl = canvas.getByTestId('input-image-test-validation')
    await expect(validationEl).toHaveAttribute('aria-describedby')
    await expect(canvas.getByText('Image is required')).toBeInTheDocument()

    await userEvent.click(canvas.getByRole('button', { name: 'Set via expose' }))
    await expect(canvas.getByTestId('input-image-test-snapshot')).toHaveTextContent('[12,12,12,12]')

    await userEvent.click(canvas.getByRole('button', { name: 'Clear via expose' }))
    await expect(canvas.getByTestId('input-image-test-snapshot')).toHaveTextContent('empty')

    await userEvent.click(canvas.getByRole('button', { name: 'Check validity' }))
    await expect(canvas.getByTestId('input-image-test-validity')).toHaveTextContent('valid')
  }
}
// :story-items [!] System label / Системная метка
