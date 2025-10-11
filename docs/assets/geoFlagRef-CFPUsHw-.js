import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as o}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/functional/en/Classes/Ref/GeoFlagRef"}),`
`,n.jsx(e.h1,{id:"geoflagref-class",children:"GeoFlagRef Class"}),`
`,n.jsx(e.p,{children:"Vue-oriented class for working with country flags with reactive computed properties. Provides automatic retrieval of country information, their flags, and localized names with full integration into Vue's reactive system."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vue Reactivity"})," — uses computed properties and ref/watch for reactivity"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Localization"})," — retrieves country and language names in current locale"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Country Flags"})," — provides flag icons for all countries"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"National Names"})," — ability to get names in national languages"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reactive Tracking"})," — automatically updates when country code changes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Country Lists"})," — retrieval of country lists by specified codes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible Input"})," — accepts country codes as ref or normal values"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Geo Integration"})," — uses geographical data for information retrieval"]}),`
`]}),`
`,n.jsx(e.h2,{id:"constructor",children:"Constructor"}),`
`,n.jsx(e.h3,{id:"constructor-1",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Creates a GeoFlagRef instance with reactive parameters."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: RefOrNormal<string>"})," — country and language code (default: current location)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// With current location
const geoFlag = new GeoFlagRef()

// With specific code
const geoFlagRU = new GeoFlagRef('ru-RU')

// With reactive code
const countryCode = ref('en-US')
const geoFlagReactive = new GeoFlagRef(countryCode)
`})}),`
`,n.jsx(e.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,n.jsx(e.h3,{id:"getcode",children:n.jsx(e.code,{children:"getCode"})}),`
`,n.jsx(e.p,{children:"Returns a reactive object with the country code."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Ref<string>"})," — reactive country code"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')
const code = geoFlag.getCode() // ref('ru-RU')
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Returns information about the country and its flag."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — country code (default: current code)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ComputedRef<GeoFlagItem | undefined>"})," — reactive country information"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"GeoFlagItem Structure:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — language name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — country name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"standard: string"})," — standard country code"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"icon?: string"})," — flag icon"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label: string"})," — display name"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — value (country code)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('en-US')
const countryInfo = geoFlag.get()
// { language: "English", country: "United States", standard: "en-US", icon: "@flag-us", ... }

// For specific country
const ruInfo = geoFlag.get('ru-RU')
`})}),`
`,n.jsx(e.h3,{id:"getflag",children:n.jsx(e.code,{children:"getFlag"})}),`
`,n.jsx(e.p,{children:"Getting a link to the flag."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — country code (default: current code)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ComputedRef<string | undefined>"})," — reactive flag icon reference"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('en-US')
const flagIcon = geoFlag.getFlag() // '@flag-us'

// For specific country
const ruFlagIcon = geoFlag.getFlag('ru-RU') // '@flag-ru'
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Getting a list of countries by an array of codes."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — array of country codes (default: all available countries)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ComputedRef<GeoFlagItem[]>"})," — reactive list of countries"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('en-US')

// All countries
const allCountries = geoFlag.getList()

// Specific countries
const selectedCountries = geoFlag.getList(['ru-RU', 'en-US', 'de-DE'])
`})}),`
`,n.jsx(e.h3,{id:"getnational",children:n.jsx(e.code,{children:"getNational"})}),`
`,n.jsx(e.p,{children:"Getting a list of countries by an array of codes in national language."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — array of country codes (default: all available countries)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"ComputedRef<GeoFlagNational[]>"})," — reactive list of countries with national names"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"GeoFlagNational Structure:"})," includes all GeoFlagItem fields plus:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"description?: string"})," — description in national language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nationalLanguage?: string"})," — language name in national language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nationalCountry?: string"})," — country name in national language"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('en-US')

// Countries with national names
const nationalCountries = geoFlag.getNational(['ru-RU', 'en-US'])
// [
//   { country: "Russia", nationalCountry: "Россия", nationalLanguage: "русский", ... },
//   { country: "United States", nationalCountry: "United States", nationalLanguage: "English", ... }
// ]
`})}),`
`,n.jsx(e.h2,{id:"reactive-capabilities",children:"Reactive Capabilities"}),`
`,n.jsx(e.h3,{id:"automatic-code-tracking",children:"Automatic Code Tracking"}),`
`,n.jsx(e.p,{children:"GeoFlagRef automatically tracks changes in country code:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const countryCode = ref('en-US')
const geoFlag = new GeoFlagRef(countryCode)

const countryInfo = geoFlag.get()
const flagIcon = geoFlag.getFlag()

// Changing the code will automatically update all computed properties
countryCode.value = 'ru-RU'
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"vue-component-with-country-flags",children:"Vue Component with Country Flags"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>
  <div class="country-selector">
    <div class="current-country">
      <img :src="currentFlag" :alt="currentCountry?.country">
      <span>{{ currentCountry?.country }}</span>
    </div>

    <div class="countries-list">
      <div
        v-for="country in countries"
        :key="country.value"
        @click="selectCountry(country.standard)"
      >
        <img :src="country.icon" :alt="country.country">
        <span>{{ country.country }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const selectedCode = ref('en-US')
const geoFlag = new GeoFlagRef(selectedCode)

const currentCountry = geoFlag.get()
const currentFlag = geoFlag.getFlag()
const countries = geoFlag.getList(['ru-RU', 'en-US', 'de-DE', 'fr-FR'])

function selectCountry(code) {
  selectedCode.value = code
}
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"composable-for-working-with-flags",children:"Composable for Working with Flags"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export function useCountryFlags(initialCode = 'en-US') {
  const code = ref(initialCode)
  const geoFlag = new GeoFlagRef(code)

  return {
    code,
    currentCountry: geoFlag.get(),
    currentFlag: geoFlag.getFlag(),
    allCountries: geoFlag.getList(),
    nationalCountries: geoFlag.getNational()
  }
}
`})}),`
`,n.jsx(e.h3,{id:"country-selector-with-flags",children:"Country Selector with Flags"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('en-US')
const europeanCountries = geoFlag.getList([
  'ru-RU', 'de-DE', 'fr-FR', 'it-IT', 'es-ES'
])

// Usage in select
const countryOptions = europeanCountries.value.map(country => ({
  label: country.country,
  value: country.standard,
  icon: country.icon
}))
`})}),`
`,n.jsx(e.p,{children:"The GeoFlagRef class provides a powerful reactive system for working with flags and country information for Vue applications with automatic localization and change tracking."})]})}function u(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{u as default};
