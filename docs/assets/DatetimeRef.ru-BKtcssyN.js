import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DatetimeRef - Реактивное управление датой и временем`}),`
`,(0,c.jsx)(t.h1,{id:`класс-datetimeref`,children:`Класс DatetimeRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс для реактивной работы с датами и временем. Он предоставляет высокоуровневую обертку над утилитой `,(0,c.jsx)(t.code,{children:`Datetime`}),`, обеспечивая автоматическую синхронизацию данных о дате с реактивными пропсами Vue и локалями.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивность`}),` — интеграция с Vue `,(0,c.jsx)(t.code,{children:`ref`}),` и `,(0,c.jsx)(t.code,{children:`computed`}),`. Автоматически отслеживает изменения входных данных и обновляет все связанные компоненты даты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация`}),` — внутренняя привязка к классу `,(0,c.jsx)(t.code,{children:`Datetime`}),`. Любые манипуляции с датой через базовый объект (`,(0,c.jsx)(t.code,{children:`getDatetime()`}),`) мгновенно отражаются в реактивных свойствах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Локализация`}),` — автоматическая поддержка международных форматов даты и времени через `,(0,c.jsx)(t.code,{children:`Geo`}),` и `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Удобные аксессоры`}),` — быстрый доступ к компонентам даты (год, месяц, день и т.д.) через вычисляемые свойства.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(t.code,{children:`DatetimeRef`}),`. Класс автоматически синхронизируется с переданными реактивными данными. Если параметры не переданы, используются значения по умолчанию (текущая дата и локаль).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — дата для инициализации (ISO строка, timestamp, объект `,(0,c.jsx)(t.code,{children:`Date`}),` или `,(0,c.jsx)(t.code,{children:`ref`}),` на них).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — формат вывода по умолчанию (реактивный или обычный).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — код локали (реактивный или обычный, например, 'ru-RU').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`методы-и-параметры`,children:`Методы и параметры`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Возвращает реактивную ссылку на исходное значение даты, переданное в конструктор.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDate(): Ref<Date>`}),` — Возвращает реактивную ссылку на внутренний объект `,(0,c.jsx)(t.code,{children:`Date`}),`. Используется для синхронизации с базовым классом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDatetime(): Datetime`}),` — Возвращает экземпляр утилиты `,(0,c.jsx)(t.code,{children:`Datetime`}),`. Позволяет использовать методы навигации (`,(0,c.jsx)(t.code,{children:`moveBy...`}),`, `,(0,c.jsx)(t.code,{children:`clone...`}),`), сохраняя реактивность.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Определяет формат времени (12 или 24 часа) на основе текущей локали и настроек.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Возвращает код первого дня недели (0 для воскресенья, 1 для понедельника) согласно локали.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Возвращает количество дней в текущем месяце (с учетом високосных лет).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`компоненты-даты`,children:`Компоненты даты`}),`
`,(0,c.jsxs)(t.p,{children:[`Эти методы возвращают `,(0,c.jsx)(t.code,{children:`ComputedRef`}),`, которые автоматически обновляются при изменении даты:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getYear(): ComputedRef<number>`}),` — Возвращает полный год.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMonth(): ComputedRef<number>`}),` — Возвращает месяц (1–12).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDay(): ComputedRef<number>`}),` — Возвращает число месяца (1-31).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHour(): ComputedRef<number>`}),` — Возвращает часы текущей даты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMinute(): ComputedRef<number>`}),` — Возвращает минуты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSecond(): ComputedRef<number>`}),` — Возвращает секунды.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`форматирование`,children:`Форматирование`}),`
`,(0,c.jsx)(t.h3,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает строку даты, отформатированную в соответствии с локалью и настройками.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: GeoDate`}),` — тип формата ('date', 'time', 'datetime', 'month', 'year' и др.). По умолчанию используется тип из конструктора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: object`}),` — дополнительные опции форматирования `,(0,c.jsx)(t.code,{children:`Intl.DateTimeFormat`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает стандартную ISO-строку даты.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone: boolean`}),` — включать ли информацию о временной зоне. По умолчанию: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};