<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const formRef = ref<any>(null)

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

const formValues = ref<Record<string, any>>({
  username: 'johndoe',
  email: 'john.doe@example.com',
  password: 'secretPassword123',
  birthDate: '1995-06-15',
  age: '29',
  phone: '+1 555 123 4567',
  telegram: 'johndoe_dev',
  avatar: undefined,
  role: 'frontend',
  experience: 5,
  plan: 'pro',
  category: 'tech',
  bio: 'Passionate developer building awesome web applications with dxt-ui.',
  agreement: true,
  radioEmail: true,
  radioSms: false,
  newsletter: true
})

const nativeFormValues = ref<Record<string, any>>({
  nativeFullName: 'Jane Smith',
  nativeEmail: 'jane.smith@example.com',
  nativeCountry: 'vn',
  nativeBio: 'Hello from native HTML form elements!',
  nativeAgree: true
})

const validityStatus = ref<boolean | null>(null)

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

const onFormSubmit = (event: Event) => {
  event.preventDefault()
  onEvent('submit', formValues.value)
}

const onNativeInput = (...args: unknown[]) => {
  onEvent('native:input', ...args)
}

const onNativeChange = (...args: unknown[]) => {
  onEvent('native:change', ...args)
}

const onNativeReset = (...args: unknown[]) => {
  onEvent('native:reset', ...args)
}

const onNativeSubmit = (event: Event) => {
  event.preventDefault()
  onEvent('native:submit', nativeFormValues.value)
}

const onCheckValidity = () => {
  const isValid = formRef.value?.checkValidity() ?? false
  validityStatus.value = isValid
  onEvent('checkValidity', isValid)
}

const onFillDemoData = () => {
  const sampleData = {
    username: 'alice_wonder',
    email: 'alice@example.com',
    password: 'securePassword456',
    birthDate: '1998-11-20',
    age: '26',
    phone: '+7 900 123 4567',
    telegram: 'alice_w',
    avatar: undefined,
    role: 'fullstack',
    experience: 8,
    plan: 'enterprise',
    category: 'design',
    bio: 'Senior fullstack engineer and design enthusiast.',
    agreement: true,
    radioEmail: false,
    radioSms: true,
    newsletter: false
  }

  formRef.value?.setValues(sampleData)
  onEvent('setValues', sampleData)
}

const onClearData = () => {
  formRef.value?.setValuesAll({})
  onEvent('setValuesAll', {})
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Form">
    <D1Section>
      <D1Form
        ref="formRef"
        v-model="formValues"
        @input="onFormInput"
        @inputLite="onFormInputLite"
        @inputValues="onFormInputValues"
        @change="onFormChange"
        @changeLite="onFormChangeLite"
        @changeValues="onFormChangeValues"
        @reset="onFormReset"
        @submit="onFormSubmit"
      >
        <D1Group label="Text & Contact Inputs (D1Input, D1InputPhone, D1InputSocial)">
          <D1Input
            name="username"
            label="Username"
            placeholder="Enter your username"
            required
          />

          <D1Input
            name="email"
            type="email"
            label="Email Address"
            placeholder="name@example.com"
            required
          />

          <D1Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter secure password"
            required
          />

          <D1Input
            name="birthDate"
            type="date"
            label="Birth Date"
          />

          <D1Input
            name="age"
            type="number"
            label="Age"
            placeholder="e.g. 25"
          />

          <D1InputPhone
            name="phone"
            label="Phone Number"
            placeholder="Enter phone number"
          />

          <D1InputSocial
            name="telegram"
            socialType="telegram"
            label="Telegram Account"
            placeholder="username"
          />
        </D1Group>

        <D1Group label="Media, Menus & Sliders (D1InputImage, D1Select, D1SliderField, D1MenuButton, D1MenuChip)">
          <D1InputImage
            name="avatar"
            label="Profile Picture (Avatar)"
            helperMessage="Upload avatar image with crop support"
          />

          <D1Select
            name="role"
            type="select"
            label="Occupation / Role"
            placeholder="Select a role"
            :option="roleOptions"
          />

          <D1SliderField
            name="experience"
            label="Years of Experience"
            :min="0"
            :max="30"
          />

          <D1MenuButton
            name="plan"
            label="Subscription Plan"
            :option="planOptions"
          />

          <D1MenuChip
            name="category"
            label="Specialization Category"
            :option="categoryOptions"
          />
        </D1Group>

        <D1Group label="Content, Checks & Radios (D1Textarea, D1Checkbox, D1Radio, D1Switch)">
          <D1Textarea
            name="bio"
            label="About Yourself (Bio)"
            placeholder="Write a few words about yourself..."
            :autosize="true"
          />

          <D1Checkbox
            name="agreement"
            label="I accept the Terms and Conditions and Privacy Policy"
            required
          />

          <D1Radio
            name="radioEmail"
            valueVariant="email"
            label="Receive notifications via Email"
          />
          <D1Radio
            name="radioSms"
            valueVariant="sms"
            label="Receive notifications via SMS"
          />

          <D1Switch
            name="newsletter"
            label="Subscribe to weekly product updates newsletter"
          />
        </D1Group>

        <D1Group label="Form Controls">
          <DemoFlex>
            <D1Button type="submit" label="Submit Form" primary />
            <D1Button type="reset" label="Reset Form" secondary />
            <D1Button label="Check Validity" outline @click="onCheckValidity" />
            <D1Button label="Fill Sample Data" outline @click="onFillDemoData" />
            <D1Button label="Clear Form" outline @click="onClearData" />
          </DemoFlex>
        </D1Group>
      </D1Form>

      <D1Group label="Events & Form State">
        <DemoValue :value="eventName" label="Last Triggered Event" />
        <DemoValue :value="validityStatus" label="Validity Status" />
        <DemoValue :value="JSON.stringify(formValues, null, 2)" label="Current Form Values (v-model)" />
      </D1Group>

      <D1Group label="Native HTML Elements (D1Form :native=&quot;true&quot;)">
        <D1Form
          :native="true"
          v-model="nativeFormValues"
          @input="onNativeInput"
          @change="onNativeChange"
          @reset="onNativeReset"
          @submit="onNativeSubmit"
        >
          <DemoFlex direction="column">
            <label>
              Full Name:
              <input
                name="nativeFullName"
                type="text"
                placeholder="Enter full name"
                required
              />
            </label>

            <label>
              Email Address:
              <input
                name="nativeEmail"
                type="email"
                placeholder="name@example.com"
                required
              />
            </label>

            <label>
              Country:
              <select name="nativeCountry">
                <option value="vn">Vietnam</option>
                <option value="us">United States</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="jp">Japan</option>
              </select>
            </label>

            <label>
              Native Comments:
              <textarea
                name="nativeBio"
                rows="3"
                placeholder="Enter comments..."
              ></textarea>
            </label>

            <label>
              <input
                name="nativeAgree"
                type="checkbox"
              />
              I accept native form terms
            </label>

            <DemoFlex style="margin-top: 12px;">
              <D1Button type="submit" label="Submit Native Form" primary />
              <D1Button type="reset" label="Reset Native Form" secondary />
            </DemoFlex>
          </DemoFlex>
        </D1Form>

        <DemoValue :value="JSON.stringify(nativeFormValues, null, 2)" label="Native Form Values (v-model)" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
