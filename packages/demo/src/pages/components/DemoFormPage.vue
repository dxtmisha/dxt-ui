<script setup lang="ts">
import { ref } from 'vue'
import type { FormElementsData, FormElementsValues, FormExpose } from '@dxtmisha/constructor/Form'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const formRef = ref<FormExpose | null>(null)
const nativeFormRef = ref<FormExpose | null>(null)
const controlledFormRef = ref<FormExpose | null>(null)
const validationFormRef = ref<FormExpose | null>(null)

const roleOptions = [
  { label: 'Frontend Developer', value: 'frontend' },
  { label: 'Backend Developer', value: 'backend' },
  { label: 'Fullstack Developer', value: 'fullstack' },
  { label: 'UI/UX Designer', value: 'designer' },
  { label: 'Product Manager', value: 'pm' }
]

const planOptions = [
  { label: 'Free Tier', value: 'free' },
  { label: 'Pro Plan ($19/mo)', value: 'pro' },
  { label: 'Enterprise Plan ($99/mo)', value: 'enterprise' }
]

const categoryOptions = [
  { label: 'Technology', value: 'tech' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Business', value: 'business' }
]

const formValues = ref<FormElementsValues>({
  username: 'johndoe',
  email: 'john.doe@example.com',
  password: 'secretPassword123',
  birthDate: '1995-06-15',
  age: '29',
  phone: '+1 555 123 4567',
  telegram: 'johndoe_dev',
  avatar: undefined,
  bio: 'Passionate developer building awesome web applications with dxt-ui.',
  role: 'frontend',
  experience: 5,
  plan: 'pro',
  category: 'tech',
  agreement: true,
  newsletter: true,
  twoFactor: false,
  notification: 'email'
})

const nativeValues = ref<FormElementsValues>({
  title: 'Native Form Title',
  category: 'developer',
  notes: 'Native textarea notes',
  subscribe: true,
  priority: 'normal'
})

const controlledValues = ref<FormElementsValues>({
  coupon: 'SAVE20',
  region: 'global'
})
const controlledSnapshot = ref<string>('Not queried')

const validationValues = ref<FormElementsValues>({
  requiredCode: ''
})
const validationCheckResult = ref<string>('Not checked')

const boundaryValues = ref<FormElementsValues>({
  emptyText: '',
  whitespaceText: '   ',
  zeroCount: 0,
  unicodeText: 'Tiếng Việt / Кириллица / 🚀🔥✨',
  xssText: '<img src=x onerror=alert(1)>',
  unbrokenText: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
})

const isLifecycleMounted = ref<boolean>(true)

const validityStatus = ref<boolean | null>(null)
const singleFieldSnapshot = ref<string>('Not queried')

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const onFormUpdateModelValue = (values: FormElementsValues): void => {
  trackEvent('update:modelValue', { keys: Object.keys(values).length, username: values.username })
}

const onFormUpdateValue = (values: FormElementsValues): void => {
  trackEvent('update:value', { keys: Object.keys(values).length, username: values.username })
}

const onFormInput = (
  domEvent: InputEvent | Event,
  data: FormElementsData,
  values: FormElementsValues
): void => {
  trackEvent('input', {
    eventType: domEvent.type,
    fieldsCount: Object.keys(data).length,
    username: values.username
  })
}

const onFormInputLite = (
  data: FormElementsData,
  values: FormElementsValues
): void => {
  trackEvent('inputLite', {
    fieldsCount: Object.keys(data).length,
    username: values.username
  })
}

const onFormInputValues = (values: FormElementsValues): void => {
  trackEvent('inputValues', { username: values.username })
}

const onFormChange = (
  domEvent: InputEvent | Event,
  data: FormElementsData,
  values: FormElementsValues
): void => {
  trackEvent('change', {
    eventType: domEvent.type,
    fieldsCount: Object.keys(data).length,
    username: values.username
  })
}

const onFormChangeLite = (
  data: FormElementsData,
  values: FormElementsValues
): void => {
  trackEvent('changeLite', {
    fieldsCount: Object.keys(data).length,
    username: values.username
  })
}

const onFormChangeValues = (values: FormElementsValues): void => {
  trackEvent('changeValues', { username: values.username })
}

const onFormReset = (domEvent: Event): void => {
  trackEvent('reset', { eventType: domEvent.type })
}

const onFormSubmit = (submitEvent: SubmitEvent): void => {
  submitEvent.preventDefault()
  trackEvent('submit', { eventType: submitEvent.type })
}

const onCheckValidity = (): void => {
  const isValid = formRef.value?.checkValidity() ?? false
  validityStatus.value = isValid
  trackEvent('checkValidity', { valid: isValid })
}

const onFillDemoData = (): void => {
  const sampleData: FormElementsValues = {
    username: 'alice_wonder',
    email: 'alice@example.com',
    password: 'securePassword456',
    birthDate: '1998-11-20',
    age: '26',
    phone: '+7 900 123 4567',
    telegram: 'alice_w',
    avatar: undefined,
    bio: 'Senior fullstack engineer and design enthusiast.',
    role: 'fullstack',
    experience: 8,
    plan: 'enterprise',
    category: 'design',
    agreement: true,
    newsletter: false,
    twoFactor: true,
    notification: 'sms'
  }

  formRef.value?.setValues(sampleData)
  trackEvent('setValues', { username: sampleData.username })
}

const onSetUsername = (): void => {
  formRef.value?.set('username', 'updated_user')
  trackEvent('set', { username: 'updated_user' })
}

const onGetValues = (): void => {
  const values = formRef.value?.getValues() ?? {}
  singleFieldSnapshot.value = `${String(values.username ?? '')} / ${String(values.email ?? '')}`
  trackEvent('getValues', { username: values.username, email: values.email })
}

const onProgrammaticSubmit = (): void => {
  formRef.value?.submit()
}

const onExposeReset = (): void => {
  formRef.value?.reset()
  trackEvent('expose-reset', formRef.value?.getValues() ?? {})
}

const onClearData = (): void => {
  formRef.value?.setValuesAll({})
  trackEvent('setValuesAll', {})
}

const onNativeSubmit = (submitEvent: SubmitEvent): void => {
  submitEvent.preventDefault()
  trackEvent('native-submit', { eventType: submitEvent.type })
}

const onNativeFill = (): void => {
  nativeFormRef.value?.setValues({
    title: 'Updated Native Title',
    category: 'designer',
    notes: 'Updated via setValues()',
    subscribe: false,
    priority: 'high'
  })
  trackEvent('native-setValues', nativeFormRef.value?.getValues() ?? {})
}

const onNativeReset = (): void => {
  nativeFormRef.value?.reset()
  trackEvent('native-reset', nativeFormRef.value?.getValues() ?? {})
}

const onUpdateControlledValue = (nextValues: FormElementsValues): void => {
  controlledValues.value = nextValues
  trackEvent('controlled:update:value', nextValues)
}

const onApplyControlledProp = (): void => {
  controlledValues.value = {
    coupon: 'WELCOME50',
    region: 'eu'
  }
}

const onReadControlledValues = (): void => {
  controlledSnapshot.value = JSON.stringify(controlledFormRef.value?.getValues() ?? {})
}

const onCheckValidationForm = (): void => {
  const isValid = validationFormRef.value?.checkValidity() ?? false
  validationCheckResult.value = `valid=${String(isValid)} | values=${JSON.stringify(validationFormRef.value?.getValues() ?? {})}`
}

const onFillValidCode = (): void => {
  validationFormRef.value?.set('requiredCode', 'VALID-2026')
  onCheckValidationForm()
}

const onResetValidationForm = (): void => {
  validationFormRef.value?.reset()
  onCheckValidationForm()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Form" class="demo-form-page">
    <D1Section>
      <D1Grid>
        <D1GridItem base="12" lg="8">
          <D1Form
            ref="formRef"
            v-model="formValues"
            action="/api/demo-submit"
            method="post"
            enctype="multipart/form-data"
            target="_self"
            autocomplete="on"
            @update:model-value="onFormUpdateModelValue"
            @update:value="onFormUpdateValue"
            @input="onFormInput"
            @input-lite="onFormInputLite"
            @input-values="onFormInputValues"
            @change="onFormChange"
            @change-lite="onFormChangeLite"
            @change-values="onFormChangeValues"
            @reset="onFormReset"
            @submit="onFormSubmit"
          >
            <template #header>
              <D1Header label="Custom Form Header Slot" tag="h4"/>
            </template>

            <D1Block label="General Usage">
              <D1Group label="Basic & Personal Information">
                <D1Grid>
                  <D1GridItem base="12" sm="6" md="4">
                    <D1Input
                      name="username"
                      label="Username"
                      placeholder="Enter your username"
                      required
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Input
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="name@example.com"
                      required
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Input
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="Enter secure password"
                      required
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Input
                      name="birthDate"
                      type="date"
                      label="Birth Date"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Input
                      name="age"
                      type="number"
                      label="Age"
                      placeholder="e.g. 25"
                    />
                  </D1GridItem>
                </D1Grid>
              </D1Group>

              <D1Group label="Profile & Contacts">
                <D1Grid>
                  <D1GridItem base="12" md="4">
                    <D1InputImage
                      name="avatar"
                      label="Profile Picture (Avatar)"
                      helper-message="Upload avatar image with crop support"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" md="8">
                    <D1Grid>
                      <D1GridItem base="12" sm="6">
                        <D1InputPhone
                          name="phone"
                          label="Phone Number"
                          placeholder="Enter phone number"
                        />
                      </D1GridItem>

                      <D1GridItem base="12" sm="6">
                        <D1InputSocial
                          name="telegram"
                          social-type="telegram"
                          label="Telegram Account"
                          placeholder="username"
                        />
                      </D1GridItem>

                      <D1GridItem base="12">
                        <D1Textarea
                          name="bio"
                          label="About Yourself (Bio)"
                          placeholder="Write a few words about yourself..."
                          :autosize="true"
                        />
                      </D1GridItem>
                    </D1Grid>
                  </D1GridItem>
                </D1Grid>
              </D1Group>

              <D1Group label="Occupation & Experience">
                <D1Grid>
                  <D1GridItem base="12" sm="6">
                    <D1Select
                      name="role"
                      type="select"
                      label="Occupation / Role"
                      placeholder="Select a role"
                      :option="roleOptions"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6">
                    <D1SliderField
                      name="experience"
                      label="Years of Experience"
                      :min="0"
                      :max="30"
                    />
                  </D1GridItem>
                </D1Grid>
              </D1Group>

              <D1Group label="Preferences">
                <D1Grid>
                  <D1GridItem base="12" sm="6">
                    <D1Switch
                      name="newsletter"
                      label="Subscribe to weekly newsletter"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6">
                    <D1Switch
                      name="twoFactor"
                      label="Enable Two-Factor Authentication"
                    />
                  </D1GridItem>
                </D1Grid>
              </D1Group>

              <D1Group label="Notifications">
                <D1Grid>
                  <D1GridItem base="12" sm="6" md="4">
                    <D1Radio
                      name="notification"
                      value-variant="email"
                      label="Receive notifications via Email"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Radio
                      name="notification"
                      value-variant="sms"
                      label="Receive notifications via SMS"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Radio
                      name="notification"
                      value-variant="push"
                      label="Receive Push notifications"
                    />
                  </D1GridItem>
                </D1Grid>
              </D1Group>

              <D1Group label="Subscription & Category">
                <D1Grid>
                  <D1GridItem base="12" sm="6">
                    <D1MenuButton
                      name="plan"
                      label="Subscription Plan"
                      :option="planOptions"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6">
                    <D1MenuChip
                      name="category"
                      label="Specialization Category"
                      :option="categoryOptions"
                    />
                  </D1GridItem>
                </D1Grid>
              </D1Group>

              <D1Group label="Agreement">
                <D1Checkbox
                  name="agreement"
                  label="I accept Terms and Conditions"
                  required
                />
              </D1Group>

              <D1Group label="Form Controls">
                <DemoFlex>
                  <D1Button type="submit" label="Submit Form" primary/>
                  <D1Button type="reset" label="Reset Form" secondary/>
                  <D1Button label="Expose Reset" outline @click="onExposeReset"/>
                  <D1Button label="Check Validity" outline @click="onCheckValidity"/>
                  <D1Button label="Fill Sample Data" outline @click="onFillDemoData"/>
                  <D1Button label="Set Username" outline @click="onSetUsername"/>
                  <D1Button label="Get Values" outline @click="onGetValues"/>
                  <D1Button label="Programmatic Submit" outline @click="onProgrammaticSubmit"/>
                  <D1Button label="Clear Form" outline @click="onClearData"/>
                </DemoFlex>
              </D1Group>
            </D1Block>

            <template #footer>
              <D1TextDescription description="Custom Form Footer Slot"/>
            </template>
          </D1Form>
        </D1GridItem>

        <D1GridItem base="12" lg="4">
          <D1Block label="Events & Form State">
            <D1Group label="Events & Status">
              <DemoValue :value="eventName" label="Last Triggered Event"/>
              <DemoValue :value="eventPayload" label="Event Payload"/>
              <DemoValue :value="validityStatus ?? 'Not checked'" label="Validity Status"/>
              <DemoValue :value="singleFieldSnapshot" label="getValues() Snapshot"/>
            </D1Group>

            <D1Group label="Current Form Values (v-model)">
              <DemoValue
                v-for="(entryValue, key) in formValues"
                :key="key"
                :label="String(key)"
                :value="entryValue ?? '—'"
              />
            </D1Group>
          </D1Block>
        </D1GridItem>
      </D1Grid>

      <D1Group label="Native HTML Form Elements (native=true)">
        <D1Form
          ref="nativeFormRef"
          v-model="nativeValues"
          native
          @submit="onNativeSubmit"
          @reset="trackEvent('native-reset', nativeValues)"
          @input-values="trackEvent('native-inputValues', $event)"
          @change-values="trackEvent('native-changeValues', $event)"
        >
          <div class="demo-form-page__native">
            <label class="demo-form-page__field">
              <span>Title</span>
              <input name="title" type="text" required>
            </label>
            <label class="demo-form-page__field">
              <span>Category</span>
              <select name="category">
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
            </label>
            <label class="demo-form-page__field">
              <span>Notes</span>
              <textarea name="notes" rows="2"/>
            </label>
            <DemoFlex>
              <label>
                <input name="subscribe" type="checkbox">
                Subscribe
              </label>
              <label>
                <input name="priority" type="radio" value="normal">
                Normal
              </label>
              <label>
                <input name="priority" type="radio" value="high">
                High
              </label>
            </DemoFlex>
            <DemoFlex>
              <D1Button type="submit" label="Submit Native" primary/>
              <D1Button label="Fill Native" outline @click="onNativeFill"/>
              <D1Button label="Reset Native" secondary @click="onNativeReset"/>
            </DemoFlex>
          </div>
        </D1Form>
        <DemoValue :value="JSON.stringify(nativeValues)" label="Native Values"/>
      </D1Group>

      <D1Group label="Controlled :value & Form Attributes">
        <D1Form
          ref="controlledFormRef"
          :value="controlledValues"
          action="/api/search"
          method="get"
          enctype="application/x-www-form-urlencoded"
          target="_blank"
          autocomplete="off"
          data-testid="controlled-attributes-form"
          @update:value="onUpdateControlledValue"
          @submit.prevent="trackEvent('controlled-submit', controlledValues)"
        >
          <DemoFlex>
            <D1Input name="coupon" label="Coupon Code"/>
            <D1Input name="region" label="Region"/>
          </DemoFlex>
          <DemoFlex>
            <D1Button label="Apply :value Prop" size="sm" outline @click="onApplyControlledProp"/>
            <D1Button label="Read getValues()" size="sm" outline @click="onReadControlledValues"/>
          </DemoFlex>
        </D1Form>
        <DemoValue label="Controlled :value" :value="JSON.stringify(controlledValues)"/>
        <DemoValue label="Controlled getValues()" :value="controlledSnapshot"/>
      </D1Group>

      <D1Group label="Validation & Invalid State Flow">
        <D1Form
          ref="validationFormRef"
          v-model="validationValues"
          @submit.prevent="onCheckValidationForm"
        >
          <D1Input
            name="requiredCode"
            label="Required Invitation Code"
            placeholder="Leave empty to trigger invalid check"
            required
          />
          <DemoFlex>
            <D1Button label="Check Validation" size="sm" outline @click="onCheckValidationForm"/>
            <D1Button label="Fill Valid Code" size="sm" outline @click="onFillValidCode"/>
            <D1Button label="Reset to Initial" size="sm" outline @click="onResetValidationForm"/>
          </DemoFlex>
        </D1Form>
        <DemoValue label="Validation Flow Result" :value="validationCheckResult"/>
      </D1Group>

      <D1Group label="Accessibility (ARIA & Semantics)">
        <D1Form
          aria-label="Accessible contact preferences form"
          method="dialog"
          enctype="text/plain"
          @submit.prevent="trackEvent('a11y-submit', 'submitted')"
        >
          <fieldset class="demo-form-page__fieldset">
            <legend>Contact Preferences</legend>
            <D1Input name="contactEmail" label="Contact Email" required/>
            <D1Button type="submit" label="Keyboard Submit" size="sm" outline/>
          </fieldset>
        </D1Form>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <div data-testid="empty-form-probe">
          <D1Form/>
        </div>
        <DemoValue label="Empty Form" value="Renders empty <form class='d1-form' novalidate> without errors"/>

        <DemoBox class="demo-form-page__narrow" size="sm">
          <D1Form v-model="boundaryValues" @submit.prevent>
            <D1Input name="emptyText" label="Empty String"/>
            <D1Input name="whitespaceText" label="Whitespace"/>
            <D1Input name="zeroCount" label="Zero Value"/>
            <D1Input name="unicodeText" label="Multilingual"/>
            <D1Input name="xssText" label="XSS Payload"/>
            <D1Input name="unbrokenText" label="Unbroken"/>
          </D1Form>
        </DemoBox>
        <DemoValue label="Boundary Values" :value="JSON.stringify(boundaryValues)"/>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1Form :model-value="{ lifecycleField: 'Active' }" @submit.prevent>
            <D1Input name="lifecycleField" label="Mounted Form Field"/>
          </D1Form>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-form-page {
  &__native {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 480px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__fieldset {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border: 1px solid currentColor;
    border-radius: 6px;
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
