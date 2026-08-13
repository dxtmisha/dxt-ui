import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryPlugin - Генератор Vite-плагина`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryplugin`,children:`Класс LibraryPlugin`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryPlugin`}),` отвечает за создание точки входа плагина Vite для библиотеки дизайн-системы. Этот плагин обеспечивает автоматическую интеграцию компонентов, переменных стилей и конфигураций дизайна в процесс сборки Vite.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация точки входа плагина`}),` — создает стандартный файл инициализации плагина Vite.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция дизайн-системы`}),` — связывает компоненты и переменные, определенные в конфигурации дизайна, с инструментом сборки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое именование`}),` — автоматически генерирует имя плагина и идентификаторы на основе кода дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чейнинг и гибкость`}),` — поддержка цепочки вызовов для удобной настройки библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`LibraryPlugin(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — Запускает процесс генерации файла плагина (`,(0,c.jsx)(t.code,{children:`plugin.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-итогового-файла`,children:`Структура итогового файла`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`make`}),` формирует файл `,(0,c.jsx)(t.code,{children:`plugin.ts`}),`, который экспортирует специальную функцию плагина Vite. Эта функция обеспечивает связь между скомпилированной библиотекой и инструментом сборки.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Профиль сгенерированной функции:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Имя:`}),` `,(0,c.jsx)(t.code,{children:`ui[Design]VitePlugin`}),` (например, `,(0,c.jsx)(t.code,{children:`uiDxtVitePlugin`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Параметры:`}),` `,(0,c.jsx)(t.code,{children:`options: PluginOptions`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Результат:`}),` Возвращает экземпляр `,(0,c.jsx)(t.code,{children:`VitePlugin`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`/**
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};