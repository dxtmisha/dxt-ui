<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MotionTransformExpose } from '@dxtmisha/constructor/MotionTransform'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()

/** Reactive value for manual v-model control / Реактивное значение для ручного управления v-model */
const openManual = ref(false)

/** Reactive value for click-open disabled demo / Реактивное значение для демонстрации отключенного клика */
const openExternal = ref(false)

/** Ref to the MotionTransform component instance / Ссылка на экземпляр компонента MotionTransform */
const transformRef = ref<MotionTransformExpose | null>(null)

/** Reactive value for printing the component status / Реактивное значение для вывода статуса компонента */
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
            <D1Input label="Search query" prefix-icon="search" autofocus />
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

        <D1MotionTransform adaptive="planeMd">
          <template #head>
            <span>Adaptive Plane (planeMd — Static on desktop, animated on mobile)</span>
          </template>
          <template #body>
            <span>This layout automatically switches to plane mode on medium screens and above, while providing smooth transform transitions on smaller screens.</span>
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
          <template #body>
            <span>This component remains open when clicking outside. You must click the header again to close it.</span>
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

      <D1Group label="In-DOM Rendering (SSR & DOM Retention)">
        <D1MotionTransform in-dom>
          <template #head>
            <span>Rendered In DOM (Always preserved)</span>
          </template>
          <template #body>
            <span>The content is always present in the DOM even when closed. This is essential for SSR pre-rendering, search indexing, and retaining form state.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Custom Body Tag (tagBody)">
        <D1MotionTransform in-dom tag-body="article">
          <template #head>
            <span>Custom Tag: &lt;article&gt;</span>
          </template>
          <template #body>
            <span>This body container is rendered using a semantic &lt;article&gt; tag instead of the default &lt;section&gt; element.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Scoped Slots & Built-in Close Trigger">
        <D1MotionTransform>
          <template #head="{ isOpen }">
            <DemoFlex>
              <span>Scoped Header</span>
              <D1Button
                :label="isOpen ? 'Status: OPEN' : 'Status: CLOSED'"
                size="sm"
                secondary
              />
            </DemoFlex>
          </template>
          <template #body="{ classes }">
            <span>The button below utilizes the built-in close class from scoped slot properties to dismiss the component:</span>
            <DemoFlex>
              <D1Button
                :class="classes.close"
                label="Dismiss with classes.close"
                primary
              />
            </DemoFlex>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Two-Way Binding (v-model:open)">
        <DemoFlex>
          <D1Button
            :label="openManual ? 'Close via Button' : 'Open via Button'"
            @click="openManual = !openManual"
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
        <DemoValue :value="openManual" />
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
        <DemoValue :value="statusValue" />
      </D1Group>

      <D1Group label="Events">
        <D1MotionTransform
          @transform="onEvent('transform')"
          @transform-lite="onEvent('transform-lite')"
        >
          <template #head>
            <span>Event Tracking (@transform / @transform-lite)</span>
          </template>
          <template #body>
            <span>Toggling this component emits transform and transform-lite events with trigger source options.</span>
          </template>
        </D1MotionTransform>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-motion-transform-page {
  display: block;
}
</style>
