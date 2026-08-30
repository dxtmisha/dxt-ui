import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryTypes - Генератор определений типов Vue`}),`
`,(0,c.jsx)(t.h1,{id:`класс-librarytypes`,children:`Класс LibraryTypes`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryTypes`}),` отвечает за генерацию файлов глобальных определений типов для компонентов Vue. Это обеспечивает полную поддержку IDE и проверку типов для компонентов дизайн-системы, используемых глобально в приложении Vue.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка глобальных компонентов`}),` — генерирует блоки `,(0,c.jsx)(t.code,{children:`declare module`}),` для `,(0,c.jsx)(t.code,{children:`@vue/runtime-core`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сопоставление типов`}),` — автоматически связывает программные имена компонентов с типами соответствующих `,(0,c.jsx)(t.code,{children:`.vue`}),` файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Улучшение DX`}),` — включает IntelliSense и валидацию пропсов для компонентов дизайн-системы в шаблонах Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическое разрешение путей`}),` — корректно вычисляет пути к исходным кодам компонентов на основе конфигурации дизайн-системы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`LibraryTypes(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Запускает процесс генерации файла глобальных определений типов (`,(0,c.jsx)(t.code,{children:`types.d.ts`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-сгенерированного-файла`,children:`Структура сгенерированного файла`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`make`}),` формирует файл `,(0,c.jsx)(t.code,{children:`types`}),` (обычно `,(0,c.jsx)(t.code,{children:`types.d.ts`}),`), который расширяет глобальный реестр компонентов Vue.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Профиль сгенерированного кода:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модуль:`}),` `,(0,c.jsx)(t.code,{children:`@vue/runtime-core`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интерфейс:`}),` `,(0,c.jsx)(t.code,{children:`GlobalComponents`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Результат:`}),` Сопоставление всех компонентов библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};