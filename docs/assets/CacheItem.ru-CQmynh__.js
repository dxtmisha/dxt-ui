import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/functional-basic/Classes/CacheItem - Управление записью кэша"}),`
`,e.jsx(n.h1,{id:"класс-cacheitem",children:"Класс CacheItem"}),`
`,e.jsxs(n.p,{children:["Внутренний движок, управляющий отдельными записями кэша. В то время как ",e.jsx(n.code,{children:"Cache"})," и ",e.jsx(n.code,{children:"CacheStatic"})," предоставляют публичные интерфейсы для извлечения кэшированных данных в вашем приложении, именно класс ",e.jsx(n.code,{children:"CacheItem"})," надежно управляет жизненным циклом, хранением и правилами инвалидации конкретного значения."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Отслеживание зависимостей"})," — поддерживает массивы сравнения, используемые для определения того, действительно ли кэшированное значение."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ленивые вычисления"})," — гарантирует, что ресурсоемкая функция обратного вызова (callback) запускается только тогда, когда это абсолютно необходимо."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Историческая память"})," — сохраняет ссылку на ранее кэшированное значение (",e.jsx(n.code,{children:"getCacheOld"}),") даже после пересчета."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Асинхронное выполнение"})," — нативно обрабатывает как синхронную (",e.jsx(n.code,{children:"getCache"}),"), так и асинхронную загрузку данных на основе ",e.jsx(n.code,{children:"Promise"})," (",e.jsx(n.code,{children:"getCacheAsync"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Обычно вы не создаете экземпляры ",e.jsx(n.code,{children:"CacheItem"})," напрямую в коде приложения. Вместо этого вы используете класс ",e.jsx(n.code,{children:"Cache"}),", который сам управляет экземплярами ",e.jsx(n.code,{children:"CacheItem"}),". Однако понимание его API полезно для сложных сценариев."]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"CacheItem(callback)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T"})," — функция, которая будет генерировать данные для кэша."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { CacheItem } from '@dxtmisha/functional'

// 1. Инициализация с функцией получения данных
const userCache = new CacheItem(() => fetchUserData())
`})}),`
`,e.jsx(n.h2,{id:"извлечение-кэша",children:"Извлечение кэша"}),`
`,e.jsx(n.h3,{id:"getcache",children:e.jsx(n.code,{children:"getCache"})}),`
`,e.jsxs(n.p,{children:["Используйте ",e.jsx(n.code,{children:"getCache"})," для получения значения. Предоставленный массив сравнения определяет необходимость пересчета."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — массив зависимостей. Если они меняются, колбэк вычисляется заново."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"T"})," — закэшированное или вычисленное значение."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Вычисляет и кэширует 1
counterCache.getCache([1])

// Возвращает закэшированную 1 (зависимости совпадают)
counterCache.getCache([1])

// Зависимости изменились на [2], вычисляет и кэширует 2
counterCache.getCache([2])
`})}),`
`,e.jsx(n.h3,{id:"getcacheasync",children:e.jsx(n.code,{children:"getCacheAsync"})}),`
`,e.jsxs(n.p,{children:["Работает точно так же, как ",e.jsx(n.code,{children:"getCache"}),", но обрабатывает возврат ",e.jsx(n.code,{children:"Promise"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — опциональный массив зависимостей."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — асинхронное значение из кэша."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => await fetch('/data').then(res => res.json()))

// Загружает из сети
const data1 = await apiCache.getCacheAsync(['v1'])

// Возвращает из кэша мгновенно
const data2 = await apiCache.getCacheAsync(['v1'])
`})}),`
`,e.jsx(n.h2,{id:"исторические-данные",children:"Исторические данные"}),`
`,e.jsx(n.h3,{id:"getcacheold",children:e.jsx(n.code,{children:"getCacheOld"})}),`
`,e.jsxs(n.p,{children:["Если происходит очистка кэша и загружаются новые данные, вы можете извлечь непосредственное предшествующее значение с помощью ",e.jsx(n.code,{children:"getCacheOld()"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"T | undefined"})," — предыдущие закэшированные данные."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`counterCache.getCache([1]) // Возвращает 1
counterCache.getCache([2]) // Возвращает 2

console.log(counterCache.getCacheOld()) // Возвращает 1
`})}),`
`,e.jsx(n.h2,{id:"внутреннее-устройство",children:"Внутреннее устройство"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CacheItem"})," опирается на внутренний метод ",e.jsx(n.code,{children:"isUpdate"})," для строгого сравнения входящего массива ",e.jsx(n.code,{children:"comparison"})," с предыдущим. Если они отличаются по длине или строгому равенству (",e.jsx(n.code,{children:"==="}),") своих элементов, кэш помечается как устаревший, и внутреннее свойство ",e.jsx(n.code,{children:"value"})," регенерируется."]})]})}function j(c={}){const{wrapper:n}={...h(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{j as default};
