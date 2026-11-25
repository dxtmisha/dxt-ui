<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import type { HeadroomExpose } from '@dxtmisha/constructor/Headroom'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type HeadroomEventItem = ReturnType<HeadroomExpose['getValues']>
type HeadroomTagOption = 'header' | 'nav' | 'div' | 'section'

const { eventName, onEvent } = useDemoEvent()

const fillerParagraphs = [
  'Paragraph 1: Sticky headers keep primary context visible while users read long sections inside bounded containers.',
  'Paragraph 2: Scroll calculations track position deltas to compute direction, sticky status, and progressive transform percentages.',
  'Paragraph 3: Isolating the scroll root to a dedicated element prevents interference with global page scrolling.',
  'Paragraph 4: When disappears mode is enabled, downward scrolling slides the header out of view while upward scrolling reveals it.',
  'Paragraph 5: Threshold values normalize scroll progress between 0 and 1 via CSS custom properties for smooth visual transitions.',
  'Paragraph 6: Deterministic scroll offsets ensure predictable verification across desktop, tablet, and mobile viewports.',
  'Paragraph 7: Bottom boundary content ensures enough overflow height to test full threshold traversal and disappears hiding.'
]

const thresholdOptions: readonly number[] = [0, 80, 120, 200]
const tagOptions: readonly HeadroomTagOption[] = ['header', 'nav', 'div', 'section']

const xssPayload = '<img src=x onerror=alert(1)>'
const unicodePayload = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

// Basic scroller refs
const basicScrollerRef = ref<HTMLElement | null>(null)

// Disappears mode state
const disappearsScrollerRef = ref<HTMLElement | null>(null)
const isDisappearsEnabled = ref<boolean>(true)
const disappearsMetrics = ref<HeadroomEventItem | null>(null)

// Transform threshold state
const transformScrollerRef = ref<HTMLElement | null>(null)
const activeThreshold = ref<number>(120)
const transformMetrics = ref<HeadroomEventItem | null>(null)

// Polymorphic tag state
const tagScrollerRef = ref<HTMLElement | null>(null)
const activeTag = ref<HeadroomTagOption>('header')

// Scroll element format refs
const selectorScrollerRef = ref<HTMLElement | null>(null)
const elementScrollerRef = ref<HTMLElement | undefined>(undefined)
const isWindowHeadroomVisible = ref<boolean>(false)

// Expose state
const exposeScrollerRef = ref<HTMLElement | null>(null)
const exposeHeadroomRef = ref<HeadroomExpose | null>(null)
const exposeValuesSnapshot = ref<HeadroomEventItem | null>(null)

// Events tracking state
const eventsScrollerRef = ref<HTMLElement | null>(null)
const scrollEventCount = ref<number>(0)
const stickyEventCount = ref<number>(0)
const lastEventPayload = ref<string>('No events triggered yet')

// Boundary & edge cases refs
const zeroThresholdScrollerRef = ref<HTMLElement | null>(null)
const narrowScrollerRef = ref<HTMLElement | null>(null)

// Lifecycle state
const lifecycleScrollerRef = ref<HTMLElement | null>(null)
const isLifecycleMounted = ref<boolean>(true)

const exposeIsSticky = computed<boolean>(() => {
  if (!exposeHeadroomRef.value) {
    return false
  }

  return Boolean(unref(exposeHeadroomRef.value.isSticky))
})

const scrollContainerTo = (element: HTMLElement | null | undefined, top: number): void => {
  if (element) {
    element.scrollTop = Math.max(0, top)
  }
}

const scrollContainerBy = (element: HTMLElement | null | undefined, delta: number): void => {
  if (element) {
    element.scrollTop = Math.max(0, element.scrollTop + delta)
  }
}

const readExposeValues = (): void => {
  if (exposeHeadroomRef.value) {
    exposeValuesSnapshot.value = exposeHeadroomRef.value.getValues()
  }
}

const callExposeUpdate = (): void => {
  if (exposeHeadroomRef.value) {
    exposeHeadroomRef.value.update()
    exposeValuesSnapshot.value = exposeHeadroomRef.value.getValues()
  }
}

const handleDisappearsScroll = (event: HeadroomEventItem): void => {
  disappearsMetrics.value = event
}

const handleTransformScroll = (event: HeadroomEventItem): void => {
  transformMetrics.value = event
}

const handleHeadroomScroll = (event: HeadroomEventItem): void => {
  scrollEventCount.value += 1
  onEvent('headroom-scroll', event)
  lastEventPayload.value = JSON.stringify(event)
}

const handleHeadroomSticky = (event: HeadroomEventItem): void => {
  stickyEventCount.value += 1
  onEvent('headroom-sticky', event)
  lastEventPayload.value = JSON.stringify(event)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Headroom">
    <D1Section class="demo-headroom-page">
      <D1Group label="Basic Sticky Header">
        <DemoFlex>
          <D1Button
            data-testid="btn-basic-scroll-down"
            label="Scroll Down"
            size="sm"
            @click="scrollContainerBy(basicScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-basic-scroll-up"
            label="Scroll Up"
            size="sm"
            outline
            @click="scrollContainerBy(basicScrollerRef, -50)"
          />
          <D1Button
            data-testid="btn-basic-scroll-top"
            label="Scroll Top"
            size="sm"
            outline
            @click="scrollContainerTo(basicScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-basic-scroller"
          ref="basicScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-basic-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-basic"
            scroll-element="#demo-headroom-basic-scroller"
          >
            Basic Sticky Header (Default Props)
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`basic-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </D1Group>

      <D1Group label="Disappears Mode">
        <DemoFlex>
          <D1Button
            data-testid="btn-disappears-toggle"
            :label="isDisappearsEnabled ? 'Disappears: ON' : 'Disappears: OFF'"
            size="sm"
            @click="isDisappearsEnabled = !isDisappearsEnabled"
          />
          <D1Button
            data-testid="btn-disappears-down"
            label="Scroll 120px Down"
            size="sm"
            outline
            @click="scrollContainerBy(disappearsScrollerRef, 120)"
          />
          <D1Button
            data-testid="btn-disappears-up"
            label="Scroll 40px Up"
            size="sm"
            outline
            @click="scrollContainerBy(disappearsScrollerRef, -40)"
          />
          <D1Button
            data-testid="btn-disappears-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(disappearsScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-disappears-scroller"
          ref="disappearsScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-disappears-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header demo-headroom-page__header--accent"
            data-testid="headroom-disappears"
            scroll-element="#demo-headroom-disappears-scroller"
            :disappears="isDisappearsEnabled"
            @headroom-scroll="handleDisappearsScroll"
          >
            Disappears Sticky Header (Scroll down to hide, scroll up to reveal)
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`disappears-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-disappears-state"
          label="Disappears Metrics"
          :value="{
            enabled: isDisappearsEnabled,
            value: disappearsMetrics?.value ?? 0,
            disappearsValue: disappearsMetrics?.disappearsValue ?? 0,
            valueDifference: disappearsMetrics?.valueDifference ?? 0
          }"
        />
      </D1Group>

      <D1Group label="Transform Threshold">
        <DemoFlex>
          <D1Button
            v-for="threshold in thresholdOptions"
            :key="`threshold-${threshold}`"
            :data-testid="`btn-threshold-${threshold}`"
            :label="`Threshold: ${threshold}`"
            :outline="activeThreshold !== threshold"
            size="sm"
            @click="activeThreshold = threshold"
          />
          <D1Button
            data-testid="btn-transform-scroll-60"
            label="Scroll 60px"
            size="sm"
            outline
            @click="scrollContainerTo(transformScrollerRef, 60)"
          />
          <D1Button
            data-testid="btn-transform-scroll-120"
            label="Scroll 120px"
            size="sm"
            outline
            @click="scrollContainerTo(transformScrollerRef, 120)"
          />
          <D1Button
            data-testid="btn-transform-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(transformScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-transform-scroller"
          ref="transformScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-transform-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header demo-headroom-page__header--transform"
            data-testid="headroom-transform"
            scroll-element="#demo-headroom-transform-scroller"
            :transform-threshold="activeThreshold"
            @headroom-scroll="handleTransformScroll"
          >
            Transform Threshold Header ({{ activeThreshold }}px)
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`transform-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-transform-metrics"
          label="Transform Metrics"
          :value="{
            transformThreshold: activeThreshold,
            transformValue: transformMetrics?.transformValue ?? 0,
            transformPercent: transformMetrics?.transformPercent ?? 0
          }"
        />
      </D1Group>

      <D1Group label="Polymorphic Tag & Accessibility (ARIA)">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Headroom
              class="demo-headroom-page__header"
              data-testid="headroom-tag-header"
              tag="header"
              role="banner"
              aria-label="Site sticky header"
            >
              &lt;header role="banner" aria-label="Site sticky header"&gt;
            </D1Headroom>
          </DemoBox>
          <DemoBox>
            <D1Headroom
              class="demo-headroom-page__header"
              data-testid="headroom-tag-nav"
              tag="nav"
              aria-label="Sticky section navigation"
            >
              &lt;nav aria-label="Sticky section navigation"&gt;
            </D1Headroom>
          </DemoBox>
          <DemoBox>
            <D1Headroom
              class="demo-headroom-page__header"
              data-testid="headroom-tag-div"
              tag="div"
              role="region"
              aria-label="Generic sticky container"
            >
              &lt;div role="region" aria-label="Generic sticky container"&gt;
            </D1Headroom>
          </DemoBox>
          <DemoBox>
            <D1Headroom
              class="demo-headroom-page__header"
              data-testid="headroom-tag-section"
              tag="section"
              aria-label="Sticky article section"
            >
              &lt;section aria-label="Sticky article section"&gt;
            </D1Headroom>
          </DemoBox>
        </DemoFlex>

        <DemoFlex>
          <D1Button
            v-for="tagOption in tagOptions"
            :key="`tag-opt-${tagOption}`"
            :data-testid="`btn-tag-${tagOption}`"
            :label="`Tag: ${tagOption}`"
            :outline="activeTag !== tagOption"
            size="sm"
            @click="activeTag = tagOption"
          />
        </DemoFlex>
        <div
          id="demo-headroom-tag-scroller"
          ref="tagScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-tag-reactive-scroller"
          tabindex="0"
          role="region"
          aria-label="Keyboard scrollable headroom region"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-tag-reactive"
            :tag="activeTag"
            scroll-element="#demo-headroom-tag-scroller"
            :transform-threshold="80"
            :aria-label="`Dynamic ${activeTag} headroom`"
          >
            Reactive Tag: &lt;{{ activeTag }}&gt; (Focusable scroller with keyboard navigation)
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`tag-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </D1Group>

      <D1Group label="Scroll Element Formats (Selector, HTMLElement Ref & Window)">
        <DemoFlex>
          <D1Button
            data-testid="btn-selector-scroll"
            label="Scroll Selector (90px)"
            size="sm"
            @click="scrollContainerTo(selectorScrollerRef, 90)"
          />
          <D1Button
            data-testid="btn-selector-reset"
            label="Reset Selector"
            size="sm"
            outline
            @click="scrollContainerTo(selectorScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-selector-scroller"
          ref="selectorScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-selector-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-selector"
            scroll-element="#demo-headroom-selector-scroller"
            :transform-threshold="100"
          >
            Selector Target: #demo-headroom-selector-scroller
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`selector-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <DemoFlex>
          <D1Button
            data-testid="btn-ref-scroll"
            label="Scroll Ref (90px)"
            size="sm"
            @click="scrollContainerTo(elementScrollerRef, 90)"
          />
          <D1Button
            data-testid="btn-ref-reset"
            label="Reset Ref"
            size="sm"
            outline
            @click="scrollContainerTo(elementScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          ref="elementScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-ref-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-ref"
            :scroll-element="elementScrollerRef"
            :transform-threshold="100"
          >
            HTMLElement Ref Target
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`ref-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <DemoFlex>
          <D1Button
            data-testid="btn-window-toggle"
            :label="isWindowHeadroomVisible ? 'Hide Window Headroom' : 'Show Window Headroom'"
            size="sm"
            outline
            @click="isWindowHeadroomVisible = !isWindowHeadroomVisible"
          />
        </DemoFlex>
        <DemoBox v-if="isWindowHeadroomVisible">
          <D1Headroom
            class="demo-headroom-page__header demo-headroom-page__header--accent"
            data-testid="headroom-window"
            disappears
            :transform-threshold="100"
          >
            Default Window Target (scrollElement omitted)
          </D1Headroom>
        </DemoBox>
      </D1Group>

      <D1Group label="Programmatic Expose (isSticky, getValues, update)">
        <DemoFlex>
          <D1Button
            data-testid="btn-expose-scroll-100"
            label="Scroll 100px"
            size="sm"
            @click="scrollContainerTo(exposeScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-expose-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(exposeScrollerRef, 0)"
          />
          <D1Button
            data-testid="btn-expose-update"
            label="Call update()"
            size="sm"
            outline
            @click="callExposeUpdate"
          />
          <D1Button
            data-testid="btn-expose-get-values"
            label="Read getValues()"
            size="sm"
            outline
            @click="readExposeValues"
          />
        </DemoFlex>
        <div
          id="demo-headroom-expose-scroller"
          ref="exposeScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-expose-scroller"
        >
          <D1Headroom
            ref="exposeHeadroomRef"
            class="demo-headroom-page__header"
            data-testid="headroom-expose"
            scroll-element="#demo-headroom-expose-scroller"
            disappears
            :transform-threshold="120"
          >
            Expose Controlled Headroom
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`expose-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-expose-sticky"
          label="expose.isSticky"
          :value="exposeIsSticky"
        />
        <DemoValue
          data-testid="value-expose-values"
          label="expose.getValues()"
          :value="exposeValuesSnapshot ?? 'Click Read getValues() or Call update()'"
        />
      </D1Group>

      <D1Group label="Events (@headroom-scroll & @headroom-sticky)">
        <DemoFlex>
          <D1Button
            data-testid="btn-events-scroll-80"
            label="Scroll 80px"
            size="sm"
            @click="scrollContainerTo(eventsScrollerRef, 80)"
          />
          <D1Button
            data-testid="btn-events-reset"
            label="Scroll Top"
            size="sm"
            outline
            @click="scrollContainerTo(eventsScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-events-scroller"
          ref="eventsScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-events-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-events"
            scroll-element="#demo-headroom-events-scroller"
            disappears
            :transform-threshold="100"
            @headroom-scroll="handleHeadroomScroll"
            @headroom-sticky="handleHeadroomSticky"
          >
            Event Tracking Header
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`events-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-events-name"
          label="Last Event"
          :value="eventName || 'No events triggered yet'"
        />
        <DemoValue
          data-testid="value-events-scroll-count"
          label="headroomScroll Count"
          :value="scrollEventCount"
        />
        <DemoValue
          data-testid="value-events-sticky-count"
          label="headroomSticky Count"
          :value="stickyEventCount"
        />
        <DemoValue
          data-testid="value-events-payload"
          label="Event Payload"
          :value="lastEventPayload"
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <div
          id="demo-headroom-empty-scroller"
          class="demo-headroom-page__scroller"
          data-testid="headroom-empty-scroller"
        >
          <D1Headroom
            data-testid="headroom-empty"
            scroll-element="#demo-headroom-empty-scroller"
            :transform-threshold="60"
          />
          <div class="demo-headroom-page__content">
            <p>Above is an empty-slot D1Headroom instance inside a scrollable container.</p>
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`empty-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <DemoFlex>
          <D1Button
            data-testid="btn-zero-scroll"
            label="Scroll Zero Threshold (80px)"
            size="sm"
            @click="scrollContainerTo(zeroThresholdScrollerRef, 80)"
          />
          <D1Button
            data-testid="btn-zero-reset"
            label="Reset Zero Threshold"
            size="sm"
            outline
            @click="scrollContainerTo(zeroThresholdScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-zero-scroller"
          ref="zeroThresholdScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-zero-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-zero"
            scroll-element="#demo-headroom-zero-scroller"
            :transform-threshold="0"
          >
            Zero Threshold (transformThreshold: 0)
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`zero-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div
          id="demo-headroom-unicode-xss-scroller"
          class="demo-headroom-page__scroller"
          data-testid="headroom-unicode-xss-scroller"
        >
          <D1Headroom
            class="demo-headroom-page__header"
            data-testid="headroom-unicode-xss"
            scroll-element="#demo-headroom-unicode-xss-scroller"
            :transform-threshold="80"
          >
            {{ unicodePayload }} | {{ xssPayload }}
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p>{{ unicodePayload }}</p>
            <p>{{ xssPayload }}</p>
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`xss-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <DemoBox class="demo-headroom-page__narrow" size="sm">
          <div
            id="demo-headroom-narrow-scroller"
            ref="narrowScrollerRef"
            class="demo-headroom-page__scroller"
            data-testid="headroom-narrow-scroller"
          >
            <D1Headroom
              class="demo-headroom-page__header demo-headroom-page__unbroken"
              data-testid="headroom-narrow"
              scroll-element="#demo-headroom-narrow-scroller"
              :transform-threshold="80"
            >
              {{ unbrokenText }}
            </D1Headroom>
            <div class="demo-headroom-page__content demo-headroom-page__unbroken">
              <p>{{ unbrokenText }}</p>
              <p v-for="(paragraph, index) in fillerParagraphs" :key="`narrow-${index}`">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            data-testid="btn-lifecycle-toggle"
            label="Toggle Mount"
            size="sm"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <D1Button
            data-testid="btn-lifecycle-scroll"
            label="Scroll 80px"
            size="sm"
            outline
            @click="scrollContainerTo(lifecycleScrollerRef, 80)"
          />
          <D1Button
            data-testid="btn-lifecycle-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(lifecycleScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-headroom-lifecycle-scroller"
          ref="lifecycleScrollerRef"
          class="demo-headroom-page__scroller"
          data-testid="headroom-lifecycle-scroller"
        >
          <D1Headroom
            v-if="isLifecycleMounted"
            class="demo-headroom-page__header"
            data-testid="headroom-lifecycle"
            scroll-element="#demo-headroom-lifecycle-scroller"
            disappears
            :transform-threshold="100"
          >
            Conditionally Mounted Headroom (v-if)
          </D1Headroom>
          <div class="demo-headroom-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`lifecycle-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-lifecycle-mounted"
          label="Mounted"
          :value="isLifecycleMounted"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-headroom-page {
  &__scroller {
    position: relative;
    height: 260px;
    overflow-y: auto;
    border-width: 1px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
  }

  &__header {
    z-index: 2;
    padding: 12px 16px;
    border-bottom-width: 1px;
    @include ui.backgroundColor(ui.v('?sys.palette.surface'));
    @include ui.color(ui.v('?sys.palette.onSurface'));
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));

    &--accent {
      @include ui.backgroundColor(ui.v('?sys.palette.primary'));
      @include ui.color(ui.v('?sys.palette.onPrimary'));
    }

    &--transform {
      transition: background-color 0.15s ease;
      @include ui.backgroundColor(ui.v('?sys.palette.primary'), calc(0.08 + var(--d1-headroom-sys-percent, 0) * 0.2));
    }
  }

  &__content {
    padding: 16px;

    p {
      margin-top: 0;
      margin-bottom: 16px;
    }
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }

  &__unbroken {
    overflow-wrap: anywhere;
  }
}
</style>
