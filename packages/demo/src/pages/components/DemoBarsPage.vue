<script setup lang="ts">
import { ref } from 'vue'
import type { BarsProps } from '@dxtmisha/d1/D1Bars'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('none')

const recordEvent = (name: string, ...args: unknown[]): void => {
  onEvent(name, ...args)
  try {
    const serialized = args.map((item) => {
      if (typeof Event !== 'undefined' && item instanceof Event) {
        return item.type
      }
      return item
    })
    eventPayload.value = serialized.length > 0 ? JSON.stringify(serialized) : 'no payload'
  } catch {
    eventPayload.value = name
  }
}

const isAction = ref<boolean>(false)
const isModelAction = ref<boolean>(false)
const isActionSlots = ref<boolean>(false)
const isEventAction = ref<boolean>(false)
const isEventModelAction = ref<boolean>(false)
const skeletonActive = ref<boolean>(true)
const lifecycleMounted = ref<boolean>(true)

const paddingVariants: readonly NonNullable<BarsProps['padding']>[] = [
  'sm',
  'md',
  'lg',
  'ySm',
  'yMd',
  'yLg',
  'none'
]

const getCloseText = (): string => 'Dismiss action bar'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Bars">
    <D1Section>
      <D1Group label="Basic">
        <DemoBox>
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search', value: 'search', 'aria-label': 'Search' },
              { icon: 'refresh', value: 'refresh', 'aria-label': 'Refresh' },
              { label: 'Save', value: 'save' }
            ]"
            @click="(event, value) => recordEvent('click', event, value)"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            :label="0"
            :description="0"
            back-hide
            :bars="[{ label: 'Action', value: 'action' }]"
            :button-attrs="{ outline: true, size: 'sm' }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Action Mode & Two-Way Binding">
        <DemoFlex align="center">
          <D1Button
            :label="isAction ? 'Exit Action Mode' : 'Enter Action Mode'"
            size="sm"
            @click="isAction = !isAction"
          />
          <D1Button
            label="Reset Action"
            size="sm"
            outline
            @click="isAction = false"
          />
          <DemoValue label="action" :value="isAction"/>
        </DemoFlex>
        <DemoBox>
          <D1Bars
            v-model:action="isAction"
            label="Standard View"
            description="Toggle action mode above or click back to close action mode"
            :bars="[
              { icon: 'search', value: 'search', 'aria-label': 'Search' },
              { icon: 'more_vert', value: 'more', 'aria-label': 'More options' }
            ]"
            action-label="Selected Item State"
            action-description="Perform action on the selected elements"
            :action-bars="[
              { icon: 'share', value: 'share', 'aria-label': 'Share' },
              { icon: 'edit', value: 'edit', 'aria-label': 'Edit' },
              { icon: 'delete', value: 'delete', 'aria-label': 'Delete' }
            ]"
            @click="(event, value) => recordEvent('click', event, value)"
          />
        </DemoBox>

        <DemoFlex align="center">
          <D1Button
            :label="isModelAction ? 'Exit Model Action' : 'Enter Model Action'"
            size="sm"
            @click="isModelAction = !isModelAction"
          />
          <DemoValue label="modelAction" :value="isModelAction"/>
        </DemoFlex>
        <DemoBox>
          <D1Bars
            v-model:model-action="isModelAction"
            label="Model Action Standard"
            description="Uses modelAction and hides back button in action mode"
            back-action-hide
            :action-label="0"
            :action-description="0"
            :action-bars="[
              { label: 'Done', value: 'done' }
            ]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Back Button, Custom Icons & buttonAttrs">
        <DemoBox>
          <D1Bars
            label="Hidden Back Button"
            description="backHide=true"
            back-hide
            :bars="[{ icon: 'settings', value: 'settings', 'aria-label': 'Settings' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Custom Back Button"
            description="backButton, iconBack, iconClose, textClose"
            icon-back="chevron_left"
            icon-close="cancel"
            text-close="Close bar"
            :back-button="{ label: 'Back', outline: true }"
            :bars="[{ icon: 'check', value: 'check', 'aria-label': 'Confirm' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Object Icons & Function textClose"
            description="Object iconBack/iconClose, callback textClose, shared buttonAttrs"
            :icon-back="{ icon: 'arrow_back_ios', palette: 'blue' }"
            :icon-close="{ icon: 'close', palette: 'red' }"
            :text-close="getCloseText"
            :button-attrs="{ outline: true, size: 'sm', palette: 'blue' }"
            :bars="[{ label: 'Apply', value: 'apply' }, { label: 'Export', value: 'export' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoBox>
          <D1Bars
            label="Disabled & Loading Bar Actions"
            description="Disabled and loading bar buttons must not emit click events"
            back-hide
            :bars="[
              { icon: 'delete', label: 'Disabled', disabled: true, value: 'blocked-disabled' },
              { icon: 'sync', label: 'Loading', loading: true, value: 'blocked-loading' },
              { icon: 'check', label: 'Enabled', value: 'allowed-click' }
            ]"
            @click="(event, value) => recordEvent('click', event, value)"
            @click-lite="(value) => recordEvent('clickLite', value)"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Paddings">
        <DemoBox v-for="paddingVariant in paddingVariants" :key="paddingVariant">
          <D1Bars
            :label="`Padding: ${paddingVariant}`"
            :description="`padding='${paddingVariant}', paddingByIndent=false`"
            :padding="paddingVariant"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search', 'aria-label': 'Search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Padding by Indent Default"
            description="paddingByIndent=true (default)"
            :bars="[{ icon: 'search', value: 'search', 'aria-label': 'Search' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Skeleton & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="`Toggle Skeleton (${skeletonActive ? 'on' : 'off'})`"
            size="sm"
            outline
            @click="skeletonActive = !skeletonActive"
          />
          <D1Button
            :label="lifecycleMounted ? 'Unmount Bars' : 'Mount Bars'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox>
          <D1Skeleton :active="skeletonActive">
            <D1Bars
              is-skeleton
              label="Skeleton Title"
              description="Skeleton description text placeholder"
              :bars="[
                { icon: 'search', value: 'search', 'aria-label': 'Search' },
                { icon: 'refresh', value: 'refresh', 'aria-label': 'Refresh' }
              ]"
            />
          </D1Skeleton>
        </DemoBox>
        <DemoBox v-if="lifecycleMounted">
          <D1Bars
            label="Conditional Lifecycle Bars"
            description="Mounted and unmounted cleanly via v-if"
            :bars="[{ icon: 'check_circle', value: 'mounted', 'aria-label': 'Mounted action' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Slots">
        <DemoFlex>
          <D1Button
            :label="isActionSlots ? 'Exit Action Mode' : 'Enter Action Mode'"
            size="sm"
            @click="isActionSlots = !isActionSlots"
          />
        </DemoFlex>
        <DemoBox>
          <D1Bars
            v-model:action="isActionSlots"
            @click="(event, value) => recordEvent('click', event, value)"
          >
            <template #default>
              <span class="demo-bars-page__custom-label">Custom Label Slot</span>
            </template>
            <template #description>
              <span class="demo-bars-page__custom-desc">Custom Description Slot text content</span>
            </template>
            <template #bars>
              <D1Button label="Search" size="xs" primary icon="search" value="search"/>
              <D1Button label="Refresh" size="xs" outline icon="refresh" value="refresh"/>
            </template>
            <template #actionBars>
              <D1Button label="Delete" size="xs" palette="red" icon="delete" value="delete"/>
            </template>
          </D1Bars>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & IDs">
        <DemoBox>
          <D1Bars
            label-id="demo-bars-title"
            description-id="demo-bars-desc"
            label="Accessible Action Header"
            description="Includes aria-live='polite' because action mode is configured"
            action-label="Action Active"
            :bars="[{ icon: 'info', value: 'info', 'aria-label': 'Information' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1Bars data-testid="demo-bars-empty"/>
        </DemoBox>
        <DemoBox>
          <D1Bars label="   " description="   " :bars="[]"/>
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="A"
            :description="-15.5"
            back-hide
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="SuperLongUnbrokenBarTitleWithoutAnySpacesOrHyphensToVerifyTwoLineClampingAndWrapping1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            description="Unicode • Tiếng Việt • Кириллица 🚀"
            :bars="[{ icon: 'translate', value: 'locale', 'aria-label': 'Language' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="<script>alert('xss')</script>"
            description="<img src=x onerror=alert(1)> safely escaped"
            back-hide
          />
        </DemoBox>
        <DemoBox class="demo-bars-page__narrow-box">
          <D1Bars
            label="Constrained Narrow Container Bars"
            description="Verifies layout in a narrow 280px container"
            :bars="[{ icon: 'more_vert', value: 'more', 'aria-label': 'More' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex align="center">
          <D1Button
            label="Toggle action"
            size="sm"
            @click="isEventAction = !isEventAction"
          />
          <D1Button
            label="Toggle modelAction"
            size="sm"
            outline
            @click="isEventModelAction = !isEventModelAction"
          />
        </DemoFlex>
        <DemoBox>
          <D1Bars
            v-model:action="isEventAction"
            v-model:model-action="isEventModelAction"
            label="Event Tracker"
            description="Interact with the back button or action buttons to track all emitted events"
            action-label="Action Mode Events"
            :bars="[
              { icon: 'thumb_up', value: 'like', 'aria-label': 'Like' },
              { icon: 'thumb_down', value: 'dislike', 'aria-label': 'Dislike' }
            ]"
            :action-bars="[
              { label: 'Confirm', value: 'confirm' }
            ]"
            @click="(event, value) => recordEvent('click', event, value)"
            @click-lite="(value) => recordEvent('clickLite', value)"
            @update:action="(value) => recordEvent('update:action', value)"
            @update:model-action="(value) => recordEvent('update:modelAction', value)"
          />
        </DemoBox>
        <DemoValue :value="eventName"/>
        <DemoValue label="Payload" :value="eventPayload"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-bars-page {
  &__custom-label {
    font-weight: 700;
  }

  &__custom-desc {
    font-style: italic;
  }

  &__narrow-box {
    max-width: 280px;
  }
}
</style>
