<script setup lang="ts">
import { ref } from 'vue'
import type { TooltipExpose } from '@dxtmisha/constructor/Tooltip'
import type { TooltipProps } from '@dxtmisha/d1/D1Tooltip'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const arrowPositions: NonNullable<TooltipProps['arrowPosition']>[] = [
  'auto',
  'top',
  'bottom',
  'left',
  'right'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const isControlledOpen = ref<boolean>(false)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicTop = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)
const exposeStateText = ref<string>('Not called yet')
const tooltipReference = ref<TooltipExpose | null>(null)

const xssPayload = '<img src=x onerror=alert(1)>'
const longUnbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const longSentenceText = 'This tooltip displays an extended multi-sentence explanation to verify line wrapping, maxWidth boundaries, and viewport clamping behavior.'

const onToggleControlled = (): void => {
  isControlledOpen.value = !isControlledOpen.value
}

const onToggleDynamicDisabled = (): void => {
  isDynamicDisabled.value = !isDynamicDisabled.value
}

const onToggleDynamicTop = (): void => {
  isDynamicTop.value = !isDynamicTop.value
}

const onToggleLifecycleMounted = (): void => {
  isLifecycleMounted.value = !isLifecycleMounted.value
}

const onExposeOpen = async (): Promise<void> => {
  await tooltipReference.value?.toggle(true, true)
  exposeStateText.value = 'toggle(true, true) called'
}

const onExposeClose = async (): Promise<void> => {
  await tooltipReference.value?.toggle(false, true)
  exposeStateText.value = 'toggle(false, true) called'
}

const handleTooltipEvent = (isOpen: boolean): void => {
  onEvent('tooltip', isOpen)
  eventPayload.value = `open: ${isOpen}`
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

      <D1Group label="Arrow, All Positions & Indentation">
        <DemoFlex>
          <D1Tooltip
            v-for="positionItem in arrowPositions"
            :key="positionItem"
            :label="`Arrow position: ${positionItem}`"
            arrow-show
            :arrow-position="positionItem"
            :arrow-attrs="{ 'data-testid': `tooltip-arrow-${positionItem}` }"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" :label="`Arrow (${positionItem})`"/>
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

      <D1Group label="Interactive, Delays & Blocked States">
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

        <DemoFlex align="center">
          <D1Button label="Toggle Dynamic Disabled" @click="onToggleDynamicDisabled"/>
          <D1Button label="Toggle Dynamic Top" @click="onToggleDynamicTop"/>
          <DemoValue label="Disabled" :value="isDynamicDisabled"/>
          <DemoValue label="Top" :value="isDynamicTop"/>
          <D1Tooltip
            label="Dynamic State Tooltip"
            :disabled="isDynamicDisabled"
            :top="isDynamicTop"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Dynamic Target"/>
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Controlled Open, Expose & Lifecycle (inDom / embedded / v-if)">
        <DemoFlex align="center">
          <D1Button label="Toggle Controlled Open" @click="onToggleControlled"/>
          <DemoValue label="Controlled Open" :value="isControlledOpen"/>
          <D1Tooltip
            label="Controlled via :open prop"
            description="Toggled reactively from external state."
            :open="isControlledOpen"
            arrow-show
          >
            <template #control="{ binds, open }">
              <D1Button v-bind="binds" :label="open.value ? 'Controlled (Open)' : 'Controlled (Closed)'"/>
            </template>
          </D1Tooltip>
        </DemoFlex>

        <DemoFlex align="center">
          <D1Button label="Expose Open (flash)" @click="onExposeOpen"/>
          <D1Button label="Expose Close (flash)" @click="onExposeClose"/>
          <D1Tooltip
            ref="tooltipReference"
            label="Opened via ref.toggle()"
            description="Programmatic expose API."
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Expose Target"/>
            </template>
          </D1Tooltip>
          <DemoValue label="Expose Action" :value="exposeStateText"/>
        </DemoFlex>

        <DemoFlex align="center">
          <D1Button label="Toggle Lifecycle Mount" @click="onToggleLifecycleMounted"/>
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
          <D1Tooltip
            v-if="isLifecycleMounted"
            label="Lifecycle Mounted Tooltip"
            description="Cleans up timers and animation frames on unmount."
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Mounted Target"/>
            </template>
          </D1Tooltip>
        </DemoFlex>

        <DemoFlex>
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

          <DemoBox>
            <D1Tooltip
              label="Always in DOM (Closed)"
              description="Pre-rendered in DOM while closed."
              in-dom
              data-testid="tooltip-indom-closed"
            >
              <template #control="{ binds }">
                <D1Button v-bind="binds" label="inDom Closed"/>
              </template>
            </D1Tooltip>
          </DemoBox>
        </DemoFlex>
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

      <D1Group label="Accessibility (WAI-ARIA & Keyboard)">
        <DemoFlex>
          <D1Tooltip
            label="Interactive Region Tooltip"
            description="Exposes aria-expanded, aria-controls, and role=region."
            label-id="demo-a11y-label"
            description-id="demo-a11y-description"
            :interactive="true"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Interactive Region Control"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Semantic Non-Interactive Hint"
            :interactive="false"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Role Tooltip Control"/>
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

          <D1Tooltip :label="42" :description="99">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Numeric 42 / 99"/>
            </template>
          </D1Tooltip>

          <D1Tooltip
            label="Multilingual: Привет / Học tiếng Việt / 🚀"
            :description="`Special characters & escaped text: ${xssPayload}`"
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

          <D1Tooltip label="   ">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Whitespace Label"/>
            </template>
          </D1Tooltip>

          <D1Tooltip :label="undefined" :description="undefined">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Undefined Label"/>
            </template>
          </D1Tooltip>

          <D1Tooltip :label="longSentenceText" :description="longUnbrokenText">
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Long & Unbroken Text"/>
            </template>
          </D1Tooltip>
        </DemoFlex>

        <DemoBox class="demo-tooltip-page__narrow">
          <D1Tooltip
            :label="longSentenceText"
            :description="longUnbrokenText"
            embedded
            open
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Narrow Embedded"/>
            </template>
          </D1Tooltip>
        </DemoBox>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex align="center">
          <D1Tooltip
            label="Trigger events by hovering or clicking"
            @tooltip="handleTooltipEvent"
          >
            <template #control="{ binds }">
              <D1Button v-bind="binds" label="Hover or Click for Events"/>
            </template>
          </D1Tooltip>
          <DemoValue label="Event Name" :value="eventName"/>
          <DemoValue label="Event Payload" :value="eventPayload"/>
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

  &__narrow {
    max-width: 240px;

    .d1-tooltip__description {
      overflow-wrap: anywhere;
    }
  }
}
</style>
