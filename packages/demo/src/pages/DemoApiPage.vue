<script setup lang="ts">
import { useApiAsyncRef, useMeta } from '@dxtmisha/functional'

import DemoLinkBlack from '../components/DemoLinkBlack.vue'

const { setTitle } = useMeta()
const { data } = useApiAsyncRef<any>('hello')

setTitle('Api')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Test Api">
    <D1Group v-if="data">
      <div><b>Status:</b> {{ data.status }}</div>
      <div><b>Message:</b> {{ data.message }}</div>
      <div><b>Version:</b> {{ data?.version }}</div>
      <div><b>Description:</b> {{ data?.description }}</div>
    </D1Group>
  </D1Page>
</template>

<style lang="scss"></style>
