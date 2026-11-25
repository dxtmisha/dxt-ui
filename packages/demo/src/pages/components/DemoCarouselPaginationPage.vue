<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { CarouselPaginationExpose } from '@dxtmisha/constructor/CarouselPagination'
import type { CarouselPaginationProps } from '@dxtmisha/d1/D1CarouselPagination'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paginationTypes: NonNullable<CarouselPaginationProps['type']>[] = [
  'bullets',
  'dots',
  'lines',
  'fraction',
  'progressbar'
]
const paletteList: NonNullable<CarouselPaginationProps['palette']>[] = [
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

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const selectedByType = ref<Record<string, number>>({
  bullets: 1,
  dots: 2,
  lines: 3,
  fraction: 2,
  progressbar: 4
})

const selectedDynamic = ref<number>(5)
const selectedVertical = ref<number>(2)
const selectedModelProp = ref<number>(3)
const selectedSlot = ref<number>(1)
const selectedEvents = ref<number>(1)
const selectedBlocked = ref<number>(2)

const isLifecycleMounted = ref<boolean>(true)
const paginationExposeReference = ref<CarouselPaginationExpose | null>(null)
const exposeOutput = ref<string>('Use buttons to control pagination via ref')

const textPaginationCallback = (): string => 'Carousel slide navigation'

const handlePaginationEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickEvent = (
  mouseEvent: MouseEvent,
  selectedIndex: number
): void => {
  handlePaginationEvent('click', {
    eventType: mouseEvent.type,
    selected: selectedIndex
  })
}

const readExposeState = async (): Promise<void> => {
  await nextTick()
  if (!paginationExposeReference.value) {
    return
  }

  exposeOutput.value = JSON.stringify({
    selected: paginationExposeReference.value.getSelected(),
    count: paginationExposeReference.value.getCount()
  })
}

const invokePrevious = async (): Promise<void> => {
  paginationExposeReference.value?.previous()
  await readExposeState()
}

const invokeNext = async (): Promise<void> => {
  paginationExposeReference.value?.next()
  await readExposeState()
}

const invokeSet = async (targetIndex: number): Promise<void> => {
  paginationExposeReference.value?.set(targetIndex)
  await readExposeState()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CarouselPagination">
    <D1Section>
      <D1Group label="Types (All 5: Bullets, Dots, Lines, Fraction, Progressbar)">
        <DemoFlex>
          <DemoBox
            v-for="paginationType in paginationTypes"
            :key="paginationType"
            :class="paginationType === 'progressbar' ? 'demo-carousel-pagination-page__progress-box' : undefined"
          >
            <div class="demo-carousel-pagination-page__label">
              {{ paginationType }} ({{ selectedByType[paginationType] }} / 6)
            </div>
            <D1CarouselPagination
              v-model:selected="selectedByType[paginationType]"
              :type="paginationType"
              :count="6"
              template="Slide [active] of [total]"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <DemoFlex align="center">
          <DemoBox v-for="paletteName in paletteList" :key="paletteName">
            <div class="demo-carousel-pagination-page__label">{{ paletteName }}</div>
            <D1CarouselPagination
              :selected="2"
              :count="4"
              :palette="paletteName"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dynamic Window & String Numeric Props">
        <D1CarouselPagination
          v-model:selected="selectedDynamic"
          type="bullets"
          count="12"
          visible="5"
          dynamic
        />
        <DemoFlex>
          <D1Button
            size="sm"
            outline
            label="Prev"
            @click="selectedDynamic = Math.max(1, selectedDynamic - 1)"
          />
          <D1Button
            size="sm"
            outline
            label="Next"
            @click="selectedDynamic = Math.min(12, selectedDynamic + 1)"
          />
          <D1Button
            size="sm"
            outline
            label="First (1)"
            @click="selectedDynamic = 1"
          />
          <D1Button
            size="sm"
            outline
            label="Last (12)"
            @click="selectedDynamic = 12"
          />
        </DemoFlex>
        <DemoValue label="Dynamic Selected" :value="selectedDynamic"/>
      </D1Group>

      <D1Group label="Vertical Orientation & Non-Interactive Guard (control=false)">
        <DemoFlex align="start">
          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Vertical Bullets</div>
            <D1CarouselPagination
              v-model:selected="selectedVertical"
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
                type="progressbar"
                :count="5"
                vertical
              />
            </div>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Read-only (control=false)</div>
            <D1CarouselPagination
              v-model:selected="selectedBlocked"
              :count="4"
              :control="false"
            />
            <DemoValue label="Blocked Selected" :value="selectedBlocked"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Two-Way Binding (v-model:modelSelected) & textPagination">
        <DemoFlex align="center">
          <D1CarouselPagination
            v-model:model-selected="selectedModelProp"
            :count="5"
            :text-pagination="textPaginationCallback"
          />
          <D1Button
            size="sm"
            outline
            label="Set modelSelected = 5"
            @click="selectedModelProp = 5"
          />
          <D1Button
            size="sm"
            outline
            label="Reset modelSelected = 1"
            @click="selectedModelProp = 1"
          />
        </DemoFlex>
        <DemoValue label="modelSelected" :value="selectedModelProp"/>
      </D1Group>

      <D1Group label="Custom Slots (#item, #fraction, #progress)">
        <DemoFlex>
          <DemoBox>
            <D1CarouselPagination
              v-model:selected="selectedSlot"
              tag="nav"
              text-pagination="Custom navigation pagination"
              :count="4"
            >
              <template #item="{ binds, item, index }">
                <button v-bind="binds" class="demo-carousel-pagination-page__custom-item">
                  {{ index }} ({{ item.selected ? '*' : '-' }})
                </button>
              </template>
            </D1CarouselPagination>
          </DemoBox>

          <DemoBox>
            <D1CarouselPagination
              :selected="selectedSlot"
              type="fraction"
              :count="4"
            >
              <template #fraction="{ binds, active, total, text }">
                <span v-bind="binds">Page {{ active }} / {{ total }} [{{ text }}]</span>
              </template>
            </D1CarouselPagination>
          </DemoBox>

          <DemoBox class="demo-carousel-pagination-page__progress-box">
            <D1CarouselPagination
              :selected="selectedSlot"
              type="progressbar"
              :count="4"
            >
              <template #progress="{ binds, active, total, percent }">
                <div v-bind="binds" class="demo-carousel-pagination-page__custom-progress">
                  {{ active }}/{{ total }} ({{ percent }}%)
                </div>
              </template>
            </D1CarouselPagination>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <D1CarouselPagination
          ref="paginationExposeReference"
          v-model:selected="selectedEvents"
          :count="5"
          @change="(selectedIndex) => handlePaginationEvent('change', { selected: selectedIndex })"
          @click="handleClickEvent"
          @click-lite="(selectedIndex) => handlePaginationEvent('clickLite', { selected: selectedIndex })"
          @update:selected="(selectedIndex) => handlePaginationEvent('update:selected', { selected: selectedIndex })"
          @update:model-selected="(selectedIndex) => handlePaginationEvent('update:modelSelected', { selected: selectedIndex })"
        />
        <DemoFlex>
          <D1Button size="sm" outline label="previous()" @click="invokePrevious"/>
          <D1Button size="sm" outline label="next()" @click="invokeNext"/>
          <D1Button size="sm" outline label="set(4)" @click="invokeSet(4)"/>
          <D1Button size="sm" outline label="Read State" @click="readExposeState"/>
        </DemoFlex>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox>
            <div class="demo-carousel-pagination-page__label">count=1, hideIfOne=true (hidden)</div>
            <D1CarouselPagination :count="1" :selected="1" :hide-if-one="true"/>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">count=1, hideIfOne=false (visible)</div>
            <D1CarouselPagination :count="1" :selected="1" :hide-if-one="false"/>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">count=0 (empty)</div>
            <D1CarouselPagination :count="0" :hide-if-one="false"/>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Negative count=-2 & selected=0</div>
            <D1CarouselPagination :count="-2" :selected="0" :hide-if-one="false"/>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">Decimal selected=2.8, count=4.9</div>
            <D1CarouselPagination :count="4.9" :selected="2.8" type="fraction"/>
          </DemoBox>

          <DemoBox>
            <div class="demo-carousel-pagination-page__label">XSS & Unicode Template</div>
            <D1CarouselPagination
              :count="3"
              :selected="1"
              type="fraction"
              template="<img src=x onerror=alert(1)> [active]/[total] 🚀"
            />
          </DemoBox>

          <DemoBox class="demo-carousel-pagination-page__narrow" size="sm">
            <div class="demo-carousel-pagination-page__label">Narrow Container</div>
            <D1CarouselPagination :count="10" :selected="5" dynamic/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            size="sm"
            outline
            label="Toggle Mount"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <D1CarouselPagination
            v-if="isLifecycleMounted"
            :selected="2"
            :count="5"
          />
        </DemoFlex>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
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

  &__narrow {
    max-width: 160px;
  }
}
</style>
