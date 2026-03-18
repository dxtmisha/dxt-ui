import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"@dxtmisha/ru/functional-basic/Classes/Hash - Состояние URL Hash"}),`
`,n.jsx(e.h1,{id:"класс-hash",children:"Класс Hash"}),`
`,n.jsxs(e.p,{children:["Статический класс для управления данными, которые хранятся в URL-хэше (",n.jsx(e.code,{children:"#"}),"). Автоматически синхронизирует состояние приложения с URL — каждый вызов ",n.jsx(e.code,{children:"set"})," обновляет строку хэша в браузере, а событие ",n.jsx(e.code,{children:"hashchange"})," обновляет внутреннее состояние."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронизация с URL"})," — Данные хранятся в человекочитаемом формате в строке хэша."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивность через watchers"})," — Метод ",n.jsx(e.code,{children:"addWatch"})," позволяет подписаться на изменение конкретной переменной."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Авто-инициализация"})," — При загрузке страницы данные автоматически считываются из URL."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умный тип"})," — Значения десериализуются из строки: числа, булевые значения и объекты восстанавливаются."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.p,{children:"Класс является статическим и инициализируется автоматически при загрузке страницы — считывает текущую строку хэша URL."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// URL: https://myapp.com/#page=2;filter=active

import { Hash } from '@dxtmisha/functional-basic'

const page = Hash.get('page')    // 2 (number)
const filter = Hash.get('filter') // 'active' (string)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get<T>(name: string, defaultValue?: T | (() => T)): T"})," — Возвращает значение переменной из хэша. Если значения нет, устанавливает его через ",n.jsx(e.code,{children:"defaultValue"})," (может быть функцией)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"set<T>(name: string, callback: T | (() => T)): void"})," — Устанавливает значение переменной и обновляет URL-хэш. Если значение не изменилось, обновление не происходит."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addWatch<T>(name: string, callback: (value: T) => void): void"})," — Подписывается на изменение конкретной переменной в хэше."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"removeWatch<T>(name: string, callback: (value: T) => void): void"})," — Отписывается от изменений конкретной переменной."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reload(): void"})," — Считывает текущий URL-хэш и синхронизирует с ним внутреннее состояние."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"чтение-и-запись",children:"Чтение и запись"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional-basic'

// Чтение с дефолтным значением
const page = Hash.get<number>('page', 1)

// Запись (URL изменится на #page=3)
Hash.set('page', 3)

// Запись через функцию
Hash.set('page', () => page + 1)
`})}),`
`,n.jsx(e.h3,{id:"подписка-на-изменения",children:"Подписка на изменения"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`Hash.addWatch<string>('filter', (newFilter) => {
  console.log('Фильтр изменен на:', newFilter)
})

// Отписка (callback должен быть ссылкой на ту же функцию)
Hash.removeWatch('filter', callback)
`})}),`
`,n.jsx(e.h3,{id:"управление-состоянием-страницы",children:"Управление состоянием страницы"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Инициализация фильтра с дефолтным значением
const filter = Hash.get('filter', 'all')
const sort = Hash.get('sort', 'date')

// Изменение при действии пользователя
Hash.set('filter', 'active')
// URL: #filter=active;sort=date
`})})]})}function x(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
