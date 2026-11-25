<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ModalExpose } from '@dxtmisha/constructor/Modal'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const openBasic = ref(false)
const openAllSlots = ref(false)
const openBarsActions = ref(false)
const openHiddenBarsActions = ref(false)

const openSm = ref(false)
const openMd = ref(false)
const openLg = ref(false)
const openXl = ref(false)
const openAuto = ref(false)

const openImageTop = ref(false)
const openImageLeft = ref(false)
const openImageAdaptiveSm = ref(false)
const openImageAdaptiveMd = ref(false)
const openImageAdaptiveLg = ref(false)
const openImageAdaptiveXl = ref(false)
const openImageAdaptive2xl = ref(false)
const openImageAttrs = ref(false)

const openPersistent = ref(false)
const openNoCloseButton = ref(false)
const openNoCloseOnEsc = ref(false)
const openFullscreen = ref(false)
const openDisabled = ref(false)
const openAutoClose = ref(false)
const openDisableFocusReturn = ref(false)

const openVModel = ref(false)
const openModelOpen = ref(false)

const openEvents = ref(false)
const openEventsModelOpen = ref(false)

const openAccessibilityDialog = ref(false)
const openAccessibilityAlert = ref(false)

const openLongScroll = ref(false)
const openBoundaryZero = ref(false)
const openBoundaryEdge = ref(false)
const openBoundaryNarrow = ref(false)

const openInDom = ref(false)
const isLifecycleMounted = ref(true)
const openLifecycle = ref(false)

const bannerTopImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240"><defs><linearGradient id="gradTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#6366f1"/></linearGradient></defs><rect width="600" height="240" fill="url(#gradTop)"/><circle cx="480" cy="80" r="64" fill="rgba(255,255,255,0.18)"/><circle cx="140" cy="180" r="90" fill="rgba(255,255,255,0.12)"/></svg>'
)

const bannerLeftImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><defs><linearGradient id="gradLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs><rect width="300" height="400" fill="url(#gradLeft)"/><circle cx="150" cy="140" r="72" fill="rgba(255,255,255,0.2)"/></svg>'
)

const xssLabel = '<img src=x onerror=alert(1)>'
const unicodeText = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

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

const modalRef = ref<ModalExpose | null>(null)

const trackEvent = (name: string, payload?: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = payload === undefined ? 'undefined' : JSON.stringify(payload)
}

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
  <DemoLinkBlack/>
  <D1Page label="Modal">
    <D1Section>
      <D1Group label="Basic Usage, Slots, Bars & Actions">
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
            <template #control="{ binds, open }">
              <D1Button
                :label="`All Slots Modal (open=${open.value})`"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title="{ open }">
              <h3 class="demo-modal-page__title">Title Slot Heading (open={{ open.value }})</h3>
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
            bars-label="Modal Bars Title"
            bars-description="Accessible description linked via aria-describedby"
            :bars-back-hide="false"
            :bars-list="barsList"
            :bars-attrs="{ actionAttrs: { outline: true } }"
            :actions-list="actionsList"
            :actions-secondary="actionsSecondary"
            :actions-attrs="{ align: 'right' }"
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

          <D1Modal
            v-model:open="openHiddenBarsActions"
            bars-label="Hidden Bars Title"
            :bars-hide="true"
            :actions-list="actionsList"
            :actions-hide="true"
          >
            <template #control="{ binds }">
              <D1Button
                label="Hidden Bars & Actions"
                outline
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>Configures <code>barsHide=true</code> and <code>actionsHide=true</code> so both bars and actions are suppressed.</p>
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

      <D1Group label="Predefined Widths (sm, md, lg, xl, auto)">
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

      <D1Group label="Image & Adaptive Layout Positions">
        <DemoFlex>
          <D1Modal
            v-model:open="openImageTop"
            :image="bannerTopImage"
            image-position="top"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Top"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Top Image Header</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Configured with <code>imagePosition="top"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageLeft"
            :image="bannerLeftImage"
            image-position="left"
          >
            <template #control="{ binds }">
              <D1Button
                label="Image Left"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Left Image</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Configured with <code>imagePosition="left"</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAdaptiveSm"
            :image="bannerLeftImage"
            image-position="adaptiveSm"
          >
            <template #control="{ binds }">
              <D1Button label="adaptiveSm" outline v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Adaptive SM</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Switches from top to left at <code>sm</code> breakpoint.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAdaptiveMd"
            :image="bannerLeftImage"
            image-position="adaptiveMd"
          >
            <template #control="{ binds }">
              <D1Button label="adaptiveMd" outline v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Adaptive MD</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Switches from top to left at <code>md</code> breakpoint.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAdaptiveLg"
            :image="bannerLeftImage"
            image-position="adaptiveLg"
          >
            <template #control="{ binds }">
              <D1Button label="adaptiveLg" outline v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Adaptive LG</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Switches from top to left at <code>lg</code> breakpoint.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAdaptiveXl"
            :image="bannerLeftImage"
            image-position="adaptiveXl"
          >
            <template #control="{ binds }">
              <D1Button label="adaptiveXl" outline v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Adaptive XL</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Switches from top to left at <code>xl</code> breakpoint.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAdaptive2xl"
            :image="bannerLeftImage"
            image-position="adaptive2xl"
          >
            <template #control="{ binds }">
              <D1Button label="adaptive2xl" outline v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Adaptive 2XL</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Switches from top to left at <code>2xl</code> breakpoint.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openImageAttrs"
            :image="{ value: bannerTopImage }"
            :image-attrs="{ coordinator: [10, 10, 10, 10] }"
            image-position="top"
          >
            <template #control="{ binds }">
              <D1Button label="Image Object & imageAttrs" tonal v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Image Props Object</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Demonstrates object-style <code>image</code> binding and <code>imageAttrs</code> forwarding.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Persistent, Fullscreen & Dismiss Behavior">
        <DemoFlex>
          <D1Modal
            v-model:open="openPersistent"
            :window-attrs="{ persistent: true }"
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
            :window-attrs="{ closeButton: false }"
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
              <p>This modal hides the built-in close icon via <code>:window-attrs="{ closeButton: false }"</code>.</p>
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
            v-model:open="openNoCloseOnEsc"
            :window-attrs="{ closeOnEsc: false, textClose: 'Close dialog window' }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Disable Escape Close"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Escape Disabled</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Pressing Escape will not close this modal because <code>closeOnEsc: false</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Modal
            v-model:open="openFullscreen"
            :window-attrs="{ fullscreen: true }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Fullscreen Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Fullscreen Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Configured with <code>windowAttrs.fullscreen = true</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
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
            auto-close
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
            disable-focus-return
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

      <D1Group label="Accessibility (ARIA Roles, Focus Trap & Escape)">
        <DemoFlex>
          <D1Modal
            v-model:open="openAccessibilityDialog"
            bars-label="Accessible Settings Dialog"
            bars-description="Manage notification preferences using keyboard Tab navigation and Escape to close."
            :actions-list="actionsList"
          >
            <template #control="{ binds }">
              <D1Button
                label="ARIA Dialog + Focus Trap"
                primary
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <D1Input label="Display Name" placeholder="Enter display name"/>
              <D1Checkbox label="Enable accessible notifications"/>
            </div>
          </D1Modal>

          <D1Modal
            v-model:open="openAccessibilityAlert"
            bars-label="Delete Confirmation"
            bars-description="This action permanently removes the selected record."
            :window-attrs="{ role: 'alertdialog', ariaHaspopup: 'dialog' }"
            :actions-list="actionsList"
          >
            <template #control="{ binds }">
              <D1Button
                label="AlertDialog Role"
                outline
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>Uses <code>role="alertdialog"</code> with linked <code>aria-labelledby</code> and <code>aria-describedby</code>.</p>
            </div>
          </D1Modal>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Scroll, 0, Empty, Unicode, XSS, Narrow)">
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
            :bars-label="0"
            :actions-list="boundaryZeroActions"
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

          <D1Modal
            v-model:open="openBoundaryEdge"
            :bars-label="xssLabel"
            :bars-description="unicodeText"
            :actions-list="[{ label: 'Close', primary: true, value: 'close' }]"
          >
            <template #control="{ binds }">
              <D1Button
                label="XSS, Unicode & Unbroken Text"
                outline
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p class="demo-modal-page__wrap">{{ unbrokenText }}</p>
              <p>{{ unicodeText }}</p>
              <p>{{ xssLabel }}</p>
            </div>
          </D1Modal>
        </DemoFlex>

        <DemoBox class="demo-modal-page__narrow">
          <D1Modal
            v-model:open="openBoundaryNarrow"
            bars-label="   "
            width="sm"
          >
            <template #control="{ binds }">
              <D1Button
                label="Narrow Trigger Modal"
                size="sm"
                outline
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p class="demo-modal-page__wrap">{{ unbrokenText }}</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>
        </DemoBox>
      </D1Group>

      <D1Group label="Programmatic Control (v-model:open & v-model:model-open)">
        <DemoFlex>
          <D1Button
            :label="openVModel ? 'Close v-model:open' : 'Open v-model:open'"
            primary
            @click="openVModel = !openVModel"
          />
          <D1Button
            :label="openModelOpen ? 'Close v-model:model-open' : 'Open v-model:model-open'"
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
        <D1Modal v-model:model-open="openModelOpen">
          <template #title>
            <h3 class="demo-modal-page__title">Controlled Modal (v-model:model-open)</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal is dynamically driven by external reactive <code>v-model:model-open</code> binding.</p>
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
        <DemoValue :value="`open: ${openVModel}, modelOpen: ${openModelOpen}`"/>
      </D1Group>

      <D1Group label="SSR & DOM Lifecycle (in-dom & Conditional Mount)">
        <DemoFlex>
          <D1Modal
            v-model:open="openInDom"
            :window-attrs="{ inDom: true }"
          >
            <template #control="{ binds }">
              <D1Button label="In-DOM Modal" outline v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">In-DOM Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Rendered in DOM even while closed via <code>windowAttrs.inDom = true</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>

          <D1Button
            :label="isLifecycleMounted ? 'Unmount Modal' : 'Mount Modal'"
            secondary
            @click="isLifecycleMounted = !isLifecycleMounted"
          />

          <D1Modal
            v-if="isLifecycleMounted"
            v-model:open="openLifecycle"
          >
            <template #control="{ binds }">
              <D1Button label="Mounted Modal" tonal v-bind="binds"/>
            </template>
            <template #title>
              <h3 class="demo-modal-page__title">Conditional Modal</h3>
            </template>
            <div class="demo-modal-page__content">
              <p>Verifies watcher cleanup on unmount and re-initialization on mount.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-modal-page__footer">
                <D1Button label="Close" primary :class="classesWindow.close"/>
              </div>
            </template>
          </D1Modal>
        </DemoFlex>
        <DemoValue label="isLifecycleMounted" :value="isLifecycleMounted"/>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Modal
            v-model:open="openEvents"
            v-model:model-open="openEventsModelOpen"
            bars-label="All Events Logger"
            :actions-list="actionsList"
            :bars-list="barsList"
            :bars-back-hide="false"
            @update:open="(value) => trackEvent('update:open', value)"
            @update:model-open="(value) => trackEvent('update:modelOpen', value)"
            @window="(options) => trackEvent('window', { id: options.id, open: options.open })"
            @actions="(_event, options) => trackEvent('actions', options)"
            @actions-lite="(options) => trackEvent('actionsLite', options)"
            @bars="(_event, options) => trackEvent('bars', options)"
            @bars-lite="(options) => trackEvent('barsLite', options)"
            @bars-back="(options) => trackEvent('barsBack', options)"
          >
            <template #control="{ binds }">
              <D1Button
                label="Open All Events Modal"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-modal-page__content">
              <p>This modal fires all available events: <code>update:open</code>, <code>update:modelOpen</code>, <code>window</code>, <code>actions</code>, <code>actionsLite</code>, <code>bars</code>, <code>barsLite</code>, <code>barsBack</code>.</p>
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
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoValue :value="`open: ${openEvents}, modelOpen: ${openEventsModelOpen}`"/>
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
          @window="(options) => trackEvent('expose:window', { id: options.id, open: options.open })"
        >
          <template #title>
            <h3 class="demo-modal-page__title">Expose Methods Modal</h3>
          </template>
          <div class="demo-modal-page__content">
            <p>This modal dialog is controlled programmatically via exposed methods like <code>toOpen</code>, <code>toClose</code>, <code>toggle</code>, <code>setOpen</code>, <code>getId</code>, <code>getOpen</code>, <code>getControl</code>, and <code>getWindowElement</code>.</p>
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
        <DemoValue :value="statusValue"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
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

  &__wrap {
    overflow-wrap: anywhere;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
