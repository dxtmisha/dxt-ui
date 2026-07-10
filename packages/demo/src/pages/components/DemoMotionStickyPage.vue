<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MotionSticky">
    <D1Section>
      <D1Block label="General Usage">
        <D1Group label="Sticky Header in Container">
          <div class="demo-motion-sticky__container">
            <D1MotionSticky
              elementScroll=".demo-motion-sticky__container"
              classActivity="demo-motion-sticky__header--stuck"
              class="demo-motion-sticky__header"
            >
              Sticky Header Area
            </D1MotionSticky>
            <div class="demo-motion-sticky__content">
              <p v-for="i in 10" :key="i">
                Scroll the container to trigger the sticky state. The header will receive the active class modifier class, changing its background and shadow. Paragraph item {{ i }}.
              </p>
            </div>
          </div>
        </D1Group>
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-motion-sticky {
  &__container {
    height: 300px;
    overflow-y: auto;
    border: 1px solid var(--d1-sys-border);
    border-radius: var(--d1-sys-rounded-lg);
    position: relative;
  }

  &__header {
    top: 0;
    z-index: 10;
    padding: var(--d1-ref-spacing-4);
    background-color: var(--d1-sys-background);
    border-bottom: 1px solid var(--d1-sys-border);
    transition: all 0.2s ease-in-out;

    &--stuck {
      background-color: var(--d1-sys-palette-primary);
      color: var(--d1-sys-palette-primary-text);
      box-shadow: var(--d1-sys-shadow-md);
      border-bottom-color: transparent;
    }
  }

  &__content {
    padding: var(--d1-ref-spacing-4);

    p {
      margin-bottom: var(--d1-ref-spacing-4);
    }
  }
}
</style>
