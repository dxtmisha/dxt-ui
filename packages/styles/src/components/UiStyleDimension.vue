<script setup lang="ts">

</script>

<template>
  <div class="ui-style-dimension ui-styles-item">
    <div class="ui-styles-item__sub">dimension.scss</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__size">size: width, height</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__sizeDevice">sizeDevice: width, height</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__sizeBasis">sizeBasis: width, height</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__aspectRatio">aspectRatio: 2/1</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__aspectRatioWidth">aspectRatio: width</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__aspectRatioHeight">aspectRatio: height</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__squared">squared</div>
    <div class="ui-styles-item__sub ui-styles-item__border ui-style-dimension__circle">circle</div>
  </div>
</template>

<style lang="scss">
@use "../styles" as ui;

.ui-style-dimension {
  &__size {
    @include ui.width(128px);
    @include ui.height(64px);
  }

  &__sizeDevice {
    @include ui.widthDevice(64);
    @include ui.heightDevice(8);
  }

  &__sizeBasis {
    @include ui.widthBasis(128px);
    @include ui.height(64px);
  }

  &__aspectRatio {
    @include ui.aspectRatio('2/1');
  }

  &__aspectRatioWidth {
    @include ui.height(64px);
    @include ui.aspectRatioWidth('2/1');
  }

  &__aspectRatioHeight {
    @include ui.width(128px);
    @include ui.aspectRatioHeight('2/1');
  }

  &__squared {
    @include ui.squared(128px);
  }

  &__circle {
    @include ui.circle(128px);
  }
}
</style>
