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
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(4)

        // 1. Icon: type outlined class, material font ligature and role img
        await expect(images[0]).toHaveClass('design-component--type--outlined')
        await expect(images[0]).toHaveClass('material-symbols-outlined')
        expect(images[0].textContent?.trim()).toBe('home')
        await expect(images[0]).toHaveAttribute('role', 'img')
        await expect(images[0]).toHaveAttribute('aria-hidden', 'true')

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
        await expect(sources[0]).toHaveAttribute('media', '(width >= 1024px)')
        await expect(sources[1]).toHaveAttribute('media', '(width >= 768px)')
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
            <DesignComponent :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <DesignComponent :value="phone3" adaptive object-width="129.9" tag-img/>
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
      id: 'ImageTestIcons',
      name: {
        en: 'Test: Material icon styles',
        ru: 'Тест: Стили иконок Material'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">default (home)</div>
            <DesignComponent value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">outlined</div>
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
            <div class="wiki-storybook-item__label">material-home</div>
            <DesignComponent value="material-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">public (@star + url)</div>
            <DesignComponent value="@star" url="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">icon + alt</div>
            <DesignComponent value="outlined-home" alt="Home navigation"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">icon + turn + disabled</div>
            <DesignComponent value="round-home" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">image: prefix</div>
            <DesignComponent :value="'image:' + image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">empty image: prefix</div>
            <DesignComponent value="image:   "/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(13)

        // 0. Default unprefixed Material Symbol (outlined)
        await expect(images[0]).toHaveClass('design-component--type--outlined')
        await expect(images[0]).toHaveClass('material-symbols-outlined')
        expect(images[0].textContent?.trim()).toBe('home')
        await expect(images[0]).toHaveAttribute('role', 'img')
        await expect(images[0]).toHaveAttribute('aria-hidden', 'true')

        // 1. Outlined Material Symbol (explicit prefix)
        await expect(images[1]).toHaveClass('design-component--type--outlined')
        await expect(images[1]).toHaveClass('material-symbols-outlined')
        expect(images[1].textContent?.trim()).toBe('home')

        // 2. Rounded Material Symbol
        await expect(images[2]).toHaveClass('design-component--type--round')
        await expect(images[2]).toHaveClass('material-symbols-rounded')
        expect(images[2].textContent?.trim()).toBe('home')

        // 3. Sharp Material Symbol
        await expect(images[3]).toHaveClass('design-component--type--sharp')
        await expect(images[3]).toHaveClass('material-symbols-sharp')
        expect(images[3].textContent?.trim()).toBe('home')

        // 4. Filled Material Icon
        await expect(images[4]).toHaveClass('design-component--type--filled')
        await expect(images[4]).toHaveClass('material-icons')
        expect(images[4].textContent?.trim()).toBe('home')

        // 5. Two-tone Material Icon
        await expect(images[5]).toHaveClass('design-component--type--two-tone')
        await expect(images[5]).toHaveClass('material-icons-two-tone')
        expect(images[5].textContent?.trim()).toBe('home')

        // 6. Material design shorthand ($home)
        await expect(images[6]).toHaveClass('design-component--type--material')
        await expect(images[6]).toHaveClass('material-icons')
        expect(images[6].textContent?.trim()).toBe('home')

        // 7. Material design explicit prefix (material-home)
        await expect(images[7]).toHaveClass('design-component--type--material')
        await expect(images[7]).toHaveClass('material-icons')
        expect(images[7].textContent?.trim()).toBe('home')

        // 8. Public icon (@star) with custom url
        await expect(images[8]).toHaveClass('design-component--type--public')

        // 9. Icon with accessible alt label (aria-label instead of aria-hidden)
        await expect(images[9]).toHaveClass('design-component--type--outlined')
        await expect(images[9]).toHaveAttribute('role', 'img')
        await expect(images[9]).toHaveAttribute('aria-label', 'Home navigation')
        await expect(images[9]).not.toHaveAttribute('aria-hidden')

        // 10. Icon combined with turn and disabled states
        await expect(images[10]).toHaveClass('design-component--type--round')
        await expect(images[10]).toHaveClass('design-component--turn')
        await expect(images[10]).toHaveClass('design-component--disabled')

        // 11. Explicit image: prefix with valid source
        await expect(images[11]).toHaveClass('design-component--type--image')
        await expect(images[11]).toHaveClass('design-component--background')
        await expect(images[11]).toHaveClass('design-component--size--contain')

        // 12. Empty image: prefix prevents fallback to outlined icon
        await expect(images[12]).not.toHaveClass('design-component--type--image')
        await expect(images[12]).not.toHaveClass('design-component--type--outlined')
        expect(images[12].textContent?.trim()).toBe('')
      `
    },
    {
      id: 'ImageTestFlagsAndColors',
      name: {
        en: 'Test: Flags and solid colors',
        ru: 'Тест: Флаги и сплошные цвета'
      },
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-us</div>
            <DesignComponent value="flag-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-vn + url + alt</div>
            <DesignComponent value="flag-vn" url="/flags/" alt="Vietnam flag"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-us + disabled</div>
            <DesignComponent value="flag-us" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-us + turn + disabled</div>
            <DesignComponent value="flag-us" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-us (compressed)</div>
            <DesignComponent value="f-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-de + disabled</div>
            <DesignComponent value="f-de" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-vn + turn + disabled</div>
            <DesignComponent value="f-vn" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#4CAF50</div>
            <DesignComponent value="#4CAF50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#2196F3 + disabled</div>
            <DesignComponent value="#2196F3" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#FF9800 + turn + disabled + alt</div>
            <DesignComponent value="#FF9800" turn disabled alt="Orange swatch"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(10)

        // 0-3. Standard flag types and combinations with url, alt, turn, disabled
        await expect(images[0]).toHaveClass('design-component--type--flag')
        await expect(images[0]).toHaveAttribute('aria-hidden', 'true')

        await expect(images[1]).toHaveClass('design-component--type--flag')
        await expect(images[1]).toHaveAttribute('aria-label', 'Vietnam flag')
        await expect(images[1]).not.toHaveAttribute('aria-hidden')

        await expect(images[2]).toHaveClass('design-component--type--flag')
        await expect(images[2]).toHaveClass('design-component--disabled')

        await expect(images[3]).toHaveClass('design-component--type--flag')
        await expect(images[3]).toHaveClass('design-component--turn')
        await expect(images[3]).toHaveClass('design-component--disabled')

        // 4-6. Compressed flags rendered via ui-sys-flags classes and combined with turn, disabled
        await expect(images[4]).toHaveClass('design-component--type--flag-compressed')
        await expect(images[4].querySelector('.ui-sys-flags--US')).toBeInTheDocument()

        await expect(images[5]).toHaveClass('design-component--type--flag-compressed')
        await expect(images[5]).toHaveClass('design-component--disabled')
        await expect(images[5].querySelector('.ui-sys-flags--DE')).toBeInTheDocument()

        await expect(images[6]).toHaveClass('design-component--type--flag-compressed')
        await expect(images[6]).toHaveClass('design-component--turn')
        await expect(images[6]).toHaveClass('design-component--disabled')
        await expect(images[6].querySelector('.ui-sys-flags--VN')).toBeInTheDocument()

        // 7-9. Solid hex colors applied via background-color style and combined with turn, disabled, alt
        await expect(images[7]).toHaveClass('design-component--type--color')
        expect(images[7].style.backgroundColor).toBeTruthy()

        await expect(images[8]).toHaveClass('design-component--type--color')
        await expect(images[8]).toHaveClass('design-component--disabled')
        expect(images[8].style.backgroundColor).toBeTruthy()

        await expect(images[9]).toHaveClass('design-component--type--color')
        await expect(images[9]).toHaveClass('design-component--turn')
        await expect(images[9]).toHaveClass('design-component--disabled')
        await expect(images[9]).toHaveAttribute('aria-label', 'Orange swatch')
        expect(images[9].style.backgroundColor).toBeTruthy()
      `
    },
    {
      id: 'ImageTestBinaryAndFile',
      name: {
        en: 'Test: File, PDF File, Uint8Array and ArrayBuffer',
        ru: 'Тест: Объекты File, PDF File, Uint8Array и ArrayBuffer'
      },
      setup: `
      const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#00897B"/><circle cx="60" cy="60" r="32" fill="#FFFFFF"/></svg>'
      const svgBytes = new Uint8Array([...svgMarkup].map(c => c.charCodeAt(0)))
      const svgBuffer = svgBytes.buffer.slice(0)
      const svgFile = new File([svgMarkup], 'badge.svg', { type: 'image/svg+xml' })
      const pdfContent = '%PDF-1.4\\n1 0 obj\\n<< /Type /Catalog /Pages 2 0 R >>\\nendobj\\n2 0 obj\\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\\nendobj\\n3 0 obj\\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 150] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\\nendobj\\n4 0 obj\\n<< /Length 40 >>\\nstream\\nBT\\n/F1 18 Tf\\n24 70 Td\\n(DXT UI PDF) Tj\\nET\\nendstream\\nendobj\\n5 0 obj\\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\\nendobj\\nxref\\n0 6\\n0000000000 65535 f \\n0000000009 00000 n \\n0000000058 00000 n \\n0000000115 00000 n \\n0000000241 00000 n \\n0000000331 00000 n \\ntrailer\\n<< /Size 6 /Root 1 0 R >>\\nstartxref\\n401\\n%%EOF'
      const pdfFile = new File([pdfContent], 'document.pdf', { type: 'application/pdf' })

      return {
        svgBytes,
        svgBuffer,
        svgFile,
        pdfFile
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
            <div class="wiki-storybook-item__label">ArrayBuffer (background)</div>
            <DesignComponent :value="svgBuffer" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">ArrayBuffer (tag-img + disabled)</div>
            <DesignComponent :value="svgBuffer" size="contain" tag-img disabled turn alt="SVG from ArrayBuffer"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File (background)</div>
            <DesignComponent :value="svgFile" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File (tag-img)</div>
            <DesignComponent :value="svgFile" size="contain" tag-img alt="SVG from File"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File + disabled + turn</div>
            <DesignComponent :value="svgFile" size="cover" disabled turn alt="Disabled file image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">PDF File</div>
            <DesignComponent :value="pdfFile"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(8)

        // 0. Uint8Array background mode: type array, no img, role="img", aria-hidden
        await expect(images[0]).toHaveClass('design-component--type--array')
        await expect(images[0]).toHaveClass('design-component--size--contain')
        await expect(images[0].querySelector('img')).toBeNull()
        await expect(images[0]).toHaveAttribute('role', 'img')
        await expect(images[0]).toHaveAttribute('aria-hidden', 'true')

        // 1. Uint8Array tag-img mode: type array, img tag with alt attribute
        await expect(images[1]).toHaveClass('design-component--type--array')
        await expect(images[1]).toHaveClass('design-component--img')
        await expect(images[1]).toHaveClass('design-component--size--contain')
        const arrayImg = images[1].querySelector('img')
        await expect(arrayImg).toBeInTheDocument()
        await expect(arrayImg).toHaveAttribute('alt', 'SVG from Uint8Array')

        // 2. ArrayBuffer background mode
        await expect(images[2]).toHaveClass('design-component--type--array')
        await expect(images[2]).toHaveClass('design-component--size--cover')
        await expect(images[2].querySelector('img')).toBeNull()

        // 3. ArrayBuffer tag-img + disabled + turn
        await expect(images[3]).toHaveClass('design-component--type--array')
        await expect(images[3]).toHaveClass('design-component--img')
        await expect(images[3]).toHaveClass('design-component--disabled')
        await expect(images[3]).toHaveClass('design-component--turn')
        await expect(images[3].querySelector('img')).toHaveAttribute('alt', 'SVG from ArrayBuffer')

        // 4. File background mode: type file, no img
        await expect(images[4]).toHaveClass('design-component--type--file')
        await expect(images[4]).toHaveClass('design-component--size--contain')
        await expect(images[4].querySelector('img')).toBeNull()

        // 5. File tag-img mode: type file, img tag with alt attribute
        await expect(images[5]).toHaveClass('design-component--type--file')
        await expect(images[5]).toHaveClass('design-component--img')
        const fileImg = images[5].querySelector('img')
        await expect(fileImg).toHaveAttribute('alt', 'SVG from File')

        // 6. File background + disabled + turn + alt
        await expect(images[6]).toHaveClass('design-component--type--file')
        await expect(images[6]).toHaveClass('design-component--size--cover')
        await expect(images[6]).toHaveClass('design-component--disabled')
        await expect(images[6]).toHaveClass('design-component--turn')
        await expect(images[6]).toHaveAttribute('aria-label', 'Disabled file image')

        // 7. PDF File instance: type pdf and embedded <object>
        await expect(images[7]).toHaveClass('design-component--type--pdf')
        await expect(images[7].querySelector('object')).toBeInTheDocument()
      `
    },
    {
      id: 'ImageTestStates',
      name: {
        en: 'Test: Visual states and combinations (turn, disabled, hide, static)',
        ru: 'Тест: Визуальные состояния и комбинации (turn, disabled, hide, static)'
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
            <div class="wiki-storybook-item__label">hide</div>
            <DesignComponent value="expand_more" hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">static</div>
            <DesignComponent value="expand_more" static/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn + disabled</div>
            <DesignComponent value="expand_more" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn + hide</div>
            <DesignComponent value="expand_more" turn hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled + hide</div>
            <DesignComponent value="expand_more" disabled hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn + disabled + hide</div>
            <DesignComponent value="expand_more" turn disabled hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">static + turn + disabled</div>
            <DesignComponent value="expand_more" static turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">static + turn + disabled + hide</div>
            <DesignComponent value="expand_more" static turn disabled hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Image (bg) + turn + disabled</div>
            <DesignComponent :value="image1" size="cover" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Image (tag-img) + turn + disabled</div>
            <DesignComponent :value="image1" tag-img size="contain" turn disabled alt="Rotated disabled image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Image (tag-img) + static</div>
            <DesignComponent :value="image1" tag-img static size="contain" alt="Static layout image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Image (tag-img) + static + turn + disabled</div>
            <DesignComponent :value="image1" tag-img static turn disabled size="cover" alt="Static rotated disabled"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(15)

        // 0. Default state: clean classes without modifier flags
        await expect(images[0]).not.toHaveClass('design-component--turn')
        await expect(images[0]).not.toHaveClass('design-component--disabled')
        await expect(images[0]).not.toHaveClass('design-component--hide')
        await expect(images[0]).not.toHaveClass('design-component--static')

        // 1. turn modifier
        await expect(images[1]).toHaveClass('design-component--turn')
        await expect(images[1]).not.toHaveClass('design-component--disabled')

        // 2. disabled modifier
        await expect(images[2]).toHaveClass('design-component--disabled')
        await expect(images[2]).not.toHaveClass('design-component--turn')

        // 3. hide modifier
        await expect(images[3]).toHaveClass('design-component--hide')

        // 4. static positioning modifier
        await expect(images[4]).toHaveClass('design-component--static')

        // 5. turn + disabled
        await expect(images[5]).toHaveClass('design-component--turn')
        await expect(images[5]).toHaveClass('design-component--disabled')

        // 6. turn + hide
        await expect(images[6]).toHaveClass('design-component--turn')
        await expect(images[6]).toHaveClass('design-component--hide')

        // 7. disabled + hide
        await expect(images[7]).toHaveClass('design-component--disabled')
        await expect(images[7]).toHaveClass('design-component--hide')

        // 8. turn + disabled + hide
        await expect(images[8]).toHaveClass('design-component--turn')
        await expect(images[8]).toHaveClass('design-component--disabled')
        await expect(images[8]).toHaveClass('design-component--hide')

        // 9. static + turn + disabled
        await expect(images[9]).toHaveClass('design-component--static')
        await expect(images[9]).toHaveClass('design-component--turn')
        await expect(images[9]).toHaveClass('design-component--disabled')

        // 10. static + turn + disabled + hide
        await expect(images[10]).toHaveClass('design-component--static')
        await expect(images[10]).toHaveClass('design-component--turn')
        await expect(images[10]).toHaveClass('design-component--disabled')
        await expect(images[10]).toHaveClass('design-component--hide')

        // 11. Image (background) + size="cover" + turn + disabled
        await expect(images[11]).toHaveClass('design-component--type--image')
        await expect(images[11]).toHaveClass('design-component--background')
        await expect(images[11]).toHaveClass('design-component--size--cover')
        await expect(images[11]).toHaveClass('design-component--turn')
        await expect(images[11]).toHaveClass('design-component--disabled')

        // 12. Image (tag-img) + size="contain" + turn + disabled
        await expect(images[12]).toHaveClass('design-component--type--image')
        await expect(images[12]).toHaveClass('design-component--img')
        await expect(images[12]).toHaveClass('design-component--size--contain')
        await expect(images[12]).toHaveClass('design-component--turn')
        await expect(images[12]).toHaveClass('design-component--disabled')
        await expect(images[12].querySelector('img')).toHaveAttribute('alt', 'Rotated disabled image')

        // 13. Image (tag-img) + static + size="contain"
        await expect(images[13]).toHaveClass('design-component--img')
        await expect(images[13]).toHaveClass('design-component--static')
        await expect(images[13]).toHaveClass('design-component--size--contain')
        await expect(images[13].querySelector('img')).toHaveAttribute('alt', 'Static layout image')

        // 14. Image (tag-img) + static + turn + disabled + size="cover"
        await expect(images[14]).toHaveClass('design-component--img')
        await expect(images[14]).toHaveClass('design-component--static')
        await expect(images[14]).toHaveClass('design-component--turn')
        await expect(images[14]).toHaveClass('design-component--disabled')
        await expect(images[14]).toHaveClass('design-component--size--cover')
      `
    },
    {
      id: 'ImageTestBackground',
      name: {
        en: 'Test: Background modes, coordinator and positioning',
        ru: 'Тест: Режимы фона, кадрирование coordinator и позиционирование'
      },
      setup: `
      return {
        image1
      }
      `,
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: auto</div>
            <DesignComponent :value="image1" size="auto"/>
          </div>
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
            <div class="wiki-storybook-item__label">coordinator [15, 20, 25, 30]</div>
            <DesignComponent :value="image1" :coordinator="[15, 20, 25, 30]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: x only</div>
            <DesignComponent :value="image1" size="cover" x="20%"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: y only</div>
            <DesignComponent :value="image1" size="cover" y="80%"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: x + y</div>
            <DesignComponent :value="image1" size="cover" x="20%" y="80%"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator priority over x, y</div>
            <DesignComponent :value="image1" :coordinator="[10, 20, 30, 40]" x="10%" y="90%"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + coordinator [10, 25, 40]</div>
            <DesignComponent :value="image1" tag-img :coordinator="[10, 25, 40]" alt="Cropped img"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + x only</div>
            <DesignComponent :value="image1" tag-img size="cover" x="30%" alt="Offset X img"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + y only</div>
            <DesignComponent :value="image1" tag-img size="cover" y="70%" alt="Offset Y img"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(14)

        // 0-10. Background rendering items (no <img> tags)
        for (let index = 0; index <= 10; index++) {
          expect(images[index].querySelector('img')).toBeNull()
          expect(images[index]).toHaveClass('design-component--background')
        }

        // Size classes
        await expect(images[0]).toHaveClass('design-component--size--auto')
        await expect(images[1]).toHaveClass('design-component--size--contain')
        await expect(images[2]).toHaveClass('design-component--size--cover')

        // Coordinator 1, 2, 3, 4 values: verifies computed background positioning
        expect(images[3].style.backgroundPositionX).toBe('50%')
        expect(images[3].style.backgroundPositionY).toBe('50%')

        expect(images[4].style.backgroundPositionX).toBe('50%')
        expect(images[4].style.backgroundPositionY).toBe('50%')

        expect(images[5].style.backgroundPositionX).toBe('50%')
        expect(images[5].style.backgroundPositionY).toBe('35%')

        expect(images[6].style.backgroundPositionX).toBe('55%')
        expect(images[6].style.backgroundPositionY).toBe('45%')

        // x only, y only, and x + y positioning styles on root element
        expect(images[7].style.backgroundPositionX).toBe('20%')
        expect(images[7].style.backgroundPositionY).toBe('center')

        expect(images[8].style.backgroundPositionX).toBe('center')
        expect(images[8].style.backgroundPositionY).toBe('80%')

        expect(images[9].style.backgroundPositionX).toBe('20%')
        expect(images[9].style.backgroundPositionY).toBe('80%')

        // Coordinator takes priority over explicit x and y props ([10, 20, 30, 40] -> 60%, 40%)
        expect(images[10].style.backgroundPositionX).toBe('60%')
        expect(images[10].style.backgroundPositionY).toBe('40%')

        // 11-13. tag-img combined with coordinator, x only, and y only
        const img11 = images[11].querySelector('img')
        await expect(img11).toBeInTheDocument()
        expect(img11?.style.objectPosition).toBe('50% 35%')
        expect(img11?.style.getPropertyValue('--sys-transform-originX')).toBe('50%')
        expect(img11?.style.getPropertyValue('--sys-transform-originY')).toBe('35%')

        const img12 = images[12].querySelector('img')
        await expect(img12).toBeInTheDocument()
        expect(img12?.style.getPropertyValue('--sys-transform-originX')).toBe('30%')
        expect(img12?.style.getPropertyValue('--sys-transform-originY')).toBe('center')

        const img13 = images[13].querySelector('img')
        await expect(img13).toBeInTheDocument()
        expect(img13?.style.getPropertyValue('--sys-transform-originX')).toBe('center')
        expect(img13?.style.getPropertyValue('--sys-transform-originY')).toBe('70%')
      `
    },
    {
      id: 'ImageTestPictureAndLoading',
      name: {
        en: 'Test: Picture sources, srcset, decoding, priority and lazy loading',
        ru: 'Тест: Источники picture, srcset, декодирование, приоритет и ленивая загрузка'
      },
      setup: `
      return {
        image1,
        image2,
        pictureSources: [
          { src: image2, srcset: image2, media: '(width >= 640px)', type: 'image/jpeg', sizes: '100vw', width: 640, height: 480 },
          { src: image1, srcset: image1, media: '(width >= 320px)', type: 'image/jpeg', sizes: '50vw', width: 320, height: 240 }
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
            <div class="wiki-storybook-item__label">picture (record + CSS unit)</div>
            <DesignComponent :value="image1" :picture="{ '64rem': image2, '48rem': image1 }" tag-img lazy decoding="async" fetch-priority="high" alt="Breakpoint record picture"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">picture without tag-img</div>
            <DesignComponent :value="image1" :picture="{ 768: image2 }" alt="Background fallback"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">srcset (width keys)</div>
            <DesignComponent :value="image1" :srcset="{ 320: image1, 640: image2 }" tag-img alt="Width descriptor srcset"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">srcset (string)</div>
            <DesignComponent :value="image1" :srcset="image1 + ' 1x, ' + image2 + ' 2x'" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">decoding="sync" + high</div>
            <DesignComponent :value="image1" tag-img decoding="sync" fetch-priority="high" alt="Sync high priority"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">decoding="auto" + auto</div>
            <DesignComponent :value="image1" tag-img decoding="auto" fetch-priority="auto" alt="Auto decoding and priority"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">lazy + preload-offset (tag-img)</div>
            <DesignComponent :value="image2" tag-img lazy preload-offset="512px" decoding="async" fetch-priority="low" alt="Lazy preloaded"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">lazy + preload-offset (bg)</div>
            <DesignComponent :value="image2" lazy preload-offset="256px" size="contain" alt="Lazy background"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(9)

        // 0. Picture tag (array): source elements with media query, type, sizes, width, height
        expect(images[0].tagName.toLowerCase()).toBe('picture')
        const sources0 = images[0].querySelectorAll('source')
        await expect(sources0.length).toBe(2)
        await expect(sources0[0]).toHaveAttribute('media', '(width >= 640px)')
        await expect(sources0[0]).toHaveAttribute('type', 'image/jpeg')
        await expect(sources0[0]).toHaveAttribute('sizes', '100vw')
        await expect(sources0[0]).toHaveAttribute('width', '640')
        await expect(sources0[0]).toHaveAttribute('height', '480')
        await expect(images[0].querySelector('img')).toHaveAttribute('alt', 'Art direction picture')

        // 1. Picture tag (record with CSS unit keys) + lazy + decoding + fetchPriority
        expect(images[1].tagName.toLowerCase()).toBe('picture')
        const sources1 = images[1].querySelectorAll('source')
        await expect(sources1.length).toBe(2)
        await expect(sources1[0]).toHaveAttribute('media', '(width >= 64rem)')
        await expect(sources1[1]).toHaveAttribute('media', '(width >= 48rem)')
        const img1 = images[1].querySelector('img')
        await expect(img1).toHaveAttribute('loading')
        await expect(img1).toHaveAttribute('decoding', 'async')
        await expect(img1).toHaveAttribute('fetchpriority', 'high')

        // 2. Picture prop without tag-img falls back to span background mode
        expect(images[2].tagName.toLowerCase()).toBe('span')
        await expect(images[2]).toHaveClass('design-component--background')
        await expect(images[2].querySelector('img')).toBeNull()
        await expect(images[2]).toHaveAttribute('aria-label', 'Background fallback')

        // 3. Srcset object with width descriptor numbers (320w, 640w)
        const img3 = images[3].querySelector('img')
        await expect(img3).toHaveAttribute('alt', 'Width descriptor srcset')
        expect(img3?.getAttribute('srcset')).toContain('320w')
        expect(img3?.getAttribute('srcset')).toContain('640w')

        // 4. Srcset raw string and default empty alt when alt is omitted
        const img4 = images[4].querySelector('img')
        await expect(img4).toHaveAttribute('alt', '')
        expect(img4?.getAttribute('srcset')).toContain('1x')
        expect(img4?.getAttribute('srcset')).toContain('2x')

        // 5. Decoding="sync" and fetchPriority="high"
        const img5 = images[5].querySelector('img')
        await expect(img5).toHaveAttribute('decoding', 'sync')
        await expect(img5).toHaveAttribute('fetchpriority', 'high')
        await expect(img5).toHaveAttribute('alt', 'Sync high priority')

        // 6. Decoding="auto" and fetchPriority="auto"
        const img6 = images[6].querySelector('img')
        await expect(img6).toHaveAttribute('decoding', 'auto')
        await expect(img6).toHaveAttribute('fetchpriority', 'auto')
        await expect(img6).toHaveAttribute('alt', 'Auto decoding and priority')

        // 7. Lazy loading + preloadOffset + decoding="async" + fetchPriority="low" on tag-img
        const img7 = images[7].querySelector('img')
        await expect(img7).toHaveAttribute('loading')
        await expect(img7).toHaveAttribute('decoding', 'async')
        await expect(img7).toHaveAttribute('fetchpriority', 'low')
        await expect(img7).toHaveAttribute('alt', 'Lazy preloaded')

        // 8. Lazy loading + preloadOffset + size="contain" + alt on background mode
        await expect(images[8]).toHaveClass('design-component--type--image')
        await expect(images[8]).toHaveClass('design-component--size--contain')
        await expect(images[8]).toHaveAttribute('aria-label', 'Lazy background')
      `
    },
    {
      id: 'ImageTestAdaptiveCombinations',
      name: {
        en: 'Test: Adaptive scaling combinations',
        ru: 'Тест: Комбинации адаптивного масштабирования'
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
            <div class="wiki-storybook-item__label">objectWidth (X-axis)</div>
            <DesignComponent :value="phone1" adaptive object-width="76.2" adaptive-group="phones-x" adaptive-always/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">objectHeight (Y-axis)</div>
            <DesignComponent :value="phone2" adaptive object-height="150" adaptive-group="phones-y" adaptive-always/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">width + height + tag-img</div>
            <DesignComponent :value="phone3" adaptive object-width="129.9" object-height="160" adaptive-group="tablets-xy" adaptive-always tag-img alt="Adaptive tablet"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">adaptive + turn + disabled (bg)</div>
            <DesignComponent :value="phone1" adaptive object-width="76.2" adaptive-group="phones-state" adaptive-always turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">adaptive + turn + disabled (tag-img)</div>
            <DesignComponent :value="phone2" adaptive object-width="71.9" adaptive-group="phones-state" adaptive-always tag-img turn disabled alt="Adaptive rotated disabled"/>
          </div>
        </div>
      `,
      play: `
        const images = canvasElement.querySelectorAll<HTMLElement>('.design-component')
        await expect(images.length).toBe(5)

        // All items have adaptive class
        images.forEach((image) => {
          expect(image).toHaveClass('design-component--adaptive')
        })

        // 0. X-axis adaptive background
        await expect(images[0]).toHaveClass('design-component--background')

        // 1. Y-axis adaptive background (objectHeight only)
        await expect(images[1]).toHaveClass('design-component--background')

        // 2. Adaptive tag-img with both objectWidth and objectHeight
        await expect(images[2]).toHaveClass('design-component--img')
        await expect(images[2].querySelector('img')).toHaveAttribute('alt', 'Adaptive tablet')

        // 3. Adaptive background combined with turn and disabled
        await expect(images[3]).toHaveClass('design-component--background')
        await expect(images[3]).toHaveClass('design-component--turn')
        await expect(images[3]).toHaveClass('design-component--disabled')

        // 4. Adaptive tag-img combined with turn and disabled
        await expect(images[4]).toHaveClass('design-component--img')
        await expect(images[4]).toHaveClass('design-component--turn')
        await expect(images[4]).toHaveClass('design-component--disabled')
        await expect(images[4].querySelector('img')).toHaveAttribute('alt', 'Adaptive rotated disabled')
      `
    },
    {
      id: 'ImageTestLoadAndExpose',
      name: {
        en: 'Test: Load event and exposed methods',
        ru: 'Тест: Событие load и публичные методы'
      },
      setup: `
      const imageRef = ref()
      const currentSource = ref<string | null>(image1)
      const loadEventInfo = ref('Waiting for load...')
      const exposedType = ref('')
      const hasExposedData = ref(false)

      const updateExposed = () => {
        exposedType.value = String(imageRef.value?.getType?.() ?? '')
        hasExposedData.value = Boolean(imageRef.value?.getData?.())
      }

      const onLoad = (event: ImageEventData) => {
        const dimensions = typeof event.image === 'object' && event.image
          ? \`\${event.image.width}x\${event.image.height}\`
          : String(event.image ?? '')
        loadEventInfo.value = \`type: \${event.type}, data: \${dimensions}\`
        updateExposed()
      }

      return {
        image1,
        image2,
        imageRef,
        currentSource,
        loadEventInfo,
        exposedType,
        hasExposedData,
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
            <span class="exposed-value">Type: {{ exposedType }} | Data: {{ hasExposedData }}</span>
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
          const iconButton = canvas.getByRole('button', { name: 'Icon' })
          await userEvent.click(iconButton)
          await expect(component).toHaveClass('design-component--type--outlined')
          await expect(component).toHaveClass('material-symbols-outlined')
          expect(component?.textContent?.trim()).toBe('home')
        })

        await step('Switch source to Flag', async () => {
          const flagButton = canvas.getByRole('button', { name: 'Flag' })
          await userEvent.click(flagButton)
          await expect(component).toHaveClass('design-component--type--flag')
        })

        await step('Switch source to Image 2', async () => {
          const image2Button = canvas.getByRole('button', { name: 'Image 2' })
          await userEvent.click(image2Button)
          await expect(component).toHaveClass('design-component--type--image')
        })

        await step('Clear source with null', async () => {
          const clearButton = canvas.getByRole('button', { name: 'Clear' })
          await userEvent.click(clearButton)
          await expect(component).not.toHaveClass('design-component--type--image')
          await expect(component).not.toHaveClass('design-component--type--outlined')
          await expect(component).not.toHaveClass('design-component--type--flag')
        })

        await step('Switch back to Image 1', async () => {
          const image1Button = canvas.getByRole('button', { name: 'Image 1' })
          await userEvent.click(image1Button)
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
