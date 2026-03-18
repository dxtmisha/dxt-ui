import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional/Classes/GeoRef - Реактивный менеджер географии"}),`
`,n.jsx(e.h1,{id:"класс-georef",children:"Класс GeoRef"}),`
`,n.jsx(e.p,{children:"Статический реактивный класс для управления глобальными географическими данными. Он предоставляет централизованный доступ к такой информации, как текущая страна, язык, стандартная локаль и первый день недели, гарантируя, что любые изменения будут отражены во всем приложении."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальная реактивность"})," — использует общее реактивное состояние для географических данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Централизованное управление"})," — единая точка истины для настроек страны и языка."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Статический доступ"})," — методы можно вызывать напрямую у класса без создания экземпляра."]}),`
`]}),`
`,n.jsx(e.h2,{id:"глобальное-использование",children:"Глобальное использование"}),`
`,n.jsxs(e.p,{children:["Поскольку ",n.jsx(e.code,{children:"GeoRef"})," является статическим классом, его методы вызываются напрямую без создания экземпляра. Он служит единой точкой доступа к географическим настройкам приложения."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watch } from 'vue'

// 1. Получение реактивного значения
const country = GeoRef.getCountry()
console.log('Текущая страна:', country.value)

// 2. Отслеживание изменений
watch(GeoRef.getLanguage(), (lang) => {
  console.log('Язык изменен на:', lang)
})

// 3. Глобальное изменение локации
GeoRef.set('en-US') 
// Все вызовы getCountry, getLanguage и т.д. обновятся автоматически
`})}),`
`,n.jsx(e.h2,{id:"состояние-и-получение-данных",children:"Состояние и получение данных"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): Ref<GeoItemFull>"})," — возвращает реактивный объект с полной географической информацией."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getCountry(): ComputedRef<string>"})," — текущий код страны (например, ",n.jsx(e.code,{children:"'RU'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLanguage(): ComputedRef<string>"})," — текущий код языка (например, ",n.jsx(e.code,{children:"'ru'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getStandard(): ComputedRef<string>"})," — полный формат стандарта локали (например, ",n.jsx(e.code,{children:"'ru-RU'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFirstDay(): ComputedRef<string>"})," — первый день недели (например, ",n.jsx(e.code,{children:"'monday'"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"действия",children:"Действия"}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsxs(e.p,{children:["Изменяет глобальные географические данные на основе переданного кода. Это действие мгновенно обновляет все реактивные зависимости ",n.jsx(e.code,{children:"GeoRef"})," во всем приложении."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"}),' — код страны, полный вид язык-страна (например, "ru-RU") или один из них.']}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"geoitemfull",children:"GeoItemFull"}),`
`,n.jsx(e.p,{children:"Структура объекта с полной географической информацией."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — текущий код страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — текущий код языка."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"standard: string"})," — стандартный код локали."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"firstDay: string"})," — первый день недели."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"countryAlternative?: string[]"})," — список альтернативных кодов стран."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"languageAlternative?: string[]"})," — список альтернативных кодов языков."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"zone?: string | null"})," — текущий часовой пояс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phoneCode?: string"})," — телефонный код страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phoneMask?: string | string[]"})," — типичная маска номера телефона."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
