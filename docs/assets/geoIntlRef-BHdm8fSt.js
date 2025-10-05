import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DB_maGql.js";import{M as i}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/ru/Classes/Ref/GeoIntlRef"}),`
`,n.jsx(e.h1,{id:"класс-geointlref",children:"Класс GeoIntlRef"}),`
`,n.jsx(e.p,{children:"Реактивный Vue-класс для управления форматированием чисел, дат и локализованных названий. Обеспечивает автоматическое форматирование данных в соответствии с международными стандартами с полной интеграцией в реактивную систему Vue."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vue Reactivity"})," — использует computed свойства для реактивного форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интернационализация"})," — поддержка всех стандартов Intl API"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Форматирование чисел"})," — числа, валюты, проценты, единицы измерения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Форматирование дат"})," — даты, время, относительное время"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Локализованные названия"})," — страны, языки, месяцы, дни недели"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая локаль"})," — использует текущую геолокацию или заданную"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкий ввод"})," — принимает ref или обычные значения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Настраиваемые опции"})," — полная поддержка опций Intl API"]}),`
`]}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт экземпляр GeoIntlRef с реактивными параметрами."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: RefOrNormal<string>"})," — код страны, полный вид язык-страна или один из них"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// С автоматической локалью
const intl = new GeoIntlRef()

// С конкретной локалью
const intlRU = new GeoIntlRef('ru-RU')

// С реактивной локалью
const locale = ref('en-US')
const intlReactive = new GeoIntlRef(locale)
`})}),`
`,n.jsx(e.h2,{id:"методы-отображения-названий",children:"Методы отображения названий"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsx(e.p,{children:"Последовательный перевод отображаемых названий языка, региона и скрипта."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — предоставляемый код зависит от типа"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — опции отображения"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное отображаемое название"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const intl = new GeoIntlRef('ru-RU')

// Название языка
const langName = intl.display('en', 'language') // "английский"

// Название страны
const countryName = intl.display('US', 'region') // "США"
`})}),`
`,n.jsx(e.h3,{id:"languagename",children:n.jsx(e.code,{children:"languageName"})}),`
`,n.jsx(e.p,{children:"Получить отображаемые имена языка."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — код языка"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль форматирования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное название языка"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const langName = intl.languageName('en') // "английский"
`})}),`
`,n.jsx(e.h3,{id:"countryname",children:n.jsx(e.code,{children:"countryName"})}),`
`,n.jsx(e.p,{children:"Получить отображаемые имена региона."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — код страны"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль форматирования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное название страны"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const countryName = intl.countryName('US') // "США"
`})}),`
`,n.jsx(e.h2,{id:"методы-форматирования-чисел",children:"Методы форматирования чисел"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsx(e.p,{children:"Форматирование чисел в соответствии с локалью."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивная отформатированная строка"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const formatted = intl.number(1234.56) // "1 234,56"
const withDecimals = intl.number(1234.56, { minimumFractionDigits: 2 })
`})}),`
`,n.jsx(e.h3,{id:"decimal",children:n.jsx(e.code,{children:"decimal"})}),`
`,n.jsx(e.p,{children:"Символ десятичной точки."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный символ десятичной точки"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const decimalSymbol = intl.decimal() // "," для ru-RU, "." для en-US
`})}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Форматирование валюты."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — валюта или опции"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — не выводить значок валюты"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивная отформатированная валюта"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const price = intl.currency(1234.56, 'RUB') // "1 234,56 ₽"
const priceOnly = intl.currency(1234.56, 'USD', true) // "1,234.56"
`})}),`
`,n.jsx(e.h3,{id:"unit",children:n.jsx(e.code,{children:"unit"})}),`
`,n.jsx(e.p,{children:"Форматирование единиц измерения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — единица измерения или опции"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивная отформатированная единица"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const length = intl.unit(5, 'meter') // "5 м"
const weight = intl.unit(2.5, 'kilogram') // "2,5 кг"
`})}),`
`,n.jsx(e.h3,{id:"percent",children:n.jsx(e.code,{children:"percent"})}),`
`,n.jsx(e.p,{children:"Число в виде процента."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный процент"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const percentage = intl.percent(0.75) // "75%"
`})}),`
`,n.jsx(e.h3,{id:"percentby100",children:n.jsx(e.code,{children:"percentBy100"})}),`
`,n.jsx(e.p,{children:"Число в виде процента (единица)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивный процент"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const percentage = intl.percentBy100(75) // "75%"
`})}),`
`,n.jsx(e.h2,{id:"методы-форматирования-дат",children:"Методы форматирования дат"}),`
`,n.jsx(e.h3,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsx(e.p,{children:"Форматирование даты и времени с учётом языка."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — тип формата даты"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — опции стиля"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — использовать ли 24-часовое время"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивная отформатированная дата"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const date = intl.date(new Date()) // "15.01.2024"
const dateTime = intl.date(new Date(), 'datetime') // "15.01.2024, 14:30"
`})}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsx(e.p,{children:"Форматирование относительного времени."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — опции стиля"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — текущий день"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное относительное время"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
const relative = intl.relative(yesterday) // "вчера"
`})}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsx(e.p,{children:"Относительное время с лимитом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit: number"})," — предел в днях"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — текущий день"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — опции относительного времени"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — опции даты"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — тип формата даты"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — 24-часовое время"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное форматированное время"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const limitedRelative = intl.relativeLimit(yesterday, 7) // "вчера" или полная дата если > 7 дней
`})}),`
`,n.jsx(e.h3,{id:"month",children:n.jsx(e.code,{children:"month"})}),`
`,n.jsx(e.p,{children:"Названия месяцев."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — представление месяца"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное название месяца"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const monthName = intl.month(new Date(), 'long') // "январь"
`})}),`
`,n.jsx(e.h3,{id:"months",children:n.jsx(e.code,{children:"months"})}),`
`,n.jsx(e.p,{children:"Массив названий месяцев."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — представление месяца"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})," — реактивный список месяцев"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const monthsList = intl.months('long')
// [{ label: "январь", value: 0 }, { label: "февраль", value: 1 }, ...]
`})}),`
`,n.jsx(e.h3,{id:"weekday",children:n.jsx(e.code,{children:"weekday"})}),`
`,n.jsx(e.p,{children:"Названия дней недели."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — представление дня недели"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})," — реактивное название дня недели"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const dayName = intl.weekday(new Date(), 'long') // "понедельник"
`})}),`
`,n.jsx(e.h3,{id:"weekdays",children:n.jsx(e.code,{children:"weekdays"})}),`
`,n.jsx(e.p,{children:"Массив названий дней недели."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — представление дня недели"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})," — реактивный список дней недели"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const daysList = intl.weekdays('long')
// [{ label: "воскресенье", value: 0 }, { label: "понедельник", value: 1 }, ...]
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"vue-компонент-с-локализацией",children:"Vue компонент с локализацией"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>
  <div class="localized-content">
    <h2>{{ intl.countryName('RU') }}</h2>
    <p>Цена: {{ intl.currency(1299, 'RUB') }}</p>
    <p>Дата: {{ intl.date(new Date()) }}</p>
    <p>Обновлено: {{ intl.relative(lastUpdate) }}</p>
  </div>
</template>

<script setup>
import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = ref('ru-RU')
const intl = new GeoIntlRef(locale)
const lastUpdate = ref(new Date(Date.now() - 2 * 60 * 60 * 1000)) // 2 часа назад
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"composable-для-интернационализации",children:"Composable для интернационализации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export function useIntl(locale = 'ru-RU') {
  const intl = new GeoIntlRef(locale)

  return {
    formatNumber: intl.number,
    formatCurrency: intl.currency,
    formatDate: intl.date,
    formatRelative: intl.relative,
    getCountryName: intl.countryName,
    getMonths: intl.months,
    getWeekdays: intl.weekdays
  }
}
`})}),`
`,n.jsx(e.h3,{id:"динамическая-смена-локали",children:"Динамическая смена локали"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const currentLocale = ref('ru-RU')
const intl = new GeoIntlRef(currentLocale)

// Изменение локали обновит все форматирование
function changeLocale(newLocale) {
  currentLocale.value = newLocale
}
`})}),`
`,n.jsx(e.p,{children:"Класс GeoIntlRef предоставляет мощную реактивную систему интернационализации для Vue приложений с автоматическим форматированием данных в соответствии с международными стандартами."})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{j as default};
