import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DB_maGql.js";import{M as i}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/ru/Classes/Ref/GeoRef"}),`
`,n.jsx(e.h1,{id:"класс-georef",children:"Класс GeoRef"}),`
`,n.jsx(e.p,{children:"Статический реактивный Vue-класс для работы с географическими данными. Предоставляет глобальный доступ к информации о текущей стране, языке и региональных настройках с автоматическим отслеживанием изменений через Vue реактивность."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Статические методы"})," — глобальный доступ к географическим данным"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vue Reactivity"})," — использует shallowRef и computed для реактивности"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое определение"})," — автоматически определяет текущую локацию"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронизация данных"})," — автоматически синхронизируется с базовым классом Geo"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивные computed"})," — отдельные computed свойства для каждого типа данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальная настройка"})," — изменение локации влияет на всё приложение"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типизированные данные"})," — полная типизация географических данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с Geo"})," — работает поверх базового класса Geo"]}),`
`]}),`
`,n.jsx(e.h2,{id:"статические-методы-получения-данных",children:"Статические методы получения данных"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Информация о текущей стране."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Ref<GeoItemFull>"})," — реактивная полная информация о стране"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Структура GeoItemFull:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — код страны"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — код языка"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"standard: string"})," — полный стандартный код"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"firstDay: string"})," — первый день недели"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"countryAlternative?: string[]"})," — альтернативные коды стран"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"languageAlternative?: string[]"})," — альтернативные коды языков"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"zone?: string | null"})," — часовой пояс"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phoneCode?: string"})," — телефонный код"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phoneWithin?: string"})," — код для внутренних звонков"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phoneMask?: string | string[]"})," — маска телефона"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nameFormat?: string"})," — формат имени"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoRef } from '@dxtmisha/functional'

const geoData = GeoRef.get()
// { country: "RU", language: "ru", standard: "ru-RU", firstDay: "1", ... }
`})}),`
`,n.jsx(e.h3,{id:"getcountry",children:n.jsx(e.code,{children:"getCountry"})}),`
`,n.jsx(e.p,{children:"Текущая страна."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный код текущей страны"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const currentCountry = GeoRef.getCountry() // "RU"
`})}),`
`,n.jsx(e.h3,{id:"getlanguage",children:n.jsx(e.code,{children:"getLanguage"})}),`
`,n.jsx(e.p,{children:"Текущий язык."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный код текущего языка"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const currentLanguage = GeoRef.getLanguage() // "ru"
`})}),`
`,n.jsx(e.h3,{id:"getstandard",children:n.jsx(e.code,{children:"getStandard"})}),`
`,n.jsx(e.p,{children:"Полный формат согласно стандарту."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный стандартный код"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const standardCode = GeoRef.getStandard() // "ru-RU"
`})}),`
`,n.jsx(e.h3,{id:"getfirstday",children:n.jsx(e.code,{children:"getFirstDay"})}),`
`,n.jsx(e.p,{children:"Возвращает первый день недели."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный код первого дня недели"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const firstDay = GeoRef.getFirstDay() // "1" (понедельник)
`})}),`
`,n.jsx(e.h2,{id:"методы-управления",children:"Методы управления"}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Изменяет данные по полному коду."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — код страны, полный вид язык-страна или один из них"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Установка полной локали
GeoRef.set('en-US')

// Установка только языка
GeoRef.set('fr')

// Установка только страны
GeoRef.set('DE')
`})}),`
`,n.jsx(e.h2,{id:"реактивные-возможности",children:"Реактивные возможности"}),`
`,n.jsx(e.h3,{id:"глобальная-реактивность",children:"Глобальная реактивность"}),`
`,n.jsx(e.p,{children:"GeoRef предоставляет глобальную реактивность для всего приложения:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Все компоненты автоматически обновятся при изменении
const country = GeoRef.getCountry()
const language = GeoRef.getLanguage()

// Изменение повлияет на все использования
GeoRef.set('en-US')
`})}),`
`,n.jsx(e.h3,{id:"интеграция-с-другими-классами",children:"Интеграция с другими классами"}),`
`,n.jsx(e.p,{children:"GeoRef автоматически синхронизируется с другими Geo-классами:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoRef, GeoIntlRef, GeoFlagRef } from '@dxtmisha/functional'

// Изменение в GeoRef повлияет на все остальные классы
GeoRef.set('de-DE')

// Все эти классы автоматически обновятся
const intl = new GeoIntlRef() // будет использовать de-DE
const flag = new GeoFlagRef() // будет использовать de-DE
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"vue-компонент-с-глобальной-геолокацией",children:"Vue компонент с глобальной геолокацией"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>
  <div class="geo-info">
    <h2>Текущая локация</h2>
    <p>Страна: {{ geoData.country }}</p>
    <p>Язык: {{ geoData.language }}</p>
    <p>Стандарт: {{ geoData.standard }}</p>
    <p>Первый день недели: {{ geoData.firstDay }}</p>

    <button @click="changeToUS">Сменить на США</button>
    <button @click="changeToDE">Сменить на Германию</button>
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
`,n.jsx(e.h3,{id:"composable-для-работы-с-геоданными",children:"Composable для работы с геоданными"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export function useGeo() {
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
`,n.jsx(e.h3,{id:"глобальная-настройка-локализации",children:"Глобальная настройка локализации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// В main.js или setup приложения
import { GeoRef } from '@dxtmisha/functional'

// Определение локали по пользовательским настройкам
const userLocale = localStorage.getItem('locale') || 'ru-RU'
GeoRef.set(userLocale)

// Все компоненты приложения будут использовать эту локаль
`})}),`
`,n.jsx(e.h2,{id:"интеграция-с-vue-приложением",children:"Интеграция с Vue приложением"}),`
`,n.jsx(e.h3,{id:"глобальный-провайдер-локали",children:"Глобальный провайдер локали"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<!-- App.vue -->
<template>
  <div class="app">
    <LocaleSelector />
    <router-view />
  </div>
</template>

<script setup>
import { GeoRef } from '@dxtmisha/functional'
import { provide } from 'vue'

// Предоставляем геоданные всему приложению
provide('geo', {
  data: GeoRef.get(),
  setLocale: GeoRef.set
})
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"реактивная-смена-темы-по-региону",children:"Реактивная смена темы по региону"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watch } from 'vue'

const country = GeoRef.getCountry()

// Автоматическая смена темы в зависимости от страны
watch(country, (newCountry) => {
  const theme = {
    'RU': 'russian-theme',
    'US': 'american-theme',
    'DE': 'german-theme'
  }[newCountry] || 'default-theme'

  document.body.className = theme
}, { immediate: true })
`})}),`
`,n.jsx(e.h3,{id:"мониторинг-изменений-локации",children:"Мониторинг изменений локации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watchEffect } from 'vue'

// Логирование всех изменений геоданных
watchEffect(() => {
  const geo = GeoRef.get().value
  console.log('Geo data changed:', {
    country: geo.country,
    language: geo.language,
    standard: geo.standard
  })
})
`})}),`
`,n.jsx(e.p,{children:"Класс GeoRef предоставляет централизованную реактивную систему управления географическими данными для Vue приложений с глобальным доступом и автоматической синхронизацией."})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
