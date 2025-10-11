import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/functional/ru/Composables/useGeoIntlRef"}),`
`,e.jsx(n.h1,{id:"композабл-usegeointlref",children:"Композабл useGeoIntlRef"}),`
`,e.jsx(n.p,{children:"Композабл для создания реактивного объекта интернационализации. Предоставляет методы форматирования чисел, валют, дат и названий с автоматическим учётом локали пользователя. Все методы возвращают computed значения, которые автоматически обновляются при изменении входных данных."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Форматирование чисел"})," — локализованное представление чисел с разделителями"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Форматирование валют"})," — отображение денежных сумм с символами валют"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Форматирование дат"})," — различные форматы дат и времени по региональным стандартам"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Названия стран и языков"})," — локализованные названия регионов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Относительное время"}),' — "2 дня назад", "через 5 минут" и т.д.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Проценты и единицы"})," — форматирование процентов и единиц измерения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность"})," — все методы возвращают computed, обновляющиеся автоматически"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоопределение локали"})," — использует геолокацию пользователя по умолчанию"]}),`
`]}),`
`,e.jsx(n.h2,{id:"функция",children:"Функция"}),`
`,e.jsx(n.h3,{id:"usegeointlref",children:e.jsx(n.code,{children:"useGeoIntlRef()"})}),`
`,e.jsxs(n.p,{children:["Создаёт и возвращает экземпляр класса ",e.jsx(n.code,{children:"GeoIntlRef"})," для работы с форматированием данных."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Параметры:"})," нет"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"GeoIntlRef"})," — объект с методами форматирования"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useGeoIntlRef } from '@dxtmisha/functional'

// Создание экземпляра
const intl = useGeoIntlRef()

// Все методы возвращают ComputedRef
const formatted = intl.number(1234.56)
`})}),`
`,e.jsx(n.h2,{id:"методы-форматирования-чисел",children:"Методы форматирования чисел"}),`
`,e.jsx(n.h3,{id:"number",children:e.jsx(n.code,{children:"number"})}),`
`,e.jsx(n.p,{children:"Форматирование числа согласно локали."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = useGeoIntlRef()
const count = ref(1234567.89)

intl.number(count) // ComputedRef<'1 234 567,89'>
intl.number(1000, { minimumFractionDigits: 2 }) // ComputedRef<'1 000,00'>
`})}),`
`,e.jsx(n.h3,{id:"decimal",children:e.jsx(n.code,{children:"decimal"})}),`
`,e.jsx(n.p,{children:"Возвращает символ десятичного разделителя для текущей локали."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = useGeoIntlRef()
intl.decimal() // ComputedRef<','>  (для ru-RU)
               // ComputedRef<'.'>  (для en-US)
`})}),`
`,e.jsx(n.h3,{id:"percent",children:e.jsx(n.code,{children:"percent"})}),`
`,e.jsx(n.p,{children:"Форматирование числа как процента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования (0.15 = 15%)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percent(0.15)  // ComputedRef<'15%'>
intl.percent(1.25)  // ComputedRef<'125%'>
`})}),`
`,e.jsx(n.h3,{id:"percentby100",children:e.jsx(n.code,{children:"percentBy100"})}),`
`,e.jsx(n.p,{children:"Форматирование числа как процента (значение уже в процентах)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — число для форматирования (15 = 15%)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.percentBy100(15)   // ComputedRef<'15%'>
intl.percentBy100(125)  // ComputedRef<'125%'>
`})}),`
`,e.jsx(n.h2,{id:"методы-форматирования-валют",children:"Методы форматирования валют"}),`
`,e.jsx(n.h3,{id:"currency",children:e.jsx(n.code,{children:"currency"})}),`
`,e.jsx(n.p,{children:"Форматирование денежной суммы."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — сумма для форматирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — код валюты или опции"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — не показывать символ валюты (по умолчанию ",e.jsx(n.code,{children:"false"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const intl = useGeoIntlRef()
const price = ref(99.99)

intl.currency(price, 'USD')           // ComputedRef<'$99,99'>
intl.currency(1234.56, 'RUB')         // ComputedRef<'1 234,56 ₽'>
intl.currency(500, 'EUR', true)       // ComputedRef<'500,00'> (без символа)
`})}),`
`,e.jsx(n.h3,{id:"unit",children:e.jsx(n.code,{children:"unit"})}),`
`,e.jsx(n.p,{children:"Форматирование с единицами измерения."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrString>"})," — значение для форматирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — единица измерения или опции"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.unit(100, 'kilometer')  // ComputedRef<'100 км'>
intl.unit(50, 'kilogram')    // ComputedRef<'50 кг'>
intl.unit(1.5, 'hour')       // ComputedRef<'1,5 ч'>
`})}),`
`,e.jsx(n.h2,{id:"методы-форматирования-дат",children:"Методы форматирования дат"}),`
`,e.jsx(n.h3,{id:"date",children:e.jsx(n.code,{children:"date"})}),`
`,e.jsx(n.p,{children:"Форматирование даты и времени."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — тип формата ('date' | 'time' | 'datetime' | 'full' | 'long' | 'medium' | 'short')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — стиль или опции"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — использовать 24-часовой формат"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const date = ref(new Date('2024-10-15 14:30:00'))

intl.date(date)               // ComputedRef<'15.10.2024'>
intl.date(date, 'time')       // ComputedRef<'14:30'>
intl.date(date, 'datetime')   // ComputedRef<'15.10.2024, 14:30'>
intl.date(date, 'full')       // ComputedRef<'вторник, 15 октября 2024 г.'>
`})}),`
`,e.jsx(n.h3,{id:"relative",children:e.jsx(n.code,{children:"relative"})}),`
`,e.jsx(n.p,{children:'Форматирование относительного времени ("2 дня назад", "через час").'}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата для сравнения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — стиль ('long' | 'short' | 'narrow')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — текущая дата (по умолчанию ",e.jsx(n.code,{children:"new Date()"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const twoDaysAgo = new Date()
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

intl.relative(twoDaysAgo)             // ComputedRef<'2 дня назад'>
intl.relative(twoDaysAgo, 'short')    // ComputedRef<'2 дн. назад'>
`})}),`
`,e.jsx(n.h3,{id:"relativelimit",children:e.jsx(n.code,{children:"relativeLimit"})}),`
`,e.jsx(n.p,{children:"Форматирование относительного времени с ограничением. Если разница превышает лимит, выводится абсолютная дата."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — дата для форматирования"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"limit: number"})," — лимит в днях"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"todayValue?: Date"})," — текущая дата"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — опции относительного формата"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — опции формата даты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — тип формата даты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — 24-часовой формат"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const threeDaysAgo = new Date()
threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

intl.relativeLimit(threeDaysAgo, 7)   // ComputedRef<'3 дня назад'>

const tenDaysAgo = new Date()
tenDaysAgo.setDate(tenDaysAgo.getDate() - 10)

intl.relativeLimit(tenDaysAgo, 7)     // ComputedRef<'05.10.2024'> (абсолютная дата)
`})}),`
`,e.jsx(n.h2,{id:"методы-для-названий",children:"Методы для названий"}),`
`,e.jsx(n.h3,{id:"display",children:e.jsx(n.code,{children:"display"})}),`
`,e.jsx(n.p,{children:"Получение локализованного названия (языка, региона, скрипта и т.д.)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — код для получения названия"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — тип ('language' | 'region' | 'script' | 'currency')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.display('US', 'region')    // ComputedRef<'США'>
intl.display('en', 'language')  // ComputedRef<'английский'>
intl.display('USD', 'currency') // ComputedRef<'доллар США'>
`})}),`
`,e.jsx(n.h3,{id:"languagename",children:e.jsx(n.code,{children:"languageName"})}),`
`,e.jsx(n.p,{children:"Получение названия языка."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — код языка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль отображения"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.languageName('en')  // ComputedRef<'английский'>
intl.languageName('de')  // ComputedRef<'немецкий'>
`})}),`
`,e.jsx(n.h3,{id:"countryname",children:e.jsx(n.code,{children:"countryName"})}),`
`,e.jsx(n.p,{children:"Получение названия страны."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: RefOrNormal<string>"})," — код страны"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — стиль отображения"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`intl.countryName('US')  // ComputedRef<'США'>
intl.countryName('GB')  // ComputedRef<'Великобритания'>
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"базовое-использование",children:"Базовое использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'
import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()
const price = ref(1234.56)

// Все методы возвращают ComputedRef
const formatted = intl.currency(price, 'USD')
console.log(formatted.value) // '$1,234.56'

// Автоматическое обновление при изменении
price.value = 2000
console.log(formatted.value) // '$2,000.00'
`})}),`
`,e.jsx(n.h3,{id:"реактивные-параметры",children:"Реактивные параметры"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const price = ref(100)
const currency = ref('USD')

// Реактивная валюта и значение
const formatted = intl.currency(price, currency)

currency.value = 'EUR'
// formatted.value автоматически обновится
`})})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
