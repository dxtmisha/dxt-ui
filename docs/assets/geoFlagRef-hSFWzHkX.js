import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/functional/ru/Classes/Ref/GeoFlagRef"}),`
`,n.jsx(e.h1,{id:"класс-geoflagref",children:"Класс GeoFlagRef"}),`
`,n.jsx(e.p,{children:"Vue-ориентированный класс для работы с флагами стран с реактивными computed свойствами. Обеспечивает автоматическое получение информации о странах, их флагах и локализованных названиях с полной интеграцией в реактивную систему Vue."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vue Reactivity"})," — использует computed свойства и ref/watch для реактивности"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая локализация"})," — получает названия стран и языков на текущей локали"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Флаги стран"})," — предоставляет иконки флагов для всех стран"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Национальные названия"})," — возможность получения названий на национальных языках"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивное отслеживание"})," — автоматически обновляется при смене кода страны"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Списки стран"})," — получение списков стран по заданным кодам"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкий ввод"})," — принимает коды стран как ref или обычные значения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с Geo"})," — использует географические данные для получения информации"]}),`
`]}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт экземпляр GeoFlagRef с реактивными параметрами."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: RefOrNormal<string>"})," — код страны и языка (по умолчанию: текущая локация)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// С текущей локацией
const geoFlag = new GeoFlagRef()

// С конкретным кодом
const geoFlagRU = new GeoFlagRef('ru-RU')

// С реактивным кодом
const countryCode = ref('en-US')
const geoFlagReactive = new GeoFlagRef(countryCode)
`})}),`
`,n.jsx(e.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,n.jsx(e.h3,{id:"getcode",children:n.jsx(e.code,{children:"getCode"})}),`
`,n.jsx(e.p,{children:"Возвращает реактивный объект с кодом страны."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Ref<string>"})," — реактивный код страны"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')
const code = geoFlag.getCode() // ref('ru-RU')
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Возвращает информацию о стране и её флаге."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны (по умолчанию: текущий код)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<GeoFlagItem | undefined>"})," — реактивная информация о стране"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Структура GeoFlagItem:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — название языка"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — название страны"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"standard: string"})," — стандартный код страны"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"icon?: string"})," — иконка флага"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label: string"})," — отображаемое название"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — значение (код страны)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')
const countryInfo = geoFlag.get()
// { language: "русский", country: "Россия", standard: "ru-RU", icon: "@flag-ru", ... }

// Для конкретной страны
const usInfo = geoFlag.get('en-US')
`})}),`
`,n.jsx(e.h3,{id:"getflag",children:n.jsx(e.code,{children:"getFlag"})}),`
`,n.jsx(e.p,{children:"Получение ссылки на флаг."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — код страны (по умолчанию: текущий код)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string | undefined>"})," — реактивная ссылка на иконку флага"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')
const flagIcon = geoFlag.getFlag() // '@flag-ru'

// Для конкретной страны
const usFlagIcon = geoFlag.getFlag('en-US') // '@flag-us'
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Получение списка стран по массиву с кодами."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — массив кодов стран (по умолчанию: все доступные страны)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<GeoFlagItem[]>"})," — реактивный список стран"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')

// Все страны
const allCountries = geoFlag.getList()

// Конкретные страны
const selectedCountries = geoFlag.getList(['ru-RU', 'en-US', 'de-DE'])
`})}),`
`,n.jsx(e.h3,{id:"getnational",children:n.jsx(e.code,{children:"getNational"})}),`
`,n.jsx(e.p,{children:"Получение списка стран по массиву с кодами на национальном языке."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"codes?: string[]"})," — массив кодов стран (по умолчанию: все доступные страны)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<GeoFlagNational[]>"})," — реактивный список стран с национальными названиями"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Структура GeoFlagNational:"})," включает все поля GeoFlagItem плюс:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"description?: string"})," — описание на национальном языке"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nationalLanguage?: string"})," — название языка на национальном языке"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nationalCountry?: string"})," — название страны на национальном языке"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')

// Страны с национальными названиями
const nationalCountries = geoFlag.getNational(['ru-RU', 'en-US'])
// [
//   { country: "Россия", nationalCountry: "Россия", nationalLanguage: "русский", ... },
//   { country: "США", nationalCountry: "United States", nationalLanguage: "English", ... }
// ]
`})}),`
`,n.jsx(e.h2,{id:"реактивные-возможности",children:"Реактивные возможности"}),`
`,n.jsx(e.h3,{id:"автоматическое-отслеживание-кода",children:"Автоматическое отслеживание кода"}),`
`,n.jsx(e.p,{children:"GeoFlagRef автоматически отслеживает изменения в коде страны:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const countryCode = ref('ru-RU')
const geoFlag = new GeoFlagRef(countryCode)

const countryInfo = geoFlag.get()
const flagIcon = geoFlag.getFlag()

// Изменение кода автоматически обновит все computed свойства
countryCode.value = 'en-US'
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"vue-компонент-с-флагами-стран",children:"Vue компонент с флагами стран"}),`
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

const selectedCode = ref('ru-RU')
const geoFlag = new GeoFlagRef(selectedCode)

const currentCountry = geoFlag.get()
const currentFlag = geoFlag.getFlag()
const countries = geoFlag.getList(['ru-RU', 'en-US', 'de-DE', 'fr-FR'])

function selectCountry(code) {
  selectedCode.value = code
}
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"composable-для-работы-с-флагами",children:"Composable для работы с флагами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export function useCountryFlags(initialCode = 'ru-RU') {
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
`,n.jsx(e.h3,{id:"селектор-стран-с-флагами",children:"Селектор стран с флагами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const geoFlag = new GeoFlagRef('ru-RU')
const europeanCountries = geoFlag.getList([
  'ru-RU', 'de-DE', 'fr-FR', 'it-IT', 'es-ES'
])

// Использование в селекте
const countryOptions = europeanCountries.value.map(country => ({
  label: country.country,
  value: country.standard,
  icon: country.icon
}))
`})}),`
`,n.jsx(e.p,{children:"Класс GeoFlagRef предоставляет мощную реактивную систему работы с флагами и информацией о странах для Vue приложений с автоматической локализацией и отслеживанием изменений."})]})}function h(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{h as default};
