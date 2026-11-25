<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icons, isDomRuntime, isObjectNotArray } from '@dxtmisha/functional'
import { UsSvg, VnSvg } from '@dxtmisha/media/flags'
import type { IconExpose } from '@dxtmisha/constructor/Icon'
import type { ImageEventData, ImageProps } from '@dxtmisha/constructor/Image'
import type { ConstrBind } from '@dxtmisha/functional'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Sample image URL 1 for icon media testing / Тестовый URL изображения 1 для проверки медиа-иконки */
const demoImage1 = 'https://picsum.photos/200/200?random=11'
/** Sample image URL 2 for active icon media testing / Тестовый URL изображения 2 для проверки активной медиа-иконки */
const demoImage2 = 'https://picsum.photos/200/200?random=12'

/** Inline SVG markup for binary, File, and registered icon demonstrations / SVG-разметка для демонстрации бинарных данных, File и зарегистрированных иконок */
const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H96C109.255 0 120 10.7452 120 24V96C120 109.255 109.255 120 96 120H24C10.7452 120 0 109.255 0 96V24C0 10.7452 10.7452 0 24 0ZM60 92C77.6731 92 92 77.6731 92 60C92 42.3269 77.6731 28 60 28C42.3269 28 28 42.3269 28 60C28 77.6731 42.3269 92 60 92Z" fill="#00897B"/></svg>'
/** Data URI for the custom registered icon / Data URI для пользовательской зарегистрированной иконки */
const registeredIconDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`

Icons.add('flag-us', UsSvg)
Icons.add('flag-vn', VnSvg)
Icons.add('demo-icon-registered', registeredIconDataUri)

/** Binary Uint8Array icon source / Бинарный источник иконки Uint8Array */
const svgBytes = new Uint8Array([...svgMarkup].map(character => character.charCodeAt(0)))
/** File instance with SVG image for icon source / Экземпляр File с SVG-изображением для источника иконки */
const svgFile = isDomRuntime()
  ? new File([svgMarkup], 'icon-badge.svg', { type: 'image/svg+xml' })
  : undefined

/** Public @-prefixed icon object binding with custom CDN URL / Объектная привязка публичной иконки с префиксом @ и пользовательским URL */
const publicStarIconBind: ConstrBind<ImageProps> = {
  value: '@star',
  url: 'https://cdn.jsdelivr.net/npm/@mdi/svg/svg/'
}

/** Object binding for semantic img rendering inside D1Icon / Объектная привязка для семантического рендеринга img внутри D1Icon */
const imageObjectBind: ConstrBind<ImageProps> = {
  value: demoImage1,
  size: 'cover',
  tagImg: true,
  alt: 'Avatar thumbnail'
}

/** Object binding for active state semantic img rendering / Объектная привязка для семантического рендеринга img в активном состоянии */
const imageActiveObjectBind: ConstrBind<ImageProps> = {
  value: demoImage2,
  size: 'cover',
  tagImg: true,
  alt: 'Active avatar thumbnail'
}

/** Object binding for Uint8Array binary source / Объектная привязка для бинарного источника Uint8Array */
const binaryObjectBind: ConstrBind<ImageProps> = {
  value: svgBytes,
  size: 'contain',
  tagImg: true,
  alt: 'Binary SVG icon'
}

/** Object binding for File source / Объектная привязка для источника File */
const fileObjectBind: ConstrBind<ImageProps> = {
  value: svgFile,
  size: 'contain',
  tagImg: true,
  alt: 'File SVG icon'
}

/** Reactive active flag for the interactive dual-icon switching group / Реактивный флаг активности для интерактивной группы переключения двух иконок */
const interactiveActive = ref<boolean>(false)
/** Reactive active flag for the skeleton demonstration group / Реактивный флаг активности для демонстрационной группы скелетона */
const skeletonActive = ref<boolean>(true)
/** Reactive mount flag for conditional lifecycle testing / Реактивный флаг монтирования для проверки жизненного цикла */
const isLifecycleMounted = ref<boolean>(true)
/** Counter for blocked click verification / Счётчик заблокированных кликов */
const blockedClickCount = ref<number>(0)

/** Composable for tracking emitted events / Composable для отслеживания вызываемых событий */
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

/** Template ref to the controlled D1Icon instance / Шаблонная ссылка на управляемый экземпляр D1Icon */
const iconTarget = ref<IconExpose | null>(null)
/** Reactive active state for the expose & events test instance / Реактивное состояние активности для тестового экземпляра expose и событий */
const controlledActive = ref<boolean>(false)
/** Reactive base icon source for the expose & events test instance / Реактивный базовый источник иконки для тестового экземпляра expose и событий */
const controlledIcon = ref<string | ConstrBind<ImageProps>>('favorite_border')
/** Reactive active icon source for the expose & events test instance / Реактивный активный источник иконки для тестового экземпляра expose и событий */
const controlledIconActive = ref<string | ConstrBind<ImageProps>>('favorite')
/** Reactive payload value for the expose & events test instance / Реактивное значение payload для тестового экземпляра expose и событий */
const controlledValue = ref<string>('favorite-action')
/** Reactive detail metadata for the expose & events test instance / Реактивные метаданные detail для тестового экземпляра expose и событий */
const controlledDetail = ref<Record<string, unknown>>({ section: 'toolbar', priority: 1 })
const exposeReadout = ref<string>('')

/** Formatted expose state string / Форматированная строка состояния методов expose */
const statusValue = computed<string>(() => {
  if (iconTarget.value) {
    const activeStatus = iconTarget.value.isActive()
    const currentValue = iconTarget.value.getValue?.()
    const currentDetail = iconTarget.value.getDetail?.()
    return `isActive(): ${activeStatus}, getValue(): ${JSON.stringify(currentValue)}, getDetail(): ${JSON.stringify(currentDetail)}`
  }

  return 'Ref not initialized'
})

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

/**
 * Toggles the interactive dual-icon active state.
 *
 * Переключает интерактивное состояние активности двойной иконки.
 */
const toggleInteractiveActive = (): void => {
  interactiveActive.value = !interactiveActive.value
}

/**
 * Toggles the skeleton loading state.
 *
 * Переключает состояние загрузки скелетона.
 */
const toggleSkeletonActive = (): void => {
  skeletonActive.value = !skeletonActive.value
}

/**
 * Toggles the active state of the expose-controlled icon.
 *
 * Переключает состояние активности управляемой через expose иконки.
 */
const toggleControlledActive = (): void => {
  controlledActive.value = !controlledActive.value
}

/**
 * Switches the controlled icon to Material bookmark icons.
 *
 * Переключает управляемую иконку на иконки закладки Material.
 */
const setControlledBookmark = (): void => {
  controlledIcon.value = 'bookmark_border'
  controlledIconActive.value = 'bookmark'
  controlledValue.value = 'bookmark-action'
  controlledDetail.value = { section: 'saved', priority: 2 }
}

/**
 * Switches the controlled icon to country flags.
 *
 * Переключает управляемую иконку на флаги стран.
 */
const setControlledFlag = (): void => {
  controlledIcon.value = 'flag-us'
  controlledIconActive.value = 'flag-vn'
  controlledValue.value = 'locale-switch'
  controlledDetail.value = { from: 'US', to: 'VN' }
}

/**
 * Switches the controlled icon to external image bindings.
 *
 * Переключает управляемую иконку на привязки внешних изображений.
 */
const setControlledImage = (): void => {
  controlledIcon.value = imageObjectBind
  controlledIconActive.value = imageActiveObjectBind
  controlledValue.value = 'avatar-media'
  controlledDetail.value = { format: 'image', tagImg: true }
}

/**
 * Resets the controlled icon to its initial favorite configuration.
 *
 * Сбрасывает управляемую иконку к начальной конфигурации избранного.
 */
const resetControlledIcon = (): void => {
  controlledActive.value = false
  controlledIcon.value = 'favorite_border'
  controlledIconActive.value = 'favorite'
  controlledValue.value = 'favorite-action'
  controlledDetail.value = { section: 'toolbar', priority: 1 }
}

/**
 * Reads all exposed methods from the controlled icon instance.
 *
 * Считывает все экспонируемые методы управляемого экземпляра иконки.
 */
const readExposeSnapshot = (): void => {
  exposeReadout.value = statusValue.value
}

/**
 * Handles clicks on guarded/disabled icons.
 *
 * Обрабатывает клики по заблокированным иконкам.
 */
const handleBlockedClick = (): void => {
  blockedClickCount.value += 1
}

/**
 * Handles the @load event emitted by D1Icon and logs the resolved media type.
 *
 * Обрабатывает событие @load, вызываемое D1Icon, и логирует определенный тип медиа.
 * @param event load event payload / данные события загрузки
 */
const handleIconLoad = (event: ImageEventData): void => {
  const details = isObjectNotArray(event.image)
    ? `load (${event.type}: ${event.image.width}x${event.image.height})`
    : `load (${event.type})`
  trackEvent(details, {
    type: event.type,
    image: isObjectNotArray(event.image)
      ? { src: event.image.src, width: event.image.width, height: event.image.height }
      : event.image
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Icon">
    <D1Section class="demo-icon-page">
      <D1Group label="Sizes (auto, x, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl)">
        <DemoFlex align="center">
          <D1Icon icon="home" size="auto" overlay/>
          <D1Icon icon="home" size="x" overlay/>
          <D1Icon icon="home" size="xs" overlay/>
          <D1Icon icon="home" size="sm" overlay/>
          <D1Icon icon="home" size="md" overlay/>
          <D1Icon icon="home" size="lg" overlay/>
          <D1Icon icon="home" size="xl" overlay/>
          <D1Icon icon="home" size="2xl" overlay/>
          <D1Icon icon="home" size="3xl" overlay/>
          <D1Icon icon="home" size="4xl" overlay/>
          <D1Icon icon="home" size="5xl" overlay/>
          <D1Icon icon="home" size="6xl" overlay/>
          <D1Icon icon="home" size="7xl" overlay/>
          <D1Icon icon="home" size="8xl" overlay/>
          <D1Icon icon="home" size="9xl" overlay/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Shapes & Corner Rounding (square, circle, rect, rounded: auto, sm, md, lg, xl, full)">
        <DemoFlex align="center">
          <D1Icon icon="settings" size="2xl" overlay square/>
          <D1Icon icon="settings" size="2xl" overlay circle/>
          <D1Icon icon="settings" size="2xl" overlay rect/>
          <D1Icon icon="settings" size="2xl" overlay square rounded="auto"/>
          <D1Icon icon="settings" size="2xl" overlay square rounded="sm"/>
          <D1Icon icon="settings" size="2xl" overlay square rounded="md"/>
          <D1Icon icon="settings" size="2xl" overlay square rounded="lg"/>
          <D1Icon icon="settings" size="2xl" overlay square rounded="xl"/>
          <D1Icon icon="settings" size="2xl" overlay square rounded="full"/>
          <D1Icon icon="settings" size="2xl" overlay rect rounded="sm"/>
          <D1Icon icon="settings" size="2xl" overlay rect rounded="md"/>
          <D1Icon icon="settings" size="2xl" overlay rect rounded="lg"/>
          <D1Icon icon="settings" size="2xl" overlay rect rounded="xl"/>
          <D1Icon icon="settings" size="2xl" overlay rect rounded="full"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Dual-Icon Switching & Animations (active, iconActive, animationType, animationShow, disabled, hide, high, start, end)">
        <DemoFlex align="center">
          <D1Button label="Toggle Active State" size="sm" @click="toggleInteractiveActive"/>
          <DemoValue label="Active" :value="interactiveActive"/>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Icon
            icon="visibility"
            icon-active="visibility_off"
            :active="interactiveActive"
            animation-type="type1"
            size="2xl"
            overlay
          />
          <D1Icon
            icon="add"
            icon-active="close"
            :active="interactiveActive"
            animation-type="type2"
            size="2xl"
            overlay
          />
          <D1Icon
            icon="notifications"
            :hide="interactiveActive"
            animation-type="type1"
            size="2xl"
            overlay
          />
          <D1Icon
            icon="notifications_active"
            :hide="interactiveActive"
            animation-type="type2"
            size="2xl"
            overlay
          />
          <D1Icon
            icon="visibility"
            icon-active="visibility_off"
            :active="false"
            animation-type="type1"
            size="xl"
          />
          <D1Icon
            icon="visibility"
            icon-active="visibility_off"
            active
            animation-type="type1"
            size="xl"
          />
          <D1Icon
            icon="favorite_border"
            icon-active="favorite"
            active
            animation-type="type2"
            size="xl"
          />
          <D1Icon icon="search" active size="xl"/>
          <D1Icon icon="refresh" animation-type="type1" animation-show size="xl"/>
          <D1Icon icon="refresh" animation-type="type2" animation-show size="xl"/>
          <D1Icon icon="lock" disabled size="xl"/>
          <D1Icon icon="visibility_off" hide size="xl"/>
          <D1Icon icon="vertical_align_center" high size="xl" overlay/>
          <D1Icon icon="chevron_left" start size="xl" overlay/>
          <D1Icon icon="chevron_right" end size="xl" overlay/>
          <D1Icon icon="first_page" start high size="xl" overlay/>
          <D1Icon icon="last_page" end high size="xl" overlay/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Transformations & Direction (turn, dir in LTR and RTL)">
        <DemoFlex align="center">
          <DemoBox size="sm" center>
            <D1Icon icon="expand_more" size="xl"/>
          </DemoBox>
          <DemoBox size="sm" center>
            <D1Icon icon="expand_more" turn size="xl"/>
          </DemoBox>
          <DemoBox size="sm" center dir="ltr">
            <D1Icon icon="arrow_forward" dir size="xl"/>
          </DemoBox>
          <DemoBox size="sm" center dir="rtl">
            <D1Icon icon="arrow_forward" dir size="xl"/>
          </DemoBox>
          <DemoBox size="sm" center dir="rtl">
            <D1Icon icon="arrow_forward" dir turn size="xl"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes, Semantic Colors & Surfaces (asPalette, overlay, inverse, success, error)">
        <DemoFlex align="center">
          <D1Icon icon="favorite" as-palette class="d1-palette--red" size="2xl"/>
          <D1Icon icon="eco" as-palette class="d1-palette--green" size="2xl"/>
          <D1Icon icon="water_drop" as-palette class="d1-palette--blue" size="2xl"/>
          <D1Icon icon="wb_sunny" as-palette class="d1-palette--orange" size="2xl"/>
          <D1Icon icon="auto_awesome" as-palette class="d1-palette--purple" size="2xl"/>
          <D1Icon icon="favorite" as-palette overlay class="d1-palette--red" size="2xl"/>
          <D1Icon icon="eco" as-palette overlay class="d1-palette--green" size="2xl"/>
          <D1Icon icon="water_drop" as-palette overlay class="d1-palette--blue" size="2xl"/>
          <D1Icon icon="check_circle" success size="2xl"/>
          <D1Icon icon="check_circle" success overlay size="2xl"/>
          <D1Icon icon="error" error size="2xl"/>
          <D1Icon icon="error" error overlay size="2xl"/>
          <div class="demo-icon-page__inverse-surface">
            <D1Icon icon="dark_mode" inverse size="2xl"/>
            <D1Icon icon="dark_mode" inverse overlay size="2xl"/>
            <D1Icon icon="favorite" as-palette inverse class="d1-palette--red" size="2xl"/>
            <D1Icon icon="check_circle" success inverse size="2xl"/>
            <D1Icon icon="error" error inverse size="2xl"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accepted Source Types (Material Prefixes, @ Public, Registered, Flags, #HEX, Image URL, ImageProps Object, Uint8Array, File, Slot)">
        <DemoFlex align="center">
          <D1Icon icon="home" size="2xl" overlay/>
          <D1Icon icon="outlined-home" size="2xl" overlay/>
          <D1Icon icon="round-home" size="2xl" overlay/>
          <D1Icon icon="sharp-home" size="2xl" overlay/>
          <D1Icon icon="filled-home" size="2xl" overlay/>
          <D1Icon icon="two-tone-home" size="2xl" overlay/>
          <D1Icon icon="$home" size="2xl" overlay/>
          <D1Icon icon="material-home" size="2xl" overlay/>
          <D1Icon :icon="publicStarIconBind" size="2xl" overlay/>
          <D1Icon icon="demo-icon-registered" size="2xl" overlay/>
          <D1Icon icon="flag-us" size="2xl" circle/>
          <D1Icon icon="flag-vn" size="2xl" circle/>
          <D1Icon icon="f-us" size="2xl" rounded="sm"/>
          <D1Icon icon="f-vn" size="2xl" rounded="sm"/>
          <D1Icon icon="#4CAF50" size="2xl" circle/>
          <D1Icon icon="#2196F3" size="2xl" rounded="md"/>
          <D1Icon icon="#FF9800" size="2xl" rounded="lg"/>
          <D1Icon :icon="demoImage1" size="2xl" circle/>
          <D1Icon :icon="imageObjectBind" size="2xl" rounded="md"/>
          <D1Icon :icon="binaryObjectBind" size="2xl" overlay/>
          <D1Icon :icon="fileObjectBind" size="2xl" overlay/>
          <D1Icon size="2xl" overlay circle>
            <span>A+</span>
          </D1Icon>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Mode, Navigation & Accessibility (A11y)">
        <DemoFlex align="center">
          <D1Icon
            icon="notifications"
            dynamic
            size="2xl"
            overlay
            circle
            aria-label="Open notifications"
            @click="trackEvent('click: notifications', { source: 'button-role' })"
          />
          <D1Icon
            icon="thumb_up"
            icon-active="thumb_up_off_alt"
            :active="interactiveActive"
            dynamic
            size="2xl"
            overlay
            circle
            role="button"
            aria-label="Like toggle button"
            @click="toggleInteractiveActive"
          />
          <D1Icon
            icon="dark_mode"
            icon-active="light_mode"
            :active="interactiveActive"
            dynamic
            size="2xl"
            overlay
            circle
            role="switch"
            tabindex="0"
            aria-label="Toggle theme mode"
            @click="toggleInteractiveActive"
          />
          <D1Icon
            icon="check_box_outline_blank"
            icon-active="check_box"
            :active="interactiveActive"
            dynamic
            size="2xl"
            overlay
            role="checkbox"
            aria-label="Checkbox role icon"
            @click="toggleInteractiveActive"
          />
          <D1Icon
            icon="info"
            size="2xl"
            overlay
            role="img"
            :tabindex="-1"
            aria-label="Static status information"
          />
          <D1Icon
            icon="open_in_new"
            dynamic
            size="2xl"
            overlay
            href="https://example.com"
            aria-label="External link"
          />
          <D1Icon
            icon="link_off"
            dynamic
            disabled
            size="2xl"
            overlay
            href="https://example.com"
            aria-label="Disabled external link"
          />
          <D1Icon
            icon="home"
            dynamic
            size="2xl"
            overlay
            to="/"
            aria-label="Router link home"
          />
          <D1Icon
            icon="home"
            dynamic
            size="2xl"
            overlay
            :to="{ path: '/' }"
            aria-label="Router object link home"
          />
          <D1Icon
            icon="block"
            dynamic
            disabled
            size="2xl"
            overlay
            circle
            aria-label="Disabled action"
            @click="handleBlockedClick"
          />
          <D1Icon
            icon="touch_app"
            no-pointer-events
            size="2xl"
            overlay
            circle
          />
          <D1Icon
            icon="do_not_touch"
            dynamic
            no-pointer-events
            size="2xl"
            overlay
            circle
            aria-label="Non-pointer dynamic icon"
          />
        </DemoFlex>
        <DemoValue label="Blocked Click Count" :value="blockedClickCount"/>
      </D1Group>

      <D1Group label="Skeleton Loading (D1Skeleton + isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" size="sm" @click="toggleSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="skeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="skeletonActive">
          <DemoFlex align="center">
            <D1Icon icon="person" size="lg" circle is-skeleton/>
            <D1Icon icon="home" size="xl" square rounded="md" is-skeleton/>
            <D1Icon icon="image" size="2xl" rect rounded="lg" is-skeleton/>
            <D1Icon :icon="demoImage1" size="3xl" circle is-skeleton/>
          </DemoFlex>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Events & Expose Methods (@click, @click-lite, @load, isActive, getValue, getDetail)">
        <DemoFlex align="center">
          <D1Button label="Toggle Active" size="sm" @click="toggleControlledActive"/>
          <D1Button label="Bookmark Icons" size="sm" outline @click="setControlledBookmark"/>
          <D1Button label="Country Flags" size="sm" outline @click="setControlledFlag"/>
          <D1Button label="Image Sources" size="sm" outline @click="setControlledImage"/>
          <D1Button label="Read Expose" size="sm" outline @click="readExposeSnapshot"/>
          <D1Button label="Reset" size="sm" outline @click="resetControlledIcon"/>
        </DemoFlex>
        <DemoFlex align="center">
          <DemoBox size="sm" center>
            <D1Icon
              ref="iconTarget"
              :icon="controlledIcon"
              :icon-active="controlledIconActive"
              :active="controlledActive"
              dynamic
              overlay
              circle
              size="3xl"
              :index="0"
              :value="controlledValue"
              :detail="controlledDetail"
              aria-label="Controlled interactive icon"
              @click="(_mouseEvent, eventData) => trackEvent('click', eventData)"
              @click-lite="(eventData) => trackEvent('click-lite', eventData)"
              @load="handleIconLoad"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Expose State" :value="statusValue"/>
        <DemoValue label="Expose Snapshot" :value="exposeReadout"/>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex align="center">
          <D1Icon size="2xl" overlay/>
          <D1Icon icon="" size="2xl" overlay/>
          <D1Icon icon="   " size="2xl" overlay/>
          <D1Icon :icon="null" size="2xl" overlay/>
          <D1Icon :icon="undefined" size="2xl" overlay/>
          <D1Icon icon-active="favorite" active size="2xl" overlay/>
          <D1Icon
            icon="translate"
            dynamic
            size="2xl"
            overlay
            aria-label="Tiếng Việt / Кириллица / 🚀"
          />
          <D1Icon
            icon="security"
            dynamic
            size="2xl"
            overlay
            aria-label="<img src=x onerror=alert(1)>"
          />
          <D1Icon
            icon="<img src=x onerror=alert(1)>"
            size="2xl"
            overlay
            aria-label="Escaped icon path"
          />
        </DemoFlex>
        <DemoBox class="demo-icon-page__narrow" size="sm">
          <DemoFlex align="center">
            <D1Icon icon="home" size="xl" overlay/>
            <D1Icon icon="search" size="xl" overlay/>
            <D1Icon icon="settings" size="xl" overlay/>
            <D1Icon icon="favorite" size="xl" overlay/>
            <D1Icon icon="notifications" size="xl" overlay/>
            <D1Icon icon="person" size="xl" overlay/>
          </DemoFlex>
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
        <DemoFlex v-if="isLifecycleMounted" align="center">
          <D1Icon
            icon="verified"
            dynamic
            overlay
            circle
            size="2xl"
            aria-label="Mounted lifecycle icon"
          />
        </DemoFlex>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-icon-page {
  &__inverse-surface {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ui.v('?layout.gapX');
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
    border-radius: ui.v('?sys.rounded.md');
    @include ui.backgroundColor(ui.v('?sys.palette.inverseSurface'));
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
