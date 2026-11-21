<script setup lang="ts">
import { computed, ref } from 'vue'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const interactiveHelper = ref<string>('Use at least 8 characters with letters and numbers.')
const interactiveWarning = ref<string>('')
const interactiveValidation = ref<string>('')
const interactiveDisabled = ref<boolean>(false)
const interactiveForceShow = ref<boolean>(false)
const interactiveHasHtmlCode = ref<boolean>(false)
const interactiveSkeleton = ref<boolean>(false)
const interactiveCounterShow = ref<boolean>(true)
const interactiveCounter = ref<number>(12)
const interactiveUseSlots = ref<boolean>(false)

const stateSummary = computed<string>(() => JSON.stringify({
  helperMessage: interactiveHelper.value,
  warningMessage: interactiveWarning.value,
  validationMessage: interactiveValidation.value,
  disabled: interactiveDisabled.value,
  forceShow: interactiveForceShow.value,
  hasHtmlCode: interactiveHasHtmlCode.value,
  isSkeleton: interactiveSkeleton.value,
  counterShow: interactiveCounterShow.value,
  counter: interactiveCounter.value,
  useSlots: interactiveUseSlots.value
}))

const toggleHelper = (): void => {
  interactiveHelper.value = interactiveHelper.value
    ? ''
    : 'Use at least 8 characters with letters and numbers.'
}

const toggleWarning = (): void => {
  interactiveWarning.value = interactiveWarning.value
    ? ''
    : 'Phone number from legacy profile needs confirmation.'
}

const toggleValidation = (): void => {
  interactiveValidation.value = interactiveValidation.value
    ? ''
    : 'Password must contain at least one uppercase letter.'
}

const incrementCounter = (): void => {
  interactiveCounter.value = interactiveCounter.value >= 50 ? 0 : interactiveCounter.value + 10
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="FieldMessage">
    <D1Section>
      <D1Group label="Helper, Warning, Validation & ARIA Binding">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldMessage helper-message="Enter your email address for account notifications."/>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage warning-message="Phone number from legacy profile needs confirmation."/>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="This helper text is overridden visually while warning is active."
              warning-message="Warning takes display priority over helper text."
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage validation-message="Please enter a valid email address."/>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="This helper text is overridden visually while validation is active."
              warning-message="This warning text is overridden visually while validation is active."
              validation-message="Validation error takes display priority over warning and helper text."
            />
          </DemoBox>

          <DemoBox>
            <label class="demo-field-message-page__label" for="demo-field-message-input">
              Linked Input (aria-describedby)
            </label>
            <input
              id="demo-field-message-input"
              class="demo-field-message-page__input"
              type="text"
              placeholder="Focus or inspect aria-describedby"
              aria-describedby="demo-field-message-helper demo-field-message-warning demo-field-message-validation"
            />
            <D1FieldMessage
              helper-message="Helper linked via helperId"
              helper-id="demo-field-message-helper"
              warning-message="Warning linked via warningId"
              warning-id="demo-field-message-warning"
              validation-message="Validation linked via validationId and role=alert"
              validation-id="demo-field-message-validation"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Disabled & Force Show">
        <DemoFlex direction="column">
          <DemoBox>
            <div data-testid="disabled-hidden-probe">
              <D1FieldMessage
                helper-message="Hidden while disabled"
                warning-message="Hidden warning while disabled"
                validation-message="Hidden error while disabled"
                disabled
              />
            </div>
            <DemoValue
              label="Disabled (forceShow=false)"
              value="Message is hidden from DOM when disabled without forceShow"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="Visible while disabled because forceShow is true"
              disabled
              force-show
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              warning-message="Warning visible while disabled because forceShow is true"
              disabled
              force-show
              counter-show
              :counter="16"
              :maxlength="40"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              validation-message="Validation visible while disabled because forceShow is true"
              disabled
              force-show
              counter-show
              :counter="20"
              :maxlength="40"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="HTML Code & Security">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldMessage
              helper-message="Escaped markup: <strong>not bold</strong> &amp; <img src=x onerror=alert(1)>"
              :has-html-code="false"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="Formatted <strong>HTML helper</strong> with <em>inline markup</em>."
              has-html-code
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              warning-message="Formatted <strong>HTML warning</strong> requiring <em>confirmation</em>."
              has-html-code
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              validation-message="Error in <b>required</b> field: check value."
              has-html-code
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Counter Integration">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldMessage
              helper-message="Short summary"
              counter-show
              :counter="18"
              :maxlength="120"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="Zero counter test"
              counter-show
              :counter="0"
              :maxlength="50"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              warning-message="Approaching recommended length"
              counter-show
              :counter="88"
              :maxlength="100"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              validation-message="Maximum length exceeded"
              counter-show
              :counter="105"
              :maxlength="100"
              :maxlength-once="10"
              counter-template="[c] / [m] chars"
              counter-id="demo-field-message-counter-id"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              counter-show
              :counter="42"
              :maxlength="80"
              :field-counter-attrs="{ class: 'demo-field-message-page__counter-custom' }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Skeleton">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Skeleton :active="true">
              <D1FieldMessage
                helper-message="Loading skeleton helper message"
                is-skeleton
              />
            </D1Skeleton>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="Standalone skeleton class on info"
              is-skeleton
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots">
        <DemoFlex direction="column">
          <DemoBox>
            <D1FieldMessage>
              <template #helper>
                <span><strong>Helper Slot:</strong> Only Latin letters and digits are allowed.</span>
              </template>
            </D1FieldMessage>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage>
              <template #warning>
                <span><strong>Warning Slot:</strong> Value from legacy profile needs confirmation.</span>
              </template>
            </D1FieldMessage>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage>
              <template #validation>
                <span><strong>Validation Slot:</strong> This value is already in use.</span>
              </template>
            </D1FieldMessage>
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="Trailing text"
              warning-message="Trailing warning"
              validation-message="Trailing error"
              has-html-code
            >
              <template #helper="{ helperMessage }">
                <span>Scoped helper ({{ helperMessage }}): </span>
              </template>
              <template #warning="{ warningMessage }">
                <span>Scoped warning ({{ warningMessage }}): </span>
              </template>
              <template #validation="{ validationMessage }">
                <span>Scoped validation ({{ validationMessage }}): </span>
              </template>
            </D1FieldMessage>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Multilingual">
        <DemoFlex direction="column">
          <DemoBox>
            <div data-testid="empty-probe">
              <D1FieldMessage helper-message="" warning-message="   " validation-message="   "/>
            </div>
            <DemoValue
              label="Empty & Whitespace Probe"
              value="Empty or whitespace-only messages render nothing in DOM"
            />
          </DemoBox>

          <DemoBox class="demo-field-message-page__constrained">
            <D1FieldMessage
              helper-message="Very long helper description explaining formatting rules and constraints across multiple lines inside a constrained container."
              counter-show
              :counter="118"
              :maxlength="140"
            />
          </DemoBox>

          <DemoBox class="demo-field-message-page__constrained">
            <D1FieldMessage
              validation-message="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            />
          </DemoBox>

          <DemoBox>
            <D1FieldMessage
              helper-message="Học tiếng Việt — Подсказка поля 🚀"
              validation-message="Lỗi xác thực — Ошибка ввода 🔒"
              counter-show
              :counter="24"
              :maxlength="100"
            />
          </DemoBox>

          <DemoBox dir="rtl">
            <D1FieldMessage
              helper-message="أدخل رقم الهاتف مع رمز الدولة"
              counter-show
              :counter="12"
              :maxlength="40"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Controls">
        <DemoFlex direction="column">
          <DemoFlex>
            <D1Button label="Toggle Helper" outline @click="toggleHelper"/>
            <D1Button
              label="Toggle Warning"
              :selected="Boolean(interactiveWarning)"
              outline
              @click="toggleWarning"
            />
            <D1Button
              label="Toggle Validation"
              :selected="Boolean(interactiveValidation)"
              outline
              @click="toggleValidation"
            />
            <D1Button
              label="Toggle Disabled"
              :selected="interactiveDisabled"
              outline
              @click="interactiveDisabled = !interactiveDisabled"
            />
            <D1Button
              label="Toggle Force Show"
              :selected="interactiveForceShow"
              outline
              @click="interactiveForceShow = !interactiveForceShow"
            />
            <D1Button
              label="Toggle HTML"
              :selected="interactiveHasHtmlCode"
              outline
              @click="interactiveHasHtmlCode = !interactiveHasHtmlCode"
            />
            <D1Button
              label="Toggle Skeleton"
              :selected="interactiveSkeleton"
              outline
              @click="interactiveSkeleton = !interactiveSkeleton"
            />
            <D1Button
              label="Toggle Counter"
              :selected="interactiveCounterShow"
              outline
              @click="interactiveCounterShow = !interactiveCounterShow"
            />
            <D1Button label="Counter +10" outline @click="incrementCounter"/>
            <D1Button
              label="Toggle Slots"
              :selected="interactiveUseSlots"
              outline
              @click="interactiveUseSlots = !interactiveUseSlots"
            />
          </DemoFlex>

          <DemoBox data-testid="interactive-preview">
            <D1FieldMessage
              :helper-message="interactiveHelper"
              :warning-message="interactiveWarning"
              :validation-message="interactiveValidation"
              :disabled="interactiveDisabled"
              :force-show="interactiveForceShow"
              :has-html-code="interactiveHasHtmlCode"
              :is-skeleton="interactiveSkeleton"
              :counter-show="interactiveCounterShow"
              :counter="interactiveCounter"
              :maxlength="50"
            >
              <template v-if="interactiveUseSlots" #helper>
                <span><strong>Slot Helper:</strong> {{ interactiveHelper || 'Empty' }}</span>
              </template>
              <template v-if="interactiveUseSlots && interactiveWarning" #warning>
                <span><strong>Slot Warning:</strong> {{ interactiveWarning }}</span>
              </template>
              <template v-if="interactiveUseSlots && interactiveValidation" #validation>
                <span><strong>Slot Validation:</strong> {{ interactiveValidation }}</span>
              </template>
            </D1FieldMessage>
          </DemoBox>

          <DemoValue label="State" :value="stateSummary"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-field-message-page {
  &__label {
    display: block;
    margin-bottom: 6px;
  }

  &__input {
    width: 100%;
    padding: 6px 10px;
    margin-bottom: 6px;
    border: 1px solid currentColor;
    border-radius: 6px;
    background: transparent;
    color: inherit;
  }

  &__constrained {
    max-width: 280px;
  }

  &__counter-custom {
    font-weight: 600;
  }
}
</style>
