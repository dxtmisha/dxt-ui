<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const openControlled = ref(false)
const openBasic = ref(false)
const openWidthSm = ref(false)
const openWidthMd = ref(false)
const openWidthLg = ref(false)
const openWidthAuto = ref(false)
const openNoTouch = ref(false)
const openSlots = ref(false)

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
  <D1Page label="ActionSheet">
    <D1Section>
      <D1Group label="Basic Usage">
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
              <p>The Action Sheet slides up from the bottom of the screen on mobile devices, providing a highly optimized contextual drawer menu.</p>
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
        </DemoFlex>
      </D1Group>

      <D1Group label="Width Configurations">
        <DemoFlex>
          <!-- Width SM -->
          <D1ActionSheet v-model:open="openWidthSm" width="sm">
            <template #control="{ binds }">
              <D1Button
                label="Small Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Small (sm) Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses `width="sm"` configuration.</p>
            </div>
          </D1ActionSheet>

          <!-- Width MD -->
          <D1ActionSheet v-model:open="openWidthMd" width="md">
            <template #control="{ binds }">
              <D1Button
                label="Medium Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Medium (md) Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses `width="md"` (standard default width).</p>
            </div>
          </D1ActionSheet>

          <!-- Width LG -->
          <D1ActionSheet v-model:open="openWidthLg" width="lg">
            <template #control="{ binds }">
              <D1Button
                label="Large Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Large (lg) Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>This layout uses `width="lg"` configuration.</p>
            </div>
          </D1ActionSheet>

          <!-- Width Auto -->
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
              <p>This layout uses `width="auto"` configuration, sizing matching the content size.</p>
            </div>
          </D1ActionSheet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Close Behavior (touchClose)">
        <DemoFlex>
          <D1ActionSheet v-model:open="openNoTouch" :touchClose="true">
            <template #control="{ binds }">
              <D1Button
                label="Disable Swipe / Backdrop Close"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-action-sheet-page__title">Persistent Action Sheet</h3>
            </template>
            <div class="demo-action-sheet-page__content">
              <p>With `:touchClose="false"`, you cannot close this action sheet by swiping down or clicking the background overlay scrim. It requires clicking the close/dismiss buttons programmatically or using target triggers.</p>
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
        </DemoFlex>
      </D1Group>

      <D1Group label="Programmatic Control (V-Model)">
        <DemoFlex>
          <D1Button
            :label="openControlled ? 'Close Programmatically' : 'Open Programmatically'"
            primary
            @click="openControlled = !openControlled"
          />
        </DemoFlex>
        <D1ActionSheet v-model:open="openControlled">
          <template #title>
            <h3 class="demo-action-sheet-page__title">Controlled Sheet</h3>
          </template>
          <div class="demo-action-sheet-page__content">
            <p>This Action Sheet is driven by external reactive state via `v-model:open` binding.</p>
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
        <DemoValue :value="openControlled" />
      </D1Group>

      <D1Group label="Demonstrating All Slots">
        <DemoFlex>
          <D1ActionSheet v-model:open="openSlots">
            <template #control="{ binds }">
              <D1Button
                label="Open All Slots"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              Title slot
            </template>
            <div class="demo-action-sheet-page__content">
              Default slot
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-action-sheet-page__footer">
                <D1Button
                  label="Footer Close"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1ActionSheet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1ActionSheet
            v-model:open="openEvents"
            v-model:modelOpen="openEventsModelOpen"
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
            <template #title>
              <h3 class="demo-action-sheet-page__title">All Events Logger</h3>
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
        <div class="demo-action-sheet-page__values">
          <DemoValue :value="openEvents" label="v-model:open" />
          <DemoValue :value="openEventsModelOpen" label="v-model:modelOpen" />
        </div>
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
