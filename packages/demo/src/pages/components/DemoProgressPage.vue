<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

// Delays demo state
const isVisibleDelay = ref<boolean>(false)
const onToggleDelay = () => {
  isVisibleDelay.value = !isVisibleDelay.value
}

// Interactive controls state
const progressValue = ref<number>(25)
const isDense = ref<boolean>(false)
const isPoint = ref<boolean>(false)

const onIncrement = () => {
  progressValue.value = Math.min(100, progressValue.value + 25)
}

const onDecrement = () => {
  progressValue.value = Math.max(0, progressValue.value - 25)
}

const onReset = () => {
  progressValue.value = 0
}

const onToggleDense = () => {
  isDense.value = !isDense.value
}

const onTogglePoint = () => {
  isPoint.value = !isPoint.value
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Progress">
    <D1Section>
      <D1Group label="Mode: Linear">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="25" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="50" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="75" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible indeterminate="type1" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible indeterminate="type2" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible indeterminate="type3" position="static" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Mode: Circular">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :value="30" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :value="60" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :value="90" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible indeterminate="type1" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible indeterminate="type2" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible dense indeterminate="type3" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Mode: Point">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible :value="50" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible indeterminate="type1" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible indeterminate="type2" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress point linear visible inverse indeterminate="type3" position="static" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Positions">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Position: Top</span>
              <D1Progress linear visible position="top" :value="40" />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Position: Bottom</span>
              <D1Progress linear visible position="bottom" :value="70" />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Position: Static</span>
              <D1Progress linear visible position="static" :value="55" />
            </div>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Sizes">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible size="sm" :value="35" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible size="sm" :value="35" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible size="md" :value="55" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible size="md" :value="55" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible size="lg" :value="75" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible size="lg" :value="75" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Palettes">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible palette="red" :value="70" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible palette="green" :value="70" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible palette="blue" indeterminate="type2" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible palette="orange" indeterminate="type1" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible palette="purple" :value="85" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible palette="amber" :value="85" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="States & Options">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible inverse :value="60" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible dense :value="80" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress linear visible :value="150" :max="200" position="static" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible ariaLabel="Asset downloading" :value="45" />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress circular visible :clientOnly="false" :value="50" />
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Delays & Visibility">
        <DemoFlex>
          <D1Button
            :label="isVisibleDelay ? 'Hide Progress' : 'Show Progress'"
            primary
            @click="onToggleDelay"
          />
        </DemoFlex>
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <div class="demo-progress-page__container">
              <span>Standard (360ms / 200ms)</span>
              <D1Progress
                :visible="isVisibleDelay"
                circular
                delay="360"
                delayHide="200"
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
                delayHide="100"
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
                delay="0"
                delayHide="0"
              />
            </div>
          </D1GridItem>
        </D1Grid>
        <DemoValue :value="'Visibility: ' + isVisibleDelay"/>
      </D1Group>

      <D1Group label="Interactive Controls">
        <DemoFlex>
          <D1Button label="Increment +25" primary @click="onIncrement" />
          <D1Button label="Decrement -25" outline @click="onDecrement" />
          <D1Button label="Reset 0" secondary @click="onReset" />
          <D1Button :label="isDense ? 'Dense: ON' : 'Dense: OFF'" text @click="onToggleDense" />
          <D1Button :label="isPoint ? 'Point: ON' : 'Point: OFF'" text @click="onTogglePoint" />
        </DemoFlex>
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress
              linear
              visible
              position="static"
              :value="progressValue"
              :point="isPoint"
            />
          </D1GridItem>
          <D1GridItem :base="'2'" class="demo-progress-page__item">
            <D1Progress
              circular
              visible
              :value="progressValue"
              :dense="isDense"
            />
          </D1GridItem>
        </D1Grid>
        <DemoValue :value="'Value: ' + progressValue + ', Dense: ' + isDense + ', Point: ' + isPoint"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
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
}
</style>
