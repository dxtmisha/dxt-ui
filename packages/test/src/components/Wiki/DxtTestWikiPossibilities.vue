<script setup lang="ts">
defineOptions({
  name: 'DxtTestWikiPossibilities'
})

defineProps<{
  possibilities: string[]
}>()
</script>

<template>
  <ul class="dxt-test-wiki-possibilities">
    <li
      v-for="possibility in possibilities"
      :key="possibility"
    >
      {{ possibility }}
    </li>
  </ul>
</template>

<style lang="scss">
.dxt-test-wiki-possibilities {
  margin: 0;
  padding-left: 16px;

  font-size: 12px;
  line-height: 16px;
}
</style>
