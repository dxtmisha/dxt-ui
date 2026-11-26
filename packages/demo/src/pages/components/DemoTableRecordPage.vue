<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'
import type { TableItemProps } from '@dxtmisha/d1/D1TableItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const baseColumns = ['id', 'name', 'role', 'salary'] as const

const basicItem = {
  id: 0,
  name: {
    label: 'Alice Morgan',
    description: 'Senior Engineer'
  },
  role: 'Engineering',
  salary: {
    label: '$9,400',
    align: 'right' as const
  }
}

const fallbackKeyItem = {
  value: 'record-from-value',
  id: 2,
  name: 'Daniel Brooks',
  role: 'Product Design',
  salary: '$8,100'
}

const activeSortColumn = ref<string | undefined>('name')
const activeSortDir = ref<SortDir | undefined>('asc')
const sortPayload = ref<string>('No sort event yet')

const headerItem = computed(() => ({
  id: {
    label: 'ID',
    align: 'right' as const,
    tooltipLabel: 'Record ID',
    tooltipDescription: 'Unique row identifier.'
  },
  name: {
    label: 'Name',
    showSort: true,
    sortColumn: activeSortColumn.value,
    sortDir: activeSortDir.value
  },
  role: {
    label: 'Role',
    showSort: true,
    sortColumn: activeSortColumn.value,
    sortDir: activeSortDir.value
  },
  salary: {
    label: 'Salary',
    align: 'right' as const,
    showSort: true,
    sortColumn: activeSortColumn.value,
    sortDir: activeSortDir.value
  }
}))

const footItem = {
  id: 'Total',
  name: '2 Members',
  role: 'All Teams',
  salary: '$17,500'
}

const perCellHeaderRow = {
  id: {
    label: 'Q1',
    isHeader: true
  },
  name: 'Core Platform',
  role: 'Active',
  salary: '$42,000'
}

const mergedSpanRow = {
  id: {
    label: 'Summary',
    isHeader: true
  },
  name: {
    label: 'Merged Across Name & Role',
    colspan: 2,
    align: 'center' as const
  },
  role: '*none',
  salary: '$84,000'
}

const isSelectedRow = ref<boolean>(true)
const isDisabledRow = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMountedDemo = ref<boolean>(true)

const stickyColumns = ['id', 'name', 'department', 'location', 'email', 'salary'] as const
const stickyHeaderItem = {
  id: 'ID',
  name: 'Name',
  department: 'Department',
  location: 'Location',
  email: 'Email',
  salary: 'Salary'
}
const stickyRows = [
  { id: '1', name: 'Clara Hayes', department: 'Design', location: 'London', email: 'clara@example.com', salary: '$7,800' },
  { id: '2', name: 'Marcus Lin', department: 'Engineering', location: 'Singapore', email: 'marcus@example.com', salary: '$10,200' },
  { id: '3', name: 'Sofia Patel', department: 'Operations', location: 'Toronto', email: 'sofia@example.com', salary: '$8,600' }
]

const globalCellAttrs: TableItemProps = {
  dividerX: false,
  alignVertical: 'top'
}

const columnCellAttrs: Record<string, TableItemProps> = {
  id: { align: 'right' },
  salary: { align: 'right' }
}

const boundaryRow = {
  id: 0,
  name: 'Привет · Học tiếng Việt · 🚀',
  role: '<img src=x onerror=alert(1)>',
  salary: ''
}

const onSortChange = (item: SortColumnItem): void => {
  activeSortColumn.value = item.column
  activeSortDir.value = item.dir
  onEvent('sort', item)
  sortPayload.value = JSON.stringify(item)
}

const sortBySalaryDesc = (): void => {
  activeSortColumn.value = 'salary'
  activeSortDir.value = 'desc'
}

const resetSort = (): void => {
  activeSortColumn.value = undefined
  activeSortDir.value = undefined
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableRecord">
    <D1Section>
      <D1Group label="Basic Data Row & Cell Value Formats">
        <table class="demo-table-record-page__table" aria-label="Basic table record rows">
          <tbody>
            <D1TableRecord
              index="explicit-row-1"
              :columns="baseColumns"
              :item="basicItem"
            />
            <D1TableRecord
              :columns="baseColumns"
              :item="fallbackKeyItem"
            />
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Header Row (isHeader) & @sort Event">
        <DemoFlex align="center">
          <D1Button label="Sort Salary Desc" @click="sortBySalaryDesc"/>
          <D1Button label="Reset Sort" @click="resetSort"/>
        </DemoFlex>
        <table class="demo-table-record-page__table" aria-label="Header table record">
          <thead>
            <D1TableRecord
              index="header-row"
              is-header
              :columns="baseColumns"
              :item="headerItem"
              @sort="onSortChange"
            />
          </thead>
          <tbody>
            <D1TableRecord
              index="body-row"
              :columns="baseColumns"
              :item="basicItem"
            />
          </tbody>
        </table>
        <DemoFlex>
          <DemoValue label="Last Event" :value="eventName"/>
          <DemoValue label="Sort Column" :value="activeSortColumn ?? 'none'"/>
          <DemoValue label="Sort Direction" :value="activeSortDir ?? 'none'"/>
          <DemoValue label="Payload" :value="sortPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Footer Row (isFoot) & Footer Slots (#foot-<col>, #foot-default)">
        <table class="demo-table-record-page__table" aria-label="Footer table record">
          <tbody>
            <D1TableRecord
              index="data-1"
              :columns="baseColumns"
              :item="basicItem"
            />
          </tbody>
          <tfoot>
            <D1TableRecord
              index="foot-row"
              is-foot
              :columns="baseColumns"
              :item="footItem"
              :table-item-column-attrs="columnCellAttrs"
            >
              <template #foot-salary="{ value, slotsName }">
                <D1Chip :label="`${value} (${slotsName})`" readonly size="xs"/>
              </template>
              <template #foot-default="{ value, index }">
                <span>{{ value }} [{{ index }}]</span>
              </template>
            </D1TableRecord>
          </tfoot>
        </table>
      </D1Group>

      <D1Group label="Per-Cell Header (isHeader) & Spanning (*none)">
        <table class="demo-table-record-page__table" aria-label="Per-cell header and spanning rows">
          <tbody>
            <D1TableRecord
              index="per-cell-header"
              :columns="baseColumns"
              :item="perCellHeaderRow"
            />
            <D1TableRecord
              index="merged-span"
              :columns="baseColumns"
              :item="mergedSpanRow"
            />
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Interactive States (selected, disabled)">
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" @click="isSelectedRow = !isSelectedRow"/>
          <D1Button label="Toggle Disabled" @click="isDisabledRow = !isDisabledRow"/>
        </DemoFlex>
        <table class="demo-table-record-page__table" aria-label="Stateful table records">
          <tbody>
            <D1TableRecord
              index="state-controlled"
              :columns="baseColumns"
              :item="basicItem"
              :selected="isSelectedRow"
              :disabled="isDisabledRow"
            />
            <D1TableRecord
              index="state-disabled"
              :columns="baseColumns"
              :item="fallbackKeyItem"
              disabled
            />
          </tbody>
        </table>
        <DemoFlex>
          <DemoValue label="Selected" :value="isSelectedRow"/>
          <DemoValue label="Disabled" :value="isDisabledRow"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sticky Positioning (stickyTop & stickyLeft)">
        <div class="demo-table-record-page__scroll">
          <table class="demo-table-record-page__wide-table" aria-label="Sticky table records">
            <thead>
              <D1TableRecord
                index="sticky-header"
                is-header
                sticky-top
                :sticky-left="['id', 'name']"
                :columns="stickyColumns"
                :item="stickyHeaderItem"
              />
            </thead>
            <tbody>
              <D1TableRecord
                v-for="record in stickyRows"
                :key="record.id"
                :index="record.id"
                :sticky-left="['id', 'name']"
                :columns="stickyColumns"
                :item="record"
              />
            </tbody>
          </table>
        </div>
      </D1Group>

      <D1Group label="Cell Attributes (tableItemAttrs & tableItemColumnAttrs)">
        <table class="demo-table-record-page__table" aria-label="Custom cell attribute records">
          <tbody>
            <D1TableRecord
              index="attrs-row"
              :columns="baseColumns"
              :item="basicItem"
              :table-item-attrs="globalCellAttrs"
              :table-item-column-attrs="columnCellAttrs"
            />
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Slots (#<col>, #default, #header-<col>, #header-default)">
        <table class="demo-table-record-page__table" aria-label="Slotted table records">
          <thead>
            <D1TableRecord
              index="slot-header"
              is-header
              :columns="baseColumns"
              :item="headerItem"
            >
              <template #header-name="{ value }">
                <span>Header Slot: {{ typeof value === 'object' ? value.label : value }}</span>
              </template>
              <template #header-default="{ index }">
                <span>Col: {{ index }}</span>
              </template>
            </D1TableRecord>
          </thead>
          <tbody>
            <D1TableRecord
              index="slot-body"
              :columns="baseColumns"
              :item="fallbackKeyItem"
            >
              <template #role="{ value }">
                <D1Chip :label="String(value)" readonly size="xs"/>
              </template>
              <template #default="{ value, index, classes }">
                <span :class="classes.label">{{ value }} ({{ index }})</span>
              </template>
            </D1TableRecord>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <table class="demo-table-record-page__table" aria-label="Skeleton table record">
            <tbody>
              <D1TableRecord
                index="skeleton-row"
                is-skeleton
                :columns="baseColumns"
                :item="basicItem"
              />
            </tbody>
          </table>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-record-page__narrow">
          <table v-if="isMountedDemo" class="demo-table-record-page__table" aria-label="Boundary table records">
            <tbody>
              <D1TableRecord
                index="boundary-row"
                :columns="baseColumns"
                :item="boundaryRow"
              />
              <D1TableRecord
                index="empty-row"
                :columns="baseColumns"
                :item="{}"
              />
            </tbody>
          </table>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-record-page {
  .d1-group {
    overflow-x: auto;
  }

  &__table {
    width: 100%;
    border-spacing: 0;
  }

  &__scroll {
    max-width: 100%;
    max-height: 150px;
    overflow: auto;
  }

  &__wide-table {
    min-width: 760px;
    border-spacing: 0;
  }

  &__narrow {
    max-width: 280px;
    overflow-x: auto;
  }
}
</style>
