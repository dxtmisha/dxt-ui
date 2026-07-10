<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="ProgressBar">
    <D1Section>
      <D1Group label="Basic & Single Value">
        <D1ProgressBar :value="50" />
        <D1ProgressBar :value="75" />
      </D1Group>

      <D1Group label="Multi-Segmented with Custom Colors">
        <D1ProgressBar
          :value="[
            { value: 25, color: '#ff4d4f' },
            { value: 35, color: '#52c41a' },
            { value: 20, color: '#1890ff' }
          ]"
        />
      </D1Group>

      <D1Group label="Palettes">
        <D1ProgressBar palette="blue" :value="45" />
        <D1ProgressBar palette="green" :value="60" />
        <D1ProgressBar palette="red" :value="80" />
      </D1Group>

      <D1Group label="With Labels">
        <D1ProgressBar
          showLabel
          :value="[
            { value: 30, label: '30%', color: '#2f54eb' },
            { value: 40, label: '40%', color: '#722ed1' },
            { value: 30, label: '30%', color: '#eb2f96' }
          ]"
        />
      </D1Group>

      <D1Group label="Overlay Mode">
        <D1ProgressBar
          overlay
          :value="[
            { value: 15, color: '#faad14' },
            { value: 45, color: '#52c41a' },
            { value: 30, color: '#13c2c2' }
          ]"
        />
      </D1Group>

      <D1Group label="Focus State">
        <D1ProgressBar
          focus="item-2"
          :value="[
            { index: 'item-1', value: 30, label: 'Segment 1 (30%)', color: '#1890ff' },
            { index: 'item-2', value: 40, label: 'Focused Segment 2 (40%)', color: '#52c41a' },
            { index: 'item-3', value: 30, label: 'Segment 3 (30%)', color: '#faad14' }
          ]"
          showLabel
        />
      </D1Group>

      <D1Group label="Skeleton State">
        <D1ProgressBar isSkeleton :value="50" />
        <D1ProgressBar
          isSkeleton
          showLabel
          :value="[
            { value: 30, label: '30%' },
            { value: 40, label: '40%' },
            { value: 30, label: '30%' }
          ]"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
