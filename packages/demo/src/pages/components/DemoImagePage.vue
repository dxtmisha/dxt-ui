<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icons, isDomRuntime, isObjectNotArray } from '@dxtmisha/functional'
import { UsSvg, VnSvg } from '@dxtmisha/media/flags'
import type {
  ImageEventData,
  ImageExpose,
  ImagePictureList
} from '@dxtmisha/constructor/Image'
import { useDemoEvent } from '../../composables/useDemoEvent'
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
/** Sample PDF URL / Тестовый URL PDF-документа */
const demoPdf = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf'

/** Inline SVG markup for binary, File, and registered icon tests / SVG-разметка для тестов бинарных данных, File и зарегистрированных иконок */
const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#00897B"/><circle cx="60" cy="60" r="32" fill="#FFFFFF"/></svg>'
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
  '768': demoImage1,
  '64rem': demoImage2
}
/** Picture fallback record configuration / Конфигурация объекта picture для фоллбэка */
const pictureFallbackRecord: Record<string, string> = {
  768: demoImage2
}

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()

/** Reference to the controlled D1Image instance / Ссылка на управляемый экземпляр D1Image */
const imageRef = ref<ImageExpose | null>(null)
/** Current reactive source for expose and event testing / Текущий реактивный источник для проверки expose и событий */
const controlledSource = ref<string | Uint8Array<ArrayBuffer> | null>(demoImage1)

/** Formatted expose state string / Форматированная строка состояния expose-методов */
const statusValue = computed<string>(() => {
  if (imageRef.value) {
    const type = imageRef.value.getType()
    const data = imageRef.value.getData()
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
 * Handles the image load event and logs payload details.
 *
 * Обрабатывает событие загрузки изображения и записывает данные события.
 * @param event load event payload / данные события загрузки
 */
const onImageLoad = (event: ImageEventData): void => {
  const details = isObjectNotArray(event.image)
    ? `load (${event.type}: ${event.image.width}x${event.image.height})`
    : `load (${event.type})`
  onEvent(details, event)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Image">
    <D1Section>
      <D1Group label="Basic & Source Types (URL, image: Prefix, Empty Prefix, PDF)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImageExplicit" size="contain" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="image:   " />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoPdf" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Binary & File Sources (Uint8Array, ArrayBuffer, File, PDF File)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBytes" size="contain" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBytes" size="contain" tagImg alt="SVG from Uint8Array" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBuffer" size="cover" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgBuffer" size="contain" tagImg disabled turn alt="SVG from ArrayBuffer" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgFile" size="contain" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgFile" size="contain" tagImg alt="SVG from File" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="svgFile" size="cover" disabled turn alt="Disabled file image" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="pdfFile" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Material & Public Icons (Styles, Prefixes, Custom URL, Registered, Accessibility)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="outlined-home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="round-home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="sharp-home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="filled-home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="two-tone-home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="$home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="material-home" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="@star" url="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="demo-registered-icon" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="outlined-home" alt="Home navigation" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="round-home" turn disabled />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Country Flags & Solid Colors (flag-*, f-*, #HEX)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-us" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-vn" url="/flags/" alt="Vietnam flag" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-us" disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="flag-us" turn disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="f-us" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="f-de" disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="f-vn" turn disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="#4CAF50" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="#2196F3" disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="#FF9800" turn disabled alt="Orange swatch" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Sizes & Fits (auto, contain, cover)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="auto" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="contain" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="cover" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="auto" tagImg alt="Auto size img" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="contain" tagImg alt="Contain size img" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImagePortrait" size="cover" tagImg alt="Cover size img" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Position & Coordinator (1-4 Values, x, y, Priority)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[25]" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[20, 35]" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[10, 25, 40]" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[15, 20, 25, 30]" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" size="cover" x="20%" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" size="cover" y="80%" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" size="cover" x="20%" y="80%" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" x="left" y="top" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" x="right" y="bottom" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" :coordinator="[10, 20, 30, 40]" x="10%" y="90%" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tagImg :coordinator="[10, 25, 40]" alt="Cropped img" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tagImg size="cover" x="30%" alt="Offset X img" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tagImg size="cover" y="70%" alt="Offset Y img" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" tagImg x="20%" y="-10%" alt="Offset XY img" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Semantic img, picture, srcset, Priority & Lazy Loading">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg alt="Example image" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg lazy alt="Responsive density image" :srcset="srcsetDensityRecord" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg alt="Width descriptor srcset" :srcset="srcsetWidthRecord" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg :srcset="srcsetDensityString" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" :picture="pictureSourcesList" tagImg alt="Art direction picture" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImage1"
              :picture="pictureBreakpointsRecord"
              tagImg
              lazy
              decoding="async"
              fetchPriority="high"
              alt="Breakpoint record picture"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" :picture="pictureFallbackRecord" alt="Background fallback" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg decoding="sync" fetchPriority="high" alt="Sync high priority" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg decoding="auto" fetchPriority="auto" alt="Auto decoding and priority" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImage2"
              tagImg
              lazy
              preloadOffset="512px"
              decoding="async"
              fetchPriority="low"
              alt="Lazy preloaded"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage2" lazy preloadOffset="256px" size="contain" alt="Lazy background" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Adaptive Scaling (adaptive, objectWidth, objectHeight, adaptiveGroup, adaptiveAlways)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              objectWidth="76.2"
              adaptiveGroup="phones-x"
              adaptiveAlways
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              objectWidth="71.9"
              adaptiveGroup="phones-x"
              adaptiveAlways
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              objectHeight="150"
              adaptiveGroup="phones-y"
              adaptiveAlways
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImage1"
              adaptive
              objectWidth="129.9"
              objectHeight="160"
              adaptiveGroup="tablets-xy"
              adaptiveAlways
              tagImg
              alt="Adaptive tablet"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              objectWidth="76.2"
              adaptiveGroup="phones-state"
              adaptiveAlways
              turn
              disabled
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              :value="demoImagePortrait"
              adaptive
              objectWidth="71.9"
              adaptiveGroup="phones-state"
              adaptiveAlways
              tagImg
              turn
              disabled
              alt="Adaptive rotated disabled"
            />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Visual States & Combinations (turn, disabled, hide, static)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" hide />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" static />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn hide />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" disabled hide />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" turn disabled hide />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" static turn disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image value="expand_more" static turn disabled hide />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" size="cover" turn disabled />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg size="contain" turn disabled alt="Rotated disabled image" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg static size="contain" alt="Static layout image" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image :value="demoImage1" tagImg static turn disabled size="cover" alt="Static rotated disabled" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Events & Control via Expose Methods">
        <DemoFlex>
          <D1Button label="Image 1" @click="setSourceImage1" />
          <D1Button label="Image 2" @click="setSourceImage2" />
          <D1Button label="Icon" @click="setSourceIcon" />
          <D1Button label="Flag" @click="setSourceFlag" />
          <D1Button label="Color" @click="setSourceColor" />
          <D1Button label="Uint8Array" @click="setSourceBinary" />
          <D1Button label="Clear" @click="clearSource" />
        </DemoFlex>
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              ref="imageRef"
              :value="controlledSource"
              size="contain"
              @load="onImageLoad"
            />
          </D1GridItem>
        </D1Grid>
        <DemoValue label="Expose State" :value="statusValue"/>
        <DemoValue label="Last Event" :value="eventName"/>
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
}
</style>
