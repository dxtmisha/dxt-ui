import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Icons - Управление Иконками`}),`
`,(0,c.jsx)(n.h1,{id:`класс-icons`,children:`Класс Icons`}),`
`,(0,c.jsxs)(n.p,{children:[`Статический класс для управления реестром иконок приложения. Предоставляет механизм регистрации, ленивой загрузки и получения SVG-иконок. Иконки хранятся в глобальном объекте `,(0,c.jsx)(n.code,{children:`window`}),`, чтобы быть доступными между разными экземплярами библиотеки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальный реестр`}),` — Использует `,(0,c.jsx)(n.code,{children:`window.__UI_ICON`}),` для хранения иконок, обеспечивая единый реестр даже при нескольких экземплярах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивая загрузка`}),` — Метод `,(0,c.jsx)(n.code,{children:`addLoad`}),` регистрирует иконку как «загружается»; `,(0,c.jsx)(n.code,{children:`get`}),` будет ждать ее появления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие типы`}),` — Иконка может быть строкой, `,(0,c.jsx)(n.code,{children:`Promise`}),` или функцией, возвращающей `,(0,c.jsx)(n.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический URL`}),` — Иконки с префиксом `,(0,c.jsx)(n.code,{children:`@`}),` разворачиваются в полный URL на основе базового `,(0,c.jsx)(n.code,{children:`url`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс является статическим и не требует создания экземпляра. Базовый URL настраивается через `,(0,c.jsx)(n.code,{children:`setUrl`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// Изменить базовый путь к иконкам
Icons.setUrl('/assets/svg/')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`регистрация-иконок`,children:`Регистрация иконок`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(index: string, file: IconsItem): void`}),` — Регистрирует иконку по имени. `,(0,c.jsx)(n.code,{children:`file`}),` может быть строкой-путем, `,(0,c.jsx)(n.code,{children:`Promise`}),` или фабричной функцией.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addLoad(index: string): void`}),` — Помечает иконку как «в процессе загрузки» (маркер `,(0,c.jsx)(n.code,{children:`--LOAD--`}),`). `,(0,c.jsx)(n.code,{children:`get`}),` будет ожидать её появления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addGlobal(index: string, file: string): void`}),` — Регистрирует иконку с глобальным URL (базовый URL + `,(0,c.jsx)(n.code,{children:`file`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addByList(list: Record<string, IconsItem>): void`}),` — Массово регистрирует иконки из объекта.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`получение-иконок`,children:`Получение иконок`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(index: string, url?: string, wait?: number): Promise<string>`}),` — Возвращает содержимое или путь к иконке по имени. Если иконка помечена как «загружается», ожидает её появления (с таймаутом по умолчанию 3 мин).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(index: string): boolean`}),` — Проверяет, зарегистрирована ли иконка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNameList(): string[]`}),` — Возвращает список имен всех зарегистрированных иконок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrlGlobal(): string`}),` — Возвращает текущий базовый URL иконок.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): void`}),` — Изменяет базовый путь для хранения иконок.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`система-загрузки`,children:`Система загрузки`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Icons`}),` поддерживает механизм асинхронного ожидания. Это позволяет запрашивать иконку до того, как она будет фактически загружена или зарегистрирована в системе.`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Регистрация ожидания`}),`: С помощью метода `,(0,c.jsx)(n.code,{children:`addLoad(name)`}),` иконка помечается специальным маркером `,(0,c.jsx)(n.code,{children:`--LOAD--`}),`. Это указывает системе, что иконка появится позже.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Процесс ожидания`}),`: Если вызвать `,(0,c.jsx)(n.code,{children:`get(name)`}),` для иконки, которая находится в состоянии загрузки, метод не вернет ошибку, а перейдет в режим ожидания. Он будет проверять реестр каждые 320 мс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Завершение загрузки`}),`: Как только иконка будет добавлена через `,(0,c.jsx)(n.code,{children:`add(name, ...)`}),`, все ожидающие вызовы `,(0,c.jsx)(n.code,{children:`get`}),` автоматически разрешатся и вернут содержимое этой иконки.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Этот механизм критически важен для распределенных систем, где компоненты могут запрашивать ресурсы до завершения инициализации медиа-базы.`}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`регистрация-и-использование-иконок`,children:`Регистрация и использование иконок`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// Регистрация строкой
Icons.add('arrow', '<svg>...</svg>')

// Регистрация через Promise (динамический импорт)
Icons.add('user', import('./icons/user.svg'))

// Регистрация через фабричную функцию
Icons.add('star', () => import('./icons/star.svg'))

// Получение
const svgContent = await Icons.get('arrow')
`})}),`
`,(0,c.jsx)(n.h3,{id:`массовая-регистрация`,children:`Массовая регистрация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`ленивая-загрузка`,children:`Ленивая загрузка`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Пометить как загружающуюся
Icons.addLoad('dynamic-icon')

// Где-то позже загружаем и регистрируем
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() подождет, пока иконка появится в реестре
const svg = await Icons.get('dynamic-icon')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};