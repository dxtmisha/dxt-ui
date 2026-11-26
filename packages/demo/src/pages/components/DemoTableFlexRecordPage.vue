<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'
import type { TableFlexItemProps } from '@dxtmisha/d1'

import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const columns = ['id', 'name', 'role', 'status', 'salary']
const columnAttrs: Record<string, TableFlexItemProps> = {
  id: { align: 'right' },
  salary: { align: 'right' }
}

const isLazy = ref<boolean>(true)
const defaultHeight = ref<string | number>(48)
const activeSortColumn = ref<string | undefined>('name')
const activeSortDir = ref<SortDir | undefined>('asc')
const lastSortPayload = ref<string>('No sort event yet')

const isSelected = ref<boolean>(false)
const isDisabled = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const basicRows = [
  { rowKey: '1', id: 1, name: 'Alice Johnson', role: 'Engineering Lead', status: 'Active', salary: '$14,200' },
  {
    rowKey: '2',
    id: 2,
    name: { label: 'Marcus Chen', description: 'Design Systems' },
    role: { label: 'Staff Designer', colspan: 2, align: 'center' },
    status: '*none',
    salary: '$13,500'
  }
]

const sortableHeaderItem = computed(() => ({
  id: { label: 'ID', showSort: true, sortColumn: activeSortColumn.value, sortDir: activeSortDir.value, align: 'right' },
  name: { label: 'Name', showSort: true, sortColumn: activeSortColumn.value, sortDir: activeSortDir.value, tooltipLabel: 'Member Name' },
  role: { label: 'Role', showSort: true, sortColumn: activeSortColumn.value, sortDir: activeSortDir.value },
  status: { label: 'Status' },
  salary: { label: 'Salary', showSort: true, sortColumn: activeSortColumn.value, sortDir: activeSortDir.value, align: 'right' }
}))

const footerItem = {
  id: 'Total',
  name: '12 Members',
  role: '5 Teams',
  status: '10 Active',
  salary: '$156,400'
}

const perCellHeaderRow = {
  id: { label: 'Engineering', isHeader: true },
  name: 'Core UI Platform',
  role: '8 Engineers',
  status: 'Active',
  salary: '$112,000'
}

const lazyRows = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  name: `Member ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Designer',
  status: index % 3 === 0 ? 'Review' : 'Active',
  salary: `$${(5000 + index * 450).toLocaleString('en-US')}`
}))

const stickyRows = lazyRows.slice(0, 6)

const boundaryItem = {
  id: 0,
  name: 'Привет · Học tiếng Việt · 🚀',
  role: '<img src=x onerror=alert(1)>',
  status: '*none',
  salary: ''
}

const onRecordSort = (item: SortColumnItem): void => {
  activeSortColumn.value = item.column ? String(item.column) : undefined
  activeSortDir.value = item.dir
  onEvent('sort', item)
  lastSortPayload.value = JSON.stringify(item)
}

const resetSort = (): void => {
  activeSortColumn.value = undefined
  activeSortDir.value = undefined
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableFlexRecord">
    <D1Section>
      <D1Group label="Basic Rows (role='row', columns, index, tableItemAttrs & tableItemColumnAttrs)">
        <div role="table" aria-label="Basic flex records" class="demo-table-flex-record-page__table">
          <D1TableFlexRecord
            is-header
            index="header-basic"
            :columns="columns"
            :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status', salary: 'Salary' }"
            :table-item-column-attrs="columnAttrs"
          />
          <D1TableFlexRecord
            v-for="row in basicRows"
            :key="row.rowKey"
            :index="row.rowKey"
            :columns="columns"
            :item="row"
            :lazy="false"
            :table-item-attrs="{ labelClamp: true }"
            :table-item-column-attrs="columnAttrs"
          />
        </div>
      </D1Group>

      <D1Group label="Lazy Rendering & Default Height (lazy, defaultHeight: 48 / 80 / '4rem')">
        <DemoFlex align="center">
          <D1Button label="Toggle Lazy" @click="isLazy = !isLazy"/>
          <D1Button label="Height: 48" @click="defaultHeight = 48"/>
          <D1Button label="Height: 80" @click="defaultHeight = 80"/>
          <D1Button label="Height: 4rem" @click="defaultHeight = '4rem'"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="Lazy Enabled" :value="isLazy"/>
          <DemoValue label="Default Height" :value="defaultHeight"/>
        </DemoFlex>
        <div role="table" aria-label="Default height formats" class="demo-table-flex-record-page__table">
          <D1TableFlexRecord
            index="height-48"
            :columns="columns"
            :item="{ id: 48, name: 'Numeric Height 48px', role: 'Lazy', status: 'Active', salary: '$4,800' }"
            :lazy="true"
            :default-height="48"
            :table-item-column-attrs="columnAttrs"
          />
          <D1TableFlexRecord
            index="height-80"
            :columns="columns"
            :item="{ id: 80, name: 'Numeric Height 80px', role: 'Lazy', status: 'Active', salary: '$8,000' }"
            :lazy="true"
            :default-height="80"
            :table-item-column-attrs="columnAttrs"
          />
          <D1TableFlexRecord
            index="height-4rem"
            :columns="columns"
            :item="{ id: 64, name: 'CSS Unit Height 4rem', role: 'Lazy', status: 'Active', salary: '$6,400' }"
            :lazy="true"
            default-height="4rem"
            :table-item-column-attrs="columnAttrs"
          />
        </div>
        <div class="demo-table-flex-record-page__scroll">
          <div role="table" aria-label="Lazy flex records" class="demo-table-flex-record-page__table">
            <D1TableFlexRecord
              v-for="row in lazyRows"
              :key="row.id"
              :index="`lazy-${row.id}`"
              :columns="columns"
              :item="row"
              :lazy="isLazy"
              :default-height="defaultHeight"
              :table-item-column-attrs="columnAttrs"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="Header Row (isHeader) & @sort Event">
        <DemoFlex align="center">
          <D1Button label="Reset Sort" @click="resetSort"/>
        </DemoFlex>
        <div role="table" aria-label="Sortable header flex record" class="demo-table-flex-record-page__table">
          <D1TableFlexRecord
            is-header
            index="header-sortable"
            :columns="columns"
            :item="sortableHeaderItem"
            @sort="onRecordSort"
          />
        </div>
        <DemoFlex>
          <DemoValue label="Last Event" :value="eventName || 'none'"/>
          <DemoValue label="Sort Column" :value="activeSortColumn ?? 'none'"/>
          <DemoValue label="Sort Dir" :value="activeSortDir ?? 'none'"/>
          <DemoValue label="Sort Payload" :value="lastSortPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Footer Row (isFoot) & Footer Slots (#foot-<col>, #foot-default)">
        <div role="table" aria-label="Footer flex record" class="demo-table-flex-record-page__table">
          <D1TableFlexRecord
            is-foot
            index="footer-summary"
            :columns="columns"
            :item="footerItem"
            :table-item-column-attrs="columnAttrs"
          >
            <template #foot-salary="{ value, slotsName }">
              <strong>{{ value }} ({{ slotsName }})</strong>
            </template>
            <template #foot-default="{ value, index }">
              <span>{{ index }}: {{ value }}</span>
            </template>
          </D1TableFlexRecord>
        </div>
      </D1Group>

      <D1Group label="Per-Cell isHeader & Scoped Slots (#header-<col>, #<col>, #default)">
        <div role="table" aria-label="Per-cell header and slots flex record" class="demo-table-flex-record-page__table">
          <D1TableFlexRecord
            index="per-cell-header"
            :columns="columns"
            :item="perCellHeaderRow"
            :lazy="false"
            :table-item-column-attrs="columnAttrs"
          >
            <template #header-id="{ value }">
              <strong>{{ value.label }} (Row Header)</strong>
            </template>
            <template #status="{ value }">
              <D1Chip :label="value" size="xs" readonly/>
            </template>
            <template #default="{ value, classes }">
              <span :class="classes.label">{{ value }}</span>
            </template>
          </D1TableFlexRecord>
        </div>
      </D1Group>

      <D1Group label="States (selected, disabled) & Sticky (stickyTop, stickyLeft)">
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" @click="isSelected = !isSelected"/>
          <D1Button label="Toggle Disabled" @click="isDisabled = !isDisabled"/>
        </DemoFlex>
        <div role="table" aria-label="Stateful flex records" class="demo-table-flex-record-page__table">
          <D1TableFlexRecord
            index="interactive"
            :columns="columns"
            :item="basicRows[0]"
            :lazy="false"
            :selected="isSelected"
            :disabled="isDisabled"
            :table-item-column-attrs="columnAttrs"
          />
          <D1TableFlexRecord
            index="static-selected"
            :columns="columns"
            :item="{ id: 10, name: 'Selected Row', role: 'Lead', status: 'Active', salary: '$11,000' }"
            :lazy="false"
            selected
            :table-item-column-attrs="columnAttrs"
          />
          <D1TableFlexRecord
            index="static-disabled"
            :columns="columns"
            :item="{ id: 11, name: 'Disabled Row', role: 'Archived', status: 'Inactive', salary: '$0' }"
            :lazy="false"
            disabled
            :table-item-column-attrs="columnAttrs"
          />
        </div>
        <DemoFlex>
          <DemoValue label="Selected" :value="isSelected"/>
          <DemoValue label="Disabled" :value="isDisabled"/>
        </DemoFlex>

        <div class="demo-table-flex-record-page__scroll">
          <div role="table" aria-label="Sticky flex records" class="demo-table-flex-record-page__table demo-table-flex-record-page__table--wide">
            <D1TableFlexRecord
              is-header
              sticky-top
              :sticky-left="['id', 'name']"
              index="sticky-header"
              :columns="columns"
              :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status', salary: 'Salary' }"
              :table-item-column-attrs="columnAttrs"
            />
            <D1TableFlexRecord
              v-for="row in stickyRows"
              :key="row.id"
              :index="`sticky-${row.id}`"
              :columns="columns"
              :item="row"
              :lazy="false"
              :sticky-left="['id', 'name']"
              :table-item-column-attrs="columnAttrs"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <div role="table" aria-label="Skeleton flex records" class="demo-table-flex-record-page__table">
            <D1TableFlexRecord
              is-header
              is-skeleton
              index="skeleton-header"
              :columns="columns"
              :item="{ id: 'ID', name: 'Name', role: 'Role', status: 'Status', salary: 'Salary' }"
            />
            <D1TableFlexRecord
              is-skeleton
              index="skeleton-row"
              :columns="columns"
              :item="basicRows[0]"
              :lazy="false"
            />
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMounted = !isMounted"/>
          <DemoValue label="Mounted" :value="isMounted"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-flex-record-page__narrow">
          <div v-if="isMounted" role="table" aria-label="Boundary flex records" class="demo-table-flex-record-page__table">
            <D1TableFlexRecord
              index="boundary"
              :columns="columns"
              :item="boundaryItem"
              :lazy="false"
            />
          </div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-flex-record-page {
  &__table {
    display: flex;
    flex-direction: column;
    width: 100%;

    &--wide {
      min-width: 720px;
    }
  }

  &__scroll {
    max-width: 100%;
    max-height: 220px;
    overflow: auto;
  }

  &__narrow {
    max-width: 300px;
  }
}
</style>
