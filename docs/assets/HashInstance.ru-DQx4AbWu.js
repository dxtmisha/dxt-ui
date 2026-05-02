import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/HashInstance - Экземпляр URL Hash`}),`
`,(0,c.jsx)(n.h1,{id:`класс-hashinstance`,children:`Класс HashInstance`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`HashInstance`}),` — это основной класс, реализующий логику управления данными в URL-хэше. Он обеспечивает хранение состояния, механизмы подписки на изменения и синхронизацию с браузерным API.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете использовать этот класс напрямую, если вам требуется изолированное управление хэшем, отличное от глобального состояния `,(0,c.jsx)(n.code,{children:`Hash`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изолированное состояние`}),` — Хранит свой набор переменных хэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка цепочки вызовов`}),` — Большинство методов возвращают `,(0,c.jsx)(n.code,{children:`this`}),`, позволяя писать компактный код.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая синхронизация`}),` — При инициализации считывает данные из URL и подписывается на событие `,(0,c.jsx)(n.code,{children:`hashchange`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR-совместимость`}),` — Безопасно работает в серверном окружении, используя заглушки для DOM API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для создания экземпляра используйте конструктор `,(0,c.jsx)(n.code,{children:`HashInstance()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { HashInstance } from '@dxtmisha/functional-basic'

const myHash = new HashInstance()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`чтение-и-запись`,children:`Чтение и запись`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Возвращает значение переменной. Если её нет, устанавливает `,(0,c.jsx)(n.code,{children:`defaultValue`}),` и возвращает его.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(name: string, callback: T | (() => T)): this`}),` — Обновляет значение переменной и синхронизирует URL.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`наблюдение-watchers`,children:`Наблюдение (Watchers)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addWatch<T>(name: string, callback: (value: T) => void): this`}),` — Добавляет обработчик изменения переменной.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeWatch<T>(name: string, callback: (value: T) => void): this`}),` — Удаляет обработчик.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reload(): this`}),` — Обновляет внутреннее состояние из текущего URL-хэша.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`использование-изолированного-экземпляра`,children:`Использование изолированного экземпляра`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const searchHash = new HashInstance()

// Подписка
searchHash.addWatch('query', (q) => {
  console.log('Поиск:', q)
})

// Установка значения (обновит URL)
searchHash.set('query', 'smartphones')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};