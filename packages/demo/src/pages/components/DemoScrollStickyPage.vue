<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="ScrollSticky">
    <D1Section>
      <D1Group label="Scroll Synchronization on Page Scroll">
        <p>Scroll the page vertically to see the horizontal scrollbar stick to the bottom of the viewport.</p>

        <!-- Extremely large top spacer to push the element down and trigger viewport scroll -->
        <div style="height: 100vh; display: flex; align-items: flex-end; padding-bottom: 24px; color: var(--d1-sys-palette-outline);">
          ↓ Scroll down to see the sticky scrollbar in action
        </div>

        <D1ScrollSticky style="max-width: 480px; border: 1px solid var(--d1-sys-border); border-radius: var(--d1-sys-rounded-lg); padding: var(--d1-ref-spacing-4);">
          <div style="width: 1200px;">
            <h3>Synchronized Horizontal Scroll</h3>
            <p>This area has a width of 1200px (wider than the 480px container).</p>
            <p>The horizontal scrollbar will stick to the bottom of your screen as long as this content is visible in the viewport.</p>
            <div style="height: 300px; background: linear-gradient(135deg, var(--d1-sys-palette-primaryVariant), var(--d1-sys-palette-secondaryVariant)); margin-top: var(--d1-ref-spacing-4); border-radius: var(--d1-sys-rounded-md); display: flex; align-items: center; justify-content: center; color: white;">
              Inner content area
            </div>
          </div>
        </D1ScrollSticky>

        <!-- Extremely large bottom spacer so we can scroll past the element -->
        <div style="height: 120vh; padding-top: 24px; color: var(--d1-sys-palette-outline);">
          ↑ Scroll up to see it stick again
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
