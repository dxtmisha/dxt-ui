import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/LibraryMedia - Генератор подключения медиа-данных`}),`
`,(0,c.jsx)(n.h1,{id:`класс-librarymedia`,children:`Класс LibraryMedia`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryMedia`}),` отвечает за формирование файлов подключения медиа-данных (прежде всего иконок) и основной точки входа стилей для проекта дизайн-системы. Это обеспечивает индексацию ассетов и их оптимизацию для использования в библиотеке.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Подключение иконок`}),` — сканирует иконки и формирует механизм их асинхронной загрузки через динамические импорты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция стилей`}),` — подключает основные SCSS-файлы проекта к инструментам сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с менеджером иконок`}),` — автоматически регистрирует ассеты в глобальном менеджере `,(0,c.jsx)(n.code,{children:`Icons`}),` из функциональной библиотеки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление жизненным циклом`}),` — поддержка цепочки вызовов и чистая регистрация ассетов через автоматическую генерацию кода.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`LibraryMedia(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Запускает процесс генерации файлов подключения медиа и стилей.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-сгенерированных-файлов`,children:`Структура сгенерированных файлов`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`make`}),` формирует несколько файлов для интеграции ассетов в библиотеку:`]}),`
`,(0,c.jsxs)(n.h3,{id:`1-подключение-медиа-mediats`,children:[`1. Подключение медиа (`,(0,c.jsx)(n.code,{children:`media.ts`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Регистрирует все иконки из директории `,(0,c.jsx)(n.code,{children:`icons`}),`, используя динамические импорты для оптимизации производительности.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Профиль сгенерированного кода:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Имя:`}),` `,(0,c.jsx)(n.code,{children:`[Design]MakeIcons`}),` (например, `,(0,c.jsx)(n.code,{children:`dxtMakeIcons`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Действие:`}),` Добавляет пути к иконкам в глобальный реестр `,(0,c.jsx)(n.code,{children:`Icons`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'

// Динамические импорты для каждой иконки
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-точка-входа-стилей-stylets`,children:[`2. Точка входа стилей (`,(0,c.jsx)(n.code,{children:`style.ts`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Служит основной точкой входа SCSS, связывая специфичные стили проекта с библиотекой.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import '../styles/ProjectName/main.scss'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};