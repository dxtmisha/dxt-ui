<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const controlledOpen = ref(false)
const tooltipRef = ref<{ toggle: (open: boolean, flash?: boolean) => Promise<void> } | null>(null)

const onToggleControlled = (): void => {
  controlledOpen.value = !controlledOpen.value
}

const onExposeOpen = (): void => {
  tooltipRef.value?.toggle(true, true)
}

const onExposeClose = (): void => {
  tooltipRef.value?.toggle(false, true)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Tooltip">
    <D1Section>
      <D1Group label="Basic Usage & Placement">
        <DemoFlex>
          <D1Tooltip label="This is a simple tooltip">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Hover me (Bottom)"/>
            </template>
          </D1Tooltip>

          <D1Tooltip label="Top placement" top>
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Top Placement"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Label & Description"
            description="Secondary helper description provided via prop."
            label-id="demo-tooltip-label"
            description-id="demo-tooltip-description"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Label + Description"/>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes (maxWidth)">
        <DemoFlex>
          <D1Tooltip
            label="Small tooltip: Quick hint or code description"
            max-width="sm"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Small (sm)"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Medium tooltip: Standard spacing is applied for reading details and helpful context"
            max-width="md"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Medium (md)"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Large tooltip: Wide width supports longer paragraphs for comprehensive documentation and detailed instructions"
            max-width="lg"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Large (lg)"/>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Arrow & Indentation">
        <DemoFlex>
          <D1Tooltip label="With automatic arrow" arrow-show>
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Arrow Auto"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Top with arrow and 16px indent"
            top
            arrow-show
            :indent="16"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Arrow + Indent 16"/>
            </template>
          </D1Tooltip>

          <D1Tooltip label="No arrow shown here" :arrow-show="false" :indent="0">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="No Arrow (Indent 0)"/>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive, Delays & Disabled">
        <DemoFlex>
          <D1Tooltip
            label="You can hover this tooltip, it stays open!"
            arrow-show
            :interactive="true"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Interactive (hoverable)"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Non-interactive tooltip with role=tooltip"
            :interactive="false"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Non-interactive"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Delayed show (400ms) and auto-hide (1200ms)"
            :delay="400"
            :delay-hide="1200"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Delay 400 / Auto-hide 1200"/>
            </template>
          </D1Tooltip>

          <D1Tooltip label="You should never see this" disabled>
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Disabled Tooltip"/>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Controlled Open, Expose & Lifecycle (inDom / embedded)">
        <DemoFlex>
          <D1Button label="Toggle Controlled Open" @click="onToggleControlled"/>
          <D1Tooltip
            label="Controlled via :open prop"
            description="Toggled reactively from external state."
            :open="controlledOpen"
            arrow-show
          >
            <template #control="{ binds, open }">
              <D1Button v-bind="binds" :label="open.value ? 'Controlled (Open)' : 'Controlled (Closed)'"/>
            </template>
          </D1Tooltip>
        </DemoFlex>

        <DemoFlex>
          <D1Button label="Expose Open (flash)" @click="onExposeOpen"/>
          <D1Button label="Expose Close (flash)" @click="onExposeClose"/>
          <D1Tooltip
            ref="tooltipRef"
            label="Opened via ref.toggle()"
            description="Programmatic expose API."
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Expose Target"/>
            </template>
          </D1Tooltip>
        </DemoFlex>

        <DemoBox>
          <D1Tooltip
            label="Embedded & inDom Tooltip"
            description="Rendered inline inside parent without Teleport (SSR-friendly)."
            in-dom
            embedded
            open
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Embedded Control"/>
            </template>
          </D1Tooltip>
        </DemoBox>
      </D1Group>

      <D1Group label="Rich Content (Slots)">
        <DemoFlex>
          <D1Tooltip>
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Default & Description Slots"/>
            </template>
            <template #default>
              Tooltip Title Slot
            </template>
            <template #description>
              This is a description provided via the description slot.
            </template>
          </D1Tooltip>

          <D1Tooltip>
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Custom Body Slot"/>
            </template>
            <template #body>
              <div class="demo-tooltip-page__custom-body">
                <h4>Cosmos Facts</h4>
                <p>The observable universe contains over 2 trillion galaxies.</p>
              </div>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Data Types & Boundaries">
        <DemoFlex>
          <D1Tooltip :label="0" :description="0">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Numeric 0"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Multilingual: Привет / Học tiếng Việt / 🚀"
            description="Special characters & escaped text: <img src=x onerror=alert(1)>"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Unicode & XSS Safe"/>
            </template>
          </D1Tooltip>

          <D1Tooltip label="">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Empty Label (No Popup)"/>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Tooltip
            label="Trigger events by hovering or clicking"
            @tooltip="(open: boolean) => onEvent(`tooltip:${open}`)"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Hover or Click for Events"/>
            </template>
          </D1Tooltip>
          <DemoValue :value="eventName"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-tooltip-page {
  &__custom-body {
    padding: 8px;

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 12px;
      opacity: 0.8;
    }
  }
}
</style>
