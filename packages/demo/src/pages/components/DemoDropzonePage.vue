<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DropzoneExpose } from '@dxtmisha/constructor/Dropzone'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const singleFiles = ref<FileList | undefined>(undefined)
const multipleFiles = ref<FileList | undefined>(undefined)
const controlledDropzoneRef = ref<DropzoneExpose | null>(null)
const controlledFiles = ref<FileList | undefined>(undefined)

const formatFileList = (files?: FileList): string => {
  if (!files || files.length === 0) {
    return 'No files selected'
  }

  return Array.from(files).map(file => file.name).join(', ')
}

const singleFilesLabel = computed(() => formatFileList(singleFiles.value))
const multipleFilesLabel = computed(() => formatFileList(multipleFiles.value))
const controlledFilesLabel = computed(() => formatFileList(controlledFiles.value))

const onOpenDialog = () => {
  controlledDropzoneRef.value?.open()
  onEvent('open')
}

const onClearFiles = () => {
  controlledDropzoneRef.value?.clear()
  onEvent('clear')
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Dropzone" class="demo-dropzone-page">
    <D1Section>
      <D1Group label="Basic & Default Text">
        <div class="demo-dropzone-page__item">
          <D1Dropzone />
        </div>
      </D1Group>

      <D1Group label="Label, Description & Icon (String & Object)">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="Upload document"
              description="PDF or DOCX up to 10 MB"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              :icon="{ icon: 'image' }"
              label="Upload images"
              description="PNG, JPG, WEBP"
              accept="image/png,image/jpeg,image/webp"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Single & Multiple Selection (v-model:files)">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              v-model:files="singleFiles"
              icon="upload"
              label="Single file upload"
              accept=".txt,.pdf,.png"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              v-model:files="multipleFiles"
              icon="upload"
              label="Multiple files upload"
              description="Select one or more files"
              multiple
            />
          </div>
        </DemoFlex>
        <DemoValue :value="singleFilesLabel" label="Single Files" />
        <DemoValue :value="multipleFilesLabel" label="Multiple Files" />
      </D1Group>

      <D1Group label="States (Disabled, Readonly & Skeleton)">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="Disabled dropzone"
              description="Interaction is disabled"
              disabled
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="Readonly dropzone"
              description="Read-only preview"
              readonly
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Skeleton active>
              <D1Dropzone
                icon="upload"
                label="Loading skeleton"
                description="Placeholder state"
                is-skeleton
              />
            </D1Skeleton>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots (default & description) & Custom textDropzone">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone icon="upload">
              <template #default>
                <strong>Custom Default Slot Title</strong>
              </template>
              <template #description>
                <span>Custom description slot content</span>
              </template>
            </D1Dropzone>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              text-dropzone="Custom fallback dropzone text"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events, inputAttrs & Exposed Controls (open / clear)">
        <div class="demo-dropzone-page__item">
          <D1Dropzone
            ref="controlledDropzoneRef"
            v-model:files="controlledFiles"
            icon="upload"
            label="Event & Expose Tracker"
            description="Drop files or use buttons below"
            multiple
            :input-attrs="{ 'data-testid': 'demo-dropzone-input' }"
            @input="onEvent('input', $event)"
            @change="onEvent('change', $event)"
          />
        </div>
        <DemoFlex>
          <D1Button label="Open File Picker" primary @click="onOpenDialog" />
          <D1Button label="Clear Files" outline @click="onClearFiles" />
        </DemoFlex>
        <DemoValue :value="controlledFilesLabel" label="Controlled Files" />
        <DemoValue :value="eventName" label="Event" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-dropzone-page {
  &__item {
    position: relative;
    width: 300px;
    height: 160px;
  }
}
</style>
