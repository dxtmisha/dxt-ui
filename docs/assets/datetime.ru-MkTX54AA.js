import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Работа с датами`}),`
`,(0,c.jsx)(n.h1,{id:`работа-с-датами`,children:`Работа с датами`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Datetime`}),` — это продвинутый инструмент для манипуляции, навигации и локализованного форматирования дат. Он расширяет стандартный `,(0,c.jsx)(n.code,{children:`Date`}),`, добавляя умные методы перемещения (по дням, неделям, месяцам) и бесшовную интеграцию с системой интернационализации.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Инициализация (из строки, числа или объекта Date)
const date = new Datetime('2024-03-21')

// 2. Локализованное форматирование
date.locale()           // '21.03.2024' (зависит от Geo)
date.localeMonth('long') // 'март'

// 3. Получение часового пояса
date.getTimeZone() // '+03:00'
`})}),`
`,(0,c.jsx)(n.h2,{id:`манипуляция-и-сдвиги`,children:`Манипуляция и сдвиги`}),`
`,(0,c.jsxs)(n.p,{children:[`Методы `,(0,c.jsx)(n.code,{children:`moveBy...`}),` позволяют изменять дату относительно текущего значения. Все методы поддерживают цепочки вызовов (chaining).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const date = new Datetime()

// Сдвиг на 2 года вперед и 1 месяц назад
date.moveByYear(2).moveByMonth(-1)

// Установка конкретных значений
date.setDay(15).setHour(12)
`})}),`
`,(0,c.jsx)(n.h2,{id:`навигация`,children:`Навигация`}),`
`,(0,c.jsx)(n.p,{children:`Специальные методы для быстрого перехода к границам периодов (начало месяца, следующая неделя и т.д.).`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const date = new Datetime()

// Переход к первому дню текущего месяца
date.moveDayFirst()

// Переход к первому дню следующего месяца
date.moveMonthNext()

// Переход к первому дню недели (учитывает локаль)
date.moveWeekdayFirst()
`})}),`
`,(0,c.jsx)(n.h2,{id:`клонирование-иммутабельность`,children:`Клонирование (Иммутабельность)`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вам нужно получить измененную дату, не меняя исходный объект, используйте методы `,(0,c.jsx)(n.code,{children:`clone...`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const start = new Datetime()
const nextMonth = start.cloneMonthNext() // Новый объект Datetime

console.log(start.locale())     // Сегодня
console.log(nextMonth.locale()) // +1 месяц
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};