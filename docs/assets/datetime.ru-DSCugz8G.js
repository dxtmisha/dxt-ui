import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/5. Работа с датами`}),`
`,(0,c.jsx)(t.h1,{id:`работа-с-датами`,children:`Работа с датами`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`Datetime`}),` — это продвинутый инструмент для манипуляции, навигации и локализованного форматирования дат. Он расширяет стандартный `,(0,c.jsx)(t.code,{children:`Date`}),`, добавляя умные методы перемещения (по дням, неделям, месяцам) и бесшовную интеграцию с системой интернационализации.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Инициализация (из строки, числа или объекта Date)
const date = new Datetime('2024-03-21')

// 2. Локализованное форматирование
date.locale()           // '21.03.2024' (зависит от Geo)
date.localeMonth('long') // 'март'

// 3. Получение часового пояса
date.getTimeZone() // '+03:00'
`})}),`
`,(0,c.jsx)(t.h2,{id:`манипуляция-и-сдвиги`,children:`Манипуляция и сдвиги`}),`
`,(0,c.jsxs)(t.p,{children:[`Методы `,(0,c.jsx)(t.code,{children:`moveBy...`}),` позволяют изменять дату относительно текущего значения. Все методы поддерживают цепочки вызовов (chaining).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const date = new Datetime()

// Сдвиг на 2 года вперед и 1 месяц назад
date.moveByYear(2).moveByMonth(-1)

// Установка конкретных значений
date.setDay(15).setHour(12)
`})}),`
`,(0,c.jsx)(t.h2,{id:`навигация`,children:`Навигация`}),`
`,(0,c.jsx)(t.p,{children:`Специальные методы для быстрого перехода к границам периодов (начало месяца, следующая неделя и т.д.).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const date = new Datetime()

// Переход к первому дню текущего месяца
date.moveDayFirst()

// Переход к первому дню следующего месяца
date.moveMonthNext()

// Переход к первому дню недели (учитывает локаль)
date.moveWeekdayFirst()
`})}),`
`,(0,c.jsx)(t.h2,{id:`клонирование-иммутабельность`,children:`Клонирование (Иммутабельность)`}),`
`,(0,c.jsxs)(t.p,{children:[`Если вам нужно получить измененную дату, не меняя исходный объект, используйте методы `,(0,c.jsx)(t.code,{children:`clone...`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const start = new Datetime()
const nextMonth = start.cloneMonthNext() // Новый объект Datetime

console.log(start.locale())     // Сегодня
console.log(nextMonth.locale()) // +1 месяц
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};