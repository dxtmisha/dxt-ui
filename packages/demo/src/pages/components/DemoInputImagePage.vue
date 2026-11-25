<script setup lang="ts">
import { ref } from 'vue'
import type { InputImageExpose, InputImageItem } from '@dxtmisha/constructor/InputImage'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const demoImage1 = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#2563eb"/><circle cx="200" cy="180" r="90" fill="#93c5fd"/><rect x="310" y="100" width="210" height="200" rx="20" fill="#1d4ed8"/></svg>'
)}`
const demoImage2 = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="#059669"/><polygon points="200,50 350,330 50,330" fill="#6ee7b7"/></svg>'
)}`

const valueBasic = ref<InputImageItem>({
  value: demoImage1,
  crop: [15, 20, 15, 20]
})

const valueControlled = ref<InputImageItem>({
  value: demoImage2,
  crop: [10, 10, 10, 10]
})

const valueDynamic = ref<InputImageItem>(demoImage1)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)

const inputImageRef = ref<InputImageExpose>()
const exposeOutput = ref<string>('No expose action executed yet')
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const handleEvent = (name: string, event: unknown, value?: unknown): void => {
  onEvent(name, event, value)
  eventPayload.value = JSON.stringify({
    name,
    value
  })
}

const handleReadExposed = (): void => {
  const current = inputImageRef.value?.getValue()
  const valid = inputImageRef.value?.checkValidity()
  const message = inputImageRef.value?.getValidationMessage()
  exposeOutput.value = `hasValue=${Boolean(current)}, valid=${String(valid)}, message=${message || 'none'}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputImage">
    <D1Section>
      <D1Group label="Basic (Interactive v-model)">
        <DemoFlex>
          <D1Button label="Set Image 1" @click="valueBasic = { value: demoImage1, crop: [10, 15, 10, 15] }"/>
          <D1Button label="Set Image 2" @click="valueBasic = { value: demoImage2, crop: [25, 25, 25, 25] }"/>
          <D1Button label="Clear" @click="valueBasic = ''"/>
        </DemoFlex>
        <D1InputImage
          v-model="valueBasic"
          label="User Avatar"
          helper-message="Drop an image here or click to select"
        />
        <DemoValue :value="valueBasic" label="Current v-model value"/>
      </D1Group>

      <D1Group label="Sizes (sm, md, lg)">
        <DemoFlex>
          <DemoBox>
            <D1InputImage
              label="Small (sm)"
              size="sm"
              :value="demoImage1"
            />
          </DemoBox>
          <DemoBox>
            <D1InputImage
              label="Medium (md)"
              size="md"
              :value="demoImage1"
            />
          </DemoBox>
          <DemoBox>
            <D1InputImage
              label="Large (lg)"
              size="lg"
              :value="demoImage2"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Counters, Customization & Slots">
        <D1InputImage
          label="Profile Banner"
          dropzone-label="Custom Dropzone Label"
          dropzone-description="SVG, PNG, JPG up to 2000px"
          accept="image/png,image/jpeg,image/svg+xml"
          :max-pixel="2000"
          :value="demoImage1"
        />
        <D1InputImage
          label="Document Scan (Size Mode)"
          :max-file-size="1024 * 1024 * 2"
          counter-type="size"
          helper-message="Max file size: 2MB"
          :value="demoImage2"
        />
        <D1InputImage
          label="Hidden Counter Mode"
          counter-type="hide"
          :max-pixel="4000"
          :value="demoImage1"
        />
        <D1InputImage
          helper-message="Custom actions icons and #label slot"
          icon-upload="photo_camera"
          icon-close="delete"
          text-change="Replace photo"
          text-cancel="Remove photo"
          :value="demoImage2"
        >
          <template #label>
            <strong>Custom Image Slot Label (Unicode: Tiếng Việt / Кириллица)</strong>
          </template>
        </D1InputImage>
      </D1Group>

      <D1Group label="States, Validation & Interactive Toggles">
        <DemoFlex>
          <DemoBox>
            <D1InputImage
              label="Disabled (with image)"
              :value="{ value: demoImage1, crop: [10, 10, 10, 10] }"
              disabled
            />
          </DemoBox>
          <DemoBox>
            <D1InputImage
              label="Disabled (empty)"
              disabled
            />
          </DemoBox>
          <DemoBox>
            <D1InputImage
              label="Readonly"
              :value="{ value: demoImage2, crop: [20, 20, 20, 20] }"
              readonly
            />
          </DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1InputImage
                label="Skeleton"
                is-skeleton
              />
            </D1Skeleton>
          </DemoBox>
          <DemoBox>
            <D1InputImage
              label="Validation Error"
              validation-message="Profile image is required"
              required
            />
          </DemoBox>
        </DemoFlex>

        <D1Skeleton :active="isDynamicSkeleton">
          <D1InputImage
            v-model="valueDynamic"
            label="Dynamic State Image"
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :is-skeleton="isDynamicSkeleton"
          />
        </D1Skeleton>
        <DemoFlex>
          <D1Button label="Toggle Disabled" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Skeleton" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Control (Expose)">
        <DemoFlex>
          <D1Button label="Open Picker (open())" @click="inputImageRef?.open()"/>
          <D1Button label="Clear Image (clear())" @click="inputImageRef?.clear()"/>
          <D1Button label="Set Image (setValue())" @click="inputImageRef?.setValue(demoImage1)"/>
          <D1Button label="Read Expose State" outline @click="handleReadExposed"/>
        </DemoFlex>
        <D1InputImage
          ref="inputImageRef"
          v-model="valueControlled"
          label="Controlled Image"
        />
        <DemoValue :value="exposeOutput" label="Expose output"/>
        <DemoValue :value="valueControlled" label="Controlled Value"/>
      </D1Group>

      <D1Group label="Events">
        <D1InputImage
          label="Event Tracker"
          @input="(event, value) => handleEvent('input', event, value)"
          @input-lite="(value) => handleEvent('inputLite', undefined, value)"
          @change="(event, value) => handleEvent('change', event, value)"
          @change-lite="(value) => handleEvent('changeLite', undefined, value)"
          @focus="(event) => handleEvent('focus', event)"
          @blur="(event) => handleEvent('blur', event)"
          @update:model-value="(value) => handleEvent('update:modelValue', undefined, value)"
        />
        <DemoValue :value="eventName" label="Last Event"/>
        <DemoValue :value="eventPayload" label="Last Payload"/>
      </D1Group>

      <D1Group label="Boundary & Lifecycle">
        <DemoBox style="width: 240px;">
          <D1InputImage
            label="Narrow Container (240px)"
            :value="demoImage1"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button label="Toggle Mount (v-if)" outline @click="isLifecycleMounted = !isLifecycleMounted"/>
        </DemoFlex>
        <D1InputImage
          v-if="isLifecycleMounted"
          label="Lifecycle Managed Image"
          :max-pixel="1200"
          :value="demoImage2"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
