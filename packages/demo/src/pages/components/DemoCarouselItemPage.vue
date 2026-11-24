<script setup lang="ts">
import { ref } from 'vue'
import type { CarouselItemExpose } from '@dxtmisha/constructor/CarouselItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const createSlideDataUri = (title: string, color: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="${color}"/><circle cx="520" cy="90" r="56" fill="rgba(255,255,255,0.22)"/><text x="320" y="195" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="36" font-weight="700">${title}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const slideImagePrimary = createSlideDataUri('Slide 1', '#2563eb')
const slideImageSecondary = createSlideDataUri('Slide 2', '#0d9488')
const slideImageTertiary = createSlideDataUri('Slide 3', '#7c3aed')

const activeSlide = ref<number>(1)
const isSkeleton = ref<boolean>(true)
const exposeRef = ref<CarouselItemExpose>()
const exposeOutput = ref<string>('Click a button to inspect exposed API')

const inspectExpose = (): void => {
  if (!exposeRef.value) {
    return
  }

  exposeOutput.value = `isSelected=${exposeRef.value.isSelected()}, getSlide=${exposeRef.value.getSlide()}, getValue=${String(exposeRef.value.getValue())}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CarouselItem">
    <D1Section>
      <D1Group label="Basic & Selection States">
        <div class="demo-carousel-item-page__track" data-testid="demo-ci-basic">
          <D1CarouselItem
            class="demo-carousel-item-page__slide"
            data-testid="demo-ci-selected"
            :slide="1"
            :total="3"
            :selected="activeSlide === 1"
            value="slide-1"
            :image="slideImagePrimary"
            @click="activeSlide = 1"
          >
            <template #default="{ selected, slide }">
              <div class="demo-carousel-item-page__caption">
                Slide {{ slide }} — {{ selected ? 'Selected' : 'Inactive' }}
              </div>
            </template>
          </D1CarouselItem>

          <D1CarouselItem
            class="demo-carousel-item-page__slide"
            data-testid="demo-ci-unselected"
            :slide="2"
            :total="3"
            :selected="activeSlide === 2"
            value="slide-2"
            :image="slideImageSecondary"
            @click="activeSlide = 2"
          >
            <template #default="{ selected, slide }">
              <div class="demo-carousel-item-page__caption">
                Slide {{ slide }} — {{ selected ? 'Selected' : 'Inactive' }}
              </div>
            </template>
          </D1CarouselItem>

          <D1CarouselItem
            class="demo-carousel-item-page__slide"
            data-testid="demo-ci-zero"
            :slide="0"
            :total="3"
            :selected="activeSlide === 0"
            :value="0"
            :image="slideImageTertiary"
            @click="activeSlide = 0"
          >
            <template #default="{ slide }">
              <div class="demo-carousel-item-page__caption">
                Numeric zero slide ({{ slide }})
              </div>
            </template>
          </D1CarouselItem>
        </div>
        <DemoFlex>
          <D1Button data-testid="demo-ci-select-1" size="sm" outline label="Select Slide 1" @click="activeSlide = 1" />
          <D1Button data-testid="demo-ci-select-2" size="sm" outline label="Select Slide 2" @click="activeSlide = 2" />
          <D1Button data-testid="demo-ci-select-0" size="sm" outline label="Select Slide 0" @click="activeSlide = 0" />
        </DemoFlex>
        <DemoValue data-testid="demo-ci-active-output" :value="activeSlide" />
      </D1Group>

      <D1Group label="Snap Alignments">
        <div class="demo-carousel-item-page__grid" data-testid="demo-ci-snap">
          <D1CarouselItem snap="start" slide="start" :total="4" selected>
            <DemoBox>snap="start"</DemoBox>
          </D1CarouselItem>
          <D1CarouselItem snap="center" slide="center" :total="4">
            <DemoBox>snap="center"</DemoBox>
          </D1CarouselItem>
          <D1CarouselItem snap="end" slide="end" :total="4">
            <DemoBox>snap="end"</DemoBox>
          </D1CarouselItem>
          <D1CarouselItem snap="none" slide="none" :total="4">
            <DemoBox>snap="none"</DemoBox>
          </D1CarouselItem>
        </div>
      </D1Group>

      <D1Group label="Image & Image Attributes">
        <div class="demo-carousel-item-page__grid" data-testid="demo-ci-images">
          <D1CarouselItem
            class="demo-carousel-item-page__slide"
            :slide="1"
            :total="2"
            selected
            :image="slideImagePrimary"
            :image-attrs="{ alt: 'Primary banner', size: 'cover' }"
          />
          <D1CarouselItem
            class="demo-carousel-item-page__slide"
            :slide="2"
            :total="2"
            :image="{ value: slideImageSecondary, alt: 'Object image banner', size: 'contain' }"
          />
        </div>
      </D1Group>

      <D1Group label="Custom Tag, ARIA & Slots">
        <div class="demo-carousel-item-page__grid" data-testid="demo-ci-aria">
          <D1CarouselItem
            data-testid="demo-ci-custom-aria"
            tag="article"
            role="listitem"
            aria-label="Featured promotional slide"
            :slide="1"
            :total="5"
            selected
          >
            <DemoBox>Custom tag="article", role="listitem", custom aria-label</DemoBox>
          </D1CarouselItem>

          <D1CarouselItem
            data-testid="demo-ci-empty"
            :slide="2"
            :total="5"
          >
            <DemoBox class="demo-carousel-item-page__wrap">Long unbroken text: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA &amp; Tiếng Việt / Кириллица / 🚀</DemoBox>
          </D1CarouselItem>
        </div>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            data-testid="demo-ci-skeleton-toggle"
            size="sm"
            outline
            label="Toggle Skeleton"
            @click="isSkeleton = !isSkeleton"
          />
        </DemoFlex>
        <D1Skeleton :active="isSkeleton">
          <div class="demo-carousel-item-page__grid">
            <D1CarouselItem
              class="demo-carousel-item-page__slide"
              data-testid="demo-ci-skeleton"
              :is-skeleton="isSkeleton"
              :slide="1"
              :total="2"
              selected
              :image="slideImagePrimary"
            >
              <DemoBox>Skeleton slide content</DemoBox>
            </D1CarouselItem>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Events & Exposed API">
        <div class="demo-carousel-item-page__grid">
          <D1CarouselItem
            ref="exposeRef"
            class="demo-carousel-item-page__slide"
            data-testid="demo-ci-events"
            :slide="4"
            :total="10"
            selected
            value="promo-4"
            :detail="{ section: 'hero' }"
            :image="slideImageTertiary"
            @click="(event, value) => onEvent('click', event, value)"
            @click-lite="(value) => onEvent('clickLite', value)"
            @load="(image) => onEvent('load', image)"
          >
            <div class="demo-carousel-item-page__caption">Click slide to trigger events</div>
          </D1CarouselItem>
        </div>
        <DemoFlex>
          <D1Button data-testid="demo-ci-expose-btn" size="sm" outline label="Read Expose API" @click="inspectExpose" />
        </DemoFlex>
        <DemoValue data-testid="demo-ci-event-output" :value="eventName" />
        <DemoValue data-testid="demo-ci-expose-output" :value="exposeOutput" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-carousel-item-page {
  &__track {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  &__slide {
    min-height: 180px;
  }

  &__caption {
    padding: 8px 12px;
    color: #ffffff;
    font-weight: 600;
  }

  &__wrap {
    overflow-wrap: anywhere;
    min-width: 0;
  }
}
</style>
