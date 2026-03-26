import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/LibraryPlugin - Генератор Vite-плагина`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryplugin`,children:`Класс LibraryPlugin`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryPlugin`}),` отвечает за создание точки входа плагина Vite для библиотеки дизайн-системы. Этот плагин обеспечивает автоматическую интеграцию компонентов, переменных стилей и конфигураций дизайна в процесс сборки Vite.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация точки входа плагина`}),` — создает стандартный файл инициализации плагина Vite.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция дизайн-системы`}),` — связывает компоненты и переменные, определенные в конфигурации дизайна, с инструментом сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое именование`}),` — автоматически генерирует имя плагина и идентификаторы на основе кода дизайн-системы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Чейнинг и гибкость`}),` — поддержка цепочки вызовов для удобной настройки библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`LibraryPlugin(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): this`}),` — Запускает процесс генерации файла плагина (`,(0,c.jsx)(n.code,{children:`plugin.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-итогового-файла`,children:`Структура итогового файла`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`make`}),` формирует файл `,(0,c.jsx)(n.code,{children:`plugin.ts`}),`, который экспортирует специальную функцию плагина Vite. Эта функция обеспечивает связь между скомпилированной библиотекой и инструментом сборки.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Профиль сгенерированной функции:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Имя:`}),` `,(0,c.jsx)(n.code,{children:`ui[Design]VitePlugin`}),` (например, `,(0,c.jsx)(n.code,{children:`uiDxtVitePlugin`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` `,(0,c.jsx)(n.code,{children:`options: PluginOptions`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Результат:`}),` Возвращает экземпляр `,(0,c.jsx)(n.code,{children:`VitePlugin`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`/**
 * Инициализирует плагин Vite для дизайн-системы.
 * @param options настройки плагина
 */
export function uiDxtVitePlugin(
  options: PluginOptions = {}
): VitePlugin {
  return new Plugin(
    designName,
    packageName,
    componentsReg,
    styleVarsReg,
    componentsList,
    'vite-plugin-dxt-ui',
    options
  ).init()
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};