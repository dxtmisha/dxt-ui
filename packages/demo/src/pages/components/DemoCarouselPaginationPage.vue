<script setup lang="ts">
import { ref } from 'vue'
import type { CarouselPaginationExpose } from '@dxtmisha/constructor/CarouselPagination'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selectedBullets = ref<number>(1)
const selectedDots = ref<number>(2)
const selectedLines = ref<number>(3)
const selectedFraction = ref<number>(2)
const selectedProgress = ref<number>(4)
const selectedDynamic = ref<number>(5)
const selectedVertical = ref<number>(2)
const selectedSlot = ref<number>(1)
const selectedEvents = ref<number>(1)

const paginationExposeRef = ref<CarouselPaginationExpose>()
const exposeOutput = ref<string>('Use buttons to control pagination via ref')

const readExpose = (): void => {
  if (!paginationExposeRef.value) {
    return
  }

  exposeOutput.value = `selected=${paginationExposeRef.value.getSelected()}, count=${paginationExposeRef.value.getCount()}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CarouselPagination">
    <D1Section>
      <D1Group label="Types (Bullets, Dots, Lines, Fraction, Progressbar)">
        <DemoFlex>
          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Bullets ({{ selectedBullets }} / 5)</div>
            <D1CarouselPagination
              v-model:selected="selectedBullets"
              data-testid="demo-cp-bullets"
              type="bullets"
              :count="5"
            />
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Dots ({{ selectedDots }} / 5)</div>
            <D1CarouselPagination
              v-model:selected="selectedDots"
              data-testid="demo-cp-dots"
              type="dots"
              :count="5"
            />
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Lines ({{ selectedLines }} / 5)</div>
            <D1CarouselPagination
              v-model:selected="selectedLines"
              data-testid="demo-cp-lines"
              type="lines"
              :count="5"
            />
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Fraction</div>
            <D1CarouselPagination
              v-model:selected="selectedFraction"
              data-testid="demo-cp-fraction"
              type="fraction"
              :count="8"
              template="Slide [active] of [total]"
            />
          </DemoBox>

          <DemoBox class="demo-carousel-pagination-page__progress-box">
            <div class="demo-carousel-pagination-page__label">Progressbar ({{ selectedProgress }} / 8)</div>
            <D1CarouselPagination
              v-model:selected="selectedProgress"
              data-testid="demo-cp-progressbar"
              type="progressbar"
              :count="8"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dynamic Window & String Numeric Props">
        <D1CarouselPagination
          v-model:selected="selectedDynamic"
          data-testid="demo-cp-dynamic"
          type="bullets"
          count="12"
          visible="5"
          dynamic
        />
        <DemoFlex>
          <D1Button data-testid="demo-cp-dyn-prev" size="sm" outline label="Prev" @click="selectedDynamic = Math.max(1, selectedDynamic - 1)" />
          <D1Button data-testid="demo-cp-dyn-next" size="sm" outline label="Next" @click="selectedDynamic = Math.min(12, selectedDynamic + 1)" />
          <D1Button data-testid="demo-cp-dyn-last" size="sm" outline label="Last (12)" @click="selectedDynamic = 12" />
        </DemoFlex>
        <DemoValue data-testid="demo-cp-dynamic-output" :value="selectedDynamic" />
      </D1Group>

      <D1Group label="Vertical Orientation & Non-Interactive (control=false)">
        <DemoFlex>
          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Vertical Bullets</div>
            <D1CarouselPagination
              v-model:selected="selectedVertical"
              data-testid="demo-cp-vertical"
              type="bullets"
              :count="5"
              vertical
            />
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Vertical Progressbar</div>
            <div class="demo-carousel-pagination-page__vertical-progress">
              <D1CarouselPagination
                :selected="3"
                data-testid="demo-cp-vertical-progress"
                type="progressbar"
                :count="5"
                vertical
              />
            </div>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Read-only (control=false)</div>
            <D1CarouselPagination
              data-testid="demo-cp-readonly"
              :selected="2"
              :count="4"
              :control="false"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1CarouselPagination :selected="2" :count="4" palette="blue" />
          <D1CarouselPagination :selected="2" :count="4" palette="green" />
          <D1CarouselPagination :selected="2" :count="4" palette="red" />
          <D1CarouselPagination :selected="2" :count="4" palette="purple" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundaries (Single Item & hideIfOne)">
        <DemoFlex>
          <DemoBox>
            <div class="demo-carousel-pagination-page__label">count=1, hideIfOne=true (hidden)</div>
            <D1CarouselPagination data-testid="demo-cp-hidden-one" :count="1" :selected="1" :hide-if-one="true" />
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">count=1, hideIfOne=false (visible)</div>
            <D1CarouselPagination data-testid="demo-cp-visible-one" :count="1" :selected="1" :hide-if-one="false" />
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">count=0 (empty)</div>
            <D1CarouselPagination data-testid="demo-cp-zero" :count="0" :hide-if-one="false" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom Slots (#item, #fraction, #progress)">
        <DemoFlex>
          <DemoBox>
            <D1CarouselPagination
              v-model:selected="selectedSlot"
              data-testid="demo-cp-slot-item"
              tag="nav"
              :count="4"
            >
              <template #item="{ binds, item }">
                <button v-bind="binds" class="demo-carousel-pagination-page__custom-item">
                  {{ item.index }}
                </button>
              </template>
            </D1CarouselPagination>
          </DemoBox>

          <DemoBox>
            <D1CarouselPagination
              :selected="selectedSlot"
              data-testid="demo-cp-slot-fraction"
              type="fraction"
              :count="4"
            >
              <template #fraction="{ binds, active, total }">
                <span v-bind="binds">Page {{ active }} / {{ total }}</span>
              </template>
            </D1CarouselPagination>
          </DemoBox>

          <DemoBox class="demo-carousel-pagination-page__progress-box">
            <D1CarouselPagination
              :selected="selectedSlot"
              data-testid="demo-cp-slot-progress"
              type="progressbar"
              :count="4"
            >
              <template #progress="{ binds, percent }">
                <div v-bind="binds" class="demo-carousel-pagination-page__custom-progress">Progress: {{ percent }}%</div>
              </template>
            </D1CarouselPagination>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Exposed Methods">
        <D1CarouselPagination
          ref="paginationExposeRef"
          v-model:selected="selectedEvents"
          data-testid="demo-cp-events"
          :count="5"
          @change="(selected) => onEvent('change', selected)"
          @click="(event, selected) => onEvent('click', event, selected)"
          @click-lite="(selected) => onEvent('clickLite', selected)"
        />
        <DemoFlex>
          <D1Button data-testid="demo-cp-expose-prev" size="sm" outline label="previous()" @click="paginationExposeRef?.previous(); readExpose()" />
          <D1Button data-testid="demo-cp-expose-next" size="sm" outline label="next()" @click="paginationExposeRef?.next(); readExpose()" />
          <D1Button data-testid="demo-cp-expose-set" size="sm" outline label="set(4)" @click="paginationExposeRef?.set(4); readExpose()" />
          <D1Button data-testid="demo-cp-expose-read" size="sm" outline label="Read State" @click="readExpose" />
        </DemoFlex>
        <DemoValue data-testid="demo-cp-event-output" :value="eventName" />
        <DemoValue data-testid="demo-cp-expose-output" :value="exposeOutput" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-carousel-pagination-page {
  &__label {
    margin-bottom: 8px;
    font-size: 12px;
  }

  &__progress-box {
    min-width: 220px;
  }

  &__vertical-progress {
    height: 120px;
    display: flex;
    justify-content: center;
  }

  &__custom-item {
    min-width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid currentColor;
    cursor: pointer;
    background: transparent;
  }

  &__custom-progress {
    height: auto;
    overflow: visible;
    font-size: 12px;
  }
}
</style>
