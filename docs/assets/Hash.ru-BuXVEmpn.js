import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Hash - Состояние URL Hash`}),`
`,(0,c.jsx)(n.h1,{id:`класс-hash`,children:`Класс Hash`}),`
`,(0,c.jsxs)(n.p,{children:[`Статический класс для управления данными, которые хранятся в URL-хэше (`,(0,c.jsx)(n.code,{children:`#`}),`). Автоматически синхронизирует состояние приложения с URL — каждый вызов `,(0,c.jsx)(n.code,{children:`set`}),` обновляет строку хэша в браузере, а событие `,(0,c.jsx)(n.code,{children:`hashchange`}),` обновляет внутреннее состояние.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация с URL`}),` — Данные хранятся в человекочитаемом формате в строке хэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность через watchers`}),` — Метод `,(0,c.jsx)(n.code,{children:`addWatch`}),` позволяет подписаться на изменение конкретной переменной.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Авто-инициализация`}),` — При загрузке страницы данные автоматически считываются из URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умный тип`}),` — Значения десериализуются из строки: числа, булевые значения и объекты восстанавливаются.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Класс является статическим и инициализируется автоматически при загрузке страницы — считывает текущую строку хэша URL.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// URL: https://myapp.com/#page=2;filter=active

import { Hash } from '@dxtmisha/functional-basic'

const page = Hash.get('page')    // 2 (number)
const filter = Hash.get('filter') // 'active' (string)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Возвращает значение переменной из хэша. Если значения нет, устанавливает его через `,(0,c.jsx)(n.code,{children:`defaultValue`}),` (может быть функцией).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(name: string, callback: T | (() => T)): void`}),` — Устанавливает значение переменной и обновляет URL-хэш. Если значение не изменилось, обновление не происходит.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addWatch<T>(name: string, callback: (value: T) => void): void`}),` — Подписывается на изменение конкретной переменной в хэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeWatch<T>(name: string, callback: (value: T) => void): void`}),` — Отписывается от изменений конкретной переменной.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reload(): void`}),` — Считывает текущий URL-хэш и синхронизирует с ним внутреннее состояние.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`чтение-и-запись`,children:`Чтение и запись`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Hash } from '@dxtmisha/functional-basic'

// Чтение с дефолтным значением
const page = Hash.get<number>('page', 1)

// Запись (URL изменится на #page=3)
Hash.set('page', 3)

// Запись через функцию
Hash.set('page', () => page + 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`подписка-на-изменения`,children:`Подписка на изменения`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Hash.addWatch<string>('filter', (newFilter) => {
  console.log('Фильтр изменен на:', newFilter)
})

// Отписка (callback должен быть ссылкой на ту же функцию)
Hash.removeWatch('filter', callback)
`})}),`
`,(0,c.jsx)(n.h3,{id:`управление-состоянием-страницы`,children:`Управление состоянием страницы`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Инициализация фильтра с дефолтным значением
const filter = Hash.get('filter', 'all')
const sort = Hash.get('sort', 'date')

// Изменение при действии пользователя
Hash.set('filter', 'active')
// URL: #filter=active;sort=date
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};