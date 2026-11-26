<script setup lang="ts">
import { ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'

import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const activeSortColumn = ref<string | undefined>('name')
const activeSortDir = ref<SortDir | undefined>('asc')
const lastSortPayload = ref<string>('No sort event yet')

const isSelected = ref<boolean>(false)
const isDisabled = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const onHeaderSort = (item: SortColumnItem): void => {
  activeSortColumn.value = item.column ? String(item.column) : undefined
  activeSortDir.value = item.dir
  onEvent('sort', item)
  lastSortPayload.value = JSON.stringify(item)
}

const applySortPreset = (column?: string, direction?: SortDir): void => {
  activeSortColumn.value = column
  activeSortDir.value = direction
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableFlexHeaderItem">
    <D1Section>
      <D1Group label="Basic Column Headers & Scope (role='columnheader')">
        <div role="table" aria-label="Basic flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem label="Column Default" scope="col" index="col"/>
            <D1TableFlexHeaderItem
              label="With Description"
              description="Header subtitle"
              label-id="demo-header-label-1"
              description-id="demo-header-description-1"
              scope="colgroup"
              index="colgroup"
            />
            <D1TableFlexHeaderItem label="Row Scope" scope="row" index="row"/>
            <D1TableFlexHeaderItem label="Rowgroup Scope" scope="rowgroup" tag="span" index="rowgroup"/>
          </div>
        </div>
      </D1Group>

      <D1Group label="Sorting (showSort, sortColumn, sortDir, @sort & Custom Icons)">
        <DemoFlex align="center">
          <D1Button label="Sort Name ASC" @click="applySortPreset('name', 'asc')"/>
          <D1Button label="Sort Age DESC" @click="applySortPreset('age', 'desc')"/>
          <D1Button label="Reset Sort" @click="applySortPreset(undefined, undefined)"/>
        </DemoFlex>
        <div role="table" aria-label="Sortable flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem
              label="Name"
              index="name"
              show-sort
              :sort-column="activeSortColumn"
              :sort-dir="activeSortDir"
              @sort="onHeaderSort"
            />
            <D1TableFlexHeaderItem
              label="Age"
              align="right"
              index="age"
              show-sort
              :sort-column="activeSortColumn"
              :sort-dir="activeSortDir"
              @sort="onHeaderSort"
            />
            <D1TableFlexHeaderItem
              label="Salary (Custom Icons)"
              align="right"
              index="salary"
              show-sort
              :sort-column="activeSortColumn"
              :sort-dir="activeSortDir"
              icon-sort="unfold_more"
              icon-arrow-up="keyboard_arrow_up"
              icon-arrow-down="keyboard_arrow_down"
              :chip-attrs="{ 'aria-label': 'Sort by salary' }"
              @sort="onHeaderSort"
            />
            <D1TableFlexHeaderItem
              label="Notes (Not Sortable)"
              index="notes"
            />
          </div>
        </div>
        <DemoFlex>
          <DemoValue label="Last Event" :value="eventName || 'none'"/>
          <DemoValue label="Active Column" :value="activeSortColumn ?? 'none'"/>
          <DemoValue label="Active Dir" :value="activeSortDir ?? 'none'"/>
          <DemoValue label="Last Sort Payload" :value="lastSortPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Tooltips (tooltipLabel, tooltipDescription, iconTooltip, tooltipAttrs, #tooltip)">
        <div role="table" aria-label="Tooltip flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem
              label="Revenue"
              tooltip-label="Gross Revenue"
              tooltip-description="Total recognized revenue before deductions."
              index="revenue"
            />
            <D1TableFlexHeaderItem
              label="Conversion"
              icon-tooltip="info"
              tooltip-label="Conversion Rate"
              tooltip-description="Percentage of visits completing checkout."
              :tooltip-attrs="{ width: 220 }"
              show-sort
              index="conversion"
              @sort="onHeaderSort"
            />
            <D1TableFlexHeaderItem
              label="Custom Tooltip Slot"
              index="custom-tooltip"
            >
              <template #tooltip>
                <span>Rendered via #tooltip scoped slot</span>
              </template>
            </D1TableFlexHeaderItem>
          </div>
        </div>
      </D1Group>

      <D1Group label="Alignment, Dividers & Label Clamp">
        <div role="table" aria-label="Aligned flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem label="Left" align="left" index="left"/>
            <D1TableFlexHeaderItem label="Center" align="center" index="center"/>
            <D1TableFlexHeaderItem label="Right" align="right" index="right"/>
          </div>
          <div role="row" class="demo-table-flex-header-item-page__row demo-table-flex-header-item-page__row--tall">
            <D1TableFlexHeaderItem label="Vertical Top" align-vertical="top" index="vtop"/>
            <D1TableFlexHeaderItem label="Vertical Center" align-vertical="center" index="vcenter"/>
            <D1TableFlexHeaderItem label="Vertical Bottom" align-vertical="bottom" index="vbottom"/>
          </div>
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem
              label="No Dividers"
              :divider-x="false"
              :divider-y="false"
              index="nodivider"
            />
            <D1TableFlexHeaderItem
              label="Very long column header label demonstrating two-line clamping when labelClamp is enabled on the header item."
              label-clamp
              index="clamped"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="Colspan & Rowspan (data-colspan, data-rowspan)">
        <div role="table" aria-label="Colspan flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem label="Identity Group (Colspan 2)" align="center" :colspan="2" index="group-identity"/>
            <D1TableFlexHeaderItem label="Metrics Group (Colspan 2)" align="center" :colspan="2" index="group-metrics"/>
          </div>
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem label="ID" :rowspan="2" index="id"/>
            <D1TableFlexHeaderItem label="Name" index="name"/>
            <D1TableFlexHeaderItem label="Score" align="right" index="score"/>
            <D1TableFlexHeaderItem label="Rank" align="right" index="rank"/>
          </div>
        </div>
      </D1Group>

      <D1Group label="States (selected, disabled) & Sticky (stickyTop, stickyLeft)">
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" @click="isSelected = !isSelected"/>
          <D1Button label="Toggle Disabled" @click="isDisabled = !isDisabled"/>
        </DemoFlex>
        <div role="table" aria-label="Stateful flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem
              label="Interactive Header"
              show-sort
              :selected="isSelected"
              :disabled="isDisabled"
              index="interactive"
              @sort="onHeaderSort"
            />
            <D1TableFlexHeaderItem label="Selected Static" selected index="selected"/>
            <D1TableFlexHeaderItem label="Disabled Static" disabled index="disabled"/>
          </div>
        </div>
        <DemoFlex>
          <DemoValue label="Selected" :value="isSelected"/>
          <DemoValue label="Disabled" :value="isDisabled"/>
        </DemoFlex>

        <div class="demo-table-flex-header-item-page__scroll">
          <div role="table" aria-label="Sticky flex header items" class="demo-table-flex-header-item-page__table demo-table-flex-header-item-page__table--wide">
            <div role="row" class="demo-table-flex-header-item-page__row">
              <D1TableFlexHeaderItem label="Sticky Corner" sticky-top sticky-left index="corner"/>
              <D1TableFlexHeaderItem label="Header 2" sticky-top index="h2"/>
              <D1TableFlexHeaderItem label="Header 3" sticky-top index="h3"/>
              <D1TableFlexHeaderItem label="Header 4" sticky-top index="h4"/>
              <D1TableFlexHeaderItem label="Header 5" sticky-top index="h5"/>
            </div>
            <div role="row" class="demo-table-flex-header-item-page__row">
              <D1TableFlexItem label="Row 1" sticky-left index="corner"/>
              <D1TableFlexItem label="Cell 2" index="h2"/>
              <D1TableFlexItem label="Cell 3" index="h3"/>
              <D1TableFlexItem label="Cell 4" index="h4"/>
              <D1TableFlexItem label="Cell 5" index="h5"/>
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
          <div role="table" aria-label="Skeleton flex header items" class="demo-table-flex-header-item-page__table">
            <div role="row" class="demo-table-flex-header-item-page__row">
              <D1TableFlexHeaderItem is-skeleton label="Member Name" description="Full name" show-sort index="name"/>
              <D1TableFlexHeaderItem is-skeleton label="Department" tooltip-label="Department" index="department"/>
              <D1TableFlexHeaderItem is-skeleton label="Compensation" align="right" show-sort index="salary"/>
            </div>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Slots (#default, #description, #context, #tooltip)">
        <div role="table" aria-label="Slotted flex header items" class="demo-table-flex-header-item-page__table">
          <div role="row" class="demo-table-flex-header-item-page__row">
            <D1TableFlexHeaderItem index="slot-default">
              <template #default>
                <strong>Custom Header Label</strong>
              </template>
            </D1TableFlexHeaderItem>
            <D1TableFlexHeaderItem label="Description Slot" index="slot-description">
              <template #description>
                <span>Subheading from #description</span>
              </template>
            </D1TableFlexHeaderItem>
            <D1TableFlexHeaderItem label="Context & Tooltip" index="slot-context">
              <template #tooltip>
                <span>Tooltip body slot content</span>
              </template>
              <template #context>
                <D1Chip label="Beta" size="xs" readonly/>
              </template>
            </D1TableFlexHeaderItem>
          </div>
        </div>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMounted = !isMounted"/>
          <DemoValue label="Mounted" :value="isMounted"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-flex-header-item-page__narrow">
          <div v-if="isMounted" role="table" aria-label="Boundary flex header items" class="demo-table-flex-header-item-page__table">
            <div role="row" class="demo-table-flex-header-item-page__row">
              <D1TableFlexHeaderItem :label="0" show-sort index="zero" @sort="onHeaderSort"/>
              <D1TableFlexHeaderItem label="" description="Empty header" index="empty"/>
            </div>
            <div role="row" class="demo-table-flex-header-item-page__row">
              <D1TableFlexHeaderItem label="Привет · Học tiếng Việt · 🚀" index="unicode"/>
              <D1TableFlexHeaderItem label="<img src=x onerror=alert(1)>" index="xss"/>
            </div>
          </div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-flex-header-item-page {
  &__table {
    display: flex;
    flex-direction: column;
    width: 100%;

    &--wide {
      min-width: 720px;
    }
  }

  &__row {
    display: flex;
    width: 100%;

    &--tall {
      min-height: 88px;
    }
  }

  &__scroll {
    max-width: 100%;
    max-height: 160px;
    overflow: auto;
  }

  &__narrow {
    max-width: 300px;
  }
}
</style>
