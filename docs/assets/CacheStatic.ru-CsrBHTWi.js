import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional-basic/Classes/CacheStatic - Быстрый глобальный кэш"}),`
`,n.jsx(e.h1,{id:"класс-cachestatic",children:"Класс CacheStatic"}),`
`,n.jsxs(e.p,{children:["Класс-обертка, предоставляющий глобально доступный статический экземпляр кэша. Он позволяет выполнять операции быстрого кэширования в любом месте во время выполнения кода без необходимости создавать экземпляр или передавать объект ",n.jsx(e.code,{children:"Cache"}),"."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальный доступ"})," — работает как паттерн «одиночка» (singleton), используя статические методы. Это означает, что один и тот же пул кэша доступен во всем контексте приложения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Базовый механизм"})," — внутренне делегирует все вызовы стандартному экземпляру ",n.jsx(e.code,{children:"Cache"}),", предоставляя вам те же преимущества отслеживания зависимостей и ленивых вычислений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Удобство"})," — идеально подходит для простых требований кэширования общих данных в нескольких не связанных между собой компонентах."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Поскольку все методы ",n.jsx(e.code,{children:"static"}),", вам никогда не нужно вызывать ",n.jsx(e.code,{children:"new CacheStatic()"}),". Вы взаимодействуете с классом напрямую."]}),`
`,n.jsx(e.h2,{id:"глобальное-кэширование",children:"Глобальное кэширование"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsxs(e.p,{children:["Используйте статический метод ",n.jsx(e.code,{children:"get()"})," для получения кэшированного значения или его вычисления при отсутствии."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — уникальный идентификатор для вашей записи в глобальном кэше."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: () => T"})," — функция, которая вычисляет значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison?: any[]"})," — опциональный массив зависимостей. Передача нового массива (где значения или длина отличаются) очищает кэш и вызывает пересчет."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T"})," — закэшированное или вычисленное значение."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { CacheStatic } from '@dxtmisha/functional'

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
`})})]})}function x(c={}){const{wrapper:e}={...i(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(s,{...c})}):s(c)}export{x as default};
