<script setup lang="ts">
import { ref } from 'vue'
import type { BulletItemProps } from '@dxtmisha/d1'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeSize = ref<NonNullable<BulletItemProps['size']>>('md')
const isRtl = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const sizeOptions: ReadonlyArray<NonNullable<BulletItemProps['size']>> = ['sm', 'md', 'lg']

const allPaletteOptions: ReadonlyArray<NonNullable<BulletItemProps['palette']>> = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="BulletItem">
    <D1Section>
      <D1Group label="Size Variants (sm, md, lg) & RTL Alignment">
        <DemoFlex>
          <D1Button
            v-for="sizeOption in sizeOptions"
            :key="sizeOption"
            :data-testid="`demo-bullet-item-size-btn-${sizeOption}`"
            :label="`size: ${sizeOption}`"
            size="sm"
            :outline="activeSize !== sizeOption"
            @click="activeSize = sizeOption"
          />
          <D1Button
            data-testid="demo-bullet-item-rtl-toggle"
            label="Toggle RTL"
            size="sm"
            :outline="!isRtl"
            @click="isRtl = !isRtl"
          />
        </DemoFlex>
        <DemoValue label="state" :value="{ activeSize, isRtl }"/>
        <DemoBox :dir="isRtl ? 'rtl' : 'ltr'">
          <ul data-testid="demo-bullet-item-list" class="demo-bullet-item-page__list">
            <D1BulletItem
              data-testid="demo-bullet-item-reactive"
              :size="activeSize"
              description="Configurable size bullet item with logical marker alignment"
              description-id="demo-bullet-item-custom-id"
            />
            <D1BulletItem
              v-for="sizeOption in sizeOptions"
              :key="`static-${sizeOption}`"
              :data-testid="`demo-bullet-item-static-${sizeOption}`"
              :size="sizeOption"
              :description="`Static ${sizeOption} size bullet item`"
            />
          </ul>
        </DemoBox>
      </D1Group>

      <D1Group label="Palettes (All 24 Tokens)">
        <DemoBox>
          <ul data-testid="demo-bullet-item-palettes" class="demo-bullet-item-page__palette-grid">
            <D1BulletItem
              v-for="paletteName in allPaletteOptions"
              :key="paletteName"
              :data-testid="`demo-bullet-item-palette-${paletteName}`"
              size="md"
              :palette="paletteName"
              :description="paletteName"
            />
          </ul>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots (#description, #default & Combined)">
        <DemoBox>
          <ul class="demo-bullet-item-page__list">
            <D1BulletItem data-testid="demo-bullet-item-desc-slot">
              <template #description="slotProperties">
                <span>
                  Rendered via <strong>#description</strong> slot [props: {{ JSON.stringify(slotProperties) }}]
                </span>
              </template>
            </D1BulletItem>
            <D1BulletItem data-testid="demo-bullet-item-default-slot">
              <template #default="slotProperties">
                <span>
                  Rendered via <em>#default</em> slot [props: {{ JSON.stringify(slotProperties) }}]
                </span>
              </template>
            </D1BulletItem>
            <D1BulletItem
              data-testid="demo-bullet-item-combined-slot"
              description="Prop description text"
            >
              <span> + trailing #default slot</span>
            </D1BulletItem>
          </ul>
        </DemoBox>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            data-testid="demo-bullet-item-skeleton-toggle"
            label="Toggle Skeleton"
            size="sm"
            :outline="!isSkeletonActive"
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoValue label="isSkeletonActive" :value="isSkeletonActive"/>
        <DemoBox>
          <D1Skeleton :active="isSkeletonActive">
            <ul class="demo-bullet-item-page__list">
              <D1BulletItem
                data-testid="demo-bullet-item-skeleton-1"
                is-skeleton
                description="First loading bullet line"
              />
              <D1BulletItem
                data-testid="demo-bullet-item-skeleton-2"
                is-skeleton
                description="Second loading bullet line with longer text"
              />
            </ul>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility (Semantic List & descriptionId)">
        <DemoBox>
          <ul aria-label="Accessible bullet items" class="demo-bullet-item-page__list">
            <D1BulletItem
              data-testid="demo-bullet-item-a11y"
              description-id="demo-bullet-item-a11y-desc"
              description="Referenced bullet item description"
            />
          </ul>
          <D1Button
            data-testid="demo-bullet-item-a11y-trigger"
            label="Action Described by BulletItem"
            size="sm"
            outline
            aria-describedby="demo-bullet-item-a11y-desc"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary, Edge Cases & Narrow Container">
        <DemoBox>
          <ul class="demo-bullet-item-page__list">
            <D1BulletItem data-testid="demo-bullet-item-empty"/>
            <D1BulletItem data-testid="demo-bullet-item-empty-string" description=""/>
            <D1BulletItem data-testid="demo-bullet-item-whitespace" description="   "/>
            <D1BulletItem data-testid="demo-bullet-item-zero" :description="0"/>
            <D1BulletItem data-testid="demo-bullet-item-negative" :description="-99"/>
            <D1BulletItem data-testid="demo-bullet-item-decimal" :description="12.34"/>
            <D1BulletItem data-testid="demo-bullet-item-single-char" description="A"/>
            <D1BulletItem data-testid="demo-bullet-item-unicode" description="Café & Résumé — 日本語 🚀"/>
            <D1BulletItem data-testid="demo-bullet-item-xss" description="<img src=x onerror=alert(1)>"/>
          </ul>
        </DemoBox>
        <DemoBox class="demo-bullet-item-page__narrow">
          <ul class="demo-bullet-item-page__list">
            <D1BulletItem
              data-testid="demo-bullet-item-long"
              description="Very long multi-sentence bullet item description intended to verify clean wrapping inside a constrained box"
            />
            <D1BulletItem
              data-testid="demo-bullet-item-unbroken"
              description="SupercalifragilisticexpialidociousBulletItemWithoutSpaces"
            />
          </ul>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mounting (v-if)">
        <DemoFlex>
          <D1Button
            data-testid="demo-bullet-item-mount-toggle"
            :label="isMounted ? 'Unmount BulletItem' : 'Mount BulletItem'"
            size="sm"
            :outline="!isMounted"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <DemoValue label="isMounted" :value="isMounted"/>
        <DemoBox>
          <ul class="demo-bullet-item-page__list">
            <D1BulletItem
              v-if="isMounted"
              data-testid="demo-bullet-item-conditional"
              description="Conditionally mounted bullet item"
            />
          </ul>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-bullet-item-page {
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 8px 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__narrow {
    max-width: 220px;
  }
}
</style>
