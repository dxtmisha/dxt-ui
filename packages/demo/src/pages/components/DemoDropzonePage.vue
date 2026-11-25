<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { DropzoneExpose } from '@dxtmisha/constructor/Dropzone'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const singleFiles = ref<FileList | undefined>(undefined)
const multipleFiles = ref<FileList | undefined>(undefined)
const modelFiles = ref<FileList | undefined>(undefined)
const controlledFiles = ref<FileList | undefined>(undefined)
const formFiles = ref<FileList | undefined>(undefined)

const exposeTarget = ref<DropzoneExpose | null>(null)
const disabledExposeTarget = ref<DropzoneExpose | null>(null)
const readonlyExposeTarget = ref<DropzoneExpose | null>(null)

const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(false)
const isDynamicMultiple = ref<boolean>(true)
const isDynamicIconTurn = ref<boolean>(false)
const isDynamicIconHide = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)

const blockedTriggerCount = ref<number>(0)
const formStatus = ref<string>('Not submitted')

const formatFileList = (files?: FileList): string => {
  if (!files || files.length === 0) {
    return 'No files selected'
  }

  return Array.from(files).map(fileItem => fileItem.name).join(', ')
}

const singleFilesLabel = computed<string>(() => formatFileList(singleFiles.value))
const multipleFilesLabel = computed<string>(() => formatFileList(multipleFiles.value))
const modelFilesLabel = computed<string>(() => formatFileList(modelFiles.value))
const controlledFilesLabel = computed<string>(() => formatFileList(controlledFiles.value))
const formFilesLabel = computed<string>(() => formatFileList(formFiles.value))

const dynamicTextFallback = (): string => 'Dynamic dropzone fallback from function'

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleUpdateFiles = (files?: FileList): void => {
  trackEvent('update:files', { files: formatFileList(files) })
}

const handleUpdateModelFiles = (files?: FileList): void => {
  trackEvent('update:modelFiles', { files: formatFileList(files) })
}

const handleInputEvent = (
  domEvent: Event,
  validationItem: FieldValidationItem<FileList | undefined>
): void => {
  trackEvent('input', {
    eventType: domEvent.type,
    isFull: validationItem.isFull,
    files: formatFileList(validationItem.value)
  })
}

const handleInputLiteEvent = (validationItem: FieldValidationItem<FileList | undefined>): void => {
  trackEvent('inputLite', {
    isFull: validationItem.isFull,
    files: formatFileList(validationItem.value)
  })
}

const handleChangeEvent = (
  domEvent: Event,
  validationItem: FieldValidationItem<FileList | undefined>
): void => {
  trackEvent('change', {
    eventType: domEvent.type,
    isFull: validationItem.isFull,
    files: formatFileList(validationItem.value)
  })
}

const handleChangeLiteEvent = (validationItem: FieldValidationItem<FileList | undefined>): void => {
  trackEvent('changeLite', {
    isFull: validationItem.isFull,
    files: formatFileList(validationItem.value)
  })
}

const handleFocusEvent = (focusEvent: FocusEvent): void => {
  trackEvent('focus', { eventType: focusEvent.type })
}

const handleBlurEvent = (focusEvent: FocusEvent): void => {
  trackEvent('blur', { eventType: focusEvent.type })
}

const handleOpenDialog = (): void => {
  exposeTarget.value?.open()
  trackEvent('expose:open', { triggered: true })
}

const handleClearFiles = (): void => {
  exposeTarget.value?.clear()
  trackEvent('expose:clear', { cleared: true })
}

const handleBlockedTrigger = (): void => {
  blockedTriggerCount.value += 1
}

const attemptBlockedOpen = (target: DropzoneExpose | null): void => {
  target?.open()
}

const handleFormSubmit = (): void => {
  const hasFiles = Boolean(formFiles.value && formFiles.value.length > 0)
  formStatus.value = hasFiles
    ? `Form submitted with: ${formFilesLabel.value}`
    : 'Form blocked (file required)'
}

const handleFormReset = (): void => {
  formFiles.value = undefined
  formStatus.value = 'Form reset'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Dropzone" class="demo-dropzone-page">
    <D1Section>
      <D1Group label="Basic & Default Fallback Text">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone/>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              text-dropzone="Custom fallback dropzone string"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              :text-dropzone="dynamicTextFallback"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Label, Description & Icon Configurations">
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
              :icon="{ icon: 'image', palette: 'blue' }"
              label="Upload images"
              description="PNG, JPG, WEBP"
              accept="image/png,image/jpeg,image/webp"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              icon-turn
              icon-dir
              icon-palette
              selected
              :icon-attrs="{ size: 'xl' }"
              label="Turned & styled icon"
              description="iconTurn, iconPalette, selected"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              icon-hide
              label="Hidden icon (iconHide)"
              description="Icon hidden via iconHide"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              :icon="null"
              label="Null icon"
              description="Explicitly omitted icon"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Single, Multiple & Two-Way Bindings">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              v-model:files="singleFiles"
              icon="upload"
              label="Single file (v-model:files)"
              accept=".txt,.pdf,.png"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              v-model:files="multipleFiles"
              icon="upload"
              label="Multiple files (v-model:files)"
              description="Select one or more files"
              multiple
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              v-model:model-files="modelFiles"
              icon="upload"
              label="Multiple files (v-model:modelFiles)"
              description="Alternative modelFiles prop"
              multiple
            />
          </div>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button label="Clear Single" size="sm" outline @click="singleFiles = undefined"/>
          <D1Button label="Clear Multiple" size="sm" outline @click="multipleFiles = undefined"/>
          <D1Button label="Clear ModelFiles" size="sm" outline @click="modelFiles = undefined"/>
        </DemoFlex>
        <DemoValue label="Single Files" :value="singleFilesLabel"/>
        <DemoValue label="Multiple Files" :value="multipleFilesLabel"/>
        <DemoValue label="Model Files" :value="modelFilesLabel"/>
      </D1Group>

      <D1Group label="States & Dynamic Toggles">
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
          <div class="demo-dropzone-page__item">
            <D1Skeleton :active="isDynamicSkeleton">
              <D1Dropzone
                icon="upload"
                label="Dynamic target dropzone"
                description="Toggle props dynamically"
                :disabled="isDynamicDisabled"
                :readonly="isDynamicReadonly"
                :is-skeleton="isDynamicSkeleton"
                :multiple="isDynamicMultiple"
                :icon-turn="isDynamicIconTurn"
                :icon-hide="isDynamicIconHide"
                :selected="isDynamicSelected"
              />
            </D1Skeleton>
          </div>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Skeleton" size="sm" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
          <D1Button label="Toggle Multiple" size="sm" outline @click="isDynamicMultiple = !isDynamicMultiple"/>
          <D1Button label="Toggle Icon Turn" size="sm" outline @click="isDynamicIconTurn = !isDynamicIconTurn"/>
          <D1Button label="Toggle Icon Hide" size="sm" outline @click="isDynamicIconHide = !isDynamicIconHide"/>
          <D1Button label="Toggle Selected" size="sm" outline @click="isDynamicSelected = !isDynamicSelected"/>
        </DemoFlex>
        <DemoValue
          label="Dynamic Flags"
          :value="{
            disabled: isDynamicDisabled,
            readonly: isDynamicReadonly,
            isSkeleton: isDynamicSkeleton,
            multiple: isDynamicMultiple,
            iconTurn: isDynamicIconTurn,
            iconHide: isDynamicIconHide,
            selected: isDynamicSelected
          }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              ref="disabledExposeTarget"
              icon="upload"
              label="Guarded Disabled"
              description="Blocks click, dragenter, and open()"
              disabled
              @input="handleBlockedTrigger"
              @change="handleBlockedTrigger"
              @focus="handleBlockedTrigger"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              ref="readonlyExposeTarget"
              icon="upload"
              label="Guarded Readonly"
              description="Blocks click, dragenter, and open()"
              readonly
              @input="handleBlockedTrigger"
              @change="handleBlockedTrigger"
              @focus="handleBlockedTrigger"
            />
          </div>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button
            label="Attempt Disabled open()"
            size="sm"
            outline
            @click="attemptBlockedOpen(disabledExposeTarget)"
          />
          <D1Button
            label="Attempt Readonly open()"
            size="sm"
            outline
            @click="attemptBlockedOpen(readonlyExposeTarget)"
          />
        </DemoFlex>
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Slots (default & description)">
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
            <D1Dropzone icon="upload" label="Ignored when default slot exists">
              <template #default>
                <span>Slot takes precedence over fallback</span>
              </template>
            </D1Dropzone>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events, inputAttrs & Exposed Controls">
        <div class="demo-dropzone-page__item">
          <D1Dropzone
            ref="exposeTarget"
            v-model:files="controlledFiles"
            icon="upload"
            label="Event & Expose Tracker"
            description="Drop files or use buttons below"
            multiple
            :input-attrs="{ 'data-testid': 'demo-dropzone-input', name: 'controlled-dropzone' }"
            @update:files="handleUpdateFiles"
            @update:model-files="handleUpdateModelFiles"
            @input="handleInputEvent"
            @input-lite="handleInputLiteEvent"
            @change="handleChangeEvent"
            @change-lite="handleChangeLiteEvent"
            @focus="handleFocusEvent"
            @blur="handleBlurEvent"
          />
        </div>
        <DemoFlex align="center">
          <D1Button label="Open File Picker" size="sm" primary @click="handleOpenDialog"/>
          <D1Button label="Clear Files" size="sm" outline @click="handleClearFiles"/>
        </DemoFlex>
        <DemoValue label="Controlled Files" :value="controlledFilesLabel"/>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Form Integration">
        <form id="demo-dropzone-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              v-model:files="formFiles"
              icon="upload"
              label="Required form attachment"
              description="Select a file before submitting"
              :input-attrs="{ name: 'attachment', required: true }"
            />
          </div>
          <DemoFlex align="center">
            <D1Button label="Submit Form" tag="button" type="submit" size="sm" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" size="sm" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Files" :value="formFilesLabel"/>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Accessibility (ARIA & Keyboard)">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="Accessible Upload Zone"
              description="Explicit labelId and descriptionId for ARIA"
              label-id="demo-dropzone-a11y-label"
              description-id="demo-dropzone-a11y-desc"
              :input-attrs="{
                'aria-label': 'Upload files via keyboard or drag and drop',
                tabindex: 0
              }"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <div class="demo-dropzone-page__item">
            <D1Dropzone icon="upload" label="" description="Empty label falls back to textDropzone"/>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone icon="upload" label="   " description="Whitespace label falls back to textDropzone"/>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone icon="upload" :label="0" :description="0"/>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone icon="upload" :label="-42" :description="3.14"/>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone icon="upload" label="A" description="B"/>
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="Tiếng Việt / Кириллица / 🚀 & <>"
              description="Multilingual text and symbols"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="<img src=x onerror=alert(1)>"
              description="<script>alert('xss')</script>"
            />
          </div>
          <div class="demo-dropzone-page__item">
            <D1Dropzone
              icon="upload"
              label="Very long multi-sentence dropzone label designed to check text wrapping and vertical centering inside fixed bounds"
              description="Extended multi-sentence description verifying clean overflow handling without breaking layout"
            />
          </div>
          <DemoBox class="demo-dropzone-page__narrow" size="sm">
            <D1Dropzone
              icon="upload"
              label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              description="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            />
          </DemoBox>
        </DemoFlex>
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
        <div v-if="isLifecycleMounted" class="demo-dropzone-page__item">
          <D1Dropzone
            icon="upload"
            label="Mounted Dropzone"
            description="Conditional v-if lifecycle check"
          />
        </div>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-dropzone-page {
  &__item {
    position: relative;
    width: 300px;
    max-width: 100%;
    min-height: 160px;
  }

  &__narrow {
    position: relative;
    width: 100%;
    max-width: 240px;
    min-height: 160px;
  }
}
</style>
