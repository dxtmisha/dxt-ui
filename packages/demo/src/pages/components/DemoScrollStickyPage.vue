<script setup lang="ts">
import { ref } from 'vue'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isVisible = ref<boolean>(true)
const contentWidth = ref<number>(1200)
const lifecycleMounted = ref<boolean>(true)

const toggleWidth = (): void => {
  contentWidth.value = contentWidth.value === 1200 ? 1800 : 1200
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ScrollSticky">
    <D1Section class="demo-scroll-sticky-page">
      <D1Group label="Sticky Horizontal Scroll Synchronization">
        <p>Scroll the page vertically to observe the synchronized horizontal scrollbar sticking to the bottom of the viewport.</p>
        <DemoFlex>
          <D1Button
            :label="isVisible ? 'Hide Sticky Scrollbar' : 'Show Sticky Scrollbar'"
            size="sm"
            outline
            @click="isVisible = !isVisible"
          />
          <D1Button
            label="Toggle Content Width (1200px / 1800px)"
            size="sm"
            outline
            @click="toggleWidth"
          />
        </DemoFlex>
        <DemoValue label="state" :value="{ visible: isVisible, contentWidth }"/>

        <div class="demo-scroll-sticky-page__spacer-top">
          Scroll down to inspect sticky scrollbar behavior
        </div>

        <D1ScrollSticky
          data-testid="demo-scroll-sticky-main"
          :visible="isVisible"
          class="demo-scroll-sticky-page__container"
        >
          <template #default="{ onResize }">
            <div
              class="demo-scroll-sticky-page__wide-content"
              :class="{ 'demo-scroll-sticky-page__wide-content--xl': contentWidth === 1800 }"
            >
              <h3>Synchronized Horizontal Scroll ({{ contentWidth }}px)</h3>
              <p>This area exceeds the 480px container width to trigger synchronized horizontal scrolling.</p>
              <D1Button label="Recalculate Width (onResize)" size="sm" @click="onResize"/>
              <div class="demo-scroll-sticky-page__banner">
                Inner scrollable area
              </div>
            </div>
          </template>
        </D1ScrollSticky>

        <div class="demo-scroll-sticky-page__spacer-bottom">
          Scroll up to inspect sticky pinning again
        </div>
      </D1Group>

      <D1Group label="Custom Replacement Slots (#context & #scroll)">
        <D1ScrollSticky
          data-testid="demo-scroll-sticky-slots"
          class="demo-scroll-sticky-page__container"
        >
          <template #context="{ bindsContext }">
            <div v-bind="bindsContext" data-testid="demo-ss-custom-context">
              <div class="demo-scroll-sticky-page__wide-content">
                Custom #context slot content (1200px wide)
              </div>
            </div>
          </template>
          <template #scroll="{ bindsScroll }">
            <div v-bind="bindsScroll" data-testid="demo-ss-custom-scroll"/>
          </template>
        </D1ScrollSticky>
      </D1Group>

      <D1Group label="Boundary Cases (No Overflow & Narrow Container)">
        <DemoFlex>
          <DemoBox class="demo-scroll-sticky-page__narrow">
            <D1ScrollSticky data-testid="demo-scroll-sticky-narrow">
              <div class="demo-scroll-sticky-page__wide-content">
                Wide content inside a 260px narrow container (Tiếng Việt / Кириллица 🚀)
              </div>
            </D1ScrollSticky>
          </DemoBox>
          <DemoBox class="demo-scroll-sticky-page__narrow">
            <D1ScrollSticky data-testid="demo-scroll-sticky-fit">
              <div>Fits within container without horizontal overflow.</div>
            </D1ScrollSticky>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount ScrollSticky' : 'Mount ScrollSticky'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted" class="demo-scroll-sticky-page__narrow">
          <D1ScrollSticky>
            <div class="demo-scroll-sticky-page__wide-content">
              Mounted and unmounted cleanly via v-if.
            </div>
          </D1ScrollSticky>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-scroll-sticky-page {
  &__spacer-top {
    height: 40vh;
    display: flex;
    align-items: flex-end;
    padding-bottom: 16px;
    color: var(--d1-sys-palette-outline);
  }

  &__spacer-bottom {
    height: 40vh;
    padding-top: 16px;
    color: var(--d1-sys-palette-outline);
  }

  &__container {
    max-width: 480px;
    border: 1px solid var(--d1-sys-border);
    border-radius: var(--d1-sys-rounded-lg);
    padding: var(--d1-ref-spacing-4);
  }

  &__wide-content {
    width: 1200px;

    &--xl {
      width: 1800px;
    }
  }

  &__banner {
    height: 220px;
    background: linear-gradient(135deg, var(--d1-sys-palette-primaryVariant), var(--d1-sys-palette-secondaryVariant));
    margin-top: var(--d1-ref-spacing-4);
    border-radius: var(--d1-sys-rounded-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  &__narrow {
    max-width: 260px;
    width: 100%;
  }
}
</style>
