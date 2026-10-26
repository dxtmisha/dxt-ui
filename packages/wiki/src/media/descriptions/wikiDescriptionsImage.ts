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
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">image: prefix</div>
            <DesignComponent value="image:custom-logo.png"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(5)

        // 1. Icon: type outlined class, material font ligature and role img
        await expect(images[0]).toHaveClass('design-component--type--outlined')
        await expect(images[0]).toHaveClass('material-symbols-outlined')
        expect(images[0].textContent?.trim()).toBe('home')
        await expect(images[0]).toHaveAttribute('role', 'img')

        // 2. Flag: type flag class and background rendering
        await expect(images[1]).toHaveClass('design-component--type--flag')
        await expect(images[1]).toHaveClass('design-component--background')

        // 3. Image: type image class and background rendering
        await expect(images[2]).toHaveClass('design-component--type--image')
        await expect(images[2]).toHaveClass('design-component--background')

        // 4. PDF: type pdf class and embedded <object> element
        await expect(images[3]).toHaveClass('design-component--type--pdf')
        const pdfObject = images[3].querySelector('object')
        await expect(pdfObject).toBeInTheDocument()
        await expect(pdfObject).toHaveAttribute('data')

        // 5. Explicit image: prefix parsed by ImageSource
        await expect(images[4]).toHaveClass('design-component--type--image')
        await expect(images[4]).toHaveClass('design-component--background')
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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(5)

        // 1. Size modes via classes
        await expect(images[0]).toHaveClass('design-component--size--auto')
        await expect(images[1]).toHaveClass('design-component--size--contain')
        await expect(images[2]).toHaveClass('design-component--size--cover')

        // 2. Coordinator: verifies computed position variables on img
        const coordinatorImg = images[3].querySelector('img')
        await expect(coordinatorImg).toBeInTheDocument()
        expect(coordinatorImg?.style.objectPosition).toBe('65% 75%')
        expect(coordinatorImg?.style.getPropertyValue('--sys-transform-originX')).toBe('65%')
        expect(coordinatorImg?.style.getPropertyValue('--sys-transform-originY')).toBe('75%')

        // 3. x, y: verifies exact object-position and transform origins
        const offsetImg = images[4].querySelector('img')
        await expect(offsetImg).toBeInTheDocument()
        expect(offsetImg?.style.objectPosition).toBe('20% -10%')
        expect(offsetImg?.style.getPropertyValue('--sys-transform-originX')).toBe('20%')
        expect(offsetImg?.style.getPropertyValue('--sys-transform-originY')).toBe('-10%')
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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(4)

        // 1. Background mode: no img element, uses background class
        await expect(images[0]).toHaveClass('design-component--background')
        await expect(images[0].querySelector('img')).toBeNull()

        // 2. Tag img with alt: img element, accessible ARIA attributes
        await expect(images[1]).toHaveClass('design-component--img')
        const img1 = images[1].querySelector('img')
        await expect(img1).toHaveAttribute('alt', 'Example image')

        // 3. Lazy and srcset attributes
        const img2 = images[2].querySelector('img')
        await expect(img2).toHaveAttribute('alt', 'Responsive image')
        await expect(img2).toHaveAttribute('loading')
        await expect(img2?.getAttribute('srcset')).toContain('1x')

        // 4. Picture tag with multiple source elements and fallback img
        expect(images[3].tagName.toLowerCase()).toBe('picture')
        const sources = images[3].querySelectorAll('source')
        await expect(sources?.length).toBe(2)
        const img3 = images[3].querySelector('img')
        await expect(img3).toHaveAttribute('alt', 'Adaptive image')
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
            <DesignComponent :value="phone1" adaptive object-width="76.2" adaptive-group="phones" adaptive-always/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9" adaptive-group="phones" adaptive-always/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9" object-height="160" adaptive-group="tablets" tag-img/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(3)

        // Verify adaptive modifier class on all components
        images.forEach((image) => {
          expect(image).toHaveClass('design-component--adaptive')
        })

        // Background vs tag-img in adaptive mode
        await expect(images[0]).toHaveClass('design-component--background')
        await expect(images[1]).toHaveClass('design-component--background')
        await expect(images[2]).toHaveClass('design-component--img')
        await expect(images[2].querySelector('img')).toBeInTheDocument()
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
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">public (@star)</div>
            <DesignComponent value="@star" url="https://example.com/icons/"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(7)

        // 1. Outlined Material Symbol
        await expect(images[0]).toHaveClass('design-component--type--outlined')
        await expect(images[0]).toHaveClass('material-symbols-outlined')
        expect(images[0].textContent?.trim()).toBe('home')

        // 2. Rounded Material Symbol
        await expect(images[1]).toHaveClass('design-component--type--round')
        await expect(images[1]).toHaveClass('material-symbols-rounded')
        expect(images[1].textContent?.trim()).toBe('home')

        // 3. Sharp Material Symbol
        await expect(images[2]).toHaveClass('design-component--type--sharp')
        await expect(images[2]).toHaveClass('material-symbols-sharp')
        expect(images[2].textContent?.trim()).toBe('home')

        // 4. Filled Material Icon
        await expect(images[3]).toHaveClass('design-component--type--filled')
        await expect(images[3]).toHaveClass('material-icons')
        expect(images[3].textContent?.trim()).toBe('home')

        // 5. Two-tone Material Icon
        await expect(images[4]).toHaveClass('design-component--type--two-tone')
        await expect(images[4]).toHaveClass('material-icons-two-tone')
        expect(images[4].textContent?.trim()).toBe('home')

        // 6. Material design shorthand ($home)
        await expect(images[5]).toHaveClass('design-component--type--material')
        await expect(images[5]).toHaveClass('material-icons')
        expect(images[5].textContent?.trim()).toBe('home')

        // 7. Public icon (@star) with custom url
        await expect(images[6]).toHaveClass('design-component--type--public')
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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(6)

        // 1-2. Standard flag types
        await expect(images[0]).toHaveClass('design-component--type--flag')
        await expect(images[1]).toHaveClass('design-component--type--flag')

        // 3-4. Compressed flags rendered via ui-sys-flags classes
        await expect(images[2]).toHaveClass('design-component--type--flag-compressed')
        await expect(images[2].querySelector('.ui-sys-flags--US')).toBeInTheDocument()

        await expect(images[3]).toHaveClass('design-component--type--flag-compressed')
        await expect(images[3].querySelector('.ui-sys-flags--DE')).toBeInTheDocument()

        // 5-6. Solid hex colors applied via background-color style
        await expect(images[4]).toHaveClass('design-component--type--color')
        expect(images[4].style.backgroundColor).toBeTruthy()

        await expect(images[5]).toHaveClass('design-component--type--color')
        expect(images[5].style.backgroundColor).toBeTruthy()
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
      const svgBytes = new Uint8Array([...svgMarkup].map(c => c.charCodeAt(0)))
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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(4)

        // 1. Uint8Array background mode: type array, no img, role="img", aria-hidden
        await expect(images[0]).toHaveClass('design-component--type--array')
        await expect(images[0].querySelector('img')).toBeNull()
        await expect(images[0]).toHaveAttribute('role', 'img')
        await expect(images[0]).toHaveAttribute('aria-hidden', 'true')

        // 2. Uint8Array tag-img mode: type array, img tag with alt attribute
        await expect(images[1]).toHaveClass('design-component--type--array')
        await expect(images[1]).toHaveClass('design-component--img')
        const arrayImg = images[1].querySelector('img')
        await expect(arrayImg).toBeInTheDocument()
        await expect(arrayImg).toHaveAttribute('alt', 'SVG from Uint8Array')

        // 3. File background mode: type file, no img
        await expect(images[2]).toHaveClass('design-component--type--file')
        await expect(images[2].querySelector('img')).toBeNull()

        // 4. File tag-img mode: type file, img tag with alt attribute
        await expect(images[3]).toHaveClass('design-component--type--file')
        await expect(images[3]).toHaveClass('design-component--img')
        const fileImg = images[3].querySelector('img')
        await expect(fileImg).toHaveAttribute('alt', 'SVG from File')
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
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">static</div>
            <DesignComponent value="expand_more" static/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(7)

        // 0. Default state: clean classes without modifier flags
        await expect(images[0]).not.toHaveClass('design-component--turn')
        await expect(images[0]).not.toHaveClass('design-component--disabled')
        await expect(images[0]).not.toHaveClass('design-component--hide')
        await expect(images[0]).not.toHaveClass('design-component--static')

        // 1. turn modifier
        await expect(images[1]).toHaveClass('design-component--turn')

        // 2. disabled modifier
        await expect(images[2]).toHaveClass('design-component--disabled')

        // 3. combined turn + disabled modifiers
        await expect(images[3]).toHaveClass('design-component--turn')
        await expect(images[3]).toHaveClass('design-component--disabled')

        // 4. hide modifier
        await expect(images[4]).toHaveClass('design-component--hide')

        // 5. Image with turn and cover size
        await expect(images[5]).toHaveClass('design-component--turn')
        await expect(images[5]).toHaveClass('design-component--size--cover')

        // 6. static positioning modifier
        await expect(images[6]).toHaveClass('design-component--static')
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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(6)

        // All items use pure CSS background rendering (no <img> tags)
        images.forEach((image) => {
          expect(image.querySelector('img')).toBeNull()
          expect(image).toHaveClass('design-component--background')
        })

        // Size classes
        await expect(images[0]).toHaveClass('design-component--size--contain')
        await expect(images[1]).toHaveClass('design-component--size--cover')

        // Coordinator: verifies computed background positioning
        expect(images[2].style.backgroundPositionX).toBe('50%')
        expect(images[2].style.backgroundPositionY).toBe('50%')
        expect(images[3].style.backgroundPositionX).toBe('50%')
        expect(images[3].style.backgroundPositionY).toBe('50%')
        expect(images[4].style.backgroundPositionX).toBe('50%')
        expect(images[4].style.backgroundPositionY).toBe('35%')

        // x, y positioning styles on root element
        expect(images[5].style.backgroundPositionX).toBe('20%')
        expect(images[5].style.backgroundPositionY).toBe('80%')
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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(4)

        // 1. Picture tag: source elements with media query and mime type
        expect(images[0].tagName.toLowerCase()).toBe('picture')
        const sources = images[0].querySelectorAll('source')
        await expect(sources?.length).toBe(2)
        expect(sources?.[0]).toHaveAttribute('media', '(width >= 640px)')
        expect(sources?.[0]).toHaveAttribute('type', 'image/jpeg')
        expect(images[0].querySelector('img')).toHaveAttribute('alt', 'Art direction picture')

        // 2. Srcset attribute formatted with descriptor widths
        const img2 = images[1].querySelector('img')
        await expect(img2).toHaveAttribute('alt', 'Width descriptor srcset')
        const srcset = img2?.getAttribute('srcset')
        expect(srcset).toBeTruthy()

        // 3. Decoding and fetch priority (high)
        const img3 = images[2].querySelector('img')
        await expect(img3).toHaveAttribute('decoding', 'async')
        await expect(img3).toHaveAttribute('fetchpriority', 'high')
        await expect(img3).toHaveAttribute('alt', 'Async high priority')

        // 4. Lazy loading and fetch priority (low)
        const img4 = images[3].querySelector('img')
        await expect(img4).toHaveAttribute('loading')
        await expect(img4).toHaveAttribute('decoding', 'async')
        await expect(img4).toHaveAttribute('fetchpriority', 'low')
        await expect(img4).toHaveAttribute('alt', 'Lazy preloaded')
      `
    },
    {
      id: 'ImageLoadAndExpose',
      name: {
        en: 'Load event and exposed methods',
        ru: 'Событие load и публичные методы'
      },
      setup: `
      const imageRef = ref()
      const currentSource = ref<string | null>(image1)
      const loadEventInfo = ref('Waiting for load...')
      const exposedType = ref('')

      const onLoad = (event: ImageEventData) => {
        const dimensions = typeof event.image === 'object' && event.image
          ? \`\${event.image.width}x\${event.image.height}\`
          : String(event.image ?? '')
        loadEventInfo.value = \`type: \${event.type}, data: \${dimensions}\`
        exposedType.value = String(imageRef.value?.getType?.() ?? '')
      }

      const updateExposed = () => {
        exposedType.value = String(imageRef.value?.getType?.() ?? '')
      }

      return {
        image1,
        image2,
        imageRef,
        currentSource,
        loadEventInfo,
        exposedType,
        onLoad,
        updateExposed
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <button class="wiki-storybook-button" @click="currentSource = image1; updateExposed()">Image 1</button>
            <button class="wiki-storybook-button" @click="currentSource = image2; updateExposed()">Image 2</button>
            <button class="wiki-storybook-button" @click="currentSource = 'home'; updateExposed()">Icon</button>
            <button class="wiki-storybook-button" @click="currentSource = 'flag-vn'; updateExposed()">Flag</button>
            <button class="wiki-storybook-button" @click="currentSource = null; updateExposed()">Clear</button>
            <span>Last @load: {{ loadEventInfo }}</span>
            <span class="exposed-value">Type: {{ exposedType }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--md">
            <DesignComponent ref="imageRef" :value="currentSource" size="contain" @load="onLoad"/>
          </div>
        </div>
      `,
      play: `
        const canvas = within(canvasElement)
        const component = canvasElement.querySelector<HTMLElement>('.design-component')
        await expect(component).toBeInTheDocument()
        await expect(component).toHaveClass('design-component--size--contain')
        await expect(component).toHaveClass('design-component--type--image')

        await step('Switch source to Icon', async () => {
          const iconBtn = canvas.getByRole('button', { name: 'Icon' })
          await userEvent.click(iconBtn)
          await expect(component).toHaveClass('design-component--type--outlined')
          await expect(component).toHaveClass('material-symbols-outlined')
          expect(component?.textContent?.trim()).toBe('home')
        })

        await step('Switch source to Flag', async () => {
          const flagBtn = canvas.getByRole('button', { name: 'Flag' })
          await userEvent.click(flagBtn)
          await expect(component).toHaveClass('design-component--type--flag')
        })

        await step('Switch source to Image 2', async () => {
          const img2Btn = canvas.getByRole('button', { name: 'Image 2' })
          await userEvent.click(img2Btn)
          await expect(component).toHaveClass('design-component--type--image')
        })

        await step('Clear source with null', async () => {
          const clearBtn = canvas.getByRole('button', { name: 'Clear' })
          await userEvent.click(clearBtn)
          await expect(component).not.toHaveClass('design-component--type--image')
          await expect(component).not.toHaveClass('design-component--type--outlined')
          await expect(component).not.toHaveClass('design-component--type--flag')
        })

        await step('Switch back to Image 1', async () => {
          const img1Btn = canvas.getByRole('button', { name: 'Image 1' })
          await userEvent.click(img1Btn)
          await expect(component).toHaveClass('design-component--type--image')
        })
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Image'} type={'image'}/>
<StorybookDescriptions componentName={'Image'} type={'value'}/>
<StorybookDescriptions componentName={'Image'} type={'flag'}/>
<Canvas of={Component.ImageType}/>
<Canvas of={Component.ImageIcons}/>
<Canvas of={Component.ImageFlagsAndColors}/>
<Canvas of={Component.ImageBinaryAndFile}/>

<StorybookDescriptions componentName={'Image'} type={'img-tag'}/>
<Canvas of={Component.ImageTagImg}/>
<Canvas of={Component.ImagePictureAndLoading}/>

<StorybookDescriptions componentName={'Image'} type={'size'}/>
<Canvas of={Component.ImageSize}/>
<Canvas of={Component.ImageBackground}/>

<StorybookDescriptions componentName={'Image'} type={'adaptive'}/>
<Canvas of={Component.ImageAdaptive}/>
<Canvas of={Component.ImageStates}/>
    `,
    events: `
<StorybookDescriptions componentName={'Image'} type={'event.load'}/>
<Canvas of={Component.ImageLoadAndExpose}/>
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
