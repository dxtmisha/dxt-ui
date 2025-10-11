import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Dqnce8mp.js";import{M as r}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/ru/Classes/Ref/DatetimeRef"}),`
`,e.jsx(n.h1,{id:"класс-datetimeref",children:"Класс DatetimeRef"}),`
`,e.jsx(n.p,{children:"Vue-ориентированный класс для работы с датами с реактивными computed свойствами. Обеспечивает автоматическое отслеживание изменений даты, формата вывода и локали с полной интеграцией в реактивную систему Vue."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — использует computed свойства и ref/watch для реактивности"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматические обновления"})," — автоматически пересчитывает значения при изменении входных данных"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гибкий ввод"})," — принимает Date объекты, строки, числа или реактивные refs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка локали"})," — автоматическое форматирование на основе кодов страны и языка"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Множественные форматы"})," — поддерживает различные форматы вывода даты/времени"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Компоненты даты"})," — реактивные computed свойства для всех компонентов даты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Часовые пояса"})," — правильная поддержка часовых поясов с учётом локали"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция Watch"})," — автоматически отслеживает изменения во всех входных параметрах"]}),`
`]}),`
`,e.jsx(n.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Создаёт экземпляр DatetimeRef с реактивными параметрами."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date: RefOrNormal<NumberOrStringOrDate>"})," — дата для обработки (ref или обычное значение)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: RefOrNormal<GeoDate>"})," — тип формата даты для вывода (по умолчанию: 'date')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code?: RefOrNormal<string>"})," — код страны и языка (по умолчанию: текущая локация)"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Типы GeoDate:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'full'"})," — полная дата и время"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'datetime'"})," — дата с временем"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'date'"})," — только дата"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'year-month'"})," — год и месяц"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'year'"})," — только год"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'month'"})," — только месяц"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'day'"})," — только день"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'day-month'"})," — день и месяц"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'time'"})," — только время"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour-minute'"})," — часы и минуты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'hour'"})," — только часы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'minute'"})," — только минуты"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'second'"})," — только секунды"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// С ref данными
const dateRef = ref(new Date())
const formatRef = ref('datetime')
const localeRef = ref('ru-RU')

const datetime = new DatetimeRef(dateRef, formatRef, localeRef)

// С обычными данными
const staticDatetime = new DatetimeRef('2024-01-15', 'date', 'ru-RU')
`})}),`
`,e.jsx(n.h2,{id:"реактивные-computed-свойства",children:"Реактивные computed свойства"}),`
`,e.jsx(n.h3,{id:"getyear",children:e.jsx(n.code,{children:"getYear"})}),`
`,e.jsx(n.p,{children:"Возвращает год указанной даты."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное значение года"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const yearValue = datetime.getYear()
// Автоматически обновляется при изменении д��ты
`})}),`
`,e.jsx(n.h3,{id:"getmonth",children:e.jsx(n.code,{children:"getMonth"})}),`
`,e.jsx(n.p,{children:"Возвращает месяц как значение с нулевым основанием (0 = январь, 11 = декабрь)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное значение месяца (0-11)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const monthValue = datetime.getMonth()
`})}),`
`,e.jsx(n.h3,{id:"getday",children:e.jsx(n.code,{children:"getDay"})}),`
`,e.jsx(n.p,{children:"Возвращает день месяца."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное значение дня (1-31)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dayValue = datetime.getDay()
`})}),`
`,e.jsx(n.h3,{id:"gethour",children:e.jsx(n.code,{children:"getHour"})}),`
`,e.jsx(n.p,{children:"Возвращает час по местному времени."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное значение часа (0-23)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hourValue = datetime.getHour()
`})}),`
`,e.jsx(n.h3,{id:"getminute",children:e.jsx(n.code,{children:"getMinute"})}),`
`,e.jsx(n.p,{children:"Возвращает минуты по местному времени."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное значение минут (0-59)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const minuteValue = datetime.getMinute()
`})}),`
`,e.jsx(n.h3,{id:"getsecond",children:e.jsx(n.code,{children:"getSecond"})}),`
`,e.jsx(n.p,{children:"Возвращает секунды по местному времени."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное значение секунд (0-59)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const secondValue = datetime.getSecond()
`})}),`
`,e.jsx(n.h3,{id:"getmaxday",children:e.jsx(n.code,{children:"getMaxDay"})}),`
`,e.jsx(n.p,{children:"Возвращает последний день месяца для текущей даты."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — реактивное максимальное количество дней в месяце (28-31)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const maxDayValue = datetime.getMaxDay()
`})}),`
`,e.jsx(n.h3,{id:"gethourstype",children:e.jsx(n.code,{children:"getHoursType"})}),`
`,e.jsx(n.p,{children:"Возвращает формат часов (12-часовой или 24-часовой)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<GeoHours>"})," — реактивный формат часов ('12' | '24')"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hoursFormat = datetime.getHoursType()
`})}),`
`,e.jsx(n.h3,{id:"getfirstdaycode",children:e.jsx(n.code,{children:"getFirstDayCode"})}),`
`,e.jsx(n.p,{children:"Возвращает код первого дня недели для текущей локали."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<GeoFirstDay>"})," — реактивный код первого дня (0 = воскресенье, 1 = понедельник, 6 = суббота)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const firstDayCode = datetime.getFirstDayCode()
`})}),`
`,e.jsx(n.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,e.jsx(n.h3,{id:"getitem",children:e.jsx(n.code,{children:"getItem"})}),`
`,e.jsx(n.p,{children:"Возвращает исходные входные данные для даты."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"RefOrNormal<NumberOrStringOrDate>"})," — исходные входные данные"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const originalInput = datetime.getItem()
`})}),`
`,e.jsx(n.h3,{id:"getdate",children:e.jsx(n.code,{children:"getDate"})}),`
`,e.jsx(n.p,{children:"Возвращает реактивный объект Date."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Ref<Date>"})," — реактивный объект Date"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const reactiveDate = datetime.getDate()
`})}),`
`,e.jsx(n.h3,{id:"getdatetime",children:e.jsx(n.code,{children:"getDatetime"})}),`
`,e.jsx(n.p,{children:"Возвращает экземпляр базового класса Datetime."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Datetime"})," — объект базового класса Datetime"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const baseDateTime = datetime.getDatetime()
`})}),`
`,e.jsx(n.h2,{id:"методы-форматирования",children:"Методы форматирования"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Включает языково-зависимое форматирование даты и времени."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — тип формата даты (по умолчанию: текущий тип)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — опции форматирования"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — реактивная отформатированная строка даты"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Базовое форматирование
const formatted = datetime.locale()

// Пользовательское форматирование
const monthName = datetime.locale('month', 'long')
const fullFormat = datetime.locale('full', {
  weekday: 'long',
  month: 'long'
})
`})}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Возвращает дату в стандартном формате с опциональной информацией о часовом поясе."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timeZone?: boolean"})," — добавить информацию о часовом поясе (по умолчанию: true)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})," — реактивная дата в стандартном формате"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// С часовым поясом
const withTz = datetime.standard()

// Без часового пояса
const withoutTz = datetime.standard(false)
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"vue-компонент-с-реактивной-датой",children:"Vue компонент с реактивной датой"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div>
    <span>{{ datetime.getYear() }}/{{ datetime.getMonth() + 1 }}/{{ datetime.getDay() }}</span>
    <span>{{ datetime.locale() }}</span>
  </div>
</template>

<script setup>
import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const currentDate = ref(new Date())
const datetime = new DatetimeRef(currentDate, 'datetime', 'ru-RU')
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"composable-для-работы-с-датами",children:"Composable для работы с датами"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function useDatetime(initialDate) {
  const date = ref(initialDate || new Date())
  const datetime = new DatetimeRef(date, 'date', 'ru-RU')

  return {
    datetime,
    year: datetime.getYear(),
    formatted: datetime.locale()
  }
}
`})}),`
`,e.jsx(n.h3,{id:"реактивные-изменения-формата",children:"Реактивные изменения формата"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dateValue = ref(new Date())
const formatType = ref('date')
const datetime = new DatetimeRef(dateValue, formatType, 'ru-RU')

// Все computed свойства автоматически обновятся
formatType.value = 'datetime'
`})}),`
`,e.jsx(n.p,{children:"Класс DatetimeRef предоставляет мощную реактивную систему работы с датами для Vue приложений с автоматическим отслеживанием изменений и форматированием."})]})}function j(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
