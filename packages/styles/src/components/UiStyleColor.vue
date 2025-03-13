<script setup lang="ts">

</script>

<template>
  <div class="ui-style-color ui-styles-item">
    <div class="ui-styles-item__sub">color.scss</div>
    <div class="ui-styles-item__sub ui-style-color__color--blue">color: blue</div>
    <div class="ui-styles-item__sub ui-style-color__color--blue-05">color: blue, .5</div>
    <div class="ui-styles-item__sub ui-style-color__background--blue">background: blue</div>
    <div class="ui-styles-item__sub ui-style-color__background--blue-02">background: blue, .2</div>
    <div class="ui-styles-item__sub ui-style-color__gradient--blue">gradient: blue</div>
    <div class="ui-styles-item__sub ui-style-color__gradient--blue-02">gradient: blue, .2</div>
    <div class="ui-styles-item__sub ui-style-color__border--blue">border: blue</div>
    <div class="ui-styles-item__sub ui-style-color__border--blue-02">border: blue, .2</div>
  </div>
</template>

<style lang="scss">
@use "../styles" as ui;

.ui-style-color {
  &__color--blue {
    @include ui.color(blue);
  }

  &__color--blue-05 {
    @include ui.color(blue, .5);
  }

  &__background--blue {
    @include ui.backgroundColor(blue);
  }

  &__background--blue-02 {
    @include ui.backgroundColor(blue, .2);
  }

  &__gradient--blue {
    @include ui.gradient(blue);
  }

  &__gradient--blue-02 {
    @include ui.gradient(blue, .2);
  }

  &__border--blue {
    border: solid 4px;
    @include ui.borderColor(blue);
  }

  &__border--blue-02 {
    border: solid 4px;
    @include ui.borderColor(blue, .2);
  }
}
</style>
