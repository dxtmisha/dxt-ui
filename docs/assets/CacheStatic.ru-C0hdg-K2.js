import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/CacheStatic - Быстрый глобальный кэш`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cachestatic`,children:`Класс CacheStatic`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс-обертка, предоставляющий глобально доступный статический экземпляр кэша. Он позволяет выполнять операции быстрого кэширования в любом месте во время выполнения кода без необходимости создавать экземпляр или передавать объект `,(0,c.jsx)(n.code,{children:`Cache`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальный доступ`}),` — работает как паттерн «одиночка» (singleton), используя статические методы. Это означает, что один и тот же пул кэша доступен во всем контексте приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Базовый механизм`}),` — внутренне делегирует все вызовы стандартному экземпляру `,(0,c.jsx)(n.code,{children:`Cache`}),`, предоставляя вам те же преимущества отслеживания зависимостей и ленивых вычислений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Удобство`}),` — идеально подходит для простых требований кэширования общих данных в нескольких не связанных между собой компонентах.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Поскольку все методы `,(0,c.jsx)(n.code,{children:`static`}),`, вам никогда не нужно вызывать `,(0,c.jsx)(n.code,{children:`new CacheStatic()`}),`. Вы взаимодействуете с классом напрямую.`]}),`
`,(0,c.jsx)(n.h2,{id:`глобальное-кэширование`,children:`Глобальное кэширование`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте статический метод `,(0,c.jsx)(n.code,{children:`get()`}),` для получения кэшированного значения или его вычисления при отсутствии.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальный идентификатор для вашей записи в глобальном кэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — функция, которая вычисляет значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей. Передача нового массива (где значения или длина отличаются) очищает кэш и вызывает пересчет.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — закэшированное или вычисленное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CacheStatic } from '@dxtmisha/functional'

// Файл A.js
function calculateHeavyData(id) {
  return CacheStatic.get(
    \`heavy_data_\${id}\`,
    () => {
      console.log('Вычисляем...')
      return id * 100
    },
    [id] // Зависимость
  )
}

// Выведет 'Вычисляем...' и вернет 500
const res1 = calculateHeavyData(5) 

// Файл B.js
// Та же функция, тот же id. Попадает в глобальный кэш.
// НЕ будет выводить 'Вычисляем...', мгновенно вернет 500
const res2 = calculateHeavyData(5) 
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};