<script setup lang="ts">
import { computed } from 'vue'
import DxtTestWikiCode from './DxtTestWikiCode.vue'
import type { WikiStorybookProp } from '@dxtmisha/wiki'

defineOptions({
  name: 'DxtTestWikiPropItem'
})

const props = defineProps<{
  item: WikiStorybookProp
}>()

const name = computed(() => props.item.getName())
const description = computed(() => props.item.getDescription())
const type = computed(() => props.item.getType())
</script>

<template>
  <div class="dxt-test-wiki-prop-item">
    <div class="dxt-test-wiki-prop-item__tilte">
      <span class="dxt-test-wiki-prop-item__name">{{ name }}:</span>
      <DxtTestWikiCode :code="type"/>
    </div>
    <div class="dxt-test-wiki-prop-item__description">{{ description }}</div>
  </div>
</template>

<style lang="scss">
@use "@dxtmisha/styles" as dxt;

.dxt-test-wiki-prop-item {
  @include dxt.flexStretchY;
  gap: 4px;

  padding: 8px 0 0;
  border-top: 1px solid oklch(92.8% 0.006 264.531);

  &__tilte {
    @include dxt.flexX;
    gap: 4px;
  }

  &__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  &__description {
    font-size: 12px;
    line-height: 16px;
    color: oklch(27.8% 0.033 256.848);
  }
}
</style>
