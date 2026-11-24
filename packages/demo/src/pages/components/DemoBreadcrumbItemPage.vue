<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { BreadcrumbItemExpose } from '@dxtmisha/constructor/BreadcrumbItem'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isDisabled = ref<boolean>(false)
const isReadonly = ref<boolean>(false)
const isBack = ref<boolean>(false)
const isLoading = ref<boolean>(true)
const clickCount = ref<number>(0)
const lastPayload = ref<EventClickValue | null>(null)
const exposedInfo = ref<{ value?: unknown, detail?: unknown } | null>(null)
const itemRef = ref<BreadcrumbItemExpose | null>(null)

const handleActionClick = (_event: MouseEvent, value: EventClickValue): void => {
  clickCount.value += 1
  lastPayload.value = value
  exposedInfo.value = {
    value: itemRef.value?.getValue?.(),
    detail: itemRef.value?.getDetail?.()
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="BreadcrumbItem">
    <D1Section>
      <D1Group label="Navigation Trail States (Link, Action, Disabled & Current Page)">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-href"
              label="Home"
              icon="home"
              href="#home"
            />
            <D1BreadcrumbItem
              ref="itemRef"
              data-testid="demo-crumb-action"
              label="Products"
              icon="inventory_2"
              value="products"
              :detail="{ category: 'hardware' }"
              @click="handleActionClick"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-disabled"
              label="Archived"
              disabled
              value="archived"
              @click="handleActionClick"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-readonly"
              label="Workstations"
              readonly
            />
          </DemoFlex>
        </DemoBox>
        <DemoValue label="clickCount" :value="clickCount"/>
        <DemoValue label="lastPayload" :value="lastPayload"/>
        <DemoValue label="exposedInfo" :value="exposedInfo"/>
      </D1Group>

      <D1Group label="Interactive State Toggles (Disabled, Readonly & Back Mode)">
        <DemoFlex>
          <D1Button label="Toggle Disabled" size="sm" :outline="!isDisabled" @click="isDisabled = !isDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" :outline="!isReadonly" @click="isReadonly = !isReadonly"/>
          <D1Button label="Toggle Back Mode" size="sm" :outline="!isBack" @click="isBack = !isBack"/>
        </DemoFlex>
        <DemoValue label="states" :value="{ isDisabled, isReadonly, isBack }"/>
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-reactive"
              label="Parent Directory"
              icon="folder"
              :disabled="isDisabled"
              :readonly="isReadonly"
              :back="isBack"
              value="parent-dir"
              @click="handleActionClick"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Custom Arrow Icons, Default Slot & Numeric Zero">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-custom-arrow"
              label="Step"
              icon-arrow-right="arrow_forward"
              icon-arrow-left="arrow_back"
              :back="isBack"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-slot"
              href="#v2"
            >
              <span>Release Notes (v2.4)</span>
            </D1BreadcrumbItem>
            <D1BreadcrumbItem
              data-testid="demo-crumb-zero"
              :label="0"
              :value="0"
              readonly
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button label="Toggle Skeleton" size="sm" :outline="!isLoading" @click="isLoading = !isLoading"/>
        </DemoFlex>
        <DemoValue label="isLoading" :value="isLoading"/>
        <DemoBox>
          <D1Skeleton data-testid="demo-crumb-skeleton-root" :active="isLoading">
            <DemoFlex>
              <D1BreadcrumbItem
                data-testid="demo-crumb-skeleton-1"
                is-skeleton
                icon="home"
                label="Dashboard"
                href="#dashboard"
              />
              <D1BreadcrumbItem
                data-testid="demo-crumb-skeleton-2"
                is-skeleton
                label="Analytics Overview"
                readonly
              />
            </DemoFlex>
          </D1Skeleton>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
