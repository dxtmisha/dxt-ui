<script setup lang="ts">
import D1List from './components/Ui/List/D1List.vue'
import D1Mask from './components/Ui/Mask/D1Mask.vue'
</script>

<template>
  <div class="app">
    <div class="test">
      <div class="test__item">width > 400</div>
      <D1List/>
      <div style="border: 1px solid #eee;">
        <D1Mask mask="***-***"/>
      </div>
    </div>
    <div class="app__back">
      <h1>D1</h1>
      <RouterLink to="/" class="app__main">Main</RouterLink>
    </div>
    <RouterView/>
  </div>
</template>

<style lang="scss">
.app {
  padding: 4px 8px;

  &__back {
    padding: 16px 0;
  }
}

.test {
  container-type: inline-size;

  @container (min-width: 400px) {
    .test__item {
      background-color: #f0f0f0;
      padding: 8px;
      border-radius: 4px;
      font-weight: bold;
    }

  }
}
</style>
