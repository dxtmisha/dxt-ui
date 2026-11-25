<script setup lang="ts">
import { ref } from 'vue'
import type { ProgressProps } from '@dxtmisha/d1/D1Progress'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<ProgressProps['palette']>[] = [
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

const indeterminateList: NonNullable<ProgressProps['indeterminate']>[] = [
  'type1',
  'type2',
  'type3'
]

const sizeList: NonNullable<ProgressProps['size']>[] = [
  'sm',
  'md',
  'lg'
]

const positionList: NonNullable<ProgressProps['position']>[] = [
  'top',
  'bottom',
  'static'
]

const getLoadingText = (): string => 'Processing request from callback'

// Delays & visibility demo state
const isVisibleDelay = ref<boolean>(false)
const toggleVisibleDelay = (): void => {
  isVisibleDelay.value = !isVisibleDelay.value
}

// Interactive controls state
const progressValue = ref<number | undefined>(25)
const progressMode = ref<'linear' | 'circular'>('linear')
const progressIndeterminate = ref<NonNullable<ProgressProps['indeterminate']>>('type1')
const progressSize = ref<NonNullable<ProgressProps['size']>>('md')
const progressPosition = ref<NonNullable<ProgressProps['position']>>('static')
const isDense = ref<boolean>(false)
const isInverse = ref<boolean>(false)
const isPoint = ref<boolean>(false)
const isInteractiveVisible = ref<boolean>(true)

const incrementProgress = (): void => {
  const current = progressValue.value ?? 0
  progressValue.value = Math.min(100, current + 25)
}

const decrementProgress = (): void => {
  const current = progressValue.value ?? 0
  progressValue.value = Math.max(0, current - 25)
}

const resetProgress = (): void => {
  progressValue.value = 0
}

const setIndeterminateMode = (): void => {
  progressValue.value = undefined
}

const toggleMode = (): void => {
  progressMode.value = progressMode.value === 'linear' ? 'circular' : 'linear'
}

const cycleIndeterminate = (): void => {
  const currentIndex = indeterminateList.indexOf(progressIndeterminate.value)
  const nextIndex = (currentIndex + 1) % indeterminateList.length
  progressIndeterminate.value = indeterminateList[nextIndex] ?? 'type1'
}

const cycleSize = (): void => {
  const currentIndex = sizeList.indexOf(progressSize.value)
  const nextIndex = (currentIndex + 1) % sizeList.length
  progressSize.value = sizeList[nextIndex] ?? 'md'
}

const cyclePosition = (): void => {
  const currentIndex = positionList.indexOf(progressPosition.value)
  const nextIndex = (currentIndex + 1) % positionList.length
  progressPosition.value = positionList[nextIndex] ?? 'static'
}

// Companion button loading state
const isButtonLoading = ref<boolean>(false)

// Lifecycle mount/unmount state
const isLifecycleMounted = ref<boolean>(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Progress">
    <D1Section>
      <D1Group label="Mode: Linear">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="25" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="50" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="75" position="static"/>
          </D1GridItem>
          <D1GridItem
            v-for="indeterminateType in indeterminateList"
            :key="`linear-${indeterminateType}`"
            :base="'2'"
            class="demo-progress-page__item"
          >
            <D1Progress
              linear
              visible
              :indeterminate="indeterminateType"
              position="static"
            />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Mode: Circular">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :value="30" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :value="60" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :value="90" position="static"/>
          </D1GridItem>
          <D1GridItem
            v-for="indeterminateType in indeterminateList"
            :key="`circular-${indeterminateType}`"
            :base="'2'"
            class="demo-progress-page__item"
          >
            <D1Progress
              circular
              visible
              :dense="indeterminateType === 'type3'"
              :indeterminate="indeterminateType"
            />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Mode: Point">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible :value="25" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible :value="75" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible indeterminate="type1" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible indeterminate="type2" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item demo-progress-page__inverse-surface">
            <D1Progress point linear visible inverse indeterminate="type1" position="static"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Positions (top, bottom, static)">
        <D1Grid>
          <D1GridItem
            v-for="positionMode in positionList"
            :key="positionMode"
            :base="'2'"
            class="demo-progress-page__item"
          >
            <div class="demo-progress-page__container">
              <span>Position: {{ positionMode }}</span>
              <D1Progress linear visible :position="positionMode" :value="55"/>
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Circular: Static</span>
              <D1Progress circular visible position="static" :value="65"/>
            </div>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Sizes (sm, md, lg)">
        <D1Grid>
          <template v-for="sizeName in sizeList" :key="sizeName">
            <D1GridItem :base="'2'" class="demo-progress-page__item">
              <D1Progress linear visible :size="sizeName" :value="55" position="static"/>
            </D1GridItem>
            <D1GridItem :base="'2'" class="demo-progress-page__item">
              <D1Progress circular visible :size="sizeName" :value="55" position="static"/>
            </D1GridItem>
          </template>
        </D1Grid>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <D1Grid>
          <D1GridItem
            v-for="paletteName in paletteList"
            :key="paletteName"
            :base="'2'"
            class="demo-progress-page__item"
          >
            <div class="demo-progress-page__container">
              <span>{{ paletteName }}</span>
              <D1Progress linear visible :palette="paletteName" :value="70" position="static"/>
            </div>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Values, Max & Data Formats">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible position="static" :value="0"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible position="static" value="50" max="200"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible position="static" :value="33.5" :max="100"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible position="static" :value="0.5" :max="0.5" point/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible position="static" :value="150" :max="100"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible position="static" :value="150" :max="200"/>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Dense, Inverse & Companion Integration">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item demo-progress-page__inverse-surface">
            <D1Progress linear visible inverse :value="60" position="static"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item demo-progress-page__inverse-surface">
            <D1Progress circular visible inverse position="static" :value="75"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible dense :value="80"/>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Button
              label="Companion Button Loading"
              :loading="isButtonLoading"
              @click="isButtonLoading = !isButtonLoading"
            />
          </D1GridItem>
        </D1Grid>
        <DemoValue label="Button Loading" :value="isButtonLoading"/>
      </D1Group>

      <D1Group label="Delays & Visibility">
        <DemoFlex align="center">
          <D1Button
            :label="isVisibleDelay ? 'Hide Progress' : 'Show Progress'"
            size="sm"
            primary
            @click="toggleVisibleDelay"
          />
        </DemoFlex>
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Standard (360ms / 200ms)</span>
              <D1Progress
                :visible="isVisibleDelay"
                circular
                position="static"
                delay="360"
                delay-hide="200"
              />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Fast (100ms / 100ms)</span>
              <D1Progress
                :visible="isVisibleDelay"
                linear
                position="static"
                delay="100"
                delay-hide="100"
              />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Immediate (0ms / 0ms)</span>
              <D1Progress
                :visible="isVisibleDelay"
                linear
                position="static"
                :delay="0"
                :delay-hide="0"
              />
            </div>
          </D1GridItem>
        </D1Grid>
        <DemoValue label="Visibility" :value="isVisibleDelay"/>
      </D1Group>

      <D1Group label="Interactive Controls">
        <DemoFlex align="center">
          <D1Button label="Increment +25" size="sm" primary @click="incrementProgress"/>
          <D1Button label="Decrement -25" size="sm" outline @click="decrementProgress"/>
          <D1Button label="Reset 0" size="sm" secondary @click="resetProgress"/>
          <D1Button label="Set Indeterminate" size="sm" outline @click="setIndeterminateMode"/>
          <D1Button :label="`Mode: ${progressMode}`" size="sm" text @click="toggleMode"/>
          <D1Button :label="`Indeterminate: ${progressIndeterminate}`" size="sm" text @click="cycleIndeterminate"/>
          <D1Button :label="`Size: ${progressSize}`" size="sm" text @click="cycleSize"/>
          <D1Button :label="`Position: ${progressPosition}`" size="sm" text @click="cyclePosition"/>
          <D1Button :label="isDense ? 'Dense: ON' : 'Dense: OFF'" size="sm" text @click="isDense = !isDense"/>
          <D1Button :label="isPoint ? 'Point: ON' : 'Point: OFF'" size="sm" text @click="isPoint = !isPoint"/>
          <D1Button :label="isInverse ? 'Inverse: ON' : 'Inverse: OFF'" size="sm" text @click="isInverse = !isInverse"/>
          <D1Button :label="isInteractiveVisible ? 'Visible: ON' : 'Visible: OFF'" size="sm" text @click="isInteractiveVisible = !isInteractiveVisible"/>
        </DemoFlex>
        <DemoBox
          size="md"
          center
          :class="{ 'demo-progress-page__inverse-surface': isInverse }"
        >
          <D1Progress
            :linear="progressMode === 'linear'"
            :circular="progressMode === 'circular'"
            :visible="isInteractiveVisible"
            :value="progressValue"
            :indeterminate="progressIndeterminate"
            :size="progressSize"
            :position="progressPosition"
            :dense="isDense"
            :point="isPoint"
            :inverse="isInverse"
            :delay="0"
            :delay-hide="0"
          />
        </DemoBox>
        <DemoValue
          label="Interactive State"
          :value="{
            value: progressValue ?? 'indeterminate',
            mode: progressMode,
            indeterminate: progressIndeterminate,
            size: progressSize,
            position: progressPosition,
            dense: isDense,
            point: isPoint,
            inverse: isInverse,
            visible: isInteractiveVisible
          }"
        />
      </D1Group>

      <D1Group label="Accessibility (Roles & Labels)">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress
              linear
              visible
              position="static"
              :value="45"
              aria-label="Upload progress 45 percent"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress
              circular
              visible
              position="static"
              aria-label="Asset downloading"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress
              linear
              visible
              position="static"
              text-loading="Loading files"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress
              circular
              visible
              position="static"
              :text-loading="getLoadingText"
            />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Negative value (-10 -> indeterminate)</span>
              <D1Progress linear visible position="static" :value="-10"/>
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Zero max (max: 0 -> fallback 1)</span>
              <D1Progress linear visible position="static" :value="0.5" :max="0"/>
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Undefined value</span>
              <D1Progress circular visible position="static" :value="undefined"/>
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Empty / Whitespace / XSS labels</span>
              <D1Progress linear visible position="static" :value="50" aria-label=""/>
              <D1Progress linear visible position="static" :value="60" aria-label="   "/>
              <D1Progress
                linear
                visible
                position="static"
                :value="70"
                aria-label="<img src=x onerror=alert(1)> Tiếng Việt 🚀"
              />
            </div>
          </D1GridItem>
        </D1Grid>
        <DemoBox class="demo-progress-page__narrow" size="sm">
          <D1Progress linear visible position="static" :value="65"/>
          <D1Progress circular visible position="static" :value="80"/>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (clientOnly & v-if)">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>clientOnly: false</span>
              <D1Progress linear visible position="static" :client-only="false" :delay="0"/>
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>clientOnly: true</span>
              <D1Progress circular visible position="static" :client-only="true" :delay="0"/>
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Conditional v-if</span>
              <D1Progress
                v-if="isLifecycleMounted"
                linear
                visible
                position="static"
                :delay="100"
                :delay-hide="100"
              />
            </div>
          </D1GridItem>
        </D1Grid>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-progress-page {
  &__item {
    position: relative;
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__container {
    position: relative;
    width: 100%;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      font-size: 13px;
      opacity: 0.7;
    }
  }

  &__inverse-surface {
    --sys-color: #{ui.v('?sys.palette.onPrimary')};
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), 1);
    border-radius: ui.v('?sys.rounded.md');
    color: ui.v('?sys.palette.onPrimary');
  }

  &__narrow {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 240px;
  }
}
</style>
