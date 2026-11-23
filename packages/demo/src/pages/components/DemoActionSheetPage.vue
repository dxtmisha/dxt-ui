<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ActionSheetExpose } from '@dxtmisha/constructor/ActionSheet'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openBasic = ref(false)
const openSlots = ref(false)
const openBarsActions = ref(false)

const openWidthSm = ref(false)
const openWidthMd = ref(false)
const openWidthLg = ref(false)
const openWidthAuto = ref(false)

const openNoTouch = ref(false)
const openPersistent = ref(false)
const openHideClose = ref(false)
const openAutoClose = ref(false)
const openDisableFocusReturn = ref(false)
const openAdaptiveRight = ref(false)

const openScrollable = ref(false)
const openNumericZero = ref(false)

const openVModel = ref(false)
const openModelOpen = ref(false)

const openEvents = ref(false)
const openEventsModelOpen = ref(false)

const exposeSheetRef = ref<ActionSheetExpose | null>(null)
const exposeStatus = ref('')

const syncExposeStatus = (): void => {
  const sheet = exposeSheetRef.value
  exposeStatus.value = sheet
    ? `getId(): "${sheet.getId()}", getOpen(): ${sheet.getOpen()}, hasWindowElement(): ${Boolean(sheet.getWindowElement())}`
    : ''
}

const onExposeOpen = async (): Promise<void> => {
  await exposeSheetRef.value?.toOpen()
  syncExposeStatus()
}

const onExposeSetOpen = async (value: boolean): Promise<void> => {
  await exposeSheetRef.value?.setOpen(value)
  syncExposeStatus()
}

const onExposeClose = async (): Promise<void> => {
  await exposeSheetRef.value?.toClose()
  syncExposeStatus()
}

const onExposeToggle = async (): Promise<void> => {
  await exposeSheetRef.value?.toggle()
  syncExposeStatus()
}

const actionsList = [
  { label: 'Cancel', value: 'cancel', text: true },
  { label: 'Confirm', value: 'confirm', primary: true }
]

const actionsSecondary = [
  { label: 'Reset', value: 'reset', outline: true }
]

const barsList = [
  { icon: 'help', value: 'help' }
]

const numericZeroActions = [
  { label: 0, value: 0, outline: true },
  { label: 'OK', value: 'ok', primary: true }
]

const scrollableParagraphs = Array.from(
  { length: 14 },
  (_, index) => `Section ${index + 1}: Scrollable action sheet content verifying divider, scrollbar, and footer stability within viewport limits.`
)

const exposeSummary = computed(() => {
  if (exposeStatus.value) {
    return exposeStatus.value
  }
  const sheet = exposeSheetRef.value
  return sheet
    ? `getId(): "${sheet.getId()}", getOpen(): ${sheet.getOpen()}, hasWindowElement(): ${Boolean(sheet.getWindowElement())}`
    : 'Not initialized'
})
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="ActionSheet">
    <D1Section>
      <D1Group label="Basic Usage & Slots">
        <DemoFlex>
          <D1ActionSheet v-model:open="openBasic">
            <template #control="{ binds }">
              <D1Button
                label="Open Basic Action Sheet"
                primary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Standard Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>The Action Sheet slides up from the bottom of the screen on mobile devices, providing a touch-optimized contextual drawer.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Dismiss"
                  secondary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet v-model:open="openSlots">
            <template #control="{ binds }">
              <D1Button
                label="All Slots Action Sheet"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Title Slot Heading</h3>
            </template>
            <template #header>
              <div class="demo-action-sheet-page__content">
                <strong>Sticky Header Slot Banner</strong>
              </div>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Default body slot content combined with dedicated <code>#title</code>, <code>#header</code>, and <code>#footer</code> slots.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close All Slots"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet
            v-model:open="openBarsActions"
            barsLabel="Action Sheet Bars Title"
            barsDescription="Accessible description linked via aria-describedby"
            :barsBackHide="false"
            :barsList="barsList"
            :actionsList="actionsList"
            :actionsSecondary="actionsSecondary"
          >
            <template #control="{ binds }">
              <D1Button
                label="Bars & Actions Sheet"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Integrated <code>D1Bars</code> header with back button and ARIA linkage, plus <code>D1Actions</code> footer with primary and secondary button lists.</p>
            </div>
          </D1ActionSheet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Width Configurations">
        <DemoFlex>
          <D1ActionSheet v-model:open="openWidthSm" width="sm">
            <template #control="{ binds }">
              <D1Button
                label="Small (sm)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Small (sm) Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses <code>width="sm"</code> configuration.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet v-model:open="openWidthMd" width="md">
            <template #control="{ binds }">
              <D1Button
                label="Medium (md)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Medium (md) Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses <code>width="md"</code> (standard default width).</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet v-model:open="openWidthLg" width="lg">
            <template #control="{ binds }">
              <D1Button
                label="Large (lg)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Large (lg) Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses <code>width="lg"</code> configuration.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet v-model:open="openWidthAuto" width="auto">
            <template #control="{ binds }">
              <D1Button
                label="Auto Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Auto Width Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses <code>width="auto"</code> configuration, adapting to content size.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Touch Close, Persistent & Dismiss Behavior">
        <DemoFlex>
          <D1ActionSheet v-model:open="openNoTouch" :touchClose="false">
            <template #control="{ binds }">
              <D1Button
                label="Disable Touch Close"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Touch Swipe Disabled</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>With <code>:touchClose="false"</code>, the touch swipe wrapper and drag handle are omitted and the close button remains visible on mobile.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet
            v-model:open="openPersistent"
            :touchClose="false"
            :windowAttrs="{ persistent: true, adaptive: 'actionSheet' }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Persistent Sheet"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Persistent Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Configured with <code>windowAttrs.persistent = true</code>. Cannot be dismissed by clicking outside or pressing Escape.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Dismiss Explicitly"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet
            v-model:open="openHideClose"
            :windowAttrs="{ closeButton: false, adaptive: 'actionSheet' }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Hide Close Button"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">No Close Button</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Hides the window close icon via <code>windowAttrs.closeButton = false</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Dismiss"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet disabled>
            <template #control="{ binds }">
              <D1Button
                label="Disabled Sheet"
                secondary
                disabled
                v-bind="binds"
              />
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Disabled sheet content.</p>
            </div>
          </D1ActionSheet>

          <D1ActionSheet v-model:open="openAutoClose" autoClose>
            <template #control="{ binds }">
              <D1Button
                label="Auto Close Sheet"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Auto Close Enabled</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Clicking anywhere inside this action sheet body automatically closes it via <code>autoClose</code>.</p>
            </div>
          </D1ActionSheet>

          <D1ActionSheet v-model:open="openDisableFocusReturn" disableFocusReturn>
            <template #control="{ binds }">
              <D1Button
                label="Disable Focus Return"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Focus Return Disabled</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Closing this sheet will not return keyboard focus to the trigger button (<code>disableFocusReturn</code>).</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet
            v-model:open="openAdaptiveRight"
            :windowAttrs="{ adaptive: 'actionSheetRight' }"
          >
            <template #control="{ binds }">
              <D1Button
                label="Adaptive Right (actionSheetRight)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Adaptive Right Drawer</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Uses <code>windowAttrs.adaptive = "actionSheetRight"</code> for side drawer placement on desktop and bottom sheet on mobile.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Scrollable Content">
        <DemoFlex>
          <D1ActionSheet v-model:open="openScrollable">
            <template #control="{ binds }">
              <D1Button
                label="Long Scrollable Content"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Long Policy Document</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p
                v-for="(paragraph, index) in scrollableParagraphs"
                :key="index"
              >
                {{ paragraph }}
              </p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>

          <D1ActionSheet
            v-model:open="openNumericZero"
            :barsLabel="0"
            :actionsList="numericZeroActions"
          >
            <template #control="{ binds }">
              <D1Button
                label="Numeric 0 Label Boundary"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-action-sheet-page__content">
              <p>Verifies numeric <code>0</code> in both <code>barsLabel</code> and <code>actionsList</code> renders cleanly as "0".</p>
            </div>
          </D1ActionSheet>
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
        <D1ActionSheet v-model:open="openVModel">
          <template #title>
            <h3 class="demo-action-sheet-page__title">Controlled Sheet (v-model:open)</h3>
          </template>
          <div class="demo-action-sheet-page__content">
            <p>This Action Sheet is driven by external reactive state via <code>v-model:open</code> binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-action-sheet-page__footer">
              <D1Button
                label="Close via v-model"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1ActionSheet>
        <D1ActionSheet v-model:modelOpen="openModelOpen">
          <template #title>
            <h3 class="demo-action-sheet-page__title">Controlled Sheet (v-model:modelOpen)</h3>
          </template>
          <div class="demo-action-sheet-page__content">
            <p>This Action Sheet is driven by external reactive state via <code>v-model:modelOpen</code> binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-action-sheet-page__footer">
              <D1Button
                label="Close via modelOpen"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1ActionSheet>
        <DemoValue :value="`open: ${openVModel}, modelOpen: ${openModelOpen}`" />
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1ActionSheet
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
                label="Open All Events Action Sheet"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This action sheet fires all available events. Check the values below or the console for details.</p>
              <p>Available events: <code>update:open</code>, <code>update:modelOpen</code>, <code>window</code>, <code>actions</code>, <code>actionsLite</code>, <code>bars</code>, <code>barsLite</code>, <code>barsBack</code>.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>
        </DemoFlex>
        <DemoValue :value="eventName" />
        <DemoValue :value="`open: ${openEvents}, modelOpen: ${openEventsModelOpen}`" />
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <DemoFlex>
          <D1Button label="Open (toOpen)" primary @click="onExposeOpen" />
          <D1Button label="Open (setOpen)" primary @click="onExposeSetOpen(true)" />
          <D1Button label="Close (toClose)" primary @click="onExposeClose" />
          <D1Button label="Close (setOpen false)" primary @click="onExposeSetOpen(false)" />
          <D1Button label="Toggle (toggle)" primary @click="onExposeToggle" />
        </DemoFlex>
        <D1ActionSheet
          ref="exposeSheetRef"
          @window="syncExposeStatus"
        >
          <template #title>
            <h3 class="demo-action-sheet-page__title">Expose Controlled Sheet</h3>
          </template>
          <div class="demo-action-sheet-page__content">
            <p>Controlled via exposed methods: <code>toOpen</code>, <code>toClose</code>, <code>setOpen</code>, <code>toggle</code>.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-action-sheet-page__footer">
              <D1Button
                label="Close"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1ActionSheet>
        <DemoValue :value="exposeSummary" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-action-sheet-page {
  &__title {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg) 0;
    margin: 0;
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
