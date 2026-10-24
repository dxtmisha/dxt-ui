import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Image component properties
 *
 * Описания свойств компонента Image
 */
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
    'import { ref } from \'vue\'',
    'import { demoPdf, image1, image2, phone1, phone2, phone3 } from \'@dxtmisha/wiki/media\'',
    'import type { ImageEventData } from \'@dxtmisha/constructor/Image\''
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
    },
    {
      id: 'ImageIcons',
      name: {
        en: 'Material icon styles',
        ru: 'Стили иконок Material'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">outlined (default)</div>
            <DesignComponent value="outlined-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">round</div>
            <DesignComponent value="round-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">sharp</div>
            <DesignComponent value="sharp-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">filled</div>
            <DesignComponent value="filled-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">two-tone</div>
            <DesignComponent value="two-tone-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">material ($home)</div>
            <DesignComponent value="$home"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageFlagsAndColors',
      name: {
        en: 'Flags and solid colors',
        ru: 'Флаги и сплошные цвета'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-us</div>
            <DesignComponent value="flag-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-vn</div>
            <DesignComponent value="flag-vn"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-us (compressed)</div>
            <DesignComponent value="f-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-de (compressed)</div>
            <DesignComponent value="f-de"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#4CAF50</div>
            <DesignComponent value="#4CAF50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#2196F3</div>
            <DesignComponent value="#2196F3"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageBinaryAndFile',
      name: {
        en: 'File and Uint8Array buffer',
        ru: 'Объект File и буфер Uint8Array'
      },
      setup: `
      const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#00897B"/><circle cx="60" cy="60" r="32" fill="#FFFFFF"/></svg>'
      const svgBytes = new TextEncoder().encode(svgMarkup)
      const svgFile = new File([svgMarkup], 'badge.svg', { type: 'image/svg+xml' })

      return {
        svgBytes,
        svgFile
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Uint8Array (background)</div>
            <DesignComponent :value="svgBytes" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Uint8Array (tag-img)</div>
            <DesignComponent :value="svgBytes" size="contain" tag-img alt="SVG from Uint8Array"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File (background)</div>
            <DesignComponent :value="svgFile" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File (tag-img)</div>
            <DesignComponent :value="svgFile" size="contain" tag-img alt="SVG from File"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageStates',
      name: {
        en: 'Visual states (turn, disabled, hide)',
        ru: 'Визуальные состояния (turn, disabled, hide)'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Default</div>
            <DesignComponent value="expand_more"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn</div>
            <DesignComponent value="expand_more" turn/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled</div>
            <DesignComponent value="expand_more" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn + disabled</div>
            <DesignComponent value="expand_more" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">hide</div>
            <DesignComponent value="expand_more" hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Image + turn</div>
            <DesignComponent :value="image1" size="cover" turn/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageBackground',
      name: {
        en: 'Background modes and coordinator',
        ru: 'Режимы фона и кадрирование coordinator'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: contain</div>
            <DesignComponent :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: cover</div>
            <DesignComponent :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator [25]</div>
            <DesignComponent :value="image1" :coordinator="[25]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator [20, 35]</div>
            <DesignComponent :value="image1" :coordinator="[20, 35]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator [10, 25, 40]</div>
            <DesignComponent :value="image1" :coordinator="[10, 25, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: x, y</div>
            <DesignComponent :value="image1" size="cover" x="20%" y="80%"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImagePictureAndLoading',
      name: {
        en: 'Picture sources, decoding and priority',
        ru: 'Источники picture, декодирование и приоритет'
      },
      setup: `
      return {
        image1,
        image2,
        pictureSources: [
          { src: image2, media: '(width >= 640px)', type: 'image/jpeg' },
          { src: image1, media: '(width >= 320px)', type: 'image/jpeg' }
        ]
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">picture (array)</div>
            <DesignComponent :value="image1" :picture="pictureSources" tag-img alt="Art direction picture"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">srcset (width keys)</div>
            <DesignComponent :value="image1" :srcset="{ 320: image1, 640: image2 }" tag-img alt="Width descriptor srcset"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">decoding="async" + high</div>
            <DesignComponent :value="image1" tag-img decoding="async" fetch-priority="high" alt="Async high priority"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">lazy + preload-offset</div>
            <DesignComponent :value="image2" tag-img lazy preload-offset="512px" decoding="async" fetch-priority="low" alt="Lazy preloaded"/>
          </div>
        </div>
      `
    },
    {
      id: 'ImageLoadAndExpose',
      name: {
        en: 'Load event and exposed methods',
        ru: 'Событие load и публичные методы'
      },
      setup: `
      const currentSource = ref(image1)
      const loadEventInfo = ref('Waiting for load...')

      const onLoad = (event: ImageEventData) => {
        const dimensions = typeof event.image === 'object' && event.image
          ? \`\${event.image.width}x\${event.image.height}\`
          : String(event.image ?? '')
        loadEventInfo.value = \`type: \${event.type}, data: \${dimensions}\`
      }

      return {
        image1,
        image2,
        currentSource,
        loadEventInfo,
        onLoad
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="currentSource = image1">Image 1</button>
            <button class="wiki-storybook-button" @click="currentSource = image2">Image 2</button>
            <button class="wiki-storybook-button" @click="currentSource = 'home'">Icon</button>
            <button class="wiki-storybook-button" @click="currentSource = 'flag-vn'">Flag</button>
            <span>Last @load: {{ loadEventInfo }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <DesignComponent :value="currentSource" size="contain" @load="onLoad"/>
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
