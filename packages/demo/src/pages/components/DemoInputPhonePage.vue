<script setup lang="ts">
import { ref } from 'vue'
import type { InputPhoneExpose } from '@dxtmisha/constructor/InputPhone'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valueBasic = ref<string>('')
const valueModel = ref<string>('12025550147')
const valueUS = ref<string>('')
const valueDE = ref<string>('')
const valueVN = ref<string>('84912345678')
const valueBlocked = ref<string>('')
const valueMaskAttrs = ref<string>('')
const valueValidation = ref<string>('7900')
const valueLengthMask = ref<string>('49301234')
const valueConflictCode = ref<string>('12025550147')

const exposedRef = ref<InputPhoneExpose>()
const exposedResult = ref<string>('none')

const onReadExposed = (): void => {
  const value = exposedRef.value?.getValue()
  const valid = exposedRef.value?.checkValidity()
  const message = exposedRef.value?.getValidationMessage()

  exposedResult.value = `value=${String(value)}, valid=${String(valid)}, message=${message || 'none'}`
}

const onSetExposed = (): void => {
  exposedRef.value?.setValue('4930123456')
  onReadExposed()
}

const onClearExposed = (): void => {
  exposedRef.value?.clear()
  onReadExposed()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputPhone">
    <D1Section class="demo-input-phone-page">
      <D1Group label="Basic & v-model">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueBasic"
              label="Phone Number (v-model:value)"
              placeholder="Enter phone number"
            />
            <DemoValue :value="valueBasic"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model="valueModel"
              label="Controlled (v-model)"
              helper-message="Auto-detects US (+1)"
            />
            <DemoValue :value="valueModel"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Static Value Prop"
              value="79001234567"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Country Default & Dial Code Options">
        <DemoFlex direction="column">
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                v-model:value="valueUS"
                country-default="US"
                label="US Default"
              />
              <DemoValue :value="valueUS"/>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                v-model:value="valueDE"
                country-default="DE"
                label="Germany Default"
              />
              <DemoValue :value="valueDE"/>
            </DemoBox>
          </DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueVN"
              country-default="VN"
              block
              label="Dial Code Label (code)"
              :input-phone-dial-code-attrs="{ labelType: 'code', iconArrowDown: 'expand_more' }"
            />
            <DemoValue :value="valueVN"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              country-default="US"
              block
              label="Dial Code Label (name)"
              :input-phone-dial-code-attrs="{ labelType: 'name', menuCountryAttrs: { list: ['US', 'DE', 'RU', 'VN'] } }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Country Blocking & Mask Attrs">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueBlocked"
              country-default="DE"
              :country-block="true"
              label="Locked to Germany (DE)"
              helper-message="Hides dial code selector and keeps local mask"
            />
            <DemoValue :value="valueBlocked"/>
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueMaskAttrs"
              country-default="US"
              label="Custom Mask Attrs"
              :mask-attrs="{ view: '0' }"
            />
            <DemoValue :value="valueMaskAttrs"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Appearances & Layout">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Classic (default)" classic value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Filled" filled value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Outlined" outlined value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Tonal" tonal value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Boxed" boxed value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Basic" basic value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Custom Width (280px)" outlined width="280px" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Block Width" outlined block value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Field Palette Blue" outlined :field-attrs="{ palette: 'blue' }" value="12025550147"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes & Alignments">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Small (sm)" size="sm" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Medium (md)" size="md" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Large (lg)" size="lg" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Display" size="display" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Align Left" align="left" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Align Center" align="center" value="12025550147"/></DemoBox>
          <DemoBox><D1InputPhone label="Align Right" align="right" value="12025550147"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Validation & Messages">
        <DemoFlex>
          <DemoBox>
            <D1InputPhone
              label="Required Field"
              required
              helper-message="Required phone field"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              v-model:value="valueValidation"
              label="Pattern & ValidationCode"
              pattern="^7[0-9]{10}$"
              :validation-code="{ patternMismatch: 'Enter 11 digits starting with 7' }"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Forced Validation Message"
              validation-message="Phone number is invalid"
              force-show-message
              value="123"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons, Cancel & Loading">
        <DemoFlex direction="column">
          <DemoFlex>
            <DemoBox>
              <D1InputPhone
                label="Cancel Always"
                cancel="always"
                value="12025550147"
              />
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                label="Cancel None"
                cancel="none"
                value="12025550147"
              />
            </DemoBox>
          </DemoFlex>
          <DemoBox>
            <D1InputPhone
              label="With Trailing Icon"
              block
              icon-trailing="call"
              value="12025550147"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Loading Boolean"
              block
              loading
              value="12025550147"
            />
          </DemoBox>
          <DemoBox>
            <D1InputPhone
              label="Loading Object"
              block
              :loading="{ visible: true, value: 65, max: 100 }"
              value="12025550147"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Skeleton">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Disabled" disabled value="79001234567"/></DemoBox>
          <DemoBox><D1InputPhone label="Readonly" readonly value="79001234567"/></DemoBox>
          <DemoBox><D1InputPhone label="Focused" focus value="79001234567"/></DemoBox>
          <DemoBox><D1InputPhone label="Selected" selected value="79001234567"/></DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1InputPhone label="Skeleton" is-skeleton value="79001234567"/>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Attributes">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone label="Prefix, Suffix & Trailing" block value="12025550147">
              <template #prefix>
                <span>Tel:</span>
              </template>
              <template #suffix>
                <span>EXT</span>
              </template>
              <template #trailing>
                <span>[OK]</span>
              </template>
            </D1InputPhone>
          </DemoBox>
          <DemoFlex>
            <DemoBox>
              <D1InputPhone label="Leading Slot (with countryBlock)" country-default="US" country-block value="2025550147">
                <template #leading>
                  <span>+1</span>
                </template>
              </D1InputPhone>
            </DemoBox>
            <DemoBox>
              <D1InputPhone label="Label:" label-id="phone-custom-label" value="12025550147">
                <template #label>
                  <span> Custom</span>
                </template>
              </D1InputPhone>
            </DemoBox>
            <DemoBox>
              <D1InputPhone
                id="custom-phone-id"
                name="custom-phone-name"
                label="Custom Attrs"
                :tabindex="0"
                :detail="{ origin: 'demo' }"
                :field-attrs="{ 'data-custom-field': 'yes' }"
                :input-attrs="{ 'data-custom-input': 'yes' }"
                :field-label-attrs="{ 'data-custom-label': 'yes' }"
                :field-message-attrs="{ 'data-custom-message': 'yes' }"
                helper-message="Attributed phone field"
                value="12025550147"
              />
            </DemoBox>
          </DemoFlex>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary Cases">
        <DemoFlex>
          <DemoBox><D1InputPhone label="Empty Value"/></DemoBox>
          <DemoBox><D1InputPhone label="Unicode / Việt / Emoji 🚀" helper-message="Học tiếng Việt / Привет" value="84912345678"/></DemoBox>
          <DemoBox><D1InputPhone label="<img src=x onerror=alert(1)>" value="12025550147"/></DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Exposed API">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone
              ref="exposedRef"
              label="Exposed Target"
              required
              country-default="US"
            />
          </DemoBox>
          <DemoFlex>
            <D1Button label="Read Values" @click="onReadExposed"/>
            <D1Button label="setValue('4930123456')" @click="onSetExposed"/>
            <D1Button label="clear()" @click="onClearExposed"/>
          </DemoFlex>
          <DemoValue :value="exposedResult"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone
              label="Event Tracker"
              @update:value="() => onEvent('update:value')"
              @update:model-value="() => onEvent('update:modelValue')"
              @input="(event, value) => onEvent('input', event, value)"
              @input-lite="(value) => onEvent('inputLite', value)"
              @change="(event, value) => onEvent('change', event, value)"
              @change-lite="(value) => onEvent('changeLite', value)"
            />
          </DemoBox>
          <DemoValue :value="eventName"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dynamic Mask Length & Conflicting Country Codes">
        <DemoFlex direction="column">
          <DemoBox>
            <D1InputPhone
              v-model:value="valueLengthMask"
              block
              country-default="DE"
              label="Mask Change by Length"
              helper-message="Mask adapts dynamically as digits grow/shrink (e.g. DE, CN, MM, ID)"
              :input-phone-dial-code-attrs="{ labelType: 'code' }"
            />
            <DemoValue :value="valueLengthMask"/>
            <DemoFlex>
              <D1Button label="DE 6 digits" @click="valueLengthMask = '49301234'"/>
              <D1Button label="DE 10 digits" @click="valueLengthMask = '493012345678'"/>
              <D1Button label="DE 11 digits" @click="valueLengthMask = '4930123456789'"/>
              <D1Button label="CN 11 digits" @click="valueLengthMask = '8613800138000'"/>
            </DemoFlex>
          </DemoBox>

          <DemoBox>
            <D1InputPhone
              v-model:value="valueConflictCode"
              block
              country-default="US"
              label="Conflicting Country Codes"
              helper-message="Resolves overlapping prefixes (+1 US/CA/NANP, +7 RU/KZ, +39 IT/VA, +44 GB/GG/JE/IM, +358 FI/AX, +599 CW/BQ, +672 AQ/NF)"
              :input-phone-dial-code-attrs="{ labelType: 'name' }"
            />
            <DemoValue :value="valueConflictCode"/>
            <DemoFlex>
              <D1Button label="US (+1-202)" @click="valueConflictCode = '12025550147'"/>
              <D1Button label="CA (+1-416)" @click="valueConflictCode = '14165550147'"/>
              <D1Button label="RU (+7-900)" @click="valueConflictCode = '79001234567'"/>
              <D1Button label="KZ (+7-701)" @click="valueConflictCode = '77011234567'"/>
              <D1Button label="GB (+44-20)" @click="valueConflictCode = '442079460958'"/>
              <D1Button label="GG (+44-1481)" @click="valueConflictCode = '441481123456'"/>
            </DemoFlex>
          </DemoBox>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>
