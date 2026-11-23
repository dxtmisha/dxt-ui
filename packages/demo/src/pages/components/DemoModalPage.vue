<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WindowExposeInclude } from '@dxtmisha/constructor/Window'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openBasic = ref(false)
const openAllSlots = ref(false)
const openBarsActions = ref(false)

const openSm = ref(false)
const openMd = ref(false)
const openLg = ref(false)
const openXl = ref(false)
const openAuto = ref(false)

const openImageTop = ref(false)
const openImageLeft = ref(false)
const openImageAdaptive = ref(false)

const openPersistent = ref(false)
const openNoCloseButton = ref(false)
const openDisabled = ref(false)
const openAutoClose = ref(false)
const openDisableFocusReturn = ref(false)

const openVModel = ref(false)
const openModelOpen = ref(false)

const openEvents = ref(false)
const openEventsModelOpen = ref(false)

const openLongScroll = ref(false)
const openBoundaryZero = ref(false)

const bannerTopImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#6366f1"/></linearGradient></defs><rect width="600" height="240" fill="url(#g)"/><circle cx="480" cy="80" r="64" fill="rgba(255,255,255,0.18)"/><circle cx="140" cy="180" r="90" fill="rgba(255,255,255,0.12)"/></svg>'
)

const bannerLeftImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs><rect width="300" height="400" fill="url(#g)"/><circle cx="150" cy="140" r="72" fill="rgba(255,255,255,0.2)"/></svg>'
)

const actionsList = [
  { label: 'Cancel', text: true, value: 'cancel' },
  { label: 'Confirm', primary: true, value: 'confirm' }
]

const actionsSecondary = [
  { label: 'Reset', outline: true, value: 'reset' }
]

const barsList = [
  { icon: 'help', value: 'help' }
]

const boundaryZeroActions = [
  { label: 0, outline: true, value: 0 },
  { label: 'OK', primary: true, value: 'ok' }
]

const modalRef = ref<WindowExposeInclude | null>(null)

const statusValue = computed<string>(() => {
  if (modalRef.value) {
    const id = modalRef.value.getId()
    const open = modalRef.value.getOpen()
    const hasControl = Boolean(modalRef.value.getControl())
    const hasWindowElement = Boolean(modalRef.value.getWindowElement())
    return `getId(): "${id}", getOpen(): ${open}, hasControl: ${hasControl}, hasWindowElement(): ${hasWindowElement}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Modal">
    <D1Section>
      <D1Group label="Basic Usage & Slots">
        <DemoFlex>
          <D1Modal v-model:open="openBasic">
            <template #control="{ binds }">
              <D1Button
                label="Open Basic Modal"
                primary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Basic Modal Dialog</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This is a standard modal dialog. It aligns in the center of the screen, darkens the background with a scrim overlay, and traps focus inside.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Cancel"
                  secondary
                  :class="classesWindow.close"
                />
                <D1Button
                  label="Confirm"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal v-model:open="openAllSlots">
            <template #control="{ binds }">
              <D1Button
                label="All Slots Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Title Slot Heading</h3>
            </template>
            <template #header>
              <div class="demo-modal-page__header">Sticky Header Slot Banner</div>
            </template>
            <div class="demo-modal-page__content">
              <p>Default body slot content combined with dedicated <code>#title</code>, <code>#header</code>, and <code>#footer</code> slots.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close All Slots"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openBarsActions"
            barsLabel="Modal Bars Title"
            barsDescription="Accessible description linked via aria-describedby"
            :barsBackHide="false"
            :barsList="barsList"
            :actionsList="actionsList"
            :actionsSecondary="actionsSecondary"
          >
            <template #control="{ binds }">
              <D1Button
                label="Bars & Actions Modal"
                outline
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>Integrated <code>D1Bars</code> header with back button and ARIA linkage, plus <code>D1Actions</code> footer with primary and secondary button lists.</p>
            </div>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Predefined Widths">
        <DemoFlex>
          <D1Modal v-model:open="openSm" width="sm">
            <template #control="{ binds }">
              <D1Button
                label="Small (sm)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Small Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is configured with <code>width="sm"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal v-model:open="openMd" width="md">
            <template #control="{ binds }">
              <D1Button
                label="Medium (md)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Medium Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal has <code>width="md"</code> configuration (standard default size).</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal v-model:open="openLg" width="lg">
            <template #control="{ binds }">
              <D1Button
                label="Large (lg)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Large Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is configured with <code>width="lg"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal v-model:open="openXl" width="xl">
            <template #control="{ binds }">
              <D1Button
                label="Extra Large (xl)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Extra Large Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is configured with <code>width="xl"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal v-model:open="openAuto" width="auto">
            <template #control="{ binds }">
              <D1Button
                label="Auto Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Auto Width Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal fits to its content width dynamically using <code>width="auto"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Image & Layout Positions">
        <DemoFlex>
          <D1Modal
            v-model:open="openImageTop"
            :image="bannerTopImage"
            imagePosition="top"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Position Top"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Top Image Header</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal has a top image header styled via <code>imagePosition="top"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageLeft"
            :image="bannerLeftImage"
            imagePosition="left"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Position Left"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Left Image</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal places the image on the left column using <code>imagePosition="left"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAdaptive"
            :image="bannerLeftImage"
            imagePosition="adaptiveMd"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Adaptive (adaptiveMd)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Adaptive Image Layout</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Switches from top image on narrow viewports to left column on medium+ screens via <code>imagePosition="adaptiveMd"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Persistent & Dismiss Behavior">
        <DemoFlex>
          <D1Modal
            v-model:open="openPersistent"
            :windowAttrs="{ persistent: true }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Persistent Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Persistent Dialog</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal sets <code>windowAttrs.persistent = true</code>. It cannot be dismissed by clicking outside or pressing Escape.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Dismiss Explicitly"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openNoCloseButton"
            :windowAttrs="{ closeButton: false }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Hide Close Button"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">No Close Button</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>This modal hides the built-in close icon via <code>:windowAttrs="{ closeButton: false }"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Dismiss"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openDisabled"
            disabled
          >
            <template #control="{ binds }">
              <D1Button
                label="Disabled Modal"
                outline
                disabled
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>This modal is disabled and will not open.</p>
            </div>
          </D1Modal>

          <D1Modal
            v-model:open="openAutoClose"
            autoClose
          >
            <template #control="{ binds }">
              <D1Button
                label="Auto Close Modal"
                outline
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Auto Close Enabled</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Clicking inside the modal body closes it automatically when <code>autoClose</code> is enabled.</p>
            </div>
          </D1Modal>

          <D1Modal
            v-model:open="openDisableFocusReturn"
            disableFocusReturn
          >
            <template #control="{ binds }">
              <D1Button
                label="Disable Focus Return"
                outline
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">No Focus Return</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Configured with <code>disableFocusReturn</code> so focus is not restored to the trigger on close.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Scrollable Content">
        <DemoFlex>
          <D1Modal v-model:open="openLongScroll" width="md">
            <template #control="{ binds }">
              <D1Button
                label="Long Scrollable Content"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Terms & Conditions</h3>
            </template>
            <div class="demo-modal-page__content">
              <p v-for="paragraphIndex in 18" :key="paragraphIndex">
                Section {{ paragraphIndex }}: Detailed scrollable content paragraph verifying scrollbar integration and fixed header/footer layout inside D1Modal without viewport overflow.
              </p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openBoundaryZero"
            :barsLabel="0"
            :actionsList="boundaryZeroActions"
          >
            <template #control="{ binds }">
              <D1Button
                label="Numeric 0 Label Boundary"
                outline
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>Verifies numeric <code>0</code> in both <code>barsLabel</code> and <code>actionsList</code> renders cleanly as "0".</p>
            </div>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Control (v-model:open & v-model:modelOpen)">
        <DemoFlex>
          <D1Button
            :label="openVModel ? 'Close v-model:open' : 'Open v-model:open'"
            primary
            @click="openVModel = !openVModel"
          />
          <D1Button
            :label="openModelOpen ? 'Close v-model:modelOpen' : 'Open v-model:modelOpen'"
            secondary
            @click="openModelOpen = !openModelOpen"
          />
        </DemoFlex>
        <D1Modal v-model:open="openVModel">
          <template #title>
            <h3 class="demo-modal-page__title">Controlled Modal (v-model:open)</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal is dynamically driven by external reactive <code>v-model:open</code> binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-modal-page__footer">
              <D1Button
                label="Close via v-model"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Modal>
        <D1Modal v-model:modelOpen="openModelOpen">
          <template #title>
            <h3 class="demo-modal-page__title">Controlled Modal (v-model:modelOpen)</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal is dynamically driven by external reactive <code>v-model:modelOpen</code> binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-modal-page__footer">
              <D1Button
                label="Close via modelOpen"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Modal>
        <DemoValue :value="`open: ${openVModel}, modelOpen: ${openModelOpen}`" />
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Modal
            v-model:open="openEvents"
            v-model:modelOpen="openEventsModelOpen"
            barsLabel="All Events Logger"
            :actionsList="actionsList"
            :barsList="barsList"
            :barsBackHide="false"
            @window="onEvent('window', $event)"
            @actions="onEvent('actions', $event)"
            @actionsLite="onEvent('actionsLite', $event)"
            @bars="onEvent('bars', $event)"
            @barsLite="onEvent('barsLite', $event)"
            @barsBack="onEvent('barsBack', $event)"
          >
            <template #control="{ binds }">
              <D1Button
                label="Open All Events Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>This modal fires all available events. Check the values below or the console for details.</p>
              <p>Available events: <code>update:open</code>, <code>update:modelOpen</code>, <code>window</code>, <code>actions</code>, <code>actionsLite</code>, <code>bars</code>, <code>barsLite</code>, <code>barsBack</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
        <DemoValue :value="eventName" />
        <DemoValue :value="`open: ${openEvents}, modelOpen: ${openEventsModelOpen}`" />
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <DemoFlex>
          <D1Button
            label="Open (toOpen)"
            @click="modalRef?.toOpen()"
          />
          <D1Button
            label="Open (setOpen)"
            @click="modalRef?.setOpen(true)"
          />
          <D1Button
            label="Close (toClose)"
            @click="modalRef?.toClose()"
          />
          <D1Button
            label="Close (setOpen false)"
            @click="modalRef?.setOpen(false)"
          />
          <D1Button
            label="Toggle (toggle)"
            @click="modalRef?.toggle()"
          />
        </DemoFlex>
        <D1Modal
          ref="modalRef"
          id="demo-expose-modal"
          @window="onEvent('window')"
        >
          <template #title>
            <h3 class="demo-modal-page__title">Expose Methods Modal</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal dialog is controlled programmatically via exposed methods like <code>toOpen</code>, <code>toClose</code>, <code>toggle</code>, <code>setOpen</code>, and <code>getWindowElement</code>.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-modal-page__footer">
              <D1Button
                label="Close"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Modal>
        <DemoValue :value="statusValue" />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-modal-page {
  &__title {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg) 0;
    margin: 0;
  }

  &__header {
    padding: var(--d1-sys-spacing-xs) var(--d1-sys-spacing-lg);
    font-weight: 600;
  }

  &__content {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--d1-sys-spacing-xs);
  }

  &__footer {
    padding: var(--d1-sys-spacing-sm) var(--d1-sys-spacing-lg) var(--d1-sys-spacing-md);
    display: flex;
    justify-content: flex-end;
    gap: var(--d1-sys-spacing-md);
  }
}
</style>
