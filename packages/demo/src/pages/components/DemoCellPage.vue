<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CellExpose } from '@dxtmisha/constructor/Cell'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const cellReference = ref<CellExpose | null>(null)

const statusValue = computed<string>(() => {
  if (cellReference.value) {
    const value = cellReference.value.getValue?.()
    const detail = cellReference.value.getDetail?.()
    return `getValue(): ${JSON.stringify(value)}, getDetail(): ${JSON.stringify(detail)}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Cell">
    <D1Section>
      <D1Group label="Basic & Data Formats">
        <D1Cell
          label="Default Cell"
          description="Standard cell description goes here"
          caption="Cell Caption"
        />
        <D1Cell
          label="Only Label"
        />
        <D1Cell
          label="Label with Caption"
          caption="Top caption information"
        />
        <D1Cell
          label="Label with Description"
          description="Detailed multi-line description of the item"
        />
        <D1Cell
          :label="2048"
          :caption="42"
          :description="100000"
        />
      </D1Group>

      <D1Group label="Tags & Links">
        <D1Cell
          label="Cell with Section Tag"
          description="Rendered as a semantic section tag"
          tag="section"
        />
        <D1Cell
          label="Cell with Button Tag"
          description="Rendered as a native button element"
          tag="button"
          type="button"
        />
        <D1Cell
          label="Cell as Anchor Link"
          description="Rendered as an anchor element with href target"
          href="#demo-link"
        />
        <D1Cell
          label="Cell with Router Navigation"
          description="Navigates via Vue Router target"
          to="/component-cell"
        />
      </D1Group>

      <D1Group label="States">
        <D1Cell
          label="Focus State"
          description="Visual indicator of active focus"
          focus
        />
        <D1Cell
          label="Selected State"
          description="Visual indicator of selected item"
          selected
        />
        <D1Cell
          label="Readonly State"
          description="Readonly state with disabled actions"
          readonly
        />
        <D1Cell
          label="Disabled State"
          description="Interaction is completely disabled"
          disabled
        />
        <D1Cell
          label="Disabled and Selected"
          description="Disabled interaction with selected appearance"
          disabled
          selected
        />
      </D1Group>

      <D1Group label="Dynamic & Interactive">
        <D1Cell
          label="Dynamic Only"
          description="Keyboard accessible with tabindex and button role"
          dynamic
        />
        <D1Cell
          label="Dynamic with Hover"
          description="Hover effects and active gradient styling enabled"
          dynamic
          dynamicHover
        />
      </D1Group>

      <D1Group label="Loading & Skeleton">
        <D1Cell
          label="Loading State"
          description="Displays an active bottom progress bar"
          loading
        />
        <D1Cell
          label="Custom Progress Value"
          description="Configured with explicit progress percentage"
          :progress="{ value: 65 }"
        />
        <D1Cell
          label="Skeleton Mode via isSkeleton"
          description="Placeholder skeleton line layout"
          isSkeleton
        />
        <D1Cell
          label="Skeleton Mode via skeleton Object"
          description="Configured with active skeleton props"
          :skeleton="{ active: true }"
        />
        <D1Cell
          label="Loading and Disabled"
          description="Asynchronous operation in disabled state"
          loading
          disabled
        />
      </D1Group>

      <D1Group label="Icons & Alignment">
        <D1Cell
          label="Start Icon String"
          description="Leading icon specified as a material symbol name"
          icon="home"
        />
        <D1Cell
          label="Start Icon Object"
          description="Leading icon specified with IconProps object"
          :icon="{ icon: 'person', size: 'sm' }"
        />
        <D1Cell
          label="Trailing Icon String"
          description="Trailing icon specified as a material symbol name"
          iconTrailing="chevron_right"
        />
        <D1Cell
          label="Trailing Icon Object"
          description="Trailing icon specified with IconProps object"
          :iconTrailing="{ icon: 'arrow_forward' }"
        />
        <D1Cell
          label="Leading and Trailing Icons"
          description="Both start and trailing accessories displayed simultaneously"
          icon="folder"
          iconTrailing="open_in_new"
        />
        <D1Cell
          label="Top Aligned Icon"
          description="Start icon aligned to the top row rather than vertically centered when description is tall"
          icon="info"
          iconTop
        />
      </D1Group>

      <D1Group label="Dividers & Divider Labels">
        <D1Cell
          label="Default Divider"
          description="Bottom border divider active by default"
          divider
        />
        <D1Cell
          label="Disabled Divider"
          description="Bottom border divider turned off"
          :divider="false"
        />
        <D1Cell
          label="Divider Label Always"
          description="Divider positioned directly below the label context container"
          dividerLabel="always"
        />
        <D1Cell
          label="Divider Label None"
          description="Context divider explicitly turned off"
          dividerLabel="none"
        />
        <D1Cell
          label="Divider Label Adaptive SM"
          description="Adaptive divider under context below small breakpoint"
          dividerLabel="adaptiveSm"
        />
      </D1Group>

      <D1Group label="Padding & Indent">
        <D1Cell
          label="Padding SM"
          description="Compact horizontal and vertical spacing"
          padding="sm"
        />
        <D1Cell
          label="Padding MD"
          description="Medium standard spacing"
          padding="md"
        />
        <D1Cell
          label="Padding LG"
          description="Generous spacing for spacious layouts"
          padding="lg"
        />
        <D1Cell
          label="Padding Vertical SM"
          description="Vertical padding small without horizontal padding"
          padding="ySm"
        />
        <D1Cell
          label="Padding Vertical MD"
          description="Vertical padding medium without horizontal padding"
          padding="yMd"
        />
        <D1Cell
          label="Padding Vertical LG"
          description="Vertical padding large without horizontal padding"
          padding="yLg"
        />
        <D1Cell
          label="Padding None"
          description="Zero internal padding"
          padding="none"
        />
        <D1Cell
          label="Padding by Indent Disabled"
          description="Layout indent padding turned off"
          :paddingByIndent="false"
        />
      </D1Group>

      <D1Group label="Slots">
        <D1Cell>
          <template #caption>
            <span>Custom Caption Slot</span>
          </template>
          <template #label>
            <strong>Custom Bold Label Slot</strong>
          </template>
          <template #description>
            <span>Custom Description Slot with extended formatted text</span>
          </template>
        </D1Cell>
        <D1Cell
          label="Cell with Trailing Slot"
          description="Accessory component rendered in the trailing slot"
        >
          <template #trailing>
            <D1Chip label="Active" palette="primary" />
          </template>
        </D1Cell>
        <D1Cell
          label="Cell with Body Slot"
          description="Includes an expandable full-width body row"
        >
          <template #body>
            <D1TextDescription>
              Extended body section rendered below the main cell row.
            </D1TextDescription>
          </template>
        </D1Cell>
      </D1Group>

      <D1Group label="ARIA & Roles">
        <D1Cell
          label="Role List Item"
          description="Explicit ARIA role set to listitem"
          role="listitem"
        />
        <D1Cell
          label="Role Menu Item"
          description="Explicit ARIA role set to menuitem"
          role="menuitem"
        />
        <D1Cell
          label="Role Option"
          description="Explicit ARIA role set to option"
          role="option"
        />
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <D1Cell
          ref="cellReference"
          label="Interactive Cell"
          description="Click to trigger click events and test exposed controller methods"
          dynamic
          dynamicHover
          value="my-cell-value"
          :detail="{ category: 'demo', action: 'trigger' }"
          @click="(event, value) => onEvent('click', event, value)"
          @click-lite="(value) => onEvent('clickLite', value)"
        />
        <DemoValue :value="statusValue"/>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
