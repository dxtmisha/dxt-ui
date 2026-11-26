<script setup lang="ts">
import { ref } from 'vue'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isSelected = ref<boolean>(false)
const isDisabled = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const stickyRows = [
  { id: '1', name: 'Alice Johnson', role: 'Engineering Lead', location: 'San Francisco', status: 'Active', team: 'Platform' },
  { id: '2', name: 'Marcus Chen', role: 'Product Designer', location: 'Singapore', status: 'Active', team: 'Design System' },
  { id: '3', name: 'Elena Petrova', role: 'QA Architect', location: 'Berlin', status: 'Review', team: 'Quality' },
  { id: '4', name: 'David Kim', role: 'Staff Engineer', location: 'Seoul', status: 'Active', team: 'Core UI' },
  { id: '5', name: 'Sofia Rossi', role: 'Frontend Developer', location: 'Milan', status: 'Paused', team: 'Web Experience' }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableFlexItem">
    <D1Section>
      <D1Group label="Basic Usage, Labels, Descriptions & Metadata">
        <div role="table" aria-label="Basic flex table items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="Standard Cell" index="name"/>
            <D1TableFlexItem
              label="With Description"
              description="Secondary metadata line"
              label-id="demo-item-label-1"
              description-id="demo-item-description-1"
              index="details"
            />
            <D1TableFlexItem
              :label="42"
              description="Numeric label"
              index="count"
            />
            <D1TableFlexItem
              label="Custom Tag & Key"
              tag="span"
              value="meta-value"
              key-item="row-1-meta"
              index="meta"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="Horizontal Alignment (align)">
        <div role="table" aria-label="Horizontal alignment flex items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="Left Aligned" description="Default left alignment" align="left" index="left"/>
            <D1TableFlexItem label="Center Aligned" description="Centered text content" align="center" index="center"/>
            <D1TableFlexItem label="Right Aligned" description="Numeric or currency style" align="right" index="right"/>
          </div>
        </div>
      </D1Group>

      <D1Group label="Vertical Alignment (alignVertical)">
        <div role="table" aria-label="Vertical alignment flex items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row demo-table-flex-item-page__row--tall">
            <D1TableFlexItem label="Top" align-vertical="top" index="top"/>
            <D1TableFlexItem label="Center" align-vertical="center" index="center"/>
            <D1TableFlexItem label="Bottom" align-vertical="bottom" index="bottom"/>
            <D1TableFlexItem
              label="Reference Multiline Cell"
              description="Tall sibling cell used to verify vertical alignment across flex cells in the same row."
              index="reference"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="Colspan & Rowspan (data-colspan, data-rowspan)">
        <div role="table" aria-label="Colspan and rowspan flex items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="Column 1 (1fr)" index="c1"/>
            <D1TableFlexItem label="Column 2 (1fr)" index="c2"/>
            <D1TableFlexItem label="Column 3 (1fr)" index="c3"/>
            <D1TableFlexItem label="Column 4 (1fr)" index="c4"/>
          </div>
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="Colspan 2 (2fr)" :colspan="2" index="span2"/>
            <D1TableFlexItem label="Column 3 (1fr)" index="c3"/>
            <D1TableFlexItem label="Column 4 (1fr)" index="c4"/>
          </div>
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="Colspan 3 (3fr)" :colspan="3" index="span3"/>
            <D1TableFlexItem label="Rowspan 2 Attr" :rowspan="2" index="rowspan2"/>
          </div>
        </div>
      </D1Group>

      <D1Group label="Dividers (dividerX, dividerY)">
        <div role="table" aria-label="Divider variations" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="Both Dividers (default)" :divider-x="true" :divider-y="true" index="d1"/>
            <D1TableFlexItem label="Both Dividers (default)" :divider-x="true" :divider-y="true" index="d2"/>
          </div>
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="No Vertical Divider (dividerX=false)" :divider-x="false" :divider-y="true" index="d3"/>
            <D1TableFlexItem label="No Vertical Divider (dividerX=false)" :divider-x="false" :divider-y="true" index="d4"/>
          </div>
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="No Horizontal Divider (dividerY=false)" :divider-x="true" :divider-y="false" index="d5"/>
            <D1TableFlexItem label="No Horizontal Divider (dividerY=false)" :divider-x="true" :divider-y="false" index="d6"/>
          </div>
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem label="No Dividers" :divider-x="false" :divider-y="false" index="d7"/>
            <D1TableFlexItem label="No Dividers" :divider-x="false" :divider-y="false" index="d8"/>
          </div>
        </div>
      </D1Group>

      <D1Group label="Label Clamping (labelClamp)">
        <div role="table" aria-label="Label clamp flex items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem
              label="Unclamped long text content that wraps freely across as many lines as required to show the full sentence inside the flex cell."
              index="unclamped"
            />
            <D1TableFlexItem
              label="Clamped long text content with labelClamp enabled so overflow beyond two lines is truncated cleanly with an ellipsis inside the flex cell."
              label-clamp
              index="clamped"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="States (selected, disabled)">
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" @click="isSelected = !isSelected"/>
          <D1Button label="Toggle Disabled" @click="isDisabled = !isDisabled"/>
        </DemoFlex>
        <div role="table" aria-label="Stateful flex table items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem
              label="Interactive Cell"
              description="Controlled via buttons above"
              :selected="isSelected"
              :disabled="isDisabled"
              index="interactive"
            />
            <D1TableFlexItem label="Selected Static" selected index="selected"/>
            <D1TableFlexItem label="Disabled Static" disabled index="disabled"/>
            <D1TableFlexItem label="Selected + Disabled" selected disabled index="both"/>
          </div>
        </div>
        <DemoFlex>
          <DemoValue label="Selected" :value="isSelected"/>
          <DemoValue label="Disabled" :value="isDisabled"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sticky Positioning (stickyTop, stickyLeft)">
        <div class="demo-table-flex-item-page__scroll">
          <div role="table" aria-label="Sticky flex table items" class="demo-table-flex-item-page__table demo-table-flex-item-page__table--wide">
            <div role="row" class="demo-table-flex-item-page__row">
              <D1TableFlexItem label="ID (Top + Left)" sticky-top sticky-left index="id"/>
              <D1TableFlexItem label="Name (Top)" sticky-top index="name"/>
              <D1TableFlexItem label="Role (Top)" sticky-top index="role"/>
              <D1TableFlexItem label="Location (Top)" sticky-top index="location"/>
              <D1TableFlexItem label="Status (Top)" sticky-top index="status"/>
              <D1TableFlexItem label="Team (Top)" sticky-top index="team"/>
            </div>
            <div
              v-for="row in stickyRows"
              :key="row.id"
              role="row"
              class="demo-table-flex-item-page__row"
            >
              <D1TableFlexItem :label="row.id" sticky-left index="id"/>
              <D1TableFlexItem :label="row.name" index="name"/>
              <D1TableFlexItem :label="row.role" index="role"/>
              <D1TableFlexItem :label="row.location" index="location"/>
              <D1TableFlexItem :label="row.status" index="status"/>
              <D1TableFlexItem :label="row.team" index="team"/>
            </div>
          </div>
        </div>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <div role="table" aria-label="Skeleton flex table items" class="demo-table-flex-item-page__table">
            <div role="row" class="demo-table-flex-item-page__row">
              <D1TableFlexItem is-skeleton label="Alice Johnson" description="Engineering Lead" index="name"/>
              <D1TableFlexItem is-skeleton label="San Francisco" align="center" index="city"/>
              <D1TableFlexItem is-skeleton label="$14,500" align="right" index="salary"/>
            </div>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Slots (#default, #description, #context)">
        <div role="table" aria-label="Slotted flex table items" class="demo-table-flex-item-page__table">
          <div role="row" class="demo-table-flex-item-page__row">
            <D1TableFlexItem index="default-slot">
              <template #default>
                <strong>Custom Default Label</strong>
              </template>
            </D1TableFlexItem>
            <D1TableFlexItem label="With Description Slot" index="description-slot">
              <template #description>
                <span>Rendered via #description slot</span>
              </template>
            </D1TableFlexItem>
            <D1TableFlexItem label="With Context Slot" index="context-slot">
              <template #context>
                <D1Chip label="Verified" size="xs" readonly/>
              </template>
            </D1TableFlexItem>
          </div>
        </div>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMounted = !isMounted"/>
          <DemoValue label="Mounted" :value="isMounted"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-flex-item-page__narrow">
          <div v-if="isMounted" role="table" aria-label="Boundary flex table items" class="demo-table-flex-item-page__table">
            <div role="row" class="demo-table-flex-item-page__row">
              <D1TableFlexItem :label="0" description="Zero value" index="zero"/>
              <D1TableFlexItem label="" description="Empty label" index="empty"/>
            </div>
            <div role="row" class="demo-table-flex-item-page__row">
              <D1TableFlexItem label="   " description="Whitespace label" index="whitespace"/>
              <D1TableFlexItem
                label="SupercalifragilisticexpialidociousWithoutSpacesForOverflowTesting"
                label-clamp
                index="unbroken"
              />
            </div>
            <div role="row" class="demo-table-flex-item-page__row">
              <D1TableFlexItem label="Привет · Học tiếng Việt · 🚀" index="unicode"/>
              <D1TableFlexItem label="<img src=x onerror=alert(1)>" index="xss"/>
            </div>
          </div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-flex-item-page {
  &__table {
    display: flex;
    flex-direction: column;
    width: 100%;

    &--wide {
      min-width: 780px;
    }
  }

  &__row {
    display: flex;
    width: 100%;

    &--tall {
      min-height: 96px;
    }
  }

  &__scroll {
    max-width: 100%;
    max-height: 200px;
    overflow: auto;
  }

  &__narrow {
    max-width: 300px;
  }
}
</style>
