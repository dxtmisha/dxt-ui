<script setup lang="ts">
import { ref } from 'vue'
import type { InputFileItemExpose } from '@dxtmisha/constructor/InputFileItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const SAMPLE_IMAGE_1 = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240">'
  + '<rect width="320" height="240" fill="#dbeafe"/>'
  + '<circle cx="160" cy="110" r="56" fill="#3b82f6"/>'
  + '<rect x="50" y="185" width="220" height="24" rx="8" fill="#1d4ed8"/>'
  + '</svg>'
)

const SAMPLE_IMAGE_2 = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240">'
  + '<rect width="320" height="240" fill="#dcfce7"/>'
  + '<rect x="85" y="45" width="150" height="150" rx="20" fill="#16a34a"/>'
  + '</svg>'
)

const { eventName, onEvent } = useDemoEvent()

const exposeRef = ref<InputFileItemExpose>()
const exposeReadout = ref<string>('')
const dynamicDisabled = ref<boolean>(false)
const dynamicReadonly = ref<boolean>(false)
const isMounted = ref<boolean>(true)
const sampleFile = new File(['hello'], 'invoice-2026.pdf', { type: 'application/pdf' })

const inspectExpose = (): void => {
  const status = exposeRef.value?.getStatus() ?? ''
  const crop = JSON.stringify(exposeRef.value?.getCrop() ?? [])
  const fileName = exposeRef.value?.getFile()?.name ?? ''
  exposeReadout.value = `file=${fileName}, status=${status}, crop=${crop}`
}

const triggerDelete = (): void => {
  exposeRef.value?.delete()
}

const triggerRetry = (): void => {
  exposeRef.value?.retry()
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="InputFileItem">
    <D1Section>
      <D1Block label="Appearance: List & Statuses">
        <D1Group label="Idle, Uploading (Determinate/Indeterminate), Uploaded, Error">
          <div class="d1-flex-column">
            <D1InputFileItem
              appearance="list"
              status="idle"
              :value="{ name: 'contract.pdf', size: 1048576 }"
              data-testid="ifi-list-idle"
            />
            <D1InputFileItem
              appearance="list"
              status="uploading"
              :loading="{ visible: true, value: 1400000 }"
              :value="{ name: 'avatar-upload.jpg', size: 2097152, thumbnail: SAMPLE_IMAGE_1 }"
              data-testid="ifi-list-uploading"
            />
            <D1InputFileItem
              appearance="list"
              status="uploaded"
              :value="{ name: 'landscape.svg', size: 3145728, thumbnail: SAMPLE_IMAGE_2 }"
              data-testid="ifi-list-uploaded"
            />
            <D1InputFileItem
              appearance="list"
              status="error"
              :confirm-delete="false"
              :value="{ name: 'corrupted.zip', size: 5242880 }"
              data-testid="ifi-list-error"
              @delete="(val) => onEvent('delete', val?.name)"
              @retry="(val) => onEvent('retry', val?.name)"
            />
          </div>
        </D1Group>
      </D1Block>

      <D1Block label="Appearances: Compact & Tile">
        <D1Group label="Compact">
          <div class="d1-flex-column">
            <D1InputFileItem
              appearance="compact"
              status="idle"
              :value="{ name: 'spec-sheet.pdf', size: 524288 }"
              data-testid="ifi-compact"
            />
            <D1InputFileItem
              appearance="compact"
              status="uploading"
              :loading="{ visible: true, value: 450000 }"
              :value="{ name: 'archive.zip', size: 1048576 }"
            />
            <D1InputFileItem
              appearance="compact"
              status="uploaded"
              :value="{ name: 'done.png', size: 120000 }"
            />
          </div>
        </D1Group>

        <D1Group label="Tile">
          <DemoFlex>
            <D1InputFileItem
              appearance="tile"
              status="idle"
              :value="{ name: 'photo-1.svg', size: 1200000, thumbnail: SAMPLE_IMAGE_1 }"
              data-testid="ifi-tile"
            />
            <D1InputFileItem
              appearance="tile"
              status="uploading"
              :loading="{ visible: true, value: 700000 }"
              :value="{ name: 'photo-2.svg', size: 1400000, thumbnail: SAMPLE_IMAGE_2 }"
            />
            <D1InputFileItem
              appearance="tile"
              status="error"
              :value="{ name: 'broken.png', size: 340000 }"
            />
          </DemoFlex>
        </D1Group>
      </D1Block>

      <D1Block label="States, Selected, Skeleton & Crop Dialog">
        <D1Group label="Interactive Disabled / Readonly, Selected & Skeleton">
          <DemoFlex>
            <D1Button
              :label="dynamicDisabled ? 'Enable Item' : 'Disable Item'"
              data-testid="ifi-toggle-disabled"
              @click="dynamicDisabled = !dynamicDisabled"
            />
            <D1Button
              :label="dynamicReadonly ? 'Disable Readonly' : 'Enable Readonly'"
              outline
              data-testid="ifi-toggle-readonly"
              @click="dynamicReadonly = !dynamicReadonly"
            />
          </DemoFlex>
          <div class="d1-flex-column">
            <D1InputFileItem
              :selected="true"
              :value="{ name: 'selected-item.pdf', size: 854000 }"
              data-testid="ifi-selected"
            />
            <D1InputFileItem
              :disabled="dynamicDisabled"
              :readonly="dynamicReadonly"
              :value="{ name: 'state-item.docx', size: 420000 }"
              data-testid="ifi-state-toggle"
            />
            <D1Skeleton :active="true">
              <D1InputFileItem
                :is-skeleton="true"
                :value="{ name: 'skeleton-file.pdf', size: 102400 }"
                data-testid="ifi-skeleton"
              />
            </D1Skeleton>
          </div>
        </D1Group>
      </D1Block>

      <D1Block label="Expose API & Events">
        <D1Group label="Programmatic getFile / getStatus / getCrop / delete / retry & Confirm Dialog">
          <DemoFlex>
            <D1Button label="Inspect Expose" data-testid="ifi-btn-inspect" @click="inspectExpose" />
            <D1Button label="Call delete()" outline data-testid="ifi-btn-delete" @click="triggerDelete" />
            <D1Button label="Call retry()" outline data-testid="ifi-btn-retry" @click="triggerRetry" />
          </DemoFlex>
          <D1InputFileItem
            ref="exposeRef"
            status="error"
            :file="sampleFile"
            :confirm-delete="false"
            :crop="true"
            :value="{ name: 'invoice-2026.pdf', size: 1024, thumbnail: SAMPLE_IMAGE_1, crop: [10, 15, 10, 15] }"
            data-testid="ifi-expose"
            @crop="(val) => onEvent('crop', JSON.stringify(val?.crop))"
            @delete="(val) => onEvent('delete', val?.name)"
            @retry="(val) => onEvent('retry', val?.name)"
          />
          <DemoValue :value="exposeReadout" data-testid="ifi-expose-readout" />
          <DemoValue :value="eventName" data-testid="ifi-event-log" />
        </D1Group>
      </D1Block>

      <D1Block label="Layout, Narrow Container & Lifecycle">
        <D1Group label="Narrow Container (max-width: 260px)">
          <DemoBox style="max-width: 260px;" data-testid="ifi-narrow-box">
            <D1InputFileItem
              appearance="list"
              status="uploaded"
              :value="{ name: 'very-long-quarterly-financial-statement-2026-final-v2.pdf', size: 3200000 }"
              data-testid="ifi-narrow"
            />
          </DemoBox>
        </D1Group>

        <D1Group label="Lifecycle Toggle (v-if Mount/Unmount)">
          <DemoFlex>
            <D1Button
              :label="isMounted ? 'Unmount FileItem' : 'Mount FileItem'"
              data-testid="ifi-toggle-mount"
              @click="isMounted = !isMounted"
            />
          </DemoFlex>
          <D1InputFileItem
            v-if="isMounted"
            :value="{ name: 'conditional-file.txt', size: 2048 }"
            data-testid="ifi-conditional"
          />
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
