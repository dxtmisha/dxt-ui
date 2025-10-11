import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Dqnce8mp.js";import{M as r}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Classes/Ref/GeoRef"}),`
`,e.jsx(n.h1,{id:"georef-class",children:"GeoRef Class"}),`
`,e.jsx(n.p,{children:"Static reactive Vue class for working with geographical data. Provides global access to information about current country, language and regional settings with automatic change tracking through Vue reactivity."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static Methods"})," — global access to geographical data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — uses shallowRef and computed for reactivity"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Detection"})," — automatically determines current location"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Synchronization"})," — automatically syncs with base Geo class"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive Computed"})," — separate computed properties for each data type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Configuration"})," — location changes affect entire application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typed Data"})," — full typing of geographical data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Geo Integration"})," — works on top of base Geo class"]}),`
`]}),`
`,e.jsx(n.h2,{id:"static-data-retrieval-methods",children:"Static Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Information about the current country."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Ref<GeoItemFull>"})," — reactive full country information"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"GeoItemFull Structure:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"country: string"})," — country code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"language: string"})," — language code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"standard: string"})," — full standard code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"firstDay: string"})," — first day of week"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"countryAlternative?: string[]"})," — alternative country codes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"languageAlternative?: string[]"})," — alternative language codes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"zone?: string | null"})," — timezone"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phoneCode?: string"})," — phone code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phoneWithin?: string"})," — internal call code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phoneMask?: string | string[]"})," — phone mask"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nameFormat?: string"})," — name format"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoRef } from '@dxtmisha/functional'

const geoData = GeoRef.get()
// { country: "US", language: "en", standard: "en-US", firstDay: "0", ... }
`})}),`
`,e.jsx(n.h3,{id:"getcountry",children:e.jsx(n.code,{children:"getCountry"})}),`
`,e.jsx(n.p,{children:"Current country."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive current country code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const currentCountry = GeoRef.getCountry() // "US"
`})}),`
`,e.jsx(n.h3,{id:"getlanguage",children:e.jsx(n.code,{children:"getLanguage"})}),`
`,e.jsx(n.p,{children:"Current language."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive current language code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const currentLanguage = GeoRef.getLanguage() // "en"
`})}),`
`,e.jsx(n.h3,{id:"getstandard",children:e.jsx(n.code,{children:"getStandard"})}),`
`,e.jsx(n.p,{children:"Full format according to the standard."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive standard code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const standardCode = GeoRef.getStandard() // "en-US"
`})}),`
`,e.jsx(n.h3,{id:"getfirstday",children:e.jsx(n.code,{children:"getFirstDay"})}),`
`,e.jsx(n.p,{children:"Returns the first day of the week."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — reactive first day of week code"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const firstDay = GeoRef.getFirstDay() // "0" (Sunday)
`})}),`
`,e.jsx(n.h2,{id:"management-methods",children:"Management Methods"}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Changes the data by the full code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: string"})," — country code, full form language-country or one of them"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Set full locale
GeoRef.set('en-US')

// Set language only
GeoRef.set('fr')

// Set country only
GeoRef.set('DE')
`})}),`
`,e.jsx(n.h2,{id:"reactive-capabilities",children:"Reactive Capabilities"}),`
`,e.jsx(n.h3,{id:"global-reactivity",children:"Global Reactivity"}),`
`,e.jsx(n.p,{children:"GeoRef provides global reactivity for the entire application:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// All components will automatically update on change
const country = GeoRef.getCountry()
const language = GeoRef.getLanguage()

// Change will affect all usages
GeoRef.set('en-US')
`})}),`
`,e.jsx(n.h3,{id:"integration-with-other-classes",children:"Integration with Other Classes"}),`
`,e.jsx(n.p,{children:"GeoRef automatically syncs with other Geo classes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoRef, GeoIntlRef, GeoFlagRef } from '@dxtmisha/functional'

// Change in GeoRef will affect all other classes
GeoRef.set('de-DE')

// All these classes will automatically update
const intl = new GeoIntlRef() // will use de-DE
const flag = new GeoFlagRef() // will use de-DE
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"vue-component-with-global-geolocation",children:"Vue Component with Global Geolocation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div class="geo-info">
    <h2>Current Location</h2>
    <p>Country: {{ geoData.country }}</p>
    <p>Language: {{ geoData.language }}</p>
    <p>Standard: {{ geoData.standard }}</p>
    <p>First day of week: {{ geoData.firstDay }}</p>

    <button @click="changeToUS">Switch to USA</button>
    <button @click="changeToDE">Switch to Germany</button>
  </div>
</template>

<script setup>
import { GeoRef } from '@dxtmisha/functional'

const geoData = GeoRef.get()

function changeToUS() {
  GeoRef.set('en-US')
}

function changeToDE() {
  GeoRef.set('de-DE')
}
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"composable-for-working-with-geo-data",children:"Composable for Working with Geo Data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function useGeo() {
  return {
    geoData: GeoRef.get(),
    country: GeoRef.getCountry(),
    language: GeoRef.getLanguage(),
    standard: GeoRef.getStandard(),
    firstDay: GeoRef.getFirstDay(),
    setLocation: GeoRef.set
  }
}
`})}),`
`,e.jsx(n.h3,{id:"global-localization-setup",children:"Global Localization Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// In main.js or app setup
import { GeoRef } from '@dxtmisha/functional'

// Determine locale from user settings
const userLocale = localStorage.getItem('locale') || 'en-US'
GeoRef.set(userLocale)

// All app components will use this locale
`})}),`
`,e.jsx(n.h2,{id:"vue-application-integration",children:"Vue Application Integration"}),`
`,e.jsx(n.h3,{id:"global-locale-provider",children:"Global Locale Provider"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<!-- App.vue -->
<template>
  <div class="app">
    <LocaleSelector />
    <router-view />
  </div>
</template>

<script setup>
import { GeoRef } from '@dxtmisha/functional'
import { provide } from 'vue'

// Provide geo data to entire application
provide('geo', {
  data: GeoRef.get(),
  setLocale: GeoRef.set
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"reactive-theme-change-by-region",children:"Reactive Theme Change by Region"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watch } from 'vue'

const country = GeoRef.getCountry()

// Automatic theme change based on country
watch(country, (newCountry) => {
  const theme = {
    'RU': 'russian-theme',
    'US': 'american-theme',
    'DE': 'german-theme'
  }[newCountry] || 'default-theme'

  document.body.className = theme
}, { immediate: true })
`})}),`
`,e.jsx(n.h3,{id:"location-change-monitoring",children:"Location Change Monitoring"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watchEffect } from 'vue'

// Log all geo data changes
watchEffect(() => {
  const geo = GeoRef.get().value
  console.log('Geo data changed:', {
    country: geo.country,
    language: geo.language,
    standard: geo.standard
  })
})
`})}),`
`,e.jsx(n.p,{children:"The GeoRef class provides a centralized reactive geographical data management system for Vue applications with global access and automatic synchronization."})]})}function g(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{g as default};
