<script setup lang="ts"></script>

<template>
  <D1Page label="Test SSR">
    <D1Section>
      <router-link :to="{ name: 'test-api' }">Api</router-link>
      <div></div>
    </D1Section>
    <D1Section label="Components">
      <router-link :to="{ name: 'component-image' }">Image</router-link>
      <div></div>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
