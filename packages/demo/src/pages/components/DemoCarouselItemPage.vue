<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { CarouselItemExpose, EventClickValue } from '@dxtmisha/constructor/CarouselItem'
import type { ImageEventData } from '@dxtmisha/constructor/Image'
import type { CarouselItemProps } from '@dxtmisha/d1/D1CarouselItem'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const snapModes: NonNullable<CarouselItemProps['snap']>[] = ['start', 'center', 'end', 'none']

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const createSlideDataUri = (title: string, color: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="${color}"/><circle cx="520" cy="90" r="56" fill="rgba(255,255,255,0.22)"/><text x="320" y="195" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="36" font-weight="700">${title}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const slideImagePrimary = createSlideDataUri('Slide 1', '#2563eb')
const slideImageSecondary = createSlideDataUri('Slide 2', '#0d9488')
const slideImageTertiary = createSlideDataUri('Slide 3', '#7c3aed')

const activeSlide = ref<number>(1)
const isSkeleton = ref<boolean>(true)
const isExposeSelected = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const exposeReference = ref<CarouselItemExpose | null>(null)
const exposeOutput = ref<string>('Click a button to inspect exposed API')

const handleClickEvent = (
  mouseEvent: MouseEvent,
  clickValue: EventClickValue
): void => {
  const payload = {
    eventType: mouseEvent.type,
    value: clickValue
  }
  onEvent('click', payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  onEvent('clickLite', clickValue)
  eventPayload.value = JSON.stringify(clickValue)
}

const handleLoadEvent = (imageEvent: ImageEventData): void => {
  const payload = {
    type: imageEvent.type,
    src: typeof imageEvent.image === 'string' ? imageEvent.image : imageEvent.image?.src
  }
  onEvent('load', payload)
  eventPayload.value = JSON.stringify(payload)
}

const readAllExpose = async (): Promise<void> => {
  await nextTick()
  if (!exposeReference.value) {
    return
  }

  exposeOutput.value = JSON.stringify({
    isSelected: exposeReference.value.isSelected(),
    getSlide: exposeReference.value.getSlide(),
    getValue: exposeReference.value.getValue?.(),
    getDetail: exposeReference.value.getDetail?.()
  })
}

const toggleExposeSelected = async (): Promise<void> => {
  isExposeSelected.value = !isExposeSelected.value
  await readAllExpose()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CarouselItem">
    <D1Section>
      <D1Group label="Basic & Selection States (Scoped Default Slot)">
        <div class="demo-carousel-item-page__track">
          <D1CarouselItem
            class="demo-carousel-item-page__slide"
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
            :slide="0"
            :total="3"
            :selected="activeSlide === 0"
            :value="0"
            :image="slideImageTertiary"
            @click="activeSlide = 0"
          >
            <template #default="{ selected, slide }">
              <div class="demo-carousel-item-page__caption">
                Numeric zero slide ({{ slide }}) — {{ selected ? 'Selected' : 'Inactive' }}
              </div>
            </template>
          </D1CarouselItem>
        </div>
        <DemoFlex>
          <D1Button size="sm" outline label="Select Slide 1" @click="activeSlide = 1"/>
          <D1Button size="sm" outline label="Select Slide 2" @click="activeSlide = 2"/>
          <D1Button size="sm" outline label="Select Slide 0" @click="activeSlide = 0"/>
        </DemoFlex>
        <DemoValue label="Active Slide" :value="activeSlide"/>
      </D1Group>

      <D1Group label="Snap Alignments (All 4)">
        <div class="demo-carousel-item-page__grid">
          <D1CarouselItem
            v-for="snapMode in snapModes"
            :key="snapMode"
            :snap="snapMode"
            :slide="snapMode"
            :total="4"
            :selected="snapMode === 'start'"
          >
            <DemoBox>snap="{{ snapMode }}"</DemoBox>
          </D1CarouselItem>
        </div>
      </D1Group>

      <D1Group label="Image & Image Attributes">
        <div class="demo-carousel-item-page__grid">
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

      <D1Group label="Links & Custom Tags (to, href, tag, role, ariaLabel)">
        <div class="demo-carousel-item-page__grid">
          <D1CarouselItem
            :slide="1"
            :total="4"
            selected
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DemoBox>Link Slide (href -> tag a)</DemoBox>
          </D1CarouselItem>

          <D1CarouselItem
            :slide="2"
            :total="4"
            selected
            to="/component-carousel-item"
          >
            <DemoBox>Router Link String (to -> tag a)</DemoBox>
          </D1CarouselItem>

          <D1CarouselItem
            :slide="3"
            :total="4"
            selected
            :to="{ name: 'home' }"
          >
            <DemoBox>Router Link Object (to -> tag a)</DemoBox>
          </D1CarouselItem>

          <D1CarouselItem
            tag="article"
            role="listitem"
            aria-label="Featured promotional slide"
            :slide="4"
            :total="4"
            selected
          >
            <DemoBox>Custom tag="article", role="listitem", custom aria-label</DemoBox>
          </D1CarouselItem>
        </div>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
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

      <D1Group label="Events & Expose API">
        <div class="demo-carousel-item-page__grid">
          <D1CarouselItem
            ref="exposeReference"
            class="demo-carousel-item-page__slide"
            :slide="4"
            :index="4"
            :total="10"
            :selected="isExposeSelected"
            value="promo-4"
            :detail="{ section: 'hero' }"
            :image="slideImageTertiary"
            @click="handleClickEvent"
            @click-lite="handleClickLiteEvent"
            @load="handleLoadEvent"
          >
            <div class="demo-carousel-item-page__caption">Click slide to trigger events</div>
          </D1CarouselItem>
        </div>
        <DemoFlex>
          <D1Button size="sm" outline label="Read Expose API" @click="readAllExpose"/>
          <D1Button size="sm" outline label="Toggle Selected & Read" @click="toggleExposeSelected"/>
        </DemoFlex>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <div class="demo-carousel-item-page__grid">
          <D1CarouselItem/>
          <D1CarouselItem slide="" total="" image=""/>
          <D1CarouselItem :slide="-1" :index="-1" :value="-1.5" selected>
            <DemoBox>Negative / Decimal (-1, -1.5)</DemoBox>
          </D1CarouselItem>
          <D1CarouselItem slide="A" :total="1" selected>
            <DemoBox>A</DemoBox>
          </D1CarouselItem>
          <D1CarouselItem :slide="2" :total="5" selected>
            <DemoBox class="demo-carousel-item-page__wrap">
              &lt;img src=x onerror=alert(1)&gt; — Tiếng Việt / Кириллица / 🚀
            </DemoBox>
          </D1CarouselItem>
          <DemoBox class="demo-carousel-item-page__narrow" size="sm">
            <D1CarouselItem :slide="3" :total="5" selected>
              <DemoBox class="demo-carousel-item-page__wrap">
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              </DemoBox>
            </D1CarouselItem>
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            size="sm"
            outline
            label="Toggle Mount"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <div v-if="isLifecycleMounted" class="demo-carousel-item-page__grid">
          <D1CarouselItem
            class="demo-carousel-item-page__slide"
            :slide="1"
            :total="1"
            selected
            :image="slideImagePrimary"
          >
            <div class="demo-carousel-item-page__caption">Mounted CarouselItem</div>
          </D1CarouselItem>
        </div>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
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

  &__narrow {
    max-width: 180px;
  }
}
</style>
