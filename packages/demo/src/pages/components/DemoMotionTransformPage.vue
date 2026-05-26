<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MotionTransformExpose } from '@dxtmisha/constructor/MotionTransform'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Reactive value for manual V-Model control / Реактивное значение для ручного управления V-Model */
const openManual = ref(false)

/** Ref to the MotionTransform component instance / Ссылка на экземпляр компонента MotionTransform */
const mtRef = ref<MotionTransformExpose | null>(null)

/** Reactive value for printing the component status / Реактивное значение для вывода статуса компонента */
const statusValue = computed<string>(() => {
  if (mtRef.value) {
    return `isOpen: ${mtRef.value.getOpen()}, isShow: ${mtRef.value.isShow()}`
  } else {
    return 'Ref not initialized'
  }
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Motion Transform">
    <D1Section>
      <D1Group label="Basic Transformation">
        <D1MotionTransform>
          <template #head>
            <span>Search something...</span>
          </template>
          <template #body>
            <D1Input label="Search" prefix-icon="search" autofocus />
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Animation Head Position (toBottom)">
        <D1MotionTransform
          animation-head-position="toBottom"
        >
          <template #head>
            <span>Bottom Reveal</span>
          </template>
          <template #body>
            <span>The head stays at the bottom during transformation. This is a demonstration of how the component behaves when the animation head position is set to bottom. The content here can be much larger, and the component will expand smoothly to accommodate it. It allows for a unique user experience where the triggering element remains anchored at the bottom.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Section Mode (Plane Layout)">
        <D1MotionTransform
          section
        >
          <template #head>
            <span>Section Header (Persistent)</span>
          </template>
          <template #body>
            <span>In section mode, the head remains visible alongside the body content. This mode is useful for creating layouts where you want a persistent header while the main content area changes or reveals more information. You can put lists, paragraphs, or any other components here to build complex, interactive sections that respond to user input or state changes.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Adaptive (Plane Always)">
        <D1MotionTransform
          adaptive="planeAlways"
        >
          <template #head>
            <span>Always Plane</span>
          </template>
          <template #body>
            <span>This component is always in plane mode (no animation, both head and body visible). In this mode, the MotionTransform acts more like a static layout component, where both the head and body are rendered as regular elements on the page without any motion effects triggered by state changes.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="Auto Close">
        <D1MotionTransform>
          <template #head>
            <span>Auto Close Enabled (Default)</span>
          </template>
          <template #body>
            <span>This component will close automatically when you click outside of it. This is the default behavior. Try clicking anywhere outside this box.</span>
          </template>
        </D1MotionTransform>
        <D1MotionTransform :auto-close="false">
          <template #head>
            <span>Auto Close Disabled</span>
          </template>
          <template #body>
            <span>This component will NOT close when you click outside. You must manually toggle it by clicking the head again or using another control.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="In Dom Rendering">
        <D1MotionTransform in-dom>
          <template #head>
            <span>Rendered In DOM (Always)</span>
          </template>
          <template #body>
            <span>The content of this body is always present in the DOM, even when closed. This is useful for SEO or when you need the content to be accessible by scripts at all times.</span>
          </template>
        </D1MotionTransform>
      </D1Group>

      <D1Group label="V-Model Control">
        <DemoFlex>
          <D1Button
            :label="openManual ? 'Close' : 'Open'"
            @click="openManual = !openManual"
           />
        </DemoFlex>
        <D1MotionTransform v-model:open="openManual">
          <template #head>
            <span>Controlled by Button</span>
          </template>
          <template #body>
            <span>This transformation is controlled by the button above via v-model:open. You can still click here to close it, and the button's label will update accordingly.</span>
          </template>
        </D1MotionTransform>
        <DemoValue :value="openManual" />
      </D1Group>

      <D1Group label="Control via Ref Methods">
        <DemoFlex>
          <D1Button
            label="Open (toOpen)"
            @click="mtRef?.toOpen()"
          />
          <D1Button
            label="Open (setOpen)"
            @click="mtRef?.setOpen(true)"
          />
          <D1Button
            label="Close (toClose)"
            @click="mtRef?.toClose()"
          />
          <D1Button
            label="Close (setOpen false)"
            @click="mtRef?.setOpen(false)"
          />
          <D1Button
            label="Toggle (toggle)"
            @click="mtRef?.toggle()"
          />
        </DemoFlex>
        <D1MotionTransform ref="mtRef">
          <template #head>
            <span>Methods Control Demo</span>
          </template>
          <template #body>
            <span>This component is controlled programmatically via its exposed methods: toOpen, toClose, and toggle. You can also inspect its state using getOpen() and isShow().</span>
          </template>
        </D1MotionTransform>
        <DemoValue :value="statusValue" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
