<script setup lang="ts">
import { computed, ref } from 'vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const interactiveCounter = ref<number>(40)
const interactiveMaxlength = ref<number>(100)
const interactiveThreshold = ref<number>(15)
const showHiddenCounter = ref<boolean>(false)

const remainingCharacters = computed<number>(() => {
  return interactiveMaxlength.value - interactiveCounter.value
})

const ariaStatusText = computed<string>(() => {
  if (remainingCharacters.value <= 0) {
    return 'Limit exceeded / reached (ARIA live alert active)'
  }

  if (remainingCharacters.value <= interactiveThreshold.value) {
    return `Warning threshold reached (${remainingCharacters.value} remaining, ARIA live active)`
  }

  return 'Within safe range (ARIA live text empty)'
})

function onDecrease() {
  interactiveCounter.value = Math.max(0, interactiveCounter.value - 10)
}

function onIncrease() {
  interactiveCounter.value += 10
}

function onSetThreshold() {
  interactiveCounter.value = 92
}

function onSetLimit() {
  interactiveCounter.value = 100
}

function onExceedLimit() {
  interactiveCounter.value = 105
}

function onReset() {
  interactiveCounter.value = 0
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="FieldCounter">
    <D1Section>
      <D1Group label="Basic Display">
        <DemoFlex direction="column">
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Counter &amp; Maxlength (numeric):</span>
            <D1FieldCounter :counter="42" :maxlength="100"/>
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Counter &amp; Maxlength (string):</span>
            <D1FieldCounter counter="75" maxlength="200"/>
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Counter Only (no maxlength):</span>
            <D1FieldCounter :counter="42"/>
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Zero Counter with Maxlength:</span>
            <D1FieldCounter :counter="0" :maxlength="100"/>
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Zero Counter Only:</span>
            <D1FieldCounter :counter="0"/>
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Maxlength Only (counter defaults to 0):</span>
            <D1FieldCounter :maxlength="50"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom Templates & ID">
        <DemoFlex direction="column">
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Word Separator Template:</span>
            <D1FieldCounter
              :counter="24"
              :maxlength="120"
              template="[c] of [m]"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Compact Template:</span>
            <D1FieldCounter
              :counter="42"
              :maxlength="100"
              template="[c]/[m]"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">HTML Formatted Template:</span>
            <D1FieldCounter
              :counter="75"
              :maxlength="150"
              template="<b>[c]</b> / <i>[m]</i> chars"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Counter-Only Template:</span>
            <D1FieldCounter
              :counter="18"
              template="Entered: [c] chars"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Explicit ID Attribute:</span>
            <D1FieldCounter
              id="demo-field-counter-custom-id"
              :counter="12"
              :maxlength="60"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Thresholds & Accessibility Texts">
        <DemoFlex direction="column">
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Default 10% Threshold (92 / 100):</span>
            <D1FieldCounter
              id="demo-counter-default-threshold"
              :counter="92"
              :maxlength="100"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Custom maxlengthOnce Numeric (15) &amp; Remaining Text:</span>
            <D1FieldCounter
              id="demo-counter-custom-remaining"
              :counter="88"
              :maxlength="100"
              :maxlength-once="15"
              text-character-remaining="Only [left] chars left"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Custom maxlengthOnce String ('30') &amp; Limit Exceeded Text:</span>
            <D1FieldCounter
              id="demo-counter-custom-limit"
              :counter="100"
              :maxlength="100"
              maxlength-once="30"
              text-character-limit="Limit reached!"
            />
          </div>
          <div class="demo-field-counter__row">
            <span class="demo-field-counter__label">Exceeded Counter (110 / 100):</span>
            <D1FieldCounter
              id="demo-counter-exceeded"
              :counter="110"
              :maxlength="100"
              text-character-limit="Maximum characters exceeded"
            />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Conditional Visibility (Empty State)">
        <DemoFlex direction="column">
          <DemoFlex align="center">
            <D1Button
              size="sm"
              outline
              :label="showHiddenCounter ? 'Hide Props' : 'Provide Counter Prop'"
              @click="showHiddenCounter = !showHiddenCounter"
            />
            <span class="demo-field-counter__label">Render target:</span>
            <span id="demo-counter-empty-wrapper" class="demo-field-counter__empty-host">
              <D1FieldCounter
                :counter="showHiddenCounter ? 5 : undefined"
                :maxlength="showHiddenCounter ? 20 : undefined"
              />
            </span>
          </DemoFlex>
          <DemoValue
            label="Mounted State"
            :value="showHiddenCounter ? 'Mounted (5 / 20)' : 'Unmounted (counter & maxlength omitted)'"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Playground">
        <DemoFlex direction="column">
          <DemoFlex align="center">
            <D1FieldCounter
              id="demo-counter-interactive"
              :counter="interactiveCounter"
              :maxlength="interactiveMaxlength"
              :maxlength-once="interactiveThreshold"
              template="Characters: [c] of [m]"
              text-character-remaining="Remaining [left] characters"
              text-character-limit="Character limit exceeded"
            />
          </DemoFlex>

          <DemoFlex>
            <D1Button size="sm" outline label="-10" @click="onDecrease"/>
            <D1Button size="sm" outline label="+10" @click="onIncrease"/>
            <D1Button size="sm" outline label="Near Limit (92)" @click="onSetThreshold"/>
            <D1Button size="sm" outline label="At Limit (100)" @click="onSetLimit"/>
            <D1Button size="sm" outline label="Exceed (105)" @click="onExceedLimit"/>
            <D1Button size="sm" secondary label="Reset (0)" @click="onReset"/>
          </DemoFlex>

          <DemoValue label="Counter" :value="interactiveCounter"/>
          <DemoValue label="Remaining" :value="remainingCharacters"/>
          <DemoValue label="ARIA Status" :value="ariaStatusText"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-field-counter {
  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  &__label {
    font-size: 0.875rem;
    opacity: 0.75;
  }

  &__empty-host {
    min-width: 48px;
  }
}
</style>
