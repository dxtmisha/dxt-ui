<script setup lang="ts">
import { computed, ref } from 'vue'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const interactiveCounter = ref<number>(40)
const interactiveMaxlength = ref<number>(100)
const interactiveThreshold = ref<number>(15)
const showHiddenCounter = ref<boolean>(false)
const a11yCounter = ref<number>(35)
const isLifecycleMounted = ref<boolean>(true)

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

const remainingTextFunction = (): string => 'Function remaining: [left] chars'
const limitTextFunction = (): string => 'Function: Limit reached!'

const handleDecrease = (): void => {
  interactiveCounter.value = Math.max(0, interactiveCounter.value - 10)
}

const handleIncrease = (): void => {
  interactiveCounter.value += 10
}

const handleSetThreshold = (): void => {
  interactiveCounter.value = 92
}

const handleSetLimit = (): void => {
  interactiveCounter.value = 100
}

const handleExceedLimit = (): void => {
  interactiveCounter.value = 105
}

const handleToggleMaxlength = (): void => {
  interactiveMaxlength.value = interactiveMaxlength.value === 100 ? 50 : 100
}

const handleReset = (): void => {
  interactiveCounter.value = 0
  interactiveMaxlength.value = 100
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="FieldCounter" class="demo-field-counter-page">
    <D1Section>
      <D1Group label="Basic Display">
        <DemoFlex direction="column">
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Counter &amp; Maxlength (numeric):</span>
            <D1FieldCounter :counter="42" :maxlength="100"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Counter &amp; Maxlength (string):</span>
            <D1FieldCounter counter="75" maxlength="200"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Counter Only (no maxlength):</span>
            <D1FieldCounter :counter="42"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Zero Counter with Maxlength:</span>
            <D1FieldCounter :counter="0" :maxlength="100"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Zero Counter Only:</span>
            <D1FieldCounter :counter="0"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Maxlength Only (counter defaults to 0):</span>
            <D1FieldCounter :maxlength="50"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom Templates & ID">
        <DemoFlex direction="column">
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Word Separator Template:</span>
            <D1FieldCounter
              :counter="24"
              :maxlength="120"
              template="[c] of [m]"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Compact Template:</span>
            <D1FieldCounter
              :counter="42"
              :maxlength="100"
              template="[c]/[m]"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">HTML Formatted Template:</span>
            <D1FieldCounter
              :counter="75"
              :maxlength="150"
              template="<b>[c]</b> / <i>[m]</i> chars"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Counter-Only Template:</span>
            <D1FieldCounter
              :counter="18"
              template="Entered: [c] chars"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Explicit ID Attribute:</span>
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
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Default 10% Threshold (92 / 100):</span>
            <D1FieldCounter
              id="demo-counter-default-threshold"
              :counter="92"
              :maxlength="100"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Custom maxlengthOnce Numeric (15) &amp; Remaining Text:</span>
            <D1FieldCounter
              id="demo-counter-custom-remaining"
              :counter="88"
              :maxlength="100"
              :maxlength-once="15"
              text-character-remaining="Only [left] chars left"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Custom maxlengthOnce String ('30') &amp; Limit Text:</span>
            <D1FieldCounter
              id="demo-counter-custom-limit"
              :counter="100"
              :maxlength="100"
              maxlength-once="30"
              text-character-limit="Limit reached!"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Function-Based Texts (Remaining &amp; Limit):</span>
            <D1FieldCounter
              id="demo-counter-function-remaining"
              :counter="94"
              :maxlength="100"
              :maxlength-once="10"
              :text-character-remaining="remainingTextFunction"
            />
            <D1FieldCounter
              id="demo-counter-function-limit"
              :counter="100"
              :maxlength="100"
              :text-character-limit="limitTextFunction"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Exceeded Counter (110 / 100):</span>
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
            <span class="demo-field-counter-page__label">Render target:</span>
            <span id="demo-counter-empty-wrapper" class="demo-field-counter-page__empty-host">
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
            <D1Button size="sm" outline label="-10" @click="handleDecrease"/>
            <D1Button size="sm" outline label="+10" @click="handleIncrease"/>
            <D1Button size="sm" outline label="Near Limit (92)" @click="handleSetThreshold"/>
            <D1Button size="sm" outline label="At Limit (100)" @click="handleSetLimit"/>
            <D1Button size="sm" outline label="Exceed (105)" @click="handleExceedLimit"/>
            <D1Button size="sm" outline label="Toggle Maxlength" @click="handleToggleMaxlength"/>
            <D1Button size="sm" secondary label="Reset (0)" @click="handleReset"/>
          </DemoFlex>

          <DemoValue label="Counter" :value="interactiveCounter"/>
          <DemoValue label="Maxlength" :value="interactiveMaxlength"/>
          <DemoValue label="Remaining" :value="remainingCharacters"/>
          <DemoValue label="ARIA Status" :value="ariaStatusText"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accessibility (ARIA Live & Describedby)">
        <DemoFlex direction="column">
          <DemoFlex align="center">
            <D1FieldCounter
              id="demo-counter-a11y-target"
              :counter="a11yCounter"
              :maxlength="50"
              :maxlength-once="10"
              text-character-remaining="[left] characters remaining"
              text-character-limit="Character limit reached"
              data-testid="a11y-counter-element"
            />
          </DemoFlex>
          <DemoFlex align="center">
            <D1Button size="sm" outline label="Safe (35)" @click="a11yCounter = 35"/>
            <D1Button size="sm" outline label="Warning (45)" @click="a11yCounter = 45"/>
            <D1Button size="sm" outline label="Limit (50)" @click="a11yCounter = 50"/>
          </DemoFlex>
          <DemoValue label="A11y Counter" :value="a11yCounter"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex direction="column">
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Negative Counter &amp; Maxlength:</span>
            <D1FieldCounter :counter="-3" :maxlength="50"/>
            <D1FieldCounter :counter="10" :maxlength="-5"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Zero Maxlength &amp; Decimals:</span>
            <D1FieldCounter :counter="10" :maxlength="0"/>
            <D1FieldCounter :counter="12.5" :maxlength="99.5"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Non-numeric &amp; Large Numbers:</span>
            <D1FieldCounter counter="abc" :maxlength="100"/>
            <D1FieldCounter :counter="999999" :maxlength="1000000"/>
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Single Char &amp; Multilingual Template:</span>
            <D1FieldCounter :counter="5" template="[c]"/>
            <D1FieldCounter
              :counter="12"
              :maxlength="50"
              template="Tiếng Việt / Кириллица 🚀: [c] / [m]"
            />
          </div>
          <div class="demo-field-counter-page__row">
            <span class="demo-field-counter-page__label">Safe XSS in ARIA Limit Text:</span>
            <D1FieldCounter
              id="demo-counter-xss-aria"
              :counter="10"
              :maxlength="10"
              text-character-limit="<img src=x onerror=alert(1)>"
            />
          </div>
          <DemoBox class="demo-field-counter-page__narrow" size="sm">
            <D1FieldCounter
              class="demo-field-counter-page__unbroken"
              :counter="8"
              :maxlength="16"
              template="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA [c]/[m]"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1FieldCounter
          v-if="isLifecycleMounted"
          :counter="15"
          :maxlength="40"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-field-counter-page {
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

  &__narrow {
    width: 100%;
    max-width: 240px;
  }

  &__unbroken {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
}
</style>
