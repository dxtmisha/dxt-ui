import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/GeoRef - Реактивный менеджер географии`}),`
`,(0,c.jsx)(t.h1,{id:`класс-georef`,children:`Класс GeoRef`}),`
`,(0,c.jsx)(t.p,{children:`Статический реактивный класс для управления глобальными географическими данными. Он предоставляет централизованный доступ к такой информации, как текущая страна, язык, стандартная локаль и первый день недели, гарантируя, что любые изменения будут отражены во всем приложении.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальная реактивность`}),` — использует общее реактивное состояние для географических данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованное управление`}),` — единая точка истины для настроек страны и языка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Статический доступ`}),` — методы можно вызывать напрямую у класса без создания экземпляра.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`глобальное-использование`,children:`Глобальное использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Поскольку `,(0,c.jsx)(t.code,{children:`GeoRef`}),` является статическим классом, его методы вызываются напрямую без создания экземпляра. Он служит единой точкой доступа к географическим настройкам приложения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`состояние-и-получение-данных`,children:`Состояние и получение данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): Ref<GeoItemFull>`}),` — возвращает реактивный объект с полной географической информацией.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCountry(): ComputedRef<string>`}),` — текущий код страны (например, `,(0,c.jsx)(t.code,{children:`'RU'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): ComputedRef<string>`}),` — текущий код языка (например, `,(0,c.jsx)(t.code,{children:`'ru'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStandard(): ComputedRef<string>`}),` — полный формат стандарта локали (например, `,(0,c.jsx)(t.code,{children:`'ru-RU'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): ComputedRef<string>`}),` — первый день недели (например, `,(0,c.jsx)(t.code,{children:`'monday'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`действия`,children:`Действия`}),`
`,(0,c.jsx)(t.h3,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Изменяет глобальные географические данные на основе переданного кода. Это действие мгновенно обновляет все реактивные зависимости `,(0,c.jsx)(t.code,{children:`GeoRef`}),` во всем приложении.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — код страны, полный вид язык-страна (например, "ru-RU") или один из них.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`geoitemfull`,children:`GeoItemFull`}),`
`,(0,c.jsx)(t.p,{children:`Структура объекта с полной географической информацией.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`country: string`}),` — текущий код страны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language: string`}),` — текущий код языка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`standard: string`}),` — стандартный код локали.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`firstDay: string`}),` — первый день недели.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`countryAlternative?: string[]`}),` — список альтернативных кодов стран.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`languageAlternative?: string[]`}),` — список альтернативных кодов языков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zone?: string | null`}),` — текущий часовой пояс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`phoneCode?: string`}),` — телефонный код страны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`phoneMask?: string | string[]`}),` — типичная маска номера телефона.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};