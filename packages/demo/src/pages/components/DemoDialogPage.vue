<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openBasic = ref(false)
const openSuccess = ref(false)
const openError = ref(false)

const openWidthSm = ref(false)
const openWidthMd = ref(false)
const openWidthLg = ref(false)
const openWidthAuto = ref(false)

const openImageTop = ref(false)
const openImageLeft = ref(false)

const openVModel = ref(false)
const openEvents = ref(false)
const openEventsModelOpen = ref(false)

const actionsList = [
  { label: 'Action 1', value: 'action1' },
  { label: 'Action 2', value: 'action2' }
]

const barsList = [
  { label: 'Bar 1', value: 'bar1' }
]
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Dialog">
    <D1Section class="demo-dialog-page">
      <D1Group label="Basic Usage">
        <DemoFlex>
          <D1Dialog
            v-model:open="openBasic"
            label="Confirm Action"
            description="Are you sure you want to proceed with the selected operation? This action is standard."
            buttonOk="Proceed"
          >
            <template #control="{ binds }">
              <D1Button label="Open Dialog" primary v-bind="binds" />
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Success & Error States">
        <DemoFlex>
          <!-- Success State -->
          <D1Dialog
            v-model:open="openSuccess"
            success
            label="Payment Completed"
            description="Your invoice has been paid successfully. A confirmation email has been sent to your inbox."
            buttonOk="Awesome"
          >
            <template #control="{ binds }">
              <D1Button label="Success Dialog" secondary v-bind="binds" />
            </template>
          </D1Dialog>

          <!-- Error State -->
          <D1Dialog
            v-model:open="openError"
            error
            label="Connection Failed"
            description="Unable to connect to the server. Please check your network connection and try again."
            buttonOk="Retry"
            buttonClose="Dismiss"
          >
            <template #control="{ binds }">
              <D1Button label="Error Dialog" secondary v-bind="binds" />
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Predefined Widths">
        <DemoFlex>
          <!-- Width SM -->
          <D1Dialog
            v-model:open="openWidthSm"
            width="sm"
            label="Small Width"
            description="This dialog is configured with width='sm'."
            buttonOk="Proceed"
          >
            <template #control="{ binds }">
              <D1Button label="Small (sm)" secondary v-bind="binds" />
            </template>
          </D1Dialog>

          <!-- Width MD -->
          <D1Dialog
            v-model:open="openWidthMd"
            width="md"
            label="Medium Width"
            description="This dialog is configured with width='md' (default)."
            buttonOk="Proceed"
            buttonClose="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Medium (md)" secondary v-bind="binds" />
            </template>
          </D1Dialog>

          <!-- Width LG -->
          <D1Dialog
            v-model:open="openWidthLg"
            width="lg"
            label="Large Width"
            description="This dialog is configured with width='lg'."
            buttonOk="Proceed"
            buttonClose="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Large (lg)" secondary v-bind="binds" />
            </template>
          </D1Dialog>

          <!-- Width Auto -->
          <D1Dialog
            v-model:open="openWidthAuto"
            width="auto"
            label="Auto Width"
            description="This dialog is configured with width='auto'."
            buttonOk="Proceed"
            buttonClose="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Auto Width" secondary v-bind="binds" />
            </template>
          </D1Dialog>
        </DemoFlex>
      </D1Group>

      <D1Group label="Image Headers & Layouts">
        <DemoFlex>
          <!-- Top Image -->
          <D1Dialog
            v-model:open="openImageTop"
            image="https://picsum.photos/600/300?random=1"
            imagePosition="top"
            label="Top Image Header"
            description="This dialog renders a header image above the title and text content."
            buttonOk="Confirm"
            buttonClose="Cancel"
          >
            <template #control="{ binds }">
              <D1Button label="Top Image" secondary v-bind="binds" />
            </template>
          </D1Dialog>

          <!-- Left Image -->
          <D1Dialog
            v-model:open="openImageLeft"
            image="https://picsum.photos/300/400?random=2"
            imagePosition="left"
            label="Left Side Image"
            description="This dialog aligns the image on the left, split with the text on the right."
            buttonOk="Confirm"
            buttonClose="Cancel"
            width="lg"
          >
            <template #control="{ binds }">
              <D1Button label="Left Image" secondary v-bind="binds" />
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
          buttonOk="Understood"
          buttonClose="Dismiss"
        />
        <DemoValue :value="openVModel" />
      </D1Group>

      <D1Group label="Events Tracking">
        <DemoFlex>
          <D1Dialog
            v-model:open="openEvents"
            v-model:modelOpen="openEventsModelOpen"
            label="Events Demo"
            description="Interact with the action buttons to log events in the value panel below. Available events: update:open, update:modelOpen, window, actions, actionsLite, bars, barsLite, barsBack, ok, close."
            buttonOk="Confirm (ok)"
            buttonClose="Cancel (close)"
            :barsList="barsList"
            :closeButton="true"
            @ok="onEvent('ok', $event)"
            @close="onEvent('close', $event)"
            @window="onEvent('window', $event)"
            @actions="onEvent('actions', $event)"
            @actionsLite="onEvent('actionsLite', $event)"
            @bars="onEvent('bars', $event)"
            @barsLite="onEvent('barsLite', $event)"
            @barsBack="onEvent('barsBack', $event)"
          >
            <template #control="{ binds }">
              <D1Button label="Open All Events Dialog" secondary v-bind="binds" />
            </template>
          </D1Dialog>
        </DemoFlex>
        <DemoValue :value="eventName" />
        <div class="demo-dialog-page__values">
          <DemoValue :value="openEvents" label="v-model:open" />
          <DemoValue :value="openEventsModelOpen" label="v-model:modelOpen" />
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
