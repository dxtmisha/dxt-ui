<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SortColumnItem, SortDir, SearchOptions } from '@dxtmisha/functional'
import type { SortColumn } from '@dxtmisha/constructor'
import type { TableItemProps } from '@dxtmisha/d1/D1TableItem'
import type { TableRecordProps } from '@dxtmisha/d1/D1TableRecord'
import { useDemoEvent } from '../../composables/useDemoEvent'
import { useDemoTableRecords } from '../../composables/useDemoTableRecords'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

import {
  dataTableHeaderMulti,
  dataTableHeaderSimple,
  dataTableItemColumnAttrs,
  dataTableColumns
} from '../../media/data/dataTable'

const { eventName, onEvent } = useDemoEvent()
const { count, records, setCount, generateRecords } = useDemoTableRecords(24)

const basicList = generateRecords(6)
const paginationList = generateRecords(20)

// 1. Basic & Caption Controls
const isCaptionBottom = ref<boolean>(false)
const isCaptionDecorative = ref<boolean>(false)

const compactColumns = ['id', 'name', 'role', 'age', 'salary']
const compactColumnsWidth: Record<string, string | number> = {
  id: 64,
  name: '28%',
  role: '22%',
  age: 88,
  salary: 120
}
const compactHeader = {
  id: 'ID',
  name: 'Name',
  role: 'Role',
  age: 'Age',
  salary: 'Salary'
}
const basicItemAttrs: TableItemProps = {
  alignVertical: 'center'
}
const basicRecordAttrs: TableRecordProps = {
  tableItemAttrs: { dividerY: true }
}
const basicRowAttrs: Record<string, TableRecordProps> = {
  2: { selected: true }
}

// 2. Multi-Row Header & Footer
const multiFoot = {
  id: 'Total',
  name: '6 Records',
  status: 'Summary',
  role: 'All Roles',
  email: '—',
  age: 'Avg 38',
  country: 'Global',
  city: 'Multi-City',
  salary: '$49,200'
}

// 3. Sorting (Initial Sync + 3-Click Cycle + Custom Sort)
const sortableHeader = [
  {
    id: { label: 'ID', align: 'right' as const, showSort: true },
    name: { label: 'Name', showSort: true },
    role: { label: 'Role', showSort: true },
    age: { label: 'Age', align: 'right' as const, showSort: true },
    salary: { label: 'Salary', align: 'right' as const, showSort: true }
  }
]
const initialSortColumn = ref<SortColumn | undefined>('age')
const initialSortDir = ref<SortDir | undefined>('desc')
const sortEventPayload = ref<string>('No sort event yet')

const customSortActive = ref<boolean>(false)
const customSortFunction = (first: Record<string, unknown>, second: Record<string, unknown>): number => {
  const firstName = String(first.name ?? '')
  const secondName = String(second.name ?? '')

  return firstName.length - secondName.length
}

const onTableSort = (item: SortColumnItem): void => {
  onEvent('sort', item)
  sortEventPayload.value = JSON.stringify(item)
}

const applySortPreset = (column?: SortColumn, direction?: SortDir): void => {
  customSortActive.value = false
  initialSortColumn.value = column
  initialSortDir.value = direction
}

// 4. Search & Highlight
const searchQuery = ref<string>('Developer')
const isNameOnlySearch = ref<boolean>(false)
const isReturnEverything = ref<boolean>(false)

const searchList = [
  { id: 1, name: 'Alice Carter', role: 'Senior Developer', country: 'USA', age: 31 },
  { id: 2, name: 'Benjamin Cole', role: 'Product Designer', country: 'UK', age: 28 },
  { id: 3, name: 'Clara Nguyen', role: 'Frontend Developer', country: 'Vietnam', age: 26 },
  { id: 4, name: 'David Kim', role: 'QA Engineer', country: 'South Korea', age: 35 },
  { id: 5, name: 'Elena Rostova', role: 'Engineering Manager', country: 'Germany', age: 41 }
]
const searchHeader = {
  id: 'ID',
  name: 'Name',
  role: 'Role',
  country: 'Country',
  age: 'Age'
}
const activeSearchColumns = computed<string[] | undefined>(() => (
  isNameOnlySearch.value ? ['name'] : undefined
))
const activeSearchOptions = computed<SearchOptions>(() => ({
  returnEverything: isReturnEverything.value
}))

interface HighlightSegment {
  key: string
  text: string
  isMatch: boolean
}

const splitSearchText = (value: unknown, query: string): HighlightSegment[] => {
  const source = String(value ?? '')
  const trimmed = query.trim()

  if (!trimmed) {
    return [{ key: 'full', text: source, isMatch: false }]
  }

  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = source.split(new RegExp(`(${escaped})`, 'gi'))

  return parts
    .filter(part => part.length > 0)
    .map((part, index) => ({
      key: `${index}-${part}`,
      text: part,
      isMatch: part.toLowerCase() === trimmed.toLowerCase()
    }))
}

// 5. Pagination
const currentPage = ref<number>(1)
const rowsPerPage = ref<number>(5)
const totalPages = computed<number>(() => Math.max(1, Math.ceil(paginationList.length / rowsPerPage.value)))

const goToPage = (targetPage: number): void => {
  currentPage.value = Math.min(Math.max(1, targetPage), totalPages.value)
}

const setRowsPerPage = (rowsCount: number): void => {
  rowsPerPage.value = rowsCount
  currentPage.value = 1
}

// 6. Sticky, Bleed & Scrollbar
const isHeaderTop = ref<boolean>(true)
const isStickyScrollBottom = ref<boolean>(true)
const isBleedEnabled = ref<boolean>(false)
const isStickyTopRow = ref<boolean>(true)
const stickyTopKeys = computed<string[] | undefined>(() => (
  isStickyTopRow.value ? ['1'] : undefined
))

// 7. Selection & Disabled Rows
const selectableList = [
  { id: 'row-1', name: 'Hannah Brooks', role: 'Architect', age: 39, salary: '$11,500' },
  { id: 'row-2', name: 'Isaac Turner', role: 'Developer', age: 29, salary: '$8,900' },
  { id: 'row-3', name: 'Julia Novak', role: 'Designer', age: 33, salary: '$9,200', disabled: true },
  { id: 'row-4', name: 'Kevin Adams', role: 'Analyst', age: 27, salary: '$7,400' }
]
const selectedRowKeys = ref<string | string[]>(['row-1', 'row-4'])

const toggleRowFour = (): void => {
  const currentList = Array.isArray(selectedRowKeys.value)
    ? [...selectedRowKeys.value]
    : (selectedRowKeys.value ? [selectedRowKeys.value] : [])

  if (currentList.includes('row-4')) {
    selectedRowKeys.value = currentList.filter(key => key !== 'row-4')
  } else {
    selectedRowKeys.value = [...currentList, 'row-4']
  }
}

// 8. Slots Data
const slotsColumns = ['id', 'name', 'age', 'salary']
const slotsHeader = {
  id: 'ID',
  name: 'Member',
  age: 'Age',
  salary: 'Salary'
}
const slotsFoot = {
  id: 'Sum',
  name: '2 People',
  age: 'Avg 31',
  salary: '$18,000'
}
const slotsList = [
  { id: 1, name: 'Maya Lin', age: 29, salary: '$8,800' },
  { id: 2, name: 'Noah Reid', age: 33, salary: '$9,200' }
]

// 9. Skeleton
const isSkeletonActive = ref<boolean>(true)

// 10. Boundary, Empty List & Lifecycle
const isMountedDemo = ref<boolean>(true)
const isShowEmptyList = ref<boolean>(false)

const boundaryColumns = ['id', 'name', 'note', 'score']
const boundaryHeader = {
  id: 'ID',
  name: 'Label',
  note: 'Notes',
  score: 'Score'
}
const boundaryList = [
  { id: 0, name: 'Zero & Empty', note: '', score: 0 },
  { id: 1, name: 'Привет · Học tiếng Việt · 🚀', note: 'Unicode text', score: 100 },
  { id: 2, name: '<img src=x onerror=alert(1)>', note: 'XSS literal', score: -15 },
  {
    id: 3,
    name: { label: 'Merged Across Name & Notes', colspan: 2, align: 'center' as const },
    note: '*none',
    score: 999
  }
]
const activeBoundaryList = computed(() => (
  isShowEmptyList.value ? [] : boundaryList
))
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Table">
    <D1Section>
      <D1Group label="Basic Table, Caption & Column Widths">
        <DemoFlex align="center">
          <D1Button label="Toggle Caption Bottom" @click="isCaptionBottom = !isCaptionBottom"/>
          <D1Button label="Toggle Caption Decorative" @click="isCaptionDecorative = !isCaptionDecorative"/>
          <DemoValue label="Caption Bottom" :value="isCaptionBottom"/>
          <DemoValue label="Decorative" :value="isCaptionDecorative"/>
        </DemoFlex>
        <D1Table
          caption="Team directory with explicit column widths and right-aligned numeric columns"
          :caption-bottom="isCaptionBottom"
          :caption-decorative="isCaptionDecorative"
          :columns="compactColumns"
          :columns-width="compactColumnsWidth"
          :header="compactHeader"
          :list="basicList"
          key-value="id"
          :sticky-scroll-bottom="false"
          :table-item-attrs="basicItemAttrs"
          :table-item-column-attrs="dataTableItemColumnAttrs"
          :table-record-attrs="basicRecordAttrs"
          :table-row-attrs="basicRowAttrs"
        >
          <template #age="{ value }">
            <D1Chip :label="String(value)" readonly size="xs"/>
          </template>
        </D1Table>
      </D1Group>

      <D1Group label="Multi-Row Header (colspan, rowspan, tooltips) & Footer (foot, #foot-<col>, #foot-default)">
        <D1Table
          caption="Inferred columns from multi-row header with footer summary slots"
          :header="dataTableHeaderMulti"
          :foot="multiFoot"
          :list="basicList"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        >
          <template #foot-salary="{ value }">
            <D1Chip :label="String(value)" palette="blue" readonly size="xs"/>
          </template>
          <template #foot-default="{ value, index }">
            <span>{{ value }} ({{ index }})</span>
          </template>
        </D1Table>
      </D1Group>

      <D1Group label="Interactive Sorting (sort='age', sortDir='desc'), aria-sort & @sort Event">
        <DemoFlex align="center">
          <D1Button label="Sort Age Desc" @click="applySortPreset('age', 'desc')"/>
          <D1Button label="Sort Name Asc" @click="applySortPreset('name', 'asc')"/>
          <D1Button label="Multi-Sort [role, age]" @click="applySortPreset(['role', 'age'], 'asc')"/>
          <D1Button label="Object Sort { role: asc, age: desc }" @click="applySortPreset({ role: 'asc', age: 'desc' })"/>
          <D1Button label="Custom Length Sort" @click="customSortActive = !customSortActive"/>
          <D1Button label="Clear Sort" @click="applySortPreset(undefined, undefined)"/>
        </DemoFlex>
        <D1Table
          :columns="compactColumns"
          :header="sortableHeader"
          :list="basicList"
          :sort="initialSortColumn"
          :sort-dir="initialSortDir"
          :sort-function="customSortActive ? customSortFunction : undefined"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
          @sort="onTableSort"
        />
        <DemoFlex>
          <DemoValue label="Last Event" :value="eventName"/>
          <DemoValue label="Sort Payload" :value="sortEventPayload"/>
          <DemoValue label="Custom Sort Active" :value="customSortActive"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Search, Search Columns, Search Options & Highlight">
        <DemoFlex align="center">
          <D1Button label="Query: Developer" @click="searchQuery = 'Developer'"/>
          <D1Button label="Query: Alice" @click="searchQuery = 'Alice'"/>
          <D1Button label="Query: USA" @click="searchQuery = 'USA'"/>
          <D1Button label="Query: NoMatch" @click="searchQuery = 'NoMatch'"/>
          <D1Button label="Clear Search" @click="searchQuery = ''"/>
          <D1Button label="Toggle Name-Only" @click="isNameOnlySearch = !isNameOnlySearch"/>
          <D1Button label="Toggle Return All" @click="isReturnEverything = !isReturnEverything"/>
        </DemoFlex>
        <D1Table
          :header="searchHeader"
          :list="searchList"
          :search="searchQuery"
          :search-columns="activeSearchColumns"
          :search-options="activeSearchOptions"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        >
          <template #name="{ value }">
            <span>
              <template v-for="segment in splitSearchText(value, searchQuery)" :key="segment.key">
                <mark v-if="segment.isMatch">{{ segment.text }}</mark>
                <template v-else>{{ segment.text }}</template>
              </template>
            </span>
          </template>
          <template #role="{ value }">
            <span>
              <template v-for="segment in splitSearchText(value, searchQuery)" :key="segment.key">
                <mark v-if="segment.isMatch">{{ segment.text }}</mark>
                <template v-else>{{ segment.text }}</template>
              </template>
            </span>
          </template>
        </D1Table>
        <DemoFlex>
          <DemoValue label="Search Query" :value="searchQuery || '(empty)'"/>
          <DemoValue label="Name Only" :value="isNameOnlySearch"/>
          <DemoValue label="Return Everything" :value="isReturnEverything"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Pagination (page & rows)">
        <DemoFlex align="center">
          <D1Button label="Prev Page" :disabled="currentPage <= 1" @click="goToPage(currentPage - 1)"/>
          <D1Button label="Page 1" @click="goToPage(1)"/>
          <D1Button label="Page 2" @click="goToPage(2)"/>
          <D1Button label="Next Page" :disabled="currentPage >= totalPages" @click="goToPage(currentPage + 1)"/>
          <D1Button label="Rows: 4" @click="setRowsPerPage(4)"/>
          <D1Button label="Rows: 5" @click="setRowsPerPage(5)"/>
          <D1Button label="Rows: 10" @click="setRowsPerPage(10)"/>
        </DemoFlex>
        <D1Table
          :columns="compactColumns"
          :header="compactHeader"
          :list="paginationList"
          :page="currentPage"
          :rows="rowsPerPage"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        />
        <DemoFlex>
          <DemoValue label="Current Page" :value="`${currentPage} / ${totalPages}`"/>
          <DemoValue label="Rows Per Page" :value="rowsPerPage"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sticky Header, Sticky Columns/Rows, Bleed & Sticky Scrollbar">
        <DemoFlex align="center">
          <D1Button label="8 Records" @click="setCount(8)"/>
          <D1Button label="24 Records" @click="setCount(24)"/>
          <D1Button label="48 Records" @click="setCount(48)"/>
          <D1Button label="Toggle Header Top" @click="isHeaderTop = !isHeaderTop"/>
          <D1Button label="Toggle Sticky Scrollbar" @click="isStickyScrollBottom = !isStickyScrollBottom"/>
          <D1Button label="Toggle Sticky Top Row" @click="isStickyTopRow = !isStickyTopRow"/>
          <D1Button label="Toggle Bleed" @click="isBleedEnabled = !isBleedEnabled"/>
        </DemoFlex>
        <DemoFlex>
          <DemoValue label="Records" :value="count"/>
          <DemoValue label="headerTop" :value="isHeaderTop"/>
          <DemoValue label="stickyScrollBottom" :value="isStickyScrollBottom"/>
          <DemoValue label="stickyTop" :value="stickyTopKeys ?? 'none'"/>
          <DemoValue label="bleed" :value="isBleedEnabled"/>
        </DemoFlex>
        <D1Table
          :columns="dataTableColumns"
          :header="dataTableHeaderMulti"
          :list="records"
          key-value="id"
          :header-top="isHeaderTop"
          :sticky-scroll-bottom="isStickyScrollBottom"
          :sticky-top="stickyTopKeys"
          :sticky-left="['id', 'name']"
          :bleed="isBleedEnabled"
          :lazy="true"
          :default-height="48"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        />
      </D1Group>

      <D1Group label="Row Selection & Disabled Rows (selected, keyValue, item.disabled)">
        <DemoFlex align="center">
          <D1Button label="Select Single (row-2)" @click="selectedRowKeys = 'row-2'"/>
          <D1Button label="Select Multiple (row-1, row-4)" @click="selectedRowKeys = ['row-1', 'row-4']"/>
          <D1Button label="Toggle row-4" @click="toggleRowFour"/>
          <D1Button label="Clear Selection" @click="selectedRowKeys = []"/>
        </DemoFlex>
        <D1Table
          :columns="compactColumns"
          :header="compactHeader"
          :list="selectableList"
          key-value="id"
          :selected="selectedRowKeys"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        />
        <DemoValue label="Selected Keys" :value="selectedRowKeys"/>
      </D1Group>

      <D1Group label="All Slots (#caption, #body, #header, #items, #foot, #header-<col>, #foot-<col>, #<col>, #default)">
        <D1Table
          :columns="slotsColumns"
          :header="slotsHeader"
          :foot="slotsFoot"
          :list="slotsList"
          :sticky-scroll-bottom="false"
          :table-item-column-attrs="dataTableItemColumnAttrs"
        >
          <template #caption>
            <span>Custom #caption slot content</span>
          </template>
          <template #header-name="{ value }">
            <span>#header-name: {{ value }}</span>
          </template>
          <template #age="{ value }">
            <D1Chip :label="`#age ${value}`" readonly size="xs"/>
          </template>
          <template #default="{ value, index }">
            <span>{{ value }} (#default:{{ index }})</span>
          </template>
          <template #foot-salary="{ value }">
            <strong>#foot-salary: {{ value }}</strong>
          </template>
        </D1Table>

        <D1Table
          :columns="slotsColumns"
          :sticky-scroll-bottom="false"
        >
          <template #body>
            <tbody>
              <tr>
                <D1TableItem label="#body slot custom row" :colspan="4" align="center"/>
              </tr>
            </tbody>
          </template>
        </D1Table>

        <D1Table
          :columns="slotsColumns"
          :sticky-scroll-bottom="false"
        >
          <template #header="{ columns }">
            <tr>
              <D1TableHeaderItem
                v-for="columnName in columns"
                :key="columnName"
                :label="`#header:${columnName}`"
              />
            </tr>
          </template>
          <template #items="{ columns }">
            <tr>
              <D1TableItem
                v-for="columnName in columns"
                :key="columnName"
                :label="`#items:${columnName}`"
              />
            </tr>
          </template>
          <template #foot="{ columns }">
            <tr>
              <D1TableHeaderItem
                :label="`#foot (${columns.length} columns)`"
                :colspan="columns.length"
                align="center"
              />
            </tr>
          </template>
        </D1Table>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <D1Table
            is-skeleton
            :columns="dataTableColumns"
            :header="dataTableHeaderSimple"
            :list="basicList"
            :sticky-scroll-bottom="false"
            :table-item-column-attrs="dataTableItemColumnAttrs"
          />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary Values, Empty List, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Empty List" @click="isShowEmptyList = !isShowEmptyList"/>
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Empty List" :value="isShowEmptyList"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-page__narrow">
          <D1Table
            v-if="isMountedDemo"
            caption="Boundary table inside narrow DemoBox"
            :columns="boundaryColumns"
            :header="boundaryHeader"
            :list="activeBoundaryList"
            :sticky-scroll-bottom="false"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-page {
  &__narrow {
    max-width: 320px;
    overflow-x: auto;
  }

  .d1-table:not(.d1-scrollSticky) {
    max-width: 100%;
    overflow-x: auto;
  }
}
</style>
