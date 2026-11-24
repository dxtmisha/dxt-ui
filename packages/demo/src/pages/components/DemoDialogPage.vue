<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

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

const openBasic = ref(false)
const openSuccess = ref(false)
const openError = ref(false)
const openCustomIcon = ref(false)

const openWidthSm = ref(false)
const openWidthMd = ref(false)
const openWidthLg = ref(false)
const openWidthAuto = ref(false)

const openImageTop = ref(false)
const openImageLeft = ref(false)
const openImageAdaptive = ref(false)

const openButtonObjects = ref(false)
const openNoButtons = ref(false)
const openStayOpenOnOk = ref(false)

const openAllSlots = ref(false)
const openVModel = ref(false)
const openEvents = ref(false)
const openEventsModelOpen = ref(false)

const actionsList = [
  { label: 'Extra Action 1', value: 'action1' },
  { label: 'Extra Action 2', value: 'action2' }
]

const barsList = [
  { label: 'Bar Action', value: 'bar1' }
]
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
            :icon-attrs="{ palette: 'blue' }"
            label="Custom Icon Dialog"
            description="Demonstrates custom icon and iconAttrs configuration."
            button-ok="Got it"
          >
            <template #control="{ binds }">
              <D1Button label="Custom Icon" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Predefined Widths">
        <DemoFlex>
          <D1Dialog
            v-model:open="openWidthSm"
            width="sm"
            label="Small Width"
            description="This dialog is configured with width='sm'."
            button-ok="Proceed"
          >
            <template #control="{ binds }">
              <D1Button label="Small (sm)" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openWidthMd"
            width="md"
            label="Medium Width"
            description="This dialog is configured with width='md'."
            button-ok="Proceed"
            button-close="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Medium (md)" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openWidthLg"
            width="lg"
            label="Large Width"
            description="This dialog is configured with width='lg'."
            button-ok="Proceed"
            button-close="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Large (lg)" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openWidthAuto"
            width="auto"
            label="Auto Width"
            description="This dialog is configured with width='auto'."
            button-ok="Proceed"
            button-close="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Auto Width" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Image Headers & Layouts">
        <DemoFlex>
          <D1Dialog
            v-model:open="openImageTop"
            :image="bannerTopImage"
            image-position="top"
            label="Top Image Header"
            description="This dialog renders a header image above the title and text content."
            button-ok="Confirm"
            button-close="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Top Image" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openImageLeft"
            :image="bannerLeftImage"
            image-position="left"
            label="Left Side Image"
            description="This dialog aligns the image on the left, split with the text on the right."
            button-ok="Confirm"
            button-close="Cancel"
            width="lg"
          >
            <template #control="{ binds }">
              <D1Button label="Left Image" secondary v-bind="binds"/>
            </template>
          </D1Dialog>

          <D1Dialog
            v-model:open="openImageAdaptive"
            :image="bannerLeftImage"
            image-position="adaptiveMd"
            label="Adaptive Image Position"
            description="Switches between top and left image layout at the md breakpoint."
            button-ok="Confirm"
            button-close="Cancel"
            width="lg"
          >
            <template #control="{ binds }">
              <D1Button label="Adaptive Image (md)" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Button Configurations & clickOkAndClose">
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
            description="Both buttonOk and buttonClose are set to null."
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
            @ok="onEvent('ok:stay-open')"
          >
            <template #control="{ binds }">
              <D1Button label="clickOkAndClose=false" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots (label, description, default, header, title, footer)">
        <DemoFlex>
          <D1Dialog
            v-model:open="openAllSlots"
            button-ok="Done"
            button-close="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Open All Slots Dialog" secondary v-bind="binds"/>
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
            <template #default>
              <div>Custom #default body content inside the dialog.</div>
            </template>
            <template #footer>
              <div>Custom #footer slot note</div>
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Control (v-model)">
        <DemoFlex>
          <D1Button
            :label="openVModel ? 'Close Programmatically' : 'Open Programmatically'"
            primary
            @click="openVModel = !openVModel"
          />
        </DemoFlex>
        <D1Dialog
          v-model:open="openVModel"
          label="Controlled Dialog"
          description="This dialog is triggered via the v-model:open property from an external button."
          button-ok="Understood"
          button-close="Dismiss"
        />
        <DemoValue :value="openVModel"/>
      </D1Group>

      <D1Group label="Events Tracking">
        <DemoFlex>
          <D1Dialog
            v-model:open="openEvents"
            v-model:model-open="openEventsModelOpen"
            label="Events Demo"
            description="Interact with the action buttons to log events in the value panel below."
            button-ok="Confirm (ok)"
            button-close="Cancel (close)"
            :actions-list="actionsList"
            :bars-hide="false"
            :bars-list="barsList"
            close-button
            @ok="onEvent('ok', $event)"
            @close="onEvent('close', $event)"
            @window="onEvent('window', $event)"
            @actions="onEvent('actions', $event)"
            @actions-lite="onEvent('actionsLite', $event)"
            @bars="onEvent('bars', $event)"
            @bars-lite="onEvent('barsLite', $event)"
            @bars-back="onEvent('barsBack', $event)"
          >
            <template #control="{ binds }">
              <D1Button label="Open All Events Dialog" secondary v-bind="binds"/>
            </template>
          </D1Dialog>
        </DemoFlex>
        <DemoValue :value="eventName"/>
        <DemoFlex>
          <DemoValue :value="openEvents" label="v-model:open"/>
          <DemoValue :value="openEventsModelOpen" label="v-model:modelOpen"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
