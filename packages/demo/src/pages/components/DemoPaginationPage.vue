<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

import { useDemoEvent } from '../../composables/useDemoEvent'

type AdaptiveLineMode = 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl'

const controlledPage = ref(2)
const controlledRows = ref(10)
const controlledModelPage = ref(3)
const controlledModelRows = ref(20)
const menuRowsOptions = [5, 10, 20, 50]

const morePage = ref(3)
const morePreviousPage = ref(4)

const adaptiveMode = ref<AdaptiveLineMode>('lineMd')
const adaptiveMoreMode = ref<AdaptiveLineMode>('lineAlways')
const adaptiveMorePreviousMode = ref<AdaptiveLineMode>('lineAlways')
const hideIfOneFlag = ref(true)
const isRightToLeft = ref(false)
const isLifecycleMounted = ref(true)

const xssPayload = '<img src=x onerror=alert(1)>'
const unicodeText = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

const { eventName, onEvent } = useDemoEvent()
const lastPayload = ref<string>('none')

const getMoreLabel = (): string => 'Load via function'
const getInfoTemplate = (): string => 'Range [item] of [count]'

const handleTrackEvent = (name: string, payload?: unknown) => {
  onEvent(name, payload)
  lastPayload.value = `${name}: ${payload === undefined ? 'undefined' : JSON.stringify(payload)}`
}

const handleClickTrackEvent = (name: string, options?: EventClickValue) => {
  onEvent(name, options)
  lastPayload.value = `${name}: ${options?.type ?? 'n/a'} = ${String(options?.value ?? 'n/a')}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Pagination">
    <D1Section>
      <D1Group label="Basic & Two-Way Binding (v-model:value & v-model:rows)">
        <DemoFlex>
          <D1Button
            data-testid="demo-pagination-set-page-5"
            size="sm"
            outline
            label="Go to Page 5"
            @click="controlledPage = 5"
          />
          <D1Button
            data-testid="demo-pagination-set-rows-20"
            size="sm"
            outline
            label="Set Rows to 20"
            @click="controlledRows = 20"
          />
          <D1Button
            data-testid="demo-pagination-reset-basic"
            size="sm"
            outline
            label="Reset"
            @click="controlledPage = 2; controlledRows = 10"
          />
          <D1Button
            data-testid="demo-pagination-rtl-toggle"
            size="sm"
            outline
            label="Toggle RTL"
            @click="isRightToLeft = !isRightToLeft"
          />
        </DemoFlex>
        <div
          data-testid="demo-pagination-basic-wrap"
          :dir="isRightToLeft ? 'rtl' : 'ltr'"
        >
          <D1Pagination
            data-testid="demo-pagination-basic"
            v-model:value="controlledPage"
            v-model:rows="controlledRows"
            :count="100"
            :menu-rows="menuRowsOptions"
            show-info
            show-ends
          />
        </div>
        <DemoValue
          data-testid="demo-pagination-basic-value"
          :value="`page=${controlledPage}, rows=${controlledRows}`"
        />
      </D1Group>

      <D1Group label="Model Aliases (v-model & v-model:model-rows)">
        <DemoFlex>
          <D1Button
            size="sm"
            outline
            label="Set modelValue = 4"
            @click="controlledModelPage = 4"
          />
          <D1Button
            size="sm"
            outline
            label="Set modelRows = 50"
            @click="controlledModelRows = 50"
          />
        </DemoFlex>
        <D1Pagination
          data-testid="demo-pagination-model-alias"
          v-model="controlledModelPage"
          v-model:model-rows="controlledModelRows"
          :count="200"
          :menu-rows="[10, 20, 50]"
          show-info
        />
        <DemoValue
          data-testid="demo-pagination-model-alias-value"
          :value="`modelValue=${controlledModelPage}, modelRows=${controlledModelRows}`"
        />
      </D1Group>

      <D1Group label="Navigation Options (visible, ends, ellipsis, arrows, first/last)">
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-ends"
            :value="5"
            :count="200"
            :rows="10"
            :visible="5"
            :ends="2"
            ellipsis="•••"
            show-ends
          />
        </DemoBox>
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-minimal"
            :value="3"
            :count="80"
            :rows="10"
            :show-arrows="false"
            :show-first-last="false"
            :show-rows-per-page-label="false"
            :menu-rows="[10, 25]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Show More & Show Previous Loaders">
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-show-more-prev"
            v-model:value="morePreviousPage"
            :count="100"
            :rows="10"
            show-more-prev
            :show-pagination="false"
            :adaptive-more-prev="adaptiveMorePreviousMode"
            @more-prev-lite="(options?: EventClickValue) => { if (options?.value) morePreviousPage = Number(options.value) }"
          />
          <DemoValue
            data-testid="demo-pagination-more-prev-value"
            :value="`morePrevPage=${morePreviousPage}`"
          />
        </DemoBox>
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-show-more"
            v-model:value="morePage"
            :count="100"
            :rows="10"
            show-more
            :adaptive-more="adaptiveMoreMode"
            @more-lite="(options?: EventClickValue) => { if (options?.value) morePage = Number(options.value) }"
          />
          <DemoValue
            data-testid="demo-pagination-more-value"
            :value="`morePage=${morePage}`"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Adaptive Layout Tokens (adaptive, adaptiveMore, adaptiveMorePrev)">
        <DemoFlex>
          <D1Button
            data-testid="demo-pagination-adaptive-always"
            size="sm"
            outline
            label="lineAlways"
            @click="adaptiveMode = 'lineAlways'; adaptiveMoreMode = 'lineAlways'; adaptiveMorePreviousMode = 'lineAlways'"
          />
          <D1Button
            data-testid="demo-pagination-adaptive-sm"
            size="sm"
            outline
            label="lineSm"
            @click="adaptiveMode = 'lineSm'; adaptiveMoreMode = 'lineSm'; adaptiveMorePreviousMode = 'lineSm'"
          />
          <D1Button
            data-testid="demo-pagination-adaptive-md"
            size="sm"
            outline
            label="lineMd"
            @click="adaptiveMode = 'lineMd'; adaptiveMoreMode = 'lineMd'; adaptiveMorePreviousMode = 'lineMd'"
          />
          <D1Button
            data-testid="demo-pagination-adaptive-lg"
            size="sm"
            outline
            label="lineLg"
            @click="adaptiveMode = 'lineLg'; adaptiveMoreMode = 'lineLg'; adaptiveMorePreviousMode = 'lineLg'"
          />
          <D1Button
            data-testid="demo-pagination-adaptive-xl"
            size="sm"
            outline
            label="lineXl"
            @click="adaptiveMode = 'lineXl'; adaptiveMoreMode = 'lineXl'; adaptiveMorePreviousMode = 'lineXl'"
          />
          <D1Button
            data-testid="demo-pagination-adaptive-2xl"
            size="sm"
            outline
            label="line2xl"
            @click="adaptiveMode = 'line2xl'; adaptiveMoreMode = 'line2xl'; adaptiveMorePreviousMode = 'line2xl'"
          />
        </DemoFlex>
        <D1Pagination
          data-testid="demo-pagination-adaptive"
          :value="4"
          :count="120"
          :rows="10"
          :menu-rows="[10, 20, 50]"
          :adaptive="adaptiveMode"
          :adaptive-more="adaptiveMoreMode"
          :adaptive-more-prev="adaptiveMorePreviousMode"
          show-info
          show-ends
          show-more
          show-more-prev
        />
        <DemoValue
          data-testid="demo-pagination-adaptive-value"
          :value="`adaptive=${adaptiveMode}, more=${adaptiveMoreMode}, morePrev=${adaptiveMorePreviousMode}`"
        />
      </D1Group>

      <D1Group label="Slots (leading, info, trailing)">
        <D1Pagination
          data-testid="demo-pagination-slots"
          :value="2"
          :count="60"
          :rows="10"
          show-info
        >
          <template #leading>
            <D1Badge
              data-testid="demo-pagination-slot-leading"
              label="LEADING"
              overlap="static"
            />
          </template>
          <template #info>
            <span data-testid="demo-pagination-slot-info">Custom Info Range</span>
          </template>
          <template #trailing>
            <D1Badge
              data-testid="demo-pagination-slot-trailing"
              label="TRAILING"
              overlap="static"
            />
          </template>
        </D1Pagination>
      </D1Group>

      <D1Group label="Custom Icons, Attribute Forwarding & Text Overrides (Strings & Functions)">
        <D1Pagination
          data-testid="demo-pagination-custom"
          :value="3"
          :count="90"
          :rows="15"
          :menu-rows="[15, 30, 45]"
          show-info
          show-more
          show-more-prev
          area="custom-pagination-area"
          icon-arrow-down="expand_more"
          icon-arrow-first="keyboard_double_arrow_left"
          icon-arrow-last="keyboard_double_arrow_right"
          :icon-arrow-left="{ value: 'arrow_back' }"
          :icon-arrow-right="{ value: 'arrow_forward' }"
          :button-attrs="{ outline: true }"
          :button-more-attrs="{ primary: true }"
          :button-more-prev-attrs="{ secondary: true }"
          :button-menu-attrs="{ outline: true }"
          :menu-attrs="{ autoClose: true }"
          text-first="Start"
          text-last="End"
          text-previous="Prev"
          text-next="Next"
          :text-more="getMoreLabel"
          text-more-prev="Load earlier batch"
          text-rows-per-page="Items:"
          :text-info="getInfoTemplate"
          text-page="Step"
          text-pagination="Custom pages nav"
        />
      </D1Group>

      <D1Group label="Accessibility (ARIA Landmark, Current Page & Arrow Keyboard Focus)">
        <D1Pagination
          data-testid="demo-pagination-a11y"
          :value="2"
          :count="70"
          :rows="10"
          show-ends
          text-pagination="Search results pagination"
          text-page="Page"
        />
      </D1Group>

      <D1Group label="String Inputs & Boundary States (hideIfOne, 0, Empty, Unicode, XSS, Narrow)">
        <DemoFlex>
          <D1Button
            data-testid="demo-pagination-toggle-hide-if-one"
            size="sm"
            outline
            :label="`hideIfOne: ${hideIfOneFlag}`"
            @click="hideIfOneFlag = !hideIfOneFlag"
          />
        </DemoFlex>
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-string-inputs"
            value="3"
            count="120"
            rows="15"
            show-info
          />
        </DemoBox>
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-single-page"
            :value="1"
            :count="5"
            :rows="10"
            :hide-if-one="hideIfOneFlag"
            show-info
          />
        </DemoBox>
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-empty-zero"
            :value="0"
            :count="0"
            :rows="0"
            :visible="0"
            :ends="0"
            :menu-rows="[]"
            :hide-if-one="false"
            show-info
          />
        </DemoBox>
        <DemoBox>
          <D1Pagination
            data-testid="demo-pagination-whitespace-large"
            value="   "
            count="100000"
            rows=""
            :visible="3"
            show-info
            show-ends
            show-more
            :ellipsis="xssPayload"
            :text-more="unicodeText"
            :text-info="`${xssPayload} [item] / [count]`"
          />
        </DemoBox>
        <DemoBox class="demo-pagination-page__narrow">
          <D1Pagination
            data-testid="demo-pagination-narrow"
            :value="5"
            :count="100"
            :rows="10"
            :menu-rows="[10, 20]"
            show-info
            show-more
            :text-rows-per-page="unbrokenText"
            :text-more="unbrokenText"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="DOM Lifecycle (Conditional v-if Mount & Unmount)">
        <DemoFlex>
          <D1Button
            :label="isLifecycleMounted ? 'Unmount Pagination' : 'Mount Pagination'"
            secondary
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1Pagination
          v-if="isLifecycleMounted"
          data-testid="demo-pagination-lifecycle"
          :value="2"
          :count="50"
          :rows="10"
          show-info
        />
        <DemoValue label="isLifecycleMounted" :value="isLifecycleMounted"/>
      </D1Group>

      <D1Group label="Events (click, update:value/rows, more, morePrev, rows & Lite variants)">
        <D1Pagination
          data-testid="demo-pagination-events"
          :value="3"
          :count="100"
          :rows="10"
          :menu-rows="[5, 10, 25]"
          show-more
          show-more-prev
          show-info
          @click="(_event: MouseEvent, options?: EventClickValue) => handleClickTrackEvent('click', options)"
          @click-lite="(options?: EventClickValue) => handleClickTrackEvent('clickLite', options)"
          @update:value="(value: number) => handleTrackEvent('update:value', value)"
          @update:model-value="(value: number) => handleTrackEvent('update:modelValue', value)"
          @update:rows="(value: number) => handleTrackEvent('update:rows', value)"
          @update:model-rows="(value: number) => handleTrackEvent('update:modelRows', value)"
          @more="(_event: MouseEvent, options?: EventClickValue) => handleClickTrackEvent('more', options)"
          @more-lite="(options?: EventClickValue) => handleClickTrackEvent('moreLite', options)"
          @more-prev="(_event: MouseEvent, options?: EventClickValue) => handleClickTrackEvent('morePrev', options)"
          @more-prev-lite="(options?: EventClickValue) => handleClickTrackEvent('morePrevLite', options)"
          @rows="(_event: MouseEvent, options?: EventClickValue) => handleClickTrackEvent('rows', options)"
          @rows-lite="(options?: EventClickValue) => handleClickTrackEvent('rowsLite', options)"
        />
        <DemoValue
          data-testid="demo-pagination-event-name"
          :value="eventName"
        />
        <DemoValue
          data-testid="demo-pagination-event-payload"
          :value="lastPayload"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-pagination-page {
  &__narrow {
    max-width: 240px;
  }
}
</style>
