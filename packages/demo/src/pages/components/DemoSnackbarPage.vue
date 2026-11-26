<script setup lang="ts">
import { defineComponent, h, markRaw, nextTick, ref } from 'vue'
import type { SnackbarExpose, SnackbarValue } from '@dxtmisha/constructor/Snackbar'
import { D1Button } from '@dxtmisha/d1/D1Button'
import type { SnackbarProps } from '@dxtmisha/d1/D1Snackbar'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const verticalOptions: NonNullable<SnackbarProps['vertical']>[] = ['top', 'bottom']
const horizontalOptions: NonNullable<SnackbarProps['horizontal']>[] = ['right', 'left', 'block']
const originOptions: NonNullable<SnackbarProps['origin']>[] = [
  'topToBottom',
  'bottomToTop',
  'rightToLeft',
  'leftToRight'
]
const limitOptions: NonNullable<SnackbarProps['limit']>[] = ['1', '2', '4', '6', '8']

const CustomSnackbarToast = markRaw(defineComponent({
  name: 'DemoCustomSnackbarToast',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Custom Toast Component'
    },
    description: {
      type: String,
      default: 'Rendered directly via item.component'
    },
    onClose: {
      type: Function,
      default: undefined
    }
  },
  setup(props) {
    return () => h(
      'div',
      {
        class: 'demo-snackbar-page__custom-toast',
        role: 'status'
      },
      [
        h('strong', `${props.label} (${props.value})`),
        h('span', props.description),
        h(
          D1Button,
          {
            label: 'Close',
            size: 'sm',
            outline: true,
            onClick: () => {
              if (typeof props.onClose === 'function') {
                props.onClose(props.value)
              }
            }
          }
        )
      ]
    )
  }
}))

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const eventLastIdentifier = ref<string>('')

const basicSnackbarRef = ref<SnackbarExpose | null>(null)
const basicHasItems = ref<boolean>(false)

const exposeSnackbarRef = ref<SnackbarExpose | null>(null)
const exposeState = ref<Record<string, unknown>>({
  isItem: false,
  lastAction: 'None'
})

const prioritySnackbarRef = ref<SnackbarExpose | null>(null)
const delaySnackbarRef = ref<SnackbarExpose | null>(null)

const placementSnackbarRef = ref<SnackbarExpose | null>(null)
const selectedVertical = ref<NonNullable<SnackbarProps['vertical']>>('bottom')
const selectedHorizontal = ref<NonNullable<SnackbarProps['horizontal']>>('right')
const selectedOrigin = ref<NonNullable<SnackbarProps['origin']>>('rightToLeft')

const layoutSnackbarRef = ref<SnackbarExpose | null>(null)
const selectedLimit = ref<NonNullable<SnackbarProps['limit']>>('4')
const isFullLayout = ref<boolean>(false)
const isAllLayout = ref<boolean>(false)

const eventSnackbarRef = ref<SnackbarExpose | null>(null)
const a11ySnackbarRef = ref<SnackbarExpose | null>(null)
const useFunctionRegionLabel = ref<boolean>(false)
const boundarySnackbarRef = ref<SnackbarExpose | null>(null)

const lifecycleSnackbarRef = ref<SnackbarExpose | null>(null)
const isLifecycleMounted = ref<boolean>(true)

const specialBoundaryIdentifier = 'quoted "id" [1]'
let notificationCounter = 0

const getRegionLabel = (): string => 'Dynamic notifications region (function)'

const syncBasicStatus = async (): Promise<void> => {
  await nextTick()
  basicHasItems.value = Boolean(basicSnackbarRef.value?.isItem())
}

const pushBasicNotification = async (item: SnackbarValue): Promise<void> => {
  basicSnackbarRef.value?.add(item)
  await syncBasicStatus()
}

const clearBasicNotifications = async (): Promise<void> => {
  basicSnackbarRef.value?.clear()
  await syncBasicStatus()
}

const runExposeAction = async (
  actionName: string,
  executor: () => void
): Promise<void> => {
  executor()
  await nextTick()
  exposeState.value = {
    isItem: Boolean(exposeSnackbarRef.value?.isItem()),
    lastAction: actionName
  }
}

const pushPriorityNotification = (item: SnackbarValue): void => {
  prioritySnackbarRef.value?.add(item)
}

const pushDelayNotification = (
  label: string,
  description: string,
  delay?: number
): void => {
  delaySnackbarRef.value?.add({
    delay,
    data: {
      label,
      description,
      icon: 'schedule'
    }
  })
}

const pushPlacementNotification = (): void => {
  notificationCounter += 1
  placementSnackbarRef.value?.add({
    data: {
      label: `Placement #${notificationCounter}`,
      description: `vertical=${selectedVertical.value}, horizontal=${selectedHorizontal.value}, origin=${selectedOrigin.value}`,
      icon: 'open_with'
    }
  })
}

const pushLayoutBatch = (): void => {
  for (let index = 1; index <= 5; index += 1) {
    notificationCounter += 1
    layoutSnackbarRef.value?.add({
      data: {
        label: `Queued Item #${notificationCounter}`,
        description: `Batch ${index}/5 (limit=${selectedLimit.value}, full=${isFullLayout.value}, all=${isAllLayout.value})`,
        palette: index % 2 === 0 ? 'blue' : 'emerald'
      }
    })
  }
}

const pushEventNotification = (): void => {
  notificationCounter += 1
  const identifier = `event-toast-${notificationCounter}`
  eventLastIdentifier.value = identifier
  eventSnackbarRef.value?.add({
    value: identifier,
    data: {
      label: `Tracked Notification #${notificationCounter}`,
      description: 'Triggers show on mount and hide on dismiss',
      icon: 'notifications'
    }
  })
}

const removeLastEventNotification = (): void => {
  if (eventLastIdentifier.value) {
    eventSnackbarRef.value?.remove(eventLastIdentifier.value)
  }
}

const handleShowEvent = (
  itemValue: string,
  item: SnackbarValue
): void => {
  onEvent('show', itemValue, item)
  eventPayload.value = JSON.stringify({
    value: itemValue,
    delay: item.delay,
    highPriority: Boolean(item.highPriority)
  })
}

const handleHideEvent = (
  itemValue: string,
  item: SnackbarValue
): void => {
  onEvent('hide', itemValue, item)
  eventPayload.value = JSON.stringify({
    value: itemValue,
    delay: item.delay
  })
}

const pushA11yNotification = (item: SnackbarValue): void => {
  a11ySnackbarRef.value?.add(item)
}

const pushBoundaryNotification = (item: SnackbarValue): void => {
  boundarySnackbarRef.value?.add(item)
}

const pushLifecycleNotification = (): void => {
  lifecycleSnackbarRef.value?.add({
    delay: 15_000,
    data: {
      label: 'Lifecycle Toast',
      description: 'Unmount the Snackbar to verify timers and DOM nodes clean up safely',
      icon: 'memory'
    }
  })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Snackbar">
    <D1Section>
      <D1Group label="Basic Live Queue & Notification Types">
        <DemoFlex align="center">
          <D1Button
            label="Push Default"
            size="sm"
            @click="pushBasicNotification({
              data: {
                label: 'Default Notification',
                description: 'Standard notification queued in Snackbar'
              }
            })"
          />
          <D1Button
            label="Push Success"
            size="sm"
            palette="green"
            @click="pushBasicNotification({
              data: {
                label: 'Saved Successfully',
                description: 'All changes have been synced.',
                success: true,
                icon: 'check_circle'
              }
            })"
          />
          <D1Button
            label="Push Error"
            size="sm"
            palette="red"
            @click="pushBasicNotification({
              data: {
                label: 'Connection Failed',
                description: 'Unable to reach the remote API.',
                error: true,
                icon: 'error'
              }
            })"
          />
          <D1Button
            label="Push Palette & Button"
            size="sm"
            palette="blue"
            @click="pushBasicNotification({
              data: {
                label: 'Message Archived',
                description: 'Moved conversation to archive.',
                palette: 'indigo',
                icon: 'archive',
                button: 'Undo'
              }
            })"
          />
          <D1Button
            label="Push With Actions"
            size="sm"
            palette="purple"
            @click="pushBasicNotification({
              data: {
                label: 'Update Available',
                description: 'Version 2.4 is ready to install.',
                icon: 'system_update',
                actionsList: [{ label: 'Install', value: 'install' }],
                actionsSecondary: [{ label: 'Later', value: 'later' }]
              }
            })"
          />
          <D1Button
            label="Push Sticky (No Close)"
            size="sm"
            outline
            @click="pushBasicNotification({
              delay: -1,
              data: {
                label: 'Persistent Notice',
                description: 'Requires Clear All or programmatic removal.',
                closeButton: false
              }
            })"
          />
          <D1Button
            label="Clear All"
            size="sm"
            outline
            @click="clearBasicNotifications"
          />
        </DemoFlex>
        <DemoValue label="Has Active Items (isItem)" :value="basicHasItems"/>
        <D1Snackbar
          ref="basicSnackbarRef"
          @hide="syncBasicStatus"
          @show="syncBasicStatus"
        />
      </D1Group>

      <D1Group label="Programmatic Expose (add, remove, clear, isItem)">
        <DemoFlex align="center">
          <D1Button
            label="Add Alpha"
            size="sm"
            @click="runExposeAction('add(alpha)', () => exposeSnackbarRef?.add({
              value: 'item-alpha',
              delay: -1,
              data: { label: 'Item Alpha', description: 'ID: item-alpha' }
            }))"
          />
          <D1Button
            label="Add Beta"
            size="sm"
            @click="runExposeAction('add(beta)', () => exposeSnackbarRef?.add({
              value: 'item-beta',
              delay: -1,
              data: { label: 'Item Beta', description: 'ID: item-beta', palette: 'teal' }
            }))"
          />
          <D1Button
            label="Add Gamma"
            size="sm"
            @click="runExposeAction('add(gamma)', () => exposeSnackbarRef?.add({
              value: 'item-gamma',
              delay: -1,
              data: { label: 'Item Gamma', description: 'ID: item-gamma', palette: 'amber' }
            }))"
          />
          <D1Button
            label="Remove Alpha"
            size="sm"
            outline
            @click="runExposeAction('remove(item-alpha)', () => exposeSnackbarRef?.remove('item-alpha'))"
          />
          <D1Button
            label="Remove Beta"
            size="sm"
            outline
            @click="runExposeAction('remove(item-beta)', () => exposeSnackbarRef?.remove('item-beta'))"
          />
          <D1Button
            label="Check isItem()"
            size="sm"
            outline
            @click="runExposeAction('isItem()', () => {})"
          />
          <D1Button
            label="Clear All"
            size="sm"
            outline
            @click="runExposeAction('clear()', () => exposeSnackbarRef?.clear())"
          />
        </DemoFlex>
        <DemoValue label="Expose State" :value="exposeState"/>
        <D1Snackbar ref="exposeSnackbarRef"/>
      </D1Group>

      <D1Group label="High Priority, HTML Body & Custom Component">
        <DemoFlex align="center">
          <D1Button
            label="Push Regular Item"
            size="sm"
            @click="pushPriorityNotification({
              data: {
                label: 'Regular Notification',
                description: 'Standard priority item in the main stack'
              }
            })"
          />
          <D1Button
            label="Push High Priority"
            size="sm"
            palette="red"
            @click="pushPriorityNotification({
              highPriority: true,
              data: {
                label: 'High Priority Alert',
                description: 'Rendered in an <aside> slot with priority spacer',
                error: true,
                icon: 'priority_high'
              }
            })"
          />
          <D1Button
            label="Push HTML Content"
            size="sm"
            outline
            @click="pushPriorityNotification({
              data: {
                label: 'Trusted HTML Body',
                html: 'Build <strong>#482</strong> passed <em>all checks</em>.'
              }
            })"
          />
          <D1Button
            label="Push Custom Component"
            size="sm"
            outline
            @click="pushPriorityNotification({
              component: CustomSnackbarToast,
              delay: -1,
              data: {
                label: 'Custom Toast',
                description: 'Rendered via item.component with onClose prop'
              }
            })"
          />
          <D1Button
            label="Clear All"
            size="sm"
            outline
            @click="prioritySnackbarRef?.clear()"
          />
        </DemoFlex>
        <D1Snackbar ref="prioritySnackbarRef"/>
      </D1Group>

      <D1Group label="Auto-Close Delays & Hover Pause/Resume">
        <DemoFlex align="center">
          <D1Button
            label="Container Default (3000ms)"
            size="sm"
            @click="pushDelayNotification('Default Delay (3s)', 'Hover over the toast to pause countdown')"
          />
          <D1Button
            label="Fast Delay (1200ms)"
            size="sm"
            outline
            @click="pushDelayNotification('Fast Delay (1.2s)', 'Closes quickly unless hovered', 1200)"
          />
          <D1Button
            label="Long Delay (12000ms)"
            size="sm"
            outline
            @click="pushDelayNotification('Long Delay (12s)', 'Stays visible for 12 seconds', 12000)"
          />
          <D1Button
            label="Persistent (delay: -1)"
            size="sm"
            outline
            @click="pushDelayNotification('Persistent Toast', 'Auto-close disabled via negative delay', -1)"
          />
          <D1Button
            label="Clear All"
            size="sm"
            outline
            @click="delaySnackbarRef?.clear()"
          />
        </DemoFlex>
        <D1Snackbar ref="delaySnackbarRef" :delay="3000"/>
      </D1Group>

      <D1Group label="Placement & Origin (vertical, horizontal, origin)">
        <DemoFlex align="center">
          <D1Button
            v-for="verticalMode in verticalOptions"
            :key="verticalMode"
            :label="`vertical: ${verticalMode}`"
            :primary="selectedVertical === verticalMode"
            :outline="selectedVertical !== verticalMode"
            size="sm"
            @click="selectedVertical = verticalMode"
          />
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button
            v-for="horizontalMode in horizontalOptions"
            :key="horizontalMode"
            :label="`horizontal: ${horizontalMode}`"
            :primary="selectedHorizontal === horizontalMode"
            :outline="selectedHorizontal !== horizontalMode"
            size="sm"
            @click="selectedHorizontal = horizontalMode"
          />
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button
            v-for="originMode in originOptions"
            :key="originMode"
            :label="`origin: ${originMode}`"
            :primary="selectedOrigin === originMode"
            :outline="selectedOrigin !== originMode"
            size="sm"
            @click="selectedOrigin = originMode"
          />
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button label="Push Placement Toast" size="sm" @click="pushPlacementNotification"/>
          <D1Button label="Clear Placement" size="sm" outline @click="placementSnackbarRef?.clear()"/>
        </DemoFlex>
        <DemoValue
          label="Active Placement"
          :value="{
            vertical: selectedVertical,
            horizontal: selectedHorizontal,
            origin: selectedOrigin
          }"
        />
        <D1Snackbar
          ref="placementSnackbarRef"
          :vertical="selectedVertical"
          :horizontal="selectedHorizontal"
          :origin="selectedOrigin"
        />
      </D1Group>

      <D1Group label="Limit, Full & All Layout Modifiers">
        <DemoFlex align="center">
          <D1Button
            v-for="limitValue in limitOptions"
            :key="limitValue"
            :label="`limit: ${limitValue}`"
            :primary="selectedLimit === limitValue"
            :outline="selectedLimit !== limitValue"
            size="sm"
            @click="selectedLimit = limitValue"
          />
          <D1Button
            :label="`full: ${isFullLayout}`"
            :primary="isFullLayout"
            :outline="!isFullLayout"
            size="sm"
            @click="isFullLayout = !isFullLayout"
          />
          <D1Button
            :label="`all: ${isAllLayout}`"
            :primary="isAllLayout"
            :outline="!isAllLayout"
            size="sm"
            @click="isAllLayout = !isAllLayout"
          />
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button label="Push 5 Toasts" size="sm" @click="pushLayoutBatch"/>
          <D1Button label="Clear Batch" size="sm" outline @click="layoutSnackbarRef?.clear()"/>
        </DemoFlex>
        <DemoValue
          label="Layout Config"
          :value="{
            limit: selectedLimit,
            full: isFullLayout,
            all: isAllLayout
          }"
        />
        <D1Snackbar
          ref="layoutSnackbarRef"
          :limit="selectedLimit"
          :full="isFullLayout"
          :all="isAllLayout"
        />
      </D1Group>

      <D1Group label="Events (show, hide)">
        <DemoFlex align="center">
          <D1Button label="Push Tracked Toast" size="sm" @click="pushEventNotification"/>
          <D1Button label="Remove Last" size="sm" outline @click="removeLastEventNotification"/>
          <D1Button label="Clear Tracked" size="sm" outline @click="eventSnackbarRef?.clear()"/>
        </DemoFlex>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <D1Snackbar
          ref="eventSnackbarRef"
          @show="handleShowEvent"
          @hide="handleHideEvent"
        />
      </D1Group>

      <D1Group label="Accessibility (textNotifications & ARIA Live Regions)">
        <DemoFlex align="center">
          <D1Button
            label="Push Polite Status"
            size="sm"
            palette="green"
            @click="pushA11yNotification({
              data: {
                label: 'Profile Updated',
                description: 'Announced politely with role=status',
                success: true,
                textClose: 'Close status notification'
              }
            })"
          />
          <D1Button
            label="Push Assertive Alert"
            size="sm"
            palette="red"
            @click="pushA11yNotification({
              data: {
                label: 'Session Expiring',
                description: 'Announced assertively with role=alert',
                error: true,
                textClose: 'Close alert notification'
              }
            })"
          />
          <D1Button
            label="Push Custom ARIA"
            size="sm"
            outline
            @click="pushA11yNotification({
              data: {
                label: 'Audit Log Entry',
                description: 'Explicit role=log and aria-live=polite',
                role: 'log',
                ariaLive: 'polite',
                textClose: 'Dismiss log entry'
              }
            })"
          />
          <D1Button
            label="Toggle Region Label Mode"
            size="sm"
            outline
            @click="useFunctionRegionLabel = !useFunctionRegionLabel"
          />
          <D1Button
            label="Clear A11y"
            size="sm"
            outline
            @click="a11ySnackbarRef?.clear()"
          />
        </DemoFlex>
        <DemoValue
          label="textNotifications Mode"
          :value="useFunctionRegionLabel ? 'function' : 'string'"
        />
        <D1Snackbar
          ref="a11ySnackbarRef"
          :text-notifications="useFunctionRegionLabel ? getRegionLabel : 'Application notifications region'"
        />
      </D1Group>

      <D1Group label="Boundary Values & Edge Cases">
        <DemoFlex align="center">
          <D1Button
            label="Push Empty Strings"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              data: { label: '', description: '', textClose: 'Close empty toast' }
            })"
          />
          <D1Button
            label="Push Whitespace"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              data: { label: '   ', description: '   ', textClose: 'Close whitespace toast' }
            })"
          />
          <D1Button
            label="Push Numeric 0"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              data: { label: 0, description: 0, button: 0 }
            })"
          />
          <D1Button
            label="Push Unicode"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              data: {
                label: 'Привет · Học tiếng Việt · 🚀',
                description: 'Multilingual characters and emoji support'
              }
            })"
          />
          <D1Button
            label="Push XSS String"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              data: {
                label: '<img src=x onerror=alert(1)>',
                description: '<script>alert(1)</script>'
              }
            })"
          />
          <D1Button
            label="Push Long Unbroken"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              data: {
                label: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                description: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
              }
            })"
          />
          <D1Button
            label="Push Special ID"
            size="sm"
            outline
            @click="pushBoundaryNotification({
              value: specialBoundaryIdentifier,
              delay: -1,
              data: {
                label: 'Special Character ID',
                description: `ID: ${specialBoundaryIdentifier}`
              }
            })"
          />
          <D1Button
            label="Remove Special ID"
            size="sm"
            outline
            @click="boundarySnackbarRef?.remove(specialBoundaryIdentifier)"
          />
          <D1Button
            label="Clear Boundary"
            size="sm"
            outline
            @click="boundarySnackbarRef?.clear()"
          />
        </DemoFlex>
        <D1Snackbar ref="boundarySnackbarRef"/>
      </D1Group>

      <D1Group label="SSR, Teleport & Lifecycle (Mount/Unmount)">
        <DemoFlex align="center">
          <D1Button
            label="Push Active Timer Toast"
            size="sm"
            :disabled="!isLifecycleMounted"
            @click="pushLifecycleNotification"
          />
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        <D1Snackbar
          v-if="isLifecycleMounted"
          ref="lifecycleSnackbarRef"
          :delay="15000"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-snackbar-page {
  &__custom-toast {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ui.v('?sys.spacing.sm');
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
    border-width: 1px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.lg');
    @include ui.backgroundColor(ui.v('?sys.palette.surface'), ui.v('?sys.opacity.primary.high'));
    @include ui.color(ui.v('?sys.palette.onSurface'), ui.v('?sys.opacity.primary.high'));
    box-shadow: ui.v('?sys.shadow.lg');
  }
}
</style>
