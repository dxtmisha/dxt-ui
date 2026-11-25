<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DialogExpose } from '@dxtmisha/constructor/Dialog'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'
import type { DialogProps } from '@dxtmisha/d1/D1Dialog'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const bannerTopImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 260"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#6366f1"/></linearGradient></defs><rect width="600" height="260" fill="url(#g)"/><circle cx="480" cy="80" r="64" fill="rgba(255,255,255,0.18)"/><circle cx="140" cy="190" r="90" fill="rgba(255,255,255,0.12)"/></svg>'
)

const bannerLeftImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#14b8a6"/></linearGradient></defs><rect width="300" height="400" fill="url(#g2)"/><circle cx="150" cy="140" r="72" fill="rgba(255,255,255,0.2)"/></svg>'
)

const openBasic = ref<boolean>(false)
const openSuccess = ref<boolean>(false)
const openError = ref<boolean>(false)
const openCustomIcon = ref<boolean>(false)
const openCustomStatusIcons = ref<boolean>(false)

const openWidthMap = ref<Record<NonNullable<DialogProps['width']>, boolean>>({
  sm: false,
  md: false,
  lg: false,
  auto: false
})

const widthVariants: readonly NonNullable<DialogProps['width']>[] = ['sm', 'md', 'lg', 'auto']

const openImagePositionMap = ref<Record<NonNullable<DialogProps['imagePosition']>, boolean>>({
  top: false,
  left: false,
  adaptiveSm: false,
  adaptiveMd: false,
  adaptiveLg: false,
  adaptiveXl: false,
  adaptive2xl: false
})

const imagePositionVariants: readonly NonNullable<DialogProps['imagePosition']>[] = [
  'top',
  'left',
  'adaptiveSm',
  'adaptiveMd',
  'adaptiveLg',
  'adaptiveXl',
  'adaptive2xl'
]

const openButtonObjects = ref<boolean>(false)
const openNoButtons = ref<boolean>(false)
const openStayOpenOnOk = ref<boolean>(false)
const openCustomTexts = ref<boolean>(false)
const openActionsConfig = ref<boolean>(false)
const openActionsHidden = ref<boolean>(false)

const openDisabled = ref<boolean>(false)
const openPersistent = ref<boolean>(false)
const openNoEsc = ref<boolean>(false)
const openAutoClose = ref<boolean>(false)
const openDisableFocusReturn = ref<boolean>(false)
const openFullscreen = ref<boolean>(false)

const openAllSlots = ref<boolean>(false)
const openVModel = ref<boolean>(false)
const openModelOpen = ref<boolean>(false)

const openEvents = ref<boolean>(false)
const openEventsModelOpen = ref<boolean>(false)
const eventPayload = ref<unknown>('No payload yet')

const openA11yIds = ref<boolean>(false)
const openBoundaryZero = ref<boolean>(false)
const openBoundaryEmpty = ref<boolean>(false)
const openBoundaryLong = ref<boolean>(false)
const openBoundaryXss = ref<boolean>(false)
const openBoundaryNarrow = ref<boolean>(false)

const openInDom = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)
const openLifecycle = ref<boolean>(false)

const dialogExposeRef = ref<DialogExpose | null>(null)
const exposeStatus = ref<string>('Click an expose action')

const actionsList = [
  { label: 'Extra Action 1', value: 'action1' },
  { label: 'Extra Action 2', value: 'action2' }
]

const actionsSecondaryList = [
  { label: 'Secondary', outline: true, value: 'secondary1' }
]

const barsList = [
  { label: 'Bar Action', value: 'bar1' }
]

const exposeSummary = computed<string>(() => {
  if (dialogExposeRef.value) {
    return exposeStatus.value
  }
  return 'Ref not initialized'
})

const refreshExposeSummary = (): void => {
  if (dialogExposeRef.value) {
    exposeStatus.value = `getId(): "${dialogExposeRef.value.getId()}", getOpen(): ${dialogExposeRef.value.getOpen()}, hasControl: ${Boolean(dialogExposeRef.value.getControl())}, hasWindowElement: ${Boolean(dialogExposeRef.value.getWindowElement())}`
  }
}

const callExposeToOpen = async (): Promise<void> => {
  await dialogExposeRef.value?.toOpen()
  refreshExposeSummary()
}

const callExposeToClose = async (): Promise<void> => {
  await dialogExposeRef.value?.toClose()
  refreshExposeSummary()
}

const callExposeToggle = async (): Promise<void> => {
  await dialogExposeRef.value?.toggle()
  refreshExposeSummary()
}

const callExposeSetOpen = async (value: boolean): Promise<void> => {
  await dialogExposeRef.value?.setOpen(value)
  refreshExposeSummary()
}

const logEventWithPayload = (name: string, payload?: unknown): void => {
  eventPayload.value = payload ?? 'void'
  onEvent(name, payload)
}

const handleWindowEvent = (options: WindowEmitOptions): void => {
  logEventWithPayload('window', { id: options.id, open: options.open })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Dialog">
    <D1Section class="demo-dialog-page">
      <D1Group label="Basic Usage">
        <DemoFlex>
          <D1Dialog
            v-model:open="openBasic"
            label="Confirm Action"
            description="Are you sure you want to proceed with the selected operation? This action is standard."
            button-ok="Proceed"
          >
            <template #control="{ binds }">
              <D1Button label="Open Dialog" primary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Success, Error & Custom Icon States">
        <DemoFlex>
          <D1Dialog
            v-model:open="openSuccess"
            success
            label="Payment Completed"
            description="Your invoice has been paid successfully. A confirmation email has been sent to your inbox."
            button-ok="Awesome"
          >
            <template #control="{ binds }">
              <D1Button label="Success Dialog" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openError"
            error
            label="Connection Failed"
            description="Unable to connect to the server. Please check your network connection and try again."
            button-ok="Retry"
            button-close="Dismiss"
          >
            <template #control="{ binds }">
              <D1Button label="Error Dialog" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openCustomIcon"
            icon="info"
            :icon-attrs="{ palette: 'blue', size: '3xl' }"
            label="Custom Icon Dialog"
            description="Demonstrates custom icon and iconAttrs configuration."
            button-ok="Got it"
          >
            <template #control="{ binds }">
              <D1Button label="Custom Icon" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openCustomStatusIcons"
            success
            icon-success="verified"
            icon-error="dangerous"
            label="Custom Status Icons"
            description="Uses custom iconSuccess='verified' override when success is active."
            button-ok="Great"
          >
            <template #control="{ binds }">
              <D1Button label="Custom iconSuccess" outline v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Predefined Widths (sm, md, lg, auto)">
        <DemoFlex>
          <D1Dialog
            v-for="widthVariant in widthVariants"
            :key="widthVariant"
            v-model:open="openWidthMap[widthVariant]"
            :width="widthVariant"
            :label="`Width: ${widthVariant}`"
            :description="`This dialog is configured with width='${widthVariant}'.`"
            button-ok="Proceed"
            button-close="Cancel"
          >
            <template #control="{ binds }">
              <D1Button :label="`Width (${widthVariant})`" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Image Headers & All imagePosition Tokens">
        <DemoFlex>
          <D1Dialog
            v-for="positionVariant in imagePositionVariants"
            :key="positionVariant"
            v-model:open="openImagePositionMap[positionVariant]"
            :image="positionVariant === 'top' ? bannerTopImage : bannerLeftImage"
            :image-attrs="{ alt: `Dialog ${positionVariant} banner` }"
            :image-position="positionVariant"
            :label="`Image Position: ${positionVariant}`"
            :description="`Demonstrates imagePosition='${positionVariant}' with imageAttrs.`"
            button-ok="Confirm"
            button-close="Cancel"
            width="lg"
          >
            <template #control="{ binds }">
              <D1Button :label="`imagePosition: ${positionVariant}`" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Buttons, Actions, Texts & clickOkAndClose">
        <DemoFlex>
          <D1Dialog
            v-model:open="openButtonObjects"
            label="Button Object Props"
            description="Customizes buttonOk and buttonClose via object bindings."
            :button-ok="{ label: 'Delete Item', palette: 'red' }"
            :button-close="{ label: 'Keep Item', outline: true }"
          >
            <template #control="{ binds }">
              <D1Button label="Button Objects" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openNoButtons"
            label="Hidden Action Buttons"
            description="Both buttonOk and buttonClose are set to null, with closeButton enabled."
            :button-ok="null"
            :button-close="null"
            close-button
          >
            <template #control="{ binds }">
              <D1Button label="No Action Buttons (null)" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openStayOpenOnOk"
            label="Stay Open On OK"
            description="Clicking Confirm emits ok without automatically closing the dialog."
            button-ok="Confirm (Stays Open)"
            button-close="Close"
            :click-ok-and-close="false"
            @ok="logEventWithPayload('ok:stay-open')"
          >
            <template #control="{ binds }">
              <D1Button label="clickOkAndClose=false" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openCustomTexts"
            label="Custom textOk & textClose"
            description="Overrides default button labels via textOk and textClose props."
            text-ok="Apply Changes"
            text-close="Back"
          >
            <template #control="{ binds }">
              <D1Button label="textOk / textClose" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openActionsConfig"
            label="Extra Actions & Secondary List"
            description="Demonstrates actionsList, actionsSecondary, and actionsAttrs."
            :actions-list="actionsList"
            :actions-secondary="actionsSecondaryList"
            :actions-attrs="{ wrap: true }"
          >
            <template #control="{ binds }">
              <D1Button label="Actions Config" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openActionsHidden"
            label="Actions Hidden"
            description="actionsHide=true suppresses the entire footer actions bar."
            actions-hide
            close-button
          >
            <template #control="{ binds }">
              <D1Button label="actionsHide=true" outline v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Guards & Window Behaviors">
        <DemoFlex>
          <D1Dialog
            v-model:open="openDisabled"
            disabled
            label="Disabled Dialog"
            description="This dialog is disabled and cannot be opened."
          >
            <template #control="{ binds }">
              <D1Button label="Disabled Trigger" outline disabled v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openPersistent"
            :window-attrs="{ persistent: true }"
            label="Persistent Dialog"
            description="Cannot be dismissed by backdrop click or Escape; use the button below."
            button-ok="Acknowledge"
            :button-close="null"
          >
            <template #control="{ binds }">
              <D1Button label="Persistent (windowAttrs)" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openNoEsc"
            :window-attrs="{ closeOnEsc: false }"
            label="Escape Disabled"
            description="Pressing Escape does not close this dialog (closeOnEsc: false)."
            button-close="Close"
          >
            <template #control="{ binds }">
              <D1Button label="closeOnEsc=false" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openAutoClose"
            auto-close
            label="Auto Close Dialog"
            description="Clicking anywhere inside the dialog window closes it when autoClose is enabled."
          >
            <template #control="{ binds }">
              <D1Button label="autoClose=true" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openDisableFocusReturn"
            disable-focus-return
            label="Disable Focus Return"
            description="Focus is not returned to the trigger button after closing."
          >
            <template #control="{ binds }">
              <D1Button label="disableFocusReturn" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openFullscreen"
            :window-attrs="{ fullscreen: true }"
            label="Fullscreen Window"
            description="Fullscreen mode via windowAttrs.fullscreen = true."
            close-button
          >
            <template #control="{ binds }">
              <D1Button label="Fullscreen" outline v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
        <DemoValue label="Disabled Open State (always false)" :value="openDisabled"/>
      </D1Group>

      <D1Group label="Slots & Scoped Bindings (control, title, label, description, header, default, footer)">
        <DemoFlex>
          <D1Dialog
            v-model:open="openAllSlots"
            button-ok="Done"
            button-close="Cancel"
          >
            <template #control="{ binds, open }">
              <D1Button
                :label="open ? 'All Slots Open' : 'Open All Slots Dialog'"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <strong>Custom #title Slot</strong>
            </template>
            <template #label>
              Custom #label Slot (Học tiếng Việt / Привет)
            </template>
            <template #description>
              Custom #description slot explaining dialog context.
            </template>
            <template #header>
              <div>Custom #header slot content</div>
            </template>
            <template #default="{ classesWindow, open }">
              <div>Custom #default body content (open: {{ open }}).</div>
              <D1Button
                label="Close via classesWindow.close"
                size="sm"
                outline
                :class="classesWindow.close"
              />
            </template>
            <template #footer="{ classesWindow }">
              <div class="demo-dialog-page__slot-footer">
                <span>Custom #footer slot note</span>
                <D1Button
                  label="Footer Close"
                  size="sm"
                  text
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Two-Way Binding (v-model:open & v-model:modelOpen)">
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
        <D1Dialog
          v-model:open="openVModel"
          label="Controlled Dialog (v-model:open)"
          description="Triggered via external v-model:open reactive state."
          button-ok="Understood"
          button-close="Dismiss"
        />
        <D1Dialog
          v-model:model-open="openModelOpen"
          label="Controlled Dialog (v-model:modelOpen)"
          description="Triggered via external v-model:modelOpen reactive state."
          button-ok="Confirm"
          button-close="Close"
        />
        <DemoValue label="Models" :value="{ open: openVModel, modelOpen: openModelOpen }"/>
      </D1Group>

      <D1Group label="Programmatic Expose API (toOpen, toClose, toggle, setOpen, getters)">
        <DemoFlex>
          <D1Button label="toOpen()" size="sm" primary @click="callExposeToOpen"/>
          <D1Button label="toClose()" size="sm" outline @click="callExposeToClose"/>
          <D1Button label="toggle()" size="sm" secondary @click="callExposeToggle"/>
          <D1Button label="setOpen(true)" size="sm" @click="callExposeSetOpen(true)"/>
          <D1Button label="setOpen(false)" size="sm" outline @click="callExposeSetOpen(false)"/>
          <D1Button label="Read Expose State" size="sm" outline @click="refreshExposeSummary"/>
        </DemoFlex>
        <D1Dialog
          ref="dialogExposeRef"
          id="demo-expose-dialog"
          label="Expose Controlled Dialog"
          description="Controlled via expose methods: toOpen, toClose, toggle, setOpen, getId, getOpen, getControl, getWindowElement."
          button-ok="Done"
          button-close="Cancel"
          @window="refreshExposeSummary"
        />
        <DemoValue label="Expose State" :value="exposeSummary"/>
      </D1Group>

      <D1Group label="Events Tracking (ok, close, update:open, update:modelOpen, window, bars, actions)">
        <DemoFlex>
          <D1Dialog
            v-model:open="openEvents"
            v-model:model-open="openEventsModelOpen"
            label="Events Demo"
            description="Interact with bars, actions, or dialog buttons to inspect event names and payloads."
            button-ok="Confirm (ok)"
            button-close="Cancel (close)"
            bars-label="Dialog Bars Header"
            bars-description="Bars subtitle"
            :actions-list="actionsList"
            :bars-hide="false"
            :bars-back-hide="false"
            :bars-list="barsList"
            close-button
            @ok="logEventWithPayload('ok')"
            @close="logEventWithPayload('close')"
            @update:open="logEventWithPayload('update:open', $event)"
            @update:model-open="logEventWithPayload('update:modelOpen', $event)"
            @window="handleWindowEvent"
            @actions="logEventWithPayload('actions', $event)"
            @actions-lite="logEventWithPayload('actionsLite', $event)"
            @bars="logEventWithPayload('bars', $event)"
            @bars-lite="logEventWithPayload('barsLite', $event)"
            @bars-back="logEventWithPayload('barsBack', $event)"
          >
            <template #control="{ binds }">
              <D1Button label="Open All Events Dialog" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoFlex>
          <DemoValue :value="openEvents" label="v-model:open"/>
          <DemoValue :value="openEventsModelOpen" label="v-model:modelOpen"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accessibility (ARIA IDs & Keyboard Focus)">
        <DemoFlex>
          <D1Dialog
            v-model:open="openA11yIds"
            label="Custom ARIA Dialog"
            label-id="demo-dialog-a11y-label"
            description="Explicit labelId and descriptionId bind aria-labelledby and aria-describedby."
            description-id="demo-dialog-a11y-desc"
            button-ok="Confirm"
            button-close="Cancel"
            close-button
          >
            <template #control="{ binds }">
              <D1Button label="Open ARIA IDs Dialog" secondary aria-haspopup="dialog" v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <D1Dialog
            v-model:open="openBoundaryZero"
            :label="0"
            :description="0"
            button-ok="OK"
          >
            <template #control="{ binds }">
              <D1Button label="Numeric 0 Label & Desc" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openBoundaryEmpty"
            label=""
            description="   "
            button-close="Close"
            close-button
          >
            <template #control="{ binds }">
              <D1Button label="Empty & Whitespace" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openBoundaryLong"
            label="SuperLongUnbrokenDialogHeadingWithoutSpaces1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            description="Very long unbroken token: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA and Học tiếng Việt • Кириллица 🚀"
            button-ok="Close"
          >
            <template #control="{ binds }">
              <D1Button label="Long Unbroken & Unicode" outline v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openBoundaryXss"
            label="<img src=x onerror=alert(1)>"
            description="<script>alert('xss')</script>"
            button-ok="Safe"
          >
            <template #control="{ binds }">
              <D1Button label="Escaped XSS Text" outline v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
        <DemoBox class="demo-dialog-page__narrow-box">
          <D1Dialog
            v-model:open="openBoundaryNarrow"
            label="Narrow Container Trigger"
            description="Triggered from a constrained 220px DemoBox."
          >
            <template #control="{ binds }">
              <D1Button label="NarrowBoxTriggerWithoutSpaces123456" size="sm" outline v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (inDom & v-if mount/unmount)">
        <DemoFlex align="center">
          <D1Dialog
            v-model:open="openInDom"
            :window-attrs="{ inDom: true }"
            label="Pre-Rendered in DOM (inDom)"
            description="Window node stays in DOM even while closed (inDom: true)."
            button-ok="Close"
          >
            <template #control="{ binds }">
              <D1Button label="Open inDom Dialog" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Button
            :label="isLifecycleMounted ? 'Unmount Dialog' : 'Mount Dialog'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <D1Dialog
            v-if="isLifecycleMounted"
            v-model:open="openLifecycle"
            label="Lifecycle Mounted Dialog"
            description="Safely cleans up watchers on unmount."
          >
            <template #control="{ binds }">
              <D1Button label="Open Lifecycle Dialog" size="sm" v-bind="binds"/>
            </template>
          </D1Dialog>
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-dialog-page {
  &__slot-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  &__narrow-box {
    width: 100%;
    max-width: 240px;
    overflow: hidden;
  }
}
</style>
