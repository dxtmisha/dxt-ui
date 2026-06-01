<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CellExpose } from '@dxtmisha/constructor/Cell'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const cellRef = ref<CellExpose | null>(null)

const statusValue = computed<string>(() => {
  if (cellRef.value) {
    const val = cellRef.value.getValue?.()
    const detail = cellRef.value.getDetail?.()
    return `getValue(): ${JSON.stringify(val)}, getDetail(): ${JSON.stringify(detail)}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Cell">
    <D1Section>
      <D1Group label="Basic">
        <D1Cell
          label="Default Cell"
          description="Standard cell description goes here"
          caption="Cell Caption"
        />
        <D1Cell
          label="Cell with Custom Tag"
          description="Rendered as a section tag"
          tag="section"
        />
      </D1Group>

      <D1Group label="States">
        <D1Cell
          label="Disabled State"
          description="Interaction is disabled"
          disabled
        />
        <D1Cell
          label="Selected State"
          description="Visual indicator of selection"
          selected
        />
        <D1Cell
          label="Readonly State"
          description="Only readable state"
          readonly
        />
        <D1Cell
          label="Focus State"
          description="Visual indicator of focus"
          focus
        />
      </D1Group>

      <D1Group label="Icons & Progress">
        <D1Cell
          label="Cell with Start Icon"
          description="Includes standard icon on the left"
          icon="home"
        />
        <D1Cell
          label="Cell with Trailing Icon"
          description="Includes icon on the right"
          iconTrailing="chevron_right"
        />
        <D1Cell
          label="Cell with Icon Top"
          description="Start icon is aligned to the top"
          icon="settings"
          iconTop
        />
        <D1Cell
          label="Loading Cell"
          description="Displays a progress indicator"
          loading
        />
      </D1Group>

      <D1Group label="Interactions & Dividers">
        <D1Cell
          label="Dynamic Hover Cell"
          description="Hover effect is active"
          dynamic
          dynamicHover
        />
        <D1Cell
          label="Without Divider"
          description="Divider is disabled"
          :divider="false"
        />
        <D1Cell
          label="Divider with Always Label"
          description="Divider label is set to always"
          dividerLabel="always"
        />
      </D1Group>

      <D1Group label="Custom Slots">
        <D1Cell>
          <template #label>
            <strong style="color: var(--d1-sys-palette-primary)">Custom HTML Label</strong>
          </template>
          <template #description>
            <span style="font-style: italic">Custom italicized description slot</span>
          </template>
          <template #caption>
            <span style="font-size: 0.8rem; opacity: 0.6">Custom Caption Slot</span>
          </template>
          <template #trailing>
            <D1Chip label="Status" />
          </template>
        </D1Cell>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <D1Cell
          ref="cellRef"
          label="Interactive Cell"
          description="Click this cell to trigger events and expose methods"
          dynamic
          dynamicHover
          value="my-cell-value"
          :detail="{ section: 'demo' }"
          @click="onEvent('click')"
        />
        <DemoValue :value="statusValue"/>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>
