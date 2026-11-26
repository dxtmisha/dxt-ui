<script setup lang="ts">
import { ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const activeSortColumn = ref<string | undefined>('age')
const activeSortDir = ref<SortDir | undefined>('desc')
const sortPayload = ref<string>('No sort event yet')

const customSortColumn = ref<string | undefined>('score')
const customSortDir = ref<SortDir | undefined>('asc')

const isSelectedHeader = ref<boolean>(true)
const isDisabledHeader = ref<boolean>(false)
const isLabelClamped = ref<boolean>(true)
const isSkeletonActive = ref<boolean>(true)
const isMountedDemo = ref<boolean>(true)

const longHeaderLabel = 'Comprehensive Quarterly Performance Metric Title That Spans Multiple Lines'
const boundaryUnbroken = 'HeaderUnbrokenToken_0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const onSortChange = (item: SortColumnItem): void => {
  activeSortColumn.value = item.column
  activeSortDir.value = item.dir
  onEvent('sort', item)
  sortPayload.value = JSON.stringify(item)
}

const onCustomSortChange = (item: SortColumnItem): void => {
  customSortColumn.value = item.column
  customSortDir.value = item.dir
}

const setSortPreset = (column?: string, direction?: SortDir): void => {
  activeSortColumn.value = column
  activeSortDir.value = direction
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableHeaderItem">
    <D1Section>
      <D1Group label="Basic Usage & Header Scopes (scope)">
        <table class="demo-table-header-item-page__table" aria-label="Header scopes table">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Column Header"
                description="scope='col' (default)"
                scope="col"
                value="col-header"
                index="col"
                key-item="header-col"
                label-id="demo-th-col-label"
                description-id="demo-th-col-desc"
              />
              <D1TableHeaderItem
                label="Column Group"
                description="scope='colgroup'"
                scope="colgroup"
                :colspan="2"
                align="center"
                index="colgroup"
              />
            </tr>
          </thead>
          <tbody>
            <tr>
              <D1TableHeaderItem
                label="Row Header"
                description="scope='row'"
                scope="row"
                index="row"
              />
              <D1TableHeaderItem
                label="Row Group Header"
                description="scope='rowgroup'"
                scope="rowgroup"
                index="rowgroup"
              />
              <D1TableItem label="Supporting Cell" index="support"/>
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Interactive Sorting, aria-sort & @sort Event">
        <DemoFlex align="center">
          <D1Button label="Sort Age Asc" @click="setSortPreset('age', 'asc')"/>
          <D1Button label="Sort Age Desc" @click="setSortPreset('age', 'desc')"/>
          <D1Button label="Sort Name Asc" @click="setSortPreset('name', 'asc')"/>
          <D1Button label="Clear Sort" @click="setSortPreset(undefined, undefined)"/>
        </DemoFlex>
        <table class="demo-table-header-item-page__table" aria-label="Sortable header items">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Name"
                index="name"
                show-sort
                :sort-column="activeSortColumn"
                :sort-dir="activeSortDir"
                @sort="onSortChange"
              />
              <D1TableHeaderItem
                label="Age"
                description="3-click cycle: asc -> desc -> none"
                index="age"
                align="right"
                show-sort
                :sort-column="activeSortColumn"
                :sort-dir="activeSortDir"
                @sort="onSortChange"
              />
              <D1TableHeaderItem
                label="Salary"
                index="salary"
                align="right"
                show-sort
                :sort-column="activeSortColumn"
                :sort-dir="activeSortDir"
                @sort="onSortChange"
              />
              <D1TableHeaderItem
                label="Non-Sortable"
                index="static"
              />
            </tr>
          </thead>
        </table>
        <DemoFlex>
          <DemoValue label="Last Event" :value="eventName"/>
          <DemoValue label="Active Column" :value="activeSortColumn ?? 'none'"/>
          <DemoValue label="Active Direction" :value="activeSortDir ?? 'none'"/>
          <DemoValue label="Payload" :value="sortPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom Sort Icons & Chip Attributes (iconSort, iconArrowUp, iconArrowDown, chipAttrs)">
        <table class="demo-table-header-item-page__table" aria-label="Custom sort icon header items">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Score"
                description="Custom arrows & chipAttrs"
                index="score"
                show-sort
                :sort-column="customSortColumn"
                :sort-dir="customSortDir"
                icon-sort="unfold_more"
                icon-arrow-up="north"
                icon-arrow-down="south"
                :chip-attrs="{ palette: 'indigo', 'data-custom-chip': 'score-sort' }"
                @sort="onCustomSortChange"
              />
              <D1TableHeaderItem
                label="Rank"
                description="Object icon config"
                index="rank"
                show-sort
                :sort-column="customSortColumn"
                :sort-dir="customSortDir"
                :icon-sort="{ icon: 'sort' }"
                :icon-arrow-up="{ icon: 'keyboard_arrow_up' }"
                :icon-arrow-down="{ icon: 'keyboard_arrow_down' }"
                @sort="onCustomSortChange"
              />
            </tr>
          </thead>
        </table>
      </D1Group>

      <D1Group label="Tooltip Integration (tooltipLabel, tooltipDescription, iconTooltip, tooltipAttrs, #tooltip)">
        <table class="demo-table-header-item-page__table" aria-label="Tooltip header items">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Default Tooltip"
                tooltip-label="Column Info"
                tooltip-description="Displays helpful context on hover or click."
                index="tip-default"
              />
              <D1TableHeaderItem
                label="Custom Tooltip Icon"
                tooltip-label="Calculation Formula"
                tooltip-description="Net revenue minus operational expenses."
                icon-tooltip="info"
                :tooltip-attrs="{ maxWidth: 'sm', top: true }"
                index="tip-custom"
              />
              <D1TableHeaderItem
                label="Slotted Tooltip"
                index="tip-slot"
              >
                <template #tooltip>
                  <span>Rich custom content rendered inside the #tooltip slot.</span>
                </template>
              </D1TableHeaderItem>
            </tr>
          </thead>
        </table>
      </D1Group>

      <D1Group label="Horizontal & Vertical Alignment (align, alignVertical)">
        <table class="demo-table-header-item-page__table" aria-label="Header alignment examples">
          <thead>
            <tr class="demo-table-header-item-page__tall-row">
              <D1TableHeaderItem label="Left / Top" align="left" align-vertical="top" show-sort index="al-1"/>
              <D1TableHeaderItem label="Center / Center" align="center" align-vertical="center" show-sort index="al-2"/>
              <D1TableHeaderItem label="Right / Bottom" align="right" align-vertical="bottom" show-sort index="al-3"/>
            </tr>
          </thead>
        </table>
      </D1Group>

      <D1Group label="Dividers & Label Clamp (dividerX, dividerY, labelClamp)">
        <DemoFlex align="center">
          <D1Button label="Toggle Label Clamp" @click="isLabelClamped = !isLabelClamped"/>
          <DemoValue label="Label Clamp" :value="isLabelClamped"/>
        </DemoFlex>
        <table class="demo-table-header-item-page__table" aria-label="Dividers and clamp header items">
          <thead>
            <tr>
              <D1TableHeaderItem label="Default Dividers" description="dividerX=true, dividerY=true"/>
              <D1TableHeaderItem label="No DividerX" :divider-x="false"/>
              <D1TableHeaderItem label="No DividerY" :divider-y="false"/>
              <D1TableHeaderItem :label="longHeaderLabel" :label-clamp="isLabelClamped"/>
            </tr>
          </thead>
        </table>
      </D1Group>

      <D1Group label="Spanning & Custom Tag (colspan, rowspan, tag)">
        <table class="demo-table-header-item-page__table" aria-label="Multi-row header spanning">
          <thead>
            <tr>
              <D1TableHeaderItem label="Identifier" :rowspan="2" index="id"/>
              <D1TableHeaderItem label="Contact Details" :colspan="2" align="center" scope="colgroup" index="contact"/>
              <D1TableHeaderItem label="Custom Tag (td)" tag="td" :rowspan="2" index="custom-tag"/>
            </tr>
            <tr>
              <D1TableHeaderItem label="Email" index="email"/>
              <D1TableHeaderItem label="Phone" index="phone"/>
            </tr>
          </thead>
        </table>
      </D1Group>

      <D1Group label="Interactive States (selected, disabled)">
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" @click="isSelectedHeader = !isSelectedHeader"/>
          <D1Button label="Toggle Disabled" @click="isDisabledHeader = !isDisabledHeader"/>
        </DemoFlex>
        <table class="demo-table-header-item-page__table" aria-label="Header item states">
          <thead>
            <tr>
              <D1TableHeaderItem
                label="Controlled Header"
                description="Interactive selected and disabled states"
                :selected="isSelectedHeader"
                :disabled="isDisabledHeader"
                show-sort
                index="controlled"
              />
              <D1TableHeaderItem label="Selected Header" selected index="selected-static"/>
              <D1TableHeaderItem label="Disabled Header" disabled index="disabled-static"/>
            </tr>
          </thead>
        </table>
        <DemoFlex>
          <DemoValue label="Selected" :value="isSelectedHeader"/>
          <DemoValue label="Disabled" :value="isDisabledHeader"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sticky Positioning (stickyTop & stickyLeft)">
        <div class="demo-table-header-item-page__scroll">
          <table class="demo-table-header-item-page__wide-table" aria-label="Sticky header items">
            <thead>
              <tr>
                <D1TableHeaderItem label="Pinned Header" sticky-top sticky-left index="pin"/>
                <D1TableHeaderItem label="Column 1" sticky-top index="column-1"/>
                <D1TableHeaderItem label="Column 2" sticky-top index="column-2"/>
                <D1TableHeaderItem label="Column 3" sticky-top index="column-3"/>
                <D1TableHeaderItem label="Column 4" sticky-top index="column-4"/>
              </tr>
            </thead>
            <tbody>
              <tr>
                <D1TableItem label="Row 1" sticky-left index="row-1"/>
                <D1TableItem label="Value 1.1"/>
                <D1TableItem label="Value 1.2"/>
                <D1TableItem label="Value 1.3"/>
                <D1TableItem label="Value 1.4"/>
              </tr>
              <tr>
                <D1TableItem label="Row 2" sticky-left index="row-2"/>
                <D1TableItem label="Value 2.1"/>
                <D1TableItem label="Value 2.2"/>
                <D1TableItem label="Value 2.3"/>
                <D1TableItem label="Value 2.4"/>
              </tr>
            </tbody>
          </table>
        </div>
      </D1Group>

      <D1Group label="Slots (#default, #description, #context, #tooltip)">
        <table class="demo-table-header-item-page__table" aria-label="Slotted header items">
          <thead>
            <tr>
              <D1TableHeaderItem index="all-slots">
                <template #default>
                  <span>Slotted Header Label</span>
                </template>
                <template #description>
                  <span>Slotted subtitle</span>
                </template>
                <template #tooltip>
                  <span>Slotted tooltip body text</span>
                </template>
                <template #context>
                  <D1Badge label="Beta" inline/>
                </template>
              </D1TableHeaderItem>
            </tr>
          </thead>
        </table>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <table class="demo-table-header-item-page__table" aria-label="Skeleton header items">
            <thead>
              <tr>
                <D1TableHeaderItem label="Metric Name" description="Unit" is-skeleton/>
                <D1TableHeaderItem label="Total Value" align="right" is-skeleton/>
              </tr>
            </thead>
          </table>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-header-item-page__narrow">
          <table v-if="isMountedDemo" class="demo-table-header-item-page__table" aria-label="Boundary header items">
            <thead>
              <tr>
                <D1TableHeaderItem :label="0" index="zero"/>
                <D1TableHeaderItem label="" description="Empty" index="empty"/>
                <D1TableHeaderItem label="Привет · Học tiếng Việt · 🚀" index="unicode"/>
                <D1TableHeaderItem label="<img src=x onerror=alert(1)>" index="xss"/>
                <D1TableHeaderItem :label="boundaryUnbroken" label-clamp index="unbroken"/>
              </tr>
            </thead>
          </table>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-header-item-page {
  &__table {
    width: 100%;
    border-spacing: 0;
  }

  &__tall-row {
    height: 92px;
  }

  &__scroll {
    max-width: 100%;
    max-height: 140px;
    overflow: auto;
  }

  &__wide-table {
    min-width: 720px;
    border-spacing: 0;
  }

  &__narrow {
    max-width: 280px;
    overflow-x: auto;
  }
}
</style>
