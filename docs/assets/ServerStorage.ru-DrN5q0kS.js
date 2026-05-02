import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ServerStorage - Изоляция данных в SSR`}),`
`,(0,c.jsx)(n.h1,{id:`класс-serverstorage`,children:`Класс ServerStorage`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ServerStorage`}),` — это механизм для управления `,(0,c.jsx)(n.strong,{children:`изолированным глобальным состоянием`}),` в приложениях с поддержкой SSR (Server-Side Rendering).`]}),`
`,(0,c.jsx)(n.p,{children:`Класс позволяет работать с данными так же просто, как со статическими переменными, но гарантирует, что на сервере данные разных пользователей не будут смешиваться.`}),`
`,(0,c.jsx)(n.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция запросов`}),` — на сервере данные привязываются к контексту текущего HTTP-запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гидратация`}),` — возможность автоматически передавать состояние с сервера на клиент через JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность`}),` — автоматическое экранирование XSS при передаче данных.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ServerStorage } from '@dxtmisha/functional-basic'

// Сохранение данных с флагом гидратации (будут доступны на клиенте)
ServerStorage.set('theme', () => 'dark', true)

// Получение данных
const theme = ServerStorage.get('theme') // 'dark'
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы-доступа-к-данным`,children:`Методы доступа к данным`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Извлекает значение по ключу. Если оно не существует, создает его с помощью фабрики значений по умолчанию.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — уникальный ключ хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: () => T`}),` — функция, возвращающая значение по умолчанию, если оно не найдено.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydration: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, значение будет включено в JSON для передачи на клиент (по умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T`})]}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Записывает значение в хранилище.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — уникальный ключ хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: () => T`}),` — функция, возвращающая значение для сохранения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydration: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, значение будет включено в JSON для передачи на клиент (по умолчанию: `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T`})]}),`
`,(0,c.jsx)(n.h2,{id:`вспомогательные-методы-и-жизненный-цикл`,children:`Вспомогательные методы и жизненный цикл`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(listener: () => Record<string, any>): typeof ServerStorage`}),` — Инициализирует хранилище слушателем контекста. На сервере этот слушатель должен возвращать объект, уникальный для каждого запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(key: string): boolean`}),` — Проверяет наличие ключа в текущем контексте.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(key: string): void`}),` — Удаляет значение по ключу из хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setErrorStatus(hide: boolean): void`}),` — Устанавливает, нужно ли скрывать ошибки отсутствия контекста в консоли/центре ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): void`}),` — Сбрасывает хранилище, очищая все сохраненные данные и слушателя. Полезно для выполнения очистки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toString(): string`}),` — Генерирует HTML-тег `,(0,c.jsx)(n.code,{children:`<script type="application/json">`}),` со всеми данными, помеченными для гидратации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`изоляция-в-ssr`,children:`Изоляция в SSR`}),`
`,(0,c.jsxs)(n.p,{children:[`В обычных клиентских приложениях глобальное состояние принадлежит одному пользователю. Однако в среде SSR один процесс Node.js обрабатывает множество одновременных запросов. Чтобы данные пользователей не смешивались между собой (Загрязнение состояния), `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` должен быть правильно изолирован.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для этого необходимо инициализировать `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` с помощью метода `,(0,c.jsx)(n.code,{children:`init`}),`. Он принимает функцию-слушатель, которая возвращает объект данных, уникальный для контекста текущего запроса.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Важно: Правильная изоляция критична для безопасности. Без нее данные одного пользователя могут быть по ошибке переданы другому.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nodejs-asynclocalstorage`,children:`Node.js (AsyncLocalStorage)`}),`
`,(0,c.jsxs)(n.p,{children:[`Рекомендуемый способ для Node.js — использование `,(0,c.jsx)(n.code,{children:`AsyncLocalStorage`}),` для сохранения контекста на протяжении асинхронного запроса.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AsyncLocalStorage } from 'node:async_hooks'
import { ServerStorage } from '@dxtmisha/functional-basic'

const als = new AsyncLocalStorage<Record<string, any>>()

// Инициализация
ServerStorage.init(() => als.getStore() || {})

// Использование на сервере
http.createServer((req, res) => {
  als.run({}, () => {
    // Внутри этого блока все вызовы ServerStorage будут изолированы
    ServerStorage.set('requestId', () => req.id)
  })
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(n.p,{children:[`В Nuxt/Nitro изоляция управляется через контекст события `,(0,c.jsx)(n.code,{children:`h3`}),` с помощью `,(0,c.jsx)(n.code,{children:`useEvent()`}),` внутри серверного плагина.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// server/plugins/server-storage.ts
import { ServerStorage } from '@dxtmisha/functional-basic'

export default defineNitroPlugin(() => {
  ServerStorage.init(() => {
    try {
      return useEvent().context
    } catch {
      return {}
    }
  })
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`гидратация-передача-данных-клиенту`,children:`Гидратация (Передача данных клиенту)`}),`
`,(0,c.jsx)(n.p,{children:`Гидратация — это процесс передачи состояния приложения, установленного на сервере, клиенту. Это позволяет браузеру «подхватить» данные там, где закончил сервер, обеспечивая согласованность и предотвращая повторные запросы данных или «мерцание» страницы при загрузке.`}),`
`,(0,c.jsx)(n.h3,{id:`1-пометка-данных-для-гидратации`,children:`1. Пометка данных для гидратации`}),`
`,(0,c.jsxs)(n.p,{children:[`При использовании `,(0,c.jsx)(n.code,{children:`set()`}),` или `,(0,c.jsx)(n.code,{children:`get()`}),` передайте `,(0,c.jsx)(n.code,{children:`true`}),` третьим параметром (`,(0,c.jsx)(n.code,{children:`hydration`}),`). Только значения, помеченные таким образом, будут переданы на клиент.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Установка на сервере
ServerStorage.set('userSettings', () => ({ fontSize: 16 }), true)
`})}),`
`,(0,c.jsx)(n.h3,{id:`2-вставка-состояния-в-html`,children:`2. Вставка состояния в HTML`}),`
`,(0,c.jsxs)(n.p,{children:[`На сервере необходимо вызвать `,(0,c.jsx)(n.code,{children:`ServerStorage.toString()`}),` и вставить результат в шаблон страницы (обычно в самый конец тега `,(0,c.jsx)(n.code,{children:`<body>`}),`, перед скриптами приложения).`]}),`
`,(0,c.jsx)(n.p,{children:`Этот метод генерирует специальный тег script:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<script id="__ui:server:storage:id__" type="application/json">
  {"userSettings":{"fontSize":16}}
<\/script>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};