import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1Image from './D1Image.vue'
import { ImageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import { demoPdf, image1, image2, phone1, phone2, phone3 } from '@dxtmisha/wiki/media'
import type { ImageEventData } from '@dxtmisha/constructor/Image'
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
        </div>
    `
  })
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
  })
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
  })
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
            <D1Image :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone3" adaptive object-width="129.9" tag-img/>
          </div>
        </div>
    `
  })
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
        </div>
    `
  })
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
  })
}
export const ImageBinaryAndFile: Story = {
  name: 'Объект File и буфер Uint8Array',
  render: () => ({
    components: { D1Image },
    setup() {
      const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#00897B"/><circle cx="60" cy="60" r="32" fill="#FFFFFF"/></svg>'
      const svgBytes = new TextEncoder().encode(svgMarkup)
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
  })
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
        </div>
    `
  })
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
  })
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
  })
}
export const ImageLoadAndExpose: Story = {
  name: 'Событие load и публичные методы',
  render: () => ({
    components: { D1Image },
    setup() {
      const currentSource = ref(image1)
      const loadEventInfo = ref('Waiting for load...')

      const onLoad = (event: ImageEventData) => {
        const dimensions = typeof event.image === 'object' && event.image
          ? `${event.image.width}x${event.image.height}`
          : String(event.image ?? '')
        loadEventInfo.value = `type: ${event.type}, data: ${dimensions}`
      }

      return {
        image1,
        image2,
        currentSource,
        loadEventInfo,
        onLoad
      }
    },
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
            <D1Image :value="currentSource" size="contain" @load="onLoad"/>
          </div>
        </div>
    `
  })
}
// :story-items [!] System label / Системная метка
