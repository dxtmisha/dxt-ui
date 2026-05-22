<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Tooltip">
    <D1Section>
      <D1Group label="Basic Usage">
        <DemoFlex>
          <D1Tooltip label="This is a simple tooltip">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Hover me" />
            </template>
          </D1Tooltip>
          <D1Tooltip label="Top placement" top>
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Top" />
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex>
          <D1Tooltip label="Small tooltip: Quick hint or code description" maxWidth="sm">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Small (sm)" />
            </template>
          </D1Tooltip>

          <D1Tooltip label="Medium tooltip: Standard spacing is applied for reading details" maxWidth="md">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Medium (md)" />
            </template>
          </D1Tooltip>

          <D1Tooltip label="Large tooltip: Large width supports longer paragraphs for comprehensive documentation" maxWidth="lg">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Large (lg)" />
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Rich Content (Slots)">
        <DemoFlex>
          <D1Tooltip>
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Default & Description" />
            </template>
            <template #default>
              Tooltip Title
            </template>
            <template #description>
              This is a description provided via the slot.
            </template>
          </D1Tooltip>

          <D1Tooltip>
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Custom Body Slot" />
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

      <D1Group label="Features">
        <DemoFlex>
          <D1Tooltip label="No arrow shown here" :arrowShow="false">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="No Arrow" />
            </template>
          </D1Tooltip>

          <D1Tooltip label="You can hover me, I am interactive!" arrowShow :interactive="true">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Interactive (hoverable)" />
            </template>
          </D1Tooltip>

          <D1Tooltip label="Non-interactive tooltip: closes instantly when leaving control" :interactive="false">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Non-interactive" />
            </template>
          </D1Tooltip>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Tooltip label="Trigger events by hovering or clicking" @tooltip="onEvent('tooltip')">
            <template #control="{ binds }">
              <D1Chip v-bind="binds" label="Hover for Events" />
            </template>
          </D1Tooltip>
          <DemoValue :value="eventName" />
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
