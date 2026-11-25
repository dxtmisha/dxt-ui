<script setup lang="ts">
import { computed, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { FieldProps } from '@dxtmisha/d1/D1Field'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type FieldStyleVariant = 'classic' | 'outlined' | 'filled' | 'tonal' | 'boxed' | 'basic'

const paletteList: NonNullable<FieldProps['palette']>[] = [
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

const styleList: FieldStyleVariant[] = [
  'classic',
  'outlined',
  'filled',
  'tonal',
  'boxed',
  'basic'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const interactiveValue = ref<string>('Hello Field')
const interactiveFocus = ref<boolean>(false)
const interactiveSelected = ref<boolean>(false)
const interactiveDisabled = ref<boolean>(false)
const interactiveReadonly = ref<boolean>(false)
const interactiveLoading = ref<boolean>(false)
const interactiveWarning = ref<string>('')
const interactiveValidation = ref<string>('')
const interactiveForceShow = ref<boolean>(false)
const interactiveSkeleton = ref<boolean>(false)
const interactiveCounterTop = ref<boolean>(false)
const interactiveStyle = ref<FieldStyleVariant>('outlined')

const blockedClickCount = ref<number>(0)
const formEmail = ref<string>('')
const formStatus = ref<string>('Not submitted')
const isLifecycleMounted = ref<boolean>(true)

const interactiveSummary = computed<string>(() => JSON.stringify({
  value: interactiveValue.value,
  style: interactiveStyle.value,
  focus: interactiveFocus.value,
  selected: interactiveSelected.value,
  disabled: interactiveDisabled.value,
  readonly: interactiveReadonly.value,
  loading: interactiveLoading.value,
  warning: interactiveWarning.value,
  validation: interactiveValidation.value,
  forceShowMessage: interactiveForceShow.value,
  isSkeleton: interactiveSkeleton.value,
  counterTop: interactiveCounterTop.value
}))

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleFieldClick = (
  mouseEvent: MouseEvent,
  options: EventClickValue
): void => {
  trackEvent('click', {
    eventType: mouseEvent.type,
    type: options.type,
    value: options.value,
    detail: options.detail
  })

  if (options.type === 'cancel') {
    interactiveValue.value = ''
  }
}

const handleFieldClickLite = (options: EventClickValue): void => {
  trackEvent('clickLite', {
    type: options.type,
    value: options.value,
    detail: options.detail
  })
}

const handleBlockedClick = (): void => {
  blockedClickCount.value += 1
}

const toggleWarning = (): void => {
  interactiveWarning.value = interactiveWarning.value
    ? ''
    : 'Non-blocking warning message'
}

const toggleValidation = (): void => {
  interactiveValidation.value = interactiveValidation.value
    ? ''
    : 'Validation error message'
}

const cycleStyle = (): void => {
  const currentIndex = styleList.indexOf(interactiveStyle.value)
  interactiveStyle.value = styleList[(currentIndex + 1) % styleList.length] ?? 'outlined'
}

const handleFormSubmit = (): void => {
  formStatus.value = formEmail.value
    ? `Form submitted (${formEmail.value})`
    : 'Form blocked (email required)'
}

const handleFormReset = (): void => {
  formEmail.value = ''
  formStatus.value = 'Form reset'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Field" class="demo-field-page">
    <D1Section>
      <D1Group label="Visual Styles (All 6)">
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
            <DemoFlex>
              <D1Field outlined loading label="Loading (boolean)" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Loading data..." readonly/>
                </template>
              </D1Field>
              <D1Field
                outlined
                :loading="{ visible: true, linear: false, circular: true }"
                label="Loading (object)"
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Object progress config" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>

          <DemoBox data-testid="warning-field-box">
            <DemoFlex direction="column">
              <D1Field
                outlined
                warning
                label="Warning (Highlight Only)"
                is-value
                helper-message="Helper text remains visible without warningMessage"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Needs review" readonly/>
                </template>
              </D1Field>

              <D1Field
                outlined
                warning
                label="Warning Message"
                is-value
                warning-message="Please verify this value before submitting"
                warning-id="demo-field-warning-msg"
                helper-message="Helper hidden while warningMessage is active"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Unverified value" readonly/>
                </template>
              </D1Field>

              <D1Field
                tonal
                warning
                label="Tonal Warning"
                is-value
                warning-message="Tonal surface with warning styling"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Tonal warning" readonly/>
                </template>
              </D1Field>

              <D1Field
                outlined
                warning
                label="Validation Priority Over Warning"
                is-value
                warning-message="Suppressed warning text"
                validation-message="Validation error takes priority over warning"
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Conflicting state" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>

          <DemoBox>
            <D1Field
              outlined
              required
              label="Required & Validation"
              is-value
              validation-message="Please provide a valid value"
              validation-id="demo-field-validation-msg"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Invalid value" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes (All 4), Width & Alignments">
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
              <D1Field
                outlined
                width="custom"
                class="demo-field-page__custom-width"
                label="Custom width token (320px)"
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Custom width" readonly/>
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
              <D1Field outlined align="left" label="Align Left" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Left aligned" readonly/>
                </template>
              </D1Field>
              <D1Field outlined align="center" label="Align Center" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Center aligned" readonly/>
                </template>
              </D1Field>
              <D1Field outlined align="right" label="Align Right" is-value>
                <template #default="{ binds }">
                  <input v-bind="binds" value="Right aligned" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <div class="demo-field-page__palettes">
          <D1Field
            v-for="paletteName in paletteList"
            :key="paletteName"
            outlined
            focus
            is-value
            :palette="paletteName"
            :label="paletteName"
          >
            <template #default="{ binds }">
              <input v-bind="binds" :value="paletteName" readonly/>
            </template>
          </D1Field>
        </div>
      </D1Group>

      <D1Group label="Icons, Cancel & Arrows">
        <DemoFlex direction="column">
          <DemoBox>
            <DemoFlex>
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
              <D1Field
                outlined
                label="Icon Modifiers & Object"
                :icon="{ icon: 'arrow_drop_down', palette: 'blue' }"
                icon-turn
                icon-dir
                icon-palette
                :icon-attrs="{ size: 'md' }"
                icon-trailing="info"
                icon-trailing-turn-only
                icon-trailing-dir-only
                icon-trailing-palette
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Configured icons" readonly/>
                </template>
              </D1Field>
              <D1Field
                outlined
                label="Hidden & Null Icons"
                icon="search"
                icon-hide
                :icon-trailing="null"
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="iconHide active" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
          </DemoBox>

          <DemoBox>
            <DemoFlex>
              <D1Field
                outlined
                label="Cancel Auto (Shown)"
                cancel="auto"
                cancel-show
                text-cancel="Clear field value"
                icon-close="close"
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Auto cancel" readonly/>
                </template>
              </D1Field>
              <D1Field
                outlined
                label="Cancel Always"
                cancel="always"
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Always clearable" readonly/>
                </template>
              </D1Field>
              <D1Field
                outlined
                label="Cancel None"
                cancel="none"
                cancel-show
                is-value
              >
                <template #default="{ binds }">
                  <input v-bind="binds" value="Cancel hidden" readonly/>
                </template>
              </D1Field>
            </DemoFlex>
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
                icon-arrow-left="chevron_left"
                icon-arrow-right="chevron_right"
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
                icon-minus="remove"
                icon-plus="add"
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

      <D1Group label="Prefix, Suffix, Caption, Counter & Delegated Attrs">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field
              outlined
              label="Price"
              prefix="$"
              suffix="USD"
              caption="Tax incl."
              caption-decorative
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
              counter-id="demo-field-top-counter"
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
              label="Counter Bottom + Delegated Attrs"
              counter-show
              :counter="18"
              :maxlength="40"
              counter-template="[c] / [m]"
              has-html-code
              helper-message="Use <strong>letters</strong> and digits"
              :field-label-attrs="{ 'data-testid': 'field-label-attrs-target' }"
              :field-message-attrs="{ 'data-testid': 'field-message-attrs-target' }"
              :field-counter-attrs="{ 'data-testid': 'field-counter-attrs-target' }"
              is-value
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Account identifier" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots, Scoped Bindings & Skeleton">
        <DemoFlex direction="column">
          <DemoBox data-testid="slots-field-box">
            <D1Field
              id="demo-field-slots"
              classic
              is-value
              label="Label prop"
              helper-message="Helper message text"
              value="Slot content"
            >
              <template #label>
                <span>Custom <strong>Label Slot</strong></span>
              </template>
              <template #leading="{ id }">
                <span class="demo-field-page__badge" :data-control-id="id">L</span>
              </template>
              <template #prefix>PRE</template>
              <template #default="{ id, className, classHidden, classForFocus, binds }">
                <input v-bind="binds" value="Slot content" readonly/>
                <span class="demo-field-page__meta" :data-slot-classes="`${id}|${className}|${classHidden}|${classForFocus}`"/>
              </template>
              <template #suffix>SUF</template>
              <template #caption>CAP</template>
              <template #trailing="{ id }">
                <span class="demo-field-page__badge" :data-control-id="id">T</span>
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

      <D1Group label="Interactive Controls, Events & Href">
        <DemoFlex direction="column">
          <DemoFlex>
            <D1Button label="Style" size="sm" outline @click="cycleStyle"/>
            <D1Button label="Focus" size="sm" :selected="interactiveFocus" outline @click="interactiveFocus = !interactiveFocus"/>
            <D1Button label="Selected" size="sm" :selected="interactiveSelected" outline @click="interactiveSelected = !interactiveSelected"/>
            <D1Button label="Disabled" size="sm" :selected="interactiveDisabled" outline @click="interactiveDisabled = !interactiveDisabled"/>
            <D1Button label="Readonly" size="sm" :selected="interactiveReadonly" outline @click="interactiveReadonly = !interactiveReadonly"/>
            <D1Button label="Loading" size="sm" :selected="interactiveLoading" outline @click="interactiveLoading = !interactiveLoading"/>
            <D1Button label="Warning" size="sm" :selected="Boolean(interactiveWarning)" outline @click="toggleWarning"/>
            <D1Button label="Validation" size="sm" :selected="Boolean(interactiveValidation)" outline @click="toggleValidation"/>
            <D1Button label="Force Show" size="sm" :selected="interactiveForceShow" outline @click="interactiveForceShow = !interactiveForceShow"/>
            <D1Button label="Skeleton" size="sm" :selected="interactiveSkeleton" outline @click="interactiveSkeleton = !interactiveSkeleton"/>
            <D1Button label="Counter Top" size="sm" :selected="interactiveCounterTop" outline @click="interactiveCounterTop = !interactiveCounterTop"/>
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
              :warning="Boolean(interactiveWarning)"
              :warning-message="interactiveWarning"
              :validation-message="interactiveValidation"
              :force-show-message="interactiveForceShow"
              :is-skeleton="interactiveSkeleton"
              :counter-top="interactiveCounterTop"
              :is-value="Boolean(interactiveValue)"
              :cancel-show="Boolean(interactiveValue)"
              :value="interactiveValue"
              :detail="{ source: 'demo-field' }"
              :index="1"
              :counter="interactiveValue.length"
              :maxlength="50"
              counter-show
              label="Interactive Field"
              prefix=">"
              suffix="txt"
              icon="edit"
              helper-message="Type or click clear icon"
              @click="handleFieldClick"
              @click-lite="handleFieldClickLite"
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

          <DemoBox>
            <D1Field
              outlined
              label="Link Href Field"
              href="#demo-field-href-anchor"
              is-value
              helper-message="Provides href binding via EventClickInclude"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Linked field" readonly/>
              </template>
            </D1Field>
          </DemoBox>

          <DemoValue label="Event Name" :value="eventName"/>
          <DemoValue label="Event Payload" :value="eventPayload"/>
          <DemoValue label="State" :value="interactiveSummary"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field
              outlined
              disabled
              cancel="always"
              arrow-stepper
              is-value
              label="Blocked Disabled Field"
              @click="handleBlockedClick"
              @click-lite="handleBlockedClick"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Cannot trigger click" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field
              outlined
              readonly
              cancel="always"
              is-value
              label="Readonly Field (Cancel Hidden)"
              @click="handleBlockedClick"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Readonly protected" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Blocked Click Count" :value="blockedClickCount"/>
      </D1Group>

      <D1Group label="Form Integration">
        <form id="demo-field-form" @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <D1Field
            outlined
            required
            label="Email Address"
            :is-value="Boolean(formEmail)"
            helper-message="Enter an email address to submit"
          >
            <template #default="{ binds }">
              <input
                v-model="formEmail"
                v-bind="binds"
                type="email"
                name="email"
                required
              />
            </template>
          </D1Field>
          <DemoFlex align="center">
            <D1Button label="Submit Form" tag="button" type="submit" size="sm" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" size="sm" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Accessibility (ARIA, IDs & Keyboard)">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field
              id="demo-field-a11y"
              outlined
              is-value
              label="Accessible Identifiers"
              prefix="ID"
              suffix="OK"
              label-id="demo-field-a11y-label"
              prefix-id="demo-field-a11y-prefix"
              suffix-id="demo-field-a11y-suffix"
              helper-id="demo-field-a11y-helper"
              counter-id="demo-field-a11y-counter"
              counter-show
              :counter="10"
              :maxlength="30"
              helper-message="Binds prefix, suffix, helper, and counter IDs to aria-describedby"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="ARIA linked" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field
              :id="101"
              classic
              is-value
              label="Numeric ID & Invalid ARIA"
              validation-id="demo-field-a11y-validation"
              validation-message="Sets aria-invalid=true on control binds"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Invalid ARIA state" readonly/>
              </template>
            </D1Field>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary, RTL & Edge Cases">
        <DemoFlex direction="column">
          <DemoBox>
            <D1Field outlined label="" helper-message="Empty label boundary">
              <template #default="{ binds }">
                <input v-bind="binds" value="" aria-label="Empty label field" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field outlined label="   " helper-message="Whitespace label boundary">
              <template #default="{ binds }">
                <input v-bind="binds" value="   " aria-label="Whitespace label field" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field
              outlined
              is-value
              :id="0"
              :label="0"
              :prefix="0"
              :suffix="0"
              :caption="0"
              :value="0"
              counter-show
              :counter="0"
              :maxlength="10"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="0" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field outlined is-value label="A" prefix="P" suffix="S">
              <template #default="{ binds }">
                <input v-bind="binds" value="X" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field
              outlined
              is-value
              label="Very long multi-sentence field label designed to verify truncation and layout stability across desktop and mobile viewports"
              helper-message="Extended multi-sentence helper message checking vertical alignment without horizontal overflow"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="Long content value" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox>
            <D1Field
              outlined
              is-value
              label="<img src=x onerror=alert(1)>"
              helper-message="<script>alert('xss')</script>"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="<img src=x onerror=alert(1)>" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox dir="rtl">
            <D1Field
              outlined
              label="رقم الهاتف — Học tiếng Việt / Кириллица 🚀"
              prefix="+84"
              suffix="VN"
              is-value
              helper-message="RTL direction and multilingual label support"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="0912345678" readonly/>
              </template>
            </D1Field>
          </DemoBox>
          <DemoBox class="demo-field-page__narrow" size="sm">
            <D1Field
              outlined
              is-value
              label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              helper-message="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            >
              <template #default="{ binds }">
                <input v-bind="binds" value="CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC" readonly/>
              </template>
            </D1Field>
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
        <D1Field
          v-if="isLifecycleMounted"
          outlined
          is-value
          label="Mounted Field"
          prefix="$"
          suffix="USD"
        >
          <template #default="{ binds }">
            <input v-bind="binds" value="100" readonly/>
          </template>
        </D1Field>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-field-page {
  &__palettes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 16px;
    max-width: 100%;
  }

  &__custom-width {
    --d1-field-sys-width: 320px;
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }

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

  &__meta {
    display: none;
  }
}
</style>
