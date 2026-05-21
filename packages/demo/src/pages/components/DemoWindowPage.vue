<script setup lang="ts">
import { ref } from 'vue'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const openControlled = ref(false)
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Window">
    <D1Section>
      <D1Group label="Basic Usage (Modal)">
        <DemoFlex>
          <D1Window>
            <template #control="{ binds }">
              <D1Button
                label="Open Basic Modal"
                primary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Basic Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>This is a standard modal dialog. It aligns in the center of the screen by default and darkens the background with a scrim overlay.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Cancel"
                  secondary
                  :class="classesWindow.close"
                />
                <D1Button
                  label="Confirm"
                  primary
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive Layouts">
        <DemoFlex>
          <!-- Menu (Popover) -->
          <D1Window adaptive="menu">
            <template #control="{ binds }">
              <D1Button
                label="Menu (Popover)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <h4 class="demo-window-page__title">Popover Menu</h4>
              <p>This layout adapts to look like a contextual menu or popover dropdown attached dynamically near the trigger button.</p>
            </div>
          </D1Window>

          <!-- Action Sheet Bottom -->
          <D1Window adaptive="actionSheetBottom">
            <template #control="{ binds }">
              <D1Button
                label="Action Sheet (Bottom)"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Action Sheet</h3>
            </template>
            <div class="demo-window-page__content">
              <p>This layout slides up from the bottom of the screen. It is highly optimized for mobile devices when listing actions/options.</p>
            </div>
          </D1Window>

          <!-- Fullscreen -->
          <D1Window fullscreen>
            <template #control="{ binds }">
              <D1Button
                label="Fullscreen Mode"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Fullscreen Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>This window expands to fill the entire viewport, ignoring margin boundaries. Perfect for complex media editing or photo gallery views.</p>
            </div>
            <template #footer="{ classesWindow }">
              <div class="demo-window-page__footer">
                <D1Button
                  label="Close Fullscreen"
                  primary
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Axis Alignments (Menu Mode)">
        <DemoFlex>
          <!-- Axis X -->
          <D1Window
            adaptive="menu"
            axis="x"
            :indent="8"
          >
            <template #control="{ binds }">
              <D1Button
                label="Horizontal (Axis X)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Aligns horizontally (left or right) relative to the trigger button.</p>
            </div>
          </D1Window>

          <!-- Axis Y -->
          <D1Window
            adaptive="menu"
            axis="y"
            :indent="8"
          >
            <template #control="{ binds }">
              <D1Button
                label="Vertical (Axis Y)"
                secondary
                v-bind="binds"
              />
            </template>
            <div class="demo-window-page__content">
              <p>Aligns vertically (top or bottom) relative to the trigger button.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Predefined Widths">
        <DemoFlex>
          <!-- Size SM -->
          <D1Window width="sm">
            <template #control="{ binds }">
              <D1Button
                label="Small Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Small Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>This window is configured with `width="sm"`.</p>
            </div>
          </D1Window>

          <!-- Size MD -->
          <D1Window width="md">
            <template #control="{ binds }">
              <D1Button
                label="Medium Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Medium Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>This window has `width="md"` (standard default size).</p>
            </div>
          </D1Window>

          <!-- Size LG -->
          <D1Window width="lg">
            <template #control="{ binds }">
              <D1Button
                label="Large Width"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Large Window</h3>
            </template>
            <div class="demo-window-page__content">
              <p>This window has `width="lg"` configuration.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Alignments">
        <DemoFlex>
          <!-- Left Full -->
          <D1Window alignment="leftFull">
            <template #control="{ binds }">
              <D1Button
                label="Left Full Side"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Sidebar Left</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Aligns to the left side and expands to full viewport height. Great for navigation overlays.</p>
            </div>
          </D1Window>

          <!-- Right Full -->
          <D1Window alignment="rightFull">
            <template #control="{ binds }">
              <D1Button
                label="Right Full Side"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Sidebar Right</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Aligns to the right side and expands to full height. Standard pattern for side settings/drawers.</p>
            </div>
          </D1Window>

          <!-- Bottom Full -->
          <D1Window alignment="bottomFull">
            <template #control="{ binds }">
              <D1Button
                label="Bottom Full"
                secondary
                v-bind="binds"
              />
            </template>
            <template #title>
              <h3 class="demo-window-page__title">Bottom Dock</h3>
            </template>
            <div class="demo-window-page__content">
              <p>Aligns to the bottom edge and stretches full width across the viewport.</p>
            </div>
          </D1Window>
        </DemoFlex>
      </D1Group>

      <D1Group label="Static Mode (Inline Flow)">
        <D1Window
          :staticMode="true"
          adaptive="static"
        >
          <template #title>
            <h3 class="demo-window-page__title">Static Window</h3>
          </template>
          <div class="demo-window-page__content">
            <p>This window has `staticMode: true`. It renders directly inline within the normal document flow. It remains visible at all times, bypassing overlays, dialog backdrops, and active toggle transitions.</p>
          </div>
        </D1Window>
      </D1Group>

      <D1Group label="Programmatic Control (V-Model)">
        <DemoFlex>
          <D1Button
            :label="openControlled ? 'Close Programmatically' : 'Open Programmatically'"
            primary
            @click="openControlled = !openControlled"
          />
        </DemoFlex>
        <D1Window v-model:open="openControlled">
          <template #title>
            <h3 class="demo-window-page__title">Controlled Window</h3>
          </template>
          <div class="demo-window-page__content">
            <p>This window is entirely driven by external reactive state via standard `v-model:open` binding.</p>
          </div>
          <template #footer="{ classesWindow }">
            <div class="demo-window-page__footer">
              <D1Button
                label="Close via v-model"
                primary
                :class="classesWindow.close"
              />
            </div>
          </template>
        </D1Window>
        <DemoValue :value="openControlled" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-window-page {
  &__title {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg) 0;
    margin: 0;
  }

  &__content {
    padding: var(--d1-sys-spacing-md) var(--d1-sys-spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--d1-sys-spacing-xs);
  }

  &__footer {
    padding: var(--d1-sys-spacing-sm) var(--d1-sys-spacing-lg) var(--d1-sys-spacing-md);
    display: flex;
    justify-content: flex-end;
    gap: var(--d1-sys-spacing-md);
  }
}
</style>
