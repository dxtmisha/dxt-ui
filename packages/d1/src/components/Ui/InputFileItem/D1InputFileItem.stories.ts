import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1InputFileItem from './D1InputFileItem.vue'
import { InputFileItemWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import D1Skeleton from '../Skeleton/D1Skeleton.vue'
import { image1 } from '@dxtmisha/wiki/media'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/InputFileItem',
  component: D1InputFileItem,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: InputFileItemWikiStorybook.getDescription()
      }
    }
  },
  argTypes: InputFileItemWikiStorybook.getWiki(),
  args: InputFileItemWikiStorybook.getValues()
} satisfies Meta<typeof D1InputFileItem>

export default meta

type Story = StoryObj<typeof meta>

export const InputFileItem: Story = {
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const InputFileItemAppearance: Story = {
  name: 'Режимы отображения и состояния',
  render: () => ({
    components: { D1InputFileItem },
    setup() {
      return {
        image1
      }
    },
    template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">List appearance:</span>
            <div class="wiki-storybook-flex-column">
              <D1InputFileItem
                appearance="list"
                status="idle"
                :value="{ name: 'document-contract.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="list"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'image.jpg', size: 2097152, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="list"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="list"
                status="error"
                :value="{ name: 'archive-backup.zip', size: 5242880 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Compact appearance:</span>
            <div class="wiki-storybook-flex">
              <D1InputFileItem
                appearance="compact"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploading"
                :loading="{ value: 500000 }"
                :value="{ name: 'archive.zip', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploaded"
                :value="{ name: 'avatar.png', size: 512000 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="error"
                :value="{ name: 'invoice.pdf', size: 120000 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Tile appearance:</span>
            <div class="wiki-storybook-flex">
              <D1InputFileItem
                appearance="tile"
                status="idle"
                :value="{ name: 'scenery.jpg', size: 4194304, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'uploading.jpg', size: 2097152, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'corrupted.jpg', size: 1048576, thumbnail: image1 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">States:</span>
            <div class="wiki-storybook-flex-column">
              <D1InputFileItem
                selected
                :value="{ name: 'selected-item.pdf', size: 854000 }"
              />
              <D1InputFileItem
                disabled
                :value="{ name: 'disabled-file.docx', size: 420000 }"
              />
              <D1InputFileItem
                readonly
                :value="{ name: 'readonly-record.pdf', size: 1250000 }"
              />
            </div>
          </div>
        </div>
    `
  })
}
export const InputFileItemSkeleton: Story = {
  name: 'Скелетон',
  render: () => ({
    components: { D1InputFileItem, D1Skeleton },
    template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1InputFileItem isSkeleton :value="{ name: 'loading-file.pdf', size: 1048576 }" />
          </div>
        </D1Skeleton>
    `
  })
}
// :story-items [!] System label / Системная метка
