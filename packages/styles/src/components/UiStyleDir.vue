<script setup lang="ts">

</script>

<template>
  <div class="ui-style-dir ui-styles-item">
    <div class="ui-styles-item__sub">dir.scss</div>
    <div class="ui-styles-item__sub ui-style-dir__dir">isDirLeft, isDirRight</div>
    <div class="ui-styles-item__sub ui-style-dir__position">dirToLeft, dirToRight</div>
  </div>
</template>

<style lang="scss">
@use "../styles" as ui;

.ui-style-dir {
  &__dir {
    border: 1px solid #042c43;
    border-left-width: calc(#{ui.isDirLeft()} * 16px);
    border-right-width: calc(#{ui.isDirRight()} * 16px);
  }

  &__position,
  &__position {
    --ui-test-dir-left: 16px;
    --ui-test-dir-right: 8px;

    border: 1px solid #042c43;
    border-left-width: ui.dirToLeft(--ui-test-dir-left, --ui-test-dir-right);
    border-right-width: ui.dirToRight(--ui-test-dir-left, --ui-test-dir-right);
  }
}
</style>
