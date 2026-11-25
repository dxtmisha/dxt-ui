<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icons, isDomRuntime, isObjectNotArray } from '@dxtmisha/functional'
import { UsSvg, VnSvg } from '@dxtmisha/media/flags'
import type {
  ImageEventData,
  ImageExpose,
  ImagePictureList,
  ImageProps
} from '@dxtmisha/constructor/Image'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Sample image URL 1 / Тестовый URL изображения 1 */
const demoImage1 = 'https://picsum.photos/400/300?random=1'
/** Sample image URL 2 / Тестовый URL изображения 2 */
const demoImage2 = 'https://picsum.photos/600/400?random=2'
/** Sample portrait image URL / Тестовый URL портретного изображения */
const demoImagePortrait = 'https://picsum.photos/300/500?random=41'
/** Sample explicit image: prefixed source / Тестовый источник с явным префиксом image: */
const demoImageExplicit = `image:${demoImage1}`

/** Inline SVG markup for binary, File, and registered icon tests / SVG-разметка для тестов бинарных данных, File и зарегистрированных иконок */
const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H96C109.255 0 120 10.7452 120 24V96C120 109.255 109.255 120 96 120H24C10.7452 120 0 109.255 0 96V24C0 10.7452 10.7452 0 24 0ZM60 92C77.6731 92 92 77.6731 92 60C92 42.3269 77.6731 28 60 28C42.3269 28 28 42.3269 28 60C28 77.6731 42.3269 92 60 92Z" fill="#00897B"/></svg>'
/** Data URI for registered public icon / Data URI для зарегистрированной публичной иконки */
const registeredIconDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`

Icons.add('flag-us', UsSvg)
Icons.add('flag-vn', VnSvg)
Icons.add('demo-registered-icon', registeredIconDataUri)

/** Binary Uint8Array image source / Бинарный источник изображения Uint8Array */
const svgBytes = new Uint8Array([...svgMarkup].map(character => character.charCodeAt(0)))
/** Binary ArrayBuffer image source / Бинарный источник изображения ArrayBuffer */
const svgBuffer = svgBytes.buffer.slice(0)
/** File instance with SVG image / Экземпляр File с SVG-изображением */
const svgFile = isDomRuntime()
  ? new File([svgMarkup], 'badge.svg', { type: 'image/svg+xml' })
  : null

/** Minimal valid PDF document content / Минимальное валидное содержимое PDF-документа */
const pdfContent = '%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 150] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length 40 >>\nstream\nBT\n/F1 18 Tf\n24 70 Td\n(DXT UI PDF) Tj\nET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000241 00000 n \n0000000331 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n401\n%%EOF'
/** Sample PDF data URI / Тестовый Data URI PDF-документа */
const demoPdf = `data:application/pdf;utf8,${encodeURIComponent(pdfContent)}`
/** File instance with PDF document / Экземпляр File с PDF-документом */
const pdfFile = isDomRuntime()
  ? new File([pdfContent], 'document.pdf', { type: 'application/pdf' })
  : null

/** Density descriptor srcset string / Строка srcset с дескрипторами плотности */
const srcsetDensityString = `${demoImage1} 1x, ${demoImage2} 2x`
/** Density descriptor srcset map / Объект srcset с дескрипторами плотности */
const srcsetDensityRecord: Record<string, string> = {
  '1x': demoImage1,
  '2x': demoImage2
}
/** Width descriptor srcset map / Объект srcset с дескрипторами ширины */
const srcsetWidthRecord: Record<number, string> = {
  320: demoImage1,
  640: demoImage2
}

/** Picture sources array configuration / Конфигурация массива источников picture */
const pictureSourcesList: ImagePictureList = [
  {
    src: demoImage2,
    srcset: demoImage2,
    media: '(width >= 640px)',
    type: 'image/jpeg',
    sizes: '100vw',
    width: 640,
    height: 480
  },
  {
    src: demoImage1,
    srcset: demoImage1,
    media: '(width >= 320px)',
    type: 'image/jpeg',
    sizes: '50vw',
    width: 320,
    height: 240
  }
]
/** Picture breakpoint record configuration / Конфигурация объекта брейкпоинтов picture */
const pictureBreakpointsRecord: Record<string, string> = {
  768: demoImage1,
  1024: demoImage2
}
/** Picture breakpoints with CSS units in source order / Брейкпоинты picture с CSS-единицами в порядке источников */
const pictureUnitBreakpointsRecord: Record<string, string> = {
  '64rem': demoImage2,
  '0px': demoImage1
}
/** Picture fallback record configuration / Конфигурация объекта picture для фоллбэка */
const pictureFallbackRecord: Record<string, string> = {
  768: demoImage2
}

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

/** Reference to the controlled D1Image instance / Ссылка на управляемый экземпляр D1Image */
const imageTarget = ref<ImageExpose | null>(null)
/** Current reactive source for expose and event testing / Текущий реактивный источник для проверки expose и событий */
const controlledSource = ref<string | Uint8Array<ArrayBuffer> | null>(demoImage1)
const exposeReadout = ref<string>('')

/** Interactive state toggles for dynamic preview / Интерактивные переключатели состояния для динамического предпросмотра */
const isDynamicTurn = ref<boolean>(false)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicHide = ref<boolean>(false)
const isDynamicStatic = ref<boolean>(false)
const isDynamicTagImg = ref<boolean>(false)
const dynamicSize = ref<NonNullable<ImageProps['size']>>('cover')
const isLifecycleMounted = ref<boolean>(true)

/** Formatted expose state string / Форматированная строка состояния expose-методов */
const statusValue = computed<string>(() => {
  if (imageTarget.value) {
    const type = imageTarget.value.getType()
    const data = imageTarget.value.getData()
    const sourceText = isObjectNotArray(data)
      ? `${data.src} (${data.width}x${data.height})`
      : data
    return `getType(): "${type}", getData(): ${sourceText ? `"${sourceText}"` : 'undefined'}`
  }

  return 'Ref not initialized'
})

/**
 * Sets the controlled image source to Image 1.
 *
 * Устанавливает источник управляемого изображения на Image 1.
 */
const setSourceImage1 = (): void => {
  controlledSource.value = demoImage1
}

/**
 * Sets the controlled image source to Image 2.
 *
 * Устанавливает источник управляемого изображения на Image 2.
 */
const setSourceImage2 = (): void => {
  controlledSource.value = demoImage2
}

/**
 * Sets the controlled image source to a Material icon.
 *
 * Устанавливает источник управляемого изображения на иконку Material.
 */
const setSourceIcon = (): void => {
  controlledSource.value = 'home'
}

/**
 * Sets the controlled image source to a country flag.
 *
 * Устанавливает источник управляемого изображения на флаг страны.
 */
const setSourceFlag = (): void => {
  controlledSource.value = 'flag-vn'
}

/**
 * Sets the controlled image source to a solid hex color.
 *
 * Устанавливает источник управляемого изображения на сплошной HEX-цвет.
 */
const setSourceColor = (): void => {
  controlledSource.value = '#4CAF50'
}

/**
 * Sets the controlled image source to a Uint8Array binary buffer.
 *
 * Устанавливает источник управляемого изображения на бинарный буфер Uint8Array.
 */
const setSourceBinary = (): void => {
  controlledSource.value = svgBytes
}

/**
 * Clears the controlled image source by setting it to null.
 *
 * Очищает источник управляемого изображения, устанавливая значение null.
 */
const clearSource = (): void => {
  controlledSource.value = null
}

/**
 * Captures the current expose state snapshot.
 *
 * Сохраняет текущий снимок состояния expose-методов.
 */
const readExposeSnapshot = (): void => {
  exposeReadout.value = statusValue.value
}

/**
 * Handles the image load event and logs payload details.
 *
 * Обрабатывает событие загрузки изображения и записывает данные события.
 * @param event load event payload / данные события загрузки
 */
const handleImageLoad = (event: ImageEventData): void => {
  const details = isObjectNotArray(event.image)
    ? `load (${event.type}: ${event.image.width}x${event.image.height})`
    : `load (${event.type})`
  onEvent(details, event)
  eventPayload.value = JSON.stringify({
    type: event.type,
    image: isObjectNotArray(event.image)
      ? { src: event.image.src, width: event.image.width, height: event.image.height }
      : event.image
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Image">
    <D1Section class="demo-image-page">
      <D1Group label="Basic & Source Types (URL, image: Prefix, Empty Prefix, PDF)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImageExplicit" size="contain"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="image:   "/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoPdf"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Binary & File Sources (Uint8Array, ArrayBuffer, File, PDF File)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBytes" size="contain"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBytes" size="contain" tag-img alt="SVG from Uint8Array"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBuffer" size="cover"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBuffer" size="contain" tag-img disabled turn alt="SVG from ArrayBuffer"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgFile" size="contain"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgFile" size="contain" tag-img alt="SVG from File"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgFile" size="cover" disabled turn alt="Disabled file image"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="pdfFile"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Material & Public Icons (Styles, Prefixes, Custom URL, Registered, Accessibility)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="outlined-home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="round-home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="sharp-home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="filled-home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="two-tone-home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="$home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="material-home"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="@star" url="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="demo-registered-icon"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="outlined-home" alt="Home navigation"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="round-home" turn disabled/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Country Flags & Solid Colors (flag-*, f-*, #HEX)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-us"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-vn" url="/flags/" alt="Vietnam flag"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-us" disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-us" turn disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="f-us"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="f-de" disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="f-vn" turn disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="#4CAF50"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="#2196F3" disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="#FF9800" turn disabled alt="Orange swatch"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Sizes & Fits (auto, contain, cover)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="auto"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="contain"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="cover"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="auto" tag-img alt="Auto size img"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="contain" tag-img alt="Contain size img"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="cover" tag-img alt="Cover size img"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Position & Coordinator (1-4 Values, x, y, Priority)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[25]"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[20, 35]"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[10, 25, 40]"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[15, 20, 25, 30]"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" size="cover" x="20%"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" size="cover" y="80%"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" size="cover" x="20%" y="80%"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" x="left" y="top"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" x="right" y="bottom"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[10, 20, 30, 40]" x="10%" y="90%"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tag-img :coordinator="[10, 25, 40]" alt="Cropped img"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tag-img size="cover" x="30%" alt="Offset X img"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tag-img size="cover" y="70%" alt="Offset Y img"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tag-img x="20%" y="-10%" alt="Offset XY img"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="null" :x="0" :y="0" tag-img alt="Numeric zero position"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Semantic img, picture, srcset, Priority & Lazy Loading">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img alt="Example image"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img lazy alt="Responsive density image" :srcset="srcsetDensityRecord"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img alt="Width descriptor srcset" :srcset="srcsetWidthRecord"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img :srcset="srcsetDensityString"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" :picture="pictureSourcesList" tag-img alt="Art direction picture"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" :picture="pictureUnitBreakpointsRecord" tag-img alt="CSS unit breakpoint picture"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImage1"
              :picture="pictureBreakpointsRecord"
              tag-img
              lazy
              decoding="async"
              fetch-priority="high"
              alt="Breakpoint record picture"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" :picture="pictureFallbackRecord" alt="Background fallback"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img decoding="sync" fetch-priority="high" alt="Sync high priority"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img decoding="auto" fetch-priority="auto" alt="Auto decoding and priority"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImage2"
              tag-img
              lazy
              preload-offset="512px"
              decoding="async"
              fetch-priority="low"
              alt="Lazy preloaded"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" lazy preload-offset="256px" size="contain" alt="Lazy background"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Adaptive Scaling (adaptive, objectWidth, objectHeight, adaptiveGroup, adaptiveAlways)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              :object-width="76.2"
              adaptive-group="phones-x"
              adaptive-always
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              object-width="71.9"
              adaptive-group="phones-x"
              adaptive-always
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              :object-height="150"
              adaptive-group="phones-y"
              adaptive-always
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImage1"
              adaptive
              object-width="129.9"
              object-height="160"
              adaptive-group="tablets-xy"
              adaptive-always
              tag-img
              alt="Adaptive tablet"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              object-width="76.2"
              adaptive-group="phones-state"
              adaptive-always
              turn
              disabled
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              object-width="71.9"
              adaptive-group="phones-state"
              adaptive-always
              tag-img
              turn
              disabled
              alt="Adaptive rotated disabled"
            />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Visual States & Interactive Toggles (turn, disabled, hide, static, tagImg, size)">
        <DemoFlex align="center">
          <D1Button label="Toggle Turn" size="sm" outline @click="isDynamicTurn = !isDynamicTurn"/>
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Hide" size="sm" outline @click="isDynamicHide = !isDynamicHide"/>
          <D1Button label="Toggle Static" size="sm" outline @click="isDynamicStatic = !isDynamicStatic"/>
          <D1Button label="Toggle TagImg" size="sm" outline @click="isDynamicTagImg = !isDynamicTagImg"/>
          <D1Button label="Size: auto" size="sm" outline @click="dynamicSize = 'auto'"/>
          <D1Button label="Size: contain" size="sm" outline @click="dynamicSize = 'contain'"/>
          <D1Button label="Size: cover" size="sm" outline @click="dynamicSize = 'cover'"/>
        </DemoFlex>
        <DemoValue
          label="Dynamic State"
          :value="{
            isDynamicTurn,
            isDynamicDisabled,
            isDynamicHide,
            isDynamicStatic,
            isDynamicTagImg,
            dynamicSize
          }"
        />
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              data-testid="demo-image-dynamic"
              :value="demoImage1"
              :turn="isDynamicTurn"
              :disabled="isDynamicDisabled"
              :hide="isDynamicHide"
              :static="isDynamicStatic"
              :tag-img="isDynamicTagImg"
              :size="dynamicSize"
              alt="Dynamic state target"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" hide/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" static/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn hide/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" disabled hide/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn disabled hide/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" static turn disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" static turn disabled hide/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" size="cover" turn disabled/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img size="contain" turn disabled alt="Rotated disabled image"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img static size="contain" alt="Static layout image"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tag-img static turn disabled size="cover" alt="Static rotated disabled"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Events & Control via Expose Methods">
        <DemoFlex>
          <D1Button label="Image 1" size="sm" @click="setSourceImage1"/>
          <D1Button label="Image 2" size="sm" outline @click="setSourceImage2"/>
          <D1Button label="Icon" size="sm" outline @click="setSourceIcon"/>
          <D1Button label="Flag" size="sm" outline @click="setSourceFlag"/>
          <D1Button label="Color" size="sm" outline @click="setSourceColor"/>
          <D1Button label="Uint8Array" size="sm" outline @click="setSourceBinary"/>
          <D1Button label="Clear" size="sm" outline @click="clearSource"/>
          <D1Button label="Read Expose" size="sm" outline @click="readExposeSnapshot"/>
        </DemoFlex>
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              ref="imageTarget"
              :value="controlledSource"
              size="contain"
              @load="handleImageLoad"
            />
          </D1GridItem>
        </D1Grid>
        <DemoValue label="Expose State" :value="statusValue"/>
        <DemoValue label="Expose Snapshot" :value="exposeReadout"/>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Boundary, Accessibility & Narrow Container">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image data-testid="demo-image-empty-omitted"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image data-testid="demo-image-empty-string" value=""/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image data-testid="demo-image-whitespace" value="   "/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image data-testid="demo-image-null" :value="null"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image data-testid="demo-image-undefined" :value="undefined"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              data-testid="demo-image-unicode-alt"
              :value="demoImage1"
              tag-img
              alt="Tiếng Việt / Кириллица / 🚀"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              data-testid="demo-image-xss-alt"
              :value="demoImage1"
              alt="<img src=x onerror=alert(1)>"
            />
          </D1GridItem>
        </D1Grid>
        <DemoBox class="demo-image-page__narrow" size="sm">
          <D1Image
            data-testid="demo-image-narrow"
            :value="demoImage1"
            tag-img
            size="cover"
            alt="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <div v-if="isLifecycleMounted" class="demo-image-page__item">
          <D1Image
            data-testid="demo-image-lifecycle"
            :value="demoImage2"
            lazy
            adaptive
            :object-width="100"
            adaptive-group="lifecycle-group"
            adaptive-always
            alt="Mounted lifecycle image"
          />
        </div>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-image-page {
  &__item {
    position: relative;
    width: 100%;
    height: 160px;
  }

  &__narrow {
    position: relative;
    width: 100%;
    max-width: 240px;
    height: 120px;
  }
}
</style>
