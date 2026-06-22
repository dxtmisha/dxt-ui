<script setup lang="ts">
import DemoFlex from './DemoFlex.vue'
import DemoBox from './DemoBox.vue'

defineProps<{
  className?: string
  classClick?: string
  onClick?: (event: MouseEvent) => void
}>()
</script>

<template>
  <DemoFlex class="demo-selectable-area-list">
    <DemoBox
      v-for="item in 8"
      :key="item"
      center
      size="sm"
      :class="['demo-selectable-area-list__item', className, classClick]"
      :data-value="'item-' + item"
      @click="onClick"
    >
      Item {{ item }}
    </DemoBox>
  </DemoFlex>
</template>

<style lang="scss"></style>
