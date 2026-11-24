<script setup lang="ts">
import { ref } from 'vue'
import type { BulletItemProps } from '@dxtmisha/d1'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeSize = ref<NonNullable<BulletItemProps['size']>>('md')
const isRtl = ref<boolean>(false)
const isLoading = ref<boolean>(true)
const sizes: Array<NonNullable<BulletItemProps['size']>> = ['sm', 'md', 'lg']
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="BulletItem">
    <D1Section>
      <D1Group label="Size Variants & Palette Colors">
        <DemoFlex>
          <D1Button
            v-for="itemSize in sizes"
            :key="itemSize"
            :label="'size: ' + itemSize"
            size="sm"
            :outline="activeSize !== itemSize"
            @click="activeSize = itemSize"
          />
          <D1Button
            label="Toggle RTL"
            size="sm"
            :outline="!isRtl"
            @click="isRtl = !isRtl"
          />
        </DemoFlex>
        <DemoValue label="state" :value="{ activeSize, isRtl }"/>
        <DemoBox :dir="isRtl ? 'rtl' : 'ltr'">
          <ul data-testid="demo-bullet-item-list" style="margin: 0; padding: 0; list-style: none;">
            <D1BulletItem
              data-testid="demo-bullet-item-reactive"
              :size="activeSize"
              description="Configurable size bullet item with logical marker alignment"
              description-id="demo-bullet-item-custom-id"
            />
            <D1BulletItem
              data-testid="demo-bullet-item-palette-blue"
              size="md"
              palette="blue"
              description="Blue palette bullet item"
            />
            <D1BulletItem
              data-testid="demo-bullet-item-palette-green"
              size="lg"
              palette="green"
              description="Green palette large bullet item"
            />
          </ul>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots (#description, #default) & Numeric Zero">
        <DemoBox>
          <ul style="margin: 0; padding: 0; list-style: none;">
            <D1BulletItem data-testid="demo-bullet-item-desc-slot">
              <template #description>
                <span>Rendered via <strong>#description</strong> slot</span>
              </template>
            </D1BulletItem>
            <D1BulletItem data-testid="demo-bullet-item-default-slot">
              <span>Rendered via <em>#default</em> slot</span>
            </D1BulletItem>
            <D1BulletItem
              data-testid="demo-bullet-item-zero"
              :description="0"
            />
          </ul>
        </DemoBox>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button label="Toggle Skeleton" size="sm" :outline="!isLoading" @click="isLoading = !isLoading"/>
        </DemoFlex>
        <DemoValue label="isLoading" :value="isLoading"/>
        <DemoBox>
          <D1Skeleton :active="isLoading">
            <ul style="margin: 0; padding: 0; list-style: none;">
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
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
