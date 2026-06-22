<script setup lang="ts">
import DemoFlex from '../../DemoFlex.vue'
import DemoBox from '../../DemoBox.vue'

defineProps<{
  items: { value: string, label: string }[]
  className?: string
  classClick?: string
  classPosition?: string
}>()
</script>

<template>
  <DemoFlex class="demo-draggable-wrapper-list">
    <DemoBox
      v-for="item in items"
      :key="item.value"
      center
      size="sm"
      :class="[className, classClick, classPosition]"
      :data-value="item.value"
    >
      {{ item.label }}
    </DemoBox>
  </DemoFlex>
</template>
