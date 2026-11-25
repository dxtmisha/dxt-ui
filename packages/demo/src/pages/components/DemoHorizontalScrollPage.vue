<script setup lang="ts">
import { ref } from 'vue'
import type { HorizontalScrollExpose } from '@dxtmisha/constructor/HorizontalScroll'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteItems = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'stone'] as const
const exposeRef = ref<HorizontalScrollExpose>()
const exposeOutput = ref<string>('Not inspected')
const isMounted = ref<boolean>(true)

const inspectElement = (): void => {
  const element = exposeRef.value?.getElement()
  exposeOutput.value = element
    ? `${element.tagName} (scrollLeft=${Math.round(element.scrollLeft)}, scrollWidth=${element.scrollWidth})`
    : 'undefined'
}

const scrollToSelected = (): void => {
  exposeRef.value?.toSelected()
  inspectElement()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="HorizontalScroll">
    <D1Section>
      <D1Group label="Basic (Scrollable Dummies & Selected Slot)">
        <D1HorizontalScroll data-testid="hs-basic">
          <template #default="{ classItem, classItemSelected }">
            <D1Dummy
              v-for="(color, index) in paletteItems"
              :key="color"
              :class="[classItem, index === 4 ? classItemSelected : undefined]"
              class="demo-horizontal-scroll-page__card"
              size="md"
              :palette="color"
            />
          </template>
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Align Variants">
        <D1HorizontalScroll align="left" data-testid="hs-align-left">
          <template #default="{ binds }">
            <D1Dummy v-for="item in 3" :key="item" v-bind="binds" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>

        <D1HorizontalScroll align="center" data-testid="hs-align-center">
          <template #default="{ binds }">
            <D1Dummy v-for="item in 3" :key="item" v-bind="binds" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>

        <D1HorizontalScroll align="right" data-testid="hs-align-right">
          <template #default="{ binds }">
            <D1Dummy v-for="item in 3" :key="item" v-bind="binds" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>

        <D1HorizontalScroll align="block" data-testid="hs-align-block">
          <template #default="{ binds }">
            <D1Dummy v-for="item in 3" :key="item" v-bind="binds" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Bleed (True vs False)">
        <D1HorizontalScroll :bleed="true" data-testid="hs-bleed-true">
          <template #default="{ classItem }">
            <D1Dummy v-for="item in 6" :key="item" :class="classItem" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>

        <D1HorizontalScroll :bleed="false" data-testid="hs-bleed-false">
          <template #default="{ classItem }">
            <D1Dummy v-for="item in 6" :key="item" :class="classItem" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Polymorphic Tags (div, section, nav, ul)">
        <D1HorizontalScroll tag="section" data-testid="hs-tag-section">
          <template #default="{ classItem }">
            <D1Dummy v-for="item in 4" :key="item" :class="classItem" class="demo-horizontal-scroll-page__card" size="sm" />
          </template>
        </D1HorizontalScroll>

        <D1HorizontalScroll tag="nav" aria-label="Scrollable categories" data-testid="hs-tag-nav">
          <template #default="{ classItem }">
            <D1Button v-for="item in 6" :key="item" :class="classItem" :label="`Category ${item}`" outline />
          </template>
        </D1HorizontalScroll>

        <D1HorizontalScroll tag="ul" class="demo-horizontal-scroll-page__list" data-testid="hs-tag-ul">
          <template #default="{ classItem }">
            <li v-for="item in 5" :key="item" :class="classItem" class="demo-horizontal-scroll-page__list-item">
              List Item {{ item }}
            </li>
          </template>
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Expose API (getElement & toSelected)">
        <DemoFlex>
          <D1Button label="Scroll to Selected" data-testid="hs-to-selected-btn" @click="scrollToSelected" />
          <D1Button label="Inspect Element" outline data-testid="hs-inspect-btn" @click="inspectElement" />
        </DemoFlex>
        <D1HorizontalScroll ref="exposeRef" data-testid="hs-expose">
          <template #default="{ classItem, classItemSelected }">
            <div
              v-for="item in 14"
              :key="item"
              :class="[classItem, item === 11 ? classItemSelected : undefined]"
              class="demo-horizontal-scroll-page__tile demo-horizontal-scroll-page__tile--wide"
            >
              {{ item === 11 ? 'Selected #11' : `Tile #${item}` }}
            </div>
          </template>
        </D1HorizontalScroll>
        <DemoValue :value="exposeOutput" label="Expose Output" />
      </D1Group>

      <D1Group label="Accessibility & Keyboard Scroll">
        <D1HorizontalScroll
          role="region"
          aria-label="Featured items rail"
          tabindex="0"
          data-testid="hs-a11y"
        >
          <template #default="{ classItem }">
            <D1Button v-for="item in 6" :key="item" :class="classItem" :label="`Action ${item}`" />
          </template>
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Boundary & Narrow Container">
        <D1HorizontalScroll data-testid="hs-empty" />

        <DemoBox class="demo-horizontal-scroll-page__narrow">
          <D1HorizontalScroll data-testid="hs-narrow">
            <template #default="{ classItem }">
              <div :class="classItem" class="demo-horizontal-scroll-page__tile">
                UnbrokenLongTokenWithoutSpaces_1234567890
              </div>
              <div :class="classItem" class="demo-horizontal-scroll-page__tile">
                Unicode: Привет • Học tiếng Việt • 日本語 🚀
              </div>
              <div :class="classItem" class="demo-horizontal-scroll-page__tile">
                0
              </div>
            </template>
          </D1HorizontalScroll>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle (v-if Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isMounted ? 'Unmount' : 'Mount'"
            data-testid="hs-toggle-mount"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <D1HorizontalScroll v-if="isMounted" data-testid="hs-lifecycle">
          <template #default="{ classItem, classItemSelected }">
            <div :class="[classItem, classItemSelected]" class="demo-horizontal-scroll-page__tile">
              Mounted Item
            </div>
          </template>
        </D1HorizontalScroll>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-horizontal-scroll-page {
  &__card {
    width: 220px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }

  &__list-item,
  &__tile {
    padding: 12px 16px;
    border: 1px solid currentColor;
    border-radius: 8px;
    white-space: nowrap;

    &--wide {
      min-width: 180px;
    }
  }

  &__narrow {
    max-width: 260px;
  }
}
</style>
