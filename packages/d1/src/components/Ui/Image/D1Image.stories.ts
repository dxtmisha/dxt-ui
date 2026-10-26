import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Image from './D1Image.vue'
import { ImageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { demoPdf, image1, image2, phone1, phone2, phone3 } from '@dxtmisha/wiki/media'
import type { ImageEventData } from '@dxtmisha/constructor/Image'
import { expect, within, userEvent } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/Image',
  component: D1Image,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: ImageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: ImageWikiStorybook.getWiki(),
  args: ImageWikiStorybook.getValues()
} satisfies Meta<typeof D1Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {
    value: 'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-sunset-images-free-download-free-landscape-wallpapers-image_2913889.jpg',
    tagImg: true,
    disabled: false,
    hide: false,
    turn: false,
    alt: '',
    size: 'auto',
    x: '',
    y: '',
    lazy: true,
    fetchPriority: 'high'
  },

  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1Image },
    setup: () => ({ args }),
    template: `
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <D1Image v-bind="args"/>
      </div>
    `
  })
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const ImageType: Story = {
  name: 'Тип значения',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1,
        demoPdf
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <D1Image value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Flag</div>
            <D1Image value="flag-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <D1Image :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <D1Image :value="demoPdf"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">image: prefix</div>
            <D1Image value="image:custom-logo.png"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(5)

    // 1. Icon: type outlined class, material font ligature and role img
    await expect(images[0]).toHaveClass('d1-image--type--outlined')
    await expect(images[0]).toHaveClass('material-symbols-outlined')
    expect(images[0].textContent?.trim()).toBe('home')
    await expect(images[0]).toHaveAttribute('role', 'img')

    // 2. Flag: type flag class and background rendering
    await expect(images[1]).toHaveClass('d1-image--type--flag')
    await expect(images[1]).toHaveClass('d1-image--background')

    // 3. Image: type image class and background rendering
    await expect(images[2]).toHaveClass('d1-image--type--image')
    await expect(images[2]).toHaveClass('d1-image--background')

    // 4. PDF: type pdf class and embedded <object> element
    await expect(images[3]).toHaveClass('d1-image--type--pdf')
    const pdfObject = images[3].querySelector('object')
    await expect(pdfObject).toBeInTheDocument()
    await expect(pdfObject).toHaveAttribute('data')

    // 5. Explicit image: prefix parsed by ImageSource
    await expect(images[4]).toHaveClass('d1-image--type--image')
    await expect(images[4]).toHaveClass('d1-image--background')
  }
}
export const ImageSize: Story = {
  name: 'Отображение',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <D1Image :value="image1" size="auto" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <D1Image :value="image1" size="contain" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <D1Image :value="image1" size="cover" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <D1Image :value="image1" :coordinator="[60, 10, 10, 40]" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <D1Image :value="image1" x="20%" y="-10%" tag-img/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(5)

    // 1. Size modes via classes
    await expect(images[0]).toHaveClass('d1-image--size--auto')
    await expect(images[1]).toHaveClass('d1-image--size--contain')
    await expect(images[2]).toHaveClass('d1-image--size--cover')

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
  }
}
export const ImageTagImg: Story = {
  name: 'Использование тега img',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Background (default)</div>
            <D1Image :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + alt</div>
            <D1Image :value="image1" tag-img alt="Example image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + lazy + srcset</div>
            <D1Image :value="image1" tag-img lazy alt="Responsive image" :srcset="{ '1x': image1, '2x': image1 }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + picture</div>
            <D1Image :value="image1" tag-img alt="Adaptive image" :picture="{ 768: image1, 1024: image1 }"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(4)

    // 1. Background mode: no img element, uses background class
    await expect(images[0]).toHaveClass('d1-image--background')
    await expect(images[0].querySelector('img')).toBeNull()

    // 2. Tag img with alt: img element, accessible ARIA attributes
    await expect(images[1]).toHaveClass('d1-image--img')
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
  }
}
export const ImageAdaptive: Story = {
  name: 'Адаптированные изображения',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        phone1,
        phone2,
        phone3
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone1" adaptive object-width="76.2" adaptive-group="phones" adaptive-always/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone2" adaptive object-width="71.9" adaptive-group="phones" adaptive-always/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone3" adaptive object-width="129.9" object-height="160" adaptive-group="tablets" tag-img/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(3)

    // Verify adaptive modifier class on all components
    images.forEach((image) => {
      expect(image).toHaveClass('d1-image--adaptive')
    })

    // Background vs tag-img in adaptive mode
    await expect(images[0]).toHaveClass('d1-image--background')
    await expect(images[1]).toHaveClass('d1-image--background')
    await expect(images[2]).toHaveClass('d1-image--img')
    await expect(images[2].querySelector('img')).toBeInTheDocument()
  }
}
export const ImageIcons: Story = {
  name: 'Стили иконок Material',
  render: () => ({
    components: { D1Image },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">outlined (default)</div>
            <D1Image value="outlined-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">round</div>
            <D1Image value="round-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">sharp</div>
            <D1Image value="sharp-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">filled</div>
            <D1Image value="filled-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">two-tone</div>
            <D1Image value="two-tone-home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">material ($home)</div>
            <D1Image value="$home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">public (@star)</div>
            <D1Image value="@star" url="https://example.com/icons/"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(7)

    // 1. Outlined Material Symbol
    await expect(images[0]).toHaveClass('d1-image--type--outlined')
    await expect(images[0]).toHaveClass('material-symbols-outlined')
    expect(images[0].textContent?.trim()).toBe('home')

    // 2. Rounded Material Symbol
    await expect(images[1]).toHaveClass('d1-image--type--round')
    await expect(images[1]).toHaveClass('material-symbols-rounded')
    expect(images[1].textContent?.trim()).toBe('home')

    // 3. Sharp Material Symbol
    await expect(images[2]).toHaveClass('d1-image--type--sharp')
    await expect(images[2]).toHaveClass('material-symbols-sharp')
    expect(images[2].textContent?.trim()).toBe('home')

    // 4. Filled Material Icon
    await expect(images[3]).toHaveClass('d1-image--type--filled')
    await expect(images[3]).toHaveClass('material-icons')
    expect(images[3].textContent?.trim()).toBe('home')

    // 5. Two-tone Material Icon
    await expect(images[4]).toHaveClass('d1-image--type--two-tone')
    await expect(images[4]).toHaveClass('material-icons-two-tone')
    expect(images[4].textContent?.trim()).toBe('home')

    // 6. Material design shorthand ($home)
    await expect(images[5]).toHaveClass('d1-image--type--material')
    await expect(images[5]).toHaveClass('material-icons')
    expect(images[5].textContent?.trim()).toBe('home')

    // 7. Public icon (@star) with custom url
    await expect(images[6]).toHaveClass('d1-image--type--public')
  }
}
export const ImageFlagsAndColors: Story = {
  name: 'Флаги и сплошные цвета',
  render: () => ({
    components: { D1Image },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-us</div>
            <D1Image value="flag-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">flag-vn</div>
            <D1Image value="flag-vn"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-us (compressed)</div>
            <D1Image value="f-us"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">f-de (compressed)</div>
            <D1Image value="f-de"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#4CAF50</div>
            <D1Image value="#4CAF50"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">#2196F3</div>
            <D1Image value="#2196F3"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(6)

    // 1-2. Standard flag types
    await expect(images[0]).toHaveClass('d1-image--type--flag')
    await expect(images[1]).toHaveClass('d1-image--type--flag')

    // 3-4. Compressed flags rendered via ui-sys-flags classes
    await expect(images[2]).toHaveClass('d1-image--type--flag-compressed')
    await expect(images[2].querySelector('.ui-sys-flags--US')).toBeInTheDocument()

    await expect(images[3]).toHaveClass('d1-image--type--flag-compressed')
    await expect(images[3].querySelector('.ui-sys-flags--DE')).toBeInTheDocument()

    // 5-6. Solid hex colors applied via background-color style
    await expect(images[4]).toHaveClass('d1-image--type--color')
    expect(images[4].style.backgroundColor).toBeTruthy()

    await expect(images[5]).toHaveClass('d1-image--type--color')
    expect(images[5].style.backgroundColor).toBeTruthy()
  }
}
export const ImageBinaryAndFile: Story = {
  name: 'Объект File и буфер Uint8Array',
  render: () => ({
    components: { D1Image },
    setup() {
      const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#00897B"/><circle cx="60" cy="60" r="32" fill="#FFFFFF"/></svg>'
      const svgBytes = new Uint8Array([...svgMarkup].map(c => c.charCodeAt(0)))
      const svgFile = new File([svgMarkup], 'badge.svg', { type: 'image/svg+xml' })

      return {
        svgBytes,
        svgFile
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Uint8Array (background)</div>
            <D1Image :value="svgBytes" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Uint8Array (tag-img)</div>
            <D1Image :value="svgBytes" size="contain" tag-img alt="SVG from Uint8Array"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File (background)</div>
            <D1Image :value="svgFile" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">File (tag-img)</div>
            <D1Image :value="svgFile" size="contain" tag-img alt="SVG from File"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(4)

    // 1. Uint8Array background mode: type array, no img, role="img", aria-hidden
    await expect(images[0]).toHaveClass('d1-image--type--array')
    await expect(images[0].querySelector('img')).toBeNull()
    await expect(images[0]).toHaveAttribute('role', 'img')
    await expect(images[0]).toHaveAttribute('aria-hidden', 'true')

    // 2. Uint8Array tag-img mode: type array, img tag with alt attribute
    await expect(images[1]).toHaveClass('d1-image--type--array')
    await expect(images[1]).toHaveClass('d1-image--img')
    const arrayImg = images[1].querySelector('img')
    await expect(arrayImg).toBeInTheDocument()
    await expect(arrayImg).toHaveAttribute('alt', 'SVG from Uint8Array')

    // 3. File background mode: type file, no img
    await expect(images[2]).toHaveClass('d1-image--type--file')
    await expect(images[2].querySelector('img')).toBeNull()

    // 4. File tag-img mode: type file, img tag with alt attribute
    await expect(images[3]).toHaveClass('d1-image--type--file')
    await expect(images[3]).toHaveClass('d1-image--img')
    const fileImg = images[3].querySelector('img')
    await expect(fileImg).toHaveAttribute('alt', 'SVG from File')
  }
}
export const ImageStates: Story = {
  name: 'Визуальные состояния (turn, disabled, hide)',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Default</div>
            <D1Image value="expand_more"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn</div>
            <D1Image value="expand_more" turn/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">disabled</div>
            <D1Image value="expand_more" disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">turn + disabled</div>
            <D1Image value="expand_more" turn disabled/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">hide</div>
            <D1Image value="expand_more" hide/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">Image + turn</div>
            <D1Image :value="image1" size="cover" turn/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--sm">
            <div class="wiki-storybook-item__label">static</div>
            <D1Image value="expand_more" static/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(7)

    // 0. Default state: clean classes without modifier flags
    await expect(images[0]).not.toHaveClass('d1-image--turn')
    await expect(images[0]).not.toHaveClass('d1-image--disabled')
    await expect(images[0]).not.toHaveClass('d1-image--hide')
    await expect(images[0]).not.toHaveClass('d1-image--static')

    // 1. turn modifier
    await expect(images[1]).toHaveClass('d1-image--turn')

    // 2. disabled modifier
    await expect(images[2]).toHaveClass('d1-image--disabled')

    // 3. combined turn + disabled modifiers
    await expect(images[3]).toHaveClass('d1-image--turn')
    await expect(images[3]).toHaveClass('d1-image--disabled')

    // 4. hide modifier
    await expect(images[4]).toHaveClass('d1-image--hide')

    // 5. Image with turn and cover size
    await expect(images[5]).toHaveClass('d1-image--turn')
    await expect(images[5]).toHaveClass('d1-image--size--cover')

    // 6. static positioning modifier
    await expect(images[6]).toHaveClass('d1-image--static')
  }
}
export const ImageBackground: Story = {
  name: 'Режимы фона и кадрирование coordinator',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: contain</div>
            <D1Image :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: cover</div>
            <D1Image :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator [25]</div>
            <D1Image :value="image1" :coordinator="[25]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator [20, 35]</div>
            <D1Image :value="image1" :coordinator="[20, 35]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator [10, 25, 40]</div>
            <D1Image :value="image1" :coordinator="[10, 25, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">bg: x, y</div>
            <D1Image :value="image1" size="cover" x="20%" y="80%"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
    await expect(images.length).toBe(6)

    // All items use pure CSS background rendering (no <img> tags)
    images.forEach((image) => {
      expect(image.querySelector('img')).toBeNull()
      expect(image).toHaveClass('d1-image--background')
    })

    // Size classes
    await expect(images[0]).toHaveClass('d1-image--size--contain')
    await expect(images[1]).toHaveClass('d1-image--size--cover')

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
  }
}
export const ImagePictureAndLoading: Story = {
  name: 'Источники picture, декодирование и приоритет',
  render: () => ({
    components: { D1Image },
    setup() {
      return {
        image1,
        image2,
        pictureSources: [
          { src: image2, media: '(width >= 640px)', type: 'image/jpeg' },
          { src: image1, media: '(width >= 320px)', type: 'image/jpeg' }
        ]
      }
    },
    template: `
        
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">picture (array)</div>
            <D1Image :value="image1" :picture="pictureSources" tag-img alt="Art direction picture"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">srcset (width keys)</div>
            <D1Image :value="image1" :srcset="{ 320: image1, 640: image2 }" tag-img alt="Width descriptor srcset"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">decoding="async" + high</div>
            <D1Image :value="image1" tag-img decoding="async" fetch-priority="high" alt="Async high priority"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">lazy + preload-offset</div>
            <D1Image :value="image2" tag-img lazy preload-offset="512px" decoding="async" fetch-priority="low" alt="Lazy preloaded"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll<HTMLElement>('.d1-image')
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
  }
}
export const ImageLoadAndExpose: Story = {
  name: 'Событие load и публичные методы',
  render: () => ({
    components: { D1Image },
    setup() {
      const imageRef = ref()
      const currentSource = ref<string | null>(image1)
      const loadEventInfo = ref('Waiting for load...')
      const exposedType = ref('')

      const onLoad = (event: ImageEventData) => {
        const dimensions = typeof event.image === 'object' && event.image
          ? `${event.image.width}x${event.image.height}`
          : String(event.image ?? '')
        loadEventInfo.value = `type: ${event.type}, data: ${dimensions}`
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
    },
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
            <D1Image ref="imageRef" :value="currentSource" size="contain" @load="onLoad"/>
          </div>
        </div>
      
    `
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const component = canvasElement.querySelector<HTMLElement>('.d1-image')
    await expect(component).toBeInTheDocument()
    await expect(component).toHaveClass('d1-image--size--contain')
    await expect(component).toHaveClass('d1-image--type--image')

    await step('Switch source to Icon', async () => {
      const iconBtn = canvas.getByRole('button', { name: 'Icon' })
      await userEvent.click(iconBtn)
      await expect(component).toHaveClass('d1-image--type--outlined')
      await expect(component).toHaveClass('material-symbols-outlined')
      expect(component?.textContent?.trim()).toBe('home')
    })

    await step('Switch source to Flag', async () => {
      const flagBtn = canvas.getByRole('button', { name: 'Flag' })
      await userEvent.click(flagBtn)
      await expect(component).toHaveClass('d1-image--type--flag')
    })

    await step('Switch source to Image 2', async () => {
      const img2Btn = canvas.getByRole('button', { name: 'Image 2' })
      await userEvent.click(img2Btn)
      await expect(component).toHaveClass('d1-image--type--image')
    })

    await step('Clear source with null', async () => {
      const clearBtn = canvas.getByRole('button', { name: 'Clear' })
      await userEvent.click(clearBtn)
      await expect(component).not.toHaveClass('d1-image--type--image')
      await expect(component).not.toHaveClass('d1-image--type--outlined')
      await expect(component).not.toHaveClass('d1-image--type--flag')
    })

    await step('Switch back to Image 1', async () => {
      const img1Btn = canvas.getByRole('button', { name: 'Image 1' })
      await userEvent.click(img1Btn)
      await expect(component).toHaveClass('d1-image--type--image')
    })
  }
}
// :story-items [!] System label / Системная метка
