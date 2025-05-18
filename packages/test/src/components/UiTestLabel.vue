<script setup lang="ts">
import { writeClipboardData } from '@dxt-ui/functional'

const props = defineProps<{
  label?: string | number
}>()

const onClick = () => writeClipboardData(String(props.label)).then()
</script>

<template>
  <div class="ui-test-label" @click="onClick">{{ label }}</div>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.ui-test-label {
  position: absolute;
  @include ui.top();
  z-index: 4;

  padding: 4px 8px;

  font-size: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .64);
  backdrop-filter: blur(8px);

  cursor: copy;

  @include ui.clamp(2);
}
</style>
