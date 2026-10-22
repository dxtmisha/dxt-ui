import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

export const wikiDescriptionsImage: StorybookComponentsDescriptionItem = {
  name: 'Image',
  description: {
    en: 'Universal component for displaying images, icons, country flags, and PDF documents. Supports files, binary buffers, direct URLs, and Material symbols.',
    ru: 'Универсальный компонент для отображения изображений, иконок, флагов стран и PDF-документов. Поддерживает работу с файлами, бинарными буферами, прямыми ссылками и именами иконок.'
  },
  possibilities: {
    en: [
      'support for various source types: URL, `File`, binary buffer (`Uint8Array`), PDF, country flags, and Material icons',
      'rendering via CSS background or semantic `<img>` and `<picture>` elements (`tagImg`, `picture`, `srcset`, `alt`)',
      'lazy loading and fetch priority management (`lazy`, `preloadOffset`, `fetchPriority`)',
      'display modes (`size`: `auto`, `contain`, `cover`) and coordinate-based cropping (`coordinator`)',
      'precise positioning via `x` and `y` offsets',
      'adaptive scaling with physical object size synchronization (`adaptive`, `objectWidth`, `objectHeight`)',
      'visual state transformations via `turn`, `hide`, and `disabled`',
      'lifecycle tracking via `load` event and programmatic inspection via `getType()` and `getData()`'
    ],
    ru: [
      'поддержка множества типов источников: URL, `File`, бинарный буфер (`Uint8Array`), PDF, флаги стран и Material-иконки',
      'рендеринг через CSS-фон или семантические элементы `<img>` и `<picture>` (`tagImg`, `picture`, `srcset`, `alt`)',
      'ленивая загрузка и управление приоритетом получения (`lazy`, `preloadOffset`, `fetchPriority`)',
      'режимы заполнения (`size`: `auto`, `contain`, `cover`) и кадрирование по координатам (`coordinator`)',
      'точное позиционирование с помощью смещений `x` и `y`',
      'адаптивное масштабирование с синхронизацией физических размеров объектов (`adaptive`, `objectWidth`, `objectHeight`)',
      'визуальные трансформации состояния с помощью `turn`, `hide` и `disabled`',
      'отслеживание жизненного цикла через событие `load` и программный доступ через `getType()` и `getData()`'
    ]
  },
  render: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <DesignComponent v-bind="args"/>
      </div>
    `,
  import: [
    'import { demoPdf, image1, phone1, phone2, phone3 } from \'@dxtmisha/wiki/media\''
  ],
  stories: [
    {
      id: 'ImageType',
      name: {
        en: 'Value type',
        ru: 'Тип значения'
      },
      setup: `
      return {
        image1,
        demoPdf
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <DesignComponent value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Flag</div>
            <DesignComponent value="flag-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <DesignComponent :value="demoPdf"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageSize',
      name: {
        en: 'Display control',
        ru: 'Отображение'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <DesignComponent :value="image1" size="auto" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <DesignComponent :value="image1" size="contain" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <DesignComponent :value="image1" size="cover" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <DesignComponent :value="image1" :coordinator="[60, 10, 10, 40]" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <DesignComponent :value="image1" x="20%" y="-10%" tag-img/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageTagImg',
      name: {
        en: 'Using img tag',
        ru: 'Использование тега img'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Background (default)</div>
            <DesignComponent :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + alt</div>
            <DesignComponent :value="image1" tag-img alt="Example image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + lazy + srcset</div>
            <DesignComponent :value="image1" tag-img lazy alt="Responsive image" :srcset="{ '1x': image1, '2x': image1 }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + picture</div>
            <DesignComponent :value="image1" tag-img alt="Adaptive image" :picture="{ 768: image1, 1024: image1 }"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageAdaptive',
      name: {
        en: 'Adapted images',
        ru: 'Адаптированные изображения'
      },
      setup: `
      return {
        phone1,
        phone2,
        phone3
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9" tag-img/>
          </div>
        </div>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Image'} type={'image'}/>
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<StorybookDescriptions componentName={'Image'} type={'flag'}/>
<Canvas of={Component.ImageType}/>

<StorybookDescriptions componentName={'Image'} type={'img-tag'}/>
<Canvas of={Component.ImageTagImg}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Image'} type={'expose'}/>
    `
  },
  ai: {
    render: `
<div
  :class="classDemo.item"
  style="position: relative; width: 48px; height: 48px;"
>
  <Image v-bind="args"/>
</div>
    `,
    description: `
Universal component for displaying graphic content, including images, Material icons, country flags, binary buffers, and PDF files. Automatically detects the content type based on the value string, File object, or Uint8Array provided.
Features multiple display modes (contain, cover, auto), adaptive scaling (objectWidth/Height), semantic img/picture tag support for SEO and lazy loading, and advanced positioning via coordinator and x/y props.
Emits load event with image dimensions upon loading and exposes getType() and getData() methods.
    `
  }
}
