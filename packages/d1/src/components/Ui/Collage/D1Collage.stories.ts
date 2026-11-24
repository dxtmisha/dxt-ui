import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Collage from './D1Collage.vue'
import { CollageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import { image1, image2 } from '@dxtmisha/wiki/media'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Collage',
  component: D1Collage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: CollageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: CollageWikiStorybook.getWiki(),
  args: CollageWikiStorybook.getValues()
} satisfies Meta<typeof D1Collage>

export default meta

type Story = StoryObj<typeof meta>

export const Collage: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Collage },
    setup: () => ({ args }),
    template: `
      <D1Collage v-bind="args" />
    `
  }),
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector('.d1-collage')
    await expect(component).toBeInTheDocument()
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const CollageVariants: Story = {
  name: 'Варианты макета',
  render: () => ({
    components: { D1Collage },
    setup() {
      return { image1, image2 }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: standard</div>
            <D1Collage
              variant="standard"
              columns="4"
              :images="[
                { image: image1, label: 'Item 1' },
                { image: image2, label: 'Item 2' },
                { image: image1, label: 'Item 3' },
                { image: image2, label: 'Item 4' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: quilted</div>
            <D1Collage
              variant="quilted"
              columns="4"
              :images="[
                { image: image1, span: 'large', label: 'Large (2x2)' },
                { image: image2, span: 'standard', label: 'Standard 1' },
                { image: image1, span: 'tall', label: 'Tall (1x2)' },
                { image: image2, span: 'wide', label: 'Wide (2x1)' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: woven</div>
            <D1Collage
              variant="woven"
              columns="3"
              :images="[
                { image: image1, label: 'Item 1' },
                { image: image2, label: 'Item 2' },
                { image: image1, label: 'Item 3' },
                { image: image2, label: 'Item 4' },
                { image: image1, label: 'Item 5' },
                { image: image2, label: 'Item 6' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryHorizontal</div>
            <D1Collage
              variant="masonryHorizontal"
              cell-size="140px"
              :images="[
                { image: image1, label: 'Image 1' },
                { image: image2, label: 'Image 2' },
                { image: image1, label: 'Image 3' }
              ]"
            />
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto wiki-storybook-item--borderNone">
            <div class="wiki-storybook-item__label">variant: masonryVertical</div>
            <D1Collage
              variant="masonryVertical"
              columns="3"
              :images="[
                { image: image1, label: 'Pin 1' },
                { image: image2, label: 'Pin 2' },
                { image: image1, label: 'Pin 3' },
                { image: image2, label: 'Pin 4' }
              ]"
            />
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.d1-collage')
    await expect(items.length).toBe(5)
    await expect(items[0]).toHaveClass('d1-collage--variant--standard')
    await expect(items[1]).toHaveClass('d1-collage--variant--quilted')
    await expect(items[2]).toHaveClass('d1-collage--variant--woven')
    await expect(items[3]).toHaveClass('d1-collage--variant--masonryHorizontal')
    await expect(items[4]).toHaveClass('d1-collage--variant--masonryVertical')
  }
}
export const CollageVModel: Story = {
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: { D1Collage },
    setup() {
      const selected = ref<string[]>(['select-1', 'select-3'])
      const images = [
        { image: image1, label: 'Item 1', value: 'select-1' },
        { image: image2, label: 'Item 2', value: 'select-2' },
        { image: image1, label: 'Item 3', value: 'select-3' },
        { image: image2, label: 'Item 4', value: 'select-4' }
      ]
      return { selected, images }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span data-testid="collage-vmodel-value">Selected: {{ selected.join(',') }}</span>
            <button class="wiki-storybook-button" @click="selected = ['select-1', 'select-2']">Select 1, 2</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="selected = []">Clear</button>
          </div>

          <D1Collage
            control
            columns="4"
            variant="standard"
            :images="images"
            v-model:selected="selected"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId('collage-vmodel-value')).toHaveTextContent('Selected: select-1,select-3')
    await userEvent.click(canvas.getByText('Select 1, 2'))
    await expect(canvas.getByTestId('collage-vmodel-value')).toHaveTextContent('Selected: select-1,select-2')
    await userEvent.click(canvas.getByText('Clear'))
    await expect(canvas.getByTestId('collage-vmodel-value')).toHaveTextContent('Selected:')
  }
}
export const CollageTestKeysSlotAndEvents: Story = {
  name: 'Тест: Ключи keyValue/keyLabel, collageItemAttrs, слот, клик и expose update',
  render: () => ({
    components: { D1Collage },
    setup() {
      const collageRef = ref<{ update: () => void }>()
      const lastClicked = ref('')
      const updated = ref(false)
      const customImages = [
        { image: image1, id: 0, title: 'Zero Item' },
        { image: image2, id: 'custom-2', title: 'Custom Key Item' }
      ]
      const onClickLite = (value: EventClickValue) => {
        lastClicked.value = String(value.value)
      }
      const triggerUpdate = () => {
        collageRef.value?.update()
        updated.value = true
      }
      return { collageRef, customImages, lastClicked, updated, onClickLite, triggerUpdate }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span data-testid="collage-test-click">{{ lastClicked }}</span>
            <span data-testid="collage-test-update">{{ updated ? 'updated' : 'idle' }}</span>
            <button class="wiki-storybook-button" @click="triggerUpdate">Update</button>
          </div>
          <D1Collage
            ref="collageRef"
            columns="2"
            variant="standard"
            cell-size="120px"
            key-value="id"
            key-label="title"
            :images="customImages"
            :collage-item-attrs="{ collageBarPosition: 'static' }"
            @click-lite="onClickLite"
          />
          <D1Collage columns="2" variant="standard">
            <div data-testid="collage-test-slot-child">Slot Child</div>
          </D1Collage>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const collages = canvasElement.querySelectorAll('.d1-collage')
    await expect(collages.length).toBe(2)
    await expect(collages[0]).toHaveTextContent('Zero Item')
    await expect(collages[0]).toHaveTextContent('Custom Key Item')
    await expect(canvas.getByTestId('collage-test-slot-child')).toBeInTheDocument()
    await userEvent.click(canvas.getByText('Update'))
    await expect(canvas.getByTestId('collage-test-update')).toHaveTextContent('updated')
    const firstBody = collages[0].querySelector('a') as HTMLElement | null
    if (firstBody) {
      await userEvent.click(firstBody)
    }
    await expect(canvas.getByTestId('collage-test-click')).toHaveTextContent('0')
  }
}
// :story-items [!] System label / Системная метка
