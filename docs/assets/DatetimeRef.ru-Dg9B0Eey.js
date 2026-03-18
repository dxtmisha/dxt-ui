import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional/Classes/DatetimeRef - Реактивное управление датой и временем"}),`
`,e.jsx(n.h1,{id:"класс-datetimeref",children:"Класс DatetimeRef"}),`
`,e.jsxs(n.p,{children:["Класс для реактивной работы с датами и временем. Он предоставляет высокоуровневую обертку над утилитой ",e.jsx(n.code,{children:"Datetime"}),", обеспечивая автоматическую синхронизацию данных о дате с реактивными пропсами Vue и локалями."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность"})," — интеграция с Vue ",e.jsx(n.code,{children:"ref"})," и ",e.jsx(n.code,{children:"computed"}),". Автоматически отслеживает изменения входных данных и обновляет все связанные компоненты даты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронизация"})," — внутренняя привязка к классу ",e.jsx(n.code,{children:"Datetime"}),". Любые манипуляции с датой через базовый объект (",e.jsx(n.code,{children:"getDatetime()"}),") мгновенно отражаются в реактивных свойствах."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Локализация"})," — автоматическая поддержка международных форматов даты и времени через ",e.jsx(n.code,{children:"Geo"})," и ",e.jsx(n.code,{children:"GeoIntl"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Удобные аксессоры"})," — быстрый доступ к компонентам даты (год, месяц, день и т.д.) через вычисляемые свойства."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Создает новый экземпляр ",e.jsx(n.code,{children:"DatetimeRef"}),". Класс автоматически синхронизируется с переданными реактивными данными. Если параметры не переданы, используются значения по умолчанию (текущая дата и локаль)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"date: RefOrNormal<NumberOrStringOrDate>"})," — дата для инициализации (ISO строка, timestamp, объект ",e.jsx(n.code,{children:"Date"})," или ",e.jsx(n.code,{children:"ref"})," на них)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: RefOrNormal<GeoDate> = 'date'"})," — формат вывода по умолчанию (реактивный или обычный)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code: RefOrNormal<string> = Geo.getLocation()"})," — код локали (реактивный или обычный, например, 'ru-RU')."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Инициализация с реактивной строкой
const date = ref('2023-10-27')
const dt = new DatetimeRef(date, 'date', 'ru-RU')

// 2. Текущее время (по умолчанию)
const now = new DatetimeRef()

// 3. С использованием реактивной локали
const locale = ref('en-US')
const dtLocale = new DatetimeRef(new Date(), 'datetime', locale)
`})}),`
`,e.jsx(n.h2,{id:"методы-и-параметры",children:"Методы и параметры"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(): Ref<NumberOrStringOrDate>"})," — Возвращает реактивную ссылку на исходное значение даты, переданное в конструктор."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDate(): Ref<Date>"})," — Возвращает реактивную ссылку на внутренний объект ",e.jsx(n.code,{children:"Date"}),". Используется для синхронизации с базовым классом."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDatetime(): Datetime"})," — Возвращает экземпляр утилиты ",e.jsx(n.code,{children:"Datetime"}),". Позволяет использовать методы навигации (",e.jsx(n.code,{children:"moveBy..."}),", ",e.jsx(n.code,{children:"clone..."}),"), сохраняя реактивность."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHoursType(): ComputedRef<GeoHours>"})," — Определяет формат времени (12 или 24 часа) на основе текущей локали и настроек."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstDayCode(): ComputedRef<GeoFirstDay>"})," — Возвращает код первого дня недели (0 для воскресенья, 1 для понедельника) согласно локали."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMaxDay(): ComputedRef<number>"})," — Возвращает количество дней в текущем месяце (с учетом високосных лет)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"компоненты-даты",children:"Компоненты даты"}),`
`,e.jsxs(n.p,{children:["Эти методы возвращают ",e.jsx(n.code,{children:"ComputedRef"}),", которые автоматически обновляются при изменении даты:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getYear(): ComputedRef<number>"})," — Возвращает полный год."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMonth(): ComputedRef<number>"})," — Возвращает месяц (1–12)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDay(): ComputedRef<number>"})," — Возвращает число месяца (1-31)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHour(): ComputedRef<number>"})," — Возвращает часы текущей даты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getMinute(): ComputedRef<number>"})," — Возвращает минуты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSecond(): ComputedRef<number>"})," — Возвращает секунды."]}),`
`]}),`
`,e.jsx(n.h2,{id:"форматирование",children:"Форматирование"}),`
`,e.jsx(n.h3,{id:"locale",children:e.jsx(n.code,{children:"locale"})}),`
`,e.jsx(n.p,{children:"Возвращает строку даты, отформатированную в соответствии с локалью и настройками."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: GeoDate"})," — тип формата ('date', 'time', 'datetime', 'month', 'year' и др.). По умолчанию используется тип из конструктора."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"styleOptions?: object"})," — дополнительные опции форматирования ",e.jsx(n.code,{children:"Intl.DateTimeFormat"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]}),`
`,e.jsx(n.h3,{id:"standard",children:e.jsx(n.code,{children:"standard"})}),`
`,e.jsx(n.p,{children:"Возвращает стандартную ISO-строку даты."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timeZone: boolean"})," — включать ли информацию о временной зоне. По умолчанию: ",e.jsx(n.code,{children:"true"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<string>"})]})]})}function j(d={}){const{wrapper:n}={...i(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{j as default};
