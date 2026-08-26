<script setup lang="ts">
import { ref } from 'vue'
import type { InputImageItem } from '@dxtmisha/constructor/InputImage'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const demoImage1 = 'https://picsum.photos/600/400?random=1'
const demoImage2 = 'https://picsum.photos/600/400?random=2'

const valueBasic = ref<InputImageItem>({
  value: demoImage1,
  crop: [15, 20, 15, 20]
})

const valueControlled = ref<InputImageItem>({
  value: demoImage2,
  crop: [10, 10, 10, 10]
})

const inputImageRef = ref<any>(null)
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="InputImage">
    <D1Section>
      <D1Group label="Basic (Interactive v-model)">
        <DemoFlex>
          <D1Button label="Set Image 1" @click="valueBasic = { value: demoImage1, crop: [10, 15, 10, 15] }" />
          <D1Button label="Set Image 2" @click="valueBasic = { value: demoImage2, crop: [25, 25, 25, 25] }" />
          <D1Button label="Clear" @click="valueBasic = undefined" />
        </DemoFlex>
        <D1InputImage
          label="User Avatar"
          helperMessage="Drop an image here or click to select"
          v-model="valueBasic"
        />
        <DemoValue :value="valueBasic" label="Current v-model value" />
      </D1Group>

      <D1Group label="Features & Customization">
        <D1InputImage
          label="Profile Banner"
          dropzoneLabel="Custom Dropzone Label"
          dropzoneDescription="SVG, PNG, JPG up to 2000px"
          :maxPixel="2000"
          counterShow
        />
        <D1InputImage
          label="Document Scan"
          :maxFileSize="1024 * 1024 * 2"
          counterType="size"
          counterShow
          helperMessage="Max file size: 2MB"
        />
        <D1InputImage
          label="High-Resolution Photo"
          :maxPixel="4000"
          counterType="pixel"
          counterShow
        />
      </D1Group>

      <D1Group label="States">
        <D1InputImage
          label="Disabled (with image)"
          :value="{ value: demoImage1, crop: [10, 10, 10, 10] }"
          disabled
        />
        <D1InputImage
          label="Disabled (empty)"
          disabled
        />
        <D1InputImage
          label="Readonly"
          :value="{ value: demoImage2, crop: [20, 20, 20, 20] }"
          readonly
        />
        <D1InputImage
          label="Skeleton"
          isSkeleton
        />
      </D1Group>

      <D1Group label="Programmatic Control (Expose)">
        <DemoFlex>
          <D1Button label="Open Picker (open())" @click="inputImageRef?.open()" />
          <D1Button label="Clear Image (clear())" @click="inputImageRef?.clear()" />
        </DemoFlex>
        <D1InputImage
          ref="inputImageRef"
          label="Controlled Image"
          v-model="valueControlled"
        />
        <DemoValue :value="valueControlled" label="Controlled Value" />
      </D1Group>

      <D1Group label="Events">
        <D1InputImage
          label="Event Tracker"
          @input="(event, value) => onEvent('input', event, value)"
          @input-lite="(value) => onEvent('inputLite', value)"
          @change="(event, value) => onEvent('change', event, value)"
          @change-lite="(value) => onEvent('changeLite', value)"
        />
        <DemoValue :value="eventName" label="Last Event" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
