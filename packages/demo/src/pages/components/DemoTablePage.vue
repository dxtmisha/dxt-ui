<script setup lang="ts">
import { useDemoTableRecords } from '../../composables/useDemoTableRecords'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

import {
  dataTableHeaderMulti,
  dataTableHeaderSimple,
  dataTableItemColumnAttrs,
  dataTableColumns
} from '../../media/data/dataTable'

const {
  countString,
  onInput,
  records,
  generateRecords
} = useDemoTableRecords(32)

const basicList = generateRecords(8)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Table">
    <D1Section label="Basic Table">
      <D1Table
        :columns="dataTableColumns"
        :header="dataTableHeaderSimple"
        :list="basicList"
        :scroll-bottom-sticky="false"
        :tableItemColumnAttrs="dataTableItemColumnAttrs"
        header-top
      >
        <template #age="{ value }">
          <D1Chip :label="value" readonly size="xs"/>
        </template>
      </D1Table>
    </D1Section>

    <D1Section label="Auto-Generated Records">
      <D1Input
        :value="countString"
        type="number"
        step="8"
        label="Custom Record Count"
        @change-lite="onInput"
      />

      <D1Table
        :columns="dataTableColumns"
        :header="dataTableHeaderMulti"
        :list="records"
        :headerTop="true"
        :stickyLeft="['id', 'name']"
        :tableItemColumnAttrs="dataTableItemColumnAttrs"
      />
    </D1Section>

    <D1Section label="Skeleton & Disabled States">
      <D1Skeleton active>
        <D1Table
          isSkeleton
          :columns="dataTableColumns"
          :header="dataTableHeaderSimple"
          :list="basicList"
          :tableItemColumnAttrs="dataTableItemColumnAttrs"
        />
      </D1Skeleton>
    </D1Section>
  </D1Page>
</template>
