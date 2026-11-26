<script setup lang="ts">
import { defineComponent, h, ref, type FunctionalComponent } from 'vue'
import { D1Button } from '@dxtmisha/d1/D1Button'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isActive = ref<boolean>(true)
const dynamicLength = ref<number | [number, number] | string>(3)
const dynamicLabel = ref<string | number | undefined>(undefined)
const isMountedDemo = ref<boolean>(true)
const itemClickCount = ref<number>(0)

const FunctionalBadgeTag: FunctionalComponent = (props, { slots }) => h(
  'article',
  props,
  slots.default ? slots.default() : 'Functional Component Fallback'
)

const ObjectCardTag = defineComponent({
  name: 'ObjectCardTag',
  setup(_, { slots }) {
    return () => h('section', slots.default ? slots.default() : 'Object Component Fallback')
  }
})

const onItemClick = (): void => {
  itemClickCount.value += 1
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SkeletonItem">
    <D1Section>
      <D1Group label="All 6 Token Variants Inside Active Skeleton">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton Active" @click="isActive = !isActive"/>
          <DemoValue label="Active" :value="isActive"/>
        </DemoFlex>
        <DemoBox size="lg">
          <D1Skeleton :active="isActive">
            <div class="demo-skeleton-item-page">
              <D1SkeletonItem text label="Text token line"/>
              <D1SkeletonItem text-variant label="Text variant token line"/>
              <D1SkeletonItem background class="demo-skeleton-item-page__box" label="Background"/>
              <D1SkeletonItem background-variant class="demo-skeleton-item-page__box" label="Background Variant"/>
              <D1SkeletonItem border class="demo-skeleton-item-page__bordered" label="Border"/>
              <D1SkeletonItem border-variant class="demo-skeleton-item-page__bordered" label="Border Variant"/>
            </div>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Data Formats (label, numeric length, [min, max] range, string length)">
        <DemoFlex align="center">
          <D1Button label="Length = 4" @click="dynamicLabel = undefined; dynamicLength = 4"/>
          <D1Button label="Range [2, 6]" @click="dynamicLabel = undefined; dynamicLength = [2, 6]"/>
          <D1Button label="String Length" @click="dynamicLabel = undefined; dynamicLength = 'Custom placeholder words'"/>
          <D1Button label="Label = 0" @click="dynamicLabel = 0"/>
          <D1Button label="Label = 'Static'" @click="dynamicLabel = 'Static Override'"/>
        </DemoFlex>
        <D1Skeleton active>
          <div class="demo-skeleton-item-page">
            <D1SkeletonItem text :length="dynamicLength" :label="dynamicLabel" data-testid="dynamic-skeleton-item"/>
            <D1SkeletonItem text :length="3"/>
            <D1SkeletonItem text :length="[2, 5]"/>
            <D1SkeletonItem text length="Custom string length"/>
            <D1SkeletonItem text :label="0"/>
            <D1SkeletonItem text :label="42"/>
          </div>
        </D1Skeleton>
        <DemoValue label="Current Length" :value="dynamicLength"/>
        <DemoValue label="Current Label" :value="dynamicLabel ?? '(auto)'"/>
      </D1Group>

      <D1Group label="Tags (HTML Tags, Object Component, Functional Component) & Slots">
        <D1Skeleton active>
          <div class="demo-skeleton-item-page">
            <D1SkeletonItem tag="h4" text label="Heading h4"/>
            <D1SkeletonItem tag="span" text-variant label="Inline span"/>
            <D1SkeletonItem tag="p" text :length="5"/>
            <D1SkeletonItem text>
              <span>Default Slot Content</span>
            </D1SkeletonItem>
            <D1SkeletonItem :tag="D1Button" background is-skeleton>
              Component Slot (D1Button)
            </D1SkeletonItem>
            <D1SkeletonItem :tag="ObjectCardTag" background/>
            <D1SkeletonItem :tag="FunctionalBadgeTag" border/>
            <D1SkeletonItem :tag="FunctionalBadgeTag" border>
              <span>Functional Component Slot</span>
            </D1SkeletonItem>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Custom itemAttrs, Accessibility & Events Merging">
        <DemoFlex align="center">
          <D1Skeleton :active="false">
            <D1SkeletonItem
              text
              label="Clickable Item with itemAttrs"
              :item-attrs="{ 'data-custom': 'skeleton-attr', 'role': 'status', 'aria-label': 'Loading profile summary', 'onClick': onItemClick }"
            />
          </D1Skeleton>
          <D1Skeleton active>
            <D1SkeletonItem text :length="3" data-testid="decorative-a11y"/>
            <D1SkeletonItem text :length="3" aria-label="Accessible loading heading" data-testid="labelled-a11y"/>
          </D1Skeleton>
        </DemoFlex>
        <DemoValue label="itemAttrs Click Count" :value="itemClickCount"/>
      </D1Group>

      <D1Group label="Boundary, Edge Cases (XSS, Empty, Long Text, Unicode) & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-skeleton-item-page__narrow">
          <D1Skeleton v-if="isMountedDemo" :active="false">
            <div class="demo-skeleton-item-page">
              <D1SkeletonItem text :label="''" :length="2"/>
              <D1SkeletonItem text :length="0"/>
              <D1SkeletonItem text label="<img src=x onerror=alert(1)>"/>
              <D1SkeletonItem text length="<script>alert(2)</script>"/>
              <D1SkeletonItem text label="Привет · Học tiếng Việt · 你好 · 🚀"/>
              <D1SkeletonItem text class="demo-skeleton-item-page__unbroken" label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"/>
            </div>
          </D1Skeleton>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-skeleton-item-page {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 44px;
  }

  &__bordered {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 44px;
    border-width: 2px;
    border-style: solid;
  }

  &__narrow {
    max-width: 240px;
  }

  &__unbroken {
    overflow-wrap: anywhere;
  }
}
</style>
