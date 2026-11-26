<script setup lang="ts">
import { defineComponent, h, markRaw, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { SnackbarItemProps } from '@dxtmisha/d1/D1SnackbarItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<SnackbarItemProps['palette']>[] = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
]

const CustomBodyComponent = markRaw(defineComponent({
  name: 'DemoSnackbarItemCustomBody',
  props: {
    status: {
      type: String,
      default: 'Ready'
    },
    progressCount: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    return () => h(
      'div',
      `Custom component body: ${props.status} (${props.progressCount} items)`
    )
  }
}))

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const isDynamicSuccess = ref<boolean>(false)
const isDynamicError = ref<boolean>(false)
const isDynamicCloseButton = ref<boolean>(true)
const isDynamicActionsHide = ref<boolean>(false)
const isDynamicIconTurn = ref<boolean>(false)
const isDynamicIconHide = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)

const getCloseLabel = (): string => 'Close notification (function)'

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickEvent = (
  domEvent: MouseEvent,
  clickValue: EventClickValue
): void => {
  trackEvent('click', {
    eventType: domEvent.type,
    type: clickValue.type,
    value: clickValue.value
  })
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  trackEvent('clickLite', {
    type: clickValue.type,
    value: clickValue.value
  })
}

const handleActionsEvent = (
  domEvent: MouseEvent,
  actionValue: EventClickValue
): void => {
  trackEvent('actions', {
    eventType: domEvent.type,
    type: actionValue.type,
    value: actionValue.value
  })
}

const handleActionsLiteEvent = (actionValue: EventClickValue): void => {
  trackEvent('actionsLite', {
    type: actionValue.type,
    value: actionValue.value
  })
}

const handleCloseEvent = (itemValue: string | undefined): void => {
  trackEvent('close', { value: itemValue })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SnackbarItem">
    <D1Section>
      <D1Group label="Basic & Semantic States">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            label="Default Notification"
            description="Standard notification appearance with close button"
          />
          <D1SnackbarItem
            label="Success Notification"
            description="Operation completed successfully"
            success
          />
          <D1SnackbarItem
            label="Error Notification"
            description="Unable to save changes to the server"
            error
          />
          <D1SnackbarItem label="Label Only"/>
          <D1SnackbarItem description="Description only without a heading label"/>
          <D1SnackbarItem :label="0" :description="42"/>
        </div>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            v-for="paletteName in paletteList"
            :key="paletteName"
            :palette="paletteName"
            :label="`Palette: ${paletteName}`"
            description="Custom semantic palette styling"
          />
        </div>
      </D1Group>

      <D1Group label="Icons & Trailing Icons">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            label="Leading Icon (string)"
            description="Standard leading icon"
            icon="info"
          />
          <D1SnackbarItem
            label="Active Object Icon"
            description="Icon prop object with selected active state"
            :icon="{ icon: 'bookmark_border', iconActive: 'bookmark' }"
            selected
          />
          <D1SnackbarItem
            label="Trailing Icon"
            description="Leading and trailing icons together"
            icon="notifications"
            icon-trailing="chevron_right"
          />
          <D1SnackbarItem
            label="Icon Turn & Trailing Turn Only"
            description="Rotated leading and trailing icons"
            icon="expand_more"
            icon-trailing="expand_more"
            icon-turn
            icon-trailing-turn-only
          />
          <D1SnackbarItem
            label="Direction & Palette Flags"
            description="RTL-aware icon direction and palette inheritance"
            icon="arrow_forward"
            icon-trailing="arrow_back"
            icon-dir
            icon-trailing-dir-only
            icon-palette
            icon-trailing-palette
          />
          <D1SnackbarItem
            label="Icon Attrs"
            description="Custom icon attributes passed via iconAttrs"
            icon="verified"
            :icon-attrs="{ rounded: 'full' }"
          />
          <D1SnackbarItem
            label="Hidden Icon (iconHide)"
            description="Icon slot suppressed via iconHide"
            icon="info"
            icon-hide
          />
          <D1SnackbarItem
            label="Null Icon"
            description="Explicit null icon value"
            :icon="null"
          />
        </div>
      </D1Group>

      <D1Group label="Action Button & Close Button">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            label="String Action Button"
            description="Inline action button from string"
            button="Undo"
          />
          <D1SnackbarItem
            label="Numeric Action Button (0)"
            description="Numeric 0 renders visibly as button label"
            :button="0"
          />
          <D1SnackbarItem
            label="Object Action Button"
            description="Configured button object with icon and props"
            :button="{ label: 'Retry', icon: 'refresh', secondary: true }"
          />
          <D1SnackbarItem
            label="No Close Button"
            description="Close button hidden via closeButton=false"
            :close-button="false"
          />
          <D1SnackbarItem
            label="Custom Close Icon (string)"
            description="Custom iconClose name and textClose"
            icon-close="cancel"
            text-close="Dismiss notification"
          />
          <D1SnackbarItem
            label="Custom Close Icon (object & function label)"
            description="Object iconClose with function textClose"
            :icon-close="{ icon: 'delete' }"
            :text-close="getCloseLabel"
          />
          <D1SnackbarItem
            label="Null Close Icon"
            description="Null iconClose omits the close button"
            :icon-close="null"
          />
        </div>
      </D1Group>

      <D1Group label="Actions List (actionsList, actionsSecondary, actionsHide, actionsAttrs)">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            label="Primary Actions List"
            description="Multiple action buttons below content"
            icon="system_update"
            :actions-list="[
              { label: 'Install Now', value: 'install' },
              { label: 'Release Notes', value: 'notes', outline: true }
            ]"
          />
          <D1SnackbarItem
            label="Primary & Secondary Actions"
            description="Split primary and secondary action groups"
            :actions-list="[{ label: 'Accept', value: 'accept' }]"
            :actions-secondary="[{ label: 'Later', value: 'later' }]"
          />
          <D1SnackbarItem
            label="Custom actionsAttrs"
            description="Right-aligned actions configured via actionsAttrs"
            :actions-attrs="{
              align: 'right',
              list: [{ label: 'Open Settings', value: 'settings' }]
            }"
          />
          <D1SnackbarItem
            label="Hidden Actions (actionsHide)"
            description="Actions bar hidden while actionsList is present"
            :actions-list="[{ label: 'Hidden Action', value: 'hidden' }]"
            actions-hide
          />
        </div>
      </D1Group>

      <D1Group label="Rich Body (html, component, componentProps, area)">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            label="Trusted HTML Body"
            description="Sanitized markup passed via html prop"
            html="Deployment <strong>v2.4.0</strong> finished in <em>1.8s</em>."
          />
          <D1SnackbarItem
            label="Custom Component Body"
            description="Component rendered with componentProps"
            :component="CustomBodyComponent"
            :component-props="{ status: 'Synced', progressCount: 12 }"
          />
          <D1SnackbarItem
            label="Custom Area Context"
            description="Propagates custom area name via AreaInclude"
            area="custom-toast-area"
          />
        </div>
      </D1Group>

      <D1Group label="Slots (#default, #description, #body)">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem icon="auto_awesome">
            <template #default>
              <strong>Custom Default Label Slot</strong>
            </template>
            <template #description>
              <em>Custom Description Slot Content</em>
            </template>
            <template #body>
              <span>Custom Body Slot Content</span>
            </template>
          </D1SnackbarItem>
        </div>
      </D1Group>

      <D1Group label="Dynamic State Controls">
        <D1SnackbarItem
          label="Controlled SnackbarItem"
          description="Use the buttons below to mutate visual and structural props"
          :icon="{ icon: 'notifications_none', iconActive: 'notifications_active' }"
          :success="isDynamicSuccess"
          :error="isDynamicError"
          :close-button="isDynamicCloseButton"
          :actions-hide="isDynamicActionsHide"
          :icon-turn="isDynamicIconTurn"
          :icon-hide="isDynamicIconHide"
          :selected="isDynamicSelected"
          :actions-list="[{ label: 'Confirm', value: 'confirm' }]"
        />
        <DemoFlex align="center">
          <D1Button label="Toggle Success" size="sm" outline @click="isDynamicSuccess = !isDynamicSuccess"/>
          <D1Button label="Toggle Error" size="sm" outline @click="isDynamicError = !isDynamicError"/>
          <D1Button label="Toggle Close" size="sm" outline @click="isDynamicCloseButton = !isDynamicCloseButton"/>
          <D1Button label="Toggle Actions Hide" size="sm" outline @click="isDynamicActionsHide = !isDynamicActionsHide"/>
          <D1Button label="Toggle Icon Turn" size="sm" outline @click="isDynamicIconTurn = !isDynamicIconTurn"/>
          <D1Button label="Toggle Icon Hide" size="sm" outline @click="isDynamicIconHide = !isDynamicIconHide"/>
          <D1Button label="Toggle Selected" size="sm" outline @click="isDynamicSelected = !isDynamicSelected"/>
        </DemoFlex>
        <DemoValue
          label="Dynamic Flags"
          :value="{
            isDynamicSuccess,
            isDynamicError,
            isDynamicCloseButton,
            isDynamicActionsHide,
            isDynamicIconTurn,
            isDynamicIconHide,
            isDynamicSelected
          }"
        />
      </D1Group>

      <D1Group label="Events (click, clickLite, actions, actionsLite, close)">
        <D1SnackbarItem
          value="snackbar-item-event-1"
          label="Interactive Event Tracker"
          description="Click the inline button, action buttons, or close button"
          icon="bolt"
          :button="{ label: 'Undo', value: 'undo-action' }"
          :actions-list="[{ label: 'Apply', value: 'apply-action' }]"
          :actions-secondary="[{ label: 'Dismiss', value: 'dismiss-action' }]"
          @click="handleClickEvent"
          @click-lite="handleClickLiteEvent"
          @actions="handleActionsEvent"
          @actions-lite="handleActionsLiteEvent"
          @close="handleCloseEvent"
        />
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (ARIA Live Regions & Identifiers)">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem
            label="Automatic Alert Role"
            description="Error state automatically sets role='alert' and aria-live='assertive'"
            error
            text-close="Close error alert"
          />
          <D1SnackbarItem
            label="Automatic Status Role"
            description="Success state automatically sets role='status' and aria-live='polite'"
            success
            text-close="Close status notification"
          />
          <D1SnackbarItem
            label="Explicit ARIA Overrides"
            description="Custom role, ariaLive, labelId, and descriptionId attributes"
            role="log"
            aria-live="polite"
            label-id="demo-snackbar-item-label-id"
            description-id="demo-snackbar-item-desc-id"
            text-close="Close log entry"
          />
          <D1SnackbarItem
            label="Silent Live Region"
            description="Uses aria-live='off' for non-intrusive updates"
            role="region"
            aria-live="off"
          />
        </div>
      </D1Group>

      <D1Group label="Boundary Values & Narrow Container">
        <div class="demo-snackbar-item-page">
          <D1SnackbarItem label="" description="" text-close="Close empty item"/>
          <D1SnackbarItem label="   " description="   " text-close="Close whitespace item"/>
          <D1SnackbarItem :label="0" :description="0" :button="0"/>
          <D1SnackbarItem :label="-42" :description="3.14"/>
          <D1SnackbarItem label="A" description="B"/>
          <D1SnackbarItem
            label="Привет · Học tiếng Việt · 🚀"
            description="Multilingual Unicode and emoji content rendered cleanly"
          />
          <D1SnackbarItem
            label="<img src=x onerror=alert(1)>"
            description="<script>alert('xss')</script>"
          />
          <D1SnackbarItem
            label="Very long notification heading verifying multi-line wrapping and clean alignment with the close control"
            description="Extended multi-sentence description checking vertical spacing, typography contrast, and safe text wrapping across viewport widths."
            icon="info"
            button="Inspect"
          />
        </div>
        <DemoBox class="demo-snackbar-item-page__narrow" size="sm">
          <D1SnackbarItem
            label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            description="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
          />
        </DemoBox>
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
        <D1SnackbarItem
          v-if="isLifecycleMounted"
          label="Mounted SnackbarItem"
          description="Toggled cleanly via v-if"
          success
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-snackbar-item-page {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
