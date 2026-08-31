import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryFlags - Генератор подключения флагов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryflags`,children:`Класс LibraryFlags`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryFlags`}),` отвечает за формирование файлов подключения флагов стран к дизайн-системе. Он создает точку входа TypeScript для регистрации флагов в качестве иконок и JSON-файл, содержащий список всех доступных идентификаторов флагов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация подключения флагов`}),` — создает файл инициализации TypeScript, который регистрирует флаги как глобальные иконки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация списка идентификаторов`}),` — формирует JSON-файл для метаданных и автоматизированного выбора флагов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизация именования`}),` — автоматически форматирует идентификаторы флагов в соответствии с соглашением `,(0,c.jsx)(t.code,{children:`flag-[code]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая обработка`}),` — сканирует и обрабатывает все доступные флаги из медиа-библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`LibraryFlags(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — объект для работы со списком компонентов и управления записью файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Запускает процесс генерации файлов подключения флагов (TS и JSON).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-сгенерированных-файлов`,children:`Структура сгенерированных файлов`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`make`}),` формирует два основных файла для интеграции флагов в библиотеку:`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-подключение-флагов-flagsts`,children:[`1. Подключение флагов (`,(0,c.jsx)(t.code,{children:`flags.ts`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Регистрирует флаги как глобальные иконки с помощью менеджера `,(0,c.jsx)(t.code,{children:`Icons`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-ru', flags.ru)
  Icons.add('flag-us', flags.us)
}
`})}),`
`,(0,c.jsxs)(t.h3,{id:`2-идентификаторы-флагов-flagsjson`,children:[`2. Идентификаторы флагов (`,(0,c.jsx)(t.code,{children:`flags.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Простой массив строк, содержащий все сгенерированные ключи флагов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример структуры:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`["flag-ru", "flag-us"]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};