<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MotionTransformEmitOptions, MotionTransformExpose } from '@dxtmisha/constructor/MotionTransform'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const openManual = ref(false)
const openModelOpen = ref(false)
const openExternal = ref(false)
const isLifecycleMounted = ref(true)

const transformRef = ref<MotionTransformExpose | null>(null)
const ignoreElementRef = ref<HTMLElement | undefined>(undefined)

const xssPayload = '<img src=x onerror=alert(1)>'
const unicodePayload = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

const trackEvent = (name: string, payload?: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = payload === undefined ? 'undefined' : JSON.stringify(payload)
}

const onTransformEvent = (
  domEvent: Event | undefined,
  options: MotionTransformEmitOptions
): void => {
  trackEvent('transform', { eventType: domEvent?.type ?? 'none', ...options })
}

const statusValue = computed<string>(() => {
  if (transformRef.value) {
    return `isOpen: ${transformRef.value.getOpen()}, isShow: ${transformRef.value.isShow()}`
  }

  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Motion Transform">
    <D1Section>
      <D1Group label="Basic Transformation">
        <D1MotionTransform>
          <template #head>
            <span>Search something... (Click to expand)</span>
          </template>
          <template #body>
            <D1Input label="Search query" prefix-icon="search" autofocus/>
          </template>
        </D1MotionTransform>

        <D1MotionTransform :open="true">
          <template #head>
            <span>Initially Open (:open="true")</span>
          </template>
          <template #body>
            <span>Rendered in the open state on initial mount.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Animation Head Position">
        <D1MotionTransform animation-head-position="top">
          <template #head>
            <span>Top Anchor (Default) — Click to open</span>
          </template>
          <template #body>
            <span>With animationHeadPosition="top", the head remains stationary at the top while the body content expands smoothly below it.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform animation-head-position="toBottom">
          <template #head>
            <span>Bottom Reveal — Click to open</span>
          </template>
          <template #body>
            <span>With animationHeadPosition="toBottom", the head element moves towards the bottom together with the revealed content.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Section Mode (Persistent Header)">
        <D1MotionTransform section>
          <template #head>
            <span>Section Header (Always visible)</span>
          </template>
          <template #body>
            <span>In section mode, the head element stays visible alongside the body content, making it ideal for persistent section containers.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Adaptive Layouts">
        <D1MotionTransform adaptive="planeAlways">
          <template #head>
            <span>Always Plane Mode (No transform animations)</span>
          </template>
          <template #body>
            <span>In planeAlways mode, the component renders statically in plane layout where both head and body are always visible without motion transitions.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform adaptive="planeSm">
          <template #head>
            <span>Adaptive Plane (planeSm — Static on sm and above)</span>
          </template>
          <template #body>
            <span>Switches to static plane mode starting from sm breakpoint and above.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform adaptive="planeMd">
          <template #head>
            <span>Adaptive Plane (planeMd — Static on md and above)</span>
          </template>
          <template #body>
            <span>This layout automatically switches to plane mode on medium screens and above, while providing smooth transform transitions on smaller screens.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform adaptive="planeLg">
          <template #head>
            <span>Adaptive Plane (planeLg — Static on lg and above)</span>
          </template>
          <template #body>
            <span>Switches to static plane mode starting from lg breakpoint and above.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform adaptive="planeXl">
          <template #head>
            <span>Adaptive Plane (planeXl — Static on xl and above)</span>
          </template>
          <template #body>
            <span>Switches to static plane mode starting from xl breakpoint and above.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform adaptive="plane2xl">
          <template #head>
            <span>Adaptive Plane (plane2xl — Static on 2xl and above)</span>
          </template>
          <template #body>
            <span>Switches to static plane mode starting from 2xl breakpoint and above.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Click Open Control">
        <D1MotionTransform :click-open="true">
          <template #head>
            <span>Click Open Enabled (Default — click header to toggle)</span>
          </template>
          <template #body>
            <span>Header click opens and closes the content automatically.</span>
          </template>
        </D1MotionTransform>

        <DemoFlex>
          <D1Button
            :label="openExternal ? 'Close Externally' : 'Open Externally'"
            @click="openExternal = !openExternal"
          />
        </DemoFlex>
        <D1MotionTransform
          v-model:open="openExternal"
          :click-open="false"
        >
          <template #head>
            <span>Click Open Disabled (Header click ignored, use button above)</span>
          </template>
          <template #body>
            <span>This component ignores header clicks. It can only be toggled through external controls or v-model:open.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Auto Close & Outside Click Exclusion">
        <D1MotionTransform :auto-close="true">
          <template #head>
            <span>Auto Close Enabled (Default)</span>
          </template>
          <template #body>
            <span>Clicking anywhere outside this container will automatically close it.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform :auto-close="false">
          <template #head>
            <span>Auto Close Disabled</span>
          </template>
          <template #body="{ classes }">
            <span>This component remains open when clicking outside. Use the Close button or press Escape to close it.</span>
            <DemoFlex>
              <D1Button :class="classes.close" label="Close"/>
            </DemoFlex>
          </template>
        </D1MotionTransform>

        <DemoFlex>
          <D1Button
            class="demo-ignore-click"
            label="Ignored External Button"
          />
        </DemoFlex>
        <D1MotionTransform ignore-selector=".demo-ignore-click">
          <template #head>
            <span>Ignore Selector (.demo-ignore-click)</span>
          </template>
          <template #body>
            <span>Clicking the button above will NOT trigger auto-close because it matches the ignore-selector property.</span>
          </template>
        </D1MotionTransform>

        <DemoFlex>
          <div id="demo-ignore-id-zone">
            <D1Button label="Ignored by ID"/>
          </div>
          <div id="demo-ignore-ref-zone" ref="ignoreElementRef">
            <D1Button label="Ignored by HTMLElement Ref"/>
          </div>
        </DemoFlex>
        <D1MotionTransform ignore="#demo-ignore-id-zone">
          <template #head>
            <span>Ignore by ID Selector (ignore="#demo-ignore-id-zone")</span>
          </template>
          <template #body>
            <span>Clicking the ignored ID button above keeps this panel open.</span>
          </template>
        </D1MotionTransform>
        <D1MotionTransform :ignore="ignoreElementRef">
          <template #head>
            <span>Ignore by HTMLElement Ref (:ignore="ignoreElementRef")</span>
          </template>
          <template #body>
            <span>Clicking the element ref button above keeps this panel open.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Animation Show (Instant vs Transition)">
        <D1MotionTransform :animation-show="true">
          <template #head>
            <span>Animated Transition (Default)</span>
          </template>
          <template #body>
            <span>Smooth height and position transition using requestAnimationFrame and CSS transforms.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform :animation-show="false">
          <template #head>
            <span>Instant Toggle (animationShow: false)</span>
          </template>
          <template #body>
            <span>Opens and closes immediately without transition delays.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="SSR & DOM Lifecycle (in-dom, tagBody & Conditional Mount)">
        <D1MotionTransform in-dom>
          <template #head>
            <span>Rendered In DOM (Always preserved)</span>
          </template>
          <template #body>
            <span>The content is always present in the DOM even when closed. This is essential for SSR pre-rendering, search indexing, and retaining form state.</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform in-dom tag-body="article">
          <template #head>
            <span>Custom Tag: &lt;article&gt;</span>
          </template>
          <template #body>
            <span>This body container is rendered using a semantic &lt;article&gt; tag instead of the default &lt;section&gt; element.</span>
          </template>
        </D1MotionTransform>

        <DemoFlex>
          <D1Button
            :label="isLifecycleMounted ? 'Unmount Panel' : 'Mount Panel'"
            secondary
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1MotionTransform v-if="isLifecycleMounted">
          <template #head>
            <span>Conditional Mount Panel (v-if)</span>
          </template>
          <template #body>
            <span>Verifies clean timer, animation frame, and global click listener cleanup on unmount.</span>
          </template>
        </D1MotionTransform>
        <DemoValue label="isLifecycleMounted" :value="isLifecycleMounted"/>
      </D1Group>

      <D1Group label="Scoped Slots & Built-in Classes (classes.click, classes.none, classes.noneGlobal, classes.close)">
        <D1MotionTransform>
          <template #head="{ isOpen, isShow, classes, idControl, idBody, binds }">
            <DemoFlex>
              <span>Scoped Header</span>
              <D1Button
                :label="isOpen ? 'Status: OPEN' : 'Status: CLOSED'"
                size="sm"
                secondary
                :class="classes.click"
              />
              <span :class="classes.none">Ignored in head (classes.none)</span>
              <span>Show: {{ isShow }} | Control: {{ idControl }} | Body: {{ idBody }} | Expanded: {{ binds['aria-expanded'] }}</span>
            </DemoFlex>
          </template>
          <template #body="{ classes, idControl, idBody }">
            <span>The button below utilizes the built-in close class from scoped slot properties to dismiss the component (Control: {{ idControl }}, Body: {{ idBody }}):</span>
            <DemoFlex>
              <D1Button
                :class="classes.close"
                label="Dismiss with classes.close"
                primary
              />
              <span :class="classes.noneGlobal">Global ignored span (classes.noneGlobal)</span>
            </DemoFlex>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Accessibility (ARIA Attributes & Keyboard Navigation)">
        <span id="demo-mt-aria-label">External ARIA Label</span>
        <span id="demo-mt-aria-desc">Detailed description linked via aria-describedby.</span>
        <D1MotionTransform
          aria-labelledby="demo-mt-aria-label"
          aria-describedby="demo-mt-aria-desc"
        >
          <template #head>
            <span>ARIA Labelled & Described Panel (Tab, Enter, Escape)</span>
          </template>
          <template #body>
            <span>This panel connects aria-labelledby and aria-describedby to external semantic elements and supports Enter/Escape keyboard flows.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Empty, 0, Unicode, XSS, Narrow)">
        <D1MotionTransform>
          <template #head>
            <span>{{ '' }}0</span>
          </template>
          <template #body>
            <span>0</span>
          </template>
        </D1MotionTransform>

        <D1MotionTransform>
          <template #head>
            <span>Unicode & XSS Header: {{ unicodePayload }} | {{ xssPayload }}</span>
          </template>
          <template #body>
            <div class="demo-motion-transform-page__wrap">
              <p>{{ unicodePayload }}</p>
              <p>{{ xssPayload }}</p>
              <p>{{ unbrokenText }}</p>
            </div>
          </template>
        </D1MotionTransform>

        <DemoBox class="demo-motion-transform-page__narrow">
          <D1MotionTransform adaptive="planeAlways">
            <template #head>
              <span class="demo-motion-transform-page__wrap">Narrow Head: {{ unbrokenText }}</span>
            </template>
            <template #body>
              <span class="demo-motion-transform-page__wrap">Narrow Body: {{ unicodePayload }} {{ unbrokenText }}</span>
            </template>
          </D1MotionTransform>
        </DemoBox>
      </D1Group>

      <D1Group label="Two-Way Binding (v-model:open & v-model:model-open)">
        <DemoFlex>
          <D1Button
            :label="openManual ? 'Close v-model:open' : 'Open v-model:open'"
            @click="openManual = !openManual"
          />
          <D1Button
            :label="openModelOpen ? 'Close v-model:model-open' : 'Open v-model:model-open'"
            outline
            @click="openModelOpen = !openModelOpen"
          />
        </DemoFlex>
        <D1MotionTransform v-model:open="openManual">
          <template #head>
            <span>Controlled via v-model:open</span>
          </template>
          <template #body>
            <span>This component state is two-way synchronized with the openManual ref.</span>
          </template>
        </D1MotionTransform>
        <D1MotionTransform v-model:model-open="openModelOpen">
          <template #head>
            <span>Controlled via v-model:model-open</span>
          </template>
          <template #body>
            <span>This component state is two-way synchronized with the openModelOpen ref.</span>
          </template>
        </D1MotionTransform>
        <DemoValue label="openManual" :value="openManual"/>
        <DemoValue label="openModelOpen" :value="openModelOpen"/>
      </D1Group>

      <D1Group label="Programmatic Control via Ref">
        <DemoFlex>
          <D1Button
            label="toOpen()"
            @click="transformRef?.toOpen()"
          />
          <D1Button
            label="setOpen(true)"
            @click="transformRef?.setOpen(true)"
          />
          <D1Button
            label="toClose()"
            @click="transformRef?.toClose()"
          />
          <D1Button
            label="setOpen(false)"
            @click="transformRef?.setOpen(false)"
          />
          <D1Button
            label="toggle()"
            @click="transformRef?.toggle()"
          />
        </DemoFlex>
        <D1MotionTransform ref="transformRef">
          <template #head>
            <span>Programmatic Ref Control</span>
          </template>
          <template #body>
            <span>Controlled via exposed methods: toOpen, toClose, setOpen, and toggle. Inspecting state via getOpen() and isShow().</span>
          </template>
        </D1MotionTransform>
        <DemoValue :value="statusValue"/>
      </D1Group>

      <D1Group label="Events">
        <D1MotionTransform
          @update:open="(value) => trackEvent('update:open', value)"
          @update:model-open="(value) => trackEvent('update:modelOpen', value)"
          @transform="onTransformEvent"
          @transform-lite="(options) => trackEvent('transformLite', options)"
        >
          <template #head>
            <span>Event Tracking (@update:open / @update:model-open / @transform / @transform-lite)</span>
          </template>
          <template #body>
            <span>Toggling this component emits update:open, update:modelOpen, transform and transform-lite events with trigger source options.</span>
          </template>
        </D1MotionTransform>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-motion-transform-page {
  display: block;

  &__wrap {
    overflow-wrap: anywhere;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
