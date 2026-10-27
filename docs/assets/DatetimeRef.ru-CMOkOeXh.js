import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DatetimeRef - Реактивное управление датой и временем`}),`
`,(0,c.jsx)(t.h1,{id:`класс-datetimeref`,children:`Класс DatetimeRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивная обёртка над `,(0,c.jsx)(t.code,{children:`Datetime`}),`. Синхронизирует входную дату с рабочим `,(0,c.jsx)(t.code,{children:`Date`}),`, предоставляет вычисляемые поля календаря и обновляет их после изменений через `,(0,c.jsx)(t.code,{children:`getDatetime()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обязательная дата`}),` — строка, временная метка или `,(0,c.jsx)(t.code,{children:`Date`}),`, напрямую либо в ссылке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Календарные поля`}),` — месяцы нумеруются от 1 до 12.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Форматирование`}),` — локализованный и стандартный вывод представлены вычисляемыми ссылками.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( date: RefOrNormal<NumberOrStringOrDate>, type: RefOrNormal<GeoDate> = 'date', code: RefOrNormal<string> = Geo.getLocation() )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — Обязательная дата, временная метка либо строка даты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — Формат вывода даты; конструктор использует date по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Локаль по умолчанию берётся из `,(0,c.jsx)(t.code,{children:`Geo.getLocation()`}),` при создании. Для последующих изменений передайте ссылку на локаль. Наблюдатели даты, типа и локали используют планировщик Vue: после изменения ссылок дождитесь `,(0,c.jsx)(t.code,{children:`nextTick()`}),`. Изменения через `,(0,c.jsx)(t.code,{children:`getDatetime()`}),` уведомляют синхронно. `,(0,c.jsx)(t.code,{children:`getItem()`}),` сохраняет исходную ссылку и не перезаписывается изменениями базового класса. Для очистки наблюдателей используйте область эффектов. Присваивайте новый `,(0,c.jsx)(t.code,{children:`Date`}),` в `,(0,c.jsx)(t.code,{children:`getDate().value`}),` либо меняйте дату через `,(0,c.jsx)(t.code,{children:`getDatetime()`}),`: встроенные мутации `,(0,c.jsx)(t.code,{children:`Date`}),` сами не уведомляют Vue.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
import { effectScope, nextTick, ref } from 'vue'

const source = /*#__PURE__*/ ref('2024-02-29T12:00:00')
const code = /*#__PURE__*/ ref('en-US')
const scope = /*#__PURE__*/ effectScope()
const datetime = /*#__PURE__*/ scope.run(() => new DatetimeRef(source, 'date', code))
const formatted = /*#__PURE__*/ datetime?.locale()
source.value = '2025-01-01T00:00:00'
await nextTick()
code.value = 'vi-VN'
await nextTick()
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`исходное-состояние`,children:`Исходное состояние`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Возвращает исходную входную ссылку.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDate(): Ref<Date>`}),` — Возвращает ссылку на рабочий Date, синхронизированную с базовым классом.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDatetime(): Datetime`}),` — Возвращает изменяемую базовую утилиту для календарных операций.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`календарные-поля`,children:`Календарные поля`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getYear(): ComputedRef<number>`}),` — Возвращает полный год по местному времени.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMonth(): ComputedRef<number>`}),` — Возвращает месяц по местному времени, от 1 до 12.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDay(): ComputedRef<number>`}),` — Возвращает день месяца по местному времени.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHour(): ComputedRef<number>`}),` — Возвращает час по местному времени, от 0 до 23.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMinute(): ComputedRef<number>`}),` — Возвращает минуты по местному времени, от 0 до 59.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSecond(): ComputedRef<number>`}),` — Возвращает секунды по местному времени, от 0 до 59.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Возвращает число дней текущего месяца с учётом високосного года.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Возвращает формат часов локали: строку `,(0,c.jsx)(t.code,{children:`12`}),` или `,(0,c.jsx)(t.code,{children:`24`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Возвращает код первого дня недели локали: воскресенье — 0.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`форматирование`,children:`Форматирование`}),`
`,(0,c.jsx)(t.h4,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`locale( type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает локализованный вывод текущего типа формата, если тип не указан явно.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Формат вывода даты; конструктор использует date по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Стиль Intl либо параметры форматирования.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = /*#__PURE__*/ datetime?.locale('date', 'long')
`})}),`
`,(0,c.jsx)(t.h4,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`standard(timeZone = true as boolean): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает стандартное представление базовой утилиты для текущего типа. `,(0,c.jsx)(t.code,{children:`timeZone`}),` управляет выводом часового пояса в форматах со временем.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone = true as boolean`}),` — Выводить ли часовой пояс; по умолчанию true.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const standard = /*#__PURE__*/ datetime?.standard(false)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};