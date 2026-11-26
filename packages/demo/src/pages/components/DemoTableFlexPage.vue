<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SortColumnItem, SortDir } from '@dxtmisha/functional'

import { useDemoEvent } from '../../composables/useDemoEvent'
import { useDemoTableRecords } from '../../composables/useDemoTableRecords'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

import {
  dataTableColumns,
  dataTableHeaderSimple,
  dataTableItemColumnAttrs
} from '../../media/data/dataTable'

const { eventName, onEvent } = useDemoEvent()

const {
  count,
  records,
  setCount,
  generateRecords
} = useDemoTableRecords(32)

const basicList = generateRecords(6)
const shortList = basicList.slice(0, 3)
const twoRowList = basicList.slice(0, 2)
const skeletonList = basicList.slice(0, 4)
const compactColumns = ['id', 'name', 'role', 'age', 'status', 'salary']
const compactHeader = [
  { id: 'ID', name: 'Name', role: 'Role', age: 'Age', status: 'Status', salary: 'Salary' }
]
const compactColumnAttrs = {
  id: { align: 'right' as const },
  age: { align: 'right' as const },
  salary: { align: 'right' as const }
}

const isCaptionBottom = ref<boolean>(false)
const isCaptionDecorative = ref<boolean>(false)
const isBleed = ref<boolean>(false)

const multiRowHeader = [
  {
    id: { label: 'ID', align: 'right', tooltipLabel: 'Identifier', tooltipDescription: 'Unique row index.' },
    name: { label: 'Profile', colspan: 2, align: 'center', tooltipLabel: 'Member Profile' },
    role: '*none',
    age: { label: 'Metrics & Compensation', colspan: 3, align: 'center', tooltipLabel: 'Age, Status & Salary' },
    status: '*none',
    salary: '*none'
  },
  {
    id: { label: '#', align: 'right' },
    name: 'Name',
    role: 'Role',
    age: { label: 'Age', align: 'right' },
    status: 'Status',
    salary: { label: 'Salary', align: 'right' }
  }
]

const footerRow = {
  id: 'Sum',
  name: '6 Members',
  role: 'All Roles',
  age: 'Avg 34',
  status: 'Active',
  salary: '$49,800'
}

const sortColumn = ref<string | undefined>('age')
const sortDir = ref<SortDir | undefined>('asc')
const lastSortPayload = ref<string>('Initial sort: age (asc)')

const sortableHeader = [
  {
    id: { label: 'ID', showSort: true, align: 'right' },
    name: { label: 'Name', showSort: true, tooltipLabel: 'Sort by member name' },
    role: { label: 'Role', showSort: true },
    age: { label: 'Age', showSort: true, align: 'right' },
    status: { label: 'Status' },
    salary: { label: 'Salary', showSort: true, align: 'right' }
  }
]

const searchQuery = ref<string>('')
const searchColumnsMode = ref<'all' | 'name-role'>('all')
const activeSearchColumns = computed<string[] | undefined>(() => (
  searchColumnsMode.value === 'name-role' ? ['name', 'role'] : undefined
))
const currentPage = ref<number>(1)
const rowsPerPage = ref<number>(4)
const paginatedList = generateRecords(12)

const isLazy = ref<boolean>(true)
const lazyDefaultHeight = ref<string | number>(64)

const isHeaderTop = ref<boolean>(true)
const isStickyScrollBottom = ref<boolean>(true)

const selectedRows = ref<string | string[] | undefined>('1')
const selectionList = basicList.map((row, index) => ({
  ...row,
  disabled: index === 2
}))
const tableRowAttrs = {
  2: { 'data-highlighted-row': 'true' }
}

const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const boundaryColumns = ['id', 'name', 'notes', 'extra']
const boundaryHeader = [
  { id: 'ID', name: 'Label', notes: 'Notes', extra: 'Extra' }
]
const boundaryList = [
  {
    id: 0,
    name: 'Привет · Học tiếng Việt · 🚀',
    notes: '<img src=x onerror=alert(1)>',
    extra: 'Safe text'
  },
  {
    id: 1,
    name: { label: 'Merged across two columns', colspan: 2 },
    notes: '*none',
    extra: 'SupercalifragilisticexpialidociousWithoutSpaces'
  },
  {
    id: 2,
    name: '',
    notes: '   ',
    extra: 0
  }
]

const onTableSort = (item: SortColumnItem): void => {
  sortColumn.value = item.column ? String(item.column) : undefined
  sortDir.value = item.dir
  onEvent('sort', item)
  lastSortPayload.value = JSON.stringify(item)
}

const applySortPreset = (column?: string, direction?: SortDir): void => {
  sortColumn.value = column
  sortDir.value = direction
}

const applySearchPreset = (query: string): void => {
  searchQuery.value = query
  currentPage.value = 1
}

const toggleSearchColumns = (): void => {
  searchColumnsMode.value = searchColumnsMode.value === 'all' ? 'name-role' : 'all'
  currentPage.value = 1
}

const applyRowsPerPage = (rows: number): void => {
  rowsPerPage.value = rows
  currentPage.value = 1
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableFlex">
    <D1Section>
      <D1Group label="Basic Usage (role='table', columns, header, list, column slot)">
        <D1TableFlex
          :columns="dataTableColumns"
          :header="dataTableHeaderSimple"
          :list="basicList"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
          header-top
        >
          <template #age="{ value }">
            <D1Chip :label="value" readonly size="xs"/>
          </template>
        </D1TableFlex>
      </D1Group>

      <D1Group label="Caption & Bleed (caption, captionBottom, captionDecorative, #caption, bleed)">
        <DemoFlex align="center">
          <D1Button label="Toggle Caption Bottom" @click="isCaptionBottom = !isCaptionBottom"/>
          <D1Button label="Toggle Caption Decorative" @click="isCaptionDecorative = !isCaptionDecorative"/>
          <D1Button label="Toggle Bleed" @click="isBleed = !isBleed"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="Caption Bottom" :value="isCaptionBottom"/>
          <DemoValue label="Caption Decorative" :value="isCaptionDecorative"/>
          <DemoValue label="Bleed" :value="isBleed"/>
        </DemoFlex>
        <D1TableFlex
          caption="Quarterly Team Directory"
          :caption-bottom="isCaptionBottom"
          :caption-decorative="isCaptionDecorative"
          :bleed="isBleed"
          :columns="compactColumns"
          :header="compactHeader"
          :list="shortList"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="compactColumnAttrs"
        />
        <D1TableFlex
          :columns="compactColumns"
          :header="compactHeader"
          :list="twoRowList"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="compactColumnAttrs"
        >
          <template #caption>
            <strong>Custom Caption Rendered via #caption Slot</strong>
          </template>
        </D1TableFlex>
      </D1Group>

      <D1Group label="Multi-Row Header (colspan, *none) & Footer (foot, #foot-<col>, #foot-default)">
        <D1TableFlex
          :columns="compactColumns"
          :header="multiRowHeader"
          :list="basicList"
          :foot="footerRow"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="compactColumnAttrs"
        >
          <template #foot-salary="{ value }">
            <strong>Total: {{ value }}</strong>
          </template>
          <template #foot-default="{ value }">
            <span>{{ value }}</span>
          </template>
        </D1TableFlex>
      </D1Group>

      <D1Group label="Sorting (sort, sortDir, aria-sort Sync, 3-Click Reset & @sort)">
        <DemoFlex align="center">
          <D1Button label="Sort Age ASC" @click="applySortPreset('age', 'asc')"/>
          <D1Button label="Sort Name DESC" @click="applySortPreset('name', 'desc')"/>
          <D1Button label="Sort ID ASC" @click="applySortPreset('id', 'asc')"/>
          <D1Button label="Clear Sort" @click="applySortPreset(undefined, undefined)"/>
        </DemoFlex>
        <D1TableFlex
          :columns="compactColumns"
          :header="sortableHeader"
          :list="basicList"
          :sort="sortColumn"
          :sort-dir="sortDir"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="compactColumnAttrs"
          @sort="onTableSort"
        />
        <DemoFlex>
          <DemoValue label="Last Event" :value="eventName || 'none'"/>
          <DemoValue label="Active Sort" :value="sortColumn ?? 'none'"/>
          <DemoValue label="Active Sort Direction" :value="sortDir ?? 'none'"/>
          <DemoValue label="Sort Payload" :value="lastSortPayload"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Search & Pagination (search, searchColumns, page, rows)">
        <DemoFlex align="center">
          <D1Button label="All" @click="applySearchPreset('')"/>
          <D1Button label="Search: Active" @click="applySearchPreset('Active')"/>
          <D1Button label="Search: Manager" @click="applySearchPreset('Manager')"/>
          <D1Button label="Search: Developer" @click="applySearchPreset('Developer')"/>
          <D1Button label="Toggle Search Columns" @click="toggleSearchColumns"/>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button label="Page 1" @click="currentPage = 1"/>
          <D1Button label="Page 2" @click="currentPage = 2"/>
          <D1Button label="Page 3" @click="currentPage = 3"/>
          <D1Button label="Rows: 4" @click="applyRowsPerPage(4)"/>
          <D1Button label="Rows: 8" @click="applyRowsPerPage(8)"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="Search" :value="searchQuery || '(empty)'"/>
          <DemoValue label="Search Columns" :value="searchColumnsMode"/>
          <DemoValue label="Page" :value="currentPage"/>
          <DemoValue label="Rows Per Page" :value="rowsPerPage"/>
        </DemoFlex>
        <D1TableFlex
          :columns="compactColumns"
          :header="compactHeader"
          :list="paginatedList"
          :search="searchQuery"
          :search-columns="activeSearchColumns"
          :page="currentPage"
          :rows="rowsPerPage"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="compactColumnAttrs"
        />
      </D1Group>

      <D1Group label="Lazy Rendering & Default Height (lazy, defaultHeight='64')">
        <DemoFlex align="center">
          <D1Button label="Toggle Lazy" @click="isLazy = !isLazy"/>
          <D1Button label="Height: 64" @click="lazyDefaultHeight = 64"/>
          <D1Button label="Height: 48" @click="lazyDefaultHeight = 48"/>
          <D1Button label="Height: 4rem" @click="lazyDefaultHeight = '4rem'"/>
          <D1Button label="16 Records" @click="setCount(16)"/>
          <D1Button label="48 Records" @click="setCount(48)"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="Lazy" :value="isLazy"/>
          <DemoValue label="Default Height" :value="lazyDefaultHeight"/>
          <DemoValue label="Total Records" :value="count"/>
        </DemoFlex>
        <div class="demo-table-flex-page__scroll">
          <D1TableFlex
            :columns="dataTableColumns"
            :header="dataTableHeaderSimple"
            :list="records"
            :lazy="isLazy"
            :default-height="lazyDefaultHeight"
            :sticky-left="['id', 'name']"
            :sticky-scroll-bottom="false"
            :table-item-column-attrs="dataTableItemColumnAttrs"
            header-top
          />
        </div>
      </D1Group>

      <D1Group label="Sticky Header, Sticky Columns, Sticky Rows & Sticky Scroll Bottom">
        <DemoFlex align="center">
          <D1Button label="Toggle headerTop" @click="isHeaderTop = !isHeaderTop"/>
          <D1Button label="Toggle stickyScrollBottom" @click="isStickyScrollBottom = !isStickyScrollBottom"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="headerTop" :value="isHeaderTop"/>
          <DemoValue label="stickyScrollBottom" :value="isStickyScrollBottom"/>
        </DemoFlex>
        <D1TableFlex
          key-value="id"
          :columns="dataTableColumns"
          :header="dataTableHeaderSimple"
          :list="basicList"
          :header-top="isHeaderTop"
          :sticky-top="['1']"
          :sticky-left="['id', 'name']"
          :sticky-scroll-bottom="isStickyScrollBottom"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        />
      </D1Group>

      <D1Group label="Selection, Disabled Rows & Record/Item Attributes">
        <DemoFlex align="center">
          <D1Button label="Select Row 1" @click="selectedRows = '1'"/>
          <D1Button label="Select Rows 1 & 4" @click="selectedRows = ['1', '4']"/>
          <D1Button label="Clear Selection" @click="selectedRows = undefined"/>
        </DemoFlex>
        <DemoValue label="Selected" :value="selectedRows ?? 'none'"/>
        <D1TableFlex
          key-value="id"
          :columns="compactColumns"
          :header="compactHeader"
          :list="selectionList"
          :selected="selectedRows"
          :sticky-scroll-bottom="false"
          :table-record-attrs="{ 'data-record-demo': 'yes' }"
          :table-row-attrs="tableRowAttrs"
          :table-item-attrs="{ labelClamp: true }"
          :table-item-column-attrs="compactColumnAttrs"
        />
      </D1Group>

      <D1Group label="Custom Slots (#header-<col>, #status, #default, #header, #items, #foot)">
        <D1TableFlex
          :columns="compactColumns"
          :header="compactHeader"
          :list="shortList"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="compactColumnAttrs"
        >
          <template #header-name="{ value }">
            <strong>{{ value }} (Header Slot)</strong>
          </template>
          <template #status="{ value }">
            <D1Chip :label="value" size="xs" readonly/>
          </template>
          <template #default="{ value, classes }">
            <span :class="classes.label">{{ value }}</span>
          </template>
        </D1TableFlex>

        <D1TableFlex
          :columns="['metric', 'value']"
          :sticky-scroll-bottom="false"
        >
          <template #header="{ columns }">
            <D1TableFlexRecord
              is-header
              index="custom-header"
              :columns="columns"
              :item="{ metric: 'Metric (#header slot)', value: 'Value' }"
            />
          </template>
          <template #items="{ columns }">
            <D1TableFlexRecord
              index="custom-row-1"
              :columns="columns"
              :lazy="false"
              :item="{ metric: 'Uptime', value: '99.98%' }"
            />
          </template>
          <template #foot="{ columns }">
            <D1TableFlexRecord
              is-foot
              index="custom-foot"
              :columns="columns"
              :item="{ metric: 'Status (#foot slot)', value: 'Healthy' }"
            />
          </template>
        </D1TableFlex>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <D1TableFlex
            is-skeleton
            :columns="compactColumns"
            :header="compactHeader"
            :list="skeletonList"
            :sticky-scroll-bottom="false"
            :table-item-column-attrs="compactColumnAttrs"
          />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary Values, Empty State, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMounted = !isMounted"/>
          <DemoValue label="Mounted" :value="isMounted"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-flex-page__narrow">
          <D1TableFlex
            v-if="isMounted"
            :columns="boundaryColumns"
            :header="boundaryHeader"
            :list="boundaryList"
            :lazy="false"
            :sticky-scroll-bottom="false"
          />
        </DemoBox>
        <D1TableFlex
          caption="Empty Records Table"
          :columns="['id', 'name']"
          :header="[{ id: 'ID', name: 'Name' }]"
          :list="[]"
          :sticky-scroll-bottom="false"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-flex-page {
  &__scroll {
    max-height: 280px;
    overflow: auto;
  }

  &__narrow {
    max-width: 320px;
  }
}
</style>
