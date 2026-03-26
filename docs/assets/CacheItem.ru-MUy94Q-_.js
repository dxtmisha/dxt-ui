import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/CacheItem - Управление записью кэша`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cacheitem`,children:`Класс CacheItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Внутренний движок, управляющий отдельными записями кэша. В то время как `,(0,c.jsx)(n.code,{children:`Cache`}),` и `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` предоставляют публичные интерфейсы для извлечения кэшированных данных в вашем приложении, именно класс `,(0,c.jsx)(n.code,{children:`CacheItem`}),` надежно управляет жизненным циклом, хранением и правилами инвалидации конкретного значения.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание зависимостей`}),` — поддерживает массивы сравнения, используемые для определения того, действительно ли кэшированное значение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивые вычисления`}),` — гарантирует, что ресурсоемкая функция обратного вызова (callback) запускается только тогда, когда это абсолютно необходимо.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Историческая память`}),` — сохраняет ссылку на ранее кэшированное значение (`,(0,c.jsx)(n.code,{children:`getCacheOld`}),`) даже после пересчета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронное выполнение`}),` — нативно обрабатывает как синхронную (`,(0,c.jsx)(n.code,{children:`getCache`}),`), так и асинхронную загрузку данных на основе `,(0,c.jsx)(n.code,{children:`Promise`}),` (`,(0,c.jsx)(n.code,{children:`getCacheAsync`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Обычно вы не создаете экземпляры `,(0,c.jsx)(n.code,{children:`CacheItem`}),` напрямую в коде приложения. Вместо этого вы используете класс `,(0,c.jsx)(n.code,{children:`Cache`}),`, который сам управляет экземплярами `,(0,c.jsx)(n.code,{children:`CacheItem`}),`. Однако понимание его API полезно для сложных сценариев.`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`CacheItem(callback)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — функция, которая будет генерировать данные для кэша.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional'

// 1. Инициализация с функцией получения данных
const userCache = new CacheItem(() => fetchUserData())
`})}),`
`,(0,c.jsx)(n.h2,{id:`извлечение-кэша`,children:`Извлечение кэша`}),`
`,(0,c.jsx)(n.h3,{id:`getcache`,children:(0,c.jsx)(n.code,{children:`getCache`})}),`
`,(0,c.jsxs)(n.p,{children:[`Используйте `,(0,c.jsx)(n.code,{children:`getCache`}),` для получения значения. Предоставленный массив сравнения определяет необходимость пересчета.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — массив зависимостей. Если они меняются, колбэк вычисляется заново.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — закэшированное или вычисленное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Вычисляет и кэширует 1
counterCache.getCache([1])

// Возвращает закэшированную 1 (зависимости совпадают)
counterCache.getCache([1])

// Зависимости изменились на [2], вычисляет и кэширует 2
counterCache.getCache([2])
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcacheasync`,children:(0,c.jsx)(n.code,{children:`getCacheAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Работает точно так же, как `,(0,c.jsx)(n.code,{children:`getCache`}),`, но обрабатывает возврат `,(0,c.jsx)(n.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — опциональный массив зависимостей.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — асинхронное значение из кэша.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => await fetch('/data').then(res => res.json()))

// Загружает из сети
const data1 = await apiCache.getCacheAsync(['v1'])

// Возвращает из кэша мгновенно
const data2 = await apiCache.getCacheAsync(['v1'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`исторические-данные`,children:`Исторические данные`}),`
`,(0,c.jsx)(n.h3,{id:`getcacheold`,children:(0,c.jsx)(n.code,{children:`getCacheOld`})}),`
`,(0,c.jsxs)(n.p,{children:[`Если происходит очистка кэша и загружаются новые данные, вы можете извлечь непосредственное предшествующее значение с помощью `,(0,c.jsx)(n.code,{children:`getCacheOld()`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — предыдущие закэшированные данные.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`counterCache.getCache([1]) // Возвращает 1
counterCache.getCache([2]) // Возвращает 2

console.log(counterCache.getCacheOld()) // Возвращает 1
`})}),`
`,(0,c.jsx)(n.h2,{id:`внутреннее-устройство`,children:`Внутреннее устройство`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CacheItem`}),` опирается на внутренний метод `,(0,c.jsx)(n.code,{children:`isUpdate`}),` для строгого сравнения входящего массива `,(0,c.jsx)(n.code,{children:`comparison`}),` с предыдущим. Если они отличаются по длине или строгому равенству (`,(0,c.jsx)(n.code,{children:`===`}),`) своих элементов, кэш помечается как устаревший, и внутреннее свойство `,(0,c.jsx)(n.code,{children:`value`}),` регенерируется.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};