import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/CacheStatic - Быстрый глобальный кэш`}),`
`,(0,c.jsx)(t.h1,{id:`класс-cachestatic`,children:`Класс CacheStatic`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`⚠️ Устарел`}),` — Этот класс устарел и не рекомендуется к использованию.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Класс-обертка, предоставляющий глобально доступный статический экземпляр кэша. Он позволяет выполнять операции быстрого кэширования в любом месте во время выполнения кода без необходимости создавать экземпляр или передавать объект `,(0,c.jsx)(t.code,{children:`Cache`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальный доступ`}),` — работает как паттерн «одиночка» (singleton), используя статические методы. Это означает, что один и тот же пул кэша доступен во всем контексте приложения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Базовый механизм`}),` — внутренне делегирует все вызовы стандартному экземпляру `,(0,c.jsx)(t.code,{children:`Cache`}),`, предоставляя вам те же преимущества отслеживания зависимостей и ленивых вычислений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Удобство`}),` — идеально подходит для простых требований кэширования общих данных в нескольких не связанных между собой компонентах.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Поскольку все методы `,(0,c.jsx)(t.code,{children:`static`}),`, вам никогда не нужно вызывать `,(0,c.jsx)(t.code,{children:`new CacheStatic()`}),`. Вы взаимодействуете с классом напрямую.`]}),`
`,(0,c.jsx)(t.h2,{id:`глобальное-кэширование`,children:`Глобальное кэширование`}),`
`,(0,c.jsx)(t.h3,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Используйте статический метод `,(0,c.jsx)(t.code,{children:`get()`}),` для получения кэшированного значения или его вычисления при отсутствии.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальный идентификатор для вашей записи в глобальном кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T`}),` — функция, которая вычисляет значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей. Передача нового массива (где значения или длина отличаются) очищает кэш и вызывает пересчет.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T`}),` — закэшированное или вычисленное значение.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { CacheStatic } from '@dxtmisha/functional'

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
// НЕ будет выводить 'Вычисляем...', мгновенно вернет 500
const res2 = calculateHeavyData(5) 
`})}),`
`,(0,c.jsx)(t.h3,{id:`getasync`,children:(0,c.jsx)(t.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Асинхронная версия метода `,(0,c.jsx)(t.code,{children:`get()`}),`. Полезна, когда функция обратного вызова возвращает `,(0,c.jsx)(t.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальный идентификатор для вашей записи в глобальном кэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => Promise<T> | T`}),` — асинхронная функция, которая вычисляет значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей. Передача нового массива (где значения или длина отличаются) очищает кэш и вызывает пересчет.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — промис, который разрешается в кэшированное или вычисленное значение.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};