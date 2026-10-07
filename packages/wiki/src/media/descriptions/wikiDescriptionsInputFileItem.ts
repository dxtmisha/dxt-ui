import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputFileItem component properties
 *
 * Описания свойств компонента InputFileItem
 */
export const wikiDescriptionsInputFileItem: StorybookComponentsDescriptionItem = {
  name: 'InputFileItem',
  description: {
    en: 'Individual file item presentation component with thumbnail preview, upload progress, lifecycle statuses, and action controls',
    ru: 'Компонент отображения отдельного файла с миниатюрой предпросмотра, прогрессом загрузки, статусами жизненного цикла и элементами управления'
  },
  possibilities: {
    en: [
      'displays individual file item with thumbnail preview, name, and formatted size',
      'supports three appearance modes: list (horizontal), compact (inline), and tile (grid)',
      'handles lifecycle statuses: idle, uploading, uploaded, and error',
      'integrated linear or circular progress indicator with determinate and indeterminate loading',
      'status indicators with customizable success and error icons',
      'interactive action buttons for file deletion and error retry',
      'supports raw File instances as well as FieldFileValue metadata objects',
      'accessible ARIA attribute bindings (aria-disabled, aria-busy)',
      'support for selected, disabled, readonly, and skeleton states'
    ],
    ru: [
      'отображение отдельного элемента файла с миниатюрой, именем и форматированным размером',
      'поддержка трех режимов отображения: list (горизонтальный), compact (компактный) и tile (плитка)',
      'обработка статусов жизненного цикла: idle, uploading, uploaded и error',
      'встроенный линейный или круговой индикатор прогресса с определенной и неопределенной загрузкой',
      'индикаторы статуса с настраиваемыми иконками успеха и ошибки',
      'интерактивные кнопки действий для удаления файла и повторной попытки загрузки',
      'поддержка как прямых экземпляров File, так и объектов метаданных FieldFileValue',
      'поддержка атрибутов доступности ARIA (aria-disabled, aria-busy)',
      'поддержка состояний selected, disabled, readonly и skeleton'
    ]
  },
  import: [
    'import { image1 } from \'@dxtmisha/wiki/media\''
  ],
  stories: [
    {
      id: 'InputFileItemAppearance',
      name: {
        en: 'Appearance modes & States',
        ru: 'Режимы отображения и состояния'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">List appearance:</span>
            <div class="wiki-storybook-flex-column">
              <DesignComponent
                appearance="list"
                status="idle"
                :value="{ name: 'document-contract.pdf', size: 1048576 }"
              />
              <DesignComponent
                appearance="list"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'image.jpg', size: 2097152, thumbnail: image1 }"
              />
              <DesignComponent
                appearance="list"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <DesignComponent
                appearance="list"
                status="error"
                :value="{ name: 'archive-backup.zip', size: 5242880 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Compact appearance:</span>
            <div class="wiki-storybook-flex">
              <DesignComponent
                appearance="compact"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <DesignComponent
                appearance="compact"
                status="uploading"
                :loading="{ value: 500000 }"
                :value="{ name: 'archive.zip', size: 1048576 }"
              />
              <DesignComponent
                appearance="compact"
                status="uploaded"
                :value="{ name: 'avatar.png', size: 512000 }"
              />
              <DesignComponent
                appearance="compact"
                status="error"
                :value="{ name: 'invoice.pdf', size: 120000 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Tile appearance:</span>
            <div class="wiki-storybook-flex">
              <DesignComponent
                appearance="tile"
                status="idle"
                :value="{ name: 'scenery.jpg', size: 4194304, thumbnail: image1 }"
              />
              <DesignComponent
                appearance="tile"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'uploading.jpg', size: 2097152, thumbnail: image1 }"
              />
              <DesignComponent
                appearance="tile"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <DesignComponent
                appearance="tile"
                status="error"
                :value="{ name: 'corrupted.jpg', size: 1048576, thumbnail: image1 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">States:</span>
            <div class="wiki-storybook-flex-column">
              <DesignComponent
                selected
                :value="{ name: 'selected-item.pdf', size: 854000 }"
              />
              <DesignComponent
                disabled
                :value="{ name: 'disabled-file.docx', size: 420000 }"
              />
              <DesignComponent
                readonly
                :value="{ name: 'readonly-record.pdf', size: 1250000 }"
              />
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'InputFileItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <DesignComponent isSkeleton :value="{ name: 'loading-file.pdf', size: 1048576 }" />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputFileItem'} type={'inputFileItem'}/>
<Canvas of={Component.InputFileItemAppearance}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputFileItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputFileItem'} type={'event.delete'}/>
<StorybookDescriptions componentName={'InputFileItem'} type={'event.retry'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'InputFileItem'} type={'expose'}/>
    `
  },
  ai: {
    description: `
Individual file presentation component used within file lists and dropzone queues.
Displays thumbnail/icon, file name, formatted size, upload progress bar, lifecycle status messages, and action buttons for deletion and retry.
Supports list, compact, and tile appearance modes, along with selected, disabled, readonly, and skeleton states. Emits delete and retry events with file metadata. Exposes getFile(), getStatus(), delete(), and retry() methods.
    `,
    hide: true
  }
}
