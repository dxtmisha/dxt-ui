<script setup lang="ts">
import { ref } from 'vue'
import type { InputFileDropzoneExpose } from '@dxtmisha/constructor/InputFileDropzone'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const uploadedNames = ref<string[]>([])
const rejectedNames = ref<string[]>([])
const exposeRef = ref<InputFileDropzoneExpose>()
const exposeOpened = ref<boolean>(false)
const dynamicDisabled = ref<boolean>(false)
const dynamicValidation = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const onFilesAdd = (files: File[]): void => {
  uploadedNames.value = files.map(file => `${file.name} (${file.size} B)`)
  onEvent('add', files.map(file => file.name).join(', '))
}

const onFilesReject = (files: File[]): void => {
  rejectedNames.value = files.map(file => `${file.name} (${file.size} B)`)
  onEvent('reject', files.map(file => file.name).join(', '))
}

const callOpen = (): void => {
  exposeRef.value?.open()
  exposeOpened.value = true
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="InputFileDropzone">
    <D1Section>
      <D1Block label="General Usage & Constraints">
        <D1Group label="Accept, Multiple & MaxFileSize (<= 512 B)">
          <D1InputFileDropzone
            label="Upload documents"
            helper-message="Accepts .txt and images up to 512 bytes"
            accept=".txt,image/*"
            :multiple="true"
            :max-file-size="512"
            data-testid="ifd-basic"
            @add="onFilesAdd"
            @reject="onFilesReject"
          />
          <DemoValue :value="uploadedNames.join('; ')" data-testid="ifd-files-val" />
          <DemoValue :value="rejectedNames.join('; ')" data-testid="ifd-rejected-val" />
          <DemoValue :value="eventName" data-testid="ifd-event-log" />
        </D1Group>

        <D1Group label="Validation & Warning Messages">
          <DemoFlex>
            <D1Button
              :label="dynamicValidation ? 'Clear Validation' : 'Trigger Validation'"
              data-testid="ifd-toggle-validation"
              @click="dynamicValidation = !dynamicValidation"
            />
          </DemoFlex>
          <D1InputFileDropzone
            label="Required attachments"
            :validation-message="dynamicValidation ? 'At least one file is required' : undefined"
            warning-message="Large files are automatically skipped"
            data-testid="ifd-validation"
          />
        </D1Group>
      </D1Block>

      <D1Block label="States (Disabled, Readonly, Skeleton)">
        <D1Group label="Interactive Toggle & Readonly">
          <DemoFlex>
            <D1Button
              :label="dynamicDisabled ? 'Enable Dropzone' : 'Disable Dropzone'"
              data-testid="ifd-toggle-disabled"
              @click="dynamicDisabled = !dynamicDisabled"
            />
          </DemoFlex>
          <D1InputFileDropzone
            label="Toggleable Disabled Dropzone"
            :disabled="dynamicDisabled"
            helper-message="Controlled via button above"
            data-testid="ifd-disabled"
          />
          <D1InputFileDropzone
            label="Readonly Dropzone"
            :readonly="true"
            helper-message="Upload is locked in readonly mode"
            data-testid="ifd-readonly"
          />
        </D1Group>

        <D1Group label="Skeleton">
          <D1Skeleton :active="true">
            <D1InputFileDropzone
              :is-skeleton="true"
              label="Loading Dropzone"
              helper-message="Preparing upload area"
              data-testid="ifd-skeleton"
            />
          </D1Skeleton>
        </D1Group>
      </D1Block>

      <D1Block label="Slots & Expose API">
        <D1Group label="Custom Slots (#label, #default) & open()">
          <DemoFlex>
            <D1Button label="Open File Dialog" data-testid="ifd-btn-open" @click="callOpen" />
            <DemoValue :value="exposeOpened" data-testid="ifd-open-called" />
          </DemoFlex>
          <D1InputFileDropzone
            ref="exposeRef"
            text-dropzone="Drop files here or click to browse"
            data-testid="ifd-slots"
            @add="onFilesAdd"
          >
            <template #label>
              <strong data-testid="ifd-slot-label">Custom Slot Label</strong>
            </template>
            <template #default>
              <em data-testid="ifd-slot-default">Custom Dropzone Body Slot</em>
            </template>
          </D1InputFileDropzone>
        </D1Group>
      </D1Block>

      <D1Block label="Layout, Narrow Container & Lifecycle">
        <D1Group label="Narrow Container (max-width: 260px)">
          <DemoBox style="max-width: 260px;" data-testid="ifd-narrow-box">
            <D1InputFileDropzone
              label="Compact Dropzone"
              helper-message="Fits narrow container cleanly"
              data-testid="ifd-narrow"
            />
          </DemoBox>
        </D1Group>

        <D1Group label="Lifecycle Toggle (v-if Mount/Unmount)">
          <DemoFlex>
            <D1Button
              :label="isMounted ? 'Unmount Dropzone' : 'Mount Dropzone'"
              data-testid="ifd-toggle-mount"
              @click="isMounted = !isMounted"
            />
          </DemoFlex>
          <D1InputFileDropzone
            v-if="isMounted"
            label="Conditional Dropzone"
            data-testid="ifd-conditional"
          />
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
