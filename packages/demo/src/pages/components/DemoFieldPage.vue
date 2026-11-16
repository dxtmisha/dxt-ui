<script setup lang="ts">
import { computed, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const interactiveValue = ref<string>('Hello Field')
const interactiveFocus = ref<boolean>(false)
const interactiveSelected = ref<boolean>(false)
const interactiveDisabled = ref<boolean>(false)
const interactiveReadonly = ref<boolean>(false)
const interactiveLoading = ref<boolean>(false)
const interactiveValidation = ref<string>('')
const interactiveForceShow = ref<boolean>(false)
const interactiveSkeleton = ref<boolean>(false)
const interactiveCounterTop = ref<boolean>(false)
const interactiveStyle = ref<'classic' | 'outlined' | 'filled' | 'tonal' | 'boxed' | 'basic'>('outlined')
const lastEvent = ref<string>('none')

const interactiveSummary = computed<string>(() => JSON.stringify({
  value: interactiveValue.value,
  style: interactiveStyle.value,
  focus: interactiveFocus.value,
  selected: interactiveSelected.value,
  disabled: interactiveDisabled.value,
  readonly: interactiveReadonly.value,
  loading: interactiveLoading.value,
  validation: interactiveValidation.value,
  forceShowMessage: interactiveForceShow.value,
  isSkeleton: interactiveSkeleton.value,
  counterTop: interactiveCounterTop.value
}))

const onFieldClick = (_event: MouseEvent, options: EventClickValue): void => {
  lastEvent.value = `${options.type}:${String(options.value ?? '')}`

  if (options.type === 'cancel') {
    interactiveValue.value = ''
  }
}

const toggleValidation = (): void => {
  interactiveValidation.value = interactiveValidation.value
    ? ''
    : 'Validation error message'
}

const cycleStyle = (): void => {
  const styles: Array<'classic' | 'outlined' | 'filled' | 'tonal' | 'boxed' | 'basic'> = [
    'classic',
    'outlined',
    'filled',
    'tonal',
    'boxed',
    'basic'
  ]
  const index = styles.indexOf(interactiveStyle.value)
  interactiveStyle.value = styles[(index + 1) % styles.length] ?? 'outlined'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Field">
    <D1Section>
      <D1Group label="Visual Styles">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field classic is-value label="Classic (default)" helper-message="Default classic layout">
              <template #default="{ binds }">
                <input v-bind="binds" value="Classic value" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field basic is-value label="Basic" helper-message="Minimal basic layout">
              <template #default="{ binds }">
                <input v-bind="binds" value="Basic value" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field boxed is-value label="Boxed" helper-message="Boxed container style">
              <template #default="{ binds }">
                <input v-bind="binds" value="Boxed value" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field tonal is-value label="Tonal" helper-message="Soft tonal surface">
              <template #default="{ binds }">
                <input v-bind="binds" value="Tonal value" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field filled is-value label="Filled" helper-message="Filled bottom-border style">
              <template #default="{ binds }">
                <input v-bind="binds" value="Filled value" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field outlined is-value label="Outlined" helper-message="Outlined border with floating label">
              <template #default="{ binds }">
                <input v-bind="binds" value="Outlined value" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Validation">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field outlined focus label="Focused" is-value>
              <template #default="{ binds }">
                <input v-bind="binds" value="Active focus" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field outlined selected label="Selected" is-value>
              <template #default="{ binds }">
                <input v-bind="binds" value="Selected state" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field outlined readonly label="Readonly" is-value helper-message="Cannot be edited">
              <template #default="{ binds }">
                <input v-bind="binds" value="Read-only text" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              disabled
              label="Disabled"
              is-value
              validation-message="Hidden when disabled"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Disabled text" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              disabled
              force-show-message
              label="Disabled + Force Show Message"
              is-value
              validation-message="Forced error while disabled"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Disabled with forced error" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              loading
              label="Loading"
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Loading data..." readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              required
              label="Required & Validation"
              is-value
              validation-message="Please provide a valid value"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Invalid value" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes, Width & Palettes">
        <DemoFlex direction="column">
          <DemoBox>
            <DemoFlex>
              <D1Field outlined size="sm" label="Small (sm)" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="sm" readonly/>
                </template>
              </D1Field>
              <D1Field outlined size="md" label="Medium (md)" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="md" readonly/>
                </template>
              </D1Field>
              <D1Field outlined size="lg" label="Large (lg)" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="lg" readonly/>
                </template>
              </D1Field>
              <D1Field outlined size="display" label="Display" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="display" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>

          <DemoBox>
            <DemoFlex direction="column">
              <D1Field outlined width="260px" label="Fixed width 260px" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="260px" readonly/>
                </template>
              </D1Field>
              <D1Field outlined block label="Block width (100%)" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Full container width" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>

          <DemoBox>
            <DemoFlex>
              <D1Field outlined palette="emerald" focus label="Emerald Palette" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Emerald" readonly/>
                </template>
              </D1Field>
              <D1Field tonal palette="violet" label="Violet Tonal" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Violet" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons, Cancel & Arrows">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field
              outlined
              label="Leading & Trailing Icons"
              icon="search"
              icon-trailing="visibility"
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Search query" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              label="Icon Turn & Object Config"
              :icon="{ icon: 'arrow_drop_down', palette: 'blue' }"
              icon-turn
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Turned icon" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              label="Cancel Always"
              cancel="always"
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Clearable text" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <DemoFlex>
              <D1Field
                outlined
                arrow-carousel
                arrow-align="right"
                label="Carousel (right)"
                is-value
                :disabled-previous="true"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Slide 1" readonly/>
                </template>
              </D1Field>
              <D1Field
                outlined
                arrow-stepper
                arrow-align="center"
                align="center"
                label="Stepper (center)"
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="42" readonly/>
                </template>
              </D1Field>
              <D1Field
                outlined
                arrow-stepper
                arrow-align="left"
                align="right"
                label="Stepper (left, align right)"
                is-value
                :disabled-next="true"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="100" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Prefix, Suffix, Caption & Counter">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field
              outlined
              label="Price"
              prefix="$"
              suffix="USD"
              caption="Tax incl."
              value="199.00"
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="199.00" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              classic
              label="Counter Top"
              counter-top
              counter-show
              :counter="24"
              :maxlength="60"
              helper-message="Counter positioned inside top label"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Sample description text" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              label="Counter Bottom + HTML Helper"
              counter-show
              :counter="18"
              :maxlength="40"
              counter-template="[c] / [m]"
              has-html-code
              helper-message="Use <strong>letters</strong> and digits"
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Account identifier" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Skeleton">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field classic is-value value="Slot content">
              <template #label>
                <span>Custom <strong>Label Slot</strong></span>
              </template>
              <template #leading>
                <span class="demo-field-page__badge">L</span>
              </template>
              <template #prefix>PRE</template>
              <template #default="{ binds }">
                <input v-bind="binds" value="Slot content" readonly/>
              </template>
              <template #suffix>SUF</template>
              <template #caption>CAP</template>
              <template #trailing>
                <span class="demo-field-page__badge">T</span>
              </template>
              <template #helper>
                <span>Helper slot message</span>
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox>
            <D1Skeleton :active="true">
              <D1Field
                classic
                is-skeleton
                label="Skeleton Field"
                helper-message="Loading field state"
                counter-show
                :counter="12"
                :maxlength="40"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Hidden under skeleton" readonly/>
                </template>
              </D1Field>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive & Multilingual (RTL/LTR)">
        <DemoFlex direction="column">
          <DemoFlex>
            <D1Button label="Style" outline @click="cycleStyle"/>
            <D1Button label="Focus" :selected="interactiveFocus" outline @click="interactiveFocus = !interactiveFocus"/>
            <D1Button label="Selected" :selected="interactiveSelected" outline @click="interactiveSelected = !interactiveSelected"/>
            <D1Button label="Disabled" :selected="interactiveDisabled" outline @click="interactiveDisabled = !interactiveDisabled"/>
            <D1Button label="Readonly" :selected="interactiveReadonly" outline @click="interactiveReadonly = !interactiveReadonly"/>
            <D1Button label="Loading" :selected="interactiveLoading" outline @click="interactiveLoading = !interactiveLoading"/>
            <D1Button label="Validation" :selected="Boolean(interactiveValidation)" outline @click="toggleValidation"/>
            <D1Button label="Force Show" :selected="interactiveForceShow" outline @click="interactiveForceShow = !interactiveForceShow"/>
            <D1Button label="Skeleton" :selected="interactiveSkeleton" outline @click="interactiveSkeleton = !interactiveSkeleton"/>
            <D1Button label="Counter Top" :selected="interactiveCounterTop" outline @click="interactiveCounterTop = !interactiveCounterTop"/>
          </DemoFlex>

          <DemoBox data-testid="interactive-field-box">
            <D1Field
              :classic="interactiveStyle === 'classic'"
              :outlined="interactiveStyle === 'outlined'"
              :filled="interactiveStyle === 'filled'"
              :tonal="interactiveStyle === 'tonal'"
              :boxed="interactiveStyle === 'boxed'"
              :basic="interactiveStyle === 'basic'"
              :focus="interactiveFocus"
              :selected="interactiveSelected"
              :disabled="interactiveDisabled"
              :readonly="interactiveReadonly"
              :loading="interactiveLoading"
              :validation-message="interactiveValidation"
              :force-show-message="interactiveForceShow"
              :is-skeleton="interactiveSkeleton"
              :counter-top="interactiveCounterTop"
              :is-value="Boolean(interactiveValue)"
              :cancel-show="Boolean(interactiveValue)"
              :value="interactiveValue"
              :counter="interactiveValue.length"
              :maxlength="50"
              counter-show
              label="Interactive Field"
              prefix=">"
              suffix="txt"
              icon="edit"
              helper-message="Type or click clear icon"
              @click="onFieldClick"
            >
              <template #default="{ binds }">
                <input
                  v-model="interactiveValue"
                  v-bind="binds"
                  type="text"
                />
              </template>
            </D1Field>
          </DemoBox>

          <DemoBox dir="rtl">
            <D1Field
              outlined
              label="رقم الهاتف — Học tiếng Việt"
              prefix="+84"
              suffix="VN"
              is-value
              helper-message="Поддержка RTL и многоязычного текста 🚀"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="0912345678" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoValue label="Last Event" :value="lastEvent"/>
          <DemoValue label="State" :value="interactiveSummary"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-field-page {
  &__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
