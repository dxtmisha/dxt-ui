<script setup lang="ts">
import { ref } from 'vue'
import { isDomRuntime } from '@dxtmisha/functional'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type MotionStickyTagOption = 'div' | 'header' | 'section'
type WindowScrollMode = 'default' | 'window'

const { eventName, onEvent } = useDemoEvent()

const fillerParagraphs: readonly string[] = [
  'Paragraph 1: Sticky headers keep navigation and section context anchored while users scroll through long content.',
  'Paragraph 2: MotionSticky monitors scroll offsets and toggles the configured activity class when the element reaches its sticky boundary.',
  'Paragraph 3: Scoping elementScroll to a container isolates scroll listeners from the main document viewport.',
  'Paragraph 4: Data attributes data-sticky and data-sticky-scroll update automatically alongside the sticky event.',
  'Paragraph 5: Polymorphic tag support lets sticky wrappers render semantic header, section, or div landmarks.',
  'Paragraph 6: Bottom filler lines guarantee sufficient overflow height so sticky activation and release can be verified reliably.'
]

const tagOptions: readonly MotionStickyTagOption[] = ['div', 'header', 'section']
const classActivityOptions: readonly { label: string, value: string | undefined }[] = [
  { label: 'Primary Stuck', value: 'demo-motion-sticky-page__header--stuck' },
  { label: 'Accent Subtle', value: 'demo-motion-sticky-page__header--accent' },
  { label: 'None (undefined)', value: undefined }
]

const xssPayload = '<img src=x onerror=alert(1)>'
const unicodePayload = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenText = 'SuperLongUnbrokenStickyTokenWithoutAnySpacesOrHyphens1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const longMultiSentenceText = 'This is an intentionally verbose sticky header message designed to verify multi-line text wrapping, line height, and sticky top boundary calculation inside constrained containers without clipping adjacent controls.'

// Basic group state
const basicScrollerRef = ref<HTMLElement | null>(null)
const basicStickyStatus = ref<boolean>(false)

// elementScroll formats state
const selectorScrollerRef = ref<HTMLElement | null>(null)
const selectorStickyStatus = ref<boolean>(false)
const elementScrollerRef = ref<HTMLElement | undefined>(undefined)
const elementRefStickyStatus = ref<boolean>(false)
const isWindowStickyVisible = ref<boolean>(false)
const windowScrollMode = ref<WindowScrollMode>('default')
const windowStickyStatus = ref<boolean>(false)
const windowTarget = isDomRuntime() ? window : undefined

// Dynamic classActivity toggle state
const classActivityScrollerRef = ref<HTMLElement | null>(null)
const activeClassActivity = ref<string | undefined>('demo-motion-sticky-page__header--stuck')
const classActivityStickyStatus = ref<boolean>(false)

// Polymorphic tag state
const tagScrollerRef = ref<HTMLElement | null>(null)
const activeTag = ref<MotionStickyTagOption>('header')
const tagStickyStatus = ref<boolean>(false)

// Default slot & compound content state
const slotScrollerRef = ref<HTMLElement | null>(null)
const slotStickyStatus = ref<boolean>(false)
const slotCounter = ref<number>(0)

// Events tracking state
const eventsScrollerRef = ref<HTMLElement | null>(null)
const stickyEventCount = ref<number>(0)
const lastStickyPayload = ref<string>('No events triggered yet')

// Accessibility state
const accessibilityScrollerRef = ref<HTMLElement | null>(null)
const accessibilityStickyStatus = ref<boolean>(false)
const accessibilityActionCount = ref<number>(0)

// Boundary & edge cases state
const emptyScrollerRef = ref<HTMLElement | null>(null)
const longTextScrollerRef = ref<HTMLElement | null>(null)
const narrowScrollerRef = ref<HTMLElement | null>(null)
const narrowStickyStatus = ref<boolean>(false)

// Lifecycle v-if state
const lifecycleScrollerRef = ref<HTMLElement | null>(null)
const isLifecycleMounted = ref<boolean>(true)
const lifecycleStickyStatus = ref<boolean>(false)

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

const scrollWindowBy = (delta: number): void => {
  if (isDomRuntime()) {
    window.scrollBy({ top: delta, behavior: 'auto' })
  }
}

const handleStickyEvent = (status: boolean): void => {
  stickyEventCount.value += 1
  lastStickyPayload.value = String(status)
  onEvent('sticky', status)
}

const toggleEventsScroll = (): void => {
  if (!eventsScrollerRef.value) {
    return
  }

  const nextTop = eventsScrollerRef.value.scrollTop > 40 ? 0 : 100
  scrollContainerTo(eventsScrollerRef.value, nextTop)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MotionSticky">
    <D1Section class="demo-motion-sticky-page">
      <D1Group label="Basic Sticky Header">
        <DemoFlex>
          <D1Button
            data-testid="btn-basic-scroll-down"
            label="Scroll Down (100px)"
            size="sm"
            @click="scrollContainerTo(basicScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-basic-scroll-step"
            label="Scroll +40px"
            size="sm"
            outline
            @click="scrollContainerBy(basicScrollerRef, 40)"
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
          id="demo-motion-sticky-basic-scroller"
          ref="basicScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-basic-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Scroll past this intro block so the sticky header attaches to the top edge.
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-basic"
            element-scroll="#demo-motion-sticky-basic-scroller"
            @sticky="basicStickyStatus = $event"
          >
            Sticky Header Area
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`basic-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-basic-sticky"
          label="Sticky State"
          :value="basicStickyStatus"
        />
      </D1Group>

      <D1Group label="elementScroll Formats (CSS Selector, HTMLElement Ref & Default Window)">
        <DemoFlex>
          <D1Button
            data-testid="btn-selector-scroll"
            label="Scroll Selector (100px)"
            size="sm"
            @click="scrollContainerTo(selectorScrollerRef, 100)"
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
          id="demo-motion-sticky-selector-scroller"
          ref="selectorScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-selector-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Lead spacing before selector-targeted sticky bar.
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-selector"
            element-scroll="#demo-motion-sticky-selector-scroller"
            @sticky="selectorStickyStatus = $event"
          >
            CSS Selector Target: #demo-motion-sticky-selector-scroller
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`selector-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-selector-sticky"
          label="Selector Sticky"
          :value="selectorStickyStatus"
        />

        <DemoFlex>
          <D1Button
            data-testid="btn-ref-scroll"
            label="Scroll Ref (100px)"
            size="sm"
            @click="scrollContainerTo(elementScrollerRef, 100)"
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
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-ref-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Lead spacing before HTMLElement ref-targeted sticky bar.
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-ref"
            :element-scroll="elementScrollerRef"
            @sticky="elementRefStickyStatus = $event"
          >
            HTMLElement Ref Target
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`ref-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-ref-sticky"
          label="Element Ref Sticky"
          :value="elementRefStickyStatus"
        />

        <DemoFlex>
          <D1Button
            data-testid="btn-window-toggle"
            :label="isWindowStickyVisible ? 'Hide Window Sticky' : 'Show Window Sticky'"
            size="sm"
            @click="isWindowStickyVisible = !isWindowStickyVisible"
          />
          <D1Button
            data-testid="btn-window-mode-default"
            label="Mode: Default (omitted)"
            :outline="windowScrollMode !== 'default'"
            size="sm"
            @click="windowScrollMode = 'default'"
          />
          <D1Button
            data-testid="btn-window-mode-explicit"
            label="Mode: Explicit Window"
            :outline="windowScrollMode !== 'window'"
            size="sm"
            @click="windowScrollMode = 'window'"
          />
          <D1Button
            data-testid="btn-window-scroll-down"
            label="Scroll Window +120px"
            size="sm"
            outline
            @click="scrollWindowBy(120)"
          />
        </DemoFlex>
        <DemoBox v-if="isWindowStickyVisible" class="demo-motion-sticky-page__window-box">
          <div class="demo-motion-sticky-page__lead">
            Scroll the page viewport past this element to trigger window-level sticky state.
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-window"
            :element-scroll="windowScrollMode === 'window' ? windowTarget : undefined"
            @sticky="windowStickyStatus = $event"
          >
            Window Scroll Target ({{ windowScrollMode === 'window' ? 'explicit window' : 'default omitted' }})
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p>Window sticky content area to allow viewport scroll overlap.</p>
          </div>
        </DemoBox>
        <DemoValue
          data-testid="value-window-sticky"
          label="Window Sticky"
          :value="windowStickyStatus"
        />
      </D1Group>

      <D1Group label="classActivity & Dynamic Toggle">
        <DemoFlex>
          <D1Button
            v-for="option in classActivityOptions"
            :key="option.label"
            :data-testid="`btn-class-${option.value ?? 'none'}`"
            :label="option.label"
            :outline="activeClassActivity !== option.value"
            size="sm"
            @click="activeClassActivity = option.value"
          />
          <D1Button
            data-testid="btn-class-scroll"
            label="Scroll 100px"
            size="sm"
            outline
            @click="scrollContainerTo(classActivityScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-class-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(classActivityScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-class-scroller"
          ref="classActivityScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-class-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Switch classActivity variants and scroll to observe live class toggling.
          </div>
          <D1MotionSticky
            :key="activeClassActivity ?? 'none'"
            class="demo-motion-sticky-page__header"
            :class-activity="activeClassActivity"
            data-testid="motion-sticky-class"
            element-scroll="#demo-motion-sticky-class-scroller"
            @sticky="classActivityStickyStatus = $event"
          >
            Dynamic classActivity: {{ activeClassActivity ?? 'undefined' }}
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`class-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-class-activity"
          label="Active classActivity"
          :value="activeClassActivity ?? 'none (undefined)'"
        />
        <DemoValue
          data-testid="value-class-sticky"
          label="Sticky State"
          :value="classActivityStickyStatus"
        />
      </D1Group>

      <D1Group label="Polymorphic Tag (div, header, section)">
        <DemoFlex direction="column">
          <DemoBox>
            <D1MotionSticky
              class="demo-motion-sticky-page__header"
              data-testid="motion-sticky-tag-div"
              tag="div"
            >
              Static &lt;div&gt; tag (default)
            </D1MotionSticky>
          </DemoBox>
          <DemoBox>
            <D1MotionSticky
              class="demo-motion-sticky-page__header"
              data-testid="motion-sticky-tag-header"
              tag="header"
            >
              Static &lt;header&gt; tag
            </D1MotionSticky>
          </DemoBox>
          <DemoBox>
            <D1MotionSticky
              class="demo-motion-sticky-page__header"
              data-testid="motion-sticky-tag-section"
              tag="section"
            >
              Static &lt;section&gt; tag
            </D1MotionSticky>
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
          <D1Button
            data-testid="btn-tag-scroll"
            label="Scroll 100px"
            size="sm"
            outline
            @click="scrollContainerTo(tagScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-tag-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(tagScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-tag-scroller"
          ref="tagScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-tag-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Reactive tag switching inside a scrollable container.
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-tag-reactive"
            element-scroll="#demo-motion-sticky-tag-scroller"
            :tag="activeTag"
            @sticky="tagStickyStatus = $event"
          >
            Reactive Tag: &lt;{{ activeTag }}&gt;
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`tag-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-tag-active"
          label="Active Tag"
          :value="activeTag"
        />
        <DemoValue
          data-testid="value-tag-sticky"
          label="Tag Sticky State"
          :value="tagStickyStatus"
        />
      </D1Group>

      <D1Group label="Default Slot & Compound Content">
        <DemoFlex>
          <D1Button
            data-testid="btn-slot-scroll"
            label="Scroll 100px"
            size="sm"
            @click="scrollContainerTo(slotScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-slot-reset"
            label="Reset Scroll"
            size="sm"
            outline
            @click="scrollContainerTo(slotScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-slot-scroller"
          ref="slotScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-slot-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Rich interactive slot content remains responsive when stuck.
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--accent"
            data-testid="motion-sticky-slot"
            element-scroll="#demo-motion-sticky-slot-scroller"
            @sticky="slotStickyStatus = $event"
          >
            <DemoFlex align="center" justify="between">
              <DemoFlex align="center">
                <span>Toolbar Slot</span>
                <D1Badge
                  :label="slotStickyStatus ? 'Sticky' : 'Resting'"
                  overlap="static"
                  :palette="slotStickyStatus ? 'green' : 'neutral'"
                />
              </DemoFlex>
              <DemoFlex align="center">
                <D1Button
                  data-testid="btn-slot-increment"
                  :label="`Clicks: ${slotCounter}`"
                  size="sm"
                  @click="slotCounter += 1"
                />
                <D1Button
                  data-testid="btn-slot-back-top"
                  label="Top"
                  size="sm"
                  outline
                  @click="scrollContainerTo(slotScrollerRef, 0)"
                />
              </DemoFlex>
            </DemoFlex>
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`slot-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-slot-counter"
          label="Slot Action Count"
          :value="slotCounter"
        />
      </D1Group>

      <D1Group label="Events (@sticky)">
        <DemoFlex>
          <D1Button
            data-testid="btn-events-scroll-down"
            label="Scroll 100px"
            size="sm"
            @click="scrollContainerTo(eventsScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-events-scroll-top"
            label="Scroll Top"
            size="sm"
            outline
            @click="scrollContainerTo(eventsScrollerRef, 0)"
          />
          <D1Button
            data-testid="btn-events-toggle"
            label="Toggle Sticky Scroll"
            size="sm"
            outline
            @click="toggleEventsScroll"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-events-scroller"
          ref="eventsScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-events-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Scroll past this lead section to fire @sticky(true), then return to top for @sticky(false).
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-events"
            element-scroll="#demo-motion-sticky-events-scroller"
            @sticky="handleStickyEvent"
          >
            Event Tracking Sticky Bar
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
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
          data-testid="value-events-payload"
          label="Last Payload"
          :value="lastStickyPayload"
        />
        <DemoValue
          data-testid="value-events-count"
          label="Event Count"
          :value="stickyEventCount"
        />
      </D1Group>

      <D1Group label="Accessibility (Landmarks, ARIA & Keyboard Navigation)">
        <DemoFlex>
          <D1Button
            data-testid="btn-a11y-scroll"
            label="Scroll 100px"
            size="sm"
            @click="scrollContainerTo(accessibilityScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-a11y-reset"
            label="Scroll Top"
            size="sm"
            outline
            @click="scrollContainerTo(accessibilityScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-a11y-scroller"
          ref="accessibilityScrollerRef"
          aria-label="Keyboard scrollable sticky region"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-a11y-scroller"
          role="region"
          tabindex="0"
        >
          <div class="demo-motion-sticky-page__lead">
            Focus this region and press ArrowDown or PageDown to scroll via keyboard.
          </div>
          <D1MotionSticky
            aria-label="Accessible sticky banner"
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-a11y"
            element-scroll="#demo-motion-sticky-a11y-scroller"
            role="banner"
            tag="header"
            @sticky="accessibilityStickyStatus = $event"
          >
            <DemoFlex align="center" justify="between">
              <span>Accessible &lt;header role="banner"&gt;</span>
              <DemoFlex align="center">
                <D1Button
                  data-testid="btn-a11y-focus-action"
                  label="Focus Action"
                  size="sm"
                  @click="accessibilityActionCount += 1"
                />
                <D1Button
                  aria-label="Scroll region back to top"
                  data-testid="btn-a11y-icon-top"
                  icon="arrow_upward"
                  size="sm"
                  outline
                  @click="scrollContainerTo(accessibilityScrollerRef, 0)"
                />
              </DemoFlex>
            </DemoFlex>
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`a11y-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <DemoValue
          data-testid="value-a11y-sticky"
          label="Accessible Sticky State"
          :value="accessibilityStickyStatus"
        />
        <DemoValue
          data-testid="value-a11y-actions"
          label="Focusable Action Count"
          :value="accessibilityActionCount"
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <D1Button
            data-testid="btn-empty-scroll"
            label="Scroll Empty Slot (100px)"
            size="sm"
            @click="scrollContainerTo(emptyScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-empty-reset"
            label="Reset Empty Slot"
            size="sm"
            outline
            @click="scrollContainerTo(emptyScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-empty-scroller"
          ref="emptyScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-empty-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Empty and whitespace-only MotionSticky elements below:
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-empty"
            element-scroll="#demo-motion-sticky-empty-scroller"
          />
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            data-testid="motion-sticky-whitespace"
            element-scroll="#demo-motion-sticky-empty-scroller"
          >{{ '   ' }}</D1MotionSticky>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            data-testid="motion-sticky-zero"
            element-scroll="#demo-motion-sticky-empty-scroller"
          >{{ 0 }}</D1MotionSticky>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            data-testid="motion-sticky-negative"
            element-scroll="#demo-motion-sticky-empty-scroller"
          >{{ -12.5 }}</D1MotionSticky>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            data-testid="motion-sticky-single-char"
            element-scroll="#demo-motion-sticky-empty-scroller"
          >A</D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`empty-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <DemoFlex>
          <D1Button
            data-testid="btn-long-scroll"
            label="Scroll Long Text (100px)"
            size="sm"
            @click="scrollContainerTo(longTextScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-long-reset"
            label="Reset Long Text"
            size="sm"
            outline
            @click="scrollContainerTo(longTextScrollerRef, 0)"
          />
        </DemoFlex>
        <div
          id="demo-motion-sticky-long-scroller"
          ref="longTextScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-long-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Long text, unbroken token, Unicode, and XSS-safe string content:
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header demo-motion-sticky-page__unbroken"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-long-text"
            element-scroll="#demo-motion-sticky-long-scroller"
          >
            {{ longMultiSentenceText }}
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content demo-motion-sticky-page__unbroken">
            <p>{{ unbrokenText }}</p>
            <p>{{ unicodePayload }} | {{ xssPayload }}</p>
            <p v-for="(paragraph, index) in fillerParagraphs" :key="`long-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <DemoFlex>
          <D1Button
            data-testid="btn-narrow-scroll"
            label="Scroll Narrow Box (100px)"
            size="sm"
            @click="scrollContainerTo(narrowScrollerRef, 100)"
          />
          <D1Button
            data-testid="btn-narrow-reset"
            label="Reset Narrow Box"
            size="sm"
            outline
            @click="scrollContainerTo(narrowScrollerRef, 0)"
          />
        </DemoFlex>
        <DemoBox class="demo-motion-sticky-page__narrow" size="sm">
          <div
            id="demo-motion-sticky-narrow-scroller"
            ref="narrowScrollerRef"
            class="demo-motion-sticky-page__scroller"
            data-testid="motion-sticky-narrow-scroller"
          >
            <div class="demo-motion-sticky-page__lead">
              Narrow container lead block.
            </div>
            <D1MotionSticky
              class="demo-motion-sticky-page__header demo-motion-sticky-page__unbroken"
              class-activity="demo-motion-sticky-page__header--stuck"
              data-testid="motion-sticky-narrow"
              element-scroll="#demo-motion-sticky-narrow-scroller"
              @sticky="narrowStickyStatus = $event"
            >
              {{ unbrokenText }}
            </D1MotionSticky>
            <div class="demo-motion-sticky-page__content demo-motion-sticky-page__unbroken">
              <p v-for="(paragraph, index) in fillerParagraphs" :key="`narrow-${index}`">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </DemoBox>
        <DemoValue
          data-testid="value-narrow-sticky"
          label="Narrow Box Sticky"
          :value="narrowStickyStatus"
        />

        <div
          id="demo-motion-sticky-short-scroller"
          class="demo-motion-sticky-page__scroller demo-motion-sticky-page__scroller--short"
          data-testid="motion-sticky-short-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Non-overflowing container (no scroll height).
          </div>
          <D1MotionSticky
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-short"
            element-scroll="#demo-motion-sticky-short-scroller"
          >
            Non-scrollable container sticky bar
          </D1MotionSticky>
        </div>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount (v-if)">
        <DemoFlex>
          <D1Button
            data-testid="btn-lifecycle-toggle"
            :label="isLifecycleMounted ? 'Unmount Sticky' : 'Mount Sticky'"
            size="sm"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <D1Button
            data-testid="btn-lifecycle-scroll"
            label="Scroll 100px"
            size="sm"
            outline
            @click="scrollContainerTo(lifecycleScrollerRef, 100)"
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
          id="demo-motion-sticky-lifecycle-scroller"
          ref="lifecycleScrollerRef"
          class="demo-motion-sticky-page__scroller"
          data-testid="motion-sticky-lifecycle-scroller"
        >
          <div class="demo-motion-sticky-page__lead">
            Toggle mount/unmount while scrolled or resting to verify listener and animationFrame cleanup.
          </div>
          <D1MotionSticky
            v-if="isLifecycleMounted"
            class="demo-motion-sticky-page__header"
            class-activity="demo-motion-sticky-page__header--stuck"
            data-testid="motion-sticky-lifecycle"
            element-scroll="#demo-motion-sticky-lifecycle-scroller"
            @sticky="lifecycleStickyStatus = $event"
          >
            Conditionally Mounted MotionSticky (v-if)
          </D1MotionSticky>
          <div class="demo-motion-sticky-page__content">
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
        <DemoValue
          data-testid="value-lifecycle-sticky"
          label="Lifecycle Sticky State"
          :value="lifecycleStickyStatus"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-motion-sticky-page {
  &__scroller {
    position: relative;
    height: 260px;
    overflow-y: auto;
    border-style: solid;
    border-width: 1px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');

    &--short {
      height: auto;
      max-height: 260px;
    }
  }

  &__lead {
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
    @include ui.color(ui.v('?sys.palette.onSurface'), ui.v('?sys.opacity.surface.medium'));
  }

  &__header {
    top: 0;
    z-index: 2;
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
    border-bottom-style: solid;
    border-bottom-width: 1px;
    @include ui.backgroundColor(ui.v('?sys.palette.surface'));
    @include ui.color(ui.v('?sys.palette.onSurface'));
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

    &--stuck {
      @include ui.backgroundColor(ui.v('?sys.palette.primary'));
      @include ui.color(ui.v('?sys.palette.onPrimary'));
      @include ui.borderColor(ui.v('?sys.palette.primary'));
      box-shadow: ui.v('?sys.shadow.md');
    }

    &--accent {
      @include ui.backgroundColor(ui.v('?sys.palette.primary'), 0.14);
      @include ui.color(ui.v('?sys.palette.primary'));
      @include ui.borderColor(ui.v('?sys.palette.primary'));
    }
  }

  &__content {
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');

    p {
      margin-top: 0;
      margin-bottom: ui.v('?sys.spacing.md');
    }
  }

  &__window-box {
    width: 100%;
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
