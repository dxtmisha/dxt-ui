<script setup lang="ts">
import { ref } from 'vue'
import type { FormElementsValues, FormExpose } from '@dxtmisha/constructor/Form'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const formRef = ref<FormExpose | null>(null)
const nativeFormRef = ref<FormExpose | null>(null)

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

const validityStatus = ref<boolean | null>(null)
const singleFieldSnapshot = ref<string>('Not queried')

const onFormInput = (...args: unknown[]) => {
  onEvent('input', ...args)
}

const onFormInputLite = (...args: unknown[]) => {
  onEvent('inputLite', ...args)
}

const onFormInputValues = (...args: unknown[]) => {
  onEvent('inputValues', ...args)
}

const onFormChange = (...args: unknown[]) => {
  onEvent('change', ...args)
}

const onFormChangeLite = (...args: unknown[]) => {
  onEvent('changeLite', ...args)
}

const onFormChangeValues = (...args: unknown[]) => {
  onEvent('changeValues', ...args)
}

const onFormReset = (...args: unknown[]) => {
  onEvent('reset', ...args)
}

const onFormSubmit = (...args: unknown[]) => {
  onEvent('submit', ...args)
}

const onCheckValidity = () => {
  const isValid = formRef.value?.checkValidity() ?? false
  validityStatus.value = isValid
  onEvent('checkValidity', isValid)
}

const onFillDemoData = () => {
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
  onEvent('setValues', sampleData)
}

const onSetUsername = () => {
  formRef.value?.set('username', 'updated_user')
  onEvent('set', { username: 'updated_user' })
}

const onGetValues = () => {
  const values = formRef.value?.getValues() ?? {}
  singleFieldSnapshot.value = `${String(values.username ?? '')} / ${String(values.email ?? '')}`
  onEvent('getValues', values)
}

const onProgrammaticSubmit = () => {
  formRef.value?.submit()
}

const onClearData = () => {
  formRef.value?.setValuesAll({})
  onEvent('setValuesAll', {})
}

const onNativeFill = () => {
  nativeFormRef.value?.setValues({
    title: 'Updated Native Title',
    category: 'designer',
    notes: 'Updated via setValues()',
    subscribe: false,
    priority: 'high'
  })
  onEvent('native-setValues')
}

const onNativeReset = () => {
  nativeFormRef.value?.reset()
  onEvent('native-reset')
}
</script>

<template>
  <DemoLinkBlack />
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
            @input="onFormInput"
            @inputLite="onFormInputLite"
            @inputValues="onFormInputValues"
            @change="onFormChange"
            @changeLite="onFormChangeLite"
            @changeValues="onFormChangeValues"
            @reset="onFormReset"
            @submit="onFormSubmit"
          >
            <template #header>
              <D1Header label="Custom Form Header Slot" tag="h4" />
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
                      helperMessage="Upload avatar image with crop support"
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
                          socialType="telegram"
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
                      valueVariant="email"
                      label="Receive notifications via Email"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Radio
                      name="notification"
                      valueVariant="sms"
                      label="Receive notifications via SMS"
                    />
                  </D1GridItem>

                  <D1GridItem base="12" sm="6" md="4">
                    <D1Radio
                      name="notification"
                      valueVariant="push"
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
                  <D1Button type="submit" label="Submit Form" primary />
                  <D1Button type="reset" label="Reset Form" secondary />
                  <D1Button label="Check Validity" outline @click="onCheckValidity" />
                  <D1Button label="Fill Sample Data" outline @click="onFillDemoData" />
                  <D1Button label="Set Username" outline @click="onSetUsername" />
                  <D1Button label="Get Values" outline @click="onGetValues" />
                  <D1Button label="Programmatic Submit" outline @click="onProgrammaticSubmit" />
                  <D1Button label="Clear Form" outline @click="onClearData" />
                </DemoFlex>
              </D1Group>
            </D1Block>

            <template #footer>
              <D1TextDescription description="Custom Form Footer Slot" />
            </template>
          </D1Form>
        </D1GridItem>

        <D1GridItem base="12" lg="4">
          <D1Block label="Events & Form State">
            <D1Group label="Events & Status">
              <DemoValue :value="eventName" label="Last Triggered Event" />
              <DemoValue :value="validityStatus ?? 'Not checked'" label="Validity Status" />
              <DemoValue :value="singleFieldSnapshot" label="getValues() Snapshot" />
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
          @submit="onEvent('native-submit', $event)"
          @reset="onEvent('native-reset', $event)"
          @inputValues="onEvent('native-inputValues', $event)"
          @changeValues="onEvent('native-changeValues', $event)"
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
              <textarea name="notes" rows="2" />
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
              <D1Button type="submit" label="Submit Native" primary />
              <D1Button label="Fill Native" outline @click="onNativeFill" />
              <D1Button label="Reset Native" secondary @click="onNativeReset" />
            </DemoFlex>
          </div>
        </D1Form>
        <DemoValue :value="JSON.stringify(nativeValues)" label="Native Values" />
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
}
</style>
